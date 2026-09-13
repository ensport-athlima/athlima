# BRAND PILLARS
### The five-pillar ecosystem taxonomy — and how it works as a real information architecture

---

## 1. WHY THIS FILE EXISTS

`brand-strategy.md` introduces BUILD · EQUIP · ENABLE · PERFORM · GOVERN. This file specifies how they
behave in the product, because a taxonomy that is only a graphic on one page is decoration, and a taxonomy
that is wired into the CMS is infrastructure.

**The pillars are a real, queryable dimension of the site.**

---

## 2. THE FIVE PILLARS IN FULL

### 01 — BUILD
> *The physical and institutional foundations of sport.*

**Covers:** infrastructure, architecture, development, stadiums, training centres, sports cities, mixed-use
development, urban planning, active cities, facility operation, PMC and consultancy.

**Speaks to:** developers, architects, infrastructure companies, PMCs, urban planners, facility operators,
government infrastructure departments.

**Maps to:** ATHLIMAX pavilion 04 (Infrastructure & Active Cities) · Symposium theme *Infrastructure & Cities*

**Website tone for BUILD content:** the most architectural. Plans, sections, scale, materials, light.

---

### 02 — EQUIP
> *Everything that enables sporting performance.*

**Covers:** equipment, sports technology, AI, data, wearables, analytics, smart venues, performance apparel,
nutrition, hydration, recovery, sports medicine, broadcast technology.

**Speaks to:** brands, manufacturers, technology companies, sports-tech founders, nutrition and recovery
businesses.

**Maps to:** ATHLIMAX pavilions 01 (Performance & Equipment), 02 (Health, Wellness & Recovery) and
03 (Technology & Innovation) · Symposium theme *Technology & Innovation* · ACTIV8 zones *Technology*
and *Recovery*

**Website tone for EQUIP content:** precise, technical, product-literate. The place where specification is
attractive rather than dry.

---

### 03 — ENABLE
> *The organisations that create pathways into sport.*

**Covers:** academies, clubs, schools, universities, foundations, sports operators, community programmes,
grassroots pathways, coaching education.

**Speaks to:** club and academy operators, educators, foundations, CSR leaders, community sport organisations.

**Maps to:** ATHLIMAX pavilions 04 (in part) and 05 (Media, Content & Entertainment) · Symposium themes
*The Next Generation* and *Culture & Impact* · ACTIV8 zone *Community* · ATHLIMA 20 nomination network

**Website tone for ENABLE content:** the warmest and most human of the five. Pathways, people, places.

---

### 04 — PERFORM
> *The people and systems that actually produce performance.*

**Covers:** athletes, coaches, high performance, sports science, sports medicine, mental performance,
fitness, recovery protocols, athlete care and longevity.

**Speaks to:** athletes, coaches, performance directors, sports scientists, physiotherapists, high-performance
centres.

**Maps to:** ATHLIMAX pavilions 01 and 02 · Symposium themes *The Next Generation* and *Culture & Impact* ·
ACTIV8 zones *Performance*, *Play* and *Live Experiences* · **ATHLIMA 20 in full**

**Website tone for PERFORM content:** the most physical and the most cinematic. Bodies, effort, breath, light.

---

### 05 — GOVERN
> *The institutions that shape the rules, policy and direction of sport.*

**Covers:** central and state government, sports departments, federations, sports authorities, governing
bodies, policy, regulation, public-sector institutions, sports law.

**Speaks to:** government, federations, policymakers, institutional leadership, sports lawyers, public-sector
decision-makers.

**Maps to:** ATHLIMAX pavilion 06 (Investment, Policy & Impact) · Symposium themes *Policy & Governance*
and *Investment & Economics*

**Website tone for GOVERN content:** the most formal and restrained. No hyperbole, no motion flourishes.
This audience is the most sceptical and the most valuable.

---

## 3. THE PILLARS AS PRODUCT

### 3.1 The CMS model
Every content object carries one or more pillar tags:

| Content type | Pillar tag |
|---|---|
| Journal article | 1–2 (required) |
| Symposium session | 1–2 (required) |
| ATHLIMAX pavilion | 1–3 (required) |
| Partner | 1–2 (required) |
| Person / speaker | 1–2 (required) |
| Film | 1–2 (optional) |
| ATHLIMA 20 athlete | always PERFORM |

Enforce at the schema level. A piece of content that cannot be classified into a pillar probably does not
belong on the site.

### 3.2 Real routes
`/journal/pillar/build` and equivalents are shareable, crawlable routes — not query strings and not
client-side filter state. The path form is what `02_INFORMATION_ARCHITECTURE/sitemap.md` registers and
what `06_BUILD/seo.md` puts in the sitemap. A
developer reading the site should be able to send a colleague *"everything ATHLIMA has on infrastructure"*
as a single link.

### 3.3 Cross-linking
Every pillar page links to: its Symposium themes, its ATHLIMAX pavilions, its Journal cluster, and the
audience doorway most associated with it. This is what makes the ecosystem feel connected rather than
asserted to be connected.

### 3.4 The visual system
Each pillar has an **icon** and a **position in the sequence**, but **no colour of its own**. The palette
stays black, white and lime (with AFTERHOURS as the single exception). Five pillar colours would fracture
the identity into a chart.

---

## 4. THE FIVE-PILLAR DIAGRAM

This appears at least twice on the site — on The World, and on the About/ENSPORT section — and it must be
the same diagram both times.

**Rules for it:**
- The pillars sit in a fixed order: BUILD · EQUIP · ENABLE · PERFORM · GOVERN. Never reordered.
- They converge on the ATHLIMA mark. The convergence is the message: *five dimensions, one platform*.
- The brochure's own line goes with it: **ONE ECOSYSTEM. FIVE DIMENSIONS. ONE PLATFORM DESIGNED TO
  CONNECT THEM.**
- It is built as inline SVG with real text, not an image. It is navigable — each pillar is a link.
- Under reduced motion it renders complete and static, and it must be legible as a static picture. If the
  diagram only makes sense once it has animated, the diagram is wrong.

---

## 5. PILLARS vs IPs — DO NOT CONFUSE THESE

This is the most common conceptual error when working on ATHLIMA, and it produces incoherent pages.

| | Pillars | IPs |
|---|---|---|
| **What they are** | A taxonomy of the *ecosystem* | A set of *experiences* |
| **Count** | 5 | 6 |
| **Question answered** | *What part of sport is this about?* | *What happens at ATHLIMA?* |
| **Examples** | BUILD, PERFORM | ATHLIMAX, ACTIV8 |
| **Site role** | Classification and filtering | Navigation and destination |
| **Visual** | Icons in a diagram | Full worlds with their own imagery |

### And a third thing the pillars are not: the four stakeholder groups
SPORT · INSTITUTIONS · BUSINESS · CAPITAL describe **who is in the room**. BUILD · EQUIP · ENABLE ·
PERFORM · GOVERN describe **what part of the ecosystem a thing is about**. CAPITAL has no pillar of its
own because capital is not a part of sport — it is a party that acts on every part of it. This is why the
application form asks for a *sector* (the stakeholder group) **and** for pillars: they are orthogonal, and
an investor answers CAPITAL for one and BUILD or EQUIP for the other.

**They intersect, they do not map one-to-one.** A single Symposium session can be GOVERN + BUILD. A single
partner can span EQUIP and PERFORM. Any attempt to force five pillars onto six IPs — or the reverse —
breaks both.

**The rule for a page:** an IP page is a place. A pillar page is a filter. Never build a pillar page that
pretends to be a place.
