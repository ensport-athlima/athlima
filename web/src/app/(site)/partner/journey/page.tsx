import type { Metadata } from "next"
import { og } from "@/lib/og"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { SequenceRail } from "@/components/blocks/SequenceRail"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { CategoryRow } from "@/components/primitives/CategoryRow"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { partnerJourney } from "@/content/partner"
import { routes } from "@/lib/routes"

/**
 * PARTNER / THE JOURNEY — the seven stages a partner's brand moves through, and the five ways to
 * participate. Tier 3 argument. The SequenceRail's one other home besides /connect.
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: partnerJourney.meta.title,
  description: partnerJourney.meta.description,
  alternates: { canonical: routes.partnerJourney },
  ...og(partnerJourney.meta.title),
}

export default function PartnerJourneyPage() {
  const { entry, stages, ways, invitation } = partnerJourney
  return (
    <main id="content">
      <div className="px-margin pt-8">
        <Breadcrumb
          className="mx-auto max-w-content-max"
          crumbs={[
            { name: "PARTNER", path: routes.partner },
            { name: "THE JOURNEY", path: routes.partnerJourney },
          ]}
        />
      </div>
      <StatementScreen id={entry.id} size="lg" lines={entry.headline} sub={entry.sub} lead={entry.lead} padding="standard" />

      <section id={stages.id} aria-labelledby={`${stages.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={stages.marker.number} label={stages.marker.label} />
              <Display as="h2" id={`${stages.id}-headline`} size="md" lines={stages.headline} className="mt-4" />
            </div>
          </Reveal>
          <SequenceRail steps={stages.steps} className="mt-16" />
          <Reveal className="mt-16 max-w-measure">
            <p className="text-body-lg text-ink-100">{stages.multiplier}</p>
          </Reveal>
          <Reveal>
            <CategoryRow label={stages.multiplierLabels.label} items={stages.multiplierLabels.items} className="mt-12" />
            <CategoryRow variant="rule" label={stages.progression.label} items={stages.progression.items} className="mt-8" />
          </Reveal>
        </div>
      </section>

      <section id={ways.id} aria-labelledby={`${ways.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={ways.marker.number} label={ways.marker.label} />
              <Display as="h2" id={`${ways.id}-headline`} size="md" lines={ways.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid items={ways.items} columns={3} className="mt-16" />
          <Reveal className="mt-12 max-w-measure">
            <p className="text-body-lg text-ink-100">{ways.body}</p>
          </Reveal>
        </div>
      </section>

      <ApplyBlock id={invitation.id} headline={invitation.headline} functional={invitation.functional} />
    </main>
  )
}
