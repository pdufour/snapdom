/**
 * Loop AI batch-7 FO recipe shard (worker 9) — SVG filters/pattern/gradient border (not displacement).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w09-001',
    label: 'Loop AI b7 w09 #001: feTurbulence feComposite filter',
    idea: 'feTurbulence + feComposite arithmetic identity filter defs on each foreignObject — not displacement',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    foSvgPatch: 'fe-turbulence-composite',
    notes: 'Loop AI b7 shard worker 09; feTurbulence+feComposite defs only — no displacement identity; no text bypass.',
  },
  {
    id: 'loop-ai-b7-w09-002',
    label: 'Loop AI b7 w09 #002: svg root pattern fill',
    idea: 'pattern fill on capture svg root — hatch defs in svg <defs> before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    foSvgPatch: 'svg-root-pattern-fill',
    notes: 'Loop AI b7 shard worker 09; svg root pattern fill only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w09-003',
    label: 'Loop AI b7 w09 #003: FO border gradient stroke',
    idea: 'linearGradient stroke rect matching foreignObject box — border simulation via svg stroke',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    foSvgPatch: 'fo-border-linear-gradient-stroke',
    notes: 'Loop AI b7 shard worker 09; linearGradient stroke border simulation only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w09-004',
    label: 'Loop AI b7 w09 #004: turbulence + pattern + border',
    idea: 'feTurbulence+feComposite on FO + pattern fill on svg root + linearGradient border stroke bundle',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{min-width:0!important}',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    foSvgPatch: 'svg-filter-pattern-border-bundle',
    notes:
      'Loop AI b7 shard worker 09; turbulence + pattern + gradient border bundle — not displacement; no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
