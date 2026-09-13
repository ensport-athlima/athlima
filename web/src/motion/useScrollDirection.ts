"use client"

/**
 * Scroll direction for the mobile APPLY bar (navigation.md §3: hides on scroll-down, reveals on
 * scroll-up). Reads scrollY on GSAP's ticker — no raw scroll listener (motion.md §5) — with a small
 * dead-zone so a wobble does not flicker the bar. Always "up" at the very top.
 */
import { useEffect, useState } from "react"
import { gsap } from "./registry"

const DEAD_ZONE_PX = 8

export function useScrollDirection(): "up" | "down" {
  const [dir, setDir] = useState<"up" | "down">("up")
  useEffect(() => {
    let last = window.scrollY
    let current: "up" | "down" = "up"
    const tick = () => {
      const y = window.scrollY
      const delta = y - last
      if (Math.abs(delta) < DEAD_ZONE_PX) return
      const next: "up" | "down" = y <= 0 ? "up" : delta > 0 ? "down" : "up"
      last = y
      if (next !== current) {
        current = next
        setDir(next)
      }
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])
  return dir
}
