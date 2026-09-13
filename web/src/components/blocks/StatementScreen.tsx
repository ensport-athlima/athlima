import type { ReactNode } from "react"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: StatementScreen
 * ROLE IN EXPERIENCE: Orientation — a single display statement, given room. The workhorse
 *   (components.md): the pivot on the homepage (screen 03), the portal intro (04), the close (09),
 *   and the statement sections of /the-world.
 * POSITION: Homepage screen 03 first; everywhere after.
 * PRIMARY CTA: none — the block carries no CTA of its own; ApplyBlock is the closing block.
 * SOURCE OF TRUTH: the calling page's content file — 04_CONTENT/homepage.md screen 03 here.
 * MOTION: REVEAL on the marker; REVEAL (SLOW, EASE_ARCH) on the mark; REVEAL-LINES on the statement
 *   and the sub-line; REVEAL (items) on the footer slot's [data-item] children. Via <Reveal>; this
 *   block is a Server Component.
 * LAYOUT: `editorial` — L3, columns 2–8; `centred` — L2, centred, for statements of two lines or
 *   fewer (grid.md §6). Padding standard or dramatic.
 */
export interface StatementScreenProps {
  id: string
  marker?: { number: number; label: string }
  /** The mark — supplied artwork placed as SVG. Larger than anywhere else on the site on screen 03. */
  mark?: ReactNode
  lines: readonly DisplayLine[]
  narrow?: readonly DisplayLine[]
  size?: "lg" | "md"
  sub?: readonly DisplayLine[]
  subNarrow?: readonly DisplayLine[]
  /** The sub-line is lime in full — screen 03 only (decision D14). */
  subWholeLime?: boolean
  align?: "editorial" | "centred"
  padding?: "standard" | "dramatic"
  /** A footer slot beneath the statement — e.g. the five-verb row. Children marked [data-item] stagger. */
  children?: ReactNode
  /** Stagger for the footer slot's items. */
  stagger?: "tight" | "loose"
  className?: string
}

export function StatementScreen({
  id,
  marker,
  mark,
  lines,
  narrow,
  size = "lg",
  sub,
  subNarrow,
  subWholeLime = false,
  align = "editorial",
  padding = "standard",
  children,
  stagger = "tight",
  className,
}: StatementScreenProps) {
  const centred = align === "centred"
  const headingId = `${id}-statement`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "bg-void px-margin",
        padding === "dramatic" ? "py-section-dramatic" : "py-section-standard",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-content-max",
          !centred && "lg:grid lg:grid-cols-12 lg:gap-x-gutter",
        )}
      >
        <div
          className={cn(
            centred ? "flex flex-col items-center text-center" : "lg:col-start-2 lg:col-end-9",
          )}
        >
          {marker ? (
            <Reveal className={cn(centred && "flex justify-center")}>
              <SectionMarker number={marker.number} label={marker.label} />
            </Reveal>
          ) : null}

          {mark ? (
            <Reveal ease="arch" duration="slow" className="mt-16 w-full max-w-4xl text-paper">
              {mark}
            </Reveal>
          ) : null}

          <Reveal variant="lines" className={cn(mark ? "mt-16" : "mt-4")}>
            <Display as="h2" id={headingId} size={size} lines={lines} narrow={narrow} />
          </Reveal>

          {sub ? (
            <Reveal variant="lines" className="mt-6">
              <Display as="p" size="md" lines={sub} narrow={subNarrow} wholeLime={subWholeLime} />
            </Reveal>
          ) : null}

          {children ? (
            <Reveal variant="items" stagger={stagger} className="mt-24 w-full max-w-4xl">
              {children}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
