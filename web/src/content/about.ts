/**
 * /about — typed constants sourced from 04_CONTENT/people.md §`/about`, verbatim, with the B3 copy
 * (08_OPERATIONS/decisions-b3-provenance.md §4a–§4c). The credibility anchor: two of six journeys
 * convert here. No Tier-2 CTA (decision A1); the Tier-3 Explore the Group → is the page's one link out.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { RichParagraph } from "@/components/primitives/RichText"
import { routes } from "@/lib/routes"
import { entity, site } from "./site"
import { screen07 } from "./homepage"

export const about = {
  meta: {
    title: "About",
    description:
      "ATHLIMA is India's platform for the business, culture and future of sport. An ENSPORT Ventures initiative within the ENARR Group.",
  },
  what: {
    id: "entry",
    eyebrow: "ABOUT ATHLIMA",
    headline: [{ text: "NOT AN EVENT." }, { text: "AN INSTITUTION" }, { text: "IN DEVELOPMENT.", lime: true }] satisfies readonly DisplayLine[],
    /** B3 §4b — the About micro-copy, approved. */
    lead: [
      "ATHLIMA is India's platform for the business, culture and future of sport.",
      "Across athletes, federations, government, capital, brands, institutions and the next generation, ATHLIMA creates a connected environment for the conversations, relationships and opportunities that move sport forward.",
    ],
    /** B3 §4c */
    institutionalLine: site.institutionalLine,
    body: [
      "ATHLIMA is India's Festival of Sport, Business & Performance — a curated, invitation-led platform bringing together 350 of the people who build, equip, enable, perform and govern Indian sport.",
      "Anchored by two days at The St. Regis Mumbai, ATHLIMA is designed to exist across the year: a marketplace, an ideas platform, an experiential environment, a relationship engine and a home for intellectual property that continues long after December.",
      "The ambition is not to build the biggest sporting event in India. It is to build one of the most consequential rooms in Indian sport.",
    ],
  },
  pillars: {
    id: "pillars",
    marker: { number: 1, label: "THE FIVE PILLARS" },
    headline: [{ text: "BUILD. EQUIP. ENABLE." }, { text: "PERFORM. GOVERN." }] satisfies readonly DisplayLine[],
    body: "The five parts of the sporting economy, and the taxonomy every partner, guest, session and piece of ATHLIMA's thinking is classified by.",
  },
  provenance: {
    id: "provenance",
    marker: { number: 2, label: "WHO IS BUILDING IT" },
    headline: [{ text: "AN ENSPORT VENTURES" }, { text: "INITIATIVE." }] satisfies readonly DisplayLine[],
    /** B3 §4a — the same paragraph as homepage screen 07. */
    body: [screen07.body[0]] as readonly RichParagraph[],
    office: entity.corporateOffice,
    groupCta: screen07.groupCta,
  },
  whyNow: {
    id: "why-now",
    marker: { number: 3, label: "WHY NOW" },
    headline: [{ text: "THESE WORLDS REMAIN" }, { text: "REMARKABLY FRAGMENTED." }] satisfies readonly DisplayLine[],
    body: [
      "Sport in India is entering a different phase. Investment is increasing. Infrastructure is developing. Private capital is entering. Technology is transforming performance. New clubs, academies and sporting properties are emerging. Athletes have commercial opportunities beyond competition.",
      "These worlds remain remarkably fragmented.",
      "ATHLIMA exists to close that gap.",
    ],
  },
  standard: {
    id: "the-standard",
    marker: { number: 4, label: "THE STANDARD" },
    headline: [{ text: "FIVE QUESTIONS." }] satisfies readonly DisplayLine[],
    lead: "Every partnership, every idea and every property at ATHLIMA has to answer five questions.",
    questions: [
      "Does it belong to ATHLIMA?",
      "Does it give the partner a real role?",
      "Does it create access or value?",
      "Can it be executed beautifully?",
      "Can it become something more?",
    ],
  },
  path: routes.about,
} as const
