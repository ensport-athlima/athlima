import { readFile } from "node:fs/promises"
import { join } from "node:path"

/**
 * Fonts for next/og. Satori reads static TTF/OTF, not variable woff2, so two static instances of the
 * same Archivo file ship beside it: the display voice (wght 850 · wdth 66 — tokens.css --wdth-display)
 * and the text voice (wght 500 · wdth 100). Generated with fontTools' instancer from archivo-var.woff2;
 * regenerate them if the variable font changes.
 */
export async function ogFonts() {
  const dir = join(process.cwd(), "src/fonts")
  const [display, text] = await Promise.all([
    readFile(join(dir, "archivo-og-display.ttf")).catch(() => null),
    readFile(join(dir, "archivo-og-text.ttf")).catch(() => null),
  ])
  const fonts = []
  if (display) fonts.push({ name: "ArchivoDisplay", data: display, style: "normal" as const, weight: 800 as const })
  if (text) fonts.push({ name: "Archivo", data: text, style: "normal" as const, weight: 500 as const })
  return fonts
}
