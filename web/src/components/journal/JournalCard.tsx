import Link from "next/link"
import { PILLAR_LABELS } from "@/content/navigation"
import { formatDate, journal, readingMinutes } from "@/content/journal"
import type { JournalEntry } from "@/lib/sanity/schemas"
import { journalArticle } from "@/lib/routes"
import { cn } from "@/lib/cn"

/**
 * JournalCard (components.md Tier 6): one index entry — pillar tag, title, standfirst, byline, date,
 * reading time, a hairline. Not a card in the boxed sense: rules and space, as IndexGrid. The whole
 * entry is the link; the title is the accessible name.
 */
export function JournalCard({ entry, featured = false }: { entry: JournalEntry; featured?: boolean }) {
  const href = journalArticle(entry.slug)
  return (
    <article className="index-item">
      <Link href={href} data-shift className="group block py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime">
        <p className="label flex flex-wrap gap-x-3">
          {entry.pillars.map((p) => (
            <span key={p} className="text-paper">
              {PILLAR_LABELS[p]}
            </span>
          ))}
          {entry.isPillarPiece ? <span>{journal.labels.pillarPiece}</span> : null}
        </p>
        <h3 className={cn("display mt-4 text-paper normal-case", featured ? "text-display-lg" : "text-display-sm")}>{entry.title}</h3>
        <p className={cn("mt-4 max-w-measure text-ink-100", featured ? "text-body-lg" : "text-body")}>{entry.standfirst}</p>
        <p className="mt-6 flex flex-wrap gap-x-3 text-caption text-ink-300">
          <span className="text-ink-100">{entry.author.name}</span>
          <span>{entry.author.role}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{journal.labels.readingTime(readingMinutes(entry.wordCount))}</span>
        </p>
      </Link>
    </article>
  )
}
