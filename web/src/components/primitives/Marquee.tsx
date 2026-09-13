import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

/**
 * Continuous horizontal scroll (components.md `Marquee`). Footer and the ATHLIMA 20 discipline strip only.
 * Pauses on hover and on focus. The duplicated copy is aria-hidden; one readable instance only. Static
 * under reduced motion (the track wraps instead). CSS keyframes — no GSAP; one ambient loop per screen.
 */
export interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full pass. */
  duration?: number
  className?: string
}

export function Marquee({ children, duration = 40, className }: MarqueeProps) {
  return (
    <div
      className={cn("marquee overflow-hidden", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
