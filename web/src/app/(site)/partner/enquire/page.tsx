import type { Metadata } from "next"
import { og } from "@/lib/og"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm"
import { Display } from "@/components/primitives/Display"
import { Reveal } from "@/motion/Reveal"
import { partnerEnquiry } from "@/content/forms"
import { configured } from "@/lib/env"
import { routes } from "@/lib/routes"

/**
 * PARTNER / ENQUIRE — the partner enquiry. Tier 4 utility: clear, beautiful, unshowy. The page is
 * static; the form is a client island. While storage is not configured the form does not render at
 * all — never a form that posts nowhere (CLAUDE.md V.3) — and the page says so in one line.
 */
export const metadata: Metadata = {
  title: partnerEnquiry.intro.headline.charAt(0) + partnerEnquiry.intro.headline.slice(1).toLowerCase(),
  description: partnerEnquiry.intro.lead,
  alternates: { canonical: routes.partnerEnquire },
  robots: { index: true, follow: true },
  ...og(partnerEnquiry.intro.headline.charAt(0) + partnerEnquiry.intro.headline.slice(1).toLowerCase()),
}

export default function PartnerEnquirePage() {
  return (
    <main id="content" className="px-margin pt-8 pb-section-dramatic">
      <div className="mx-auto max-w-content-max">
        <Breadcrumb
          crumbs={[
            { name: "PARTNER", path: routes.partner },
            { name: "ENQUIRE", path: routes.partnerEnquire },
          ]}
        />
        <Reveal className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-span-8">
            <Display as="h1" size="lg" lines={[{ text: partnerEnquiry.intro.headline }]} />
            <p className="mt-8 max-w-measure text-body-lg text-ink-100">{partnerEnquiry.intro.lead}</p>
          </div>
        </Reveal>
        <div className="mt-16">
          {configured.postgres ? (
            <PartnerEnquiryForm />
          ) : (
            <p className="text-body-lg text-paper">{partnerEnquiry.unavailable}</p>
          )}
        </div>
      </div>
    </main>
  )
}
