# CONVERSION STRATEGY
### and the CTA architecture

---

## 1. THE PRINCIPLE

ATHLIMA is invitation-led. The website therefore converts **in a register of invitation, not of sale.**

Every conventional conversion instinct has to be inverted:

| Conventional | ATHLIMA |
|---|---|
| Reduce friction | Keep meaningful friction — it signals selectivity |
| Create urgency | Create consequence — this matters, not *hurry* |
| Show the price | Never show a price |
| "Register now" | "Apply" |
| Maximise submissions | Maximise *qualified* submissions |
| Countdown timers | Never |
| Exit-intent popups | Never |
| "Limited spots remaining!" | The room is 350. Stated once. Calmly. |

**The test:** would a federation president or a family-office principal find this page slightly beneath
them? If yes, it is too promotional.

---

## 2. THE CTA HIERARCHY

### Tier 1 — THE PERMANENT CTA
# **APPLY**
Visible at every breakpoint, on every page, always. Desktop: in the navigation. Mobile: a bottom-anchored
bar. Never scrolls away, never covers content, never animates for attention.

One word. It is doing a lot of work: it says the room is closed, that entry is decided by someone else,
and that you are being invited to ask. *Register* would destroy all three meanings.

### Tier 2 — THE PAGE CTAs
Every destination page carries **at most two**: one emotional, one functional.

- **Emotional** — speaks to why this matters. Larger, higher, aspirational.
- **Functional** — the actual next action. Smaller, lower, unambiguous.

Two Tier-2 CTAs is the ceiling, not a target. Three is indecision. Utility pages (`/apply`, `/contact`,
`/press`, legal) and sub-pages (`/partner/model`, `/partner/journey`) carry a functional CTA only — an
emotional CTA on a form page is noise. Tier-3 inline links do not count against this.

### Tier 3 — THE INLINE CTAs
Contextual links within content. Text links or subtle inline blocks, never buttons competing with Tier 2.

---

## 3. THE APPROVED CTA LANGUAGE

**Locked. Do not improvise variants. Do not create synonyms.**

| Context | Emotional CTA | Functional CTA |
|---|---|---|
| Global / permanent | — | **APPLY** |
| Homepage | **ENTER ATHLIMA** | **APPLY TO ATTEND** |
| The World | **SEE THE WHOLE ECOSYSTEM** | **EXPLORE THE SIX** |
| ATHLIMAX | **BUILD INSIDE THE MARKETPLACE** | **BECOME A FOUNDING PARTNER** |
| The Symposium | **SHAPE THE CONVERSATION** | **SEE THE THEMES** |
| ACTIV8 | **PLAY BEYOND THE GAME** | **SEE THE EXPERIENCE** |
| Afterhours | **THE DAY INSPIRES. THE NIGHT CELEBRATES.** | **SEE THE EVENING** |
| ATHLIMA Connect | **CONNECT BEFORE YOU ARRIVE** | **HOW CONNECT WORKS** |
| ATHLIMA 20 | **TOMORROW PLAYS HERE** | **NOMINATE AN ATHLETE** |
| Partner pages | **DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT.** | **START A PARTNER CONVERSATION** |
| Audience: Business | **FIND THE PEOPLE SHAPING SPORT'S NEXT ECONOMY** | **APPLY TO ATTEND** |
| Audience: Athlete | **FIND YOUR NEXT LEVEL** | **APPLY TO ATTEND** |
| Audience: Capital | **FIND THE OPPORTUNITIES BEHIND INDIA'S SPORTING GROWTH** | **APPLY TO ATTEND** |
| Audience: Infrastructure | **SPORT NEEDS PLACES. MEET WHO BUILDS THEM.** | **APPLY TO ATTEND** |
| Audience: Institutions | **BUILD THE INFRASTRUCTURE AROUND INDIA'S SPORTING FUTURE** | **INSTITUTIONAL ENQUIRY** |
| Audience: Brands | **OWN A TERRITORY, NOT A LOGO** | **START A PARTNER CONVERSATION** |
| Journal article | — | **MORE FROM [PILLAR]** |
| Journal index | **EXPLORE THE THINKING** | **SUBSCRIBE** |
| ENSPORT / ENARR | — | **ABOUT ENSPORT VENTURES** |
| Footer | **THE BUSINESS OF SPORT. THE FUTURE OF INDIA.** | **APPLY** |

### Permanently banned CTA language
Buy · Buy now · Book now · Book your spot · Get tickets · Reserve · Sign up · Register · Join now ·
Learn more · Click here · Read more (as a standalone link) · bare Submit *(`SUBMIT APPLICATION` is correct)* · Get started · Don't miss out ·
Limited spots · Hurry · Contact us (as a primary CTA) · Download brochure (as a primary CTA)

---

## 4. THE THREE CONVERSION FLOWS

### 4.1 GUEST APPLICATION — `/apply`

**Framing above the form, verbatim intent:**
> ATHLIMA is limited to 350 people. Every application is read. Not every application is accepted.

**Four steps. Progress visible. Nothing asked twice.**

1. **You** — name, email, phone, city
2. **Your organisation** — organisation, role, sector *(sector maps to the four stakeholder groups)*
3. **Your interest** — which pillars, which IPs, what you would want to get from the room
4. **Context** — how you heard about ATHLIMA, referral if any

Then: review, consent, submit.

**Rules**
- Maximum four steps. Someone senior will abandon at five.
- Every field has a persistent visible label. No placeholder-as-label.
- Correct `inputmode` and `autocomplete` on every field.
- Consent is specific and unticked by default.
- On submit: a real confirmation **page** with a URL, a confirmation email, and a stated decision date.
- **Never** an auto-acceptance. That destroys the entire proposition.
- Mobile-first. Assume a phone, one hand, poor signal.

### 4.2 PARTNER ENQUIRY — `/partner/enquire`

**Framing:**
> Every ATHLIMA partnership is built around what your organisation wants to own. Tell us that, and we will
> come back with a proposition — not a package.

**One page, not multi-step.** This person is senior and busy.

Organisation · Your name and role · Category *(the pavilion / ATHLIMAX categories)* · What you would want
to own at ATHLIMA · Indicative scale of interest *(a range, never a price list)* · Contact preference

**Rules**
- Never displays a price, a tier, or a package comparison.
- `[TO VERIFY]` Response time is stated and is honoured. The source material implies two working days;
  confirm with the commercial team that it is deliverable before publishing it. **A stated response time
  that is missed does more damage than no stated time at all.**
- Routes to a named person, not a shared inbox. `[TO VERIFY]` — name and email required from the
  commercial team before launch.
- Add-on: an option to request the Founding Partner Prospectus, which is emailed, not linked publicly —
  this creates a contact record instead of an anonymous download.

### 4.3 ATHLIMA 20 NOMINATION — `/athlima-20/nominate`

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
- The word *apply*, and everything it implies
- Application review, and the wait for a decision
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

Not everyone is ready to apply. Give them a smaller yes, so the relationship starts.

| Micro-conversion | Where | Value |
|---|---|---|
| Journal subscribe | Journal, article footers | The strongest long-term asset. One list, no spam, real editorial. |
| Register interest for 2027 | Post-event, and for the declined | Keeps a relationship alive across a year. |
| Request the Prospectus | Partner pages | Turns an anonymous visitor into a named lead. |
| Nominate an athlete | ATHLIMA 20 | Brings coaches and academies into the ecosystem. |
| Share a Journal piece | Every article | Distribution. Make the OG images good. |

---

## 7. TRUST — WHAT MUST BE VISIBLE AT THE POINT OF CONVERSION

Every form is a moment of doubt. Answer the doubt on the page, beside the form, not in a policy link:

- **Who is behind this** — ENSPORT Ventures, The ENARR Group
- **What happens to my data** — one plain sentence, then a link to the full policy
- **When will I hear back** — a specific timeframe, honoured
- **Who will contact me** — a named person or team
- **What if I'm not accepted** — say it plainly, and offer the Journal and the 2027 list

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
