/**
 * Loop AI batch-6 FO recipe shard (worker 4) — text-fix: flex nav stretch / justify / place-items A/B.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w04-001',
    label: 'Loop AI b6 w04 #001: align-self stretch nav anchors',
    idea: 'align-self:stretch on FO anchors — flex cross-axis stretch on nav text leaves',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;overflow:visible!important}' +
      'foreignObject a{align-self:stretch!important;display:inline-block!important;' +
      'min-height:0!important;box-sizing:border-box!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 04; align-self stretch nav anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w04-002',
    label: 'Loop AI b6 w04 #002: justify-content center flex text row',
    idea: 'display:flex row + justify-content:center on FO — main-axis center on text flex rows',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'justify-content:center!important;align-items:center!important;overflow:visible!important}' +
      'foreignObject *{flex:0 1 auto!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 04; justify-content center flex row; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w04-003',
    label: 'Loop AI b6 w04 #003: place-items center grid FO',
    idea: 'display:grid + place-items:center on FO — two-axis center packing (A)',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;place-items:center!important;overflow:visible!important;' +
      'min-height:0!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 04; place-items center (A); FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w04-004',
    label: 'Loop AI b6 w04 #004: place-items start grid FO',
    idea: 'display:grid + place-items:start on FO — start-aligned grid packing (B)',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;place-items:start!important;overflow:visible!important;' +
      'min-height:0!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 04; place-items start (B); FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
