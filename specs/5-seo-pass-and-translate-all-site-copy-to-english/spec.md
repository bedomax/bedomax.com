# Spec: SEO pass and translate all site copy to English

> Issue: #5 — https://github.com/bedomax/bedomax.com/issues/5
> Type: fix
> Branch: `feat/5-seo-pass-and-translate-all-site-copy-to-english` (stacked on `feat/3-redesign-about-page-from-figma-design`)
> Author: webdesigner-agent · Date: 2026-07-26

## 1. Overview

Fix the SEO issues found in a full-site audit (language attributes, per-page canonicals, missing OG image, structured data, heading hierarchy, date locales) and translate all remaining Spanish copy to English so the site is consistently English until i18n lands.

## 2. Problem / Goal

**Root cause analysis (audit findings):**

1. `<html lang="es">` and `og:locale es_ES` while all indexable content is English — search engines receive contradictory language signals.
2. `alternates.canonical: siteUrl` in the root layout is **inherited by every route**, so `/about`, `/projects`, `/blog`, `/contact` and every blog post declare the homepage as their canonical URL. This tells Google to consolidate all pages into the homepage — the most damaging finding of the audit.
3. `openGraph.images` reference `/og-image.png`, which does not exist in `/public` — social shares render without a preview card.
4. Blog list and post dates are formatted with the `es-ES` locale.
5. Contact page links to `https://linkedin.com` (generic) rather than the actual profile, and its heading tree jumps h1 → h3.
6. Homepage `<title>` renders as "Home | Bedo - Software Developer" — no keywords, weak first impression in SERPs.
7. Person JSON-LD uses the nickname only and "Software Developer"; the user identifies as Software Engineer.
8. Mixed-language copy (Spanish paragraphs on About, "Soy Bedo" on home) contradicts `lang` and dilutes keyword relevance.

**Lead-generation impact**: correct canonicals and social preview cards directly affect discoverability and click-through from search/social — the top of the client-capture funnel.

## 3. Proposed Solution

- **Layout**: `lang="en"`, `og:locale en_US`, brand rename to "Bedo - Software Engineer", enriched Person JSON-LD (full name + alternateName, jobTitle Software Engineer, real social profiles), keywords updated.
- **Canonicals**: remove the site-wide canonical from the layout; declare `alternates.canonical` per page (`/`, `/about`, `/projects`, `/blog`, `/contact`, `/blog/[slug]`).
- **OG image**: capture the redesigned homepage at 1200×630 and commit as `public/og-image.png`.
- **Translations** (English): homepage h1 "I'm Bedo"; About location subtitle + story, work-card labels ("Current work" / "Side project") and paragraphs, photo caption. Role line updated to "Software Engineer / Entrepreneur / Growth Hacker".
- **Blog**: `en-US` date locale on list and post pages; `Article` JSON-LD on posts.
- **Contact**: real LinkedIn URL, heading levels fixed (h2).

## 4. Architecture Decisions

### AD-1: Per-page canonicals over layout-level canonical

- **Context**: Next.js metadata inheritance propagates `alternates` from layout to all routes.
- **Decision**: canonical lives in each page's own `metadata` export; layout only sets `metadataBase`.
- **Consequences**: new pages must declare their canonical — noted in CLAUDE.md conventions later.

### AD-2: English as the only site language until i18n

- **Context**: the roadmap includes EN/ES i18n; today content is mixed.
- **Decision**: all copy in English now; Spanish returns as a proper locale with hreflang when i18n is implemented (out of scope here).

## 5. Scope

**In scope:** `app/layout.tsx`, all page metadata, homepage hero copy, About copy, blog date locales + Article JSON-LD, contact links/headings, `public/og-image.png`.

**Out of scope:** i18n routing/hreflang, blog markdown content (already English), new OG images per page, contact form backend.

## 6. Implementation Plan

| Step | File(s) | Change |
|---|---|---|
| 1 | `app/layout.tsx` | lang, locale, brand title, JSON-LD, remove inherited canonical |
| 2 | all `page.tsx` | per-page canonical + Software Engineer wording |
| 3 | `components/hero.tsx` | "I'm Bedo" + role line |
| 4 | `app/about/page.tsx` | translate Spanish copy |
| 5 | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` | en-US dates, Article JSON-LD, canonical |
| 6 | `app/contact/page.tsx` | LinkedIn URL, h2 headings |
| 7 | `public/og-image.png` | homepage capture 1200×630 |

## 7. SEO & Performance Impact

This issue IS the SEO impact: consistent language signals, correct canonicals, valid social cards, richer structured data. No performance change (no new JS).

## 8. Test Plan

- `npm run build` passes.
- Rendered HTML checks via curl: `lang="en"`, one canonical per page pointing to itself, JSON-LD parses, no Spanish strings left in app/ and components/.
- OG image exists and is 1200×630.

## 9. Risks & Rollback

- **Risks**: brand string rename touches visible titles; canonical changes roll out site-wide.
- **Rollback**: revert the branch merge.
