# THE HOMEPAGE
### Screen-by-screen script — copy, media, motion, CTAs, exit intent

> **Nine screens. Not ten.**
> This is the reference implementation for the entire site. Build it screen by screen, in order,
> screenshotting and critiquing after each. See `08_OPERATIONS/claude-code-operating-manual.md`, Phase 5.

**The shape of the argument:**
> Scale → Diagnosis → Ecosystem → The Six → The Room → Your Doorway → Provenance → The Next Generation → Invitation

---

## SCREEN 01 — THE ENTRY

**ROLE:** Emotion + orientation. Establish scale, seriousness and ambition in under ten seconds.
**LAYOUT:** L1 Full bleed. `100svh`.
**BLOCK:** `EntrySequence`

### Copy

**Eyebrow** *(top left, appears with the nav)*
```
INDIA'S FESTIVAL OF SPORT, BUSINESS & PERFORMANCE
```

**Display — `--fs-display-xl`, art-directed lines**

Desktop (4 lines):
```
THE BUSINESS
OF SPORT.
THE FUTURE
OF INDIA.
```
Lime words: `THE FUTURE OF INDIA.` — lines 3 and 4.

Mobile (4 lines, same break — it works at both):
```
THE BUSINESS
OF SPORT.
THE FUTURE
OF INDIA.
```

**Detail line** *(bottom left, `--fs-label`)*
```
14–15 DECEMBER 2026  ·  THE ST. REGIS MUMBAI
```

**Lock-up** *(bottom left, beneath)*
```
CONNECT · COLLABORATE · ELEVATE
```

**Scroll cue** *(bottom right, `--fs-label`, `--ink-400`)*
```
ENTER ↓
```

### Media
The hero poster — Mumbai at night — painted at first byte as the LCP element, with the headline and the
navigation. The hero film (a native `<video>` with a Mux-hosted HLS source, **not** the Mux player —
decision D2) begins only after the page is interactive, and only on connections that permit it. A pause
control sits bottom-right beside the scroll cue.

### Motion
The entry sequence, exactly as specified in `03_DESIGN_SYSTEM/motion.md` §7: an **overlay on a finished
hero** *(decision D1)*. The A strokes in over the poster and dissolves within 1500ms of JS arriving. The
poster, headline and nav are never hidden. Once per session. Skipped under reduced motion, save-data, and
slow connections — in which case the hero is simply at rest.

### CTAs
None on this screen. The scroll cue is the only affordance. **The first screen sells nothing.**

### Exit intent
> *Something serious is happening in Mumbai this December.*

---

## SCREEN 02 — THE DIAGNOSIS

**ROLE:** Credibility. Name the problem before offering the solution — the oldest and most reliable
structure in persuasion.
**LAYOUT:** L3 Editorial. Standard section padding.
**BLOCK:** `DiagnosisBlock` + `ProofNumbers`

### Copy

**Section marker**
```
01 ──── THE BIGGER PICTURE
```

**Display — `--fs-display-lg`**
```
INDIA IS READY.
SPORT ISN'T
CONNECTED.
```
Lime: `SPORT ISN'T CONNECTED.`

**Lead — `--fs-body-lg`**
> Sport in India is no longer only competition. It is infrastructure, technology, real estate, health,
> entertainment, employment and a new generation of opportunity.
>
> Every part of that ecosystem is growing. They are growing separately.

**The stakeholder grid — L5 index, 2-up at `md`, 1-up below** *(decided 13 September 2026 when screen
02 was built: `components.md` defines `DiagnosisBlock` as "the problem stated, then the stakeholder
grid", and with the statistics cut (B4) the grid is what the screen rests on. The four sentences are
the brief's own; the two-party titles are set as two art-directed lines each. Numerals in `--ink-500`
— decorative and `aria-hidden`, but visible: `--ink-700` at 1.58 read as a fault, and a wayfinding
marker has to be seen — so the marker's numeral stays the only lime numeral in view.)*

| # | Title (two lines) | Line |
|---|---|---|
| 01 | DEVELOPERS / SPORTING OPERATORS | Developers do not routinely meet sporting operators. |
| 02 | FEDERATIONS / CAPITAL | Federations do not routinely meet capital. |
| 03 | TECHNOLOGY / INSTITUTIONAL BUYERS | Technology companies struggle to reach institutional buyers. |
| 04 | ATHLETES / THE BUSINESSES AROUND THEM | Athletes and performance professionals remain disconnected from the businesses being built around them. |

**Body line — `--fs-body`, max 34em, beneath the grid**
> We have the ambition. We have the talent. We have the market.

**Pull line — `--fs-display-md`, standing alone**
```
WHAT WE NEED IS A PLATFORM
TO BRING IT ALL TOGETHER.
```

**ProofNumbers — four figures**

| Figure | Label | Source line |
|---|---|---|
| `$130B` | India's sports economy by 2030 (est.) | `[TO VERIFY]` |
| `3X` | Growth in sports infrastructure investment | `[TO VERIFY]` |
| `600M+` | Young Indians under 25 | `[TO VERIFY]` |
| `TOP 3` | Global sports market potential | `[TO VERIFY]` |

> **Binding:** every figure carries a visible source and year beneath it. **A figure without a source does
> not ship.** If a source cannot be found, cut the figure — three sourced numbers are worth more than four
> unsourced ones. See `01_STRATEGY/positioning.md` §7.
>
> **As built (B4 unresolved):** `screen02.figures` is an empty array and `ProofNumbers` renders nothing —
> no wrapper, no gap. The `Figure` type requires `source` and `year`, so an unsourced figure cannot be
> added by mistake. The screen rests on the stakeholder grid.

### Media
None, or a single restrained image: an empty stadium at night. **This screen is type and data.** After the
cinematic entry, the shift to a quiet, factual register is the point.

### Motion
`REVEAL` on the marker and statement, on the lead and on the body line. `REVEAL` staggered at
`STAGGER_TIGHT` across the four grid items. `REVEAL-LINES` on the pull line. `COUNTER` on the figures
— once, never re-counting — when any exist.

### CTAs
None.

### Exit intent
> *There is a real, specific problem here — and they have named it precisely.*

---

## SCREEN 03 — THE SOLUTION

**ROLE:** Orientation. The turn. Problem → answer.
**LAYOUT:** L2 Contained, centred. Dramatic section padding.
**BLOCK:** `StatementScreen`

### Copy

**Section marker**
```
02 ──── THE SOLUTION
```

**The mark** — the ATHLIMA wordmark, placed as SVG, larger than anywhere else on the site.

**Display — `--fs-display-lg`, centred, two lines** *(brochure-sourced, p03. `display-xl` appears once
per page — screen 01. Decision D14.)*
```
ONE ROOM.
ONE ECOSYSTEM.
```
No lime in the display line.

**Sub — `--fs-display-md`, centred**
```
ONE SHARED FUTURE FOR SPORT.
```
At `md` and below the sub-line breaks `ONE SHARED FUTURE / FOR SPORT.` — two lines, still centred.

Lime: `ONE SHARED FUTURE FOR SPORT.` — the sub-line in full (the one place a whole line is lime, D14),
and nothing in the display above it. With the wordmark's final-A accent, the screen carries **two** lime
content elements — within the rule of three (D3).

**Five verbs — a horizontal row, `--fs-label`, hairline-separated** *(brochure-sourced, verbatim from p03 —
this is why `UNLOCK` appears despite the banned list; see `voice-and-tone.md` §3)*
```
CONNECT        COLLABORATE     UNLOCK          BUILD           CREATE
the right      across          opportunities   a stronger      long-term
people         sectors                         India           impact
```

### Media
Black. Nothing else. **This is the calmest screen on the page and it is deliberate** — it is the pivot
between the problem and the world, and it needs silence around it.

### Motion
The wordmark reveals with `EASE_ARCH`. The display reveals by line. The five verbs stagger at
`STAGGER_LOOSE`. Nothing else moves.

### CTAs
None.

### Exit intent
> *This is the answer to the problem I just read.*

---

## SCREEN 04 — THE SIX PORTALS

**ROLE:** Discovery. The signature interaction of the site.
**LAYOUT:** L1 Full bleed. Pinned horizontal scrub on desktop; six stacked full-bleed panels on touch.
**BLOCK:** `EcosystemPortals`
**SIGNATURE INTERACTION 02** — see `02_INFORMATION_ARCHITECTURE/interaction-map.md`

### Copy

**Section marker** *(on entry, before the pin)*
```
03 ──── THE WORLD
```

**Intro — `--fs-display-md`**
```
ONE PLATFORM.
MULTIPLE IPs.
ONE CONNECTED ECOSYSTEM.
```
Lime: `ONE CONNECTED ECOSYSTEM.`

**Sub — `--fs-body-lg`**
> Six distinct experiences under one platform, where sport, business, culture, innovation and the next
> generation converge.

**The six panels** — lines are the locked forms from `01_STRATEGY/brand-strategy.md` §4, verbatim
*(decision D16)*. They deliberately replace brochure p04's "Exhibition…" (trade-show language, banned)
and "Under 20. A stronger tomorrow."

| # | Mark | Role | Line | Href |
|---|---|---|---|---|
| 01 | ATHLIMAX | THE MARKETPLACE | Conversations. Partnerships. Real-world impact. | `/athlimax` |
| 02 | THE SYMPOSIUM | THE IDEAS | A higher conversation. | `/symposium` |
| 03 | ACTIV8 | THE EXPERIENCE | Play beyond the game. | `/activ8` |
| 04 | AFTERHOURS | THE CULTURE | Where sport meets culture. | `/afterhours` |
| 05 | ATHLIMA CONNECT | THE RELATIONSHIPS | Connect before you arrive. Collaborate when you get there. | `/connect` |
| 06 | ATHLIMA 20 | THE NEXT GENERATION | 20 athletes. 20 sports. One future. | `/athlima-20` |

**As built (13 September 2026):** the six marks are the `IPMark` typeset fallback
(`[TO VERIFY — B2 — TYPESET FALLBACK]`, `typography.md` §1); each panel carries a positioned slot for its
micro-film loop (B2) with the scrim in place; desktop panels are `--portal-w` (60vw, capped 64rem) so the
next panel peeks; the hover recedes siblings to 40% in CSS; the reduced-motion grid is CSS; the mobile
anchor line renders only once screen 06 exists.

**Closing line, after the sequence — `--fs-display-md`, centred**
```
MORE THAN AN EVENT.
A MOVEMENT FOR INDIAN SPORT.
```
Lime: `A MOVEMENT FOR INDIAN SPORT.`

### Media
Each panel: its mark, its signature micro-film loop. **At most one video plays at a time.** Off-screen
panels do not download. AFTERHOURS is the only panel using the dusk gradient.

### Motion
Pinned horizontal scrub, `scrub: 1`, snapping to panels. Hovering a panel brings it to `scale(1.02)` and
drops siblings to 40% opacity. On touch: no pin, six stacked panels, vertical. Under reduced motion: a
static six-panel grid, all visible, poster frames only.

### CTAs
Six — the panels themselves, as real links in a real `<nav>`.

### Exit intent
> *This is bigger and more structured than I expected. I want to look inside one of those.*

---

## SCREEN 05 — THE ROOM

**ROLE:** Credibility. The core proposition: it is the composition, not the crowd.
**LAYOUT:** L2 Contained, into the L5 index for the four groups.
**BLOCK:** `RoomComposition` *(static variant — the filterable variant lives on `/the-room`)*

### Copy

**Section marker**
```
04 ──── THE PEOPLE
```

**Display — `--fs-display-lg`** *(brochure-sourced, p05)*
```
350 PEOPLE.
THE RIGHT PEOPLE.
```
No lime in the display. The screen's one lime content element is `WHO YOU MEET.` in the closing statement
(decision D3).

**Lead — `--fs-body-lg`**
> A carefully curated group of 350 decision-makers, operators, builders, athletes and investors — united
> by a shared belief in the future of Indian sport.

**The four groups — L5 index**

| # | Group | Definition | Who |
|---|---|---|---|
| 01 | SPORT | Talent. Performance. Ecosystem. | Athletes · Coaches · Federations · Academies · Sports scientists · Leagues & franchises |
| 02 | INSTITUTIONS | Policy. Infrastructure. Enablers. | Government · Authorities · Universities · Sporting bodies · Public sector · Policy makers |
| 03 | BUSINESS | Brands. Innovation. Execution. | CEOs & founders · Brands · Technology · Infrastructure · Media & entertainment · Professional services |
| 04 | CAPITAL | Investment. Growth. Long-term impact. | Investors · Family offices · Funds · Advisors · Sporting entrepreneurs · Impact capital |

**Beneath each group, a verb triplet — `--fs-label`, `--ink-300`** *(brochure-sourced, p05. Not lime —
decision D3: four lime triplets in one viewport broke the counting rule.)*
```
MEET · COLLABORATE · INVEST
SHARE · LEARN · SHAPE POLICY
BUILD · PARTNER · CREATE OPPORTUNITIES
BACK · SCALE · DRIVE IMPACT
```

**Closing statement — `--fs-display-md`, split left/right across the full width** *(brochure-sourced)*
```
THE VALUE IS NOT                          THE VALUE IS
HOW MANY PEOPLE ATTEND.                   WHO YOU MEET.
```
Lime: `WHO YOU MEET.` — the only lime content element on this screen.

### Media
Four portrait-format images, one per group, heavily graded, low saturation. **Real people in real
contexts.** If real photography is not yet available, this screen runs on type alone rather than on
generated portraits presented as guests. See `03_DESIGN_SYSTEM/imagery.md` §7.

### Motion
`REVEAL` staggered across the four groups at `STAGGER_TIGHT`. The closing statement reveals as two halves
converging.

### CTAs
`SEE THE FULL COMPOSITION →` → `/the-room` *(ghost variant, inline)*

**As built (13 September 2026):** type only — the four portraits are B2. The groups are the `IndexGrid`
block (4-up → 2 → 1), each with its "who" list and verb triplet in `--ink-300`; the closing statement's
halves converge from left and right.

### Exit intent
> *I'd be in a room with people I cannot otherwise reach in one place.*

---

## SCREEN 06 — THE DOORWAYS

**ROLE:** Conversion. The highest-value interaction on the site.
**LAYOUT:** L2 Contained. A vertical stack of six, full width.
**BLOCK:** `AudienceDoorways`
**SIGNATURE INTERACTION 03** *(renumbered — the EcosystemMap was cut in decision D6)*

> **Responsive note, from `user-journeys.md` Journey 04:** mobile visitors often do not reach screen six.
> **Do not reorder the DOM to fix this** — CSS `order` breaks tab order, breaks the CSS-off reading order,
> and would make the section markers count 01 · 02 · 03 · 05 · 04 on mobile.
>
> Instead, at `md` and below, a single compact line is inserted immediately after Screen 04:
> **`WHY SHOULD YOU CARE? IT DEPENDS WHO YOU ARE ↓`** — an in-page anchor to this block. One line, no
> duplicated content, no reorder, and the doorways are two taps away instead of six screens.

### Copy

**Section marker**
```
05 ──── YOUR PLACE IN IT
```

**Display — `--fs-display-md`**
```
SAME ECOSYSTEM.
DIFFERENT DOORWAY.
```

**The six doorways** — each a line of `--fs-display-sm` display type, its audience line revealed on
hover/focus, all visible on touch.

| I am a… | The line | Href |
|---|---|---|
| FOUNDER OR BUSINESS LEADER | Find the people shaping sport's next economy. | `/for/business` |
| ATHLETE, COACH OR PERFORMANCE PROFESSIONAL | Find your next level. | `/for/athletes` |
| INVESTOR OR FAMILY OFFICE | Find the opportunities behind India's sporting growth. | `/for/capital` |
| DEVELOPER, ARCHITECT OR OPERATOR | Sport needs places. Meet the people who decide where they get built. | `/for/infrastructure` |
| GOVERNMENT, FEDERATION OR INSTITUTION | Build the infrastructure around India's sporting future. | `/for/institutions` |
| BRAND | Own a territory, not a logo. | `/for/brands` |

### Media
One portrait or scene per doorway, resolving behind the line on hover. On touch, no imagery — the type
carries it.

### Motion
The doorway expands on hover or focus; the image resolves at 40% opacity behind it; the other five drop to
50%. Under reduced motion: all six expanded, all lines visible, all imagery present, no transitions.

### CTAs
Six — the doorways themselves. Real links.

**As built (13 September 2026):** each doorway is a full-width row — name left, line right at `lg`; on
hover-capable devices the line is collapsed at rest and expands on hover/focus (CSS, `MEDIUM`,
`EASE_OUT`), siblings recede to 50%; on touch and under reduced motion every line is visible. The scene
slot behind each row is positioned and empty (B2). The mobile anchor line after screen 04 is live.

### Exit intent
> *That one is me.*

---

## SCREEN 07 — THE PROVENANCE

**ROLE:** Credibility. The screen that converts the institutional audience.
**LAYOUT:** L3 Editorial. **This is the site's one light section.** `data-surface="light"`.
**BLOCK:** `ProvenanceBlock`

> Two of the six user journeys convert here. It is the quietest screen on the page and one of the most
> important. See `02_INFORMATION_ARCHITECTURE/user-journeys.md`, Journeys 03 and 06.

### Copy

**Section marker** *(inverted for the light surface)*
```
06 ──── WHO IS BUILDING THIS
```

**Display — `--fs-display-md`, `--void` on `--paper`**
```
ATHLIMA IS NOT
AN EVENT COMPANY'S EVENT.
```

**Body — `--fs-body`, `--ink-700`** *(approved — decision B3, `08_OPERATIONS/decisions-b3-provenance.md` §4a)*
> ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group, bringing together sport, business,
> capital, institutions and ideas around the future of performance in India. Built on the Group's broader
> experience across finance, enterprise, industry, media and philanthropy, ATHLIMA exists to create **the
> room** where the people shaping Indian sport can connect, collaborate and build what comes next.
>
> ATHLIMA is being built as an institution. The two days in December are its annual convergence point,
> not its purpose.

**The two marks** — ENARR and ENSPORT, at their own colours, generous clear space, modest scale. ENARR
on a light plate, ENSPORT on black (`colour.md` §1). The ENSPORT lock-up carries its own line — *BUILT TO
INSPIRE VICTORY* — so the screen does not repeat it.

### Media
None. **This screen's restraint is its argument.** A light ground, black type, two marks, white space.
After six screens of black, the shift is arresting on its own.

### Motion
`REVEAL` only. Nothing else. This is the calmest moment on the page.

### CTAs
`ABOUT ATHLIMA, ENSPORT AND ENARR →` → `/about` *(ghost variant)*
Beneath it, quieter, Tier 3 outbound: `Explore the Group →` → `https://www.enarr.com` (`rel="noopener"`,
new tab, announced) — decision B3 §3.

**As built (13 September 2026):** the approved B3 paragraph and ATHLIMA's own line render; the withdrawn
ENARR history line is gone. The two marks are the supplied cut-outs at their own colours — the one raster
exception on the site (`components.md` MARKS), replaced by the Group's vectors on arrival (B2). Marker,
lime word, ghost arrow and focus ring are `--lime-ink` on this surface.

### Exit intent
> *There is a real institution behind this. It is not a promoter's event.*

---

## SCREEN 08 — THE NEXT GENERATION

**ROLE:** Emotion. The human close, before the invitation.
**LAYOUT:** L1 Full bleed into an L5 index of twenty.
**BLOCK:** `DisciplineGrid` *(compact variant)*

### Copy

**Section marker**
```
07 ──── ATHLIMA 20
```

**Mark** — the ATHLIMA 20 lock-up.

**Display — `--fs-display-lg`**
```
TWENTY ATHLETES.
TWENTY SPORTS.
ONE FUTURE.
```
Lime: `ONE FUTURE.`

**Pull line — `--fs-display-sm`, italic-weight equivalent, set apart**
> Do not wait until they become champions to tell their story.
> Tell it while they are becoming one.

**Body — `--fs-body`**
> ATHLIMA 20 celebrates India's most exceptional emerging athletes — twenty individuals across twenty
> sporting disciplines who embody the nation's next chapter in sport.
>
> Selection is independent.

**The twenty** — a compact numbered strip, `--fs-label`, marquee on mobile:
```
01 ATHLETICS · 02 SWIMMING · 03 FOOTBALL · 04 CRICKET · 05 HOCKEY · 06 TENNIS ·
07 BADMINTON · 08 TABLE TENNIS · 09 BOXING · 10 WRESTLING · 11 WEIGHTLIFTING ·
12 SHOOTING · 13 ARCHERY · 14 GYMNASTICS · 15 CYCLING · 16 ROWING ·
17 MARTIAL ARTS · 18 EQUESTRIAN · 19 SURFING · 20 PARA SPORT
```

**Closing — `--fs-display-md`, over the image**
```
TOMORROW PLAYS HERE.
```

### Media
The strongest single image on the homepage. Young Indian athletes, backs to camera, facing the city and
the light. Para athletes included, not as a separate category. This is the one moment the site is allowed
to be openly emotional.

### Motion
`REVEAL-COVER` on the image. The discipline strip staggers at `STAGGER_TIGHT`. On mobile, the strip is a
slow marquee that pauses on interaction.

### CTAs
**Tier 3 inline only** *(decision D7 — the homepage's single Tier-2 pair is screen 09)*:
- `SEE ATHLIMA 20 →` → `/athlima-20` *(ghost variant)*

`TOMORROW PLAYS HERE.` is the closing display line on this screen, not a link. The nomination form does
not ship in v1 (decision D4), so no nomination CTA appears on the homepage.

**As built (13 September 2026):** the ATHLIMA 20 mark is the typeset fallback (B2); the philosophy is
set at `display-sm`, weight 500, sentence case (Archivo has no italic); the twenty are a wrapping strip
from `lg` and a CSS marquee below it (static under reduced motion); the image is a positioned slot with
the closing line over it (B2).

### Exit intent
> *This is about more than business.*

---

## SCREEN 09 — THE INVITATION

**ROLE:** Conversion. The close.
**LAYOUT:** L2 Contained, centred. Dramatic section padding. Then the footer.
**BLOCK:** `ApplyBlock`

### Copy

**Display — `--fs-display-lg`, centred**
```
THE ROOM IS 350 PEOPLE.
```

**Sub — `--fs-body-lg`, centred, max 30em**
> Every application is read. Not every application is accepted.
> That is the point.

**Detail — `--fs-label`, centred**
```
14–15 DECEMBER 2026  ·  THE ST. REGIS MUMBAI
```

**Closing lock-up — `--fs-display-md`, centred**
```
THE BUSINESS OF SPORT.
THE FUTURE OF INDIA.
```
Lime: `THE FUTURE OF INDIA.`

### Media
The ATHLIMA A, drawn once, as light. Nothing else. Black.

### Motion
The A draws in with `EASE_ARCH`. The display reveals by line. **The calmest close on the site** — see
`page-hierarchy.md` §7: the last section before the CTA is the quietest, which is what makes the
invitation land instead of arriving as one more crescendo.

### CTAs
- Emotional: `ENTER ATHLIMA` → `/the-world` *(secondary variant)*
- Functional: `APPLY TO ATTEND` → `/apply` *(primary — lime ground, black text)*

**As built (13 September 2026):** the A is the filled device in lime, revealed with `EASE_ARCH`/`SLOW`
on transform and opacity — not a stroke draw on scroll, which would animate a non-transform property on
scroll. Three lime content elements in the viewport: the A, `THE FUTURE OF INDIA.`, the primary button.

### Exit intent
> *I want in. And I understand that wanting in is not the same as getting in.*

---

## THE WHOLE-PAGE CHECK

After all nine screens are standing, run this before calling the homepage finished:

1. Screenshot the full page at 1440px and view at 10% zoom. **Peaks and valleys, not an even stripe.**
2. Read only the display headlines, in order. Does the argument hold on its own?
   > *The business of sport, the future of India → India is ready, sport isn't connected → One room, one
   > ecosystem → One platform, multiple IPs → 350 people, the right people → Same ecosystem, different
   > doorway → ATHLIMA is not an event company's event → Twenty athletes, twenty sports, one future →
   > The room is 350 people.*
   It holds.
3. Count the lime **content** elements in each viewport — the `SectionMarker` and the permanent `APPLY`
   are chrome and do not count (decision D3). **Four or more triggers a review.**
4. Count the `100svh` sections per breakpoint. **Maximum three** — screens 01, 04 and 08. On touch, the
   six stacked portal panels of screen 04 count as **one** section (decision D25).
5. Screenshot with reduced motion on. Does it look finished?
6. Test at 390px. Is the doorways anchor line present after screen 04, and does it land on the block?
7. LCP on the throttled mobile profile, measured on the poster. **≤ 2.0s.** Confirm the poster, headline
   and nav are in the server HTML and visible with JS disabled.
8. Confirm there is no `[TO VERIFY]` content rendering anywhere.
