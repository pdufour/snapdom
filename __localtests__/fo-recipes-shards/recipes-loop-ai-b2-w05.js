/**
 * Loop AI batch-2 FO recipe shard (worker 5) — decode timing / RAF / font readiness.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w05-001',
    label: 'Loop AI b2 w05 #001: decode-microtask-twice',
    idea: 'Chromium FO copy + decode-microtask-twice before drawImage',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-microtask-twice',
    notes: 'Loop AI batch-2 worker 05; decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w05-002',
    label: 'Loop AI b2 w05 #002: fonts-ready raster',
    idea: 'document.fonts.ready wait before FO SVG image decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{-webkit-font-smoothing:antialiased!important;font-smooth:always!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready',
    notes: 'Loop AI batch-2 worker 05; decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w05-003',
    label: 'Loop AI b2 w05 #003: raf-before-draw int-floor',
    idea: 'raf-before-draw flush + int-floor viewBox snap on FO baseline',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject{overflow:visible!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'raf-before-draw',
    svgRootRound: 'int-floor',
    notes: 'Loop AI batch-2 worker 05; decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w05-004',
    label: 'Loop AI b2 w05 #004: double-decode round-dims',
    idea: 'double-decode raster wait + round-dims SVG root rounding',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-decode',
    svgRootRound: 'round-dims',
    notes: 'Loop AI batch-2 worker 05; decode theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
