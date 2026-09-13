"use client"

/**
 * One scroll system: Lenis, bridged to GSAP ScrollTrigger (motion.md §5, architecture.md §2 rule 1).
 * Mounted once in app/layout.tsx. Nothing else instantiates Lenis or calls window.scrollTo.
 * ScrollTrigger.refresh() is wired here, once, after fonts load — not per component.
 */
import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "./registry"

const LENIS_DURATION = 1.1

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    registerMotion()

    // Under reduced motion the platform scrolls; ScrollTrigger still needs its refresh wiring.
    const reduced = prefersReducedMotion()

    let lenis: Lenis | undefined
    let tick: ((time: number) => void) | undefined

    if (!reduced) {
      lenis = new Lenis({
        duration: LENIS_DURATION,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
        smoothWheel: true,
        syncTouch: false, // never smooth-scroll touch — it fights the platform (motion.md §5)
      })
      lenis.on("scroll", ScrollTrigger.update)
      tick = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
    }

    // A display headline that reflows after the font swap throws every scroll position (typography.md §7).
    let cancelled = false
    void document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
      if (tick) gsap.ticker.remove(tick)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
