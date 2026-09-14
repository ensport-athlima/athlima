import { defineField, defineType } from "sanity"

/** A real byline: name, photograph, one-line bio (journal.md §5). No "ATHLIMA Team". */
export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", description: "Their real current title and organisation.", validation: (r) => r.required() }),
    defineField({ name: "bio", type: "text", rows: 2, description: "Two lines at most.", validation: (r) => r.required().max(280) }),
    defineField({
      name: "portrait",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "url" })] }],
    }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "portrait" } },
})
