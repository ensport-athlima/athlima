# CTAs AND MICROCOPY

> Strategy lives in `01_STRATEGY/conversion-strategy.md`.
> This file is the implementation reference: the exact strings, and every piece of microcopy around them.

---

## 1. THE MASTER CTA TABLE

**Locked. Copy these strings exactly. Do not invent variants, synonyms, or "improved" versions.**

**This table is locked for CTA strings.** `01_STRATEGY/audiences.md` is locked for each doorway page's
*opening argument* — the display line at the top of `/for/*`. Where the two differ, each wins in its own
domain (decision D17). Every emotional CTA now carries a destination; where the emotional CTA is a
statement set as display type rather than a link, it is marked `— (statement, not a link)` (decision D18).

| Context | Emotional CTA | Emotional destination | Functional CTA | Functional destination |
|---|---|---|---|---|
| Global permanent | — | — | `BUILD WITH ATHLIMA` | `/partner` |
| Homepage | `ENTER ATHLIMA` | `/the-world` | `BUILD WITH ATHLIMA` | `/partner` |
| The World | `SEE THE WHOLE ECOSYSTEM` | `#ecosystem` (section 02, in-page) | `EXPLORE THE SIX` | `#portals` (in-page) |
| ATHLIMAX | `BUILD INSIDE THE MARKETPLACE` | `/partner/model` | `BECOME A FOUNDING PARTNER` | `/partner` |
| The Symposium | `SHAPE THE CONVERSATION` | — (statement, not a link) | `SEE THE THEMES` | `#themes` |
| ACTIV8 | `PLAY BEYOND THE GAME` | — (statement, not a link) | `SEE THE EXPERIENCE` | `#zones` |
| Afterhours | `THE DAY INSPIRES. THE NIGHT CELEBRATES.` | — (statement, not a link) | `SEE THE EVENING` | `#evening` |
| ATHLIMA Connect | `CONNECT BEFORE YOU ARRIVE` | `/partner` *(Connect is a Founding Partner benefit — decision D20)* | `HOW CONNECT WORKS` | `#how` |
| ATHLIMA 20 — `pre-window` *(v1 ships this state)* | `TOMORROW PLAYS HERE` | — (statement, not a link) | `TELL ME WHEN NOMINATIONS OPEN` | `#alert` (in-page email capture) |
| ATHLIMA 20 — `open` *(v2)* | `TOMORROW PLAYS HERE` | — (statement, not a link) | `NOMINATE AN ATHLETE` | `/athlima-20/nominate` *(v2)* |
| ATHLIMA 20 — `post-selection` | `TOMORROW PLAYS HERE` | — (statement, not a link) | `SEE THE 2026 CLASS` | `#class` |
| The Room | `ATHLIMA IS BY INVITATION.` | — (statement, not a link) | `BUILD WITH ATHLIMA` | `/partner` |
| Partner | `DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT.` | — (statement, not a link) | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Model | — | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Journey | — | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| For / Business | `FIND THE PEOPLE SHAPING SPORT'S NEXT ECONOMY` | — (statement, not a link) | `BUILD WITH ATHLIMA` | `/partner` |
| For / Athletes | `FIND YOUR NEXT LEVEL` | — (statement, not a link) | — *(Tier 3: `SEE ATHLIMA 20 →`)* | — |
| For / Capital | `FIND THE OPPORTUNITIES BEHIND INDIA'S SPORTING GROWTH` | — (statement, not a link) | `BUILD WITH ATHLIMA` | `/partner` |
| For / Infrastructure | `SPORT NEEDS PLACES. MEET THE PEOPLE WHO DECIDE WHERE THEY GET BUILT.` | — (statement, not a link) | `BUILD WITH ATHLIMA` | `/partner` |
| For / Institutions | `BUILD THE INFRASTRUCTURE AROUND INDIA'S SPORTING FUTURE` | — (statement, not a link) | `INSTITUTIONAL ENQUIRY` | `/contact#institutional` |
| For / Brands | `OWN A TERRITORY, NOT A LOGO` | — (statement, not a link) | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Programme | `ATHLIMA IS BY INVITATION.` | — (statement, not a link) | — | — |
| Journal index | `EXPLORE THE THINKING` | — (statement, not a link) | `SUBSCRIBE` | inline |
| Journal article | — | — | `MORE FROM [PILLAR]` | `/journal/pillar/[x]` |
| About | — | — | — *(Tier 3: `Explore the Group →`)* | — |
| Press | — | — | `DOWNLOAD THE PRESS KIT` | asset |
| Contact | — | — | — *(form buttons are microcopy — `contact.md`)* | — |
| Homepage, `legacy` phase | `ENTER ATHLIMA` | `/the-world` | `STAY IN TOUCH FOR 2027` | `#2027` (in-page email capture) |
| Footer | `THE BUSINESS OF SPORT. THE FUTURE OF INDIA.` | — (statement, not a link) | `BUILD WITH ATHLIMA` | `/partner` |
| 404 | — | — | `RETURN TO ATHLIMA` | `/` |

**Strings added on 13 September 2026** (not in the original locked table; added because a decision created
the need, and locked from now): `TELL ME WHEN NOMINATIONS OPEN` (D4 — the pre-window email capture),
`STAY IN TOUCH FOR 2027` (replaces "Register interest for 2027", which used a banned word), and the
corrected infrastructure line (D17). **Added by decision A (evening):** `BUILD WITH ATHLIMA` (the
permanent CTA, A2) and `ATHLIMA IS BY INVITATION.` (a statement, A4). Removed by the same decision:
`APPLY`, `APPLY TO ATTEND`, `SUBMIT APPLICATION` — there is no guest application. `/about` carries the
Tier-3 outbound `Explore the Group →` (B3) and no Tier-2 CTA.

### Tier-3 inline CTAs — also locked
These are subordinate text links, not buttons. They do not count against the two-CTA rule.

| Context | String | Destination |
|---|---|---|
| Home screen 05 | `SEE THE FULL COMPOSITION →` | `/the-room` |
| Home screen 07 | `ABOUT ATHLIMA, ENSPORT AND ENARR →` | `/about` |
| Home screen 08 *(always — decision D7)* | `SEE ATHLIMA 20 →` | `/athlima-20` |
| `/partner` §05 | `HOW ATHLIMA CONNECT WORKS →` | `/connect` |
| Mobile, after Home screen 04 | `WHY SHOULD YOU CARE? IT DEPENDS WHO YOU ARE ↓` | `#doorways` |
| Home screen 07 · `/about` section 03 *(decision B3 §3)* | `Explore the Group →` | `https://www.enarr.com` — outbound, `rel="noopener"`, new tab, announced. Sentence case, not a button: it sits quietly beneath the institutional copy. |
| `/the-world` section 05 | `THE TWO DAYS →` | `/programme` |
| `/the-world` section 06 | `SEE THE FULL COMPOSITION →` | `/the-room` |
| `/programme` section 04 | `SEE THE EVENING →` | `/afterhours#evening` |
| `/contact` section 01 | the three routes, as index items | `#institutional` · `/press` · `/partner/enquire` |

### Permanently banned
Buy · Buy now · Book now · Book your spot · Get tickets · Reserve · Sign up · Register · Join now ·
Apply · Apply to attend · Application *(decision A1)* · Exclusive · Invite-only · Private · Members only · By invitation only *(decision A4 — the one permitted form is the statement `ATHLIMA IS BY INVITATION.`)* ·
Learn more · Click here · Read more *(standalone)* · Submit *(bare — `SUBMIT NOMINATION` is correct, in v2)* · Get started · Don't miss out · Limited
spots · Hurry · Contact us *(as a primary CTA)* · Download brochure *(as a primary CTA)*

---

## 2. SHARED FORM MICROCOPY

> **Withdrawn — the guest application (decision A1, `08_OPERATIONS/decisions-2026-09-13-access.md`).**
> There is no `/apply`; nobody applies to attend. The application's page intro, steps, fields, buttons
> and confirmation page are gone. What survives is the error copy every form on the site shares.

**Errors — every form**
| Situation | Message |
|---|---|
| Required, empty | `We need this one.` |
| Invalid email | `That email address doesn't look right. Check it and try again.` |
| Invalid phone | `Include your country code — +91 for India.` |
| Too short | `A little more detail would help.` |
| Submission failed | `Something went wrong at our end. Your answers are still here — try again in a moment.` |
| Summary at top | `There are [n] things to fix before you can submit.` — each linked to its field |

---

## 3. FORM MICROCOPY — THE PARTNER ENQUIRY

**Page intro**
> ## START A PARTNER CONVERSATION
> Every ATHLIMA partnership is built around what your organisation wants to own. Tell us that, and we'll
> come back with a proposition — not a package.

| Field | Label | Helper |
|---|---|---|
| Organisation | `ORGANISATION` | — |
| Name | `YOUR NAME` | — |
| Role | `YOUR ROLE` | — |
| Email | `EMAIL` | — |
| Phone | `PHONE` | — |
| Category | `YOUR CATEGORY` | `Where does your organisation sit in the sporting economy?` |
| Territory | `WHAT WOULD YOU WANT TO OWN AT ATHLIMA?` | `Movement. Recovery. Infrastructure. Technology. Something we haven't thought of.` |
| Scale | `INDICATIVE SCALE OF INTEREST` | `A range is fine. This helps us shape the right conversation.` — **a range selector, never a price list** |
| Prospectus | `Send me the Founding Partner Prospectus.` | — |

**Button:** `SEND ENQUIRY`

**Confirmation**
> ## THANK YOU.
> [NAME] `[TO VERIFY — B5]` from the ATHLIMA partnerships team will be in touch within **[N] working
> days** `[TO VERIFY — B5]`.

`[TO VERIFY — B5]` Both the name and the response time. The source material implies two working days; do
not publish a commitment the team has not agreed to.

**As built (13 September 2026):** `PartnerEnquiryForm` — one page (D12), react-hook-form + the shared zod
schema on the client, the same schema again in the Server Action, honeypot and a too-fast check, stored in
Vercel Postgres (`web/db/002_partner_enquiries.sql`) **before** any email; Resend confirms to the enquirer
and forwards to `ENQUIRY_NOTIFY_EMAIL` when set (B5). Then a redirect to `/partner/enquire/received`,
which says `THANK YOU.` and *The ATHLIMA partnerships team will be in touch.* — no name, no working days
until B5. **Two judgement calls until B1:** `YOUR CATEGORY` offers the five partner types
(`opportunities.md`, brochure-sourced) plus *Something else*; `INDICATIVE SCALE OF INTEREST` offers the
six levels of partnership (Presence → Platform) plus *Not sure yet* — a range, never a price. The trust
panel beside the form carries who is behind this, what happens to the data, and what happens next. While
`POSTGRES_URL` is not configured the page renders one line — *Partner enquiries open shortly.* — and no
form (CLAUDE.md V.3).

---

## 4. FORM MICROCOPY — THE ATHLIMA 20 NOMINATION — **v2, not at launch**

> **Decision D4:** the nomination form does not ship in v1. Kept here so the v2 build starts from locked
> copy. In v1, `/athlima-20` carries the `pre-window` state below (§4a).

### 4a. The `pre-window` state — ships in v1
> ## NOMINATIONS OPEN IN [MONTH]. `[TO VERIFY — opening month from the project owner]`
> Twenty athletes. Twenty sports. One future.
> Leave your email and we'll tell you the day nominations open.

| Field | Label | Helper |
|---|---|---|
| Email | `EMAIL` | `One message, on the day. Nothing else.` |

**Button:** `TELL ME WHEN NOMINATIONS OPEN`
**Confirmation, inline:** `You'll hear from us the day nominations open.`

**As built (13 September 2026):** the headline is withheld until the month is supplied — the block renders
*Twenty athletes. Twenty sports. One future.* as display type with the third line beneath. The form is
`EmailCapture` → server action → Vercel Postgres (`web/db/001_email_captures.sql`); it renders **only when
`POSTGRES_URL` is configured**, and the entry's `#alert` CTA renders only then too — never a form that
posts nowhere, never an anchor to nothing. Adults only: the list is the alert, not the nomination.

### 4b. The `open` state — v2

**Page intro**
> ## NOMINATE AN ATHLETE
> Do not wait until they become champions to tell their story. Tell it while they are becoming one.
>
> Nominations for the 2026 class close on **[DATE]** `[TO VERIFY]`. Selection is independent.

**Sections:** `01 ABOUT YOU` · `02 ABOUT THE ATHLETE` · `03 WHY THEM`

| Field | Label | Helper |
|---|---|---|
| Athlete name | `ATHLETE'S FULL NAME` | — |
| DOB | `DATE OF BIRTH` | `They must be under 20 on 14 December 2026.` *(the criterion is stated on `/athlima-20` itself — `experiences.md` — not only here)* |
| Discipline | `DISCIPLINE` | — |
| State | `STATE` | — |
| Achievements | `ACHIEVEMENTS` | `Competitions, results, rankings, records.` |
| Coach | `COACH OR ACADEMY` | — |
| Links | `SUPPORTING LINKS` | `Results pages, profiles, footage. One per line.` |
| Why | `WHY THIS ATHLETE?` | `Performance is one part of it. Tell us about the rest.` |
| Guardian consent | `[TO VERIFY — legal review]` A nominator's checkbox is **not** verifiable parental consent under the DPDP Act. The v2 design obtains consent from the guardian directly — their name, relationship and contact, and a confirmation step completed by them. Copy is written after counsel's advice. | Required where the athlete is under 18. |

**Button:** `SUBMIT NOMINATION`

### 4c. The `post-selection` state
> ## THE 2026 CLASS.
> Twenty athletes. Twenty sports. One future.

**Functional CTA:** `SEE THE 2026 CLASS` → `#class`. Only confirmed, consenting athletes appear — the
`PortraitCard` renders nothing otherwise.

---

## 5. SYSTEM MICROCOPY

| Context | Copy |
|---|---|
| **404 heading** | `THIS ROOM DOESN'T EXIST.` |
| **404 body** | `The page you're looking for isn't here. The rest of ATHLIMA is.` |
| **500 heading** | `SOMETHING BROKE.` |
| **500 body** | `Not your fault. Try again in a moment, or write to us at [email].` `[TO VERIFY — B5 — a monitored address]`. **Until B5 lands the page ships the first sentence only** — a bare bracket never renders. |
| **Empty Journal filter** | `Nothing here yet. The [PILLAR] thinking is being written.` |
| **Loading** | Nothing. A designed skeleton, never the word "loading". |
| **Cookie notice** | `We use a small number of cookies to understand how the site is used. Nothing else.` — bottom-anchored, **never a modal**. Two buttons: `ACCEPT` · `DECLINE`. Analytics (GA4) loads only after `ACCEPT` (decision D33, `[TO VERIFY — LEGAL]`). Declining is remembered and the notice does not return. |
| **Newsletter success** | `You're on the list. First piece lands soon.` |
| **Newsletter already subscribed** | `You're already on the list.` |
| **Video pause label** | `PAUSE FILM` / `PLAY FILM` |
| **Mobile menu** | `MENU` / `CLOSE` — labelled, not a bare hamburger |
| **Skip link** | `SKIP TO CONTENT` |
| **Contact — general form button** | `SEND MESSAGE` — see `contact.md` §02 |
| **Contact — institutional form button** | `SEND INSTITUTIONAL ENQUIRY` — see `contact.md` §03 |
| **Press — copy control on boilerplate** | `COPY` / `COPIED` |
| **Email captures** | `TELL ME WHEN NOMINATIONS OPEN` (ATHLIMA 20) · `STAY IN TOUCH FOR 2027` (legacy homepage) · `SUBSCRIBE` (Journal). Each has its own one-line confirmation in its content file. |

---

## 6. THE UNIVERSAL RULES

1. **At most one Tier-2 emotional CTA and one Tier-2 functional CTA per page.** Utility and sub-pages
   carry a functional CTA only. Tier-3 inline links are unlimited but subordinate.
2. **BUILD WITH ATHLIMA is permanently visible** at every breakpoint, on every page (decision A2).
3. **Every CTA goes somewhere real.** Zero `href="#"` in production.
4. **No CTA promises something the next page does not deliver.**
5. **Every form field has a persistently visible label.** Placeholder-as-label is forbidden.
6. **Every submission gets a real confirmation page with a URL**, a confirmation email, and a stated next
   step with a date.
7. **Every stated response time is honoured.** Two working days for partners means two working days.
8. **No form asks for anything that will not be used.**
