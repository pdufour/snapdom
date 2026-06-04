/**
 * Loop AI batch-7 FO recipe shard (worker 10) — outside-box: inverted-colors / reduced-motion /
 * forced-colors / print + field-sizing + timeline-scope.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w10-001',
    label: 'Loop AI b7 w10 #001: inverted-colors invert(0)',
    idea: 'filter:invert(0) identity on FO * + @media (inverted-colors:inverted) color-scheme probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{filter:invert(0)!important;box-sizing:border-box!important;min-width:0!important}' +
      '@media (inverted-colors:inverted){foreignObject{color-scheme:light dark!important}' +
      'foreignObject *{color:CanvasText!important;background-color:Canvas!important}}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 10; inverted-colors + filter invert(0); FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w10-002',
    label: 'Loop AI b7 w10 #002: prefers-reduced-motion reduce',
    idea: '@media (prefers-reduced-motion:reduce) — disable animation/transition/scroll on FO subtree',
    css:
      FO_BASELINE_CSS +
      '@media (prefers-reduced-motion:reduce){foreignObject *{animation:none!important;' +
      'transition:none!important;scroll-behavior:auto!important;animation-timeline:auto!important;' +
      'view-timeline:none!important;box-sizing:border-box!important;min-width:0!important}}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 10; prefers-reduced-motion emulation only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w10-003',
    label: 'Loop AI b7 w10 #003: forced-colors active',
    idea: '@media (forced-colors:active) — system Canvas/CanvasText colors inside FO subtree',
    css:
      FO_BASELINE_CSS +
      '@media (forced-colors:active){foreignObject{forced-color-adjust:auto!important;' +
      'color-scheme:light dark!important}' +
      'foreignObject *{color:CanvasText!important;background-color:Canvas!important;' +
      'border-color:CanvasText!important;outline-color:CanvasText!important;' +
      'box-sizing:border-box!important;min-width:0!important}}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 10; forced-colors active media only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w10-004',
    label: 'Loop AI b7 w10 #004: print field-sizing timeline-scope',
    idea: '@media print block + field-sizing:fixed on form controls + named timeline-scope on FO root',
    css:
      FO_BASELINE_CSS +
      'foreignObject{timeline-scope:--fo-b7-w10-scope!important;overflow:visible!important}' +
      'foreignObject *{scroll-timeline-name:--fo-b7-w10-scope!important;' +
      'box-sizing:border-box!important;min-width:0!important}' +
      'foreignObject textarea,foreignObject input,foreignObject select,foreignObject [contenteditable]' +
      '{field-sizing:fixed!important}' +
      '@media print{foreignObject *{color:#000!important;background:transparent!important;' +
      'text-shadow:none!important;box-decoration-break:clone!important}}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 10; print + field-sizing fixed + timeline-scope; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
