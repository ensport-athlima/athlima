# DESIGN PRINCIPLES

> Seven principles. When two decisions both look defensible, the higher-numbered principle loses.

---

## 01 — BLACK IS THE ROOM. LIME IS THE SIGNAL.

The ground is black because ATHLIMA happens in a room at night, in a city at night, under controlled
light. Black is not a "dark theme" — it is the space.

Lime is not a colour scheme. It is **a signal**: the thing that says *look here, this matters, this is
ATHLIMA*. A signal used everywhere stops being a signal.

**The test:** count the lime elements **in the content** of any viewport. More than three and the system
has broken. The section marker and the permanent CTA are chrome, not content, and do not count
(decision D3, `03_DESIGN_SYSTEM/colour.md` §3).

---

## 02 — TYPE CARRIES THE PAGE.

ATHLIMA's visual argument is made in type, not in imagery. Imagery sets the temperature; type makes the
point.

That means: display type at genuinely large sizes, optically tracked, art-directed line breaks, and enough
space around it that it can be read as a statement rather than a headline. A page where the largest thing
is a photograph is a page that has nothing to say.

---

## 03 — NEGATIVE SPACE IS THE PRICE OF ADMISSION.

Premium is mostly emptiness. Every instinct to fill a gap with a supporting graphic, a secondary CTA, or
one more proof point should be resisted.

**If a section feels crowded, the answer is never a smaller font. It is less content.**

---

## 04 — STRUCTURE IS THE PROOF.

ATHLIMA's credibility comes from how carefully it is built: five pillars, six IPs, seven partner stages,
four Connect steps, twenty disciplines. The design should let people *see* that architecture.

This is why diagrams, numbered sequences, rules and technical labels belong here and would be pretentious
elsewhere. The information design is not decoration — it is the evidence.

---

## 05 — MOTION IS ARCHITECTURE, NOT ENTERTAINMENT.

Things move because movement carries a meaning that stillness cannot: convergence, sequence, depth,
arrival. Nothing moves to demonstrate that it can.

**The site should feel expensive, not clever.** The difference is that expensive things are restrained.

---

## 06 — FAST IS PART OF THE DESIGN.

A cinematic site that takes six seconds is not premium; it is slow. Every visual decision carries a
performance cost, and the budget in `06_BUILD/performance.md` is a design constraint, not an engineering
afterthought.

**Designing something the build cannot deliver at 2.0s LCP on a mid-range Android is not good design.**

---

## 07 — INDIA IS AMBITION AND PLACE, NEVER ORNAMENT.

Mumbai, specifically and contemporarily: the Sea Link, the skyline, the Coastal Road, monsoon light, the
scale and impatience of the place. Indian faces, Indian institutions, Indian English.

Never: tricolour, chakra, temple motifs, folk-craft borders, henna patterns, or any device that treats
Indianness as decoration.

---

## THE DESIGN TESTS

Apply all four to every screen before it is called finished.

### THE SQUINT TEST
Blur the screen until type is unreadable. Is there **one** clear focal point? If the page has three
competing hotspots, the hierarchy has failed.

### THE LOGO SWAP TEST
Replace the ATHLIMA mark with a generic one. Could this be any other brand? If yes, the screen has visual
polish but no identity.

### THE SCREENSHOT TEST
Screenshot the full page and view it at 10% zoom. You should see peaks and valleys — a shape with pace.
An even stripe means every section has the same weight and the page has no crescendo.

### THE REDUCED-MOTION TEST
Turn on `prefers-reduced-motion` and screenshot the page. **It must look finished and intentional.** If it
looks empty or broken, motion was carrying meaning that the layout should have carried.

---

## THE PROHIBITIONS

These are named because they are the *easiest* interpretations of a black-and-lime brief, and easy is how
this site becomes a template.

- ❌ **Glow.** No neon bloom, no lime `box-shadow`, no `text-shadow` on lime, no radial glow behind the mark.
- ❌ **Gradient text.** Ever. The one gradient in the system belongs to AFTERHOURS and it is used on the
  AFTERHOURS wordmark only.
- ❌ **Glassmorphism.** No frosted panels, no `backdrop-filter` blur surfaces.
- ❌ **Rounded-corner card grids with drop shadows** as the default answer to "show several things".
- ❌ **Terminal / hacker / crypto tropes.** No monospace body text, no scanlines, no matrix rain, no
  circuit-board patterns, no glitch effects.
- ❌ **Stock sports photography.** No smiling people in gyms, no fists raised at sunrise, no handshake
  close-ups.
- ❌ **Icon + heading + paragraph** three-column feature rows.
- ❌ **Emoji.** Anywhere. Including in the CMS.
- ❌ **Purple/blue anywhere except AFTERHOURS** — and the ENARR mark, which is navy by its own identity and
  is never recoloured. It appears only in the provenance section and the footer, at modest scale, per
  `colour.md` §1.
- ❌ **A second accent colour.** If something needs to stand out and lime is taken, the answer is scale,
  space or weight — not a new hue.

---

## THE REFERENCE REGISTER

The site should sit comfortably in this company:

**Editorial luxury × sport performance × contemporary India × architectural cinema.**

Closer to a serious architecture monograph, a Formula 1 team's technical communication, or a
well-designed institutional annual report than to a fitness brand, a startup landing page, or a festival
site.

**And explicitly not:** Web3 project pages, gaming brands, generic luxury hospitality, wellness clinics,
or agency portfolio sites showing off scroll libraries.
