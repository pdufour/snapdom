# Proposed fixes — wave 2 (behind-flag)

Planning only. Consolidated status (all waves): [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md). **Verdict: NOT FIXED** — wave-2 flags tie **2.797 px** plateau.

Six **orthogonal** FO→canvas hypotheses (lab recipes `tc-flags-w2-*`). Wave-1 already covers baseline, pin line-height, leading-trim, decode+fonts, backing ceil + device grid, draw dest = backing÷dpr — do not duplicate.

**No SVG text bypass.** Proposed flags and lab recipes must keep real DOM text inside `foreignObject` through FO raster — no `replace-fo-with-svg-text`, `fillText-replace`, `text-as-path`, `svg-only-text-layer`, or `rank-svg-text-*`. Use `--matrix --no-text-bypass` (or default full matrix) for promotion decisions; `--include-text-bypass` is diagnostic-only.

**Out of scope:** `vDriftFix`, fractional `drawImage` dy, GBCR-derived nudges, or any constant tuned to a failing ink row. Promotion only after headed matrix + `npm run test:blackbox`.

| # | Proposed flag (src) | Mechanism | src touch | Lab command |
|---|---------------------|-----------|-----------|-------------|
| 1 | `experimentalFoChromiumText` | Global FO CSS: `font-kerning:normal`, `font-synthesis:none`, `box-sizing:border-box`, `min-width:0` on `foreignObject *` (modern-screenshot Chromium block; **no** `align-self:baseline` from w1) | `src/core/capture.js` (`foNormalize` bundle) | `npm run debug:tc-flags-w2-matrix` → `tc-flags-w2-chromium-text-block` |
| 2 | `experimentalFoFlexRowCenter` | FO flex containers `align-items:center` on row flex + descendants — structural counter to cross-axis stretch in nav-like rows | `src/core/capture.js` | same matrix → `tc-flags-w2-flex-row-center` |
| 3 | `experimentalCaptureIntViewBox` | Floor SVG `viewBox` numeric components before raster (integer snap on viewBox only; separate from w1 device-grid on root w/h) | `src/core/capture.js` and/or `src/exporters/toCanvas.js` pre-decode SVG patch | same matrix → `tc-flags-w2-int-viewbox-floor` |
| 4 | `experimentalRasterCtxNoScale` | Skip `ctx.scale(dpr)`; draw in backing-store device pixels with dest from physical canvas size | `src/exporters/toCanvas.js` | same matrix → `tc-flags-w2-ctx-no-scale` |
| 5 | `experimentalRasterPreDecodeRaf` | Offscreen DOM attach + double `requestAnimationFrame` before `img.decode()` (generalize Safari warmup path; not interval/fonts bundle) | `src/exporters/toCanvas.js` | same matrix → `tc-flags-w2-double-raf-predecode` |
| 6 | `experimentalFoTextGeometric` | FO CSS `text-rendering:geometricPrecision` + `-webkit-font-smoothing:antialiased` on `foreignObject *` | `src/core/capture.js` | same matrix → `tc-flags-w2-text-geometric` |

## Lab workflow

```bash
npm run debug:tc-flags-w2-matrix          # all six, FO-only, headed
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-flags-w2-chromium-text-block'
npm run test:blackbox                   # after any src promotion
```

Recipes: `__localtests__/fo-recipes-shards/recipes-tocanvas-flags-wave2.js`. Hooks: `tocanvas-lab-hooks-registry.js` (`LAB_W2_FLAGS`). Fork: `__localtests__/fo-fix-toCanvas.js` (`rasterPatch: 'lab-toCanvas'`).

## Promotion bar

- General: same flex + text-leaf pattern on a page without checkout selectors.
- FO text stays inside `foreignObject` (no text bypass).
- Matrix leader must improve **multiple** landmarks, not trade Home vs Products.
- If all six stay flat vs baseline, treat as serialization/FO-decode gap — do not add gate-tuned offsets.

## Relation to existing src flags

`experimentalFoTextLayout` (capture) bundles kerning + min-width + baseline — overlaps #1 partially; keep w2 #1 as Chromium-only slice for A/B. `experimentalRasterDecodeSettle` / `experimentalRasterBackingCeil` are w1-adjacent; w2 #4–#5 are distinct raster timing/scale paths.
