"use client"

/**
 * The custom cursor's behaviour (components.md `Cursor`; component-rules.md §6; accessibility.md §4).
 * Four modes only: default · link · drag · video. Never magnetic (decision D11).
 * Off on touch, off under reduced motion, off during keyboard navigation, never over text inputs.
 * The Cursor primitive renders the element; this hook moves it. It is purely decorative.
 */
import { useEffect, useRef, useState, type RefObject } from "react"
import { gsap, MOTION } from "./registry"
import { DURATIONS, sec } from "./durations"

export type CursorMode = "default" | "link" | "drag" | "video"

const MODE_ATTR = "data-cursor"
const TEXT_INPUTS = "input, textarea, select, [contenteditable='true']"
const INTERACTIVE = "a, button, [role='button'], summary"

export function useCursor<T extends HTMLElement = HTMLElement>(): {
  ref: RefObject<T | null>
  mode: CursorMode
  enabled: boolean
} {
  const ref = useRef<T | null>(null)
  const [mode, setMode] = useState<CursorMode>("default")
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const allowed = window.matchMedia(`${MOTION.desktop} and ${MOTION.full}`)
    const update = () => setEnabled(allowed.matches)
    update()
    allowed.addEventListener("change", update)
    return () => allowed.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) return

    // ~80ms lag ceiling: quickTo with a FAST tween is under it.
    const x = gsap.quickTo(el, "x", { duration: sec(DURATIONS.FAST), ease: "none" })
    const y = gsap.quickTo(el, "y", { duration: sec(DURATIONS.FAST), ease: "none" })
    let keyboard = false

    const onMove = (e: PointerEvent) => {
      if (keyboard) {
        keyboard = false
        el.style.opacity = "1"
      }
      x(e.clientX)
      y(e.clientY)
      const target = e.target as Element | null
      if (!target) return
      if (target.closest(TEXT_INPUTS)) {
        el.style.opacity = "0" // the native text cursor wins
        return
      }
      el.style.opacity = "1"
      const explicit = target.closest<HTMLElement>(`[${MODE_ATTR}]`)?.getAttribute(MODE_ATTR)
      if (explicit === "link" || explicit === "drag" || explicit === "video") setMode(explicit)
      else setMode(target.closest(INTERACTIVE) ? "link" : "default")
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        keyboard = true
        el.style.opacity = "0"
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("keydown", onKey)
    }
  }, [enabled])

  return { ref, mode, enabled }
}
