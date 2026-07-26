---
name: web-design
description: Web design and UI/UX expertise for building modern, conversion-oriented websites. Use when designing pages, layouts, components, choosing typography/colors, or reviewing visual quality of any web interface.
---

# Web Design

Design principles for high-quality, lead-generating websites.

## Visual Hierarchy

- One primary action per screen. The main CTA must be visually dominant (size, color, contrast) and above the fold.
- Follow an F/Z reading pattern: headline → supporting copy → CTA.
- Use whitespace deliberately; cramped layouts kill trust and conversions.
- Limit to 2 font families and a modular type scale (e.g. 1.25 ratio). Body text 16px minimum.

## Layout System

- Design mobile-first, then scale up. Breakpoints: 640 / 768 / 1024 / 1280 / 1536px.
- Use a consistent spacing scale (4px base: 4, 8, 12, 16, 24, 32, 48, 64).
- Max content width 1200–1280px; line length 45–75 characters for readability.
- Grid: 12 columns desktop, 4 columns mobile.

## Color & Contrast

- Define a token palette: primary, secondary, accent (CTA only), neutrals (5–7 steps), semantic (success/warning/error).
- The accent color is reserved for CTAs and key actions — never dilute it.
- Meet WCAG 2.1 AA contrast: 4.5:1 for body text, 3:1 for large text and UI components.
- Support dark mode via CSS custom properties when the project requires it.

## Components

- Reuse before creating: check the project's existing components and design tokens first.
- Every interactive element needs hover, focus-visible, active, and disabled states.
- Buttons: minimum 44×44px touch target; verb-first labels ("Get a quote", not "Submit").
- Forms: single column, labels above inputs, inline validation, as few fields as possible.

## Trust & Conversion Design

- Above the fold: clear value proposition (headline + subheadline), primary CTA, and a trust signal (logos, rating, testimonial).
- Social proof near decision points: testimonials next to pricing, client logos near forms.
- Use real content in designs — lorem ipsum hides layout problems.
- Footer: contact info, navigation, legal links, and a final CTA.

## Imagery & Media

- Use purposeful imagery (product, team, results), not generic stock photos.
- Serve modern formats (AVIF/WebP) with width/height set to prevent layout shift.
- Illustrations and icons must share one visual style across the site.

## Review Checklist

- [ ] Primary CTA obvious within 3 seconds of page load
- [ ] Consistent spacing scale, no arbitrary values
- [ ] AA contrast everywhere
- [ ] All interactive states designed
- [ ] Looks correct at 375px, 768px, and 1440px widths
