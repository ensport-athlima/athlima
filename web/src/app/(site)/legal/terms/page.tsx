import type { Metadata } from "next"
import { og } from "@/lib/og"
import { LegalPage } from "@/components/templates/LegalPage"
import { terms } from "@/content/legal"

/** Legal — Tier 4. The text is counsel's; the page renders what counsel supplies. */
export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
  alternates: { canonical: terms.path },
  ...og(terms.title),
}

export default function Page() {
  return <LegalPage content={terms} />
}
