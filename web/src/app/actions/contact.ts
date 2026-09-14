"use server"

import { configured, env } from "@/lib/env"
import { generalContactSchema, institutionalContactSchema, type ContactKind } from "@/lib/schemas/contact"
import { contact, formErrors } from "@/content/forms"
import { site } from "@/content/site"

/**
 * The contact routes (contact.md; architecture.md §6). Validate with the shared schema, refuse bots,
 * store BEFORE email, confirm to the sender, forward to the route's own recipient — the institutional
 * route never shares an inbox with general or partner enquiries. Inline confirmation, no redirect
 * (the brief specifies inline for both routes).
 */
export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; fieldErrors: Record<string, string> }
  | { status: "unavailable" }
  | { status: "failed"; message: string }
  | { status: "done" }

const MIN_FILL_MS = 3000

export async function submitContact(kind: ContactKind, _prev: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get("website") ?? "") !== "") return { status: "idle" }
  const rendered = Number(formData.get("rendered") ?? 0)
  if (!rendered || Date.now() - rendered < MIN_FILL_MS) return { status: "idle" }

  const raw = Object.fromEntries(
    ["institution", "name", "role", "email", "organisation", "message", "enquiry"].map((k) => [k, formData.get(k) ?? undefined]),
  )
  const parsed = (kind === "general" ? generalContactSchema : institutionalContactSchema).safeParse({
    ...raw,
    consent: formData.get("consent") === "on",
  })
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!(key in fieldErrors)) fieldErrors[key] = issue.message
    }
    return { status: "invalid", fieldErrors }
  }
  if (!configured.postgres) return { status: "unavailable" }

  const d = parsed.data as Record<string, string | boolean | undefined>
  const body = String(kind === "general" ? d.message : d.enquiry)
  try {
    const { sql } = await import("@vercel/postgres")
    await sql`
      INSERT INTO contact_messages (kind, name, email, organisation, role, body)
      VALUES (${kind}, ${String(d.name)}, ${String(d.email)},
              ${String(kind === "general" ? (d.organisation ?? "") : d.institution)},
              ${String(kind === "general" ? "" : d.role)}, ${body})
    `
    if (configured.email) await sendEmails(kind, String(d.name), String(d.email), body, d)
  } catch (error) {
    console.error("[contact]", error)
    return { status: "failed", message: formErrors.failed }
  }
  return { status: "done" }
}

async function sendEmails(kind: ContactKind, name: string, to: string, body: string, d: Record<string, unknown>) {
  const { Resend } = await import("resend")
  const resend = new Resend(env.RESEND_API_KEY)
  const from = env.EMAIL_FROM
  const confirmation = kind === "general" ? contact.general.confirmation : contact.institutional.confirmation
  const notify = kind === "general" ? env.CONTACT_NOTIFY_EMAIL : env.INSTITUTIONAL_NOTIFY_EMAIL
  const results = await Promise.allSettled([
    resend.emails.send({
      from,
      to,
      subject: `${site.name} — your message`,
      text: `${confirmation}\n\n— ${site.name}\n${site.institutionalLine}`,
    }),
    notify
      ? resend.emails.send({
          from,
          to: notify,
          replyTo: to,
          subject: kind === "general" ? `Contact — ${name}` : `Institutional enquiry — ${String(d.institution)}`,
          text: Object.entries(d)
            .filter(([k, v]) => k !== "consent" && v)
            .map(([k, v]) => `${k}: ${String(v)}`)
            .join("\n"),
        })
      : Promise.resolve(),
  ])
  for (const r of results) if (r.status === "rejected") console.error("[contact email]", r.reason)
}
