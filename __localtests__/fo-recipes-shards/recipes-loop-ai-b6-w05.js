/**
 * Loop AI batch-6 FO recipe shard (worker 5) — text-fix: line-height / baseline flex / gap-0 nav.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w05-001',
    label: 'Loop AI b6 w05 #001: line-height 1.2 unitless',
    idea: 'line-height:1.2 unitless on FO * — fixed ratio strut vs serialized computed lh',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:1.2!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 05; line-height 1.2 unitless; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w05-002',
    label: 'Loop AI b6 w05 #002: line-height calc(1em + 0px)',
    idea: 'line-height:calc(1em + 0px) on FO * — em-based lh expression vs unitless ratio',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:calc(1em + 0px)!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 05; line-height calc(1em + 0px); FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w05-003',
    label: 'Loop AI b6 w05 #003: flex align-items baseline inline text',
    idea: 'display:flex row + align-items:baseline on FO — inline text baseline vs flex cross-axis',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      'foreignObject *{display:inline!important;vertical-align:baseline!important;' +
      'min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 05; flex baseline inline text; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w05-004',
    label: 'Loop AI b6 w05 #004: gap 0 text nav flex row',
    idea: 'display:flex row + gap/row-gap/column-gap:0 on FO — collapsed inter-item rhythm on text nav',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;' +
      'gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 05; gap 0 text nav flex; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
