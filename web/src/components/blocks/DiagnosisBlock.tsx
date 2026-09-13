import type { ReactNode } from "react"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: DiagnosisBlock
 * ROLE IN EXPERIENCE: Credibility — names the problem precisely, as four real disconnections between
 *   real parties, before the site offers the solution. The visitor reaches screen 03 already agreeing
 *   there is a problem.
 * POSITION: Homepage screen 02. Also /the-world.
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 02.
 * MOTION: REVEAL on the marker + statement, the lead and the body line; REVEAL (items, STAGGER_TIGHT)
 *   on the stakeholder grid; REVEAL-LINES on the pull line. All via the motion layer's <Reveal>; this
 *   block is a Server Component. Reduced motion: ≤150ms fades, no transform.
 * LAYOUT: L3 Editorial — columns 2–8 of 12 (grid.md §2); single column at md and below.
 */
export interface Disconnection {
  parties: readonly [string, string]
  line: string
}

export interface DiagnosisBlockProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  lead: readonly string[]
  disconnections: readonly Disconnection[]
  body: string
  pullLine: readonly DisplayLine[]
  /** The ProofNumbers row, when any figure is sourced (B4). Renders nothing until then. */
  proof?: ReactNode
  className?: string
}

export function DiagnosisBlock({
  id,
  marker,
  headline,
  lead,
  disconnections,
  body,
  pullLine,
  proof,
  className,
}: DiagnosisBlockProps) {
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("bg-void px-margin py-section-standard", className)}
    >
      <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
        <div className="lg:col-start-2 lg:col-end-9">
          <Reveal>
            <SectionMarker number={marker.number} label={marker.label} />
            <Display as="h2" id={headingId} size="lg" lines={headline} className="mt-4" />
          </Reveal>

          <Reveal className="stack-p mt-8 max-w-measure">
            {lead.map((p) => (
              <p key={p} className="text-body-lg text-ink-100">
                {p}
              </p>
            ))}
          </Reveal>

          {/* The stakeholder grid — L5 index discipline: numeral, title, one line, a hairline. Not cards. */}
          <Reveal
            as="ol"
            variant="items"
            className="mt-16 grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2"
          >
            {disconnections.map((d, i) => (
              <li key={d.line} data-item className="border-b border-ink-800 pb-6">
                <span
                  className="display text-display-sm leading-none text-ink-500"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Two parties, two art-directed lines — never an accidental break on the separator. */}
                <h3 className="display mt-4 text-display-sm text-paper">
                  <span className="sr-only">
                    {d.parties[0]} · {d.parties[1]}
                  </span>
                  <span aria-hidden="true" className="block">
                    {d.parties[0]}
                  </span>
                  <span aria-hidden="true" className="block">
                    {d.parties[1]}
                  </span>
                </h3>
                <p className="mt-3 text-body-sm text-ink-200">{d.line}</p>
              </li>
            ))}
          </Reveal>

          <Reveal as="p" className="mt-12 max-w-measure text-body text-ink-100">
            {body}
          </Reveal>

          <Reveal variant="lines" className="mt-24">
            <Display as="p" size="md" lines={pullLine} />
          </Reveal>

          {proof ? <div className="mt-24">{proof}</div> : null}
        </div>
      </div>
    </section>
  )
}
