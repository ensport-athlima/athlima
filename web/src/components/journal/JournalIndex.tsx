import Link from "next/link"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { Eyebrow } from "@/components/primitives/Eyebrow"
import { Reveal } from "@/motion/Reveal"
import { EmptyState } from "@/components/states/EmptyState"
import { JournalCard } from "./JournalCard"
import { SubscribeInline } from "./SubscribeInline"
import { journal, pillarClusters, seriesClusters } from "@/content/journal"
import type { JournalEntry } from "@/lib/sanity/schemas"
import { cn } from "@/lib/cn"

/**
 * The Journal index and the two cluster pages share one layout (journal.md §7): the display, the
 * filters as real links, one featured piece full width, then the editorial list — hairlines, not
 * cards — then the subscription. An empty cluster says so in voice and routes out.
 */
export interface JournalIndexProps {
  eyebrow: string
  headline: readonly DisplayLine[]
  sub?: readonly DisplayLine[]
  lead?: string
  entries: readonly JournalEntry[] | null
  current?: { kind: "pillar" | "series"; id: string }
  emptyText: string
}

function FilterLink({ href, label, current }: { href: string; label: string; current: boolean }) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(
        "label relative inline-flex min-h-touch items-center transition-colors duration-(--dur-fast) ease-sharp hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
        current && "font-bold text-paper after:absolute after:inset-x-0 after:bottom-2 after:h-[2px] after:bg-lime",
      )}
    >
      {label}
    </Link>
  )
}

export function JournalIndex({ eyebrow, headline, sub, lead, entries, current, emptyText }: JournalIndexProps) {
  const [featured, ...rest] = entries ?? []
  return (
    <main id="content">
      <div className="px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))] pb-section-standard">
        <div className="mx-auto max-w-content-max">
          <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-gutter">
            <div className="lg:col-span-9">
              <Eyebrow wide>{eyebrow}</Eyebrow>
              <Display as="h1" size="xl" lines={headline} className="mt-8" />
              {sub ? <Display as="p" size="md" lines={sub} className="mt-6" /> : null}
              {lead ? <p className="mt-8 max-w-measure text-body-lg text-ink-100">{lead}</p> : null}
            </div>
          </Reveal>

          <nav aria-label="Journal filters" className="mt-16 flex flex-col gap-6 border-t border-ink-800 pt-6 md:flex-row md:gap-x-16">
            <div>
              <p className="label">{journal.filters.byPillar}</p>
              <ul className="mt-2 flex flex-wrap gap-x-6">
                <li>
                  <FilterLink href={journal.path} label={journal.filters.all} current={!current} />
                </li>
                {pillarClusters.map((p) => (
                  <li key={p.id}>
                    <FilterLink href={p.href} label={p.label} current={current?.kind === "pillar" && current.id === p.id} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">{journal.filters.bySeries}</p>
              <ul className="mt-2 flex flex-wrap gap-x-6">
                {seriesClusters.map((s) => (
                  <li key={s.id}>
                    <FilterLink href={s.href} label={s.label} current={current?.kind === "series" && current.id === s.id} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section aria-label="Articles" className="bg-void px-margin pb-section-standard">
        <div className="mx-auto max-w-content-max">
          {featured ? (
            <>
              <Reveal>
                <p className="label">{featured.isPillarPiece ? journal.labels.pillarPiece : journal.labels.featured}</p>
                <JournalCard entry={featured} featured />
              </Reveal>
              {rest.length ? (
                <Reveal variant="items" className="mt-12 border-t border-ink-800">
                  {rest.map((e) => (
                    <div key={e._id} data-item>
                      <JournalCard entry={e} />
                    </div>
                  ))}
                </Reveal>
              ) : null}
            </>
          ) : (
            <Reveal>
              <EmptyState text={emptyText} route={current ? { label: journal.filters.all, href: journal.path } : undefined} />
            </Reveal>
          )}
          <Reveal className="mt-24">
            <SubscribeInline id="subscribe" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
