# SEO

> ATHLIMA has two SEO jobs: **be findable as a brand**, and **become the authority on the business of sport
> in India** through the Journal. The second is the long game and the one that pays.

---

## 1. TECHNICAL BASELINE

| Item | Requirement |
|---|---|
| Metadata | Next.js `generateMetadata` on every route. No route inherits a generic title. |
| Title format | `Page Name — ATHLIMA` · Homepage: a real proposition, not `ATHLIMA \| Home`. |
| Description | 150–160 chars, written by a human, unique per page, in the ATHLIMA voice. |
| Canonical | Self-referencing canonical on every page. |
| `sitemap.xml` | Generated from `lib/routes.ts` + Sanity. Never hand-maintained. |
| `robots.txt` | Generated. Blocks `/api/`, preview routes, and the Sanity Studio. On any `.vercel.app` address the whole site is `Disallow: /` and every page is `noindex` (`lib/env.ts` `isStaging`) — the guard lifts itself when `NEXT_PUBLIC_SITE_URL` is `https://athlima.in`, so the launch checklist's "staging Disallow gone" is a check of that one variable. |
| Open Graph | `og:image` at 1200×630, generated per page with `next/og` using the ATHLIMA type system. Not a logo on a black square. |
| Twitter | `summary_large_image`. |
| Structured data | JSON-LD: `Organization` sitewide, **`Event` as the primary schema** for ATHLIMA 2026, `Article` on every Journal piece, `BreadcrumbList` on nested routes. **No `Person`** — there is no People route. **No `FAQPage`** — FAQs are forbidden (`sitemap.md` §3). **No `LocalBusiness`** for ATHLIMA (decision D28). |
| URLs | Lowercase, hyphenated, no dates, no IDs. `/journal/the-business-of-sport-in-india` not `/journal/2026/03/post-482`. |
| Redirects | Any URL that ever shipped and then changed gets a 301 in `next.config`. Zero 404s from internal links. |
| `hreflang` | Only if a second language ships. Do not add speculatively. |

**Rendering:** the homepage and all marketing routes must serve complete HTML. If the hero headline only
exists after JS runs, the page has no SEO value and no LCP.

**As built (14 September 2026):** `Organization` and `Event` JSON-LD in the root layout (the Event's
`location` is The St. Regis Mumbai as a `Place` with locality and country only — no street address is in
the repository; no `offers`, there are no tickets); `BreadcrumbList` on every nested route; `Article` on
every Journal piece. OG images: a `/og?title=&kicker=` image route set in the type system, wired into
every route's metadata through `lib/og.ts`; root `opengraph-image` / `twitter-image` carry the
proposition; articles carry their own with the byline. Satori cannot read the variable woff2, so two
static Archivo instances (display: wght 850 · wdth 66; text: wght 500) ship beside it, generated with
fontTools. `sanityFetch` fails soft — a CMS outage renders empty states and logs, never kills a deploy —
which is what lets `sitemap.xml` and the Journal clusters build without a project. Descriptions were
brought toward 150–160 characters from lines already on each page.

---

## 2. THE CONTENT ENGINE

The Journal is the growth asset. Structure it as topic clusters, not a blog feed.

**Pillar pages** — one per brand pillar. **The definitive list is `04_CONTENT/journal.md` §3; this is a
restatement, not a second set:**
- BUILD — How sports infrastructure actually gets financed and built in India
- EQUIP — The state of sports technology in India: what works, what is hype
- ENABLE — India's academy and pathway system, mapped
- PERFORM — Athlete performance, science and recovery in India
- GOVERN — How Indian sport is actually governed

**Cluster content** hangs off each pillar: interviews, event recaps, data pieces, athlete profiles,
practitioner explainers, policy notes.

Every cluster piece links up to its pillar. Every pillar links down to its clusters. This is the entire
mechanism — do not overcomplicate it.

**Rules for every Journal entry**
- One primary keyword intent, chosen before writing, recorded in the CMS.
- H1 = the actual promise of the piece.
- Author with a real byline, photo and bio (E-E-A-T).
- `datePublished` and `dateModified` in JSON-LD, both accurate.
- At least three internal links, at least one outbound to a credible source.
- A designed pull-quote or data point that is worth citing — citations are how you earn links.
- Minimum 900 words for a cluster piece, 2,000+ for a pillar. Length is not the goal; completeness is.

---

## 3. ENTITY SEO

- **No Google Business Profile for ATHLIMA and none for The St. Regis** — ATHLIMA does not own that
  address, and a profile for a hotel it does not operate is a false claim (decision D28).
- `Event` JSON-LD is the primary structured data — ATHLIMA is an event at a third-party venue, not a
  business location. Its `location` is The St. Regis Mumbai as a venue, not as ATHLIMA's address.
- `[TO VERIFY — B3]` A Google Business Profile and `LocalBusiness` JSON-LD may be appropriate for ENSPORT
  Ventures' own registered address, and require the entity's real name, address and phone from the Group.
  Do not invent them. If the Group does not supply them, nothing is published.
- Where any name, address or phone is published, it is consistent across every directory. Inconsistency
  is the single most common entity-SEO failure.
- Wikipedia/Wikidata entity where warranted, plus Crunchbase and LinkedIn, so the knowledge graph
  understands what ATHLIMA is.

---

## 4. PERFORMANCE IS SEO

Core Web Vitals are a ranking input and, more importantly, a bounce-rate input. See `performance.md`.
A cinematic site that takes 6 seconds to become useful will lose to a plain one that takes 1.

---

## 5. WHAT NOT TO DO

- No keyword stuffing. The ATHLIMA voice comes first; if a keyword doesn't fit the sentence, cut the keyword.
- No AI-generated filler articles. One excellent piece a fortnight beats twenty thin ones, and thin content
  actively suppresses the good stuff.
- No hidden text, no doorway pages, no purchased links.
- No infinite scroll on the Journal index without paginated, crawlable URLs underneath.
- Do not gate the Journal. Gate the *room*, never the thinking.
