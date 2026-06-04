/**
 * Lab toCanvas fork recipes (tc-lab-*).
 * Opt in via rasterPatch: 'lab-toCanvas' → __localtests__/fo-fix-toCanvas.js
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = [
  {
    id: 'tc-lab-001',
    label: 'Lab toCanvas fork baseline',
    idea: 'Full lab fork of src/exporters/toCanvas.js — identical to product export path',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: 'Modify fo-fix-toCanvas.js only; promote to src/ after matrix validation.',
  },
  {
    id: 'tc-lab-002',
    label: 'Lab toCanvas + FO baseline',
    idea: 'Lab fork raster with FO_BASELINE_CSS (overflow / size-adjust)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
  },
  {
    id: 'tc-lab-003',
    label: 'Lab toCanvas + integer viewBox',
    idea: 'Integer viewBox snap on SVG root before lab toCanvas draw',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    svgRootRound: 'integer-viewbox',
    category: 'raster',
    active: true,
  },
  {
    id: 'tc-lab-004',
    label: 'Lab toCanvas + Chromium copies',
    idea: 'FO * Chromium font-kerning / size-adjust block + lab toCanvas',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
  },
  {
    id: 'tc-lab-005',
    label: 'Lab toCanvas + round dims',
    idea: 'Round SVG root width/height attrs before lab toCanvas raster',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    svgRootRound: 'round-dims',
    category: 'raster',
    active: true,
  },
]
