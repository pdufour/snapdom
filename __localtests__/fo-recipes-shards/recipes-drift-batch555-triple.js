/**
 * Drift batch 555 — SVG root round + decode triple alignment (drift-batch555-001..040).
 * Lane theme: svgRootRound (integer-viewbox | int-floor | round-dims) × decode timing ×
 * one normalize (w7 half-leading | leading-trim | inline-block) + raster specials.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch555-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch555-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'int-vb-settle-w7-dpr',
    label: 'integer-viewbox + decode-settle + w7 dpr root',
    idea: 'svgRootRound integer-viewbox + decodeSettle + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'int-vb-interval-w7',
    label: 'integer-viewbox + decode-interval + w7 meta',
    idea: 'integer-viewbox snap + decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-vb-double-w7',
    label: 'integer-viewbox + double-decode + w7 meta',
    idea: 'integer-viewbox + double-decode raster + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-vb-fonts-w7',
    label: 'integer-viewbox + fonts-ready + w7 meta',
    idea: 'integer-viewbox + fonts.ready pre-raster + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-vb-decode100-w7',
    label: 'integer-viewbox + lab-decode-100ms + w7 meta',
    idea: 'integer-viewbox + lab-decode-100ms wait + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labRasterPatches: ['lab-decode-100ms'],
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-vb-decode200-w7-dpr',
    label: 'integer-viewbox + lab-decode-200ms + w7 dpr root',
    idea: 'integer-viewbox + lab-decode-200ms + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-decode-200ms',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'int-vb-decode-raf-w7',
    label: 'integer-viewbox + lab-decode-raf + w7 meta',
    idea: 'integer-viewbox + lab-decode-raf + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labRasterPatches: ['lab-decode-raf'],
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-vb-settle-trim',
    label: 'integer-viewbox + decode-settle + leading-trim capture',
    idea: 'integer-viewbox + decodeSettle + experimentalFoLeadingTrim capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'int-vb-interval-inline',
    label: 'integer-viewbox + decode-interval + inline-block capture',
    idea: 'integer-viewbox + decode-interval + inline-block linebox leaf capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    lane: 'int-vb-fonts-intv-w7-dpr',
    label: 'integer-viewbox + fonts-ready-interval + w7 dpr root',
    idea: 'integer-viewbox + fonts-ready-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'int-floor-settle-w7',
    label: 'int-floor + decode-settle + w7 meta',
    idea: 'svgRootRound int-floor + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'int-floor-interval-w7-dpr',
    label: 'int-floor + decode-interval + w7 dpr root',
    idea: 'int-floor root snap + decode-interval + dpr-scaled SVG root meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'int-floor-double-trim',
    label: 'int-floor + double-decode + leading-trim capture',
    idea: 'int-floor + double-decode + leading-trim both-edges capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'double-decode',
      svgRootRound: 'int-floor',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    lane: 'int-floor-fonts-inline',
    label: 'int-floor + fonts-ready + inline-block capture',
    idea: 'int-floor + fonts-ready + inline-block linebox leaf capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'fonts-ready',
      svgRootRound: 'int-floor',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    lane: 'int-floor-decode100-w7',
    label: 'int-floor + lab-decode-100ms + w7 meta',
    idea: 'int-floor + lab-decode-100ms + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      labRasterPatches: ['lab-decode-100ms'],
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-floor-decode200-trim',
    label: 'int-floor + lab-decode-200ms + leading-trim capture',
    idea: 'int-floor + lab-decode-200ms + leading-trim capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'lab-decode-200ms',
      svgRootRound: 'int-floor',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    lane: 'int-floor-decode-raf-inline',
    label: 'int-floor + lab-decode-raf + inline-block capture',
    idea: 'int-floor + lab-decode-raf + inline-block linebox leaf capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      labRasterPatches: ['lab-decode-raf'],
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    lane: 'int-floor-settle-trim-w7',
    label: 'int-floor + decode-settle + leading-trim + w7',
    idea: 'int-floor + decodeSettle + leading-trim capture + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'int-floor-interval-inline-w7',
    label: 'int-floor + decode-interval + inline-block + w7',
    idea: 'int-floor + decode-interval + inline-block capture + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'int-floor-fonts-w7-dpr',
    label: 'int-floor + fonts-ready + w7 dpr root',
    idea: 'int-floor + fonts-ready + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'round-dims-settle-w7-dpr',
    label: 'round-dims + decode-settle + w7 dpr root',
    idea: 'svgRootRound round-dims + decodeSettle + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'round-dims-interval-w7',
    label: 'round-dims + decode-interval + w7 meta',
    idea: 'round-dims root + decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'round-dims-double-inline',
    label: 'round-dims + double-decode + inline-block capture',
    idea: 'round-dims + double-decode + inline-block linebox leaf capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'double-decode',
      svgRootRound: 'round-dims',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    lane: 'round-dims-fonts-trim',
    label: 'round-dims + fonts-ready + leading-trim capture',
    idea: 'round-dims + fonts-ready + leading-trim both-edges capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'fonts-ready',
      svgRootRound: 'round-dims',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    lane: 'round-dims-decode100-w7-dpr',
    label: 'round-dims + lab-decode-100ms + w7 dpr root',
    idea: 'round-dims + lab-decode-100ms + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      labRasterPatches: ['lab-decode-100ms'],
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'round-dims-decode200-w7',
    label: 'round-dims + lab-decode-200ms + w7 meta',
    idea: 'round-dims + lab-decode-200ms + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-decode-200ms',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'round-dims-decode-raf-trim',
    label: 'round-dims + lab-decode-raf + leading-trim capture',
    idea: 'round-dims + lab-decode-raf + leading-trim capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      labRasterPatches: ['lab-decode-raf'],
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    lane: 'round-dims-settle-inline',
    label: 'round-dims + decode-settle + inline-block capture',
    idea: 'round-dims + decodeSettle + inline-block linebox leaf capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'round-dims-interval-trim-w7',
    label: 'round-dims + decode-interval + leading-trim + w7',
    idea: 'round-dims + decode-interval + leading-trim + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'decode-interval',
      svgRootRound: 'round-dims',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'round-dims-fonts-intv-w7-dpr',
    label: 'round-dims + fonts-ready-interval + w7 dpr root',
    idea: 'round-dims + fonts-ready-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'wf-031-batch1-029-int-vb-settle',
    label: 'wf batch1-029: dpr root + int-vb + decode-settle',
    idea: 'drift-batch1-029 rfork: dprScaledSvgRootDraw + integer-viewbox + decodeSettle',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true, decodeSettle: true },
    },
  },
  {
    lane: 'wf-032-batch1-029-int-floor-interval',
    label: 'wf batch1-029: dpr root + int-floor + decode-interval',
    idea: 'drift-batch1-029 rfork: dpr root + int-floor + decode-interval timing',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'wf-033-batch1-029-round-dims-fonts',
    label: 'wf batch1-029: dpr root + round-dims + fonts-ready',
    idea: 'drift-batch1-029 rfork: dpr root + round-dims + fonts-ready pre-raster',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      labPreRaster: 'fonts-ready',
      labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'wf-034-batch1-030-h2-int-vb-w7',
    label: 'wf batch1-030: h2 capture + int-vb + w7 meta',
    idea: 'drift-batch1-030 rfork: H2_RASTER_NORMALIZE_CSS capture + integer-viewbox + w7 meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'wf-035-batch1-030-h2-int-floor-w7-dpr',
    label: 'wf batch1-030: h2 capture + int-floor + w7 dpr',
    idea: 'drift-batch1-030 rfork: h2 foNormalize + int-floor + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'wf-036-tc-drift-039-round-dims-w7-dpr',
    label: 'wf tc-fix-drift-039: lh-normal + round-dims + w7 dpr',
    idea: 'tc-fix-drift-039 rfork: lh normal capture + round-dims + w7 dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      harnessSnapdom: {"experimentalFoTextLineHeightNormal":true},
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'wf-037-batch2-036-googlefonts-int-vb',
    label: 'wf batch2-036: googlefonts + int-vb + dpr interval w7',
    idea: 'drift-batch2-036 rfork: googlefonts embed + integer-viewbox + decode-interval + w7 dpr',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
      harnessSnapdom: {"embedFonts":true},
      labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta', disableGbcrFracNudge: true, dprScaledSvgRootDraw: true },
    },
  },
  {
    lane: 'wf-038-batch2-036-googlefonts-round-settle',
    label: 'wf batch2-036: googlefonts + round-dims + decode-settle w7 dpr',
    idea: 'drift-batch2-036 rfork: googlefonts + round-dims + decodeSettle + w7 dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      harnessSnapdom: {"embedFonts":true},
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'wf-039-batch1-040-full-int-floor-interval',
    label: 'wf batch1-040: full stack + int-floor + decode-interval',
    idea: 'drift-batch1-040 rfork: h2+googlefonts + int-floor + decode-interval + w7 dpr',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
      harnessSnapdom: {"embedFonts":true},
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'wf-040-batch1-040-full-round-double-decode',
    label: 'wf batch1-040: full stack + round-dims + double-decode',
    idea: 'drift-batch1-040 rfork: full stack + round-dims + double-decode + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      rasterPatch: 'double-decode',
      svgRootRound: 'round-dims',
      harnessSnapdom: {"embedFonts":true},
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  }
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch555-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch555-037',
  'drift-batch555-038',
  'drift-batch555-039',
  'drift-batch555-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch555-${num}`,
    label: `drift-batch555 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch555',
    active: DRIFT_BATCH_KEEP_ACTIVE.size === 0 || DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch555-${num}`),
    notes: `Drift batch 555 lane=${spec.lane}; SVG root + decode triple-alignment; FO raster only.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    (r.labRasterPatches ?? []).join(','),
    r.labPreRaster ?? '',
    r.labLoadPipeline ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) throw new Error(`recipes-drift-batch555-triple: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const DRIFT_BATCH555_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
