/**
 * Lab toCanvas backing-store / DPR / dimension probes (tc-lab-back-001..050).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js (`labToCanvasOpts`).
 * Harness: scale defaults 1, dpr = window.devicePixelRatio (runFoFixProbe opts).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-back-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const BASE = {
  inject: 'raster',
  rasterPatch: 'lab-toCanvas',
  category: 'tocanvas',
  active: true,
}

/** @type {{ n: number, slug: string, idea: string, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'product-like baseline',
    idea: 'Lab fork default — raw outW×dpr backing, harness dpr, CSS style px, harness width/height',
    extra: {},
  },
  {
    n: 2,
    slug: 'backing floor',
    idea: 'floor(canvas.width/height) on outW×dpr backing store',
    extra: { labToCanvasOpts: { backingRound: 'floor' } },
  },
  {
    n: 3,
    slug: 'backing ceil',
    idea: 'ceil(canvas.width/height) on outW×dpr backing store',
    extra: { labToCanvasOpts: { backingRound: 'ceil' } },
  },
  {
    n: 4,
    slug: 'backing round',
    idea: 'round(canvas.width/height) on outW×dpr backing store',
    extra: { labToCanvasOpts: { backingRound: 'round' } },
  },
  {
    n: 5,
    slug: 'backing floor FO baseline',
    idea: 'floor backing + FO_BASELINE_CSS inject both',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 6,
    slug: 'dpr device floor',
    idea: 'dpr from window.devicePixelRatio (not harness dims.dpr) + floor backing',
    extra: {
      labToCanvasOpts: { dprSource: 'device', backingRound: 'floor' },
    },
  },
  {
    n: 7,
    slug: 'dpr device ceil',
    idea: 'devicePixelRatio dpr + ceil backing',
    extra: {
      labToCanvasOpts: { dprSource: 'device', backingRound: 'ceil' },
    },
  },
  {
    n: 8,
    slug: 'dpr device round',
    idea: 'devicePixelRatio dpr + round backing',
    extra: {
      labToCanvasOpts: { dprSource: 'device', backingRound: 'round' },
    },
  },
  {
    n: 9,
    slug: 'dpr device raw backing',
    idea: 'devicePixelRatio dpr, no backing snap (product-like backing math)',
    extra: { labToCanvasOpts: { dprSource: 'device', backingRound: 'none' } },
  },
  {
    n: 10,
    slug: 'style device px floor',
    idea: 'canvas.style in device px + floor backing (cssW×dpr style width)',
    extra: {
      labToCanvasOpts: { stylePixels: 'device', backingRound: 'floor' },
    },
  },
  {
    n: 11,
    slug: 'style device px ceil',
    idea: 'style.width/height device pixels + ceil backing',
    extra: {
      labToCanvasOpts: { stylePixels: 'device', backingRound: 'ceil' },
    },
  },
  {
    n: 12,
    slug: 'style device px round',
    idea: 'style device pixels + round backing',
    extra: {
      labToCanvasOpts: { stylePixels: 'device', backingRound: 'round' },
    },
  },
  {
    n: 13,
    slug: 'style device dpr device',
    idea: 'device dpr + device style px + round backing',
    extra: {
      labToCanvasOpts: {
        dprSource: 'device',
        stylePixels: 'device',
        backingRound: 'round',
      },
    },
  },
  {
    n: 14,
    slug: 'optDims natural',
    idea: 'omit width/height opts — natural image aspect from decode',
    extra: { labToCanvasOpts: { optDims: 'natural' } },
  },
  {
    n: 15,
    slug: 'optDims natural floor',
    idea: 'natural dims + floor backing (harness scale still applied to outW)',
    extra: {
      labToCanvasOpts: { optDims: 'natural', backingRound: 'floor' },
    },
  },
  {
    n: 16,
    slug: 'optDims harness-device',
    idea: 'pass width/height as device px (cssW×dpr) before scale',
    extra: { labToCanvasOpts: { optDims: 'harness-device' } },
  },
  {
    n: 17,
    slug: 'optDims harness-device ceil',
    idea: 'harness-device width/height opts + ceil backing',
    extra: {
      labToCanvasOpts: { optDims: 'harness-device', backingRound: 'ceil' },
    },
  },
  {
    n: 18,
    slug: 'ctxScale false',
    idea: 'skip ctx.scale(dpr) — 1:1 device pixel draw into backing store',
    extra: { labToCanvasOpts: { ctxScale: false } },
  },
  {
    n: 19,
    slug: 'ctxScale false floor',
    idea: 'no ctx.scale + floor backing (full device-pixel bitmap)',
    extra: {
      labToCanvasOpts: { ctxScale: false, backingRound: 'floor' },
    },
  },
  {
    n: 20,
    slug: 'ctxScale false device dpr',
    idea: 'device dpr, no ctx.scale, ceil backing',
    extra: {
      labToCanvasOpts: {
        dprSource: 'device',
        ctxScale: false,
        backingRound: 'ceil',
      },
    },
  },
  {
    n: 21,
    slug: 'labPreRaster device-grid floor backing',
    idea: 'SVG root device-grid-floor pre-raster + floor canvas backing',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 22,
    slug: 'labPreRaster device-grid ceil backing',
    idea: 'device-grid-floor SVG snap + ceil canvas backing',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 23,
    slug: 'labPreRaster device-grid round backing',
    idea: 'device-grid-floor SVG + round canvas backing',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'round' },
    },
  },
  {
    n: 24,
    slug: 'labPreRaster device-grid device dpr',
    idea: 'device-grid-floor SVG + device dpr + floor backing',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { dprSource: 'device', backingRound: 'floor' },
    },
  },
  {
    n: 25,
    slug: 'labPreRaster device-grid style device',
    idea: 'device-grid SVG + device style px + round backing',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { stylePixels: 'device', backingRound: 'round' },
    },
  },
  {
    n: 26,
    slug: 'MP tc-canvas-backing-ceil',
    idea: 'prototype ceil on canvas.width/height assignment (no labToCanvasOpts snap)',
    extra: { monkeypatch: 'tc-canvas-backing-ceil' },
  },
  {
    n: 27,
    slug: 'MP tc-canvas-backing-floor',
    idea: 'prototype floor on canvas.width/height assignment',
    extra: { monkeypatch: 'tc-canvas-backing-floor' },
  },
  {
    n: 28,
    slug: 'MP tc-canvas-backing-round',
    idea: 'prototype round on canvas.width/height assignment',
    extra: { monkeypatch: 'tc-canvas-backing-round' },
  },
  {
    n: 29,
    slug: 'MP ceil + lab ceil',
    idea: 'tc-canvas-backing-ceil MP + labToCanvasOpts.ceil (stacked snap)',
    extra: {
      monkeypatch: 'tc-canvas-backing-ceil',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 30,
    slug: 'MP floor + lab floor',
    idea: 'tc-canvas-backing-floor MP + labToCanvasOpts.floor',
    extra: {
      monkeypatch: 'tc-canvas-backing-floor',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 31,
    slug: 'integer-viewbox floor backing',
    idea: 'integer-viewbox pre-raster + floor canvas backing',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 32,
    slug: 'integer-viewbox ceil backing',
    idea: 'integer-viewbox + ceil canvas backing',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 33,
    slug: 'round-dims floor backing',
    idea: 'round-dims SVG root + floor backing store',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 34,
    slug: 'round-dims device dpr ceil',
    idea: 'round-dims SVG + device dpr + ceil backing',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      labToCanvasOpts: { dprSource: 'device', backingRound: 'ceil' },
    },
  },
  {
    n: 35,
    slug: 'int-floor round backing',
    idea: 'int-floor SVG root dims + round canvas backing',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      labToCanvasOpts: { backingRound: 'round' },
    },
  },
  {
    n: 36,
    slug: 'int-floor device-grid floor',
    idea: 'int-floor + labPreRaster device-grid-floor + floor backing',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 37,
    slug: 'harness scale note round ctx off',
    idea: 'round backing + ctxScale false — harness scale=opts.scale??1 only',
    extra: {
      labToCanvasOpts: { backingRound: 'round', ctxScale: false },
      notes:
        'Harness scale=opts.scale??1; dims.cssW/H=root×scale. No recipeScale unless radicalOptions set.',
    },
  },
  {
    n: 38,
    slug: 'harness dpr note style device',
    idea: 'device style px + harness dpr — compare vs tc-lab-back-006 device dpr',
    extra: {
      labToCanvasOpts: { stylePixels: 'device', backingRound: 'none' },
      notes: 'Harness dpr=opts.dpr??devicePixelRatio; pair with #006 (dprSource:device).',
    },
  },
  {
    n: 39,
    slug: 'full grid stack',
    idea: 'device-grid SVG + device dpr + device style + floor backing + integer-viewbox',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: {
        dprSource: 'device',
        stylePixels: 'device',
        backingRound: 'floor',
      },
    },
  },
  {
    n: 40,
    slug: 'MP ceil integer-viewbox',
    idea: 'tc-canvas-backing-ceil MP + integer-viewbox + harness dpr',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-canvas-backing-ceil',
    },
  },
  {
    n: 41,
    slug: 'natural device dpr ceil',
    idea: 'natural image dims + device dpr + ceil backing',
    extra: {
      labToCanvasOpts: {
        optDims: 'natural',
        dprSource: 'device',
        backingRound: 'ceil',
      },
    },
  },
  {
    n: 42,
    slug: 'harness-device round ctxScale',
    idea: 'device-pixel width/height opts + round backing + ctx.scale(dpr)',
    extra: {
      labToCanvasOpts: {
        optDims: 'harness-device',
        backingRound: 'round',
        ctxScale: true,
      },
    },
  },
  {
    n: 43,
    slug: 'style device ctxScale false',
    idea: 'device style px, no ctx.scale, floor backing',
    extra: {
      labToCanvasOpts: {
        stylePixels: 'device',
        ctxScale: false,
        backingRound: 'floor',
      },
    },
  },
  {
    n: 44,
    slug: 'MP round labPreRaster grid',
    idea: 'tc-canvas-backing-round MP + device-grid-floor SVG',
    extra: {
      monkeypatch: 'tc-canvas-backing-round',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 45,
    slug: 'ceil style css device dpr',
    idea: 'harness CSS style px + device dpr + ceil backing',
    extra: {
      labToCanvasOpts: {
        dprSource: 'device',
        stylePixels: 'css',
        backingRound: 'ceil',
      },
    },
  },
  {
    n: 46,
    slug: 'floor harness-device device-grid',
    idea: 'harness-device opts + floor backing + device-grid SVG',
    extra: {
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { optDims: 'harness-device', backingRound: 'floor' },
    },
  },
  {
    n: 47,
    slug: 'round-dims labPreRaster round',
    idea: 'round-dims + device-grid + round backing',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'round' },
    },
  },
  {
    n: 48,
    slug: 'MP floor ctxScale false',
    idea: 'tc-canvas-backing-floor MP + skip ctx.scale',
    extra: {
      monkeypatch: 'tc-canvas-backing-floor',
      labToCanvasOpts: { ctxScale: false },
    },
  },
  {
    n: 49,
    slug: 'product-like vs rasterProduct',
    idea: 'Lab fork + FO baseline for A/B vs tc-only-001 product-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      notes: 'Pair with tc-only-001 (product-toCanvas); harness scale/dpr only.',
    },
  },
  {
    n: 50,
    slug: 'ceil FO baseline device-grid',
    idea: 'FO baseline + device-grid + ceil backing + harness dpr',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra ?? {}
  return {
    id: `tc-lab-back-${num}`,
    label: `tc-lab-back #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    notes:
      restExtra.notes ??
      'Backing/DPR lab; harness scale default 1, dpr from opts or devicePixelRatio.',
    ...BASE,
    ...restExtra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-custom-backing.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch,
    r.monkeypatch ?? '',
    r.labPreRaster ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.inject,
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-custom-backing.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
