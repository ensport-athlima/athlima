/**
 * The six audience doorways — typed constants sourced from 04_CONTENT/opportunities.md ("THE SIX
 * AUDIENCE DOORWAY PAGES") and 01_STRATEGY/audiences.md §2, verbatim. Five sections, under 900 words:
 *   01 YOUR LINE · 02 YOUR QUESTION · 03 YOUR PROOF (exactly three) · 04 YOUR FEAR, answered · 05 YOUR CTA
 * The opening line is audiences.md's; the emotional statement is ctas.md's (decisions D17, D18).
 * Functional CTAs follow decision A5 — no guest application anywhere.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import { routes } from "@/lib/routes"
import { permanentCta } from "./navigation"
import { partnerCta } from "./partner"

export interface DoorwayContent {
  path: string
  audience: string
  meta: { title: string; description: string }
  line: readonly DisplayLine[]
  question: string
  proofs: readonly { title: string; line: string; href?: string }[]
  fear: { quote: string; answer: readonly string[] }
  cta: {
    statement: readonly DisplayLine[]
    functional?: { label: string; href: string }
    tertiary?: { label: string; href: string }
  }
}

const markers = { question: "YOUR QUESTION", proof: "YOUR PROOF", fear: "YOUR FEAR" } as const

export const doorwayMarkers = markers

export const forBusiness: DoorwayContent = {
  path: routes.forBusiness,
  audience: "FOR BUSINESS",
  meta: { title: "For Business", description: "Find the people shaping sport's next economy. Why a founder or business leader should care about ATHLIMA — 350 people, cross-sector, by design." },
  line: [{ text: "FIND THE PEOPLE" }, { text: "SHAPING SPORT'S" }, { text: "NEXT ECONOMY.", lime: true }],
  question: "Where is the sporting economy actually being decided?",
  proofs: [
    { title: "THE CROSS-SECTOR COMPOSITION OF THE 350", line: "Sport, institutions, business and capital — in one room, by design.", href: routes.theRoom },
    { title: "THE FOUNDING PARTNER MODEL", line: "Six levels, from presence to platform. What part of ATHLIMA can you legitimately own?", href: routes.partnerModel },
    { title: "ATHLIMA CONNECT", line: "For organisations that partner: conversations arranged before you arrive.", href: routes.connect },
  ],
  fear: {
    quote: "Another networking event that wastes two days.",
    answer: ["350, not 5,000. A room designed so the people you need are in it — and, for Founding Partners, conversations arranged before you arrive."],
  },
  cta: { statement: [{ text: "FIND THE PEOPLE SHAPING" }, { text: "SPORT'S NEXT ECONOMY.", lime: true }], functional: permanentCta },
}

export const forAthletes: DoorwayContent = {
  path: routes.forAthletes,
  audience: "FOR ATHLETES",
  meta: { title: "For Athletes", description: "The people building your future are in one room. So are you. Why an athlete, coach or performance professional should care about ATHLIMA." },
  line: [{ text: "THE PEOPLE BUILDING" }, { text: "YOUR FUTURE ARE IN ONE ROOM." }, { text: "SO ARE YOU.", lime: true }],
  question: "What is here for me that isn't just business people talking about us?",
  proofs: [
    { title: "ATHLIMA 20", line: "Twenty athletes. Twenty sports. One future. An athlete platform with independent selection.", href: routes.athlima20 },
    { title: "ACTIV8", line: "Where the day stops being a conversation. Performance, play, recovery, live experiences.", href: routes.activ8 },
    { title: "ATHLETES ON THE SYMPOSIUM STAGE", line: "Not only in the subject matter. Athletes are one of the six voices.", href: routes.symposium },
  ],
  fear: {
    quote: "Being decoration at a corporate event.",
    answer: ["ATHLIMA 20 is an athlete platform with independent selection. The Symposium has athletes on stage, not just about them."],
  },
  cta: { statement: [{ text: "FIND YOUR" }, { text: "NEXT LEVEL.", lime: true }], tertiary: { label: "SEE ATHLIMA 20", href: routes.athlima20 } },
}

export const forCapital: DoorwayContent = {
  path: routes.forCapital,
  audience: "FOR CAPITAL",
  meta: { title: "For Capital", description: "The opportunities behind India's sporting growth, in one room. Why an investor or family office should care about ATHLIMA — curated, not filled." },
  line: [{ text: "THE OPPORTUNITIES BEHIND" }, { text: "INDIA'S SPORTING GROWTH," }, { text: "IN ONE ROOM.", lime: true }],
  question: "Is there real deal flow here, or is this a party?",
  proofs: [
    { title: "THE INVESTMENT, POLICY & IMPACT PAVILION", line: "Capital for a brighter tomorrow. One of the six ATHLIMAX pavilions.", href: `${routes.athlimax}#pavilions` },
    { title: "THE INVESTMENT & ECONOMICS THEME", line: "Capital, business models and the India opportunity, on the Symposium stage.", href: `${routes.symposium}#themes` },
    { title: "THE FOUNDER AND INFRASTRUCTURE COHORT", line: "CEOs and founders, technology, infrastructure — the business quarter of the room.", href: `${routes.theRoom}?group=business` },
  ],
  fear: {
    quote: "A low-quality pipeline.",
    answer: ["Curated composition. The room is designed, not filled."],
  },
  cta: { statement: [{ text: "FIND THE OPPORTUNITIES BEHIND" }, { text: "INDIA'S SPORTING GROWTH.", lime: true }], functional: permanentCta },
}

export const forInfrastructure: DoorwayContent = {
  path: routes.forInfrastructure,
  audience: "FOR INFRASTRUCTURE",
  meta: { title: "For Infrastructure", description: "Sport needs places. Meet the people who decide where they get built. Why a developer, architect or operator should care about ATHLIMA." },
  line: [{ text: "SPORT NEEDS PLACES." }, { text: "MEET THE PEOPLE WHO DECIDE" }, { text: "WHERE THEY GET BUILT.", lime: true }],
  question: "Will the people who commission and operate facilities actually be there?",
  proofs: [
    { title: "THE BUILD PILLAR", line: "The physical and institutional foundations of sport — the first of the five.", href: `${routes.theWorld}#ecosystem` },
    { title: "THE INFRASTRUCTURE & ACTIVE CITIES PAVILION", line: "Built environments for active lives. One of the six ATHLIMAX pavilions.", href: `${routes.athlimax}#pavilions` },
    { title: "FEDERATIONS, GOVERNMENT AND OPERATORS IN THE SAME ROOM", line: "The institutional quarter of the room, beside the people who build for it.", href: `${routes.theRoom}?group=institutions` },
  ],
  fear: {
    quote: "I'll just meet other developers.",
    answer: ["The cross-sector composition is the entire design of the room."],
  },
  cta: { statement: [{ text: "SPORT NEEDS PLACES." }, { text: "MEET THE PEOPLE WHO DECIDE" }, { text: "WHERE THEY GET BUILT.", lime: true }], functional: permanentCta },
}

export const forInstitutions: DoorwayContent = {
  path: routes.forInstitutions,
  audience: "FOR INSTITUTIONS",
  meta: { title: "For Institutions", description: "Build the infrastructure around India's sporting future. Why a government body, federation or institution should care about ATHLIMA." },
  line: [{ text: "BUILD THE INFRASTRUCTURE" }, { text: "AROUND INDIA'S" }, { text: "SPORTING FUTURE.", lime: true }],
  question: "Is this serious, and is it appropriate for us to be associated with it?",
  /** This journey never passes through a commercial page (user-journeys.md, Journey 03). */
  proofs: [
    { title: "ENSPORT VENTURES AND THE ENARR GROUP", line: "ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group.", href: routes.about },
    { title: "THE POLICY & GOVERNANCE THEME", line: "Regulation, institutions and a stronger sporting nation, on the Symposium stage.", href: `${routes.symposium}#themes` },
    { title: "NO PRICING. NO TICKETING. ANYWHERE.", line: "The room is by invitation. Partnership is by conversation. Nothing is for sale on this site." },
  ],
  fear: {
    quote: "A commercial event using institutional names for legitimacy.",
    answer: ["Register and restraint. Nothing on your path through this site is a sales page."],
  },
  cta: { statement: [{ text: "BUILD THE INFRASTRUCTURE AROUND" }, { text: "INDIA'S SPORTING FUTURE.", lime: true }], functional: { label: "INSTITUTIONAL ENQUIRY", href: routes.contactInstitutional } },
}

export const forBrands: DoorwayContent = {
  path: routes.forBrands,
  audience: "FOR BRANDS",
  meta: { title: "For Brands", description: "Don't sponsor sport. Own a territory inside it. Why a brand should care about ATHLIMA: six levels, a value architecture, and a journey through the two days." },
  line: [{ text: "DON'T SPONSOR SPORT." }, { text: "OWN A TERRITORY", lime: true }, { text: "INSIDE IT.", lime: true }],
  question: "What can I own here that I cannot own anywhere else?",
  proofs: [
    { title: "THE SIX-LEVEL MODEL", line: "Presence, experience, access, authority, IP, platform. The strongest partnerships reach four to six.", href: routes.partnerModel },
    { title: "THE VALUE ARCHITECTURE", line: "Access, conversation, experience, positioning, impact. The value isn't measured in logos.", href: `${routes.partner}#value` },
    { title: "THE SEVEN-STAGE JOURNEY", line: "Your brand doesn't appear once. It moves through ATHLIMA.", href: routes.partnerJourney },
  ],
  fear: {
    quote: "Paying for a logo on a wall.",
    answer: ["The value isn't measured in logos. It's measured in who you meet, what you start, and what happens next."],
  },
  cta: { statement: [{ text: "OWN A TERRITORY," }, { text: "NOT A LOGO.", lime: true }], functional: partnerCta },
}

export const doorways = [forBusiness, forAthletes, forCapital, forInfrastructure, forInstitutions, forBrands] as const
