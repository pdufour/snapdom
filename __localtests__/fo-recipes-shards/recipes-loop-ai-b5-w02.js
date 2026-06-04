/**
 * Loop AI batch-5 FO recipe shard (worker 2) — kerning / synthesis / rendering / flex valign.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w02-001',
    label: 'Loop AI b5 w02 #001: font-kerning synthesis none',
    idea: 'font-kerning:normal + font-synthesis:none on FO root — Chromium copy vs faux bold',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 02; kerning/synthesis only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w02-002',
    label: 'Loop AI b5 w02 #002: text-rendering geometricPrecision',
    idea: 'text-rendering:geometricPrecision on FO subtree — glyph grid vs optimizeLegibility',
    css:
      FO_BASELINE_CSS +
      'foreignObject{text-rendering:geometricPrecision!important}' +
      'foreignObject *{text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 02; geometricPrecision only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w02-003',
    label: 'Loop AI b5 w02 #003: flex leaf valign text-top',
    idea: 'display:flex + vertical-align:text-top on FO * — flex cross-axis vs inline text-top strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;' +
      'overflow:visible!important}' +
      'foreignObject *{vertical-align:text-top!important;min-width:0!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 02; flex text-top only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w02-004',
    label: 'Loop AI b5 w02 #004: flex leaf valign text-bottom',
    idea: 'display:flex + vertical-align:text-bottom on FO * — flex cross-axis vs inline text-bottom strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;' +
      'overflow:visible!important}' +
      'foreignObject *{vertical-align:text-bottom!important;min-width:0!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 02; flex text-bottom only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
