# toCanvas recipe lab (tc-lab)

The **toCanvas lab** is a set of `tc-lab-*` recipes inside the FO fix recipe lab harness (`__localtests__/fo-fix-lab.html`). These recipes are focused on the **SVG → bitmap → Canvas** part of the pipeline (decode timing, drawImage variants, backing-store rounding, etc.) while still keeping **real DOM text inside `foreignObject`**.

## Quick commands

```bash
# Count how many tc-lab-* recipes exist (fast, static; does not import shards)
npm run debug:tc-lab-count

# Launch the lab runner filtered to tc-lab-* rows
npm run debug:tc-lab-matrix
```

## Waves 1–10 (current inventory)

Counts come from `npm run debug:tc-lab-count` (best-effort, static heuristic). Treat them as an estimate; the exact matrix runtime depends heavily on per-row timeouts and browser stability.

| Wave | What it covers | Estimated recipes |
|------|----------------|------------------:|
| 1 | Baseline forks + hand-curated “custom-*” shards (fork/decode/draw/viewBox/backing/context/Safari/SVG) | 555 |
| 2 | “plus-*” combinator shards (combo/meta/monkeypatch/supersample/bg) | 655 |
| 3 | Scale/export/fit/active probes | 960 |
| 4 | Multipass/ImageData/offscreen/color + generated knobs | 990 |
| 5 | Interval/gapfill/natural/sandbox/draw9 + generated knobs | 1340 |
| 6 | Fork-matrix + retry/transform/shadow + generated knobs | 1438 |
| 7 | Timing/bitmap/draw/pixel/svgprep + generated knobs | 1730 |
| 8 | Large generated space + seed set | 2142 |
| 9 | Large generated space + enums/monkey/fill/micro/stash/etc. | 2910 |
| 10 | Largest generated space + ctx/img/cross/idle/measured/etc. | 3430 |

**Total estimate:** ~**16,150** recipes.

## `debug:tc-lab-matrix` usage notes

`npm run debug:tc-lab-matrix` runs the FO fix lab in matrix mode, filtered to `--ids 'tc-lab-*'`.

This is intentionally **expensive**:

- 16k+ rows can take **hours** on a warm machine.
- Chrome can become unstable if you try to run the full set repeatedly.

Practical workflows:

```bash
# Prefer smaller slices while iterating:
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-*' --limit 50

# Or run a single wave / family:
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7g-*'
```

#!/usr/bin/env markdown

# toCanvas lab recipe shards

This directory’s lab recipes live in:

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab*.js`

They are consumed by the FO fix lab runner:

```bash
node /Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-*'
```

## Duplicate checks

```bash
node /Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-recipes-merge.mjs --check-dupes
```

## Inventory (tc-lab only)

```bash
node /Users/pauldufour/Repos/snapdom/__localtests__/inventory-tc-lab-shards.mjs
```

## Wave 7

### wave7 unique

- Shard: `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave7-unique.js`
- IDs: `tc-lab-w7-uni-001..060`
- Goal: 60 recipes with knob hashes that do not exist in any other `recipes-tocanvas-lab*` shard.

Regenerate:

```bash
node /Users/pauldufour/Repos/snapdom/__localtests__/gen-tocanvas-lab-wave7-unique.mjs
node /Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-recipes-merge.mjs --check-dupes
```

# toCanvas lab (FO fix lab)

This doc indexes **all** `tc-only-*` and `tc-lab-*` recipe shards used by the FO fix lab’s toCanvas stage experiments.

## Core commands

```bash
# Run the full lab matrix (headed Chrome)
node __localtests__/fo-fix-lab.mjs --matrix

# Prefer this when ranking toCanvas rows (no text bypass)
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass

# Run only the toCanvas shard family you care about
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-only-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-*'

# Validate merged recipe IDs (no rewrites)
node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
```

## Raster forks (implementation files)

Recipes select these via `recipe.rasterPatch` (or via `?labToCanvas=1` for the baseline fork).

- **Lab fork (product-parity baseline + lab knobs)**  
  `/Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-toCanvas.js`  
  rasterPatch: `lab-toCanvas`

- **Decode timing fork (experimental)**  
  `/Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-toCanvas-decode-experimental.js`  
  rasterPatch: `lab-toCanvas-decode`

- **Fractional draw fork (experimental)**  
  `/Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-toCanvas-frac-draw.js`  
  rasterPatch: `lab-toCanvas-frac`

Related helpers:

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-toCanvas-load-pipeline.js`
- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-fix-toCanvas-draw-fit.js`

## RasterPatch values (tocanvas-focused)

Common values you will see in these shards:

- `product-toCanvas` (mirror the product exporter path)
- `lab-toCanvas` / `lab-toCanvas-decode` / `lab-toCanvas-frac` (lab forks)
- Decode/timing probes: `decode-interval`, `decode-interval-raf`, `double-decode`, `triple-decode`, `double-raf`, `raf-before-draw`, `load-event`, `fonts-ready-interval`, `decode-microtask-twice`
- URL / decode sources: `blob-url`, `blob-url-decode-interval`, `decode-via-blob`
- Draw variants: `two-stage`, `h2-frac-draw`, `supersample-downscale`, `create-image-bitmap`, `create-image-bitmap-pixelated`
- Wait probes (lab-only): `lab-wait-{0,1,16,33,50,100,150,200,300,500}ms`

## Shards index (ALL tc-only / tc-lab)

Each entry shows where the recipes live and the recommended `--ids` selector.

### tc-only (toCanvas-stage-only)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-only-01.js`  
  ids: `tc-only-*`  
  matrix:
  ```bash
  node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-only-*'
  ```

### tc-lab baseline and small forks

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork.js`  
  ids: `tc-lab-00*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork-alt.js`  
  ids: `tc-lab-alt-*` (decode/frac duplicates for controlled comparisons)

### tc-lab composite + viewBox/dims/draw harness

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork-composite.js`  
  ids: `tc-lab-cmp-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork-viewbox.js`  
  ids: `tc-lab-vb-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork-draw.js`  
  ids: `tc-lab-draw-*`

### tc-lab “plus-*” families (structured probe suites)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-meta.js`  
  ids: `tc-lab-meta-*` (toCanvasHarness meta/dims probes)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-monkeypatch.js`  
  ids: `tc-lab-pls-*` (one `tc-lab-mp-*` patch per row)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-supersample.js`  
  ids: `tc-lab-ss-*` (supersample/two-stage/HiDPI downscale)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-bg.js`  
  ids: `tc-lab-bg-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-url.js`  
  ids: `tc-lab-url-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-forks.js`  
  ids: `tc-lab-forks-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-plus-combo-{a,b,c,d}.js`  
  ids: `tc-lab-cb[a-d]-*`

### tc-lab “custom-*” hand-designed suites

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-svg.js`  
  ids: `tc-lab-svg-*` (pre-raster SVG markup/root/FO patches)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-backing.js`  
  ids: `tc-lab-back-*` (backing store/DPR/dims via `labToCanvasOpts`)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-context.js`  
  ids: `tc-lab-ctx-*` (Canvas2D context knobs)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-composite.js`  
  ids: `tc-lab-x-*` (composite / multi-layer probes)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-decode.js`  
  ids: `tc-lab-pre-*` (decode/pipeline/timing suite)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-draw.js`  
  ids: `tc-lab-dr-*` (draw ordering/fit probes)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-custom-safari.js`  
  ids: `tc-lab-saf-*` (Safari-only conditionals)

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-fork-decode.js`  
  ids: `tc-lab-dec-*` (decode/timing raster probes on the lab fork)

### Wave 3

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave3-active.js`  
  ids: `tc-lab-w3-on-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave3-gen-{e,f,g,h,i}.js`  
  ids: `tc-lab-w3g-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave3-{clip,export,fit,scale,timing}.js`  
  ids: `tc-lab-w3-*`

### Wave 4

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave4-gen-{a,b,c,d,e,f}.js`  
  ids: `tc-lab-w4g*-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave4-imagedata.js`  
  ids: `tc-lab-w4-id-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave4-multipass.js`  
  ids: `tc-lab-w4-mp-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave4-{color,offscreen}.js`  
  ids: `tc-lab-w4-*`

- `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave4-misc.js`  
  ids: `tc-lab-w4-misc-*`

### Wave 5+

- Wave 5:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave5-gen-*.js` → `tc-lab-w5g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave5-{ctx,draw9,gapfill,interval,monkey,natural,sandbox,xl}.js` → `tc-lab-w5-*`

- Wave 6:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave6-gen-*.js` → `tc-lab-w6g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave6-*.js` → `tc-lab-w6-*`

- Wave 7:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave7-gen-*.js` → `tc-lab-w7g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave7-*.js` → `tc-lab-w7-*`

- Wave 8:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave8-gen-*.js` → `tc-lab-w8g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave8-*.js` → `tc-lab-w8-*`

- Wave 9:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave9-gen-*.js` → `tc-lab-w9g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave9-*.js` → `tc-lab-w9-*`

- Wave 10:
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave10-gen-*.js` → `tc-lab-w10g*-*`
  - `/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave10-*.js` → `tc-lab-w10-*`

## Per-family matrix examples

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-vb-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-draw-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-misc-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4g*-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-*'
```

# toCanvas recipe lab (tc-lab)

This repo keeps a large set of **harness-only** `toCanvas` probes as `tc-lab-*` recipes under `__localtests__/fo-recipes-shards/`.

- These recipes are for **lab exploration only** (no `src/` edits).
- Recipes are loaded by `fo-fix-lab` the same way as FO fix shards (`FO_FIX_RECIPES_SHARD` exports).
- All tc-lab rows must keep **real DOM text in `foreignObject`** (no text-bypass).

## Inventory / stats (JSON)

`inventory-tocanvas-recipes.mjs` inventories both:

- `tc-lab-*` recipes (lab-only)
- `tc-only-*` recipes (toCanvas-only probes)

```bash
node __localtests__/inventory-tocanvas-recipes.mjs --json
```

To sanity-check duplicate ids/tuples across all shards:

```bash
node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
```

## Wave 9: gap-fill from inventory stats

Wave 9 adds a **stats-driven gap-fill** shard:

- Output shard: `__localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave9-fill.js`
- 100 recipes: `tc-lab-w9-fill-001..100`
- Goal: increase coverage of underrepresented `rasterPatch` values (and a few structural variants) across the tc-lab space.

Regenerate (writes the shard file) and then run the dupe check:

```bash
node __localtests__/inventory-tocanvas-recipes.mjs --emit-wave9-fill
node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
```

Matrix run (FO raster only):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-fill-*'
```

