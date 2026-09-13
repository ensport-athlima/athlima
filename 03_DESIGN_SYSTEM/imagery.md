# IMAGERY

> The brochure's own direction: **THE FUTURE OF SPORT, NOT A SPORTS EVENT.**
> That single line rules out roughly 95% of available sports photography.

---

## 1. THE VISUAL WORLD

Four subjects. Everything on the site is one of them.

### 01 — THE ATHLETE, CINEMATICALLY
Not action photography. Not celebration. **Effort, focus, preparation, recovery, breath.**
Controlled light, deep shadow, isolated subject. A single athlete against darkness beats a team celebrating.
Indian athletes, real disciplines, real bodies — including para athletes, from the outset, not as a
category.

### 02 — MUMBAI, AT NIGHT
The Bandra–Worli Sea Link. The skyline from the water. The Coastal Road. Monsoon reflections on asphalt.
Sodium and LED light. The scale and density of the place.
**Specific, contemporary, recognisable Mumbai.** Not a generic Asian city skyline.

### 03 — ARCHITECTURE AND INFRASTRUCTURE
Stadiums, training facilities, structural form, scale, materiality. Concrete, steel, glass, light.
Often empty. **An empty stadium at night says more about the future of sport than a full one does.**
The ATHLIMA A read as architecture rather than as a logo.

### 04 — PEOPLE IN CONVERSATION
The room. Two or three people talking, seriously, in good light. Business attire in a warm, low-lit,
premium interior. **The moment before or after a decision, not a posed handshake.**
Real diversity of age, gender and sector, because that is literally the proposition.

---

## 2. THE GRADE

Every image on the site is graded to one look, or the palette fractures at the first full-bleed photo.

| Property | Direction |
|---|---|
| Blacks | Deep, but not crushed. Detail survives in shadow. |
| Highlights | Controlled. No blown whites. |
| Saturation | Low. Roughly −20 to −35% from natural. **Cinematically desaturated, not black and white.** |
| Contrast | High, achieved with the tone curve, not the contrast slider |
| Colour temperature | Cool overall, with warm practical light sources permitted and encouraged |
| Grain | A fine, consistent film grain across every image. This is a signature and it must be consistent. |
| Lime in image | **Only as a real light source in the frame** — signage, an LED edge, a screen. Never a grade, never a filter, never an overlay. |

Build a single grading LUT and apply it to every asset. Consistency of grade is more important than the
quality of any individual photograph.

---

## 3. WHAT IS FORBIDDEN

Instant rejections. No discussion.

- ❌ Stock photography of any kind that looks like stock photography
- ❌ Smiling people in gyms; thumbs up; high fives; fists raised at sunrise
- ❌ Posed handshakes; people pointing at laptops; conference-room clip-art energy
- ❌ Generic "diverse business team" imagery
- ❌ Flat daylight; midday sun; unmodified natural light
- ❌ Motivational-poster compositions
- ❌ Any image where the subject is looking at the camera and smiling
- ❌ AI-generated imagery presented as photography **once real assets exist** — see §7
- ❌ Tricolour, chakra, temple, or folk-craft motifs
- ❌ Neon-green colour grading
- ❌ Images of crowds, which contradict the entire "curated, not crowded" proposition

---

## 4. CROPPING AND COMPOSITION

- **Every image is art-directed.** Centre-cropping by default is a bug.
- Ratios are consistent *within a set*. A rail of portraits is one ratio, not five.
- Standard ratios: `21:9` full bleed · `16:9` standard · `4:5` portrait · `1:1` index items ·
  `3:2` editorial.
- Extreme crops are encouraged where they serve the composition — a shoulder, a hand, a stride — but the
  same crop logic applies across a set.
- **Text over image always sits on a designed scrim** — a black gradient, 0 to 70%, baked into the
  component. Contrast is achieved against the scrim, never hoped for against the photograph.
- Nothing important is cropped out at any breakpoint. Every art-directed image specifies its focal point,
  and `next/image` respects it.

---

## 5. VIDEO

### The three formats

**HERO FILM — 15–30 seconds**
One per site, possibly one per major IP. Establishes the ATHLIMA world. **Not a montage of stock clips.**
A directed film with a point of view: the city, the athletes, the room, the architecture, the light.
Delivered through Mux, adaptive bitrate, with a chosen poster frame that matches frame one exactly.

**MICRO-FILMS — 5–8 second loops**
The living texture of the site. Used as portal backgrounds, section transitions, and ambient detail.

The shot list, taken from the strategy work and worth commissioning as a set:
> An athlete breathing. Shoes hitting the floor. Lights switching on in an empty venue. Two people in
> conversation. A card exchanged. A crowd entering. The camera moving through a space. Ice and recovery.
> A training rep. Mumbai at night. Rain on glass. A whiteboard. A stadium seat. The Sea Link.

Each: ≤ 1.5 MB, AV1/WebM with an H.264 MP4 fallback, `muted playsinline loop preload="none"`,
`IntersectionObserver`-gated. **Off-screen video does not download.**

**PEOPLE FILMS — 20 seconds**
One person, one idea, direct to camera or in conversation. The ATHLIMA signature content format, and the
backbone of ATHLIMA 20 and the Journal. Captioned, always.

### Video rules
- The hero **never** loads a video file before LCP. The LCP element is the poster plus the headline.
- Maximum **two** videos playing on any screen.
- Everything scrolled out of view pauses.
- `navigator.connection.saveData` and `effectiveType` of `2g`/`slow-2g` → poster frames only.
- Every video element has an explicit `aspect-ratio`. Zero CLS from media.
- Anything with narration or dialogue has captions.
- The hero film has a pause control. Content that moves for longer than five seconds must be stoppable.

---

## 6. THE ATHLIMA A AS AN IMAGE DEVICE

The A appears throughout the brochure as an architectural form — a light beam, a doorway, a structure, a
gateway. It is the strongest visual device the brand has.

**Permitted:**
- As architecture: a structural form in a rendered or photographed environment
- As light: a beam, a projection, an LED form — where it exists physically in the scene
- As an aperture: a mask through which content is revealed
- As a drawn form: SVG strokes, in the entry sequence and in section transitions

**Forbidden:**
- As a repeating background pattern
- Watermarked over photography
- As a bullet point or a list marker
- With a glow behind it
- Rotated, skewed, or distorted
- More than **once per viewport**

---

## 7. THE AI IMAGERY QUESTION — IMPORTANT

The existing brochure imagery is largely AI-generated. It is well-executed and it establishes the visual
world convincingly. For a proposition document, that is legitimate.

**For a public website, three rules apply:**

1. **Anything depicting ATHLIMA itself — the venue, the room, the guests, the pavilions — must be labelled
   as an artist's impression, or replaced with real photography.** A rendered image of a crowded ATHLIMA
   floor presented as documentation of an event that has not happened yet is a credibility risk with
   exactly the sceptical, institutional audience ATHLIMA needs most.

2. **No AI-generated image of a person is used in a way that implies they are a real ATHLIMA participant.**
   This is both an honesty issue and, given the audience, a reputational one.

3. **Atmospheric and architectural imagery may be generated**, provided it is consistent with the grade
   and does not depict a specific claim.

**The recommendation:** commission a real shoot. Mumbai at night, an empty venue, athletes, and a set of
people-in-conversation frames. It is the single highest-return spend on the entire project, and it is what
turns a well-designed site into a credible institution.

`[TO VERIFY — DECISION REQUIRED]` Photography and film budget and schedule. This gates Phase 7 of the
build and it has a long lead time. Decide it early.

---

## 8. THE ASSET PIPELINE

| Stage | Requirement |
|---|---|
| Delivery | 3000px on the long edge, sRGB, 16-bit where available |
| Grade | The ATHLIMA LUT applied. Every asset. No exceptions. |
| Optimisation | AVIF primary, WebP fallback, generated by `next/image` |
| Naming | `athlima-[subject]-[descriptor]-[nn].jpg`, lowercase, hyphenated |
| Alt text | Written by a human at delivery, stored in the CMS. Never the filename. |
| Focal point | Set per image in the CMS so responsive crops never decapitate the subject. |
| Rights | Every asset has a signed licence or release on file **before** it ships. Model releases for every recognisable person. |
| Repo | **No source files in git.** Nothing over 500KB in the repository. Assets live in the CMS and on the CDN. |
