/**
 * Proves the zod schemas accept a document shaped exactly like the Studio schema (studio/schemas) as
 * the GROQ projections return it. Run with `npx tsx scripts/check-sanity-schemas.ts`. If the Studio
 * schema changes, this fixture changes with it — in the same commit.
 */
import { articleSchema, journalEntriesSchema, journalSlugsSchema } from "../src/lib/sanity/schemas"

const image = { ref: "image-abc123def456-1600x900-jpg", alt: "Athletes on a training track at dawn", credit: "Photograph: A. Person", hotspot: { x: 0.5, y: 0.4, height: 0.6, width: 0.8 }, crop: { top: 0, bottom: 0, left: 0, right: 0 } }

const entry = {
  _id: "a1",
  title: "How sports infrastructure actually gets financed and built in India",
  slug: "how-sports-infrastructure-gets-financed-and-built-in-india",
  standfirst: "The money, the permissions and the people. A plain map of a process nobody explains.",
  pillars: ["build", "govern"],
  series: null,
  isPillarPiece: true,
  publishedAt: "2026-10-01T06:00:00Z",
  wordCount: 2300,
  author: { name: "A. Person", role: "Editor, ATHLIMA Journal", slug: "a-person" },
  hero: image,
}

const article = {
  ...entry,
  _updatedAt: "2026-10-02T06:00:00Z",
  intent: "Explain the financing of sports infrastructure in India",
  author: { ...entry.author, bio: "Writes about the business of sport.", portrait: image, links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/example" }] },
  body: [
    { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Every stadium starts as a spreadsheet.", marks: [] }], markDefs: [] },
    { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "The permissions", marks: [] }], markDefs: [] },
    { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "See the ", marks: [] }, { _type: "span", _key: "s4", text: "ministry guidance", marks: ["l1"] }], markDefs: [{ _key: "l1", _type: "link", href: "https://example.gov.in/guidance" }] },
    { _type: "pullQuote", _key: "q1", text: "A stadium gets a tenant. A federation gets a home.", attribution: null },
    { _type: "figure", _key: "f1", ...image, caption: "A training centre under construction." },
    { _type: "dataMoment", _key: "d1", figure: "12", label: "Cities with a multi-sport facility over 10,000 seats", source: "Example Institute", sourceUrl: "https://example.org/report", year: "2025" },
  ],
  sources: [{ title: "Example Institute, Facilities Census", url: "https://example.org/report" }],
  related: [{ ...entry, _id: "a2", slug: "another-piece", isPillarPiece: false }],
  pillarPiece: null,
}

let failed = false
for (const [name, schema, value] of [
  ["journalSlugs", journalSlugsSchema, [{ slug: entry.slug, _updatedAt: article._updatedAt }]],
  ["journalEntries", journalEntriesSchema, [entry]],
  ["article", articleSchema, article],
] as const) {
  const r = schema.safeParse(value)
  if (!r.success) {
    failed = true
    console.error(`✗ ${name}\n${r.error.message}`)
  } else {
    console.log(`✓ ${name}`)
  }
}
process.exit(failed ? 1 : 0)
