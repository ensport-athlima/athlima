# ARCHITECTURE

> **Read after:** `tech-stack.md`
> **Governs:** routing, rendering strategy, data flow, motion orchestration.

---

## 1. RENDERING STRATEGY PER ROUTE TYPE

| Route type | Strategy | Reason |
|---|---|---|
| Home, The World, Experiences, People, Opportunity | Static (SSG) with ISR `revalidate: 3600` | Marketing surfaces. Must be instant. |
| Journal index + articles | ISR `revalidate: 60` + on-demand revalidation webhook from Sanity | Editors publish and see it live within a minute. |
| Events (with dates/status) | ISR `revalidate: 300` | Time-sensitive but not real-time. |
| Application / Enquiry forms | Client components inside a static shell; Server Actions for submission | No reason to server-render a form. |
| `/api/*` | Route Handlers, Node runtime unless the handler is edge-safe | — |

**Never** make the homepage dynamic. If something on it needs freshness, fetch that one island.

---

## 2. THE MOTION LAYER — THE MOST IMPORTANT ARCHITECTURAL DECISION

Motion is **not** scattered through components. It is a layer.

```
src/motion/
├── SmoothScrollProvider.tsx   # Lenis <-> GSAP ScrollTrigger bridge. Mounted once in root layout.
├── easings.ts                 # THE ONLY place easing curves are defined
├── durations.ts               # THE ONLY place durations are defined
├── useReveal.ts               # Standard entrance reveal, used by every block
├── Reveal.tsx                 # The element form of useReveal — a client wrapper so blocks stay Server Components
├── usePinnedSequence.ts       # Pinned scrub sequences (the six portals, desktop only)
├── useCursor.ts               # The custom cursor: four modes, never magnetic (decision D11)
├── transitions.ts             # Page-transition choreography (§3)
└── registry.ts                # Registers GSAP plugins exactly once, client-side
```

### Rules
1. **One Lenis instance**, created in `SmoothScrollProvider`, mounted in `app/layout.tsx`. Nothing else may
   instantiate Lenis or call `window.scrollTo` directly.
2. Every GSAP call lives inside `useGSAP()` from `@gsap/react`, scoped to a ref. This gives automatic cleanup.
   A GSAP tween created outside `useGSAP` is a memory leak and a bug during route transitions.
3. `ScrollTrigger.refresh()` must be called after fonts load and after any layout-shifting image load.
   Wire this once in the provider — not per component.
4. Components **declare intent**, the motion layer **implements it**:
   ```tsx
   const ref = useReveal({ variant: "stagger-lines", delay: 0.1 })
   return <section ref={ref}>…</section>
   ```
   A component must never contain a bare `gsap.to(...)` with hardcoded numbers.
5. Every animation reads `prefers-reduced-motion`. Handled centrally in `registry.ts` via
   `gsap.matchMedia()` — reduced motion gets opacity-only fades, no transforms, no pinning, no scrub.

---

## 3. PAGE TRANSITIONS

Use the View Transitions API where supported, with a GSAP fallback. Transition choreography lives in
`motion/transitions.ts`.

**Constraint:** a page transition may not delay meaningful content by more than **600ms** total. Cinematic
does not mean slow. If a transition makes the site feel like it is loading, it is wrong.

---

## 4. DATA FLOW

```
Sanity  →  lib/sanity/queries.ts (GROQ, typed)  →  Server Component  →  props  →  Block component
```

- All GROQ queries live in `lib/sanity/queries.ts`. Never inline a query in a component.
- Every query result is validated with a zod schema in `lib/sanity/schemas.ts` before it reaches a component.
  A CMS field that goes missing must fail visibly in dev, not render `undefined`.
- Client components never fetch from Sanity directly.

---

## 5. THE ENTRY SEQUENCE (the "you are entering a world" moment)

This is architecturally special and must be built deliberately:

1. **The resting hero is painted at first byte** — poster image, server-rendered headline, navigation —
   before any JavaScript runs. The poster is the LCP element. *(Decision D1.)*
2. **First visit** — the entry sequence plays as an **overlay on top of the finished hero**: the A strokes
   in over the poster, then dissolves. Store a flag in `sessionStorage`.
3. **Subsequent navigations in the same session** — the overlay does not play; the hero is simply at rest.
4. **Reduced motion** — no overlay. The hero is at rest.
5. **Slow connection** (`navigator.connection.saveData` or `effectiveType` of `2g`/`slow-2g`) — no
   overlay, poster frame only, no video.
6. The sequence never hides, delays or creates the headline, the poster or the navigation. If JS never
   loads, the visitor still gets a complete, correct hero.

**Hard rule:** there is no "skip intro" button, because there is no intro long enough to need one.
The overlay completes within 1500ms of JS becoming available; the LCP budget (≤ 2.0s from navigation
start, `06_BUILD/performance.md` §1) is measured on the poster and is unaffected by the overlay.

---

## 6. FORMS

There are **two** conversion endpoints in v1: the **Guest Application** (`/apply`) and the **Partner
Enquiry** (`/partner/enquire`). The **ATHLIMA 20 Nomination** (`/athlima-20/nominate`) is v2 (decision D4)
and is specified below so it is built from a decision, not from scratch. All forms:

- One zod schema per endpoint, shared by client (`react-hook-form` resolver) and Server Action.
- **The application is four steps** (`conversion-strategy.md` §4.1). **The partner enquiry is one page,
  not multi-step** (decision D12) — this person is senior and busy.
- Application progress persists in **`sessionStorage`** — current tab only, cleared on submit (decision
  D13). It survives a tab switch on a phone; it does not persist personal data across sessions, and it is
  never `localStorage`.
- Honeypot field + rate limiting on the Server Action.
- On success: a real confirmation *page*, not a toast. It has a URL so it can be a conversion goal.
- Confirmation email via Resend, from a verified ATHLIMA domain.
- Submission written to the datastore **before** the email is attempted. An email failure must never lose an application.

### The nomination endpoint (v2) has extra obligations
- It is **seasonal**: `/athlima-20` carries a CMS enum with three states — `pre-window`, `open`,
  `post-selection` (decision D4). v1 ships `pre-window` only: a designed state with the opening month and
  an email capture, not a 404 and not a disabled form. `open` renders the form; `post-selection` shows
  the class.
- Eligibility — under 20 on 14 December 2026 — is a stated criterion on `/athlima-20`
  (`04_CONTENT/experiences.md`, tagged `[TO VERIFY]`), not form helper text. Most nominees will therefore
  be minors; consent is the norm, not the edge case.
- It collects data about **people who may be minors**. Guardian consent is a required, explicit,
  unticked-by-default field where the athlete is under 18, and the consenting adult's contact details are
  captured separately.
- `[TO VERIFY — LEGAL GATE]` **This form does not ship until India's DPDP Act obligations for processing a
  minor's personal data have been reviewed by counsel** — verifiable parental consent, retention period,
  and the lawful basis. A checkbox ticked by the nominator is not verifiable parental consent; the v2
  design must obtain consent from the guardian directly. This is a statutory requirement, not a
  checkbox. See `08_OPERATIONS/v2-backlog.md`.
- Its datastore is decided with counsel and is **not** a dataset the content team can open.
- Retention: nomination data is deleted or anonymised on a defined schedule. `[TO VERIFY]` — set the period
  with counsel.

---

## 7. ROUTE MANIFEST

Every route must be declared in `web/src/lib/routes.ts` as a typed constant. Navigation, sitemap generation and
internal links all read from it. No hardcoded path strings anywhere in the codebase.
