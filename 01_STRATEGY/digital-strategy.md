# DIGITAL STRATEGY

> How ATHLIMA behaves online, across the whole year — not just how the website looks.

---

## 1. THE DIGITAL PROPOSITION

The website is not a description of ATHLIMA. It is **the first room a visitor enters** — and for most of
the audience, the only one they will ever be in.

Consequence: the site must deliver a version of the ATHLIMA experience, not a report on it. Someone who
never gets into The St. Regis should still be able to say *"I understand what that is, and I want in."*

---

## 2. THE THREE-SURFACE MODEL

ATHLIMA's digital presence is three surfaces with three different jobs. Confusing them is how event
websites become bloated.

### SURFACE 01 — THE SITE (athlima.in)
**Job:** convince and convert. Establish institutional credibility. Own the ideas.
**Register:** the most controlled and considered. Slowest to change.
**Audience:** everyone, through six doorways.

### SURFACE 02 — THE JOURNAL (athlima.in/journal)
**Job:** earn attention, links and authority between editions. The reason to return.
**Register:** editorial, generous, useful. The one place ATHLIMA gives without asking.
**Audience:** the industry, search, and press.
**Note:** structurally part of the site, strategically a different product. It has its own rhythm and its
own success measures.

### SURFACE 03 — SOCIAL & OUTBOUND
**Job:** distribution. Drive to the site; never substitute for it.
**Register:** the same voice, shorter.
**Rule:** every campaign lands on a real page with a real URL. **Never build a campaign whose destination
is a social post.** If a thing is worth saying, it is worth a page.

---

## 3. WHAT THE SITE DOES THAT PRINT CANNOT

The brochure is excellent. There are exactly five things the website can do that it cannot, and these are
where the build effort concentrates. Anything that is not on this list is the brochure with a scrollbar.

### 3.1 MOTION AS MEANING
Not decoration. The ecosystem *connecting* is an idea that only moves in time. The six IPs converging on
one mark, the five pillars resolving into one platform, the partner journey advancing through seven stages
— these are arguments that animation can make and a page cannot.

### 3.2 THE ROOM, DEMONSTRATED
Print lists who is in the room. The site can let a visitor *interrogate* it — filter the composition by
sector, see the cross-sector adjacencies, understand who they would sit beside. This is the highest-value
interactive idea on the site and the one worth building properly.
`[TO VERIFY]` — depends entirely on what can be published under the claims discipline. Build it to work
with categories and counts even if no individual names are ever shown; the *composition* is the point,
not the celebrity.

### 3.3 SELF-SELECTION
Print speaks to everyone at once. The site lets six audiences each find their own doorway. See
`audiences.md`.

### 3.4 LIVING CONTENT
The Journal, ATHLIMA 20's 20-day reveal, films, the post-event archive. The site is the only surface where
ATHLIMA exists in December *and* in June.

### 3.5 THE ACTUAL CONVERSION
Applications and partner enquiries. Print ends in an email address. The site ends in a qualified,
structured, tracked submission.

---

## 4. THE CONTENT ENGINE

The Journal is not a blog. It is how ATHLIMA becomes an authority rather than an occasion.

**Structure:** five pillar clusters, matching BUILD · EQUIP · ENABLE · PERFORM · GOVERN. Each has one
definitive, maintained pillar piece and a growing set of cluster articles that link up to it.

**Formats, in descending order of strategic value:**

| Format | Why |
|---|---|
| **Original data / research** | The only content that reliably earns citations and links. One ATHLIMA index a year is worth fifty opinion pieces. |
| **Long-form interviews** | Access is ATHLIMA's asset. Interviews prove the access is real. |
| **Athlete stories** | ATHLIMA 20. The most human, most shareable, most distinctive. |
| **Symposium extensions** | A session becomes an article becomes a citation. Extends December into the year. |
| **Explainers** | *How sports infrastructure actually gets financed in India.* Ranks, and is genuinely useful. |
| **Films** | Highest production cost, highest brand value, lowest SEO value. Budget accordingly. |

**The cadence that matters:** one excellent piece a fortnight beats four thin ones a week. Thin content
suppresses the good content around it.

**The signature format worth building:** *ATHLIMA Conversations* — one person, one idea, 20 minutes read
or 20 minutes watch. Repeatable, ownable, and it uses the access ATHLIMA already has.

---

## 5. THE YEAR-ROUND CALENDAR

The site has to work in all three phases without a rebuild. See `brand-strategy.md` §8.

**This table defines the `phase` enum used throughout the build: `foundation` · `build` · `approach` ·
`live` · `legacy`. Dates are relative to the December 2026 edition and shift each year.**

| Phase | Site emphasis | Primary CTA |
|---|---|---|
| **Foundation** (start → 12 months out) | Positioning, ENSPORT/ENARR credibility, Journal launch, partner acquisition | Partner with ATHLIMA |
| **Build** (12 → 6 months out) | Programme reveal, Advisory Council (as confirmed), ATHLIMA 20 nominations open, Symposium themes | Apply / Nominate |
| **Approach** (6 months out → the day before) | ATHLIMA 20 twenty-day reveal, confirmed programme, guest composition, final applications | Apply |
| **Live** (14–15 December) | Live programme, moments, the ATHLIMA 20 class | Follow live |
| **Legacy** (16 December → the next cycle) | Films, outcomes, the 2026 class, what happens next | Stay in touch for 2027 |

**Build consequence:** the homepage hero, the primary CTA and the featured content are all CMS-driven.
Changing phase is a content operation, not an engineering one.

---

## 6. CONVERSION ARCHITECTURE

Three conversions, in commercial priority order.

### 6.1 PARTNER ENQUIRY — highest value
- Route: `/partner` → `/partner/enquire`
- One page, nine fields, locked in `04_CONTENT/ctas.md` §3.
- **Never** a pricing table. **Never** a package selector. Every proposition is built around what the
  organisation wants to own, and the form must say so.
- Goes to a named human, with a stated response time.
- **Success = a conversation booked, not a form submitted.**

### 6.2 GUEST APPLICATION — highest volume
- Route: `/apply`
- Four steps, eleven fields, locked in `04_CONTENT/ctas.md` §2.
- Language throughout is **apply**, never *register* or *book*.
- Explicitly states: applications are reviewed; not all are accepted; a decision arrives by a stated date.
- The friction is the feature. A frictionless application devalues the room.

### 6.3 ATHLIMA 20 NOMINATION — seasonal — **v2**
- Route: `/athlima-20/nominate` — **does not ship at launch** (decision D4). In v1, `/athlima-20` carries
  the pre-window state: the opening month and an email capture.
- When built: only live during the nomination window; otherwise the designed pre-window or
  post-selection state.
- Nominator details, athlete details, discipline, achievements, supporting links.
- Must work well on a phone. Coaches will fill this in from the side of a pitch.
- Collects minors' data. Gated on DPDP Act legal review. See `08_OPERATIONS/v2-backlog.md`.

### The universal rules
- Every destination page has **at most one Tier-2 emotional CTA and one Tier-2 functional CTA.** Utility
  and sub-pages carry a functional CTA only. Never three. (`04_CONTENT/ctas.md` §6 is the source of truth.)
- APPLY is permanently visible at every breakpoint.
- No form asks for anything that will not be used.
- Every submission gets a real confirmation page with a URL, plus a confirmation email, plus a stated
  next step and timeframe.

---

## 7. MEASUREMENT

**The five numbers that matter**, in order:

1. Qualified partner enquiries — measured by organisation quality, not count
2. Guest applications, and their acceptance rate — a falling acceptance rate means the site is attracting
   the wrong people
3. Doorway click-through from the homepage — the health of the self-selection model
4. Journal returning visitors — the health of the year-round platform
5. Scroll depth to the homepage portals — whether the top of the page is doing its job

**Deliberately not tracked as a success measure:** total pageviews, social followers, session duration.
None of them tell you whether the right person applied.

---

## 8. TECHNICAL POSTURE

Detail lives in `06_BUILD/`. The strategic commitments:

- **Fast is a brand attribute.** A cinematic site that takes six seconds is not premium. See
  `06_BUILD/performance.md` — the budgets are hard limits.
- **Built for a mid-range Android on Indian mobile data**, not only for a MacBook on office wifi. This is
  where the majority of the audience actually is.
- **Accessible to WCAG 2.2 AA.** Non-negotiable, and not in tension with the design ambition.
- **Owned, not rented.** A real codebase the team controls, because ATHLIMA is a multi-year platform.
- **Content team independent of engineering.** Sanity, so the Journal ships without a deploy.

---

## 9. WHAT WE ARE DELIBERATELY NOT BUILDING IN V1

Saying no is what makes the yes possible in the time available.

- ❌ Ticketing, payments, e-commerce
- ❌ The ATHLIMA 20 nomination form — v2, after DPDP legal review (decision D4)
- ❌ The interactive EcosystemMap — v2, when relationship data exists (decision D6)
- ❌ A logged-in guest portal or delegate app
- ❌ Live streaming infrastructure
- ❌ A partner dashboard
- ❌ Multi-language (Hindi is a v2 decision, and a real one)
- ❌ Personalisation and behavioural targeting
- ❌ A chatbot
- ❌ AR/VR/3D venue walkthroughs
- ❌ A dark/light theme toggle — ATHLIMA is dark; that is the identity

Each of these is defensible later. None of them is what makes the difference between a good ATHLIMA site
and a great one.
