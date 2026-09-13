# PAGE HIERARCHY

> What sits above the fold, what order the argument runs in, and how much weight each page carries.

---

## 1. THE WEIGHT SYSTEM

Not all pages are equal, and the build effort should not be either.

| Tier | Pages | Treatment | Build effort |
|---|---|---|---|
| **T1 — Signature** | `/`, `/the-world` | Full art direction. Bespoke motion. Hero film. Unique layouts. | ~40% of the total |
| **T2 — Destination** | The six IPs, `/the-room`, `/partner`, `/about` | Strong art direction, composed from the shared block library with IP-specific media. | ~35% |
| **T3 — Argument** | `/for/*`, `/partner/*`, `/programme` | Type-led, disciplined, fast. Persuasion over spectacle. | ~15% |
| **T4 — Utility** | `/apply`, `/contact`, `/press`, `/journal/[slug]`, legal, error pages | Clear, beautiful, unshowy. Craft in the detail, not the drama. | ~10% |

**The failure mode to avoid:** treating every page as T1. A site where everything is a spectacle has no
crescendo, and the homepage stops meaning anything.

---

## 2. THE UNIVERSAL PAGE STRUCTURE

Every page above utility tier follows the same skeleton. The variation is in content and media, not in
architecture — that consistency is what makes the site feel like one building.

```
01  ENTRY          Page name, one-line proposition, the atmospheric establishing shot
02  THE CLAIM      The single most important sentence on this page, at the largest size
03  THE SUBSTANCE  The actual content — structured, specific, scannable
04  THE PROOF      Numbers, architecture, diagrams, named facts
05  THE CONNECTION Where this sits in the wider ecosystem; links sideways
06  THE INVITATION One emotional CTA, one functional CTA
```

Six movements. Not every page uses all six, but no page invents a seventh.

---

## 3. ABOVE THE FOLD — THE FIRST VIEWPORT

The first viewport is a contract. It must always contain:

1. **Where you are** — the page name, unmistakably
2. **Why it matters** — one line, no more
3. **Evidence that this is not ordinary** — through image, motion, type or scale
4. **A route onward** — a CTA, or a clear signal that scrolling is worthwhile

It must **never** contain:

- More than one headline
- More than two CTAs
- A cookie banner covering the content *(bottom-anchored, dismissible, never a modal)*
- Body copy below the 17px floor in `03_DESIGN_SYSTEM/typography.md` §2
- A carousel
- Anything that requires waiting to become legible

### The LCP rule
On every page, the largest contentful element is **server-rendered text or a poster image** — never a
video, never a client-rendered component. The headline is in the HTML from the first byte. See
`06_BUILD/architecture.md` §5.

---

## 4. THE HEADING HIERARCHY

| Level | Use | Frequency |
|---|---|---|
| `h1` | The page name / the page's single claim | Exactly one per page |
| `h2` | Section titles — the six movements | 4–8 per page |
| `h3` | Sub-sections within a movement | As needed |
| `h4` | Rare. Card and list-item titles. | Sparingly |
| `h5`, `h6` | Do not use | — |

**The test:** read only the `h1` and `h2`s of a page, in order. Does the argument hold on its own? If not,
the page has structure but no thinking.

**Never skip a level.** An `h2` followed by an `h4` is a bug, whatever it looks like.

---

## 5. PAGE-BY-PAGE ARGUMENT ORDER

### `/` HOME — 9 screens
Detailed screen-by-screen in `04_CONTENT/homepage.md`. The shape:
> **Scale → Diagnosis → Ecosystem → The Six → The Room → Your Doorway → Provenance → The Next Generation → Invitation**

### `/the-world` — 6 sections
Scripted in `04_CONTENT/the-world.md`.
1. What ATHLIMA is, in one paragraph
2. The five pillars, as a navigable diagram (`PillarDiagram` — static, navigable, complete without motion)
3. The six IPs, as six enterable worlds (`EcosystemPortals`)
4. How they connect — the ecosystem argument, as a statement (the interactive EcosystemMap is v2 — decision D6)
5. The two days, in outline, with a route to `/programme`
6. Invitation

*(The floor plan was removed from this page by decision D21 — it appears on `/programme` only in v1.)*

### The six IP pages — 6 sections each, identical skeleton
1. **Entry** — the mark, the line, the signature film
2. **The proposition** — what this IP is, in one paragraph
3. **The components** — the six pavilions / six themes / six zones / four steps / twenty disciplines
4. **What it means for you** — split by the audience this IP serves most
5. **Where it sits** — the rail to the other five IPs
6. **Invitation** — the two CTAs

The skeleton is deliberately identical. **The differentiation comes from imagery, register and motion —
never from restructuring the page.** Six differently-structured IP pages would destroy the "one world"
argument the site is built on.

### `/the-room` — 5 sections
1. 350 people. The right people.
2. The four stakeholder groups, in depth
3. The composition — the filterable view of who meets whom (Signature 04), labelled as the target composition
4. The Advisory Council *(conditional)*
5. Apply

### `/partner` — 6 sections
1. Don't just partner with an event. Help build the ecosystem.
2. The seven capabilities — Own · Lead · Experience · Connect · Create · Support · Build
3. The value architecture — Access · Conversation · Experience · Positioning · Impact
4. Why become a Founding Partner — the eight reasons
5. The cross-link to ATHLIMA Connect *(required — this is where the commercial audience converts)*
6. Start a conversation

The six-level model and the seven-stage journey are their own routes: `/partner/model`, `/partner/journey`.

### `/for/[audience]` — 5 sections, tight
1. Your line — the one that speaks to this reader
2. Your question, named honestly
3. Your proof — three specifics, no more
4. Your fear, answered directly
5. Your CTA

**Target: under 900 words.** These pages are arguments, not experiences. A busy CEO reads one screen.

### `/journal/[slug]` — editorial
Title · standfirst · byline with photo · reading time · body with real typographic care · pull-quotes ·
a designed data moment where the piece warrants it · author bio · related by pillar · subscribe.

---

## 6. CONTENT DENSITY BY TIER

The brochure's ratio — **70% atmosphere / 20% proof / 10% functional information** — is right for the
signature pages and wrong everywhere else.

| Tier | Atmosphere | Proof | Function |
|---|---|---|---|
| T1 Signature | 70% | 20% | 10% |
| T2 Destination | 50% | 35% | 15% |
| T3 Argument | 25% | 55% | 20% |
| T4 Utility | 10% | 20% | 70% |

**A visitor deep in the funnel wants facts, not atmosphere.** Someone reading `/for/capital` has already
been sold the mood; they are now deciding whether it is real. Maintaining 70% atmosphere at that point is
not premium — it is evasive.

---

## 7. THE CRESCENDO PROBLEM

The most common failure of a site like this: every section is a full-bleed, full-height, dramatic moment.
After four of them the visitor stops reacting, and by the ninth the page has no ending.

**Rhythm rules for any page over five sections:**

- Vary section heights deliberately. Not everything is `100svh`.
- Alternate density: an atmospheric screen is followed by an information-dense one.
- At most **three** full-height, full-bleed dramatic moments per page.
- The largest type on the page appears **once**.
- Quiet sections make loud ones work. Build in the quiet on purpose.
- The last section before the CTA should be the calmest on the page — that is what makes the invitation
  land instead of arriving as one more crescendo.

**The test:** screenshot the full page at 1440px wide and look at it at 10% zoom. You should see a shape
with peaks and valleys. If you see an even stripe, the page has no pace.
