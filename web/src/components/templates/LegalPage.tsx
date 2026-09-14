import type { ReactNode } from "react"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { Display } from "@/components/primitives/Display"
import { Reveal } from "@/motion/Reveal"
import { legalEntityBlock, legalPending, type LegalContent } from "@/content/legal"
import { routes } from "@/lib/routes"

/**
 * TEMPLATE: LegalPage (legal.md, shared structure). Eyebrow as a breadcrumb, the page name, the
 * plain-English summary labelled as a summary, then the legal text with real headings and an aside
 * listing the sections as in-page links; the entity block at the foot. Sentence case is permitted for
 * headings at display-md and below. Tier 4: no CTAs. Where counsel's text is not yet supplied the page
 * says so in one sentence — never a wall of placeholder.
 */
export function LegalPage({ content, children }: { content: LegalContent; children?: ReactNode }) {
  const { name, summary, summaryLabel, sections, pendingCounsel } = content
  const slug = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  return (
    <main id="content" className="px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))] pb-section-dramatic">
      <div className="mx-auto max-w-content-max">
        <Breadcrumb crumbs={[{ name: "LEGAL", path: routes.legalPrivacy }, { name, path: content.path }]} />
        <Reveal className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-span-8">
            <Display as="h1" size="lg" lines={[{ text: name }]} />
            <p className="label mt-12">{summaryLabel}</p>
            <p className="mt-4 max-w-measure text-body-lg text-ink-100">{summary}</p>
          </div>
        </Reveal>

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          {sections.length ? (
            <aside aria-label="Sections" className="mb-12 lg:sticky lg:top-nav lg:col-span-3 lg:mb-0 lg:self-start lg:pt-4">
              <ol className="flex flex-col gap-2 border-t border-ink-800 pt-4">
                {sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slug(s.heading)}`} className="label inline-flex min-h-8 items-center hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          ) : null}
          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((s) => (
              <section key={s.heading} id={slug(s.heading)} aria-labelledby={`${slug(s.heading)}-h`} className="scroll-mt-nav border-t border-ink-800 py-10">
                <h2 id={`${slug(s.heading)}-h`} className="display text-display-sm text-paper normal-case">
                  {s.heading}
                </h2>
                <div className="stack-p mt-6 max-w-measure">
                  {s.body.map((p) => (
                    <p key={p} className="text-body text-ink-100">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
            {children ? <div className="border-t border-ink-800 py-10">{children}</div> : null}
            {pendingCounsel ? (
              <p className="border-t border-ink-800 py-10 text-body text-ink-200">{legalPending}</p>
            ) : null}
            <div className="border-t border-ink-800 pt-8">
              <p className="label">{legalEntityBlock.label}</p>
              {legalEntityBlock.lines.map((l) => (
                <p key={l} className="mt-2 text-caption text-ink-300">
                  {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
