/**
 * THE SLOT REGISTRY — every place on the site that carries photography or film, what belongs in it,
 * and the asset (or null). This is the hand-off surface for B2: when an asset lands, one entry changes.
 * The CMS can override any slot without a deploy (content/site-media via lib/sanity; the CMS wins).
 * Subjects and treatments are the brief's — imagery.md §1, §4–§5 and each content file — not
 * invented here. Every slot renders as a correctly sized --ink-950 ground until it has an asset.
 */
import type { MediaAsset } from "@/lib/media"

export type SlotName =
  | "home.hero"
  | "home.athlima20"
  | "portal.athlimax"
  | "portal.symposium"
  | "portal.activ8"
  | "portal.afterhours"
  | "portal.connect"
  | "portal.athlima20"
  | "doorway.business"
  | "doorway.athletes"
  | "doorway.capital"
  | "doorway.infrastructure"
  | "doorway.institutions"
  | "doorway.brands"
  | "entry.the-world"
  | "entry.athlimax"
  | "entry.symposium"
  | "entry.activ8"
  | "entry.afterhours"
  | "entry.connect"
  | "entry.athlima20"
  | "entry.the-room"
  | "entry.partner"
  | "entry.about"
  | "entry.programme"

export interface SlotSpec {
  /** Where it appears. */
  where: string
  /** What belongs in it — from the brief. The shoot brief is built from this. */
  subject: string
  /** Still, film, or either. */
  accepts: "image" | "film" | "either"
  /** The frame it fills. */
  ratio: "21:9" | "16:9" | "4:5" | "3:2" | "1:1" | "viewport"
  /** Minimum long edge, pixels, for the file delivered (imagery.md §8: 3000px sources). */
  minLongEdge: number
  /** Whether the visual carries meaning (real alt) or sits behind type (decorative). */
  meaningful: boolean
  /** What renders while the slot is empty: the black ground, the hero's drawn scene, or the floor alone. */
  fallback?: "architecture" | "floor"
  asset: MediaAsset | null
}

const portal = (name: string, subject: string): SlotSpec => ({
  where: `Homepage screen 04 and /the-world — the ${name} portal`,
  subject: `${subject} A 5–8 s muted loop (≤ 1.5 MB), or a still. Poster frame matches frame one.`,
  accepts: "either",
  ratio: "viewport",
  minLongEdge: 1920,
  meaningful: false,
  asset: null,
})
const doorway = (name: string, subject: string): SlotSpec => ({
  where: `Homepage screen 06 — the ${name} doorway (resolves at 40% behind the line on hover)`,
  subject,
  accepts: "image",
  ratio: "21:9",
  minLongEdge: 2400,
  meaningful: false,
  asset: null,
})
const entry = (page: string, subject: string): SlotSpec => ({
  where: `${page} — the entry, behind the statement`,
  subject: `${subject} A single graded still, not a film — the film is the homepage's.`,
  accepts: "image",
  ratio: "viewport",
  minLongEdge: 3000,
  meaningful: false,
  fallback: "floor",
  asset: null,
})

export const mediaSlots: Record<SlotName, SlotSpec> = {
  "home.hero": {
    where: "Homepage screen 01 — the hero, behind THE BUSINESS OF SPORT. THE FUTURE OF INDIA.",
    subject:
      "Mumbai at night: the city, the architecture, the light — the A as architecture where it can be. The hero film (15–30 s, directed, not a montage) with a poster that matches frame one; until the film, the poster still alone.",
    accepts: "either",
    ratio: "viewport",
    minLongEdge: 3840,
    meaningful: false,
    fallback: "architecture",
    asset: null,
  },
  "home.athlima20": {
    where: "Homepage screen 08 — the ATHLIMA 20 image, with ONE FUTURE. over it",
    subject:
      "The strongest single image on the homepage: young Indian athletes, backs to camera, facing the city and the light; para athletes included, not as a category.",
    accepts: "image",
    ratio: "21:9",
    minLongEdge: 3000,
    meaningful: true,
    asset: null,
  },
  "portal.athlimax": portal("ATHLIMAX", "The marketplace floor in motion: a conversation across a table, a product in a hand, a card exchanged."),
  "portal.symposium": portal("THE SYMPOSIUM", "The stage: a speaker mid-sentence from the wings, a listening face, the light on the room."),
  "portal.activ8": portal("ACTIV8", "Daylight and movement: shoes hitting the floor, a training rep, breath."),
  "portal.afterhours": portal("AFTERHOURS", "The night: the terrace, the city behind, glass, music, the Runway."),
  "portal.connect": portal("ATHLIMA CONNECT", "Two people in conversation, close; hands; a name on a card."),
  "portal.athlima20": portal("ATHLIMA 20", "One young athlete, cinematically: a face, a pause, the moment before."),
  "doorway.business": doorway("business", "A founder in a room that is not an office."),
  "doorway.athletes": doorway("athletes", "An athlete, not an exhibit: training, recovering, thinking."),
  "doorway.capital": doorway("capital", "The city from above at dusk — where the sporting economy is decided."),
  "doorway.infrastructure": doorway("infrastructure", "A venue under construction, or an empty stadium with the lights coming on."),
  "doorway.institutions": doorway("institutions", "A federation or ministry setting, formal, restrained — the register matters most here."),
  "doorway.brands": doorway("brands", "A product in use, inside sport, not on a wall."),
  "entry.the-world": entry("/the-world", "The ecosystem as a place: the floor, the stage, the lawn, the terrace in one frame, or the city."),
  "entry.athlimax": entry("/athlimax", "The marketplace: architecture and people, business-serious."),
  "entry.symposium": entry("/symposium", "The stage before the room fills — editorial, restrained."),
  "entry.activ8": entry("/activ8", "Daylit, kinetic: the only page where imagery may be daylit."),
  "entry.afterhours": entry("/afterhours", "Mumbai at night from the terrace; the night register."),
  "entry.connect": entry("/connect", "Two people meeting — or nothing: the one page where a diagram outperforms a photograph."),
  "entry.athlima20": entry("/athlima-20", "Portraiture leads: one athlete, one story."),
  "entry.the-room": entry("/the-room", "The room itself, or the people in it in silhouette — never a recognisable, unconfirmed face."),
  "entry.partner": entry("/partner", "A partner space that feels like a world: architectural framing, premium materials."),
  "entry.about": entry("/about", "The institution: architecture, restraint, provenance."),
  "entry.programme": entry("/programme", "The 9th floor of The St. Regis Mumbai — the venue as a plan or a space."),
}

export const slotNames = Object.keys(mediaSlots) as SlotName[]
