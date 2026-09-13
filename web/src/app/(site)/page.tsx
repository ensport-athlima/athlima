import type { Metadata } from "next"
import { site } from "@/content/site"

/**
 * HOME — the entry. Static, ISR 1h (architecture.md §1). Never dynamic.
 *
 * Scaffold state: the route composes nothing yet. It renders the one thing the architecture insists
 * on before any block exists — the hero headline, server-rendered, in the HTML from the first byte,
 * as the LCP text (decision D1). Screen 01 (`EntrySequence`) replaces this markup in Phase 5.
 * Copy: 04_CONTENT/homepage.md, screen 01, verbatim. Route files stay thin (component-rules.md §1).
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.descriptor}` },
  alternates: { canonical: "/" },
}

const headlineLines = ["THE BUSINESS", "OF SPORT.", "THE FUTURE", "OF INDIA."] as const

export default function HomePage() {
  return (
    <main
      id="content"
      className="flex min-h-svh flex-col justify-end px-margin py-section-standard"
    >
      <p className="label wide mb-4">{site.descriptor.toUpperCase()}</p>
      <h1 className="display text-display-xl text-paper">
        {headlineLines.map((line, i) => (
          <span key={line} className={i >= 2 ? "block text-lime" : "block"}>
            {line}{" "}
          </span>
        ))}
      </h1>
      <p className="label mt-8">
        {site.datesLabel} · {site.venueLabel}
      </p>
      <p className="label mt-2">{site.promise}</p>
    </main>
  )
}
