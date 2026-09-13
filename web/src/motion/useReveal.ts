"use client"

/**
 * The standard entrances (motion.md §3). Components declare intent; this implements it.
 *   REVEAL        opacity 0 / y +24px → rest. MEDIUM, EASE_OUT. Once.
 *   REVEAL-LINES  each [data-line] child: y +100% → 0 inside its overflow-hidden parent. STAGGER_LINE, SLOW, EASE_ARCH.
 *   REVEAL-COVER  a [data-cover] child translates off in the scroll direction. SLOW, EASE_ARCH. Never clip-path (D10).
 *   REVEAL (items) each [data-item] child gets REVEAL, staggered STAGGER_TIGHT. Lists and index grids.
 * Reduced motion: an opacity fade ≤ REDUCED_FADE_MAX, or instant. No transform, ever.
 * Only transform and opacity animate — CLAUDE.md V.4.
 */
import { useRef, type RefObject } from "react"
import { gsap, useGSAP, MOTION, registerMotion } from "./registry"
import { ease } from "./easings"
import { DURATIONS, STAGGERS, REDUCED_FADE_MAX, sec } from "./durations"

export type RevealVariant = "reveal" | "lines" | "cover" | "items"

export interface RevealOptions {
  variant?: RevealVariant
  /** Base reveal only. `arch` is for large elements — the wordmark, full-bleed reveals (motion.md §1). */
  ease?: "out" | "arch"
  /** Base reveal only. `slow` pairs with `arch` for large elements. */
  duration?: "medium" | "slow"
  /** Items only. `loose` for large distinct elements (motion.md §2). */
  stagger?: "tight" | "loose"
  /** Seconds. Rare; prefer stagger. */
  delay?: number
  /** Cover direction for the "cover" variant. */
  direction?: "up" | "down" | "left" | "right"
  /** Viewport trigger point — element top hits this % of viewport height. */
  start?: string
}

const REVEAL_OFFSET_PX = 24
const TRIGGER_START = "top 85%"

const coverVector = (direction: RevealOptions["direction"]) => {
  switch (direction) {
    case "down":
      return { yPercent: 100 }
    case "left":
      return { xPercent: -100 }
    case "right":
      return { xPercent: 100 }
    case "up":
    default:
      return { yPercent: -100 }
  }
}

export function useReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {},
): RefObject<T | null> {
  const ref = useRef<T | null>(null)
  const {
    variant = "reveal",
    delay = 0,
    direction = "up",
    start = TRIGGER_START,
    ease: easeName = "out",
    duration = "medium",
    stagger = "tight",
  } = options
  const baseEase = easeName === "arch" ? ease.EASE_ARCH : ease.EASE_OUT
  const baseDuration = duration === "slow" ? DURATIONS.SLOW : DURATIONS.MEDIUM
  const itemStagger = stagger === "loose" ? STAGGERS.STAGGER_LOOSE : STAGGERS.STAGGER_TIGHT

  useGSAP(
    () => {
      registerMotion()
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()

      mm.add(MOTION.full, () => {
        const scrollTrigger = { trigger: el, start, once: true }
        if (variant === "lines") {
          const lines = el.querySelectorAll<HTMLElement>("[data-line]")
          gsap.from(lines, {
            yPercent: 100,
            opacity: 0,
            duration: sec(DURATIONS.SLOW),
            ease: ease.EASE_ARCH,
            stagger: sec(STAGGERS.STAGGER_LINE),
            delay,
            immediateRender: true,
            scrollTrigger,
          })
          return
        }
        if (variant === "items") {
          const items = el.querySelectorAll<HTMLElement>("[data-item]")
          gsap.from(items, {
            y: REVEAL_OFFSET_PX,
            opacity: 0,
            duration: sec(DURATIONS.MEDIUM),
            ease: ease.EASE_OUT,
            stagger: sec(itemStagger),
            delay,
            immediateRender: true,
            scrollTrigger,
          })
          return
        }
        if (variant === "cover") {
          const cover = el.querySelector<HTMLElement>("[data-cover]")
          if (!cover) return
          gsap.to(cover, {
            ...coverVector(direction),
            duration: sec(DURATIONS.SLOW),
            ease: ease.EASE_ARCH,
            delay,
            scrollTrigger,
            onComplete: () => cover.remove(),
          })
          return
        }
        gsap.from(el, {
          y: REVEAL_OFFSET_PX,
          opacity: 0,
          duration: sec(baseDuration),
          ease: baseEase,
          delay,
          immediateRender: true,
          scrollTrigger,
        })
      })

      mm.add(MOTION.reduced, () => {
        // Present, no transform. A fade of at most 150ms — the layout carries the meaning.
        el.querySelector<HTMLElement>("[data-cover]")?.remove()
        gsap.from(el, {
          opacity: 0,
          duration: sec(REDUCED_FADE_MAX),
          ease: "none",
          scrollTrigger: { trigger: el, start, once: true },
        })
      })

      return () => mm.revert()
    },
    { scope: ref, dependencies: [variant, delay, direction, start, easeName, duration, stagger] },
  )

  return ref
}
