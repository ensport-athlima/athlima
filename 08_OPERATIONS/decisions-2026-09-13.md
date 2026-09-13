# DECISIONS — 13 SEPTEMBER 2026
### Resolutions to the Phase 0 audit

> These are binding. Where a decision below contradicts an existing brief file, **the decision wins and
> the brief file is amended to match.** Amend the file in the same pass — never leave the repository
> disagreeing with this document.

---

## PART 1 — DESIGN AND BUILD DECISIONS (settled — apply these)

### D1 — The entry sequence never blocks the LCP. *(audit item 1)*
The **resting hero is painted at first byte**: poster image, server-rendered headline, navigation. That
poster is the LCP element and it is complete before any JavaScript runs.

The entry sequence is an **overlay drawn on top of an already-finished hero** — the A strokes in over the
poster, then dissolves. It never hides, delays or creates the headline. If JS never loads, the visitor
still gets a complete, correct hero.

The 2.0s LCP budget stands. Amend `03_DESIGN_SYSTEM/motion.md` §7, `04_CONTENT/homepage.md` screen 01,
`06_BUILD/architecture.md` §5.

### D2 — JS budget raised to 200KB, and accounted for. *(item 2)*
The 180KB figure was not costed. Homepage budget is now **≤ 200KB gzipped**, allocated:
framework ~90 · GSAP core + ScrollTrigger ~40 · Lenis ~4 · app code ~50 · headroom ~16.

**The Mux player is not on the homepage.** The hero is a poster image plus a native `<video>` with an HLS
source. `@mux/mux-player-react` is dynamically imported only on routes with real video UI. Sentry is
approved, added to the locked dependency list, and lazy-loaded.

Amend `06_BUILD/performance.md` §1, `06_BUILD/tech-stack.md` §2.

### D3 — The lime counting rule counts content only. *(item 3)*
The `SectionMarker` and the permanent `APPLY` affordance are **chrome, not content**, and do not count.
The rule is: **at most three lime elements in the content of any viewport.**

Rewrite `04_CONTENT/homepage.md` screen 05 — the four verb triplets become `--ink-300`, and only the
closing fragment `WHO YOU MEET.` is lime. Amend `03_DESIGN_SYSTEM/colour.md` §3,
`03_DESIGN_SYSTEM/design-principles.md` §01, `CLAUDE.md` V.4.

### D4 — The ATHLIMA 20 nomination form is deferred to v2. *(items 4, 33)*
It does not ship at launch. `/athlima-20` ships as content with the pre-window state and an email capture.
Remove `/athlima-20/nominate` and its confirmation from the v1 sitemap and route count.

This removes the largest legal risk from the launch path. The eligibility criterion — under 20 on
14 December 2026 — moves into `04_CONTENT/experiences.md` as a stated criterion tagged `[TO VERIFY]`,
not buried in form helper text. Move the DPDP Act gate from the launch checklist into a v2 section.

`/athlima-20` needs **three** states, not two: pre-window, open, and post-selection.

### D5 — The six portals are server-rendered. *(item 8)*
The portals are a plain `<nav>` of six links with poster images, in the server response, in ecosystem
order. **Only the GSAP pin/scrub module** is dynamically imported with `ssr: false` and applied on top of
that. The choreography is progressive enhancement; the navigation is not.

Amend `06_BUILD/performance.md` §5.

### D6 — The EcosystemMap is cut from v1. *(item 7)*
No relationship data exists, and target proportions cannot honestly be presented as a room. Signature
interactions drop from five to four. `/the-world` uses the static, navigable `PillarDiagram` instead.

Move the EcosystemMap to a v2 backlog. Amend `02_INFORMATION_ARCHITECTURE/interaction-map.md`,
`03_DESIGN_SYSTEM/components.md`, `02_INFORMATION_ARCHITECTURE/page-hierarchy.md`.

### D7 — Homepage CTA tiers. *(item 5)*
Screen 08's CTAs are **Tier 3 inline**. The homepage's single Tier-2 pair is screen 09.

### D8 — The APPLY bar. *(item 9)*
**Desktop:** never hides. **Mobile:** hides on scroll-down, reveals on scroll-up. Amend
`01_STRATEGY/conversion-strategy.md` §2 to scope "never scrolls away" to desktop.

### D9 — No DOM reorder for the doorways. *(item 10)*
`interaction-map.md` is wrong and is corrected to the anchor-line approach in `homepage.md` screen 06.

### D10 — REVEAL-MASK does not animate clip-path. *(item 11)*
Replace with a **cover element translated with `transform`**. Only `transform` and `opacity` animate on
scroll — no exceptions. Amend `03_DESIGN_SYSTEM/motion.md` §3.

### D11 — The magnetic cursor is removed. *(item 12)*
Delete `useMagneticCursor.ts` from `06_BUILD/architecture.md` §2. Four cursor modes, none magnetic.

### D12 — Partner enquiry is one page. *(item 13)*
Not multi-step. Amend `06_BUILD/architecture.md` §6.

### D13 — Application progress persists in `sessionStorage`. *(item 14)*
Current tab only, cleared on submit. Survives a tab switch on a phone; does not persist personal data
across sessions.

### D14 — `display-xl` appears once per page. *(item 15)*
Homepage screen 03 drops to `display-lg`. Screen 03's sub-line is **not** entirely lime — only
`ONE SHARED FUTURE FOR SPORT.` remains lime and the display line above it does not.

### D15 — AFTERHOURS: CTAs stay lime, nothing else does. *(item 16)*
`colour.md` §5 is corrected to say exactly that. The nav, footer and CTA buttons keep ATHLIMA's lime; the
page's own accent is dusk.

### D16 — `01_STRATEGY/brand-strategy.md` §4 is the locked source for the six portal lines. *(item 17)*
`homepage.md` and `experiences.md` conform to it. Correct all six.

### D17 — Doorway lines. *(item 18)*
`04_CONTENT/ctas.md` §1 is locked for **CTA strings**. `01_STRATEGY/audiences.md` is locked for the
**page's opening argument**. Where they differ, each wins in its own domain — but the infrastructure CTA
is corrected to `SPORT NEEDS PLACES. MEET THE PEOPLE WHO DECIDE WHERE THEY GET BUILT.` so it no longer
promises the reader the thing their stated fear is about.

### D18 — Every emotional CTA gets a destination. *(item 20)*
Add a destination column for emotional CTAs in `ctas.md` §1. Where an emotional CTA is a statement rather
than a link, mark it `— (statement, not a link)` explicitly.

### D19 — Filters use the path form. *(item 21)*
`/journal/pillar/build`. Correct `06_BUILD/component-rules.md` §5. `searchParams` remains correct for the
Room composition view, which is a view state and not a route.

### D20 — ATHLIMA Connect is a Founding Partner benefit. *(item 22)*
It is not promised to guests. Correct `01_STRATEGY/audiences.md` Doorway 01 and
`04_CONTENT/opportunities.md` so the business doorway does not offer guests something only partners get.

### D21 — The floor plan appears on `/programme` only in v1. *(item 23)*
Remove it from `/the-world` and `/athlimax`. It is an operational artefact, not a proposition.

### D22 — The component inventory is reopened and completed. *(item 24)*
Add: `Nav`, `Footer`, `ApplyBar`, `SkipLink`, `CookieNotice`, `Breadcrumb`, `TextField`, `TextArea`,
`Select`, `Checkbox`, `FieldError`, `FormProgress`, `Skeleton`, `ErrorState`, `EmptyState`,
`JournalCard`, `ArticleBody`, `PullQuote`, `ShareRow`, `SubscribeInline`, `Icon`.
Icon set expands to include the error icon and social icons.

### D24 — Baseline grid claim removed. *(item 30)*
Delete the 28px baseline grid from `03_DESIGN_SYSTEM/grid.md` §3. Vertical rhythm comes from the spacing
scale, which is real and enforceable.

### D25 — The three-full-height limit is per breakpoint. *(item 31)*
On touch, the stacked portal panels count as **one** section. State this in `grid.md` §4.

### D26 — Two primary targets, two different jobs. *(item 35)*
**1440×900 is the primary design canvas. Mid-range Android at 4G is the primary performance target.**
Both are true. State it that way in `responsive-rules.md` and `performance.md`.

### D27 — Three Tier-1 primitives may use the motion layer. *(item 36)*
`Counter`, `Marquee` and `Cursor` are named exceptions in `component-rules.md` §1. No others.

### D28 — SEO corrections. *(item 38)*
No Google Business Profile for The St. Regis — ATHLIMA does not own that address. No `Person` JSON-LD
(there is no People route). No `FAQPage` (FAQs are forbidden). `Event` is the primary structured data.

### D29 — The missing content files get written. *(item 6)*
New files in `04_CONTENT/`: `the-world.md`, `programme.md`, `press.md`, `contact.md`, `apply.md`,
`legal.md`. Same format as `experiences.md`. **`/the-world` is a Tier-1 page and currently has no script —
this is the largest single gap in the system.**

### D30 — Bracket placeholders are tagged. *(item 28)*
Every `[DATE]`, `[NAME]`, `[N]`, `[MONTH]`, `[email]` gets a `[TO VERIFY]` beside it, and the QA grep in
`content-qa.md` and `launch-checklist.md` is widened to catch bare square brackets.

### D31 — Brochure-sourced marking. *(items 26, 27)*
Mark every verbatim brochure line as *brochure-sourced*. Rewrite the unmarked banned words the audit
found: "immersive", "iconic", "unforgettable", "deep dives", "bespoke". **"Curated" is permitted** —
it is ATHLIMA's own word for its own selection process; remove it from the banned list and say why.

### D32 — Uppercase tracking. *(item 29)*
Display type at `display-xl` and `display-lg` keeps its negative tracking — at those sizes uppercase needs
tightening, not opening. The positive-tracking rule applies to uppercase **at label and body sizes only**.
Correct `typography.md` §9.

### D33 — Cookie consent. *(item 41)*
`[TO VERIFY — LEGAL]` Confirm whether GA4 requires prior consent under India's DPDP Act. Until confirmed,
**GA4 does not load until the notice is accepted.** Consent-gated is the safe default.

### D34 — The Journal gate goes on the checklist. *(item 42)*
Add to `launch-checklist.md` T-14: six articles, one per pillar plus a second BUILD piece, each 900+ words,
each with a real named byline and photo. Add a "declined application" page to the sitemap, since
`journal.md` places subscription on it.

### D35 — The reconciliation log is corrected. *(item 44)*
Items #2, #6, #15, #20 and #25 were marked resolved and were not fully resolved. Correct those entries to
say what actually remained, and add these decisions as a second audit round. **A reconciliation log that
overstates itself is worse than none.**

---

## PART 2 — DECISIONS THAT NEED PEOPLE (blocked — do not guess)

Leave these as `[TO VERIFY]`. Build around them.

| # | Decision | Who | Blocks |
|---|---|---|---|
| B1 | Six pavilions / 20 partners **or** 22 spaces / 12 categories. And 350 **or** 500+. | Commercial team, one meeting | `/athlimax`, `/partner/model`, the enquiry category field, `/for/capital`, `/for/infrastructure`, every "350" |
| B2 | Commission the photography and film, or design for a type-only launch. Plus **vector artwork for every mark and a standalone A device** — screen 01 cannot be built without it. | Project owner, budget | Screens 01, 05, 06, 08, all six IP entries, ATHLIMA 20, the doorways |
| B3 | ENARR / ENSPORT approval of the provenance copy, entity details for the footer, and whether an outbound corporate link exists. | The Group | Homepage screen 07, `/about`, the footer, `/about`'s only CTA |
| B4 | Source or cut the four statistics ($130B, 3X, 600M+, Top 3). | Project owner | Homepage screen 02's proof role |
| B5 | Partner response time, and the named person enquiries route to. | Commercial team | `/partner/enquire` |

**Default if unanswered by the time the page is built:** B1 → six pavilions and 350. B4 → cut all four and
let screen 02 rest on the stakeholder grid. B2 → type-only, and the design system says so explicitly.
