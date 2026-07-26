# Spec: Redesign About page from Figma design

> Issue: #3 — https://github.com/bedomax/bedomax.com/issues/3
> Type: feature
> Branch: `feat/3-redesign-about-page-from-figma-design` (stacked on `feat/1-implement-homepage-from-figma-design`)
> Author: webdesigner-agent · Date: 2026-07-26

## 1. Overview

Rebuild the About page (`/about`) to match the Figma design ["Aboutus" (node 1017:2)](https://www.figma.com/design/yTGWCzqTRG97R2roscmOxS/bedomax.com?node-id=1017-2): a long-form storytelling page with hero, career timeline, philosophy statement, location band, work cards (Lexgo / Agrapp), a photography band, and the shared footer. The page turns the generic placeholder copy into a concrete narrative that builds trust with potential clients.

## 2. Problem / Goal

The current About page is placeholder content (generic "Who I Am / My Journey / Skills" sections) on the old gradient background. It doesn't tell Bedo's real story, doesn't show his actual work (Lexgo, Agrapp), and doesn't match the new design system introduced with the homepage.

**Lead-generation impact**: About is the trust-building page of the funnel. Real story, real companies, real photos increase credibility before the visitor reaches Contact.

## 3. Proposed Solution

Replace `app/about/page.tsx` content with seven stacked sections implemented with flexbox/grid (no absolute positioning), reusing the existing `Header` and `Footer` components and brand tokens:

1. **Hero** (brand blue + `about-hero-background.png`, 15% opacity baked into the PNG's alpha): h1 "Building products that people actually use." (Montserrat Bold 42px), uppercase eyebrow (Lato Bold 14, white/60), then avatar (119px circle) beside the intro statement "I've spent the last **20 years** building software…" (Montserrat 24px, bold highlight).
2. **Timeline**: 4 milestones (2005 / 2015 / 2025 / Today) in a responsive grid; each has a 12px white dot with a 2px white/15 connector line (CSS, not images), year (Montserrat Bold 20), title (Lato Bold 14), description (Lato 12, white/70).
3. **Philosophy**: bordered (white/15) two-column block — left: two 36px Montserrat Bold statements split by an 80×4 yellow divider; right: two Lato 16 white/70 paragraphs + tagline row (16px yellow dash rotated 15° + "Always learning. Always shipping." Lato Bold).
4. **Location**: `#162343` navy band — "WHERE I'M BASED" label, 🇨🇱 flag, "Based in Chile" (Montserrat Bold 24), "Vivo en Santiago de Chile", story paragraph; Santiago skyline illustration on the right.
5. **Work cards**: two half-width cards — Lexgo (white bg, `work-card-lexgo-bg.jpg` at 35% CSS opacity, purple `#290088` text, Lexgo logo) and Agrapp (green illustrated bg, `#1a6418` text, Agrapp logo). Label top-left, logo and paragraph centered.
6. **Photo band**: `pyrenees.jpg` (480px tall, object-cover) with yellow caption chip "📸 Foto tomada en los Pirineos de Navarra".
7. **Footer**: existing shared component.

Content language mirrors the design (English headings, Spanish story paragraphs) until i18n lands.

## 4. Architecture Decisions

### AD-1: Trivial vector shapes as CSS, not image assets

- **Context**: Figma exports the timeline dot (12px white circle), connector (2px white/15 line), and tagline slash (16px yellow line at 15°) as SVGs.
- **Decision**: implement them as styled divs; the exported SVGs are rendering artifacts of primitive shapes.
- **Consequences**: fewer requests, no expiring assets, same visual result.

### AD-2: Image optimization at commit time

- **Context**: the Figma-exported Pyrenees photo was a 5.5 MB 4032×3024 iPhone JPEG including EXIF GPS coordinates; work-card backgrounds were ~1–1.4 MB PNGs.
- **Decision**: resize to delivery size (1920px / 1200px), convert to JPEG q82, strip all metadata. Committed sizes: pyrenees.jpg 354 KB, card backgrounds 10–30 KB.
- **Consequences**: protects location privacy and keeps LCP/bandwidth budgets; original full-res photo stays out of the repo.

### AD-3: New section colors as tokens

- **Context**: the design introduces `#162343` (navy band), `#290088` (Lexgo text), `#1a6418` (Agrapp text) — raw hex in Figma, not variables.
- **Decision**: add `--color-navy` for the reused navy; keep Lexgo/Agrapp brand colors as local arbitrary values since they are third-party brand colors used once inside their own cards.
- **Consequences**: token file stays small; card colors are colocated with the only component using them.

### AD-4: Stacked branch

- **Context**: this work depends on brand tokens and fonts introduced in PR #2 (unmerged).
- **Decision**: branch from `feat/1-implement-homepage-from-figma-design`; PR targets that branch and will auto-retarget to `main` when PR #2 merges.
- **Consequences**: PR #3 shows only About changes; merge order is PR #2 → PR #3.

## 5. Scope

**In scope:**

- `app/about/page.tsx` full rebuild; new assets in `public/images/`; `--color-navy` token in `globals.css`

**Out of scope:**

- i18n, other pages, header/footer changes, contact form, photography gallery page

## 6. Implementation Plan

| Step | File(s) | Change |
|---|---|---|
| 1 | `public/images/*` | Add optimized design assets (hero bg, avatar, skyline, card bgs, logos, pyrenees photo) |
| 2 | `app/globals.css` | Add `--navy: #162343` token + `@theme` mapping |
| 3 | `app/about/page.tsx` | Rebuild page with the seven sections, semantic headings (single h1, h2 per section), responsive grid/flex |

Data model changes / migrations: none.

## 7. SEO & Performance Impact

- Meta tags: existing About metadata preserved; heading hierarchy improved (one h1, meaningful h2s).
- Core Web Vitals: images via `next/image` with explicit sizes (hero bg `priority`); photo band lazy-loads below the fold; no new JS (page stays a server component).
- URL / redirect changes: none.

## 8. Test Plan

- Automated: `npm run build` passes.
- Manual: side-by-side vs Figma at 1200px; responsive check at 375px / 768px / 1440px; keyboard navigation; alt text on informative images.
- Conversion tracking: nav links to Projects/Contact verified.

## 9. Risks & Rollback

- **Risks**: derived mobile layout (design is desktop-only); Spanish/English mixed copy until i18n.
- **Rollback**: revert the branch merge; assets are additive.
