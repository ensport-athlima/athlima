/**
 * Media assets (imagery.md §4–§5, §8). One shape for a still and one for a film; a still's `src` is
 * either a public path (`/media/…`) or a Sanity image ref (`image-…`), and `mediaUrl()` resolves both.
 * The focal point (0–1, 0–1) becomes `object-position`, so responsive crops never decapitate the subject.
 */
import { sanityImageUrl, sanityImageSize } from "@/lib/sanity/image"

export interface ImageAsset {
  kind: "image"
  /** `/media/athlima-subject-descriptor-01.jpg` (public) or a Sanity image ref. */
  src: string
  /** Written by a human at delivery. Empty string only for a purely decorative background behind text. */
  alt: string
  width: number
  height: number
  /** 0–1 across, 0–1 down. Default centre. */
  focal?: { x: number; y: number }
  credit?: string
  /**
   * Pre-built responsive sets from scripts/build-media.ts (a repository still). When present the slot
   * renders a native <picture> from them and next/image is not involved; absent for a CMS still.
   */
  sources?: { avif: string; webp: string; widths: number[] }
  /** A tiny WebP data URI painted under the image while it loads. */
  blur?: string
  /** imagery.md §7.1 — a generated frame that depicts ATHLIMA itself carries the label. */
  impression?: boolean
}

export interface FilmAsset {
  kind: "film"
  /** The poster is the LCP element and matches frame one exactly (imagery.md §5). */
  poster: ImageAsset
  /** The H.264 MP4 — for micro-films ≤ 1.5 MB; for the hero, Mux's static rendition. Plays everywhere. */
  mp4: string
  /** Optional AV1/WebM for browsers that take it. Listed first. */
  webm?: string
  /**
   * Optional Mux HLS (`https://stream.mux.com/<id>.m3u8`). Listed first for the hero: Safari and iOS play
   * it natively; Chrome and Firefox cannot without hls.js, which is not in the stack (decision D2),
   * so they take the MP4 that follows.
   */
  hls?: string
  /** For anything with narration or dialogue — a WebVTT track URL. Micro-films are silent. */
  captions?: string
  caption?: string
}

export type MediaAsset = ImageAsset | FilmAsset

export const isSanityRef = (src: string) => src.startsWith("image-")

/** A URL for next/image. Public paths pass through; Sanity refs are built at the requested width. */
export function mediaUrl(image: ImageAsset, width = 2400): string {
  if (!isSanityRef(image.src)) return image.src
  return sanityImageUrl({ ref: image.src, hotspot: image.focal ? { x: image.focal.x, y: image.focal.y, width: 1, height: 1 } : undefined }, width)
}

/** Intrinsic size: from the asset, or decoded from a Sanity ref. */
export function mediaSize(image: ImageAsset): { width: number; height: number } {
  if (image.width && image.height) return { width: image.width, height: image.height }
  return isSanityRef(image.src) ? sanityImageSize(image.src) : { width: 2400, height: 1350 }
}

export const objectPosition = (image: ImageAsset) =>
  image.focal ? `${Math.round(image.focal.x * 100)}% ${Math.round(image.focal.y * 100)}%` : "50% 50%"
