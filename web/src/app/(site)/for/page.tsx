import type { Metadata } from "next"
import { og } from "@/lib/og"
import { AudienceDoorways } from "@/components/blocks/AudienceDoorways"
import { screen06 } from "@/content/homepage"
import { routes } from "@/lib/routes"

/** /for — the doorway index. Mainly a redirect target (sitemap.md); renders the six doors, not indexed. */
export const metadata: Metadata = {
  title: "Your Doorway",
  description: "Same ecosystem. Different doorway. Six ways into ATHLIMA, one for each kind of reader.",
  alternates: { canonical: routes.forIndex },
  robots: { index: false, follow: true },
  ...og("Your Doorway"),
}

export default function ForIndexPage() {
  return (
    <main id="content" className="pt-nav">
      <AudienceDoorways id={screen06.id} marker={screen06.marker} headline={screen06.headline} doorways={screen06.doorways} />
    </main>
  )
}
