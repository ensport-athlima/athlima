import { cache } from "react"
import { mediaSlots, type SlotName } from "@/content/media"
import type { ImageAsset, MediaAsset } from "@/lib/media"
import { manifestAsset } from "@/lib/media-manifest"
import { sanityImageSize } from "@/lib/sanity/image"
import { sanityFetch } from "@/lib/sanity/client"
import { siteMediaQuery, TAGS } from "@/lib/sanity/queries"
import { parser, siteMediaSchema } from "@/lib/sanity/schemas"

/**
 * Resolves a slot: the CMS entry if the content team has filled it, else the code registry. Fetched
 * once per request (React cache) and cached for an hour under the `site` tag — a swap in the Studio
 * shows within the hour, or at once through the revalidation webhook. Fails soft: no CMS, no entry, or
 * a failed fetch all fall back to the registry, which falls back to the black ground.
 */
const loadCmsMedia = cache(async () => {
  const rows = await sanityFetch({
    query: siteMediaQuery,
    tags: [TAGS.site],
    revalidate: 3600,
    parse: parser("siteMedia", siteMediaSchema),
  })
  const map = new Map<string, MediaAsset>()
  for (const row of rows ?? []) {
    const size = sanityImageSize(row.image.ref)
    const image: ImageAsset = {
      kind: "image",
      src: row.image.ref,
      alt: row.image.alt,
      width: size.width,
      height: size.height,
      focal: row.image.hotspot ? { x: row.image.hotspot.x, y: row.image.hotspot.y } : undefined,
      credit: row.image.credit ?? undefined,
    }
    map.set(
      row.slot,
      row.film
        ? { kind: "film", poster: image, mp4: row.film.mp4, webm: row.film.webm ?? undefined, hls: row.film.hls ?? undefined, captions: row.film.captions ?? undefined }
        : image,
    )
  }
  return map
})

/** The CMS wins; then the pipeline's manifest (a still in the repository); then the registry's own asset. */
export async function resolveMedia(name: SlotName): Promise<MediaAsset | null> {
  const cms = await loadCmsMedia()
  return cms.get(name) ?? manifestAsset(name) ?? mediaSlots[name].asset
}
