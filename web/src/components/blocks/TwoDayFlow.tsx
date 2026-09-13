import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: TwoDayFlow (outline variant)
 * ROLE IN EXPERIENCE: Orientation — December has a shape; show it in outline and route to the detail.
 * POSITION: /the-world section 05. The full variant (session level, phase-driven) is /programme's.
 * PRIMARY CTA: Tier 3 — THE TWO DAYS → /programme.
 * SOURCE OF TRUTH: 04_CONTENT/the-world.md §05. Only what the brochures settle; the day-by-day flow is
 *   [TO VERIFY] and absent — never a placeholder schedule.
 * MOTION: REVEAL on the statement; REVEAL (items) on the facts. Server Component. L4 split at lg.
 */
export interface TwoDayFact {
  term: string
  detail: string
}

export interface TwoDayFlowProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  facts: readonly TwoDayFact[]
  cta: { label: string; href: string }
  className?: string
}

export function TwoDayFlow({ id, marker, headline, facts, cta, className }: TwoDayFlowProps) {
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("bg-void px-margin py-section-standard", className)}
    >
      <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
        <Reveal className="lg:col-span-5">
          <SectionMarker number={marker.number} label={marker.label} />
          <Display as="h2" id={headingId} size="md" lines={headline} className="mt-4" />
          <div className="mt-12">
            <Button variant="ghost" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        </Reveal>
        <Reveal
          as="dl"
          variant="items"
          className="mt-12 border-t border-ink-800 lg:col-span-6 lg:col-start-7 lg:mt-0"
        >
          {facts.map((f) => (
            <div
              key={f.term}
              data-item
              className="grid grid-cols-1 gap-2 border-b border-ink-800 py-6 sm:grid-cols-3 sm:gap-gutter"
            >
              <dt className="label">{f.term}</dt>
              <dd className="text-body text-ink-100 sm:col-span-2">{f.detail}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
