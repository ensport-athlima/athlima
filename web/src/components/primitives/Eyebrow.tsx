import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

/**
 * The uppercase technical label (typography.md §5; components.md `Eyebrow`).
 * `--fs-label`, weight 500, +0.14em, `--ink-300`. `wide` is the wordmark-adjacent voice (wdth 118)
 * for page eyebrows that echo the ATHLIMA logotype.
 */
export interface EyebrowProps {
  children: ReactNode
  wide?: boolean
  as?: "p" | "span" | "div"
  className?: string
}

export function Eyebrow({ children, wide = false, as: Tag = "p", className }: EyebrowProps) {
  return <Tag className={cn("label", wide && "wide text-paper", className)}>{children}</Tag>
}
