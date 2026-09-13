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
| Global permanent | — | — | `APPLY` | `/apply` |
| Homepage | `ENTER ATHLIMA` | `/the-world` | `APPLY TO ATTEND` | `/apply` |
| The World | `SEE THE WHOLE ECOSYSTEM` | `#ecosystem` (section 02, in-page) | `EXPLORE THE SIX` | `#portals` (in-page) |
| ATHLIMAX | `BUILD INSIDE THE MARKETPLACE` | `/partner/model` | `BECOME A FOUNDING PARTNER` | `/partner` |
| The Symposium | `SHAPE THE CONVERSATION` | `/apply` | `SEE THE THEMES` | `#themes` |
| ACTIV8 | `PLAY BEYOND THE GAME` | `/apply` | `SEE THE EXPERIENCE` | `#zones` |
| Afterhours | `THE DAY INSPIRES. THE NIGHT CELEBRATES.` | — (statement, not a link) | `SEE THE EVENING` | `#evening` |
| ATHLIMA Connect | `CONNECT BEFORE YOU ARRIVE` | `/partner` *(Connect is a Founding Partner benefit — decision D20)* | `HOW CONNECT WORKS` | `#how` |
| ATHLIMA 20 — `pre-window` *(v1 ships this state)* | `TOMORROW PLAYS HERE` | — (statement, not a link) | `TELL ME WHEN NOMINATIONS OPEN` | `#alert` (in-page email capture) |
| ATHLIMA 20 — `open` *(v2)* | `TOMORROW PLAYS HERE` | — (statement, not a link) | `NOMINATE AN ATHLETE` | `/athlima-20/nominate` *(v2)* |
| ATHLIMA 20 — `post-selection` | `TOMORROW PLAYS HERE` | — (statement, not a link) | `SEE THE 2026 CLASS` | `#class` |
| The Room | — | — | `APPLY TO ATTEND` | `/apply` |
| Partner | `DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT.` | — (statement, not a link) | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Model | — | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Journey | — | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| For / Business | `FIND THE PEOPLE SHAPING SPORT'S NEXT ECONOMY` | — (statement, not a link) | `APPLY TO ATTEND` | `/apply` |
| For / Athletes | `FIND YOUR NEXT LEVEL` | — (statement, not a link) | `APPLY TO ATTEND` | `/apply` |
| For / Capital | `FIND THE OPPORTUNITIES BEHIND INDIA'S SPORTING GROWTH` | — (statement, not a link) | `APPLY TO ATTEND` | `/apply` |
| For / Infrastructure | `SPORT NEEDS PLACES. MEET THE PEOPLE WHO DECIDE WHERE THEY GET BUILT.` | — (statement, not a link) | `APPLY TO ATTEND` | `/apply` |
| For / Institutions | `BUILD THE INFRASTRUCTURE AROUND INDIA'S SPORTING FUTURE` | — (statement, not a link) | `INSTITUTIONAL ENQUIRY` | `/contact#institutional` |
| For / Brands | `OWN A TERRITORY, NOT A LOGO` | — (statement, not a link) | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Programme | — | — | `APPLY TO ATTEND` | `/apply` |
| Journal index | `EXPLORE THE THINKING` | — (statement, not a link) | `SUBSCRIBE` | inline |
| Journal article | — | — | `MORE FROM [PILLAR]` | `/journal/pillar/[x]` |
| About | — | — | `APPLY TO ATTEND` | `/apply` |
| Press | — | — | `DOWNLOAD THE PRESS KIT` | asset |
| Contact | — | — | — *(form buttons are microcopy — `contact.md`)* | — |
| `/apply/declined` | — | — | `EXPLORE THE JOURNAL` | `/journal` |
| Homepage, `legacy` phase | `ENTER ATHLIMA` | `/the-world` | `STAY IN TOUCH FOR 2027` | `#2027` (in-page email capture) |
| Footer | `THE BUSINESS OF SPORT. THE FUTURE OF INDIA.` | — (statement, not a link) | `APPLY` | `/apply` |
| 404 | — | — | `RETURN TO ATHLIMA` | `/` |

**Strings added on 13 September 2026** (not in the original locked table; added because a decision created
the need, and locked from now): `TELL ME WHEN NOMINATIONS OPEN` (D4 — the pre-window email capture),
`STAY IN TOUCH FOR 2027` (replaces "Register interest for 2027", which used a banned word), and the
corrected infrastructure line (D17). `/about`'s functional CTA is `APPLY TO ATTEND`; the outbound
corporate link is Tier 3 and conditional on B3 — one page cannot have its only CTA pointing at a URL that
may not exist.

### Tier-3 inline CTAs — also locked
These are subordinate text links, not buttons. They do not count against the two-CTA rule.

| Context | String | Destination |
|---|---|---|
| Home screen 05 | `SEE THE FULL COMPOSITION →` | `/the-room` |
| Home screen 07 | `ABOUT ATHLIMA, ENSPORT AND ENARR →` | `/about` |
| Home screen 08 *(always — decision D7)* | `SEE ATHLIMA 20 →` | `/athlima-20` |
| `/partner` §05 | `HOW ATHLIMA CONNECT WORKS →` | `/connect` |
| `/apply/received` | `EXPLORE THE JOURNAL →` | `/journal` |
| `/apply/declined` | `STAY IN TOUCH FOR 2027 →` | inline email capture on the same page |
| Mobile, after Home screen 04 | `WHY SHOULD YOU CARE? IT DEPENDS WHO YOU ARE ↓` | `#doorways` |
| Home screen 07 · `/about` section 03 *(decision B3 §3)* | `Explore the Group →` | `https://www.enarr.com` — outbound, `rel="noopener"`, new tab, announced. Sentence case, not a button: it sits quietly beneath the institutional copy. |
| `/the-world` section 05 | `THE TWO DAYS →` | `/programme` |
| `/the-world` section 06 | `SEE THE FULL COMPOSITION →` | `/the-room` |
| `/programme` section 04 | `SEE THE EVENING →` | `/afterhours#evening` |
| `/contact` section 01 | the three routes, as index items | `#institutional` · `/press` · `/partner/enquire` |

### Permanently banned
Buy · Buy now · Book now · Book your spot · Get tickets · Reserve · Sign up · Register · Join now ·
Learn more · Click here · Read more *(standalone)* · Submit *(bare — `SUBMIT APPLICATION` and `SUBMIT NOMINATION` are correct)* · Get started · Don't miss out · Limited
spots · Hurry · Contact us *(as a primary CTA)* · Download brochure *(as a primary CTA)*

---

## 2. FORM MICROCOPY — THE APPLICATION

**Page intro**
> ## APPLY TO ATTEND
> ATHLIMA is limited to 350 people. Every application is read. Not every application is accepted.

**Step labels**
`01 YOU` · `02 YOUR ORGANISATION` · `03 YOUR INTEREST` · `04 CONTEXT`

**Field labels and helpers**

| Field | Label | Helper |
|---|---|---|
| Name | `FULL NAME` | — |
| Email | `EMAIL` | `We'll send our decision here.` |
| Phone | `PHONE` | `Including country code.` |
| City | `CITY` | — |
| Organisation | `ORGANISATION` | — |
| Role | `YOUR ROLE` | — |
| Sector | `SECTOR` | `Which part of the ecosystem do you work in?` |
| Pillars | `WHAT ARE YOU HERE FOR?` | `Select up to two.` |
| Interest | `WHAT WOULD YOU WANT TO GET FROM THE ROOM?` | `A few sentences. This is the part we read most closely.` |
| Referral | `HOW DID YOU HEAR ABOUT ATHLIMA?` | — |
| Consent | `I agree to ATHLIMA contacting me about my application.` | Unticked by default. |

**Buttons:** `CONTINUE` · `BACK` · `SUBMIT APPLICATION`

**Errors**
| Situation | Message |
|---|---|
| Required, empty | `We need this one.` |
| Invalid email | `That email address doesn't look right. Check it and try again.` |
| Invalid phone | `Include your country code — +91 for India.` |
| Too short | `A little more detail would help.` |
| Submission failed | `Something went wrong at our end. Your answers are still here — try again in a moment.` |
| Summary at top | `There are [n] things to fix before you can submit.` — each linked to its field |

**Confirmation page — `/apply/received`**
> ## YOUR APPLICATION IS IN.
>
> We read every application. You'll hear from us by **[DATE]** `[TO VERIFY — decision date from the
> project owner]`, either way.
>
> In the meantime, the thinking is open to everyone.
>
> `EXPLORE THE JOURNAL`

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
| **Email captures** | `TELL ME WHEN NOMINATIONS OPEN` (ATHLIMA 20) · `STAY IN TOUCH FOR 2027` (`/apply/declined`, legacy homepage) · `SUBSCRIBE` (Journal). Each has its own one-line confirmation in its content file. |

---

## 6. THE UNIVERSAL RULES

1. **At most one Tier-2 emotional CTA and one Tier-2 functional CTA per page.** Utility and sub-pages
   carry a functional CTA only. Tier-3 inline links are unlimited but subordinate.
2. **APPLY is permanently visible** at every breakpoint, on every page.
3. **Every CTA goes somewhere real.** Zero `href="#"` in production.
4. **No CTA promises something the next page does not deliver.**
5. **Every form field has a persistently visible label.** Placeholder-as-label is forbidden.
6. **Every submission gets a real confirmation page with a URL**, a confirmation email, and a stated next
   step with a date.
7. **Every stated response time is honoured.** Two working days for partners means two working days.
8. **No form asks for anything that will not be used.**
