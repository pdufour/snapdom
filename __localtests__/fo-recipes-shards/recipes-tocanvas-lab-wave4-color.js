/**
 * Lab toCanvas wave4 — color space / interpolation / ctx alpha probes (tc-lab-w4-col-001..050).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-col-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const FO_COLOR_SRGB = 'foreignObject *{color-interpolation:sRGB!important}'
const FO_COLOR_LINEAR = 'foreignObject *{color-interpolation:linearRGB!important}'

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-toCanvas color baseline',
    idea: 'Lab fork toCanvas — default sRGB ctx + no color overrides',
    extra: { inject: 'raster' },
  },
  {
    n: 2,
    slug: 'ctx colorSpace srgb',
    idea: 'getContext colorSpace:srgb on lab toCanvas backing store',
    extra: { inject: 'raster', labToCanvasOpts: { colorSpace: 'srgb' } },
  },
  {
    n: 3,
    slug: 'ctx colorSpace display-p3',
    idea: 'getContext colorSpace:display-p3 — wide-gamut canvas probe',
    extra: { inject: 'raster', labToCanvasOpts: { colorSpace: 'display-p3' } },
  },
  {
    n: 4,
    slug: 'canvas.colorSpace srgb',
    idea: 'HTMLCanvasElement.colorSpace srgb before getContext',
    extra: { inject: 'raster', labToCanvasOpts: { canvasColorSpace: 'srgb' } },
  },
  {
    n: 5,
    slug: 'canvas.colorSpace display-p3',
    idea: 'canvas.colorSpace display-p3 element attr before ctx',
    extra: { inject: 'raster', labToCanvasOpts: { canvasColorSpace: 'display-p3' } },
  },
  {
    n: 6,
    slug: 'ctx srgb + canvas display-p3',
    idea: 'Mismatch probe — ctx srgb + element display-p3',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'srgb', canvasColorSpace: 'display-p3' },
    },
  },
  {
    n: 7,
    slug: 'ctx display-p3 + canvas srgb',
    idea: 'Mismatch probe — ctx display-p3 + element srgb',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'display-p3', canvasColorSpace: 'srgb' },
    },
  },
  {
    n: 8,
    slug: 'colorInterpolation srgb style',
    idea: 'canvas.style.colorInterpolation srgb before getContext',
    extra: { inject: 'raster', labToCanvasOpts: { colorInterpolation: 'srgb' } },
  },
  {
    n: 9,
    slug: 'colorInterpolation linearrgb style',
    idea: 'canvas.style.colorInterpolation linearrgb — linear RGB interpolation',
    extra: { inject: 'raster', labToCanvasOpts: { colorInterpolation: 'linearrgb' } },
  },
  {
    n: 10,
    slug: 'ctx srgb + colorInterpolation linearrgb',
    idea: 'getContext srgb + style linearrgb interpolation combo',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'srgb', colorInterpolation: 'linearrgb' },
    },
  },
  {
    n: 11,
    slug: 'ctx alpha false',
    idea: 'getContext alpha:false — opaque backing / premultiply-off probe',
    extra: { inject: 'raster', labToCanvasOpts: { alpha: false } },
  },
  {
    n: 12,
    slug: 'ctx alpha true explicit',
    idea: 'getContext alpha:true explicit — premultiplied alpha channel on',
    extra: { inject: 'raster', labToCanvasOpts: { alpha: true } },
  },
  {
    n: 13,
    slug: 'labToCanvasCtx premultiply none',
    idea: 'labToCanvasCtx premultiplyAlpha:none → ctx alpha false',
    extra: { inject: 'raster', labToCanvasCtx: { premultiplyAlpha: 'none' } },
  },
  {
    n: 14,
    slug: 'labToCanvasCtx premultiply explicit',
    idea: 'labToCanvasCtx premultiplyAlpha:premultiply → ctx alpha true',
    extra: { inject: 'raster', labToCanvasCtx: { premultiplyAlpha: 'premultiply' } },
  },
  {
    n: 15,
    slug: 'labToCanvasCtx contextAlpha false',
    idea: 'labToCanvasCtx contextAlpha:false on lab fork getContext',
    extra: { inject: 'raster', labToCanvasCtx: { contextAlpha: false } },
  },
  {
    n: 16,
    slug: 'desynchronized true',
    idea: 'getContext desynchronized:true — low-latency canvas probe',
    extra: { inject: 'raster', labToCanvasOpts: { desynchronized: true } },
  },
  {
    n: 17,
    slug: 'desynchronized if-supported',
    idea: 'desynchronized:if-supported — probe only when engine accepts attr',
    extra: { inject: 'raster', labToCanvasOpts: { desynchronized: 'if-supported' } },
  },
  {
    n: 18,
    slug: 'alpha false + desync if-supported',
    idea: 'alpha:false + desynchronized if-supported — context-alpha-false-desync style',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { alpha: false, desynchronized: 'if-supported' },
    },
  },
  {
    n: 19,
    slug: 'display-p3 + desync true',
    idea: 'colorSpace display-p3 + desynchronized:true',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'display-p3', desynchronized: true },
    },
  },
  {
    n: 20,
    slug: 'display-p3 + desync if-supported',
    idea: 'colorSpace display-p3 + desynchronized if-supported',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'display-p3', desynchronized: 'if-supported' },
    },
  },
  {
    n: 21,
    slug: 'srgb + alpha false',
    idea: 'colorSpace srgb + alpha:false opaque backing',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'srgb', alpha: false },
    },
  },
  {
    n: 22,
    slug: 'display-p3 + alpha false',
    idea: 'display-p3 wide gamut + alpha:false',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'display-p3', alpha: false },
    },
  },
  {
    n: 23,
    slug: 'srgb desync + premultiply none',
    idea: 'srgb + desync if-supported + labToCanvasCtx premultiplyAlpha none',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { colorSpace: 'srgb', desynchronized: 'if-supported' },
      labToCanvasCtx: { premultiplyAlpha: 'none' },
    },
  },
  {
    n: 24,
    slug: 'willReadFrequently + srgb',
    idea: 'willReadFrequently + colorSpace srgb on lab fork ctx',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { willReadFrequently: true, colorSpace: 'srgb' },
    },
  },
  {
    n: 25,
    slug: 'willReadFrequently + display-p3',
    idea: 'willReadFrequently + colorSpace display-p3',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { willReadFrequently: true, colorSpace: 'display-p3' },
    },
  },
  {
    n: 26,
    slug: 'FO color-interpolation sRGB',
    idea: 'FO * color-interpolation:sRGB CSS at capture + lab toCanvas',
    extra: { inject: 'both', css: FO_COLOR_SRGB },
  },
  {
    n: 27,
    slug: 'FO color-interpolation linearRGB',
    idea: 'FO * color-interpolation:linearRGB CSS + lab toCanvas',
    extra: { inject: 'both', css: FO_COLOR_LINEAR },
  },
  {
    n: 28,
    slug: 'svg color-interpolation-filters sRGB',
    idea: 'svgRootPatch color-interpolation-filters:sRGB before lab raster',
    extra: {
      inject: 'capture',
      svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
    },
  },
  {
    n: 29,
    slug: 'svg color-interpolation-filters linearRGB',
    idea: 'svgRootPatch color-interpolation-filters:linearRGB',
    extra: {
      inject: 'capture',
      svgRootPatch: { 'color-interpolation-filters': 'linearRGB' },
    },
  },
  {
    n: 30,
    slug: 'FO sRGB + ctx display-p3',
    idea: 'FO color-interpolation sRGB + getContext display-p3',
    extra: {
      inject: 'both',
      css: FO_COLOR_SRGB,
      labToCanvasOpts: { colorSpace: 'display-p3' },
    },
  },
  {
    n: 31,
    slug: 'FO linear + ctx srgb',
    idea: 'FO linearRGB interpolation + getContext srgb',
    extra: {
      inject: 'both',
      css: FO_COLOR_LINEAR,
      labToCanvasOpts: { colorSpace: 'srgb' },
    },
  },
  {
    n: 32,
    slug: 'filter sRGB + FO baseline',
    idea: 'color-interpolation-filters sRGB root + FO_BASELINE_CSS',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
    },
  },
  {
    n: 33,
    slug: 'filter linearRGB + FO baseline',
    idea: 'color-interpolation-filters linearRGB + FO baseline',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootPatch: { 'color-interpolation-filters': 'linearRGB' },
    },
  },
  {
    n: 34,
    slug: 'FO sRGB + alpha false',
    idea: 'FO color-interpolation sRGB + ctx alpha false',
    extra: {
      inject: 'both',
      css: FO_COLOR_SRGB,
      labToCanvasOpts: { alpha: false },
    },
  },
  {
    n: 35,
    slug: 'FO linear + desync if-supported',
    idea: 'FO linearRGB + desynchronized if-supported',
    extra: {
      inject: 'both',
      css: FO_COLOR_LINEAR,
      labToCanvasOpts: { desynchronized: 'if-supported' },
    },
  },
  {
    n: 36,
    slug: 'integer-viewbox + ctx srgb',
    idea: 'integer-viewbox pre-raster + getContext colorSpace srgb',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { colorSpace: 'srgb' },
    },
  },
  {
    n: 37,
    slug: 'integer-viewbox + display-p3',
    idea: 'integer-viewbox + getContext display-p3',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { colorSpace: 'display-p3' },
    },
  },
  {
    n: 38,
    slug: 'FO baseline + ctx display-p3',
    idea: 'FO_BASELINE_CSS + colorSpace display-p3 on lab fork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasOpts: { colorSpace: 'display-p3' },
    },
  },
  {
    n: 39,
    slug: 'FO baseline + desync if-supported',
    idea: 'FO baseline + desynchronized if-supported',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasOpts: { desynchronized: 'if-supported' },
    },
  },
  {
    n: 40,
    slug: 'FO baseline + premultiply none',
    idea: 'FO baseline + labToCanvasCtx premultiplyAlpha none',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasCtx: { premultiplyAlpha: 'none' },
    },
  },
  {
    n: 41,
    slug: 'canvas p3 + style linearrgb',
    idea: 'canvasColorSpace display-p3 + colorInterpolation linearrgb',
    extra: {
      inject: 'raster',
      labToCanvasOpts: {
        canvasColorSpace: 'display-p3',
        colorInterpolation: 'linearrgb',
      },
    },
  },
  {
    n: 42,
    slug: 'canvas srgb + ctx display-p3 + desync',
    idea: 'canvas srgb + ctx display-p3 + desynchronized true',
    extra: {
      inject: 'raster',
      labToCanvasOpts: {
        canvasColorSpace: 'srgb',
        colorSpace: 'display-p3',
        desynchronized: true,
      },
    },
  },
  {
    n: 43,
    slug: 'filter sRGB + ctx srgb + FO sRGB',
    idea: 'Triple sRGB lock — root filters + ctx + FO interpolation',
    extra: {
      inject: 'both',
      css: FO_COLOR_SRGB,
      svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
      labToCanvasOpts: { colorSpace: 'srgb', colorInterpolation: 'srgb' },
    },
  },
  {
    n: 44,
    slug: 'filter linear + ctx p3 + FO linear',
    idea: 'linearRGB filters + FO linear + ctx display-p3',
    extra: {
      inject: 'both',
      css: FO_COLOR_LINEAR,
      svgRootPatch: { 'color-interpolation-filters': 'linearRGB' },
      labToCanvasOpts: { colorSpace: 'display-p3', colorInterpolation: 'linearrgb' },
    },
  },
  {
    n: 45,
    slug: 'int-vb + alpha false + desync',
    idea: 'integer-viewbox + alpha false + desync if-supported',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { alpha: false, desynchronized: 'if-supported' },
    },
  },
  {
    n: 46,
    slug: 'FO baseline int-vb ctx srgb',
    idea: 'FO baseline + integer-viewbox + colorSpace srgb',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { colorSpace: 'srgb' },
    },
  },
  {
    n: 47,
    slug: 'FO baseline filter sRGB desync',
    idea: 'FO baseline + filter sRGB + desynchronized if-supported',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
      labToCanvasOpts: { desynchronized: 'if-supported' },
    },
  },
  {
    n: 48,
    slug: 'globalAlpha 0.999 + srgb',
    idea: 'labToCanvasCtx globalAlpha 0.999 + colorSpace srgb — sub-unity alpha probe',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { globalAlpha: 0.999 },
      labToCanvasOpts: { colorSpace: 'srgb' },
    },
  },
  {
    n: 49,
    slug: 'premultiply + display-p3 + FO baseline',
    idea: 'premultiplyAlpha premultiply + display-p3 + FO baseline both',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasCtx: { premultiplyAlpha: 'premultiply' },
      labToCanvasOpts: { colorSpace: 'display-p3' },
    },
  },
  {
    n: 50,
    slug: 'full color stack',
    idea: 'FO sRGB + filter sRGB + ctx display-p3 + canvas srgb + desync if-supported + premultiply none',
    extra: {
      inject: 'both',
      css: FO_COLOR_SRGB,
      svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
      labToCanvasCtx: { premultiplyAlpha: 'none' },
      labToCanvasOpts: {
        colorSpace: 'display-p3',
        canvasColorSpace: 'srgb',
        colorInterpolation: 'srgb',
        desynchronized: 'if-supported',
      },
    },
  },
]

if (SPECS.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-color.js: expected 50 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-wave4-color.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4-col-${num}`,
    label: `tc-lab-w4-col #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? '',
    inject: extra.inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'color',
    active: true,
    notes: `Lab toCanvas wave4 color; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-color.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.svgRootPatch ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-color.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
