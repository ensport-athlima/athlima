/**
 * THE IMAGE PIPELINE — 05_MEDIA/photography/*.png → public/media/ (AVIF + WebP at the responsive
 * widths) + src/generated/media-manifest.json (slot → srcset, intrinsic size, blur placeholder).
 *
 * The registry (src/content/media.ts) says which file fills which slot; this script never guesses.
 * A file in the folder that no slot names is listed and left alone. A slot whose named file is
 * missing fails the build. Nothing is ever upscaled: the rungs stop at the frame's own width, and a
 * frame below the brief's minimum long edge is recorded as `belowSpec` in the manifest and printed.
 *
 * Runs before dev, typecheck and build (package.json); incremental — a frame whose hash is already on
 * disk is skipped, and stale derivatives of a replaced frame are removed. The derivatives are mirrored
 * into .next/cache/media, which Vercel keeps between builds, so only a changed frame is re-encoded on a
 * deploy (a cold encode of 24 frames is ~5 minutes on a 2-core build machine). The derivatives and the
 * manifest are build products and are not committed; the sources and this script are.
 *
 *   npx tsx scripts/build-media.ts            build what is missing
 *   npx tsx scripts/build-media.ts --force    rebuild everything
 */
import { createHash } from "node:crypto"
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"
import { mediaSlots, slotNames, type SlotName } from "../src/content/media"

const ROOT = path.resolve(import.meta.dirname, "..")
const SOURCE_DIR = path.resolve(ROOT, "../05_MEDIA/photography")
const OUT_DIR = path.join(ROOT, "public/media")
/** Survives between Vercel builds (only .next/cache does); public/ is rebuilt from it. */
const CACHE_DIR = path.join(ROOT, ".next/cache/media")
const MANIFEST = path.join(ROOT, "src/generated/media-manifest.json")
const PUBLIC_PREFIX = "/media"

/** performance.md §3 — the responsive rungs. A frame narrower than a rung stops at its own width. */
const WIDTHS = [640, 1024, 1536, 2048, 3000]
/** Bump when the encoder settings change, so every derivative is rebuilt. */
const PIPELINE_VERSION = 1
const AVIF = { quality: 50, effort: 4 }
const WEBP = { quality: 78, effort: 4 }
const BLUR_WIDTH = 16

export interface ManifestEntry {
  /** The file this was built from, relative to the repository root, and its hash. */
  source: { file: string; hash: string; width: number; height: number }
  /** The crop applied, in source pixels, when the registry declared one. */
  crop: { left: number; top: number; width: number; height: number } | null
  /** Intrinsic size of the frame the site uses (after the crop). */
  width: number
  height: number
  /** The widest rung — the `src` for browsers without srcset, and the preload target. */
  src: string
  widths: number[]
  srcset: { avif: string; webp: string }
  /** A 16-px WebP as a data URI — the ground under the image while it loads. */
  blur: string
  focal: { x: number; y: number } | null
  impression: boolean
  alt: string
  /** The brief's minimum for the slot against the delivered long edge, when the delivery falls short. */
  belowSpec: { delivered: number; required: number } | null
}

export type MediaManifest = Partial<Record<SlotName, ManifestEntry>>

const force = process.argv.includes("--force")

function fail(message: string): never {
  console.error(`\nbuild-media: ${message}\n`)
  process.exit(1)
}

async function buildSlot(name: SlotName): Promise<ManifestEntry | null> {
  const spec = mediaSlots[name]
  if (!spec.source) return null
  const file = path.join(SOURCE_DIR, spec.source.file)
  if (!existsSync(file)) fail(`slot "${name}" names ${spec.source.file}, which is not in 05_MEDIA/photography/.`)

  const bytes = readFileSync(file)
  const meta = await sharp(bytes).metadata()
  const sw = meta.width ?? 0
  const sh = meta.height ?? 0
  if (!sw || !sh) fail(`${spec.source.file} has no readable dimensions.`)

  const c = spec.source.crop
  const crop = c
    ? {
        left: Math.round(c.x * sw),
        top: Math.round(c.y * sh),
        width: Math.round(c.w * sw),
        height: Math.round(c.h * sh),
      }
    : null
  const width = crop ? crop.width : sw
  const height = crop ? crop.height : sh

  const hash = createHash("sha1")
    .update(bytes)
    .update(JSON.stringify({ crop, v: PIPELINE_VERSION }))
    .digest("hex")
    .slice(0, 10)
  const base = `${name}.${hash}`

  // Rungs never exceed the frame; the frame's own width is always the last rung.
  const widths = [...WIDTHS.filter((w) => w < width), width]

  const outFile = (w: number, ext: "avif" | "webp") => path.join(OUT_DIR, `${base}.${w}.${ext}`)
  const outUrl = (w: number, ext: "avif" | "webp") => `${PUBLIC_PREFIX}/${base}.${w}.${ext}`

  // Remove derivatives of an earlier delivery or crop of this slot.
  for (const f of readdirSync(OUT_DIR)) {
    if (f.startsWith(`${name}.`) && !f.startsWith(`${base}.`)) rmSync(path.join(OUT_DIR, f))
  }

  const frame = () => (crop ? sharp(bytes).extract(crop) : sharp(bytes))
  let built = 0
  for (const w of widths) {
    for (const ext of ["avif", "webp"] as const) {
      const target = outFile(w, ext)
      if (!force && existsSync(target) && statSync(target).size > 0) continue
      const pipeline = frame().resize({ width: w, withoutEnlargement: true })
      await (ext === "avif" ? pipeline.avif(AVIF) : pipeline.webp(WEBP)).toFile(target)
      built++
    }
  }

  const blurBuffer = await frame().resize({ width: BLUR_WIDTH }).webp({ quality: 40 }).toBuffer()
  const blur = `data:image/webp;base64,${blurBuffer.toString("base64")}`

  const longEdge = Math.max(sw, sh)
  const belowSpec = longEdge < spec.minLongEdge ? { delivered: longEdge, required: spec.minLongEdge } : null

  const status = built ? `built ${built} files` : "up to date"
  const spec_ = belowSpec ? `  BELOW SPEC ${longEdge} < ${spec.minLongEdge}` : ""
  const crop_ = crop ? `  cropped to ${width}×${height}` : ""
  console.log(`  ${name.padEnd(24)} ${String(sw).padStart(4)}×${sh}  ${status}${crop_}${spec_}`)

  return {
    source: { file: `05_MEDIA/photography/${spec.source.file}`, hash, width: sw, height: sh },
    crop,
    width,
    height,
    src: outUrl(width, "webp"),
    widths,
    srcset: {
      avif: widths.map((w) => `${outUrl(w, "avif")} ${w}w`).join(", "),
      webp: widths.map((w) => `${outUrl(w, "webp")} ${w}w`).join(", "),
    },
    blur,
    focal: spec.source.focal ?? null,
    impression: spec.source.impression,
    alt: spec.source.alt,
    belowSpec,
  }
}

/** Copy every file in `from` into `to` that `to` does not already have. */
function mirror(from: string, to: string) {
  mkdirSync(to, { recursive: true })
  if (!existsSync(from)) return 0
  let n = 0
  for (const f of readdirSync(from)) {
    const target = path.join(to, f)
    if (existsSync(target) && statSync(target).size > 0) continue
    copyFileSync(path.join(from, f), target)
    n++
  }
  return n
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  mkdirSync(path.dirname(MANIFEST), { recursive: true })
  const restored = mirror(CACHE_DIR, OUT_DIR)
  if (restored) console.log(`build-media: restored ${restored} files from the build cache`)

  const onDisk = existsSync(SOURCE_DIR) ? readdirSync(SOURCE_DIR).filter((f) => /\.(png|jpe?g|tiff?)$/i.test(f)) : []
  const declared = new Set(slotNames.map((n) => mediaSlots[n].source?.file).filter(Boolean))
  const unmatched = onDisk.filter((f) => !declared.has(f))

  console.log(`build-media: ${declared.size} slot${declared.size === 1 ? "" : "s"} with a source, ${slotNames.length - declared.size} empty`)
  const manifest: MediaManifest = {}
  for (const name of slotNames) {
    const entry = await buildSlot(name)
    if (entry) manifest[name] = entry
  }

  // Derivatives of slots that no longer have a source.
  for (const f of readdirSync(OUT_DIR)) {
    const slot = f.split(".").slice(0, 2).join(".") as SlotName
    if (!manifest[slot]) rmSync(path.join(OUT_DIR, f))
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n")
  mirror(OUT_DIR, CACHE_DIR)
  for (const f of readdirSync(CACHE_DIR)) if (!existsSync(path.join(OUT_DIR, f))) rmSync(path.join(CACHE_DIR, f))

  const below = Object.entries(manifest).filter(([, e]) => e.belowSpec)
  if (below.length) {
    console.log(`\n  ${below.length} frame${below.length === 1 ? "" : "s"} below the brief's minimum (asset-brief.md §3) — served at delivered size, never upscaled.`)
  }
  if (unmatched.length) {
    console.log(`\n  Not declared by any slot in src/content/media.ts (left alone):`)
    for (const f of unmatched) console.log(`    ${f}`)
  }
  console.log(`\n  manifest → ${path.relative(ROOT, MANIFEST)}`)
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)))
