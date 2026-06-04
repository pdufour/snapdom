/**
 * Wave 10 — measured drawImage dest from live GBCR at raster.
 * 30 drawFit modes × 2 dest modes = 60 recipes (tc-lab-w10m-001..060).
 *
 * Live meta plumbing: parseCaptureMeta() adds meta.gbcrFracX/Y, and lab toCanvas
 * uses those fractions as a drawImage dest offset when `labToCanvasOpts.measuredDest`.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10m-*'
 */
import { LAB_DRAW_FIT_MODES } from '../fo-fix-toCanvas-draw-fit.js'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = []

let n = 0
for (const drawFit of LAB_DRAW_FIT_MODES) {
  // Baseline: drawFit only.
  n++
  FO_FIX_RECIPES_SHARD.push({
    id: `tc-lab-w10m-${String(n).padStart(3, '0')}`,
    label: `W10 measured: ${drawFit} (baseline)`,
    idea: `lab-toCanvas drawFit=${drawFit} — no live GBCR drawImage dest phase`,
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    labToCanvasOpts: { drawFit },
    active: true,
  })

  // Measured: add GBCR fractional phase as drawImage dest offset.
  n++
  FO_FIX_RECIPES_SHARD.push({
    id: `tc-lab-w10m-${String(n).padStart(3, '0')}`,
    label: `W10 measured: ${drawFit} (gbcr-frac)`,
    idea: `lab-toCanvas drawFit=${drawFit} + measuredDest=gbcr-frac from live GBCR at raster`,
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    labToCanvasOpts: { drawFit, measuredDest: 'gbcr-frac' },
    active: true,
  })
}

