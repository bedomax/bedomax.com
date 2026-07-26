---
name: seo
description: Technical and on-page SEO expertise. Use when creating or modifying pages, routes, meta tags, sitemaps, structured data, redirects, or anything that affects search visibility, crawlability, or Core Web Vitals.
---

# SEO

Make every page discoverable, crawlable, and rank-worthy.

## On-Page Fundamentals

Every page must have:

- Unique `<title>` (50–60 chars): primary keyword first, brand last — `Primary Keyword | Brand`.
- Unique meta description (150–160 chars) with a call to action.
- Exactly one `<h1>` containing the primary keyword; logical `h2`/`h3` hierarchy, no skipped levels.
- Canonical URL (`<link rel="canonical">`) — self-referencing by default.
- Open Graph + Twitter Card tags (`og:title`, `og:description`, `og:image` 1200×630, `og:url`, `twitter:card`).
- Descriptive, keyword-relevant URL slug: lowercase, hyphens, no stop words (`/services/web-design`, not `/page?id=3`).

## Structured Data (JSON-LD)

Add the schema that matches the page type:

- `Organization` + `WebSite` on the home page.
- `LocalBusiness` for local lead-gen sites (address, hours, geo).
- `Service` / `Product` on offer pages.
- `FAQPage` where FAQs exist, `BreadcrumbList` on inner pages, `Article` for blog posts.
- Validate with the Rich Results Test mentally: required fields present, no invented data.

## Technical SEO

- `sitemap.xml` generated automatically and referenced in `robots.txt`.
- `robots.txt`: allow crawl of public pages, disallow admin/staging/duplicate parameter URLs.
- Redirects: 301 for permanent moves; never chain more than one hop; update internal links instead of relying on redirects.
- Avoid rendering-blocking content: critical content must be in the initial HTML (SSR/SSG preferred over client-only rendering for indexable pages).
- Hreflang tags when the site has multiple languages.
- Pagination: unique URLs per page, self-canonical.

## Core Web Vitals (ranking factor)

- **LCP < 2.5s**: preload hero image, optimize server response (TTFB < 800ms), use SSG/ISR where possible.
- **INP < 200ms**: minimal main-thread JS, defer non-critical scripts, avoid heavy hydration.
- **CLS < 0.1**: explicit dimensions on images/embeds/ads, reserve space for dynamic content, `font-display: swap` with size-adjusted fallback fonts.

## Content Strategy for Lead Generation

- One page = one search intent. Map each page to a target query before writing it.
- Structure service pages: problem → solution → proof (testimonials/cases) → CTA.
- Internal linking: every important page reachable within 3 clicks; use descriptive anchor text.
- Image `alt` text: descriptive and specific (helps accessibility and image search).

## SEO Review Checklist

- [ ] Unique title + meta description
- [ ] One h1, logical heading tree
- [ ] Canonical + OG tags present
- [ ] JSON-LD valid for the page type
- [ ] Page in sitemap, crawlable, returns 200
- [ ] LCP/INP/CLS within budget
- [ ] No content hidden behind client-side-only rendering
