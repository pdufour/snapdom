/**
 * Wave-1 FO text baseline / line-height probes (FO DOM text only, no SVG text).
 *
 * All raster paths use fo-fix-toCanvas.js (rasterPatch: lab-toCanvas) — not product-toCanvas.
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*'
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
} from '../fo-fix-recipes-constants.js'
import {
  RASTER_ONLY_SVG_PATCH_BLH_W1_IDS,
  RASTER_ONLY_SVG_PATCH_W6_IDS,
  resolveExperimentalRasterSvgPatch,
} from '../../src/exporters/rasterOnlySvgPatch.js'

const ALLOWED_RFORK_PATCH_IDS = [
  ...RASTER_ONLY_SVG_PATCH_BLH_W1_IDS,
  ...RASTER_ONLY_SVG_PATCH_W6_IDS,
]

const LH_NORMAL_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{line-height:normal!important;white-space:nowrap!important}`

const LH_1_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{line-height:1!important;white-space:nowrap!important}`

const LH_FONT_SIZE_EM_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{line-height:1em!important;white-space:nowrap!important}`

const VA_BASELINE_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{vertical-align:baseline!important;display:inline!important;white-space:nowrap!important}`

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const SPECS = [
  {
    id: 'tc-blh-w1-pin-lh-used-value',
    label: 'tc-blh-w1: pin lh used value',
    idea: 'Capture: pin line-height to live used px on FO text leaves',
    notes: 'experimentalFoPinLineHeightOnTextLeaf via harnessSnapdom; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
  },
  {
    id: 'tc-blh-w1-lh-normal-leaf',
    label: 'tc-blh-w1: lh normal leaf',
    idea: 'Capture: line-height:normal on structural text leaves via product flag',
    notes: 'experimentalFoTextLineHeightNormal; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
  },
  {
    id: 'tc-blh-w1-lh-1-leaf',
    label: 'tc-blh-w1: lh 1 leaf',
    idea: 'FO CSS line-height:1 on text leaves (lab inject — no product flag)',
    notes: 'Capture inject; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + LH_1_LEAF_CSS,
  },
  {
    id: 'tc-blh-w1-lh-fontsize-px',
    label: 'tc-blh-w1: lh 1em leaf',
    idea: 'FO CSS line-height:1em from live font-size on text leaves (structural)',
    notes: 'Capture inject; not nav-tuned px; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + LH_FONT_SIZE_EM_LEAF_CSS,
  },
  {
    id: 'tc-blh-w1-vertical-align-baseline',
    label: 'tc-blh-w1: vertical-align baseline',
    idea: 'FO CSS vertical-align:baseline on structural text leaves (va-only lab inject)',
    notes: 'Capture inject; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + VA_BASELINE_LEAF_CSS,
  },
  {
    id: 'tc-blh-w1-rfork-lh-used',
    label: 'tc-blh-w1: rfork lh used leaf',
    idea: 'Raster fork: re-assert used lh px on text leaves at decode only',
    notes: 'pin-lh-leaf via fo-fix-toCanvas rasterOnlySvgPatch; SVG leg unchanged.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'pin-lh-leaf' },
  },
  {
    id: 'tc-blh-w1-rfork-lh-normal-leaf',
    label: 'tc-blh-w1: rfork lh normal leaf',
    idea: 'Raster fork: line-height:normal on text leaves at decode only',
    notes: 'lh-normal-leaf via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-normal-leaf' },
  },
  {
    id: 'tc-blh-w1-rfork-lh-1-leaf',
    label: 'tc-blh-w1: rfork lh 1 leaf',
    idea: 'Raster fork: line-height:1 on text leaves at decode (strut neutralize)',
    notes: 'lh-1-leaf via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-1-leaf' },
  },
  {
    id: 'tc-blh-w1-rfork-lh-1em-leaf',
    label: 'tc-blh-w1: rfork lh 1em leaf',
    idea: 'Raster fork: line-height:1em on text leaves at decode (strut neutralize)',
    notes: 'lh-1em-leaf via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-1em-leaf' },
  },
  {
    id: 'tc-blh-w1-rfork-vertical-align-baseline',
    label: 'tc-blh-w1: rfork va baseline leaf',
    idea: 'Raster fork: vertical-align:baseline on text leaves at decode only',
    notes: 'baseline-leaf via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'baseline-leaf' },
  },
  {
    id: 'tc-blh-w1-rfork-combo-lh-baseline',
    label: 'tc-blh-w1: rfork combo lh+baseline',
    idea: 'Raster fork: pin used lh px + vertical-align:baseline + display:inline on text leaves',
    notes: 'combo-lh-baseline via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-lh-baseline' },
  },
  {
    id: 'tc-blh-w1-rfork-flex-start-fo',
    label: 'tc-blh-w1: rfork flex-start FO',
    idea: 'Raster fork: align-items:flex-start on foreignObject at decode (global, not nav)',
    notes: 'fo-flex-start via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-flex-start' },
  },
  {
    id: 'tc-blh-w1-combo-lh-normal-va-baseline',
    label: 'tc-blh-w1: combo lh normal va baseline',
    idea: 'Raster fork: line-height:normal + vertical-align:baseline on text leaves',
    notes: 'combo-lh-normal-va-baseline-leaf via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-lh-normal-va-baseline-leaf' },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-pin-lh',
    label: 'tc-blh-w1: combo capture+rfork pin lh',
    idea: 'Dual pin: capture used px lh on text leaves + raster fork re-assert at decode',
    notes: 'experimentalFoPinLineHeightOnTextLeaf + pin-lh-leaf; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'pin-lh-leaf' },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-lh-normal',
    label: 'tc-blh-w1: combo capture pin + rfork lh normal',
    idea: 'Capture pin used px lh + raster fork line-height:normal on text leaves at decode',
    notes: 'experimentalFoPinLineHeightOnTextLeaf + lh-normal-leaf; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-normal-leaf' },
  },
  {
    id: 'tc-blh-w1-combo-capture-baseline-fix',
    label: 'tc-blh-w1: combo capture baseline fix',
    idea: 'Capture: pin used px lh + vertical-align:baseline on text leaves',
    notes: 'experimentalFoTextBaselineFix via harnessSnapdom; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoTextBaselineFix: true },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-baseline',
    label: 'tc-blh-w1: combo capture+rfork baseline',
    idea: 'Dual: capture baseline fix + raster fork va-baseline on text leaves',
    notes: 'experimentalFoTextBaselineFix + baseline-leaf; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoTextBaselineFix: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'baseline-leaf' },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-combo-lh-baseline',
    label: 'tc-blh-w1: combo capture+rfork lh+baseline',
    idea: 'Dual: capture baseline fix + raster fork pin lh + baseline on text leaves',
    notes: 'experimentalFoTextBaselineFix + combo-lh-baseline; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoTextBaselineFix: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-lh-baseline' },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-lh-1-leaf',
    label: 'tc-blh-w1: combo capture pin + rfork lh 1',
    idea: 'Dual: capture pin used px lh on text leaves + raster fork line-height:1 at decode',
    notes: 'experimentalFoPinLineHeightOnTextLeaf + lh-1-leaf; FO raster only — no text bypass.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-1-leaf', disableGbcrFracNudge: true },
  },
  {
    id: 'tc-blh-w1-flex-text-leaf-align-start',
    label: 'tc-blh-w1: flex text leaf align-start',
    idea: 'Capture: align-self:flex-start on flex/grid text leaves only',
    notes: 'experimentalFoFlexTextLeafAlignStart via harnessSnapdom; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
  },
  {
    id: 'tc-blh-w1-rfork-fo-height-linebox',
    label: 'tc-blh-w1: rfork fo height linebox',
    idea: 'Raster fork: shrink FO height to typographic line box from live meta at decode',
    notes: 'fo-height-linebox via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-height-linebox', disableGbcrFracNudge: true },
  },
  {
    id: 'tc-blh-w1-rfork-combo-lh-flexstart',
    label: 'tc-blh-w1: rfork combo lh flexstart',
    idea: 'Raster fork: meta lh + FO flex-start + linebox shrink at decode',
    notes: 'combo-lh-flexstart (→ combo-meta-lh-flex-start-fo) via fo-fix-toCanvas; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-lh-flexstart', disableGbcrFracNudge: true },
  },
  {
    id: 'tc-blh-w1-raster-meta-ink-align',
    label: 'tc-blh-w1: meta ink align bundle',
    idea: 'Capture Range ink meta + product toCanvas drawImage dy align',
    notes: 'experimentalRasterMetaInkAlign bundle; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalRasterMetaInkAlign: true },
    rasterPatch: 'product-toCanvas',
    harnessProductToCanvas: { experimentalRasterMetaInkAlign: true },
  },
  // —— Non-text raster knobs (inactive — tie 2.797; use --ids to rerun) ——
  {
    id: 'tc-blh-w1-raster-backing-ceil',
    label: 'tc-blh-w1: backing ceil',
    idea: 'Lab toCanvas: Math.ceil backing store from out×dpr',
    notes: 'Non-text raster knob; inactive — ties plateau. FO raster only.',
    active: false,
    labToCanvasOpts: { backingRound: 'ceil' },
  },
  {
    id: 'tc-blh-w1-raster-decode-settle',
    label: 'tc-blh-w1: decode settle',
    idea: 'Lab toCanvas: fonts.ready + decode retry + 100ms settle before drawImage',
    notes: 'Non-text decode timing; inactive — ties plateau.',
    active: false,
    labToCanvasOpts: { decodeSettle: true },
  },
  {
    id: 'tc-blh-w1-raster-no-gbcr',
    label: 'tc-blh-w1: disable GBCR nudge',
    idea: 'Lab toCanvas: skip fractional GBCR drawImage dest nudge',
    notes: 'Diagnostic: reveals ~2.797 vs vdrift 1.797; non-text blit knob.',
    active: false,
    labToCanvasOpts: { disableGbcrFracNudge: true },
  },
  {
    id: 'tc-blh-w1-combo-pin-lh-backing-ceil',
    label: 'tc-blh-w1: combo pin lh + backing ceil',
    idea: 'Capture pin used px lh on text leaves + ceil backing store',
    notes: 'Text + non-text combo; inactive — backing ties plateau.',
    active: false,
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { backingRound: 'ceil' },
  },
  {
    id: 'tc-blh-w1-combo-rfork-pin-lh-backing-ceil',
    label: 'tc-blh-w1: combo rfork pin lh + backing ceil',
    idea: 'Raster fork re-assert used px lh + ceil backing store at decode',
    notes: 'Text + non-text combo; inactive.',
    active: false,
    labToCanvasOpts: { rasterOnlySvgPatch: 'pin-lh-leaf', backingRound: 'ceil' },
  },
  {
    id: 'tc-blh-w1-combo-rfork-pin-lh-decode-settle',
    label: 'tc-blh-w1: combo rfork pin lh + decode settle',
    idea: 'Raster fork pin lh on text leaves + decode settle before drawImage',
    notes: 'Text + decode timing combo; inactive.',
    active: false,
    labToCanvasOpts: { rasterOnlySvgPatch: 'pin-lh-leaf', decodeSettle: true },
  },
  {
    id: 'tc-blh-w1-combo-capture-rfork-decode-settle',
    label: 'tc-blh-w1: combo capture+rfork pin lh + decode settle',
    idea: 'Dual pin used px lh at capture and decode + decode settle timing',
    notes: 'Text + decode timing combo; inactive.',
    active: false,
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'pin-lh-leaf', decodeSettle: true },
  },
  {
    id: 'tc-blh-w1-combo-full-lh-raster',
    label: 'tc-blh-w1: combo full lh + raster',
    idea: 'Capture pin lh + rfork pin lh + backing ceil + decode settle',
    notes: 'Text + non-text raster bundle; inactive.',
    active: false,
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'pin-lh-leaf',
      backingRound: 'ceil',
      decodeSettle: true,
    },
  },
]

const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessSnapdom, css, inject, active, ...rest } = spec
  return {
    css: css ?? FO_BASELINE_CSS,
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-blh-w1',
    active: active !== false,
    ...(labToCanvasOpts ? { labToCanvasOpts } : {}),
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const rforkSlugs = RECIPES.filter((r) => r.labToCanvasOpts?.rasterOnlySvgPatch).map(
  (r) => r.labToCanvasOpts.rasterOnlySvgPatch,
)
for (const slug of rforkSlugs) {
  const resolved = resolveExperimentalRasterSvgPatch(slug)
  if (
    !resolved ||
    (!ALLOWED_RFORK_PATCH_IDS.includes(resolved) &&
      !ALLOWED_RFORK_PATCH_IDS.includes(slug))
  ) {
    throw new Error(`recipes-tocanvas-text-baseline-wave1.js: unknown patch ${slug}`)
  }
}

export const TC_BLH_W1_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
