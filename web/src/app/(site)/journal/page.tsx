import type { Metadata } from "next"
import { JournalIndex } from "@/components/journal/JournalIndex"
import { journal } from "@/content/journal"
import { sanityFetch } from "@/lib/sanity/client"
import { journalIndexQuery, TAGS } from "@/lib/sanity/queries"
import { journalEntriesSchema, parser } from "@/lib/sanity/schemas"

/**
 * THE JOURNAL — the index. Open thinking, closed room (website-thesis.md §6). ISR 60s with on-demand
 * revalidation from the Sanity webhook. Without a project, or with nothing published, the designed
 * empty state — never a placeholder article.
 */
export const revalidate = 60

export const metadata: Metadata = {
  title: journal.meta.title,
  description: journal.meta.description,
  alternates: { canonical: journal.path },
}

export default async function JournalPage() {
  const entries = await sanityFetch({
    query: journalIndexQuery,
    tags: [TAGS.journal],
    revalidate: 60,
    parse: parser("journalIndex", journalEntriesSchema),
  })
  return (
    <JournalIndex
      eyebrow={journal.entry.eyebrow}
      headline={journal.entry.headline}
      sub={journal.entry.sub}
      entries={entries}
      emptyText={journal.emptyAll}
    />
  )
}
