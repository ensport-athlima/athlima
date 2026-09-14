/**
 * All GROQ queries live here (06_BUILD/architecture.md §4). Never inline a query in a component.
 * Each query is paired with a schema in ./schemas.ts and a cache tag consumed by app/api/revalidate.
 * Source of truth for the Journal: 04_CONTENT/journal.md; the Studio schemas in ../../../studio/schemas.
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
  `*[_type == "article" && defined(slug.current) && defined(publishedAt)]{ "slug": slug.current, _updatedAt }`,
)

/** The fields an index entry needs (JournalCard) — never the body. */
const ENTRY = `{
  _id,
  title,
  "slug": slug.current,
  standfirst,
  pillars,
  series,
  isPillarPiece,
  publishedAt,
  "wordCount": length(pt::text(body)),
  "author": author->{ name, role, "slug": slug.current },
  "hero": hero{ "ref": asset._ref, alt, credit, hotspot, crop }
}`

/** /journal — everything published, newest first. */
export const journalIndexQuery = defineQuery(
  `*[_type == "article" && defined(slug.current) && defined(publishedAt)] | order(isPillarPiece desc, publishedAt desc) ${ENTRY}`,
)

/** /journal/pillar/[pillar] — the pillar piece first, then the cluster. */
export const journalByPillarQuery = defineQuery(
  `*[_type == "article" && defined(slug.current) && defined(publishedAt) && $pillar in pillars] | order(isPillarPiece desc, publishedAt desc) ${ENTRY}`,
)

/** /journal/series/[series]. */
export const journalBySeriesQuery = defineQuery(
  `*[_type == "article" && defined(slug.current) && defined(publishedAt) && series == $series] | order(publishedAt desc) ${ENTRY}`,
)

/** /journal/[slug] — the article, its author in full, and three related from the same pillar. */
export const articleQuery = defineQuery(
  `*[_type == "article" && slug.current == $slug && defined(publishedAt)][0]{
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    standfirst,
    pillars,
    series,
    intent,
    isPillarPiece,
    publishedAt,
    "wordCount": length(pt::text(body)),
    "author": author->{ name, role, bio, "slug": slug.current, "portrait": portrait{ "ref": asset._ref, alt, hotspot, crop }, links },
    "hero": hero{ "ref": asset._ref, alt, credit, hotspot, crop },
    body[]{
      ...,
      _type == "figure" => { "ref": asset._ref, alt, caption, credit, hotspot, crop },
      markDefs[]{ ..., _type == "link" => { href } }
    },
    sources,
    "related": *[_type == "article" && defined(slug.current) && defined(publishedAt) && _id != ^._id && count(pillars[@ in ^.pillars]) > 0] | order(publishedAt desc)[0...3] ${ENTRY},
    "pillarPiece": *[_type == "article" && isPillarPiece == true && defined(slug.current) && _id != ^._id && ^.pillars[0] in pillars] | order(publishedAt desc)[0]{ title, "slug": slug.current }
  }`,
)
