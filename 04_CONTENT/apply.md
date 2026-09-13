# APPLY
### `/apply` · `/apply/received` · `/apply/declined`

> **Role in the experience:** Commit. The guest application is the site's second conversion and its
> highest-volume one. The friction is the feature: *apply*, four steps, a decision that arrives by a date.
> A frictionless application devalues the room.
>
> **Tier:** T4 Utility. Clear, beautiful, unshowy. Functional CTA only. Density 10 / 20 / 70.
> **Form microcopy** — every label, helper, error and button — is locked in `04_CONTENT/ctas.md` §2. This
> file is the page around the form.
> **Written 13 September 2026 by decision D29.**

**The mobile APPLY bar is absent on this route** — it would point at the current page (`navigation.md` §3).

---

## `/apply`

### Above the form

**Eyebrow:** `APPLY TO ATTEND`

**Display — `--fs-display-lg`**
```
THE ROOM IS
350 PEOPLE.
```
`[TO VERIFY — B1]`

**Lead — `--fs-body-lg`** *(the locked framing — `conversion-strategy.md` §4.1)*
> ATHLIMA is limited to 350 people. Every application is read. Not every application is accepted.

**Body — `--fs-body`**
> Four short steps. Nothing is asked twice. You will hear from us by **[DATE]** `[TO VERIFY — decision
> date from the project owner]`, either way.

### The form
`FormShell` with `FormProgress`: `01 YOU · 02 YOUR ORGANISATION · 03 YOUR INTEREST · 04 CONTEXT`, then
review, consent, `SUBMIT APPLICATION`. Fields, helpers and errors exactly per `ctas.md` §2. Progress
persists in `sessionStorage` for the current tab and is cleared on submit (decision D13). Every field has
a persistent visible label, the correct `inputmode` and `autocomplete`, and a 44px target.

### The trust panel *(beside the form on desktop, beneath it on mobile — `conversion-strategy.md` §7)*
| | |
|---|---|
| **Who is behind this** | ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group. |
| **What happens to your data** | We use it to consider your application and to tell you our decision. Nothing else. *(then a Tier-3 link to `/legal/privacy`)* |
| **When you will hear** | By **[DATE]** `[TO VERIFY]`, either way. |
| **Who will contact you** | The ATHLIMA guest team `[TO VERIFY — a named team or person]`. |
| **If it is not a yes** | We will say so plainly. The thinking stays open to everyone — the Journal is not gated. |

### CTAs
Functional only: `SUBMIT APPLICATION`. No emotional CTA on a form page.

---

## `/apply/received`

**Display — `--fs-display-lg`** *(locked — `ctas.md` §2)*
```
YOUR APPLICATION
IS IN.
```

**Body**
> We read every application. You'll hear from us by **[DATE]** `[TO VERIFY]`, either way.
>
> In the meantime, the thinking is open to everyone.

**CTA:** `EXPLORE THE JOURNAL →` → `/journal` *(Tier 3)*
**Inline:** `SubscribeInline` — the Journal subscription, in context (`journal.md` §8).

**Rules:** a real URL, so it is a conversion goal. Reached only after a successful Server Action;
reloading it does not resubmit. A confirmation email has already been sent from a verified ATHLIMA domain
before this page renders (`architecture.md` §6).

---

## `/apply/declined` *(added by decision D34)*

**Reached only from the decision email.** Not linked from anywhere on the site. `noindex`. It exists
because the strategy says the honest no is answered on a page, with something real to offer
(`conversion-strategy.md` §7) — and because a person who was declined this year is exactly who the 2027
list is for.

**Display — `--fs-display-lg`**
```
NOT THIS YEAR.
```

**Body — `--fs-body`, max 34em**
> The room is 350 people, and this year we could not include you in it. That is a limit of the room, not
> a judgement of you or your work.
>
> Two things stay open. The thinking — the Journal is for everyone, and it is where ATHLIMA lives between
> Decembers. And the next room: leave your email and we will write to you when applications open for 2027.

**Functional CTA:** `EXPLORE THE JOURNAL` → `/journal`
**Tier 3 / inline:** `STAY IN TOUCH FOR 2027 →` — an `EmailCapture` on the same page.
Field: `EMAIL`. Helper: `One message when applications open. Nothing else.`
Confirmation: `You're on the list for 2027.`

**Rules:** no apology language, no "unfortunately", no "we regret". Direct, warm, short — the voice
softens here as it does on ATHLIMA 20 (`voice-and-tone.md` §4). Never explains the decision. Never
suggests reapplying "later this year" — there is no later this year.

---

## THE PAGE CHECK

- Every field has a visible label; no placeholder-as-label.
- The error summary is at the top, `aria-live="polite"`, each error linked to its field.
- Submission failure keeps every answer on the page.
- No auto-acceptance, anywhere, ever.
- No `[TO VERIFY]` and no bare bracket token renders.
