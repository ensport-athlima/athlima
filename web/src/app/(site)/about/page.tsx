import type { Metadata } from "next"
import { og } from "@/lib/og"
import { PillarDiagram } from "@/components/blocks/PillarDiagram"
import { ProvenanceBlock } from "@/components/blocks/ProvenanceBlock"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { about } from "@/content/about"
import { pillarDefs } from "@/content/pillars"

/**
 * ABOUT — ATHLIMA, ENSPORT Ventures and the ENARR Group. Tier 2; the credibility anchor (Journeys 03
 * and 06 convert here). Five sections from people.md; the provenance copy is decision B3's. No Tier-2
 * CTA (A1) — the one link out is Explore the Group →.
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: about.path },
  ...og(about.meta.title),
}

export default function AboutPage() {
  const { what, pillars, provenance, whyNow, standard } = about
  return (
    <main id="content">
      <StatementScreen id={what.id} variant="entry" eyebrow={what.eyebrow} size="xl" lines={what.headline} lead={what.lead[0]} body={[what.lead[1]]} />
      <section aria-label="Institutional line" className="bg-void px-margin pb-section-standard">
        <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-start-2 lg:col-end-9">
            <Reveal>
              <p className="label">{what.institutionalLine}</p>
            </Reveal>
            <Reveal className="stack-p mt-12 max-w-measure">
              {what.body.map((p) => (
                <p key={p} className="text-body text-ink-100">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <PillarDiagram id={pillars.id} marker={pillars.marker} headline={pillars.headline} pillars={pillarDefs} body={pillars.body} />

      <ProvenanceBlock
        id={provenance.id}
        marker={provenance.marker}
        headline={provenance.headline}
        body={provenance.body}
        office={provenance.office}
        groupCta={provenance.groupCta}
      />

      <StatementScreen id={whyNow.id} marker={whyNow.marker} size="md" lines={whyNow.headline} body={whyNow.body} padding="standard" />

      <section id={standard.id} aria-labelledby={`${standard.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-start-2 lg:col-end-10">
            <Reveal>
              <SectionMarker number={standard.marker.number} label={standard.marker.label} />
              <Display as="h2" id={`${standard.id}-headline`} size="md" lines={standard.headline} className="mt-4" />
              <p className="mt-8 max-w-measure text-body-lg text-ink-100">{standard.lead}</p>
            </Reveal>
            <Reveal as="ol" variant="items" className="mt-12 border-t border-ink-800">
              {standard.questions.map((q, i) => (
                <li key={q} data-item className="flex items-baseline gap-6 border-b border-ink-800 py-5">
                  <span className="display text-display-sm leading-none text-ink-500 tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-display-sm leading-(--lh-display-sm) font-medium text-paper">{q}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
