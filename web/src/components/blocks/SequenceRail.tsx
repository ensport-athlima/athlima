import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: SequenceRail
 * ROLE IN EXPERIENCE: Credibility — a process shown as a sequence is a promise with steps in it.
 * POSITION: /connect section 03 (the four steps); /partner/journey.
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: the calling page's content file.
 * MOTION: REVEAL (items, STAGGER_TIGHT) via <Reveal> — each step, then its chevron. Server Component.
 *   The chevron is a single `>` in the display face, lime (iconography.md §5); it is hidden from
 *   assistive technology, which reads an ordered list.
 */
export interface SequenceStep {
  step: string
  headline: string
  detail: string
}

export interface SequenceRailProps {
  steps: readonly SequenceStep[]
  className?: string
}

export function SequenceRail({ steps, className }: SequenceRailProps) {
  return (
    <Reveal
      as="ol"
      variant="items"
      className={cn("grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-gutter lg:grid-cols-4", className)}
    >
      {steps.map((s, i) => (
        <li key={s.step} data-item className="relative border-t border-ink-800 pt-6">
          <span className="display block text-display-sm leading-none text-ink-500" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="label mt-4 text-paper">{s.step}</h3>
          <p className="mt-3 text-body text-paper">{s.headline}</p>
          <p className="mt-3 text-body-sm text-ink-200">{s.detail}</p>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="display absolute top-6 right-0 hidden text-display-sm leading-none text-lime lg:block"
            >
              &gt;
            </span>
          ) : null}
        </li>
      ))}
    </Reveal>
  )
}
