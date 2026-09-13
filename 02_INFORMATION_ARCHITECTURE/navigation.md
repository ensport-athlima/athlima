# NAVIGATION

> Restraint is the strategy. A visitor who sees fourteen menu items has been told that ATHLIMA is
> complicated. A visitor who sees five has been told it is confident.

---

## 1. THE PRIMARY NAVIGATION

```
ATHLIMA          THE WORLD     THE ROOM     PARTNER     JOURNAL          [ APPLY ]
(wordmark →/)                                                           (permanent)
```

**Four navigation items and one permanent CTA. This is locked.**

| Item | Route | Why it is here |
|---|---|---|
| **THE WORLD** | `/the-world` | The ecosystem and the six IPs. The "what is this" door. |
| **THE ROOM** | `/the-room` | Who is in it. The proof. The most distinctive item in the nav. |
| **PARTNER** | `/partner` | The primary commercial conversion. Earns a top-level slot on value. |
| **JOURNAL** | `/journal` | The year-round platform. Its presence in the nav is a statement that ATHLIMA is not only an event. |
| **APPLY** | `/apply` | Permanent, visually distinct, always visible. |

### What is deliberately NOT in the primary nav

| Omitted | Why | Reached via |
|---|---|---|
| The six IPs individually | Six items would double the nav and flatten the hierarchy. They are *inside* the world. | The World mega-panel, homepage portals |
| About / ENSPORT | Important, but not a browsing destination | Footer, and a homepage section |
| Programme | Phase-dependent; would be a dead item for most of the year | The World, footer, `/apply` |
| Contact | Never a primary nav item on a site with a permanent CTA | Footer |
| Audience doorways | They are a homepage mechanism, not a menu | Homepage, footer |
| Search | The site is 35 routes. Search implies you cannot find things. | — |
| Language switcher | Single language in v1 | — |

---

## 2. THE WORLD PANEL (desktop)

`THE WORLD` is the only nav item with a sub-panel. Hovering or focusing it opens a full-width panel — not
a dropdown list.

**Contents:**
- Left: the six IPs, as a vertical stack of large type with a one-line descriptor each. Hovering one
  changes the panel's background media to that IP's signature loop.
- Right: the five pillars as a compact diagram, each pillar a link to its Journal cluster.
- Bottom strip: `THE TWO DAYS →` linking to `/programme`.

**Rules**
- Opens on hover **and** on focus. Closes on Escape, on outside click, and on route change.
- Keyboard-operable as a real menu: arrow keys move between items, Escape returns focus to the trigger.
- Opening is under 250ms. Nothing about a menu should feel cinematic.
- Background media is muted, ≤ 1.5 MB, `preload="none"`, and never loads on a slow connection.
- **The panel must be fully usable with media disabled.** The type is the navigation; the video is a flourish.

Every other nav item is a direct link. No other dropdowns.

**As built (13 September 2026):** no background media in the panel until the loops exist (B2) — the type
is the navigation. The six IPs use the typeset mark fallback (B2).

---

## 3. NAVIGATION BEHAVIOUR

### Desktop
- Fixed to the top. Always present.
- **At rest over dark content:** transparent background, white type, lime APPLY.
- **On scroll past 100px:** a subtle backdrop appears — a near-black surface at high opacity, not a blur
  panel. No frosted glass.
- **Over a light section:** inverts to black type via the `data-surface="light"` attribute on the section.
  The nav reads the nearest surface, it does not guess.
- Never hides on scroll on desktop. Persistent presence reads as institutional; a nav that plays
  hide-and-seek reads as a marketing site.

### Mobile
- A slim top bar: the wordmark and a menu control.
- The menu control is a labelled **MENU** / **CLOSE**, not a bare hamburger. One extra word, far more
  clarity.
- Opening it takes over the full screen: the four navigation items as large type, generous spacing, the six
  IPs listed beneath THE WORLD as a secondary tier, then About / Programme / Contact / Press as a tertiary row.
- **APPLY** is not in the mobile menu — it is a permanent bottom bar, always visible, so it is reachable
  without opening anything.
- Focus is trapped while open. Escape closes. Route change closes. Background scroll is locked, and the
  scroll position is restored exactly on close.

### The mobile APPLY bar
- Bottom-anchored, respecting `env(safe-area-inset-bottom)`.
- Hides on scroll-down, reveals on scroll-up.
- The page carries bottom padding equal to the bar height so it never covers the last line of content.
- Present on every route except `/apply` itself, where it would be pointing at the current page.

---

## 4. SECONDARY NAVIGATION

### Within THE WORLD
The six IPs are peers. Every IP page carries a persistent horizontal rail of the other five at its foot,
so a visitor can move sideways through the ecosystem without returning to the index. This is what makes
six pages feel like one world.

### Within PARTNER
A simple sub-nav: `THE PROPOSITION · THE MODEL · THE JOURNEY · ENQUIRE`. Four items, current state
indicated by more than colour.

### Within JOURNAL
Filter by pillar (five) and by series (three). Filters are real URLs. Never a select element styled to
look like a filter — real links, crawlable.

---

## 5. THE FOOTER

The footer is where the completeness lives, so the header can stay minimal. It is generous, well-typeset,
and worth reading.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ATHLIMA                                                                     │
│  THE BUSINESS OF SPORT. THE FUTURE OF INDIA.                                 │
│                                                                              │
│  14–15 DECEMBER 2026 · THE ST. REGIS MUMBAI                     [ APPLY ]    │
├──────────────────────────────────────────────────────────────────────────────┤
│  THE WORLD        THE ROOM         PARTNER          MORE                     │
│  ATHLIMAX         The composition  The proposition  The Journal              │
│  The Symposium    Advisory Council*The model        About ATHLIMA            │
│  ACTIV8           Apply to attend  The journey      ENSPORT Ventures         │
│  Afterhours                        Enquire          The ENARR Group          │
│  ATHLIMA Connect                                    Press                    │
│  ATHLIMA 20                                         Contact                  │
│  The Two Days                                                                │
├──────────────────────────────────────────────────────────────────────────────┤
│  FOR BUSINESS · FOR ATHLETES · FOR CAPITAL · FOR INFRASTRUCTURE ·            │
│  FOR INSTITUTIONS · FOR BRANDS                                               │
├──────────────────────────────────────────────────────────────────────────────┤
│  [ENARR mark]  [ENSPORT mark]                                                │
│  ATHLIMA 2026 · An ENSPORT Ventures initiative · ENARR Group                 │
│  ENSPORT Ventures Private Limited · CIN U93110MH2026PTC474328                │
│  [registered office] · [telephone] · [email]        [TO VERIFY — B3a/B3b]    │
│                                                                              │
│  Privacy · Terms · Cookies      © 2026 ENSPORT Ventures Private Limited      │
│                                          [social]                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Rules**
- The ENARR and ENSPORT marks appear at their own colours, never recoloured to lime, with generous clear space.
- No newsletter form in the footer — the Journal owns subscription, in context, where it is earned.
- Social icons are small and last. They are an exit, not a destination. `[TO VERIFY]` Which accounts
  exist (LinkedIn, Instagram, X, YouTube?) — none render until confirmed.
- **The entity block (decision B3 §4d):** line one is brand, the rest is the statutory block —
  `--fs-caption`, `--ink-400`, quiet, complete. The full legal name and the CIN, never "Pvt. Ltd.".
  Until the registered office, telephone and email are supplied (`[TO VERIFY — B3a/B3b]`, Companies Act
  2013 s.12(3)(c)) the footer renders the first two lines only — launch checklist T-3.
- **As built (13 September 2026):** the ENARR and ENSPORT marks are the supplied cut-outs on their own
  plates (ENARR light, ENSPORT black); "ENSPORT Ventures" and "The ENARR Group" in MORE link to `/about`,
  which carries the one outbound link (B3 §3 — the corporate site is not in the navigation).
- **`*` Advisory Council is conditional.** The link renders only when the route exists (five or more
  members confirmed — see `sitemap.md` §4). It is never a link to a 404, because `06_BUILD/seo.md`
  requires zero 404s from internal links.
- The footer is a real `<footer>` landmark with proper heading structure, not a wall of anonymous links.

---

## 6. WAYFINDING

**The visitor must always be able to answer: where am I, and what is around me?**

- Every page states its own name in large type within the first viewport.
- The nav marks the current section with an underline **and** `aria-current="page"` — colour alone is not
  enough.
- The six IP pages carry an eyebrow: `THE WORLD / ATHLIMAX`.
- Journal articles carry a breadcrumb: `JOURNAL / BUILD / [title]`, with `BreadcrumbList` JSON-LD.
- Nested partner pages carry `PARTNER / THE MODEL`.
- **No breadcrumbs on top-level pages.** A breadcrumb reading `HOME / THE WORLD` is noise.

---

## 7. THE ENTRY SEQUENCE AND THE NAVIGATION

The homepage entry sequence does not change the navigation.

- The nav is **present in the DOM and painted from the first byte** — it is never injected, hidden or
  delayed by the sequence. The entry sequence is an overlay on a finished hero (`03_DESIGN_SYSTEM/motion.md`
  §7, decision D1); the nav sits beneath it, visible, throughout.
- **It is keyboard-reachable throughout, including during the sequence.** A user who tabs immediately must
  reach the skip link and then the navigation. An animation must never trap a keyboard user in an intro.

---

## 8. THE NAVIGATION TEST

Before the nav is signed off, five people who have never seen ATHLIMA are asked to find, without help:

1. What ATHLIMA actually is
2. When and where it happens
3. How to apply
4. What ATHLIMA 20 is
5. Who is behind it

**Any task that takes more than 15 seconds or more than three clicks is a navigation failure**, and it is
fixed in the navigation — not by adding a menu item.
