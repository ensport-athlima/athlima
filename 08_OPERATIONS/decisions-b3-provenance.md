# DECISION B3 — PROVENANCE, ENTITY AND THE ENARR RELATIONSHIP
### Approved by the project owner, 13 September 2026

> **B3 is closed.** This file is the source of truth for every mention of ENSPORT Ventures and The ENARR
> Group on the site. Where `04_CONTENT/people.md`, `04_CONTENT/homepage.md` screen 07, `05_MEDIA/README.md`
> or `01_STRATEGY/brand-strategy.md` §7 disagree with it, **this file wins** — amend them.
>
> Two items remain open and are tagged `[TO VERIFY — B3a]` and `[TO VERIFY — B3b]`. They are compliance
> points, not copy points, and they do not block the copy.

---

## 1. THE LEGAL ENTITY

**ENSPORT Ventures Private Limited**
**CIN: U93110MH2026PTC474328**

Use the **full legal name** in the legal footer and in the legal pages. Do not abbreviate to
"ENSPORT Ventures Pvt. Ltd." in any formal or legal line.

*In running body copy, "ENSPORT Ventures" alone remains correct and preferred — the full form is for the
statutory line only.*

---

## 2. THE ADDRESS — AND THE OPEN COMPLIANCE POINT

**Corporate / Mumbai office:**
324, A to Z Estate, G K Marg, Lower Parel West, Mumbai – 400013, Maharashtra, India

This is The ENARR Group's publicly listed corporate address.

### `[TO VERIFY — B3a]` — do not label this the registered office until checked

The project owner correctly flagged that this address must not be silently represented as ENSPORT Ventures
Private Limited's **registered office** unless it matches the company's MCA record.

**There is a second, sharper reason to resolve this.** Section 12(3)(c) of the Companies Act 2013 requires
a company to display, on its website, its **name, the address of its registered office, its CIN, its
telephone number and its email address**. A footer carrying the CIN but only a corporate office and a city
does not satisfy that requirement.

**So three things are needed before launch, not one:**
1. ENSPORT Ventures Private Limited's **registered office address** per its MCA record.
2. A **telephone number** for the statutory line.
3. An **email address** for the statutory line.

If the registered office is the Lower Parel address, one address serves both purposes. If it differs, the
statutory line carries the registered office and the site may still present the Lower Parel address
separately as the Mumbai office.

**Until resolved:** label it **Corporate Office** or **Mumbai Office**. Never "Registered Office".

---

## 3. THE CORPORATE SITE

**Yes — `https://www.enarr.com`**

**Strip the tracking parameter.** The URL supplied carried `?utm_source=chatgpt.com`. The href is
`https://www.enarr.com` and nothing else. A tracking parameter from a copy-paste has no business on a
client's institutional link, and it would appear in the page source of every visitor's view.

### Placement — restrained, per the owner's direction
Not in the primary navigation. Not a prominent CTA. It sits quietly beneath the institutional/about
section:

> ATHLIMA is an ENSPORT Ventures initiative, within the ENARR Group.
> **Explore the Group →**

**Tier 3 inline CTA.** `rel="noopener"`. Add to `04_CONTENT/ctas.md` §1 Tier-3 table, replacing the
provisional `ABOUT ENSPORT VENTURES →` entry and its `[TO VERIFY]` tag.

This keeps ATHLIMA the protagonist while giving an institutional visitor a legitimate route to the parent.

---

## 4. THE COPY — APPROVED

The previous line — *"The ENARR Group brings a multi-generational institutional history across enterprise,
finance, industry and philanthropy"* — is **withdrawn**. It reads as registry boilerplate.

### 4a. The provenance paragraph — homepage screen 07 and `/about` section 03

> ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group, bringing together sport, business,
> capital, institutions and ideas around the future of performance in India. Built on the Group's broader
> experience across finance, enterprise, industry, media and philanthropy, ATHLIMA exists to create **the
> room** where the people shaping Indian sport can connect, collaborate and build what comes next.

**One editorial change from the approved draft: "the rooms" → "the room".** Singular. The whole site is
built on one room — `website-thesis.md` §1, *"ATHLIMA is a room. The website is the door."* The plural
dilutes the central metaphor at the exact moment the argument lands. Everything else is verbatim.

### 4b. The About micro-copy — `/about` section 01

> ATHLIMA is India's platform for the business, culture and future of sport.
>
> Across athletes, federations, government, capital, brands, institutions and the next generation, ATHLIMA
> creates a connected environment for the conversations, relationships and opportunities that move sport
> forward.

**Optional tightening, owner's call:** *"creates a connected environment for"* → *"connects"*. The shorter
form is more in voice (`voice-and-tone.md` §2 rule 03 — concrete over abstract). Approved copy stands
unless the owner takes the edit.

### 4c. The institutional line beneath it

> An ENSPORT Ventures initiative · ENARR Group

Set in `--fs-label`, `--ink-300`, `+0.14em`. The middot is a middot, per `iconography.md` §5.

### 4d. The footer

```
ATHLIMA 2026 · An ENSPORT Ventures initiative · ENARR Group
ENSPORT Ventures Private Limited · CIN U93110MH2026PTC474328
[registered office address]  [TO VERIFY — B3a]
[telephone]  ·  [email]      [TO VERIFY — B3a]
```

The first line is brand. The rest is the statutory block: `--fs-caption`, `--ink-400`, quiet, complete.

`[TO VERIFY — B3b]` The three bracketed values above must be supplied before launch. Until then the footer
renders the first two lines only, and `07_QA/launch-checklist.md` T-3 gains a line requiring the statutory
block to be complete and checked against the MCA record.

---

## 5. TERMINOLOGY CHANGE — APPLIES SITEWIDE

The owner's word is **"initiative"**, not "IP".

- ✅ *ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group.*
- ❌ *ATHLIMA is an IP of ENSPORT Ventures Pvt. Ltd.*

"IP" is internal, commercial language borrowed from the brochure's partner deck. On a public institutional
page it reads as an asset class rather than as a thing someone is building. Replace every public-facing
instance. Internal strategy files may keep "IP" where they describe the six sub-brands as a portfolio —
that usage is unaffected.

---

## 6. WHAT THIS UNBLOCKS

| Was blocked | Now |
|---|---|
| Homepage screen 07 (provenance) | Ships with final copy |
| `/about` sections 01 and 03 | Ships with final copy |
| The `/about` outbound CTA | Real destination: `https://www.enarr.com` |
| Footer brand lines | Ship |
| Footer statutory block | Still `[TO VERIFY — B3a/b]` — renders partially |
