import type { Metadata } from "next"
import { og } from "@/lib/og"
import { notFound } from "next/navigation"
import { JournalIndex } from "@/components/journal/JournalIndex"
import { journal, seriesClusters } from "@/content/journal"
import { sanityFetch } from "@/lib/sanity/client"
import { journalBySeriesQuery, TAGS } from "@/lib/sanity/queries"
import { journalEntriesSchema, parser } from "@/lib/sanity/schemas"
import { series, type Series } from "@/lib/routes"

/** A series (journal.md §4): Conversations, Research, Athlete Stories. Unique metadata. */
export const revalidate = 60

export function generateStaticParams() {
  return series.map((s) => ({ series: s }))
}

function cluster(id: string) {
  return seriesClusters.find((s) => s.id === id)
}

export async function generateMetadata({ params }: { params: Promise<{ series: string }> }): Promise<Metadata> {
  const c = cluster((await params).series)
  if (!c) return {}
  return {
    title: `${c.label} — ${journal.meta.title}`,
    description: c.line,
    alternates: { canonical: c.href },
    ...og(c.label, journal.meta.title),
  }
}

export default async function SeriesClusterPage({ params }: { params: Promise<{ series: string }> }) {
  const { series: id } = await params
  const c = cluster(id)
  if (!c) notFound()
  const entries = await sanityFetch({
    query: journalBySeriesQuery,
    params: { series: id as Series },
    tags: [TAGS.journal],
    revalidate: 60,
    parse: parser("journalBySeries", journalEntriesSchema),
  })
  return (
    <JournalIndex
      eyebrow={`${journal.entry.eyebrow} / ${c.label}`}
      headline={[{ text: c.label }]}
      lead={c.line}
      entries={entries}
      current={{ kind: "series", id: c.id }}
      emptyText={journal.empty(c.label)}
    />
  )
}
