import Link from "next/link"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"
import { MediaSlot } from "@/components/media/MediaSlot"
import type { SlotName } from "@/content/media"

/**
 * BLOCK: AudienceDoorways
 * ROLE IN EXPERIENCE: Conversion — the highest-value interaction on the site. The visitor self-selects
 *   ("that one is me") and is routed to an argument written for them. Signature 03.
 * POSITION: Homepage screen 06. Reached on mobile by the anchor line after screen 04.
 * PRIMARY CTA: the six doorways themselves — real links, not buttons with handlers.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 06; 01_STRATEGY/audiences.md §2.
 * MOTION: REVEAL on the statement; REVEAL (items, STAGGER_TIGHT) on the six rows. The expansion on
 *   hover/focus, the sibling recede and the scene fade are CSS (globals.css, .doorway). On touch and
 *   under reduced motion everything is expanded — no hover-dependent information. Server Component.
 * MEDIA: one portrait or scene per doorway (B2) — a positioned slot, invisible until it has an image.
 */
export interface Doorway {
  audience: string
  line: string
  href: string
  /** The scene behind it — a `doorway.*` slot (content/media.ts). */
  slot: SlotName
}

export interface AudienceDoorwaysProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  /** h2 on the homepage; h1 when the block is a page (/for). */
  headingAs?: "h1" | "h2"
  doorways: readonly Doorway[]
  className?: string
}

export function AudienceDoorways({
  id,
  marker,
  headline,
  headingAs = "h2",
  doorways,
  className,
}: AudienceDoorwaysProps) {
  if (doorways.length !== 6) throw new Error("AudienceDoorways: six doorways (audiences.md §2).")
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("bg-void px-margin py-section-standard", className)}
    >
      <div className="mx-auto max-w-content-max">
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-start-2 lg:col-end-9">
            <SectionMarker number={marker.number} label={marker.label} />
            <Display as={headingAs} id={headingId} size="md" lines={headline} className="mt-4" />
          </div>
        </Reveal>

        <Reveal as="ul" variant="items" className="doorways mt-16 border-b border-ink-800">
          {doorways.map((d) => (
            <li key={d.href} data-item className="border-t border-ink-800">
              <Link
                href={d.href}
                className="doorway relative block py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime lg:py-10"
              >
                {/* THE SCENE (B2): the `doorway.*` slot, resolving at 40% behind the line on hover (globals.css). */}
                <MediaSlot name={d.slot} sizes="100vw" className="pointer-events-none" />
                <span className="relative block lg:grid lg:grid-cols-12 lg:gap-x-gutter">
                  <span className="display block text-display-sm text-paper lg:col-span-5">
                    {d.audience}
                  </span>
                  <span data-line-wrap className="mt-3 lg:col-span-6 lg:col-start-7 lg:mt-0">
                    <span className="block text-body-lg text-ink-200">{d.line}</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
