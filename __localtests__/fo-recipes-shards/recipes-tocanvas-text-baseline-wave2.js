/**
 * Wave-2 FO text baseline probes — meta/class lh + linebox combos (FO raster only).
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w2-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import { RASTER_ONLY_SVG_PATCH_BLH_W2_IDS, resolveExperimentalRasterSvgPatch } from '../../src/exporters/rasterOnlySvgPatch.js'

/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-blh-w2-rfork-lh-meta-leaf',
    label: 'tc-blh-w2: rfork lh meta leaf',
    idea: 'Raster fork: pin live meta lineHeightPx on every FO text leaf at decode',
    notes: 'Uses lhStrutLineHeightPx from live leaf meta; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-meta-leaf', disableGbcrFracNudge: true },
  },
  {
    id: 'tc-blh-w2-rfork-inline-block-linebox',
    label: 'tc-blh-w2: rfork inline-block linebox',
    idea:
      'Raster fork: text leaves inline-block + height/line-height from meta/class lh + flex-start',
    notes: 'Typographic line box from layout meta; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-research-w1-strut-neutralize-flex-center',
    label: 'tc-research-w1: meta lh flex-start linebox',
    idea:
      'Research #3: meta lh inline + FO flex-start + shrink FO height to lineHeightPx at decode',
    notes: 'Removes 48px stretch context in FO only; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-meta-lh-flex-start-fo',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-research-w1-leading-trim-both-edges',
    label: 'tc-research-w1: leading-trim text-box leaf',
    idea:
      'Research #1: leading-trim:both + text-box-trim:trim-both on FO text leaves at decode',
    notes: 'Structural inline box trim; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-blh-w2-rfork-chromium-copy-lh-baseline',
    label: 'tc-blh-w2: rfork chromium copy lh baseline',
    idea: 'Raster fork: font-kerning:normal + meta lh + vertical-align:baseline on text leaves',
    notes: 'modern-screenshot Chromium block + meta lh; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'chromium-copy-lh-baseline-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-blh-w2-rfork-strut-translate-y-meta',
    label: 'tc-blh-w2: rfork strut translateY meta',
    idea: 'Raster fork: translateY from live halfLeadingLhFs meta on FO text leaves at decode',
    notes: 'Half-leading from layout meta, not gate-tuned px; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'strut-translate-y-meta',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== RASTER_ONLY_SVG_PATCH_BLH_W2_IDS.length) {
  throw new Error(
    `recipes-tocanvas-text-baseline-wave2.js: expected ${RASTER_ONLY_SVG_PATCH_BLH_W2_IDS.length} specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => ({
  css: FO_BASELINE_CSS,
  inject: 'raster',
  rasterPatch: 'lab-toCanvas',
  category: 'tc-blh-w2',
  active: true,
  ...spec,
}))

const rforkSlugs = RECIPES.map((r) => r.labToCanvasOpts.rasterOnlySvgPatch)
for (const slug of rforkSlugs) {
  if (!RASTER_ONLY_SVG_PATCH_BLH_W2_IDS.includes(slug)) {
    throw new Error(`recipes-tocanvas-text-baseline-wave2.js: unknown patch ${slug}`)
  }
}

export const TC_BLH_W2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
