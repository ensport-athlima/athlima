"use client"

/**
 * BLOCK: EntrySequence — the client half: the entry overlay (motion.md §7, decision D1).
 * ROLE IN EXPERIENCE: Emotion + orientation — the arrival. "You are entering a world, not opening a
 *   page", in 1.5 seconds, drawn over a hero that was already complete.
 * POSITION: Homepage screen 01, through EntrySequence's `overlay` slot.
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: 03_DESIGN_SYSTEM/motion.md §7; 06_BUILD/architecture.md §5.
 * MOTION: 0–900ms the A's single centreline stroke draws (stroke-dashoffset L → 0, EASE_ARCH);
 *   900–1500ms the overlay dissolves (opacity 1 → 0, EASE_OUT); then it unmounts. Time-based, once per
 *   session. Never mounts under reduced motion, save-data, 2g/slow-2g, off the top of the page, with a
 *   hash, or if JS arrived more than three seconds after navigation — an arrival must be an arrival.
 *
 * Renders null on the server and on the first client render, so the server HTML never contains it and
 * nothing beneath it is ever hidden or delayed. The A dissolves completely; a settle-onto-the-poster
 * transform returns when the poster carries the A as architecture (B2).
 */
import { useRef, useState, useSyncExternalStore } from "react"
import { AthlimaA, ATHLIMA_A_STROKE_LENGTH } from "@/components/marks/AthlimaA"
import { gsap, useGSAP, MOTION } from "@/motion/registry"
import { ease } from "@/motion/easings"
import { DURATIONS, sec } from "@/motion/durations"

const SESSION_KEY = "athlima:entry"
/** If JS arrives later than this after navigation, the visitor is already reading. No arrival. */
const LATE_ARRIVAL_MS = 3000

interface NetworkInformationLike {
  saveData?: boolean
  effectiveType?: string
}

function shouldPlay(): boolean {
  if (typeof window === "undefined") return false
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return false
  } catch {
    // Storage unavailable (private mode, blocked): play once, cannot remember. Acceptable.
  }
  if (window.matchMedia(MOTION.reduced).matches) return false
  const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g") return false
  if (window.scrollY > 0 || window.location.hash) return false
  if (performance.now() > LATE_ARRIVAL_MS) return false
  return true
}

// The decision is made once per page load, on the client, and read through useSyncExternalStore so
// the server snapshot (never play) hydrates cleanly before the client snapshot takes over.
let decision: boolean | null = null
const subscribe = () => () => {}
const getSnapshot = () => (decision ??= shouldPlay())
const getServerSnapshot = () => false

export function EntryOverlay() {
  const play = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [done, setDone] = useState(false)
  const playing = play && !done
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)

  useGSAP(
    () => {
      if (!playing) return
      const overlay = overlayRef.current
      const path = pathRef.current
      if (!overlay || !path) return

      try {
        window.sessionStorage.setItem(SESSION_KEY, "1")
      } catch {
        // see above
      }
      overlay.style.willChange = "opacity"
      const tl = gsap.timeline({
        onComplete: () => {
          overlay.style.willChange = ""
          setDone(true)
        },
      })
      tl.to(path, {
        strokeDashoffset: 0,
        duration: sec(DURATIONS.ENTRY_DRAW),
        ease: ease.EASE_ARCH,
      })
      tl.to(overlay, {
        opacity: 0,
        duration: sec(DURATIONS.ENTRY_DISSOLVE),
        ease: ease.EASE_OUT,
      })
      return () => tl.kill()
    },
    { scope: overlayRef, dependencies: [playing] },
  )

  if (!playing) return null

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      data-entry-overlay
      className="pointer-events-none fixed inset-0 z-40 flex items-start justify-center px-margin pt-[22svh] text-lime [--a-w:min(50vw,55svh)] sm:items-center sm:justify-end sm:pt-0 sm:[--a-w:min(30vw,55svh)]"
    >
      {/*
        The A occupies the hero's void, never the headline: from sm up the empty right half, vertically
        centred; below sm (portrait phones), the empty upper half (top at 22svh — one-off geometry, hence the arbitrary
        value). Width = min(30vw, 42svh × 460/348) from sm — 50vw on portrait phones — never taller than
        42% of the viewport.
      */}
      <div style={{ width: "var(--a-w)" }}>
        <AthlimaA
          variant="stroke"
          decorative
          pathRef={pathRef}
          pathStyle={{
            strokeDasharray: ATHLIMA_A_STROKE_LENGTH,
            strokeDashoffset: ATHLIMA_A_STROKE_LENGTH,
          }}
        />
      </div>
    </div>
  )
}
