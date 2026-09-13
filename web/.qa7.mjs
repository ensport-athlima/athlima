import { chromium } from "playwright"
const out = "/private/tmp/claude-501/-Users-apple-Documents-athlima/063c4c5c-43ea-427e-8545-ebd93a9d1235/scratchpad"
const browser = await chromium.launch({ channel: "chrome" })
const errors = []
for (const path of process.argv.slice(2)) {
  for (const [name, w, h] of [["d", 1440, 900], ["m", 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: "reduce" })
    const page = await ctx.newPage()
    page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") errors.push(`${path} ${name}: ${m.text().slice(0, 140)}`) })
    page.on("pageerror", (e) => errors.push(`${path} ${name}: ${e.message}`))
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" })
    await page.click("text=DECLINE").catch(() => {})
    await page.screenshot({ path: `${out}/p${path.replace(/\//g, "-")}-${name}-top.png` })
    const total = await page.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < total; y += h * 0.6) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(100) }
    await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(300)
    await page.screenshot({ path: `${out}/p${path.replace(/\//g, "-")}-${name}.png`, fullPage: true })
    const ov = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
    const br = await page.evaluate(() => (document.body.innerText.match(/\[[A-Za-z —/0-9]+\]/g) || []).join(","))
    const cur = await page.evaluate(() => document.querySelector('nav[aria-label="Partner"] [aria-current="page"]')?.textContent)
    console.log(path, name, "overflow", ov, "current:", cur, br ? "BRACKETS " + br : "")
    await ctx.close()
  }
}
await browser.close(); console.log("errors", errors)
