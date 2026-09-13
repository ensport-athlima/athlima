# THE SIX EXPERIENCES
### Page content for ATHLIMAX · THE SYMPOSIUM · ACTIV8 · AFTERHOURS · ATHLIMA CONNECT · ATHLIMA 20

> **All six pages share one skeleton.** Differentiation comes from imagery, register and motion — never
> from restructuring the page. Six differently-structured IP pages would destroy the "one world" argument.

> **Brochure-sourced marking (decision D31).** Lines marked *brochure-sourced* below are the ones this
> repository already attributes to the ATHLIMA brochures — the pavilion, theme, zone, element and step
> tables, the Connect disclaimer, the ATHLIMA 20 philosophy and the evening flow. `[TO VERIFY]` The two
> brochure PDFs in `05_MEDIA/references/` are image-only and could not be text-checked in this pass; before
> launch, verify every marked line against its brochure page, verbatim, and un-mark anything that is not.
> Unmarked banned words found in the audit have been rewritten rather than marked.

**The shared skeleton:**
```
01 ENTRY          the mark, the line, the signature film
02 PROPOSITION    what this is, in one paragraph
03 COMPONENTS     the pavilions / themes / zones / steps / disciplines
04 FOR YOU        what it means, split by the audience this IP serves most
05 THE RAIL       the other five IPs
06 INVITATION     two CTAs
```

**As built (13 September 2026):** one template, `web/src/components/templates/IPPage.tsx`, six content
objects in `web/src/content/experiences.ts`, six thin routes. The entry is the page's one `100svh`; an
in-page functional CTA (`#themes`, `#zones`, `#evening`, `#how`, `#alert`) sits in the entry, a route CTA
in the invitation. The proposition is the pull line as headline with the paragraph beneath; the pull
quotes (Connect's reframe, ATHLIMA 20's philosophy) are set apart. Components are `IndexGrid`s (the
Symposium runs themes then formats; ATHLIMA 20 runs the twenty then the stages) or, for Connect, the
`SequenceRail` with the disclaimer verbatim beneath. `IPRail` closes every page. AFTERHOURS carries
`data-accent="dusk"`: markers, rules and the other five marks' accents go dusk-blue / one-colour; nav,
footer and buttons stay lime (D15). **Every `[TO VERIFY]` in this file is honoured by omission** — the
partner counts, the two-week lead, the lawn and the Astor Terrace, the 60ft, the evening flow (its day
and its recognition moment are unsettled, so the flow is not on the page; `#evening` anchors the six
elements), the Selection Council's name, ATHLIMA 20 NIGHT, the under-20 line, the opening month and the
unattributed quotation. **Decision A1 (no guest application):** the Symposium's and ACTIV8's emotional
CTAs are statements set as the invitation's headline, and the guest doorways are statements.

---

# 01 — ATHLIMAX
## `/athlimax` · THE MARKETPLACE
**Register:** confident, dense, business-serious. The most information-rich of the six.

### Entry
**Eyebrow:** `THE WORLD / ATHLIMAX`
**Mark:** ATHLIMAX
**Display:**
```
A CURATED
MARKETPLACE.
```
**Sub:** `CONVERSATIONS. PARTNERSHIPS. REAL-WORLD IMPACT.` *(the locked §4 line — brochure-sourced)*

### Proposition
> ATHLIMAX is a curated, invitation-led marketplace bringing together founding partners across six
> strategic pavilions. It brings global and Indian leaders together to showcase innovations, forge
> partnerships and accelerate the business, infrastructure and cultural future of sport.

**Pull line:**
```
IDEAS MEET CAPITAL.
SOLUTIONS FIND SCALE.
SPORT MOVES FORWARD.
```

### Components — the six pavilions *(brochure-sourced, revised brochure p09)*
`[TO VERIFY — B1 — DECISION REQUIRED]` The source material carries two commercial architectures: six pavilions
with 20 founding partners (revised brochure) and 22 spaces across 12 categories (prospectus). **This page
can only state one.** See `01_STRATEGY/positioning.md` §8.1. Partner counts below are placeholders until
that decision is made.

| # | Pavilion | Line | Covers |
|---|---|---|---|
| 01 | PERFORMANCE & EQUIPMENT | Human potential. At a higher level. | Next-generation gear, materials, apparel and performance technology for every athlete. |
| 02 | HEALTH, WELLNESS & RECOVERY | A stronger, longer India. | Solutions for physical, mental and nutritional wellbeing across the sporting ecosystem. |
| 03 | TECHNOLOGY & INNOVATION | Solving for what's next. | AI, data, and the platforms and environments reshaping how sport is played, watched and managed. |
| 04 | INFRASTRUCTURE & ACTIVE CITIES | Built environments for active lives. | Stadiums, training centres, smart facilities and urban ecosystems that make sport more accessible and inclusive. |
| 05 | MEDIA, CONTENT & ENTERTAINMENT | Stories that move a nation. | Content, broadcasting, new media and cultural IP that bring sport to new audiences. |
| 06 | INVESTMENT, POLICY & IMPACT | Capital for a brighter tomorrow. | Investment platforms, advisory, policy initiatives and models to enable a stronger, more sustainable sporting ecosystem. |

**Principle line:**
```
LIMITED. CURATED. COMPLEMENTARY.
```

### For you
**If you are a brand or a business:** the offer is not a space. It is a territory. → `/partner`
**If you are a guest:** this is where you find the companies solving the problem you have. *(a statement — there is nothing to apply to, decision A1)*

**Closing statement:**
```
THE IMPACT OF
A CONVERSATION.
```
> ATHLIMAX creates the space for ideas to meet decision-makers — turning conversations into partnerships,
> and partnerships into real-world impact across sport, business and society.

### CTAs
`BUILD INSIDE THE MARKETPLACE` · `BECOME A FOUNDING PARTNER` → `/partner`

---

# 02 — THE SYMPOSIUM
## `/symposium` · THE IDEAS
**Register:** the most editorial and restrained of the six. Closest to a serious journal.

### Entry
**Eyebrow:** `THE WORLD / THE SYMPOSIUM`
**Mark:** THE SYMPOSIUM *(lime accent on the final M — `05_MEDIA/logos/the-symposium.jpg`, vector required)*
**Display:** *(the locked §4 line)*
```
A HIGHER
CONVERSATION.
```
**Sub:** `IDEAS THAT MOVE INDIA.`

### Proposition
> The Symposium brings together global and Indian leaders, policymakers, athletes, investors,
> technologists and cultural voices to discuss the ideas, systems and collaborations that will shape the
> future of sport in India and beyond.
>
> Every session has a reason to exist.

### Components — the six themes *(brochure-sourced)*
| # | Theme | Covers |
|---|---|---|
| 01 | THE NEXT GENERATION | Talent, pathways and high-performance ecosystems. |
| 02 | INFRASTRUCTURE & CITIES | Stadiums, grassroots, urban sport and active living. |
| 03 | TECHNOLOGY & INNOVATION | AI, data, media, fan engagement and the future of sport. |
| 04 | INVESTMENT & ECONOMICS | Capital, business models and the India opportunity. |
| 05 | POLICY & GOVERNANCE | Regulation, institutions and a stronger sporting nation. |
| 06 | CULTURE & IMPACT | Sport as a force for social change, identity and unity. |

### The six formats *(brochure-sourced)*
| Format | Line |
|---|---|
| KEYNOTES | Bold ideas. New perspectives. |
| PANEL DISCUSSIONS | Diverse voices. Actionable dialogue. |
| ROUNDTABLES | Closed-door, high-value conversations. |
| FIRESIDE CHATS | Candid. Insightful. Inspiring. |
| CASE STUDIES | Real examples. Real learnings. |
| SPECIAL SESSIONS | Extended sessions on a single critical theme. |

### Voices
Six categories: Athletes · Business Leaders · Policymakers · Global Experts · Investors · Cultural Voices.

> `[TO VERIFY]` **No individual speaker is named on this page until they have confirmed in writing.**
> The page runs on themes, formats and voice categories. It is complete without names. See
> `01_STRATEGY/positioning.md` §6.

**Closing quote** `[TO VERIFY — SOURCE UNKNOWN]`
> "Sport doesn't just reflect society. It has the power to shape it."
>
> This line appears in the brochure without attribution. **It does not ship until its author is identified
> and has approved the use, or until it is rewritten as ATHLIMA's own unattributed statement.** An
> unattributed quotation on an institutional site is a liability, not a flourish.

### CTAs
`SHAPE THE CONVERSATION` · `SEE THE THEMES`

---

# 03 — ACTIV8
## `/activ8` · THE EXPERIENCE
**Register:** the most kinetic. The only page where motion may be fast and imagery may be daylit.

### Entry
**Eyebrow:** `THE WORLD / ACTIV8`
**Mark:** ACTIV8
**Display:** *(the locked §4 line — brochure-sourced)*
```
PLAY BEYOND
THE GAME.
```

### Proposition
> ACTIV8 is ATHLIMA's outdoor, physical experience — where performance, play, wellness and community
> come together. From elite showcases to open participation, ACTIV8 brings people, brands and technology
> into motion.

**Pull line:**
```
HIGHER PERFORMANCE.
A HEALTHIER, STRONGER INDIA.
```

### Components — the six zones *(brochure-sourced)*
| # | Zone | Line |
|---|---|---|
| 01 | PERFORMANCE | Athlete showcases. Training. Masterclasses. |
| 02 | PLAY | Open play. Tournaments. Community engagement. |
| 03 | RECOVERY | Wellness. Mindfulness. A longer, healthier you. |
| 04 | TECHNOLOGY | Innovation for human performance. |
| 05 | COMMUNITY | Sport for all. Inclusion. Impact. |
| 06 | LIVE EXPERIENCES | Competitions. Demonstrations. Activations. |

### For you
**If you are a brand:** this is where a product stops being described and starts being felt.
**If you are a guest:** this is where the day stops being a conversation.

### Location note
`[TO VERIFY]` ACTIV8 occupies the outdoor lawn on the ninth floor at The St. Regis, adjacent to the Astor
Terrace. Confirm the exact space names against the venue's own nomenclature before publishing.

### CTAs
`PLAY BEYOND THE GAME` · `SEE THE EXPERIENCE`

---

# 04 — AFTERHOURS
## `/afterhours` · THE CULTURE
**Register:** the night register. **The only page where lime gives way to the dusk gradient.**
See `03_DESIGN_SYSTEM/colour.md` §5 — dusk violet and indigo fail AA for body text; anything under 24px
uses `--dusk-blue`.

### Entry
**Eyebrow:** `THE WORLD / AFTERHOURS`
**Mark:** AFTERHOURS *(gradient wordmark — the one gradient on the site)*
**Display:** *(the locked §4 line)*
```
WHERE SPORT
MEETS CULTURE.
```

### Proposition
> As the day transitions, AFTERHOURS is ATHLIMA's curated evening experience — bringing together sport,
> culture, music, cuisine and influential people in an atmosphere designed for deeper conversations.

**Pull line:**
```
BIGGER CONVERSATIONS.
A BRIGHTER TOMORROW.
```

### The signature — THE RUNWAY
> `[TO VERIFY]` Athleisure and performance fashion take centre stage in a signature 60ft show. Confirm the
> runway dimension against the production plan before publishing a figure.

### Components — the six elements *(brochure-sourced — including "Networking", which is the brochure's
name for the element; "networking event" remains banned as a description of ATHLIMA)*
| # | Element | Line |
|---|---|---|
| 01 | DINING | Curated culinary experiences. |
| 02 | COCKTAILS | Unwind. Connect. Celebrate. |
| 03 | MUSIC | Live sets. Real artists. The atmosphere of the night. |
| 04 | CULTURE | Fashion. Art. Film. Expression beyond sport. |
| 05 | NETWORKING | Real conversations. Lasting relationships. |
| 06 | ENTERTAINMENT | Surprises. Performances. Moments that stay. |

### The evening flow *(brochure-sourced)*
| Time | Moment |
|---|---|
| 6:30 PM | COCKTAIL RECEPTION — Champagne. Networking. Sunset views. |
| 7:00 PM | OPENING PRODUCTION — An audio-visual production. Music. Light. Motion. |
| 7:15 PM | ATHLEISURE COLLECTIONS — Premium performance brands. Designer collaborations. Athletes. Models. |
| 8:00 PM | PERFORMANCE SHOWCASE — Movement. Dance. Freerunning. Gymnastics. Contemporary sport. |
| 8:30 PM | ATHLIMA RECOGNITION — Industry honours. Innovation. Leadership. Impact. |
| 9:00 PM | CLOSING CELEBRATION — Music. Connections. Private networking. |

`[TO VERIFY]` Timings are indicative and subject to final confirmation. Label them as such on the page.
`[TO VERIFY]` Which day this flow belongs to, and how "ATHLIMA RECOGNITION" at 8:30 PM relates to
"ATHLIMA 20 NIGHT — Recognition on Day 2" below: one recognition moment or two? The page cannot describe
both until this is settled.

**Closing:**
```
THE DAY INSPIRES.
THE NIGHT CELEBRATES.
```

### CTAs
`THE DAY INSPIRES. THE NIGHT CELEBRATES.` · `SEE THE EVENING`
**Note:** the CTA buttons themselves stay lime. The conversion path belongs to ATHLIMA, not the sub-brand.

---

# 05 — ATHLIMA CONNECT
## `/connect` · THE RELATIONSHIPS
**Register:** precise, mechanical, reassuring. The one IP where a diagram outperforms a photograph.

### Entry
**Eyebrow:** `THE WORLD / ATHLIMA CONNECT`
**Display:**
```
THE CONVERSATION
STARTS BEFORE
ATHLIMA.
```
**Sub:** `CONNECT BEFORE YOU ARRIVE. COLLABORATE WHEN YOU GET THERE.` *(the locked §4 line — decision D16)*

**Who it is for:** ATHLIMA Connect is a **Founding Partner benefit** (decision D20). It is described to
partners, and the page's audience is partners. It is not offered to guests, and no guest-facing page
promises pre-arranged introductions.

### Proposition
> `[TO VERIFY]` Two weeks before ATHLIMA, Founding Partners begin relevant conversations ahead of the
> event through a curated programme of one-to-one introductions with selected guests.
>
> The two-week lead time is an operational commitment to partners. Confirm it is deliverable before it is
> published as a promise.

**The core reframe — set as a pull quote:** *(brochure-sourced — "attendees" is quoted here as the word
ATHLIMA refuses, which is the one context it is permitted)*
> We don't say: *here are 350 attendees.*
> We ask: **who do you actually need to meet?**

### Components — the four steps *(brochure-sourced)*
| # | Step | Headline | Detail |
|---|---|---|---|
| 01 | IDENTIFY | Tell us who you want to meet. | Founding Partners share their business objectives, areas of interest and preferred guest profiles. |
| 02 | MATCH | We identify relevant conversations. | The ATHLIMA team reviews the participating guest ecosystem and identifies potential matches based on relevance. |
| 03 | PRE-BLOCK | Meetings are arranged before ATHLIMA. | Selected one-to-one meetings are pre-blocked ahead of ATHLIMA, allowing both sides to prepare for a focused conversation. |
| 04 | ARRIVE READY | Come to ATHLIMA with conversations already in motion. | The event becomes the continuation of relationships that have already begun. |

### The mandatory disclaimer *(brochure-sourced — survives verbatim)*
> **This must appear on the page, verbatim, wherever Connect is described:**
>
> Meetings are subject to guest confirmation, availability and mutual suitability. ATHLIMA does not
> guarantee meetings with any specific individual or organisation.

### Guest profiles available
Developers · Institutional buyers · Government & authorities · Clubs & operators · Investors & business
leaders · Sporting leaders

**Closing:**
```
CONNECT BEFORE YOU ARRIVE.
COLLABORATE WHEN YOU GET THERE.
```

### CTAs
`CONNECT BEFORE YOU ARRIVE` · `HOW CONNECT WORKS`
**Cross-link, required:** a prominent inline route from `/partner` to this page. See
`user-journeys.md`, Journey 01 — this is where the commercial audience converts.

---

# 06 — ATHLIMA 20
## `/athlima-20` · THE NEXT GENERATION
**Register:** the most human and most emotional of the six. The only page where portraiture leads.

### Entry
**Eyebrow:** `THE WORLD / ATHLIMA 20`
**Mark:** ATHLIMA 20
**Display:**
```
TWENTY ATHLETES.
TWENTY SPORTS.
ONE FUTURE.
```
**Sub:** `TOMORROW PLAYS HERE.` *(the locked §4 line — brochure-sourced)*

### Eligibility *(stated on the page — decision D4)*
`[TO VERIFY]` **Athletes must be under 20 on 14 December 2026.** This criterion appears here, as a
sentence on the page beside the disciplines, not only in form helper text. Most nominees are therefore
minors — which is why the nomination form is v2 and gated on DPDP legal review.

### Proposition
> ATHLIMA 20 celebrates India's most exceptional emerging athletes — twenty individuals across twenty
> sporting disciplines who embody the nation's next chapter in sport. Through storytelling, recognition
> and visibility, ATHLIMA 20 shines a light on the people who will inspire a stronger, more active and
> more united India.

**The philosophy — set apart, the emotional centre of the site:** *(brochure-sourced)*
> Do not wait until they become champions to tell their story.
> Tell it while they are becoming one.

**Pull line:**
```
MORE ATHLETES.
MORE OPPORTUNITIES.
A STRONGER INDIA.
```

### Selection criteria
Performance · Potential · Character · Capacity to inspire

**This is not an awards list.** Selection is independent.

### Components — the twenty disciplines *(brochure-sourced)*
```
01 ATHLETICS      02 SWIMMING       03 FOOTBALL       04 CRICKET        05 HOCKEY
06 TENNIS         07 BADMINTON      08 TABLE TENNIS   09 BOXING         10 WRESTLING
11 WEIGHTLIFTING  12 SHOOTING       13 ARCHERY        14 GYMNASTICS     15 CYCLING
16 ROWING         17 MARTIAL ARTS   18 EQUESTRIAN     19 SURFING        20 PARA SPORT
```

### How it works
| Stage | Detail |
|---|---|
| NATIONAL NOMINATION | Through federations, academies and sporting networks. |
| INDEPENDENT SELECTION | An independent Selection Council. |
| THE TWENTY | Twenty athletes across twenty disciplines. |
| STORYTELLING | Portraits and films. One person. One story. |
| THE 20-DAY REVEAL | One athlete revealed each day. |
| ATHLIMA 20 NIGHT | `[TO VERIFY]` Recognition on Day 2 of ATHLIMA. Gated on the programme being confirmed to session level. Note the name: **ATHLIMA 20**, always — never *20 Under 20*. |
| THE CLASS | An annual class, building a cumulative community. |

`[TO VERIFY]` The Selection Council and any founding selection partner are not named until confirmed.

**Closing:**
```
WE BUILD THE ECOSYSTEM TODAY.
WE CELEBRATE WHO WILL BUILD IT TOMORROW.
```
> ATHLIMA 20 is more than a showcase — it is a commitment. A commitment to India's emerging talent, to
> equal opportunity across disciplines, and to a future where sport creates stronger individuals,
> communities and a nation.

### The three states *(decision D4)*
The page carries a CMS enum, never a boolean. **v1 ships `pre-window` only.**

| State | What the page shows | Functional CTA |
|---|---|---|
| `pre-window` | Everything above, plus the opening month `[TO VERIFY]` and an `EmailCapture` (`ctas.md` §4a) | `TELL ME WHEN NOMINATIONS OPEN` → `#alert` |
| `open` *(v2)* | The nomination form on `/athlima-20/nominate` | `NOMINATE AN ATHLETE` |
| `post-selection` | The class — confirmed, consenting athletes only; `PortraitCard` renders nothing otherwise | `SEE THE 2026 CLASS` → `#class` |

### CTAs
Emotional: `TOMORROW PLAYS HERE` — a statement set as display type, not a link. Functional: per state,
above.

### Performance note
**This page carries the strictest performance budget on the site.** Its audience — coaches, academies,
young athletes — is on mid-range Android devices and mobile data. Test it at 3G throttle on a real device
before launch. See `user-journeys.md`, Journey 02.
