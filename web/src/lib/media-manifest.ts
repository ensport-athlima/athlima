/**
 * The pipeline's manifest (scripts/build-media.ts → src/generated/media-manifest.json) as ImageAssets.
 * The manifest is a build product: `npm run media:build` writes it, and dev, typecheck and build run
 * that first. Empty slots are simply absent from it.
 */
import manifest from "@/generated/media-manifest.json"
import type { SlotName } from "@/content/media"
import type { ImageAsset } from "@/lib/media"

interface ManifestEntry {
  width: number
  height: number
  src: string
  widths: number[]
  srcset: { avif: string; webp: string }
  blur: string
  focal: { x: number; y: number } | null
  impression: boolean
  alt: string
}

const entries = manifest as Partial<Record<SlotName, ManifestEntry>>

export function manifestAsset(name: SlotName): ImageAsset | null {
  const e = entries[name]
  if (!e) return null
  return {
    kind: "image",
    src: e.src,
    alt: e.alt,
    width: e.width,
    height: e.height,
    focal: e.focal ?? undefined,
    sources: { avif: e.srcset.avif, webp: e.srcset.webp, widths: e.widths },
    blur: e.blur,
    impression: e.impression,
  }
}
