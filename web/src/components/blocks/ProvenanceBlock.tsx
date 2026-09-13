import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: ProvenanceBlock
 * ROLE IN EXPERIENCE: Credibility — the screen that converts the institutional audience: there is a real
 *   institution behind this, not a promoter. Two of six journeys convert here.
 * POSITION: Homepage screen 07 — the site's one light section (data-surface="light"). Also /about.
 * PRIMARY CTA: Tier 3 — ABOUT ATHLIMA, ENSPORT AND ENARR → /about.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 07; 01_STRATEGY/brand-strategy.md §7.
 * MOTION: REVEAL only. The calmest moment on the page.
 * CLAIMS: only the locked relationship sentence renders. The ENARR description and the Group's belief
 *   are [TO VERIFY — B3] and are passed as `pendingApproval` — never rendered until approved. The ENARR
 *   and ENSPORT marks exist only as raster (B2); marks are never raster, so two named plates hold their
 *   place. ENARR navy sits on a light plate by rule (colour.md §1).
 */
export interface ProvenanceBlockProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  /** Approved copy. */
  body: readonly string[]
  /** Copy awaiting B3. Kept with the block so it drops in on approval; NEVER rendered while pending. */
  pendingApproval?: readonly string[]
  ensportLine: string
  cta: { label: string; href: string }
  className?: string
}

export function ProvenanceBlock({
  id,
  marker,
  headline,
  body,
  ensportLine,
  cta,
  className,
}: ProvenanceBlockProps) {
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      data-surface="light"
      aria-labelledby={headingId}
      className={cn("bg-paper px-margin py-section-standard text-void", className)}
    >
      <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
        <Reveal className="lg:col-start-2 lg:col-end-9">
          <SectionMarker number={marker.number} label={marker.label} />
          <Display as="h2" id={headingId} size="md" lines={headline} className="mt-4" />

          <div className="stack-p mt-8 max-w-measure">
            {body.map((p) => (
              <p key={p} className="text-body text-ink-700">
                {p}
              </p>
            ))}
          </div>

          {/*
            THE TWO MARKS belong here (B2/B3): ENARR (navy and gold) on its own light plate, ENSPORT (gold
            and white) beside it — at their own colours, never recoloured, generous clear space, modest
            scale, as SVG. Until the vectors arrive, two named plates hold the composition.
          */}
          <div className="mt-16 grid grid-cols-1 gap-gutter sm:grid-cols-2">
            <div className="flex min-h-24 items-center bg-paper-warm px-8">
              <span className="label text-ink-600">THE ENARR GROUP</span>
            </div>
            <div className="flex min-h-24 items-center bg-paper-warm px-8">
              <span className="label text-ink-600">ENSPORT VENTURES</span>
            </div>
          </div>
          <p className="label mt-4 text-ink-600">{ensportLine}</p>

          <div className="mt-12">
            <Button variant="ghost" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
