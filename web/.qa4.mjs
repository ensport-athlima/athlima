import { chromium } from "playwright"
const out = "/private/tmp/claude-501/-Users-apple-Documents-athlima/063c4c5c-43ea-427e-8545-ebd93a9d1235/scratchpad"
const browser = await chromium.launch({ channel: "chrome" })
const paths = process.argv.slice(2)
for (const path of paths) {
  for (const [name, w, h] of [["d", 1440, 900], ["m", 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: "reduce" })
    const page = await ctx.newPage()
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" })
    await page.click("text=DECLINE").catch(() => {})
    const total = await page.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < total; y += h * 0.6) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(120) }
    await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(400)
    await page.screenshot({ path: `${out}/ip${path.replace("/", "-")}-${name}.png`, fullPage: true })
    await ctx.close()
  }
}
await browser.close()
