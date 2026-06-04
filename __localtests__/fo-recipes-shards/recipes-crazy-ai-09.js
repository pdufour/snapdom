/**
 * AI-authored crazy FO recipe shard (worker 09).
 * ONLY edit this file. Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w09-001',
    label: 'Crazy AI w09 #001: inline-size max-content',
    idea: 'inline-size:max-content on FO * — logical intrinsic width probe',
    css: FO_BASELINE_CSS + 'foreignObject *{inline-size:max-content!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w09-002',
    label: 'Crazy AI w09 #002: block-size min-content',
    idea: 'block-size:min-content on FO * — logical min block axis probe',
    css: FO_BASELINE_CSS + 'foreignObject *{block-size:min-content!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w09-003',
    label: 'Crazy AI w09 #003: inset auto all sides',
    idea: 'inset:auto on positioned FO * — containing block reset probe',
    css: FO_BASELINE_CSS + 'foreignObject *{position:relative!important;inset:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w09-004',
    label: 'Crazy AI w09 #004: margin-inline auto',
    idea: 'margin-inline:auto on FO>div — logical centering vs SVG box',
    css: FO_BASELINE_CSS + 'foreignObject>div{margin-inline:auto!important;display:block!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w09-005',
    label: 'Crazy AI w09 #005: supersample downscale',
    idea: 'supersample-downscale raster + integer-viewbox root round',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'supersample-downscale',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 09; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
