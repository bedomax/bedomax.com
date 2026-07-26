---
name: frontend
description: Expert frontend engineering for scalable web applications. Use when writing HTML, CSS, JavaScript, TypeScript, React, Next.js, or any UI code — components, state management, rendering strategy, performance optimization, and accessibility.
---

# Frontend Engineering

Build fast, accessible, maintainable interfaces.

## Rendering Strategy (decide per page, document in the spec)

- **SSG**: marketing pages, landing pages, blogs — fastest, best for SEO.
- **ISR**: content that changes occasionally (pricing, catalogs).
- **SSR**: personalized or frequently changing indexable content.
- **CSR**: authenticated dashboards and app-like interactions only — never for indexable lead-gen pages.

## Component Architecture

- Small, single-purpose components; extract only when reused or when a file exceeds ~200 lines.
- Colocate: component + styles + tests in the same folder.
- Props flow down, events flow up; avoid prop drilling deeper than 2 levels — use composition or context.
- Server Components by default (Next.js App Router); add `"use client"` only where interactivity is required.
- Type everything: no `any`, exported components have explicit prop types.

## State Management

- Prefer the least powerful tool: local state → lifted state → URL state → context → external store.
- URL is state: filters, tabs, and pagination belong in searchParams so pages are shareable and crawlable.
- Server data lives in a data-fetching layer (React Query / SWR / server components), never duplicated into global stores.

## CSS

- Use the project's system (Tailwind or CSS Modules); never mix approaches in one codebase.
- Design tokens as CSS custom properties or Tailwind theme config — no hardcoded hex values in components.
- Mobile-first media queries; avoid fixed heights; let content define size.
- Prevent CLS: aspect-ratio or width/height on all media.

## Performance Budget

- Initial JS < 150KB gzipped per route; code-split heavy components (`dynamic()` / `lazy()`).
- Images: `next/image` or `<img loading="lazy" decoding="async">` with srcset; AVIF/WebP.
- Fonts: self-hosted, subset, `font-display: swap`, preload the primary weight.
- Third-party scripts: load after interaction or with a facade (e.g. lite-youtube); measure everything you add.
- Memoize only measured bottlenecks — profile before optimizing.

## Accessibility (WCAG 2.1 AA, non-negotiable)

- Semantic elements first: `nav`, `main`, `button`, `a` — a `div` with onClick is a bug.
- Keyboard: everything focusable and operable; visible `:focus-visible` styles; logical tab order.
- Forms: `<label>` bound to every input, error messages linked via `aria-describedby`.
- Announce dynamic changes with `aria-live` where needed.
- Test with keyboard-only navigation before shipping.

## Forms (the lead-gen critical path)

- Client + server validation with shared schema (e.g. Zod).
- Show inline errors on blur, not only on submit; never clear user input on failure.
- Disable submit during flight, show progress, confirm success clearly.
- Fire analytics events on submit success (conversion tracking).

## Frontend Review Checklist

- [ ] Correct rendering strategy for the page type
- [ ] No `any`, lint and type-check pass
- [ ] JS budget respected, images optimized
- [ ] Keyboard accessible, AA contrast
- [ ] Works at 375px / 768px / 1440px
- [ ] Forms validated on both sides and tracked
