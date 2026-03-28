# Deployment

## Goal

Ship the site to GitHub and publish it at:

```text
https://daviswang.github.io/pwner-studios/
```

## One-time GitHub setup

1. Create the `pwner-studios` repo under `DavisWang`.
2. Push this workspace to the `main` branch.
3. In GitHub repo settings, open `Pages`.
4. Set the build source to `GitHub Actions`.

## Pre-push checklist

Run:

```bash
npm run verify
```

Confirm:

- tests pass
- `npm run build` succeeds
- the local preview works at `/pwner-studios/`
- outbound links still point to the intended live game repos and sites

## Publish flow

1. Push to `main`.
2. Wait for the `Deploy Pages` workflow to finish.
3. Open the Pages URL and confirm:
   - hero title renders correctly
   - each game card opens the right detail panel
   - `Play game`, `View repo`, and `About Davis Wang` links all work

## If the repo name changes

Update the `base` value in `vite.config.ts` before deploying.

Current value:

```ts
base: '/pwner-studios/'
```

## If deployment fails

Check:

- `npm ci` still succeeds locally
- the repo default branch is `main`
- GitHub Pages is configured to use Actions rather than branch publishing
- the workflow has permission to write Pages artifacts
