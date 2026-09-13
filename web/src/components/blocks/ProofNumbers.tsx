import { Counter } from "@/components/primitives/Counter"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: ProofNumbers
 * ROLE IN EXPERIENCE: Credibility — a row of three or four statistics, every one with a visible source
 *   and year. A figure without a source does not ship (positioning.md §7; CLAUDE.md V.1).
 * POSITION: Homepage screen 02 (beneath the diagnosis); /the-world.
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 02. The figures themselves are B4 — all four are
 *   unsourced at the time of writing, so the homepage passes an empty array and this block renders
 *   nothing: no wrapper, no gap, no placeholder.
 * MOTION: COUNTER on each figure, once (via the Counter primitive). REVEAL on the row.
 */
export interface Figure {
  /** The numeric part that counts, e.g. 130. */
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  /** What the number is. */
  label: string
  /** Required. The named, citable source — rendered visibly beneath the figure. */
  source: string
  /** Required. The year of the source — rendered beside it. */
  year: number
}

export interface ProofNumbersProps {
  figures: readonly Figure[]
  className?: string
}

export function ProofNumbers({ figures, className }: ProofNumbersProps) {
  if (figures.length === 0) return null
  if (figures.length > 4)
    throw new Error("ProofNumbers: a row is three or four figures (components.md).")

  return (
    <Reveal
      as="ul"
      variant="items"
      className={cn(
        "grid grid-cols-1 gap-x-gutter gap-y-12 sm:grid-cols-2",
        figures.length >= 3 && "lg:grid-cols-4",
        className,
      )}
    >
      {figures.map((f) => (
        <li key={f.label} data-item className="border-b border-ink-800 pb-6">
          <p className="display text-display-lg leading-none text-paper">
            <Counter value={f.value} prefix={f.prefix} suffix={f.suffix} decimals={f.decimals} />
          </p>
          <p className="mt-4 text-body-sm text-ink-200">{f.label}</p>
          <p className="label mt-3">
            Source: {f.source}, {f.year}
          </p>
        </li>
      ))}
    </Reveal>
  )
}
