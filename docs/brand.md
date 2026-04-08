# Brand assets

Studio marks live under `public/assets/brand/` and ship as static files (same base path as the rest of the site).

## Files

| File | Role |
| --- | --- |
| `pwner-studios-logo-horizontal.svg` | Hero wordmark: cartridge pixel **P** + **PWNER** / **STUDIOS** type. |
| `pwner-studios-logo-icon.svg` | Square mark for footer, favicon source, and tight layouts. |

Both SVGs use a **4px grid** pixel **P** with **even stroke** (2 cells thick), `shape-rendering: crispEdges`, and cream / cyan / gold aligned with `src/styles.css`.

## Where they are used

- **Hero** (`src/App.tsx`): horizontal logo via `publicAsset('assets/brand/pwner-studios-logo-horizontal.svg')`, class `hero__logo--horizontal` in `src/styles.css`.
- **Footer**: icon only (`pwner-studios-logo-icon.svg`) beside the studio blurb.
- **Favicon** (`index.html`): `link rel="icon"` points at the icon SVG. The `href` must stay in sync with `base` in `vite.config.ts` (currently `/pwner-studios/`).

## Changing the base path

If you change Vite `base`:

1. Update the favicon `href` in `index.html`.
2. Rebuild; `import.meta.env.BASE_URL` already prefixes hero and footer images in React.

## Optional: Claude-generated SVGs

`scripts/claude-logo-svgs.py` calls the Anthropic Messages API to write `*-claude.svg` variants into `public/assets/brand/` (requires `ANTHROPIC_API_KEY`). It does not run in CI; the shipped marks are the hand-authored SVGs above.

## Layout notes for editors

Glyph-in-frame lessons for this project are captured in `tasks/lessons.md` (centering, insets, and “fraction of top half” math).
