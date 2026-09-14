import type { Metadata } from "next"
import { og } from "@/lib/og"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { Reveal } from "@/motion/Reveal"
import { partner } from "@/content/partner"
import { routes } from "@/lib/routes"

/**
 * PARTNER — the Founding Partner proposition. Tier 2 destination; the site's commercial spine
 * (decision A2: BUILD WITH ATHLIMA lands here). Six sections from 04_CONTENT/opportunities.md.
 * No pricing, no packages, no comparison grid, anywhere.
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: partner.meta.title,
  description: partner.meta.description,
  alternates: { canonical: routes.partner },
  ...og(partner.meta.title),
}

function ValueList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((v) => (
        <li key={v} className="text-body-sm text-ink-300">
          {v}
        </li>
      ))}
    </ul>
  )
}

export default function PartnerPage() {
  const { reframe, capabilities, value, reasons, connect, invitation } = partner
  return (
    <main id="content">
      <StatementScreen
        id={reframe.id}
        variant="entry"
        media="entry.partner"
        underSubNav
        eyebrow={reframe.eyebrow}
        size="xl"
        lines={reframe.headline}
        sub={reframe.sub}
        lead={reframe.lead}
      />

      <section id={capabilities.id} aria-labelledby={`${capabilities.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={capabilities.marker.number} label={capabilities.marker.label} />
              <Display as="h2" id={`${capabilities.id}-headline`} size="md" lines={capabilities.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid items={capabilities.items} columns={4} className="mt-16" />
          <Reveal variant="lines" className="mt-16">
            <Display as="p" size="md" lines={capabilities.closing} />
          </Reveal>
        </div>
      </section>

      <section id={value.id} aria-labelledby={`${value.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={value.marker.number} label={value.marker.label} />
              <Display as="h2" id={`${value.id}-headline`} size="md" lines={value.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid
            items={value.items.map((v) => ({ title: v.title, line: v.line, detail: <ValueList items={v.detail} /> }))}
            columns={3}
            className="mt-16"
          />
          <Reveal variant="lines" className="mt-16">
            <Display as="p" size="lg" lines={value.closing} />
          </Reveal>
          <Reveal className="mt-8 max-w-measure">
            <p className="text-body-lg text-ink-100">{value.closingLine}</p>
          </Reveal>
        </div>
      </section>

      <section id={reasons.id} aria-labelledby={`${reasons.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={reasons.marker.number} label={reasons.marker.label} />
              <Display as="h2" id={`${reasons.id}-headline`} size="md" lines={reasons.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid items={reasons.items} columns={4} className="mt-16" />
          <Reveal variant="lines" className="mt-16">
            <Display as="p" size="md" lines={reasons.closing} />
          </Reveal>
        </div>
      </section>

      <StatementScreen
        id={connect.id}
        marker={connect.marker}
        size="md"
        lines={connect.headline}
        body={connect.body}
        padding="standard"
      >
        <div data-item>
          <Button variant="ghost" href={connect.cta.href}>
            {connect.cta.label}
          </Button>
        </div>
      </StatementScreen>

      <ApplyBlock id={invitation.id} headline={invitation.headline} functional={invitation.functional} />
    </main>
  )
}
