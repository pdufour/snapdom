/**
 * Loop AI batch-13 FO recipe shard (worker 31) — RASTER PRIMARY: svg-filter-pattern-border bundle.
 * combined pattern+filter+border SVG defs bundle on FO
 * 40 recipes: loop-ai-b13-w31-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "filter-bundle blob-url-fetch-revoke overflow-min",
    idea: "svg-filter-pattern-border-bundle + blob-url-fetch-revoke + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-fetch-revoke",
      foSvgPatch: "svg-filter-pattern-border-bundle",
    },
  },
  {
    n: 2,
    slug: "filter-bundle decode-via-blob block-svg",
    idea: "svg-filter-pattern-border-bundle + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "filter-bundle canvas-filter-invert chromium-leaf",
    idea: "svg-filter-pattern-border-bundle + canvas-filter-invert + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "filter-bundle double-raster-average bare",
    idea: "svg-filter-pattern-border-bundle + double-raster-average + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "filter-bundle double-raster-difference overflow",
    idea: "svg-filter-pattern-border-bundle + double-raster-difference + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "svg-filter-pattern-border-bundle",
    },
  },
  {
    n: 6,
    slug: "filter-bundle supersample-downscale leaf",
    idea: "svg-filter-pattern-border-bundle + supersample-downscale + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "filter-bundle h2-supersample-dpr-lt2 kerning",
    idea: "svg-filter-pattern-border-bundle + h2-supersample-dpr-lt2 + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "filter-bundle h2-frac-draw shape",
    idea: "svg-filter-pattern-border-bundle + h2-frac-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "filter-bundle scale-down-up img-auto",
    idea: "svg-filter-pattern-border-bundle + scale-down-up + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "svg-filter-pattern-border-bundle",
    },
  },
  {
    n: 10,
    slug: "filter-bundle context-alpha-false-desync contain",
    idea: "svg-filter-pattern-border-bundle + context-alpha-false-desync + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "filter-bundle blob-url-fetch-revoke overflow-min alt2",
    idea: "svg-filter-pattern-border-bundle + blob-url-fetch-revoke + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-fetch-revoke",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "filter-bundle decode-via-blob block-svg alt2",
    idea: "svg-filter-pattern-border-bundle + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "filter-bundle canvas-filter-invert chromium-leaf alt2",
    idea: "svg-filter-pattern-border-bundle + canvas-filter-invert + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "svg-filter-pattern-border-bundle",
    },
  },
  {
    n: 14,
    slug: "filter-bundle double-raster-average bare alt2",
    idea: "svg-filter-pattern-border-bundle + double-raster-average + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "filter-bundle double-raster-difference overflow alt2",
    idea: "svg-filter-pattern-border-bundle + double-raster-difference + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "filter-bundle supersample-downscale leaf alt2",
    idea: "svg-filter-pattern-border-bundle + supersample-downscale + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "filter-bundle h2-supersample-dpr-lt2 kerning alt2",
    idea: "svg-filter-pattern-border-bundle + h2-supersample-dpr-lt2 + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "svg-filter-pattern-border-bundle",
    },
  },
  {
    n: 18,
    slug: "filter-bundle h2-frac-draw shape alt2",
    idea: "svg-filter-pattern-border-bundle + h2-frac-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "filter-bundle scale-down-up img-auto alt2",
    idea: "svg-filter-pattern-border-bundle + scale-down-up + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "filter-bundle context-alpha-false-desync contain alt2",
    idea: "svg-filter-pattern-border-bundle + context-alpha-false-desync + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "svg-filter-pattern-border-bundle",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "filter-bundle blob-url-fetch-revoke overflow-min + fo-0",
    idea: "svg-filter-pattern-border-bundle + blob-url-fetch-revoke + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-fetch-revoke",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 22,
    slug: "filter-bundle decode-via-blob block-svg + fo-0 + explicit-xmlns",
    idea: "svg-filter-pattern-border-bundle + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 23,
    slug: "filter-bundle canvas-filter-invert chromium-leaf + fo-0",
    idea: "svg-filter-pattern-border-bundle + canvas-filter-invert + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 24,
    slug: "filter-bundle double-raster-average bare + fo-0 + explicit-xmlns",
    idea: "svg-filter-pattern-border-bundle + double-raster-average + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 25,
    slug: "filter-bundle double-raster-difference overflow + fo-0",
    idea: "svg-filter-pattern-border-bundle + double-raster-difference + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 26,
    slug: "filter-bundle supersample-downscale leaf + fo-0",
    idea: "svg-filter-pattern-border-bundle + supersample-downscale + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "filter-bundle h2-supersample-dpr-lt2 kerning + fo-0",
    idea: "svg-filter-pattern-border-bundle + h2-supersample-dpr-lt2 + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 28,
    slug: "filter-bundle h2-frac-draw shape + fo-0",
    idea: "svg-filter-pattern-border-bundle + h2-frac-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 29,
    slug: "filter-bundle scale-down-up img-auto + fo-0",
    idea: "svg-filter-pattern-border-bundle + scale-down-up + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 30,
    slug: "filter-bundle context-alpha-false-desync contain + fo-0",
    idea: "svg-filter-pattern-border-bundle + context-alpha-false-desync + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "filter-bundle blob-url-fetch-revoke overflow-min + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + blob-url-fetch-revoke + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-fetch-revoke",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 32,
    slug: "filter-bundle decode-via-blob block-svg + fo-0 + explicit-xmlns alt2",
    idea: "svg-filter-pattern-border-bundle + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 33,
    slug: "filter-bundle canvas-filter-invert chromium-leaf + fo-0 + explicit-xmlns",
    idea: "svg-filter-pattern-border-bundle + canvas-filter-invert + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 34,
    slug: "filter-bundle double-raster-average bare + fo-0 + explicit-xmlns alt2",
    idea: "svg-filter-pattern-border-bundle + double-raster-average + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 35,
    slug: "filter-bundle double-raster-difference overflow + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + double-raster-difference + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 36,
    slug: "filter-bundle supersample-downscale leaf + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + supersample-downscale + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 37,
    slug: "filter-bundle h2-supersample-dpr-lt2 kerning + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + h2-supersample-dpr-lt2 + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 38,
    slug: "filter-bundle h2-frac-draw shape + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + h2-frac-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 39,
    slug: "filter-bundle scale-down-up img-auto + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + scale-down-up + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 40,
    slug: "filter-bundle context-alpha-false-desync contain + fo-0 alt2",
    idea: "svg-filter-pattern-border-bundle + context-alpha-false-desync + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w31: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w31: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w31-${num}`,
    label: `Loop AI b13 w31 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w31; RASTER PRIMARY svg-filter-pattern-border bundle; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w31: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
