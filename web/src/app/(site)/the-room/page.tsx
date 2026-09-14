import type { Metadata } from "next"
import { og } from "@/lib/og"
import { Suspense } from "react"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { CompositionFromUrl, CompositionView } from "@/components/blocks/CompositionView"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { theRoom } from "@/content/the-room"

/**
 * THE ROOM — 350 people, the right people. Tier 2 destination; the proof page. Complete with zero
 * names (people.md, the governing rule). Five sections: the claim, the four groups, the composition
 * (Signature 04), the Council line, the invitation — where ATHLIMA IS BY INVITATION. is said (A4).
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: theRoom.meta.title,
  description: theRoom.meta.description,
  alternates: { canonical: theRoom.path },
  ...og(theRoom.meta.title),
}

export default function TheRoomPage() {
  const { entry, groups, composition, council, invitation } = theRoom
  return (
    <main id="content">
      <StatementScreen
        id={entry.id}
        variant="entry"
        media="entry.the-room"
        eyebrow={entry.eyebrow}
        size="xl"
        lines={entry.headline}
        sub={entry.sub}
        lead={entry.lead}
      />

      <section id={groups.id} aria-labelledby={`${groups.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={groups.marker.number} label={groups.marker.label} />
              <Display as="h2" id={`${groups.id}-headline`} size="md" lines={groups.headline} className="mt-4" />
            </div>
          </Reveal>
          <IndexGrid
            columns={2}
            className="mt-16"
            items={groups.items.map((g) => ({
              title: g.title,
              line: g.line,
              detail: (
                <>
                  <p className="text-body-sm text-ink-300">{g.who.join(" · ")}</p>
                  <dl className="mt-6 flex flex-col gap-4">
                    <div>
                      <dt className="label">{groups.labels.bring}</dt>
                      <dd className="mt-1 text-body text-ink-100">{g.bring}</dd>
                    </div>
                    <div>
                      <dt className="label">{groups.labels.take}</dt>
                      <dd className="mt-1 text-body text-ink-100">{g.take}</dd>
                    </div>
                  </dl>
                  <p className="label mt-6 text-paper">{g.verbs}</p>
                </>
              ),
            }))}
          />
        </div>
      </section>

      <section id={composition.id} aria-labelledby={`${composition.id}-headline`} className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-2 lg:col-end-10">
              <SectionMarker number={composition.marker.number} label={composition.marker.label} />
              <Display as="h2" id={`${composition.id}-headline`} size="md" lines={composition.headline} className="mt-4" />
            </div>
          </Reveal>
          <div className="mt-16">
            <Suspense fallback={<CompositionView filter={{}} />}>
              <CompositionFromUrl />
            </Suspense>
          </div>
          <Reveal className="mt-16 max-w-measure">
            <p className="text-display-sm leading-(--lh-display-sm) font-medium text-paper">{composition.closing}</p>
          </Reveal>
        </div>
      </section>

      <StatementScreen id={council.id} marker={council.marker} size="md" lines={council.headline} body={council.body} padding="standard" />

      <ApplyBlock
        id={invitation.id}
        headline={invitation.headline}
        sub={invitation.sub}
        functional={invitation.functional}
        lockup={invitation.statement}
      />
    </main>
  )
}
