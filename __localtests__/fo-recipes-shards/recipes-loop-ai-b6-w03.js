/**
 * Loop AI batch-6 FO recipe shard (worker 3) — text-fix: paired b6 typography stacks.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w03-001',
    label: 'Loop AI b6 w03 #001: both-edges + trim-both',
    idea: 'leading-trim:both-edges + text-box-trim:trim-both on FO * — dual half-leading trim stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 03; trim pair stack; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w03-002',
    label: 'Loop AI b6 w03 #002: math normal + tabular-nums',
    idea: 'math-style:normal + font-variant-numeric:tabular-nums on FO * — math + figure metrics',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{math-style:normal!important;font-variant-numeric:tabular-nums!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 03; math + tabular pair; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w03-003',
    label: 'Loop AI b6 w03 #003: underline auto + skip-ink auto',
    idea: 'text-underline-offset:auto + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;' +
      'text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 03; underline auto pair; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w03-004',
    label: 'Loop AI b6 w03 #004: kern feature + antialiased',
    idea: 'font-feature-settings:"kern" 1 + -webkit-font-smoothing:antialiased on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{font-feature-settings:"kern" 1!important;-webkit-font-smoothing:antialiased!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 03; kern + antialiased pair; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
