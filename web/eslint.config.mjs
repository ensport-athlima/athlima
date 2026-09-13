import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import jsxA11y from "eslint-plugin-jsx-a11y"

// 06_BUILD/accessibility.md §6: eslint-plugin-jsx-a11y, zero warnings — the strict preset's rules, as
// errors. (eslint-config-next already registers the plugin; only the rules are added here.)
// 06_BUILD/tech-stack.md §5: no `any`, no ts-ignore.
export default defineConfig([
  globalIgnores([".next/**", "out/**", "node_modules/**", "next-env.d.ts", "playwright-report/**"]),
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      ...jsxA11y.flatConfigs.strict.rules,
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": true, "ts-expect-error": "allow-with-description" },
      ],
      "@next/next/no-img-element": "error",
      "react/no-danger": "warn",
    },
  },
])
