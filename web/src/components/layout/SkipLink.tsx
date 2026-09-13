import { menuStrings } from "@/content/navigation"

/** accessibility.md §1.3 — the first focusable element, visually hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only-focusable label fixed top-4 left-4 z-[60] bg-lime px-4 py-3 text-void"
    >
      {menuStrings.skip}
    </a>
  )
}
