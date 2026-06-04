/**
 * Wave-1 raster-only SVG fork — patch capture SVG clone at decode only (SVG leg unchanged).
 *
 * Product flags: experimentalRasterSvgPatch via harnessProductToCanvas
 * Matrix: npm run debug:raster-fork-w1-matrix
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import {
  productExperimentalRasterSvgPatchFromLab,
  RASTER_ONLY_SVG_PATCH_IDS,
} from '../../src/exporters/rasterOnlySvgPatch.js'

/** Lab patch slug → product experimentalRasterSvgPatch enum. */
const LAB_TO_PRODUCT_PATCH = /** @type {const} */ ({
  'inject-fo-lh-pin': 'fo-lh-pin',
  'inject-flex-center': 'flex-center',
  'viewbox-int-floor': 'viewbox-floor',
  'fo-y-nudge': 'fo-y-nudge',
  'root-height-48': 'root-height-48',
  'combo-lh-center': 'combo-lh-center',
})

/** @type {{ slug: string, idea: string, notes: string }[]} */
const SPECS = [
  {
    slug: 'inject-fo-lh-pin',
    idea: 'Raster fork: inject foreignObject * { line-height: 21.6px !important } into SVG string at decode only',
    notes: 'Tests lh pin on FO bitmap path without mutating serialized SVG ink metric.',
  },
  {
    slug: 'inject-flex-center',
    idea: 'Raster fork: align-items:center on FO flex rows at decode only',
    notes: 'Structural counter to cross-axis stretch — raster fork only, SVG leg unchanged.',
  },
  {
    slug: 'viewbox-int-floor',
    idea: 'Raster fork: int floor viewBox components on SVG fork only (width/height attrs unchanged)',
    notes: 'Distinct from capture-time int-viewbox-floor — applies only to decode fork.',
  },
  {
    slug: 'fo-y-nudge',
    idea: 'Raster fork: foreignObject y +1px on decode fork — probe decode placement sensitivity',
    notes: 'Lab diagnostic for FO y attr vs bitmap ink; not a product nudge.',
  },
  {
    slug: 'root-height-48',
    idea: 'Raster fork: force svg root height=48 (vs typical 50) on decode fork only',
    notes: 'From svg-height-50-vs-48 probe — raster-only height experiment.',
  },
  {
    slug: 'combo-lh-center',
    idea: 'Raster fork: line-height pin + flex row center combined on decode fork',
    notes: 'Combo of inject-fo-lh-pin + inject-flex-center — FO raster only, no text bypass.',
  },
]

if (SPECS.length !== RASTER_ONLY_SVG_PATCH_IDS.length) {
  throw new Error(
    `recipes-tocanvas-raster-fork-wave1.js: spec count ${SPECS.length} !== patch ids ${RASTER_ONLY_SVG_PATCH_IDS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const productPatch =
    LAB_TO_PRODUCT_PATCH[/** @type {keyof typeof LAB_TO_PRODUCT_PATCH} */ (spec.slug)] ??
    productExperimentalRasterSvgPatchFromLab(spec.slug)
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-fork-w1-${spec.slug}`,
    label: `tc-fork w1: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: spec.notes,
  }
  if (productPatch) {
    recipe.rasterPatch = 'product-toCanvas'
    recipe.harnessProductToCanvas = { experimentalRasterSvgPatch: productPatch }
  } else {
    recipe.labToCanvasOpts = { rasterOnlySvgPatch: spec.slug }
  }
  return recipe
})

const seen = new Set()
for (const r of RECIPES) {
  if (seen.has(r.id)) throw new Error(`duplicate recipe id ${r.id}`)
  seen.add(r.id)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
