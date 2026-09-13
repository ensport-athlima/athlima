# THE PROGRAMME
### `/programme` — the two days, and the floor

> **Role in the experience:** Qualify. A visitor who has decided ATHLIMA is serious wants to know what
> actually happens across the two days, and where. This page answers that with structure, never with a
> placeholder schedule.
>
> **Tier:** T3 Argument. Type-led, disciplined, fast. Density 25 / 55 / 20.
> **Phase-dependent:** the page is real in every phase, but what it can show depends on what is confirmed
> (`sitemap.md` §4). It is reached from The World (section 05), the World panel in the nav and the footer.
> It is not in the primary nav.
> **Written 13 September 2026 by decision D29.**

**Five sections**
```
01 ENTRY          the two days, named
02 THE SHAPE      the structure of the two days — what is settled
03 THE FLOOR      the venue, as a plan — the only page that shows it (decision D21)
04 THE NIGHT      Afterhours, in outline, routed to its page
05 INVITATION     the statement — no CTA (decision A4)
```

---

## SECTION 01 — ENTRY

**Eyebrow:** `THE PROGRAMME`

**Display — `--fs-display-lg`**
```
TWO DAYS.
ONE FLOOR.
```

**Lead — `--fs-body-lg`**
> 14–15 December 2026. The St. Regis Mumbai, 9th floor. Six experiences, running as one room rather than
> as a schedule of separate halls.

---

## SECTION 02 — THE SHAPE

**Section marker:** `01 ──── THE TWO DAYS`
**Block:** `TwoDayFlow` — two columns on desktop, stacked on mobile. Real `<ol>` markup; the columns are
layout, not meaning.

**What this section may show, by phase:**

| Phase | What renders |
|---|---|
| `foundation` · `build` | The **structure only** — the two days, the six experiences, day and night. No times, no sessions, no speakers. |
| `approach` | The confirmed programme, to session level, as confirmed. Themes and formats may carry named voices **only** with written confirmation (`positioning.md` §6). |
| `live` | The live programme, with "now" indicated by more than colour. |
| `legacy` | The programme as it happened, with links to Symposium extensions in the Journal. |

**The structure, as settled by the brochures** — and nothing beyond it:

| | Day |
|---|---|
| **The floor** | ATHLIMAX — the marketplace, six pavilions `[TO VERIFY — B1]` |
| **The stage** | THE SYMPOSIUM — six themes, six formats |
| **Outdoors** | ACTIV8 — the lawn `[TO VERIFY — venue nomenclature, see experiences.md]` |
| **Throughout** | ATHLIMA CONNECT — meetings pre-arranged for Founding Partners |
| **The night** | AFTERHOURS |
| **The close** | ATHLIMA 20 `[TO VERIFY — recognition on Day 2, gated on the programme being confirmed to session level]` |

`[TO VERIFY]` **The day-by-day flow is not in this repository** — which experiences run on which day,
the opening moment, the closing moment. Until the commercial and production teams supply it, the page
shows the table above as structure. **Never** a schedule with invented times, and never "Coming soon".

**Body — beneath the structure**
> The programme is confirmed in stages, and this page says only what is confirmed. When sessions are
> settled, they appear here. When voices are confirmed — in writing, by the people themselves — they
> appear beside the sessions they belong to. Not before.

---

## SECTION 03 — THE FLOOR

**Section marker:** `02 ──── THE FLOOR`
**Block:** `FloorPlan` — the venue, annotated and navigable. **This is the only page it appears on in
v1** (decision D21). It is an operational artefact for invited guests and partners, not a proposition, and it
is deep in the page.

**Display — `--fs-display-md`**
```
ONE CONNECTED ENVIRONMENT.
```

**What the plan shows:** the 9th floor of The St. Regis Mumbai — the marketplace floor, the Symposium
stage, the ACTIV8 lawn, the Afterhours terrace.

`[TO VERIFY — B1]` The only plan in `05_MEDIA/references/` shows **22 numbered spaces** — the
prospectus's architecture. The working assumption elsewhere on the site is **six pavilions**. The plan
cannot render with 22 numbered spaces beside a page that says six pavilions. Until B1 is decided, the
`FloorPlan` block renders the floor **without space numbering**: zones only (marketplace, stage, lawn,
terrace). Numbering is added when the architecture is confirmed.

`[TO VERIFY]` Space names against the venue's own nomenclature (Astor 1/2, the terrace, the lawn) before
any label is published.

**Rules:** inline SVG with real text labels, never a raster of the PDF. Every zone is a real, focusable
control with an accessible name. Legible and complete as a static picture. On mobile, a simplified plan
with zones listed beneath it — never scrolled sideways. Contrast on every label per `colour.md`.

---

## SECTION 04 — THE NIGHT

**Section marker:** `03 ──── AFTERHOURS`

**Display — `--fs-display-md`**
```
THE DAY INSPIRES.
THE NIGHT CELEBRATES.
```
On this page the line is in `--paper`, not the dusk gradient — the gradient belongs to the AFTERHOURS
wordmark on `/afterhours` only.

**Body**
> The evening is its own experience — dining, music, culture and the Runway. The flow is on the
> AFTERHOURS page, and it is labelled indicative until production confirms it.

**Tier 3 inline:** `SEE THE EVENING →` → `/afterhours#evening`

---

## SECTION 05 — INVITATION

**Block:** `ApplyBlock` (statement only — decision A4)

**Display — `--fs-display-md`, centred**
```
THE ROOM IS 350 PEOPLE.
```
`[TO VERIFY — B1]`

**Statement — `--fs-display-lg`, centred; the second of the two places it is said (A4):**
```
ATHLIMA IS BY INVITATION.
```

**CTA:** none. The page has done its work; the permanent `BUILD WITH ATHLIMA` is in the chrome.

---

## THE PAGE CHECK

- Nothing on this page states a time, a session or a name that is not confirmed in writing.
- The floor plan renders without space numbering until B1 is decided.
- Zero `100svh` sections. This is an argument page, not a spectacle.
- The `phase` prop drives what section 02 renders; switching phase is a CMS operation, not a deploy.
