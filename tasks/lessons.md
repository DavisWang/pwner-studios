# Lessons

- Avoid slogan-y or self-consciously clever studio copy. Default to plain, descriptive phrasing for hero and footer text.
- Keep the hero tight. Do not add a secondary hero sentence unless it is clearly necessary.
- Keep portfolio metadata data-driven. Game order, status, and lineup counts should be controlled from the content list so published-title changes are one edit, not scattered UI edits.
- When a game has changed visually, do not keep the landing page on an older placeholder export. Refresh the selected tile media to match the current live art direction, not just the current file timestamps.
- When the user provides exact reference art for a portfolio tile, match that composition directly instead of substituting a synthetic poster concept.
- When the user provides the source asset file path, copy that asset into the workspace and wire it directly before attempting any recreation or screenshot-based workaround.
- Before pushing an asset update, check for newer local files already added in the repo and make sure the content model actually points at them.
- Do not wrap raster tile art in an SVG for card rendering unless you have verified the embedded image resolves in production. Prefer pointing the card directly at the bitmap asset.
- Portfolio tile/detail copy should speak to players first: sell the fantasy, challenge, and payoff, and avoid dev-facing implementation details or self-limiting phrases like `prototype`, `rough`, or `early build`.
- When a portfolio game has advanced materially, refresh both the copy and the surfaced tile/detail imagery against the current game build; do not leave older placeholder art or outdated scope claims in place.
- When local repo screenshots look stale or uncertain, capture fresh portfolio media from the live local build instead of assuming the exported `output/` artifacts are current.
- New portfolio entries should match the information density of the existing lineup. Do not give one game a longer detail view than the others unless the user explicitly asks for it.
- **Glyphs inside a fixed frame (logos, cartridge labels, icons):** Read the **actual container geometry** (e.g. inner `rect` `x`, `y`, `width`, `height` in the same coordinate space as the art). **Center** the mark with `origin + (innerWidth - glyphWidth) / 2` (and the same for height). **Scale up** to the **largest** grid or cell size that still fits with **balanced margins**—do not leave a small mark floating in unused space. After placing, sanity-check **left/right and top/bottom** margin symmetry against the inner box.
- **Never flush-mount glyphs to the inner container:** Define an explicit **safe inset** (padding) so the letterform does not touch the inner rounded rect—typically **a few pixels on every side** before centering the grid. If the composition should feel **taller**, prefer **increasing the drawable inner area** (e.g. slightly taller label `rect`) and/or **vertical emphasis in the grid**, not zero top/bottom margin.
- **Proportional layout language:** Phrases like “⅔ of the **top half**” mean: compute `fraction × (containerHeight / 2)` for that region—**not** `fraction × fullHeight`. Size the sub-shape (e.g. letter loop) to that derived value (then snap to the pixel grid), and keep the rest of the glyph in the remaining space.
