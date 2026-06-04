/**
 * Wave 5 sandbox quick tests — tc-lab-w5-sb-001..030 (labToCanvasOpts grid).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-sb-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  { n: 1, slug: 'lab fork baseline', idea: 'Default lab toCanvas backing + harness dpr', extra: {} },
  {
    n: 2,
    slug: 'backing floor',
    idea: 'Floor device-pixel backing store before draw',
    extra: { labToCanvasOpts: { backingRound: 'floor' } },
  },
  {
    n: 3,
    slug: 'backing ceil',
    idea: 'Ceil backing width/height assignment',
    extra: { labToCanvasOpts: { backingRound: 'ceil' } },
  },
  {
    n: 4,
    slug: 'backing round',
    idea: 'Round backing store dimensions',
    extra: { labToCanvasOpts: { backingRound: 'round' } },
  },
  {
    n: 5,
    slug: 'dpr device',
    idea: 'Use window.devicePixelRatio instead of harness dpr',
    extra: { labToCanvasOpts: { dprSource: 'device' } },
  },
  {
    n: 6,
    slug: 'style device px',
    idea: 'Canvas style width/height in device pixels',
    extra: { labToCanvasOpts: { stylePixels: 'device' } },
  },
  {
    n: 7,
    slug: 'optDims natural',
    idea: 'Natural image dimensions for drawImage reference',
    extra: { labToCanvasOpts: { optDims: 'natural' } },
  },
  {
    n: 8,
    slug: 'ctxScale off',
    idea: 'Skip ctx.scale(dpr) — 1:1 backing blit',
    extra: { labToCanvasOpts: { ctxScale: false } },
  },
  {
    n: 9,
    slug: 'optDims harness-device',
    idea: 'Harness CSS size scaled to device pixels for draw',
    extra: { labToCanvasOpts: { optDims: 'harness-device' } },
  },
  {
    n: 10,
    slug: 'floor + device dpr',
    idea: 'Floor backing + device DPR source',
    extra: { labToCanvasOpts: { backingRound: 'floor', dprSource: 'device' } },
  },
  {
    n: 11,
    slug: 'ceil + style device',
    idea: 'Ceil backing + device-pixel canvas style',
    extra: { labToCanvasOpts: { backingRound: 'ceil', stylePixels: 'device' } },
  },
  {
    n: 12,
    slug: 'round + natural dims',
    idea: 'Round backing + natural drawImage dims',
    extra: { labToCanvasOpts: { backingRound: 'round', optDims: 'natural' } },
  },
  {
    n: 13,
    slug: 'device dpr + ctxScale off',
    idea: 'Device DPR without ctx.scale',
    extra: { labToCanvasOpts: { dprSource: 'device', ctxScale: false } },
  },
  {
    n: 14,
    slug: 'harness-device + floor',
    idea: 'Harness-device optDims + floor backing',
    extra: { labToCanvasOpts: { optDims: 'harness-device', backingRound: 'floor' } },
  },
  {
    n: 15,
    slug: 'FO baseline',
    idea: 'FO_BASELINE_CSS overflow/size-adjust + default lab fork',
    extra: { css: FO_BASELINE_CSS },
  },
  {
    n: 16,
    slug: 'integer viewBox',
    idea: 'Integer viewBox snap + lab fork',
    extra: { css: FO_BASELINE_CSS, svgRootRound: 'integer-viewbox' },
  },
  {
    n: 17,
    slug: 'H2 normalize',
    idea: 'H2_RASTER_NORMALIZE_CSS pre-raster inject',
    extra: { css: H2_RASTER_NORMALIZE_CSS },
  },
  {
    n: 18,
    slug: 'H2 + floor backing',
    idea: 'H2 normalize + floor backing store',
    extra: {
      css: H2_RASTER_NORMALIZE_CSS,
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 19,
    slug: 'FO + device dpr',
    idea: 'FO baseline + device DPR',
    extra: { css: FO_BASELINE_CSS, labToCanvasOpts: { dprSource: 'device' } },
  },
  {
    n: 20,
    slug: 'int-vb + ceil',
    idea: 'Integer viewBox + ceil backing',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 21,
    slug: 'round-dims',
    idea: 'Round SVG root width/height attrs before lab raster',
    extra: { css: FO_BASELINE_CSS, svgRootRound: 'round-dims' },
  },
  {
    n: 22,
    slug: 'int-floor dims',
    idea: 'int-floor root dimension snap',
    extra: { css: FO_BASELINE_CSS, svgRootRound: 'int-floor' },
  },
  {
    n: 23,
    slug: 'triple knob floor/device/natural',
    idea: 'Floor backing + device DPR + natural draw dims',
    extra: {
      labToCanvasOpts: {
        backingRound: 'floor',
        dprSource: 'device',
        optDims: 'natural',
      },
    },
  },
  {
    n: 24,
    slug: 'ceil harness-device no ctxScale',
    idea: 'Ceil backing + harness-device + no ctx.scale',
    extra: {
      labToCanvasOpts: {
        backingRound: 'ceil',
        optDims: 'harness-device',
        ctxScale: false,
      },
    },
  },
  {
    n: 25,
    slug: 'round style device',
    idea: 'Round backing + device-pixel canvas style',
    extra: {
      labToCanvasOpts: { backingRound: 'round', stylePixels: 'device' },
    },
  },
  {
    n: 26,
    slug: 'H2 int-vb floor',
    idea: 'H2 normalize + integer viewBox + floor backing',
    extra: {
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 27,
    slug: 'FO round-dims device dpr',
    idea: 'FO baseline + round-dims + device DPR',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      labToCanvasOpts: { dprSource: 'device' },
    },
  },
  {
    n: 28,
    slug: 'full grid snap',
    idea: 'Floor + ceil round chain: floor backing, device dpr, harness-device, ctxScale on',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: {
        backingRound: 'floor',
        dprSource: 'device',
        optDims: 'harness-device',
        stylePixels: 'css',
        ctxScale: true,
      },
    },
  },
  {
    n: 29,
    slug: 'natural + ctxScale off + FO',
    idea: 'Natural dims, no ctx.scale, FO baseline',
    extra: {
      css: FO_BASELINE_CSS,
      labToCanvasOpts: { optDims: 'natural', ctxScale: false },
    },
  },
  {
    n: 30,
    slug: 'max spread',
    idea: 'Round backing + device style + natural + device dpr',
    extra: {
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: {
        backingRound: 'round',
        dprSource: 'device',
        stylePixels: 'device',
        optDims: 'natural',
        ctxScale: true,
      },
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5-sb-${num}`,
    label: `w5 sb #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: 'both',
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas',
    notes: `Wave5 sandbox quick test; ${spec.slug}; FO text only.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 30) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-sandbox.js: expected 30 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.svgRootRound ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-sandbox.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
