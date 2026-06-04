/**
 * Wave-5 FO text fix probes — six distinct hypotheses (FO raster only, no text bypass).
 *
 * Matrix:
 *   npm run debug:tc-fix-w5-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, radicalPatch?: import('../fo-fix-recipe-shared.js').FoFixRadicalPatch, monkeypatch?: import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch }} */
const SPECS = [
  {
    id: 'tc-fix-w5-rfork-lh-normal-flex-start',
    label: 'tc-fix-w5: rfork lh-normal + flex-start',
    idea:
      'Raster fork only: combo-lh-normal-flex-start — line-height:normal + align-self:flex-start on FO * at decode',
    notes: 'Raster-only SVG fork; serialized SVG unchanged; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-lh-normal-flex-start' },
  },
  {
    id: 'tc-fix-w5-rfork-remove-flex-display-a',
    label: 'tc-fix-w5: rfork a inline-block',
    idea: 'Raster fork only: foreignObject a{display:inline-block!important} injected at decode fork',
    notes: 'Counter flex display on nav anchors — raster fork only; FO raster only — no text bypass.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'remove-flex-display-a' },
  },
  {
    id: 'tc-fix-w5-tc-backing-ceil-no-gbcr',
    label: 'tc-fix-w5: backing ceil + no gbcr',
    idea: 'labToCanvas backingRound ceil + disableGbcrFracNudge — snap backing store, skip GBCR frac drawImage dy',
    notes: 'toCanvas-only knobs; FO raster only — no text bypass.',
    labToCanvasOpts: { backingRound: 'ceil', disableGbcrFracNudge: true },
  },
  {
    id: 'tc-fix-w5-tc-decode-raf-bitmap',
    label: 'tc-fix-w5: decode + 2raf + bitmap',
    idea: 'Standard img.decode + double requestAnimationFrame after decode + tc-lab-draw-create-imageBitmap draw path',
    notes: 'Decode timing + createImageBitmap blit; FO raster only — no text bypass.',
    labToCanvasOpts: { decodeRaf: true },
    monkeypatch: 'tc-lab-draw-create-image-bitmap',
  },
  {
    id: 'tc-fix-w5-capture-pin-lh-live',
    label: 'tc-fix-w5: capture pin lh live',
    idea: 'Capture radical h2-pin-line-height-from-live — measured line-height px on FO text leaves from live DOM',
    notes: 'Harness applyH2RadicalSvgPatch at capture; requires liveRoot; FO raster only — no text bypass.',
    inject: 'capture',
    css: FO_BASELINE_CSS,
    radicalPatch: 'h2-pin-line-height-from-live',
  },
  {
    id: 'tc-fix-w5-combo-rfork-lh-tc-ceil',
    label: 'tc-fix-w5: rfork lh pin + backing ceil',
    idea: 'Raster fork inject-fo-lh-pin (21.6px) + labToCanvas backingRound ceil combined',
    notes: 'Combo raster CSS fork + backing ceil; FO raster only — no text bypass.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'inject-fo-lh-pin',
      backingRound: 'ceil',
    },
  },
]

if (SPECS.length !== 6) {
  throw new Error(
    `recipes-tocanvas-fix-wave5.js: expected 6 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, radicalPatch, monkeypatch, css, inject, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w5',
    active: true,
    labToCanvasOpts,
    ...(radicalPatch ? { radicalPatch } : {}),
    ...(monkeypatch ? { monkeypatch } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-fix-wave5.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.radicalPatch ?? '',
    r.monkeypatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave5.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W5_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
