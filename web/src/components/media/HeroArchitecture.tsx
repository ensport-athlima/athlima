import { ATHLIMA_A_VIEWBOX } from "@/components/marks/AthlimaA"
import { HeroDepth } from "./HeroDepth"

/**
 * HeroArchitecture (Tier 2 media): the homepage hero's void as a drawn space while there is no
 * photography — the room before it is lit. Three layers, all server HTML:
 *   the floor      a one-point perspective plane in --ink-800 / --ink-700 hairlines, its horizon at the
 *                  structure's baseline, breathing very slowly toward the viewer
 *   the structure  the A device standing at the right void — --ink-900 fill, a hairline edge, and ONE
 *                  lime edge: the outer right leg as an LED edge, a light source in the scene, not a glow
 *                  (imagery.md §6: architecture, light, a drawn form); its reflection in the floor at 6%
 *   the light      a band of --ink-700 crossing the floor every 16 s
 * The structure occupies exactly the box the entry overlay draws in (EntryOverlay), so the arrival
 * stroke lands on it and the dissolve leaves it standing — the A is on screen once. Motion is CSS,
 * transform and opacity only, static under reduced motion; HeroDepth adds a few pixels of parallax to
 * the pointer on hover-capable devices. No blur, no gradient, no particles, no second colour.
 */
const FLOOR = { w: 1600, h: 600 }
const RADIALS = 14
const ROWS = 11

function floorLines() {
  const radials: string[] = []
  for (let i = 0; i <= RADIALS; i++) {
    // Fan from the vanishing point (top centre) to the bottom edge, spread wider than the frame.
    const x = -FLOOR.w * 0.6 + (FLOOR.w * 2.2 * i) / RADIALS
    radials.push(`M${FLOOR.w / 2} 0 L${x} ${FLOOR.h}`)
  }
  const rows: number[] = []
  for (let i = 1; i <= ROWS; i++) {
    // Perspective spacing: rows crowd toward the horizon.
    const t = i / ROWS
    rows.push(FLOOR.h * t * t)
  }
  return { radials: radials.join(" "), rows }
}

/** The floor alone — the perspective plane from its horizon to the bottom edge, and the light that crosses it. */
export function Floor({ depth = false }: { depth?: boolean }) {
  const { radials, rows } = floorLines()
  return (
    <>
      <svg
        data-depth={depth ? "floor" : undefined}
        viewBox={`0 0 ${FLOOR.w} ${FLOOR.h}`}
        preserveAspectRatio="none"
        className="hero-floor absolute inset-x-0 bottom-0 w-full"
      >
        <g fill="none" strokeWidth="1" vectorEffect="non-scaling-stroke">
          {rows.map((y, i) => (
            <line key={y} x1="0" x2={FLOOR.w} y1={y} y2={y} stroke={i % 3 === 2 ? "var(--ink-500)" : "var(--ink-600)"} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
        <path d={radials} fill="none" stroke="var(--ink-600)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="hero-light absolute inset-x-0" />
    </>
  )
}

/**
 * The floor as an entry page's empty state: the same plane, horizon at the lower third, no structure —
 * the A is the homepage's alone (imagery.md §6: once per viewport, never a pattern).
 */
export function EntryFloor() {
  return (
    <div aria-hidden="true" className="hero-scene entry-floor absolute inset-0 overflow-hidden">
      <Floor />
    </div>
  )
}

export function HeroArchitecture() {
  return (
    <div data-hero-scene aria-hidden="true" className="hero-scene absolute inset-0 overflow-hidden">
      {/* THE FLOOR — from the horizon (the structure's baseline) to the bottom edge. */}
      <Floor depth />

      {/* THE STRUCTURE — in the entry overlay's box, so the arrival stroke lands on it. */}
      <div className="absolute inset-0 flex items-start justify-center px-margin pt-[22svh] [--a-w:min(50vw,55svh)] sm:items-center sm:justify-end sm:pt-0 sm:[--a-w:min(30vw,55svh)]">
        <div data-depth="structure" className="relative" style={{ width: "var(--a-w)" }}>
          {/*
            The structure and its light. The box is the A's (the overlay draws in the same box); the
            light the LED edge casts on the floor and its reflection overflow it, below the baseline. The light is a
            source in the scene — an LED strip on the outer right leg, the pool it throws on the floor,
            its reflection in the surface — not a halo behind the mark (imagery.md §6).
          */}
          <svg viewBox={ATHLIMA_A_VIEWBOX} overflow="visible" className="block h-auto w-full overflow-visible">
            <defs>
              <linearGradient id="hero-pool" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--lime)" stopOpacity="0.26" />
                <stop offset="1" stopColor="var(--lime)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hero-edge-reflection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--lime)" stopOpacity="0.5" />
                <stop offset="1" stopColor="var(--lime)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* The pool of light the edge throws across the floor, from the foot of the leg. */}
            <polygon points="330,348 460,348 600,540 160,540" fill="url(#hero-pool)" />
            {/* The reflection of the structure and of the lit edge in the floor. */}
            <g transform="translate(0,696) scale(1,-1)" className="hero-reflection">
              <path fill="var(--ink-800)" d="M230 0 460 348 360 348 230 153 98 348 0 348Z" />
              <line x1="230" y1="0" x2="460" y2="348" stroke="url(#hero-edge-reflection)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </g>
            <path fill="var(--ink-900)" stroke="var(--ink-600)" strokeWidth="1" vectorEffect="non-scaling-stroke" d="M230 0 460 348 360 348 230 153 98 348 0 348Z" />
            {/* The LED strip: the edge, lit, with light travelling down it. */}
            <line x1="230" y1="0" x2="460" y2="348" stroke="var(--lime)" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="butt" />
            <line className="hero-led-travel" x1="230" y1="0" x2="460" y2="348" stroke="var(--lime-bright)" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="butt" pathLength="100" />
          </svg>
        </div>
      </div>

      <HeroDepth />
    </div>
  )
}
