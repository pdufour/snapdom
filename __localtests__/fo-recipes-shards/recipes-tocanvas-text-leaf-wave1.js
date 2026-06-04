/**
 * Wave-1 FO text-leaf probes — six structural typography fixes (FO raster only, no SVG text).
 *
 * Targets single-line text leaves: foreignObject :is(span,a,p,h1,h2,h3,label) + nowrap.
 *
 * Matrix: npm run debug:tc-text-w1-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
} from '../fo-fix-recipes-constants.js'
import { RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS } from '../../src/exporters/rasterOnlySvgPatch.js'

const LH_1EM_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{line-height:1!important;font-size:inherit!important;white-space:nowrap!important}`

const VERTICAL_ALIGN_TOP_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{vertical-align:top!important;white-space:nowrap!important}`

const DISPLAY_INLINE_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{display:inline!important;white-space:nowrap!important}`

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessSnapdom?: Record<string, boolean> }} */
const SPECS = [
  {
    id: 'tc-text-w1-pin-lh-leaf-live',
    label: 'tc-text-w1: pin lh leaf live',
    idea:
      'Capture experimentalFoPinLineHeightFromLive — pin line-height px on FO text leaves from live computed strut',
    notes:
      'Product capture flag on harnessSnapdom; text leaves only via styles.js isTextLeaf; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS,
    harnessSnapdom: { experimentalFoPinLineHeightFromLive: true },
  },
  {
    id: 'tc-text-w1-lh-1em-leaf',
    label: 'tc-text-w1: lh 1em leaf',
    idea: 'FO CSS line-height:1 + font-size:inherit on structural single-line text leaves',
    notes: 'Capture inject on :is(span,a,p,h1,h2,h3,label); FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS + LH_1EM_LEAF_CSS,
  },
  {
    id: 'tc-text-w1-vertical-align-top-leaf',
    label: 'tc-text-w1: vertical-align top leaf',
    idea: 'FO CSS vertical-align:top on structural single-line inline text leaves',
    notes: 'Capture inject; not nav/checkout selectors; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS + VERTICAL_ALIGN_TOP_LEAF_CSS,
  },
  {
    id: 'tc-text-w1-display-inline-leaf',
    label: 'tc-text-w1: display inline leaf',
    idea: 'FO CSS display:inline on text leaves (counter block/flex stretch on leaf boxes)',
    notes: 'Capture inject on structural leaves + nowrap; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS + DISPLAY_INLINE_LEAF_CSS,
  },
  {
    id: 'tc-text-w1-rfork-leading-trim-leaf',
    label: 'tc-text-w1: rfork leading-trim leaf',
    idea:
      'Raster fork only: leading-trim:both on foreignObject :is(span,a,p,h1,h2,h3,label) at decode',
    notes: 'Raster-only SVG fork; serialized SVG unchanged; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'leading-trim-leaf' },
  },
  {
    id: 'tc-text-w1-rfork-lh-normal-leaf',
    label: 'tc-text-w1: rfork lh normal leaf',
    idea:
      'Raster fork only: line-height:normal!important on structural single-line text leaves at decode',
    notes: 'Leaf-scoped lh reset vs global foreignObject *; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-normal-leaf' },
  },
]

if (SPECS.length !== 6) {
  throw new Error(
    `recipes-tocanvas-text-leaf-wave1.js: expected 6 specs, got ${SPECS.length}`,
  )
}

const rforkSlugs = SPECS.filter((s) => s.labToCanvasOpts?.rasterOnlySvgPatch).map(
  (s) => s.labToCanvasOpts.rasterOnlySvgPatch,
)
if (rforkSlugs.length !== RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS.length) {
  throw new Error(
    `recipes-tocanvas-text-leaf-wave1.js: rfork spec count ${rforkSlugs.length} !== patch ids ${RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS.length}`,
  )
}
for (const slug of rforkSlugs) {
  if (!RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS.includes(slug)) {
    throw new Error(
      `recipes-tocanvas-text-leaf-wave1.js: unknown rasterOnlySvgPatch ${slug}`,
    )
  }
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessSnapdom, css, inject, ...rest } = spec
  return {
    css: css ?? FO_BASELINE_CSS,
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-text-w1',
    active: true,
    ...(labToCanvasOpts ? { labToCanvasOpts } : {}),
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-text-leaf-wave1.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(
      `recipes-tocanvas-text-leaf-wave1.js: duplicate recipe key at ${r.id}`,
    )
  }
  seen.add(key)
}

export const TC_TEXT_W1_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
