# DEPLOY RUNBOOK
### From a clean clone to a preview URL, and from a preview URL to athlima.in

> Written 14 September 2026. Everything here is what the build actually needs — nothing is assumed.
> The launch checklist (`07_QA/launch-checklist.md`) is the gate; this is the mechanics.

---

## 1. WHAT THE OWNER PROVIDES

| Service | What | Where it goes |
|---|---|---|
| **Vercel** | A project connected to this repository, root directory `web`, framework Next.js | — |
| **Vercel Postgres** (Neon-backed) | A database; run `web/db/*.sql` once, in order | `POSTGRES_URL` |
| **Resend** | An API key and a verified sending domain (`athlima.in`) | `RESEND_API_KEY`, `EMAIL_FROM` |
| **Sanity** | A project (`sanity.io/manage`), dataset `production`, a read token, a webhook secret | `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET` |
| **Mux** | Token ID + secret (film routes only; nothing plays until B2) | `MUX_TOKEN_ID`, `MUX_TOKEN_SECRET` |
| **Google Analytics 4** | A measurement ID | `NEXT_PUBLIC_GA_ID` |
| **Sentry** | A project DSN (and, optionally, an auth token for source maps) | `SENTRY_DSN`, `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_AUTH_TOKEN` |
| **Inboxes** | Where partner enquiries, contact messages and institutional enquiries go — three addresses, never one (`contact.md`) `[TO VERIFY — B5]` | `ENQUIRY_NOTIFY_EMAIL`, `CONTACT_NOTIFY_EMAIL`, `INSTITUTIONAL_NOTIFY_EMAIL` |
| **Domain** | `athlima.in` DNS at the registrar | `NEXT_PUBLIC_SITE_URL=https://athlima.in` |

`web/.env.example` is the complete list. `next build` refuses to run with any required value missing
(`web/src/lib/env.ts`) — that is deliberate.

## 2. FIRST DEPLOY (PREVIEW)

1. Vercel → New Project → import the repository → **Root Directory: `web`** → Framework: Next.js.
   Leave **"Include files outside the root directory in the build step"** on (it is by default): the
   image pipeline reads `../05_MEDIA/photography/` at build. The first build is about a minute longer
   for it (24 frames → 170 files); nothing is cached between builds.
2. Environment Variables → paste every line of `web/.env.example` with real values, for Preview and
   Production. `NEXT_PUBLIC_SITE_URL` may be the preview URL for now.
3. Storage → Postgres → create → copy `POSTGRES_URL` into the project. Then, in the Query tab, run
   `web/db/001_email_captures.sql`, `002_partner_enquiries.sql`, `003_contact_messages.sql`.
4. Deploy. The build runs `routes:check` first and fails if `lib/routes.ts` and `sitemap.md` disagree.
5. Open the preview URL on a phone. Check `/partner/enquire` renders the form (storage configured) and
   submit a test enquiry: a row in `partner_enquiries`, a confirmation email, the `/received` page.

## 3. SANITY

1. `cd studio && cp .env.example .env` → project ID → `npm install && npm run deploy` (Sanity-hosted
   Studio at `<name>.sanity.studio`) or `npm run dev` locally.
2. In `sanity.io/manage` → API → add the Vercel domain to CORS origins; create a read token; create a
   webhook: URL `https://<site>/api/revalidate`, dataset `production`, trigger on create/update/delete,
   **include `_type` in the projection**, secret = `SANITY_REVALIDATE_SECRET`.
3. Publish an `author`, then an `article`. Within a minute `/journal` shows it. If it does not, check the
   webhook delivery log first, then Vercel's function logs for `[sanity]`.

## 4. GOING LIVE

1. `07_QA/launch-checklist.md` — every T-14, T-7 and T-3 item ticked, by a person.
2. Vercel → Domains → add `athlima.in` and `www.athlima.in` (redirect `www` → apex); set the DNS records
   the dashboard shows; lower TTL a day before.
3. `NEXT_PUBLIC_SITE_URL=https://athlima.in` in Production; redeploy.
4. Verify: `https://athlima.in/robots.txt` has no `Disallow: /`; `/sitemap.xml` lists the routes;
   `curl -I https://athlima.in` shows the security headers; the OG image renders in a Slack/WhatsApp
   preview; the enquiry form works end to end **in production**.
5. Submit the sitemap to Google Search Console and Bing.

## 5. CI

`.github/workflows/ci.yml` runs on every push: lint, types, the route check, the Sanity-schema check,
a production build with placeholder env, and the Playwright suite against `next start` — axe on every
route at two widths, the content discipline (no `[TO VERIFY]`, no bare bracket, no "apply"), metadata,
redirects, sitemap, JSON-LD. Vercel's own deployment check is separate; both must be green to merge.

## 6. KNOWN OPEN ITEMS AT DEPLOY TIME

- **CSP** carries `'unsafe-inline'` for scripts (`next.config.ts`). The planned nonce needs every page
  rendered per request, which conflicts with the static/ISR strategy in `architecture.md` §1. Decide:
  keep `'unsafe-inline'` with the rest of the policy strict (the current state), or move to hashes.
- **The JS budget** (`performance.md` §1): 238 KB gzipped on the homepage against 200 — the framework
  runtime. Re-cost, or drop GSAP. Owner's call.
- Everything in `07_QA/launch-checklist.md` tagged `[TO VERIFY]`.
