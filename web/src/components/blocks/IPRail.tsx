import Link from "next/link"
import { IPMark, IP_NAMES, type IPId } from "@/components/marks/IPMark"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { ips } from "@/content/site"
import { cn } from "@/lib/cn"

/**
 * BLOCK: IPRail
 * ROLE IN EXPERIENCE: Orientation — every IP page ends by showing the other five doors, so no visitor
 *   leaves an experience believing it was the whole world.
 * POSITION: Section 05 of every IP page (experiences.md, the shared skeleton).
 * PRIMARY CTA: none (navigational).
 * SOURCE OF TRUTH: content/experiences.ts `ipRail`; brand-strategy.md §4 for the roles.
 * MOTION: REVEAL (items, STAGGER_TIGHT) via <Reveal>; hover in CSS — the hairline turns lime, the row
 *   shifts 8px right (the IndexGrid rule). Server Component.
 */
export interface IPRailProps {
  id: string
  marker: { number: number; label: string }
  /** The page's own IP — omitted from the rail. */
  current: IPId
  rail: readonly { ip: IPId; href: string }[]
  className?: string
}

const ROLE: Record<IPId, string> = {
  athlimax: ips[0].role,
  symposium: ips[1].role,
  activ8: ips[2].role,
  afterhours: ips[3].role,
  connect: ips[4].role,
  athlima20: ips[5].role,
}

export function IPRail({ id, marker, current, rail, className }: IPRailProps) {
  const others = rail.filter((r) => r.ip !== current)
  return (
    <section id={id} aria-label={marker.label} className={cn("bg-void px-margin py-section-standard", className)}>
      <div className="mx-auto max-w-content-max">
        <Reveal>
          <SectionMarker number={marker.number} label={marker.label} />
        </Reveal>
        <Reveal as="ul" variant="items" className="mt-12 border-t border-ink-800">
          {others.map((r) => (
            <li key={r.ip} data-item className="index-item">
              <Link
                href={r.href}
                data-shift
                className="flex min-h-touch flex-col gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <IPMark ip={r.ip} decorative className="text-display-sm text-paper" />
                <span className="sr-only">{IP_NAMES[r.ip]}. </span>
                <span className="label">{ROLE[r.ip]}</span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
