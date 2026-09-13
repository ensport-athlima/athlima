#!/usr/bin/env node
/**
 * Fails the build if src/lib/routes.ts and 02_INFORMATION_ARCHITECTURE/sitemap.md §1 disagree.
 * The brief is the source of truth; this file is the manifest. Neither changes without the other.
 * Plain Node, no dependencies.
 */
import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const sitemapPath = resolve(here, "../../02_INFORMATION_ARCHITECTURE/sitemap.md")
const routesPath = resolve(here, "../src/lib/routes.ts")

const sitemap = readFileSync(sitemapPath, "utf8")
const routesSrc = readFileSync(routesPath, "utf8")

// The route tree is the first fenced block in §1. Take every `/path` token that starts a tree entry.
const treeBlock = sitemap.split("## 1. THE FULL TREE")[1]?.split("```")[1]
if (!treeBlock) {
  console.error("check-routes: could not find the route tree in sitemap.md §1")
  process.exit(1)
}
const fromSitemap = new Set()
for (const line of treeBlock.split("\n")) {
  const m = line.match(/^[│├└─\s]*(\/[^\s]*)/)
  if (m) fromSitemap.add(m[1])
}

// The manifest: every string literal beginning with "/" in routes.ts, minus in-page anchors.
const fromManifest = new Set()
for (const m of routesSrc.matchAll(/"(\/[^"#]*)"/g)) fromManifest.add(m[1])
// Redirect sources are legacy paths, not routes.
const redirectBlock = routesSrc.split("export const redirects")[1] ?? ""
for (const m of redirectBlock.matchAll(/source:\s*"(\/[^"]*)"/g)) fromManifest.delete(m[1])
// A journal helper builds `${routes.journal}/…`; only literal patterns are compared.

const onlyInSitemap = [...fromSitemap].filter((p) => !fromManifest.has(p)).sort()
const onlyInManifest = [...fromManifest].filter((p) => !fromSitemap.has(p)).sort()

if (onlyInSitemap.length || onlyInManifest.length) {
  console.error("check-routes: src/lib/routes.ts and sitemap.md disagree.")
  if (onlyInSitemap.length)
    console.error("  In sitemap.md but not in routes.ts:", onlyInSitemap.join(", "))
  if (onlyInManifest.length)
    console.error("  In routes.ts but not in sitemap.md:", onlyInManifest.join(", "))
  process.exit(1)
}

console.log(`check-routes: ${fromSitemap.size} routes agree with sitemap.md`)
