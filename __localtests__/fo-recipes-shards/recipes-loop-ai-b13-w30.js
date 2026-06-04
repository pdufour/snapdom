/**
 * Loop AI batch-13 FO recipe shard (worker 30) — RASTER PRIMARY: fo-border-linear-gradient-stroke.
 * linearGradient stroke on FO border box + raster timing
 * 40 recipes: loop-ai-b13-w30-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "gradient-stroke img-srcset-1x shape",
    idea: "fo-border-linear-gradient-stroke + img-srcset-1x + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "gradient-stroke phantom-font-prime img-auto",
    idea: "fo-border-linear-gradient-stroke + phantom-font-prime + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "gradient-stroke composite-copy contain",
    idea: "fo-border-linear-gradient-stroke + composite-copy + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "gradient-stroke flip-y overflow-min",
    idea: "fo-border-linear-gradient-stroke + flip-y + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-border-linear-gradient-stroke",
    },
  },
  {
    n: 5,
    slug: "gradient-stroke canvas-pixelated block-svg",
    idea: "fo-border-linear-gradient-stroke + canvas-pixelated + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "gradient-stroke create-image-bitmap chromium-leaf",
    idea: "fo-border-linear-gradient-stroke + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "gradient-stroke two-stage bare",
    idea: "fo-border-linear-gradient-stroke + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "gradient-stroke triple-raf-flush overflow",
    idea: "fo-border-linear-gradient-stroke + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-border-linear-gradient-stroke",
    },
  },
  {
    n: 9,
    slug: "gradient-stroke webp-roundtrip leaf",
    idea: "fo-border-linear-gradient-stroke + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "gradient-stroke bitmaprenderer-transfer kerning",
    idea: "fo-border-linear-gradient-stroke + bitmaprenderer-transfer + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "gradient-stroke img-srcset-1x shape alt2",
    idea: "fo-border-linear-gradient-stroke + img-srcset-1x + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "gradient-stroke phantom-font-prime img-auto alt2",
    idea: "fo-border-linear-gradient-stroke + phantom-font-prime + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-border-linear-gradient-stroke",
    },
  },
  {
    n: 13,
    slug: "gradient-stroke composite-copy contain alt2",
    idea: "fo-border-linear-gradient-stroke + composite-copy + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "gradient-stroke flip-y overflow-min alt2",
    idea: "fo-border-linear-gradient-stroke + flip-y + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "gradient-stroke canvas-pixelated block-svg alt2",
    idea: "fo-border-linear-gradient-stroke + canvas-pixelated + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "gradient-stroke create-image-bitmap chromium-leaf alt2",
    idea: "fo-border-linear-gradient-stroke + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-border-linear-gradient-stroke",
    },
  },
  {
    n: 17,
    slug: "gradient-stroke two-stage bare alt2",
    idea: "fo-border-linear-gradient-stroke + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "gradient-stroke triple-raf-flush overflow alt2",
    idea: "fo-border-linear-gradient-stroke + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "gradient-stroke webp-roundtrip leaf alt2",
    idea: "fo-border-linear-gradient-stroke + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-border-linear-gradient-stroke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "gradient-stroke bitmaprenderer-transfer kerning alt2",
    idea: "fo-border-linear-gradient-stroke + bitmaprenderer-transfer + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-border-linear-gradient-stroke",
    },
  },
  {
    n: 21,
    slug: "gradient-stroke img-srcset-1x shape + fo-0",
    idea: "fo-border-linear-gradient-stroke + img-srcset-1x + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 22,
    slug: "gradient-stroke phantom-font-prime img-auto + fo-0",
    idea: "fo-border-linear-gradient-stroke + phantom-font-prime + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 23,
    slug: "gradient-stroke composite-copy contain + fo-0",
    idea: "fo-border-linear-gradient-stroke + composite-copy + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 24,
    slug: "gradient-stroke flip-y overflow-min + fo-0",
    idea: "fo-border-linear-gradient-stroke + flip-y + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 25,
    slug: "gradient-stroke canvas-pixelated block-svg + fo-0",
    idea: "fo-border-linear-gradient-stroke + canvas-pixelated + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 26,
    slug: "gradient-stroke create-image-bitmap chromium-leaf + fo-0",
    idea: "fo-border-linear-gradient-stroke + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 27,
    slug: "gradient-stroke two-stage bare + fo-0 + explicit-xmlns",
    idea: "fo-border-linear-gradient-stroke + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 28,
    slug: "gradient-stroke triple-raf-flush overflow + fo-0 + explicit-xmlns",
    idea: "fo-border-linear-gradient-stroke + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 29,
    slug: "gradient-stroke webp-roundtrip leaf + fo-0 + explicit-xmlns",
    idea: "fo-border-linear-gradient-stroke + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 30,
    slug: "gradient-stroke bitmaprenderer-transfer kerning + fo-0",
    idea: "fo-border-linear-gradient-stroke + bitmaprenderer-transfer + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 31,
    slug: "gradient-stroke img-srcset-1x shape + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + img-srcset-1x + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 32,
    slug: "gradient-stroke phantom-font-prime img-auto + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + phantom-font-prime + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 33,
    slug: "gradient-stroke composite-copy contain + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + composite-copy + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 34,
    slug: "gradient-stroke flip-y overflow-min + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + flip-y + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 35,
    slug: "gradient-stroke canvas-pixelated block-svg + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + canvas-pixelated + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "gradient-stroke create-image-bitmap chromium-leaf + fo-0 + explicit-xmlns",
    idea: "fo-border-linear-gradient-stroke + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 37,
    slug: "gradient-stroke two-stage bare + fo-0 + explicit-xmlns alt2",
    idea: "fo-border-linear-gradient-stroke + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 38,
    slug: "gradient-stroke triple-raf-flush overflow + fo-0",
    idea: "fo-border-linear-gradient-stroke + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 39,
    slug: "gradient-stroke webp-roundtrip leaf + fo-0 + explicit-xmlns alt2",
    idea: "fo-border-linear-gradient-stroke + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 40,
    slug: "gradient-stroke bitmaprenderer-transfer kerning + fo-0 alt2",
    idea: "fo-border-linear-gradient-stroke + bitmaprenderer-transfer + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w30: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w30: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w30-${num}`,
    label: `Loop AI b13 w30 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w30; RASTER PRIMARY fo-border-linear-gradient-stroke; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w30: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
