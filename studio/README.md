# ATHLIMA — Sanity Studio

A separate package, deliberately (`06_BUILD/tech-stack.md` §2): embedding the Studio in `web/` would pull
`styled-components` into the site, which `tech-stack.md` §5.3 prohibits. The Studio may depend on it; the
site may not.

```
cp .env.example .env            # project ID from sanity.io/manage
npm install
npm run dev                     # http://localhost:3333
npm run deploy                  # Sanity-hosted Studio
```

Schemas in `schemas/` are the source of truth for the zod schemas in `web/src/lib/sanity/schemas.ts`.
Change one, change the other, in the same commit. The revalidation webhook (`web/src/app/api/revalidate`)
expects `_type` in its body and `SANITY_REVALIDATE_SECRET` as the signing secret.
