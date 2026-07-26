---
name: spec-writing
description: Spec creation workflow. Use ALWAYS before starting work on any GitHub issue or feature — creates the spec document at /specs/<issue-number>-<slug>/spec.md, in English, before any code is written.
---

# Spec Writing

No code is written before the spec exists. This is the first step of every issue and every feature.

## Location Rule (strict)

```
/specs/<issue-number>-<issue-slug>/spec.md
```

- At the **repository root**, always.
- `<issue-number>`: the GitHub issue number.
- `<issue-slug>`: issue title → lowercase → strip non-alphanumerics → spaces to hyphens → max ~50 chars.
- Examples:
  - Issue #7 "Fix broken contact form on Safari" → `/specs/7-fix-broken-contact-form-on-safari/spec.md`
  - Issue #23 "Add pricing page" → `/specs/23-add-pricing-page/spec.md`
- Supporting assets (diagrams, screenshots, API samples) live in the same folder.
- If no issue exists yet, create one first: `gh issue create --title "..." --body "..."` — the spec needs its number.

## Language Rule (strict)

All specs are written in **English**, regardless of the language used in conversation with the user. Same for commits, PR descriptions, and code comments.

## Spec Structure

Copy `/specs/TEMPLATE.md`. Sections:

1. **Overview**: issue link, one-paragraph summary, type (fix/feature).
2. **Problem / Goal**: for fixes — root cause analysis; for features — user need and lead-generation impact.
3. **Proposed Solution**: the approach, described concretely enough that another engineer could implement it.
4. **Architecture Decisions**: numbered ADs with context, decision, alternatives, consequences.
5. **Scope**: what is included and explicitly what is NOT.
6. **Implementation Plan**: affected/new files, data changes, migrations, ordered steps.
7. **SEO & Performance Impact**: meta/structured-data changes, Core Web Vitals considerations (when relevant).
8. **Test Plan**: how the change is verified — automated tests, manual checks, devices/breakpoints.
9. **Risks & Rollback**: what could break, how to revert.

## Workflow Position

```
issue → spec (this skill) → branch → implement → verify → PR
```

The branch is created AFTER the spec: `fix/<number>-<slug>` or `feat/<number>-<slug>`. The spec is committed as the first commit on the branch with message: `docs: add spec for #<number>`.
