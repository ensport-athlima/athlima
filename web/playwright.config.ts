import { defineConfig, devices } from "@playwright/test"

/** accessibility.md §6 and content-qa.md — every route, both widths. `npx playwright install chromium` first. */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    // Chromium at phone size — runs everywhere without a WebKit download. Real Safari is on the
    // launch checklist (a real phone, real mobile data); `PLAYWRIGHT_WEBKIT=1` adds an iPhone project.
    { name: "mobile", use: { ...devices["Pixel 7"] } },
    ...(process.env.PLAYWRIGHT_WEBKIT ? [{ name: "iphone", use: { ...devices["iPhone 14"] } }] : []),
  ],
  webServer: {
    // CI tests the production server — the same bytes a visitor gets. Locally, the dev server.
    command: process.env.CI ? "npx next start -p 3000" : "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
