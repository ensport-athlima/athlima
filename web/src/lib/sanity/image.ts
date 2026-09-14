/**
 * Image URLs from Sanity's CDN, built by hand — the asset ref carries everything the URL needs, and a
 * builder dependency is not worth its bytes. Hotspot/crop from the Studio become a focal-point crop
 * (`fp-x`/`fp-y`, `fit=crop`), so responsive crops never decapitate the subject (05_MEDIA/README.md).
 */
import { env } from "@/lib/env"
import type { ImageRef } from "./schemas"

/** `image-<id>-<w>x<h>-<format>` → `https://cdn.sanity.io/images/<project>/<dataset>/<id>-<w>x<h>.<format>` */
export function sanityImageUrl(image: Pick<ImageRef, "ref" | "hotspot">, width: number, height?: number, quality = 75): string {
  const m = image.ref.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/)
  if (!m) throw new Error(`[sanity] not an image ref: ${image.ref}`)
  const [, id, w, h, format] = m
  const params = new URLSearchParams({ w: String(width), q: String(quality), auto: "format" })
  if (height) {
    params.set("h", String(height))
    params.set("fit", "crop")
    if (image.hotspot) {
      params.set("fp-x", image.hotspot.x.toFixed(3))
      params.set("fp-y", image.hotspot.y.toFixed(3))
      params.set("crop", "focalpoint")
    }
  }
  return `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${w}x${h}.${format}?${params}`
}

/** The intrinsic size encoded in the ref, for width/height attributes. */
export function sanityImageSize(ref: string): { width: number; height: number } {
  const m = ref.match(/-(\d+)x(\d+)-/)
  return m ? { width: Number(m[1]), height: Number(m[2]) } : { width: 1600, height: 900 }
}
