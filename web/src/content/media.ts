/**
 * THE SLOT REGISTRY — every place on the site that carries photography or film, what belongs in it,
 * and the asset (or null). This is the hand-off surface for B2: when an asset lands, one entry changes.
 * The CMS can override any slot without a deploy (content/site-media via lib/sanity; the CMS wins).
 * Subjects and treatments are the brief's — imagery.md §1, §4–§5 and each content file — not
 * invented here. Every slot renders as a correctly sized --ink-950 ground until it has an asset.
 *
 * A still delivered to the repository is declared as the slot's `source` — the file in
 * 05_MEDIA/photography/ — and scripts/build-media.ts turns it into the responsive AVIF/WebP set and
 * the manifest that lib/site-media reads. Nothing here names a file that is not in that folder, and
 * a file in that folder that no slot names is reported by the script and left alone.
 */
import type { MediaAsset } from "@/lib/media"

export interface SlotSource {
  /** The delivered file, by name, in 05_MEDIA/photography/. */
  file: string
  /**
   * The fraction of the delivered frame the site uses (x, y, w, h in 0–1), only when the frame carries
   * something the site must not show — type baked into the image where the site sets its own. The
   * crop is recorded in the manifest; the delivered file is never edited (imagery.md §8).
   */
  crop?: { x: number; y: number; w: number; h: number }
  /** 0–1 across, 0–1 down — the responsive crop centres on it. Default centre. */
  focal?: { x: number; y: number }
  /** imagery.md §7.1: a generated image that depicts ATHLIMA itself is labelled as an artist's impression. */
  impression: boolean
  /** Written at delivery. Empty for a decorative image behind type. */
  alt: string
}

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
  /** The delivered still, when one is in 05_MEDIA/photography/. The pipeline fills the slot from it. */
  source?: SlotSource
  asset: MediaAsset | null
}

/** A generated frame with the venue, a pavilion, a stage or ATHLIMA signage in it (imagery.md §7.1). */
const impression = (file: string, focal?: { x: number; y: number }): SlotSource => ({ file, focal, impression: true, alt: "" })
/** A generated atmospheric or architectural frame with no ATHLIMA in it (imagery.md §7.3). */
const atmosphere = (file: string, focal?: { x: number; y: number }): SlotSource => ({ file, focal, impression: false, alt: "" })

const portal = (name: string, subject: string, source?: SlotSource): SlotSpec => ({
  where: `Homepage screen 04 and /the-world — the ${name} portal`,
  subject: `${subject} A 5–8 s muted loop (≤ 1.5 MB), or a still. Poster frame matches frame one.`,
  accepts: "either",
  ratio: "viewport",
  minLongEdge: 1920,
  meaningful: false,
  source,
  asset: null,
})
const doorway = (name: string, subject: string, source?: SlotSource): SlotSpec => ({
  where: `Homepage screen 06 — the ${name} doorway (resolves at 40% behind the line on hover)`,
  subject,
  accepts: "image",
  ratio: "21:9",
  minLongEdge: 2400,
  meaningful: false,
  source,
  asset: null,
})
const entry = (page: string, subject: string, source?: SlotSource): SlotSpec => ({
  where: `${page} — the entry, behind the statement`,
  subject: `${subject} A single graded still, not a film — the film is the homepage's.`,
  accepts: "image",
  ratio: "viewport",
  minLongEdge: 3000,
  meaningful: false,
  fallback: "floor",
  source,
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
    // Delivered 16 September 2026 with the headline baked into the lower-left third; the site sets its
    // own, so the frame is used above the type (rows 0–66%). Re-delivery without type is requested.
    source: { file: "home.hero.png", crop: { x: 0, y: 0, w: 1, h: 0.66 }, focal: { x: 0.5, y: 0.6 }, impression: false, alt: "" },
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
    // Delivered with ATHLIMA and ONE FUTURE baked in above the athletes; the block sets ONE FUTURE.
    // itself, so the frame is used from below the type (rows 29.5–100%). Re-delivery is requested.
    source: {
      file: "home.athlima20.png",
      crop: { x: 0, y: 0.295, w: 1, h: 0.705 },
      focal: { x: 0.5, y: 0.45 },
      impression: false,
      alt: "Ten young athletes in India kit, backs to the camera on a wet rooftop at dusk, facing the Mumbai skyline and the Sea Link — two in racing wheelchairs, one on a running blade.",
    },
    asset: null,
  },
  "portal.athlimax": portal("ATHLIMAX", "The marketplace floor in motion: a conversation across a table, a product in a hand, a card exchanged.", impression("portal.athlimax.png")),
  "portal.symposium": portal("THE SYMPOSIUM", "The stage: a speaker mid-sentence from the wings, a listening face, the light on the room.", impression("portal.symposium.png")),
  "portal.activ8": portal("ACTIV8", "Daylight and movement: shoes hitting the floor, a training rep, breath.", impression("portal.activ8.png", { x: 0.5, y: 0.6 })),
  "portal.afterhours": portal("AFTERHOURS", "The night: the terrace, the city behind, glass, music, the Runway."),
  "portal.connect": portal("ATHLIMA CONNECT", "Two people in conversation, close; hands; a name on a card.", impression("portal.connect.png")),
  "portal.athlima20": portal("ATHLIMA 20", "One young athlete, cinematically: a face, a pause, the moment before.", atmosphere("portal.athlima20.png", { x: 0.3, y: 0.4 })),
  "doorway.business": doorway("business", "A founder in a room that is not an office.", impression("doorway.business.png", { x: 0.7, y: 0.5 })),
  "doorway.athletes": doorway("athletes", "An athlete, not an exhibit: training, recovering, thinking.", impression("doorway.athletes.png", { x: 0.65, y: 0.5 })),
  "doorway.capital": doorway("capital", "The city from above at dusk — where the sporting economy is decided.", atmosphere("doorway.capital.png")),
  "doorway.infrastructure": doorway("infrastructure", "A venue under construction, or an empty stadium with the lights coming on.", impression("doorway.infrastructure.png")),
  "doorway.institutions": doorway("institutions", "A federation or ministry setting, formal, restrained — the register matters most here.", atmosphere("doorway.institutions.png")),
  "doorway.brands": doorway("brands", "A product in use, inside sport, not on a wall.", atmosphere("doorway.brands.png", { x: 0.35, y: 0.5 })),
  "entry.the-world": entry("/the-world", "The ecosystem as a place: the floor, the stage, the lawn, the terrace in one frame, or the city.", impression("entry.the-world.png")),
  "entry.athlimax": entry("/athlimax", "The marketplace: architecture and people, business-serious.", impression("entry.athlimax.png")),
  "entry.symposium": entry("/symposium", "The stage before the room fills — editorial, restrained.", impression("entry.symposium.png", { x: 0.5, y: 0.4 })),
  "entry.activ8": entry("/activ8", "Daylit, kinetic: the only page where imagery may be daylit.", impression("entry.activ8.png")),
  "entry.afterhours": entry("/afterhours", "Mumbai at night from the terrace; the night register.", impression("entry.afterhours.png", { x: 0.6, y: 0.4 })),
  "entry.connect": entry("/connect", "Two people meeting — or nothing: the one page where a diagram outperforms a photograph.", impression("entry.connect.png", { x: 0.6, y: 0.5 })),
  "entry.athlima20": entry("/athlima-20", "Portraiture leads: one athlete, one story.", atmosphere("entry.athlima20.png", { x: 0.3, y: 0.35 })),
  "entry.the-room": entry("/the-room", "The room itself, or the people in it in silhouette — never a recognisable, unconfirmed face.", impression("entry.the-room.png")),
  "entry.partner": entry("/partner", "A partner space that feels like a world: architectural framing, premium materials.", impression("entry.partner.png")),
  "entry.about": entry("/about", "The institution: architecture, restraint, provenance.", atmosphere("entry.about.png")),
  "entry.programme": entry("/programme", "The 9th floor of The St. Regis Mumbai — the venue as a plan or a space.", impression("entry.programme.png")),
}

export const slotNames = Object.keys(mediaSlots) as SlotName[]

/** imagery.md §7.1 — the label on a generated frame that depicts ATHLIMA itself. */
export const impressionLabel = "Artist\u2019s impression"
