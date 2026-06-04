/**
 * Loop AI batch-2 FO recipe shard (worker 1) — paint containment / subpixel layers.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w01-001',
    label: 'Loop AI b2 w01 #001: contain paint FO root',
    idea: 'contain:paint + contain-intrinsic-size on foreignObject — paint boundary vs text ink bleed',
    css:
      FO_BASELINE_CSS +
      'foreignObject{contain:paint!important;contain-intrinsic-size:auto 1px auto 1px!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w01-002',
    label: 'Loop AI b2 w01 #002: preserve-3d perspective shell',
    idea: 'transform-style:preserve-3d + perspective on FO — 3D flattening vs FO text raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform-style:preserve-3d!important;perspective:1000px!important;overflow:visible!important}foreignObject *{transform-style:flat!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w01-003',
    label: 'Loop AI b2 w01 #003: opacity filter micro-layer',
    idea: 'filter:opacity(0.9999) on FO root — sub-unity opacity compositor without contrast skew',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:opacity(0.9999)!important;will-change:filter!important}foreignObject *{box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b2 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w01-004',
    label: 'Loop AI b2 w01 #004: full-opacity linear mask',
    idea: 'mask-image:linear-gradient(black,black) on FO — mask layer promotion with no visible clip',
    css:
      FO_BASELINE_CSS +
      'foreignObject{mask-image:linear-gradient(black,black)!important;-webkit-mask-image:linear-gradient(black,black)!important;mask-size:100% 100%!important}foreignObject *{min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
