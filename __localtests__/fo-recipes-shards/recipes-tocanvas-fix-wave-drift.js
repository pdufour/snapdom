/**
 * Vertical drift probes — w7 / leaf translate / leading-trim / linebox (FO raster only).
 *
 *   node __localtests__/fo-fix-lab.mjs --matrix \
 *     --ids 'product-baseline,tc-fix-drift-*' --limit 12 --landmark Home
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** Capture-side leading-trim both-edges (not decode fork). */
const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-drift-w7-half-leading-meta',
    label: 'tc-fix-drift: w7 FO y half-leading',
    idea: 'Raster fork: foreignObject y −½(lh−fs) from live meta (w7 alias)',
    notes: 'Same patch as tc-fix-w7-rfork-fo-y-half-leading-meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-leaf-translate-half-leading-meta',
    label: 'tc-fix-drift: leaf translateY ½lh',
    idea: 'Raster fork: text leaf translateY(−½(lh−fs)) at decode (w13 style)',
    notes: 'Inner leaf transform, not FO y attr; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-leading-trim-both-edges',
    label: 'tc-fix-drift: capture trim both-edges',
    idea: 'Capture inject: leading-trim:both-edges + text-box-trim on FO *',
    notes: 'Structural capture CSS before raster; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
  },
  {
    id: 'tc-fix-drift-fo-linebox-overflow',
    label: 'tc-fix-drift: FO height line px',
    idea: 'Raster fork: FO height=live lineHeightPx + border-box + overflow:hidden',
    notes: 'Typographic line box, not stretch height; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-box-linepx-overflow',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-w7-plus-leading-trim',
    label: 'tc-fix-drift: w7 y + leading-trim',
    idea: 'Raster fork: FO y −½(lh−fs) + leading-trim/text-box-trim on text leaves',
    notes: 'Combo raster fork at decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-fo-y-meta-from-parent-lh',
    label: 'tc-fix-drift: parent lh leaf pin',
    idea: 'Raster fork: parent nodes lh normal + meta pin on text leaves at decode',
    notes: 'Parent/leaf lh split from live meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'parent-lh-normal-leaf-pin',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-chromium-kerning-block',
    label: 'tc-fix-drift: chromium kerning block',
    idea: 'Raster inject: font-kerning:normal + Chromium text render copies on FO',
    notes: 'H2/modern-screenshot-style copy-css in FO; FO raster only.',
    inject: 'raster',
    css: H2_RASTER_NORMALIZE_CSS,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'chromium-font-render-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-viewport-align-svg-root',
    label: 'tc-fix-drift: SVG root overflow w7',
    idea: 'Raster fork: FO y −½(lh−fs) + SVG root overflow:visible structural pad',
    notes: 'Structural svg root + w7 strut nudge; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-svg-root-overflow-visible',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-w7-plus-linebox-overflow',
    label: 'tc-fix-drift: w7 y + linebox overflow',
    idea: 'Raster fork: FO y −½(lh−fs) + height=linePx + overflow:hidden',
    notes: 'w7 strut + typographic FO box clip; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-box-overflow',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-strut-translate-y-meta',
    label: 'tc-fix-drift: strut translateY meta',
    idea: 'Raster fork: translateY(−½(lh−fs)) on FO text leaves from live meta',
    notes: 'Half-leading via leaf translateY at decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'strut-translate-y-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-chromium-copy-lh-baseline',
    label: 'tc-fix-drift: chromium lh baseline',
    idea: 'Raster fork: font-kerning:normal + meta lh + vertical-align:baseline on leaves',
    notes: 'modern-screenshot Chromium block + meta lh; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'chromium-copy-lh-baseline-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-w7-minus-range-subpixel',
    label: 'tc-fix-drift: w7 − Range subpx',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) from meta',
    notes: 'w7 refine — subtract Range fractional from half-leading; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-w7-minus-range-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 12) {
  throw new Error(
    `recipes-tocanvas-fix-wave-drift.js: expected 12 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, css, inject, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-drift',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 12) {
  throw new Error('recipes-tocanvas-fix-wave-drift.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave-drift.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_DRIFT_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
