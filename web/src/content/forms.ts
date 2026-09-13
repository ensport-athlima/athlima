/**
 * Form microcopy — 04_CONTENT/ctas.md §2 (shared errors) and §3 (the partner enquiry), verbatim.
 * Every label is persistent and visible; helpers sit beneath the field (accessibility.md §1.9).
 */
import { site } from "./site"

/** ctas.md §2 — the error copy every form shares. */
export const formErrors = {
  required: "We need this one.",
  email: "That email address doesn't look right. Check it and try again.",
  phone: "Include your country code — +91 for India.",
  tooShort: "A little more detail would help.",
  failed: "Something went wrong at our end. Your answers are still here — try again in a moment.",
  /** `[n]` is substituted at render. */
  summary: (n: number) => `There ${n === 1 ? "is 1 thing" : `are ${n} things`} to fix before you can submit.`,
} as const

/**
 * ctas.md §3. The category options are the five partner types (opportunities.md, brochure-sourced) —
 * the working assumption until B1 settles how they relate to the six levels. The scale options are
 * the six levels of partnership (/partner/model): "a range selector, never a price list".
 */
export const partnerEnquiry = {
  intro: {
    headline: "START A PARTNER CONVERSATION",
    lead: "Every ATHLIMA partnership is built around what your organisation wants to own. Tell us that, and we'll come back with a proposition — not a package.",
  },
  fields: {
    organisation: { label: "ORGANISATION" },
    name: { label: "YOUR NAME" },
    role: { label: "YOUR ROLE" },
    email: { label: "EMAIL" },
    phone: { label: "PHONE" },
    category: { label: "YOUR CATEGORY", helper: "Where does your organisation sit in the sporting economy?" },
    territory: { label: "WHAT WOULD YOU WANT TO OWN AT ATHLIMA?", helper: "Movement. Recovery. Infrastructure. Technology. Something we haven't thought of." },
    scale: { label: "INDICATIVE SCALE OF INTEREST", helper: "A range is fine. This helps us shape the right conversation." },
    prospectus: { label: "Send me the Founding Partner Prospectus." },
  },
  categories: [
    { value: "institutional", label: "Institutional — government bodies, federations, institutions, sporting organisations" },
    { value: "strategic", label: "Strategic — major enterprises, infrastructure, finance, technology, ecosystem builders" },
    { value: "experience", label: "Experience — interactive activations, performance, technology, sport experiences" },
    { value: "brand", label: "Brand — consumer, performance, fashion, lifestyle" },
    { value: "hospitality", label: "Hospitality — F&B, hospitality, premium guest experiences" },
    { value: "other", label: "Something else" },
  ],
  scales: [
    { value: "presence", label: "Presence — our brand appears at ATHLIMA" },
    { value: "experience", label: "Experience — we create something people can interact with" },
    { value: "access", label: "Access — curated relationships" },
    { value: "authority", label: "Authority — we own an intellectual conversation" },
    { value: "ip", label: "IP — something that continues beyond ATHLIMA" },
    { value: "platform", label: "Platform — structural association with part of the ecosystem" },
    { value: "unsure", label: "Not sure yet — let's talk" },
  ],
  button: "SEND ENQUIRY",
  /**
   * The trust panel (conversion-strategy.md §7). Who is behind this; what happens to the data; what
   * happens next. The named person and the response time are [TO VERIFY — B5] and are not here.
   */
  trust: [
    { term: "WHO IS BEHIND THIS", detail: site.builtBy },
    { term: "WHAT HAPPENS TO YOUR DATA", detail: "We use it to shape a proposition and to come back to you. Nothing else." },
    { term: "WHAT HAPPENS NEXT", detail: "A proposition, not a package. The ATHLIMA partnerships team reads every enquiry." },
  ],
  /** /partner/enquire/received. The name and the working days wait for B5. */
  received: {
    headline: "THANK YOU.",
    body: "The ATHLIMA partnerships team will be in touch.",
  },
  /** Rendered in place of the form while storage is not configured — never a form that posts nowhere. */
  unavailable: "Partner enquiries open shortly.",
} as const
