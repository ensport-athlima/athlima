import { cn } from "@/lib/cn"

/**
 * The gradient overlay for text over image (imagery.md §4; colour.md §7; components.md `Scrim`).
 * Black, 0 → 70%, direction configurable. Not decoration — it is how contrast is guaranteed against
 * a photograph. Baked into the component that carries the text, never added later.
 */
export interface ScrimProps {
  /** Where the scrim is darkest — the edge the text sits against. */
  toward?: "bottom" | "top" | "left" | "right"
  className?: string
}

const DIRECTION: Record<NonNullable<ScrimProps["toward"]>, string> = {
  bottom: "bg-linear-to-b",
  top: "bg-linear-to-t",
  left: "bg-linear-to-l",
  right: "bg-linear-to-r",
}

export function Scrim({ toward = "bottom", className }: ScrimProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "inset-0 pointer-events-none absolute from-void/0 via-void/35 to-void/70",
        DIRECTION[toward],
        className,
      )}
    />
  )
}
