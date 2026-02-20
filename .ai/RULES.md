# Engineering Rules

We are a small team (2 junior developers + AI).
Keep everything simple.

---

## 1. General Philosophy

- Prefer simple over clever.
- Prefer clarity over optimization.
- Avoid premature scaling decisions.
- Small changes only (no massive rewrites).

---

## 2. Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- PostgreSQL
- Supabase (auth + realtime)
- Prisma (if needed)

Do not introduce new frameworks unless explicitly discussed.

---

## 3. Architecture Rules

- Separate UI from business logic.
- No database calls inside React components directly.
- Use server actions or API routes properly.
- Keep files under 300 lines.
- Break large components into smaller ones.

---

## 4. AI Collaboration Rules

When generating code:
1. Always propose a short plan first.
2. Then provide minimal code diff.
3. Do NOT rewrite entire files unless requested.
4. Follow existing folder structure.
5. Add short comments for non-obvious logic.

---

## 7. Code Quality

- Use TypeScript properly (no `any` unless unavoidable).
- Validate user input.
- Handle errors clearly.
- Keep naming consistent.

---

## 8. Where code must go
- app/ = routes, pages, layouts, route handlers
- components/ = UI components only (no DB calls here)
- lib/ = auth, DB queries, realtime helpers, utilities
- lib/db/queries/ = all database reads/writes
- lib/validators/ = input validation (zod)

---

## 9. Boundaries
- No DB queries inside reusable UI components.
- No new libraries without discussion.

---

## 10. Route groups
- (marketing) = public marketing pages
- (auth) = sign in/up/onboarding
- (app) = protected product pages (requires auth)
