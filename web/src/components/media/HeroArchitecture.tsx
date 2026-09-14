import { AthlimaA, ATHLIMA_A_VIEWBOX } from "@/components/marks/AthlimaA"
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

export function HeroArchitecture() {
  const { radials, rows } = floorLines()
  return (
    <div data-hero-scene aria-hidden="true" className="hero-scene absolute inset-0 overflow-hidden">
      {/* THE FLOOR — from the horizon (the structure's baseline) to the bottom edge. */}
      <svg
        data-depth="floor"
        viewBox={`0 0 ${FLOOR.w} ${FLOOR.h}`}
        preserveAspectRatio="none"
        className="hero-floor absolute inset-x-0 bottom-0 w-full"
      >
        <g className="hero-floor-rows" fill="none" strokeWidth="1" vectorEffect="non-scaling-stroke">
          {rows.map((y, i) => (
            <line key={y} x1="0" x2={FLOOR.w} y1={y} y2={y} stroke={i % 3 === 2 ? "var(--ink-600)" : "var(--ink-700)"} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
        <path d={radials} fill="none" stroke="var(--ink-700)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* THE LIGHT — a band crossing the floor. */}
      <div className="hero-light absolute inset-x-0 bg-ink-700" />

      {/* THE STRUCTURE — in the entry overlay's box, so the arrival stroke lands on it. */}
      <div className="absolute inset-0 flex items-start justify-center px-margin pt-[22svh] [--a-w:min(50vw,55svh)] sm:items-center sm:justify-end sm:pt-0 sm:[--a-w:min(30vw,55svh)]">
        <div data-depth="structure" className="relative" style={{ width: "var(--a-w)" }}>
          <svg viewBox={ATHLIMA_A_VIEWBOX} className="block h-auto w-full">
            <path fill="var(--ink-900)" stroke="var(--ink-700)" strokeWidth="1" vectorEffect="non-scaling-stroke" d="M230 0 460 348 360 348 230 153 98 348 0 348Z" />
            {/* The one light source: the outer right leg as an LED edge. */}
            <line x1="230" y1="0" x2="460" y2="348" stroke="var(--lime)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="butt" />
          </svg>
          {/* The reflection in the floor. */}
          <div className="absolute inset-x-0 top-full opacity-[0.06] [transform:scaleY(-1)]">
            <AthlimaA variant="filled" decorative className="text-ink-300" />
          </div>
        </div>
      </div>

      <HeroDepth />
    </div>
  )
}
