# COMPONENTS

> The complete component inventory. Nothing gets built that is not on this list without an explicit
> justification — see `06_BUILD/component-rules.md` §2.

---

## TIER 1 — PRIMITIVES

### `Button`
Three variants. No others.

| Variant | Rest | Hover | Use |
|---|---|---|---|
| `primary` | `--lime` ground, `--void` text, no radius | Brightens to `--lime-bright` | The functional CTA. **One per section.** |
| `secondary` | Transparent, 1px `--border` border, `--paper` text | Border → lime; `--ink-900` fills from the bottom | Supporting actions |
| `ghost` | Text + a lime arrow | Arrow travels 4px right, lime rule draws under the label | Inline and tertiary |

Common: `--fs-label`, uppercase, `+0.1em` tracking, `--space-4`/`--space-8` padding, min 44px tall,
**zero border radius**, no shadow, no scale on hover. Focus-visible: 2px lime ring at 2px offset.

**Never:** white text on a lime button (contrast 1.41 — see `colour.md` §2).

### `Eyebrow`
The uppercase technical label. `--fs-label`, weight 500, `+0.14em`, `--ink-300`.

### `SectionMarker`
`01 ──── THE BIGGER PICTURE`. The two-digit lime numeral, the 40px lime rule, the eyebrow. Used on every
section.

### `Display`
Renders art-directed display type. Takes a line array (and optionally a different array per breakpoint),
renders each line in its own overflow-hidden `<span>`, joins with spaces for assistive technology and
copy-paste. Handles the lime-word emphasis. **All display type on the site goes through this component.**

### `Rule`
A 1px hairline. Horizontal or vertical. `--ink-800` default, lime as an accent.

### `Caption`
Image and diagram captions. `--fs-caption`, `--ink-300`, `--space-3` below its subject.

### `Tag`
A pillar or category tag. `--fs-label`, uppercase, 1px `--ink-700` border, no fill. Links to the filtered view.

### `Marquee`
Continuous horizontal scroll. Footer and the ATHLIMA 20 discipline strip only. Pauses on hover and focus.
Duplicated copies are `aria-hidden`. Static under reduced motion.

### `Cursor`
The custom cursor. Four modes: default, link, drag, video. Off on touch, off under reduced motion, off
during keyboard navigation, never over text inputs. `aria-hidden`, `pointer-events: none`.

### `Counter`
An animated numeral. Counts once. Final value in the DOM; the animating span is `aria-hidden`.

---

## TIER 2 — MEDIA

### `VideoHero`
Poster-first — the poster is server-rendered and is the LCP element. A native `<video>` with a Mux-hosted
HLS source begins after the page is interactive (never the Mux player component on the homepage —
decision D2). Explicit aspect ratio. Pause control (`PAUSE FILM` / `PLAY FILM`). Respects save-data and
reduced motion.

### `MicroFilm`
A 5–8 second muted loop. `preload="none"`, `IntersectionObserver`-gated, ≤ 1.5MB, poster-first, pauses
off-screen.

### `ImageReveal`
`next/image` with the `REVEAL-COVER` entrance — a translated cover element, never `clip-path`
(`motion.md` §3, decision D10). Mandatory `sizes`. Focal point from the CMS. Optional scrim.

### `MediaFrame`
A fixed-aspect frame containing an image or video that scales inside it on hover. The frame never moves —
this is what makes hover feel controlled rather than bouncy.

### `PortraitCard`
A person: portrait, name, role, organisation, pillar tags. Used in ATHLIMA 20 and, where confirmed, in
The Room. **Renders nothing at all if the person is not confirmed** — no placeholder silhouette.

### `MaskedVideoText`
Display type acting as a mask over playing video. **The headline is real text in the DOM**, masked with
CSS `background-clip: text` — never an image of text, never canvas. Falls back to solid `--paper` type
where the mask is unsupported or under reduced motion.

### `Scrim`
The gradient overlay for text-over-image. Black, 0 → 70%, direction configurable. Not decoration — it is
how contrast is guaranteed.

---

## TIER 3 — BLOCKS

Full-width page sections. Each carries the mandatory header comment from `06_BUILD/component-rules.md` §2.

| Block | Role | Used on |
|---|---|---|
| `EntrySequence` | Emotion + orientation. The arrival. | `/` |
| `StatementScreen` | A single display statement in the L3 Editorial layout. The workhorse. | Everywhere |
| `DiagnosisBlock` | The problem stated, then the stakeholder grid. | `/` screen 02, `/the-world` |
| `PillarDiagram` | Five pillars converging on the mark. Navigable inline SVG. | `/the-world`, `/about` |
| `EcosystemPortals` | The six IPs. Pinned horizontal scrub on desktop, stacked on touch. | `/`, `/the-world` |
| `AudienceDoorways` | The six doorways. Type-led, not cards. Signature 03. | `/` |
| `RoomComposition` | The 350, by group and pillar. **Static variant** on `/` screen 05; **filterable variant** (Signature 04) on `/the-room` section 03. Composition figures are labelled as the **target** composition until the room is confirmed. | `/`, `/the-room` |
| `ProofNumbers` | A row of 3–4 statistics. **Every one carries a visible source and year.** | `/`, `/the-world` |
| `IndexGrid` | The L5 index: pavilions, zones, themes, disciplines. Rules and space, **not cards**. | The six IP pages |
| `SequenceRail` | A numbered horizontal sequence with chevrons. The partner journey, the Connect steps. Four columns at `lg`, two at `md`, one below; the chevron (`>` in the display face, lime) appears at `lg` only and is hidden from AT, which reads an ordered list. | `/partner/journey`, `/connect` |
| `TwoDayFlow` | The programme timeline. Two columns on desktop, stacked on mobile. | `/programme`, `/the-world` |
| `ProvenanceBlock` | ENSPORT and ENARR. Quieter and more formal than everything around it. | `/`, `/about` |
| `IPRail` | The other five IPs, at the foot of every IP page. A ruled list — mark left, role right — with the `IndexGrid` hover; the page's own IP omitted. | The six IP pages |
| `JournalRail` | 3–4 featured articles. **Not on the homepage** — the nine-screen script has no Journal surface; JOURNAL is a top-level nav item instead. | IP pages, `/journal`, article footers |
| `ApplyBlock` | The closing invitation. One emotional CTA, one functional. | Every page |
| `FloorPlan` | The venue floor, annotated and navigable. **`/programme` only in v1** (decision D21) — an operational artefact, not a proposition. Shows whichever commercial architecture B1 confirms. | `/programme` |
| `DisciplineGrid` | The twenty ATHLIMA 20 sports. | `/athlima-20` |
| `FormShell` | The wrapper for every form: progress (multi-step only), validation, error summary, trust panel. | `/apply`, `/partner/enquire`, `/contact`; `/athlima-20/nominate` in v2 |
| `EmailCapture` | A single-field inline capture with its own confirmation: the ATHLIMA 20 pre-window alert, the 2027 list, the Journal subscription. | `/athlima-20`, `/apply/declined`, `/journal`, homepage (legacy phase) |

**19 blocks. 10 primitives. 7 media components. 6 layout components. 6 form components. 5 Journal
components. 3 state components.** Every page on the site is composed from them. A page that needs
something not on this list needs a conversation first.

*(The `EcosystemMap` block was removed from v1 by decision D6 and `EmailCapture` added by decision D4;
the inventory was reopened and completed by decision D22.)*

---

## TIER 4 — LAYOUT (`components/layout/`)

Added by decision D22 — these were always required and were never in the inventory.

| Component | Specification |
|---|---|
| `Nav` | The four items and the permanent APPLY. Behaviour in `02_INFORMATION_ARCHITECTURE/navigation.md` §§1–3, §7. Reads `data-surface` to invert. `aria-current="page"` plus underline. |
| `Footer` | The `<footer>` landmark in `navigation.md` §5. Conditional Advisory Council link. Marks at their own colours. No newsletter form. |
| `ApplyBar` | The mobile bottom bar. `env(safe-area-inset-bottom)`. Hides on scroll-down, reveals on scroll-up (decision D8). Absent on `/apply`. |
| `SkipLink` | `SKIP TO CONTENT`. First focusable element. Visually hidden until focused. |
| `CookieNotice` | Bottom-anchored, never a modal. `ACCEPT` · `DECLINE`. GA4 loads only after accept (decision D33). Remembered per viewer. |
| `Breadcrumb` | `PARTNER / THE MODEL`, `JOURNAL / BUILD / [title]`. Nested routes only. `BreadcrumbList` JSON-LD. |

## TIER 5 — FORMS (`components/forms/`)

| Component | Specification |
|---|---|
| `TextField` | Persistent visible `<label>`. `inputmode` and `autocomplete` set per field. `--ink-850` well, `--border` boundary, lime focus ring. Error state pairs `--signal-error`, an icon and text. |
| `TextArea` | As `TextField`. Auto-grows to content; never a fixed height that clips at 200% zoom. |
| `Select` | Native `<select>` styled minimally; never a custom listbox. Options from typed constants. |
| `Checkbox` | 24px box, lime check on `--void`, label is the click target. Consent checkboxes are unticked by default, always. |
| `FieldError` | Inline, beneath the field, `aria-describedby`-linked. Voice per `ctas.md` §2. |
| `FormProgress` | `01 YOU · 02 YOUR ORGANISATION · 03 YOUR INTEREST · 04 CONTEXT`. Current step indicated by more than colour. Multi-step forms only. |

## TIER 6 — JOURNAL (`components/journal/`)

| Component | Specification |
|---|---|
| `JournalCard` | One index entry: pillar tag, title, standfirst, byline, date, reading time, hairline. Not a card in the boxed sense — rules and space, as `IndexGrid`. |
| `ArticleBody` | Portable Text serialisers with the typographic care in `journal.md` §6. 34em measure. |
| `PullQuote` | `display-sm`, a lime rule, breaks the measure. |
| `ShareRow` | Copy link, LinkedIn, X, WhatsApp. Small, last, in the sticky aside. |
| `SubscribeInline` | The Journal subscription, in context. Uses `EmailCapture`. Never in the footer, never a modal. |

## TIER 7 — STATES

| Component | Specification |
|---|---|
| `Skeleton` | A designed placeholder matching the final layout's exact dimensions. Never a spinner, never the word "loading". |
| `EmptyState` | On-brand copy with a route out — e.g. `Nothing here yet. The [PILLAR] thinking is being written.` |
| `ErrorState` | The content of every `error.tsx` boundary. `SOMETHING BROKE.` Never a white screen, never a stack trace. |

## MARKS (`components/marks/`)

Supplied artwork, placed as inline SVG with a real `<title>` — never typeset, never approximated
(`typography.md` §1). Not designed components: one file per mark, mirroring `05_MEDIA/logos/vector/`,
and the only place brand artwork enters the build. Each takes `title` (accessible name) or `decorative`
(`aria-hidden`, when adjacent text already names it). Letterforms use `currentColor`; the one lime accent
uses `var(--lime)`. C2PA metadata is stripped on the way in.

| Component | Source | Notes |
|---|---|---|
| `AthlimaWordmark` | `athlima-wordmark.svg` | Largest on homepage screen 03 (capped at 56rem wide); ~1.5rem tall in the nav. **Development placeholder until B2.** |
| `AthlimaA` | `athlima-a.svg` · `athlima-a-stroke.svg` | `variant: "filled" \| "stroke"`. The stroke variant is what the entry overlay draws; exports the centreline length for `stroke-dasharray`. **Placeholder until B2.** |
| `IPMark` | `athlimax.svg` · `symposium.svg` · `activ8.svg` · `afterhours.svg` (via `ip-mark-artwork.ts`, metadata and specks stripped) | Inline SVG, `currentColor` letterforms, lime accent (X / M / 8) or the dusk `<linearGradient>` for AFTERHOURS. Sized by the surrounding font-size: each mark's principal cap height = 1em, so `text-display-md` sizes a mark as it sizes type. **Placeholders until B2.** ATHLIMA CONNECT and ATHLIMA 20: `[TO VERIFY — B2 — TYPESET FALLBACK]` — no artwork exists; set in the wordmark-adjacent voice, `data-typeset-fallback`, until a designer draws them. |
| ENARR · ENSPORT | `web/public/marks/{enarr,ensport}.png` (360px cut-outs, alpha) via `next/image` at 180px | **The one raster-mark exception on the site.** Both are gradient marks; a single-colour trace would destroy them, and a bad trace of another company's mark is worse than a clean raster (`05_MEDIA/logos/vector/README.md`). ENARR on a light plate, ENSPORT on black — their own colours, never recoloured. Replaced by the Group's vectors on arrival (B2); launch checklist T-14. |

## `Icon`

One component, one inline SVG sprite, tree-shaken. The set is defined in `03_DESIGN_SYSTEM/iconography.md`
§2: the ten UI icons, the error and warning icons, and the social icons (decision D22). Decorative
instances are `aria-hidden`; meaningful ones carry an accessible name.

---

## THE INDEX GRID — READ THIS ONE CAREFULLY

`IndexGrid` renders most of the site's structured content: six pavilions, six zones, six themes, twenty
disciplines. It is the component most likely to be built wrong, because the default instinct is a card grid.

**It is not a card grid.**

```
Wrong                                Right
┌─────────┐ ┌─────────┐             01 ─────────────    02 ─────────────
│ ▢ card  │ │ ▢ card  │             PERFORMANCE          HEALTH, WELLNESS
│ shadow  │ │ shadow  │             & EQUIPMENT          & RECOVERY
│ radius  │ │ radius  │             Human potential.     A stronger,
└─────────┘ └─────────┘             At a higher level.   longer India.
                                     ────────────────    ────────────────
```

**Specification:**
- Items are separated by **1px hairlines and generous space**. No boxes, no shadows, no radius, no fills.
- Each item: a two-digit lime numeral, a title in `--fs-display-sm`, one line of body, a hairline beneath.
- Hover: the hairline turns lime and the content shifts 8px right. Nothing scales, nothing lifts.
- Where an item has an image, the image sits above the hairline, full-width within its column, at a
  consistent ratio across the set.
- Responsive: 6-up → 3-up → 2-up → 1-up. Never a horizontal scroll on mobile for primary content.

---

## THE STATE REQUIREMENTS

Every component that renders CMS data handles three states explicitly. This is checked in QA.

1. **Loading** — a designed skeleton matching the final layout's exact dimensions. Never a spinner, never
   a layout shift.
2. **Empty** — a designed, on-brand message with a route out. "No results" written in the ATHLIMA voice.
3. **Error** — an `error.tsx` boundary per route segment. Never a white screen, never a raw stack trace.

Every interactive element has: a designed `:focus-visible`, a hover state that changes more than opacity,
an active state, a legible disabled state, and a 44 × 44px minimum touch target.

---

## THE PROHIBITED COMPONENTS

Do not build these, and reject them if generated:

- Card grids with shadows and rounded corners as the default answer to "show several things"
- Icon + heading + paragraph three-column feature rows
- Carousels with dot indicators where a scroll rail would serve better
- Accordions hiding content that should have been cut
- Modal dialogs for content that could be a page
- Tabs — they hide content from search and from scanning
- A "Back to top" button
- Toast notifications for anything important
- Testimonial sliders
- Logo walls of unconfirmed organisations
- Pricing tables
- Countdown timers
- Newsletter modals
- Chat widgets
