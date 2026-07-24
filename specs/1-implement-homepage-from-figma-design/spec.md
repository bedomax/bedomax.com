# Spec: Implement homepage from Figma design

> Issue: #1 — https://github.com/bedomax/bedomax.com/issues/1
> Type: feature
> Branch: `feat/1-implement-homepage-from-figma-design`
> Author: webdesigner-agent · Date: 2026-07-24

## 1. Overview

Implement the homepage of bedomax.com to match the Figma design "Homepage dashboard" ([node 1:2](https://www.figma.com/design/yTGWCzqTRG97R2roscmOxS/bedomax.com?node-id=1-2)) with pixel fidelity: exact design tokens, Montserrat/Lato typography, the mountain hero background, and the footer social bar. The homepage is the site's first impression for potential clients, so it must load fast, be accessible, and lead visitors toward the About/Projects/Contact pages.

## 2. Problem / Goal

The current homepage is an approximation built before the design existed: it uses Poppins instead of Montserrat/Lato, a blur-circle gradient background instead of the mountain image, and colors that don't match the design tokens (`#3B5BDB` vs `#1847bf`). The design is the contract; the implementation must match it.

**Lead-generation impact**: the homepage is the entry point of the client-capture funnel (Home → Projects/About → Contact). A polished, fast hero with clear navigation increases trust and click-through to conversion pages.

## 3. Proposed Solution

Rebuild the three homepage components (`header`, `hero`, `footer`) and the page shell against the Figma node, using assets exported from Figma and committed to `public/images/`. Introduce the design's color tokens as CSS custom properties in `globals.css` and load Montserrat + Lato via `next/font/google` (replacing Poppins).

Layout is implemented with flexbox/grid (never Figma absolute coordinates):

- **Page shell** (`app/page.tsx`): full-viewport column — hero area (flex-1) + footer bar. Background `#1847bf` with the mountain image (`public/images/hero-background.png`) as a low-opacity (7%) cover layer.
- **Header** (`components/header.tsx`): logo (yellow parallelogram SVG + `@bedomax` in white/60) top-left; vertical right-aligned nav, Lato Medium 14px, `tracking [2px]`, white, with a 4px `#ffd458` underline on the active item. On mobile (<768px) the nav collapses to a horizontal row that wraps under the logo.
- **Hero** (`components/hero.tsx`): left-aligned block — `Soy Bedo` (Montserrat Bold 64px, white), role line `SOFTWARE DEVELOPER / ENTREPRENEUR / GROWTH HACKER` (Lato 14px), 1px `#ffd458` divider, intro paragraph (Lato 16px, max-width ~421px). Heading scales down to 40px on mobile.
- **Footer** (`components/footer.tsx`): `#194094` bar — 48px round avatar (`public/images/avatar.png`), social links INSTAGRAM / X / FACEBOOK / LINKEDIN / GITHUB / SPOTIFY (Lato 14px, white/50, hover white) pointing to the real profiles, and the smiley mark SVG on the right. Links wrap on mobile.

## 4. Architecture Decisions

### AD-1: Design tokens as CSS custom properties

- **Context**: the design defines a token palette (primary/500 `#1847bf`, primary/700 `#194094`, primary/900 `#1a3375`, accent/400 `#ffd458`, text-on-primary white).
- **Decision**: add them to `:root` in `globals.css` and expose them via `@theme inline` so Tailwind utilities (`bg-brand-500`, etc.) can use them. No hardcoded hex in components.
- **Alternatives considered**: inline arbitrary values per component (rejected: violates the figma-to-code token rule and makes future theming impossible).
- **Consequences**: old palette vars (`--royal-blue`, etc.) become unused on the homepage; other pages keep working until they are redesigned.

### AD-2: Fonts via next/font/google (Montserrat + Lato)

- **Context**: design uses Montserrat Bold for the h1 and Lato 400/500 for body/nav; the site currently loads Poppins.
- **Decision**: load Montserrat (700) and Lato (400, 500) with `next/font/google`, `display: swap`; Lato becomes `--font-sans`, Montserrat exposed as `--font-heading`. Poppins is removed.
- **Alternatives considered**: keep Poppins (rejected: the design is the contract); self-hosting (deferred: next/font already self-hosts Google fonts at build time).
- **Consequences**: all pages inherit Lato as the base font — visual change outside the homepage is acceptable and desired for consistency.

### AD-3: Assets committed to the repo

- **Context**: Figma MCP asset URLs expire in ~7 days.
- **Decision**: export and commit assets to `public/images/` (hero-background.png, avatar.png, logo-icon.svg, footer-emoji.svg). Hero background rendered with `next/image` (`fill`, `priority`) for LCP optimization.
- **Consequences**: repo grows slightly; assets are versioned with the design.

### AD-4: Responsive strategy (design is desktop-only)

- **Context**: the Figma frame is a fixed 1200×800 desktop layout; no mobile frame exists.
- **Decision**: mobile-first adaptation documented here — <768px: header becomes logo row + horizontal wrap nav, h1 40px, footer stacks (avatar + links wrap); ≥1024px matches the design exactly at 1200px content width.
- **Consequences**: mobile layout is derived, not designed; flagged for a future mobile frame in Figma.

## 5. Scope

**In scope:**

- Homepage (`/`) visual rebuild: `app/page.tsx`, `components/header.tsx`, `components/hero.tsx`, `components/footer.tsx`
- Design tokens in `globals.css`, font swap in `app/layout.tsx`
- Committed Figma assets in `public/images/`
- Real social links (GitHub, LinkedIn, Instagram, X, Facebook, Spotify)

**Out of scope:**

- i18n (EN/ES) — separate issue on the roadmap
- Photography section, blog redesign, other pages
- Contact form changes / analytics events beyond existing Vercel Analytics
- Mobile-specific Figma frames

## 6. Implementation Plan

| Step | File(s) | Change |
|---|---|---|
| 1 | `app/globals.css` | Add brand token custom properties + `@theme` mappings; set `--font-sans` to Lato, add `--font-heading` |
| 2 | `app/layout.tsx` | Replace Poppins with Montserrat + Lato via `next/font/google` |
| 3 | `components/header.tsx` | Rebuild: logo SVG asset, vertical nav with 4px active indicator, responsive collapse |
| 4 | `components/hero.tsx` | Rebuild: exact typography, divider, spacing per design |
| 5 | `app/page.tsx` | Page shell: `#1847bf` bg + mountain image layer (7% opacity, `next/image` priority) |
| 6 | `components/footer.tsx` | Rebuild: `#194094` bar, avatar asset, real social URLs, smiley SVG |

Data model changes / migrations: none.

## 7. SEO & Performance Impact

- Meta tags / structured data: unchanged (existing metadata + Person/WebSite JSON-LD preserved).
- Core Web Vitals: hero background is the LCP element → `next/image` with `priority` and `fill`; fonts use `display: swap`; no new JS dependencies (header stays the only client component for `usePathname`).
- URL / redirect changes: none.

## 8. Test Plan

- Automated: `npm run lint` and `npm run build` must pass.
- Manual verification: side-by-side against the Figma screenshot at 1200px; check 375px, 768px, and 1440px in the browser; keyboard navigation through nav and social links with visible focus states.
- Conversion tracking: Vercel Analytics unchanged; nav links to /about, /projects, /contact verified clickable.

## 9. Risks & Rollback

- **Risks**: font swap affects all pages (accepted); mountain PNG (1024×576) may look soft on very large screens — mitigated by 7% opacity; derived mobile layout may need design review.
- **Rollback**: single revert of the feature branch merge restores the previous homepage; assets are additive.
