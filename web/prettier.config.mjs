/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "all",
  // Enforces the utility order in 06_BUILD/component-rules.md §4.
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
  tailwindFunctions: ["cn"],
}

export default config
