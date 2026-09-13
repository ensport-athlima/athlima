"use client"

/**
 * Registers GSAP plugins exactly once, client-side, and owns the reduced-motion strategy
 * (06_BUILD/architecture.md §2 rule 5; 03_DESIGN_SYSTEM/motion.md §8).
 * Nothing else calls gsap.registerPlugin. Nothing else decides what reduced motion means.
 */
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CustomEase } from "gsap/CustomEase"
import { EASINGS, ease } from "./easings"

let registered = false

export function registerMotion(): void {
  if (registered || typeof window === "undefined") return
  registered = true
  gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase)
  CustomEase.create(ease.EASE_OUT, EASINGS.EASE_OUT)
  CustomEase.create(ease.EASE_IN_OUT, EASINGS.EASE_IN_OUT)
  CustomEase.create(ease.EASE_SHARP, EASINGS.EASE_SHARP)
  CustomEase.create(ease.EASE_ARCH, EASINGS.EASE_ARCH)
  gsap.defaults({ ease: ease.EASE_OUT, overwrite: "auto" })
}

/**
 * The media conditions every motion hook branches on. Passed to gsap.matchMedia(), which
 * reverts everything a context created when its condition stops matching.
 */
export const MOTION = {
  /** Full choreography. */
  full: "(prefers-reduced-motion: no-preference)",
  /** Opacity-only fades ≤150ms, or instant. No transform, no pin, no scrub, no parallax. */
  reduced: "(prefers-reduced-motion: reduce)",
  /** Pinned scrub sequences and the custom cursor exist only here. Never on touch. */
  desktop: "(min-width: 64rem) and (hover: hover) and (pointer: fine)",
  /** Touch: stacked panels, native cursor, no pin. */
  touch: "(hover: none), (pointer: coarse)",
} as const

/** Runtime check for code that runs outside a matchMedia context. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia(MOTION.reduced).matches

export { gsap, useGSAP, ScrollTrigger }
