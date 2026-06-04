/**
 * Wave-7 FO text-only fix probes — ten distinct hypotheses (FO raster only, no text bypass).
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-fix-w7-*,product-baseline,tc-blh-w1-*,tc-text-w1-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** Capture: strip lh from non-leaf FO nodes; leaves pinned via harness flag. */
const CAPTURE_PARENT_LH_NORMAL_LEAF_PIN =
  'foreignObject *:not(:empty){line-height:normal!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, labLoadPipeline?: string, harnessSnapdom?: Record<string, boolean> }} */
const SPECS = [
  {
    id: 'tc-fix-w7-rfork-leading-trim-text-box',
    label: 'tc-fix-w7: leading-trim + text-box-trim',
    idea: 'Raster fork: leading-trim:both + text-box-trim:trim-both on FO text leaves at decode',
    notes: 'Distinct w2 id; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'leading-trim-text-box-leaf' },
  },
  {
    id: 'tc-fix-w7-rfork-leaf-margin-reset-lh1',
    label: 'tc-fix-w7: leaf margin reset lh1',
    idea: 'Raster fork: margin-top:0 padding-top:0 line-height:1 on text leaves at decode',
    notes: 'Structural leaf box reset; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'leaf-margin-reset-lh1' },
  },
  {
    id: 'tc-fix-w7-rfork-fo-y-half-leading-meta',
    label: 'tc-fix-w7: FO y −½(lh−fs)',
    idea: 'Raster fork: foreignObject y -= live half-leading from meta (not gate px)',
    notes: 'Meta lhStrutHalfLeadingPx; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w7-rfork-split-fo-per-line',
    label: 'tc-fix-w7: split FO per line',
    idea: 'Raster fork: one foreignObject per Range line rect when multi-line meta present',
    notes: 'No-op on single-line mini nav; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'split-fo-per-line' },
  },
  {
    id: 'tc-fix-w7-rfork-chromium-font-render',
    label: 'tc-fix-w7: chromium font render',
    idea: 'Raster fork: font-size-adjust + text-rendering + font-kerning on text leaves',
    notes: 'modern-screenshot Chromium text render copies; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'chromium-font-render-leaf' },
  },
  {
    id: 'tc-fix-w7-rfork-fo-box-linepx-overflow',
    label: 'tc-fix-w7: FO box linepx overflow',
    idea: 'Raster fork: FO height=live line px + box-sizing:border-box + overflow:hidden',
    notes: 'Typographic line box not stretch; meta lineHeightPx; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-box-linepx-overflow' },
  },
  {
    id: 'tc-fix-w7-capture-parent-lh-leaf-pin',
    label: 'tc-fix-w7: capture parent lh normal',
    idea: 'Capture: line-height:normal on non-empty FO nodes + pin lh on text leaf',
    notes: 'Capture inject + experimentalFoPinLineHeightOnTextLeaf; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_PARENT_LH_NORMAL_LEAF_PIN,
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
  },
  {
    id: 'tc-fix-w7-rfork-flex-container-flex-start',
    label: 'tc-fix-w7: flex container flex-start',
    idea: 'Raster fork: align-items:flex-start on FO flex containers (attribute selector, not nav)',
    notes: 'Global flex descendants; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'flex-container-flex-start' },
  },
  {
    id: 'tc-fix-w7-draw-ink-offset-fo-top',
    label: 'tc-fix-w7: draw ink offset FO top',
    idea: 'labToCanvas draw dy from live Range inkTopOffsetFromFoTop meta (structural, not 2.797)',
    notes: 'disableGbcrFracNudge reveals full class; FO raster only.',
    labToCanvasOpts: { inkOffsetFromFoTop: true, disableGbcrFracNudge: true },
  },
  {
    id: 'tc-fix-w7-bitmap-leading-trim-text-box',
    label: 'tc-fix-w7: bitmap + trim fork',
    idea: 'createImageBitmap decode + leading-trim/text-box-trim raster fork on same SVG',
    notes: 'Text CSS only on forked bytes; FO raster only.',
    labLoadPipeline: 'create-image-bitmap',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w7-rfork-parent-lh-leaf-pin',
    label: 'tc-fix-w7: rfork parent lh leaf pin',
    idea: 'Raster fork: parent nodes lh normal + meta pin on text leaves at decode',
    notes: 'Decode-time parent/leaf lh split; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'parent-lh-normal-leaf-pin' },
  },
]

if (SPECS.length !== 11) {
  throw new Error(
    `recipes-tocanvas-fix-wave7.js: expected 11 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, labLoadPipeline, harnessSnapdom, css, inject, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w7',
    active: true,
    labToCanvasOpts,
    ...(labLoadPipeline ? { labLoadPipeline } : {}),
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 11) {
  throw new Error('recipes-tocanvas-fix-wave7.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave7.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W7_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
