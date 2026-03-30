# Pwner Studios Landing Page v1

## Plan

- [x] Scaffold Vite + React + TypeScript app structure
- [x] Add studio landing page layout, content model, and hash-driven detail panel
- [x] Add local game media/assets and retro visual system
- [x] Add test coverage for dialog/hash behavior and key links
- [x] Add GitHub Pages deployment workflow
- [x] Verify build and tests

## Review

- Built a one-page retro landing page with a hash-driven game detail dialog and GitHub Pages base-path support.
- Copied real local project assets where available and filled missing cover art with repo-faithful SVG posters.
- Verified with `npm ci`, `npm test`, `npm run build`, and a local preview response at `http://127.0.0.1:4176/pwner-studios/`.

## Diggr Asset Refresh

### Plan

- [x] Inspect the current Diggr tile/detail asset sources and compare them against the latest Diggr repo art
- [x] Replace the Diggr landing-page tile assets with current art choices
- [x] Verify the updated landing page build and tests

### Review

- Replaced Diggr's flat grass preview card with a new poster assembled from the current shipped sprite sheets.
- Swapped the Diggr detail media from the older upgrade-sheet choice to the current consumable shop contact sheet.
- Verified with `npm run verify`, including regression coverage for the Diggr poster and detail media asset paths.

## Diggr Title Card Update

### Plan

- [x] Inspect the current Diggr tile asset and confirm where the poster is sourced from
- [x] Replace the Diggr tile art so it matches the provided title-screen composition
- [x] Verify the updated poster path and production build

### Review

- Replaced the Diggr tile poster with a title-screen style card that matches the provided reference composition.
- Updated the Diggr alt text and poster regression check so the tile still points at `poster.svg`.
- Verified with `npm run verify`.

## Diggr Exact Tile Asset

### Plan

- [x] Copy the provided Desktop Diggr tile image into the workspace
- [x] Point the Diggr card at the exact bitmap instead of the recreated SVG poster
- [x] Verify the updated asset path and production build

### Review

- Copied the provided Desktop image into the workspace as the Diggr tile asset.
- Swapped Diggr off the recreated SVG poster and onto the exact PNG file.
- Verified with `npm run verify`.

## Diggr Poster Push

### Plan

- [x] Inspect the local Diggr asset changes that were not yet in the deployed build
- [x] Point the Diggr card at the newer local poster asset
- [x] Verify and push the updated Diggr tile

### Review

- Found a newer local Diggr poster asset already present in the repo but not wired into the content model.
- Switched the Diggr card back to `poster.svg`, which now wraps the new `diggr-pwner-poster.png` bitmap.
- Verified with `npm run verify` before pushing.

## Diggr Poster Render Fix

### Plan

- [x] Inspect the live Diggr tile wiring and identify why the new poster was not rendering
- [x] Point the Diggr card directly at the `diggr-pwner-poster.png` bitmap instead of the SVG wrapper
- [x] Verify and push the render fix

### Review

- Confirmed the Diggr card was pointing at `poster.svg`, not directly at `diggr-pwner-poster.png`.
- Switched the card to the bitmap asset directly so production no longer depends on an embedded image inside an external SVG.
- Verified with `npm run verify`.
