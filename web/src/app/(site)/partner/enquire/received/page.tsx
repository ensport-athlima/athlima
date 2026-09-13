import type { Metadata } from "next"
import { Display } from "@/components/primitives/Display"
import { Reveal } from "@/motion/Reveal"
import { partnerEnquiry } from "@/content/forms"
import { routes } from "@/lib/routes"

/**
 * PARTNER / ENQUIRE / RECEIVED — the confirmation, at its own URL so it can be a conversion goal
 * (architecture.md §6). Says only what the team has agreed to: no named person, no response time (B5).
 */
export const metadata: Metadata = {
  title: "Thank you",
  description: partnerEnquiry.received.body,
  alternates: { canonical: routes.partnerEnquireReceived },
  // A confirmation is a real URL for conversion tracking (sitemap.md) but not a search result.
  robots: { index: false, follow: true },
}

export default function PartnerEnquiryReceivedPage() {
  return (
    <main id="content" className="px-margin pt-section-standard pb-section-dramatic">
      <Reveal className="mx-auto max-w-content-max">
        <Display as="h1" size="xl" lines={[{ text: partnerEnquiry.received.headline }]} />
        <p className="mt-8 max-w-measure text-body-lg text-ink-100">{partnerEnquiry.received.body}</p>
      </Reveal>
    </main>
  )
}
