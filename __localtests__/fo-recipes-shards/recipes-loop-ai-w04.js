/**
 * Loop AI FO recipe shard (worker 4) — writing-mode / bidi / orientation.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w04-001',
    label: 'Loop AI w04 #001: vertical-rl writing-mode',
    idea: 'writing-mode:vertical-rl on FO * — vertical glyph flow vs FO box',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{writing-mode:vertical-rl!important;text-orientation:mixed!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 04; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w04-002',
    label: 'Loop AI w04 #002: bidi-override rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject{direction:ltr!important}foreignObject *{unicode-bidi:bidi-override!important;direction:rtl!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 04; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w04-003',
    label: 'Loop AI w04 #003: sideways-rl text-orientation',
    idea: 'text-orientation:sideways-rl + inline-size:max-content on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-orientation:sideways-rl!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI shard worker 04; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
