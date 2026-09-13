# SITEMAP

> The definitive route manifest. `web/src/lib/routes.ts` is generated from this file and is the only
> place path strings exist in the codebase.

---

## 1. THE FULL TREE

```
/                                   HOME — the entry
│
├── /the-world                      THE WORLD — the ecosystem, the five pillars, the six IPs
│   │
│   ├── /athlimax                   ATHLIMAX — the marketplace
│   ├── /symposium                  THE SYMPOSIUM — the ideas
│   ├── /activ8                     ACTIV8 — the experience
│   ├── /afterhours                 AFTERHOURS — the culture
│   ├── /connect                    ATHLIMA CONNECT — the relationships
│   └── /athlima-20                 ATHLIMA 20 — the next generation  [three states — see §4]
│       (the nomination form and its confirmation are v2 — decision D4, `08_OPERATIONS/v2-backlog.md`)
│
├── /the-room                       THE ROOM — who is in it, and why the composition matters
│   └── /the-room/advisory-council  ADVISORY COUNCIL  [conditional — see §4]
│
├── /partner                        PARTNER — the Founding Partner proposition
│   ├── /partner/model              The six-level partnership model + value architecture
│   ├── /partner/journey            The seven-stage partner journey
│   ├── /partner/enquire            Partner enquiry form
│   └── /partner/enquire/received   Confirmation (real URL, for conversion tracking)
│
├── /for                            AUDIENCE DOORWAYS (index — mainly a redirect target)
│   ├── /for/business               Founders, CEOs, brand and business leaders
│   ├── /for/athletes               Athletes, coaches, performance professionals
│   ├── /for/capital                Investors, family offices, funds
│   ├── /for/infrastructure         Developers, architects, PMCs, operators
│   ├── /for/institutions           Government, federations, universities
│   └── /for/brands                 Brands seeking a territory
│
├── /programme                      THE TWO DAYS — the experience flow  [phase-dependent]
│
├── /journal                        THE JOURNAL — the content engine
│   ├── /journal/[slug]             Article
│   ├── /journal/pillar/[pillar]    Pillar cluster: build | equip | enable | perform | govern
│   └── /journal/series/[series]    Series: conversations | research | athlete-stories
│
├── /about                          ATHLIMA, ENSPORT VENTURES & THE ENARR GROUP
│
├── /apply                          APPLY TO ATTEND
│   ├── /apply/received             Confirmation (real URL, for conversion tracking)
│   └── /apply/declined             Reached only from the decision email. `noindex`. Offers the Journal and the 2027 list.
│
├── /contact                        CONTACT — including the institutional route
├── /press                          PRESS — fact sheet, assets, contact
│
├── /legal/privacy
├── /legal/terms
├── /legal/cookies
│
├── /404
└── /500
```

**Total: 35 routes at launch** (excluding dynamic Journal entries; counting `/for`, `/404` and `/500`).
Deliberately small. Every route earns its place; there is no "Resources", no "FAQ", no "Blog", no "News".
The two nomination routes were removed for v1 (decision D4) and `/apply/declined` was added (decision D34).

---

## 2. ROUTE SPECIFICATIONS

| Route | Purpose | Primary audience | Emotional CTA | Functional CTA | Render |
|---|---|---|---|---|---|
| `/` | Establish scale, seriousness, ecosystem; route to a doorway | All six | ENTER ATHLIMA | APPLY TO ATTEND | SSG + ISR 1h |
| `/the-world` | Make the ecosystem legible as one system | All | SEE THE WHOLE ECOSYSTEM (`#ecosystem`) | EXPLORE THE SIX (`#portals`) | SSG + ISR 1h |
| `/athlimax` | The commercial layer; the pavilions | Brands, business | BUILD INSIDE THE MARKETPLACE | BECOME A FOUNDING PARTNER | SSG + ISR 1h |
| `/symposium` | Intellectual authority; themes and formats | Institutions, capital | SHAPE THE CONVERSATION | SEE THE THEMES | SSG + ISR 1h |
| `/activ8` | The physical layer; the six zones | Athletes, brands | PLAY BEYOND THE GAME | SEE THE EXPERIENCE | SSG + ISR 1h |
| `/afterhours` | The cultural layer; the Runway | All | THE DAY INSPIRES. THE NIGHT CELEBRATES. | SEE THE EVENING | SSG + ISR 1h |
| `/connect` | The relationship engine; the four steps | Brands, business | CONNECT BEFORE YOU ARRIVE | HOW CONNECT WORKS | SSG + ISR 1h |
| `/athlima-20` | The athlete platform; 20 disciplines; three states | Athletes, media, all | TOMORROW PLAYS HERE | per state — see `ctas.md` §1 | ISR 5m |
| `/the-room` | Prove the composition of the room | All | — | APPLY TO ATTEND | ISR 1h |
| `/the-room/advisory-council` | Institutional depth | Institutions, capital | — | — | ISR 1h |
| `/partner` | The partner proposition | Brands, business | DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT. | START A PARTNER CONVERSATION | SSG |
| `/partner/model` | Six levels + five-part value architecture | Brands | — | START A PARTNER CONVERSATION | SSG |
| `/partner/journey` | The seven stages | Brands | — | START A PARTNER CONVERSATION | SSG |
| `/partner/enquire` | Partner capture | Brands | — | SEND ENQUIRY | Client + Server Action |
| `/for/*` | Audience-specific argument and proof | One each | per `conversion-strategy.md` | per audience | SSG |
| `/programme` | The two-day flow; the floor plan (v1's only instance — D21) | Applicants, confirmed guests | — | APPLY TO ATTEND | ISR 5m |
| `/journal` | The content engine index | Industry, search | EXPLORE THE THINKING | SUBSCRIBE | ISR 1m |
| `/journal/[slug]` | Article | Industry, search | — | MORE FROM [PILLAR] | ISR 1m |
| `/about` | ATHLIMA, ENSPORT, ENARR | Institutions, capital, press | — | APPLY TO ATTEND | SSG |
| `/apply` | Guest application | All | — | SUBMIT APPLICATION | Client + Server Action |
| `/apply/declined` | The honest no; the Journal and the 2027 list | Declined applicants, from email | — | EXPLORE THE JOURNAL | SSG, `noindex` |
| `/contact` | General + institutional route | All | — | — *(form buttons only — `contact.md`)* | SSG |
| `/press` | Media resources | Press | — | DOWNLOAD THE PRESS KIT | SSG |

---

## 3. THE ROUTES WE DELIBERATELY DO NOT HAVE

| Not built | Why | Where that content lives instead |
|---|---|---|
| `/tickets`, `/register`, `/pricing` | ATHLIMA is invitation-led. Never. | `/apply` |
| `/exhibitors`, `/book-a-stall` | Trade-show language. Fatal to positioning. | `/partner` |
| `/speakers` | A speaker grid before names are confirmed is an empty page and a claims risk. | `/symposium` — themes and formats now, voices when confirmed |
| `/faq` | An FAQ page is usually a symptom of unclear pages. | Answer the question on the page that raises it |
| `/news` | Split attention with the Journal. | `/journal` |
| `/gallery` | A gallery is a graveyard for good photography. | Imagery lives inside the pages it belongs to |
| `/venue` | One section of `/programme`. Not a page. | `/programme` |
| `/sponsors` | ATHLIMA does not have sponsors. It has partners. | `/partner` |
| `/blog` | Wrong register entirely. | `/journal` |

---

## 4. CONDITIONAL AND PHASE-DEPENDENT ROUTES

Some routes exist only when their content is real. **A thin page is worse than no page**, and an
unconfirmed page is a claims risk.

| Route | Condition | Behaviour when the condition fails |
|---|---|---|
| `/the-room/advisory-council` | ≥ 5 members confirmed **in writing** | Route returns 404; `/the-room` carries one line: *"An Advisory Council is being formed."* No names. |
| `/athlima-20` state | CMS enum: `pre-window` · `open` · `post-selection` (decision D4) | **v1 ships `pre-window` only:** the opening month `[TO VERIFY]` and an email capture. `open` (the nomination form) is v2. `post-selection` shows the class. Never a 404, never a disabled form. |
| `/programme` | Programme confirmed to session level | Shows the two-day *structure* — which the brochure already has — without session detail. Never a placeholder. |
| Any partner logo display | Agreement signed | The component renders nothing. No "coming soon" grid, no greyed-out placeholders. |
| Named individuals anywhere | Written confirmation | Absent. See `01_STRATEGY/positioning.md` §6. |

**Implementation:** these are CMS booleans read at build time, not commented-out code. The content team
must be able to open the Advisory Council page the day the fifth confirmation arrives, without engineering.

---

## 5. URL CONVENTIONS

- Lowercase, hyphenated, no trailing slash.
- No dates, no IDs, no `/2026/` segment. ATHLIMA is a platform; the URLs must survive the 2027 edition.
- `/athlima-20` not `/athlima20` or `/20-under-20` — readable, and it matches the brand name.
- `/symposium` not `/the-symposium` — the article is in the display name, not the URL.
- `/connect` not `/athlima-connect` — shorter, and unambiguous in context.
- `/for/business` reads as a sentence in the address bar. That is the point.
- Journal slugs are the article's actual promise: `/journal/how-indian-sports-infrastructure-gets-financed`,
  never `/journal/post-482`.

### Redirects to configure on day one
Any of these that anyone might type or that has appeared anywhere:
`/home → /`, `/index → /`, `/tickets → /apply`, `/register → /apply`, `/sponsor → /partner`,
`/sponsors → /partner`, `/exhibitors → /partner`, `/blog → /journal`, `/news → /journal`,
`/20under20 → /athlima-20`, `/athlima20 → /athlima-20`, `/activate → /activ8`, `/about-us → /about`,
`/contact-us → /contact`, `/ensport → /about`, `/enarr → /about`.

---

## 6. THE THREE-CLICK RULE

From the homepage, in three clicks or fewer, every audience must reach:

| Destination | Path |
|---|---|
| Apply | 1 click — permanent CTA |
| Their own doorway | 1 click — homepage doorways block |
| Any of the six IPs | 1 click — navigation, or 2 via The World |
| The partner proposition | 1 click — navigation |
| What ATHLIMA actually is | 1 click — The World |
| Who is behind it | 2 clicks — nav → About |
| ATHLIMA 20 (and, in v2, nomination) | 2 clicks |
| The two-day programme | 2 clicks |

If anything important takes four, the navigation is wrong — not the sitemap.
