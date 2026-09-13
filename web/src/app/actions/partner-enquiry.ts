"use server"

import { redirect } from "next/navigation"
import { configured, env } from "@/lib/env"
import { partnerEnquirySchema } from "@/lib/schemas/partner-enquiry"
import { formErrors, partnerEnquiry } from "@/content/forms"
import { routes } from "@/lib/routes"
import { site } from "@/content/site"

/**
 * The partner enquiry (architecture.md §6): validate with the shared schema, refuse bots (honeypot,
 * timing), store in Vercel Postgres BEFORE any email is attempted, confirm to the enquirer through
 * Resend when it is configured, notify the team when an address is configured, then redirect to the
 * confirmation page — a real URL, so it can be a conversion goal.
 *
 * Nothing is promised that the team has not agreed to: the confirmation names no person and no
 * response time (B5).
 */
export type PartnerEnquiryState =
  | { status: "idle" }
  | { status: "invalid"; fieldErrors: Record<string, string> }
  | { status: "unavailable" }
  | { status: "failed"; message: string }

const MIN_FILL_MS = 3000

export async function submitPartnerEnquiry(
  _prev: PartnerEnquiryState,
  formData: FormData,
): Promise<PartnerEnquiryState> {
  // Bots: the honeypot is filled, or the form came back faster than a person can read it.
  if (String(formData.get("website") ?? "") !== "") return { status: "idle" }
  const rendered = Number(formData.get("rendered") ?? 0)
  if (!rendered || Date.now() - rendered < MIN_FILL_MS) return { status: "idle" }

  const parsed = partnerEnquirySchema.safeParse({
    organisation: formData.get("organisation"),
    name: formData.get("name"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    category: formData.get("category"),
    territory: formData.get("territory"),
    scale: formData.get("scale"),
    prospectus: formData.get("prospectus") === "on",
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

  const data = parsed.data
  try {
    const { sql } = await import("@vercel/postgres")
    // A duplicate within ten minutes is the same person pressing twice: accept, do not store again.
    const recent = await sql`
      SELECT 1 FROM partner_enquiries
      WHERE email = ${data.email} AND created_at > now() - interval '10 minutes'
      LIMIT 1
    `
    if ((recent.rowCount ?? 0) === 0) {
      await sql`
        INSERT INTO partner_enquiries
          (organisation, name, role, email, phone, category, territory, scale, prospectus)
        VALUES
          (${data.organisation}, ${data.name}, ${data.role}, ${data.email}, ${data.phone},
           ${data.category}, ${data.territory}, ${data.scale}, ${data.prospectus})
      `
      if (configured.email) await sendEmails(data)
    }
  } catch (error) {
    console.error("[partner-enquiry]", error)
    return { status: "failed", message: formErrors.failed }
  }

  redirect(routes.partnerEnquireReceived)
}

async function sendEmails(data: {
  organisation: string
  name: string
  role: string
  email: string
  phone: string
  category: string
  territory: string
  scale: string
  prospectus: boolean
}) {
  const { Resend } = await import("resend")
  const resend = new Resend(env.RESEND_API_KEY)
  const from = env.EMAIL_FROM
  const label = (list: readonly { value: string; label: string }[], v: string) =>
    list.find((o) => o.value === v)?.label ?? v

  // Email failure must never lose an enquiry: the row is already stored; errors are logged, not raised.
  const results = await Promise.allSettled([
    resend.emails.send({
      from,
      to: data.email,
      subject: `${site.name} — your partner enquiry`,
      text: `${partnerEnquiry.received.headline}\n\n${partnerEnquiry.received.body}\n\n— ${site.name}\n${site.institutionalLine}`,
    }),
    env.ENQUIRY_NOTIFY_EMAIL
      ? resend.emails.send({
          from,
          to: env.ENQUIRY_NOTIFY_EMAIL,
          replyTo: data.email,
          subject: `Partner enquiry — ${data.organisation}`,
          text: [
            `Organisation: ${data.organisation}`,
            `Name: ${data.name}`,
            `Role: ${data.role}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Category: ${label(partnerEnquiry.categories, data.category)}`,
            `Scale: ${label(partnerEnquiry.scales, data.scale)}`,
            `Prospectus requested: ${data.prospectus ? "yes" : "no"}`,
            "",
            "What they would want to own:",
            data.territory,
          ].join("\n"),
        })
      : Promise.resolve(),
  ])
  for (const r of results) if (r.status === "rejected") console.error("[partner-enquiry email]", r.reason)
}
