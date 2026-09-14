import type { Metadata } from "next"
import { IndexGrid } from "@/components/blocks/IndexGrid"
import { ContactForm } from "@/components/forms/ContactForm"
import { Display } from "@/components/primitives/Display"
import { Eyebrow } from "@/components/primitives/Eyebrow"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { contact } from "@/content/forms"
import { configured } from "@/lib/env"
import { routes } from "@/lib/routes"

/**
 * CONTACT — the general route and the institutional route (`#institutional`, the destination of
 * INSTITUTIONAL ENQUIRY and the end of Journey 03). Tier 4 utility: no Tier-2 CTAs. Partner enquiries
 * are not here — one Tier-3 line routes them to /partner/enquire. The institutional section is the
 * site's most formal register: no lime word, one lime element. Forms render only once storage exists.
 */
export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
  alternates: { canonical: routes.contact },
}

export default function ContactPage() {
  const { entry, routes: r, general, institutional } = contact
  const forms = configured.postgres
  return (
    <main id="content">
      <div className="px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))] pb-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-span-8">
              <Eyebrow wide>{entry.eyebrow}</Eyebrow>
              <Display as="h1" size="xl" lines={[{ text: entry.headline }]} className="mt-8" />
              <p className="mt-8 max-w-measure text-body-lg text-ink-100">{entry.lead}</p>
            </div>
          </Reveal>
          <IndexGrid
            columns={3}
            className="mt-16"
            items={[
              { ...r.institutions, href: routes.contactInstitutional },
              { ...r.press, href: routes.press },
              { ...r.partnerships, href: routes.partnerEnquire },
            ]}
          />
        </div>
      </div>

      <section id="general" aria-labelledby="general-heading" className="bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal>
            <SectionMarker number={1} label={general.marker} />
            <h2 id="general-heading" className="sr-only">
              {general.marker}
            </h2>
          </Reveal>
          <div className="mt-12">{forms ? <ContactForm kind="general" /> : <p className="text-body-lg text-paper">{contact.unavailable}</p>}</div>
        </div>
      </section>

      <section id="institutional" aria-labelledby="institutional-headline" className="scroll-mt-nav bg-void px-margin py-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-start-1 lg:col-end-9">
              <SectionMarker number={2} label={institutional.marker} />
              <Display as="h2" id="institutional-headline" size="md" lines={[{ text: institutional.headline }]} className="mt-4" />
              <div className="stack-p mt-8 max-w-measure">
                {institutional.body.map((p) => (
                  <p key={p} className="text-body text-ink-100">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mt-12">{forms ? <ContactForm kind="institutional" /> : <p className="text-body-lg text-paper">{contact.unavailable}</p>}</div>
        </div>
      </section>
    </main>
  )
}
