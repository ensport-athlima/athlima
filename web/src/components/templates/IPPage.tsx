import Link from "next/link"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { IPRail } from "@/components/blocks/IPRail"
import { SequenceRail } from "@/components/blocks/SequenceRail"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { EmailCapture } from "@/components/forms/EmailCapture"
import { IPMark } from "@/components/marks/IPMark"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { CategoryRow } from "@/components/primitives/CategoryRow"
import { Reveal } from "@/motion/Reveal"
import { emailCapture, ipRail, type IPContent, type IPIndexSection, type IPSequenceSection } from "@/content/experiences"
import { configured } from "@/lib/env"

/**
 * TEMPLATE: IPPage — the one skeleton all six experiences share (experiences.md):
 *   01 ENTRY · 02 PROPOSITION · 03 COMPONENTS · 04 FOR YOU · 05 THE RAIL · 06 INVITATION
 * ROLE IN EXPERIENCE: Discovery → qualification. A visitor who chose a door on the homepage learns
 *   what is behind it, sees its structure (the proof), finds their own role in it, and is shown the
 *   other five doors before the invitation.
 * Differentiation comes from register, imagery and motion — never from restructuring. AFTERHOURS
 *   carries `data-accent="dusk"` (colour.md §5, decision D15): its markers, rules and hairlines turn
 *   dusk-blue; the nav, the footer and the CTA buttons stay lime.
 * MOTION: REVEAL variants only — no pin on these pages; the one pinned sequence is the homepage's.
 * One 100svh section (the entry). Every block is a Server Component; only EmailCapture is client.
 */
function SectionHead({
  number,
  marker,
  headline,
  headingId,
  intro,
}: {
  number: number
  marker: string
  headline: readonly DisplayLine[]
  headingId: string
  intro?: readonly string[]
}) {
  return (
    <Reveal className="lg:col-start-2 lg:col-end-9">
      <SectionMarker number={number} label={marker} />
      <Display as="h2" id={headingId} size="md" lines={headline} className="mt-4" />
      {intro ? (
        <div className="stack-p mt-8 max-w-measure">
          {intro.map((p) => (
            <p key={p} className="text-body text-ink-100">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </Reveal>
  )
}

function ComponentsSection({ section, number }: { section: IPIndexSection | IPSequenceSection; number: number }) {
  const headingId = `${section.id}-headline`
  return (
    <section id={section.id} aria-labelledby={headingId} className="bg-void px-margin py-section-standard">
      <div className="mx-auto max-w-content-max">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <SectionHead number={number} marker={section.marker} headline={section.headline} headingId={headingId} intro={section.intro} />
        </div>
        {section.kind === "index" ? (
          <>
            <IndexGrid items={section.items} columns={section.columns} className="mt-16" />
            {section.principle ? (
              <Reveal variant="lines" className="mt-16">
                <Display as="p" size="md" lines={section.principle} />
              </Reveal>
            ) : null}
          </>
        ) : (
          <>
            <SequenceRail steps={section.steps} className="mt-16" />
            {section.disclaimer ? (
              // Brochure-sourced, verbatim, wherever Connect is described (experiences.md §05).
              <Reveal className="mt-12 max-w-measure">
                <p className="text-body-sm text-ink-300">{section.disclaimer}</p>
              </Reveal>
            ) : null}
          </>
        )}
        {section.categories ? (
          <Reveal>
            <CategoryRow label={section.categories.label} items={section.categories.items} className="mt-16" />
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

export function IPPage({ content }: { content: IPContent }) {
  const { ip, entry, proposition, sections, forYou, closing, invitation, accent } = content
  let n = 0
  const next = () => ++n
  // The pre-window alert exists only once storage does; its in-page CTA must never point at nothing.
  const alertLive = configured.postgres
  const entryCta =
    entry.functional && !(entry.functional.href === "#alert" && !alertLive) ? entry.functional : undefined

  return (
    <main id="content" data-accent={accent}>
      <StatementScreen
        id="entry"
        variant="entry"
        eyebrow={entry.eyebrow}
        mark={entry.showMark ? <IPMark ip={ip} decorative /> : undefined}
        size="xl"
        lines={entry.headline}
        narrow={entry.narrow}
        sub={entry.sub}
        ctas={entryCta ? { functional: entryCta } : undefined}
      />

      <StatementScreen
        id="proposition"
        marker={{ number: next(), label: proposition.marker }}
        size="lg"
        lines={proposition.pullLine}
        lead={proposition.body[0]}
        body={proposition.body.length > 1 ? proposition.body.slice(1) : undefined}
        padding="standard"
      >
        {proposition.quote ? (
          // Archivo has no italic; the lighter weight in sentence case is the pull-quote voice.
          <blockquote data-item className="border-l-2 border-lime pl-8">
            {proposition.quote.map((l) => (
              <p key={l} className="text-display-sm leading-(--lh-display-sm) font-medium text-paper">
                {l}
              </p>
            ))}
          </blockquote>
        ) : null}
      </StatementScreen>

      {sections.map((s) => (
        <ComponentsSection key={s.id} section={s} number={next()} />
      ))}

      {forYou ? (
        <section id="for-you" aria-labelledby="for-you-headline" className="bg-void px-margin py-section-standard">
          <div className="mx-auto max-w-content-max">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
              <SectionHead number={next()} marker={forYou.marker} headline={forYou.headline} headingId="for-you-headline" />
            </div>
            <Reveal as="ul" variant="items" className="mt-16 grid grid-cols-1 gap-x-gutter md:grid-cols-2">
              {forYou.doorways.map((d) => (
                <li key={d.audience} data-item className="index-item">
                  {d.href ? (
                    <Link
                      href={d.href}
                      data-shift
                      className="block py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                    >
                      <span className="label block text-paper">{d.audience}</span>
                      <span className="mt-4 block text-body-lg text-ink-100">{d.line}</span>
                      <span aria-hidden="true" className="mt-4 block text-lime">
                        →
                      </span>
                    </Link>
                  ) : (
                    <div data-shift className="py-8">
                      <span className="label block text-paper">{d.audience}</span>
                      <span className="mt-4 block text-body-lg text-ink-100">{d.line}</span>
                    </div>
                  )}
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      {closing ? (
        <StatementScreen
          id="closing"
          marker={{ number: next(), label: closing.marker }}
          size="md"
          lines={closing.headline}
          body={closing.body}
          padding="standard"
        />
      ) : null}

      <IPRail id="rail" marker={{ number: next(), label: "THE OTHER FIVE" }} current={ip} rail={ipRail} />

      <ApplyBlock
        id="invitation"
        headline={invitation.headline}
        sub={invitation.sub}
        emotional={invitation.emotional}
        functional={invitation.functional}
      >
        {invitation.emailCapture && alertLive ? (
          <div id="alert">
            <EmailCapture
              list="athlima20-alert"
              field={emailCapture.field}
              button={emailCapture.button}
              confirmation={emailCapture.confirmation}
            />
          </div>
        ) : null}
      </ApplyBlock>
    </main>
  )
}
