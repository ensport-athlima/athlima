import type { MetadataRoute } from "next"
import { site } from "@/content/site"

/**
 * The web app manifest — home-screen icons (192, 512) and the theme. The A device, lime on black:
 * 05_MEDIA/logos/vector/icons (development placeholders until the brand owner's own set — B2).
 * The favicon and Apple touch icon are the `icon0.png` / `icon1.svg` / `apple-icon.png` file
 * conventions beside this file.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.descriptor}`,
    short_name: site.name,
    description: `${site.descriptor}. ${site.dates}, ${site.venue}.`,
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
