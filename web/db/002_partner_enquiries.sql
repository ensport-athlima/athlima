-- Vercel Postgres (06_BUILD/tech-stack.md §2). Run once against the production database.
-- The partner enquiry — the site's one conversion (decisions A1, A2). Adults, organisations.
CREATE TABLE IF NOT EXISTS partner_enquiries (
  id            BIGSERIAL PRIMARY KEY,
  organisation  TEXT        NOT NULL,
  name          TEXT        NOT NULL,
  role          TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  phone         TEXT        NOT NULL,
  category      TEXT        NOT NULL,
  territory     TEXT        NOT NULL,
  scale         TEXT        NOT NULL,
  prospectus    BOOLEAN     NOT NULL DEFAULT false,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS partner_enquiries_email_created ON partner_enquiries (email, created_at DESC);
