/**
 * Loop AI batch-2 FO recipe shard (worker 4) — writing-mode / bidi / orientation.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w04-001',
    label: 'Loop AI b2 w04 #001: vertical-lr writing-mode',
    idea: 'writing-mode:vertical-lr on FO * — alternate vertical flow vs FO box',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 worker 04; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w04-002',
    label: 'Loop AI b2 w04 #002: unicode-bidi embed',
    idea: 'unicode-bidi:embed + direction:ltr on FO subtree — isolate bidi context',
    css:
      FO_BASELINE_CSS +
      'foreignObject{direction:ltr!important}foreignObject *{unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 worker 04; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w04-003',
    label: 'Loop AI b2 w04 #003: upright text-orientation',
    idea: 'text-orientation:upright + vertical-rl on FO * — upright glyph stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject{writing-mode:vertical-rl!important}foreignObject *{text-orientation:upright!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 worker 04; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w04-004',
    label: 'Loop AI b2 w04 #004: sideways-lr + decode-interval',
    idea: 'text-orientation:sideways-lr + logical margin reset + decode-interval raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-orientation:sideways-lr!important;margin-block:0!important;margin-inline:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI batch-2 worker 04; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
