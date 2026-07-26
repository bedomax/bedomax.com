# CLAUDE.md — Context for AI Agents

This file gives AI assistants (Claude, Cursor, etc.) the context needed to work on this project. Keep it updated when the vision or stack changes.

## What This Project Is

**bedomax.com** is the personal website of **Bedo Maximiliano Cáceres** — Software Engineer, entrepreneur, and photographer based in Santiago, Chile.

The site has two goals:

1. **Capture clients**: showcase Bedo's work building apps and platforms so potential clients reach out.
2. **Tell stories**: a personal blog about projects, technology, travel, and life.

## About Bedo (Owner Profile)

- **Name**: Bedo Maximiliano Cáceres
- **Role**: Software Engineer — builds apps and platforms
- **Location**: Santiago, Chile (works remotely)
- **Current work**:
  - Software Engineer at **Lexgo** (lexgo.cl) — legaltech for Chile and LATAM; Ruby on Rails stack
  - Co-founder & CTO of **Agrapp** (agrapp.cl) — agtech startup
  - Founder of **Bedomax** — software factory (web, mobile, platforms)
- **Tech background**: Ruby on Rails, React Native, TypeScript/Next.js, AI integrations (OpenAI, MCP servers — see `agromcp` and `ecuadorgpt` on GitHub)
- **Startup programs**: StartupChile, ChileVentures, 500 Startups
- **Outside work**: alpinism, rock climbing, photography, volunteering in social projects
- **Links**:
  - GitHub: https://github.com/bedomax
  - LinkedIn: https://www.linkedin.com/in/bedomax/
  - Email: i@bedomax.com

## Site Vision

- **Minimalist design**: clean typography, generous whitespace, few colors, no visual noise. Content first.
- **Bilingual**: all content in **English and Spanish** (i18n). English is the default; Spanish must be a first-class experience, not an afterthought.
- **Client-oriented**: clear CTAs ("Work with me" / "Trabajemos juntos"), an easy contact path, and projects presented as proof of capability.

### Core Sections

| Section | Purpose |
|---|---|
| Home | Minimal hero: who Bedo is, what he builds, CTA to contact |
| About | Profile, experience (Lexgo, Agrapp, Bedomax), skills |
| Projects | New and notable projects — apps, platforms, AI experiments |
| Photography | Photo gallery (mountains, climbing, travel) |
| Blog | Stories in Markdown — projects, tech, personal narratives |
| Contact | Simple form / email to capture client leads |

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript 5**
- **Tailwind CSS 4** + Radix UI + Lucide icons
- **Blog**: file-based CMS — Markdown files in `content/blog/` parsed with gray-matter + remark
- **Deploy**: Vercel (auto-deploy on push), Vercel Analytics

## Project Structure

```
app/            # App Router pages: /, /about, /projects, /blog, /contact
components/     # header, footer, hero, theme-provider
content/blog/   # Markdown blog posts (frontmatter: title, date, excerpt, tags, published)
lib/            # blog.ts (post loading), seo.ts, utils.ts
public/         # static assets
```

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run lint    # lint
```

## Conventions for AI Agents

- Keep the design **minimalist** — resist adding visual complexity, animations, or extra UI libraries.
- All user-facing copy must exist in **both English and Spanish** once i18n is in place.
- Blog posts live in `content/blog/*.md` with frontmatter (`title`, `date`, `excerpt`, `author`, `tags`, `published`).
- Preserve SEO setup: metadata, sitemap, robots, Open Graph (see `lib/seo.ts`, `app/sitemap.ts`).
- Prefer server components and SSG; the site should stay fast and static where possible.

## Roadmap

- [ ] i18n (English/Spanish) for all pages
- [ ] Redesign toward a more minimalist look
- [ ] Photography section with gallery
- [ ] Client-capture CTAs and improved contact flow
- [ ] Blog: more stories, RSS feed, categories
