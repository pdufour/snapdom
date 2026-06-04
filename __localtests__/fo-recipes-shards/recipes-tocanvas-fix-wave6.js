/**
 * Wave-6 FO text fix probes — text-only raster hypotheses (FO raster only, no text bypass).
 *
 * Matrix:
 *   npm run debug:tc-fix-w6-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
} from '../fo-fix-recipes-constants.js'

/** Global flex cross-axis at capture — structural text leaves only. */
const CAPTURE_FLEX_START_LEAF_CSS =
  `${FO_TEXT_LEAF_SINGLE_LINE}{align-self:flex-start!important;height:auto!important}`

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessSnapdom?: Record<string, boolean> }} */
const SPECS = [
  {
    id: 'tc-fix-w6-rfork-fork-visible-red',
    label: 'tc-fix-w6: rfork visible red',
    idea:
      'Raster fork wiring check: background:red on FO text leaves at decode only (extreme visibility)',
    notes: 'If canvas shows red FO text, decode fork path is live; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fork-visibility-red-leaf',
      debugForkTrace: true,
    },
  },
  {
    id: 'tc-fix-w6-rfork-lh-1-leaf',
    label: 'tc-fix-w6: rfork lh 1 leaf',
    idea: 'Raster fork: line-height:1 !important on FO text leaves — falsify half-leading strut',
    notes: 'lh-1-leaf at decode; serialized SVG leg unchanged; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'lh-1-leaf' },
  },
  {
    id: 'tc-fix-w6-rfork-strut-translate',
    label: 'tc-fix-w6: rfork strut translateY',
    idea:
      'Raster fork: text-leaf transform:translateY(calc((line-height - 1em)/2)) injected at decode only',
    notes: 'Half-leading strut from CSS calc on FO text leaves — raster fork only; no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'strut-translate-y' },
  },
  {
    id: 'tc-fix-w6-rfork-strut-translate-meta',
    label: 'tc-fix-w6: rfork strut translate meta',
    idea:
      'Raster fork: translateY(-halfLeading) from live lhStrutHalfLeadingPx meta at decode',
    notes: 'Meta-driven strut nudge — not gate-tuned px; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'strut-translate-y-meta' },
  },
  {
    id: 'tc-fix-w6-fo-height-linebox',
    label: 'tc-fix-w6: rfork FO height linebox',
    idea:
      'Raster fork: shrink foreignObject height to live text line-height px + flex-start on text leaves',
    notes: 'FO viewport matches lh strut; meta lhStrutLineHeightPx from live leaf; no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-height-linebox' },
  },
  {
    id: 'tc-fix-w6-rfork-inline-block-linepx',
    label: 'tc-fix-w6: rfork inline-block linepx',
    idea:
      'Raster fork: display:inline-block + height from live line-height px on text leaves at decode',
    notes: 'inline-block-linepx-leaf alias; uses live meta line box — FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'inline-block-linepx-leaf' },
  },
  {
    id: 'tc-fix-w6-capture-flex-start-leaf',
    label: 'tc-fix-w6: capture flex-start leaf',
    idea: 'Capture inject: align-self:flex-start on structural FO text leaves',
    notes: 'Capture-time FO CSS; distinct from rfork flex-start; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_FLEX_START_LEAF_CSS,
  },
  {
    id: 'tc-fix-w6-rfork-flex-start-leaf',
    label: 'tc-fix-w6: rfork flex-start leaf',
    idea: 'Raster fork: align-self:flex-start on FO text leaves at decode',
    notes: 'align-self-flex-start-leaf — scoped to text leaves; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'align-self-flex-start-leaf' },
  },
  {
    id: 'tc-fix-w6-combo-capture-flex-rfork-flex',
    label: 'tc-fix-w6: combo capture+rfork flex-start',
    idea: 'Dual: capture flex-start on text leaves + raster fork flex-start at decode',
    notes: 'Capture + decode cross-axis; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_FLEX_START_LEAF_CSS,
    labToCanvasOpts: { rasterOnlySvgPatch: 'align-self-flex-start-leaf' },
  },
  {
    id: 'tc-fix-w6-capture-pin-lh-live',
    label: 'tc-fix-w6: capture pin lh live',
    idea: 'Capture: pin line-height to live used px on FO text leaves (experimentalFoPinLineHeightOnTextLeaf)',
    notes: 'Serialize-time lh pin; FO raster only — no text bypass.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
  },
  {
    id: 'tc-fix-w6-combo-linebox-lh-pin-flex',
    label: 'tc-fix-w6: combo linebox lh pin flex',
    idea:
      'Raster fork: FO height=linebox + pin used lh on leaves + flex-start on text leaves at decode',
    notes: 'combo-linebox-lh-pin-flex-start; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-linebox-lh-pin-flex-start' },
  },
  {
    id: 'tc-fix-w6-combo-capture-pin-rfork-linebox',
    label: 'tc-fix-w6: combo capture pin + rfork linebox',
    idea: 'Capture pin used px lh + raster fork FO height linebox + flex-start at decode',
    notes: 'Dual boundary lh + FO viewport shrink; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-height-linebox' },
  },
  {
    id: 'tc-fix-w6-combo-full-text-fix',
    label: 'tc-fix-w6: combo full text fix',
    idea:
      'Capture pin lh + rfork combo linebox/lh-pin/flex-start + disable GBCR nudge (full FO error class)',
    notes: 'Maximum text-only stack without bypass; FO raster only.',
    inject: 'capture',
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-linebox-lh-pin-flex-start',
      disableGbcrFracNudge: true,
      debugForkTrace: true,
    },
  },
  {
    id: 'tc-fix-w6-rfork-lh1-after-plumb',
    label: 'tc-fix-w6: rfork lh1 after plumb',
    idea:
      'After fork visibility confirmed: lh-1 on text leaves at decode with fork trace audit',
    notes: 'Same mechanism as rfork-lh-1-leaf + debugForkTrace for matrix audit columns.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'lh-1-leaf',
      debugForkTrace: true,
    },
  },
  {
    id: 'tc-fix-w6-meta-ink-align',
    label: 'tc-fix-w6: meta ink align',
    idea:
      'Capture experimentalCaptureInkMeta + labToCanvas inkAlign dest dy from layout meta',
    notes: 'Layout-derived raster dy — not gate-tuned px; FO raster only — no text bypass.',
    harnessSnapdom: { experimentalCaptureInkMeta: true },
    labToCanvasOpts: { inkAlign: true },
  },
  {
    id: 'tc-fix-w6-rfork-clip-48',
    label: 'tc-fix-w6: rfork clip 48px',
    idea: 'Raster fork: clip SVG root + foreignObject to 48px content height with overflow:hidden',
    notes: 'Stretch content-box clip — serialized SVG unchanged; no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'clip-content-48' },
  },
  {
    id: 'tc-fix-w6-capture-baseline-global',
    label: 'tc-fix-w6: capture baseline global',
    idea: 'Capture inject: align-self:baseline on all FO flex children',
    notes: 'Capture-time FO CSS only; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS + 'foreignObject *{align-self:baseline!important}',
  },
  {
    id: 'tc-fix-w6-tc-natural-contain-draw',
    label: 'tc-fix-w6: natural contain draw',
    idea: 'labToCanvas drawFit contain-center — aspect-preserving drawImage in paint box',
    notes: 'Structural ratio from natural vs out dims only; FO raster only.',
    labToCanvasOpts: { drawFit: 'contain-center' },
  },
  {
    id: 'tc-fix-w6-combo-meta-ceil',
    label: 'tc-fix-w6: meta align + backing ceil',
    idea: 'Capture ink meta + labToCanvas inkAlign + backingRound ceil',
    notes: 'Combo capture meta + raster align + backing ceil; FO raster only.',
    harnessSnapdom: { experimentalCaptureInkMeta: true },
    labToCanvasOpts: { inkAlign: true, backingRound: 'ceil' },
  },
]

if (SPECS.length !== 19) {
  throw new Error(
    `recipes-tocanvas-fix-wave6.js: expected 19 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessSnapdom, css, inject, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w6',
    active: true,
    labToCanvasOpts,
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 19) {
  throw new Error('recipes-tocanvas-fix-wave6.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave6.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W6_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
