import Image from "next/image"
import { MicroFilm } from "./MicroFilm"
import { VideoHero } from "./VideoHero"
import { EntryFloor, HeroArchitecture } from "./HeroArchitecture"
import { impressionLabel, mediaSlots, type SlotName } from "@/content/media"
import { mediaUrl, objectPosition, type MediaAsset } from "@/lib/media"
import { resolveMedia } from "@/lib/site-media"
import { cn } from "@/lib/cn"

/**
 * MediaSlot — the one way photography and film enter a block (imagery.md §4, §8). A named slot renders
 * a correctly sized --ink-950 ground and, when the slot has an asset (code registry or the CMS), the
 * asset over it: a repository still as a native <picture> from the pipeline's AVIF/WebP sets (its
 * blur placeholder painted under it, preloaded when it is the LCP hero); a CMS still through
 * next/image (`fill`, mandatory `sizes`, `object-position` from the focal point); a film through
 * VideoHero (the hero) or MicroFilm (everything else), poster-first. A generated frame that depicts
 * ATHLIMA itself carries "Artist's impression" (imagery.md §7.1). With every slot empty the site
 * renders exactly as it did before this component existed. Server Component; the film players are
 * the client islands.
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
  const position = still ? objectPosition(still) : undefined

  return (
    <div
      aria-hidden={decorative ? "true" : undefined}
      data-media
      data-slot={name}
      className={cn("absolute inset-0 overflow-hidden bg-ink-950", className)}
      style={still?.blur ? { backgroundImage: `url(${still.blur})`, backgroundSize: "cover", backgroundPosition: position } : undefined}
    >
      {!asset && spec.fallback === "architecture" ? <HeroArchitecture /> : null}
      {!asset && spec.fallback === "floor" ? <EntryFloor /> : null}
      {priority && still?.sources ? (
        // The LCP image starts downloading with the document, not after the markup parses. A <link>
        // in the tree (React hoists it into <head>) rather than ReactDOM.preload(), whose directive
        // also fires from a prefetched route's payload and would fetch other pages' heroes.
        <link rel="preload" as="image" type="image/avif" imageSrcSet={still.sources.avif} imageSizes={sizes} fetchPriority="high" />
      ) : null}
      {still?.sources ? (
        <picture>
          <source type="image/avif" srcSet={still.sources.avif} sizes={sizes} />
          <source type="image/webp" srcSet={still.sources.webp} sizes={sizes} />
          <img
            src={still.src}
            alt={decorative ? "" : still.alt}
            width={still.width}
            height={still.height}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: position }}
          />
        </picture>
      ) : still ? (
        <Image
          src={mediaUrl(still)}
          alt={decorative ? "" : still.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : null}
      {asset?.kind === "film" ? (
        film === "hero" && filmLabels ? <VideoHero film={asset} labels={filmLabels} /> : <MicroFilm film={asset} />
      ) : null}
      {still?.credit && !decorative ? (
        <p className="absolute right-0 bottom-0 z-10 bg-void/80 px-3 py-1 text-caption text-ink-300">{still.credit}</p>
      ) : still?.impression ? (
        <p className="absolute right-0 bottom-0 z-10 px-3 py-1 text-caption text-ink-400">{impressionLabel}</p>
      ) : null}
    </div>
  )
}
