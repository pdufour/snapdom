/**
 * Drift batch 32222 — 40 triple-alignment probes (drift-batch32222-001..040).
 * Lane theme: capture radicalPatch + harnessSnapdom + single decode path.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch32222-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch32222-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important;' +
  'text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}' +
  'foreignObject *{box-sizing:border-box!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const PIN_INLINE = 'lab-pin-inline-box-height-from-clientrects'
const PIN_INK = 'lab-pin-ink-top-in-border-padding'

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'pin-inline-settle',
    label: 'pin-inline + product decode-settle',
    idea: 'lab-pin-inline-box-height-from-clientrects + product decodeSettle raster',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'pin-inline-interval',
    label: 'pin-inline + decode-interval',
    idea: 'lab-pin-inline-box-height-from-clientrects + decode-interval lab raster',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-inline-100ms',
    label: 'pin-inline + lab-decode-100ms',
    idea: 'lab-pin-inline-box-height-from-clientrects + lab-decode-100ms wait',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'pin-ink-settle',
    label: 'pin-ink-top + decode-settle',
    idea: 'lab-pin-ink-top-in-border-padding + lab decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INK,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'pin-ink-interval',
    label: 'pin-ink-top + decode-interval',
    idea: 'lab-pin-ink-top-in-border-padding + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INK,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-ink-100ms',
    label: 'pin-ink-top + lab-decode-100ms',
    idea: 'lab-pin-ink-top-in-border-padding + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INK,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'pin-inline-trim-settle',
    label: 'pin-inline + leadingTrim + decode-settle',
    idea: 'pin-inline radical + experimentalFoLeadingTrim + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'pin-inline-leafnorm-interval',
    label: 'pin-inline + textLeafNorm + decode-interval',
    idea: 'pin-inline + experimentalFoTextLeafNormalize + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-inline-layout-100ms',
    label: 'pin-inline + textLayout + lab-decode-100ms',
    idea: 'pin-inline + experimentalFoTextLayout + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoTextLayout: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'pin-inline-flex-settle',
    label: 'pin-inline + flexStart + decode-settle',
    idea: 'pin-inline + experimentalFoFlexTextLeafAlignStart + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'pin-inline-chromium-interval',
    label: 'pin-inline + chromium + decode-interval',
    idea: 'pin-inline + experimentalFoChromiumText + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-ink-trim-settle',
    label: 'pin-ink + leadingTrim + decode-settle',
    idea: 'pin-ink + experimentalFoLeadingTrim + product decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'pin-ink-inline-interval',
    label: 'pin-ink + inline-block css + decode-interval',
    idea: 'pin-ink + inline-block capture CSS + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-ink-layout-100ms',
    label: 'pin-ink + textLayout + lab-decode-100ms',
    idea: 'pin-ink + experimentalFoTextLayout + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoTextLayout: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'mp-h2-pin-inline-settle',
    label: 'mp h2-normalize + pin-inline + decode-settle',
    idea: 'h2-fo-normalize-full + pin-inline + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'h2-fo-normalize-full',
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'mp-h2-pin-ink-interval',
    label: 'mp h2-normalize + pin-ink + decode-interval',
    idea: 'h2-fo-normalize-full + pin-ink + decode-interval',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'h2-fo-normalize-full',
      radicalPatch: PIN_INK,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'mp-capture-pin-inline-100ms',
    label: 'mp capture-recipe + pin-inline + lab-decode-100ms',
    idea: 'capture-recipe-css + pin-inline + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'capture-recipe-css',
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'mp-google-pin-ink-settle',
    label: 'mp googlefonts + pin-ink + decode-settle',
    idea: 'googlefonts-embed-capture + pin-ink + product decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'googlefonts-embed-capture',
      radicalPatch: PIN_INK,
      harnessSnapdom: { embedFonts: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'mp-decode-proto-pin-inline-interval',
    label: 'mp decode-interval-prototype + pin-inline + interval',
    idea: 'decode-interval-prototype monkeypatch + pin-inline + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'decode-interval-prototype',
      radicalPatch: PIN_INLINE,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'h2-pin-inline-settle',
    label: 'H2_RASTER css + pin-inline + decode-settle',
    idea: 'H2 raster normalize CSS inject + pin-inline + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'h2-pin-ink-interval',
    label: 'H2_RASTER css + pin-ink + decode-interval',
    idea: 'H2 raster normalize CSS + pin-ink + decode-interval',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: PIN_INK,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'h2-chromium-pin-inline-100ms',
    label: 'H2 + chromium + pin-inline + lab-decode-100ms',
    idea: 'H2 normalize CSS + chromium capture + pin-inline + 100ms decode wait',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'pin-inline-trim-harness-settle',
    label: 'pin-inline + trim harness only + settle',
    idea: 'pin-inline radical + experimentalFoLeadingTrim (no extra trim CSS) + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'pin-ink-leafnorm-interval',
    label: 'pin-ink + textLeafNorm harness + interval',
    idea: 'pin-ink + experimentalFoTextLeafNormalize + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-inline-flex-100ms',
    label: 'pin-inline + flexStart + lab-decode-100ms',
    idea: 'pin-inline + experimentalFoFlexTextLeafAlignStart + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'pin-ink-chromium-settle',
    label: 'pin-ink + chromium harness + decode-settle',
    idea: 'pin-ink + experimentalFoChromiumText + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'mp-h2-capture-pin-inline-settle',
    label: 'mp h2 + capture-recipe + pin-inline + settle',
    idea: 'h2-fo-normalize-full + capture-recipe-css + pin-inline + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ['h2-fo-normalize-full', 'capture-recipe-css'],
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'mp-triple-pin-ink-interval',
    label: 'mp h2+capture+google + pin-ink + interval',
    idea: 'h2 + capture-recipe + googlefonts embed + pin-ink + decode-interval',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: [
        'h2-fo-normalize-full',
        'capture-recipe-css',
        'googlefonts-embed-capture',
      ],
      radicalPatch: PIN_INK,
      harnessSnapdom: { embedFonts: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-inline-inline-h2-settle',
    label: 'pin-inline + inline css + H2 + decode-settle',
    idea: 'pin-inline + inline-block linebox CSS + H2 raster CSS + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      radicalPatch: PIN_INLINE,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'pin-ink-trim-h2-interval',
    label: 'pin-ink + trim css + H2 + decode-interval',
    idea: 'pin-ink + leading-trim capture CSS + H2 normalize + decode-interval',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-inline-layout-flex-100ms',
    label: 'pin-inline + layout+flex harness + 100ms',
    idea: 'pin-inline + textLayout + flexStart harness + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: {
        experimentalFoTextLayout: true,
        experimentalFoFlexTextLeafAlignStart: true,
      },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'mp-google-h2-pin-ink-settle',
    label: 'mp google+h2 + pin-ink + decode-settle',
    idea: 'googlefonts + h2-fo-normalize-full + pin-ink + decodeSettle',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ['googlefonts-embed-capture', 'h2-fo-normalize-full'],
      radicalPatch: PIN_INK,
      harnessSnapdom: { embedFonts: true },
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'mp-capture-h2-pin-inline-100ms',
    label: 'mp capture+h2 + pin-inline + 100ms',
    idea: 'capture-recipe-css + h2 normalize + pin-inline + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
      monkeypatch: ['capture-recipe-css', 'h2-fo-normalize-full'],
      radicalPatch: PIN_INLINE,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'full-pin-inline-chromium-interval',
    label: 'full: h2 mp + pin-inline + chromium + interval',
    idea: 'h2 mp + pin-inline + experimentalFoChromiumText + decode-interval',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
      monkeypatch: 'h2-fo-normalize-full',
      radicalPatch: PIN_INLINE,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-ink-lh-normal-settle',
    label: 'pin-ink + lh-normal css + decode-settle',
    idea: 'pin-ink + line-height:normal capture CSS + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'pin-inline-trim-flex-interval',
    label: 'pin-inline + trim+flex harness + interval',
    idea: 'pin-inline + leadingTrim + flexStart harness + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      radicalPatch: PIN_INLINE,
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoFlexTextLeafAlignStart: true,
      },
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'pin-ink-h2-flex-100ms',
    label: 'pin-ink + H2 + flexStart + 100ms',
    idea: 'pin-ink + H2 css + experimentalFoFlexTextLeafAlignStart + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: PIN_INK,
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
    },
  },
  {
    lane: 'mp-decode-proto-pin-ink-settle',
    label: 'mp decode-proto + pin-ink + decode-settle',
    idea: 'decode-interval-prototype mp + pin-ink + lab decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'decode-interval-prototype',
      radicalPatch: PIN_INK,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'mp-capture-pin-ink-interval',
    label: 'mp capture-recipe + pin-ink + decode-interval',
    idea: 'capture-recipe-css monkeypatch + pin-ink + decode-interval (no h2 mp)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'capture-recipe-css',
      radicalPatch: PIN_INK,
      rasterPatch: 'decode-interval',
    },
  },
  {
    lane: 'max-capture-radical-decode',
    label: 'max: h2+google+capture + pin-inline + settle+100ms',
    idea: 'Max capture stack: h2 + googlefonts + capture-recipe + pin-inline + decodeSettle + lab-decode-100ms',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES + CHROMIUM_COPY,
      monkeypatch: [
        'h2-fo-normalize-full',
        'googlefonts-embed-capture',
        'capture-recipe-css',
      ],
      radicalPatch: PIN_INLINE,
      harnessSnapdom: {
        embedFonts: true,
        experimentalFoLeadingTrim: true,
        experimentalFoTextLayout: true,
      },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
      labToCanvasOpts: { decodeSettle: true, disableGbcrFracNudge: true },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch32222-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch32222-001',
  'drift-batch32222-002',
  'drift-batch32222-003',
  'drift-batch32222-004',
  'drift-batch32222-005',
  'drift-batch32222-006',
  'drift-batch32222-007',
  'drift-batch32222-009',
  'drift-batch32222-010',
  'drift-batch32222-011',
  'drift-batch32222-012',
  'drift-batch32222-014',
  'drift-batch32222-015',
  'drift-batch32222-016',
  'drift-batch32222-017',
  'drift-batch32222-018',
  'drift-batch32222-019',
  'drift-batch32222-020',
  'drift-batch32222-021',
  'drift-batch32222-022',
  'drift-batch32222-023',
  'drift-batch32222-024',
  'drift-batch32222-025',
  'drift-batch32222-026',
  'drift-batch32222-027',
  'drift-batch32222-028',
  'drift-batch32222-030',
  'drift-batch32222-031',
  'drift-batch32222-032',
  'drift-batch32222-033',
  'drift-batch32222-034',
  'drift-batch32222-036',
  'drift-batch32222-037',
  'drift-batch32222-038',
  'drift-batch32222-039',
  'drift-batch32222-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch32222-${num}`,
    label: `drift-batch32222 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch32222',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch32222-${num}`),
    notes: `Drift batch 32222 lane=${spec.lane}; FO raster only — capture radical + decode probe.`,
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
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-drift-batch32222-triple: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH32222_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
