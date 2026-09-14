import { defineArrayMember, defineField, defineType } from "sanity"

/**
 * A Journal article (journal.md §5–§6). The editorial standards are enforced where a schema can:
 * a real byline, one primary intent, one or two pillars, a slug that is the article's promise, dates,
 * a sourced data moment. What a schema cannot enforce — 900 words, three internal links, one outbound,
 * a citable moment — is the editor's, and content-qa.md checks it.
 */
export const PILLARS = ["build", "equip", "enable", "perform", "govern"] as const
export const SERIES = ["conversations", "research", "athlete-stories"] as const

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required().max(120) }),
    defineField({
      name: "slug",
      type: "slug",
      description: "The article's actual promise. Lowercase, hyphenated, no dates, no IDs (seo.md).",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "standfirst", type: "text", rows: 3, description: "The promise of the piece in two sentences.", validation: (r) => r.required().max(320) }),
    defineField({
      name: "pillars",
      type: "array",
      of: [{ type: "string" }],
      options: { list: PILLARS.map((p) => ({ title: p.toUpperCase(), value: p })) },
      description: "One or two. Required.",
      validation: (r) => r.required().min(1).max(2),
    }),
    defineField({
      name: "series",
      type: "string",
      options: { list: SERIES.map((s) => ({ title: s.replace("-", " "), value: s })) },
    }),
    defineField({ name: "intent", type: "string", description: "The one primary intent, chosen before writing (journal.md §5).", validation: (r) => r.required() }),
    defineField({ name: "isPillarPiece", type: "boolean", description: "The cluster's definitive piece — long, maintained, updated annually.", initialValue: false }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }], validation: (r) => r.required() }),
    defineField({ name: "publishedAt", type: "datetime", validation: (r) => r.required() }),
    defineField({
      name: "hero",
      type: "image",
      description: "Optional. 21:9 at large sizes; set the focal point.",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
        defineField({ name: "credit", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      type: "array",
      validation: (r) => r.required(),
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }, { title: "Numbered", value: "number" }],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }],
            annotations: [
              {
                name: "link",
                type: "object",
                fields: [defineField({ name: "href", type: "url", validation: (r) => r.required().uri({ allowRelative: true }) })],
              },
            ],
          },
        }),
        defineArrayMember({
          name: "pullQuote",
          type: "object",
          title: "Pull quote",
          fields: [
            defineField({ name: "text", type: "text", rows: 3, validation: (r) => r.required() }),
            defineField({ name: "attribution", type: "string" }),
          ],
        }),
        defineArrayMember({
          name: "figure",
          type: "image",
          title: "Figure",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", type: "string" }),
            defineField({ name: "credit", type: "string" }),
          ],
        }),
        defineArrayMember({
          name: "dataMoment",
          type: "object",
          title: "Data moment",
          description: "A designed, sourced figure. No source, no figure (CLAUDE.md V.1).",
          fields: [
            defineField({ name: "figure", type: "string", validation: (r) => r.required() }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "source", type: "string", validation: (r) => r.required() }),
            defineField({ name: "sourceUrl", type: "url" }),
            defineField({ name: "year", type: "string", validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "sources",
      type: "array",
      of: [{ type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "url", type: "url" })] }],
    }),
  ],
  orderings: [{ title: "Newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "standfirst", media: "hero" } },
})
