# CONTACT
### `/contact` — the general route, and the institutional route

> **Role in the experience:** Commit, for the two audiences who will not use a form called "enquire":
> the press, and institutions. The institutional route is the one Journey 03 depends on — a
> federation secretary's path must never pass through a commercial page, and this is where it ends.
>
> **Tier:** T4 Utility. Functional only. No Tier-2 CTAs (`sitemap.md` §2). Density 10 / 20 / 70.
> **Not in the primary nav** — reached from the footer and from `/for/institutions`.
> **Written 13 September 2026 by decision D29.**

**Three sections**
```
01 ENTRY          one line, and the routes named
02 GENERAL        a short form
03 INSTITUTIONAL  id="institutional" — a quieter, separate route
```
Partner enquiries are **not** on this page. Anyone who arrives here wanting to partner is routed to
`/partner/enquire` with a single Tier-3 line — the institutional route and the commercial route must never
share a form.

---

## SECTION 01 — ENTRY

**Eyebrow:** `CONTACT`

**Display — `--fs-display-lg`**
```
WRITE TO US.
```

**Lead — `--fs-body-lg`**
> Two routes. Partnership conversations start at `/partner/enquire`. Everything else — including
> institutional and press enquiries — starts here. *(ATHLIMA is by invitation; there is nothing here for a
> guest to submit — decision A1.)*

**The routes, as a short index (`IndexGrid`, 3-up → 1-up):**

| # | Route | Line | Destination |
|---|---|---|---|
| 01 | INSTITUTIONS | Government, federations, universities and sporting bodies. A separate, quieter route. | `#institutional` |
| 02 | PRESS | Fact sheet, assets and a named contact. | `/press` |
| 03 | PARTNERSHIPS | Founding Partner conversations start with what you want to own. | `/partner/enquire` |

---

## SECTION 02 — GENERAL

**Section marker:** `01 ──── GENERAL ENQUIRIES`

`FormShell`, one page. Fields:

| Field | Label | Helper |
|---|---|---|
| Name | `FULL NAME` | — |
| Email | `EMAIL` | — |
| Organisation | `ORGANISATION` | `Optional.` |
| Message | `YOUR MESSAGE` | `What can we help with?` |
| Consent | `I agree to ATHLIMA contacting me about this message.` | Unticked by default. |

**Button:** `SEND MESSAGE`
**Confirmation, inline:** `Thank you. We'll reply within [N] working days.` `[TO VERIFY — response time
the team will honour]`

**Beneath the form:** a plain email address `[TO VERIFY — a monitored general address]`, because some
people will not use a form.

---

## SECTION 03 — INSTITUTIONAL *(`id="institutional"` — the destination of `INSTITUTIONAL ENQUIRY`)*

**Section marker:** `02 ──── INSTITUTIONS`

**Display — `--fs-display-md`**
```
A SEPARATE ROUTE.
```

**Body — `--fs-body`, max 34em** *(formal, restrained, unhurried — `voice-and-tone.md` §4)*
> ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group.
>
> Enquiries from government bodies, federations, sports authorities, universities and sporting
> institutions are handled separately from commercial conversations, by a named person, without a sales
> process. Write to us here, or directly.

`FormShell`, one page. Fields:

| Field | Label | Helper |
|---|---|---|
| Institution | `INSTITUTION` | — |
| Name | `YOUR NAME` | — |
| Role | `YOUR ROLE` | — |
| Email | `EMAIL` | `An institutional address, where possible.` |
| Enquiry | `THE NATURE OF YOUR ENQUIRY` | `Participation, association, the Symposium, the Advisory Council, or something else.` |
| Consent | `I agree to ATHLIMA contacting me about this enquiry.` | Unticked by default. |

**Button:** `SEND INSTITUTIONAL ENQUIRY`
**Confirmation, inline:** `Thank you. [NAME] will reply within [N] working days.` `[TO VERIFY — the named
person and the response time; this audience notices a missed commitment more than any other]`

**Beneath the form:** a direct email address for the same named person `[TO VERIFY]`.

**Rules for this route:**
- Nothing on this section, or on the path to it, mentions pricing, packages, partnership tiers or the
  Founding Partner proposition. Journey 03 is tested against this before launch.
- The register is the site's most formal. No lime word in the display. One lime content element at
  most: the button.
- Submissions route to a different recipient from general and partner enquiries. Never a shared inbox.

---

## THE PAGE CHECK

- `/for/institutions` → `INSTITUTIONAL ENQUIRY` lands on `#institutional` with the section in view and
  the first field focused.
- Both forms: persistent labels, correct `inputmode`/`autocomplete`, error summary linked to fields,
  honeypot and rate limiting, data stored before email is sent.
- No `[TO VERIFY]` and no bare bracket token renders.

**As built (14 September 2026):** `ContactForm` in two variants on the Tier-5 components, one action
`submitContact(kind)` → `contact_messages` (`web/db/003_contact_messages.sql`) before any email; Resend
confirms to the sender and forwards to `CONTACT_NOTIFY_EMAIL` or `INSTITUTIONAL_NOTIFY_EMAIL` — separate
env, never a shared inbox. Confirmations are inline and say *Thank you. We'll reply.* — no `[N]`, no
`[NAME]`. The plain email addresses beneath the forms and "or directly" are withheld until monitored
addresses exist. The routes index links INSTITUTIONS → `#institutional`, PRESS → `/press`, PARTNERSHIPS
→ `/partner/enquire`; the institutional section itself links to nothing commercial. Forms render only
when `POSTGRES_URL` is configured — one line otherwise.
