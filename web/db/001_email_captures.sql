-- Vercel Postgres (06_BUILD/tech-stack.md §2). Run once against the production database.
-- The single-field email captures: the ATHLIMA 20 pre-window alert, the 2027 list, the Journal.
-- Adults only by design — the nomination form (minors' data) is v2 and has its own gate (decision D4).
CREATE TABLE IF NOT EXISTS email_captures (
  id          BIGSERIAL PRIMARY KEY,
  email       TEXT        NOT NULL,
  list        TEXT        NOT NULL CHECK (list IN ('athlima20-alert', 'list-2027', 'journal')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (email, list)
);
