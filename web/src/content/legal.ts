/**
 * /legal/* — the shell each legal page shares (04_CONTENT/legal.md) and the plain-English summaries,
 * which are in the brief and in voice. THE LEGAL TEXT IS COUNSEL'S AND IS NOT DRAFTED HERE
 * ([TO VERIFY — LEGAL]): privacy and terms render the summary, the entity block and one plain sentence
 * until counsel's text is supplied. Cookies renders the build's real inventory, which is checkable.
 * "Last updated" is withheld until it is real.
 */
import { routes } from "@/lib/routes"
import { entity, site } from "./site"

export interface LegalSection {
  heading: string
  body: readonly string[]
}

export interface LegalContent {
  path: string
  name: string
  title: string
  description: string
  summary: string
  summaryLabel: string
  sections: readonly LegalSection[]
  /** True when counsel's text has not yet been supplied — the page says so in one sentence. */
  pendingCounsel: boolean
}

const summaryLabel = "IN PLAIN ENGLISH — A SUMMARY, NOT THE TEXT ITSELF"
const pending = "The full text is being prepared with counsel."

export const legalEntityBlock = {
  label: "THE ENTITY",
  lines: [`${entity.legalName} · CIN ${entity.cin}`, `${entity.corporateOffice.label}: ${entity.corporateOffice.lines.join(", ")}`],
} as const

export const legalPending = pending

export const privacy: LegalContent = {
  path: routes.legalPrivacy,
  name: "PRIVACY",
  title: "Privacy",
  description: `How ${site.name} collects and uses personal data: what each form asks for, why, and how to ask what we hold or have it deleted.`,
  summaryLabel,
  summary:
    "We collect what we need to answer your enquiry or send you the Journal — and we tell you, on each form, what that is. We do not sell it. You can ask us what we hold and ask us to delete it.",
  sections: [],
  pendingCounsel: true,
}

export const terms: LegalContent = {
  path: routes.legalTerms,
  name: "TERMS",
  title: "Terms",
  description: `The terms for using ${site.domain}. Attendance at ATHLIMA is by invitation; enquiring about partnership does not create an agreement.`,
  summaryLabel,
  summary:
    "These are the terms for using this website. Attendance at ATHLIMA is by invitation, and enquiring about partnership does not create an agreement — a proposition does, separately and in writing.",
  sections: [],
  pendingCounsel: true,
}

export const cookies: LegalContent = {
  path: routes.legalCookies,
  name: "COOKIES",
  title: "Cookies",
  description: `What ${site.domain} sets in your browser, and why. Analytics runs only if you accept it; nothing here follows you around the internet.`,
  summaryLabel,
  summary:
    "We use a small number of cookies to understand how the site is used. Analytics runs only if you accept it. Nothing here follows you around the internet.",
  /** The build's actual inventory — checked against the code, not written from memory (content-qa.md §G). */
  sections: [
    {
      heading: "What is set, and why",
      body: [
        "Your choice on the cookie notice — accepted or declined — is kept in your browser's local storage under the key athlima:consent, so the notice does not return on every visit. It is a preference, not a tracking cookie, and it never leaves your browser.",
        "A once-per-session flag (athlima:entry, in session storage) records that the homepage's arrival sequence has already played, so it plays once. It is cleared when you close the tab.",
        "Strictly necessary items like these are set without asking; they identify nothing about you.",
      ],
    },
    {
      heading: "Analytics",
      body: [
        "Google Analytics 4 is loaded only after you choose ACCEPT on the cookie notice, and only when it is configured for the site. Until then, nothing from Google is set. Google's cookies (the _ga family) identify a browser, not a person, and their durations are set by Google.",
        "Vercel Analytics and Vercel Speed Insights measure page performance without cookies and without identifying you.",
      ],
    },
    {
      heading: "What is not set",
      body: ["No advertising cookies. No cross-site tracking. If that ever changes, this page changes first."],
    },
    {
      heading: "Withdrawing your choice",
      body: [
        "Use the control beneath to clear your choice; the notice will appear again and analytics will not run until you accept. You can also clear this site's data in your browser's settings.",
      ],
    },
  ],
  pendingCounsel: true,
}
