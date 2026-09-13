# ATHLIMA — THE DIGITAL EXPERIENCE SYSTEM

**India's Festival of Sport, Business & Performance**
14–15 December 2026 · The St. Regis Mumbai
An IP of ENSPORT Ventures Pvt. Ltd., within The ENARR Group

---

## WHAT THIS IS

This is not a folder of notes. It is the **source of truth** for the ATHLIMA website — the strategy, the
information architecture, the design system, every word of content, the build rules and the QA standards.

It exists for one reason: **Claude Code only knows what is in its context window.** Anything not written
down here will be invented, differently, every time. This repository is what makes the difference between
a considered digital experience and a beautiful template.

**Start with `08_OPERATIONS/claude-code-operating-manual.md`.** Everything else is material; that file is
method.

---

## HOW TO USE IT

```bash
# 1. Put this folder at the root of your project
mkdir -p ~/Projects/athlima
# unzip so that CLAUDE.md sits at ~/Projects/athlima/CLAUDE.md

cd ~/Projects/athlima
git init && git add -A && git commit -m "ATHLIMA Digital Experience System"

# 2. Open Claude Code
claude
/model opus

# 3. Load the brain — the highest-value prompt in the whole system
```
> Read CLAUDE.md, then read every file in 01_STRATEGY/, 02_INFORMATION_ARCHITECTURE/,
> 03_DESIGN_SYSTEM/, 04_CONTENT/, 06_BUILD/ and 07_QA/. Do not write any code.
>
> Then give me: (1) a one-page summary in your own words of what ATHLIMA is and what the website must
> achieve; (2) every internal contradiction, ambiguity or gap you found, with file and line;
> (3) the five outstanding decisions that would most change the build. Rank by consequence. Do not be
> diplomatic.

Fix what it finds. Commit. Then follow the phase sequence in the operating manual.

---

## THE STRUCTURE

```
CLAUDE.md                          THE CONSTITUTION — governs everything, read every session
00_README.md                       this file

01_STRATEGY/                       what ATHLIMA is and what the site must achieve
├── website-thesis.md              ★ the parent document — read first
├── positioning.md                 ★ §6 is the claims discipline. The highest-risk rule on the project.
├── brand-strategy.md              brand idea, architecture, the six IPs, the India question
├── audiences.md                   the four groups, the six doorways
├── brand-pillars.md               BUILD · EQUIP · ENABLE · PERFORM · GOVERN as a real taxonomy
├── digital-strategy.md            the three surfaces, the content engine, the year-round model
└── conversion-strategy.md         CTA architecture, the three conversion flows, friction discipline

02_INFORMATION_ARCHITECTURE/
├── sitemap.md                     35 routes, and the routes we deliberately do not have
├── navigation.md                  four items and one permanent CTA
├── page-hierarchy.md              page tiers, the universal skeleton, the crescendo problem
├── user-journeys.md               ★ six real people, six real paths, seven build consequences
└── interaction-map.md             the four signature interactions and the motion budget

03_DESIGN_SYSTEM/
├── design-principles.md           ★ seven principles and four tests
├── colour.md                      ★ tokens with verified WCAG ratios, and the forbidden pairings
├── typography.md                  the type system, the scale, the display rules
├── grid.md                        12 columns, six standard layouts
├── spacing.md                     the 4px scale and the negative-space principle
├── motion.md                      easing and duration tokens, the standard motions, reduced motion
├── imagery.md                     the visual world, the grade, and the AI-imagery policy
├── iconography.md                 line icons, the numeral device, the technical devices
└── components.md                  ★ the complete component inventory — 19 blocks plus layout, forms, Journal and states; nothing else

04_CONTENT/
├── voice-and-tone.md              ★ five rules and the banned word list
├── ctas.md                        every CTA string and every piece of form microcopy
├── homepage.md                    ★★ the nine-screen script — copy, media, motion, CTAs, exit intent
├── the-world.md                   ★ the second Tier-1 page — six sections
├── experiences.md                 the six IP pages
├── people.md                      /the-room, /about, and the claims discipline in practice
├── opportunities.md               the partner pages and the six audience doorways
├── journal.md                     the content engine and its launch requirement
├── programme.md                   /programme — the two days, and the floor
├── apply.md                       /apply, /apply/received, /apply/declined
├── contact.md                     /contact — the general route and the institutional route
├── press.md                       /press — fact sheet, boilerplate, assets, contact
└── legal.md                       /legal/privacy, /legal/terms, /legal/cookies

05_MEDIA/                          logos, the two brochures, the floor plan, and the asset rules
06_BUILD/                          tech stack, architecture, component rules, responsive, a11y, SEO, perf
07_QA/                             visual, content, responsive, and the launch checklist
08_OPERATIONS/
├── claude-code-operating-manual.md ★★ START HERE — the method, the phases, the exact prompts
├── decisions-2026-09-13.md        ★ BINDING — the Phase 0 resolutions (Part 1) and the five blocked decisions (Part 2)
├── reconciliation-log.md          two audit rounds: what was found, what was resolved, what remained
├── v2-backlog.md                  what was deliberately deferred, and its gates
└── post-launch-log.md             the standing agenda for every post-launch review
```

★ = read before your first build session · ★★ = read before you do anything

---

## THE FIVE THINGS THAT MATTER MOST

**1. The claims discipline.** `01_STRATEGY/positioning.md` §6. No name, no logo, no statistic on the
public site without written confirmation and a source. This outranks every other rule, because one
federation president discovering they are listed at an event they never agreed to attend does more damage
than a mediocre website ever could.

**2. Lime is a signal, not a surface.** More than three lime elements in the content of a viewport and the
system has broken — the section marker and the permanent APPLY are chrome and do not count. Black + neon green is the easiest wrong reading of this brand and it ends in a crypto landing page.

**3. Fast is part of the design.** LCP ≤ 2.0s on a mid-range Android at 4G. A cinematic site that takes six
seconds is not premium; it is slow.

**4. One screen at a time.** Never build a page in one pass. Screen → screenshot → QA → fix → commit →
next. This is the single biggest determinant of quality.

**5. When it looks generic, the brief was silent.** Go and fix the brief, then rebuild. Do not patch the
code and move on — the same gap will produce the same generic output on the next page.

---

## THE OPEN DECISIONS

Five things this system cannot decide for you. They are `08_OPERATIONS/decisions-2026-09-13.md` Part 2
(B1–B5), mirrored in `CLAUDE.md` Part IX, and flagged in place with `[TO VERIFY]`. The three that gate
the build:

- **20 partners / six pavilions, or 22 spaces / 12 categories — and 350 or 500+?** The two brochures
  disagree. One commercial meeting settles both (B1).
- **Photography and film, and vector artwork.** Commission a real shoot or design for a type-only launch;
  either way, every mark and the A device are needed as SVG before screen 01 can be built (B2).
- **ENARR / ENSPORT approval** of the provenance copy and the footer entity line (B3).

---

## REALISTIC TIMELINE

| Phase | Duration |
|---|---|
| Load the brain, reconcile the brief | half a day |
| Lock strategy, design system, content | 2–3 days |
| Scaffold + homepage | 2–3 days |
| Remaining pages | 5–8 days |
| Media integration | gated on the shoot |
| QA and hardening | 2 days |
| Launch | 1 day |

**Three to four focused weeks**, and most of the calendar time is photography, film and getting real
people to confirm their own bios — not code. The system can be finished in a day. The site cannot.

---

*Built as the source of truth for the ATHLIMA website. Every claim in this repository traces back to the
two brochures in `05_MEDIA/references/` or is tagged `[TO VERIFY]`. Where a brief file and
`08_OPERATIONS/decisions-2026-09-13.md` disagree, the decisions file wins and the brief file is wrong.*
