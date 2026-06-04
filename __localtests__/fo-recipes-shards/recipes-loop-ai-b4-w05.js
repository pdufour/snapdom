/**
 * Loop AI batch-4 FO recipe shard (worker 5) — break-inside / box-decoration-break / orphans-widows / hyphens.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w05-001',
    label: 'Loop AI b4 w05 #001: break-inside avoid-page',
    idea: 'break-inside:avoid-page + page-break-inside:avoid on FO * — fragmentation policy before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{break-inside:avoid-page!important;page-break-inside:avoid!important;' +
      '-webkit-column-break-inside:avoid!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 05; break-inside only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w05-002',
    label: 'Loop AI b4 w05 #002: box-decoration-break clone',
    idea: 'box-decoration-break:clone on inline FO leaves — background/border repeat per line fragment',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important;' +
      'display:inline!important;background-clip:padding-box!important;padding:0 0.15em!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 05; box-decoration-break only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w05-003',
    label: 'Loop AI b4 w05 #003: orphans widows nine',
    idea: 'orphans:9 + widows:9 on FO * — pagination strut minimum lines (integer, not gate px)',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{orphans:9!important;widows:9!important;box-sizing:border-box!important;' +
      'min-width:0!important;display:block!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 05; orphans/widows only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w05-004',
    label: 'Loop AI b4 w05 #004: hyphens auto limits',
    idea: 'hyphens:auto + hyphenate-limit-chars on FO * — soft hyphenation vs FO line box wrap',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;' +
      'hyphenate-limit-chars:6 3 2!important;overflow-wrap:break-word!important;' +
      'word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 05; hyphens only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
