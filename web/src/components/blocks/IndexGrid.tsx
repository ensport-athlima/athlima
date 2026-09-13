import type { ReactNode } from "react"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: IndexGrid
 * ROLE IN EXPERIENCE: Credibility — structure is the proof. The L5 index: pavilions, zones, themes,
 *   disciplines, the four groups. Rules and space, NOT cards (components.md, "read this one carefully").
 * POSITION: Homepage screen 05 (the four groups); every IP page (pavilions, themes, formats, zones,
 *   elements, disciplines, stages).
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: the calling page's content file.
 * MOTION: REVEAL (items, STAGGER_TIGHT) via <Reveal>; hover in CSS — the hairline turns lime and the
 *   content shifts 8px right. Nothing scales, nothing lifts. Server Component.
 */
export interface IndexItem {
  title: string
  /** Optional — the twenty disciplines are titles alone. */
  line?: string
  /** Optional structured detail beneath the line — a list, a label row. */
  detail?: ReactNode
}

export interface IndexGridProps {
  items: readonly IndexItem[]
  /** Columns at `lg`. Collapses 6 → 3 → 2 → 1 (components.md). */
  columns?: 2 | 3 | 4 | 6
  /** Numbering starts here (1 → "01"). */
  startAt?: number
  className?: string
}

const COLS: Record<NonNullable<IndexGridProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  6: "md:grid-cols-3 lg:grid-cols-6",
}

export function IndexGrid({ items, columns = 3, startAt = 1, className }: IndexGridProps) {
  return (
    <Reveal
      as="ol"
      variant="items"
      className={cn("grid grid-cols-1 gap-x-gutter gap-y-12", COLS[columns], className)}
    >
      {items.map((item, i) => (
        <li key={item.title} data-item className="index-item pb-6">
          <div data-shift>
            <span
              className="display block text-display-sm leading-none text-ink-500"
              aria-hidden="true"
            >
              {String(startAt + i).padStart(2, "0")}
            </span>
            <h3 className="display mt-4 text-display-sm text-paper">{item.title}</h3>
            {item.line ? <p className="mt-3 text-body-sm text-ink-200">{item.line}</p> : null}
            {item.detail ? <div className="mt-4">{item.detail}</div> : null}
          </div>
        </li>
      ))}
    </Reveal>
  )
}
