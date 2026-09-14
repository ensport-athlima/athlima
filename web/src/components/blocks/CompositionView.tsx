"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Reveal } from "@/motion/Reveal"
import { pillarDefs } from "@/content/pillars"
import { theRoom, type GroupId } from "@/content/the-room"
import { pillars, type Pillar } from "@/lib/routes"
import { cn } from "@/lib/cn"

/**
 * BLOCK: RoomComposition — the filterable variant (Signature 04, interaction-map.md).
 * ROLE IN EXPERIENCE: Credibility — who meets whom, and what that adjacency produces. Structure and
 *   proportion, never individuals: complete with zero names, by design.
 * POSITION: /the-room section 02.
 * PRIMARY CTA: none.
 * SOURCE OF TRUTH: 04_CONTENT/people.md §03; content/the-room.ts.
 * MOTION: the results remount under a keyed REVEAL (items, STAGGER_TIGHT) when the filter changes;
 *   the group panels cross-fade their emphasis in CSS. Under reduced motion the change is instant.
 * STATE: the filter is the URL — `?group=` or `?pillar=` — real links, crawlable, shareable. Read
 *   with useSearchParams inside a Suspense boundary so the page stays static; the fallback is the
 *   unfiltered view, so the server HTML is complete. No proportions render until they are supplied.
 */
const { composition, groups } = theRoom
const GROUP_IDS: readonly GroupId[] = ["sport", "institutions", "business", "capital"]

export interface CompositionFilter {
  group?: GroupId
  pillar?: Pillar
}

function isGroup(v: string | null): v is GroupId {
  return v !== null && (GROUP_IDS as readonly string[]).includes(v)
}
function isPillar(v: string | null): v is Pillar {
  return v !== null && (pillars as readonly string[]).includes(v)
}

function FilterLink({ href, label, current }: { href: string; label: string; current: boolean }) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={current ? "true" : undefined}
      className={cn(
        "label relative inline-flex min-h-touch items-center transition-colors duration-(--dur-fast) ease-sharp hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
        current && "font-bold text-paper after:absolute after:inset-x-0 after:bottom-2 after:h-[2px] after:bg-lime",
      )}
    >
      {label}
    </Link>
  )
}

export function CompositionView({ filter }: { filter: CompositionFilter }) {
  const { group, pillar } = filter
  const base = theRoom.path
  const selectedGroup = group ? groups.items.find((g) => g.id === group) : undefined
  const selectedPillar = pillar ? pillarDefs.find((p) => p.id === pillar) : undefined
  const adjacencies = composition.adjacencies.filter(
    (a) =>
      (!group || (a.groups as readonly GroupId[]).includes(group)) &&
      (!pillar || (a.pillars as readonly Pillar[]).includes(pillar)),
  )
  const key = `${group ?? ""}-${pillar ?? ""}`

  return (
    <div>
      {/* The filters — two labelled rows of real links. */}
      <div className="flex flex-col gap-6 border-t border-ink-800 pt-6 md:flex-row md:gap-x-16">
        <div>
          <p className="label">{composition.filters.byGroup}</p>
          <ul className="mt-2 flex flex-wrap gap-x-6">
            <li>
              <FilterLink href={base} label={composition.filters.all} current={!group && !pillar} />
            </li>
            {groups.items.map((g) => (
              <li key={g.id}>
                <FilterLink href={`${base}?group=${g.id}`} label={g.title} current={group === g.id} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">{composition.filters.byPillar}</p>
          <ul className="mt-2 flex flex-wrap gap-x-6">
            {pillarDefs.map((p) => (
              <li key={p.id}>
                <FilterLink href={`${base}?pillar=${p.id}`} label={p.label} current={pillar === p.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The structure: four groups around one number. Emphasis follows the group filter. */}
      <div className="mt-16 border-t border-ink-800 pt-8">
        <div className="flex items-baseline justify-between">
          <p className="label">{composition.label}</p>
          <p className="display text-display-md leading-none text-paper" aria-label={`${composition.total} people`}>
            {composition.total}
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-x-gutter gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.items.map((g) => {
            const held = !group || group === g.id
            return (
              <li
                key={g.id}
                className={cn(
                  "border-t border-ink-800 pt-4 transition-opacity duration-(--dur-medium) ease-out",
                  held ? "opacity-100" : "opacity-40",
                )}
              >
                <h3 className="display text-display-sm text-paper">{g.title}</h3>
                <p className="mt-2 text-body-sm text-ink-200">{g.line}</p>
                <p className="mt-3 text-caption text-ink-300">{g.who.join(" · ")}</p>
              </li>
            )
          })}
        </ul>
      </div>

      {/* What the selection means, then who meets whom. Remounts on a filter change so it reveals again. */}
      <Reveal key={key} variant="items" className="mt-16">
        {selectedGroup ? (
          <div data-item className="max-w-measure">
            <p className="label">{groups.labels.take}</p>
            <p className="mt-3 text-body-lg text-paper">{selectedGroup.take}</p>
          </div>
        ) : null}
        {selectedPillar ? (
          <div data-item className="max-w-measure">
            <p className="label">{selectedPillar.label}</p>
            <p className="mt-3 text-body-lg text-paper">{selectedPillar.definition}</p>
          </div>
        ) : null}
        <ol className={cn("grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2", (selectedGroup || selectedPillar) && "mt-12")}>
          {adjacencies.map((a) => (
            <li key={a.id} data-item className="border-t border-ink-800 pt-6">
              <p className="display text-display-sm text-paper">{a.when}</p>
              <p className="mt-4 text-body-lg text-ink-100">{a.produces}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  )
}

/** Reads the filter from the URL. Must sit inside <Suspense>; the fallback is the unfiltered view. */
export function CompositionFromUrl() {
  const params = useSearchParams()
  const g = params.get("group")
  const p = params.get("pillar")
  return <CompositionView filter={{ group: isGroup(g) ? g : undefined, pillar: isPillar(p) ? p : undefined }} />
}
