# LAUNCH CHECKLIST

> Nothing here is optional. Work top to bottom. A launch with unticked boxes is a soft launch you
> did not plan for.

---

## T-14 DAYS — CONTENT COMPLETE

- [ ] Every page has final copy. Zero placeholders, zero `[TO VERIFY]` tags remaining — **and zero bare
      square-bracket tokens of any kind** (`[DATE]`, `[NAME]`, `[N]`, `[MONTH]`, `[email]`) in the rendered
      HTML or the content files (decision D30). Grep for `\[[A-Za-z ]+\]`, not just for `TO VERIFY`.
- [ ] Every image is final, licensed, art-directed and optimised.
- [ ] Hero film delivered, graded, encoded, uploaded to Mux, poster frame chosen.
- [ ] All micro-films delivered and encoded.
- [ ] All people (names, roles, headshots, bios) confirmed **by those people**.
- [ ] All partner logos confirmed, with written permission to display. (ATHLIMA has partners, not sponsors.)
- [ ] Legal pages published and reviewed.
- [ ] **The Journal gate (decision D34):** six articles live — one per pillar plus a second BUILD piece —
      each 900+ words, each with a real named byline and photo, each sourced. `04_CONTENT/journal.md` §2.
- [ ] Every ATHLIMA-owned wordmark and the A device delivered as SVG (`05_MEDIA/README.md`).
- [ ] `content-qa.md` passed on every page.

---

## T-7 DAYS — TECHNICAL COMPLETE

- [ ] `visual-qa.md` passed on every page.
- [ ] `responsive-qa.md` passed on every viewport and browser.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 98, Best Practices ≥ 95, SEO = 100.
- [ ] All performance budgets in `06_BUILD/performance.md` met on throttled mobile.
- [ ] axe: zero violations on every route.
- [ ] Full keyboard pass on every route.
- [ ] VoiceOver pass on the homepage, the guest application and the nomination flow.
- [ ] `prefers-reduced-motion` pass on every route.
- [ ] Zero console errors and zero console warnings in production build.
- [ ] Zero 404s. Crawl the site (Screaming Frog or equivalent) and check every link, internal and external.
- [ ] Both v1 forms submit end-to-end — application and partner enquiry: data stored, confirmation email
      received, confirmation page shown at its own URL. The ATHLIMA 20 email capture stores and confirms.
- [ ] `/athlima-20` renders its `pre-window` state; no nomination form or route is reachable.
- [ ] GA4 does not load before the cookie notice is accepted (decision D33).
- [ ] Form spam protection live and tested.
- [ ] 404 and 500 pages designed and working.

---

## T-3 DAYS — INFRASTRUCTURE

- [ ] Domain configured, DNS TTL lowered ahead of the switch.
- [ ] SSL valid, HTTPS enforced, HSTS set.
- [ ] `www` / non-`www` canonicalisation decided and redirecting.
- [ ] Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- [ ] `robots.txt` correct — **confirm the staging `Disallow: /` is gone.** This is the single most common
      launch disaster.
- [ ] `sitemap.xml` generating and submitted to Google Search Console and Bing Webmaster Tools.
- [ ] Google Analytics 4 live (consent-gated), with conversion events defined for: application started,
      application completed, enquiry submitted, journal subscription, ATHLIMA 20 alert captured,
      journal read >50%.
- [ ] Vercel Analytics and Speed Insights enabled.
- [ ] Uptime monitoring configured with a real alert destination.
- [ ] Error tracking (Sentry or equivalent) live.
- [ ] Sanity Studio access granted to the content team, and they have been trained.
- [ ] Backups and rollback plan confirmed. Know how to revert in under 5 minutes.

---

## T-1 DAY — FINAL

- [ ] Full production build deployed to a preview URL and reviewed by the project owner.
- [ ] OG images verified in Slack, WhatsApp, LinkedIn, X and iMessage previews.
- [ ] Favicon and app icons verified on iOS and Android home screens.
- [ ] Test the site on a real mid-range Android phone on real mobile data, in India.
- [ ] Every email address on the site receives mail.
- [ ] Someone outside the project has used the site and tried to apply. Watch them do it. Say nothing.

---

## LAUNCH DAY

- [ ] Deploy.
- [ ] Verify DNS propagation from multiple locations.
- [ ] Re-run Lighthouse against production.
- [ ] Re-check `robots.txt` and the sitemap on the live domain.
- [ ] Submit for indexing in Search Console.
- [ ] Watch analytics and error tracking for the first two hours.
- [ ] Announcement assets ready and scheduled.

---

## T+7 DAYS

- [ ] Review Core Web Vitals field data — lab data lied to you somewhere; find where.
- [ ] Review Search Console coverage for crawl errors.
- [ ] Review the application funnel: how many started, how many finished, where the drop-off is.
- [ ] Review scroll depth on the homepage. If most people never reach the portals, the top of the page is too long.
- [ ] Collect qualitative feedback from five people in each primary audience.
- [ ] Log everything into `08_OPERATIONS/post-launch-log.md` and schedule the first iteration.

---

## V2 GATES — NOT ON THE LAUNCH PATH

Moved here from the launch checklist by decision D4. These gate the v2 items in
`08_OPERATIONS/v2-backlog.md`, not the launch.

- [ ] `[LEGAL GATE]` Counsel has signed off DPDP Act compliance for the ATHLIMA 20 nomination form —
      verifiable parental consent obtained from the guardian directly, retention period, lawful basis,
      and a datastore the content team cannot open — before the form is built, let alone shipped.
- [ ] Relationship data for the EcosystemMap exists and is confirmed before the map is built.
- [ ] `[TO VERIFY — LEGAL]` DPDP position on analytics consent confirmed; the consent gate on GA4 is
      relaxed only if counsel says it can be.
