# THE WORLD
### `/the-world` — the second Tier-1 page. The ecosystem, the five pillars, the six IPs.

> **Role in the experience:** Understand. The homepage establishes that the room exists; this page makes
> the ecosystem legible as one system — five dimensions, six doors, one building. It is the "what is this"
> page, and it is the page a visitor shares when they cannot explain ATHLIMA themselves.
>
> **Tier:** T1 Signature (`page-hierarchy.md` §1). Full art direction, but **only one scroll-triggered
> signature interaction** — the portals. The Entry belongs to the homepage; this page has no overlay.
> **Density:** 70 / 20 / 10.
> **Written 13 September 2026 by decision D29.** This page had no script; it was the largest single gap
> in the system.

**Six sections** (`page-hierarchy.md` §5 — the floor plan was removed by D21; the EcosystemMap by D6):
```
01 ENTRY          what ATHLIMA is, in one paragraph
02 THE PILLARS    five dimensions, one platform — the navigable diagram
03 THE SIX        the portals
04 THE CONNECTION how they connect — the ecosystem argument, as a statement
05 THE TWO DAYS   the shape of December, in outline
06 INVITATION     the closing statement
```

**Lime discipline on this page:** the pillar diagram carries lime only on the ATHLIMA mark at its centre.
The portals carry the marks' own accent characters. No other lime content element in either viewport.

---

## SECTION 01 — ENTRY

**ROLE:** Orientation. Name the page, say what ATHLIMA is, and route into the ecosystem.
**LAYOUT:** L1 Full bleed, `100svh`. Then L3 Editorial for the paragraph.
**BLOCK:** `StatementScreen` (entry variant) over a still, not a film.

**Eyebrow**
```
THE WORLD
```

**Display — `--fs-display-xl`, the one hero statement on this page** *(brochure-sourced, p04)*
```
MULTIPLE IPs.
ONE CONNECTED
ECOSYSTEM.
```
Lime: `ONE CONNECTED ECOSYSTEM.` — lines 2 and 3. Mobile break is the same three lines.

**Lead — `--fs-body-lg`, L3 Editorial** *(the approved one-paragraph description — `positioning.md` §9,
verbatim)*
> ATHLIMA is India's Festival of Sport, Business & Performance — a curated, invitation-led platform built
> by ENSPORT Ventures within The ENARR Group. Across two days at The St. Regis Mumbai, it brings together
> 350 of the people who build, equip, enable, perform and govern Indian sport: athletes and federations,
> government and institutions, developers and investors, technology companies and brands. Through six
> connected experiences — ATHLIMAX, The Symposium, ACTIV8, Afterhours, ATHLIMA Connect and ATHLIMA 20 —
> it creates the conditions for relationships that Indian sport currently has no reliable way of forming.
> The ambition is not to build the biggest sporting event in India. It is to build one of the most
> consequential rooms in Indian sport.

`[TO VERIFY — B1]` "350" follows the room-size decision.

### Media
A single still. An empty venue at night, or the city from the water. Graded. **Not the hero film** — that
belongs to the homepage; two hero films would flatten the crescendo.

### Motion
`REVEAL-LINES` on the display. `REVEAL` on the lead. Nothing else. No overlay.

### CTAs — the page's Tier-2 pair, placed here because this is an index page and its job is to route
- Emotional: `SEE THE WHOLE ECOSYSTEM` → `#ecosystem` (section 02, in-page) — *secondary variant*
- Functional: `EXPLORE THE SIX` → `#portals` (section 03, in-page) — *primary variant*

**As built (13 September 2026):** the hero holds the eyebrow, the statement and the two in-page CTAs at
`100svh`; the paragraph follows beneath in the L3 band. The still is a positioned slot (B2). "IPs" keeps
its lowercase s under the uppercase display transform.

### Exit intent
> *I can now say what ATHLIMA is in one sentence. And there is a structure underneath it.*

---

## SECTION 02 — THE PILLARS

**ROLE:** Credibility. Structure is the proof (`design-principles.md` §04).
**LAYOUT:** L2 Contained. Standard section padding. `id="ecosystem"`.
**BLOCK:** `PillarDiagram` — inline SVG, real text, each pillar a link to its Journal cluster. Static,
complete and legible before any motion. **This is what stands where the EcosystemMap would have been
(decision D6).**

**Section marker**
```
01 ──── THE ECOSYSTEM
```

**Display — `--fs-display-lg`** *(brochure-sourced — `brand-pillars.md` §4)*
```
ONE ECOSYSTEM.
FIVE DIMENSIONS.
ONE PLATFORM
DESIGNED TO
CONNECT THEM.
```
No lime in the display. The diagram's centre mark carries it.

**The five pillars — fixed order, never reordered.** Each: its icon, its name, its one-line definition,
and a link to `/journal/pillar/[pillar]`.

| # | Pillar | Definition *(from `brand-pillars.md` §2)* |
|---|---|---|
| 01 | BUILD | The physical and institutional foundations of sport. |
| 02 | EQUIP | Everything that enables sporting performance. |
| 03 | ENABLE | The organisations that create pathways into sport. |
| 04 | PERFORM | The people and systems that actually produce performance. |
| 05 | GOVERN | The institutions that shape the rules, policy and direction of sport. |

**Beneath the diagram — `--fs-body`, L3 Editorial**
> These are not themes. They are the five parts of the sporting economy, and every partner, every guest,
> every session and every piece of ATHLIMA's thinking is classified by them. A developer can follow
> BUILD through the whole platform. A federation can follow GOVERN.

### Motion
The five pillars `REVEAL` at `STAGGER_LOOSE`, converging on the mark — the *convergence* is the message.
Under reduced motion the diagram is simply complete.

### CTAs
None. The pillars themselves are links (Tier 3).

**As built (13 September 2026):** inline SVG, five nodes on an arc converging on the A, each node an
`<a>` with a `<title>`, connectors in the lime-at-40% device; a visually-hidden list for AT; below `md`
the arc becomes a numbered column with the A above.

### Exit intent
> *There is a taxonomy here. This has been thought about.*

---

## SECTION 03 — THE SIX

**ROLE:** Discovery. **Signature Interaction 02** — the same block as homepage screen 04, and it must
look and behave identically; this is what makes the two pages one building.
**LAYOUT:** L1 Full bleed. Pinned horizontal scrub on desktop; six stacked full-bleed panels on touch
(counted as one section — decision D25). `id="portals"`.
**BLOCK:** `EcosystemPortals`

**Section marker** *(on entry, before the pin)*
```
02 ──── THE SIX
```

**Intro — `--fs-display-md`**
```
SIX EXPERIENCES.
ONE PLATFORM.
```

**The six panels** — marks, roles, lines and hrefs exactly as `homepage.md` screen 04 (the locked
`brand-strategy.md` §4 lines, decision D16). Six real links in a real `<nav>`.

### Media
As homepage screen 04. At most one loop plays at a time; off-screen panels do not download.

### CTAs
Six — the panels themselves.

### Exit intent
> *I want to look inside one of those. Probably that one.*

---

## SECTION 04 — THE CONNECTION

**ROLE:** Credibility. The ecosystem argument — that the six are one system, not six events sharing a
venue — made as a statement, because the interactive map is v2.
**LAYOUT:** L3 Editorial. Dense section padding. **The quiet section** — after the portals, the page
needs a valley.
**BLOCK:** `StatementScreen`

**Section marker**
```
03 ──── HOW THEY CONNECT
```

**Display — `--fs-display-md`**
```
SIX DOORS.
ONE BUILDING.
```

**Body — `--fs-body`, max 34em**
> The six are not a programme. They are one route through one room.
>
> A conversation that starts in ATHLIMA Connect, before anyone arrives, continues on the ATHLIMAX floor.
> It is tested on the Symposium stage, felt at ACTIV8, deepened at Afterhours — and it outlasts December
> in ATHLIMA 20, where the next generation is already being told its story.
>
> Every one of them is classified by the same five pillars. Every one of them puts the same four groups
> in the same room. That is what "connected" means here: not a theme, but a structure.

**Pull line — `--fs-display-sm`, set apart** *(brochure-sourced — `positioning.md` §3)*
```
THE ECOSYSTEM IS ACTIVE. BUT NOT CONNECTED.
```
Lime: `BUT NOT CONNECTED.` — the section's one lime content element.

### Media
None. Type on black.

### Motion
`REVEAL` only.

### CTAs
None.

### Exit intent
> *The six are one thing. I understand why they are called an ecosystem.*

---

## SECTION 05 — THE TWO DAYS

**ROLE:** Orientation. December has a shape; show it in outline and route to the detail.
**LAYOUT:** L4 Split. Standard section padding.
**BLOCK:** `TwoDayFlow` (outline variant — the two days as structure only; session detail lives on
`/programme` when confirmed)

**Section marker**
```
04 ──── THE TWO DAYS
```

**Display — `--fs-display-md`**
```
14–15 DECEMBER 2026.
THE ST. REGIS MUMBAI.
```

**The outline** — what the brochure already settles, and nothing it does not:

| | |
|---|---|
| **Where** | The St. Regis Mumbai, 9th floor. |
| **When** | Two days, 14–15 December 2026. |
| **The day** | ATHLIMAX, The Symposium, ACTIV8, ATHLIMA Connect — running as one floor, not a schedule of rooms. |
| **The night** | AFTERHOURS. |
| **The close** | ATHLIMA 20. `[TO VERIFY]` Recognition on Day 2 — gated on the programme being confirmed to session level. |

`[TO VERIFY]` The day-by-day flow — which IPs run on which day, and the opening and closing moments — is
not in this repository. Until it is confirmed, this section shows the structure above and no times. Never
a placeholder schedule.

### Media
A single architectural still of the venue, or the floor as a plan **only on `/programme`** — not here
(decision D21).

### CTAs
Tier 3 inline: `THE TWO DAYS →` → `/programme`

### Exit intent
> *It is a real place, on a real date, with a shape.*

---

## SECTION 06 — INVITATION

**ROLE:** Conversion — quietly. This page routes; it does not sell. The calmest close.
**LAYOUT:** L2 Contained, centred. Dramatic section padding. Then the footer.
**BLOCK:** `ApplyBlock` (statement variant)

**Display — `--fs-display-lg`, centred** *(brochure-sourced, p03)*
```
ONE ROOM.
ONE ECOSYSTEM.
ONE SHARED FUTURE
FOR SPORT.
```
Lime: `ONE SHARED FUTURE FOR SPORT.`

**Sub — `--fs-body-lg`, centred, max 30em**
> The room is 350 people. Who is in it matters more than how many.

### CTAs
The page's Tier-2 pair sits in section 01. Here, Tier 3 inline only:
- `SEE THE FULL COMPOSITION →` → `/the-room`

The permanent `APPLY` is in the nav and the mobile bar.

### Exit intent
> *I know what it is. Now I want to know who is in it.*

---

## THE WHOLE-PAGE CHECK

1. Read only the display headlines in order: *Multiple IPs, one connected ecosystem → One ecosystem, five
   dimensions → Six experiences, one platform → Six doors, one building → 14–15 December → One room, one
   ecosystem, one shared future.* It holds.
2. `100svh` sections: 01 and 03 (03 counts as one on touch). Two of a maximum three.
3. Lime content elements per viewport: never more than two on this page.
4. Reduced motion: the pillar diagram and the portals are complete and static. Screenshot it.
5. The portals block is byte-for-byte the homepage's block. If it has drifted, fix the block, not the page.
6. No `[TO VERIFY]` and no bare bracket token renders.
