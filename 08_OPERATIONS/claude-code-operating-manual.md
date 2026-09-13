# THE CLAUDE CODE OPERATING MANUAL
### How to actually build the ATHLIMA website without it turning into a template

> This is the document you read first, and the one you keep open beside the terminal.
> Everything else in this repository is *material*. This is *method*.

---

## PART 0 — THE ONE IDEA

You are not "using AI to build a website."

You are running a digital agency where you are the Creative Director and Claude Code is a very fast,
very literal team of ten that has **no memory, no taste of its own, and infinite willingness to produce
something plausible**. Plausible is the enemy. Plausible is how you get a beautiful template.

Three rules govern everything below:

1. **Claude only knows what is in its context window.** The repository *is* its brief. If a decision is
   not written down, it will be invented — differently, every time.
2. **Context degrades.** A five-hour session produces worse work at hour five than at hour one. You will
   deliberately clear and reload context between phases. This feels wasteful. It is the single highest-
   leverage habit in this manual.
3. **Plan before code, always.** Every non-trivial step goes through plan mode first. You read the plan.
   You reject bad plans. Only then does anything get written.

---

## PART 1 — SETUP (30 minutes, once)

### 1.1 Install

```bash
# Node 20+ required
node --version

# Install Claude Code
npm install -g @anthropic-ai/claude-code
# (or the native installer: curl -fsSL https://claude.ai/install.sh | bash)

claude --version
```

Log in with the account carrying your Max subscription.

> Run `/help` inside Claude Code once and skim it. Commands and shortcuts change between releases;
> where this manual and `/help` disagree, `/help` is right.

### 1.2 Create the repository

Unzip this system into a folder, then:

```bash
mkdir -p ~/Projects/athlima
cd ~/Projects/athlima

# put the ATHLIMA-WEBSITE contents at the root of this folder
# so CLAUDE.md sits at ~/Projects/athlima/CLAUDE.md

git init
git add -A
git commit -m "ATHLIMA Digital Experience System — brief repository"
```

### 1.3 The repository shape

**One repository. Brief and code together.** This matters — it is what lets Claude read the strategy in
the same breath as the code it is writing.

```
athlima/
├── CLAUDE.md                    ← the constitution. Auto-loaded every session.
├── 00_README.md
├── 01_STRATEGY/
├── 02_INFORMATION_ARCHITECTURE/
├── 03_DESIGN_SYSTEM/
├── 04_CONTENT/
├── 05_MEDIA/
├── 06_BUILD/
├── 07_QA/
├── 08_OPERATIONS/
├── .claude/
│   ├── commands/                ← your custom slash commands
│   ├── agents/                  ← your specialist subagents
│   └── settings.json
└── web/                         ← the Next.js application (created in Phase 4)
```

### 1.4 Start Claude Code

```bash
cd ~/Projects/athlima
claude
```

First thing, every session:

```
/model opus
```

Use Opus for strategy, design decisions, copy and architecture. Switch to Sonnet for mechanical
implementation once the pattern is established — you will get through far more of your usage that way.
`/model` mid-session is fine.

---

## PART 2 — THE FOUR MODES YOU WILL LIVE IN

| Mode | How | When |
|---|---|---|
| **Plan mode** | `Shift+Tab` twice | Before every page, every system, every refactor. Claude researches and proposes; writes nothing. |
| **Normal** | default | Reviewed, bounded execution. |
| **Auto-accept edits** | `Shift+Tab` once | Only for mechanical work you have already approved the plan for. Never for design or copy. |
| **Fresh context** | `/clear` | Between phases. Always. |

**`/clear` vs `/compact`:** `/compact` summarises and keeps going — use it mid-task when you are deep in
something and running long. `/clear` wipes and reloads from CLAUDE.md — use it between phases. Default to
`/clear`. A summarised context has quietly lost the specific instruction you gave two hours ago.

**`Esc`** interrupts. **`Esc Esc`** rewinds to an earlier point in the conversation. Use `Esc` early and
often — watching Claude build the wrong thing to completion out of politeness is pure waste.

---

## PART 3 — THE PHASE SEQUENCE

Do not skip. Do not reorder. Each phase ends with a commit and a `/clear`.

```
PHASE 0   Load the brain          (30 min)
PHASE 1   Lock the strategy       (2–3 h)
PHASE 2   Lock the design system  (2–3 h)
PHASE 3   Lock the content        (3–4 h)
PHASE 4   Scaffold the build      (1 h)
PHASE 5   Build the homepage      (4–6 h)   ← the reference implementation
PHASE 6   Build the remaining pages (per page, 2–3 h)
PHASE 7   Media integration       (varies — gated on the film shoot)
PHASE 8   QA and hardening        (2 days)
PHASE 9   Launch                  (1 day)
```

Realistically this is **three to four focused weeks**, not one day — and most of the calendar time is
photography, film and getting real people to confirm their own bios, not code. Anyone who tells you a site
at this level ships in a day is describing a template.

---

### PHASE 0 — LOAD THE BRAIN

Open Claude Code in the repo and paste this, verbatim:

```
Read CLAUDE.md, then read every file in 01_STRATEGY/, 02_INFORMATION_ARCHITECTURE/,
03_DESIGN_SYSTEM/, 04_CONTENT/, 06_BUILD/ and 07_QA/.

Do not write any code. Do not create any files.

Then produce three things:

1. A one-page summary in your own words of what ATHLIMA is, who it is for, and what the
   website must achieve. If you cannot state the proposition in two sentences, say so.

2. A list of every internal contradiction, ambiguity or gap you found across those documents.
   Be specific and cite file and line. I would rather find twenty problems now than one
   during the build.

3. The five decisions still outstanding that would most change the build if answered.

Rank everything by consequence. Do not be diplomatic.
```

**This is the highest-value prompt in this manual.** It does two jobs: it proves Claude has actually
absorbed the system, and it finds the holes while they are still cheap to fix.

Fix what it finds. Edit the MD files yourself, or have Claude edit them and review each diff. Commit.

```bash
git add -A && git commit -m "Phase 0: brief reconciliation"
```

`/clear`

---

### PHASE 1 — LOCK THE STRATEGY

Only needed where Phase 0 exposed gaps. Work **one file at a time.**

```
We are working only on 01_STRATEGY/positioning.md.

Read CLAUDE.md and 01_STRATEGY/*.

The current positioning has [describe the specific weakness].

Give me three alternative positioning statements. For each: the statement itself, what it
makes the website do differently, who it excludes, and why it might fail.

Do not write to any file yet.
```

Then, once you have chosen:

```
Rewrite 01_STRATEGY/positioning.md around option 2. Then list every other file in this
repository that now contradicts it, and show me the diffs you would make. Do not apply
them until I approve.
```

That second half — *what else does this break* — is what keeps the system coherent. Use it after every
strategic change.

Commit. `/clear`.

---

### PHASE 2 — LOCK THE DESIGN SYSTEM

The design system must be **testable before it is used.** Build a proof page:

```
Read CLAUDE.md and all of 03_DESIGN_SYSTEM/.

Create a single self-contained HTML file at 05_MEDIA/references/design-system-proof.html
that renders the entire ATHLIMA design system as a specimen sheet:

- Every type style at its real size, with real ATHLIMA copy, not lorem ipsum
- The full colour system, with contrast ratios printed against each pairing
- The spacing scale, drawn to scale
- Every component in every state: default, hover, focus-visible, active, disabled
- The grid, overlaid
- Both surfaces: dark (default) and light

Inline all CSS. No external requests. No frameworks.
This is a specimen sheet, not a webpage — clarity over drama.
```

Open it in a browser. **Look at it.** This is where you find out whether the type scale actually works
before it is baked into forty components.

Iterate on the proof, then push changes back into the MD files:

```
I want the display scale tighter — reduce the jump between display-lg and display-xl,
and increase negative tracking on display-xl.

Update 03_DESIGN_SYSTEM/typography.md first, then regenerate the proof from the
updated file. The MD file is the source of truth; the proof is downstream of it.
```

**That ordering — brief first, artefact second — is the discipline that keeps the system honest.**
The moment you start editing the artefact and forgetting the brief, the system is dead and you are back
to improvising.

Commit. `/clear`.

---

### PHASE 3 — LOCK THE CONTENT

Copy is written **before** layout, not into it. Layout written first will bully the copy into fitting.

Work page by page, homepage first:

```
Read CLAUDE.md, 01_STRATEGY/*, 02_INFORMATION_ARCHITECTURE/*, and
04_CONTENT/voice-and-tone.md and ctas.md.

We are writing 04_CONTENT/homepage.md.

Write the homepage as a screen-by-screen script. For every screen:
- SCREEN NUMBER and NAME
- ROLE: what this screen does to the visitor psychologically
- The exact copy, with every line break art-directed
- Media direction: what the visitor sees, moving or still
- Motion: what happens on entry and on scroll
- CTA: emotional and/or functional, using only the approved CTA language
- EXIT INTENT: what the visitor should be thinking as they leave this screen

Constraints:
- Maximum 9 screens. If it needs 12, the page is not decided.
- No adjective from the banned list in 07_QA/content-qa.md.
- Every claim must be verifiable. Tag anything you are unsure of as [TO VERIFY].
- Indian English throughout.

Write three versions of the opening screen. They should be genuinely different
approaches, not three phrasings of the same idea.
```

Then, ruthlessly:

```
Now attack your own copy. For each screen, tell me: what is the weakest line, and why?
Where does it sound like a brochure? What would a sceptical CEO skim past? Rewrite the
three worst screens.
```

Self-critique prompts like this are worth more than any amount of "make it better."

Commit. `/clear`. Repeat per page.

---

### PHASE 4 — SCAFFOLD THE BUILD

```
Read CLAUDE.md and all of 06_BUILD/.

Scaffold the Next.js application in web/ exactly to the specification in
06_BUILD/tech-stack.md and 06_BUILD/architecture.md.

Deliver:
- Next.js App Router, TypeScript strict, Tailwind v4
- src/ structure exactly as specified in tech-stack.md §3
- styles/tokens.css generated from 03_DESIGN_SYSTEM/ — every colour, type size,
  spacing step and easing as a CSS custom property, with names matching the MD files
- tailwind config consuming those tokens, so `text-display-xl` and `bg-surface-base` work
- motion/ layer: registry.ts, easings.ts, durations.ts, SmoothScrollProvider.tsx (Lenis
  bridged to ScrollTrigger), useReveal.ts — all with gsap.matchMedia() reduced-motion handling
- lib/env.ts with zod validation
- lib/routes.ts typed route manifest from 02_INFORMATION_ARCHITECTURE/sitemap.md
- A working root layout with fonts, metadata defaults, and skip link
- ONE placeholder page that renders nothing but the wordmark

No page content. No blocks. Scaffolding only.

Before you write anything: show me the file tree you intend to create and the
package.json dependency list, and wait for my approval.
```

Then verify it actually runs:

```bash
cd web && npm run dev
```

Commit. `/clear`.

---

### PHASE 5 — THE HOMEPAGE (the reference implementation)

**This is the most important phase.** Everything after it will be built by pattern-matching against it.
An 80%-good homepage produces a 60%-good site. Spend the time here.

Build **one screen at a time.** Never say "build the homepage."

```
Read CLAUDE.md, 03_DESIGN_SYSTEM/*, 04_CONTENT/homepage.md, and
06_BUILD/component-rules.md.

We are building ONLY Screen 01 of the homepage: the entry sequence.

First, in plan mode, tell me:
1. Its role in the experience architecture, in one sentence
2. The component breakdown, and which tier each component belongs to
3. The exact GSAP timeline: what animates, in what order, with which easing token
   and which duration token
4. How it behaves under prefers-reduced-motion
5. How it behaves at 390px
6. How the LCP element is server-rendered and NOT dependent on the sequence
7. Every risk you can see

Do not write code until I approve the plan.
```

Approve, or push back. Then build. Then — and this is the step everyone skips — **make Claude look at
its own work**:

```
Take a screenshot of this section at 1440x900 and at 390x844.
Then run 07_QA/visual-qa.md against it, section A through G.
Report every failure honestly. Do not tell me it passes if it does not.
```

For that to work, connect a browser MCP server so Claude can drive and screenshot the running site:

```
claude mcp add playwright npx @playwright/mcp@latest
```

(Then `/mcp` inside Claude Code to confirm it is connected.)

**The visual feedback loop is the difference between a good site and a great one.** Text-only, Claude is
guessing what it built. With screenshots, it can see that the headline is colliding with the video at
1024px.

Repeat per screen. Commit after every screen:

```bash
git add -A && git commit -m "Homepage screen 03: ecosystem portals"
```

Once the whole homepage is standing:

```
Now review the homepage as a whole, not as nine screens.

Screenshot the full page at 1440 wide. Then answer:
- Does the page have a crescendo, or is every section the same intensity?
- Is the vertical rhythm varied enough to create pace?
- Where does attention drop?
- If a visitor read only the headlines in order, does the argument hold?
- Which single section would you cut, and why?

Be harsh. This page is the reference for the entire site.
```

`/clear`. Commit.

---

### PHASE 6 — REMAINING PAGES

Now the homepage is the pattern. Each new page starts:

```
Read CLAUDE.md, 04_CONTENT/[page].md, and study the existing implementation of the
homepage in web/src/components/blocks/ to understand the established patterns.

Build [page name], following the homepage patterns exactly. Reuse existing blocks
wherever the content fits. Tell me BEFORE you create any new block: what it is,
why no existing block serves, and what its role in the experience is.
```

That last constraint is what stops component sprawl — the thing that turns a design system back into
forty one-off sections.

One page per session. `/clear` between. Commit per page.

Work on a branch per page: `git checkout -b page/athlima-20`. Merge when it passes QA.

---

### PHASE 7 — MEDIA

Gated on your film and photography, not on code. While you wait:

- Build every media component against the real specifications with placeholder assets **of the correct
  dimensions and file sizes**, so performance testing is honest.
- Write the shot list from `04_CONTENT/homepage.md` and the other page scripts. The site should
  commission the film, not the other way round.
- Set up Mux and confirm the upload and playback pipeline end to end with one test asset.

---

### PHASE 8 — QA

Run each QA document as its own session, with fresh context:

```
/clear
Read 07_QA/visual-qa.md. Run it against every route in web/. Screenshot each page at
1440x900, 768x1024 and 390x844. Produce a findings table: route, check, pass/fail, severity,
recommended fix. Do not fix anything yet.
```

Then triage the table yourself and fix in priority order. Repeat for `content-qa.md` and
`responsive-qa.md`. Then run `launch-checklist.md` as a literal checklist.

Use a **subagent** for the adversarial pass, so its long output does not pollute your main context:

```
Use a subagent to review the entire web/ codebase against 06_BUILD/component-rules.md
and 06_BUILD/performance.md. Report only confirmed violations with file and line.
```

---

### PHASE 9 — LAUNCH

Follow `07_QA/launch-checklist.md` top to bottom. Do not improvise this part.

---

## PART 4 — CUSTOM SLASH COMMANDS

Create these once in `.claude/commands/`. They save you retyping the prompts you will use fifty times.

**`.claude/commands/load.md`**
```
Read CLAUDE.md, then read 01_STRATEGY/, 02_INFORMATION_ARCHITECTURE/,
03_DESIGN_SYSTEM/ and 04_CONTENT/. Confirm in three sentences what ATHLIMA is
and what we are building. Then stop and wait.
```
→ type `/load` at the start of every session.

**`.claude/commands/qa.md`**
```
Run 07_QA/visual-qa.md against $ARGUMENTS. Screenshot at 1440x900, 768x1024
and 390x844. Report every failure with severity. Fix nothing yet.
```
→ `/qa the athlima 20 page`

**`.claude/commands/critique.md`**
```
Attack what you just built. What is the weakest part? Where does it look
template-generated? What would a senior art director at a top studio say?
Be specific and harsh. Then propose the three highest-impact fixes.
```
→ `/critique`

**`.claude/commands/consistency.md`**
```
I have just changed $ARGUMENTS. List every other file in this repository —
brief and code — that now contradicts it. Show me the diffs. Apply nothing
until I approve.
```
→ `/consistency 03_DESIGN_SYSTEM/colour.md`

**`.claude/commands/block.md`**
```
Plan a new block: $ARGUMENTS.
State its role in the experience in one sentence, its tier, its component
breakdown, its GSAP timeline with named easing and duration tokens, its
reduced-motion behaviour, and its 390px behaviour. Write no code yet.
```
→ `/block the audience doorways section`

---

## PART 5 — SUBAGENTS

Create these in `.claude/agents/`. Each gets its own context window, so a long review does not eat your
working session.

| Agent | Job |
|---|---|
| `art-director` | Reviews screenshots against `03_DESIGN_SYSTEM/` and `07_QA/visual-qa.md`. Only judges craft. |
| `copy-editor` | Reviews all copy against `04_CONTENT/voice-and-tone.md` and the banned-word list. |
| `perf-auditor` | Reviews against `06_BUILD/performance.md`. Bundle sizes, image handling, animation properties. |
| `a11y-auditor` | Reviews against `06_BUILD/accessibility.md`. Keyboard, ARIA, contrast, reduced motion. |

Use `/agents` to create them interactively. Give each a system prompt that names exactly which brief files
it reads and forbids it from changing anything outside its remit.

---

## PART 6 — WORKING WITH IMAGES

This is underused and extremely powerful.

- **Drag reference images straight into the terminal.** Awwwards sites you admire, the brochure spreads,
  a Figma export, a photograph whose grade you want.
- **Paste screenshots** with `Ctrl+V` (not `Cmd+V` on macOS — Claude Code reads the clipboard image on
  `Ctrl+V`).
- Use them as *direction*, never as a target to copy:

```
[drag in three reference screenshots]

These three sites share something I want: the confidence of the negative space and
the way type carries the page rather than imagery.

Do NOT copy their layouts. Tell me what the underlying principles are — spacing
ratios, type scale relationships, how much of the viewport the content occupies —
and how those principles should be expressed in ATHLIMA's own language, given
03_DESIGN_SYSTEM/.
```

- Screenshot your own build and paste it back in: *"here is what you built, here is the reference, name
  the five specific differences that make ours look cheaper."*

---

## PART 7 — CONTEXT HYGIENE (the thing that separates good output from mediocre)

1. **One phase per session.** `/clear` between.
2. **Watch the context indicator.** Past ~70% full, quality drops. Finish the thought, commit, `/clear`.
3. **Reload the brief after every clear** — that is what `/load` is for.
4. **Never let Claude "remember" a decision.** If it matters, it goes into an MD file. Use `#` to append
   a decision to CLAUDE.md mid-session.
5. **Long outputs go to subagents,** not into your main thread.
6. **Commit constantly.** Every screen, every page, every brief change. Git is your undo, and `Esc Esc`
   is your finer-grained undo.
7. **Work on a branch per page.** `git checkout -b page/athlima-20`. Merge when it passes QA.

---

## PART 8 — THE PROMPT PATTERNS THAT ACTUALLY WORK

**Give constraints, not adjectives.**
✗ "Make the hero more premium."
✓ "The hero has four competing elements. Reduce it to one headline and one CTA. Increase the top padding
to `space-3xl`. Move the video behind the type at 40% opacity. Cut the sub-headline entirely."

**Ask for options before execution.**
✓ "Give me three approaches to the six portals. For each: the interaction model, what it demands of the
visitor, and how it fails on mobile. Recommend one and say why."

**Make it justify against the brief.**
✓ "Before building: which section of `03_DESIGN_SYSTEM/motion.md` authorises this animation? Quote it."

**Make it critique itself.**
✓ "What did you do here that you are least confident about?"

**Make it find its own inconsistencies.**
✓ "Compare this component against the three existing blocks. Where does it diverge from established
patterns, and is each divergence justified?"

**Refuse the first answer once.**
The second attempt is very often materially better, purely because you rejected the first. "That reads as
a generic SaaS hero. Try again, and this time the visitor should feel they have walked into a building."

---

## PART 9 — FAILURE MODES AND THEIR FIXES

| Symptom | Cause | Fix |
|---|---|---|
| Output looks like a template | Claude is improvising because the brief was silent | Find the gap, write it into the MD file, `/clear`, retry |
| Design drifts across pages | Context lost between sessions | `/load` at every session start; build each page against the homepage explicitly |
| Component sprawl | No gate on new components | Enforce the "justify before creating" rule from Phase 6 |
| Site feels slow | Video and motion added without budgets | Run `06_BUILD/performance.md` budgets in CI from day one, not at the end |
| Claude keeps agreeing with you | You are asking leading questions | Ask "what is wrong with this?" not "is this good?" |
| Copy sounds like AI | The banned-word list is not in context | Reload `04_CONTENT/voice-and-tone.md`; run `/critique` |
| Endless small fixes, no progress | Working without a plan | Stop. `/clear`. Plan mode. One screen at a time. |
| Motion is janky | Two scroll systems, or animating layout properties | Check the Lenis/ScrollTrigger bridge; check nothing animates width/height/top/left |
| It broke something that worked | No commit between changes | Commit per screen. `git diff` before every commit. |

---

## PART 10 — THE HONESTY CONTRACT

Add this to CLAUDE.md and mean it:

> When you do not know something, say so. When you are guessing at a fact about ATHLIMA, mark it
> `[TO VERIFY]`. When a request conflicts with this repository, say which file it conflicts with and stop.
> When something you built does not meet the QA standard, report the failure rather than describing it
> as complete. Never invent a statistic, a partner, a testimonial, or a person.

The failure mode of a system like this is not bad code. It is confident, plausible, well-formatted work
built on something that was quietly made up three hours ago.

---

## THE SHORT VERSION

1. `/load` — always.
2. Plan mode before anything is written.
3. One screen at a time.
4. Screenshot and critique after every screen.
5. Commit after every screen.
6. `/clear` between phases.
7. When it looks generic, the brief was silent — go fix the brief, not the code.
