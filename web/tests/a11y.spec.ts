import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import { indexableStaticRoutes, routes } from "../src/lib/routes"

/**
 * accessibility.md §6 and seo.md: every route in the manifest returns 200 and has zero axe
 * violations. Content that reveals on scroll is scrolled into being first, so nothing is skipped.
 */
const paths = [...indexableStaticRoutes, routes.partnerEnquireReceived, routes.forIndex].filter((p) => !p.includes("#"))

async function revealAll(page: import("@playwright/test").Page) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  const step = Math.round((await page.evaluate(() => window.innerHeight)) * 0.7)
  for (let y = 0; y < total; y += step) {
    await page.evaluate((y) => window.scrollTo(0, y), y)
    await page.waitForTimeout(40)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
}

for (const path of paths) {
  test(`${path} — 200 and zero axe violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" })
    const response = await page.goto(path)
    expect(response?.status(), `${path} should return 200`).toBe(200)
    await revealAll(page)
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
      .analyze()
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([])
  })
}
