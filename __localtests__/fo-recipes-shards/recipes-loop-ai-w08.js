/**
 * Loop AI crazy FO recipe shard (worker 8) — overflow / clip theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w08-001',
    label: 'Loop AI w08 #001: overflow clip FO',
    idea: 'overflow:clip on FO — scrollport clip vs visible baseline overflow',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:clip!important;overflow-clip-margin:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w08-002',
    label: 'Loop AI w08 #002: overflow-x hidden subtree',
    idea: 'overflow-x:hidden on FO * — horizontal ink clip without vertical scroll',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{overflow-x:hidden!important;overflow-y:visible!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w08-003',
    label: 'Loop AI w08 #003: clip-path inset zero',
    idea: 'clip-path:inset(0) on FO — geometry clip independent of overflow',
    css:
      FO_BASELINE_CSS +
      'foreignObject{clip-path:inset(0)!important;clip-rule:evenodd!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
