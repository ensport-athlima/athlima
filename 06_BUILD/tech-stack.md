# TECH STACK

> **Status:** LOCKED. Do not substitute libraries without an explicit instruction from the project owner.
> **Governs:** every dependency decision in the repository.

---

## 1. THE DECISION

**Next.js (App Router) + TypeScript + Tailwind CSS + GSAP + Lenis, deployed on Vercel.**

This stack was chosen because ATHLIMA is an *art-directed, video-led, scroll-choreographed* site that also
needs to become a content/SEO engine (the Journal). That combination rules out both a pure static-site
generator and a page builder.

| Requirement | Why this stack answers it |
|---|---|
| Cinematic scroll choreography | GSAP + ScrollTrigger is the industry standard for timeline-based scroll work. Nothing else gives frame-accurate, scrubbed, pinned sequences with this level of control. |
| Heavy video, fast load | Next.js streaming + Mux adaptive playback + Vercel edge network. |
| Journal / editorial engine | Sanity as a headless CMS with ISR — editors publish without a deploy. |
| Multiple audience doorways with personalisation later | React state + server components make conditional journeys trivial. |
| Long-lived, not a one-off | A real codebase the team owns, not a licence-locked builder. |

---

## 2. LOCKED DEPENDENCIES

### Core
| Package | Version policy | Purpose |
|---|---|---|
| `next` | Latest stable major, App Router only | Framework |
| `react` / `react-dom` | Matched to Next | UI |
| `typescript` | Latest stable | **Strict mode on. No `any`.** |
| `tailwindcss` | v4.x | Styling |

### Motion
| Package | Purpose | Rules |
|---|---|---|
| `gsap` | All scroll choreography, timelines, pinning, scrubbing, text reveals | GSAP (including ScrollTrigger, SplitText, Flip and all former Club plugins) is free for commercial use. Use `@gsap/react`'s `useGSAP()` hook — **never** raw `useEffect` for GSAP. |
| `lenis` | Smooth scroll | Must be wired into `ScrollTrigger.scrollerProxy` / `ScrollTrigger.update` so GSAP and Lenis share one scroll source. Two competing scroll systems is the #1 cause of jank. |

**Prohibited motion libraries:** Framer Motion (do not run alongside GSAP — two animation runtimes, doubled
bundle, conflicting transforms), react-spring, AOS, Locomotive Scroll, ScrollMagic, anime.js.
One animation system. GSAP.

**Exception:** simple CSS transitions on hover/focus states are encouraged and should NOT be done in GSAP.
Rule of thumb — *if it is a state change under 300ms, use CSS. If it is choreography, use GSAP.*

### Media
| Package / service | Purpose |
|---|---|
| Mux (hosting + HLS delivery) | All hero and long-form video is uploaded to Mux and served as adaptive HLS with a chosen poster frame. |
| Native `<video>` + Mux HLS source | **The homepage hero.** A poster image painted at first byte, then a native `<video>` playing the Mux HLS URL after interactive (Safari plays HLS natively; elsewhere `hls.js` is lazy-loaded after interactive and counted in the app-code allocation). The Mux player component is **not** on the homepage (decision D2). |
| `@mux/mux-player-react` | Long-form and captioned video UI only (Journal films, ATHLIMA 20 films, Symposium extensions). **Dynamically imported on those routes only.** Never in the shared layout. |
| `next/image` | All stills. `sizes` is mandatory on every instance. |
| Inline `<video>` with `muted playsinline loop preload="none"` | Micro-films (5–8s loops) only, served as MP4 (H.264) + WebM, under 1.5 MB each. |

### Content
| Package / service | Purpose |
|---|---|
| `next-sanity` | The client, `defineQuery`, the revalidation webhook parser. **This is the only Sanity package in `web/`.** Journal, People, Events, Partners — structured content, not hardcoded arrays. |
| Sanity Studio (`sanity`) | **Not embedded in the Next app.** Embedding it pulls in `styled-components`, which §5.3 prohibits, and that prohibition outranks the literal dependency line. The Studio lives in a separate `studio/` package or is Sanity-hosted; its schemas are the source for the zod schemas in `web/src/lib/sanity/schemas.ts`. |
| `@portabletext/react` | Rendering rich text with custom serialisers. |

### Forms & data capture
| Package / service | Purpose |
|---|---|
| `react-hook-form` + `zod` | Partner enquiry, contact, the email captures. *(No guest application — decision A1. ATHLIMA 20 nomination is v2 — decision D4.)* Client + server validation from one schema. Loaded on form routes only. |
| `resend` | Transactional email. |
| **Vercel Postgres** (`@vercel/postgres`) | Enquiry and email-capture submissions. **Decided by the project owner, 13 September 2026: Vercel Postgres, not a Sanity dataset** — submissions are private records, not content, and the v2 nomination form (minors' data) must never live in a dataset the content team can open (`architecture.md` §6, `08_OPERATIONS/v2-backlog.md`). Schema and migrations live in `web/db/`; server actions write, Resend confirms. Until `POSTGRES_URL` is set, every form renders an honest not-configured state — never posts nowhere. |

### Analytics
| Package / service | Purpose |
|---|---|
| `@vercel/analytics` + `@vercel/speed-insights` | Core Web Vitals in production, real users. Cookieless. |
| GA4 via `@next/third-parties` | Marketing measurement. Loaded with `afterInteractive` strategy, **and only after the cookie notice has been accepted** (decision D33 — `[TO VERIFY — LEGAL]` whether DPDP requires prior consent; consent-gated is the default until confirmed). |

### Monitoring
| Package / service | Purpose |
|---|---|
| `@sentry/nextjs` | Error tracking. **Lazy-loaded after the page is interactive**; never in the critical path; outside the 200 KB homepage allocation (decision D2). |

### Accessible primitives
| Package | Purpose |
|---|---|
| `@radix-ui/react-dialog` | The mobile menu only: focus trap, Escape, scroll lock, focus return. Unstyled — §5.2. Added with the layout tier, 13 September 2026. |

---

## 3. FILE & FOLDER CONVENTIONS

```
web/src/            # the app lives under web/ ; the brief folders sit beside it at the repo root
├── app/                      # App Router. Route groups by audience where useful.
│   ├── (site)/
│   ├── api/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── primitives/           # Button, Eyebrow, Rule, Marquee — no business logic
│   ├── blocks/               # Full-width page sections. One file per section.
│   ├── media/                # VideoHero, MicroFilm, ImageReveal
│   ├── forms/                # TextField, TextArea, Select, Checkbox, FieldError, FormProgress
│   ├── journal/              # JournalCard, ArticleBody, PullQuote, ShareRow, SubscribeInline
│   ├── marks/                # Supplied artwork as inline SVG — AthlimaWordmark, AthlimaA (components.md, MARKS)
│   └── layout/               # Nav, Footer, CtaBar, SkipLink, CookieNotice, Breadcrumb
├── motion/                   # GSAP timelines, ScrollTrigger setups, easing constants
├── lib/                      # sanity client, queries, utils, env
├── styles/                   # tokens.css (design tokens as CSS custom properties)
└── types/
```

`scripts/check-routes.mjs` (plain Node, no dependency) fails the build if `src/lib/routes.ts` and
`02_INFORMATION_ARCHITECTURE/sitemap.md` §1 disagree.

**Tooling versions worth knowing:** TypeScript is pinned to **5.x** — the 7.x native compiler is not
something this project should be first to find bugs in. ESLint stays on **9.x** until
`eslint-plugin-jsx-a11y` supports 10.

**Rules**
- One component per file. Filename matches the export. PascalCase.
- Every page section lives in `components/blocks/` and is composed in the route file. Route files stay thin.
- No component over ~200 lines. If it grows past that, it is two components.
- Server Components by default. `"use client"` only where interactivity or GSAP genuinely requires it, and
  pushed as far down the tree as possible.

---

## 4. ENVIRONMENT

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=      # verifies the Sanity → /api/revalidate webhook signature
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
RESEND_API_KEY=
POSTGRES_URL=                  # Vercel Postgres — enquiries, email captures
EMAIL_FROM=                    # the verified Resend sender, e.g. ATHLIMA <hello@athlima.in>
ENQUIRY_NOTIFY_EMAIL=          # optional — where partner enquiries are forwarded [TO VERIFY — B5]
NEXT_PUBLIC_GA_ID=
SENTRY_DSN=                    # server and edge
NEXT_PUBLIC_SENTRY_DSN=        # the same DSN, exposed to the browser for the lazy client SDK
```

Validate these at boot with a zod schema in `lib/env.ts`. A missing env var must fail the build loudly,
never silently render an empty section. (`next build` throws; `next dev` warns and every consumer treats
the empty value as "not configured" and renders nothing — never a placeholder.)

---

## 5. WHAT CLAUDE MUST NEVER DO IN THIS REPO

1. Add a dependency that is not listed here without asking first and stating the trade-off.
2. Install a UI kit (Material, Chakra, Ant, shadcn/ui, DaisyUI, Bootstrap). ATHLIMA's components are built
   for ATHLIMA. Radix **primitives** are permitted for accessible dialog/dropdown behaviour only, unstyled.
3. Use a CSS-in-JS runtime (styled-components, Emotion).
4. Use `<img>` where `next/image` applies, or a `<video>` without a Mux HLS source for hero-scale content
   (a native `<video>` playing Mux HLS is the homepage hero by design — decision D2).
5. Ship a `TODO`, a `lorem ipsum`, a placeholder image from an external service, or a dead `href="#"`.
6. Disable TypeScript strict mode, add `// @ts-ignore`, or set `ignoreBuildErrors`.
7. Use `dangerouslySetInnerHTML` on anything other than JSON-LD.
