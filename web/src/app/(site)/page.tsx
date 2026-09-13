import type { Metadata } from "next"
import { DiagnosisBlock } from "@/components/blocks/DiagnosisBlock"
import { EntrySequence } from "@/components/blocks/EntrySequence"
import { ProofNumbers } from "@/components/blocks/ProofNumbers"
import { screen02 } from "@/content/homepage"
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
      <EntrySequence nextId={screen02.id} />
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
    </main>
  )
}
