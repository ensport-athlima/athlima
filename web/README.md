# athlima.in — the application

The brief is the source of truth and it lives one level up. **Read `../CLAUDE.md` first**, then
`../06_BUILD/`. Nothing in this folder is authoritative about what ATHLIMA is; it is only how the site is
built.

```bash
cp .env.example .env.local   # fill in what you have; dev warns on gaps, build fails on them
npm install
npm run dev                  # http://localhost:3000
npm run routes:check         # src/lib/routes.ts must match ../02_INFORMATION_ARCHITECTURE/sitemap.md
npm run lint && npm run typecheck
npm run analyze              # bundle report against the 200KB homepage budget (performance.md §1)
npm run test:a11y            # axe, every route, zero violations (needs `npx playwright install`)
```

Structure follows `../06_BUILD/tech-stack.md` §3. The motion layer (`src/motion/`) is the only place
easing curves and durations exist. `src/lib/routes.ts` is the only place path strings exist.
`src/styles/tokens.css` is the only place a colour, size or space is defined.
