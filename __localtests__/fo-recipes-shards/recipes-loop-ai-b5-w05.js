/**
 * Loop AI batch-5 FO recipe shard (worker 5) — text-fix: text-wrap pretty / hyphens off / line-height unset / flex stretch.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w05-001',
    label: 'Loop AI b5 w05 #001: text-wrap pretty',
    idea: 'text-wrap:pretty on FO * — Chromium pretty wrap vs balance (b5-w04-004)',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-wrap:pretty!important;text-wrap-style:auto!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 05; text-wrap pretty; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w05-002',
    label: 'Loop AI b5 w05 #002: hyphens off nav-like nowrap',
    idea: 'hyphens:none + nowrap + normal wrap breaks on FO * — single-line nav-label typography',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;' +
      'white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 05; hyphens off nav-like; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w05-003',
    label: 'Loop AI b5 w05 #003: line-height unset half-leading',
    idea: 'line-height:unset on FO * — cascade reset vs pinned lh for half-leading strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:unset!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 05; line-height unset half-leading; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w05-004',
    label: 'Loop AI b5 w05 #004: align-items stretch flex rows',
    idea: 'display:flex row + align-items:stretch on FO * — cross-axis stretch on text flex rows',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{display:flex!important;flex-direction:row!important;' +
      'align-items:stretch!important;align-self:stretch!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 05; align-items stretch flex rows; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
