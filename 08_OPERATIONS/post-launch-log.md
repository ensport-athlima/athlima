# POST-LAUNCH LOG

> Referenced by `07_QA/launch-checklist.md` (T+7). This file exists so the first review has somewhere to
> go. **A launch review that lives in someone's head is not a review.**

---

## HOW TO USE THIS

Add a dated entry after every review. Never delete an entry — the value is the trail.

Reviews happen at: **T+7 days**, **T+30 days**, then **monthly**.

---

## THE STANDING AGENDA

Every review answers the same six questions:

1. **Core Web Vitals — field data.** What is real-user LCP, INP and CLS? Lab data lied somewhere; where?
2. **Search Console.** Coverage errors, indexing, queries ATHLIMA is appearing for that it did not expect.
3. **The application funnel.** How many started, how many finished, where the drop-off is, and whether
   the acceptance rate is rising or falling. **A falling acceptance rate means the site is attracting the
   wrong people** — that is a content problem, not a volume win.
4. **Partner enquiries.** Not the count. The *quality* — are these the organisations ATHLIMA wants?
5. **Homepage scroll depth.** What proportion reach the portals (screen 04) and the doorways (screen 06)?
   If most people never reach the doorways, the top of the page is too long.
6. **Journal.** Returning visitors, time on page, and which pillar cluster is actually working.

Plus, at every review: **five people from each primary audience, asked what they thought.** Qualitative
feedback finds things analytics cannot.

---

## ENTRY TEMPLATE

```
## [DATE] — [T+7 / T+30 / MONTHLY]

### The numbers
LCP (p75)          ___        INP (p75)      ___        CLS (p75)      ___
Applications       ___        Accepted       ___        Acceptance %   ___
Partner enquiries  ___        Qualified      ___
Doorway CTR        ___        Scroll to 06   ___
Journal returning  ___        Top article    ___

### What is working

### What is not

### What we heard from people

### Decisions taken

### Actions, with owners and dates
| # | Action | Owner | By |
|---|---|---|---|

### Carried forward
```

---

## KNOWN OPEN ITEMS AT LAUNCH

Carried over from `CLAUDE.md` Part IX. Close these before they become permanent.

| # | Item | Status |
|---|---|---|
| 1 | ATHLIMAX architecture — six pavilions or 12 categories | Working assumption: six pavilions |
| 2 | Room size — 350 or 500+ | Working assumption: 350 |
| 3 | The four homepage statistics — sources | Must be sourced or cut before launch |
| 4 | Photography and film — commission or generated | Decide early; long lead time |
| 5 | Advisory Council — publish or hold | Hold until five written confirmations |
| 6 | ENARR / ENSPORT copy — Group approval | Required before launch |
| 7 | DPDP Act compliance for minor-athlete nominations | **Legal gate — form does not ship without it** |
| 8 | Partner response-time commitment and named contact | Required before `/partner/enquire` goes live |
| 9 | The unattributed Symposium quotation | Identify the author or rewrite |

---

## THE FIRST ITERATION

Do not rebuild. Pick the **three** highest-consequence findings from T+7 and fix those. Everything else
goes into the next monthly cycle.

The most common T+7 finding on a site like this is that the homepage is too long above the doorways.
If that is what the data says, the fix is to cut a screen — not to add a link.
