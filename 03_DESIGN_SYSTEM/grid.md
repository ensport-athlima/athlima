# GRID

---

## 1. THE GRID

**12 columns. Fluid gutters. A hard maximum.**

| Breakpoint | Columns | Gutter | Margin | Max content width |
|---|---|---|---|---|
| `base` 390px | 4 | 16px | 20px | — |
| `sm` 640px | 6 | 20px | 32px | — |
| `md` 768px | 8 | 24px | 40px | — |
| `lg` 1024px | 12 | 24px | 48px | — |
| `xl` 1280px | 12 | 32px | 64px | — |
| `2xl` 1536px | 12 | 32px | 80px | 1600px |
| `3xl` 1920px+ | 12 | 40px | auto | **1600px, centred** |

Above 1600px the content column caps and centres; backgrounds and full-bleed media continue to bleed. The
site must not become a stretched line of text on an ultrawide display.

---

## 2. THE STANDARD LAYOUTS

Six. Every section on the site uses one of them. If a section needs a seventh, it needs a conversation
first.

### L1 — FULL BLEED
Edge to edge, no margins. Hero media, the six portals, full-width imagery.

### L2 — CONTAINED
The standard. Content within the margins, capped at 1600px. Most sections.

### L3 — EDITORIAL
Content in columns 2–8 of 12 (roughly 58%), leaving a deliberate right-hand void. **The signature ATHLIMA
layout** — it is what creates the sense of space that the brochure has. Used for statements and lead
paragraphs.

### L4 — SPLIT
Columns 1–5 and 7–12. Type on one side, media on the other. Alternating sides down a page creates rhythm.
Never more than three splits in a row — it becomes a zigzag.

### L5 — INDEX
A 12-column grid of items: 2-up, 3-up, 4-up or 6-up. Used for the pavilions, the zones, the themes, the
disciplines. **Not a card grid** — see `components.md`. Items are separated by rules and space, not by
boxes with shadows.

### L6 — ASIDE
Main content in columns 1–8, a sticky annotation column in 10–12. Journal articles, and any page with
persistent metadata.

**Mobile collapse:** L3, L4, L5 and L6 all become a single column at `md` and below. L1 stays full bleed.
L2 stays contained.

---

## 3. THE BASELINE

Base unit **4px**. Vertical spacing tokens in `spacing.md`.

Type sits on a **28px baseline grid** at body size. Display type breaks the grid deliberately — that is
what makes it read as display — but returns to it at the next body element.

**Practical rule:** if two sections have body copy, the first line of body copy in each should land on the
same baseline offset from the section top. Inconsistency here is invisible individually and cumulatively
makes a page feel loose.

---

## 4. SECTION HEIGHTS

Not everything is full height. See `02_INFORMATION_ARCHITECTURE/page-hierarchy.md` §7.

| Type | Height | Use |
|---|---|---|
| Full | `100svh` | Hero, the portals, one or two dramatic moments |
| Tall | `min-height: 80svh` | Major sections |
| Standard | `padding-block: var(--space-32)` | Most content |
| Dense | `padding-block: var(--space-24)` | Information-heavy |
| Tight | `padding-block: var(--space-16)` | Rails, related content, footers of sections |

**Always `svh`/`dvh`, never `vh`.** Mobile browser chrome collapsing must not cause a jump.

**Maximum three `100svh` sections per page.**

---

## 5. THE GRID AS A VISIBLE DEVICE

The brochure uses fine rules, technical lines and modular blocks. This is part of the identity and should
be visible on the site — sparingly.

- **Hairlines:** 1px, `--ink-800`. Used to separate, to align, to imply structure.
- **Column rules:** vertical hairlines in index layouts, echoing the brochure's pavilion blocks.
- **The lime rule:** 2px, `--lime`, 40px wide. The section marker. Appears with every section number.
- **Corner ticks:** short 8px rules at the corners of a framed element. A technical, architectural device.
  Use on **at most one element per page.**

**Never:** a visible full grid overlay as decoration. The grid is felt, not displayed.

---

## 6. ALIGNMENT DISCIPLINE

- Everything aligns to the grid. Turn on a grid overlay during QA and check.
- **Left-aligned by default.** Centring is reserved for: the hero statement, a single-line section
  statement, and the CTA block. Never for body copy, never for anything over two lines.
- Optical alignment beats mathematical alignment where they conflict — punctuation, round shapes, icons.
- Elements in a row share a baseline, not just a top edge.
- An image and the text beside it align on the **cap height** of the first line, not on the bounding boxes.
