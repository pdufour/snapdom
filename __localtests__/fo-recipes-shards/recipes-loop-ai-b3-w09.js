/**
 * Loop AI batch-3 crazy FO recipe shard (worker 9) — alternate extremes (orthogonal to w07/w08).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w09-001',
    label: 'Loop AI b3 w09 #001: contents then inline-block rebox',
    idea: 'display:contents on FO only — direct >div reboxed inline-block, deeper nodes revert to block',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:contents!important}foreignObject>div{display:inline-block!important;vertical-align:top!important;box-sizing:border-box!important;min-width:0!important}foreignObject *:not(div){display:block!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 09 — display:contents selective rebox; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w09-002',
    label: 'Loop AI b3 w09 #002: unset FO root flex rebox',
    idea: 'all:unset only on foreignObject root then flex row wrap rebox — children keep inherited display',
    css:
      FO_BASELINE_CSS +
      'foreignObject{all:unset!important;display:flex!important;flex-flow:row wrap!important;align-items:flex-start!important;justify-content:flex-start!important;overflow:visible!important;box-sizing:border-box!important}foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 09 — all:unset root-only rebox; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w09-003',
    label: 'Loop AI b3 w09 #003: scale 0.999 per-child compositor',
    idea: 'transform:scale(0.999) on every FO * with transform-origin:center — leaf compositor grid vs root scale',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform:none!important;overflow:visible!important}foreignObject *{transform:scale(0.999)!important;transform-origin:50% 50%!important;will-change:transform!important;backface-visibility:hidden!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 09 — per-node scale(0.999); FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w09-004',
    label: 'Loop AI b3 w09 #004: plus-lighter purge to normal',
    idea: 'force mix-blend-mode:plus-lighter on FO then normal!important on all * — additive blend reset cascade',
    css:
      FO_BASELINE_CSS +
      'foreignObject{mix-blend-mode:plus-lighter!important;isolation:auto!important;overflow:visible!important}foreignObject *{mix-blend-mode:normal!important;background-blend-mode:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 09 — plus-lighter → normal reset; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
