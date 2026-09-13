/**
 * The Sanity client (06_BUILD/architecture.md §4). Server-side only — client components never
 * fetch from Sanity directly. Every result is validated by a schema in ./schemas.ts before it
 * reaches a component.
 */
// Server-only by convention: imported from Server Components and Route Handlers exclusively.
import { createClient, type QueryParams } from "next-sanity"
import { env, configured } from "@/lib/env"

const API_VERSION = "2025-01-01"

export const sanityClient = configured.sanity
  ? createClient({
      projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: API_VERSION,
      useCdn: true,
      token: env.SANITY_API_READ_TOKEN || undefined,
      perspective: "published",
    })
  : null

export interface SanityFetchOptions<T> {
  query: string
  params?: QueryParams
  /** Cache tags for on-demand revalidation from the Sanity webhook (app/api/revalidate). */
  tags: readonly string[]
  /** ISR window in seconds — per route type, architecture.md §1. */
  revalidate: number
  /** Validates the raw result. A CMS field that goes missing fails here, visibly, never as `undefined` in a component. */
  parse: (raw: unknown) => T
}

/** Typed, tagged, validated fetch. Returns `null` when Sanity is not configured so callers render nothing. */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
  revalidate,
  parse,
}: SanityFetchOptions<T>): Promise<T | null> {
  if (!sanityClient) return null
  const raw: unknown = await sanityClient.fetch(query, params, {
    next: { revalidate, tags: [...tags] },
  })
  return parse(raw)
}
