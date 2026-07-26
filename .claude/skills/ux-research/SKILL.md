---
name: ux-research
description: UX research and user interview analysis. Use when the user shares interviews, transcripts, survey responses, support tickets, or user feedback to analyze — extracts insights, pain points, and design implications, and documents them in the issue's spec folder.
---

# UX Research

Turn raw user input (interviews, transcripts, surveys, feedback) into actionable design and product decisions.

## Output Location (strict)

All research documents live inside the spec folder of the related issue:

```
/specs/<issue-number>-<slug>/
  spec.md
  research/
    interviews.md          # interview analysis
    personas.md            # personas (when enough data exists)
    insights.md            # synthesized findings + design implications
```

- Written in **English**, like all documentation, even if the interviews are in another language (quote original language verbatim, translate the insight).
- If the research is done before an issue exists, create the issue first so the folder has its number.
- Reference the research files from `spec.md` (section 2, Problem / Goal).

## Interview Analysis Workflow

When the user shares one or more interviews or transcripts:

1. **Read everything first** — no conclusions until all material is read.
2. **Code the data**: tag each relevant quote with a theme (pain point, goal, workaround, objection, delight, vocabulary).
3. **Separate observation from interpretation**: what the person SAID vs what it MEANS. Keep verbatim quotes as evidence — never paraphrase into the analysis without the original quote.
4. **Weight behavior over opinion**: "I would pay for that" is weak; "I currently pay for X / I built a spreadsheet to solve this" is strong.
5. **Synthesize across interviews**: a theme needs 2+ independent sources to be a finding; single mentions go to an "isolated signals" list.

### `interviews.md` structure

```markdown
# Interview Analysis: <topic>
> Issue: #<number> · Sources: N interviews · Date: YYYY-MM-DD

## Method & Sources
Who was interviewed, how many, context, limitations of the data.

## Themes
### T1: <Theme name> (N/M interviewees)
- Finding: <what we learned>
- Evidence: "<verbatim quote>" — P3
- Design implication: <what this means for the site/feature>

## Pain Points (ranked by frequency × severity)
## Goals & Jobs-to-be-Done
## Vocabulary (words users actually use — feed into copy and SEO keywords)
## Objections & Anxieties (feed into trust signals and FAQ)
## Isolated Signals (1 mention, watch for recurrence)
## Open Questions (what we still don't know)
```

## From Insights to Design Decisions

Every finding must land somewhere concrete:

- **Pain points** → features, content, or fixes (reference them in spec.md's solution).
- **User vocabulary** → page copy, headlines, CTA labels, and SEO keyword targets (users search with their words, not ours).
- **Objections/anxieties** → trust signals, guarantees, FAQ entries near conversion points.
- **Goals/JTBD** → page structure and information architecture priorities.
- Traceability: in `spec.md`, cite the finding ID (e.g. "T3") that justifies each significant decision.

## Analysis Discipline

- Never invent data: if the transcripts don't support a claim, say so.
- Note sample bias explicitly (who is missing from the data).
- Distinguish severity: blocker > friction > annoyance > preference.
- Contradictions between interviewees are findings too — document both sides.
