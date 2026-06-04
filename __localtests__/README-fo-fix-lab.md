# FO fix recipe lab

**Main check:** layout tops (`npm run debug:fo-fix-lab -- --verify`). **LLM compare:** optional (`npm run debug:fo-llm-visual-compare`).

Harness-only trials for foreignObject CSS / raster decode experiments. **No `src/` changes** — recipes are applied in the browser lab after a normal `window.snapdom` capture (or via **runtime monkeypatch** before capture when `recipe.monkeypatch` is set).

**Recipe shards:** Edit or add a file in `fo-recipes-shards/` (`export const FO_FIX_RECIPES_SHARD = [...]`), restart the lab — shards load automatically. Lab imports `fo-fix-recipes.js` only; core control rows (`product-baseline`, monkeypatch probes) live in `fo-recipes-shards/recipes-core-control.js`. Shared types/helpers: `fo-fix-recipe-shared.js`. Optional: `node __localtests__/fo-fix-recipes-merge.mjs --check-dupes` to warn on duplicate recipe ids.

## Runtime monkeypatch (no `src/`)

Structural experiments that would have lived in `capture.js` / raster can run as **reversible runtime patches** in `fo-fix-monkeypatch.js`:

| Patch id | What it does |
|----------|----------------|
| `capture-recipe-css` | Wrap `window.snapdom` → inject `recipeCaptureCss(recipe)` into FO `<style>` at `toRaw()` time |
| `h2-fo-normalize-full` | Same, with portable `pdufour/fix/h2` foNormalize CSS bundle |
| `decode-interval-prototype` | `HTMLImageElement.prototype.decode` → decode, 100ms, decode again |
| `decode-interval-wrap` | decode once, then 100ms wait (no second decode) |
| `decode-wrap` | swallow `decode()` rejections |
| `draw-image-pixelated` | `drawImage` forces `imageSmoothingEnabled: false` |
| `h2-*-capture` | h2 foNormalize / container / raster CSS bundles at `toRaw()` time |
| `snapdom-post-fo-css` | baseline + min-width/box-sizing inject at capture |

Recipes set `monkeypatch: '<patch-id>'` (or a list). `fo-fix-lab-runner.js` calls `applyMonkeypatch(recipe)` before capture and `uninstallMonkeypatch()` in `finally`. Dedicated probe ids: `mp-capture-recipe-css`, `mp-h2-fo-normalize-capture`, `mp-decode-interval-prototype`, `mp-draw-image-pixelated`, `mp-googlefonts-embed` (Inter via Google Fonts + `harnessSnapdom.embedFonts: true`).

```bash
node __localtests__/fo-fix-lab.mjs --recipe product-baseline
node __localtests__/fo-fix-lab.mjs --ids mp-h2-fo-normalize-capture,mp-decode-interval-prototype
```

## Local server (fixed port)

**Link hub:** [`__localtests__/index.html`](http://127.0.0.1:8765/__localtests__/index.html) — all harness pages, query variants, and npm debug scripts.

Debug runners serve the repo root at **`http://127.0.0.1:8765`** by default (`__localtests__/local-server-config.mjs`). Override with `SNAPDOM_LOCAL_PORT` if 8765 is taken.

| Page | URL |
|------|-----|
| FO fix lab (matrix) | http://127.0.0.1:8765/__localtests__/fo-fix-lab.html?matrix=1&auto=1&view=canvas |
| FO fix lab (single recipe) | http://127.0.0.1:8765/__localtests__/fo-fix-lab.html?recipe=product-baseline&auto=1&view=canvas |
| Checkout calibrate | http://127.0.0.1:8765/__localtests__/checkout-example.html?matrix=1&auto=1&calibrate=1 |

If bind fails (`EADDRINUSE`):

```bash
lsof -ti :8765 | xargs kill -9
# or
SNAPDOM_LOCAL_PORT=9333 npm run debug:fo-fix-lab
```

`npm run debug:fo-fix-lab` closes Chrome when the matrix finishes. To keep the window open after the run, pass **`--keep-open`** (CLI) or open the lab URL with **`keepOpen=1`** (headed only — avoid leaving this on by default).

## One command

| Goal | Command |
|------|---------|
| Lab server (manual UI, matrix URL) | `npm run debug:fo-fix-lab` |
| Headed layout-top gate (product-baseline drift on landmark H) | `npm run debug:fo-fix-lab -- --verify` |
| Optional LLM visual second opinion (needs API key or `--no-api`) | `npm run debug:fo-llm-visual-compare` |

`debug:fo-ink-sanity` and `debug:fo-h-nav-layout-top` are aliases for the layout-top gate. `debug:fo-ink-viewport` is a separate viewport legend probe (not the primary gate).

## Quick start

```bash
npm run compile
npm run debug:fo-fix-lab                    # local server @ :8765
npm run debug:fo-fix-lab -- --verify        # headed layout-top gate (primary)
npm run debug:fo-llm-visual-compare       # optional vision helper (not a gate)
node __localtests__/fo-fix-lab.mjs --matrix --limit 50   # smoke (add --open-browser)
node __localtests__/fo-fix-lab.mjs --matrix --limit 50   # smoke
node __localtests__/fo-fix-lab.mjs --matrix --include-inactive   # full ~33k corpus (opt-in)
node __localtests__/fo-fix-lab.mjs --limit 10
node __localtests__/fo-fix-lab.mjs --ids fix301,fix302
node __localtests__/fo-fix-lab.mjs --category radical --ids product-baseline   # bold probes: radical-batch2-* / radical-* / radical-different
node __localtests__/fo-fix-lab.mjs --matrix --category different --limit 10 --ids product-baseline   # diff-001…045 novel FO/SVG/decode hypotheses
node __localtests__/fo-fix-lab.mjs --matrix   # FO raster only (text-bypass excluded by default)
node __localtests__/fo-fix-lab.mjs --matrix --include-text-bypass   # diagnostic svg-text / fillText leaders
node __localtests__/fo-fix-lab.mjs --matrix --category no-text-bypass   # same as default full matrix filter
node __localtests__/fo-fix-lab.mjs --calibrate --category radical --limit 3 --ids product-baseline
```

Use **headed Chrome** for ink probes (same as `bounce-check`). `HEADLESS=1` is opt-in smoke only — FO→bitmap ink is unreliable headless.

For **bold matrix exploration**, prefer `--category radical` or `--ids radical-batch2-*` / `radical-*` over `next-batch3` / `leader-deriv` rank micro-variants.

## Full-checkout calibrate

Multi-landmark probes (Home, Products) on `checkout-example.html`:

```bash
node __localtests__/fo-fix-lab.mjs --calibrate --limit 15
node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --ids fix321-decode-interval
```

URL: `checkout-example.html?matrix=1&auto=1&calibrate=1&limit=15`

Sorted by **worst |canvas vs live|** top px across landmarks (single capture + raster per recipe).

## Ink top metrics (plain language)

All positions are **ink top inside the link border box** (px). Deltas are **signed vs live**; **positive means that stage’s ink sits lower than live**.

| Label | Meaning |
|--------|---------|
| **Live top** | Reference — Range-union painted top on the live DOM |
| **SVG top** | Painted top measured inside inline serialized `foreignObject` |
| **SVG vs live** | `SVG top − live top` — capture / FO serialization only (no bitmap decode) |
| **Canvas top** | Ink-band scan top on the raster canvas |
| **Canvas vs live** | `Canvas top − live top` — full FO→bitmap path; **pass when \|canvas vs live\| ≤ 0.06** |

Legacy font **cap-model** columns are hidden unless you set `window.__foFixLabDebugCap = true` or open the lab with `?debugCap=1`.

## When to fix SVG vs canvas

The **checkout gate** is **|canvas vs live|** (`bounce-check`). Lab matrix columns **SVG Δ** and **canvas Δ** are the signed deltas above (Home landmark by default).

- **Canvas is primary** — promote recipes that lower **|canvas vs live|** without text bypass; ignore bypass rows that look good on canvas but skip FO text raster.
- **SVG ≈ canvas but SVG ≠ live** → drift is in **capture / FO serialization** (`inject:capture`, monkeypatch capture CSS, structural `snapdom` serialization). Worth pursuing only in that band.
- **SVG ≈ live but canvas ≠ live** (common on `product-baseline`) → serialized FO ink already matches live; the gap is **FO→bitmap / `toCanvas`** (`decode-interval`, viewBox, drawImage harness, `toCanvas` product path). Do **not** add more FO CSS inject recipes here — they will not move the canvas column.
- **SVG ≠ canvas** → fix **raster** first; capture-only recipes will not change canvas until SVG and canvas ink align.

Optional triage: `classifyParityStage(row)` in `fo-fix-lab.mjs` returns `'raster' | 'capture' | 'aligned'` from the two deltas (default 0.15 px band).

## Compare views (`fo-fix-lab.html`)

After **Run recipe**, header radios (or `?view=`) switch the compare stage:

| View | What you see |
|------|----------------|
| **Live** | Mini nav fixture in the page |
| **SVG** | Patched capture SVG as `<img>` at fixture size (FO serialization, pre–bitmap decode) |
| **Canvas** | Full probe raster scaled 1:1 over the 500×48 fixture |
| **Diff** | Live + canvas (difference blend) |

`Ctrl+1` … `Ctrl+4` switch Live / SVG / Canvas / Diff (header shows digit hints; use **Ctrl**, not ⌘, so the browser does not steal tab shortcuts). `V` cycles the same four views. `Ctrl+Enter` runs the selected recipe; `Ctrl+Shift+Enter` runs the matrix. Auto matrix opens with **Canvas** unless `?view=` is set.

## FO SVG sandbox (IDE file edit loop)

Capture writes `__localtests__/.sandbox-edit/capture.svg`; edit in Cursor/VS Code and save for auto-reloaded canvas preview:

```bash
npm run debug:fo-svg-sandbox
# or: open /__localtests__/fo-svg-sandbox.html after compile + local server
```

See `README-fo-svg-sandbox.md`.

## Files

| File | Role |
|------|------|
| `fo-fix-recipes.js` | Lab entry: legacy + shard imports, filters |
| `fo-fix-recipes-merge.mjs` | Optional `--check-dupes` validator (no import rewrite) |
| `fo-recipes-shards/` | One JS file per agent/batch (`FO_FIX_RECIPES_SHARD`) |
| `fo-fix-monkeypatch.js` | Runtime patches (`applyMonkeypatch` / `installMonkeypatch` / `uninstallMonkeypatch`) |
| `fo-fix-lab-runner.js` | Browser probe: monkeypatch → capture → SVG patch → lab raster → ink metrics |
| `fo-fix-lab.html` | Interactive lab UI (category filter, matrix table, export JSON) |
| `fo-fix-lab.mjs` | Playwright CLI runner |
| `local-server-config.mjs` | Fixed default port **8765** (`SNAPDOM_LOCAL_PORT` override) |
| `local-http-server.mjs` | Static repo server + `launchHeadedChrome()` |

## Recipe batches

- **Legacy ids** — descriptive names (`vertical-align-top`, `fo-strut-zwsp`, …)
- **fix250+** — decode / flex / typography batch
- **fix321+** — decode-interval + font/overflow bundles
- **fix341+** — blob/bitmap decode, compositing, text-box, SVG root rounding
- **fix413+** — flex/line-box/font/text overflow probes + Chromium+decode/raster combos (`fix413`–`fix442`)
- **fix443+** (`radical-different`) — paint/isolation/containment/bidi/`@supports`/SVG attr + decode raster combos (`fix443`–`fix477`); no manual text rendering
- **paint-context** — `paint-isolation-isolate`, `paint-filter-opacity-099`, `paint-will-change-contents-transform`, `paint-transform-style-preserve-3d`, `paint-backdrop-filter-blur-0` (global `foreignObject` / `foreignObject *` CSS inject only)
- **loop batch** — typography (`type-font-variant-tabular-nums`, `type-text-transform-uppercase`, `type-word-spacing-zero`), brute-force raster (`radical-supersample-4x`, `raster-image-smoothing-false`, `radical-zero-alpha-anchor`, `radical-fillText-replace`)

Rejected (documented in `REJECTED_HYPOTHESES` only): `translate(0, 0.91)`, `zoom: 1.0001`, `letter-spacing: 0.01px`, `padding-bottom: 0.01px`, hard-coded SVG text nudge `0.91`.

All selectors are global FO subtree rules (`foreignObject`, `foreignObject *`, `foreignObject>div`). No nav/checkout/landmark selectors. No gate-tuned px offsets.

## Inactive recipes (bottom half)

`FO_FIX_RECIPES` keeps the full history (~33k rows). **Default matrix/lab runs use `isFoFixRecipeActive()`** (top index-half minus `fo-fix-deactivated-ids.json`, ~10k FO-raster rows with text-bypass excluded). The bottom index-half is **inactive** unless `--include-inactive` / `?includeInactive=1`. Batch runners pass `--active-only` so `SNAPDOM_FO_LAB_INCLUDE_INACTIVE` in the shell cannot widen scope.

```bash
node __localtests__/fo-fix-lab.mjs --matrix                      # active recipes only
node __localtests__/fo-fix-lab.mjs --matrix --include-inactive   # all recipes
node __localtests__/fo-fix-lab.mjs --matrix --ids vary5-028      # explicit id still runs one inactive recipe
```

URL: `?includeInactive=1` · env: `SNAPDOM_FO_LAB_INCLUDE_INACTIVE=1`

Per-recipe `active: false` in the typedef is an optional override; index threshold is the default rule.

## Deactivate worst-ranked fraction (bottom 75%)

The lab also supports a **denylist** (`fo-fix-deactivated-ids.json`) that can be regenerated from the most recent **matrix ranking output**, deactivating the **worst** recipes by \(|canvas vs live|\) while keeping controls like `product-baseline` active.

This is **manual / one-off**: it updates the denylist only (still **no `src/` edits**). The matrix simply respects whatever ids are in `fo-fix-deactivated-ids.json` (no auto-deactivation on run).

```bash
# Regenerate matrix rows + apply bottom 75% (active recipes only; matches default lab matrix)
npm run fo:prune:run

# Apply from last batched matrix (no re-run):
npm run fo:prune

# Prefer: use last stored matrix rows JSON (written by fo-fix-rank-all-batches.mjs; active-only by default)
node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.75 --active-only

# Explicit input (same behavior):
node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.75 --rows-json __localtests__/.matrix-rank-all-rows.json --active-only

# Full corpus (~33k) for rank-all / prune — opt in:
node __localtests__/fo-fix-rank-all-batches.mjs --include-inactive
node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --run-matrix --include-inactive --fraction 0.75
```

Reset / clear denylist:

```bash
node __localtests__/fo-fix-reset-deactivated-ids.mjs
```

## Esoteric batch (`esoteric-001` … `esoteric-030`)

Harness-only **state-mutation** probes (CSS context breakers, SVG/XML patches, raster hooks). No `src/` changes. Skipped ids are documented in `REJECTED_HYPOTHESES` only (`esoteric-010` text-stroke 0.01px, `esoteric-027` translateY −0.91px).

```bash
npm run compile
node __localtests__/fo-fix-lab.mjs --matrix --category esoteric
```

Matrix includes `product-baseline` automatically when filtering by `esoteric`. Radical patches: `fo-nbsp-trailing-span`, `fo-per-letter-spans`, `fo-explicit-xhtml-xmlns`, `fo-wrap-in-switch`, `svg-purge-whitespace`. Raster patches: `create-image-bitmap-pixelated`, `composite-copy`, `phantom-font-prime`, `context-alpha-false-desync`, `scale-down-up` (requires `radicalOptions.recipeScale`).

## Categories (`fix300+`)

| Category | Examples |
|----------|----------|
| `esoteric` | esoteric-001–030 (010/027 rejected) |
| `flex` | fix301–fix304 |
| `font` | fix305–fix307 |
| `overflow` | fix308, fix319 |
| `contain` | fix309 |
| `strut` | fix310 |
| `line-height` | fix311 |
| `text` | fix312, fix314–fix317 |
| `raster` | fix313 (FO svg CSS), fix318 (double-decode harness) |
| `bundle` | fix320 |
| `paint-context` | paint-isolation-isolate … paint-backdrop-filter-blur-0 |
| `radical` | radical-supersample-4x, radical-fillText-replace, … |
| `radical` | radical-001+, **radical-batch2-*** (bold FO/SVG/raster probes — prefer over rank-derivatives) |
| `extreme` | extreme-001 … extreme-060 (high-variance FO/CSS/decode; no text bypass) |
| `rank` | rank-* leader merges (text-bypass diagnostic only) |
| `no-text-bypass` | All recipes excluding SVG-text / fillText / text-as-path bypass (`TEXT_BYPASS_RADICAL_PATCHES`) |
| `fo-try` | `fo-try-001`…`030` — one-knob FO→canvas hypotheses (viewBox, decode timing, Chromium ±1 prop, flex/contain/subpixel) |
| `fo-try2` | `fo-try2-001`…`025` — one knob on `fo-try-007` leader stack (Chromium + int viewBox + decode-interval) |
| `fo-try3` | `fo-try3-001`…`030` — decode/raster/markup/flex/overflow knobs + 5 two-parent merges (rank-001/004, fix435, keep-more-001) |

## Text bypass (diagnostic only)

Recipes using `replace-fo-with-svg-text`, `svg-only-text-layer`, `text-as-path`, or `fillText-replace` bypass FO text raster entirely. They can show low |canvas vs live| on the mini fixture but are **laggy, fragile, and not promotable to product**. Use them to isolate whether drift is FO-decode vs capture-serialization only.

**Default matrix** (`--matrix` with no `--category` / `--ids`) excludes text-bypass recipes and non-structural cheats (`font-size-pin*`, `type-text-transform*`, `crazy-font*`) via `isMatrixNonStructuralRecipe()` (~510 FO-raster rows). Matrix **“Best”** lines and promotion rankings use `bestPromotableMatrixRow()` — they skip svg-text / fillText / path-text leaders even when `--include-text-bypass` is set.

```bash
# Default — FO raster probes only
node __localtests__/fo-fix-lab.mjs --matrix --open-browser

# Explicit (same as default for full matrix)
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass

# Diagnostic manual-text leaders (rank-*, crazy-fillText, …)
node __localtests__/fo-fix-lab.mjs --matrix --include-text-bypass

# Category alias (still valid)
node __localtests__/fo-fix-lab.mjs --matrix --category no-text-bypass
```

URL: `?matrix=1&auto=1` (default FO raster) · `?excludeTextBypass=1` · `?includeTextBypass=1` · `?noTextBypass=1`

Detection: `isTextBypassRecipe()` in `fo-fix-recipes.js` (`TEXT_BYPASS_RADICAL_PATCHES` + optional `textBypass: true` tag). New probes: `notext-*`, `fo-raster-deriv-*`, `leader-deriv-*` (FO CSS + raster + monkeypatch only).

## Radical experiments

Category `radical` holds **harness-only** outside-box trials — SVG post-process, live-DOM bypass, supersample diagnostics. They may break capture or collapse FO layout. **Do not promote to `src/`** without a checkout calibrate win on Home/Products.

```bash
node __localtests__/fo-fix-lab.mjs --matrix --category radical --ids product-baseline
node __localtests__/fo-fix-lab.mjs --calibrate --category radical --limit 3 --ids product-baseline
```

Rejected/harmful radical ideas are documented in `REJECTED_HYPOTHESES` inside `fo-fix-recipes.js` (e.g. `all:unset` cascade collapse, hidden 3× supersample beyond caller scale).

## Extreme batch (`extreme-001` … `extreme-060`)

Beyond **radical** / **radical-batch2** — high-variance FO/CSS/decode hypotheses (global `foreignObject` only). No text bypass, no gate-tuned px, harness-only (no `src/`).

Mechanisms include: `display:contents` on FO wrapper, `all:unset` + re-box, `transform: scale(0.999)` / `matrix(1,0,0,1,0,0)`, filter/backdrop strip, isolation + `contain:strict`, `overflow:clip`, `will-change` everywhere, writing-mode reset, SVG root `overflow=hidden` vs FO visible, vector-effect, sync/zero/max decode paths (`direct`, `blob-url`, `fonts-ready-interval`, `load-event-interval`, `double-raf`, `triple-raf-flush`), no-Chromium font block, integer viewBox/floor/snap, `@supports not (overflow: clip)`, `color-scheme: only light`, `animation:none`, and combo bundles (`extreme-058` … `extreme-060`).

```bash
npm run compile
# CLI — matrix prepends product-baseline automatically
node __localtests__/fo-fix-lab.mjs --matrix --category extreme --limit 10
node __localtests__/fo-fix-lab.mjs --matrix --category extreme --ids product-baseline

# Interactive lab — category dropdown or URL
# http://127.0.0.1:8765/__localtests__/fo-fix-lab.html?matrix=1&auto=1&category=extreme&limit=10
```

Smoke (headed Chrome, ~61 rows with baseline):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --category extreme --limit 5 --ids product-baseline
```

## Crazy batch (`crazy-*`)

Wildest harness-only experiments — global FO CSS, SVG surgery, and raster compositing probes. **No `src/` changes.** Matrix always includes `product-baseline` when filtering by `crazy`.

```bash
npm run compile
node __localtests__/fo-fix-lab.mjs --matrix --category crazy --ids product-baseline
```

| Id | Mechanism |
|----|-----------|
| `crazy-fo-to-svg-text` | `replace-fo-with-svg-text` — measured SVG `<text>` overlay |
| `crazy-live-bitmap-composite` | `canvas-from-live` — live subtree FO wrapper raster |
| `crazy-double-raster-blend` | `double-raster-difference` — two-pass difference compositing |
| `crazy-invert-then-invert` | FO `filter:invert(1)` + `canvas-filter-invert` |
| `crazy-fo-display-none-draw-vector-only` | `fo-display-none` |
| `crazy-halftone-scale` | `supersample-downscale` with `radicalOptions.recipeScale: 3` |
| `crazy-svg-flatten` | `strip-svg-styles` — remove all `<style>` |
| `crazy-fo-innerHTML-minimal` | `fo-innerhtml-minimal` — bare div+text per FO |
| `crazy-chrome-color-profile-srgb` | `svgRootPatch` `color-interpolation-filters: sRGB` |
| `crazy-split-fo-per-child` | `split-fo-per-child` — one FO per top-level XHTML child |
| `crazy-rotate-0.001deg` | global `transform: rotate(0.001deg)` on `foreignObject *` |
| `crazy-writing-mode-sideways` | `writing-mode: sideways-lr` on `foreignObject *` |
| `crazy-font-family-monospace-force` | `font-family: monospace` on `foreignObject *` |
| `crazy-text-indent-9999-clip` | text-indent clip hack (expect ink probe failure) |
| `crazy-raster-via-offscreen-transfer` | `offscreen-canvas` + `transferToImageBitmap` |
| `crazy-fillText-overlay` | transparent FO + `fillText-replace` overlay |

**Text bypass is diagnostic only** — do not promote `replace-fo-with-svg-text`, `svg-only-text-layer`, `text-as-path`, or `fillText-replace` to `src/`. Full matrix runs skip them by default; use `--include-text-bypass` only when isolating FO-decode vs serialization.

New raster patches (runner only): `double-raster-difference`, `canvas-filter-invert`. New radical patches: `strip-svg-styles`, `fo-innerhtml-minimal`, `split-fo-per-child`.

## CLI flags

| Flag | Description |
|------|-------------|
| `--matrix` | Run matrix (default when no `--recipe`) |
| `--recipe <id>` | Single recipe |
| `--limit N` | Max recipes |
| `--offset N` | Skip first N recipes (ignored when `--ids` or `--category` set) |
| `--ids id1,id2` | Explicit recipe ids |
| `--category <cat>` | Filter by category (`flex`, `font`, …) |
| `--no-text-bypass` | Force exclude svg-text / fillText / path-text recipes (default on full matrix) |
| `--include-text-bypass` | Include manual text-rendering bypass recipes in matrix |
| `--calibrate` | Full-checkout multi-landmark matrix on `checkout-example.html` |
| `--landmarks Home,Products` | Landmarks for calibrate mode (default: Home, Products) |
| `--keep-open` | Keep browser open after run (headed only; optional — not default) |

URL equivalents (port **8765**): `http://127.0.0.1:8765/__localtests__/fo-fix-lab.html?matrix=1&auto=1&limit=10&ids=fix301,fix302&category=flex&excludeTextBypass=1` · `includeTextBypass=1` for diagnostic leaders

## Raster harness patches

Lab-only raster options (not product code):

- `canvas-pixelated` — disable image smoothing during decode
- `device-grid-floor` — floor SVG root to device pixel grid
- `double-decode` — SVG → canvas → PNG data URL → re-decode (fix318)
- `decode-interval` — wait 100ms after Image.decode before drawImage (fix321, modern-screenshot default)
- `supersample-downscale` — raster at `radicalOptions.scaleMultiplier` or `recipeScale` (e.g. `radical-supersample-4x` with explicit `recipeScale: 4`), then downscale to output canvas at caller `dpr`
- `radicalPatch` — harness SVG post-process (`zero-alpha-anchor`, `fillText-replace`, `fo-nbsp-trailing-span`, `svg-purge-whitespace`, …) via `applyRadicalSvgPatch`
- `foAttrPatch` — patch each `<foreignObject>` attr (e.g. micro x/y `0.000001`)
- `create-image-bitmap-pixelated` / `composite-copy` / `phantom-font-prime` / `context-alpha-false-desync` / `scale-down-up` — esoteric raster hooks (`scale-down-up` needs `radicalOptions.recipeScale`)
- `svgRootPatch` — patch outer capture `<svg>` attrs (e.g. `shape-rendering: crispEdges`)
- **Radical only:** `applyRadicalSvgPatch` — post-capture SVG transforms (`replace-fo-with-svg-text`, `fo-to-image-placeholder`, …)
- **Radical only:** `canvas-from-live`, `no-fo-capture`, `supersample-downscale`, `double-raster-average`, `decode-via-blob`

## Recipes derived from matrix leaders

Headed mini Home matrix leaders (by |canvas vs live|, prior batches): **~0.203** svg-text family (`replace-fo-with-svg-text`, `svg-only-text-layer`), **~0.797** fillText overlay (`fillText-replace` + transparent FO), **2.797** `product-baseline` (FO raster path). The `rank-*` batch merges those mechanisms with decode timing (`decode-interval`, `fonts-ready-interval`) and structural raster hooks (`integer-viewbox`, `blob-url-decode-interval`) — not random FO CSS.

```bash
npm run compile
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,rank-*
```

`--ids` supports suffix wildcards (`rank-*`). Twelve recipes: `rank-svg-text-decode-interval`, `rank-svg-text-baseline-css`, `rank-filltext-decode-interval`, `rank-svg-text-integer-viewbox`, `rank-svg-text-fonts-ready`, `rank-text-as-path-decode-interval`, `rank-svg-text-fonts-ready-interval`, `rank-filltext-fonts-ready-interval`, `rank-svg-text-decode-interval-raf`, `rank-svg-only-text-decode-interval`, `rank-filltext-integer-viewbox`, `rank-svg-text-blob-decode-interval`.

### h2-good / h2-plus batch (h2 FO-only leaders, no text bypass)

Twenty-four harness recipes (`h2-good-001-*` … `020-*`, `h2-plus-001-*` … `004-*`) — one structural knob per parent from **next-from-rank-001/003/004/005/006/007/008**, **notext-h2-normalize**, **h2-retry-chromium/stretch/mp**, **h2-port-container/flex-stretch**, **loop-auto-017**, **next-fp-001/002**. Combines portable h2 foNormalize inject with integer viewBox / int-floor, decode-interval variants (raf, fonts.ready, blob), Chromium font copy, min-width 0, subpx `translateZ(0)`, integer-snap rects, device-grid floor, two-stage, and pre-decode DOM. Excludes SVG-text / fillText / path text bypass.

Mini Home FO-only band: parents and derivatives typically **~2.797 |canvas vs live|** (tied `product-baseline`); promotion uses `bestPromotableMatrixRow()` — not bypass ~0.203 rows.

```bash
node __localtests__/fo-fix-lab.mjs --ids product-baseline,h2-good-*,h2-plus-* --no-text-bypass --open-browser
```

See also **h2-good2-*** (seven recipes on **keep-more** leaders).

### next-from-rank batch (product path, no text bypass)

Merges **rank-*** timing/viewBox hooks with **notext-*** FO/raster leaders (still ~2.797 on mini unless a row beats baseline):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,next-from-rank-*
```

Ids: `next-from-rank-001-h2-int-decode` … `008-device-grid-h2-decode` (see `.fix-effectiveness-summary.md`).

### next-fp batch (float / subpixel, no text bypass)

Nineteen harness recipes (`category: float-precision`) combining **next-from-rank** / **notext-*** leaders with integer viewBox/root snap, `round-dims` / `int-floor`, compositor hints (`translateZ`, layer bundle), line-height consistency, `integer-snap-all-rects`, device-grid floor, Chromium #104-style FO `0.0001` origin bump, and CSS `round()` on FO size. Excludes SVG-text / fillText / path text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,next-fp-*
```

**`esoteric-030` preview:** `scale-down-up` at `recipeScale: 0.5` — blur in canvas view is from the probe, not display scaling; lab shows a blue info banner when `scaleDownUp` metadata is present.

### leader-deriv batch (matrix-leader deltas, no text bypass)

Forty harness recipes (`category: no-text-bypass`) — one structural knob per parent from **fix435/436/441/442**, **next-from-rank-002/003/006/007**, **next-fp-001/004/006/008/012/014/015/018**, **notext-chromium**, **radical-007**:

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,leader-deriv-*
```

Ids: `leader-deriv-001-chromium-stretch-decode` … `040-fp001-int-floor` (021–040 extend **next-fp** / **next-from-rank** float-precision leaders with decode-raf, fonts.ready, integer-snap, Chromium swaps, int-floor A/B).

### fo-raster-deriv batch (FO-raster leader deltas, no text bypass)

Forty harness recipes (`category: no-text-bypass`) — one structural knob per parent from **next-from-rank-005/008**, **radical-v3-flex-stretch**, **fix437–440**, **next-fp-003/005/010/011/016/017/019**, **notext-two-stage/split-fo/contain-paint**, **h2-fo-internal-star-normalize**, **fix433**, plus **026–040** second-order merges (snap + blob + Chromium on **next-fp-014/016/017/018**, **rank001/003/004/008**):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,fo-raster-deriv-*
```

Ids: `fo-raster-deriv-001-rank005-decode-int` … `040-rank008-grid-snap`.

### next-rank2 / next-fp2 batch (ranked leader deltas, no text bypass)

Twenty harness recipes — one structural knob per parent from **next-from-rank-001/002/003/004**, **notext-h2-normalize**, **next-fp-001/003/004/005/008/016/018**, **fix436** (curated gaps vs fo-raster-deriv / next-batch4):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,next-rank2-*,next-fp2-*
```

**next-rank2** (001–010): timing (`fonts-ready-interval`, `pre-decode-dom`, `decode-microtask-twice`, `blob-url-decode-interval`), `fo-shape-rendering-auto`, `int-floor` vs `integer-viewbox`, `h2-frac-draw`.

**next-fp2** (001–010): `integer-snap-all-rects` on round/floor/flex/percent paths, `decode-interval-raf`, `fonts-ready-interval`, `decode-microtask-twice`, `round-dims` on pin-lh, Chromium+blob on fix436.

### keep-more batch (25 gap-fill leader derivatives, no text bypass)

Twenty-five harness recipes (`category: no-text-bypass`) — curated gaps on **next-from-rank-001/002/004/005/008**, **leader-deriv-014**, **fix434–442**, **next-fp-016**, **h2-weird** (pin-width, container-lang), **mp-decode-interval-prototype**. One structural knob per parent; no SVG-text / fillText / path text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids product-baseline,keep-more-*
```

Ids: `keep-more-001-rank001-from-font` … `025-rank008-chromium-int`.

### fo-try2 batch (25 FO→canvas probes, no text bypass)

Twenty-five harness recipes (`category: fo-try2`): each adds **one** structural knob on top of the `fo-try-007-chromium-int-vb-decode` leader stack (Chromium font copy + integer viewBox + decode-interval). Knobs span alternate decode/raster paths (rAF, fonts.ready, microtask, blob, supersample, frac-draw, triple-decode, offscreen, pixelated), harness patches (integer-snap, pin lh/width, flex-stretch-leaf, strip transforms, fo attr bump), and flex/line-box CSS (align-items center, align-self start, from-font line-height, place-items start, overflow-clip-margin). No text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --category fo-try2 --no-text-bypass
node __localtests__/fo-fix-lab.mjs --ids product-baseline,fo-try2-001-decode-raf,fo-try2-013-integer-snap --no-text-bypass
```

### fo-try3 batch (30 FO→canvas probes, no text bypass)

Thirty harness recipes (`category: fo-try3`): 25 one-knob probes on **next-from-rank-001** / **next-from-rank-004** / **FO_BASELINE** stacks (viewBox round/floor, decode/raster timing, markup xmlns/strip-xml, flex subpx, overflow/box-sizing) plus five two-parent merges (rank-001+rank-004 CSS, rank-004+Chromium, fix435+integer-snap, rank-001+triple-decode, keep-more-001+load-event). Complements **fo-try2** (Chromium+intVB leader knobs). No text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --category fo-try3 --no-text-bypass
node __localtests__/fo-fix-lab.mjs --ids product-baseline,fo-try3-* --no-text-bypass --limit 32
```

### next-batch3 (50 leader derivatives + structural FO, no text bypass)

Fifty harness recipes (`next-batch3-001` … `050`): ~60% close derivatives of **next-fp** / **leader-deriv** / **next-from-rank** / **fix435–442** matrix leaders; ~40% structural (**v3** pipeline, radical/svg surgery, alternate decode paths). No SVG-text / fillText / path text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,next-batch3-*
node __localtests__/fo-fix-lab.mjs --matrix --category no-text-bypass --limit 60
```

### next-batch4 (100 FO-raster derivatives + structural probes, no text bypass)

One hundred harness recipes (`next-batch4-001-*` … `100-*`): ~70% merge **next-from-rank** / **next-fp** / **notext-*** / **fix435–437** / **leader-deriv** / **radical-v3-flex** leaders with decode timing, integer viewBox/root snap, Chromium font copy, and FO rect snap; ~30% global **radical** / **svg** / **decode** pipeline experiments (strip transforms, iframe decode, product toCanvas, etc.) — no SVG-text / fillText / path text bypass.

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,next-batch4-*
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids next-batch4-001-raf,next-batch4-071-strip-transforms --limit 2
```

### orthogonal batch (subsystem probes, no text bypass)

Forty-five harness recipes (`category: orthogonal`) — one distinct subsystem per id: 3D/perspective/backface, scroll-snap resets, tab/hyphen/word-break, font-synthesis/variant/feature, logical margin/padding/inset, anchor positioning, field-sizing/interpolate-size, content-visibility, print-color-adjust, accent/caret, overflow-visible+contain-none, SVG filter/shape patches, standalone raster paths (offscreen-canvas, createImageBitmap, composite-copy, load-event, decode-microtask-twice, flip-y, bitmaprenderer-transfer, pre-decode-dom, blob-decode-interval), scroll/overscroll behavior, and MP decode-wrap.

```bash
node __localtests__/fo-fix-lab.mjs --category orthogonal --no-text-bypass --limit 40
```

Ids: `orthogonal-001-perspective-root` … `045-mp-decode-wrap`.

### gap / wild2 batch (under-tried CSS, no text bypass)

Thirty-five harness recipes (`category: gap` or `wild`) for mechanisms **not** in rank/fp/batch4/orthogonal rows: `container-type` / `container-name`, `view-transition-name`, touch/overscroll/scrollbar variants, ruby/text-emphasis/initial-letter, `object-fit`/`object-position`, explicit `aspect-ratio`, `place-content`/`place-items`, filter+backdrop combos, SVG text stroke/paint-order, `content-visibility` hidden→visible, and CSS spacing surrogates for SVG `textLength` (harness has no `textLength`/`lengthAdjust` attr patch yet).

```bash
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,gap-*,wild2-*
node __localtests__/fo-fix-lab.mjs --matrix --category gap --limit 12
```

Ids: `gap-001-container-type-inline-size` … `gap-030-svg-text-spacing-reset`, `wild2-001-container-view-transition-bundle` … `wild2-005-overscroll-content-visibility`.

### other batch (subgrid, typography trim, leader single-knobs)

Thirty harness recipes (`category: other`) — subgrid track alignment, `text-spacing-trim` / `text-autospace`, optical sizing / variation reset, overflow anchor/clip, scroll/animation timeline none, individual `translate`/`rotate`, table caption/empty-cells, list marker position, FO transform/perspective origin, and one-knob isolates from **notext** / **next-fp** / **v3** leaders (round-dims, int-floor, double/triple decode, decode-interval-raf, fonts-ready, wait-fonts-500ms, strip-transforms, cache bust, iframe decode).

```bash
node __localtests__/fo-fix-lab.mjs --category other --no-text-bypass --limit 40
```

### vary batch = max diversity smoke (no text bypass)

Thirty harness recipes (`vary-001` … `vary-030`, `category: vary`) — **one primary mechanism per id** across compositor, grid, flex, typography-CSS-only, SVG attrs/markup/FO patches, raster paths, decode timing, containment, print, motion, logical props, tables, lists, forms, masks, filters-off, 3d, scroll, ruby, overflow, color, isolation, gap, strut, line-height, monkeypatch, and svg radical patches. Deliberately **avoids** saturated int-viewBox + decode-interval + Chromium stacks (see merge/retry/fresh4). Complements **vary2** (anchor/@layer/color-mix/typography trim probes).

```bash
node __localtests__/fo-fix-lab.mjs --category vary --no-text-bypass --limit 30 --open-browser
```

## Promoting to product

Winning recipes must be proven general and structural before any change to `capture.js` / `toCanvas.js`. See project rules: `no-speculative-src-edits`, `never-overfit`, `no-magic-numbers`.

## Manual harness workflow (loops off)

Do **not** arm `fo-fix-loop.sh`, `AGENT_LOOP_WAKE_*`, or long `sleep` background chains.

> **LOOP DISABLED** — do not run `arm-immediate`, `daemon`, or emit `AGENT_LOOP_*` wake lines.

1. Add or pick a recipe in `fo-fix-recipes.js`
2. Compile and matrix-probe vs baseline:

```bash
npm run compile
node __localtests__/fo-fix-lab.mjs --matrix --ids product-baseline,<recipe-id>
```

3. Update `__localtests__/.loop-last-status.json` with best `|canvas vs live|` and notes (optional)

To stop any leftover sleeper: `__localtests__/fo-fix-loop.sh stop`
