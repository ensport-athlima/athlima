import type { Metadata } from "next"
import { og } from "@/lib/og"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { TwoDayFlow } from "@/components/blocks/TwoDayFlow"
import { Button } from "@/components/primitives/Button"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { programme } from "@/content/programme"

/**
 * THE PROGRAMME — the two days, and the floor. Tier 3 argument; phase-dependent (foundation/build: the
 * structure only). Says only what is confirmed. The FloorPlan block waits for B1 and the venue's own
 * nomenclature; the floor renders as four linked zones. Ends on ATHLIMA IS BY INVITATION. (A4), no CTA.
 */
export const revalidate = 300

export const metadata: Metadata = {
  title: programme.meta.title,
  description: programme.meta.description,
  alternates: { canonical: programme.path },
  ...og(programme.meta.title),
}

export default function ProgrammePage() {
  const { entry, shape, floor, night, invitation } = programme
  return (
    <main id="content">
      <StatementScreen id={entry.id} variant="entry" eyebrow={entry.eyebrow} size="xl" lines={entry.headline} lead={entry.lead} />

      <TwoDayFlow id={shape.id} marker={shape.marker} headline={shape.headline} facts={shape.facts} body={shape.body} />

      <section id={floor.id} aria-labelledby={`${floor.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={floor.marker.number} label={floor.marker.label} />
              <Display as="h2" id={`${floor.id}-headline`} size="md" lines={floor.headline} className="mt-4" />
              <p className="mt-8 max-w-measure text-body-lg text-ink-100">{floor.lead}</p>
            </div>
          </Reveal>
          <IndexGrid items={floor.zones} columns={4} className="mt-16" />
        </div>
      </section>

      <StatementScreen id={night.id} marker={night.marker} size="md" lines={night.headline} body={night.body} padding="standard">
        <div data-item>
          <Button variant="ghost" href={night.cta.href}>
            {night.cta.label}
          </Button>
        </div>
      </StatementScreen>

      <ApplyBlock id={invitation.id} headline={invitation.headline} lockup={invitation.statement} />
    </main>
  )
}
