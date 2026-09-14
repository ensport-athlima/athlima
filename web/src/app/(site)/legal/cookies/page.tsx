import type { Metadata } from "next"
import { LegalPage } from "@/components/templates/LegalPage"
import { CookieChoiceReset } from "@/components/layout/CookieChoiceReset"
import { cookies } from "@/content/legal"

/** Legal / Cookies — Tier 4. The build's real inventory, and the control that withdraws the choice. */
export const metadata: Metadata = {
  title: cookies.title,
  description: cookies.description,
  alternates: { canonical: cookies.path },
}

export default function Page() {
  return (
    <LegalPage content={cookies}>
      <CookieChoiceReset label="CLEAR MY COOKIE CHOICE" />
    </LegalPage>
  )
}
