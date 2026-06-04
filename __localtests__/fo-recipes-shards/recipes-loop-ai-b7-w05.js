/**
 * Loop AI batch-7 FO recipe shard (worker 5) — content-visibility + contain-intrinsic-size on FO *.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w05-001',
    label: 'Loop AI b7 w05 #001: cv auto + intrinsic auto 300px',
    idea: 'content-visibility:auto + contain-intrinsic-size:auto 300px on FO * — skip-paint unlock sizing',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{content-visibility:auto!important;' +
      'contain-intrinsic-size:auto 300px!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 05; content-visibility auto on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w05-002',
    label: 'Loop AI b7 w05 #002: cv auto + intrinsic 1px strut',
    idea: 'content-visibility:auto + contain-intrinsic-size:auto 1px auto 1px on FO * — 1px placeholder strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{content-visibility:auto!important;' +
      'contain-intrinsic-size:auto 1px auto 1px!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 05; content-visibility auto on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w05-003',
    label: 'Loop AI b7 w05 #003: root visible + * cv auto',
    idea: 'FO root content-visibility:visible + contain-intrinsic-size:none; FO * auto — root unlock vs * skip',
    css:
      FO_BASELINE_CSS +
      'foreignObject{content-visibility:visible!important;' +
      'contain-intrinsic-size:none!important;overflow:visible!important}' +
      'foreignObject *{content-visibility:auto!important;' +
      'contain-intrinsic-size:auto 120px auto 24px!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 05; content-visibility auto on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w05-004',
    label: 'Loop AI b7 w05 #004: hidden root visible * intrinsic',
    idea: 'FO root hidden + FO * visible/auto + contain-intrinsic-size — hidden→visible unlock on subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject{content-visibility:hidden!important;' +
      'contain-intrinsic-size:0px 0px!important;overflow:visible!important}' +
      'foreignObject *{content-visibility:visible!important;' +
      'contain-intrinsic-size:auto 200px auto 40px!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 05; content-visibility auto on *; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
