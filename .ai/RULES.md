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

## 5. Folder Structure (Initial)

app/
  layout.tsx
  page.tsx
  (auth)/
  (rooms)/
components/
lib/
  db.ts
  auth.ts
  rooms.ts

---

## 6. Code Quality

- Use TypeScript properly (no `any` unless unavoidable).
- Validate user input.
- Handle errors clearly.
- Keep naming consistent.
