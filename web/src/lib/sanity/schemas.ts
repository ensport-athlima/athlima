/**
 * Zod schemas for every query result (06_BUILD/architecture.md §4). A CMS field that goes missing
 * fails visibly in development, never renders `undefined`. One schema per query in ./queries.ts, each
 * mirroring the Studio schema in ../../../studio/schemas field for field.
 */
import { string, object, number, array, literal, enum as zEnum, boolean, discriminatedUnion } from "zod"
import type { infer as Infer, ZodType } from "zod"
import { pillars, series } from "@/lib/routes"

export const journalSlugsSchema = array(
  object({
    slug: string().min(1),
    _updatedAt: string(),
  }),
)
export type JournalSlugs = Infer<typeof journalSlugsSchema>

const pillarSchema = zEnum(pillars)
const seriesSchema = zEnum(series)

const imageRefSchema = object({
  ref: string().min(1),
  alt: string().min(1),
  credit: string().nullish(),
  hotspot: object({ x: number(), y: number(), height: number(), width: number() }).nullish(),
  crop: object({ top: number(), bottom: number(), left: number(), right: number() }).nullish(),
})
export type ImageRef = Infer<typeof imageRefSchema>

export const journalEntrySchema = object({
  _id: string(),
  title: string().min(1),
  slug: string().min(1),
  standfirst: string().min(1),
  pillars: array(pillarSchema).min(1).max(2),
  series: seriesSchema.nullish(),
  isPillarPiece: boolean().nullish(),
  publishedAt: string(),
  wordCount: number(),
  author: object({ name: string().min(1), role: string().min(1), slug: string().min(1) }),
  hero: imageRefSchema.nullish(),
})
export type JournalEntry = Infer<typeof journalEntrySchema>
export const journalEntriesSchema = array(journalEntrySchema)

/** Portable Text — validated loosely at the block level; the serialisers handle each type. */
const spanSchema = object({ _type: literal("span"), _key: string(), text: string(), marks: array(string()).optional() })
const blockSchema = object({
  _type: literal("block"),
  _key: string(),
  style: string().optional(),
  listItem: string().optional(),
  level: number().optional(),
  children: array(spanSchema),
  markDefs: array(object({ _key: string(), _type: string(), href: string().optional() })).nullish(),
})
const pullQuoteSchema = object({ _type: literal("pullQuote"), _key: string(), text: string().min(1), attribution: string().nullish() })
const figureSchema = object({
  _type: literal("figure"),
  _key: string(),
  ref: string().min(1),
  alt: string().min(1),
  caption: string().nullish(),
  credit: string().nullish(),
  hotspot: imageRefSchema.shape.hotspot,
  crop: imageRefSchema.shape.crop,
})
const dataMomentSchema = object({
  _type: literal("dataMoment"),
  _key: string(),
  figure: string().min(1),
  label: string().min(1),
  source: string().min(1),
  sourceUrl: string().nullish(),
  year: string().min(1),
})
export const portableBlockSchema = discriminatedUnion("_type", [blockSchema, pullQuoteSchema, figureSchema, dataMomentSchema])
export type PortableBlock = Infer<typeof portableBlockSchema>

export const articleSchema = object({
  _id: string(),
  _updatedAt: string(),
  title: string().min(1),
  slug: string().min(1),
  standfirst: string().min(1),
  pillars: array(pillarSchema).min(1).max(2),
  series: seriesSchema.nullish(),
  intent: string().min(1),
  isPillarPiece: boolean().nullish(),
  publishedAt: string(),
  wordCount: number(),
  author: object({
    name: string().min(1),
    role: string().min(1),
    bio: string().min(1),
    slug: string().min(1),
    portrait: imageRefSchema.nullish(),
    links: array(object({ label: string().nullish(), url: string().nullish() })).nullish(),
  }),
  hero: imageRefSchema.nullish(),
  body: array(portableBlockSchema),
  sources: array(object({ title: string().nullish(), url: string().nullish() })).nullish(),
  related: journalEntriesSchema,
  pillarPiece: object({ title: string(), slug: string() }).nullish(),
})
export type Article = Infer<typeof articleSchema>
/** `[0]` on an empty match is null. */
export const articleOrNullSchema = articleSchema.nullable()

/** Wraps a schema so a bad payload throws with the query's name in the message. */
export function parser<T>(name: string, schema: ZodType<T>) {
  return (raw: unknown): T => {
    const result = schema.safeParse(raw)
    if (!result.success) {
      throw new Error(`[sanity] ${name}: ${result.error.message}`)
    }
    return result.data
  }
}
