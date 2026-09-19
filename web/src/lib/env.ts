/**
 * Environment validation (06_BUILD/tech-stack.md §4). A missing variable must fail the build loudly,
 * never silently render an empty section. In `next dev` it warns — so a developer without every
 * credential can still run the site; in `next build` it throws.
 */
import { string, object, url } from "zod"
import type { infer as Infer } from "zod"

const schema = object({
  NEXT_PUBLIC_SITE_URL: url(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: string().min(1),
  SANITY_API_READ_TOKEN: string().min(1),
  SANITY_REVALIDATE_SECRET: string().min(1),
  MUX_TOKEN_ID: string().min(1),
  MUX_TOKEN_SECRET: string().min(1),
  RESEND_API_KEY: string().min(1),
  // Optional: without it every form renders its honest not-configured state (tech-stack.md §2).
  POSTGRES_URL: string().optional(),
  EMAIL_FROM: string().min(1),
  ENQUIRY_NOTIFY_EMAIL: string().optional(),
  CONTACT_NOTIFY_EMAIL: string().optional(),
  INSTITUTIONAL_NOTIFY_EMAIL: string().optional(),
  NEXT_PUBLIC_GA_ID: string().min(1),
  SENTRY_DSN: string().min(1),
  NEXT_PUBLIC_SENTRY_DSN: string().min(1),
})

export type Env = Infer<typeof schema>

const raw: Record<keyof Env, string | undefined> = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  SANITY_REVALIDATE_SECRET: process.env.SANITY_REVALIDATE_SECRET,
  MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
  MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  POSTGRES_URL: process.env.POSTGRES_URL,
  EMAIL_FROM: process.env.EMAIL_FROM,
  ENQUIRY_NOTIFY_EMAIL: process.env.ENQUIRY_NOTIFY_EMAIL,
  CONTACT_NOTIFY_EMAIL: process.env.CONTACT_NOTIFY_EMAIL,
  INSTITUTIONAL_NOTIFY_EMAIL: process.env.INSTITUTIONAL_NOTIFY_EMAIL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  SENTRY_DSN: process.env.SENTRY_DSN,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
}

const isProductionBuild = process.env.NODE_ENV === "production"

function validate(): Env {
  const result = schema.safeParse(raw)
  if (result.success) return result.data

  const missing = result.error.issues.map((i) => i.path.join(".")).join(", ")
  const message = `[env] Missing or invalid environment variables: ${missing}. See web/.env.example.`
  if (isProductionBuild) throw new Error(message)
  console.warn(`${message} Continuing in development with placeholders that render nothing.`)
  // Development only: every value is an empty string, and every consumer treats "" as "not configured".
  return Object.fromEntries(Object.keys(raw).map((k) => [k, raw[k as keyof Env] ?? ""])) as Env
}

export const env: Env = validate()

/** `true` when a subsystem has real credentials. Consumers render nothing — not a placeholder — otherwise. */
export const configured = {
  sanity: Boolean(env.NEXT_PUBLIC_SANITY_PROJECT_ID && env.NEXT_PUBLIC_SANITY_DATASET),
  analytics: Boolean(env.NEXT_PUBLIC_GA_ID),
  sentry: Boolean(env.NEXT_PUBLIC_SENTRY_DSN),
  postgres: Boolean(env.POSTGRES_URL),
  email: Boolean(env.RESEND_API_KEY && env.EMAIL_FROM),
} as const
