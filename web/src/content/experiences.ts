/**
 * The six experiences — typed constants sourced from 04_CONTENT/experiences.md, verbatim
 * (06_BUILD/component-rules.md §3). All six share one skeleton (experiences.md: "differentiation comes
 * from imagery, register and motion — never from restructuring the page"):
 *   01 ENTRY · 02 PROPOSITION · 03 COMPONENTS · 04 FOR YOU · 05 THE RAIL · 06 INVITATION
 *
 * Every `[TO VERIFY]` in experiences.md is honoured by omission — the line is not here, so it cannot
 * render: the ATHLIMAX partner counts (B1), Connect's two-week lead time, ACTIV8's lawn and Astor Terrace,
 * the 60ft runway, the evening flow (its day and its recognition moment are unsettled), the Selection
 * Council and ATHLIMA 20 NIGHT, the under-20 eligibility line, the nominations month, and the
 * unattributed Symposium quotation. Each returns to the page the day it is verified.
 *
 * There is no guest application (decision A1, 08_OPERATIONS/decisions-2026-09-13-access.md): the guest
 * doorways are statements, and the Symposium's and ACTIV8's emotional CTAs are statements set as the
 * invitation's headline (D18). Partner-facing CTAs (→ /partner, /partner/model) stand.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { IPId } from "@/components/marks/IPMark"
import type { IndexItem } from "@/components/blocks/IndexGrid"
import { routes } from "@/lib/routes"
import { disciplines } from "./site"

export interface IPCta {
  label: string
  href: string
}

export interface IPSection {
  /** The section id — also the functional CTA's in-page anchor (#themes, #zones, #evening, #how). */
  id: string
  marker: string
  headline: readonly DisplayLine[]
  intro?: readonly string[]
}

export interface IPIndexSection extends IPSection {
  kind: "index"
  items: readonly IndexItem[]
  columns?: 2 | 3 | 4 | 6
  /** A row of categories beneath the grid — the Symposium's voices, Connect's guest profiles. */
  categories?: { label: string; items: readonly string[] }
  /** A closing line for the section, display-md. */
  principle?: readonly DisplayLine[]
}

export interface IPSequenceSection extends IPSection {
  kind: "sequence"
  steps: readonly { step: string; headline: string; detail: string }[]
  /** Copy that must appear wherever the sequence is described — Connect's disclaimer, verbatim. */
  disclaimer?: string
  categories?: { label: string; items: readonly string[] }
}

export interface IPContent {
  ip: IPId
  path: string
  meta: { title: string; description: string }
  /** The one gradient on the site belongs to AFTERHOURS' page (colour.md §5, decision D15). */
  accent?: "dusk"
  entry: {
    eyebrow: string
    showMark: boolean
    headline: readonly DisplayLine[]
    narrow?: readonly DisplayLine[]
    sub?: readonly DisplayLine[]
    /** An in-page functional CTA routes down the page from the entry; a route CTA waits for the invitation. */
    functional?: IPCta
  }
  proposition: {
    marker: string
    pullLine: readonly DisplayLine[]
    body: readonly string[]
    /** A pull quote set apart — Connect's reframe, ATHLIMA 20's philosophy. */
    quote?: readonly string[]
  }
  sections: readonly (IPIndexSection | IPSequenceSection)[]
  forYou?: {
    marker: string
    headline: readonly DisplayLine[]
    /** No href = a statement. Guest doorways are statements — there is nothing to apply to (A1). */
    doorways: readonly { audience: string; line: string; href?: string }[]
  }
  closing?: {
    marker: string
    headline: readonly DisplayLine[]
    body?: readonly string[]
  }
  invitation: {
    headline: readonly DisplayLine[]
    sub?: readonly string[]
    emotional?: IPCta
    functional?: IPCta
    /** ATHLIMA 20 pre-window (decision D4): the invitation is the email capture. */
    emailCapture?: boolean
  }
}

const marker = {
  proposition: "THE PROPOSITION",
  forYou: "FOR YOU",
  rail: "THE OTHER FIVE",
}

export const athlimax: IPContent = {
  ip: "athlimax",
  path: routes.athlimax,
  meta: {
    title: "ATHLIMAX",
    description:
      "A curated, invitation-led marketplace across six strategic pavilions — the commercial layer of ATHLIMA, India's Festival of Sport, Business & Performance.",
  },
  entry: {
    eyebrow: "THE WORLD / ATHLIMAX",
    showMark: true,
    headline: [{ text: "A CURATED" }, { text: "MARKETPLACE." }],
    /** the locked §4 line — brochure-sourced */
    sub: [{ text: "CONVERSATIONS. PARTNERSHIPS." }, { text: "REAL-WORLD IMPACT." }],
  },
  proposition: {
    marker: marker.proposition,
    pullLine: [
      { text: "IDEAS MEET CAPITAL." },
      { text: "SOLUTIONS FIND SCALE." },
      { text: "SPORT MOVES FORWARD.", lime: true },
    ],
    body: [
      "ATHLIMAX is a curated, invitation-led marketplace bringing together founding partners across six strategic pavilions. It brings global and Indian leaders together to showcase innovations, forge partnerships and accelerate the business, infrastructure and cultural future of sport.",
    ],
  },
  sections: [
    {
      kind: "index",
      id: "pavilions",
      marker: "THE SIX PAVILIONS",
      headline: [{ text: "SIX PAVILIONS." }, { text: "ONE FLOOR." }],
      columns: 3,
      /** brochure-sourced, revised brochure p09 — six pavilions (B1 working assumption) */
      items: [
        { title: "PERFORMANCE & EQUIPMENT", line: "Human potential. At a higher level.", detail: "Next-generation gear, materials, apparel and performance technology for every athlete." },
        { title: "HEALTH, WELLNESS & RECOVERY", line: "A stronger, longer India.", detail: "Solutions for physical, mental and nutritional wellbeing across the sporting ecosystem." },
        { title: "TECHNOLOGY & INNOVATION", line: "Solving for what's next.", detail: "AI, data, and the platforms and environments reshaping how sport is played, watched and managed." },
        { title: "INFRASTRUCTURE & ACTIVE CITIES", line: "Built environments for active lives.", detail: "Stadiums, training centres, smart facilities and urban ecosystems that make sport more accessible and inclusive." },
        { title: "MEDIA, CONTENT & ENTERTAINMENT", line: "Stories that move a nation.", detail: "Content, broadcasting, new media and cultural IP that bring sport to new audiences." },
        { title: "INVESTMENT, POLICY & IMPACT", line: "Capital for a brighter tomorrow.", detail: "Investment platforms, advisory, policy initiatives and models to enable a stronger, more sustainable sporting ecosystem." },
      ],
      principle: [{ text: "LIMITED. CURATED." }, { text: "COMPLEMENTARY." }],
    },
  ],
  forYou: {
    marker: marker.forYou,
    headline: [{ text: "WHAT IT MEANS" }, { text: "FOR YOU." }],
    doorways: [
      { audience: "IF YOU ARE A BRAND OR A BUSINESS", line: "The offer is not a space. It is a territory.", href: routes.partner },
      { audience: "IF YOU ARE A GUEST", line: "This is where you find the companies solving the problem you have." },
    ],
  },
  closing: {
    marker: "THE IMPACT",
    headline: [{ text: "THE IMPACT OF" }, { text: "A CONVERSATION." }],
    body: [
      "ATHLIMAX creates the space for ideas to meet decision-makers — turning conversations into partnerships, and partnerships into real-world impact across sport, business and society.",
    ],
  },
  invitation: {
    headline: [{ text: "BUILD INSIDE" }, { text: "THE MARKETPLACE.", lime: true }],
    emotional: { label: "BUILD INSIDE THE MARKETPLACE", href: routes.partnerModel },
    functional: { label: "BECOME A FOUNDING PARTNER", href: routes.partner },
  },
}

export const symposium: IPContent = {
  ip: "symposium",
  path: routes.symposium,
  meta: {
    title: "The Symposium",
    description:
      "A higher conversation — six themes, six formats, and the leaders, policymakers, athletes, investors and cultural voices shaping the future of sport in India.",
  },
  entry: {
    eyebrow: "THE WORLD / THE SYMPOSIUM",
    showMark: true,
    /** the locked §4 line */
    headline: [{ text: "A HIGHER" }, { text: "CONVERSATION." }],
    sub: [{ text: "IDEAS THAT MOVE INDIA." }],
    functional: { label: "SEE THE THEMES", href: "#themes" },
  },
  proposition: {
    marker: marker.proposition,
    pullLine: [{ text: "EVERY SESSION HAS" }, { text: "A REASON TO EXIST.", lime: true }],
    body: [
      "The Symposium brings together global and Indian leaders, policymakers, athletes, investors, technologists and cultural voices to discuss the ideas, systems and collaborations that will shape the future of sport in India and beyond.",
    ],
  },
  sections: [
    {
      kind: "index",
      id: "themes",
      marker: "THE SIX THEMES",
      headline: [{ text: "SIX THEMES." }],
      columns: 3,
      /** brochure-sourced */
      items: [
        { title: "THE NEXT GENERATION", line: "Talent, pathways and high-performance ecosystems." },
        { title: "INFRASTRUCTURE & CITIES", line: "Stadiums, grassroots, urban sport and active living." },
        { title: "TECHNOLOGY & INNOVATION", line: "AI, data, media, fan engagement and the future of sport." },
        { title: "INVESTMENT & ECONOMICS", line: "Capital, business models and the India opportunity." },
        { title: "POLICY & GOVERNANCE", line: "Regulation, institutions and a stronger sporting nation." },
        { title: "CULTURE & IMPACT", line: "Sport as a force for social change, identity and unity." },
      ],
    },
    {
      kind: "index",
      id: "formats",
      marker: "THE SIX FORMATS",
      headline: [{ text: "SIX FORMATS." }],
      columns: 3,
      /** brochure-sourced */
      items: [
        { title: "KEYNOTES", line: "Bold ideas. New perspectives." },
        { title: "PANEL DISCUSSIONS", line: "Diverse voices. Actionable dialogue." },
        { title: "ROUNDTABLES", line: "Closed-door, high-value conversations." },
        { title: "FIRESIDE CHATS", line: "Candid. Insightful. Inspiring." },
        { title: "CASE STUDIES", line: "Real examples. Real learnings." },
        { title: "SPECIAL SESSIONS", line: "Extended sessions on a single critical theme." },
      ],
      /** The page runs on voice categories, never names, until each has confirmed in writing (positioning.md §6). */
      categories: {
        label: "THE VOICES",
        items: ["Athletes", "Business Leaders", "Policymakers", "Global Experts", "Investors", "Cultural Voices"],
      },
    },
  ],
  invitation: {
    headline: [{ text: "SHAPE THE" }, { text: "CONVERSATION.", lime: true }],
    // The emotional CTA is the headline itself — a statement, not a link (decisions A1, D18).
  },
}

export const activ8: IPContent = {
  ip: "activ8",
  path: routes.activ8,
  meta: {
    title: "ACTIV8",
    description:
      "Play beyond the game — ATHLIMA's outdoor, physical experience, where performance, play, wellness and community come together across six zones.",
  },
  entry: {
    eyebrow: "THE WORLD / ACTIV8",
    showMark: true,
    /** the locked §4 line — brochure-sourced */
    headline: [{ text: "PLAY BEYOND" }, { text: "THE GAME." }],
    functional: { label: "SEE THE EXPERIENCE", href: "#zones" },
  },
  proposition: {
    marker: marker.proposition,
    pullLine: [{ text: "HIGHER PERFORMANCE." }, { text: "A HEALTHIER," }, { text: "STRONGER INDIA.", lime: true }],
    body: [
      "ACTIV8 is ATHLIMA's outdoor, physical experience — where performance, play, wellness and community come together. From elite showcases to open participation, ACTIV8 brings people, brands and technology into motion.",
    ],
  },
  sections: [
    {
      kind: "index",
      id: "zones",
      marker: "THE SIX ZONES",
      headline: [{ text: "SIX ZONES." }, { text: "ONE LAWN." }],
      columns: 3,
      /** brochure-sourced */
      items: [
        { title: "PERFORMANCE", line: "Athlete showcases. Training. Masterclasses." },
        { title: "PLAY", line: "Open play. Tournaments. Community engagement." },
        { title: "RECOVERY", line: "Wellness. Mindfulness. A longer, healthier you." },
        { title: "TECHNOLOGY", line: "Innovation for human performance." },
        { title: "COMMUNITY", line: "Sport for all. Inclusion. Impact." },
        { title: "LIVE EXPERIENCES", line: "Competitions. Demonstrations. Activations." },
      ],
    },
  ],
  forYou: {
    marker: marker.forYou,
    headline: [{ text: "WHAT IT MEANS" }, { text: "FOR YOU." }],
    doorways: [
      { audience: "IF YOU ARE A BRAND", line: "This is where a product stops being described and starts being felt.", href: routes.partner },
      { audience: "IF YOU ARE A GUEST", line: "This is where the day stops being a conversation." },
    ],
  },
  invitation: {
    headline: [{ text: "PLAY BEYOND" }, { text: "THE GAME.", lime: true }],
    // The emotional CTA is the headline itself — a statement, not a link (decisions A1, D18).
  },
}

export const afterhours: IPContent = {
  ip: "afterhours",
  path: routes.afterhours,
  meta: {
    title: "Afterhours",
    description:
      "Where sport meets culture — ATHLIMA's curated evening: dining, cocktails, music, culture and the conversations that need the night.",
  },
  accent: "dusk",
  entry: {
    eyebrow: "THE WORLD / AFTERHOURS",
    showMark: true,
    /** the locked §4 line */
    headline: [{ text: "WHERE SPORT" }, { text: "MEETS CULTURE." }],
    functional: { label: "SEE THE EVENING", href: "#evening" },
  },
  proposition: {
    marker: marker.proposition,
    /** No lime word on this page (decision D15). */
    pullLine: [{ text: "BIGGER CONVERSATIONS." }, { text: "A BRIGHTER TOMORROW." }],
    body: [
      "As the day transitions, AFTERHOURS is ATHLIMA's curated evening experience — bringing together sport, culture, music, cuisine and influential people in an atmosphere designed for deeper conversations.",
      "Athleisure and performance fashion take centre stage in a signature runway show.",
    ],
  },
  sections: [
    {
      kind: "index",
      id: "evening",
      marker: "THE SIX ELEMENTS",
      headline: [{ text: "SIX ELEMENTS." }, { text: "ONE NIGHT." }],
      columns: 3,
      /** brochure-sourced — "Networking" is the brochure's name for the element */
      items: [
        { title: "DINING", line: "Curated culinary experiences." },
        { title: "COCKTAILS", line: "Unwind. Connect. Celebrate." },
        { title: "MUSIC", line: "Live sets. Real artists. The atmosphere of the night." },
        { title: "CULTURE", line: "Fashion. Art. Film. Expression beyond sport." },
        { title: "NETWORKING", line: "Real conversations. Lasting relationships." },
        { title: "ENTERTAINMENT", line: "Surprises. Performances. Moments that stay." },
      ],
    },
  ],
  invitation: {
    /** The emotional CTA is a statement, not a link (decision D18). No lime word (D15). */
    headline: [{ text: "THE DAY INSPIRES." }, { text: "THE NIGHT CELEBRATES." }],
  },
}

export const connect: IPContent = {
  ip: "connect",
  path: routes.connect,
  meta: {
    title: "ATHLIMA Connect",
    description:
      "Connect before you arrive. Collaborate when you get there. A curated programme of one-to-one introductions for Founding Partners, ahead of ATHLIMA.",
  },
  entry: {
    eyebrow: "THE WORLD / ATHLIMA CONNECT",
    showMark: false,
    headline: [{ text: "THE CONVERSATION" }, { text: "STARTS BEFORE" }, { text: "ATHLIMA." }],
    /** the locked §4 line — decision D16 */
    sub: [{ text: "CONNECT BEFORE YOU ARRIVE." }, { text: "COLLABORATE WHEN YOU GET THERE." }],
    functional: { label: "HOW CONNECT WORKS", href: "#how" },
  },
  proposition: {
    marker: marker.proposition,
    pullLine: [{ text: "WHO DO YOU" }, { text: "ACTUALLY NEED", lime: true }, { text: "TO MEET?", lime: true }],
    /** A Founding Partner benefit (decision D20). The two-week lead time is withheld until deliverable. */
    body: [
      "Ahead of ATHLIMA, Founding Partners begin relevant conversations before the event through a curated programme of one-to-one introductions with selected guests.",
    ],
    /** brochure-sourced — "attendees" quoted as the word ATHLIMA refuses, the one context it is permitted */
    quote: ["We don't say: here are 350 attendees.", "We ask: who do you actually need to meet?"],
  },
  sections: [
    {
      kind: "sequence",
      id: "how",
      marker: "HOW IT WORKS",
      headline: [{ text: "FOUR STEPS." }],
      /** brochure-sourced */
      steps: [
        { step: "IDENTIFY", headline: "Tell us who you want to meet.", detail: "Founding Partners share their business objectives, areas of interest and preferred guest profiles." },
        { step: "MATCH", headline: "We identify relevant conversations.", detail: "The ATHLIMA team reviews the participating guest ecosystem and identifies potential matches based on relevance." },
        { step: "PRE-BLOCK", headline: "Meetings are arranged before ATHLIMA.", detail: "Selected one-to-one meetings are pre-blocked ahead of ATHLIMA, allowing both sides to prepare for a focused conversation." },
        { step: "ARRIVE READY", headline: "Come to ATHLIMA with conversations already in motion.", detail: "The event becomes the continuation of relationships that have already begun." },
      ],
      /** brochure-sourced — survives verbatim, wherever Connect is described */
      disclaimer:
        "Meetings are subject to guest confirmation, availability and mutual suitability. ATHLIMA does not guarantee meetings with any specific individual or organisation.",
      categories: {
        label: "GUEST PROFILES AVAILABLE",
        items: ["Developers", "Institutional buyers", "Government & authorities", "Clubs & operators", "Investors & business leaders", "Sporting leaders"],
      },
    },
  ],
  closing: {
    marker: "THE PRINCIPLE",
    headline: [{ text: "CONNECT BEFORE YOU ARRIVE." }, { text: "COLLABORATE WHEN YOU GET THERE." }],
  },
  invitation: {
    headline: [{ text: "CONNECT BEFORE" }, { text: "YOU ARRIVE.", lime: true }],
    /** Connect is a Founding Partner benefit — the emotional CTA routes to /partner (decision D20). */
    emotional: { label: "CONNECT BEFORE YOU ARRIVE", href: routes.partner },
  },
}

export const athlima20: IPContent = {
  ip: "athlima20",
  path: routes.athlima20,
  meta: {
    title: "ATHLIMA 20",
    description:
      "Twenty athletes. Twenty sports. One future. ATHLIMA 20 celebrates India's most exceptional emerging athletes across twenty disciplines.",
  },
  entry: {
    eyebrow: "THE WORLD / ATHLIMA 20",
    showMark: true,
    headline: [{ text: "TWENTY ATHLETES." }, { text: "TWENTY SPORTS." }, { text: "ONE FUTURE.", lime: true }],
    /** the locked §4 line — brochure-sourced; the emotional CTA, set as a statement (D18) */
    sub: [{ text: "TOMORROW PLAYS HERE." }],
    functional: { label: "TELL ME WHEN NOMINATIONS OPEN", href: "#alert" },
  },
  proposition: {
    marker: marker.proposition,
    pullLine: [{ text: "MORE ATHLETES." }, { text: "MORE OPPORTUNITIES." }, { text: "A STRONGER INDIA.", lime: true }],
    body: [
      "ATHLIMA 20 celebrates India's most exceptional emerging athletes — twenty individuals across twenty sporting disciplines who embody the nation's next chapter in sport. Through storytelling, recognition and visibility, ATHLIMA 20 shines a light on the people who will inspire a stronger, more active and more united India.",
      "This is not an awards list. Selection is independent.",
    ],
    /** brochure-sourced — the philosophy, the emotional centre of the site */
    quote: ["Do not wait until they become champions to tell their story.", "Tell it while they are becoming one."],
  },
  sections: [
    {
      kind: "index",
      id: "disciplines",
      marker: "THE TWENTY DISCIPLINES",
      headline: [{ text: "TWENTY" }, { text: "DISCIPLINES." }],
      columns: 4,
      /** brochure-sourced — the twenty, locked (brand-strategy.md §4) */
      items: disciplines.map((title) => ({ title })),
      categories: {
        label: "SELECTION CRITERIA",
        items: ["Performance", "Potential", "Character", "Capacity to inspire"],
      },
    },
    {
      kind: "index",
      id: "how",
      marker: "HOW IT WORKS",
      headline: [{ text: "ONE PERSON." }, { text: "ONE STORY." }],
      columns: 3,
      /** brochure-sourced. ATHLIMA 20 NIGHT and the Council's name wait for confirmation. */
      items: [
        { title: "NATIONAL NOMINATION", line: "Through federations, academies and sporting networks." },
        { title: "INDEPENDENT SELECTION", line: "An independent Selection Council." },
        { title: "THE TWENTY", line: "Twenty athletes across twenty disciplines." },
        { title: "STORYTELLING", line: "Portraits and films. One person. One story." },
        { title: "THE 20-DAY REVEAL", line: "One athlete revealed each day." },
        { title: "THE CLASS", line: "An annual class, building a cumulative community." },
      ],
    },
  ],
  closing: {
    marker: "THE COMMITMENT",
    headline: [{ text: "WE BUILD THE ECOSYSTEM TODAY." }, { text: "WE CELEBRATE WHO WILL", lime: true }, { text: "BUILD IT TOMORROW.", lime: true }],
    body: [
      "ATHLIMA 20 is more than a showcase — it is a commitment. A commitment to India's emerging talent, to equal opportunity across disciplines, and to a future where sport creates stronger individuals, communities and a nation.",
    ],
  },
  invitation: {
    /** pre-window state (decision D4): ctas.md §4a — the opening month is withheld until supplied. */
    headline: [{ text: "TWENTY ATHLETES." }, { text: "TWENTY SPORTS." }, { text: "ONE FUTURE.", lime: true }],
    sub: ["Leave your email and we'll tell you the day nominations open."],
    emailCapture: true,
  },
}

export const experiences: readonly IPContent[] = [athlimax, symposium, activ8, afterhours, connect, athlima20]

/** The IP rail — the other five, in the canonical order, at the foot of every IP page. */
export const ipRail = experiences.map((e) => ({ ip: e.ip, href: e.path }))

/** ctas.md §4a — the pre-window email capture. */
export const emailCapture = {
  field: { label: "EMAIL", helper: "One message, on the day. Nothing else." },
  button: "TELL ME WHEN NOMINATIONS OPEN",
  confirmation: "You'll hear from us the day nominations open.",
} as const
