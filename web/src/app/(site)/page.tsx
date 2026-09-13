import type { Metadata } from "next"
import { DiagnosisBlock } from "@/components/blocks/DiagnosisBlock"
import { EcosystemPortals } from "@/components/blocks/EcosystemPortals"
import { EntryOverlay } from "@/components/blocks/EntryOverlay"
import { EntrySequence } from "@/components/blocks/EntrySequence"
import { ProofNumbers } from "@/components/blocks/ProofNumbers"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { AthlimaWordmark } from "@/components/marks/AthlimaWordmark"
import { screen02, screen03, screen04 } from "@/content/homepage"
import { site } from "@/content/site"

/**
 * HOME — the entry. Static, ISR 1h (architecture.md §1). Never dynamic.
 * A route file composes blocks and contains no markup of its own beyond <main> and ordering
 * (component-rules.md §1). Screens are added in order, one at a time — 04_CONTENT/homepage.md.
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.descriptor}` },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main id="content">
      <EntrySequence nextId={screen02.id} overlay={<EntryOverlay />} />
      <DiagnosisBlock
        id={screen02.id}
        marker={screen02.marker}
        headline={screen02.headline}
        lead={screen02.lead}
        disconnections={screen02.disconnections}
        body={screen02.body}
        pullLine={screen02.pullLine}
        proof={<ProofNumbers figures={screen02.figures} />}
      />
      <StatementScreen
        id={screen03.id}
        marker={screen03.marker}
        mark={<AthlimaWordmark />}
        lines={screen03.headline}
        sub={screen03.sub}
        subNarrow={screen03.subNarrow}
        subWholeLime
        align="centred"
        padding="dramatic"
        stagger="loose"
      >
        {/* The five verbs — brochure-sourced, p03. Hairline-separated: vertical at md, horizontal below. */}
        <ul className="grid grid-cols-1 border-t border-ink-800 text-left md:grid-cols-5 md:border-t-0">
          {screen03.verbs.map((v) => (
            <li
              key={v.verb}
              data-item
              className="border-b border-ink-800 py-4 md:border-b-0 md:border-l md:px-6 md:py-2 md:first:border-l-0 md:first:pl-0"
            >
              <p className="label text-paper">{v.verb}</p>
              <p className="mt-1 text-label text-ink-300">{v.descriptor}</p>
            </li>
          ))}
        </ul>
      </StatementScreen>
      <EcosystemPortals
        id={screen04.id}
        marker={screen04.marker}
        intro={screen04.intro}
        sub={screen04.sub}
        portals={screen04.portals}
        closing={screen04.closing}
        anchorLine={screen04.anchorLine}
      />
    </main>
  )
}
