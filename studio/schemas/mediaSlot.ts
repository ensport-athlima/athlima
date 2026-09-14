import { defineField, defineType } from "sanity"

/**
 * A media slot (web/src/content/media.ts): the still or film behind a named place on the site. The
 * content team swaps an image here and the site updates within the hour — no deploy. The slot names
 * are the site's; a name not in the list does nothing.
 */
export const SLOT_NAMES = [
  "home.hero", "home.athlima20",
  "portal.athlimax", "portal.symposium", "portal.activ8", "portal.afterhours", "portal.connect", "portal.athlima20",
  "doorway.business", "doorway.athletes", "doorway.capital", "doorway.infrastructure", "doorway.institutions", "doorway.brands",
  "entry.the-world", "entry.athlimax", "entry.symposium", "entry.activ8", "entry.afterhours", "entry.connect", "entry.athlima20",
  "entry.the-room", "entry.partner", "entry.about", "entry.programme",
] as const

export const mediaSlot = defineType({
  name: "mediaSlot",
  title: "Media slot",
  type: "document",
  fields: [
    defineField({ name: "slot", type: "string", options: { list: [...SLOT_NAMES] }, validation: (r) => r.required() }),
    defineField({
      name: "image",
      title: "Still",
      type: "image",
      description: "Graded to the ATHLIMA LUT. Set the focal point. Alt text is written by a person, never the filename.",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
        defineField({ name: "credit", type: "string" }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "film",
      title: "Film (optional)",
      type: "object",
      description: "The still above is the poster and must match frame one. Micro-films ≤ 1.5 MB, silent.",
      fields: [
        defineField({ name: "mp4", type: "url", description: "H.264 MP4 — plays everywhere.", validation: (r) => r.required() }),
        defineField({ name: "webm", type: "url", description: "Optional AV1/WebM." }),
        defineField({ name: "hls", type: "url", description: "Optional Mux HLS (.m3u8) — Safari and iOS use it; others take the MP4." }),
        defineField({ name: "captions", type: "url", description: "WebVTT — required for anything with narration or dialogue." }),
      ],
    }),
  ],
  preview: { select: { title: "slot", media: "image" } },
})
