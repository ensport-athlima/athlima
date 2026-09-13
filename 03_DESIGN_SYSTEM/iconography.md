# ICONOGRAPHY

---

## 1. THE STYLE

The brochure establishes a clear icon language and the site must inherit it exactly.

| Property | Value |
|---|---|
| Style | **Line only.** Never filled, never duotone, never solid. |
| Stroke | 1.5px at 24px. Scales proportionally: 1px at 16px, 2px at 32px, 2.5px at 48px. |
| Terminals | Butt caps, mitre joins. Not rounded. |
| Grid | 24 × 24, with a 2px safe margin — live area 20 × 20. |
| Corners | Sharp. A 1px radius maximum, and only where a shape genuinely needs it. |
| Colour | `--lime` when the icon is a signal. `--ink-300` when it is supporting. Never both in one icon. |
| Detail | Low. An icon must read at 16px. If it needs more than six strokes, it is an illustration. |

**Reference character:** technical, architectural, drafted. Closer to an engineering drawing than to a
consumer app icon set.

---

## 2. THE ICON SETS

### The five pillars — drawn for ATHLIMA, essential
These five are drawn specifically for ATHLIMA. They appear on The World, in the Journal filters, and on
every pillar-tagged item. They are worth commissioning properly.

| Pillar | Concept |
|---|---|
| BUILD | A structural frame — the beginnings of a stand or a truss |
| EQUIP | A tool or component form — precise, mechanical |
| ENABLE | A pathway or branching form — routes opening |
| PERFORM | A figure in motion — reduced to its essential line |
| GOVERN | An institutional form — a portico or a seal, drawn as line |

### The six IPs — the marks, not icons
ATHLIMAX, THE SYMPOSIUM, ACTIV8, AFTERHOURS, ATHLIMA CONNECT and ATHLIMA 20 have **wordmarks**, supplied
as artwork. They are placed as SVG, never redrawn, never approximated, never turned into icons.

The brochure also assigns each IP a small glyph — the X, the concentric circles, the 8, the play form, the
node cluster, the numeral 20. These are usable as compact identifiers in navigation and rails, at 24px.

### UI icons — minimal
Arrow right · arrow down · close · menu · external link · play · pause · plus · minus · check.

**Ten icons.** Plus, by decision D22, two that forms require and four that the footer requires:

- **Error** and **warning** — a form error is never colour alone (`colour.md` §6). Drawn in the same
  line style; an error is a circle with a diagonal, a warning is a triangle. Never an emoji, never a
  filled badge.
- **Social** — LinkedIn, Instagram, X, YouTube `[TO VERIFY — which accounts exist]`. Redrawn to the
  1.5px line specification, monochrome `--ink-300`, small, last in the footer. Never brand-coloured.

If a new one is proposed, the first question is whether the interface needs a word instead.

### Sport disciplines — ATHLIMA 20 only
Twenty discipline glyphs for the ATHLIMA 20 grid. Same line style, same grid, drawn as a coherent family
by one hand.

---

## 3. THE RULES

- **Icons never appear without a label.** An icon alone is a puzzle. The one exception is the UI set, where
  the meaning is universal and an `aria-label` is present.
- **Never** the icon + heading + paragraph three-column feature row. Named as a prohibition in
  `design-principles.md`.
- Icons align to the **cap height** of the text beside them, not to the line box.
- Icons in a set share visual weight. One dense icon among five sparse ones breaks the set.
- Decorative icons are `aria-hidden="true"`. Meaningful icons have an accessible name.
- **No icon fonts.** Inline SVG, tree-shaken from a single sprite or as React components.
- No emoji, anywhere, including in CMS content.
- No third-party icon library used unmodified. Feather, Lucide and Heroicons all have a rounded, friendly
  character that is wrong for ATHLIMA. If one is used as a base, every icon is redrawn to the specification
  above.

---

## 4. THE NUMERAL AS A DEVICE

More important to ATHLIMA than icons are.

The brochure uses large two-digit numerals constantly: `01`, `02`, `03` for sections; `08` for the eight
reasons; `20` for ATHLIMA 20; `22`, `350`, `12` as data. This is a signature.

**Specification:**
- Always two digits with a leading zero for sequences under 10: `01`, not `1`
- Set in the display face, weight 800, condensed width
- Large — often `--fs-display-md` or above, even when it labels a small item
- `--lime` when it is a marker, `--ink-700` when it is a background device
- Frequently oversized and partially cropped, sitting behind or beside content as a graphic element

**The section marker, sitewide:**
```
01 ──── THE BIGGER PICTURE
```
A two-digit lime numeral, a 40px lime rule, a letterspaced uppercase label. Identical on every section of
every page.

---

## 5. THE TECHNICAL DEVICES

Non-icon graphic elements from the brochure. These do more work for the identity than icons do.

| Device | Specification | Use |
|---|---|---|
| **Hairline** | 1px, `--ink-800` | Separation, alignment, implied structure |
| **Lime rule** | 2px × 40px, `--lime` | The section marker. The only place a *40px* lime rule appears; lime as a hover state on an index hairline, or as the rule on a Journal pull quote, is a different device and is specified in `components.md`. |
| **Corner ticks** | 8px rules at the corners of a frame, 1px, `--ink-700` | Framing a technical element. **One per page.** |
| **Connector line** | 1px with a 4px node at each end, `--lime` at 40% | Diagrams only — the pillar convergence, the Room composition (and the EcosystemMap, in v2) |
| **Chevron** | A single `>` in the display face, lime | Between stages in a sequence. The partner journey. |
| **Dot separator** | `·` with `--space-2` either side | `CONNECT · COLLABORATE · ELEVATE` |

**The dot separator matters more than it looks.** `CONNECT · COLLABORATE · ELEVATE` is set with a middot,
not a bullet, not a pipe, not a slash, not a hyphen. It appears constantly and getting it wrong is visible.
