import Link from "next/link"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { IPMark, IP_NAMES, type IPId } from "@/components/marks/IPMark"
import { Scrim } from "@/components/media/Scrim"
import { Reveal } from "@/motion/Reveal"
import { PinnedSequence } from "@/motion/PinnedSequence"
import { cn } from "@/lib/cn"

/**
 * BLOCK: EcosystemPortals
 * ROLE IN EXPERIENCE: Discovery — converts "what is ATHLIMA" into six enterable worlds. Signature 02.
 * POSITION: Homepage screen 04. Also /the-world section 03.
 * PRIMARY CTA: none (navigational) — the six panels are the links.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 04; lines from brand-strategy.md §4 (D16).
 * MOTION: PIN-SCRUB on desktop with full motion (motion/usePinnedSequence via <PinnedSequence>) — the
 *   section pins and the track translates on x with the scroll, snapping to panels. On touch: no pin,
 *   six stacked panels. Reduced motion: a static grid (globals.css). REVEAL on the intro; REVEAL-LINES on
 *   the closing line. Hover/focus is CSS (motion.md §4). Only transform and opacity move.
 * The choreography sits on top of a plain list: a <nav> with an <ol> of six <a>, in ecosystem order,
 * readable with CSS off. Each panel carries a positioned slot for its micro-film loop (B2).
 */
export interface Portal {
  ip: IPId
  role: string
  line: string
  href: string
}

export interface EcosystemPortalsProps {
  id: string
  marker: { number: number; label: string }
  intro: readonly DisplayLine[]
  sub: string
  portals: readonly Portal[]
  closing?: readonly DisplayLine[]
  /** The doorways block's id. When present, the mobile anchor line renders after the closing line. */
  doorwaysId?: string
  anchorLine?: string
  className?: string
}

export function EcosystemPortals({
  id,
  marker,
  intro,
  sub,
  portals,
  closing,
  doorwaysId,
  anchorLine,
  className,
}: EcosystemPortalsProps) {
  if (portals.length !== 6)
    throw new Error("EcosystemPortals: six portals, always (brand-strategy.md §2).")
  const headingId = `${id}-intro`
  return (
    <section id={id} aria-labelledby={headingId} className={cn("bg-void", className)}>
      <div className="px-margin pt-section-standard pb-section-dense">
        <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <Reveal className="lg:col-start-2 lg:col-end-9">
            <SectionMarker number={marker.number} label={marker.label} />
            <Display as="h2" id={headingId} size="md" lines={intro} className="mt-4" />
            <p className="mt-6 max-w-measure text-body-lg text-ink-100">{sub}</p>
          </Reveal>
        </div>
      </div>

      <nav aria-label="The six experiences">
        <PinnedSequence panels={portals.length} track="[data-track]" className="overflow-hidden">
          <ol data-track className="portals-track">
            {portals.map((portal, i) => (
              <li
                key={portal.ip}
                className="relative min-h-(--section-tall) border-t border-ink-800 lg:h-svh lg:border-t-0"
              >
                <Link
                  href={portal.href}
                  className="portal group relative block h-full min-h-(--section-tall) overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lime lg:min-h-svh"
                >
                  {/*
                    THE SIGNATURE MICRO-FILM belongs here (B2): the IP's 5–8s loop via `MicroFilm` —
                    ≤ 1.5 MB, poster-first, IntersectionObserver-gated, at most one playing at a time,
                    poster only on touch and under save-data. Until then, a correctly sized slot.
                  */}
                  <div data-media aria-hidden="true" className="absolute inset-0 bg-ink-950" />
                  <Scrim toward="bottom" />
                  <span
                    aria-hidden="true"
                    className="display absolute top-8 left-margin text-display-sm leading-none text-ink-500 lg:left-8"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 flex h-full min-h-(--section-tall) flex-col justify-end px-margin pb-12 lg:min-h-svh lg:px-8 lg:pb-16">
                    <span className="label">{portal.role}</span>
                    <IPMark ip={portal.ip} decorative className="mt-4 text-display-md text-paper" />
                    <span className="sr-only">{IP_NAMES[portal.ip]}. </span>
                    <span className="mt-4 block max-w-measure text-body-lg text-ink-100">
                      {portal.line}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </PinnedSequence>
      </nav>

      {closing || (doorwaysId && anchorLine) ? (
        <div className="px-margin pt-section-dense pb-section-standard">
          {closing ? (
            <Reveal variant="lines" className="mx-auto max-w-content-max text-center">
              <Display as="p" size="md" lines={closing} />
            </Reveal>
          ) : null}
          {doorwaysId && anchorLine ? (
            <p className="mx-auto mt-16 max-w-content-max text-center lg:hidden">
              <a
                href={`#${doorwaysId}`}
                className="label inline-block text-paper transition-colors duration-(--dur-fast) ease-sharp hover:text-lime"
              >
                {anchorLine} <span aria-hidden="true">↓</span>
              </a>
            </p>
          ) : null}
        </div>
      ) : (
        <div className="pb-section-standard" />
      )}
    </section>
  )
}
