# ASSET BRIEF
### What the site needs from the shoot, the edit and the brand owner — slot by slot

> Written 14 September 2026 against the build. The rules are `03_DESIGN_SYSTEM/imagery.md` (read §1–§3
> before briefing anyone) and `05_MEDIA/README.md`. This file says *where each asset goes and what it
> must be*. When an asset exists it is placed either in the Studio (**Media slot** document, one per
> slot name — no deploy) or, for a still under 500 KB, in `web/public/media/` with one line in
> `web/src/content/media.ts`. Nothing renders until then; nothing breaks until then.

---

## 1. THE FOUR SUBJECTS, ONE GRADE

Everything on the site is one of four subjects (`imagery.md` §1): **the athlete, cinematically** (effort,
focus, recovery, breath — never celebration); **Mumbai, at night** (the Sea Link, the skyline from the
water, the Coastal Road, monsoon reflections — specific, recognisable); **architecture and infrastructure**
(stadiums, training facilities, often empty, at night); **people in conversation** (two or three, the
moment before or after a decision, warm low-lit interior).

One LUT, applied to every asset before delivery (`imagery.md` §2): deep blacks with detail, controlled
highlights, saturation −20 to −35%, cool overall with warm practicals, fine consistent grain. **Lime only
as a real light source in the frame.** No crowds, no smiling-at-camera, no daylight except on ACTIV8.

## 2. DELIVERY RULES (`imagery.md` §8)

| | |
|---|---|
| Stills | 3000 px on the long edge minimum (the hero 3840), sRGB, JPEG q90 or 16-bit TIFF; the LUT applied; named `athlima-[subject]-[descriptor]-[nn].jpg` |
| Alt text | One human-written sentence per still, delivered with it. Never the filename. |
| Focal point | Marked (an x/y, or a note: "the hand, lower right") — set in the Studio's hotspot |
| Releases | A signed model release for every recognisable person, a licence for every third-party image, **before** delivery |
| Micro-films | 5–8 s, silent, loop-clean (last frame cuts to first), 1920 × 1080, H.264 MP4 ≤ 1.5 MB (+ optional AV1/WebM); a poster JPEG that is frame one |
| The hero film | 15–30 s, directed, no dialogue (or captioned); delivered as a master to Mux with **static MP4 renditions enabled**; a poster that is frame one at 3840 px |
| Repository | A still may be delivered straight into `05_MEDIA/photography/<slot>.png` (committed; the pipeline builds from it at deploy) **or** into the Studio as a Media slot (no deploy; the CMS wins). Films live on Mux. Nothing derived is committed. |

## 3. THE SLOTS

Ratios: `viewport` = fills the screen at any ratio (compose loose, mark the focal point); `21:9` = a
wide band. Every still is delivered as a full frame; the site crops from the focal point.

### The homepage

| Slot | Where | Accepts | Ratio · min | Subject |
|---|---|---|---|---|
| `home.hero` | Screen 01, behind THE BUSINESS OF SPORT. THE FUTURE OF INDIA. | film or still | viewport · 3840 | **Mumbai at night** — the city, the architecture, the light; the A as architecture where it can be. The hero film's first frame is the poster. Text sits bottom-left; keep the lower-left third quiet. |
| `home.athlima20` | Screen 08, with ONE FUTURE. over it | still | 21:9 · 3000 | **The strongest image on the site**: young Indian athletes, backs to camera, facing the city and the light; para athletes included, not as a category. This one carries real alt text. |
| `portal.athlimax` | Screen 04 / The World — the ATHLIMAX portal | loop or still | viewport · 1920 | The marketplace in motion: a conversation across a table, a product in a hand, a card exchanged |
| `portal.symposium` | the SYMPOSIUM portal | loop or still | viewport · 1920 | The stage: a speaker mid-sentence from the wings, a listening face, the light on the room |
| `portal.activ8` | the ACTIV8 portal | loop or still | viewport · 1920 | Daylight and movement: shoes hitting the floor, a training rep, breath |
| `portal.afterhours` | the AFTERHOURS portal | loop or still | viewport · 1920 | The night: the terrace, the city behind, glass, music, the Runway |
| `portal.connect` | the CONNECT portal | loop or still | viewport · 1920 | Two people in conversation, close; hands; a name on a card |
| `portal.athlima20` | the ATHLIMA 20 portal | loop or still | viewport · 1920 | One young athlete, cinematically: a face, a pause, the moment before |
| `doorway.business` | Screen 06, behind the founder's doorway (at 40% on hover) | still | 21:9 · 2400 | A founder in a room that is not an office |
| `doorway.athletes` | the athletes' doorway | still | 21:9 · 2400 | An athlete, not an exhibit: training, recovering, thinking |
| `doorway.capital` | the capital doorway | still | 21:9 · 2400 | The city from above at dusk |
| `doorway.infrastructure` | the infrastructure doorway | still | 21:9 · 2400 | A venue under construction, or an empty stadium with the lights coming on |
| `doorway.institutions` | the institutions doorway | still | 21:9 · 2400 | A federation or ministry setting — formal, restrained; the register matters most here |
| `doorway.brands` | the brands doorway | still | 21:9 · 2400 | A product in use, inside sport, not on a wall |

The six portal loops are one set: one ratio, one grade, one length. The six doorway stills are one set.

### The entries — one still behind each page's opening statement

| Slot | Page | Subject |
|---|---|---|
| `entry.the-world` | /the-world | The ecosystem as a place: the floor, the stage, the lawn, the terrace — or the city |
| `entry.athlimax` | /athlimax | The marketplace: architecture and people, business-serious |
| `entry.symposium` | /symposium | The stage before the room fills — editorial, restrained |
| `entry.activ8` | /activ8 | Daylit, kinetic — the only page where imagery may be daylit |
| `entry.afterhours` | /afterhours | Mumbai at night from the terrace; the night register |
| `entry.connect` | /connect | Two people meeting — or nothing: the one page where a diagram outperforms a photograph |
| `entry.athlima20` | /athlima-20 | Portraiture leads: one athlete, one story |
| `entry.the-room` | /the-room | The room itself, or people in silhouette — never a recognisable, unconfirmed face |
| `entry.partner` | /partner | A partner space that feels like a world: architectural framing, premium materials |
| `entry.about` | /about | The institution: architecture, restraint, provenance |
| `entry.programme` | /programme | The 9th floor of The St. Regis Mumbai — the venue as a space |

All entries: viewport ratio, 3000 px, a single graded still (the film is the homepage's). Text sits on
the lower-left; keep it quiet there.

## 3a. STATE OF THE SLOTS — 16 September 2026

Twenty-four generated frames arrived in `05_MEDIA/photography/`. All twenty-four are placed. Every one
is below the brief's minimum on the long edge; nothing is upscaled — each is served at its own size, so
on a 2× desktop display the hero and the entries are soft. The pipeline prints this table on every build.

| Slots | Delivered | Brief minimum | Placed | Note |
|---|---|---|---|---|
| `home.hero` | 1672 × 941 | 3840 | **cropped to rows 0–66%** | The headline was baked into the lower-left third, where the site sets its own. **Re-deliver without type**, 3840 wide, lower-left quiet. |
| `home.athlima20` | 1915 × 821 | 3000 | **cropped to rows 29.5–100%** | ATHLIMA, PEOPLE · SPORT · PROGRESS and ONE FUTURE baked in above the athletes; the block sets its own line. **Re-deliver without type.** The 21:9 frame then crops the outermost athletes at desktop width. |
| `portal.athlimax` `.symposium` `.activ8` `.connect` `.athlima20` | 1672 × 941 | 1920 | as delivered | 87% of spec — marginal, fine on a phone. |
| `portal.afterhours` | — | 1920 | **empty** | The one slot not delivered. Keeps the black ground. |
| `doorway.*` (six) | 1915 × 821 | 2400 | as delivered | Delivered as `doorway.athlete.png`; renamed to the slot name `doorway.athletes`. |
| `entry.*` (eleven) | 1536 × 1024 | 3000 | as delivered | 51% of spec, and these fill the viewport behind the statement. Delivered as `entry.athlima-20.png`; renamed to `entry.athlima20`. |

**What re-delivery must fix, in order:** (1) the two frames with baked type; (2) size — 3840 for the hero,
3000 for the entries and `home.athlima20`; (3) the grade — `entry.programme` and `entry.about` are daylit
and bright against `imagery.md` §2 and §3 ("no flat daylight… controlled highlights"), and the nav needed a
second scrim to stay legible over them; (4) `portal.afterhours`; (5) the in-frame ATHLIMA signage and
slogans (PEOPLE · SPORT · PROGRESS, A BIGGER TOMORROW, STRONGER · BRIGHTER · MORE · HUMAN · TOMORROW,
IDEAS MOVE PEOPLE) are not the brand's marks or lines — small at the sizes served, but a re-shoot or
re-render should carry the real wordmark or none.

**Labelling (imagery.md §7.1):** the frames that depict ATHLIMA itself — the venue, a pavilion, a stage,
the room, the terrace, ATHLIMA signage — carry "Artist's impression" in the slot's corner: the five
portals except ATHLIMA 20, the business, athletes and infrastructure doorways, and every entry except
`/about` and `/athlima-20`. The city, the building, the athlete alone are not labelled (§7.3). The
doorway label appears with the image, at 40% on hover; if that reads oddly in use, the alternative is one
line in the footer covering all imagery — a change to `04_CONTENT/legal.md`, not made here.

**Alt text:** every frame is decorative behind type (empty alt) except `home.athlima20`, whose alt is
written in the registry and describes what is in the frame, not who. Owner to approve or rewrite.

**Model releases and licences (imagery.md §8):** none on file. Generated frames need no model release; the
licence terms of the generator used must be on file before launch (launch checklist T-14).

## 4. NOT PHOTOGRAPHY, BUT STILL B2

| Asset | Needed for | State |
|---|---|---|
| ATHLIMA wordmark and A device — the brand owner's vectors | every mark on the site | traced placeholders in use |
| ATHLIMAX, THE SYMPOSIUM, ACTIV8, AFTERHOURS lock-ups — vectors | portals, nav, IP pages | traced placeholders in use |
| **ATHLIMA CONNECT and ATHLIMA 20 lock-ups** | portals, nav, IP pages, `/athlima-20` | **no artwork exists; typeset** |
| ENARR and ENSPORT vectors, and a **dark-on-light ENSPORT** | provenance section, footer, press kit | raster cut-outs in use; ENSPORT invisible on white without a plate |
| The brand owner's icon set, if one exists | favicon, home screen | generated from the A |
| Author portraits (1:1, 800 px, real people, releases) | the Journal | none |
| The venue's own floor drawing and its nomenclature | `/programme` FloorPlan | not built until supplied (B1) |

## 5. WHAT THE PIPELINE DOES WITH EACH ASSET

A still goes either into `05_MEDIA/photography/` under its slot name — `web/scripts/build-media.ts` builds
the AVIF/WebP set, the blur placeholder and the manifest at every `dev`, `typecheck` and `build`, and
`npm run media:build` runs it alone — or into the Studio as a **Media slot** (slot name, image, focal
point, alt, credit), which appears on the site within the hour, or at once through the webhook, and wins
over the repository. A film goes to Mux; its MP4 rendition URL
(and the HLS URL) go into the same document beside the poster. The site serves AVIF/WebP at the right
size for the device from the focal point, loads the hero poster first and the film only after the page
has loaded, never downloads a loop that is not on screen, and shows posters only under reduced motion,
save-data or a 2g connection. No asset is ever resized, recoloured or cropped by hand in the build.
