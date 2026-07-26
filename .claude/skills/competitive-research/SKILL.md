---
name: competitive-research
description: Competitor and reference site research. Use when the user shares competitor names, company references, or site URLs to analyze — audits their UX, design, SEO, and conversion strategy, and documents benchmarks in the issue's spec folder.
---

# Competitive Research

Analyze competitor and reference sites to inform design, SEO, and conversion decisions. References are input for judgment — we learn from them, we don't copy them.

## Output Location (strict)

All competitive research lives inside the spec folder of the related issue:

```
/specs/<issue-number>-<slug>/
  spec.md
  research/
    competitive-analysis.md   # full analysis
    references.md             # quick notes on user-provided references
```

- Written in **English**, like all documentation.
- If no issue exists yet, create it first so the folder has its number.
- Reference the analysis from `spec.md` (sections 2–3).

## How to Research a Competitor/Reference Site

For each site the user provides (or that you discover), inspect with WebFetch/WebSearch:

1. **Positioning**: headline and value proposition on the home page — what do they promise, to whom?
2. **Conversion strategy**: primary CTA, form length and placement, lead magnets, pricing transparency, trust signals used (testimonials, logos, numbers, guarantees).
3. **Information architecture**: main nav structure, page types they invest in (services, cases, blog, tools), depth of the funnel.
4. **Design language**: layout patterns, typography feel, color usage, imagery style, density — what impression does it create?
5. **SEO signals**: title/meta patterns, heading structure, structured data (view page source), blog cadence and topics, keywords they target in URLs and H1s.
6. **Performance impression**: obviously heavy pages, render-blocking behavior, mobile experience.
7. **Gaps and weaknesses**: what they do poorly or ignore — that's our opportunity.

When the user gives only a company name, search for their site first, and also search `"<company>" reviews` and `site:<domain>` patterns for extra context.

### `competitive-analysis.md` structure

```markdown
# Competitive Analysis: <topic>
> Issue: #<number> · Sites analyzed: N · Date: YYYY-MM-DD

## Summary (the 5 takeaways that change our decisions)

## Per-Competitor Breakdown
### <Competitor> — <url>
- Positioning:
- Conversion strategy: (CTA, forms, trust signals)
- IA & content investment:
- Design language:
- SEO approach:
- Strengths / Weaknesses:

## Pattern Table (what everyone does vs what nobody does)
| Pattern | Comp A | Comp B | Comp C | Our decision |
|---|---|---|---|---|

## Opportunities (gaps we can exploit)
## Anti-patterns (what NOT to copy, and why)
## Impact on This Issue (specific decisions this research changes)
```

## Analysis Discipline

- **Evidence over vibes**: cite what you actually saw on the page ("hero has a 2-field form above the fold"), not generic claims.
- **Differentiate, don't imitate**: identify table-stakes patterns (must have) vs differentiation opportunities (should differ).
- **Tie every takeaway to a decision**: research that doesn't change spec.md is noise — the "Impact on This Issue" section is mandatory.
- **Respect the law and ethics**: analyze public pages only; never scrape private areas or misrepresent yourself.
- If a site can't be fetched, say so and work from search results and cached descriptions — never fabricate observations.
