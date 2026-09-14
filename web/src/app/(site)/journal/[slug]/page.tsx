import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleView } from "@/components/journal/ArticleView"
import { journalArticle } from "@/lib/routes"
import { sanityFetch } from "@/lib/sanity/client"
import { articleQuery, journalSlugsQuery, TAGS } from "@/lib/sanity/queries"
import { articleOrNullSchema, journalSlugsSchema, parser } from "@/lib/sanity/schemas"

/** A Journal article — the route fetches and validates; ArticleView renders. ISR 60s; unknown slug → 404. */
export const revalidate = 60

async function load(slug: string) {
  return sanityFetch({
    query: articleQuery,
    params: { slug },
    tags: [TAGS.journal],
    revalidate: 60,
    parse: parser("article", articleOrNullSchema),
  })
}

export async function generateStaticParams() {
  const slugs = await sanityFetch({ query: journalSlugsQuery, tags: [TAGS.journal], revalidate: 60, parse: parser("journalSlugs", journalSlugsSchema) })
  return (slugs ?? []).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = await load(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.standfirst,
    alternates: { canonical: journalArticle(a.slug) },
    openGraph: { type: "article", publishedTime: a.publishedAt, modifiedTime: a._updatedAt, authors: [a.author.name] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = await load(slug)
  if (!a) notFound()
  return <ArticleView article={a} />
}
