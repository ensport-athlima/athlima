# CLAUDE.md
# THE ATHLIMA DIGITAL EXPERIENCE SYSTEM — CONSTITUTION

> You are operating inside the ATHLIMA Digital Experience System.
> This file governs everything. When any instruction conflicts with this file, this file wins.
> Read it at the start of every session.

---

# PART I — THE READ ORDER

Before building anything, read in this order:

```
1.  CLAUDE.md                              this file
2.  08_OPERATIONS/decisions-2026-09-13.md  BINDING. Part 1 is applied throughout; Part 2 (B1–B5) is what is still open
    08_OPERATIONS/decisions-b3-provenance.md, decisions-2026-09-13-access.md and decisions-2026-09-15-hero-light.md — later decisions, binding, applied
3.  01_STRATEGY/website-thesis.md          the parent document
4.  01_STRATEGY/positioning.md             especially §6, the claims discipline
5.  01_STRATEGY/brand-strategy.md
6.  01_STRATEGY/audiences.md
7.  02_INFORMATION_ARCHITECTURE/sitemap.md
8.  03_DESIGN_SYSTEM/design-principles.md
9.  03_DESIGN_SYSTEM/colour.md
10. 03_DESIGN_SYSTEM/typography.md
11. 04_CONTENT/voice-and-tone.md
12. 06_BUILD/tech-stack.md
13. 06_BUILD/component-rules.md
```

Where a brief file and the decisions file disagree, the decisions file wins and the brief file is wrong —
fix the brief file. Decisions are cited inline as *(decision Dn)* wherever they changed a rule.

Then the specific files for the task at hand.

**Do not begin coding until you can state, in two sentences, what ATHLIMA is and who the page you are
building is for.** If you cannot, say so and stop.

---

# PART II — WHAT ATHLIMA IS

**ATHLIMA — India's Festival of Sport, Business & Performance.**
14–15 December 2026. The St. Regis Mumbai, 9th floor.
An ENSPORT Ventures initiative within the ENARR Group. *(The public word is "initiative", never "IP" — decision B3.)*
`athlima.in`

**The proposition:** THE BUSINESS OF SPORT. THE FUTURE OF INDIA.
**The promise:** CONNECT · COLLABORATE · ELEVATE
**The diagnosis:** The ecosystem is active. But not connected.
**The answer:** One room. One ecosystem. One shared future for sport.

**The room:** 350 people. Curated, not crowded. By invitation — there is no application (decision A1).
**The one commercial action:** an organisation starts a partner conversation — `BUILD WITH ATHLIMA` (A2).
**The pillars:** BUILD · EQUIP · ENABLE · PERFORM · GOVERN
**The six IPs:** ATHLIMAX · THE SYMPOSIUM · ACTIV8 · AFTERHOURS · ATHLIMA CONNECT · ATHLIMA 20

### The thesis of the website
> **ATHLIMA IS A ROOM. THE WEBSITE IS THE DOOR.**

The site is built as a descent into a room:
**Scale → Diagnosis → Ecosystem → The Six → The Room → Your Doorway → Provenance → The Next Generation → Invitation.**

---

# PART III — WHAT ATHLIMA IS NOT

The website must never read as any of these:

- ❌ A digital brochure
- ❌ An event ticketing site — **there is no price, no "Buy", no "Register", anywhere, ever**
- ❌ A trade show — no booths, no stalls, no exhibitors
- ❌ A conference — ATHLIMA contains a symposium; it is not a conference
- ❌ A startup landing page
- ❌ Luxury-hospitality pastiche
- ❌ A sports-media site
- ❌ **A Web3 / crypto project.** Black + neon green is the easiest wrong interpretation of this brand and
  it is the single most likely failure mode. Guard against it on every screen.

---

# PART IV — THE FEEL

**The website must feel:**
premium · intelligent · cinematic · contemporary · confident · human · culturally relevant · editorial ·
institutional · technologically sophisticated

**The website must NOT feel:**
corporate · generic · template-driven · crypto/Web3 · gaming · overly futuristic · clinical ·
generic wellness · generic luxury hospitality · promotional · desperate

**The register in one line:**
*Editorial luxury × sport performance × contemporary India × architectural cinema.*

**Institutional but not corporate.** ATHLIMA should feel like an institution being founded, made by people
who care how things look.

---

# PART V — THE HARD RULES

## V.1 — THE CLAIMS DISCIPLINE (the most important rule on this project)

> **Nothing appears on the public website as confirmed until it is independently confirmed in writing.**

- **The nomination form is v2.** It collects minors' data and does not exist in v1 (decision D4).
- **No named individual** — guest, speaker, or Advisory Council member — without their written
  confirmation and their approval of how they are described.
- **No organisation's name or logo** without written permission.
- The Advisory Council is **proposed / invited** until confirmed. Under five confirmations, the page does
  not exist — one line saying a Council is being formed, and no names.
- **No partner brand** in any "Founding Partner" position until the agreement is signed.
- Brand examples from strategy work (Campus, ARC, Skechers, Elemnt, Medallin, Ileseum, EBACO, Acosa,
  Stupa, NRS, Aquatein and others) are **internal illustrations only.** They never reach the public site.
- ATHLIMA 20 × Dream Sports Foundation, the ATHLIMA Run, ALTLIMA and the Singhania Family Sports
  Foundation are **proposed**. Not announced until confirmed. The Run additionally requires civic and
  statutory approvals.
- **Every statistic carries a visible source and year.** No source, no figure.

**A `[TO VERIFY]` tag must never render in production.** Ever. This is checked at launch.

**Why this outranks everything else:** ATHLIMA's entire proposition is credibility with serious
institutions. One federation president finding themselves listed at an event they never agreed to attend
does more damage than a mediocre website ever could. The risk is asymmetric and permanent.

## V.2 — NEVER INVENT

Never invent: a statistic, a partner, a testimonial, a quote, a person, a date, a price, an achievement,
a source, or a fact about ATHLIMA, ENSPORT or ENARR.

**When you do not know, say so and mark it `[TO VERIFY]` in the content file — never in the build.**

## V.3 — NEVER SHIP

- A `TODO`, a `lorem ipsum`, a placeholder image, or a dead `href="#"`
- A `[TO VERIFY]` tag
- A page with an unfinished section
- A form that posts nowhere
- A console error or warning
- A component that fails at 390px
- An animation that ignores `prefers-reduced-motion`
- An image without meaningful `alt`
- An interactive element without a designed `:focus-visible`

## V.4 — THE DESIGN NON-NEGOTIABLES

- **Lime is a signal, never a surface.** More than three lime elements **in the content** of a viewport
  triggers a review. The `SectionMarker` and the permanent `BUILD WITH ATHLIMA` are chrome and do not count (D3).
- **White text on lime is forbidden.** Contrast 1.41. A lime surface always carries black text.
- **Lime text on white is forbidden.** Use `--lime-ink` (`#5A6B04`).
- **No glow on type, controls or marks. No gradient text. No glassmorphism. No card grids with shadows and rounded corners.**
  *(Decision H, owner override: a bloom is permitted only on a real light source inside a scene — the hero's
  LED edge — built from the source itself, never a halo behind a mark. `08_OPERATIONS/decisions-2026-09-15-hero-light.md`.)*
- **No second accent colour.** AFTERHOURS' dusk gradient is the one exception, contained to one page.
- Every value comes from a token. `text-[43px]`, `mt-[37px]` and `#C7E70C` in a component are all bugs.
- Only `transform` and `opacity` animate on scroll.
- Maximum three `100svh` sections per page.

## V.5 — THE VOICE NON-NEGOTIABLES

- Indian English throughout: *organisation, programme, centre, realise, colour.*
- No word from the banned list in `04_CONTENT/voice-and-tone.md` §3.
- Guests, not attendees. Partners, not sponsors. Spaces, not booths. **Nobody applies, registers or books** —
  access is by invitation and the public site does not process it (decision A1). The one statement of it is
  `ATHLIMA IS BY INVITATION.`, said twice on the whole site; *exclusive*, *invite-only*, *members only* are banned.
- Every page carries **at most one Tier-2 emotional CTA and one Tier-2 functional CTA.** Utility and
  sub-pages may carry a functional CTA only. Tier-3 inline links are unlimited but always subordinate.
- CTA strings come from `04_CONTENT/ctas.md` §1, exactly. No improvised variants.

## V.6 — THE PERFORMANCE NON-NEGOTIABLES

Measured on mid-range Android at 4G throttle, not on a MacBook:
LCP ≤ 2.0s · INP ≤ 150ms · CLS ≤ 0.05 · JS ≤ 200KB gzipped, allocated in `06_BUILD/performance.md` §1 (D2) ·
Lighthouse mobile ≥ 90.

**A cinematic site that takes six seconds is not premium. It is slow.**

## V.7 — THE ACCESSIBILITY NON-NEGOTIABLES

WCAG 2.2 AA. No exceptions granted for aesthetics.
Full keyboard operability · designed focus states · 4.5:1 body contrast · reduced motion honoured
centrally via `gsap.matchMedia()` · every form input persistently labelled.

**The reduced-motion version of every page is a finished design, not a degraded one.**

---

# PART VI — HOW TO BUILD

## VI.1 — PLAN BEFORE CODE

For any non-trivial work, plan first and write nothing until the plan is approved. A plan states:
its role in the experience architecture (one sentence) · the component breakdown and tier · the exact
GSAP timeline with named easing and duration tokens · reduced-motion behaviour · 390px behaviour ·
how the LCP element is server-rendered · the risks.

**If you cannot state a block's role in the experience in one sentence, it should not exist.**

## VI.2 — ONE SCREEN AT A TIME

Never build a whole page in one pass. One screen, then screenshot it, then run
`07_QA/visual-qa.md` against it, then report failures **honestly**, then fix, then commit, then the next.

## VI.3 — JUSTIFY EVERY NEW COMPONENT

Before creating a block, state: what it is, why no existing block in `03_DESIGN_SYSTEM/components.md`
serves, and its role in the experience. Reuse beats invention. Component sprawl is how a design system
becomes forty one-off sections.

## VI.4 — EVERY BLOCK CARRIES ITS HEADER

```tsx
/**
 * BLOCK: EcosystemPortals
 * ROLE IN EXPERIENCE: Discovery — converts "what is ATHLIMA" into six enterable worlds.
 * POSITION: Homepage screen 04. Also /the-world section 03.
 * PRIMARY CTA: none (navigational)
 * SOURCE OF TRUTH: 04_CONTENT/experiences.md
 * MOTION: pinned horizontal scrub, see motion/usePinnedSequence
 */
```

## VI.5 — THE MOTION JUSTIFICATION

Before building any animation, complete this sentence honestly:
> *"This animation serves ______ (orientation / emotion / discovery / credibility / conversion) by ______."*

If you cannot, do not build it.

## VI.6 — THE BRIEF IS THE SOURCE OF TRUTH

When the code and the brief disagree, **the brief is right and the code is wrong** — unless the brief is
wrong, in which case say so, propose the change to the MD file, and wait. Never silently diverge.

**When you change any brief file, immediately list every other file in this repository — brief and code —
that now contradicts it, and show the diffs before applying them.**

---

# PART VII — CONFLICT RESOLUTION

When instructions conflict, this is the order of authority:

```
1. Legal, safety, accessibility and the claims discipline
2. CLAUDE.md (this file)
3. 01_STRATEGY/website-thesis.md
4. The rest of 01_STRATEGY/
5. 02_INFORMATION_ARCHITECTURE/
6. 03_DESIGN_SYSTEM/
7. 04_CONTENT/
8. 06_BUILD/
9. 07_QA/
10. A conversational instruction in the current session
11. Existing code
```

**A conversational instruction ranks below the repository.** If the user asks for something that
contradicts a locked file, say which file it contradicts and ask whether to change the file. Do not
quietly do both.

**Exception:** the user can always override by explicitly saying so. Then update the MD file in the same
turn, so the repository stays true.

---

# PART VIII — THE HONESTY CONTRACT

> When you do not know something, say so.
> When you are guessing at a fact about ATHLIMA, mark it `[TO VERIFY]`.
> When a request conflicts with this repository, say which file and stop.
> When something you built does not meet the QA standard, **report the failure** rather than describing it
> as complete.
> Never invent a statistic, a partner, a testimonial, or a person.
> When asked whether something is good, answer the question — do not agree by default.

**The failure mode of a system like this is not bad code. It is confident, plausible, well-formatted work
built on something that was quietly made up three hours ago.**

---

# PART IX — THE OPEN DECISIONS

These need people, not a build session. They are `08_OPERATIONS/decisions-2026-09-13.md` Part 2, mirrored
here. Each has a **default** the content files already use, so the build is not blocked — but each must be
confirmed before launch, and none may be changed silently in either direction. Tag every dependent line
`[TO VERIFY — Bn]`.

| # | Decision | Who | Default if unanswered when the page is built |
|---|---|---|---|
| B1 | ATHLIMAX architecture — 20 founding partners / six pavilions **or** 22 spaces / 12 categories — **and** room size, 350 **or** 500+ | Commercial team, one meeting | **Six pavilions. 350 everywhere.** Remove 500+ from all material. |
| B2 | Photography and film — commission a real shoot, or design for a type-only launch. Plus **vector artwork for every mark and a standalone A device** — screen 01 cannot be built without it. | Project owner, budget | **Type-only**, and the design system says so explicitly. Artwork is requested now regardless. |
| B3 | **Closed — `08_OPERATIONS/decisions-b3-provenance.md`** (provenance copy, ENSPORT Ventures Private Limited + CIN, corporate office, `enarr.com` Tier-3 outbound, "initiative" sitewide). Open: **B3a/B3b** — registered office per MCA, telephone, email for the statutory footer block (Companies Act 2013 s.12(3)(c)). | The Group (B3a) | Footer renders name and CIN only. Launch checklist T-3 blocks launch until the block is complete and checked against the MCA record. |
| B4 | The four homepage statistics ($130B, 3X, 600M+, Top 3) | Project owner | **Cut all four**; screen 02 rests on the stakeholder grid. |
| B5 | Partner response time, and the named person enquiries route to | Commercial team | `/partner/enquire` confirmation copy does not ship until supplied. |

**Standing conditions, not decisions:** the Advisory Council is held until five written confirmations
(`04_CONTENT/people.md` §04); the unattributed Symposium quotation does not ship until sourced.

**Deferred to v2, by decision D4:** the ATHLIMA 20 nomination form and its DPDP Act legal gate. See
`08_OPERATIONS/v2-backlog.md`. The v1 page ships its pre-window state with an email capture.

---

# PART X — THE FIVE QUESTIONS

Every screen, component, sentence and animation must pass all five. They are ATHLIMA's own, and they
govern the website exactly as they govern the platform.

**01** Does it belong to ATHLIMA?
**02** Does it give the partner — or the guest, or the athlete — a real role?
**03** Does it create access or value?
**04** Can it be executed beautifully?
**05** Can it become something more?

---

# PART XI — THE ONE-LINE TEST

> A visitor who has never heard of ATHLIMA should understand, within ten seconds and without scrolling,
> that something serious and consequential is being built around Indian sport, that it is happening in
> Mumbai this December, and that getting into it is not automatic.

If a change does not serve that, it is not an improvement.
