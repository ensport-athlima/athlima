# CONVERSION STRATEGY
### and the CTA architecture

---

## 1. THE PRINCIPLE

ATHLIMA is by invitation. The website therefore converts **in a register of invitation, not of sale** — and,
since decision A1, it does not convert guests at all: it converts *organisations*. A guest is shown the room;
an organisation is invited to build it.

Every conventional conversion instinct has to be inverted:

| Conventional | ATHLIMA |
|---|---|
| Reduce friction | Keep meaningful friction — it signals selectivity |
| Create urgency | Create consequence — this matters, not *hurry* |
| Show the price | Never show a price |
| "Register now" | Nothing. There is no way to ask for access (A1) |
| Maximise submissions | Maximise *qualified* submissions |
| Countdown timers | Never |
| Exit-intent popups | Never |
| "Limited spots remaining!" | The room is 350. Stated once. Calmly. |

**The test:** would a federation president or a family-office principal find this page slightly beneath
them? If yes, it is too promotional.

---

## 2. THE CTA HIERARCHY

### Tier 1 — THE PERMANENT CTA
# **BUILD WITH ATHLIMA**
Visible at every breakpoint, on every page, always. **Desktop:** in the navigation — never scrolls away,
never animates for attention. **Mobile:** a bottom-anchored bar that hides on scroll-down and reveals on
scroll-up, so it is always one gesture away and never covers content (decision D8;
`02_INFORMATION_ARCHITECTURE/navigation.md` §3).

Three words, and the only door the public site opens (decision A2). It says the ecosystem is being built,
that organisations build it, and that the conversation starts here. It was `APPLY` until the owner
decided there is no guest application; *Partner with us* would make ATHLIMA a sponsorship deck.

### Tier 2 — THE PAGE CTAs
Every destination page carries **at most two**: one emotional, one functional.

- **Emotional** — speaks to why this matters. Larger, higher, aspirational.
- **Functional** — the actual next action. Smaller, lower, unambiguous.

Two Tier-2 CTAs is the ceiling, not a target. Three is indecision. Utility pages (`/contact`,
`/press`, legal) and sub-pages (`/partner/model`, `/partner/journey`) carry a functional CTA only — an
emotional CTA on a form page is noise. Tier-3 inline links do not count against this.

### Tier 3 — THE INLINE CTAs
Contextual links within content. Text links or subtle inline blocks, never buttons competing with Tier 2.

---

## 3. THE APPROVED CTA LANGUAGE

**Locked. Do not improvise variants. Do not create synonyms.**

**`04_CONTENT/ctas.md` §1 is the single source of truth for every string and every destination.** This
table is a summary of the same strings and is never edited on its own; edit `ctas.md` and mirror it here.

| Context | Emotional CTA | Functional CTA |
|---|---|---|
| Global / permanent | — | **BUILD WITH ATHLIMA** |
| Homepage | **ENTER ATHLIMA** | **BUILD WITH ATHLIMA** |
| The World | **SEE THE WHOLE ECOSYSTEM** | **EXPLORE THE SIX** |
| ATHLIMAX | **BUILD INSIDE THE MARKETPLACE** | **BECOME A FOUNDING PARTNER** |
| The Symposium | **SHAPE THE CONVERSATION** *(statement)* | **SEE THE THEMES** |
| ACTIV8 | **PLAY BEYOND THE GAME** *(statement)* | **SEE THE EXPERIENCE** |
| Afterhours | **THE DAY INSPIRES. THE NIGHT CELEBRATES.** | **SEE THE EVENING** |
| ATHLIMA Connect | **CONNECT BEFORE YOU ARRIVE** | **HOW CONNECT WORKS** |
| ATHLIMA 20 (pre-window, v1) | **TOMORROW PLAYS HERE** | **TELL ME WHEN NOMINATIONS OPEN** |
| ATHLIMA 20 (open, v2 · post-selection) | **TOMORROW PLAYS HERE** | **NOMINATE AN ATHLETE** · **SEE THE 2026 CLASS** |
| Partner pages | **DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT.** | **START A PARTNER CONVERSATION** |
| Audience: Business | **FIND THE PEOPLE SHAPING SPORT'S NEXT ECONOMY** | **BUILD WITH ATHLIMA** |
| Audience: Athlete | **FIND YOUR NEXT LEVEL** | — *(Tier 3: SEE ATHLIMA 20 →)* |
| Audience: Capital | **FIND THE OPPORTUNITIES BEHIND INDIA'S SPORTING GROWTH** | **BUILD WITH ATHLIMA** |
| Audience: Infrastructure | **SPORT NEEDS PLACES. MEET THE PEOPLE WHO DECIDE WHERE THEY GET BUILT.** | **BUILD WITH ATHLIMA** |
| Audience: Institutions | **BUILD THE INFRASTRUCTURE AROUND INDIA'S SPORTING FUTURE** | **INSTITUTIONAL ENQUIRY** |
| Audience: Brands | **OWN A TERRITORY, NOT A LOGO** | **START A PARTNER CONVERSATION** |
| Journal article | — | **MORE FROM [PILLAR]** |
| Journal index | **EXPLORE THE THINKING** | **SUBSCRIBE** |
| The Room | **ATHLIMA IS BY INVITATION.** *(statement)* | **BUILD WITH ATHLIMA** |
| Programme | **ATHLIMA IS BY INVITATION.** *(statement)* | — |
| About (ENSPORT / ENARR) | — | — *(Tier 3: Explore the Group → enarr.com, decision B3)* |
| Homepage, legacy phase | **ENTER ATHLIMA** | **STAY IN TOUCH FOR 2027** |
| Footer | **THE BUSINESS OF SPORT. THE FUTURE OF INDIA.** | **BUILD WITH ATHLIMA** |

### Permanently banned CTA language
Buy · Buy now · Book now · Book your spot · Get tickets · Reserve · Sign up · Register · Join now ·
Apply · Application · Exclusive · Invite-only · Members only *(decisions A1, A4)* ·
Learn more · Click here · Read more (as a standalone link) · bare Submit · Get started · Don't miss out ·
Limited spots · Hurry · Contact us (as a primary CTA) · Download brochure (as a primary CTA)

---

## 4. THE THREE CONVERSION FLOWS

### 4.1 THE GUEST — NO FLOW *(decision A1, `08_OPERATIONS/decisions-2026-09-13-access.md`)*

There is no guest application. The guest list is curated by invitation and the public site does not
sell, grant, request or process access. A guest's journey on the site ends in understanding — the room,
the six, the people, the thinking — and, if they choose, a micro-conversion (§6). The absence of a form is
the proposition: the room is composed, not filled. The one statement of it, `ATHLIMA IS BY INVITATION.`,
appears on `/the-room` and `/programme` and nowhere else (A4).

*(The four-step application that stood here — steps, rules, decision date, `/apply/received`,
`/apply/declined` — is withdrawn. Its shared error copy survives in `ctas.md` §2.)*

### 4.2 PARTNER ENQUIRY — `/partner/enquire`

**Framing:**
> Every ATHLIMA partnership is built around what your organisation wants to own. Tell us that, and we will
> come back with a proposition — not a package.

**One page, not multi-step** (decision D12). This person is senior and busy.

The nine fields are locked in `04_CONTENT/ctas.md` §3: organisation · name · role · email · phone ·
category · what you would want to own · indicative scale of interest *(a range, never a price list)* ·
prospectus request. `[TO VERIFY — B1]` The category taxonomy (six pavilions, or the prospectus's twelve
categories) follows the commercial-architecture decision.

**Rules**
- Never displays a price, a tier, or a package comparison.
- `[TO VERIFY]` Response time is stated and is honoured. The source material implies two working days;
  confirm with the commercial team that it is deliverable before publishing it. **A stated response time
  that is missed does more damage than no stated time at all.**
- Routes to a named person, not a shared inbox. `[TO VERIFY]` — name and email required from the
  commercial team before launch.
- Add-on: an option to request the Founding Partner Prospectus, which is emailed, not linked publicly —
  this creates a contact record instead of an anonymous download.

### 4.3 ATHLIMA 20 NOMINATION — `/athlima-20/nominate` — **v2, not at launch**

> **Decision D4:** the nomination form does not ship in v1. `/athlima-20` launches as content with the
> pre-window state and an email capture. Everything below is the specification for the v2 form and is
> kept so the v2 build starts from a decision, not a blank page. See `08_OPERATIONS/v2-backlog.md`.

**Framing:**
> Do not wait until they become champions to tell their story. Tell it while they are becoming one.

Nominator: name, role, organisation, relationship to athlete, contact.
Athlete: name, age, discipline, state, achievements, coach/academy, supporting links.
Plus: a short statement of why.

**Rules**
- Open only during the nomination window; a clear, designed closed state otherwise.
- Must work at 390px on poor connectivity. This form will be filled in from the side of a pitch.
- Consent for a minor's data requires explicit guardian confirmation. `[TO VERIFY]` — take legal advice on
  DPDP Act compliance for nominations involving athletes under 18 **before this form ships.** This is a
  genuine legal obligation, not a checkbox.
- Selection is independent. The form must say so, and the site must not imply that nomination is selection.

---

## 5. FRICTION — WHERE TO KEEP IT AND WHERE TO KILL IT

**Keep friction:**
- The absence of any way to ask for access (A1) — the strongest friction there is
- Partner conversations rather than self-serve packages
- The absence of a price
- Independent selection for ATHLIMA 20

**Kill friction:**
- Forms longer than they need to be
- Fields that duplicate what has already been asked
- Required fields that are not actually required
- CAPTCHA — use a honeypot and rate limiting instead
- Any form that loses your input on an error
- Slow pages
- A confirmation that does not say what happens next

**The distinction:** friction that communicates selectivity is the product. Friction that communicates
carelessness is a bug.

---

## 6. THE MICRO-CONVERSIONS

A guest cannot convert; an organisation may not be ready to. Give both a smaller yes, so the relationship starts.

| Micro-conversion | Where | Value |
|---|---|---|
| Journal subscribe | Journal, article footers | The strongest long-term asset. One list, no spam, real editorial. |
| Stay in touch for 2027 | Post-event (the homepage's legacy phase) | Keeps a relationship alive across a year. *("Register" is banned — the string is `STAY IN TOUCH FOR 2027`, `ctas.md` §1.)* |
| Request the Prospectus | Partner pages | Turns an anonymous visitor into a named lead. |
| Nomination-window alert | ATHLIMA 20, pre-window state | An email capture: tell me the day nominations open. Brings coaches and academies into the ecosystem before the v2 form exists. |
| Share a Journal piece | Every article | Distribution. Make the OG images good. |

---

## 7. TRUST — WHAT MUST BE VISIBLE AT THE POINT OF CONVERSION

Every form is a moment of doubt. Answer the doubt on the page, beside the form, not in a policy link:

- **Who is behind this** — ENSPORT Ventures, The ENARR Group
- **What happens to my data** — one plain sentence, then a link to the full policy
- **When will I hear back** — a specific timeframe, honoured
- **Who will contact me** — a named person or team
- **What happens next** — a proposition, not a package; a named person, when B5 supplies one.

---

## 8. THE ANTI-PATTERNS

Never ship any of these, regardless of what a growth playbook says:

- Countdown timers
- Exit-intent popups
- "X people are viewing this"
- Fake scarcity of any kind
- Chat widgets that open unprompted
- Newsletter modals over content
- Auto-playing sound
- Pricing tables
- "Book a demo"
- Testimonials from people who have not confirmed them in writing
- Logo walls of organisations that are targets rather than partners
