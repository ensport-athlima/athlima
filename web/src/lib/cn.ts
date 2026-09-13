import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * Merges class names. Every block accepts an optional `className` merged with this (component-rules.md §3).
 * tailwind-merge must know the token type scale, or it treats `text-display-md` as a colour and drops it
 * against `text-paper`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-lg",
            "display-md",
            "display-sm",
            "body-lg",
            "body",
            "body-sm",
            "caption",
            "label",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
