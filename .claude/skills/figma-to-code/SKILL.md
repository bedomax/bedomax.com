---
name: figma-to-code
description: Connect to Figma and implement UI code that faithfully matches the design. Use whenever a Figma link/file is provided, when a design must be translated into components, or when verifying that implemented UI matches the source design pixel by pixel.
---

# Figma to Code

Translate Figma designs into production code with high fidelity. The design is the contract — the implementation must match it in spacing, typography, color, and behavior.

## Connecting to Figma

Use the **Figma MCP server** (official Figma Dev Mode MCP). Main tools:

- `get_design_context` — primary tool: returns reference code (React + Tailwind), a screenshot, and design hints for a node. Always start here.
- `get_screenshot` — visual reference of the exact node; keep it open while implementing.
- `get_metadata` — node structure, sizes, and positions when you need the layout tree.
- `get_variable_defs` — design tokens (colors, spacing, typography variables) defined in the file.
- `get_code_connect_map` — checks if Figma components are already mapped to codebase components; if a mapping exists, USE the mapped component instead of writing new code.

### Parsing Figma URLs

```
figma.com/design/:fileKey/:fileName?node-id=:nodeId
```

- Extract `fileKey` from the path and `nodeId` from the query (convert `-` to `:` — e.g. `123-456` → `123:456`).
- Branch URLs (`/branch/:branchKey/`): use the branchKey as fileKey.

If the MCP server is not available, ask the user to enable the Figma MCP server or share the design as exported assets + values.

## Design-to-Code Workflow

1. **Fetch context**: `get_design_context` for the target node; also `get_screenshot` for the visual reference.
2. **Check for mapped components**: if Code Connect returns a codebase component, use it as-is with the right props.
3. **Extract tokens, not values**: map Figma variables to the project's token system (Tailwind theme / CSS custom properties). Never hardcode a hex value that exists as a token.
4. **Reuse project components** for buttons, inputs, cards, etc. Only build new primitives when nothing matches.
5. **Implement structurally**: recreate the layout with proper semantics and flexbox/grid — never absolute positioning copied from Figma coordinates (Figma's absolute layout is a rendering artifact, not the design intent).
6. **Compare against the screenshot** before finishing: spacing, font sizes/weights, line heights, colors, border radii, shadows, icon sizes.

## Fidelity Rules (the detail checklist)

Match EXACTLY, do not approximate:

- **Spacing**: paddings, gaps, and margins to the pixel (mapped to the nearest token on the project scale — if the design says 24px, use the 24px token, not 20 or 32).
- **Typography**: family, size, weight, line-height, letter-spacing, and text color per text style.
- **Color**: exact token/hex including opacity. Check fills AND strokes.
- **Borders & radii**: width, color, and per-corner radius.
- **Shadows**: x, y, blur, spread, color with alpha — copy the exact values.
- **Icons**: use the same icon at the same size; export from Figma if not in the project's icon set.
- **States**: implement hover/focus/active/disabled variants if designed; if not designed, derive them consistently from the design system and note it in the spec.

## What Figma Doesn't Tell You (fill the gaps deliberately)

- **Responsive behavior**: Figma frames are fixed-width. Decide how the layout adapts at each breakpoint and document it in the spec. When mobile/desktop frames both exist, implement both and interpolate between them.
- **Interactions**: transitions, loading, empty, and error states usually aren't designed — derive them from the design system and list them in the spec.
- **Real content**: designs use ideal content. Verify the layout survives long text, missing images, and translations (no overflow, truncation rules defined).
- **Accessibility**: Figma doesn't encode semantics. Add proper elements, alt text, labels, and focus order yourself.

## Verification

- Side-by-side comparison: rendered implementation vs `get_screenshot` output at the same viewport width.
- Overlay check when precision matters: screenshot the implementation and diff against the Figma export.
- Ship only when a designer could not tell the implementation from the mock.
