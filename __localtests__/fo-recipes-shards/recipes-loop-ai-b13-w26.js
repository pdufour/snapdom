/**
 * Loop AI batch-13 FO recipe shard (worker 26) — RASTER PRIMARY: fe-merge-empty filter.
 * empty feMerge node on FO filter chain + raster paths
 * 40 recipes: loop-ai-b13-w26-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fe-merge h2-frac-draw leaf",
    idea: "fe-merge-empty + h2-frac-draw + FO leaf min-width — empty merge filter flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "fe-merge scale-down-up kerning",
    idea: "fe-merge-empty + scale-down-up + FO kerning normal — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "fe-merge bitmaprenderer-transfer shape",
    idea: "fe-merge-empty + bitmaprenderer-transfer + shape-rendering geometric — empty merge filter flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "fe-merge img-srcset-1x img-auto",
    idea: "fe-merge-empty + img-srcset-1x + image-rendering auto — empty merge filter flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 5,
    slug: "fe-merge phantom-font-prime contain",
    idea: "fe-merge-empty + phantom-font-prime + contain paint min — empty merge filter flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "fe-merge composite-copy overflow-min",
    idea: "fe-merge-empty + composite-copy + svg block overflow — empty merge filter flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "fe-merge flip-y block-svg",
    idea: "fe-merge-empty + flip-y + svg display block — empty merge filter flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "fe-merge canvas-filter-invert chromium-leaf",
    idea: "fe-merge-empty + canvas-filter-invert + Chromium copy leaf — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 9,
    slug: "fe-merge double-raster-average bare",
    idea: "fe-merge-empty + double-raster-average + bare raster — empty merge filter flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "fe-merge supersample-downscale overflow",
    idea: "fe-merge-empty + supersample-downscale + FO overflow visible — empty merge filter flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "fe-merge h2-frac-draw leaf alt2",
    idea: "fe-merge-empty + h2-frac-draw + FO leaf min-width — empty merge filter flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "fe-merge scale-down-up kerning alt2",
    idea: "fe-merge-empty + scale-down-up + FO kerning normal — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 13,
    slug: "fe-merge bitmaprenderer-transfer shape alt2",
    idea: "fe-merge-empty + bitmaprenderer-transfer + shape-rendering geometric — empty merge filter flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "fe-merge img-srcset-1x img-auto alt2",
    idea: "fe-merge-empty + img-srcset-1x + image-rendering auto — empty merge filter flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "fe-merge phantom-font-prime contain alt2",
    idea: "fe-merge-empty + phantom-font-prime + contain paint min — empty merge filter flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "fe-merge composite-copy overflow-min alt2",
    idea: "fe-merge-empty + composite-copy + svg block overflow — empty merge filter flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 17,
    slug: "fe-merge flip-y block-svg alt2",
    idea: "fe-merge-empty + flip-y + svg display block — empty merge filter flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "fe-merge canvas-filter-invert chromium-leaf alt2",
    idea: "fe-merge-empty + canvas-filter-invert + Chromium copy leaf — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "fe-merge double-raster-average bare alt2",
    idea: "fe-merge-empty + double-raster-average + bare raster — empty merge filter flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fe-merge-empty",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "fe-merge supersample-downscale overflow alt2",
    idea: "fe-merge-empty + supersample-downscale + FO overflow visible — empty merge filter flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 21,
    slug: "fe-merge h2-frac-draw leaf + fo-0",
    idea: "fe-merge-empty + h2-frac-draw + FO leaf min-width — empty merge filter flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 22,
    slug: "fe-merge scale-down-up kerning + fo-0",
    idea: "fe-merge-empty + scale-down-up + FO kerning normal — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 23,
    slug: "fe-merge bitmaprenderer-transfer shape + fo-0",
    idea: "fe-merge-empty + bitmaprenderer-transfer + shape-rendering geometric — empty merge filter flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 24,
    slug: "fe-merge img-srcset-1x img-auto + fo-0",
    idea: "fe-merge-empty + img-srcset-1x + image-rendering auto — empty merge filter flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 25,
    slug: "fe-merge phantom-font-prime contain + fo-0",
    idea: "fe-merge-empty + phantom-font-prime + contain paint min — empty merge filter flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 26,
    slug: "fe-merge composite-copy overflow-min + fo-0",
    idea: "fe-merge-empty + composite-copy + svg block overflow — empty merge filter flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 27,
    slug: "fe-merge flip-y block-svg + fo-0",
    idea: "fe-merge-empty + flip-y + svg display block — empty merge filter flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 28,
    slug: "fe-merge canvas-filter-invert chromium-leaf + fo-0",
    idea: "fe-merge-empty + canvas-filter-invert + Chromium copy leaf — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 29,
    slug: "fe-merge double-raster-average bare + fo-0",
    idea: "fe-merge-empty + double-raster-average + bare raster — empty merge filter flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 30,
    slug: "fe-merge supersample-downscale overflow + fo-0",
    idea: "fe-merge-empty + supersample-downscale + FO overflow visible — empty merge filter flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 31,
    slug: "fe-merge h2-frac-draw leaf + fo-0 alt2",
    idea: "fe-merge-empty + h2-frac-draw + FO leaf min-width — empty merge filter flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 32,
    slug: "fe-merge scale-down-up kerning + fo-0 alt2",
    idea: "fe-merge-empty + scale-down-up + FO kerning normal — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 33,
    slug: "fe-merge bitmaprenderer-transfer shape + fo-0 alt2",
    idea: "fe-merge-empty + bitmaprenderer-transfer + shape-rendering geometric — empty merge filter flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 34,
    slug: "fe-merge img-srcset-1x img-auto + fo-0 alt2",
    idea: "fe-merge-empty + img-srcset-1x + image-rendering auto — empty merge filter flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 35,
    slug: "fe-merge phantom-font-prime contain + fo-0 alt2",
    idea: "fe-merge-empty + phantom-font-prime + contain paint min — empty merge filter flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "fe-merge composite-copy overflow-min + fo-0 alt2",
    idea: "fe-merge-empty + composite-copy + svg block overflow — empty merge filter flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 37,
    slug: "fe-merge flip-y block-svg + fo-0 alt2",
    idea: "fe-merge-empty + flip-y + svg display block — empty merge filter flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 38,
    slug: "fe-merge canvas-filter-invert chromium-leaf + fo-0 alt2",
    idea: "fe-merge-empty + canvas-filter-invert + Chromium copy leaf — empty merge filter flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 39,
    slug: "fe-merge double-raster-average bare + fo-0 alt2",
    idea: "fe-merge-empty + double-raster-average + bare raster — empty merge filter flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 40,
    slug: "fe-merge supersample-downscale overflow + fo-0 alt2",
    idea: "fe-merge-empty + supersample-downscale + FO overflow visible — empty merge filter flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w26: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w26: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w26-${num}`,
    label: `Loop AI b13 w26 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w26; RASTER PRIMARY fe-merge-empty filter; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w26: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
