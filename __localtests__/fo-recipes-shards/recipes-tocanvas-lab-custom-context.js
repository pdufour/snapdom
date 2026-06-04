/**
 * Lab toCanvas Canvas2D context recipes (tc-lab-ctx-001..050).
 * rasterPatch: lab-toCanvas — ctx hooks in fo-fix-toCanvas.js + fo-fix-monkeypatch.js.
 * No text bypass. Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-ctx-*'
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-toCanvas.js').LabToCanvasCtxOptions} LabToCanvasCtxOptions */

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab fork ctx baseline',
    idea: 'Lab toCanvas fork with default Canvas2D context (no lab ctx knobs)',
    extra: {},
  },
  {
    n: 2,
    slug: 'willReadFrequently getContext',
    idea: 'labToCanvasCtx.willReadFrequently on getContext(2d)',
    extra: { labToCanvasCtx: { willReadFrequently: true } },
  },
  {
    n: 3,
    slug: 'imageSmoothingEnabled false',
    idea: 'Disable bilinear smoothing before drawImage',
    extra: { labToCanvasCtx: { imageSmoothingEnabled: false } },
  },
  {
    n: 4,
    slug: 'imageSmoothingQuality low',
    idea: 'imageSmoothingQuality low before FO blit',
    extra: { labToCanvasCtx: { imageSmoothingQuality: 'low' } },
  },
  {
    n: 5,
    slug: 'imageSmoothingQuality medium',
    idea: 'imageSmoothingQuality medium before FO blit',
    extra: { labToCanvasCtx: { imageSmoothingQuality: 'medium' } },
  },
  {
    n: 6,
    slug: 'imageSmoothingQuality high',
    idea: 'imageSmoothingQuality high before FO blit',
    extra: { labToCanvasCtx: { imageSmoothingQuality: 'high' } },
  },
  {
    n: 7,
    slug: 'globalAlpha 0.99',
    idea: 'globalAlpha 0.99 on raster ctx (sub-unity compositing probe)',
    extra: { labToCanvasCtx: { globalAlpha: 0.99 } },
  },
  {
    n: 8,
    slug: 'globalAlpha 0.5',
    idea: 'globalAlpha 0.5 on raster ctx (half-opacity compositing probe)',
    extra: { labToCanvasCtx: { globalAlpha: 0.5 } },
  },
  {
    n: 9,
    slug: 'resetTransform before draw',
    idea: 'setTransform identity then re-apply dpr scale before drawImage',
    extra: { labToCanvasCtx: { resetTransformBeforeDraw: true } },
  },
  {
    n: 10,
    slug: 'smooth-off + resetTransform',
    idea: 'Pixelated blit after identity transform reset',
    extra: {
      labToCanvasCtx: {
        imageSmoothingEnabled: false,
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 11,
    slug: 'will-read + smooth-off',
    idea: 'willReadFrequently + imageSmoothingEnabled false',
    extra: {
      labToCanvasCtx: {
        willReadFrequently: true,
        imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 12,
    slug: 'will-read + quality low',
    idea: 'willReadFrequently + imageSmoothingQuality low',
    extra: {
      labToCanvasCtx: {
        willReadFrequently: true,
        imageSmoothingQuality: 'low',
      },
    },
  },
  {
    n: 13,
    slug: 'alpha-099 + smooth-off',
    idea: 'globalAlpha 0.99 with smoothing disabled',
    extra: {
      labToCanvasCtx: {
        globalAlpha: 0.99,
        imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 14,
    slug: 'alpha-half + resetTransform',
    idea: 'globalAlpha 0.5 after identity transform reset',
    extra: {
      labToCanvasCtx: {
        globalAlpha: 0.5,
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 15,
    slug: 'quality high + resetTransform',
    idea: 'imageSmoothingQuality high + resetTransformBeforeDraw',
    extra: {
      labToCanvasCtx: {
        imageSmoothingQuality: 'high',
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 16,
    slug: 'full ctx bundle (recipe opts)',
    idea: 'willRead + smooth-off + quality low + resetTransform via labToCanvasCtx',
    extra: {
      labToCanvasCtx: {
        willReadFrequently: true,
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'low',
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 17,
    slug: 'MP tc-ctx-will-read-frequently',
    idea: 'Monkeypatch sets willReadFrequently for lab toCanvas raster',
    extra: { monkeypatch: 'tc-ctx-will-read-frequently' },
  },
  {
    n: 18,
    slug: 'MP getContext will-read proto',
    idea: 'Prototype getContext patch forces willReadFrequently on every 2d ctx',
    extra: { monkeypatch: 'tc-ctx-getContext-will-read-proto' },
  },
  {
    n: 19,
    slug: 'MP tc-ctx-smooth-off',
    idea: 'Monkeypatch disables imageSmoothingEnabled during lab draw',
    extra: { monkeypatch: 'tc-ctx-smooth-off' },
  },
  {
    n: 20,
    slug: 'MP smooth-quality-low',
    idea: 'Monkeypatch imageSmoothingQuality low',
    extra: { monkeypatch: 'tc-ctx-smooth-quality-low' },
  },
  {
    n: 21,
    slug: 'MP smooth-quality-medium',
    idea: 'Monkeypatch imageSmoothingQuality medium',
    extra: { monkeypatch: 'tc-ctx-smooth-quality-medium' },
  },
  {
    n: 22,
    slug: 'MP smooth-quality-high',
    idea: 'Monkeypatch imageSmoothingQuality high',
    extra: { monkeypatch: 'tc-ctx-smooth-quality-high' },
  },
  {
    n: 23,
    slug: 'MP global-alpha-099',
    idea: 'Monkeypatch globalAlpha 0.99 on lab raster ctx',
    extra: { monkeypatch: 'tc-ctx-global-alpha-099' },
  },
  {
    n: 24,
    slug: 'MP global-alpha-half',
    idea: 'Monkeypatch globalAlpha 0.5 on lab raster ctx',
    extra: { monkeypatch: 'tc-ctx-global-alpha-half' },
  },
  {
    n: 25,
    slug: 'MP reset-transform-draw',
    idea: 'Monkeypatch identity setTransform before drawImage',
    extra: { monkeypatch: 'tc-ctx-reset-transform-draw' },
  },
  {
    n: 26,
    slug: 'MP reset-transform-smooth-off',
    idea: 'Monkeypatch reset transform + smooth off combo',
    extra: { monkeypatch: 'tc-ctx-reset-transform-smooth-off' },
  },
  {
    n: 27,
    slug: 'MP full-smooth-off-will-read',
    idea: 'Monkeypatch bundled willRead + smooth off + quality low + reset',
    extra: { monkeypatch: 'tc-ctx-full-smooth-off-will-read' },
  },
  {
    n: 28,
    slug: 'MP smooth-off + recipe will-read',
    idea: 'tc-ctx-smooth-off MP + labToCanvasCtx willReadFrequently',
    extra: {
      monkeypatch: 'tc-ctx-smooth-off',
      labToCanvasCtx: { willReadFrequently: true },
    },
  },
  {
    n: 29,
    slug: 'MP reset-transform + recipe alpha-099',
    idea: 'tc-ctx-reset-transform-draw MP + globalAlpha 0.99 on recipe ctx',
    extra: {
      monkeypatch: 'tc-ctx-reset-transform-draw',
      labToCanvasCtx: { globalAlpha: 0.99 },
    },
  },
  {
    n: 30,
    slug: 'MP will-read + recipe smooth-off',
    idea: 'tc-ctx-will-read-frequently MP + imageSmoothingEnabled false on recipe',
    extra: {
      monkeypatch: 'tc-ctx-will-read-frequently',
      labToCanvasCtx: { imageSmoothingEnabled: false },
    },
  },
  {
    n: 31,
    slug: 'MP quality-high + recipe resetTransform',
    idea: 'tc-ctx-smooth-quality-high MP + resetTransformBeforeDraw on recipe',
    extra: {
      monkeypatch: 'tc-ctx-smooth-quality-high',
      labToCanvasCtx: { resetTransformBeforeDraw: true },
    },
  },
  {
    n: 32,
    slug: 'MP alpha-half + recipe quality-low',
    idea: 'tc-ctx-global-alpha-half MP + imageSmoothingQuality low on recipe',
    extra: {
      monkeypatch: 'tc-ctx-global-alpha-half',
      labToCanvasCtx: { imageSmoothingQuality: 'low' },
    },
  },
  {
    n: 33,
    slug: 'FO baseline + will-read',
    idea: 'FO_BASELINE_CSS + willReadFrequently lab ctx',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      labToCanvasCtx: { willReadFrequently: true },
    },
  },
  {
    n: 34,
    slug: 'FO baseline + smooth-off',
    idea: 'FO_BASELINE_CSS + imageSmoothingEnabled false',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      labToCanvasCtx: { imageSmoothingEnabled: false },
    },
  },
  {
    n: 35,
    slug: 'FO baseline + resetTransform',
    idea: 'FO_BASELINE_CSS + resetTransformBeforeDraw',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      labToCanvasCtx: { resetTransformBeforeDraw: true },
    },
  },
  {
    n: 36,
    slug: 'FO baseline + MP smooth-off',
    idea: 'FO_BASELINE_CSS + tc-ctx-smooth-off monkeypatch',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-smooth-off',
    },
  },
  {
    n: 37,
    slug: 'FO baseline + MP will-read',
    idea: 'FO_BASELINE_CSS + tc-ctx-will-read-frequently monkeypatch',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-will-read-frequently',
    },
  },
  {
    n: 38,
    slug: 'FO baseline + MP reset-transform',
    idea: 'FO_BASELINE_CSS + tc-ctx-reset-transform-draw monkeypatch',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-reset-transform-draw',
    },
  },
  {
    n: 39,
    slug: 'FO baseline + full ctx bundle',
    idea: 'FO_BASELINE_CSS + labToCanvasCtx full smooth-off will-read reset',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      labToCanvasCtx: {
        willReadFrequently: true,
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'low',
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 40,
    slug: 'FO baseline + MP full bundle',
    idea: 'FO_BASELINE_CSS + tc-ctx-full-smooth-off-will-read monkeypatch',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-full-smooth-off-will-read',
    },
  },
  {
    n: 41,
    slug: 'ctxScale false + will-read',
    idea: 'labToCanvasOpts.ctxScale false + willReadFrequently (no dpr ctx.scale)',
    extra: {
      labToCanvasOpts: { ctxScale: false },
      labToCanvasCtx: { willReadFrequently: true },
    },
  },
  {
    n: 42,
    slug: 'ctxScale false + resetTransform',
    idea: 'ctxScale false + resetTransformBeforeDraw (identity only, no re-scale)',
    extra: {
      labToCanvasOpts: { ctxScale: false },
      labToCanvasCtx: { resetTransformBeforeDraw: true },
    },
  },
  {
    n: 43,
    slug: 'ctxScale false + smooth-off',
    idea: 'ctxScale false + imageSmoothingEnabled false',
    extra: {
      labToCanvasOpts: { ctxScale: false },
      labToCanvasCtx: { imageSmoothingEnabled: false },
    },
  },
  {
    n: 44,
    slug: 'MP proto will-read + smooth-off recipe',
    idea: 'getContext proto will-read + recipe smooth-off',
    extra: {
      monkeypatch: 'tc-ctx-getContext-will-read-proto',
      labToCanvasCtx: { imageSmoothingEnabled: false },
    },
  },
  {
    n: 45,
    slug: 'MP reset-smooth-off + alpha-099 recipe',
    idea: 'tc-ctx-reset-transform-smooth-off MP + recipe globalAlpha 0.99',
    extra: {
      monkeypatch: 'tc-ctx-reset-transform-smooth-off',
      labToCanvasCtx: { globalAlpha: 0.99 },
    },
  },
  {
    n: 46,
    slug: 'quality medium + will-read + reset',
    idea: 'Triple labToCanvasCtx: medium quality, willRead, resetTransform',
    extra: {
      labToCanvasCtx: {
        imageSmoothingQuality: 'medium',
        willReadFrequently: true,
        resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 47,
    slug: 'smooth-off + alpha-half + quality low',
    idea: 'Triple labToCanvasCtx: smooth off, half alpha, low quality',
    extra: {
      labToCanvasCtx: {
        imageSmoothingEnabled: false,
        globalAlpha: 0.5,
        imageSmoothingQuality: 'low',
      },
    },
  },
  {
    n: 48,
    slug: 'MP quality-medium + FO baseline',
    idea: 'FO_BASELINE_CSS + tc-ctx-smooth-quality-medium',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-smooth-quality-medium',
    },
  },
  {
    n: 49,
    slug: 'MP alpha-099 + FO baseline + reset recipe',
    idea: 'FO baseline + tc-ctx-global-alpha-099 + recipe resetTransform',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      monkeypatch: 'tc-ctx-global-alpha-099',
      labToCanvasCtx: { resetTransformBeforeDraw: true },
    },
  },
  {
    n: 50,
    slug: 'MP full bundle + FO baseline + ctxScale false',
    idea: 'FO baseline + full ctx MP + ctxScale false (device-pixel draw without scale)',
    extra: {
      css: FO_BASELINE_CSS,
      inject: 'both',
      labToCanvasOpts: { ctxScale: false },
      monkeypatch: 'tc-ctx-full-smooth-off-will-read',
    },
  },
]

/** @param {import('../fo-fix-recipe-shared.js').FoFixRecipe} r */
function recipeKey(r) {
  const mp = r.monkeypatch
  const mpStr = Array.isArray(mp) ? mp.join('|') : (mp ?? '')
  const ctx = r.labToCanvasCtx
  const ctxStr = ctx ? JSON.stringify(ctx) : ''
  const opts = r.labToCanvasOpts
  const optsStr = opts ? JSON.stringify(opts) : ''
  return [
    r.inject,
    r.rasterPatch ?? '',
    mpStr,
    ctxStr,
    optsStr,
    r.css,
  ].join('\0')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, inject: inj, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-ctx-${num}`,
    label: `tc-lab-ctx #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: inj ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas-custom',
    active: true,
    notes: `Lab Canvas2D ctx; ${spec.slug}; FO raster only.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-custom-context.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = recipeKey(r)
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-custom-context.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
