"use client"

import { useEffect } from "react"
import { gsap, MOTION } from "@/motion/registry"

/**
 * A few pixels of depth against the pointer for the hero's drawn scene: the structure moves up to 12 px
 * and the floor 6 px, eased through GSAP's quickTo (transform only). Hover-capable, full-motion
 * devices only — off on touch and under reduced motion. Adds nothing to the server HTML.
 */
const STRUCTURE_PX = 12
const FLOOR_PX = 6

export function HeroDepth() {
  useEffect(() => {
    if (!window.matchMedia(MOTION.full).matches) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const scene = document.querySelector<HTMLElement>("[data-hero-scene]")
    const structure = scene?.querySelector<HTMLElement>('[data-depth="structure"]')
    const floor = scene?.querySelector<HTMLElement>('[data-depth="floor"]')
    if (!scene || !structure || !floor) return
    const sx = gsap.quickTo(structure, "x", { duration: 0.8, ease: "power2.out" })
    const sy = gsap.quickTo(structure, "y", { duration: 0.8, ease: "power2.out" })
    const fx = gsap.quickTo(floor, "x", { duration: 1.2, ease: "power2.out" })
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      sx(-nx * STRUCTURE_PX * 2)
      sy(-ny * STRUCTURE_PX)
      fx(-nx * FLOOR_PX * 2)
    }
    const onLeave = () => {
      sx(0)
      sy(0)
      fx(0)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])
  return null
}
