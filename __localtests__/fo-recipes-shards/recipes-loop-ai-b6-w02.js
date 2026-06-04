/**
 * Loop AI batch-6 FO recipe shard (worker 2) — text-fix: underline / skip-ink / kern / smoothing.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w02-001',
    label: 'Loop AI b6 w02 #001: text-underline-offset auto',
    idea: 'text-underline-offset:auto on FO * — UA underline position vs fixed px/em offsets',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 02; underline-offset auto only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w02-002',
    label: 'Loop AI b6 w02 #002: text-decoration-skip-ink auto',
    idea: 'text-decoration-skip-ink:auto on FO * — ink skip vs none/always underline probes',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 02; skip-ink auto only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w02-003',
    label: 'Loop AI b6 w02 #003: font-feature-settings kern 1',
    idea: 'font-feature-settings:"kern" 1 on FO * — explicit kern on vs b5 font-kerning:normal copy',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{font-feature-settings:"kern" 1!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 02; kern feature on only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w02-004',
    label: 'Loop AI b6 w02 #004: webkit-font-smoothing antialiased',
    idea: '-webkit-font-smoothing:antialiased on FO * — subpixel smoothing without font-smooth never/always',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{-webkit-font-smoothing:antialiased!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 02; antialiased only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
