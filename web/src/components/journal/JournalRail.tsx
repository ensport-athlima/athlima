import Link from "next/link"
import { JournalCard } from "./JournalCard"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Reveal } from "@/motion/Reveal"
import { journal } from "@/content/journal"
import { sanityFetch } from "@/lib/sanity/client"
import { journalIndexQuery, TAGS } from "@/lib/sanity/queries"
import { journalEntriesSchema, parser } from "@/lib/sanity/schemas"

/**
 * BLOCK: JournalRail
 * ROLE IN EXPERIENCE: Credibility and the long game — three pieces of the thinking at the foot of an
 *   experience page, so a visitor leaves an IP with a reason to come back. Not on the homepage
 *   (components.md).
 * POSITION: The six IP pages, before the IP rail; article footers use the related list instead.
 * PRIMARY CTA: Tier 3 — the Journal index.
 * SOURCE OF TRUTH: the Journal (Sanity); journal.md §7 for the entry shape.
 * MOTION: REVEAL (items). Server Component. Renders nothing at all while the Journal is empty — a
 *   rail with nothing on it would undermine the year-round claim rather than support it.
 */
export async function JournalRail({ marker }: { marker: { number: number; label: string } }) {
  const entries = await sanityFetch({
    query: journalIndexQuery,
    tags: [TAGS.journal],
    revalidate: 60,
    parse: parser("journalIndex", journalEntriesSchema),
  })
  const three = (entries ?? []).slice(0, 3)
  if (!three.length) return null
  return (
    <section aria-label={marker.label} className="bg-void px-margin py-section-standard">
      <div className="mx-auto max-w-content-max">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionMarker number={marker.number} label={marker.label} />
          <Link href={journal.path} className="label inline-flex min-h-touch items-center gap-2 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime">
            {journal.entry.headline[0]?.text ?? "THE THINKING."}
            <span aria-hidden="true" className="text-lime">→</span>
          </Link>
        </Reveal>
        <Reveal variant="items" className="mt-12 border-t border-ink-800">
          {three.map((e) => (
            <div key={e._id} data-item>
              <JournalCard entry={e} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
