/**
 * Loop AI batch-13 FO recipe shard (worker 39) — RASTER PRIMARY: parse-svg-dom-reserialize.
 * radical DOM parse+reserialize before raster — serialization round-trip
 * 40 recipes: loop-ai-b13-w39-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "reserialize double-raster-average img-auto",
    idea: "parse-svg-dom-reserialize + double-raster-average + image-rendering auto — DOM round-trip before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 2,
    slug: "reserialize supersample-downscale contain",
    idea: "parse-svg-dom-reserialize + supersample-downscale + contain paint min — DOM round-trip before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 3,
    slug: "reserialize h2-supersample-dpr-lt2 overflow-min",
    idea: "parse-svg-dom-reserialize + h2-supersample-dpr-lt2 + svg block overflow — DOM round-trip before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 4,
    slug: "reserialize bitmaprenderer-transfer block-svg",
    idea: "parse-svg-dom-reserialize + bitmaprenderer-transfer + svg display block — DOM round-trip before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: undefined,
    },
  },
  {
    n: 5,
    slug: "reserialize img-srcset-1x chromium-leaf",
    idea: "parse-svg-dom-reserialize + img-srcset-1x + Chromium copy leaf — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 6,
    slug: "reserialize node-layer-datauri-blob bare",
    idea: "parse-svg-dom-reserialize + node-layer-datauri-blob + bare raster — DOM round-trip before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 7,
    slug: "reserialize decode-interval overflow",
    idea: "parse-svg-dom-reserialize + decode-interval + FO overflow visible — DOM round-trip before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 8,
    slug: "reserialize double-raf leaf",
    idea: "parse-svg-dom-reserialize + double-raf + FO leaf min-width — DOM round-trip before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 9,
    slug: "reserialize fonts-ready-interval kerning",
    idea: "parse-svg-dom-reserialize + fonts-ready-interval + FO kerning normal — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "reserialize blob-url-decode-interval shape",
    idea: "parse-svg-dom-reserialize + blob-url-decode-interval + shape-rendering geometric — DOM round-trip before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 11,
    slug: "reserialize create-image-bitmap img-auto",
    idea: "parse-svg-dom-reserialize + create-image-bitmap + image-rendering auto — DOM round-trip before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 12,
    slug: "reserialize offscreen-canvas contain",
    idea: "parse-svg-dom-reserialize + offscreen-canvas + contain paint min — DOM round-trip before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 13,
    slug: "reserialize triple-raf-flush overflow-min",
    idea: "parse-svg-dom-reserialize + triple-raf-flush + svg block overflow — DOM round-trip before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 14,
    slug: "reserialize webp-roundtrip block-svg",
    idea: "parse-svg-dom-reserialize + webp-roundtrip + svg display block — DOM round-trip before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "reserialize phantom-font-prime chromium-leaf",
    idea: "parse-svg-dom-reserialize + phantom-font-prime + Chromium copy leaf — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 16,
    slug: "reserialize scale-down-up bare",
    idea: "parse-svg-dom-reserialize + scale-down-up + bare raster — DOM round-trip before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 17,
    slug: "reserialize h2-frac-draw overflow",
    idea: "parse-svg-dom-reserialize + h2-frac-draw + FO overflow visible — DOM round-trip before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 18,
    slug: "reserialize composite-copy leaf",
    idea: "parse-svg-dom-reserialize + composite-copy + FO leaf min-width — DOM round-trip before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 19,
    slug: "reserialize flip-y kerning",
    idea: "parse-svg-dom-reserialize + flip-y + FO kerning normal — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "reserialize canvas-filter-invert shape",
    idea: "parse-svg-dom-reserialize + canvas-filter-invert + shape-rendering geometric — DOM round-trip before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      radicalPatch: "parse-svg-dom-reserialize",
    },
  },
  {
    n: 21,
    slug: "reserialize double-raster-average img-auto + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + double-raster-average + image-rendering auto — DOM round-trip before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "reserialize supersample-downscale contain + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + supersample-downscale + contain paint min — DOM round-trip before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "reserialize h2-supersample-dpr-lt2 overflow-min + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + h2-supersample-dpr-lt2 + svg block overflow — DOM round-trip before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "reserialize bitmaprenderer-transfer block-svg + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + bitmaprenderer-transfer + svg display block — DOM round-trip before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: undefined,
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "reserialize img-srcset-1x chromium-leaf + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + img-srcset-1x + Chromium copy leaf — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "reserialize node-layer-datauri-blob bare + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + node-layer-datauri-blob + bare raster — DOM round-trip before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "reserialize decode-interval overflow + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + decode-interval + FO overflow visible — DOM round-trip before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "reserialize double-raf leaf + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + double-raf + FO leaf min-width — DOM round-trip before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "reserialize fonts-ready-interval kerning + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + fonts-ready-interval + FO kerning normal — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "reserialize blob-url-decode-interval shape + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + blob-url-decode-interval + shape-rendering geometric — DOM round-trip before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "reserialize create-image-bitmap img-auto + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + create-image-bitmap + image-rendering auto — DOM round-trip before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "reserialize offscreen-canvas contain + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + offscreen-canvas + contain paint min — DOM round-trip before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "reserialize triple-raf-flush overflow-min + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + triple-raf-flush + svg block overflow — DOM round-trip before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "reserialize webp-roundtrip block-svg + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + webp-roundtrip + svg display block — DOM round-trip before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "reserialize phantom-font-prime chromium-leaf + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + phantom-font-prime + Chromium copy leaf — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "reserialize scale-down-up bare + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + scale-down-up + bare raster — DOM round-trip before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "reserialize h2-frac-draw overflow + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + h2-frac-draw + FO overflow visible — DOM round-trip before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "reserialize composite-copy leaf + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + composite-copy + FO leaf min-width — DOM round-trip before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "reserialize flip-y kerning + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + flip-y + FO kerning normal — DOM round-trip before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      radicalPatch: "parse-svg-dom-reserialize",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "reserialize canvas-filter-invert shape + filter-noop-defs",
    idea: "parse-svg-dom-reserialize + canvas-filter-invert + shape-rendering geometric — DOM round-trip before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      radicalPatch: "parse-svg-dom-reserialize",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w39: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w39: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w39-${num}`,
    label: `Loop AI b13 w39 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w39; RASTER PRIMARY parse-svg-dom-reserialize; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w39: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
