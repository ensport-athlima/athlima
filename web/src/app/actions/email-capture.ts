"use server"

import { z } from "zod"
import { configured } from "@/lib/env"

/**
 * The single-field email capture (components.md `EmailCapture`; decision D4). One list per use: the
 * ATHLIMA 20 pre-window alert, the 2027 list, the Journal subscription.
 *
 * Storage is Vercel Postgres (tech-stack.md §2). Until `POSTGRES_URL` is configured the action reports
 * `unavailable` and the form never renders — a form must never post nowhere (CLAUDE.md V.3).
 */
export type EmailCaptureList = "athlima20-alert" | "list-2027" | "journal"

export type EmailCaptureState =
  | { status: "idle" }
  | { status: "invalid"; message: string }
  | { status: "unavailable" }
  | { status: "done" }

const schema = z.object({
  email: z.email(),
  list: z.enum(["athlima20-alert", "list-2027", "journal"]),
  /** Honeypot — a real visitor never fills it. */
  company: z.string().max(0),
})

export async function captureEmail(
  _prev: EmailCaptureState,
  formData: FormData,
): Promise<EmailCaptureState> {
  const parsed = schema.safeParse({
    email: String(formData.get("email") ?? "").trim(),
    list: formData.get("list"),
    company: String(formData.get("company") ?? ""),
  })
  if (!parsed.success) {
    return { status: "invalid", message: "Enter a valid email address." }
  }
  if (!configured.postgres) return { status: "unavailable" }

  const { sql } = await import("@vercel/postgres")
  await sql`
    INSERT INTO email_captures (email, list)
    VALUES (${parsed.data.email}, ${parsed.data.list})
    ON CONFLICT (email, list) DO NOTHING
  `
  return { status: "done" }
}
