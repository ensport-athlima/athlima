"use client"

/**
 * The element form of `usePinnedSequence` (motion.md §3 PIN-SCRUB), so blocks stay Server Components.
 * Desktop + full motion only; on touch and under reduced motion the hook does nothing and the CSS
 * layout (stacked / static grid) is what renders. Motion-layer plumbing, not a design component.
 */
import type { ReactNode } from "react"
import { usePinnedSequence, type PinnedSequenceOptions } from "./usePinnedSequence"

export interface PinnedSequenceProps extends PinnedSequenceOptions {
  children: ReactNode
  className?: string
}

export function PinnedSequence({ children, className, ...options }: PinnedSequenceProps) {
  const ref = usePinnedSequence<HTMLDivElement>(options)
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
