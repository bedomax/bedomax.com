# CURSOR.md — Context for Cursor Agents

> Full project context lives in [CLAUDE.md](./CLAUDE.md). Read that file first. This is a quick summary.

## TL;DR

- **bedomax.com** — personal site of **Bedo Maximiliano Cáceres**, Software Engineer (Santiago, Chile). Builds apps and platforms: Lexgo (legaltech), Agrapp (agtech, co-founder/CTO), Bedomax (software factory).
- **Goal**: capture clients + tell stories through a blog.
- **Style**: minimalist, content-first, bilingual (English/Spanish).
- **Sections**: Home, About, Projects, Photography, Blog, Contact.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 4 · Radix UI · Markdown blog in `content/blog/` · Deployed on Vercel.

## Rules

1. Keep the design minimalist — no visual noise, no extra UI libraries.
2. User-facing copy in **both English and Spanish** (i18n planned).
3. Blog posts: Markdown in `content/blog/` with frontmatter (`title`, `date`, `excerpt`, `author`, `tags`, `published`).
4. Don't break SEO (metadata, sitemap, Open Graph) — see `lib/seo.ts`.
5. Prefer server components and static generation.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Links

- GitHub: https://github.com/bedomax
- LinkedIn: https://www.linkedin.com/in/bedomax/
- Email: i@bedomax.com
