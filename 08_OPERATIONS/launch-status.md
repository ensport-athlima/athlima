# LAUNCH STATUS
### Every item on `07_QA/launch-checklist.md`, as of 14 September 2026 — done, verified how, or who it waits on

> Read with `08_OPERATIONS/deploy-runbook.md`. "Machine" means CI proves it on every push; "local" means
> proved once on this machine against the production build; "owner" means it needs a person or an
> account and the build cannot do it.

## T-14 — CONTENT

| Item | State | Note |
|---|---|---|
| Zero `[TO VERIFY]`, zero bare bracket tokens in rendered HTML | **machine** | `tests/content.spec.ts`, every route |
| Every image final, licensed, optimised | **owner — B2** | 24 of 25 slots carry generated frames (16 Sept), all below the brief's size, two cropped around baked type, labelled per imagery.md §7 — `asset-brief.md` §3a. Optimisation is machine (`build-media.ts`). Final and licensed are the owner's. |
| Hero film on Mux, poster chosen | **owner — B2** | |
| Micro-films | **owner — B2** | |
| People confirmed by those people | n/a | No person is named anywhere on the site. |
| Partner logos with written permission | n/a | No partner appears. |
| Legal pages published and reviewed | **owner — counsel** | Privacy and terms hold one sentence; cookies is complete and true. |
| The Journal gate — six articles | **owner — editorial** | The Journal is built; the Sanity project and the writing are not. |
| Every mark as SVG; CONNECT and ATHLIMA 20 drawn | **owner — B2** | Four traced placeholders in use; two typeset fallbacks in the DOM. |
| Placeholder vectors overlaid on the rasters | **owner — B2** | With the real artwork. |
| `content-qa.md` on every page | partial | The mechanical checks are in CI; the editorial read is a person's. |

## T-7 — TECHNICAL

| Item | State | Note |
|---|---|---|
| `visual-qa.md` on every page | local | Screenshots at 1440 and 390, both motion modes, every screen as built. A person's pass is still owed. |
| `responsive-qa.md` — every viewport and browser | partial | Chromium desktop + phone in CI. Safari/iOS and a real Android are owner items below. |
| Lighthouse mobile ≥ 90 / ≥ 98 / ≥ 95 / 100 | local | 91–99 / 96–100 / 100 / 100 on the routes sampled (`performance.md`). Re-run on production. |
| Performance budgets met | **open — decision** | 238 KB JS vs 200 KB: the framework runtime. Re-cost or drop GSAP (`performance.md`). |
| axe zero violations | **machine** | All 32 routes, two widths. |
| Full keyboard pass | local | Tab order, the World panel (ArrowDown / Escape / tab-past closes), the forms' error summary. A person's pass on every route is still owed. |
| VoiceOver pass | **owner** | Needs a Mac/iPhone and a person. |
| `prefers-reduced-motion` pass | local | Every page screenshotted under reduced motion; reveals fade ≤150 ms; portals a static grid. |
| Zero console errors/warnings in production | **machine** | Off Vercel, Vercel's own analytics loaders 404 — excluded; on Vercel they exist. |
| Zero 404s, full crawl | partial | Every internal link resolves (CI); an external crawl of the live domain is owed. |
| Forms end to end | **owner — accounts** | Built and tested to the point of a database; needs `POSTGRES_URL`, Resend, and the three inboxes (B5). |
| `/athlima-20` pre-window, no nomination route | **machine** | |
| GA4 only after ACCEPT | local | Verified: no Google request before consent. |
| Spam protection | built | Honeypot + timing on every form; a 10-minute duplicate check on enquiries. Tested with a fake DB. |
| 404 and 500 pages | built | `not-found.tsx`, `error.tsx` (first sentence only until B5). |

## T-3 — INFRASTRUCTURE

| Item | State | Note |
|---|---|---|
| Statutory footer block vs the MCA record | **owner — B3a** | Name and CIN render; registered office, telephone, email are missing and the law requires them. |
| Domain, DNS, SSL, HSTS, www redirect | **owner** | Runbook §4. HSTS header is set in `next.config.ts`. |
| Security headers | built | CSP (with `'unsafe-inline'` scripts — see runbook §6), XFO, nosniff, Referrer, Permissions. |
| `robots.txt` has no `Disallow: /` | **machine** | |
| Sitemap generating and submitted | built / **owner** | Generates; submission needs Search Console. |
| GA4 live with conversion events | **owner** | Needs the ID; the event names are in the checklist. |
| Vercel Analytics + Speed Insights | built | Mounted on Vercel only. |
| Uptime monitoring | **owner** | |
| Sentry live | built / **owner** | Lazy client SDK; needs the DSN. |
| Studio access and training | **owner** | `studio/README.md`. |
| Backups and rollback | **owner** | Vercel instant rollback; Postgres backups per plan. |

## T-1 AND LAUNCH DAY — all owner items, per the runbook.

## THE DECISIONS STILL OPEN (from Part IX and this session)
B1 (pavilions / 350) · B2 (photography, film, marks) · B3a/B3b (statutory block) · B4 (statistics — cut) ·
B5 (partner response time, named person, inboxes) · the JS budget re-cost · the CSP nonce vs ISR ·
the master architecture document from the other conversation · counsel's legal text · the Journal's six.
