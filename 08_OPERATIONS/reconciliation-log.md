# RECONCILIATION LOG

> A record of the contradictions found when this system was audited against itself, and how each was
> resolved. Kept because the resolutions are decisions, and a future session needs to know they were
> deliberate rather than accidental.

**Audit date:** 13 September 2026. Method: full adversarial read of all 44 files by an independent agent,
with every stated contrast ratio and `clamp()` value recomputed.

---

## RESOLVED

| # | Contradiction | Resolution |
|---|---|---|
| 1 | `Submit` was on the banned CTA list while `SUBMIT APPLICATION` was mandated | Ban narrowed to a **bare** "Submit" |
| 2 | "One emotional + one functional CTA per page" was violated by the CTA table and the homepage | Rule restated as **at most one Tier-2 pair**; utility and sub-pages carry functional only; Tier-3 inline links do not count and are now enumerated in `ctas.md` §1 |
| 3 | Room size and ATHLIMAX architecture were LOCKED and OPEN simultaneously | Both restated as **working assumptions** (350; six pavilions) that the content files use and that must be confirmed before launch |
| 4 | "One signature interaction per page" — the homepage had three | Rule changed to **two scroll-triggered signatures per page**; the Entry is exempt as it completes before scrolling |
| 5 | `--ink-700` (1.58) and `--ink-800` (1.28) were specified as interactive-control borders, below the 3:1 requirement | New `--border` `#5F665C` (**3.54**) is now the only permitted control boundary. `--ink-disabled` `#767E73` (**5.00**) added for disabled text. ENARR navy handled via the WCAG logotype exemption, plus a placement rule |
| 6 | The mobile doorway reorder used CSS `order`, breaking tab order, CSS-off reading order and section numbering | Replaced with a **compact anchor line** after screen 04 at `md` and below. No DOM reorder |
| 7 | Three different body-size floors (16 / 17 / 18px); `--fs-label` at 12px broke the caption floor | Unified: body **17px**, captions and legal **14px**, labels **13px**. `typography.md` §2 is the source of truth |
| 8 | The page-transition timeline summed to 1600ms against a 600ms budget | Timeline rewritten with overlapping phases — legible new content at ~500ms |
| 9 | `/partner/enquire/received` and `/athlima-20/nominate/received` were used in journeys but absent from the manifest | Added. Route count 34 → **36** |
| 10 | Journal launch gate said five articles, one per pillar — but also three in BUILD | Resolved to **six**: one per pillar plus a second BUILD piece |
| 11 | `ProofCounters` / `ProofNumbers` naming collision; `Caption` and `MaskedVideoText` used but not in the inventory | Renamed to `ProofNumbers`; both components added to the inventory |
| 12 | The mandatory block-header example differed between `CLAUDE.md` and `component-rules.md` | Aligned on "Homepage screen 04. Also /the-world section 03." |
| 13 | `components.md` claimed `DiagnosisBlock`, `JournalRail` and `RoomComposition` were on a homepage that used none of them | Homepage screen 02 now uses `DiagnosisBlock`; screen 05 uses the `RoomComposition` static variant; `JournalRail` removed from the homepage — JOURNAL is a top-level nav item instead |
| 14 | `/partner` had two incompatible section lists | `page-hierarchy.md` aligned to `opportunities.md` |
| 15 | Journal pillar filter specified as both `?pillar=build` and `/journal/pillar/build` | Path form only |
| 16 | "Five items and one permanent CTA" double-counted APPLY | **Four navigation items and one permanent CTA** |
| 17 | Content cap given as 1440px, 1600px and 1920px | **1600px** from `2xl` up. `grid.md` §1 is the source of truth |
| 18 | Motion values disagreed between `interaction-map.md` and `motion.md` | `interaction-map.md` now uses token names only, with an explicit deference note |
| 19 | `UNLOCK` on the homepage was on the banned word list | **Source-material override** added to `voice-and-tone.md`: verbatim brochure lines outrank the banned list, and are marked *brochure-sourced* |
| 20 | Homepage gave ATHLIMAX an "Exhibition." line and ATHLIMA 20 a non-locked line | Both aligned to the locked forms in `brand-strategy.md` §4 |
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
| 25 | Seven claims stated as fact without a `[TO VERIFY]` tag | All tagged: the unattributed Symposium quotation, the Astor Terrace naming, the two-week Connect lead time, the ATHLIMA 20 Night on Day 2, the 60ft runway, the two-working-day partner response, and "sponsor" in the launch checklist |
| 26 | `--signal-error` ratio printed as 5.4 | Corrected to **6.82** (recomputed) |
| 26b | "No more than three type sizes per viewport" was unsatisfiable | Narrowed to **three display sizes**; labels, captions and body do not count |
| 26c | The descent sequence had a seven-step form and a nine-step form | Unified on the nine-step form |
| 26d | ATHLIMA Conversations cadence given as fortnightly and monthly | **Monthly** |
| 26e | `seo.md` and `journal.md` listed two different sets of pillar pages | `journal.md` §3 is the source of truth; `seo.md` restates it |
| 26f | `responsive-qa.md` asked testers to check `backdrop-filter`, which the design system prohibits | Replaced with sticky-inside-transformed-ancestor |

---

## THE LESSON FOR FUTURE SESSIONS

Thirty-plus contradictions in a system written in one pass by one author, all of them the kind a builder
would hit on day two. **This is why the Phase 0 prompt in the operating manual exists**, and why it runs
before a line of code:

> *List every internal contradiction, ambiguity or gap you found, with file and line. Rank by consequence.
> Do not be diplomatic.*

Run it again after any significant change to the brief. And whenever you edit a brief file, run
`/consistency <file>` — the whole point of a repository of truth is that it stays true.
