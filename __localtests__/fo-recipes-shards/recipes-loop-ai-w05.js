/**
 * Loop AI FO recipe shard (worker 5) — decode timing / RAF / font readiness.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w05-001',
    label: 'Loop AI w05 #001: triple-decode raster',
    idea: 'Chromium FO copy + triple-decode wait before drawImage',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'triple-decode',
    notes: 'Loop AI shard worker 05; decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w05-002',
    label: 'Loop AI w05 #002: double-raf decode-interval-raf',
    idea: 'double-raf flush then decode-interval-raf on int-floor viewBox',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{-webkit-font-smoothing:antialiased!important;image-rendering:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval-raf',
    svgRootRound: 'int-floor',
    notes: 'Loop AI shard worker 05; decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w05-003',
    label: 'Loop AI w05 #003: pre-decode-dom wait',
    idea: 'pre-decode-dom raster — decode SVG in DOM before Image assign',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'pre-decode-dom',
    notes: 'Loop AI shard worker 05; decode theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
