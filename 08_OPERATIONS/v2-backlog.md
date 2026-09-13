# V2 BACKLOG

> What was deliberately deferred from v1, why, and what gates each item. Created 13 September 2026 by the
> decisions in `decisions-2026-09-13.md`. Nothing here is forgotten; nothing here is on the launch path.
> **A v2 item does not get quietly built in v1 because someone had an afternoon.**

---

## 1. THE ATHLIMA 20 NOMINATION FORM — `/athlima-20/nominate` *(decision D4)*

**Why deferred:** it collects personal data about people who are, by the eligibility criterion, mostly
minors. As specified in v1 it would have failed its own legal gate: a checkbox ticked by a coach is not
verifiable parental consent under India's DPDP Act. Deferring it removed the largest legal risk from the
launch path.

**What ships in v1 instead:** `/athlima-20` in its `pre-window` state — the page, the twenty disciplines,
the stated eligibility criterion, the opening month `[TO VERIFY]`, and an `EmailCapture`
(`TELL ME WHEN NOMINATIONS OPEN`). See `04_CONTENT/experiences.md`, ATHLIMA 20, and `04_CONTENT/ctas.md` §4a.

**The specification, kept warm:** `01_STRATEGY/conversion-strategy.md` §4.3 · `04_CONTENT/ctas.md` §4b ·
`06_BUILD/architecture.md` §6 · `02_INFORMATION_ARCHITECTURE/user-journeys.md` Journey 02.

**Gates — all of them, before a line of the form is built:**
- [ ] `[LEGAL GATE]` Counsel's written advice on DPDP Act obligations for a minor's personal data:
      verifiable parental consent (obtained from the guardian directly, not attested by the nominator),
      the lawful basis, the retention period, and the deletion schedule.
- [ ] A datastore for nomination data that the content team **cannot** open. Not the Sanity dataset.
- [ ] The eligibility criterion (under 20 on 14 December 2026) confirmed by the project owner.
- [ ] The Selection Council constituted and named, in writing, so "Selection is independent" is true when
      the form says it.
- [ ] The nomination window's open and close dates.
- [ ] Consent and guardian microcopy written **after** counsel's advice, in the ATHLIMA voice.

**Routes to restore when it ships:** `/athlima-20/nominate`, `/athlima-20/nominate/received`. The
`/athlima-20` CMS enum moves from `pre-window` to `open`.

---

## 2. THE ECOSYSTEM MAP — `/the-world` *(decision D6)*

**Why deferred:** no relationship data exists. An interactive diagram of "which relationships ATHLIMA
creates" with nothing behind it is decoration pretending to be evidence, and target proportions cannot
honestly be presented as a room. A half-built ecosystem map is worse than none.

**What ships in v1 instead:** the static, navigable `PillarDiagram` and a type-led statement of how the
six IPs connect (`04_CONTENT/the-world.md` §04). Signature interactions are four, not five.

**The specification, kept warm:** the former Signature 03 — an inline SVG with real text; nodes for the
stakeholder types; lines for the relationships ATHLIMA creates; selecting a node highlights its connections
and a short line explains what that connection produces; every node a real, focusable control; a text
alternative in the DOM; legible and complete as a static picture; a simplified vertical version on mobile.

**Gates:**
- [ ] Relationship data: for each pair of stakeholder types, what ATHLIMA actually does to connect them
      and what that produces — written by the commercial team, not invented.
- [ ] The adjacency examples in `04_CONTENT/people.md` §03 confirmed as true statements of intent.
- [ ] After the first edition: real, anonymised outcomes to replace intent with evidence.

---

## 3. ANALYTICS CONSENT — relaxing the GA4 gate *(decision D33)*

**v1 posture:** GA4 does not load until the cookie notice is accepted. Consent-gated is the safe default.

**Gate:** `[TO VERIFY — LEGAL]` counsel confirms whether DPDP Act consent is required for analytics
cookies. The gate is relaxed only if counsel says it can be, and the cookie notice copy is updated to
reflect what is actually set.

---

## 4. ALREADY LISTED AS "NOT IN V1" — `01_STRATEGY/digital-strategy.md` §9

Ticketing (never) · a logged-in guest portal · live streaming · a partner dashboard · Hindi (a real v2
decision, with its own type-matching work — `03_DESIGN_SYSTEM/typography.md` §1) · personalisation · a
chatbot · AR/VR/3D · a theme toggle (never — ATHLIMA is dark).

---

## HOW TO USE THIS FILE

When a v2 item is picked up: read its gates, tick them with evidence, then run `/consistency` on every file
its specification names before building. Move the entry to `post-launch-log.md` when it ships.
