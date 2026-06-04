/**
 * Loop batch 001 shard (worker 3) — paint / compositing / layers.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w03-001',
    label: 'Loop b001 w03 #001: mix-blend-mode multiply',
    idea: 'mix-blend-mode:multiply on FO * — compositing stack probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mix-blend-mode:multiply!important;isolation:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 03; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w03-002',
    label: 'Loop b001 w03 #002: isolation isolate FO root',
    idea: 'isolation:isolate on foreignObject — stacking context boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;z-index:0!important;position:relative!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 03; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w03-003',
    label: 'Loop b001 w03 #003: backdrop-filter zero blur',
    idea: 'backdrop-filter:blur(0) — layer promotion without visible blur',
    css:
      FO_BASELINE_CSS +
      'foreignObject{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 03; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w03-004',
    label: 'Loop b001 w03 #004: filter contrast micro',
    idea: 'filter:contrast(1.001) on FO * — subpixel paint nudge via filter',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{filter:contrast(1.001)!important;will-change:filter!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop batch 001 worker 03; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w03-005',
    label: 'Loop b001 w03 #005: opacity 0.999 subtree',
    idea: 'opacity:0.999 on FO * — alpha compositing vs FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{opacity:1!important}foreignObject *{opacity:0.999!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 03; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
