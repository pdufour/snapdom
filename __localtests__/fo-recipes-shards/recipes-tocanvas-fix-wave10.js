/**
 * Wave-10 half-leading / Range strut refinement probes (FO raster only, no text bypass).
 *
 * Calibrate:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w10-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** Capture: inline-block line box on text leaf (structural, not lh pin). */
const CAPTURE_INLINE_BLOCK_LINE_LEAF =
  'foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:top!important;align-self:flex-start!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w10-rfork-y-half-leading-linepx-height',
    label: 'tc-fix-w10: y half-leading + linePx height',
    idea: 'Raster fork: FO y −½(lh−fs) then height=linePx only (no overflow CSS)',
    notes: 'Avoid clip side-effects from w8 box-overflow combo; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-linepx-height-only' },
  },
  {
    id: 'tc-fix-w10-rfork-y-strut-range-subpixel',
    label: 'tc-fix-w10: FO y Range subpixel adjust',
    idea: 'Raster fork: FO y −(½(lh−fs) − Range subpixel) via lhStrutFoYAdjustPx meta',
    notes: 'Range-measured strut minus subpixel frac; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-strut-range-meta' },
  },
  {
    id: 'tc-fix-w10-rfork-dual-fo-inner-y',
    label: 'tc-fix-w10: dual FO inner y',
    idea: 'Raster fork: outer FO stretch box + inner FO y −½(lh−fs) on text leaf wrapper',
    notes: 'Nested foreignObject nudge on leaf only; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'dual-fo-inner-y-half-leading' },
  },
  {
    id: 'tc-fix-w10-rfork-y-half-leading-trim-text-box',
    label: 'tc-fix-w10: y half-leading + trim',
    idea: 'Raster fork: FO y −½(lh−fs) + leading-trim/text-box-trim on text leaves',
    notes: 'Retry w7 trim combo with y nudge only; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box' },
  },
  {
    id: 'tc-fix-w10-rfork-y-dpr-subpixel-meta',
    label: 'tc-fix-w10: y dpr-scaled subpixel',
    idea: 'Raster fork: FO y −(½(lh−fs) − RangeSubpixel/exportDpr) from live meta',
    notes: 'Subpixel correction scaled by export dpr at decode; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-dpr-subpixel-meta' },
  },
  {
    id: 'tc-fix-w10-capture-inline-block-w7-y',
    label: 'tc-fix-w10: capture inline-block + w7 y',
    idea: 'Capture: inline-block line box on text leaf + raster FO y −½(lh−fs)',
    notes: 'Capture layout + w7 rfork; no lh pin no-op; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINE_LEAF,
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w10-rfork-y-partial-half-leading',
    label: 'tc-fix-w10: y partial half-leading',
    idea: 'Raster fork: FO y −½(fontBoxHalf + fsHalf) midpoint from live meta',
    notes: 'Between fontbox (~1.8) and fs-half (~2.8); FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-partial-half-leading-meta' },
  },
  {
    id: 'tc-fix-w10-rfork-viewbox-y-half-leading',
    label: 'tc-fix-w10: viewBox y half-leading',
    idea: 'Raster fork: viewBox minY −½(lh−fs) instead of foreignObject y',
    notes: 'Chromium paint-origin via viewBox not FO attr; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'viewbox-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w10-rfork-y-fo-adjust-linepx-clip',
    label: 'tc-fix-w10: y fo-adjust + linepx clip',
    idea: 'Raster fork: FO y −lhStrutFoYAdjustPx + height=linePx + overflow clip',
    notes: 'Range subpixel FO y + line box clip; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-fo-adjust-linepx-clip' },
  },
  {
    id: 'tc-fix-w10-rfork-y-half-leading-inline-block',
    label: 'tc-fix-w10: y half-leading + inline-block',
    idea: 'Raster fork: FO y −½(lh−fs) + inline-block line box on text leaves',
    notes: 'Decode-time leaf line box + w7 y; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-inline-block-leaf' },
  },
  {
    id: 'tc-fix-w10-rfork-viewbox-y-fo-adjust',
    label: 'tc-fix-w10: viewBox y fo-adjust',
    idea: 'Raster fork: viewBox minY −lhStrutFoYAdjustPx (Range-aware half-leading)',
    notes: 'viewBox path with Range subpixel adjust; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'viewbox-y-fo-adjust-meta' },
  },
  {
    id: 'tc-fix-w10-rfork-y-half-leading-draw-subpixel',
    label: 'tc-fix-w10: w7 y + Range subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) then draw dy += Range top subpixel fraction',
    notes: 'FO strut + blit subpixel; closes w7 −0.203 residual; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      strutRangeSubpixelDrawDy: true,
    },
  },
]

if (SPECS.length !== 12) {
  throw new Error(
    `recipes-tocanvas-fix-wave10.js: expected 12 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, css, inject, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w10',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 12) {
  throw new Error('recipes-tocanvas-fix-wave10.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave10.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W10_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
