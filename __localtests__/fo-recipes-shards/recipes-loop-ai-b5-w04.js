/**
 * Loop AI batch-5 FO recipe shard (worker 4) — text-fix: letter-spacing / size-adjust / ligatures / text-wrap balance.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w04-001',
    label: 'Loop AI b5 w04 #001: letter-spacing normal reset',
    idea: 'letter-spacing:normal!important on FO * — reset inherited em tracking vs live glyph advances',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{letter-spacing:normal!important;word-spacing:normal!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 04; letter-spacing reset; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w04-002',
    label: 'Loop AI b5 w04 #002: text-size-adjust 100%',
    idea: '-webkit/text-size-adjust:100% on FO root + wrapper — mobile auto-shrink vs live metrics',
    css:
      FO_BASELINE_CSS +
      'foreignObject{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 04; text-size-adjust only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w04-003',
    label: 'Loop AI b5 w04 #003: font-variant-ligatures normal',
    idea: 'font-variant-ligatures:normal on FO root + * — restore standard ligatures vs none/pin drift',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-variant-ligatures:normal!important}' +
      'foreignObject *{font-variant-ligatures:normal!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 04; font-variant-ligatures normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w04-004',
    label: 'Loop AI b5 w04 #004: text-wrap balance',
    idea: 'text-wrap:balance on FO * — balanced line lengths before FO raster (vs pretty/stable)',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 04; text-wrap balance; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
