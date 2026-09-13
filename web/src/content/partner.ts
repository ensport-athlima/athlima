/**
 * The partner cluster — typed constants sourced from 04_CONTENT/opportunities.md, verbatim
 * (06_BUILD/component-rules.md §3). /partner (the proposition), /partner/model (the six levels),
 * /partner/journey (the seven stages). The form's copy is in ./forms.ts.
 *
 * Absolute rule (opportunities.md): no pricing table, no package tiers, no comparison grid, anywhere.
 * Honoured by omission: the two-week Connect lead time; how the five partner types map to the six levels
 * (B1); every brand name from strategy work — none appears here or anywhere public.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { IndexItem } from "@/components/blocks/IndexGrid"
import type { SequenceStep } from "@/components/blocks/SequenceRail"
import { routes } from "@/lib/routes"

export const partnerSubNav = [
  { label: "THE PROPOSITION", href: routes.partner },
  { label: "THE MODEL", href: routes.partnerModel },
  { label: "THE JOURNEY", href: routes.partnerJourney },
  { label: "ENQUIRE", href: routes.partnerEnquire },
] as const

export const partnerCta = { label: "START A PARTNER CONVERSATION", href: routes.partnerEnquire } as const

export const partner = {
  meta: {
    title: "Partner",
    description:
      "Don't just partner with an event. Help build the ecosystem. The Founding Partner proposition — access, conversation, experience, positioning and impact — for ATHLIMA, 14–15 December 2026, The St. Regis Mumbai.",
  },
  reframe: {
    id: "entry",
    marker: { number: 1, label: "THE FOUNDING PARTNER" },
    eyebrow: "DON'T JUST PARTNER WITH AN EVENT.",
    headline: [{ text: "HELP BUILD" }, { text: "THE ECOSYSTEM.", lime: true }] satisfies readonly DisplayLine[],
    lead: "As a Founding Partner, you are not a sponsor. You are a builder — shaping a platform that connects people, ideas, capital and opportunity to grow Indian sport for the long term.",
    sub: [{ text: "MORE THAN VISIBILITY." }, { text: "A LASTING IMPACT." }] satisfies readonly DisplayLine[],
  },
  capabilities: {
    id: "capabilities",
    marker: { number: 2, label: "THE SEVEN CAPABILITIES" },
    headline: [{ text: "OWN. LEAD. EXPERIENCE." }, { text: "CONNECT. CREATE. SUPPORT. BUILD." }] satisfies readonly DisplayLine[],
    /** brochure-sourced */
    items: [
      { title: "OWN", line: "A definable territory with exclusive category rights." },
      { title: "LEAD", line: "A conversation that matters to your industry." },
      { title: "EXPERIENCE", line: "Bring your brand to life through formats people take part in." },
      { title: "CONNECT", line: "With a curated group of decision-makers." },
      { title: "CREATE", line: "Content and stories that travel beyond the event." },
      { title: "SUPPORT", line: "The next generation, through ATHLIMA 20." },
      { title: "BUILD", line: "A long-term partnership across a 365-day platform." },
    ] satisfies readonly IndexItem[],
    closing: [{ text: "THE VALUE IS NOT ONE ASSET." }, { text: "IT IS HOW THE ASSETS WORK TOGETHER." }] satisfies readonly DisplayLine[],
  },
  value: {
    id: "value",
    marker: { number: 3, label: "THE VALUE ARCHITECTURE" },
    headline: [{ text: "FIVE WAYS A FOUNDING PARTNER" }, { text: "CREATES AND CAPTURES VALUE." }] satisfies readonly DisplayLine[],
    /** brochure-sourced */
    items: [
      { title: "ACCESS", line: "Meet the people who matter.", detail: ["Athletes", "Business leaders", "Investors", "Policymakers", "Institutions", "Media & cultural figures"] },
      { title: "CONVERSATION", line: "Put your ideas in the room.", detail: ["Speaking opportunities", "Closed-door roundtables", "ATHLIMA Connect", "Policy & industry dialogue", "Thought leadership", "Shaping the agenda"] },
      { title: "EXPERIENCE", line: "Let people experience your proposition.", detail: ["Branded pavilions", "Product demonstrations", "Interactive activations", "Hospitality environments", "Participation opportunities", "Storytelling in the space"] },
      { title: "POSITIONING", line: "Be seen as a contributor, not a sponsor.", detail: ["Association with impact", "Alignment to key themes", "Brand meaning and recall", "Visibility across platforms", "ESG and community initiatives", "A seat at the table"] },
      { title: "IMPACT", line: "Turn conversations into what happens next.", detail: ["Partnerships", "Investment opportunities", "Talent pipelines", "Strategic collaborations", "Long-term initiatives", "Real-world change"] },
    ],
    closing: [{ text: "THE VALUE ISN'T" }, { text: "MEASURED IN LOGOS.", lime: true }] satisfies readonly DisplayLine[],
    closingLine: "It's measured in who you meet, what you start, and what happens next.",
  },
  reasons: {
    id: "why",
    marker: { number: 4, label: "WHY BECOME A FOUNDING PARTNER" },
    headline: [{ text: "EIGHT REASONS." }] satisfies readonly DisplayLine[],
    /** brochure-sourced */
    items: [
      { title: "ACCESS", line: "Meet relevant decision-makers across sport, business, infrastructure and institutions." },
      { title: "BUSINESS DEVELOPMENT", line: "Create conversations that can develop into partnerships, procurement and commercial relationships." },
      { title: "NETWORK", line: "Build relationships across an ecosystem that rarely comes together in one room." },
      { title: "DEMONSTRATION", line: "Put products, technology and capabilities into a live environment where they can be experienced and understood." },
      { title: "POSITIONING", line: "Associate your organisation with the emergence of India's sports economy." },
      { title: "INTELLIGENCE", line: "Gain insight into market priorities, emerging technologies and the direction of the industry." },
      { title: "CONTENT", line: "Create meaningful moments, conversations and stories around your brand." },
      { title: "FIRST-MOVER ADVANTAGE", line: "Be part of the inaugural edition and help shape the platform from its beginning." },
    ] satisfies readonly IndexItem[],
    closing: [
      { text: "THE VALUE ISN'T MEASURED IN FOOTFALL." },
      { text: "IT'S MEASURED IN WHO YOU MEET," },
      { text: "WHAT YOU DISCOVER, AND WHAT HAPPENS NEXT." },
    ] satisfies readonly DisplayLine[],
  },
  connect: {
    id: "connect",
    marker: { number: 5, label: "ATHLIMA CONNECT" },
    headline: [{ text: "THE CONVERSATION STARTS" }, { text: "BEFORE ATHLIMA." }] satisfies readonly DisplayLine[],
    /** The two-week lead time is withheld until it is an operational commitment (experiences.md, Connect). */
    body: ["Before ATHLIMA, we ask you a single question: who do you actually need to meet?", "ATHLIMA Connect is a Founding Partner benefit — a curated programme of one-to-one introductions with selected guests, arranged ahead of the two days."],
    cta: { label: "HOW ATHLIMA CONNECT WORKS", href: routes.connect },
  },
  invitation: {
    id: "invitation",
    /** The emotional CTA, set as a statement (decision D18). */
    headline: [{ text: "DON'T JUST SHOW UP." }, { text: "SHAPE WHAT COMES NEXT.", lime: true }] satisfies readonly DisplayLine[],
    functional: partnerCta,
  },
} as const

export const partnerModel = {
  meta: {
    title: "The Model",
    description:
      "Six levels of partnership, from presence to platform. Every ATHLIMA partnership begins with one question: what part of ATHLIMA can your organisation legitimately own?",
  },
  entry: {
    id: "entry",
    eyebrow: "PARTNER / THE MODEL",
    headline: [{ text: "SIX LEVELS" }, { text: "OF PARTNERSHIP." }] satisfies readonly DisplayLine[],
    body: [
      "A footwear company should not receive the same proposition as a recovery company. A sports infrastructure company should not receive the same proposition as a nutrition company.",
      "Every ATHLIMA partnership begins with one question: what does this organisation actually contribute to Indian sport, and what part of ATHLIMA can it legitimately own?",
    ],
  },
  levels: {
    id: "levels",
    marker: { number: 1, label: "THE SIX LEVELS" },
    headline: [{ text: "PRESENCE. EXPERIENCE. ACCESS." }, { text: "AUTHORITY. IP. PLATFORM." }] satisfies readonly DisplayLine[],
    /** brochure-sourced */
    items: [
      { title: "PRESENCE", line: "Your brand appears at ATHLIMA." },
      { title: "EXPERIENCE", line: "You create something people can interact with." },
      { title: "ACCESS", line: "You get curated relationships." },
      { title: "AUTHORITY", line: "You own an intellectual conversation." },
      { title: "IP", line: "You create something that continues beyond ATHLIMA." },
      { title: "PLATFORM", line: "You become structurally associated with a part of the ATHLIMA ecosystem." },
    ] satisfies readonly IndexItem[],
    line: "The strongest partnerships reach levels four to six.",
  },
  territories: {
    id: "territories",
    marker: { number: 2, label: "TERRITORIES" },
    headline: [{ text: "DO NOT ASK HOW MUCH VISIBILITY YOU GET." }, { text: "ASK WHAT PART OF ATHLIMA", lime: true }, { text: "YOU CAN LEGITIMATELY OWN.", lime: true }] satisfies readonly DisplayLine[],
    label: "AVAILABLE TERRITORIES INCLUDE",
    /** In principle only — never a brand name (positioning.md §6). */
    items: ["Movement", "Recovery", "Sporting Infrastructure", "Technology", "Athlete Care", "Global Sporting Experiences", "Performance", "Youth Development", "Nutrition", "Hydration", "Community", "Sporting Culture"],
  },
  space: {
    id: "space",
    marker: { number: 3, label: "THE PHYSICAL SPACE" },
    headline: [{ text: "A SMALL SPACE SHOULD" }, { text: "STILL FEEL LIKE A WORLD." }] satisfies readonly DisplayLine[],
    body: [
      "A partner space is not a booth. The constraint is meant to produce discipline, not clutter: architectural framing, a clear statement, digital storytelling, selective demonstration, conversation, premium materials, hospitality.",
    ],
  },
  invitation: {
    id: "invitation",
    headline: [{ text: "WHAT PART OF ATHLIMA" }, { text: "CAN YOU LEGITIMATELY OWN?", lime: true }] satisfies readonly DisplayLine[],
    functional: partnerCta,
  },
} as const

export const partnerJourney = {
  meta: {
    title: "The Journey",
    description:
      "Your brand doesn't appear once. It moves through ATHLIMA — seven stages across six connected experiences, from Connect to ATHLIMA 20.",
  },
  entry: {
    id: "entry",
    eyebrow: "PARTNER / THE JOURNEY",
    headline: [{ text: "YOUR BRAND" }, { text: "DOESN'T APPEAR ONCE." }, { text: "IT MOVES THROUGH" }, { text: "ATHLIMA." }] satisfies readonly DisplayLine[],
    sub: [{ text: "MORE THAN VISIBILITY." }, { text: "A CONTINUOUS PRESENCE." }] satisfies readonly DisplayLine[],
    lead: "A connected route across six interconnected experiences, giving your brand multiple touchpoints, deeper engagement and lasting impact.",
  },
  stages: {
    id: "stages",
    marker: { number: 1, label: "THE SEVEN STAGES" },
    headline: [{ text: "SEVEN STAGES." }] satisfies readonly DisplayLine[],
    /** brochure-sourced */
    steps: [
      { step: "BEFORE", where: "IDENTIFY · ATHLIMA CONNECT", headline: "Pre-event matchmaking to identify and engage the right people.", detail: "" },
      { step: "DISCOVER", where: "SHOW · ATHLIMAX", headline: "The marketplace to showcase your brand, solutions and innovation.", detail: "" },
      { step: "THINK", where: "LEAD · THE SYMPOSIUM", headline: "Lead conversations that shape the future of Indian sport.", detail: "" },
      { step: "EXPERIENCE", where: "DEMONSTRATE · ACTIV8", headline: "Bring your brand to life through performance, wellness and participation.", detail: "" },
      { step: "CONNECT", where: "BUILD · HOSTED MEETINGS", headline: "Curated, high-value conversations with decision-makers.", detail: "" },
      { step: "CULTURE", where: "DEEPEN · AFTERHOURS", headline: "Strengthen relationships in a relaxed, high-energy environment.", detail: "" },
      { step: "LEGACY", where: "INSPIRE · ATHLIMA 20", headline: "Support and celebrate the next generation, creating a legacy beyond the event.", detail: "" },
    ] satisfies readonly SequenceStep[],
    multiplier: "Each touchpoint amplifies the next — turning visibility into relationships, conversations into opportunities, and participation into long-term value.",
    multiplierLabels: { label: "THE MULTIPLIER", items: ["HIGHER RECALL", "DEEPER ENGAGEMENT", "MORE OPPORTUNITIES", "LONG-TERM IMPACT"] },
    progression: { label: "THE PROGRESSION", items: ["PRESENCE", "ENGAGEMENT", "RELATIONSHIP", "OPPORTUNITY", "IMPACT"] },
  },
  ways: {
    id: "ways",
    marker: { number: 2, label: "WAYS TO PARTICIPATE" },
    headline: [{ text: "YOUR SPACE. YOUR EXPERIENCE." }, { text: "YOUR ROLE IN ATHLIMA." }] satisfies readonly DisplayLine[],
    /** brochure-sourced. How these relate to the six levels follows B1 and is not stated. */
    items: [
      { title: "INSTITUTIONAL PARTNERS", line: "Government bodies · Federations · Institutions · Sporting organisations" },
      { title: "STRATEGIC PARTNERS", line: "Major enterprises · Infrastructure · Finance · Technology · Ecosystem builders" },
      { title: "EXPERIENCE PARTNERS", line: "Interactive activations · Performance · Technology · Sport experiences" },
      { title: "BRAND PARTNERS", line: "Curated consumer · Performance · Fashion · Lifestyle brands" },
      { title: "HOSPITALITY PARTNERS", line: "F&B · Hospitality · Premium guest experiences · Afterhours" },
    ] satisfies readonly IndexItem[],
    body: "Every partnership is developed around the objectives, audience and experience the organisation wants to create.",
  },
  invitation: {
    id: "invitation",
    headline: [{ text: "BE PART OF A JOURNEY" }, { text: "THAT GOES FURTHER.", lime: true }] satisfies readonly DisplayLine[],
    functional: partnerCta,
  },
} as const
