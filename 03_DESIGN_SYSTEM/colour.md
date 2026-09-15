# COLOUR

> Every ratio in this file has been computed, not estimated. Where a pairing fails, it is marked and
> forbidden — not "used carefully".

---

## 1. THE TOKENS

Defined once in `web/src/styles/tokens.css` as CSS custom properties and consumed by Tailwind. **No colour
is ever written as a hex value in a component.**

### Ground — the black ramp
A green-shifted charcoal ramp. It sits under lime far better than a neutral grey, which goes muddy against
it.

| Token | Hex | Use |
|---|---|---|
| `--void` | `#000000` | The page ground. The brand's actual black. |
| `--ink-950` | `#070908` | Raised surface 1 — sections that lift off the page |
| `--ink-900` | `#0E110F` | Raised surface 2 — cards, panels, the nav backdrop |
| `--ink-850` | `#141814` | Input fields, wells |
| `--ink-800` | `#1C211B` | **Decorative** hairlines and dividers only — 1.28 on `--void`, so never a control boundary |
| `--ink-700` | `#2B312A` | Decorative rules, disabled surfaces — 1.58, never a control boundary |
| `--border` | `#5F665C` | **The only permitted boundary for an interactive control.** 3.54 on `--void` — passes the 3:1 non-text requirement. |
| `--ink-600` | `#454C43` | Disabled *surfaces*. 2.37 — **never disabled text**. |
| `--ink-disabled` | `#767E73` | Disabled text. 5.00 on `--void` — legible, as `component-rules.md` §6 requires. |

### Text — the light ramp
| Token | Hex | On `--void` | Verdict |
|---|---|---|---|
| `--paper` | `#FFFFFF` | **21.00** | Primary text, display type |
| `--ink-100` | `#E6E9E4` | **17.14** | Body copy — slightly softer than pure white, easier at length |
| `--ink-200` | `#C9CEC6` | **13.13** | Secondary text |
| `--ink-300` | `#A8B0A5` | **9.42** | Captions, labels, metadata |
| `--ink-400` | `#8B9488` | **6.69** | **The muted-text floor.** Nothing quieter than this carries body copy. |
| `--ink-500` | `#6B7368` | 4.28 | ⚠️ **Fails AA for body text (needs 4.5).** Large text ≥24px only, or non-text UI. |

### Signal — lime
| Token | Hex | On `--void` | Use |
|---|---|---|---|
| `--lime` | `#C7E70C` | **14.86** | **The** ATHLIMA lime. Primary signal. `[TO VERIFY]` — averaged from three supplied marks (`05_MEDIA/README.md`), not taken from a brand guideline. If the official value differs, every ratio in this file is recomputed. |
| `--lime-bright` | `#D8F53C` | **17.05** | Hover and active states only |
| `--lime-deep` | `#9FBB08` | **9.59** | Pressed states, rules on lighter grounds |
| `--lime-ink` | `#5A6B04` | *5.93 on white* | **Lime text on light surfaces. The only permitted one.** |

### AFTERHOURS — the single exception
| Token | Hex | On `--void` | Verdict |
|---|---|---|---|
| `--dusk-violet` | `#9341DE` | 4.05 | ⚠️ **Fails AA for body text.** Large display type and graphics only. |
| `--dusk-indigo` | `#5C57E4` | 3.94 | ⚠️ **Fails AA for body text.** Large display type and graphics only. |
| `--dusk-blue` | `#3C7BEA` | **5.21** | ✅ Passes AA. **Use this for any AFTERHOURS text under 24px.** |

`--dusk-gradient: linear-gradient(90deg, var(--dusk-violet) 0%, var(--dusk-indigo) 55%, var(--dusk-blue) 100%)`

### Corporate marks — never recoloured
| Token | Hex | Note |
|---|---|---|
| `--enarr-navy` | `#2E3192` | The ENARR Group. Sampled from the mark. |
| `--enarr-gold` | `#E8B04C` | ENARR gold. 10.75 on black. |
| `--ensport-gold` | `#C9A24B` | ENSPORT Ventures. 8.75 on black. |

`[TO VERIFY — B3]` — confirm these against the official ENARR and ENSPORT brand guidelines before launch.
They are sampled from supplied artwork, which is indicative but not authoritative.

### Light surface
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Light section ground |
| `--paper-warm` | `#F4F5F2` | Light section alternate |

Text on light: `--void` (21.00), `--ink-900` (18.99), `--ink-700` `#2B312A` (13.33), `--ink-600` `#454C43`
(8.87). **Nothing lighter than `--ink-600` on white.**

### The logotype exemption
WCAG 1.4.11 exempts logotypes from the non-text contrast requirement. `--enarr-navy` `#2E3192` measures
**1.97** on `--void`, which is why the ENARR mark is placed on its own light plate or on `--paper` within
the provenance section — **never as navy-on-black at small scale**, even though the exemption technically
permits it. Legibility, not compliance, is the standard here.

---

## 2. THE FORBIDDEN PAIRINGS — HARD FAILS

Verified, not assumed. These must never appear:

| Pairing | Ratio | Status |
|---|---|---|
| **White text on lime** | **1.41** | ❌ Catastrophic. Illegible. |
| **Lime text on white** | **1.41** | ❌ Catastrophic. Use `--lime-ink` instead. |
| **Lime text on `--paper-warm`** | ~1.4 | ❌ Same failure. |
| `--dusk-violet` body text on black | 4.05 | ❌ Below AA. Display type only. |
| `--dusk-indigo` body text on black | 3.94 | ❌ Below AA. Display type only. |
| `--ink-500` body text on black | 4.28 | ❌ Below AA. Large text only. |
| Lime on `--lime-deep` | ~1.5 | ❌ |

**The one that will be attempted anyway:** white text on a lime button. It looks correct in a mockup at
100% zoom on a bright monitor and is unreadable in reality. **A lime surface always carries `--void`
text.** Ratio 14.86. This is not negotiable.

---

## 3. THE LIME DISCIPLINE

Lime is a signal. The rules exist because "black background, neon green text" is the single most likely
way this site ends up looking like a crypto project.

### Lime IS for
- The A in the ATHLIMA mark
- The primary CTA surface *(lime ground, black text)*
- One or two words of emphasis inside a display headline — **never a whole headline**
- Section numbers and technical labels
- Active and hover states
- Focus rings
- Rules and hairlines that need to signal, not just divide
- Data highlights — one number in a set, not all of them
- The IP accent characters: the X of ATHLIMAX, the 8 of ACTIV8, the final M of THE SYMPOSIUM, the final A
  of ATHLIMA

### Lime is NEVER for
- Body copy of any length
- A full headline
- A large background area *(the exception: a single CTA block per page)*
- Anything with a glow, bloom, or shadow *(except a real light source inside a scene, decision H)*
- Gradients
- A whole set of icons
- More than three **content** elements in one viewport — see the counting rule below

### The counting rule
Screenshot any viewport. Count the distinct lime elements **in the content**. **Four or more triggers a
review.**

**Chrome does not count** (decision D3): the `SectionMarker` (its numeral and its 40px rule) and the
permanent `BUILD WITH ATHLIMA` affordance in the nav or the mobile bar are the site's frame. They are on every screen
by design and are excluded from the count. Everything else — a lime word in a headline, a lime data
highlight, a lime accent character in a mark, a lime CTA block, a lime rule that is not the section
marker — counts.

---

## 4. SURFACE STRATEGY

The site is dark. Light sections are a deliberate, rare instrument.

```
--void       the page. ~80% of all surface area.
--ink-950    a section that lifts. Used sparingly.
--ink-900    cards, panels, nav backdrop, footer.
--paper      LIGHT SECTION — the rarest and loudest move in the system.
```

### Light sections
- **At most one per page.** Two on the homepage is the absolute ceiling.
- Reserved for a genuine change of register: a data moment, a statement of provenance, an editorial pause.
- Marked with `data-surface="light"` on the section element, which the navigation and cursor read to invert.
- On a light section, lime becomes `--lime-ink` for text and `--lime` is used only as a solid fill behind
  black text.

**When in doubt, do not make a section light.** The impact comes from scarcity.

---

## 5. THE AFTERHOURS EXCEPTION

AFTERHOURS is the only IP with its own colour, and it is a genuine identity in the source material — a
violet-to-blue gradient wordmark, a night register.

**Rules:**
- The gradient appears on the **AFTERHOURS wordmark only.** Not on body text, not on backgrounds, not on
  buttons, not on other headlines.
- On the AFTERHOURS page, the ground stays black. The page's own accent is dusk, not lime. **Lime appears
  on the AFTERHOURS page in exactly three places and nowhere else** (decision D15): the persistent
  navigation, the footer, and the CTA buttons. No lime section markers, lime words, lime rules or lime
  data highlights on this page — the section marker's numeral and rule use `--dusk-blue`.
- Any AFTERHOURS text under 24px uses `--dusk-blue` (5.21), never violet or indigo.
- The CTA buttons stay lime because the conversion path is ATHLIMA's, not the sub-brand's. The nav and
  footer stay lime because they are ATHLIMA's frame around the room.

**Why the exception is allowed:** it exists in the identity already, it maps to a real change of state
(day to night), and it is contained to one page. **No other IP gets one.** ATHLIMAX, ACTIV8, The Symposium,
Connect and ATHLIMA 20 differentiate through imagery and register, not hue.

---

## 6. SEMANTIC COLOUR

Forms need error and success states, and the brand palette does not provide them.

| Token | Hex | Use |
|---|---|---|
| `--signal-error` | `#FF5A4E` | Errors. **6.82** on `--void`. Always paired with an icon and text — never colour alone. |
| `--signal-success` | `--lime` | Success. Lime already means "yes, this worked". |
| `--signal-warning` | `#F0A93B` | Warnings. Rare. |

Keep these out of marketing pages entirely. They belong to forms.

---

## 7. IMAGE TREATMENT

Colour discipline extends to photography, or the palette falls apart at the first full-bleed image.

- All photography is graded toward the ATHLIMA world: deep blacks, controlled highlights, desaturated
  midtones. Not black and white — **cinematically low-saturation.**
- Warm practical light (sodium, tungsten, screen glow) is permitted and encouraged; it is what makes
  Mumbai at night look like Mumbai at night.
- **No lime colour-grading of photographs.** Lime enters an image only as a real light source in the
  frame — a signage glow, an LED edge — never as a filter.
- Every full-bleed image behind text carries a gradient scrim, black at 0–70% opacity, so text contrast is
  achieved against the scrim rather than hoped for against the image.
- Where an image will always sit behind text, that scrim is baked into the design, not added later.
