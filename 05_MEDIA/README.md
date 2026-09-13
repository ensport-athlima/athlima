# 05_MEDIA

## What is here

### `/logos`
Supplied brand artwork. **These are raster reference files, not production assets.**

| File | Mark | Notes |
|---|---|---|
| `athlima-master.jpg` | ATHLIMA + CONNECT · COLLABORATE · ELEVATE | The master lock-up |
| `athlimax.png` | ATHLIMAX | Lime accent on the final X |
| `the-symposium.jpg` | THE SYMPOSIUM | Lime accent on the final M |
| `activ8.png` | ACTIV8 + PLAY BEYOND THE GAME | Lime accent on the 8 |
| `afterhours.png` | AFTERHOURS | Violet→blue gradient. The only gradient in the system. |
| `enarr-group.png` | The ENARR Group | Navy `#2E3192` and gold. **Never recoloured.** |
| `ensport-ventures.png` | ENSPORT Ventures | Gold and white. **BUILT TO INSPIRE VICTORY.** |

**Missing, and required before build:** vector `.svg` versions of every mark, plus the ATHLIMA A device on
its own. Every mark on the site is placed as SVG with a real `<title>` — never as a raster image, never
typeset, never approximated. `[TO VERIFY — B2 — request vector artwork from the brand owner]` **ATHLIMA CONNECT and ATHLIMA 20 have no
supplied lock-up at all, even as raster.** Homepage screen 01 cannot be built until the A device exists as
SVG.

### `/references`
| File | What |
|---|---|
| `athlima-brochure-revised.pdf` | The 16-page ATHLIMA 2026 brochure. The primary source for this repository. |
| `athlima-founding-partner-prospectus.pdf` | The 16-page Founding Partner Prospectus. Source for all partner content. |
| `floor-plan-st-regis-9th-floor.png` | The venue floor plan. 22 numbered spaces, ACTIV8 lawn, Afterhours terrace, Astor 1/2. |

**Note on the two brochures:** they disagree on two material points — 20 partners / six pavilions vs 22
spaces / 12 categories, and 350 guests vs 500+ leaders. Both are flagged in
`01_STRATEGY/positioning.md` §8 and in `CLAUDE.md` Part IX, each with a working assumption the content
files use. **Confirm both with the commercial team before launch; do not change either silently.**

### `/photography`, `/video`, `/textures`
Empty. See `03_DESIGN_SYSTEM/imagery.md` for the brief, the grade specification, the micro-film shot list,
and the AI-imagery policy in §7.

---

## The rules

1. **No source files in git.** Nothing over 500KB in the repository once the build starts. Production
   assets live in the CMS and on the CDN. The files here are reference material for the brief, not the
   pipeline.
2. **Every asset is graded** with the ATHLIMA LUT before it is used. Consistency of grade matters more
   than the quality of any individual image.
3. **Every asset has a signed licence or release on file before it ships**, including a model release for
   every recognisable person.
4. **Alt text is written by a human at delivery** and stored in the CMS. Never the filename.
5. **Every image has a focal point set in the CMS** so responsive crops never decapitate the subject.

---

## Sampled brand colours

Extracted from the supplied artwork. `[TO VERIFY]` against official brand guidelines.

| Colour | Hex | Source |
|---|---|---|
| ATHLIMA lime | `#C7E70C` | Averaged from the ATHLIMA, ATHLIMAX and ACTIV8 marks |
| Ground | `#000000` | All marks sit on true black |
| Afterhours violet | `#9341DE` | AFTERHOURS wordmark, left |
| Afterhours indigo | `#5C57E4` | AFTERHOURS wordmark, centre |
| ENARR navy | `#2E3192` | ENARR mark |
| ENARR gold | `#E8B04C` | ENARR mark |
| ENSPORT gold | `#C9A24B` | ENSPORT mark |

Full palette, with verified WCAG ratios, in `03_DESIGN_SYSTEM/colour.md`.
