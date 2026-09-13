/**
 * THE ONLY place durations are defined (03_DESIGN_SYSTEM/motion.md §2).
 * Milliseconds. Nothing exceeds CINEMATIC; anything longer is scroll-scrubbed.
 */
export const DURATIONS = {
  /** Focus rings, immediate feedback. */
  INSTANT: 100,
  /** Hover, small UI state. */
  FAST: 200,
  /** The default UI transition. */
  BASE: 300,
  /** Content reveals. */
  MEDIUM: 500,
  /** Large reveals, image covers. */
  SLOW: 800,
  /** The ceiling. Nothing exceeds it. */
  CINEMATIC: 1200,
  /** The entry overlay only: the A draws (motion.md §7). */
  ENTRY_DRAW: 900,
  /** The entry overlay only: the overlay dissolves (motion.md §7). ENTRY_DRAW + ENTRY_DISSOLVE = 1500. */
  ENTRY_DISSOLVE: 600,
} as const

export const STAGGERS = {
  /** Items in a list or grid. */
  STAGGER_TIGHT: 40,
  /** Lines of display type. */
  STAGGER_LINE: 60,
  /** Large distinct elements. */
  STAGGER_LOOSE: 100,
} as const

/** Maximum staggered items — beyond this the last one arrives too late. */
export const MAX_STAGGER_ITEMS = 8

/** Reduced-motion entrances are a fade of at most this, or instant (accessibility.md §2). */
export const REDUCED_FADE_MAX = 150

/** Page transition: legible new content within this (architecture.md §3). */
export const TRANSITION_BUDGET = 600

/** Entry overlay: complete within this of JS becoming available (motion.md §7, decision D1). */
export const ENTRY_OVERLAY_MAX = 1500

/** GSAP takes seconds. Convert at the boundary, never by hand. */
export const sec = (ms: number): number => ms / 1000
