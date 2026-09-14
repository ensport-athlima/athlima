/**
 * The Journal — typed constants sourced from 04_CONTENT/journal.md §3–§4, §7–§8, verbatim.
 * The articles themselves live in Sanity (architecture.md §4); this file holds the chrome around them.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import { journalPillar, journalSeries, routes, type Pillar, type Series } from "@/lib/routes"
import { pillarDefs } from "./pillars"

export const journal = {
  meta: {
    title: "The Journal",
    description: "The thinking. Ideas that move India — the business of Indian sport in five clusters, one per pillar, and three series: conversations, research, athlete stories.",
  },
  entry: {
    eyebrow: "THE JOURNAL",
    headline: [{ text: "THE THINKING." }] satisfies readonly DisplayLine[],
    sub: [{ text: "IDEAS THAT MOVE INDIA." }] satisfies readonly DisplayLine[],
  },
  filters: { byPillar: "BY PILLAR", bySeries: "BY SERIES", all: "EVERYTHING" },
  labels: { featured: "FEATURED", pillarPiece: "THE PILLAR PIECE", latest: "LATEST", readingTime: (min: number) => `${min} min read`, more: "MORE FROM" },
  /** journal.md §7 — `[PILLAR]` is substituted with the cluster's name. */
  empty: (name: string) => `Nothing here yet. The ${name} thinking is being written.`,
  emptyAll: "Nothing here yet. The thinking is being written.",
  /** journal.md §8 — one list, no segmentation. */
  subscribe: {
    label: "SUBSCRIBE",
    offer: "New thinking on the business of Indian sport. Roughly fortnightly. Nothing else.",
    field: { label: "EMAIL", helper: "One list. Roughly fortnightly." },
    button: "SUBSCRIBE",
    confirmation: "You're on the list. First piece lands soon.",
  },
  invitation: {
    /** ctas.md — the emotional statement (not a link) and the functional SUBSCRIBE, inline. */
    headline: [{ text: "EXPLORE" }, { text: "THE THINKING.", lime: true }] satisfies readonly DisplayLine[],
  },
  path: routes.journal,
} as const

export const pillarClusters: readonly { id: Pillar; label: string; definition: string; href: string; piece: string }[] = pillarDefs.map((p) => ({
  id: p.id,
  label: p.label,
  definition: p.definition,
  href: journalPillar(p.id),
  /** journal.md §3 — the definitive piece each cluster is commissioned around. */
  piece: {
    build: "How sports infrastructure actually gets financed and built in India",
    equip: "The state of sports technology in India: what works, what is hype",
    enable: "India's academy and pathway system, mapped",
    perform: "Athlete performance, science and recovery in India",
    govern: "How Indian sport is actually governed — a plain-language map",
  }[p.id],
}))

/** journal.md §4 — the three series, their lines verbatim. */
export const seriesClusters: readonly { id: Series; label: string; line: string; href: string }[] = [
  { id: "conversations", label: "ATHLIMA CONVERSATIONS", line: "One person, one idea, twenty minutes to read or watch.", href: journalSeries("conversations") },
  { id: "research", label: "ATHLIMA RESEARCH", line: "Original data. The only content that reliably earns citations and inbound links.", href: journalSeries("research") },
  { id: "athlete-stories", label: "ATHLETE STORIES", line: "ATHLIMA 20 and beyond. The most human and most shareable content on the site.", href: journalSeries("athlete-stories") },
]

/** 200 words a minute, never under one. */
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / 200))

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(iso))
