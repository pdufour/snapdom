# Raster-only SVG fork — wave 1 analysis

**Date:** 2026-06-02  
**Runner:** headed Chrome, `SNAPDOM_LOCAL_PORT=8788`  
**Command:** `node __localtests__/fo-raster-fork-wave1-matrix.mjs --json .sandbox-edit/raster-fork-wave1.json`  
**Raw JSON:** [raster-fork-wave1.json](./raster-fork-wave1.json)

## Mechanism

Wave-1 recipes (`tc-fork-w1-*`) keep **capture / three-way SVG leg** on the original serialized SVG. Only the **decode fork** (lab `fo-fix-toCanvas.js` → `applyRasterOnlySvgPatch`) mutates a clone of the SVG string immediately before `Image.decode()`.

**Expectation for a real raster fix:** `svgΔ` (live vs serialized FO ink) stays ~0 while `canvasΔ` (live vs bitmap) moves toward 0.  
**Expectation for a failed fork:** both legs unchanged, or canvas moves without closing the svg↔canvas gap.

Fixture: mini flex+text-leaf, landmark **Home**, dpr=1 (FO fix lab default matrix).

## Matrix results

| Recipe | Patch | svgΔ | canvasΔ | Δcanvas vs baseline | svg leg moved? |
|--------|-------|-----:|--------:|--------------------:|:--------------:|
| product-baseline | — | −0.008 | **2.797** | 0 | — |
| tc-fork-w1-inject-fo-lh-pin | `inject-fo-lh-pin` | −0.008 | 2.797 | 0 | no |
| tc-fork-w1-viewbox-int-floor | `viewbox-int-floor` | −0.008 | 2.797 | 0 | no |
| tc-fork-w1-root-height-48 | `root-height-48` | −0.008 | 2.797 | 0 | no |
| tc-fork-w1-fo-y-nudge | `fo-y-nudge` (+1px FO `y`) | −0.008 | **3.797** | **+1.000** | no |
| tc-fork-w1-combo-lh-center | lh pin + flex center | −0.008 | **−11.203** | **−14.000** | no |
| tc-fork-w1-inject-flex-center | `inject-flex-center` | −0.008 | **−12.203** | **−15.000** | no |

All rows: `parityStage: raster` (|canvasΔ − svgΔ| > 0.15 px).  
Summary: `svgUnchanged: true` (every fork |svgΔ| ≤ 0.15 px vs live). **No fork beat baseline** toward live (`improvedCount: 0`).

## Which patches move canvas without moving the SVG leg?

### A — Raster fork no-op (canvas frozen at plateau)

These patches run on the decode fork but **do not change FO→bitmap ink** vs `product-baseline`:

1. **`inject-fo-lh-pin`** — inject `foreignObject * { line-height: 21.6px !important }` on fork only.  
2. **`viewbox-int-floor`** — floor `viewBox` components on fork; width/height attrs unchanged.  
3. **`root-height-48`** — set SVG root `height="48"` on fork (typical capture ~50).

**Readout:** svgΔ ≈ −0.008 px and canvasΔ ≈ **2.797 px** unchanged. The ~2.8 px svg↔canvas gap is **not** explained by lh pin, viewBox flooring, or root height on the decode path alone.

### B — Raster fork moves canvas only (svgΔ flat)

These satisfy “svg leg ~0, canvasΔ changes” but are **not wins** (canvas moves away from live or flips sign):

4. **`fo-y-nudge`** — `foreignObject` `y` +1 px on fork.  
   - canvasΔ **+1.000 px** vs baseline (3.797 vs 2.797).  
   - Confirms decode-time FO placement affects bitmap ink; +1 px nudge is not corrective.

5. **`inject-flex-center`** — flex row + `align-items: center` on FO subtree (fork CSS).  
   - canvasΔ **−12.203 px** (−15 px vs baseline).  
   - Large raster-only layout restack; serialized SVG ink unchanged.

6. **`combo-lh-center`** — lh pin + flex center on fork.  
   - canvasΔ **−11.203 px** (−14 px vs baseline).  
   - Dominated by flex-center effect (~1 px less negative than flex-only row).

**Readout:** decode-only CSS/layout forks **can** shift bitmap ink while three-way SVG stays on original capture. None of these moves **toward** live ink at Home; flex-center/combo are catastrophic regressions on canvas only.

## Conclusions

1. **Mechanism validated:** raster-only patching separates stages — all six forks held svgΔ at **−0.008 px** while three forks changed canvasΔ by 0, +1, −14, or −15 px.  
2. **No promotable raster win in wave 1:** baseline canvasΔ **2.797 px** is a hard floor for lh/viewBox/height forks; flex/y nudge moves canvas without closing svg↔canvas (**2.805 px** gap at baseline).  
3. **Next leverage:** patches that change canvas must also move **serialized FO ink** (svg leg) to collapse svg↔canvas — or target Chromium FO bitmap paint inside the fork without flex display overrides that only affect decode layout.

## Patch implementation map

| Short id | Fork mutation (decode clone only) |
|----------|-----------------------------------|
| `inject-fo-lh-pin` | `<style>` inject FO lh pin |
| `inject-flex-center` | FO flex row + cross-axis center |
| `viewbox-int-floor` | `viewBox` int floor |
| `fo-y-nudge` | all `foreignObject` `y` +1 |
| `root-height-48` | svg `height="48"` |
| `combo-lh-center` | lh pin + flex center |

Source: `src/exporters/rasterOnlySvgPatch.js`, recipes `fo-recipes-shards/recipes-tocanvas-raster-fork-wave1.js`.
