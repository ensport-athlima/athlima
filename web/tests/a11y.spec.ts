import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { indexableStaticRoutes, routes } from "../src/lib/routes"

/**
 * accessibility.md §6 and seo.md: every route in the manifest returns 200 and has zero axe
 * violations. A route that 404s is a launch failure ("zero 404s from internal links"), so this
 * stays red until every page in the manifest exists — that is the point of it.
 */
const paths = [...indexableStaticRoutes, routes.applyDeclined].filter((p) => !p.includes("#"))

for (const path of paths) {
  test(`${path} — 200 and zero axe violations`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status(), `${path} should return 200`).toBe(200)
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze()
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([])
  })
}
