"use client"

/**
 * An animated numeral (components.md `Counter`; motion.md §3 COUNTER). Counts 0 → value once, on
 * first entry, never re-counts. The final value is in the DOM for assistive technology and for
 * no-JS; the animating span is `aria-hidden`. One of the three primitives permitted to use the motion
 * layer (decision D27). Under reduced motion the final value renders immediately.
 */
import { useRef } from "react"
import { gsap, useGSAP, MOTION, registerMotion } from "@/motion/registry"
import { ease } from "@/motion/easings"
import { DURATIONS, sec } from "@/motion/durations"

export interface CounterProps {
  /** The numeric part, e.g. 130 for "$130B". */
  value: number
  prefix?: string
  suffix?: string
  /** Decimal places to show while counting and at rest. */
  decimals?: number
  className?: string
}

const TRIGGER_START = "top 85%"

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`

  useGSAP(
    () => {
      registerMotion()
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()
      mm.add(MOTION.full, () => {
        const state = { n: 0 }
        gsap.to(state, {
          n: value,
          duration: sec(DURATIONS.SLOW),
          ease: ease.EASE_OUT,
          scrollTrigger: { trigger: el, start: TRIGGER_START, once: true },
          onUpdate: () => {
            el.textContent = format(state.n)
          },
        })
      })
      return () => mm.revert()
    },
    { scope: ref, dependencies: [value, prefix, suffix, decimals] },
  )

  return (
    <span className={className}>
      <span className="sr-only">{format(value)}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {format(value)}
      </span>
    </span>
  )
}
