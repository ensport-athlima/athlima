import Image from "next/image"
import { MicroFilm } from "./MicroFilm"
import { VideoHero } from "./VideoHero"
import { HeroArchitecture } from "./HeroArchitecture"
import { mediaSlots, type SlotName } from "@/content/media"
import { mediaUrl, objectPosition, type MediaAsset } from "@/lib/media"
import { resolveMedia } from "@/lib/site-media"
import { cn } from "@/lib/cn"

/**
 * MediaSlot — the one way photography and film enter a block (imagery.md §4, §8). A named slot renders
 * a correctly sized --ink-950 ground and, when the slot has an asset (code registry or the CMS), the
 * asset over it: a still through next/image (`fill`, mandatory `sizes`, `object-position` from the
 * focal point, `priority` only for the LCP hero); a film through VideoHero (the hero) or MicroFilm
 * (everything else), poster-first. With every slot empty the site renders exactly as it did before
 * this component existed. Server Component; the film players are the client islands.
 */
export interface MediaSlotProps {
  name: SlotName
  /** The image's `sizes` — mandatory for a still (performance.md). */
  sizes: string
  /** The one `priority` image per page: the LCP hero. */
  priority?: boolean
  /** The hero film gets the pause control; portals get the silent loop. */
  film?: "hero" | "loop"
  /** Pause / play labels, ctas.md §5 — required when `film="hero"`. */
  filmLabels?: { pause: string; play: string }
  /** For a meaningful image (DisciplineGrid) the slot is not aria-hidden and the alt renders. */
  meaningful?: boolean
  className?: string
}

export async function MediaSlot({ name, sizes, priority = false, film = "loop", filmLabels, meaningful, className }: MediaSlotProps) {
  const spec = mediaSlots[name]
  const asset: MediaAsset | null = await resolveMedia(name)
  const decorative = !(meaningful ?? spec.meaningful)
  const still = asset?.kind === "image" ? asset : asset?.kind === "film" ? asset.poster : null
  return (
    <div aria-hidden={decorative ? "true" : undefined} data-media data-slot={name} className={cn("absolute inset-0 overflow-hidden bg-ink-950", className)}>
      {!asset && spec.fallback === "architecture" ? <HeroArchitecture /> : null}
      {still ? (
        <Image
          src={mediaUrl(still)}
          alt={decorative ? "" : still.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: objectPosition(still) }}
        />
      ) : null}
      {asset?.kind === "film" ? (
        film === "hero" && filmLabels ? <VideoHero film={asset} labels={filmLabels} /> : <MicroFilm film={asset} />
      ) : null}
      {still?.credit && !decorative ? (
        <p className="absolute right-0 bottom-0 z-10 bg-void/80 px-3 py-1 text-caption text-ink-300">{still.credit}</p>
      ) : null}
    </div>
  )
}
