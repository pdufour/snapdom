# FO fix lab — debugging guide

Short reference for **headed** FO text raster work in `fo-fix-lab.html` / `fo-fix-lab.mjs`. See also [`README-fo-fix-lab.md`](README-fo-fix-lab.md) and [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md).

## Headed Chrome (required)

FO→bitmap ink is unreliable headless. Same rule as `bounce-check`:

```bash
npm run compile
npm run debug:fo-fix-lab          # static server @ :8765 + open lab in browser
```

Playwright matrix/calibrate (headed by default):

```bash
node __localtests__/fo-fix-lab.mjs --recipe product-baseline --open-browser
node __localtests__/fo-fix-lab.mjs --matrix --limit 20 --open-browser
node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --open-browser
```

Opt-in headless smoke only: `HEADLESS=1` (do **not** gate parity on it).

Kill stray Playwright Chrome before relaunch: `pgrep -fl playwright_chromiumdev_profile`

## Recipe dropdown: Lab fork + Raster patch

For recipes with a **decode fork** (e.g. w7 `fo-y-half-leading-meta`), both dropdowns must stay on **`(recipe default)`**.

| Wrong | Symptom |
|-------|---------|
| Lab fork = `lab-toCanvas-decode` or Raster patch = `decode-interval` | Fork never runs → `applied=NO` → canvasΔ stays **~+2.797** |
| Overrides left from prior session | Matrix shows **−0.203** in docs but you see **+2.797** |

URL overrides: `?fork=` / `?patch=` — clear them or reset dropdowns to `(recipe default)`.

## w7 structural fix (what “good” looks like)

Recipe: `tc-fix-w7-rfork-fo-y-half-leading-meta`  
Patch id: `fo-y-half-leading-meta` (via `labToCanvasOpts.rasterOnlySvgPatch`)

After **Run recipe**, results panel should show:

```
raster fork: fo-y-half-leading-meta · applied=yes · FO Δy=-2.800px · ½(lh−fs)=2.800px
```

| Recipe | Home canvasΔ @ dpr=1 | Pass (≤0.06)? |
|--------|---------------------:|:-------------:|
| `product-baseline` | **+2.797 px** | ✗ |
| w7 (`tc-fix-w7-rfork-fo-y-half-leading-meta`) | **−0.203 px** | ✗ (0.143 px from gate) |

−0.203 is **Range subpixel vs integer ink scan**, not a missing strut (typography no-flex w7 → **0.000**). See [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md).

Product blackbox with flag: `npm run test:blackbox:w7` (injects `?experimentalRasterSvgPatch=fo-y-half-leading-meta` — does not edit `bounce-check.mjs`).

## Ink marker lines (overlay)

After run, horizontal lines on the **Home** landmark (500×48 fixture):

| Color | Stage |
|-------|--------|
| **Green** | Live — glyph ascender (line-box + ½(lh−fs) in Live view; Range line-box in SVG/Canvas view) |
| **Blue** | SVG — inline FO line-box top |
| **Red** | Canvas — raster ink top |
| **Purple** | Predicted canvas after −½(lh−fs) fork |

Bold solid = active view stage; dashed = reference.

Console / Playwright:

```js
window.__foFixLab.inkMarkers
// { liveTopPx, liveVisualTopPx, svgTopPx, canvasTopPx, predictedCanvasTopPx, activeStage, landmark }
```

Press **V** to cycle Live → SVG → Canvas → Diff. Auto matrix defaults to **Canvas** view.

## CLI flags

| Flag | Purpose |
|------|---------|
| `--debug-lh` | Sets `?debugLh=1` — fork hash trace, text-leaf lh audit columns in matrix |
| `--calibrate` | Full checkout (`checkout-example.html`), Home + Products, rank worst \|canvasΔ\| |
| `--ids 'tc-fix-w7-*,product-baseline'` | Run subset (globs supported) |
| `--matrix --no-text-bypass` | Active FO raster recipes only (~10k); no svg-text/fillText leaders |
| `--active-only` | Skip archived/inactive recipes (default for matrix) |
| `--include-inactive` | Full ~33k corpus (opt-in) |
| `--text-only` | Implies `--debug-lh`; default ids = baseline + tc-blh-w1 + tc-text-w1 |

Examples:

```bash
node __localtests__/fo-fix-lab.mjs --calibrate --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta' --open-browser
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-fix-w7-*' --debug-lh --open-browser
node __localtests__/fo-paint-origin-autopsy.mjs --fixture all --dpr 1
npm run test:blackbox:w7
```

## Active-only matrix vs `--ids`

| Mode | Recipes |
|------|---------|
| `--matrix` (default) | **Active** recipes only (~10k); bottom index-half deactivated via `fo-fix-deactivated-ids.json`; text-bypass excluded |
| `--matrix --include-inactive` | Full corpus |
| `--ids 'tc-fix-w7-*'` | Explicit list/glob — still respects inactive filter unless `--include-inactive` |
| `--active-only` | Force active filter even if env says include inactive |

`tc-fix-w7-rfork-fo-y-half-leading-meta` is pinned in `FO_FIX_FORCE_ACTIVE_IDS` so it stays in the dropdown when active-only.

## Troubleshooting

### All marker lines at the same Y

Usually **SVG ≈ live ≈ canvas** (capture aligned) or **all stages tied at baseline plateau (+2.797)**. Check view mode: in **Live** view green uses glyph ink; blue/red use line-box — they can differ by ~½(lh−fs). Switch to **Canvas** view and compare red vs purple (predicted). If red ≈ purple but both ≠ green, fork may be applied but live reference differs (flex stretch).

### Canvas preview cut off / only one nav link

Canvas preview box is **56px** tall (display slack); capture metrics stay **500×48**. If hint says `1/2 nav links`, a **radical** recipe may draw one landmark only — switch to **Live** for full fixture. If canvas is blank, run `npm run compile` and check `#canvas-sanity-error`.

### Live (green) line looks “wrong” vs visible text

In **Live** view, green tracks **visible glyph ascender** (line-box + ½(lh−fs) on stretch nav — Range alone sits in the strut band). Matrix **Live top** uses **Range line-box** for signed deltas. In SVG/Canvas/Diff views, green uses **Range** to match the metrics panel.

### canvasΔ **+0.297** instead of w7 **−0.203**

| Cause | Fix |
|-------|-----|
| Fork not applied (`applied=NO`) | Reset Lab fork / Raster patch to `(recipe default)` |
| Wrong half-leading (**2.5** vs **2.8**) | Warning in results: truncated lh meta → ~+0.3 residual; verify `½(lh−fs)=2.800` in fork audit |
| Running **baseline** or wrong recipe | Select `tc-fix-w7-rfork-fo-y-half-leading-meta` |
| Product path without experimental flag | Lab recipe vs `npm run test:blackbox:w7` / `experimentalRasterSvgPatch` |

Delta math: baseline **+2.797** − strut **2.8** ≈ **−0.003** ideal; integer scan lands **−0.203** (Range fractional 0.203). **+0.297** ≈ **2.8 − 2.5** under-shift.

### Matrix leader is svg-text / fillText (~0.2 px)

Text-bypass rows — **do not promote**. Default matrix excludes them; use `--no-text-bypass` for ranking.

## Regression tests

Headed lab probes write JSON to [`.sandbox-edit/`](../.sandbox-edit/) and exit non-zero on drift. **Do not gate on `HEADLESS=1`** — FO→bitmap ink is unreliable headless.

| Command | What it checks |
|---------|----------------|
| `npm run test:fo-smoke-active` | First **50** active FO raster recipes (headed matrix smoke) → `.sandbox-edit/fo-matrix-smoke-active.json` |
| `npm run test:fo-smoke-active:force` | All `FO_FIX_FORCE_ACTIVE_IDS` only (`--force-active`) |
| `npm run test:fo-w7-ui-path` | UI single-recipe URL vs matrix URL for w7 @ dpr=1 — catches **+0.297** under-shift vs **−0.203** → `.sandbox-edit/fo-w7-ui-path-probe.json` |
| `npm run test:fo-glyph-bounds` | Letter **h/p** stretch `min-height` + descender slack (not ink-scan clip) → `.sandbox-edit/fo-glyph-not-clipped.json` |
| `npm run test:fo-three-way` | Baseline three-way: **\|canvasΔ\| > 0.5**, **\|svgΔ\| < 0.15** · Home + Products · dpr 1 & 2 → `.sandbox-edit/fo-three-way-consistency.json` |
| `npm run debug:fo-w7-regression` | `product-baseline` vs `tc-fix-w7-rfork-fo-y-half-leading-meta` vs `src-mirror-experimentalRasterSvgPatchFoYHalfLeadingMeta` · Home + Products · dpr 1 & 2 → `.sandbox-edit/fo-w7-regression-probe.json` |
| `npm run debug:fo-fix-lab -- --verify` | Layout-top gate on product-baseline (alias `debug:fo-h-nav-layout-top`) → `__localtests__/artifacts/fo-h-nav-layout-top-probe.json` |
| `npm run debug:fo-active-smoke` | Matrix smoke of `FO_FIX_FORCE_ACTIVE_IDS` (+ baseline) → `.sandbox-edit/fo-active-corpus-smoke.json` |
| `npm run test:fo-active-smoke` | Same as active smoke (headed); `HEADLESS=1` opt-in only — unreliable for ink |

Regression lock recipes:

- `tc-reg-lock-*` in `fo-recipes-shards/recipes-tocanvas-regression-wave.js` — frozen baseline / w7 / combo configs.
- Wave-2 invariants in `recipes-tocanvas-regression-wave2.js`: `baseline-plateau-2797`, `w7-beats-baseline`, `fork-red-changes-canvas` (pinned in `FO_FIX_FORCE_ACTIVE_IDS`).

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-reg-lock-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'baseline-plateau-2797,w7-beats-baseline,fork-red-changes-canvas'
npm run test:fo-smoke-active
npm run test:fo-w7-ui-path
npm run test:fo-glyph-bounds
npm run test:fo-three-way
npm run debug:fo-w7-regression
npm run debug:fo-fix-lab -- --verify
npm run test:fo-active-smoke
```

## Related files

| File | Role |
|------|------|
| `fo-fix-lab.html` | Interactive UI, ink markers, debug panel |
| `fo-fix-lab-runner.js` | Probe, `attachRasterForkAudit`, ink scan |
| `fo-fix-lab.mjs` | Playwright CLI |
| `fo-recipes-shards/recipes-tocanvas-fix-wave7.js` | w7 recipes |
| `src/exporters/rasterOnlySvgPatch.js` | Product fork `fo-y-half-leading-meta` (default off) |
