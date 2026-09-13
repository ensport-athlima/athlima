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
| `@mux/mux-player-react` or `@mux/mux-video-react` | All hero and long-form video. Adaptive bitrate, poster frames, low-res placeholder, real analytics. |
| `next/image` | All stills. `sizes` is mandatory on every instance. |
| Inline `<video>` with `muted playsinline loop preload="none"` | Micro-films (5–8s loops) only, served as MP4 (H.264) + WebM, under 1.5 MB each. |

### Content
| Package / service | Purpose |
|---|---|
| `sanity` + `next-sanity` | Journal, People, Events, Partners. Structured content, not hardcoded arrays. |
| `@portabletext/react` | Rendering rich text with custom serialisers. |

### Forms & data capture
| Package / service | Purpose |
|---|---|
| `react-hook-form` + `zod` | Guest application, partner enquiry, ATHLIMA 20 nomination, newsletter. Client + server validation from one schema. |
| `resend` | Transactional email. |
| Vercel Postgres or Sanity dataset | Application, enquiry and nomination submissions. **Decide before build; do not leave forms posting nowhere.** Nomination data has its own retention rule — see `architecture.md` §6. |

### Analytics
| Package / service | Purpose |
|---|---|
| `@vercel/analytics` + `@vercel/speed-insights` | Core Web Vitals in production, real users. |
| GA4 via `@next/third-parties` | Marketing measurement. Loaded with `afterInteractive` strategy only. |

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
│   └── layout/               # Nav, Footer, ApplyBar
├── motion/                   # GSAP timelines, ScrollTrigger setups, easing constants
├── lib/                      # sanity client, queries, utils, env
├── styles/                   # tokens.css (design tokens as CSS custom properties)
└── types/
```

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
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=
```

Validate these at boot with a zod schema in `lib/env.ts`. A missing env var must fail the build loudly,
never silently render an empty section.

---

## 5. WHAT CLAUDE MUST NEVER DO IN THIS REPO

1. Add a dependency that is not listed here without asking first and stating the trade-off.
2. Install a UI kit (Material, Chakra, Ant, shadcn/ui, DaisyUI, Bootstrap). ATHLIMA's components are bespoke.
   Radix **primitives** are permitted for accessible dialog/dropdown behaviour only, unstyled.
3. Use a CSS-in-JS runtime (styled-components, Emotion).
4. Use `<img>` where `next/image` applies, or a raw `<video>` for hero-scale content where Mux applies.
5. Ship a `TODO`, a `lorem ipsum`, a placeholder image from an external service, or a dead `href="#"`.
6. Disable TypeScript strict mode, add `// @ts-ignore`, or set `ignoreBuildErrors`.
7. Use `dangerouslySetInnerHTML` on anything other than JSON-LD.
