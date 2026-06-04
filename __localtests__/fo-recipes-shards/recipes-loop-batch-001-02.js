/**
 * Loop batch 001 shard (worker 2) — box model / logical sizing.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w02-001',
    label: 'Loop b001 w02 #001: box-decoration-break clone',
    idea: 'box-decoration-break:clone on inline FO text leaves',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important;display:inline!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 02; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w02-002',
    label: 'Loop b001 w02 #002: inset box-shadow paint',
    idea: 'inset box-shadow on FO * — extra paint layer without layout shift',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-shadow:inset 0 0 0 0 transparent!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 02; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w02-003',
    label: 'Loop b001 w02 #003: outline-offset negative',
    idea: 'outline:1px solid transparent + negative outline-offset on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{outline:1px solid transparent!important;outline-offset:-1px!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 02; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w02-004',
    label: 'Loop b001 w02 #004: fit-content width chain',
    idea: 'width:fit-content + max-width:none on FO descendants',
    css:
      FO_BASELINE_CSS +
      'foreignObject{width:fit-content!important;max-width:none!important}foreignObject *{width:fit-content!important;max-width:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 02; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w02-005',
    label: 'Loop b001 w02 #005: logical inline/block size',
    idea: 'inline-size/block-size:auto on FO * — logical property probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{inline-size:auto!important;block-size:auto!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 02; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
