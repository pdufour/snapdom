/**
 * Loop AI batch-3 FO recipe shard (worker 3) — color media / container / scroll-driven off.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w03-001',
    label: 'Loop AI b3 w03 #001: print-color-adjust exact',
    idea: 'print-color-adjust:exact on FO subtree — ink fidelity vs screen color compression',
    css:
      FO_BASELINE_CSS +
      'foreignObject{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}' +
      'foreignObject *{print-color-adjust:exact!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w03-002',
    label: 'Loop AI b3 w03 #002: forced-color-adjust none',
    idea: 'forced-color-adjust:none + color-scheme:light dark on FO — opt out of forced-colors recolor',
    css:
      FO_BASELINE_CSS +
      'foreignObject{forced-color-adjust:none!important;color-scheme:light dark!important}' +
      'foreignObject *{forced-color-adjust:none!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w03-003',
    label: 'Loop AI b3 w03 #003: light-dark() inherited ink',
    idea: 'color:light-dark(currentColor, CanvasText) on FO * — light-dark() vs inherited currentColor',
    css:
      FO_BASELINE_CSS +
      'foreignObject{color-scheme:light dark!important}' +
      'foreignObject *{color:light-dark(currentColor, CanvasText)!important;' +
      'background-color:light-dark(transparent, Canvas)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w03-004',
    label: 'Loop AI b3 w03 #004: container + scroll timelines off',
    idea: 'container-type:inline-size + scroll/view/animation-timeline:none — CQ without scroll-driven motion',
    css:
      FO_BASELINE_CSS +
      'foreignObject{container-type:inline-size!important;container-name:fo-loop-b3-w03!important;' +
      'scroll-timeline:none!important;view-timeline:none!important;animation-timeline:none!important}' +
      'foreignObject *{animation-timeline:none!important;scroll-timeline-name:none!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
