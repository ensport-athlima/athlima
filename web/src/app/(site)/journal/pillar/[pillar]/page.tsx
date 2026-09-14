import type { Metadata } from "next"
import { og } from "@/lib/og"
import { notFound } from "next/navigation"
import { JournalIndex } from "@/components/journal/JournalIndex"
import { journal, pillarClusters } from "@/content/journal"
import { sanityFetch } from "@/lib/sanity/client"
import { journalByPillarQuery, TAGS } from "@/lib/sanity/queries"
import { journalEntriesSchema, parser } from "@/lib/sanity/schemas"
import { pillars, type Pillar } from "@/lib/routes"

/** A pillar cluster (journal.md §3): the definitive piece first, then the cluster. Unique metadata. */
export const revalidate = 60

export function generateStaticParams() {
  return pillars.map((pillar) => ({ pillar }))
}

function cluster(id: string) {
  return pillarClusters.find((p) => p.id === id)
}

export async function generateMetadata({ params }: { params: Promise<{ pillar: string }> }): Promise<Metadata> {
  const c = cluster((await params).pillar)
  if (!c) return {}
  return {
    title: `${c.label} — ${journal.meta.title}`,
    description: `${c.definition} The ${c.label} cluster of the ATHLIMA Journal.`,
    alternates: { canonical: c.href },
    ...og(c.label, journal.meta.title),
  }
}

export default async function PillarClusterPage({ params }: { params: Promise<{ pillar: string }> }) {
  const { pillar } = await params
  const c = cluster(pillar)
  if (!c) notFound()
  const entries = await sanityFetch({
    query: journalByPillarQuery,
    params: { pillar: pillar as Pillar },
    tags: [TAGS.journal],
    revalidate: 60,
    parse: parser("journalByPillar", journalEntriesSchema),
  })
  return (
    <JournalIndex
      eyebrow={`${journal.entry.eyebrow} / ${c.label}`}
      headline={[{ text: c.label }]}
      lead={c.definition}
      entries={entries}
      current={{ kind: "pillar", id: c.id }}
      emptyText={journal.empty(c.label)}
    />
  )
}
