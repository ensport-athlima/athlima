import type { Metadata } from "next"
import { og } from "@/lib/og"
import { LegalPage } from "@/components/templates/LegalPage"
import { privacy } from "@/content/legal"

/** Legal — Tier 4. The text is counsel's; the page renders what counsel supplies. */
export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
  alternates: { canonical: privacy.path },
  ...og(privacy.title),
}

export default function Page() {
  return <LegalPage content={privacy} />
}
