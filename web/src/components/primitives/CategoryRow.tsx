import { cn } from "@/lib/cn"

/**
 * A labelled row of categories — the Symposium's voices, Connect's guest profiles, the partner
 * territories, the journey's multiplier. A label, a hairline, the items wrapping in a row. Not a tag
 * cloud, not chips: plain text, rules and space.
 */
export interface CategoryRowProps {
  label: string
  items: readonly string[]
  /** `rule` joins the items with a hairline — the journey's progression line. */
  variant?: "row" | "rule"
  className?: string
}

export function CategoryRow({ label, items, variant = "row", className }: CategoryRowProps) {
  return (
    <div className={cn("border-t border-ink-800 pt-6", className)}>
      <p className="label">{label}</p>
      <ul
        className={cn(
          "mt-4 flex flex-wrap",
          variant === "row" ? "gap-x-6 gap-y-2" : "items-center gap-x-4 gap-y-3",
        )}
      >
        {items.map((c, i) => (
          <li key={c} className={cn("flex items-center", variant === "rule" ? "label text-paper" : "text-body text-paper")}>
            {c}
            {variant === "rule" && i < items.length - 1 ? (
              <span aria-hidden="true" className="ml-4 hidden w-lime-rule border-t border-ink-600 sm:block" />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
