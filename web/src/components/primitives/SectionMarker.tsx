import { Eyebrow } from "./Eyebrow"
import { cn } from "@/lib/cn"

/**
 * `01 ──── THE BIGGER PICTURE` (typography.md §5; iconography.md §4; components.md `SectionMarker`).
 * The two-digit lime numeral, the 40px lime rule, the eyebrow. Identical on every section of every
 * page. Chrome, not content — it does not count toward the three-lime-elements rule (decision D3).
 */
export interface SectionMarkerProps {
  /** 1–99. Rendered with a leading zero. */
  number: number
  label: string
  className?: string
}

export function SectionMarker({ number, label, className }: SectionMarkerProps) {
  const numeral = String(number).padStart(2, "0")
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className="display on-light-lime text-display-sm leading-none text-lime tabular-nums"
        aria-hidden="true"
      >
        {numeral}
      </span>
      <span
        className="on-light-lime-border w-lime-rule border-t-2 border-lime"
        aria-hidden="true"
      />
      <Eyebrow as="span">
        <span className="sr-only select-none">Section {numeral}: </span>
        {label}
      </Eyebrow>
    </div>
  )
}
