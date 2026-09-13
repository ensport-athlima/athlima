import type { Metadata } from "next"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { CategoryRow } from "@/components/primitives/CategoryRow"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { partnerModel } from "@/content/partner"
import { routes } from "@/lib/routes"

/**
 * PARTNER / THE MODEL — the six levels and the territories. Tier 3 argument: type-led, disciplined,
 * fast. No pricing, no packages, no brand names (positioning.md §6).
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: partnerModel.meta.title,
  description: partnerModel.meta.description,
  alternates: { canonical: routes.partnerModel },
}

export default function PartnerModelPage() {
  const { entry, levels, territories, space, invitation } = partnerModel
  return (
    <main id="content">
      <div className="px-margin pt-8">
        <Breadcrumb
          className="mx-auto max-w-content-max"
          crumbs={[
            { name: "PARTNER", path: routes.partner },
            { name: "THE MODEL", path: routes.partnerModel },
          ]}
        />
      </div>
      <StatementScreen id={entry.id} size="xl" lines={entry.headline} body={entry.body} padding="standard" />

      <section id={levels.id} aria-labelledby={`${levels.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={levels.marker.number} label={levels.marker.label} />
              <Display as="h2" id={`${levels.id}-headline`} size="md" lines={levels.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid items={levels.items} columns={3} className="mt-16" />
          <Reveal className="mt-12">
            <p className="text-body-lg text-paper">{levels.line}</p>
          </Reveal>
        </div>
      </section>

      <StatementScreen id={territories.id} marker={territories.marker} size="md" lines={territories.headline} padding="standard">
        <div data-item>
          <CategoryRow label={territories.label} items={territories.items} />
        </div>
      </StatementScreen>

      <StatementScreen id={space.id} marker={space.marker} size="md" lines={space.headline} body={space.body} padding="standard" />

      <ApplyBlock id={invitation.id} headline={invitation.headline} functional={invitation.functional} />
    </main>
  )
}
