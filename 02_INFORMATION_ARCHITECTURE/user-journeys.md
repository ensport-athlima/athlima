# USER JOURNEYS

> Six real people. Six real paths. Every one of these must actually work when tested.

---

## JOURNEY 01 — THE BRAND MARKETING DIRECTOR
**Context:** Performance footwear brand. Received an outreach email from the ATHLIMA commercial team with a
link. On a laptop, at her desk, has four minutes before her next call.

```
Email link → /partner
    ↓  reads the proposition. "Don't just partner with an event."
    ↓  scrolls to the value architecture. Access · Conversation · Experience · Positioning · Impact
→ /partner/model
    ↓  the six levels. Recognises that Level 5 (IP) and Level 6 (Platform) are what she actually wants
    ↓  no pricing anywhere. Reads this as a proposition built around her, not as evasive — because the page says so
→ /the-room
    ↓  THE QUESTION: are the people I need actually going to be there?
    ↓  four stakeholder groups, cross-sector composition. Yes.
→ /connect
    ↓  the four steps. "So the meetings are arranged before I arrive."  ← the moment she converts
→ /partner/enquire
    ↓  one page, nine fields, no price selector
→ /partner/enquire/received
```

**The moment of conversion:** ATHLIMA Connect. Not the pavilions, not the guest list — the promise that
her two days are pre-structured around her objectives.
**What would lose her:** a pricing table on `/partner`. It would reframe the whole thing as inventory.
**Build implication:** `/connect` must be reachable from `/partner` in one click. It currently sits under
`/the-world` — so `/partner` carries a prominent inline route to it.

---

## JOURNEY 02 — THE 17-YEAR-OLD ATHLETE'S COACH
**Context:** Coaches a junior badminton player in Hyderabad. Saw an ATHLIMA 20 post on Instagram. On a
mid-range Android, on mobile data, standing at the side of a court.

```
Instagram → /athlima-20
    ↓  TOMORROW PLAYS HERE. 20 athletes. 20 sports.
    ↓  sees badminton in the twenty disciplines. Sees the philosophy line.
    ↓  sees the eligibility criterion — under 20 on 14 December 2026. His athlete qualifies.
    ↓  needs to know: is this real, is it free, who decides
    ↓  "Selection is independent."  ← the credibility moment
    ↓  v1: the pre-window state. "Nominations open in [month]." Leaves his email, one-handed.
    ↓  a real confirmation. Tells him he will hear the day nominations open.
```

**In v2** (decision D4, `08_OPERATIONS/v2-backlog.md`) the journey continues into `/athlima-20/nominate`:
a form that works one-handed, with correct keyboards, progress that survives a tab switch, and a guardian
consent step obtained from the guardian directly, because the athlete is a minor.

**The moment of conversion:** seeing his athlete's discipline listed among the twenty. Specificity beats
persuasion.
**What would lose him:** a slow page, a desktop-only form, or any suggestion of a fee.
**Build implication:** this is the journey most likely to be on a poor connection. `/athlima-20` and its
email capture carry the strictest performance budget on the site. Test them at 3G throttle, on a real
Android device, before launch.

---

## JOURNEY 03 — THE FEDERATION SECRETARY
**Context:** Secretary of a national sporting federation. Received a formal invitation letter referencing
the website. Sixty-one, on an iPad, sceptical by professional necessity. Has been invited to many events.

```
Types athlima.in
    ↓  the entry sequence. Institutional, not promotional. Nothing flashing.
    ↓  THE BUSINESS OF SPORT. THE FUTURE OF INDIA.
    ↓  scrolls. No ticket prices. No countdown. Register recognised as serious.
→ /about
    ↓  THE QUESTION: who is actually behind this?
    ↓  ENSPORT Ventures. The ENARR Group. An institution, not a promoter.  ← decision point
→ /the-world
    ↓  five pillars including GOVERN. His world is in the architecture, not an afterthought.
→ /symposium
    ↓  Policy & Governance as a named theme. Roundtables as a named format.
→ /contact
    ↓  finds the institutional route — a separate, quieter path that is not the general form
```

**The moment of conversion:** `/about`. Everything before it is atmosphere; ENARR and ENSPORT are the
evidence. **This is why the provenance section is a strategic asset, not a footer credit.**
**What would lose him:** any hint of a sales funnel. If his path passes through a page selling
partnership packages, he disengages permanently.
**Build implication:** `/contact` must offer a distinct institutional route. And no path from `/about` or
`/symposium` should route through commercial pages.

---

## JOURNEY 04 — THE VC PARTNER
**Context:** Consumer and sports-tech investor. Someone mentioned ATHLIMA at a dinner. On a phone, in a car,
three minutes.

```
Google "athlima" → /
    ↓  ten seconds. Scale, seriousness, Mumbai, December.
    ↓  scrolls fast. Stops at the doorways block.
→ /for/capital
    ↓  "Find the opportunities behind India's sporting growth."
    ↓  under 900 words. Three proofs. Reads all of it.
    ↓  the specific proof that lands: the Investment, Policy & Impact pavilion + startup showcase
→ /the-room
    ↓  confirms the founder and infrastructure composition
    ↓  "ATHLIMA IS BY INVITATION." — no form. He forwards the link to the person who can get him in.
```

*(Amended by decision A1: the journey used to end at `/apply`. Now it ends in understanding — and in a
forward, which is how invitations actually happen.)*

**The moment of conversion:** the doorways block. Without it he bounces from the homepage — he has no
patience for a generic argument.
**What would lose him:** `/for/capital` being long. If it reads like a brochure page he stops at
paragraph two.
**Build implication:** the doorways block must be reachable within roughly two thumb-flicks on mobile. If
it sits at screen 06 of nine on a very tall homepage, mobile users never see it. **Add a compact anchor
line after screen 04 at `md` and below** — not a DOM reorder, which would break tab order and the section
numbering. See `04_CONTENT/homepage.md`, Screen 06.

---

## JOURNEY 05 — THE REAL-ESTATE DEVELOPER
**Context:** Building a large mixed-use development in Pune with a sports component. A colleague forwarded
a link. Desktop, genuinely curious, has time.

```
Forwarded link → /the-world
    ↓  the five pillars. BUILD is first. Immediately relevant.
→ /journal/pillar/build
    ↓  reads two articles. This is where he decides ATHLIMA is credible —
    ↓  because the thinking is good, not because the copy said it would be.
→ /athlimax
    ↓  Infrastructure & Active Cities pavilion
→ /for/infrastructure
    ↓  "Sport needs places. Meet the people who decide where they get built."
    ↓  his fear, named: "will I just meet other developers?"  ← answered directly
→ BUILD WITH ATHLIMA → /partner
    ↓  his development has a sports component; a territory, not a stall. He starts a conversation.
```

*(Amended by decision A1/A2: the journey used to end at `/apply`.)*

**The moment of conversion:** the Journal. **This journey is the entire argument for the open-thinking
strategy.** He was converted by useful content, not by marketing copy.
**What would lose him:** an empty Journal. A pillar cluster with one thin article is worse than no Journal
at all.
**Build implication:** minimum viable Journal at launch is **six real articles — one per pillar plus a
second BUILD piece** — each over 900 words, each genuinely useful. This is a content deadline, not an
engineering one.

---

## JOURNEY 06 — THE JOURNALIST
**Context:** Sports business reporter. Writing a piece on India's sports economy. Has 40 minutes and a
deadline. Wants facts, names, numbers and images, fast.

```
Google → /
    ↓  scans
→ /press
    ↓  fact sheet: what, when, where, who, how many, run by whom
    ↓  downloadable logo pack, approved imagery, boilerplate
    ↓  a named press contact with a real email and phone
→ /about
    ↓  ENSPORT, ENARR, background
→ /journal
    ↓  finds a citable data piece with a real source
```

**The moment of conversion:** `/press` being complete. A journalist who has to email for basic facts
writes a thinner story, or none.
**What would lose her:** a press page that is a contact form. Or unsourced statistics — she will check
the $130B figure, and if it has no source she will not use it, and she may not trust the rest.
**Build implication:** `/press` is T4 utility but it must be *complete* at launch: fact sheet, boilerplate
in three lengths, logo pack, five approved images, named contact. Boring, and high-leverage.

---

## THE CROSS-JOURNEY FINDINGS

Six journeys, seven build consequences. These are decisions, not observations.

1. **`/about` is doing more work than its footer status suggests.** Two of six journeys convert there.
   It needs real design attention and it belongs in the footer's top tier.
2. **The doorways block is the homepage's most important interaction.** Two journeys depend on it entirely.
   On mobile it is reached via an anchor line after screen 04 — never by reordering the DOM.
3. **The Journal converts.** It is not marketing overhead. Six real articles at launch is a hard
   requirement.
4. **`/connect` needs to be reachable from `/partner`.** The IA puts it under The World; the commercial
   journey needs it one click from the partner proposition.
5. **The institutional path must never touch a commercial page.** Build it and test it as a distinct route.
6. **Mobile performance on `/athlima-20` is a strategic requirement**, not a technical nicety. That
   audience is on the worst connections.
7. **`/press` completeness at launch is non-negotiable.** It is the cheapest credibility on the site.
8. **No journey ends in a guest form** (decision A1). A guest journey ends in understanding, a forward, or
   a micro-conversion; only an organisation's journey ends in a submission — `BUILD WITH ATHLIMA`.

---

## THE JOURNEY TEST — RUN THIS BEFORE LAUNCH

Take six real people who match these profiles as closely as you can find. Give each one the starting
context above and a single instruction: *"Find out whether this is worth your time."*

**Say nothing else. Watch. Do not help. Do not explain.**

Record: where they hesitate, what they scroll past, what they read fully, what they say out loud, and
where they would have left if they were not being watched.

Every hesitation is a design brief. Every scroll-past is a section that should probably be cut.
