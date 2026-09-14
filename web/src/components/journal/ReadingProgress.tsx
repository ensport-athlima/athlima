"use client"

import { useEffect, useRef } from "react"
import { gsap, MOTION } from "@/motion/registry"

/**
 * The reading-progress rule (interaction-map.md §2): a 1px lime rule at the top of the viewport, on
 * Journal articles only — one indicator, not two. Scale on x from the gsap ticker (transform only);
 * under reduced motion it still tracks, without any easing — it is information, not decoration.
 */
export function ReadingProgress({ target }: { target: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    const article = document.getElementById(target)
    if (!el || !article) return
    const reduced = window.matchMedia(MOTION.reduced).matches
    const set = gsap.quickSetter(el, "scaleX")
    const tick = () => {
      const rect = article.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const read = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1
      set(read)
    }
    tick()
    if (reduced) {
      window.addEventListener("scroll", tick, { passive: true })
      return () => window.removeEventListener("scroll", tick)
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [target])
  return <div ref={ref} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-px origin-left scale-x-0 bg-lime" />
}
