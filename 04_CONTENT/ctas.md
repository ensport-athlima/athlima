# CTAs AND MICROCOPY

> Strategy lives in `01_STRATEGY/conversion-strategy.md`.
> This file is the implementation reference: the exact strings, and every piece of microcopy around them.

---

## 1. THE MASTER CTA TABLE

**Locked. Copy these strings exactly. Do not invent variants, synonyms, or "improved" versions.**

| Context | Emotional CTA | Functional CTA | Destination |
|---|---|---|---|
| Global permanent | — | `APPLY` | `/apply` |
| Homepage | `ENTER ATHLIMA` | `APPLY TO ATTEND` | `/the-world` · `/apply` |
| The World | `SEE THE WHOLE ECOSYSTEM` | `EXPLORE THE SIX` | scroll · `#portals` |
| ATHLIMAX | `BUILD INSIDE THE MARKETPLACE` | `BECOME A FOUNDING PARTNER` | `/partner` |
| The Symposium | `SHAPE THE CONVERSATION` | `SEE THE THEMES` | `#themes` |
| ACTIV8 | `PLAY BEYOND THE GAME` | `SEE THE EXPERIENCE` | `#zones` |
| Afterhours | `THE DAY INSPIRES. THE NIGHT CELEBRATES.` | `SEE THE EVENING` | `#evening` |
| ATHLIMA Connect | `CONNECT BEFORE YOU ARRIVE` | `HOW CONNECT WORKS` | `#how` |
| ATHLIMA 20 | `TOMORROW PLAYS HERE` | `NOMINATE AN ATHLETE` | `/athlima-20/nominate` |
| The Room | — | `APPLY TO ATTEND` | `/apply` |
| Partner | `DON'T JUST SHOW UP. SHAPE WHAT COMES NEXT.` | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Model | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Partner / Journey | — | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| For / Business | `FIND THE PEOPLE SHAPING SPORT'S NEXT ECONOMY` | `APPLY TO ATTEND` | `/apply` |
| For / Athletes | `FIND YOUR NEXT LEVEL` | `APPLY TO ATTEND` | `/apply` |
| For / Capital | `FIND THE OPPORTUNITIES BEHIND INDIA'S SPORTING GROWTH` | `APPLY TO ATTEND` | `/apply` |
| For / Infrastructure | `SPORT NEEDS PLACES. MEET WHO BUILDS THEM.` | `APPLY TO ATTEND` | `/apply` |
| For / Institutions | `BUILD THE INFRASTRUCTURE AROUND INDIA'S SPORTING FUTURE` | `INSTITUTIONAL ENQUIRY` | `/contact#institutional` |
| For / Brands | `OWN A TERRITORY, NOT A LOGO` | `START A PARTNER CONVERSATION` | `/partner/enquire` |
| Programme | — | `APPLY TO ATTEND` | `/apply` |
| Journal index | `EXPLORE THE THINKING` | `SUBSCRIBE` | inline |
| Journal article | — | `MORE FROM [PILLAR]` | `/journal/pillar/[x]` |
| About | — | `ABOUT ENSPORT VENTURES` | external `[TO VERIFY]` |
| Press | — | `DOWNLOAD THE PRESS KIT` | asset |
| Footer | `THE BUSINESS OF SPORT. THE FUTURE OF INDIA.` | `APPLY` | `/apply` |
| 404 | — | `RETURN TO ATHLIMA` | `/` |

### Tier-3 inline CTAs — also locked
These are subordinate text links, not buttons. They do not count against the two-CTA rule.

| Context | String | Destination |
|---|---|---|
| Home screen 05 | `SEE THE FULL COMPOSITION →` | `/the-room` |
| Home screen 07 | `ABOUT ATHLIMA, ENSPORT AND ENARR →` | `/about` |
| Home screen 08 *(window closed)* | `SEE ATHLIMA 20 →` | `/athlima-20` |
| `/partner` §05 | `HOW ATHLIMA CONNECT WORKS →` | `/connect` |
| `/athlima-20` *(window closed)* | `SEE THE 2026 CLASS →` | `/athlima-20#class` |
| `/apply/received` | `EXPLORE THE JOURNAL →` | `/journal` |
| Mobile, after Home screen 04 | `WHY SHOULD YOU CARE? IT DEPENDS WHO YOU ARE ↓` | `#doorways` |
| `/about` | `ABOUT ENSPORT VENTURES →` | external `[TO VERIFY]` |

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
> We read every application. You'll hear from us by **[DATE]**, either way.
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
> [NAME] from the ATHLIMA partnerships team will be in touch within **[N] working days**.

`[TO VERIFY]` Both the name and the response time. The source material implies two working days; do not
publish a commitment the team has not agreed to.

---

## 4. FORM MICROCOPY — THE ATHLIMA 20 NOMINATION

**Page intro**
> ## NOMINATE AN ATHLETE
> Do not wait until they become champions to tell their story. Tell it while they are becoming one.
>
> Nominations for the 2026 class close on **[DATE]**. Selection is independent.

**Sections:** `01 ABOUT YOU` · `02 ABOUT THE ATHLETE` · `03 WHY THEM`

| Field | Label | Helper |
|---|---|---|
| Athlete name | `ATHLETE'S FULL NAME` | — |
| DOB | `DATE OF BIRTH` | `They must be under 20 on 14 December 2026.` |
| Discipline | `DISCIPLINE` | — |
| State | `STATE` | — |
| Achievements | `ACHIEVEMENTS` | `Competitions, results, rankings, records.` |
| Coach | `COACH OR ACADEMY` | — |
| Links | `SUPPORTING LINKS` | `Results pages, profiles, footage. One per line.` |
| Why | `WHY THIS ATHLETE?` | `Performance is one part of it. Tell us about the rest.` |
| Guardian consent | `I confirm a parent or guardian has consented to this nomination.` | Required where the athlete is under 18. `[TO VERIFY — legal review]` |

**Button:** `SUBMIT NOMINATION`

**Closed state**
> ## NOMINATIONS OPEN IN [MONTH].
> Twenty athletes. Twenty sports. One future.
> Leave your email and we'll tell you the day nominations open.

---

## 5. SYSTEM MICROCOPY

| Context | Copy |
|---|---|
| **404 heading** | `THIS ROOM DOESN'T EXIST.` |
| **404 body** | `The page you're looking for isn't here. The rest of ATHLIMA is.` |
| **500 heading** | `SOMETHING BROKE.` |
| **500 body** | `Not your fault. Try again in a moment, or write to us at [email].` |
| **Empty Journal filter** | `Nothing here yet. The [PILLAR] thinking is being written.` |
| **Loading** | Nothing. A designed skeleton, never the word "loading". |
| **Cookie notice** | `We use a small number of cookies to understand how the site is used. Nothing else.` — bottom-anchored, dismissible, **never a modal**. |
| **Newsletter success** | `You're on the list. First piece lands soon.` |
| **Newsletter already subscribed** | `You're already on the list.` |
| **Video pause label** | `PAUSE FILM` / `PLAY FILM` |
| **Mobile menu** | `MENU` / `CLOSE` — labelled, not a bare hamburger |
| **Skip link** | `SKIP TO CONTENT` |

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
