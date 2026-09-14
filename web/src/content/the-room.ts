/**
 * /the-room — typed constants sourced from 04_CONTENT/people.md, verbatim. The highest-risk page on the
 * site: it is complete, compelling and persuasive with zero names on it, and it stays that way until a
 * person has confirmed, in writing, both their participation and how they are described.
 *
 * Honoured by omission: the sector composition proportions ([TO VERIFY] — supplied by the commercial
 * team, never invented) and the Advisory Council (fewer than five written confirmations → the holding
 * copy, no names, no counts). "350" follows B1.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { Pillar } from "@/lib/routes"
import { routes } from "@/lib/routes"
import { permanentCta } from "./navigation"
import { screen05 } from "./homepage"

export type GroupId = "sport" | "institutions" | "business" | "capital"

export interface RoomGroupFull {
  id: GroupId
  title: string
  line: string
  who: readonly string[]
  bring: string
  take: string
  verbs: string
}

const [sport, institutions, business, capital] = screen05.groups

export const theRoom = {
  meta: {
    title: "The Room",
    description:
      "350 people. The right people. Who is in the room at ATHLIMA — sport, institutions, business and capital — and what happens when they meet.",
  },
  entry: {
    id: "entry",
    eyebrow: "THE ROOM / A CURATED ECOSYSTEM",
    /** brochure-sourced, p05 */
    headline: [{ text: "350 PEOPLE." }, { text: "THE RIGHT PEOPLE." }] satisfies readonly DisplayLine[],
    sub: [{ text: "DIFFERENT PERSPECTIVES." }, { text: "A SHARED PURPOSE." }, { text: "A STRONGER INDIA.", lime: true }] satisfies readonly DisplayLine[],
    lead: screen05.lead,
  },
  groups: {
    id: "groups",
    marker: { number: 1, label: "THE FOUR GROUPS" },
    headline: [{ text: "SPORT. INSTITUTIONS." }, { text: "BUSINESS. CAPITAL." }] satisfies readonly DisplayLine[],
    /** brochure-sourced, p05; the bring/take lines from people.md §02 */
    items: [
      { id: "sport", ...sport, bring: "The reality of performance, and the demand that everything else exists to serve.", take: "Access to the capital, infrastructure and technology being built around them." },
      { id: "institutions", ...institutions, bring: "The frameworks within which everything else operates.", take: "Private-sector solutions to public-sector problems, in one place." },
      { id: "business", ...business, bring: "Products, platforms and the capacity to execute.", take: "Institutional buyers, and a route to the people who make decisions." },
      { id: "capital", ...capital, bring: "The money that turns ambition into infrastructure.", take: "Visibility into a sector that is difficult to survey from outside." },
    ] satisfies readonly RoomGroupFull[],
    labels: { bring: "WHAT THEY BRING TO THE ROOM", take: "WHAT THEY TAKE FROM IT" },
  },
  composition: {
    id: "composition",
    marker: { number: 2, label: "THE COMPOSITION" },
    headline: [{ text: "WHO MEETS WHOM." }, { text: "AND WHAT THAT PRODUCES.", lime: true }] satisfies readonly DisplayLine[],
    /** people.md §03 — labelled as the target until the room is confirmed; proportions withheld. */
    label: "TARGET COMPOSITION",
    total: "350",
    filters: { all: "EVERYONE", byGroup: "BY GROUP", byPillar: "BY PILLAR" },
    /**
     * The adjacency examples, verbatim (people.md §03). The group and pillar tags are a classification
     * for the filter — the pillars are the taxonomy every ATHLIMA thing is classified by
     * (brand-pillars.md §2) — not a claim about any person.
     */
    adjacencies: [
      { id: "developer-federation", when: "When a developer meets a federation secretary", produces: "A stadium gets a tenant. A federation gets a home.", groups: ["business", "institutions"], pillars: ["build", "govern"] },
      { id: "founder-authority", when: "When a technology founder meets a state sports authority", produces: "A pilot becomes a programme.", groups: ["business", "institutions"], pillars: ["equip", "govern"] },
      { id: "investor-academy", when: "When an investor meets an academy operator", produces: "A regional academy becomes a network.", groups: ["capital", "sport"], pillars: ["enable", "perform"] },
      { id: "brand-coach", when: "When a brand meets an athlete's coach", produces: "A sponsorship becomes a partnership.", groups: ["business", "sport"], pillars: ["equip", "perform"] },
    ] satisfies readonly { id: string; when: string; produces: string; groups: readonly GroupId[]; pillars: readonly Pillar[] }[],
    closing: "The value is not how many people attend. The value is who you meet.",
  },
  council: {
    id: "advisory-council",
    marker: { number: 3, label: "THE ADVISORY COUNCIL" },
    /** people.md §04 — the holding copy, exactly, until five written confirmations. */
    headline: [{ text: "AN ADVISORY COUNCIL" }, { text: "IS BEING FORMED." }] satisfies readonly DisplayLine[],
    body: [
      "ATHLIMA is assembling a cross-disciplinary Advisory Council spanning high performance, sports law and governance, philanthropy, infrastructure, investment, sporting institutions and business — to provide institutional depth as the platform develops.",
      "Members will be announced as they are confirmed.",
    ],
  },
  invitation: {
    id: "invitation",
    headline: [{ text: "THE ROOM IS" }, { text: "350 PEOPLE.", lime: true }] satisfies readonly DisplayLine[],
    sub: ["Curated, not crowded. The room is composed, not filled."],
    /** The one place on the site it is said, with /programme (decision A4). A statement, not a link. */
    statement: [{ text: "ATHLIMA IS BY INVITATION." }] satisfies readonly DisplayLine[],
    functional: permanentCta,
  },
  path: routes.theRoom,
} as const
