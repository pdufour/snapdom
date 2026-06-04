/**
 * AI crazy FO recipe shard (worker 1) — layout / flow / sizing theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w01-001',
    label: 'Crazy AI w01 #001: inline-grid FO shell',
    idea: 'foreignObject as inline-grid — intrinsic sizing vs block FO box',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:inline-grid!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w01-002',
    label: 'Crazy AI w01 #002: grid fr rows on FO *',
    idea: 'grid-template-rows:1fr auto on descendants — row stretch probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important}foreignObject *{display:grid!important;grid-template-rows:1fr auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w01-003',
    label: 'Crazy AI w01 #003: flex column-reverse stack',
    idea: 'flex-direction:column-reverse on FO subtree — visual order flip',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:column-reverse!important}foreignObject *{min-width:0!important;flex-shrink:1!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w01-004',
    label: 'Crazy AI w01 #004: overflow clip vs FO visible',
    idea: 'overflow:clip on FO * while FO root stays visible — clip paint clash',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{overflow:clip!important;overflow-clip-margin:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w01-005',
    label: 'Crazy AI w01 #005: block-size max-content',
    idea: 'block-size:max-content + inline-size:auto on FO * — intrinsic block probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{block-size:max-content!important;inline-size:auto!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
