# Pwner Studios

Pwner Studios is a static `Vite + React + TypeScript` landing page for Davis Wang's retro browser-game portfolio.

## What ships

- single-page studio homepage
- featured games with local content data
- hash-driven detail panel for each game
- GitHub Pages deploy workflow for the `/pwner-studios/` project path

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run build
npm run verify
```

`npm run verify` is the pre-push check for this repo.

## Deployment

Pushes to `main` trigger `.github/workflows/pages.yml`, which builds the site and deploys `dist/` to GitHub Pages.

The production base path is hard-coded to:

```text
/pwner-studios/
```

If you rename the GitHub repo, update `base` in `vite.config.ts` to match the new Pages project path.

## Content and assets

- content lives in `src/data/games.ts`
- app shell lives in `src/App.tsx`
- visual system lives in `src/styles.css`
- shipped media lives in `public/assets/games/`

## Shipping notes

See `docs/deployment.md` for the GitHub + GitHub Pages checklist.
