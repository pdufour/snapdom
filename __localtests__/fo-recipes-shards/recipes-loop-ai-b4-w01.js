/**
 * Loop AI batch-4 FO recipe shard (worker 1) — UI chrome / scroll / caret / accent.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w01-001',
    label: 'Loop AI b4 w01 #001: accent-color color-scheme',
    idea: 'accent-color + color-scheme on FO form controls — themed control chrome vs text ink',
    css:
      FO_BASELINE_CSS +
      'foreignObject{accent-color:CanvasText!important;color-scheme:light dark!important}' +
      'foreignObject input,foreignObject button,foreignObject select,foreignObject textarea{' +
      'accent-color:Highlight!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 01; accent-color only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w01-002',
    label: 'Loop AI b4 w01 #002: caret-color transparent',
    idea: 'caret-color:transparent on FO editable nodes — caret paint vs FO text raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject input,foreignObject textarea,foreignObject [contenteditable]{' +
      'caret-color:transparent!important;caret-shape:block!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 01; caret-color only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w01-003',
    label: 'Loop AI b4 w01 #003: scrollbar-gutter stable',
    idea: 'scrollbar-gutter:stable both-edges on FO — reserved gutter vs intrinsic FO box',
    css:
      FO_BASELINE_CSS +
      'foreignObject{scrollbar-gutter:stable both-edges!important;overflow:auto!important;' +
      'box-sizing:border-box!important}foreignObject *{min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 01; scrollbar-gutter only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w01-004',
    label: 'Loop AI b4 w01 #004: overscroll-behavior axis',
    idea: 'overscroll-behavior:contain on FO + overscroll-behavior-block:none on descendants',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overscroll-behavior:contain!important;overflow:auto!important}' +
      'foreignObject *{overscroll-behavior-block:none!important;overscroll-behavior-inline:auto!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 01; overscroll-behavior only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
