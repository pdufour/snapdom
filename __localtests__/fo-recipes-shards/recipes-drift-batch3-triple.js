/**
 * Drift batch 3 — 40 triple-align combos (live + svg + canvas ink tops).
 * Orthogonal to batch1; tc-fix-drift / radical / mp / decode-timing lanes.
 * FO raster only; no text bypass.
 *
 *   npm run debug:fo-drift-batch3-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const W7_HALF_LEADING_OPTS = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_HALF_LEADING_DPR_ROOT_OPTS = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

const DECODE_SETTLE_OPTS = { decodeSettle: true, disableGbcrFracNudge: true }

/** @type {{ n: number, slug: string, idea: string, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'tc-drift-003-dpr-root-fork-only',
    idea: 'tc-fix-drift-003 fork only: fo-y-half-leading-dpr-root-meta + dprScaledSvgRootDraw',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 2,
    slug: 'tc-drift-005-trim-decode-settle',
    idea: 'tc-fix-drift-005 leading-trim capture + lab decodeSettle',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: DECODE_SETTLE_OPTS,
    },
  },
  {
    n: 3,
    slug: 'tc-drift-007-inline-decode-interval',
    idea: 'tc-fix-drift-007 inline-block linebox capture + decode-interval',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    n: 4,
    slug: 'tc-drift-009-flex-w7-meta',
    idea: 'tc-fix-drift-009 flex min-width capture + fo-y-half-leading-meta decode fork',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoTextLayout: true },
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 5,
    slug: 'tc-drift-013-lh-pin-decode-settle',
    idea: 'tc-fix-drift-013 lh-used-pin capture + decodeSettle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
      labToCanvasOpts: DECODE_SETTLE_OPTS,
    },
  },
  {
    n: 6,
    slug: 'tc-w7-meta-decode-interval',
    idea: 'tc-fix-w7-rfork fo-y-half-leading-meta + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 7,
    slug: 'radical-clientrects-decode-settle',
    idea: 'lab-pin-inline-box-height-from-clientrects + decodeSettle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      labToCanvasOpts: DECODE_SETTLE_OPTS,
    },
  },
  {
    n: 8,
    slug: 'radical-ink-padding-w7-meta',
    idea: 'lab-pin-ink-top-in-border-padding + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 9,
    slug: 'decode-settle-round-dims-w7',
    idea: 'decodeSettle + svgRootRound round-dims + w7 half-leading meta',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { ...W7_HALF_LEADING_OPTS, decodeSettle: true },
    },
  },
  {
    n: 10,
    slug: 'fonts-ready-interval-w7-dpr-root',
    idea: 'fonts-ready-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'raster',
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 11,
    slug: 'mp-draw-pixelated-settle-w7',
    idea: 'mp draw-image-pixelated + decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'draw-image-pixelated',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_HALF_LEADING_OPTS, decodeSettle: true },
    },
  },
  {
    n: 12,
    slug: 'mp-decode-proto-trim-capture',
    idea: 'mp decode-interval-prototype + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'direct',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    n: 13,
    slug: 'h2-normalize-double-decode',
    idea: 'H2_RASTER_NORMALIZE capture inject + double-decode raster',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      rasterPatch: 'double-decode',
    },
  },
  {
    n: 14,
    slug: 'chromium-text-w7-dpr-decode-interval',
    idea: 'experimentalFoChromiumText + decode-interval + w7 dpr root',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoChromiumText: true },
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 15,
    slug: 'trim-inline-decode-settle',
    idea: 'experimentalFoLeadingTrim + inline-block linebox decode + decodeSettle',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
        decodeSettle: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 16,
    slug: 'leaf-normalize-w7-decode-interval',
    idea: 'experimentalFoTextLeafNormalize + w7 meta + decode-interval',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 17,
    slug: 'flex-start-dpr-decode-settle',
    idea: 'experimentalFoFlexTextLeafAlignStart + dpr root + decodeSettle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      labToCanvasOpts: {
        dprScaledSvgRootDraw: true,
        decodeSettle: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 18,
    slug: 'fo-box-overflow-w7-dpr-decode-interval',
    idea: 'fo-box-linepx-overflow + fo-y-half-leading-dpr-root-meta + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'fo-box-linepx-overflow',
        dprScaledSvgRootDraw: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 19,
    slug: 'flex-container-settle-no-gbcr',
    idea: 'flex-container-flex-start decode fork + decodeSettle + disableGbcrFracNudge',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'flex-container-flex-start',
        decodeSettle: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 20,
    slug: 'inline-linebox-dpr-decode-interval',
    idea: 'text-leaf-inline-block-linebox + decode-interval + dpr root',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
        dprScaledSvgRootDraw: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 21,
    slug: 'trim-leaf-decode-chromium-copy',
    idea: 'leading-trim-text-box-leaf decode + capture Chromium copy CSS',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    n: 22,
    slug: 'lh-normal-leaf-settle-w7',
    idea: 'lh-normal-leaf decode + decodeSettle + w7 meta',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'lh-normal-leaf',
        ...W7_HALF_LEADING_OPTS,
        decodeSettle: true,
      },
    },
  },
  {
    n: 23,
    slug: 'chromium-render-decode-raf-w7',
    idea: 'chromium-font-render-leaf + lab-decode-raf + fo-y-half-leading-meta',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-decode-raf',
      labToCanvasOpts: {
        ...W7_HALF_LEADING_OPTS,
        rasterOnlySvgPatch: 'chromium-font-render-leaf',
      },
    },
  },
  {
    n: 24,
    slug: 'integer-viewbox-settle-w7',
    idea: 'integer-viewbox + decodeSettle + w7 half-leading meta',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_HALF_LEADING_OPTS, decodeSettle: true },
    },
  },
  {
    n: 25,
    slug: 'int-floor-w7-decode-interval',
    idea: 'int-floor svg root + decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 26,
    slug: 'offscreen-w7-dpr-root',
    idea: 'offscreen-canvas raster + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'raster',
      rasterPatch: 'offscreen-canvas',
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 27,
    slug: 'device-grid-inline-settle',
    idea: 'device-grid-floor + decodeSettle + inline-block capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'device-grid-floor',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: DECODE_SETTLE_OPTS,
    },
  },
  {
    n: 28,
    slug: 'blob-interval-trim-w7',
    idea: 'blob-url-decode-interval + combo w7+trim fork',
    extra: {
      inject: 'raster',
      rasterPatch: 'blob-url-decode-interval',
      labToCanvasOpts: {
        ...W7_HALF_LEADING_OPTS,
        rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
      },
    },
  },
  {
    n: 29,
    slug: 'lab-decode-100ms-drift-003-opts',
    idea: 'lab-decode-100ms + tc-fix-drift-003 dpr root half-leading opts',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-decode-100ms',
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 30,
    slug: 'lab-decode-200ms-inline-w7',
    idea: 'lab-decode-200ms + inline-block capture + w7 meta',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-decode-200ms',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 31,
    slug: 'combo-clientrects-settle-dpr',
    idea: 'pin clientrects height + decodeSettle + dpr root half-leading',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      labToCanvasOpts: { ...W7_HALF_LEADING_DPR_ROOT_OPTS, decodeSettle: true },
    },
  },
  {
    n: 32,
    slug: 'combo-ink-padding-interval-trim',
    idea: 'pin ink padding + decode-interval + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    n: 33,
    slug: 'combo-mp-capture-css-drift003-settle',
    idea: 'mp capture-recipe-css + tc-fix-drift-003 opts + decodeSettle',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    extra: {
      inject: 'both',
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_HALF_LEADING_DPR_ROOT_OPTS, decodeSettle: true },
    },
  },
  {
    n: 34,
    slug: 'combo-mp-h2-trim-decode-interval',
    idea: 'mp h2-fo-normalize-full + tc-fix-drift-005 leading-trim + decode-interval',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    n: 35,
    slug: 'combo-mp-googlefonts-w7-settle',
    idea: 'mp googlefonts-embed + w7 meta + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...W7_HALF_LEADING_OPTS, decodeSettle: true },
    },
  },
  {
    n: 36,
    slug: 'combo-product-textlayout-interval-w7',
    idea: 'product-toCanvas + experimentalFoTextLayout + decode-interval + w7',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLayout: true },
      labToCanvasOpts: W7_HALF_LEADING_OPTS,
    },
  },
  {
    n: 37,
    slug: 'combo-double-raf-trim-w7-dpr',
    idea: 'double-raf + leading-trim capture + fo-y-half-leading-dpr-root-meta',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'double-raf',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: W7_HALF_LEADING_DPR_ROOT_OPTS,
    },
  },
  {
    n: 38,
    slug: 'combo-fonts-ready-inline-settle-w7-dpr',
    idea: 'fonts-ready + inline-block capture + decodeSettle + w7 dpr root',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'fonts-ready',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_HALF_LEADING_DPR_ROOT_OPTS, decodeSettle: true },
    },
  },
  {
    n: 39,
    slug: 'combo-h2-chromium-settle-w7-dpr',
    idea: 'h2 normalize mp + chromium text + decodeSettle + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoChromiumText: true },
      labToCanvasOpts: { ...W7_HALF_LEADING_DPR_ROOT_OPTS, decodeSettle: true },
    },
  },
  {
    n: 40,
    slug: 'max-triple-stack',
    idea: 'clientrects pin + leading-trim + inline-block + decodeSettle + w7 dpr + fonts-ready-interval',
    css:
      FO_BASELINE_CSS +
      CAPTURE_LEADING_TRIM_BOTH_EDGES +
      CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'fonts-ready-interval',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoTextLeafNormalize: true,
      },
      labToCanvasOpts: { ...W7_HALF_LEADING_DPR_ROOT_OPTS, decodeSettle: true },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch3-triple: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-drift-batch3-triple: duplicate slugs in SPECS')
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch3-001',
  'drift-batch3-002',
  'drift-batch3-005',
  'drift-batch3-006',
  'drift-batch3-009',
  'drift-batch3-010',
  'drift-batch3-013',
  'drift-batch3-014',
  'drift-batch3-017',
  'drift-batch3-018',
  'drift-batch3-021',
  'drift-batch3-022',
  'drift-batch3-025',
  'drift-batch3-026',
  'drift-batch3-029',
  'drift-batch3-033',
  'drift-batch3-034',
  'drift-batch3-037',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const fullCss = css ?? FO_BASELINE_CSS
  const rasterPatch =
    extra.rasterPatch ?? (extra.labToCanvasOpts || extra.radicalPatch ? 'lab-toCanvas' : undefined)
  return {
    id: `drift-batch3-${num}`,
    label: `drift-batch3 #${n}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'drift-batch3',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch3-${num}`),
    notes: 'drift-batch3 triple-align; FO raster only — no text bypass.',
    ...(rasterPatch ? { rasterPatch } : {}),
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-drift-batch3-triple: expected 40 recipes, got ${RECIPES.length}`)
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 40) {
  throw new Error('recipes-drift-batch3-triple: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-drift-batch3-triple: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH3_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
