# TYPOGRAPHY

> Type carries this page. Everything here is specified to a value, because "large and confident" is not a
> specification.

---

## 1. THE TYPEFACES

### The decision: one variable family, three roles.

**`Archivo` (variable — weight 100–900, width 62–125). SIL Open Font License. Free.**

This is the workhorse for the entire site. One variable font family, **one file** —
`web/src/fonts/archivo-var.woff2`, both axes intact, subset to latin + latin-ext, **117,628 bytes** —
under the 120 KB budget in `06_BUILD/performance.md` §4 while still giving a genuine display voice.
(Google Fonts' own split files came to 172 KB across two; the file was subset from the source TTF
instead.)

| Role | Family / axes | Why |
|---|---|---|
| **Display** | Archivo, `wght 800–900`, `wdth 62–75` (condensed) | The brochure's headline voice: tall, heavy, athletic, all-caps. |
| **Wordmark-adjacent** | Archivo, `wght 700`, `wdth 110–125` (expanded) | Echoes the wide geometric ATHLIMA logotype for eyebrows and section titles. |
| **Text** | Archivo, `wght 400–500`, `wdth 100` | Clean, neutral, highly legible at length. |
| **Label** | Archivo, `wght 500`, `wdth 100`, uppercase, `+0.14em` tracking | The technical small-caps labels throughout the brochure. |

**Subsetting:** `latin` + `latin-ext`. Add `devanagari` **only** if Hindi ships — Archivo does not cover
Devanagari, so a Hindi version needs a paired family (`Mukta` or `Noto Sans Devanagari`), and that is a v2
decision with its own type-matching work.

### The upgrade path
If budget allows a licensed display face, the brochure's headline voice is closest to
**Druk Condensed Super** or **Druk Wide** (Commercial Type). This is a genuine upgrade in character and
should be considered for the display role only, keeping Archivo for text.

**If licensed type is introduced:** it changes only `--font-display`. Nothing else in the system moves.
Build it so that swap is a one-line change.

### The wordmark
**The ATHLIMA wordmark is artwork, not type.** It is always placed as an SVG asset with real
`<title>`/`aria-label` text. It is never typeset, never re-lettered, never approximated in Archivo. Same
for ATHLIMAX, ACTIV8, THE SYMPOSIUM, AFTERHOURS, ENARR and ENSPORT.

---

## 2. THE TYPE SCALE

Fluid via `clamp()`, anchored at 390px and 1920px. **Defined once. Never overridden per breakpoint.**

| Token | Min (390px) | Max (1920px) | `clamp()` | Use |
|---|---|---|---|---|
| `--fs-display-xl` | 52px | 168px | `clamp(3.25rem, 1.2rem + 8.4vw, 10.5rem)` | The one hero statement per page. Once. |
| `--fs-display-lg` | 40px | 104px | `clamp(2.5rem, 1.3rem + 4.9vw, 6.5rem)` | Section statements |
| `--fs-display-md` | 32px | 68px | `clamp(2rem, 1.4rem + 2.5vw, 4.25rem)` | Sub-section statements |
| `--fs-display-sm` | 26px | 44px | `clamp(1.625rem, 1.3rem + 1.3vw, 2.75rem)` | Card and panel titles |
| `--fs-body-lg` | 19px | 24px | `clamp(1.1875rem, 1.1rem + 0.4vw, 1.5rem)` | Lead paragraphs, standfirsts |
| `--fs-body` | 17px | 19px | `clamp(1.0625rem, 1.02rem + 0.24vw, 1.1875rem)` | Body copy |
| `--fs-body-sm` | 15px | 16px | `clamp(0.9375rem, 0.92rem + 0.07vw, 1rem)` | Secondary text |
| `--fs-caption` | 14px | 14px | `0.875rem` | Captions, metadata |
| `--fs-label` | 13px | 14px | `clamp(0.8125rem, 0.79rem + 0.07vw, 0.875rem)` | Uppercase technical labels |

**Hard floors — these are the sitewide values; `06_BUILD/responsive-rules.md` and
`02_INFORMATION_ARCHITECTURE/page-hierarchy.md` defer to this table.**
Body copy never below **17px**. Captions and legal never below **14px**. Uppercase tracked labels never
below **13px**. Nothing on the site is smaller than 13px.

---

## 3. THE DISPLAY RULES

Display type is where this site is won or lost.

| Property | Value |
|---|---|
| Case | UPPERCASE for `display-xl` and `display-lg`. Sentence case permitted for `display-md` and below. |
| Weight | 800–900 |
| Width | `wdth 62–72` for `display-xl` and `display-lg` — the condensed athletic voice |
| Line-height | `0.88` for `display-xl`, `0.92` for `display-lg`, `1.0` for `display-md` |
| Letter-spacing | `-0.03em` at `display-xl`, `-0.02em` at `display-lg`, `-0.01em` at `display-md` |
| Max width | 14 characters per line at `display-xl`. 22 at `display-lg`. |
| Hyphenation | **Never.** `hyphens: none` on all display type. |
| Line breaks | **Art-directed.** Every display headline has its breaks specified in `04_CONTENT/`. |
| Orphans / widows | Zero tolerance. A single word on the last line of a headline is a bug. |

### Art-directed line breaks
Display headlines break where the *meaning* breaks, not where the container ends. The content files
specify them, and they are implemented with an explicit mechanism — not by hoping the container width
cooperates.

```
A BIGGER
ECONOMY.
A BRIGHTER
INDIA.
```

Implementation: a `<Display>` component takes an array of lines, renders each in its own `<span>` with
`display: block`, and joins them with spaces for screen readers and for copy-paste. It accepts a different
line array per breakpoint, because a four-line break at 1440px is a nine-line disaster at 390px.

### The lime word
One or two words inside a display headline may be lime. Never more, and never a whole headline. The lime
word should be the word that carries the argument:

> A BIGGER ECONOMY. **A BRIGHTER INDIA.**
> THE ECOSYSTEM IS ACTIVE. **BUT NOT CONNECTED.**

---

## 4. THE TEXT RULES

| Property | Value |
|---|---|
| Line-height | `1.55` for body, `1.45` for `body-lg` |
| Measure | 62–75 characters. `max-width: 34em` on any body container. |
| Weight | 400. 500 for emphasis. **Never bold body copy for emphasis** — use `--paper` against `--ink-200`. |
| Colour | `--ink-100` on dark. Pure white is for display type only; at body size it vibrates against black. |
| Paragraph spacing | `1em`. Never an indent. |
| Alignment | Left. **Never justified. Never centred for anything over two lines.** |
| Links in text | `--lime`, no underline at rest, a lime rule drawing in on hover, always underlined on focus |

---

## 5. THE LABEL

The uppercase technical label is a signature of the brochure and must survive to the site.

```css
font-size: var(--fs-label);
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.14em;
color: var(--ink-300);
```

**Uses:** section numbers (`01`, `02`), page eyebrows (`THE WORLD / ATHLIMAX`), category tags, dates,
metadata, image captions, diagram annotations.

**The section number treatment**, straight from the brochure: a two-digit number, a short lime rule, then
the label.

```
01 ──── THE BIGGER PICTURE
```

Consistent across every section of every page. It is a large part of what will make the site feel like one
system.

---

## 6. VERTICAL RHYTHM

Base unit: **4px.** Everything is a multiple.

| Relationship | Space |
|---|---|
| Label → display headline | `--space-4` (16px) |
| Display headline → lead paragraph | `--space-8` (32px) |
| Lead paragraph → body | `--space-6` (24px) |
| Paragraph → paragraph | `1em` |
| Body → CTA | `--space-12` (48px) |
| Section → section (dense) | `--space-24` (96px) |
| Section → section (standard) | `--space-32` (128px) |
| Section → section (dramatic) | `--space-48` (192px) |

The same section type gets the same spacing everywhere on the site. Inconsistent section rhythm is the
most common reason a page feels amateur even when every individual screen looks good.

---

## 7. FONT LOADING

| Setting | Value |
|---|---|
| Method | `next/font/local` with variable `.woff2` |
| `font-display` | `swap` |
| Preload | The two critical faces only |
| Fallback | `system-ui, -apple-system, "Segoe UI", sans-serif` |
| Metric matching | `size-adjust`, `ascent-override`, `descent-override` tuned so the swap causes **zero** layout shift |
| Files | Maximum three sitewide |

`ScrollTrigger.refresh()` fires after fonts load. A display headline that reflows after the swap will
throw every scroll position on the page.

---

## 8. RESPONSIVE TYPE

| Rule | Detail |
|---|---|
| Fluid only | Never a `font-size` per breakpoint. The `clamp()` handles it. |
| Display line breaks | A separate line array per breakpoint. Mandatory for every `display-xl`. |
| Mobile display ceiling | `display-xl` on mobile must fit in **four lines maximum**. If a headline needs five at 390px, the headline is too long — **fix the copy, not the CSS.** |
| Zoom | Everything must work at 200% browser zoom at 1280px. WCAG requires it. |
| Text-only zoom | No fixed-height container may clip text when the system font size is increased. |

---

## 9. TYPOGRAPHIC DETAIL

The things that separate typeset from typed. Every one of these is checked in `07_QA/visual-qa.md`.

- **Real punctuation:** curly quotes (" "), apostrophes ('), en dashes for ranges (14–15 December), em
  dashes for asides (—), ellipses (…). Straight quotes are a bug.
- **Non-breaking spaces** before units and after short prepositions in headlines, so they never break badly.
- **Numerals:** tabular figures in tables and data, proportional in running text.
- **Optical alignment:** a display line starting with a quotation mark or a `T` needs a negative left
  offset to look aligned. Mathematical alignment and optical alignment are not the same thing.
- **All-caps tracking:** uppercase at **label and body sizes** gets positive letter-spacing (`+0.14em`
  labels, `+0.1em` buttons). Uppercase at default tracking looks broken at those sizes. Display type at
  `display-xl` and `display-lg` is the opposite case: it keeps the **negative** tracking in §3 — at those
  sizes uppercase needs tightening, not opening (decision D32).
- **`text-wrap: balance`** on display headlines as a progressive enhancement — but the art-directed line
  array is the source of truth, not the browser's guess.
- **`::selection`** is styled: lime ground, black text.
