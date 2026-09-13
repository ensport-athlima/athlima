"use client"

/**
 * PIN-SCRUB — the six portals (motion.md §3). Desktop only; abandoned entirely on touch and under
 * reduced motion, where the panels are simply stacked (interaction-map.md, Signature 02).
 * The section is a real <nav> in the server HTML; this module is progressive enhancement on top
 * of it (decision D5). Never force horizontal scroll on touch for primary content.
 */
import { useRef, type RefObject } from "react"
import { gsap, useGSAP, ScrollTrigger, MOTION, registerMotion } from "./registry"
import { DURATIONS, sec } from "./durations"

export interface PinnedSequenceOptions {
  /** Selector for the horizontal track inside the section. */
  track?: string
  /** Number of panels; used for snap points. */
  panels: number
}

const SCRUB_SMOOTHING = 1

export function usePinnedSequence<T extends HTMLElement = HTMLElement>(
  options: PinnedSequenceOptions,
): RefObject<T | null> {
  const ref = useRef<T | null>(null)
  const { track = "[data-track]", panels } = options

  useGSAP(
    () => {
      registerMotion()
      const section = ref.current
      if (!section) return
      const mm = gsap.matchMedia()

      mm.add(`${MOTION.desktop} and ${MOTION.full}`, () => {
        const trackEl = section.querySelector<HTMLElement>(track)
        if (!trackEl) return
        const distance = () => trackEl.scrollWidth - section.clientWidth
        gsap.to(trackEl, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            pin: true,
            anticipatePin: 1,
            scrub: SCRUB_SMOOTHING,
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 1 / Math.max(panels - 1, 1),
              duration: sec(DURATIONS.BASE),
              ease: "none",
            },
          },
        })
        return () => ScrollTrigger.getAll().forEach((t) => t.trigger === section && t.kill())
      })

      return () => mm.revert()
    },
    { scope: ref, dependencies: [track, panels] },
  )

  return ref
}
