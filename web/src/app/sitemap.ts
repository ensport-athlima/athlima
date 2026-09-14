import type { MetadataRoute } from "next"
import { env } from "@/lib/env"
import { indexableStaticRoutes, journalArticle } from "@/lib/routes"
import { sanityFetch } from "@/lib/sanity/client"
import { journalSlugsQuery, TAGS } from "@/lib/sanity/queries"
import { journalSlugsSchema, parser } from "@/lib/sanity/schemas"
import { site } from "@/content/site"

/** seo.md §1 — generated from lib/routes.ts + Sanity. Never hand-maintained. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`
  const now = new Date()

  const statics: MetadataRoute.Sitemap = indexableStaticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }))

  // A CMS outage must not kill a deploy: sanityFetch returns null on failure and the static routes ship.
  const articles =
    (await sanityFetch({
      query: journalSlugsQuery,
      tags: [TAGS.journal],
      revalidate: 60,
      parse: parser("journalSlugs", journalSlugsSchema),
    })) ?? []

  return [
    ...statics,
    ...articles.map((a) => ({
      url: `${base}${journalArticle(a.slug)}`,
      lastModified: new Date(a._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
