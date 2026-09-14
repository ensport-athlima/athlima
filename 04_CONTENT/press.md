# PRESS
### `/press` — fact sheet, boilerplate, assets, contact

> **Role in the experience:** Credibility, cheaply. Journey 06 converts on this page being *complete*: a
> journalist who has to email for basic facts writes a thinner story, or none. It is T4 utility and it
> must be finished at launch (`user-journeys.md`, cross-journey finding 7).
>
> **Tier:** T4 Utility. Functional CTA only: `DOWNLOAD THE PRESS KIT`. Density 10 / 20 / 70.
> **Claims discipline applies with full force here** — this is the page most likely to be quoted verbatim.
> **Written 13 September 2026 by decision D29.**

**Five sections**
```
01 ENTRY          one line
02 THE FACT SHEET what, when, where, who, how many, run by whom
03 BOILERPLATE    three lengths, approved, verbatim
04 ASSETS         the press kit
05 CONTACT        a named person, a real email, a real phone
```

---

## SECTION 01 — ENTRY

**Eyebrow:** `PRESS`

**Display — `--fs-display-lg`**
```
THE FACTS,
IN ONE PLACE.
```

**Lead — `--fs-body-lg`**
> Everything a journalist needs to write about ATHLIMA accurately, without having to ask. If something you
> need is not here, the contact at the foot of the page is real and is monitored.

---

## SECTION 02 — THE FACT SHEET

**Section marker:** `01 ──── FACT SHEET`

A definition list, not a table of cards. Every line is a fact the repository can stand behind; anything
else is tagged and does not ship.

| | |
|---|---|
| **What** | ATHLIMA — India's Festival of Sport, Business & Performance. A curated, invitation-led platform for the people who build, equip, enable, perform and govern Indian sport. |
| **When** | 14–15 December 2026 |
| **Where** | The St. Regis Mumbai, 9th floor |
| **Edition** | The first. ATHLIMA 2026. |
| **The room** | 350 people, across four groups: sport, institutions, business and capital. By invitation. `[TO VERIFY — B1]` |
| **The six experiences** | ATHLIMAX (the marketplace) · The Symposium (the ideas) · ACTIV8 (the experience) · Afterhours (the culture) · ATHLIMA Connect (the relationships) · ATHLIMA 20 (the next generation) |
| **The five pillars** | BUILD · EQUIP · ENABLE · PERFORM · GOVERN |
| **Built by** | ENSPORT Ventures Private Limited (CIN U93110MH2026PTC474328), within the ENARR Group — decision B3. In running copy: *an ENSPORT Ventures initiative within the ENARR Group*. |
| **Website** | athlima.in |

**Deliberately absent:** partner names, speaker names, Advisory Council members, attendance figures other
than the room size, and statistics about the Indian sports economy. Each appears only when confirmed in
writing and sourced (`positioning.md` §6–7). The fact sheet does not say "to be announced" — it simply
does not list what is not confirmed.

---

## SECTION 03 — BOILERPLATE

**Section marker:** `02 ──── BOILERPLATE`

Three lengths, **verbatim from `01_STRATEGY/positioning.md` §9 — approved, and not to be reworded.** Each
with a copy-to-clipboard control (`COPY`), labelled.

**Five words**
> The room where Indian sport meets.

**One sentence**
> ATHLIMA is a curated, invitation-led platform bringing together 350 of the most consequential people
> across Indian sport, business, government and capital — in Mumbai, on 14–15 December 2026.

**One paragraph**
> ATHLIMA is India's Festival of Sport, Business & Performance — a curated, invitation-led platform built by
> ENSPORT Ventures within The ENARR Group. Across two days at The St. Regis Mumbai, it brings together 350
> of the people who build, equip, enable, perform and govern Indian sport: athletes and federations,
> government and institutions, developers and investors, technology companies and brands. Through six
> connected experiences — ATHLIMAX, The Symposium, ACTIV8, Afterhours, ATHLIMA Connect and ATHLIMA 20 — it
> creates the conditions for relationships that Indian sport currently has no reliable way of forming.
> The ambition is not to build the biggest sporting event in India. It is to build one of the most
> consequential rooms in Indian sport.

`[TO VERIFY — B1]` "350" in all three follows the room-size decision.

---

## SECTION 04 — ASSETS

**Section marker:** `03 ──── ASSETS`

**The press kit** — one download, `DOWNLOAD THE PRESS KIT`, a `.zip` served from the CDN with its size
stated beside the button. Contents:

| Asset | Requirement |
|---|---|
| The ATHLIMA wordmark | SVG and PNG, on black and on white, with clear-space guidance. `[TO VERIFY — B2: vector artwork does not yet exist]` |
| The six IP marks | As above. `[TO VERIFY — B2: ATHLIMA CONNECT and ATHLIMA 20 lock-ups do not exist even as raster]` |
| The fact sheet | As a PDF, generated from the same content as section 02 — never a second, hand-maintained copy. |
| The boilerplate | As a text file, the three lengths above. |
| Five approved images | Graded, captioned, credited, with rights cleared for editorial use. `[TO VERIFY — B2: no photography exists yet. Until it does, the kit ships without images rather than with generated imagery presented as ATHLIMA.]` |
| Usage note | One paragraph: how the marks may and may not be used; that ATHLIMA is always set in capitals. |

**On the page:** the wordmark and the six marks shown at modest scale on `--ink-900`, each with an
individual `SVG` / `PNG` download, labelled. No ENARR or ENSPORT marks in the kit until B3 confirms the
Group permits their distribution.

---

## SECTION 05 — CONTACT

**Section marker:** `04 ──── PRESS CONTACT`

**Display — `--fs-display-md`**
```
A REAL PERSON.
```

| | |
|---|---|
| **Name** | `[TO VERIFY — the named press contact]` |
| **Role** | `[TO VERIFY]` |
| **Email** | `[TO VERIFY — a monitored address]` |
| **Phone** | `[TO VERIFY — a number that is answered]` |

**Body**
> Interview requests, accreditation for December, and anything the fact sheet does not answer.
> `[TO VERIFY]` Whether press accreditation exists for the two days, and how it works, is not decided.
> Until it is, this page does not mention accreditation.

No form. A journalist on a deadline wants an address and a number, not a submit button.

---

## THE PAGE CHECK

- Every fact on the page appears in `01_STRATEGY/` or is tagged. Nothing is invented for completeness.
- The boilerplate is byte-for-byte `positioning.md` §9.
- The press kit downloads, opens, and contains what section 04 says it contains.
- The email receives mail and the phone is answered (launch checklist, T-1).
- No `[TO VERIFY]` and no bare bracket token renders.

**As built (14 September 2026):** sections 01–03 — the entry, the fact sheet as a `<dl>`, the three
boilerplates byte for byte from `positioning.md` §9 (diffed against the file), each with `COPY` /
`COPIED` (`CopyBlock`; the text stays plain and selectable when the clipboard is unavailable).
**Sections 04 and 05 are withheld:** no press kit can exist until B2 — the marks in the build are traced
placeholders and must not be distributed as brand assets, and there is no photography — so
`DOWNLOAD THE PRESS KIT` does not render; the press contact is four `[TO VERIFY]`s. Both return the day
they exist. Journey 06's "complete at launch" requirement is therefore **open** on the launch checklist.
