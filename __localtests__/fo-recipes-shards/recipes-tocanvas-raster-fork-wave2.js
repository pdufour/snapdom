/**
 * Wave-2 raster-only SVG fork — patch capture SVG clone at decode only (SVG leg unchanged).
 *
 * Patches: src/exporters/rasterOnlySvgPatch.js via labToCanvasOpts.rasterOnlySvgPatch
 * Fork: lab-toCanvas-decode (decode-interval path; distinct from wave-1 lab-toCanvas).
 * Matrix: npm run debug:raster-fork-w2-matrix
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import { RASTER_ONLY_SVG_PATCH_W2_IDS } from '../../src/exporters/rasterOnlySvgPatch.js'

/** @type {{ slug: string, idea: string, notes: string }[]} */
const SPECS = [
  {
    slug: 'leading-trim-inject',
    idea: 'Raster fork: leading-trim:both on foreignObject * at decode only',
    notes: 'Typography trim probe on FO bitmap path — serialized SVG / ink leg unchanged.',
  },
  {
    slug: 'align-self-flex-start',
    idea: 'Raster fork: align-self:flex-start on FO flex descendants at decode only',
    notes: 'Structural counter to cross-axis stretch — raster fork only, SVG leg unchanged.',
  },
  {
    slug: 'line-height-normal-important',
    idea: 'Raster fork: line-height:normal!important on foreignObject * at decode only',
    notes: 'Cascade reset vs pinned/strut lh — FO raster only, no text bypass.',
  },
  {
    slug: 'svg-root-translate-y-minus-half-leading',
    idea:
      'Raster fork: svg root translate(0, −halfLeading) where halfLeading = (fontSize×1.35 − fontSize)/2 from parsed font-size',
    notes:
      'Half-leading from font-size×1.35 line box ratio in patch fn — not a gate-tuned px constant.',
  },
  {
    slug: 'foreignObject-overflow-hidden',
    idea: 'Raster fork: foreignObject{overflow:hidden!important} at decode only',
    notes: 'Clip FO subtree overflow on bitmap path — SVG compare leg uses original capture.',
  },
  {
    slug: 'combo-lh-normal-flex-start',
    idea: 'Raster fork: line-height:normal + align-self:flex-start combined at decode only',
    notes: 'Combo of line-height-normal-important + align-self-flex-start — FO raster only.',
  },
]

if (SPECS.length !== RASTER_ONLY_SVG_PATCH_W2_IDS.length) {
  throw new Error(
    `recipes-tocanvas-raster-fork-wave2.js: spec count ${SPECS.length} !== patch ids ${RASTER_ONLY_SVG_PATCH_W2_IDS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => ({
  id: `tc-fork-w2-${spec.slug}`,
  label: `tc-fork w2: ${spec.slug}`,
  idea: spec.idea,
  css: FO_BASELINE_CSS,
  inject: 'raster',
  rasterPatch: 'lab-toCanvas-decode',
  category: 'tocanvas',
  active: true,
  notes: spec.notes,
  labToCanvasOpts: { rasterOnlySvgPatch: spec.slug },
}))

const seen = new Set()
for (const r of RECIPES) {
  if (seen.has(r.id)) throw new Error(`duplicate recipe id ${r.id}`)
  seen.add(r.id)
}

export const TC_FORK_W2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
