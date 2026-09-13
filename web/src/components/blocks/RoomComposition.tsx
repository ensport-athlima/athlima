import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { IndexGrid, type IndexItem } from "@/components/blocks/IndexGrid"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: RoomComposition (static variant)
 * ROLE IN EXPERIENCE: Credibility — the core proposition: it is the composition, not the crowd. The
 *   four groups, who is in each, what each does in the room.
 * POSITION: Homepage screen 05. The filterable variant (Signature 04) is /the-room section 03.
 * PRIMARY CTA: Tier 3 — SEE THE FULL COMPOSITION → /the-room.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 05; 01_STRATEGY/audiences.md §1.
 * MOTION: REVEAL on the statement; REVEAL (items, STAGGER_TIGHT) on the four groups; the closing
 *   statement's two halves converge from left and right; REVEAL on the CTA. Server Component.
 * MEDIA: none — the four portraits are B2, and the brief says this screen runs on type rather than on
 *   generated people presented as guests.
 */
export interface RoomGroup {
  title: string
  line: string
  who: readonly string[]
  verbs: string
}

export interface RoomCompositionProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  lead: string
  groups: readonly RoomGroup[]
  closingLeft: readonly DisplayLine[]
  closingRight: readonly DisplayLine[]
  cta: { label: string; href: string }
  className?: string
}

export function RoomComposition({
  id,
  marker,
  headline,
  lead,
  groups,
  closingLeft,
  closingRight,
  cta,
  className,
}: RoomCompositionProps) {
  const headingId = `${id}-headline`
  const items: IndexItem[] = groups.map((g) => ({
    title: g.title,
    line: g.line,
    detail: (
      <>
        <p className="text-body-sm text-ink-300">{g.who.join(" · ")}</p>
        <p className="label mt-3">{g.verbs}</p>
      </>
    ),
  }))

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
            <Display as="h2" id={headingId} size="lg" lines={headline} className="mt-4" />
            <p className="mt-8 max-w-measure text-body-lg text-ink-100">{lead}</p>
          </div>
        </Reveal>

        <IndexGrid items={items} columns={4} className="mt-24" />

        {/* The closing statement — two halves, converging. */}
        <div className="mt-24 grid grid-cols-1 gap-x-gutter gap-y-8 lg:grid-cols-2">
          <Reveal from="left">
            <Display as="p" size="md" lines={closingLeft} />
          </Reveal>
          <Reveal from="right" className="lg:text-right">
            <Display as="p" size="md" lines={closingRight} />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <Button variant="ghost" href={cta.href}>
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
