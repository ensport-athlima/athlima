/**
 * All GROQ queries live here (06_BUILD/architecture.md §4). Never inline a query in a component.
 * Each query is paired with a schema in ./schemas.ts and a cache tag consumed by app/api/revalidate.
 *
 * The registry is empty at scaffold time. Queries are added with the page that needs them, and each
 * addition names its content file in 04_CONTENT/ as its source of truth.
 */
import { defineQuery } from "next-sanity"

/** Cache tags — one per document type. The revalidate webhook maps `_type` to these. */
export const TAGS = {
  journal: "journal",
  people: "people",
  events: "events",
  partners: "partners",
  site: "site",
} as const

export type Tag = (typeof TAGS)[keyof typeof TAGS]

/** Journal slugs for sitemap.xml. */
export const journalSlugsQuery = defineQuery(
  `*[_type == "article" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`,
)
