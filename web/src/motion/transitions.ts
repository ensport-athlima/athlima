"use client"

/**
 * Page transitions (motion.md §6, architecture.md §3). View Transitions API where supported,
 * a GSAP fallback where not. Under reduced motion: an instant cut. Budget: legible new content
 * within TRANSITION_BUDGET (600ms). If a transition makes the site feel like it is loading, it is wrong.
 *
 *   0–200    OUT: current page opacity 1 → 0, y 0 → -16px, EASE_IN_OUT
 *   0–250    a black panel wipes up from the bottom, EASE_ARCH
 *   250–500  IN: the panel wipes off the top, EASE_ARCH — new content already painted beneath
 *   400–900  new content completes its reveal, EASE_OUT (begins before the panel clears)
 */
import { gsap, registerMotion, prefersReducedMotion } from "./registry"
import { ease } from "./easings"
import { sec } from "./durations"

const OUT_MS = 200
const PANEL_IN_MS = 250
const PANEL_OUT_START_MS = 250
const PANEL_OUT_MS = 250
const OUT_OFFSET_PX = -16
const PANEL_ATTR = "data-transition-panel"

type Navigate = () => Promise<void> | void

function panel(): HTMLElement {
  let el = document.querySelector<HTMLElement>(`[${PANEL_ATTR}]`)
  if (!el) {
    el = document.createElement("div")
    el.setAttribute(PANEL_ATTR, "")
    el.setAttribute("aria-hidden", "true")
    Object.assign(el.style, {
      position: "fixed",
      inset: "0",
      background: "var(--void)",
      transform: "translateY(100%)",
      pointerEvents: "none",
      zIndex: "9999",
    })
    document.body.appendChild(el)
  }
  return el
}

/** Wraps a router navigation in the ATHLIMA transition. Call from the link layer, never from blocks. */
export async function transition(
  navigate: Navigate,
  main: HTMLElement | null = document.querySelector("main"),
): Promise<void> {
  if (prefersReducedMotion()) {
    await navigate()
    return
  }
  if ("startViewTransition" in document) {
    await document.startViewTransition(() => navigate()).finished
    return
  }
  registerMotion()
  const p = panel()
  const tl = gsap.timeline()
  if (main) {
    tl.to(main, { opacity: 0, y: OUT_OFFSET_PX, duration: sec(OUT_MS), ease: ease.EASE_IN_OUT }, 0)
  }
  tl.to(p, { yPercent: -100, duration: sec(PANEL_IN_MS), ease: ease.EASE_ARCH }, 0)
  await tl.then()
  await navigate()
  gsap.set(p, { yPercent: -100 })
  await gsap
    .to(p, {
      yPercent: -200,
      duration: sec(PANEL_OUT_MS),
      ease: ease.EASE_ARCH,
      delay: sec(PANEL_OUT_START_MS - PANEL_IN_MS),
    })
    .then()
  gsap.set(p, { yPercent: 100 })
}
