/**
 * Loop AI batch-13 FO recipe shard (worker 27) — RASTER PRIMARY: fe-displacement-map-identity.
 * feDisplacementMap identity on FO + exotic raster handoffs
 * 40 recipes: loop-ai-b13-w27-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fe-displace context-alpha-false-desync img-auto",
    idea: "fe-displacement-map-identity + context-alpha-false-desync + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 2,
    slug: "fe-displace create-image-bitmap-premultiply contain",
    idea: "fe-displacement-map-identity + create-image-bitmap-premultiply + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "fe-displace create-image-bitmap-pixelated overflow-min",
    idea: "fe-displacement-map-identity + create-image-bitmap-pixelated + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "fe-displace bitmap-close block-svg",
    idea: "fe-displacement-map-identity + bitmap-close + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "fe-displace svg-dataurl-double-encode chromium-leaf",
    idea: "fe-displacement-map-identity + svg-dataurl-double-encode + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 6,
    slug: "fe-displace v2-double-svg-encode bare",
    idea: "fe-displacement-map-identity + v2-double-svg-encode + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "fe-displace h2-supersample-dpr-lt2 overflow",
    idea: "fe-displacement-map-identity + h2-supersample-dpr-lt2 + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "fe-displace double-raster-difference leaf",
    idea: "fe-displacement-map-identity + double-raster-difference + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "fe-displace element-capture-bitmap kerning",
    idea: "fe-displacement-map-identity + element-capture-bitmap + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 10,
    slug: "fe-displace canvas-from-live shape",
    idea: "fe-displacement-map-identity + canvas-from-live + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "fe-displace context-alpha-false-desync img-auto alt2",
    idea: "fe-displacement-map-identity + context-alpha-false-desync + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "fe-displace create-image-bitmap-premultiply contain alt2",
    idea: "fe-displacement-map-identity + create-image-bitmap-premultiply + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "fe-displace create-image-bitmap-pixelated overflow-min alt2",
    idea: "fe-displacement-map-identity + create-image-bitmap-pixelated + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 14,
    slug: "fe-displace bitmap-close block-svg alt2",
    idea: "fe-displacement-map-identity + bitmap-close + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "fe-displace svg-dataurl-double-encode chromium-leaf alt2",
    idea: "fe-displacement-map-identity + svg-dataurl-double-encode + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "fe-displace v2-double-svg-encode bare alt2",
    idea: "fe-displacement-map-identity + v2-double-svg-encode + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "fe-displace h2-supersample-dpr-lt2 overflow alt2",
    idea: "fe-displacement-map-identity + h2-supersample-dpr-lt2 + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 18,
    slug: "fe-displace double-raster-difference leaf alt2",
    idea: "fe-displacement-map-identity + double-raster-difference + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "fe-displace element-capture-bitmap kerning alt2",
    idea: "fe-displacement-map-identity + element-capture-bitmap + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "fe-displace canvas-from-live shape alt2",
    idea: "fe-displacement-map-identity + canvas-from-live + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "fe-displacement-map-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "fe-displace context-alpha-false-desync img-auto + fo-0",
    idea: "fe-displacement-map-identity + context-alpha-false-desync + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 22,
    slug: "fe-displace create-image-bitmap-premultiply contain + fo-0",
    idea: "fe-displacement-map-identity + create-image-bitmap-premultiply + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 23,
    slug: "fe-displace create-image-bitmap-pixelated overflow-min + fo-0",
    idea: "fe-displacement-map-identity + create-image-bitmap-pixelated + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 24,
    slug: "fe-displace bitmap-close block-svg + fo-0",
    idea: "fe-displacement-map-identity + bitmap-close + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 25,
    slug: "fe-displace svg-dataurl-double-encode chromium-leaf + fo-0",
    idea: "fe-displacement-map-identity + svg-dataurl-double-encode + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 26,
    slug: "fe-displace v2-double-svg-encode bare + fo-0",
    idea: "fe-displacement-map-identity + v2-double-svg-encode + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "fe-displace h2-supersample-dpr-lt2 overflow + fo-0",
    idea: "fe-displacement-map-identity + h2-supersample-dpr-lt2 + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 28,
    slug: "fe-displace double-raster-difference leaf + fo-0",
    idea: "fe-displacement-map-identity + double-raster-difference + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 29,
    slug: "fe-displace element-capture-bitmap kerning + fo-0",
    idea: "fe-displacement-map-identity + element-capture-bitmap + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 30,
    slug: "fe-displace canvas-from-live shape + fo-0",
    idea: "fe-displacement-map-identity + canvas-from-live + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "fe-displace context-alpha-false-desync img-auto + fo-0 alt2",
    idea: "fe-displacement-map-identity + context-alpha-false-desync + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 32,
    slug: "fe-displace create-image-bitmap-premultiply contain + fo-0 alt2",
    idea: "fe-displacement-map-identity + create-image-bitmap-premultiply + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-premultiply",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 33,
    slug: "fe-displace create-image-bitmap-pixelated overflow-min + fo-0 alt2",
    idea: "fe-displacement-map-identity + create-image-bitmap-pixelated + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 34,
    slug: "fe-displace bitmap-close block-svg + fo-0 alt2",
    idea: "fe-displacement-map-identity + bitmap-close + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmap-close",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 35,
    slug: "fe-displace svg-dataurl-double-encode chromium-leaf + fo-0 alt2",
    idea: "fe-displacement-map-identity + svg-dataurl-double-encode + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 36,
    slug: "fe-displace v2-double-svg-encode bare + fo-0 alt2",
    idea: "fe-displacement-map-identity + v2-double-svg-encode + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 37,
    slug: "fe-displace h2-supersample-dpr-lt2 overflow + fo-0 alt2",
    idea: "fe-displacement-map-identity + h2-supersample-dpr-lt2 + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 38,
    slug: "fe-displace double-raster-difference leaf + fo-0 alt2",
    idea: "fe-displacement-map-identity + double-raster-difference + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 39,
    slug: "fe-displace element-capture-bitmap kerning + fo-0 alt2",
    idea: "fe-displacement-map-identity + element-capture-bitmap + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 40,
    slug: "fe-displace canvas-from-live shape + fo-0 alt2",
    idea: "fe-displacement-map-identity + canvas-from-live + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w27: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w27: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w27-${num}`,
    label: `Loop AI b13 w27 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w27; RASTER PRIMARY fe-displacement-map-identity; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w27: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
