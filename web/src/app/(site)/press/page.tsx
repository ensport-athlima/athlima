import type { Metadata } from "next"
import { Display } from "@/components/primitives/Display"
import { Eyebrow } from "@/components/primitives/Eyebrow"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { CopyBlock } from "@/components/primitives/CopyBlock"
import { Reveal } from "@/motion/Reveal"
import { press } from "@/content/press"

/**
 * PRESS — the facts, in one place. Tier 4 utility; Journey 06 converts on it being complete. The fact
 * sheet as a definition list and the three boilerplates, byte for byte positioning.md §9, each with a
 * COPY control. The press kit and the press contact are withheld until they exist (B2; [TO VERIFY]).
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: press.meta.title,
  description: press.meta.description,
  alternates: { canonical: press.path },
}

export default function PressPage() {
  const { entry, factSheet, boilerplate } = press
  return (
    <main id="content">
      <div className="px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))] pb-section-standard">
        <Reveal className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-span-8">
            <Eyebrow wide>{entry.eyebrow}</Eyebrow>
            <Display as="h1" size="xl" lines={entry.headline} className="mt-8" />
            <p className="mt-8 max-w-measure text-body-lg text-ink-100">{entry.lead}</p>
          </div>
        </Reveal>
      </div>

      <section id="fact-sheet" aria-labelledby="fact-sheet-heading" className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal>
            <SectionMarker number={1} label={factSheet.marker} />
            <h2 id="fact-sheet-heading" className="sr-only">
              {factSheet.marker}
            </h2>
          </Reveal>
          <Reveal as="dl" variant="items" className="mt-12 border-t border-ink-800">
            {factSheet.facts.map((f) => (
              <div key={f.term} data-item className="grid grid-cols-1 gap-2 border-b border-ink-800 py-6 sm:grid-cols-4 sm:gap-gutter">
                <dt className="label">{f.term}</dt>
                <dd className="text-body text-ink-100 sm:col-span-3">{f.detail}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="boilerplate" aria-labelledby="boilerplate-heading" className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal>
            <SectionMarker number={2} label={boilerplate.marker} />
            <h2 id="boilerplate-heading" className="sr-only">
              {boilerplate.marker}
            </h2>
            <p className="mt-8 max-w-measure text-body-lg text-ink-100">{boilerplate.lead}</p>
          </Reveal>
          <Reveal variant="items" className="mt-12 flex flex-col gap-12">
            {boilerplate.items.map((b) => (
              <div key={b.label} data-item>
                <CopyBlock label={b.label} text={b.text} copy={boilerplate.copy} copied={boilerplate.copied} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
