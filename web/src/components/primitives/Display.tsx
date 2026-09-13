import type { ElementType } from "react"
import { cn } from "@/lib/cn"

/**
 * Art-directed display type (typography.md §3; components.md `Display`).
 * Every display headline on the site goes through this component. It takes a line array — the line
 * breaks are the content's decision — renders each line in its own block `<span>`, and handles the
 * lime word: one or two lines of a headline may be lime, never the whole headline.
 *
 * Assistive technology reads one plain string (visually hidden); the visual line groups are
 * `aria-hidden`, so a `narrow` array for `md` and below never doubles the accessible name.
 */
export interface DisplayLine {
  text: string
  /** The line that carries the argument. At most two per headline (colour.md §3). */
  lime?: boolean
}

export type DisplaySize = "xl" | "lg" | "md" | "sm"

export interface DisplayProps {
  lines: readonly DisplayLine[]
  /** A different break at `md` and below. A four-line break at 1440px is a nine-line disaster at 390px. */
  narrow?: readonly DisplayLine[]
  size: DisplaySize
  as?: ElementType
  /** Sentence case is permitted at `md` and `sm` only (typography.md §3). */
  uppercase?: boolean
  /**
   * Permits every line to be lime. Only for a sub-line the brief designates lime in full — homepage
   * screen 03's "ONE SHARED FUTURE FOR SPORT." (decision D14). Never a headline.
   */
  wholeLime?: boolean
  className?: string
  id?: string
}

const SIZE_CLASS: Record<DisplaySize, string> = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
  sm: "text-display-sm",
}

function Lines({
  lines,
  hiddenAt,
  wholeLime,
}: {
  lines: readonly DisplayLine[]
  hiddenAt?: "narrow" | "wide"
  wholeLime: boolean
}) {
  const limeCount = lines.filter((l) => l.lime).length
  if (!wholeLime && (limeCount > 2 || (limeCount > 0 && limeCount === lines.length))) {
    throw new Error("Display: at most two lime lines, and never the whole headline (colour.md §3).")
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        hiddenAt === "narrow" && "hidden md:block",
        hiddenAt === "wide" && "block md:hidden",
      )}
    >
      {lines.map((line, i) => (
        <span key={`${i}-${line.text}`} className="block overflow-hidden">
          <span data-line className={cn("block", line.lime && "text-lime")}>
            {line.text}
          </span>
        </span>
      ))}
    </span>
  )
}

export function Display({
  lines,
  narrow,
  size,
  as: Tag = "h2",
  uppercase = true,
  wholeLime = false,
  className,
  id,
}: DisplayProps) {
  const accessible = lines.map((l) => l.text).join(" ")
  return (
    <Tag
      id={id}
      className={cn("display text-paper", SIZE_CLASS[size], !uppercase && "normal-case", className)}
    >
      <span className="sr-only">{accessible}</span>
      <Lines lines={lines} hiddenAt={narrow ? "narrow" : undefined} wholeLime={wholeLime} />
      {narrow ? <Lines lines={narrow} hiddenAt="wide" wholeLime={wholeLime} /> : null}
    </Tag>
  )
}
