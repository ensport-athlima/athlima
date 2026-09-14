import Image from "next/image"
import Link from "next/link"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { PullQuote } from "./PullQuote"
import { sanityImageUrl } from "@/lib/sanity/image"
import type { PortableBlock } from "@/lib/sanity/schemas"

/**
 * ArticleBody (components.md Tier 6): the Portable Text serialisers with the typographic care in
 * journal.md §6 — a 34em measure, generous paragraph spacing, real headings, tabular figures in data.
 * Outbound links open in place with rel="noopener"; internal links stay <Link>. Images carry the
 * editor's alt, caption and credit. A data moment renders only with its source — the schema requires it.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-body text-ink-100">{children}</p>,
    h2: ({ children }) => <h2 className="display mt-16 text-display-sm text-paper normal-case">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-12 text-body-lg font-semibold text-paper">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l border-ink-600 pl-6 text-body text-ink-200">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 list-disc space-y-2 pl-6 text-body text-ink-100 marker:text-ink-500">{children}</ul>,
    number: ({ children }) => <ol className="my-6 list-decimal space-y-2 pl-6 text-body text-ink-100 tabular-nums marker:text-ink-500">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em className="font-medium not-italic">{children}</em>,
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#"
      const external = /^https?:\/\//.test(href)
      const cls = "text-paper underline decoration-ink-600 underline-offset-4 transition-colors duration-(--dur-fast) ease-sharp hover:decoration-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      return external ? (
        <a href={href} rel="noopener" className={cls}>
          {children}
          <span className="sr-only"> (external link)</span>
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    },
  },
  types: {
    pullQuote: ({ value }) => <PullQuote text={value.text} attribution={value.attribution} />,
    figure: ({ value }) => (
      <figure className="my-12 lg:-mx-16">
        <Image
          src={sanityImageUrl(value, 1600)}
          alt={value.alt}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full"
        />
        {value.caption || value.credit ? (
          <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 text-caption text-ink-300">
            {value.caption ? <span>{value.caption}</span> : null}
            {value.credit ? <span>{value.credit}</span> : null}
          </figcaption>
        ) : null}
      </figure>
    ),
    dataMoment: ({ value }) => (
      <figure className="my-12 border-t border-b border-ink-800 py-8">
        <p className="display text-display-lg leading-none text-lime tabular-nums">{value.figure}</p>
        <figcaption className="mt-4">
          <p className="text-body text-paper">{value.label}</p>
          <p className="label mt-2">
            {value.sourceUrl ? (
              <a href={value.sourceUrl} rel="noopener" className="hover:text-paper">
                {value.source}, {value.year}
              </a>
            ) : (
              <>
                {value.source}, {value.year}
              </>
            )}
          </p>
        </figcaption>
      </figure>
    ),
  },
}

export function ArticleBody({ body }: { body: readonly PortableBlock[] }) {
  return (
    <div className="article-body max-w-measure [&>p+p]:mt-6 [&>*+p]:mt-6">
      <PortableText value={body as PortableBlock[]} components={components} />
    </div>
  )
}
