# THE JOURNAL
### The content engine — and the reason ATHLIMA exists after 15 December 2026

---

## 1. WHY THE JOURNAL MATTERS MORE THAN IT LOOKS

The Journal is not content marketing. It is the mechanism that makes the closed room worth applying to.

The strategy, from `01_STRATEGY/website-thesis.md` §6:

> **OPEN THINKING. CLOSED ROOM.**
> Never gated: the thinking. Always gated: the room.

The public thinking builds the reputation. The reputation makes the room worth entering. That is the
entire growth model.

And it converts directly: **one of the six user journeys converts through the Journal alone** — a
developer who reads two good articles and decides ATHLIMA is credible before ever reading a marketing
page. See `user-journeys.md`, Journey 05.

---

## 2. THE LAUNCH REQUIREMENT — A HARD GATE

> **The Journal launches with six substantial articles: one per pillar, plus a second BUILD piece —
> each over 900 words, each genuinely useful.**
>
> BUILD gets two because it is the cluster that converts the infrastructure audience on its own. See
> `02_INFORMATION_ARCHITECTURE/user-journeys.md`, Journey 05.

This is a content deadline, not an engineering one, and it gates launch.

**A pillar cluster with one thin article is worse than no Journal at all.** An empty Journal on a site
that claims year-round authority actively undermines the claim.

---

## 3. THE STRUCTURE

**Topic clusters, not a feed.** Five clusters, matching the five pillars.

```
/journal                          the index
/journal/pillar/build             cluster
/journal/pillar/equip             cluster
/journal/pillar/enable            cluster
/journal/pillar/perform           cluster
/journal/pillar/govern            cluster
/journal/series/conversations     series
/journal/series/research          series
/journal/series/athlete-stories   series
/journal/[slug]                   article
```

Each cluster eventually has **one definitive pillar piece** — long, maintained, updated — with cluster
articles hanging off it. Every cluster article links up to its pillar piece. Every pillar piece links down
to its clusters. That is the entire SEO mechanism; do not overcomplicate it.

### The five pillar pieces to commission
| Pillar | The definitive piece |
|---|---|
| BUILD | How sports infrastructure actually gets financed and built in India |
| EQUIP | The state of sports technology in India: what works, what is hype |
| ENABLE | India's academy and pathway system, mapped |
| PERFORM | Athlete performance, science and recovery in India |
| GOVERN | How Indian sport is actually governed — a plain-language map |

Each: 2,000+ words, sourced, updated annually, and the most useful thing on the internet about its subject.
That is the bar, and it is achievable — these subjects are badly served.

---

## 4. THE THREE SERIES

### ATHLIMA CONVERSATIONS
**The signature format.** One person, one idea, twenty minutes to read or watch.
Uses the access ATHLIMA already has. Repeatable, ownable, and the most distinctive thing the Journal can
publish. **Target: one a month** — see the operating rhythm in §10.

### ATHLIMA RESEARCH
Original data. **The only content that reliably earns citations and inbound links.** One properly-built
ATHLIMA index a year is worth fifty opinion pieces — and it gives journalists something to cite, which is
how a platform becomes a reference point.
Candidates: an infrastructure index, an investment tracker, an academy map, a recovery-practice survey.

### ATHLETE STORIES
ATHLIMA 20 and beyond. The most human and most shareable content on the site. Portrait-led. During the
twenty-day reveal, this series is the site's primary surface.

---

## 5. EDITORIAL STANDARDS

Every article, without exception:

| Requirement | Detail |
|---|---|
| **One primary intent** | Chosen before writing, recorded in the CMS |
| **A real byline** | Name, photograph, one-line bio. No "ATHLIMA Team" bylines. |
| **Dates** | `datePublished` and `dateModified`, both accurate, both in JSON-LD |
| **Sources** | Every figure sourced and dated. Every claim attributable. |
| **Internal links** | At least three, including one up to the pillar piece |
| **Outbound links** | At least one, to a credible source. Outbound links are a credibility signal, not a leak. |
| **A citable moment** | A pull-quote or a data point worth quoting. Citations are how you earn links. |
| **Length** | 900+ words for a cluster piece, 2,000+ for a pillar piece |
| **Pillar tag** | One or two, required |
| **OG image** | Generated per article with `next/og`, using the ATHLIMA type system. Not a logo on a black square. |

**Never:** AI-generated filler, keyword stuffing, thin syndicated content, or an article published to hit
a cadence. **One excellent piece a fortnight beats twenty thin ones** — and thin content actively
suppresses the good stuff around it.

---

## 6. THE ARTICLE PAGE

**Layout:** L6 Aside — main content in columns 1–8, sticky metadata in 10–12.

```
BREADCRUMB       JOURNAL / BUILD / [title]
PILLAR TAG       BUILD
TITLE            display-md, sentence case (permitted at display-md per typography.md §3)
STANDFIRST       body-lg, the promise of the piece in two sentences
BYLINE           portrait, name, role, date, reading time
HERO IMAGE       optional, 21:9
BODY             34em measure, 1.55 line-height, real typographic care
PULL QUOTES      display-sm, lime rule, breaking the measure
DATA MOMENTS     designed, sourced — see the dataviz guidance below
AUTHOR BIO       portrait, two lines, links
RELATED          three from the same pillar
SUBSCRIBE        inline, in context, where it has been earned
```

**Sticky aside:** pillar tag, share (`ShareRow`), and a link up to the pillar piece. Reading progress is
the 1px lime rule at the top of the viewport (`interaction-map.md` §2) — one indicator, not two.

**Typographic care in the body is what makes the Journal feel like a journal:**
real curly quotes, en dashes in ranges, non-breaking spaces before units, tabular figures in data,
a 62–75 character measure, and generous paragraph spacing. This is not fussiness — it is the difference
between a blog and a publication.

**Charts and data:** any chart follows the same restraint as the rest of the system. Black ground, lime as
the single accent for the series that matters, `--ink-300` for everything else, real axis labels, a visible
source line. Never a five-colour palette, never a pie chart, never a chart without a source.

---

## 7. THE INDEX PAGE

**Display:**
```
THE THINKING.
```
**Sub:** `IDEAS THAT MOVE INDIA.`

**Filters:** five pillars, three series. **Real URLs, real links, crawlable.** Never a styled `<select>`.

**Layout:** one featured piece at full width, then an editorial list — not a card grid. Each entry: pillar
tag, title, standfirst, byline, date, reading time, and a hairline. Same discipline as `IndexGrid`.

**Empty filter state:** `Nothing here yet. The [PILLAR] thinking is being written.`

---

## 8. SUBSCRIPTION

One list. No segmentation in v1.

**The offer, stated plainly:**
> New thinking on the business of Indian sport. Roughly fortnightly. Nothing else.

**Placement:** the Journal index and article footers. **Never** a
modal. **Never** in the site footer — subscription is earned in context.

**Confirmation:** `You're on the list. First piece lands soon.`

---

## 9. THE SEO MECHANICS

Covered fully in `06_BUILD/seo.md`. The Journal-specific points:

- `Article` JSON-LD on every piece, with author, dates and publisher
- `BreadcrumbList` on every article
- Slugs are the article's actual promise, never an ID or a date
- Pillar and series pages are indexable, with unique metadata written by a human
- Infinite scroll, if used at all, sits on top of paginated crawlable URLs
- ISR at 60 seconds, with on-demand revalidation from a Sanity webhook, so editors publish and see it live
- **The Journal is never gated.** Gate the room, never the thinking.

---

## 10. THE OPERATING RHYTHM

The Journal only works if it is maintained. This is an editorial commitment, not a launch task.

| Cadence | Output |
|---|---|
| Fortnightly | One substantial piece |
| Monthly | One ATHLIMA Conversation |
| Quarterly | One research or data piece |
| Annually | Each pillar piece reviewed and updated |
| During the 20-day reveal | Daily athlete stories |
| Post-event | Symposium sessions extended into articles — the highest-value, lowest-cost content ATHLIMA will ever have |

**The post-event conversion is the one to build the habit around.** A Symposium roundtable becomes a
2,000-word article becomes a citation becomes an inbound link becomes a reason someone applies for 2027.
That loop is what turns an annual event into an institution.
