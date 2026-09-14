import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

/**
 * ATHLIMA — the Journal's Studio. Sanity-hosted (`sanity deploy`) or run locally with `npm run dev`.
 * The schemas here are the source for the zod schemas in web/src/lib/sanity/schemas.ts — change one,
 * change the other, in the same commit.
 */
export default defineConfig({
  name: "athlima",
  title: "ATHLIMA",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
