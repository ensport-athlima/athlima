import Image from "next/image"
import Link from "next/link"
import { ArticleBody } from "@/components/journal/ArticleBody"
import { JournalCard } from "@/components/journal/JournalCard"
import { ReadingProgress } from "@/components/journal/ReadingProgress"
import { ShareRow } from "@/components/journal/ShareRow"
import { SubscribeInline } from "@/components/journal/SubscribeInline"
import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { Button } from "@/components/primitives/Button"
import { Reveal } from "@/motion/Reveal"
import { formatDate, journal, readingMinutes } from "@/content/journal"
import { PILLAR_LABELS } from "@/content/navigation"
import { site } from "@/content/site"
import { env } from "@/lib/env"
import { articleJsonLd, serializeJsonLd } from "@/lib/json-ld"
import { journalArticle, journalPillar, routes, type Pillar } from "@/lib/routes"
import { sanityImageUrl } from "@/lib/sanity/image"
import type { Article } from "@/lib/sanity/schemas"

/**
 * The article view (journal.md §6) — the page fetches, this renders. L6 aside: the piece in columns
 * 1–8, the sticky metadata in 10–12 — pillar tag, share, the link up to the pillar piece. Breadcrumb
 * JOURNAL / PILLAR / title. Title in sentence case at display-md; standfirst; byline with reading
 * time; optional 21:9 hero; the body at a 34em measure; author bio; three related from the same
 * pillar; MORE FROM [PILLAR]; subscribe. Article + BreadcrumbList JSON-LD. The reading-progress rule.
 */
const base = () => env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`

export function ArticleView({ article: a }: { article: Article }) {
  const url = `${base()}${journalArticle(a.slug)}`
  // zod guarantees at least one pillar; the tuple type does not carry that.
  const [primary] = a.pillars as [Pillar, ...Pillar[]]
  const pillarHref = journalPillar(primary)
  const crumbs = [
    { name: "JOURNAL", path: routes.journal },
    { name: PILLAR_LABELS[primary], path: pillarHref },
    { name: a.title, path: journalArticle(a.slug) },
  ]
  const jsonLd = articleJsonLd({
    url,
    title: a.title,
    description: a.standfirst,
    datePublished: a.publishedAt,
    dateModified: a._updatedAt,
    authorName: a.author.name,
    image: a.hero ? sanityImageUrl(a.hero, 1600, 900) : undefined,
    publisher: { name: site.name, url: base() },
  })

  return (
    <main id="content" className="px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))] pb-section-dramatic">
      <ReadingProgress target="article" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-content-max">
        <Breadcrumb crumbs={crumbs} />
        <article id="article" className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-gutter">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="label flex flex-wrap gap-x-3">
                {a.pillars.map((p) => (
                  <Link key={p} href={journalPillar(p)} className="text-paper hover:text-lime">
                    {PILLAR_LABELS[p]}
                  </Link>
                ))}
              </p>
              <h1 className="display mt-6 text-display-md text-paper normal-case">{a.title}</h1>
              <p className="mt-8 max-w-measure text-body-lg text-ink-100">{a.standfirst}</p>
              <div className="mt-8 flex items-center gap-4">
                {a.author.portrait ? (
                  <Image src={sanityImageUrl(a.author.portrait, 96, 96)} alt={a.author.portrait.alt} width={48} height={48} className="h-12 w-12 object-cover" />
                ) : null}
                <p className="flex flex-wrap gap-x-3 text-caption text-ink-300">
                  <span className="text-ink-100">{a.author.name}</span>
                  <span>{a.author.role}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{journal.labels.readingTime(readingMinutes(a.wordCount))}</span>
                </p>
              </div>
            </Reveal>

            {a.hero ? (
              <Reveal variant="cover" direction="up" className="relative mt-12 aspect-[21/9] w-full">
                <Image src={sanityImageUrl(a.hero, 1600, 686)} alt={a.hero.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" priority />
                <div data-cover aria-hidden="true" className="absolute inset-0 z-20 bg-void" />
                {a.hero.credit ? <p className="absolute right-0 bottom-0 z-30 bg-void/80 px-3 py-1 text-caption text-ink-300">{a.hero.credit}</p> : null}
              </Reveal>
            ) : null}

            <div className="mt-12">
              <ArticleBody body={a.body} />
            </div>

            {a.sources?.length ? (
              <section aria-label="Sources" className="mt-16 max-w-measure border-t border-ink-800 pt-6">
                <p className="label">SOURCES</p>
                <ol className="mt-3 flex flex-col gap-1">
                  {a.sources.map((s, i) => (
                    <li key={`${s.url ?? s.title}-${i}`} className="text-body-sm text-ink-200">
                      {s.url ? (
                        <a href={s.url} rel="noopener" className="underline decoration-ink-600 underline-offset-4 hover:decoration-lime">
                          {s.title ?? s.url}
                        </a>
                      ) : (
                        s.title
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <section aria-label="Author" className="mt-16 flex max-w-measure gap-6 border-t border-ink-800 pt-8">
              {a.author.portrait ? (
                <Image src={sanityImageUrl(a.author.portrait, 160, 160)} alt={a.author.portrait.alt} width={80} height={80} className="h-20 w-20 shrink-0 object-cover" />
              ) : null}
              <div>
                <p className="text-body text-paper">{a.author.name}</p>
                <p className="text-body-sm text-ink-300">{a.author.role}</p>
                <p className="mt-3 text-body-sm text-ink-100">{a.author.bio}</p>
                {a.author.links?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-x-4">
                    {a.author.links.map((l) =>
                      l.url ? (
                        <li key={l.url}>
                          <a href={l.url} rel="noopener" className="label hover:text-paper">
                            {l.label ?? l.url}
                          </a>
                        </li>
                      ) : null,
                    )}
                  </ul>
                ) : null}
              </div>
            </section>
          </div>

          <aside aria-label="About this piece" className="mt-16 border-t border-ink-800 pt-8 lg:sticky lg:top-nav lg:col-span-3 lg:col-start-10 lg:mt-0 lg:self-start lg:border-t-0 lg:pt-4">
            <p className="label">PILLAR</p>
            <p className="mt-2 flex flex-wrap gap-x-3">
              {a.pillars.map((p) => (
                <Link key={p} href={journalPillar(p)} className="label text-paper hover:text-lime">
                  {PILLAR_LABELS[p]}
                </Link>
              ))}
            </p>
            {a.pillarPiece ? (
              <div className="mt-8">
                <p className="label">{journal.labels.pillarPiece}</p>
                <Link href={journalArticle(a.pillarPiece.slug)} className="mt-2 block text-body-sm text-paper underline decoration-ink-600 underline-offset-4 hover:decoration-lime">
                  {a.pillarPiece.title}
                </Link>
              </div>
            ) : null}
            <div className="mt-8">
              <ShareRow url={url} title={a.title} />
            </div>
          </aside>
        </article>

        {a.related.length ? (
          <section aria-label="Related" className="mt-24">
            <Reveal>
              <p className="label">{journal.labels.more} {PILLAR_LABELS[primary]}</p>
            </Reveal>
            <Reveal variant="items" className="mt-4 border-t border-ink-800">
              {a.related.map((e) => (
                <div key={e._id} data-item>
                  <JournalCard entry={e} />
                </div>
              ))}
            </Reveal>
          </section>
        ) : null}

        <Reveal className="mt-16">
          <Button variant="primary" href={pillarHref}>
            {journal.labels.more} {PILLAR_LABELS[primary]}
          </Button>
        </Reveal>

        <Reveal className="mt-24">
          <SubscribeInline id="subscribe" />
        </Reveal>
      </div>
    </main>
  )
}
