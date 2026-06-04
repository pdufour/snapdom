/**
 * Loop AI crazy FO recipe shard (worker 3) — typography / paint theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w03-001',
    label: 'Loop AI w03 #001: font-kerning + synthesis none',
    idea: 'Chromium-style font-kerning:normal + font-synthesis:none on FO root',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 03 — typography theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w03-002',
    label: 'Loop AI w03 #002: line-height 1 strut pin',
    idea: 'line-height:1 + vertical-align:baseline on FO * — strut half-leading probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:1!important;vertical-align:baseline!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 03 — typography theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w03-003',
    label: 'Loop AI w03 #003: text-rendering geometricPrecision',
    idea: 'text-rendering:geometricPrecision + optimizeLegibility on FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject{text-rendering:geometricPrecision!important}foreignObject *{text-rendering:optimizeLegibility!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 03 — typography theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
