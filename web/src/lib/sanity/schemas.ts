/**
 * Zod schemas for every query result (06_BUILD/architecture.md §4). A CMS field that goes missing
 * fails visibly in development, never renders `undefined`. One schema per query in ./queries.ts, each
 * mirroring the Studio schema in ../../../studio/schemas field for field.
 */
import { z } from "zod"
import { pillars, series } from "@/lib/routes"

export const journalSlugsSchema = z.array(
  z.object({
    slug: z.string().min(1),
    _updatedAt: z.string(),
  }),
)
export type JournalSlugs = z.infer<typeof journalSlugsSchema>

const pillarSchema = z.enum(pillars)
const seriesSchema = z.enum(series)

const imageRefSchema = z.object({
  ref: z.string().min(1),
  alt: z.string().min(1),
  credit: z.string().nullish(),
  hotspot: z.object({ x: z.number(), y: z.number(), height: z.number(), width: z.number() }).nullish(),
  crop: z.object({ top: z.number(), bottom: z.number(), left: z.number(), right: z.number() }).nullish(),
})
export type ImageRef = z.infer<typeof imageRefSchema>

export const journalEntrySchema = z.object({
  _id: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  standfirst: z.string().min(1),
  pillars: z.array(pillarSchema).min(1).max(2),
  series: seriesSchema.nullish(),
  isPillarPiece: z.boolean().nullish(),
  publishedAt: z.string(),
  wordCount: z.number(),
  author: z.object({ name: z.string().min(1), role: z.string().min(1), slug: z.string().min(1) }),
  hero: imageRefSchema.nullish(),
})
export type JournalEntry = z.infer<typeof journalEntrySchema>
export const journalEntriesSchema = z.array(journalEntrySchema)

/** Portable Text — validated loosely at the block level; the serialisers handle each type. */
const spanSchema = z.object({ _type: z.literal("span"), _key: z.string(), text: z.string(), marks: z.array(z.string()).optional() })
const blockSchema = z.object({
  _type: z.literal("block"),
  _key: z.string(),
  style: z.string().optional(),
  listItem: z.string().optional(),
  level: z.number().optional(),
  children: z.array(spanSchema),
  markDefs: z.array(z.object({ _key: z.string(), _type: z.string(), href: z.string().optional() })).nullish(),
})
const pullQuoteSchema = z.object({ _type: z.literal("pullQuote"), _key: z.string(), text: z.string().min(1), attribution: z.string().nullish() })
const figureSchema = z.object({
  _type: z.literal("figure"),
  _key: z.string(),
  ref: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().nullish(),
  credit: z.string().nullish(),
  hotspot: imageRefSchema.shape.hotspot,
  crop: imageRefSchema.shape.crop,
})
const dataMomentSchema = z.object({
  _type: z.literal("dataMoment"),
  _key: z.string(),
  figure: z.string().min(1),
  label: z.string().min(1),
  source: z.string().min(1),
  sourceUrl: z.string().nullish(),
  year: z.string().min(1),
})
export const portableBlockSchema = z.discriminatedUnion("_type", [blockSchema, pullQuoteSchema, figureSchema, dataMomentSchema])
export type PortableBlock = z.infer<typeof portableBlockSchema>

export const articleSchema = z.object({
  _id: z.string(),
  _updatedAt: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  standfirst: z.string().min(1),
  pillars: z.array(pillarSchema).min(1).max(2),
  series: seriesSchema.nullish(),
  intent: z.string().min(1),
  isPillarPiece: z.boolean().nullish(),
  publishedAt: z.string(),
  wordCount: z.number(),
  author: z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    bio: z.string().min(1),
    slug: z.string().min(1),
    portrait: imageRefSchema.nullish(),
    links: z.array(z.object({ label: z.string().nullish(), url: z.string().nullish() })).nullish(),
  }),
  hero: imageRefSchema.nullish(),
  body: z.array(portableBlockSchema),
  sources: z.array(z.object({ title: z.string().nullish(), url: z.string().nullish() })).nullish(),
  related: journalEntriesSchema,
  pillarPiece: z.object({ title: z.string(), slug: z.string() }).nullish(),
})
export type Article = z.infer<typeof articleSchema>
/** `[0]` on an empty match is null. */
export const articleOrNullSchema = articleSchema.nullable()

/** Wraps a schema so a bad payload throws with the query's name in the message. */
export function parser<T>(name: string, schema: z.ZodType<T>) {
  return (raw: unknown): T => {
    const result = schema.safeParse(raw)
    if (!result.success) {
      throw new Error(`[sanity] ${name}: ${result.error.message}`)
    }
    return result.data
  }
}
