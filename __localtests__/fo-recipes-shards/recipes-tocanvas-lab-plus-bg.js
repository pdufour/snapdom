/**
 * Lab toCanvas background / composite / premultiply matrix — tc-lab-bg-001..040.
 * rasterPatch: lab-toCanvas → fo-fix-toCanvas.js (labToCanvasCtx + backgroundColor hooks).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-bg-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/**
 * @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe
 * @typedef {NonNullable<FoFixRecipe['labToCanvasCtx']>} LabCtx
 */

/** @type {{ n: number, slug: string, idea: string, extra: Partial<FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab fork baseline',
    idea: 'Lab toCanvas fork — default backing, source-over, no background fill',
    extra: { inject: 'raster' },
  },
  {
    n: 2,
    slug: 'backgroundColor transparent',
    idea: 'Explicit transparent backgroundColor before draw (no fillRect)',
    extra: { inject: 'raster', backgroundColor: 'transparent' },
  },
  {
    n: 3,
    slug: 'backgroundColor white',
    idea: 'Opaque white background fill before FO blit',
    extra: { inject: 'raster', backgroundColor: 'white' },
  },
  {
    n: 4,
    slug: 'backgroundColor #fff',
    idea: 'Hex white background fill before drawImage',
    extra: { inject: 'raster', backgroundColor: '#fff' },
  },
  {
    n: 5,
    slug: 'clearBeforeDraw',
    idea: 'clearRect full backing store before decode blit',
    extra: { inject: 'raster', labToCanvasCtx: { clearBeforeDraw: true } },
  },
  {
    n: 6,
    slug: 'white + clearBeforeDraw',
    idea: 'White background fill then clearRect before draw',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { clearBeforeDraw: true },
    },
  },
  {
    n: 7,
    slug: 'transparent + clearBeforeDraw',
    idea: 'Transparent bg token + clearRect — probes default alpha buffer',
    extra: {
      inject: 'raster',
      backgroundColor: 'transparent',
      labToCanvasCtx: { clearBeforeDraw: true },
    },
  },
  {
    n: 8,
    slug: '#fff + clearBeforeDraw',
    idea: 'Hex white fill + device-pixel clearRect before blit',
    extra: {
      inject: 'raster',
      backgroundColor: '#fff',
      labToCanvasCtx: { clearBeforeDraw: true },
    },
  },
  {
    n: 9,
    slug: 'globalCompositeOperation copy',
    idea: 'copy composite during drawImage — replaces dest alpha',
    extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'copy' } },
  },
  {
    n: 10,
    slug: 'copy + clearBeforeDraw',
    idea: 'clearRect then copy composite blit',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { globalCompositeOperation: 'copy', clearBeforeDraw: true },
    },
  },
  {
    n: 11,
    slug: 'copy + white bg',
    idea: 'White fill + copy composite draw',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 12,
    slug: 'copy + transparent bg',
    idea: 'Transparent bg + copy composite — premultiplied dest probe',
    extra: {
      inject: 'raster',
      backgroundColor: 'transparent',
      labToCanvasCtx: { globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 13,
    slug: 'copy + #fff bg',
    idea: 'Hex white + copy composite',
    extra: {
      inject: 'raster',
      backgroundColor: '#fff',
      labToCanvasCtx: { globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 14,
    slug: 'copy + clear + white',
    idea: 'clearRect + white fill + copy composite stack',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { globalCompositeOperation: 'copy', clearBeforeDraw: true },
    },
  },
  {
    n: 15,
    slug: 'source-over + clear',
    idea: 'Explicit source-over (default) with clearRect pre-draw',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { globalCompositeOperation: 'source-over', clearBeforeDraw: true },
    },
  },
  {
    n: 16,
    slug: 'copy + premultiply none',
    idea: 'copy composite + createImageBitmap premultiplyAlpha none',
    extra: {
      inject: 'raster',
      labToCanvasCtx: {
        globalCompositeOperation: 'copy',
        premultiplyAlpha: 'none',
      },
    },
  },
  {
    n: 17,
    slug: 'premultiply premultiply',
    idea: 'createImageBitmap premultiplyAlpha premultiply before draw',
    extra: { inject: 'raster', labToCanvasCtx: { premultiplyAlpha: 'premultiply' } },
  },
  {
    n: 18,
    slug: 'premultiply none',
    idea: 'ImageBitmap decode with premultiplyAlpha none',
    extra: { inject: 'raster', labToCanvasCtx: { premultiplyAlpha: 'none' } },
  },
  {
    n: 19,
    slug: 'premultiply + clear',
    idea: 'clearRect + premultiply ImageBitmap path',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { premultiplyAlpha: 'premultiply', clearBeforeDraw: true },
    },
  },
  {
    n: 20,
    slug: 'premultiply + copy',
    idea: 'premultiply ImageBitmap + copy composite',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { premultiplyAlpha: 'premultiply', globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 21,
    slug: 'none + copy',
    idea: 'premultiplyAlpha none + copy composite',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { premultiplyAlpha: 'none', globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 22,
    slug: 'premultiply + white',
    idea: 'White background + premultiply ImageBitmap blit',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { premultiplyAlpha: 'premultiply' },
    },
  },
  {
    n: 23,
    slug: 'premultiply + transparent',
    idea: 'Transparent bg + premultiply decode path',
    extra: {
      inject: 'raster',
      backgroundColor: 'transparent',
      labToCanvasCtx: { premultiplyAlpha: 'premultiply' },
    },
  },
  {
    n: 24,
    slug: 'contextAlpha false',
    idea: 'getContext 2d alpha:false — premultiplied buffer desync probe',
    extra: { inject: 'raster', labToCanvasCtx: { contextAlpha: false } },
  },
  {
    n: 25,
    slug: 'contextAlpha false + clear',
    idea: 'alpha:false context + clearRect before blit',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { contextAlpha: false, clearBeforeDraw: true },
    },
  },
  {
    n: 26,
    slug: 'contextAlpha false + white',
    idea: 'alpha:false + opaque white background fill',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { contextAlpha: false },
    },
  },
  {
    n: 27,
    slug: 'contextAlpha false + copy',
    idea: 'alpha:false context + copy composite',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { contextAlpha: false, globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 28,
    slug: 'contextAlpha false + premultiply',
    idea: 'alpha:false + ImageBitmap premultiply decode',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { contextAlpha: false, premultiplyAlpha: 'premultiply' },
    },
  },
  {
    n: 29,
    slug: 'contextAlpha false + premultiply none',
    idea: 'alpha:false + premultiplyAlpha none bitmap path',
    extra: {
      inject: 'raster',
      labToCanvasCtx: { contextAlpha: false, premultiplyAlpha: 'none' },
    },
  },
  {
    n: 30,
    slug: 'contextAlpha false + copy + clear',
    idea: 'alpha:false + clearRect + copy composite triple',
    extra: {
      inject: 'raster',
      labToCanvasCtx: {
        contextAlpha: false,
        clearBeforeDraw: true,
        globalCompositeOperation: 'copy',
      },
    },
  },
  {
    n: 31,
    slug: 'premultiply + copy + clear',
    idea: 'premultiply bitmap + copy + clearRect stack',
    extra: {
      inject: 'raster',
      labToCanvasCtx: {
        premultiplyAlpha: 'premultiply',
        globalCompositeOperation: 'copy',
        clearBeforeDraw: true,
      },
    },
  },
  {
    n: 32,
    slug: 'premultiply + copy + white',
    idea: 'White bg + premultiply + copy composite',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: {
        premultiplyAlpha: 'premultiply',
        globalCompositeOperation: 'copy',
      },
    },
  },
  {
    n: 33,
    slug: 'alpha:false + premultiply + copy',
    idea: 'Full premultiplied-alpha mismatch stack (alpha:false + bitmap + copy)',
    extra: {
      inject: 'raster',
      labToCanvasCtx: {
        contextAlpha: false,
        premultiplyAlpha: 'premultiply',
        globalCompositeOperation: 'copy',
      },
    },
  },
  {
    n: 34,
    slug: 'alpha:false + clear + transparent',
    idea: 'alpha:false + clearRect + transparent bg token',
    extra: {
      inject: 'raster',
      backgroundColor: 'transparent',
      labToCanvasCtx: { contextAlpha: false, clearBeforeDraw: true },
    },
  },
  {
    n: 35,
    slug: 'copy + none + clear + #fff',
    idea: 'copy + premultiplyAlpha none + clear + hex white fill',
    extra: {
      inject: 'raster',
      backgroundColor: '#fff',
      labToCanvasCtx: {
        globalCompositeOperation: 'copy',
        premultiplyAlpha: 'none',
        clearBeforeDraw: true,
      },
    },
  },
  {
    n: 36,
    slug: 'white + clear + copy',
    idea: 'Opaque white + clearRect + copy — maximal pre-blit scrub',
    extra: {
      inject: 'raster',
      backgroundColor: 'white',
      labToCanvasCtx: { clearBeforeDraw: true, globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 37,
    slug: 'FO baseline + copy',
    idea: 'FO_BASELINE_CSS + copy composite on lab fork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasCtx: { globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 38,
    slug: 'FO baseline + premultiply',
    idea: 'FO baseline + ImageBitmap premultiply decode',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasCtx: { premultiplyAlpha: 'premultiply' },
    },
  },
  {
    n: 39,
    slug: 'FO baseline + alpha:false',
    idea: 'FO baseline + getContext alpha:false',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labToCanvasCtx: { contextAlpha: false },
    },
  },
  {
    n: 40,
    slug: 'FO baseline full stack',
    idea: 'FO baseline + white + clear + copy + premultiply',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      backgroundColor: 'white',
      labToCanvasCtx: {
        clearBeforeDraw: true,
        globalCompositeOperation: 'copy',
        premultiplyAlpha: 'premultiply',
      },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-tocanvas-lab-plus-bg.js: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-tocanvas-lab-plus-bg.js: duplicate slugs in SPECS')
}

/** @type {FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  return {
    id: `tc-lab-bg-${num}`,
    label: `tc-lab-bg #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas bg/composite/premul; ${spec.slug}; FO raster only.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-tocanvas-lab-plus-bg.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.backgroundColor ?? '',
    JSON.stringify(r.labToCanvasCtx ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-plus-bg.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
