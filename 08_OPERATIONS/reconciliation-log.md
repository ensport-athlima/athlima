# RECONCILIATION LOG

> A record of the contradictions found when this system was audited against itself, and how each was
> resolved. Kept because the resolutions are decisions, and a future session needs to know they were
> deliberate rather than accidental.

> **Two rounds.** Round one (below) was recorded as fully resolved; the Phase 0 audit that followed found
> that five of its entries were not. Those entries are corrected in place — the original claim struck, what
> actually remained stated. Round two is `decisions-2026-09-13.md`, applied 13 September 2026 and
> summarised at the foot of this file. **A reconciliation log that overstates itself is worse than none.**

**Round one audit date:** 13 September 2026. Method: full adversarial read of all 44 files by an
independent agent, with every stated contrast ratio and `clamp()` value recomputed.

---

## ROUND ONE — RESOLVED (with corrections)

| # | Contradiction | Resolution |
|---|---|---|
| 1 | `Submit` was on the banned CTA list while `SUBMIT APPLICATION` was mandated | Ban narrowed to a **bare** "Submit" |
| 2 | "One emotional + one functional CTA per page" was violated by the CTA table and the homepage | Rule restated as **at most one Tier-2 pair**; utility and sub-pages carry functional only; Tier-3 inline links enumerated in `ctas.md` §1. **Recorded as resolved; was not:** `homepage.md` screen 08 still carried a second Tier-2 pair, and `digital-strategy.md` §6 still said "Not zero". Fixed in round two (D7). |
| 3 | Room size and ATHLIMAX architecture were LOCKED and OPEN simultaneously | Both restated as **working assumptions** (350; six pavilions) that the content files use and that must be confirmed before launch |
| 4 | "One signature interaction per page" — the homepage had three | Rule changed to **two scroll-triggered signatures per page**; the Entry is exempt as it completes before scrolling |
| 5 | `--ink-700` (1.58) and `--ink-800` (1.28) were specified as interactive-control borders, below the 3:1 requirement | New `--border` `#5F665C` (**3.54**) is now the only permitted control boundary. `--ink-disabled` `#767E73` (**5.00**) added for disabled text. ENARR navy handled via the WCAG logotype exemption, plus a placement rule |
| 6 | The mobile doorway reorder used CSS `order`, breaking tab order, CSS-off reading order and section numbering | Replaced with a **compact anchor line** after screen 04 at `md` and below. No DOM reorder. **Recorded as resolved; was not:** `interaction-map.md` Signature 04 still said the block "sits higher in the page order" on mobile. Fixed in round two (D9). |
| 7 | Three different body-size floors (16 / 17 / 18px); `--fs-label` at 12px broke the caption floor | Unified: body **17px**, captions and legal **14px**, labels **13px**. `typography.md` §2 is the source of truth |
| 8 | The page-transition timeline summed to 1600ms against a 600ms budget | Timeline rewritten with overlapping phases — legible new content at ~500ms |
| 9 | `/partner/enquire/received` and `/athlima-20/nominate/received` were used in journeys but absent from the manifest | Added. Route count 34 → **36** |
| 10 | Journal launch gate said five articles, one per pillar — but also three in BUILD | Resolved to **six**: one per pillar plus a second BUILD piece |
| 11 | `ProofCounters` / `ProofNumbers` naming collision; `Caption` and `MaskedVideoText` used but not in the inventory | Renamed to `ProofNumbers`; both components added to the inventory |
| 12 | The mandatory block-header example differed between `CLAUDE.md` and `component-rules.md` | Aligned on "Homepage screen 04. Also /the-world section 03." |
| 13 | `components.md` claimed `DiagnosisBlock`, `JournalRail` and `RoomComposition` were on a homepage that used none of them | Homepage screen 02 now uses `DiagnosisBlock`; screen 05 uses the `RoomComposition` static variant; `JournalRail` removed from the homepage — JOURNAL is a top-level nav item instead |
| 14 | `/partner` had two incompatible section lists | `page-hierarchy.md` aligned to `opportunities.md` |
| 15 | Journal pillar filter specified as both `?pillar=build` and `/journal/pillar/build` | Path form only. **Recorded as resolved; was not:** `component-rules.md` §5 still specified `useSearchParams` for the filtered Journal view. Fixed in round two (D19); `searchParams` retained only for the Room composition view state. |
| 16 | "Five items and one permanent CTA" double-counted APPLY | **Four navigation items and one permanent CTA** |
| 17 | Content cap given as 1440px, 1600px and 1920px | **1600px** from `2xl` up. `grid.md` §1 is the source of truth |
| 18 | Motion values disagreed between `interaction-map.md` and `motion.md` | `interaction-map.md` now uses token names only, with an explicit deference note |
| 19 | `UNLOCK` on the homepage was on the banned word list | **Source-material override** added to `voice-and-tone.md`: verbatim brochure lines outrank the banned list, and are marked *brochure-sourced* |
| 20 | Homepage gave ATHLIMAX an "Exhibition." line and ATHLIMA 20 a non-locked line | Both aligned to the locked forms in `brand-strategy.md` §4. **Recorded as resolved; was half-resolved:** the Symposium, ACTIV8, Afterhours and Connect panel lines on the homepage were still not the §4 lines, while the file claimed they were. All six corrected in round two (D16). |
| 21 | "invite-only" both banned and mandated | **invitation-led** everywhere in public copy |
| 22 | Six CTA strings appeared in content files but not in the locked table | All added as **Tier-3 inline CTAs** |
| 23 | The footer hardcoded a link to `/the-room/advisory-council`, which 404s by design | Marked conditional; renders only when the route exists |
| 24a | Pavilion 05, the *Investment & Economics* theme and the *Live Experiences* zone had no pillar | All three mapped. Added an explicit note that CAPITAL is a stakeholder group, not a pillar — the two axes are orthogonal |
| 24b | The nomination form was missing from the build spec, including its legal gate | Added to `architecture.md` §6 with the DPDP Act gate, guardian consent and a retention rule |
| 24c | "Membership" was residue from an earlier brief | Removed everywhere. It is the **guest application** |
| 24d | The `phase` prop had three values in one file and five in another | **Five**: `foundation · build · approach · live · legacy`. Calendar dates made relative so they do not go stale |
| 24e | `08_OPERATIONS/post-launch-log.md` was required but absent | Created |
| 24f | `LocalBusiness` JSON-LD with "real NAP data" for an event in someone else's hotel | Changed to `Event` as primary; `LocalBusiness` scoped to ENSPORT's own registered address, tagged `[TO VERIFY]` |
| 24g | Repository path spelled `src/` and `web/src/` | **`web/src/`** everywhere |
| 25 | Seven claims stated as fact without a `[TO VERIFY]` tag | All tagged: the unattributed Symposium quotation, the Astor Terrace naming, the two-week Connect lead time, the ATHLIMA 20 Night on Day 2, the 60ft runway, the two-working-day partner response, and "sponsor" in the launch checklist. **Recorded as resolved; was not:** the two-week Connect lead time was tagged in `experiences.md` but not in `opportunities.md` §05, where it also appeared. Tagged in round two. Bracket placeholders (`[DATE]`, `[NAME]`, `[N]`, `[MONTH]`, `[email]`) were never tagged at all — fixed by D30. |
| 26 | `--signal-error` ratio printed as 5.4 | Corrected to **6.82** (recomputed) |
| 26b | "No more than three type sizes per viewport" was unsatisfiable | Narrowed to **three display sizes**; labels, captions and body do not count |
| 26c | The descent sequence had a seven-step form and a nine-step form | Unified on the nine-step form |
| 26d | ATHLIMA Conversations cadence given as fortnightly and monthly | **Monthly** |
| 26e | `seo.md` and `journal.md` listed two different sets of pillar pages | `journal.md` §3 is the source of truth; `seo.md` restates it |
| 26f | `responsive-qa.md` asked testers to check `backdrop-filter`, which the design system prohibits | Replaced with sticky-inside-transformed-ancestor |

---

## ROUND TWO — THE PHASE 0 AUDIT AND `decisions-2026-09-13.md`

The Phase 0 prompt was run against the reconciled system on 13 September 2026 and found forty-four further
contradictions, ambiguities and gaps. Thirty-five were settled as design and build decisions (Part 1 of the
decisions file, D1–D35; D23 was not issued) and applied to every file they name. Five need people and are
held as `[TO VERIFY — B1…B5]` (Part 2). The highest-consequence findings, and where they landed:

| # | Finding | Resolution |
|---|---|---|
| 1 | The entry sequence hid the headline until ~900ms after hydration; the 2.0s LCP budget could not survive it | **D1.** The resting hero is painted at first byte; the sequence is an overlay that dissolves. `motion.md` §7, `architecture.md` §5, `homepage.md` 01, `interaction-map.md`, `navigation.md` §7 |
| 2 | The 180KB JS budget was uncosted and exceeded by the locked stack (Mux player) before any app code | **D2.** 200KB, allocated. Native `<video>` + HLS on the homepage; Mux player only on video routes; Sentry added, lazy. `performance.md` §1, `tech-stack.md` §2 |
| 3 | The lime counting rule was unsatisfiable — the section marker plus APPLY made three before any content | **D3.** Chrome does not count. Screen 05's four lime triplets became `--ink-300`. `colour.md` §3, `design-principles.md`, `CLAUDE.md` V.4, `homepage.md` 05 |
| 4 | The nomination form's coach-ticked checkbox was not verifiable parental consent; eligibility (under 20) lived only in a helper | **D4.** Form deferred to v2 with its legal gate; eligibility stated on the page; three states. `sitemap.md`, `ctas.md` §4, `architecture.md` §6, `experiences.md`, `v2-backlog.md` |
| 5 | Two Tier-2 pairs on the homepage; the log said fixed | **D7.** Screen 08 is Tier 3 |
| 6 | `/the-world` — a Tier-1 page — and `/programme`, `/press`, `/contact`, `/apply`, legal had no content | **D29.** Six new files in `04_CONTENT/` |
| 7 | The EcosystemMap had no data and the Room composition would present targets as a room | **D6.** Map cut to v2; composition labelled as target. Four signatures, not five |
| 8 | Portals `ssr:false` removed the six most important links from the HTML | **D5.** Nav server-rendered; only the pin/scrub module is dynamic |
| 9–24 | APPLY bar (D8) · doorway reorder (D9) · `clip-path` on scroll (D10) · magnetic cursor (D11) · partner form steps (D12) · form persistence (D13) · `display-xl` twice (D14) · Afterhours lime (D15) · portal lines (D16) · doorway lines and the infrastructure CTA (D17) · emotional destinations (D18) · filter URLs (D19) · Connect for partners (D20) · floor plan (D21) · component inventory (D22) | Applied in the files each decision names |
| 26–44 | Brochure-sourced marking and banned words (D31) · uppercase tracking (D32) · baseline grid (D24) · full-height count on touch (D25) · primary targets (D26) · primitives and GSAP (D27) · SEO (D28) · bracket placeholders (D30) · cookie consent (D33) · Journal gate and the declined page (D34) · this log (D35) | Applied |

**Mechanical fixes made alongside, not covered by a decision:** "Register interest for 2027" used a banned
word → `STAY IN TOUCH FOR 2027`; `/about`'s CTA was specified two ways → `APPLY TO ATTEND`, outbound
link Tier 3 and conditional on B3; `usePinnedSequence` claimed the ecosystem map; "3D depth" in
`performance.md` referred to nothing; reading progress was specified twice in `journal.md`; the lime rule
was "only" the section marker while three other lime rules existed; the Symposium entry had no mark line;
media component count was 6 (it was 7); `seo.md` §3 contradicted itself on Google Business Profile; the
lime hex was the only sampled colour not tagged; ENARR navy needed an explicit exemption from "no
purple/blue"; the two "recognition" moments in the Afterhours flow and ATHLIMA 20 were tagged as a
question; route count 36 → 35; the conversion-strategy CTA table now declares `ctas.md` as its source.

**Found while building screen 02 (13 September 2026):** `homepage.md` gave screen 02 a body paragraph
while `components.md` and the B4 default assumed a stakeholder grid that no content file defined.
Resolved by the project owner: the grid. `homepage.md` screen 02 now specifies it, with the four titles.

**Not fixable in this pass, and said so:** the brochure PDFs are image-only; *brochure-sourced* marks
follow the repository's own attributions and are tagged for verbatim verification.

---

## THE LESSON FOR FUTURE SESSIONS

Thirty-plus contradictions in a system written in one pass by one author, all of them the kind a builder
would hit on day two — and a second round of forty-four found by reading the reconciled system again.
**This is why the Phase 0 prompt in the operating manual exists**, and why it runs before a line of code:

> *List every internal contradiction, ambiguity or gap you found, with file and line. Rank by consequence.
> Do not be diplomatic.*

Run it again after any significant change to the brief. And whenever you edit a brief file, run
`/consistency <file>` — the whole point of a repository of truth is that it stays true.
