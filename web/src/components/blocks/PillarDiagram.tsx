import Link from "next/link"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { AthlimaA } from "@/components/marks/AthlimaA"
import { Reveal } from "@/motion/Reveal"
import type { PillarDef } from "@/content/pillars"
import { cn } from "@/lib/cn"

/**
 * BLOCK: PillarDiagram
 * ROLE IN EXPERIENCE: Credibility — structure is the proof. Five dimensions converging on one platform;
 *   the convergence is the message (brand-pillars.md §4). The same diagram on /the-world and /about.
 * POSITION: /the-world section 02; /about section 02.
 * PRIMARY CTA: none — each pillar is a Tier-3 link to its Journal cluster.
 * SOURCE OF TRUTH: 01_STRATEGY/brand-pillars.md §2, §4; 04_CONTENT/the-world.md §02.
 * MOTION: REVEAL (items, STAGGER_LOOSE) on the five nodes and their connectors; the statement
 *   REVEAL-LINES. Complete and legible as a static picture; under reduced motion it is simply present.
 * A11Y: inline SVG with real text; each pillar an <a> with a <title>, focusable in fixed order; a
 *   visually-hidden list of the five links is the text alternative. Below md the arc becomes a column.
 */
export interface PillarDiagramProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  pillars: readonly PillarDef[]
  body: string
  className?: string
}

// The arc: five nodes on a semicircle above the A, in fixed order left → right.
const VB = { w: 1000, h: 520 }
const CENTRE = { x: 500, y: 360 }
const RADIUS = 250
const NODE_R = 4
const A_W = 120
const ANGLES = [180, 225, 270, 315, 360] // degrees; SVG y is down, so sin(a) < 0 is above the centre

function nodeAt(i: number) {
  const a = ((ANGLES[i] ?? 270) * Math.PI) / 180
  return { x: CENTRE.x + RADIUS * Math.cos(a), y: CENTRE.y + RADIUS * Math.sin(a) }
}

export function PillarDiagram({
  id,
  marker,
  headline,
  pillars,
  body,
  className,
}: PillarDiagramProps) {
  if (pillars.length !== 5)
    throw new Error("PillarDiagram: five pillars, fixed order (brand-pillars.md §4).")
  const headingId = `${id}-headline`
  const aHalf = A_W / 2
  const aH = (A_W * 348) / 460

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("bg-void px-margin py-section-standard", className)}
    >
      <div className="mx-auto max-w-content-max">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <Reveal className="lg:col-start-2 lg:col-end-9">
            <SectionMarker number={marker.number} label={marker.label} />
            <Display as="h2" id={headingId} size="lg" lines={headline} className="mt-4" />
          </Reveal>
        </div>

        {/* The diagram — md and up. */}
        <Reveal variant="items" stagger="loose" className="mt-16 hidden md:block">
          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            role="img"
            aria-labelledby={`${id}-diagram-title`}
            className="mx-auto block h-auto w-full max-w-4xl"
          >
            <title id={`${id}-diagram-title`}>
              Five pillars — BUILD, EQUIP, ENABLE, PERFORM, GOVERN — converging on ATHLIMA
            </title>
            {pillars.map((p, i) => {
              const n = nodeAt(i)
              const anchor = i === 0 ? "end" : i === 4 ? "start" : "middle"
              const tx = i === 0 ? n.x - 16 : i === 4 ? n.x + 16 : n.x
              const ty = i === 2 ? n.y - 20 : i === 1 || i === 3 ? n.y - 16 : n.y + 5
              // The connector stops short of the A's bounding box.
              const dx = CENTRE.x - n.x
              const dy = CENTRE.y - n.y
              const len = Math.hypot(dx, dy)
              const ex = n.x + (dx / len) * (len - aHalf - 24) * (i === 2 ? 0.55 : 1)
              const ey = n.y + (dy / len) * (len - aHalf - 24) * (i === 2 ? 0.55 : 1)
              return (
                <g key={p.id} data-item>
                  <line
                    x1={n.x}
                    y1={n.y}
                    x2={ex}
                    y2={ey}
                    stroke="var(--lime)"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                  />
                  <circle cx={ex} cy={ey} r={NODE_R} fill="var(--lime)" fillOpacity="0.4" />
                  <a
                    href={p.href}
                    className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    <title>{`${p.label} — ${p.definition}`}</title>
                    <circle cx={n.x} cy={n.y} r={NODE_R} fill="var(--lime)" fillOpacity="0.4" />
                    <text
                      x={tx}
                      y={ty}
                      textAnchor={anchor}
                      fill="var(--paper)"
                      fontFamily="var(--font-archivo), system-ui, sans-serif"
                      fontWeight="850"
                      fontSize="34"
                      style={{ fontVariationSettings: '"wdth" 66', letterSpacing: "-0.01em" }}
                    >
                      {p.label}
                    </text>
                  </a>
                </g>
              )
            })}
            {/* The mark at the centre — the only lime that is not a device line. */}
            <g
              transform={`translate(${CENTRE.x - aHalf}, ${CENTRE.y - aH / 2})`}
              className="text-lime"
            >
              <svg width={A_W} height={aH} viewBox="0 0 460 348" aria-hidden="true">
                <path fill="currentColor" d="M230 0 460 348 360 348 230 153 98 348 0 348Z" />
              </svg>
            </g>
          </svg>
        </Reveal>

        {/* Text alternative for assistive technology, and the layout below md. */}
        <ul className="sr-only md:not-sr-only md:hidden">
          {pillars.map((p) => (
            <li key={p.id}>
              <Link href={p.href}>
                {p.label}: {p.definition}
              </Link>
            </li>
          ))}
        </ul>
        <Reveal variant="items" stagger="loose" className="mt-12 md:hidden">
          <div className="mx-auto w-24 text-lime">
            <AthlimaA variant="filled" decorative />
          </div>
          <ol className="mt-12 border-t border-ink-800">
            {pillars.map((p, i) => (
              <li key={p.id} data-item className="border-b border-ink-800">
                <Link
                  href={p.href}
                  className="flex min-h-touch items-baseline gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  <span className="label text-ink-500 tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="display block text-display-sm text-paper">{p.label}</span>
                    <span className="mt-1 block text-body-sm text-ink-200">{p.definition}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <Reveal className="lg:col-start-2 lg:col-end-9">
            <p className="max-w-measure text-body text-ink-100">{body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
