import { test, expect } from "@playwright/test"
import { indexableStaticRoutes } from "../src/lib/routes"

/**
 * content-qa.md and CLAUDE.md V.3 / decision A, on every route: no [TO VERIFY] and no bare bracket
 * token renders; no "apply", "register", "tickets" or "exclusive" reaches the public; the metadata
 * baseline (seo.md §1) is present; no console error or warning.
 */
const paths = indexableStaticRoutes.filter((p) => !p.includes("#"))
// The mechanical bans. "Register" alone is a noun on /for/institutions ("register and restraint" — voice-and-tone.md);
// the verb forms are what is banned. "Sponsor" is not here: the brief uses it deliberately as the word ATHLIMA refuses
// ("you are not a sponsor"), and that is editorial judgement, not a regex. "Exclusive category rights" is
// the brochure's commercial term for a territory and is permitted; "exclusive" as access language is not.
const BANNED = [/\bTO VERIFY\b/, /\bapply\b/i, /\bregister (now|to attend|for|your (interest|place))\b|\bregistration\b/i, /\btickets?\b/i, /\bexclusive\b(?! category)/i, /\binvite-only\b/i, /\bmembers only\b/i]
// The "attendees" reframe on /connect quotes the word ATHLIMA refuses (experiences.md).
const ALLOWED = new Set(["/connect"])

for (const path of paths) {
  test(`${path} — content discipline and metadata`, async ({ page }) => {
    const console_: string[] = []
    page.on("console", (m) => {
      if (m.type() === "error" || m.type() === "warning") console_.push(m.text())
    })
    page.on("pageerror", (e) => console_.push(e.message))
    await page.goto(path, { waitUntil: "networkidle" })

    const text = await page.evaluate(() => document.body.innerText)
    expect(text, "no bare bracket token").not.toMatch(/\[[A-Za-z —/0-9]+\]/)
    for (const re of BANNED) {
      if (ALLOWED.has(path)) continue
      expect(text, `banned word ${re} on ${path}`).not.toMatch(re)
    }

    const description = await page.locator('meta[name="description"]').getAttribute("content")
    expect(description, "a description").toBeTruthy()
    expect(await page.locator('link[rel="canonical"]').count(), "a canonical").toBe(1)
    expect(await page.locator('meta[property="og:image"]').count(), "an og:image").toBeGreaterThan(0)
    expect(await page.locator("h1").count(), "exactly one h1").toBe(1)

    // Vercel's analytics loaders 404 off Vercel; everything else must be clean.
    const real = console_.filter((c) => !/_vercel\//.test(c))
    expect(real, "console clean").toEqual([])
  })
}

test("/ carries Organization and Event JSON-LD", async ({ page }) => {
  await page.goto("/")
  const types = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
      const d = JSON.parse(s.textContent ?? "null")
      return (Array.isArray(d) ? d : [d]).map((x) => x["@type"])
    }),
  )
  expect(types).toEqual(expect.arrayContaining(["Organization", "Event"]))
})

test("old access URLs land on the room (decision A6)", async ({ request }) => {
  for (const source of ["/apply", "/tickets", "/register", "/pricing"]) {
    const res = await request.get(source, { maxRedirects: 0 })
    expect([301, 308], `${source} redirects`).toContain(res.status())
    expect(res.headers()["location"]).toMatch(/\/the-room$/)
  }
})

test("sitemap and robots", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text()
  expect(sitemap).toContain("<loc>")
  expect(sitemap).not.toContain("/apply")
  const robots = await (await request.get("/robots.txt")).text()
  expect(robots).toContain("Sitemap:")
  expect(robots).not.toMatch(/Disallow: \/\s*$/m)
})
