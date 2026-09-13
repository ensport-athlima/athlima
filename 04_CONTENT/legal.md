# LEGAL
### `/legal/privacy` · `/legal/terms` · `/legal/cookies`

> **Role in the experience:** Trust. These pages are read by exactly the people ATHLIMA most needs to
> trust it — a federation's legal counsel, a family office's compliance officer, a journalist checking
> who is behind the site. They must be real, current, specific to what the site actually does, and
> written by counsel. **This file specifies what each page must contain. It does not contain legal text,
> and nothing here is legal advice.**
>
> **Tier:** T4 Utility. No CTAs. The mobile CTA bar is present. Density 10 / 20 / 70.
> **Layout:** L3 Editorial. Sentence case is permitted for headings at `display-md` and below; the body is
> `--fs-body` on `--ink-100`, 34em measure, real typographic care. A legal page set badly reads as a
> template — the same discipline as the Journal.
> **Written 13 September 2026 by decision D29.**

`[TO VERIFY — LEGAL]` **Every page in this file is drafted by counsel before launch**, against India's
Digital Personal Data Protection Act, 2023 and its rules, and against whatever else applies to a company
of ENSPORT Ventures' kind. The build renders what counsel supplies. Claude does not draft legal text.

---

## SHARED STRUCTURE

Each page:
- Eyebrow: `LEGAL`. Display (`--fs-display-lg`): the page name. Then `Last updated: [DATE]`
  `[TO VERIFY]` in `--fs-label`.
- A one-paragraph plain-English summary in the ATHLIMA voice **above** the legal text, clearly labelled as
  a summary that does not replace the text beneath it.
- The legal text, with real headings (`h2`, `h3`) — never a wall.
- A sticky aside (L6) listing the sections, as real in-page links.
- The controlling entity, its registered address and registration details in the footer of the page
  `[TO VERIFY — B3]`.

---

## `/legal/privacy` — PRIVACY

**Summary line — `--fs-body-lg`** *(plain English, in voice; counsel approves it)*
> We collect what we need to answer your enquiry or send you the Journal —
> and we tell you, on each form, what that is. We do not sell it. You can ask us what we hold and ask us
> to delete it.

**Must cover** `[TO VERIFY — LEGAL]`:
- Who the data fiduciary is — ENSPORT Ventures Private Limited, CIN U93110MH2026PTC474328 (decision B3) —
  and how to reach it `[TO VERIFY — B3a]`.
- What is collected, per form: the partner enquiry (`ctas.md` §3), the contact and institutional routes
  (`contact.md`), the Journal subscription, the ATHLIMA 20 pre-window email capture, the 2027 list.
- The purpose of each, the lawful basis, how long it is kept, and with whom it is shared (email
  delivery, hosting, analytics — named).
- The rights available under the DPDP Act, and how to exercise them, including erasure.
- Cross-border storage and processing, if any (Vercel, Sanity, Resend, Mux, GA4 — where each stores data).
- Children's data: **the v1 site does not collect data about minors** — the nomination form is v2
  (decision D4). When it ships, this policy is revised with counsel before it does.
- Analytics and cookies, with a link to `/legal/cookies`.
- Grievance officer or equivalent contact, if required `[TO VERIFY — LEGAL]`.

---

## `/legal/terms` — TERMS

**Summary line**
> These are the terms for using this website. Applying to attend, or enquiring about partnership, does not
> create an agreement — a decision or a proposition does, separately and in writing.

**Must cover** `[TO VERIFY — LEGAL]`:
- The entity operating the site and the governing law and jurisdiction.
- That attendance is by invitation at ATHLIMA's discretion; that nothing on the site confers a right to
  attend.
- That a partner enquiry is not an offer and that partnerships are agreed separately in writing.
- Intellectual property: the ATHLIMA marks and content; what press may use (the press kit) and on what
  terms.
- Acceptable use, accuracy of information supplied, and limitation of liability, to the extent counsel
  advises.
- That programme, venue and participant information is subject to confirmation and change — stated
  plainly, because the site says the same thing everywhere else.

---

## `/legal/cookies` — COOKIES

**Summary line**
> We use a small number of cookies to understand how the site is used. Analytics runs only if you accept
> it. Nothing here follows you around the internet.

**Must cover** `[TO VERIFY — LEGAL]`:
- Exactly what is set, by name, purpose and duration — and it must match what the build actually sets
  (`content-qa.md` §G). The list is generated from the build's real cookie inventory, not written from
  memory.
- Strictly necessary: the session flag for the entry overlay (`sessionStorage`, not a cookie — say so), the
  consent choice itself, form progress (`sessionStorage`).
- Analytics: GA4, **set only after `ACCEPT` on the cookie notice** (decision D33). Vercel Analytics and
  Speed Insights, which are cookieless — say so.
- No advertising or cross-site tracking cookies. If that ever changes, this page changes first.
- How to withdraw consent: a control on this page that reopens the notice, and browser instructions.

**The notice itself** is specified in `ctas.md` §5 and `components.md` (`CookieNotice`): bottom-anchored,
never a modal, `ACCEPT` · `DECLINE`, remembered per viewer.

---

## THE PAGE CHECK

- Counsel has approved every word of legal text, and the plain-English summaries.
- The cookie list matches the production build's actual cookies — checked by inspection, not assumed.
- The entity name and registration details match the footer and `/about` `[TO VERIFY — B3]`.
- `Last updated` is real.
- No `[TO VERIFY]` and no bare bracket token renders.
