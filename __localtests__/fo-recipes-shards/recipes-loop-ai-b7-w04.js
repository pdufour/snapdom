/**
 * Loop AI batch-7 FO recipe shard (worker 4) — text pseudo-elements on FO (DOM text unchanged).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w04-001',
    label: 'Loop AI b7 w04 #001: ::first-line letter-spacing',
    idea: '::first-line letter-spacing + font-variant on FO * — first line pseudo paint vs DOM text',
    css:
      FO_BASELINE_CSS +
      'foreignObject *::first-line{letter-spacing:0.02em!important;font-variant-caps:normal!important;' +
      'color:inherit!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 04; ::first-line pseudo only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w04-002',
    label: 'Loop AI b7 w04 #002: ::first-letter float tint',
    idea: '::first-letter float + font-size on FO * — drop-cap pseudo vs inline text box',
    css:
      FO_BASELINE_CSS +
      'foreignObject *::first-letter{float:left!important;font-size:1.15em!important;' +
      'line-height:1!important;color:currentColor!important;margin-right:0.05em!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 04; ::first-letter pseudo only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w04-003',
    label: 'Loop AI b7 w04 #003: ::marker color sizing',
    idea: '::marker color + font-size on FO li — list marker pseudo vs list-item text',
    css:
      FO_BASELINE_CSS +
      'foreignObject li{list-style-position:outside!important;list-style-type:disc!important}' +
      'foreignObject li::marker{color:currentColor!important;font-size:0.9em!important;' +
      'unicode-bidi:isolate!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 04; ::marker pseudo only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w04-004',
    label: 'Loop AI b7 w04 #004: ::selection highlight tint',
    idea: '::selection background + color on FO * — selection pseudo paint (text stays DOM)',
    css:
      FO_BASELINE_CSS +
      'foreignObject *::selection{background-color:rgba(0,120,215,0.18)!important;' +
      'color:inherit!important;text-shadow:none!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 04; ::selection pseudo only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
