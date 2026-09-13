# CONTENT QA

---

## A. VOICE

- [ ] Read every sentence aloud. Anything that sounds like a brochure gets cut.
- [ ] No filler openers: "In today's fast-paced world", "We are excited to", "Welcome to".
- [ ] No word from the banned list in `04_CONTENT/voice-and-tone.md` §3 — that list is the source of truth,
      not this line. *("Curated" is permitted for ATHLIMA's own selection process; "unlock" only in the
      brochure-sourced five-verb row; "elevate" only as the brand word; "journey" only for the partner journey.)*
- [ ] Every line marked *brochure-sourced* has been checked verbatim against its brochure page.
- [ ] No AI cadence: no "It's not just X — it's Y", no "In a world where…", no paragraph where every
      sentence pivots on an em dash. (Em dashes for asides are fine. Em dashes as a tic are not.)
- [ ] Sentences vary in length. Some are very short.
- [ ] Indian English spelling and idiom, consistently: *organisation, programme, centre, realise, colour.*
- [ ] The copy sounds like a confident institution, not a startup asking for attention.

---

## B. SUBSTANCE

- [ ] Every claim is true and attributable. Nothing invented — no fabricated statistics, partner names,
      testimonials, athlete names, or "trusted by" logos.
- [ ] Anything unverified is tagged `[TO VERIFY]` in the source MD and does **not** ship to production.
- [ ] **The bracket grep (decision D30):** search the production build and the content files for any bare
      square-bracket token — `[DATE]`, `[NAME]`, `[N]`, `[MONTH]`, `[email]`, `[TO VERIFY]` and anything
      of that shape. Template variables such as `[PILLAR]` are resolved at render; if one survives to HTML,
      that is a failure too.
- [ ] Numbers have a source and a date.
- [ ] No placeholder text anywhere: no lorem ipsum, no "Coming soon" as a substitute for a decision.
- [ ] Names, titles and spellings are correct. Check every person's name twice.

---

## C. STRUCTURE

- [ ] Each page has one job. State it in one sentence. If you need two, split the page.
- [ ] Headline hierarchy tells the story on its own — read only the H1 and H2s: does the argument hold?
- [ ] The most important sentence on the page is the largest and the highest.
- [ ] Every section earns its place. Delete anything you would skip.

---

## D. CTAs

- [ ] Every destination page has at most one Tier-2 emotional CTA and one Tier-2 functional CTA.
      Utility and sub-pages: functional only. Tier-3 inline links do not count.
- [ ] The primary CTA is unambiguous about what happens next.
- [ ] No "Learn more", no "Click here", no bare "Submit", no "Read more" as a standalone link. (`SUBMIT APPLICATION` and `SUBMIT NOMINATION` are the approved form buttons.)
- [ ] CTA language matches `04_CONTENT/ctas.md` exactly. No improvised variants.
- [ ] The APPLY affordance is present and visible.
- [ ] Every CTA goes somewhere real. Zero `href="#"`.

---

## E. AUDIENCE

- [ ] Each of the primary audiences can answer "why should I care?" within one screen of arriving.
- [ ] No page speaks to everyone. Each page knows who it is for.
- [ ] Jargon is either explained or removed. An investor should understand the sport pages and an athlete
      should understand the opportunity pages.

---

## F. MICROCOPY (the most-neglected, highest-return category)

- [ ] Form labels, helper text and error messages are all written, all in voice.
- [ ] Error messages say what went wrong and how to fix it.
- [ ] Success states say what happens next and by when. "We'll respond within 5 working days" beats "Thanks!"
- [ ] Empty states are written, not defaulted.
- [ ] Image alt text is written, meaningful, and not the filename.
- [ ] Page titles and meta descriptions are unique, human-written and in voice.
- [ ] The 404 copy is on-brand.
- [ ] Every email the site sends has been read and approved.

---

## G. LEGAL & TRUST

- [ ] Privacy policy, terms, and a cookie notice that reflects what is actually set.
- [ ] Form consent language is specific, and consent checkboxes are unticked by default.
- [ ] Contact details are real and monitored.
- [ ] Company registration details in the footer — the ENSPORT Ventures Pvt. Ltd. entity name and CIN if
      required by Indian company law. `[TO VERIFY]` Obtain from the Group; do not invent.
