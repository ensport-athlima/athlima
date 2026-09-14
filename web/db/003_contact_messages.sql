-- Vercel Postgres (06_BUILD/tech-stack.md §2). Run once against the production database.
-- The contact routes: general and institutional. Stored before any email is attempted.
CREATE TABLE IF NOT EXISTS contact_messages (
  id            BIGSERIAL PRIMARY KEY,
  kind          TEXT        NOT NULL CHECK (kind IN ('general', 'institutional')),
  name          TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  organisation  TEXT        NOT NULL DEFAULT '',
  role          TEXT        NOT NULL DEFAULT '',
  body          TEXT        NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
