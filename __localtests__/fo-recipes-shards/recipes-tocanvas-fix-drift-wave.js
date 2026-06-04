/**
 * Drift proposals — wired from fo-drift-fix-proposals-50.md (FO raster only).
 *
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-drift-*' \
 *     --landmark Home --limit 25
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

/** Capture: leading-trim both-edges on FO text (proposal #005). */
const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

/** Capture: inline-block linebox on single-line text leaves (proposal #007). */
const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

/** Capture: line-height normal on text leaves (proposal #039). */
const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const W7_HALF_LEADING_OPTS = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

/** @type {{ id: string, label: string, idea: string, notes: string, active?: boolean, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, radicalPatch?: string, harnessSnapdom?: Record<string, boolean>, harnessProductToCanvas?: Record<string, unknown>, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, rasterPatch?: string }} */
const SPECS = [
  {
    id: 'tc-fix-drift-001-capture-fo-height-linepx',
    label: 'tc-fix-drift-001: FO height linePx',
    idea: 'Capture radical: pin text-leaf height from getClientRects line box (not stretch parent)',
    notes: 'lab-pin-inline-box-height-from-clientrects; FO raster only.',
    inject: 'both',
    radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
    css: FO_BASELINE_CSS,
  },
  {
    id: 'tc-fix-drift-002-capture-fo-y-content-origin',
    label: 'tc-fix-drift-002: FO content origin',
    idea: 'Capture radical: padding-top from cap ink topInBorder (content-box vs flex stretch border)',
    notes: 'lab-pin-ink-top-in-border-padding; FO raster only.',
    inject: 'both',
    radicalPatch: 'lab-pin-ink-top-in-border-padding',
    css: FO_BASELINE_CSS,
  },
  {
    id: 'tc-fix-drift-003-rfork-fo-y-half-leading-dpr-scale',
    label: 'tc-fix-drift-003: w7 y + dpr SVG root',
    idea: 'Raster fork FO y −½(lh−fs) + SVG root width/height × caller dpr (no extra multiplier)',
    notes: 'fo-y-half-leading-dpr-root-meta + dprScaledSvgRootDraw; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
      dprScaledSvgRootDraw: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-004-rfork-leaf-translate-y-half-leading',
    label: 'tc-fix-drift-004: leaf translateY ½lh',
    idea: 'Raster fork: text leaf translateY(−½(lh−fs)) at decode from live meta',
    notes: 'text-leaf-translate-y-half-leading-meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-005-capture-leading-trim-both-edges',
    label: 'tc-fix-drift-005: capture trim both-edges',
    idea: 'Capture: leading-trim:both-edges + text-box-trim on FO * at serialize',
    notes: 'experimentalFoLeadingTrim + capture CSS; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    harnessSnapdom: { experimentalFoLeadingTrim: true },
  },
  {
    id: 'tc-fix-drift-006-rfork-trim-text-box-leaf-decode',
    label: 'tc-fix-drift-006: decode trim text-box',
    idea: 'Raster fork: leading-trim + text-box-trim on FO text leaves at decode',
    notes: 'leading-trim-text-box-leaf; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-007-capture-inline-block-linebox-leaf',
    label: 'tc-fix-drift-007: inline-block linebox leaf',
    idea: 'Capture: display:inline-block + live text-leaf normalize from getComputedStyle',
    notes: 'experimentalFoTextLeafNormalize + structural leaf CSS; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    harnessSnapdom: { experimentalFoTextLeafNormalize: true },
  },
  {
    id: 'tc-fix-drift-008-rfork-inline-block-linebox-decode',
    label: 'tc-fix-drift-008: decode inline-block linebox',
    idea: 'Raster fork: inline-block linebox on FO text leaves at decode',
    notes: 'text-leaf-inline-block-linebox; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-009-capture-flex-item-min-width-zero',
    label: 'tc-fix-drift-009: flex min-width 0',
    idea: 'Capture: min-width:0 on flex/grid FO descendants (global structural normalize)',
    notes: 'experimentalFoTextLayout Chromium copy block; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS,
    harnessSnapdom: { experimentalFoTextLayout: true },
  },
  {
    id: 'tc-fix-drift-010-rfork-fo-overflow-hidden-linebox',
    label: 'tc-fix-drift-010: FO linepx overflow',
    idea: 'Raster fork: FO height=live lineHeightPx + border-box + overflow:hidden',
    notes: 'fo-box-linepx-overflow; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-box-linepx-overflow',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-011-capture-align-self-flex-start-leaf',
    label: 'tc-fix-drift-011: capture flex-start leaf',
    idea: 'Capture: align-self:flex-start on flex/grid text leaves at serialize',
    notes: 'experimentalFoFlexTextLeafAlignStart; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS,
    harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
  },
  {
    id: 'tc-fix-drift-012-rfork-fo-align-items-flex-start',
    label: 'tc-fix-drift-012: FO flex-start',
    idea: 'Raster fork: align-items:flex-start on FO flex containers at decode',
    notes: 'flex-container-flex-start; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'flex-container-flex-start',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-013-capture-lh-used-pin-leaf',
    label: 'tc-fix-drift-013: capture pin lh leaf',
    idea: 'Capture: pin line-height to live used px on FO text leaves',
    notes: 'experimentalFoPinLineHeightOnTextLeaf; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS,
    harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
  },
  {
    id: 'tc-fix-drift-014-rfork-lh-meta-leaf-decode',
    label: 'tc-fix-drift-014: decode lh meta leaf',
    idea: 'Raster fork: meta-derived line-height on FO text leaves at decode',
    notes: 'lh-meta-leaf; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'lh-meta-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-016-rfork-strut-translate-y-meta',
    label: 'tc-fix-drift-016: strut translateY meta',
    idea: 'Raster fork: translateY(−½(lh−fs)) on FO text leaves from live meta',
    notes: 'strut-translate-y-meta; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'strut-translate-y-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-017-rfork-fo-y-strut-range-meta',
    label: 'tc-fix-drift-017: FO y strut range',
    idea: 'Raster fork: FO y from Range union strut meta (structural, not gate px)',
    notes: 'fo-y-strut-range-meta; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-strut-range-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-018-rfork-viewbox-y-half-leading-meta',
    label: 'tc-fix-drift-018: viewBox y half-leading',
    idea: 'Raster fork: shift SVG viewBox min-y by half-leading meta',
    notes: 'viewbox-y-half-leading-meta; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'viewbox-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-019-rfork-combo-fo-y-linebox-height',
    label: 'tc-fix-drift-019: w7 y + linebox height',
    idea: 'Raster fork: FO y −½(lh−fs) + height locked to linePx',
    notes: 'combo-fo-y-half-leading-linebox; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-linebox',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-020-rfork-combo-fo-y-leading-trim',
    label: 'tc-fix-drift-020: w7 y + leading-trim',
    idea: 'Raster fork: FO y −½(lh−fs) + leading-trim/text-box-trim on text leaves',
    notes: 'combo-fo-y-half-leading-trim-text-box; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-022-rfork-fo-clip-inset-zero-linebox',
    label: 'tc-fix-drift-022: w7 y + clip inset zero',
    idea: 'Raster fork: FO y half-leading + clip inset zero to linebox',
    notes: 'combo-fo-y-half-leading-clip-inset-zero; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-clip-inset-zero',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-024-rfork-double-fo-outer-inner-linebox',
    label: 'tc-fix-drift-024: double FO linebox',
    idea: 'Raster fork: outer stretch FO + inner linebox FO for paint origin isolation',
    notes: 'double-fo-outer-full-inner-linebox; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'double-fo-outer-full-inner-linebox',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-026-rfork-remove-flex-display-a-decode',
    label: 'tc-fix-drift-026: remove flex on FO a',
    idea: 'Raster fork: strip display:flex from FO subtree at decode',
    notes: 'remove-flex-display-a; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'remove-flex-display-a',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-028-rfork-font-kerning-normal-chromium',
    label: 'tc-fix-drift-028: chromium kerning',
    idea: 'Raster fork: font-kerning:normal + Chromium text render copies on FO leaves',
    notes: 'chromium-font-render-leaf + H2 normalize CSS; FO raster only.',
    active: false,
    inject: 'raster',
    css: H2_RASTER_NORMALIZE_CSS,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'chromium-font-render-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-030-rfork-box-sizing-border-box-decode',
    label: 'tc-fix-drift-030: decode border-box',
    idea: 'Raster inject: foreignObject * box-sizing:border-box at decode',
    notes: 'H2 raster normalize (modern-screenshot structural); FO raster only.',
    inject: 'raster',
    css: H2_RASTER_NORMALIZE_CSS,
    labToCanvasOpts: { disableGbcrFracNudge: true },
  },
  {
    id: 'tc-fix-drift-032-rfork-draw-image-interval-100ms',
    label: 'tc-fix-drift-032: drawImageInterval 100ms',
    idea: 'Post-decode drawImageInterval wait (upstream 100ms default) before FO ink draw',
    notes: 'decode-interval rasterPatch; FO raster only.',
    active: false,
    rasterPatch: 'decode-interval',
    labToCanvasOpts: { disableGbcrFracNudge: true },
  },
  {
    id: 'tc-fix-drift-033-rfork-fix-svg-xml-decode-retry',
    label: 'tc-fix-drift-033: decode retry passes',
    idea: 'Multi-pass lab wait-decode until FO fonts ready (structural robustness)',
    notes: 'lab-toCanvas-wait-decode ×3 passes; FO raster only.',
    active: false,
    rasterPatch: 'lab-toCanvas-wait-decode',
    labToCanvasOpts: { decodePasses: 3, disableGbcrFracNudge: true },
  },
  {
    id: 'tc-fix-drift-035-rfork-fo-height-unset-overflow-visible',
    label: 'tc-fix-drift-035: height unset + overflow',
    idea: 'Raster fork: FO height unset + overflow visible (strut not clipped by stretch)',
    notes: 'combo-fo-y-half-leading-height-unset-overflow-visible; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-height-unset-overflow-visible',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-036-rfork-combo-height-unset-w7-y',
    label: 'tc-fix-drift-036: w7 y + linebox overflow',
    idea: 'Raster fork: FO y −½(lh−fs) + height=linePx + overflow:hidden',
    notes: 'combo-fo-y-half-leading-box-overflow; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-box-overflow',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-039-capture-line-height-normal-important',
    label: 'tc-fix-drift-039: lh normal important',
    idea: 'Capture: line-height:normal!important on FO text leaves at serialize',
    notes: 'experimentalFoTextLineHeightNormal + capture CSS; FO raster only.',
    active: false,
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
    harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
  },
  {
    id: 'tc-fix-drift-040-rfork-lh-normal-leaf-decode',
    label: 'tc-fix-drift-040: decode lh normal leaf',
    idea: 'Raster fork: line-height:normal on FO text leaves at decode',
    notes: 'lh-normal-leaf; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'lh-normal-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-041-rfork-fo-y-fontbox-meta',
    label: 'tc-fix-drift-041: FO y fontbox meta',
    idea: 'Raster fork: FO y shift from font bounding box vs content box meta',
    notes: 'fo-y-half-leading-fontbox-meta; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-fontbox-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-042-rfork-fo-y-used-line-height-meta',
    label: 'tc-fix-drift-042: FO y used lh meta',
    idea: 'Raster fork: FO y from used line-height strut meta',
    notes: 'fo-y-half-leading-used-meta; FO raster only.',
    active: false,
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-used-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-045-rfork-root-fo-only-half-leading',
    label: 'tc-fix-drift-045: w7 root FO only',
    idea: 'Raster fork: FO y −½(lh−fs) on outermost FO per subtree only',
    notes: 'fo-y-half-leading-root-fo-only-meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-root-fo-only-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-049-capture-flex-cross-stretch-decouple',
    label: 'tc-fix-drift-049: flex cross decouple',
    idea: 'Capture radical: FO height = linePx + align-self:flex-start under stretch rows',
    notes: 'lab-pin-flex-cross-size-from-anchor; FO raster only.',
    inject: 'both',
    radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
    css: FO_BASELINE_CSS,
  },
  {
    id: 'tc-fix-drift-050-promote-w7-default-off-flag',
    label: 'tc-fix-drift-050: product w7 flag',
    idea: 'Product toCanvas: experimentalRasterSvgPatch fo-y-half-leading-meta (default-off in src)',
    notes: 'harnessProductToCanvas mirror — lab matrix A/B vs product path; FO raster only.',
    active: false,
    inject: 'both',
    css: FO_BASELINE_CSS,
    rasterPatch: 'product-toCanvas',
    harnessProductToCanvas: {
      experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      experimentalRasterDisableGbcrNudge: true,
    },
  },
  {
    id: 'tc-fix-drift-w7-rfork-fo-y-half-leading-meta',
    label: 'tc-fix-drift: w7 FO y alias',
    idea: 'Raster fork: foreignObject y −½(lh−fs) from live meta (tc-fix-w7 alias)',
    notes: 'Same patch as tc-fix-w7-rfork-fo-y-half-leading-meta; FO raster only.',
    active: false,
    labToCanvasOpts: W7_HALF_LEADING_OPTS,
  },
]

const EXPECTED_ACTIVE = 23
const ACTIVE_COUNT = SPECS.filter((s) => s.active !== false).length
if (ACTIVE_COUNT !== EXPECTED_ACTIVE) {
  throw new Error(
    `recipes-tocanvas-fix-drift-wave.js: expected ${EXPECTED_ACTIVE} active specs, got ${ACTIVE_COUNT}`,
  )
}

if (SPECS.length !== 36) {
  throw new Error(
    `recipes-tocanvas-fix-drift-wave.js: expected 36 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const {
    labToCanvasOpts,
    harnessSnapdom,
    harnessProductToCanvas,
    radicalPatch,
    css,
    inject,
    rasterPatch,
    active,
    ...rest
  } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: rasterPatch ?? 'lab-toCanvas',
    category: 'tc-fix-drift-wave',
    active: active !== false,
    ...(radicalPatch ? { radicalPatch } : {}),
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...(harnessProductToCanvas ? { harnessProductToCanvas } : {}),
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 36) {
  throw new Error('recipes-tocanvas-fix-drift-wave.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.radicalPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-drift-wave.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_DRIFT_WAVE_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
