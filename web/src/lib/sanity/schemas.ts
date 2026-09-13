/**
 * Zod schemas for every query result (06_BUILD/architecture.md §4). A CMS field that goes missing
 * fails visibly in development, never renders `undefined`. One schema per query in ./queries.ts.
 */
import { z } from "zod"

export const journalSlugsSchema = z.array(
  z.object({
    slug: z.string().min(1),
    _updatedAt: z.string(),
  }),
)
export type JournalSlugs = z.infer<typeof journalSlugsSchema>

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
