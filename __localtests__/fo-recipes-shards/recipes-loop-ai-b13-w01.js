/**
 * Loop AI batch-13 FO recipe shard (worker 01) — RASTER PRIMARY: createImageBitmap handoff.
 * ImageBitmap premultiply/pixelated/close vs HTMLImageElement drawImage
 * 40 recipes: loop-ai-b13-w01-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "create-image-bitmap bare + filter-noop-defs",
    idea: "create-image-bitmap raster + bare raster — ImageBitmap vs img decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 2,
    slug: "create-image-bitmap overflow",
    idea: "create-image-bitmap raster + FO overflow visible — ImageBitmap vs img decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 3,
    slug: "create-image-bitmap leaf",
    idea: "create-image-bitmap raster + FO leaf min-width — ImageBitmap vs img decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 4,
    slug: "create-image-bitmap kerning",
    idea: "create-image-bitmap raster + FO kerning normal — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 5,
    slug: "create-image-bitmap shape",
    idea: "create-image-bitmap raster + shape-rendering geometric — ImageBitmap vs img decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 6,
    slug: "create-image-bitmap img-auto",
    idea: "create-image-bitmap raster + image-rendering auto — ImageBitmap vs img decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 7,
    slug: "create-image-bitmap contain",
    idea: "create-image-bitmap raster + contain paint min — ImageBitmap vs img decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 8,
    slug: "create-image-bitmap overflow-min",
    idea: "create-image-bitmap raster + svg block overflow — ImageBitmap vs img decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 9,
    slug: "create-image-bitmap block-svg",
    idea: "create-image-bitmap raster + svg display block — ImageBitmap vs img decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 10,
    slug: "create-image-bitmap chromium-leaf",
    idea: "create-image-bitmap raster + Chromium copy leaf — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
    },
  },
  {
    n: 11,
    slug: "create-image-bitmap-premultiply bare",
    idea: "create-image-bitmap-premultiply raster + bare raster — ImageBitmap vs img decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 12,
    slug: "create-image-bitmap-premultiply overflow",
    idea: "create-image-bitmap-premultiply raster + FO overflow visible — ImageBitmap vs img decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 13,
    slug: "create-image-bitmap-premultiply leaf",
    idea: "create-image-bitmap-premultiply raster + FO leaf min-width — ImageBitmap vs img decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 14,
    slug: "create-image-bitmap-premultiply kerning",
    idea: "create-image-bitmap-premultiply raster + FO kerning normal — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 15,
    slug: "create-image-bitmap-premultiply shape",
    idea: "create-image-bitmap-premultiply raster + shape-rendering geometric — ImageBitmap vs img decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 16,
    slug: "create-image-bitmap-premultiply img-auto",
    idea: "create-image-bitmap-premultiply raster + image-rendering auto — ImageBitmap vs img decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 17,
    slug: "create-image-bitmap-premultiply contain",
    idea: "create-image-bitmap-premultiply raster + contain paint min — ImageBitmap vs img decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 18,
    slug: "create-image-bitmap-premultiply overflow-min",
    idea: "create-image-bitmap-premultiply raster + svg block overflow — ImageBitmap vs img decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 19,
    slug: "create-image-bitmap-premultiply block-svg",
    idea: "create-image-bitmap-premultiply raster + svg display block — ImageBitmap vs img decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 20,
    slug: "create-image-bitmap-premultiply chromium-leaf",
    idea: "create-image-bitmap-premultiply raster + Chromium copy leaf — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-premultiply",
    },
  },
  {
    n: 21,
    slug: "create-image-bitmap-pixelated bare",
    idea: "create-image-bitmap-pixelated raster + bare raster — ImageBitmap vs img decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 22,
    slug: "create-image-bitmap-pixelated overflow",
    idea: "create-image-bitmap-pixelated raster + FO overflow visible — ImageBitmap vs img decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 23,
    slug: "create-image-bitmap-pixelated leaf",
    idea: "create-image-bitmap-pixelated raster + FO leaf min-width — ImageBitmap vs img decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 24,
    slug: "create-image-bitmap-pixelated kerning",
    idea: "create-image-bitmap-pixelated raster + FO kerning normal — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 25,
    slug: "create-image-bitmap-pixelated shape",
    idea: "create-image-bitmap-pixelated raster + shape-rendering geometric — ImageBitmap vs img decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 26,
    slug: "create-image-bitmap-pixelated img-auto",
    idea: "create-image-bitmap-pixelated raster + image-rendering auto — ImageBitmap vs img decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 27,
    slug: "create-image-bitmap-pixelated contain",
    idea: "create-image-bitmap-pixelated raster + contain paint min — ImageBitmap vs img decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 28,
    slug: "create-image-bitmap-pixelated overflow-min",
    idea: "create-image-bitmap-pixelated raster + svg block overflow — ImageBitmap vs img decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 29,
    slug: "create-image-bitmap-pixelated block-svg",
    idea: "create-image-bitmap-pixelated raster + svg display block — ImageBitmap vs img decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 30,
    slug: "create-image-bitmap-pixelated chromium-leaf",
    idea: "create-image-bitmap-pixelated raster + Chromium copy leaf — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap-pixelated",
    },
  },
  {
    n: 31,
    slug: "bitmap-close bare",
    idea: "bitmap-close raster + bare raster — ImageBitmap vs img decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 32,
    slug: "bitmap-close overflow",
    idea: "bitmap-close raster + FO overflow visible — ImageBitmap vs img decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 33,
    slug: "bitmap-close leaf",
    idea: "bitmap-close raster + FO leaf min-width — ImageBitmap vs img decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 34,
    slug: "bitmap-close kerning",
    idea: "bitmap-close raster + FO kerning normal — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 35,
    slug: "bitmap-close shape",
    idea: "bitmap-close raster + shape-rendering geometric — ImageBitmap vs img decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 36,
    slug: "bitmap-close img-auto",
    idea: "bitmap-close raster + image-rendering auto — ImageBitmap vs img decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 37,
    slug: "bitmap-close contain",
    idea: "bitmap-close raster + contain paint min — ImageBitmap vs img decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 38,
    slug: "bitmap-close overflow-min",
    idea: "bitmap-close raster + svg block overflow — ImageBitmap vs img decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 39,
    slug: "bitmap-close block-svg",
    idea: "bitmap-close raster + svg display block — ImageBitmap vs img decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmap-close",
    },
  },
  {
    n: 40,
    slug: "bitmap-close chromium-leaf",
    idea: "bitmap-close raster + Chromium copy leaf — ImageBitmap vs img decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w01: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w01: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w01-${num}`,
    label: `Loop AI b13 w01 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w01; RASTER PRIMARY createImageBitmap handoff; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w01: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
