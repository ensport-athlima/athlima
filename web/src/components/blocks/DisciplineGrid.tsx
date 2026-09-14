import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { Marquee } from "@/components/primitives/Marquee"
import { IPMark } from "@/components/marks/IPMark"
import { Scrim } from "@/components/media/Scrim"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: DisciplineGrid (compact variant)
 * ROLE IN EXPERIENCE: Emotion — the human close before the invitation. The one moment the site is
 *   allowed to be openly emotional.
 * POSITION: Homepage screen 08 (compact). The full variant is /athlima-20's.
 * PRIMARY CTA: Tier 3 — SEE ATHLIMA 20 → /athlima-20 (decision D7; no nomination CTA in v1, D4).
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 08; brand-strategy.md §4 (the twenty, locked).
 * MOTION: REVEAL on the statement and the copy; REVEAL (items, STAGGER_TIGHT) on the wrapping strip;
 *   below lg the strip is a CSS Marquee (one ambient loop, pauses on interaction, static under reduced
 *   motion); REVEAL-COVER on the image; REVEAL-LINES on the closing line. Server Component.
 * MEDIA: the strongest single image on the homepage — young Indian athletes, backs to camera, facing the
 *   city and the light; para athletes included, not as a category (B2). A positioned slot holds it.
 */
export interface DisciplineGridProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  pullLine: readonly string[]
  body: readonly string[]
  disciplines: readonly string[]
  closing: readonly DisplayLine[]
  cta: { label: string; href: string }
  className?: string
}

function Strip({ disciplines, itemised }: { disciplines: readonly string[]; itemised: boolean }) {
  return (
    <>
      {disciplines.map((d, i) => (
        <span
          key={d}
          {...(itemised ? { "data-item": true } : {})}
          className="label inline-flex items-baseline gap-2 whitespace-nowrap"
        >
          {/* Label-size numerals: --ink-400 (6.69). --ink-500 is for ≥24px only (colour.md). */}
          <span aria-hidden="true" className="text-ink-400 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          {d}
          <span aria-hidden="true" className="px-2 text-ink-600">
            ·
          </span>
        </span>
      ))}
    </>
  )
}

export function DisciplineGrid({
  id,
  marker,
  headline,
  pullLine,
  body,
  disciplines,
  closing,
  cta,
  className,
}: DisciplineGridProps) {
  if (disciplines.length !== 20)
    throw new Error("DisciplineGrid: twenty disciplines (brand-strategy.md §4).")
  const headingId = `${id}-headline`
  return (
    <section id={id} aria-labelledby={headingId} className={cn("bg-void", className)}>
      <div className="px-margin pt-section-standard">
        <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-start-2 lg:col-end-9">
            <Reveal>
              <SectionMarker number={marker.number} label={marker.label} />
              <IPMark ip="athlima20" className="mt-8 text-display-sm text-paper" />
              <Display as="h2" id={headingId} size="lg" lines={headline} className="mt-6" />
            </Reveal>
            <Reveal className="mt-12 max-w-measure">
              {/* The philosophy — Archivo has no italic; the lighter weight in sentence case is the equivalent. */}
              <p className="text-display-sm leading-(--lh-display-sm) font-medium text-paper">
                {pullLine.map((l, i) => (
                  <span key={l} className={cn("block", i > 0 && "mt-1")}>
                    {l}
                  </span>
                ))}
              </p>
              <div className="stack-p mt-8">
                {body.map((p) => (
                  <p key={p} className="text-body text-ink-100">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* The twenty — a wrapping strip from lg; a marquee below (one ambient loop, pauses on interaction). */}
        <div className="mx-auto mt-16 max-w-content-max">
          <Reveal variant="items" className="hidden flex-wrap gap-y-3 lg:flex">
            <Strip disciplines={disciplines} itemised />
          </Reveal>
          <Marquee className="border-y border-ink-800 py-3 lg:hidden">
            <Strip disciplines={disciplines} itemised={false} />
          </Marquee>
        </div>
      </div>

      {/*
        THE IMAGE belongs here (B2): the strongest single image on the homepage — young Indian athletes,
        backs to camera, facing the city and the light; para athletes included, not as a category.
        next/image, fill, 21:9 at lg, focal point from the CMS, graded to the LUT. Until then: the slot.
      */}
      <Reveal
        variant="cover"
        direction="up"
        className="relative mt-16 min-h-(--section-tall) lg:aspect-[21/9] lg:min-h-0"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950" />
        <Scrim toward="bottom" />
        <div data-cover aria-hidden="true" className="absolute inset-0 z-20 bg-void" />
        <div className="relative z-10 flex h-full min-h-(--section-tall) flex-col justify-end px-margin pb-12 lg:min-h-0 lg:pb-16">
          <Reveal variant="lines">
            <Display as="p" size="md" lines={closing} />
          </Reveal>
        </div>
      </Reveal>

      <div className="px-margin pt-12 pb-section-standard">
        <Reveal className="mx-auto max-w-content-max">
          <Button variant="ghost" href={cta.href}>
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
