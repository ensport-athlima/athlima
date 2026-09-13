# SPACING

> Base unit: **4px**. Every measurement in the system is a multiple of it.
> `mt-[37px]` is a bug. There are no exceptions for "it just looks better" — if it looks better, the scale
> is wrong and the scale gets fixed.

---

## 1. THE SCALE

| Token | px | rem | Typical use |
|---|---|---|---|
| `--space-1` | 4 | 0.25 | Icon-to-label, tightest gaps |
| `--space-2` | 8 | 0.5 | Within a component |
| `--space-3` | 12 | 0.75 | Tight component padding |
| `--space-4` | 16 | 1 | Standard small gap. Label → headline. |
| `--space-5` | 20 | 1.25 | Mobile margin |
| `--space-6` | 24 | 1.5 | Standard gap. Paragraph → paragraph block. |
| `--space-8` | 32 | 2 | Headline → lead. Component padding. |
| `--space-10` | 40 | 2.5 | Larger component padding |
| `--space-12` | 48 | 3 | Body → CTA. Item → item in an index. |
| `--space-16` | 64 | 4 | Sub-section spacing. Tight section padding. |
| `--space-20` | 80 | 5 | Large gaps |
| `--space-24` | 96 | 6 | **Dense section padding** |
| `--space-32` | 128 | 8 | **Standard section padding** |
| `--space-40` | 160 | 10 | Large section padding |
| `--space-48` | 192 | 12 | **Dramatic section padding** |
| `--space-64` | 256 | 16 | The rarest. Around a single statement. |

**Nothing above `--space-64`.** If a gap needs to be bigger, the section should be full-height instead.

---

## 2. FLUID SECTION PADDING

Section padding scales with the viewport. It does not step at breakpoints.

```css
--section-pad-tight:     clamp(var(--space-12), 6vw,  var(--space-16));
--section-pad-dense:     clamp(var(--space-16), 8vw,  var(--space-24));
--section-pad-standard:  clamp(var(--space-20), 10vw, var(--space-32));
--section-pad-dramatic:  clamp(var(--space-24), 13vw, var(--space-48));
```

Applied with `padding-block`, **never** with a `padding` shorthand — the horizontal gutter is the grid's
job and must not be overwritten.

---

## 3. THE SPACING RELATIONSHIPS

Consistency here is what makes a site feel designed rather than assembled.

| Relationship | Token |
|---|---|
| Section number → section title | `--space-4` |
| Section title → lead paragraph | `--space-8` |
| Lead paragraph → body | `--space-6` |
| Body → CTA | `--space-12` |
| CTA → next section | section padding |
| Index item → index item (vertical) | `--space-12` |
| Index item → index item (horizontal) | grid gutter |
| Image → caption | `--space-3` |
| Component internal padding (small) | `--space-6` |
| Component internal padding (standard) | `--space-8` |
| Component internal padding (large) | `--space-12` |

**The rule that matters most:** the *same relationship* gets the *same space* everywhere on the site. A
section title sitting 32px above its lead on one page and 40px on another is invisible in isolation and
corrosive in aggregate.

---

## 4. THE NEGATIVE SPACE PRINCIPLE

Premium is emptiness. Specifically:

- A hero statement should occupy **less than half** the viewport it sits in — **except the entry hero
  on the homepage** (screen 01). It is the one `display-xl` on the page and it is meant to dominate:
  the four locked lines at the locked token measure ~55% of a 1440×900 viewport, and that is the
  design, not a defect. The token is not lowered to make a rule fit. Every other statement on the site,
  including `/the-world`'s entry, obeys the half-viewport rule.
- A section should feel like it has more space than it needs.
- **When a layout feels crowded, remove content. Never reduce spacing.**
- The right-hand void in the L3 Editorial layout is not wasted space; it is the layout.
- One idea per screen. If a screen has two ideas, it is two screens.

**The 60% test:** on a signature page, roughly 60% of any given viewport should be empty or atmospheric.
If it is under 40%, the page is a document, not an experience. **The entry hero is the one exception:**
its headline is the atmosphere — the poster behind it is dark, the type is the statement, and a first
screen that whispers fails the ten-second test in `CLAUDE.md` Part XI. The test applies to every screen
after it. (Decided 13 September 2026, after measuring the built screen 01.)

---

## 5. TOUCH SPACING

- Minimum target: **44 × 44px**, achieved with padding, not by enlarging the visual.
- Minimum gap between adjacent targets: **8px**.
- Bottom-anchored elements respect `env(safe-area-inset-bottom)`.
- The page carries bottom padding equal to the mobile APPLY bar height, so the bar never covers the last
  line of content.

---

## 6. THE ANTI-PATTERNS

- ❌ Arbitrary values for anything the scale covers: `mt-[37px]`, `gap-[13px]`, `py-[85px]`
- ❌ Negative margins to fix a spacing problem — the problem is upstream
- ❌ `padding` shorthand on sections, which silently kills the horizontal gutter
- ❌ Different spacing for the same relationship on different pages
- ❌ Spacing that only works at one breakpoint
- ❌ `space-y-*` on a container whose children have their own margins — pick one mechanism

**Permitted arbitrary values:** genuinely one-off geometry — a specific `clip-path`, a mask position, an
optical alignment nudge of 1–2px. These are rare, and each one carries a comment saying why.
