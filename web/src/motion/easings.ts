/**
 * THE ONLY place easing curves are defined (03_DESIGN_SYSTEM/motion.md §1).
 * Five curves. No others. No bounce, no elastic, no overshoot — anywhere.
 * The CSS mirrors live in styles/tokens.css as --ease-*; keep both in step.
 */
export const EASINGS = {
  /** The default. Entrances, reveals, most things. */
  EASE_OUT: "0.16, 1, 0.3, 1",
  /** Movement between two states — panels, transitions. */
  EASE_IN_OUT: "0.65, 0, 0.35, 1",
  /** UI: hovers, focus, small state changes. */
  EASE_SHARP: "0.4, 0, 0.2, 1",
  /** Heavy, architectural. Large elements. The A. Full-bleed reveals. */
  EASE_ARCH: "0.22, 1, 0.36, 1",
} as const

export type EasingName = keyof typeof EASINGS

/** Scroll-scrubbed sequences and marquees only. */
export const LINEAR = "none" as const

/** GSAP ease names, registered from EASINGS by motion/registry.ts via CustomEase. */
export const ease = {
  EASE_OUT: "athlima.out",
  EASE_IN_OUT: "athlima.inOut",
  EASE_SHARP: "athlima.sharp",
  EASE_ARCH: "athlima.arch",
  LINEAR,
} as const
