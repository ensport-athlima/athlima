# DECISION A — ACCESS: THE PUBLIC SITE IS A WINDOW, NOT A DOOR
### Decided by the project owner, 13 September 2026 (evening)

> **Binding.** This file overrides `01_STRATEGY/conversion-strategy.md` §4.1, `digital-strategy.md` §6.2,
> `website-thesis.md` §5, `audiences.md` §6, `02_INFORMATION_ARCHITECTURE/sitemap.md`, `navigation.md`,
> `user-journeys.md`, `04_CONTENT/ctas.md` §1–§2 and `apply.md` wherever they describe a guest
> application. Each is amended to match; where a line was missed, this file wins.

---

## A1 — THERE IS NO GUEST APPLICATION

ATHLIMA's guest list is curated by invitation. **Nobody applies to attend.** The public website does not
sell, grant, request or process access. It shows the room — the people, the partners, the six
experiences, the thinking — and lets a visitor understand that getting in is not automatic *by the
absence of a way in*, not by saying so repeatedly.

Removed from the site, the brief and the build:
- The routes `/apply`, `/apply/received`, `/apply/declined`, the four-step form, the decision email, the
  "declined" page and its 2027 list. `04_CONTENT/apply.md` is deleted; `ctas.md` §2 (application
  microcopy) is withdrawn.
- The permanent `APPLY` in the nav, the mobile bar and the footer.
- `APPLY TO ATTEND` on every page that carried it; `SUBMIT APPLICATION`; "Every application is read. Not
  every application is accepted."; "attendance is by application".
- The guest doorways on the IP pages that pointed at `/apply`.

The word **apply** joins the banned list for public copy, beside *register*, *book* and *tickets*. Guests
remain **guests** (never attendees, delegates, members).

## A2 — THE PERMANENT CTA IS `BUILD WITH ATHLIMA` → `/partner`

The one commercial action on the site is an organisation starting a conversation about building the
ecosystem with ATHLIMA — the brochure's own framing of a partner. It replaces `APPLY` in the nav, the
mobile bar (now the **CTA bar**, `CtaBar`) and the footer, and becomes the functional CTA on the
homepage, `/the-room`, `/for/business`, `/for/capital` and `/for/infrastructure`. `/partner/enquire`
keeps `START A PARTNER CONVERSATION`; `/for/institutions` keeps `INSTITUTIONAL ENQUIRY`.

## A3 — THE FOLLOW ACTION STAYS UNDERSTATED

"Stay close" is the intent, not yet a string. The existing captures serve it: `TELL ME WHEN NOMINATIONS
OPEN` (`/athlima-20`), `SUBSCRIBE` (the Journal, in context) and `STAY IN TOUCH FOR 2027` (the homepage,
legacy phase). No newsletter box in the footer, no modal, no "Stay close" string until the master
architecture names one.

## A4 — THE INVITATION IS STATED ONCE, QUIETLY

One line, `ATHLIMA IS BY INVITATION.`, set as a statement (decision D18 — display type, not a link) on
`/the-room` §05 and as the close of `/programme`. Nowhere else. **Never** *exclusive*, *invite-only*,
*private*, *members only*, *by invitation only* — insecure luxury language, banned. The architecture
demonstrates curation; the copy does not announce it.

## A5 — THE CTA TABLE, AMENDED

| Context | Emotional | → | Functional | → |
|---|---|---|---|---|
| Global permanent | — | — | `BUILD WITH ATHLIMA` | `/partner` |
| Homepage | `ENTER ATHLIMA` | `/the-world` | `BUILD WITH ATHLIMA` | `/partner` |
| The Symposium | `SHAPE THE CONVERSATION` | — (statement) | `SEE THE THEMES` | `#themes` |
| ACTIV8 | `PLAY BEYOND THE GAME` | — (statement) | `SEE THE EXPERIENCE` | `#zones` |
| The Room | `ATHLIMA IS BY INVITATION.` | — (statement) | `BUILD WITH ATHLIMA` | `/partner` |
| For / Business, Capital, Infrastructure | *(unchanged statements)* | — | `BUILD WITH ATHLIMA` | `/partner` |
| For / Athletes | `FIND YOUR NEXT LEVEL` | — (statement) | — *(Tier 3: `SEE ATHLIMA 20 →`)* | — |
| Programme | `ATHLIMA IS BY INVITATION.` | — (statement) | — | — |
| About | — | — | — *(Tier 3: `Explore the Group →`)* | — |
| Footer | `THE BUSINESS OF SPORT. THE FUTURE OF INDIA.` | — (statement) | `BUILD WITH ATHLIMA` | `/partner` |
| `/apply/declined` | *row removed* | | | |

Everything not listed is unchanged. `BUILD WITH ATHLIMA` and `ATHLIMA IS BY INVITATION.` are added to
`ctas.md` §1 as locked strings.

## A6 — REDIRECTS

`/apply` → `/the-room` (301, in case the URL has been shared). `/tickets`, `/register`, `/pricing` →
`/the-room`.

## A7 — CONVERSION IS NOW MEASURED DIFFERENTLY

The site's conversions are: partner enquiries submitted, institutional enquiries submitted, ATHLIMA 20
alerts captured, Journal subscriptions, and depth of reading. There is no application funnel to review.
GA4 events and the launch checklist follow.

---

## WHAT THIS DOES NOT DECIDE

The same conversation floated a new navigation (WHY ATHLIMA / THE EXPERIENCE / THE PEOPLE / THE
OPPORTUNITY / THE THINKING / ATHLIMA 2026), a new arrival line (*SPORT BUILDS BETTER PEOPLE. A BETTER
INDIA.*), a People page of curated profiles, a partner showcase and a twenty-section
`ATHLIMA_WEBSITE_MASTER_ARCHITECTURE.md`. It called them hypotheses. **They are not applied.** They wait
for the master architecture document to land in `01_STRATEGY/`, after which a Phase 0 audit is run
against it and the build changes once. Two of them will meet the claims discipline when they arrive: no
person and no partner logo renders without written confirmation, whatever the architecture says.
