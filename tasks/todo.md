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

## Portfolio Copy Refresh

### Plan

- [x] Review the visible game-specific tile and detail strings in the content model
- [x] Rewrite the copy to target players instead of developers
- [x] Verify the landing page still builds and tests after the content update

### Review

- Reworked every game tile/detail string in `src/data/games.ts` to sell the player fantasy, challenge, and progression instead of implementation details.
- Replaced the dev-facing secondary meta strings with player-facing labels while keeping the same data structure and UI.
- Verified with `npm run verify`.

## Age Of War Refresh

### Plan

- [x] Compare the current Age of War landing-page copy and media against the latest local `aow` repo state
- [x] Refresh the Age of War tile/detail content and swap in current build imagery
- [x] Verify the updated landing page in the browser and through `npm run verify`

### Review

- Updated the Age of War metadata and detail copy in `src/data/games.ts` to match the current five-age playable build instead of the older vertical-slice framing.
- Replaced the stale tile poster with a cropped title-screen capture from the live local `aow` build and swapped the detail media from the old icon to a live battle-view capture.
- Spot-checked the refreshed Age of War detail dialog in Chrome at `http://127.0.0.1:4188/pwner-studios/#aow`.
- Verified with `npm run verify`.

## Neon Blaster X Portfolio Entry

### Plan

- [x] Review the current `neon-blaster-x` repo state and gather live visuals from the local build
- [x] Add a new Neon Blaster X portfolio entry at the top of the lineup with player-facing copy and current media
- [x] Update ordering-sensitive tests and verify the landing page in-browser plus `npm run verify`

### Review

- Added a new top-of-lineup Neon Blaster X entry in `src/data/games.ts` with player-facing copy aimed at the salvage/combat fantasy instead of repo-language implementation notes.
- Captured current local-build imagery from `http://127.0.0.1:4199/` and surfaced it as a title-screen tile plus builder/roster detail media under `public/assets/games/neon-blaster-x/`.
- Updated `src/App.test.tsx` for the new lineup count/order and added a Neon-specific detail-dialog coverage path.
- Followed up once the public game link existed by switching Neon Blaster X from repo-only to a live playable entry with a `Play game` action.
- Spot-checked the new dialog in Chrome at `http://127.0.0.1:4188/pwner-studios/#neon-blaster-x`.
- Verified with `npm run verify`.
