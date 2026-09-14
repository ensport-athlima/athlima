import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { Display } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { doorwayMarkers, type DoorwayContent } from "@/content/doorways"

/**
 * TEMPLATE: DoorwayPage — the five-section format every /for/* page shares (opportunities.md):
 *   01 YOUR LINE · 02 YOUR QUESTION · 03 YOUR PROOF · 04 YOUR FEAR · 05 YOUR CTA
 * ROLE IN EXPERIENCE: Self-identify → qualify. One reader, in their words, under 900 words.
 * Tier 3 argument: type-led, disciplined, fast. REVEAL only; one 100svh entry; Server Component.
 * The fear is quoted, then answered; the three proofs are links to where each lives.
 */
export function DoorwayPage({ content }: { content: DoorwayContent }) {
  const { audience, line, question, proofs, fear, cta } = content
  return (
    <main id="content">
      <StatementScreen id="entry" variant="entry" eyebrow={audience} size="xl" lines={line} />

      <StatementScreen
        id="question"
        marker={{ number: 1, label: doorwayMarkers.question }}
        size="md"
        uppercase={false}
        lines={[{ text: question }]}
        padding="standard"
      />

      <section id="proof" aria-labelledby="proof-headline" className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal>
            <SectionMarker number={2} label={doorwayMarkers.proof} />
            <Display as="h2" id="proof-headline" size="md" lines={[{ text: "THREE SPECIFICS." }]} className="mt-4" />
          </Reveal>
          <IndexGrid items={proofs} columns={3} className="mt-16" />
        </div>
      </section>

      <StatementScreen
        id="fear"
        marker={{ number: 3, label: doorwayMarkers.fear }}
        size="md"
        uppercase={false}
        lines={[{ text: `“${fear.quote}”` }]}
        body={fear.answer}
        padding="standard"
      />

      <ApplyBlock id="invitation" headline={cta.statement} functional={cta.functional} tertiary={cta.tertiary} />
    </main>
  )
}
