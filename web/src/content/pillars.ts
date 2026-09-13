/**
 * The five pillars — the ecosystem taxonomy, locked (01_STRATEGY/brand-pillars.md §2). Fixed order,
 * never reordered. Reused by /the-world, /about and the Journal.
 */
import { journalPillar, type Pillar } from "@/lib/routes"

export interface PillarDef {
  id: Pillar
  label: string
  definition: string
  href: string
}

export const pillarDefs: readonly PillarDef[] = [
  {
    id: "build",
    label: "BUILD",
    definition: "The physical and institutional foundations of sport.",
    href: journalPillar("build"),
  },
  {
    id: "equip",
    label: "EQUIP",
    definition: "Everything that enables sporting performance.",
    href: journalPillar("equip"),
  },
  {
    id: "enable",
    label: "ENABLE",
    definition: "The organisations that create pathways into sport.",
    href: journalPillar("enable"),
  },
  {
    id: "perform",
    label: "PERFORM",
    definition: "The people and systems that actually produce performance.",
    href: journalPillar("perform"),
  },
  {
    id: "govern",
    label: "GOVERN",
    definition: "The institutions that shape the rules, policy and direction of sport.",
    href: journalPillar("govern"),
  },
]

/** brochure-sourced — brand-pillars.md §4 */
export const pillarLine = "ONE ECOSYSTEM. FIVE DIMENSIONS. ONE PLATFORM DESIGNED TO CONNECT THEM."
