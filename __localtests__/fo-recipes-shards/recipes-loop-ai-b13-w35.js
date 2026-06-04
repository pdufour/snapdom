/**
 * Loop AI batch-13 FO recipe shard (worker 35) — RASTER PRIMARY: monkeypatch h2-raster-normalize.
 * h2-raster-normalize-capture + h2 capture CSS monkeypatches
 * 40 recipes: loop-ai-b13-w35-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "mp-h2-container-reset-capture two-stage overflow-min",
    idea: "monkeypatch h2-container-reset-capture + two-stage + svg block overflow — h2 normalize at capture/raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "two-stage",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "mp-h2-raster-normalize-capture scale-down-up block-svg",
    idea: "monkeypatch h2-raster-normalize-capture + scale-down-up + svg display block — h2 normalize at capture/raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 3,
    slug: "mp-h2-fo-normalize-full h2-frac-draw chromium-leaf",
    idea: "monkeypatch h2-fo-normalize-full + h2-frac-draw + Chromium copy leaf — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      monkeypatch: "h2-fo-normalize-full",
    },
  },
  {
    n: 4,
    slug: "mp-h2-fo-internal-star-capture h2-supersample-dpr-lt2 bare",
    idea: "monkeypatch h2-fo-internal-star-capture + h2-supersample-dpr-lt2 + bare raster — h2 normalize at capture/raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      monkeypatch: "h2-fo-internal-star-capture",
    },
  },
  {
    n: 5,
    slug: "mp-h2-container-reset-capture decode-interval overflow",
    idea: "monkeypatch h2-container-reset-capture + decode-interval + FO overflow visible — h2 normalize at capture/raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "mp-h2-raster-normalize-capture fonts-ready-interval leaf",
    idea: "monkeypatch h2-raster-normalize-capture + fonts-ready-interval + FO leaf min-width — h2 normalize at capture/raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 7,
    slug: "mp-h2-fo-normalize-full double-raf kerning",
    idea: "monkeypatch h2-fo-normalize-full + double-raf + FO kerning normal — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      monkeypatch: "h2-fo-normalize-full",
    },
  },
  {
    n: 8,
    slug: "mp-h2-fo-internal-star-capture triple-raf-flush shape",
    idea: "monkeypatch h2-fo-internal-star-capture + triple-raf-flush + shape-rendering geometric — h2 normalize at capture/raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      monkeypatch: "h2-fo-internal-star-capture",
    },
  },
  {
    n: 9,
    slug: "mp-h2-container-reset-capture blob-url-decode-interval img-auto",
    idea: "monkeypatch h2-container-reset-capture + blob-url-decode-interval + image-rendering auto — h2 normalize at capture/raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "mp-h2-raster-normalize-capture create-image-bitmap contain",
    idea: "monkeypatch h2-raster-normalize-capture + create-image-bitmap + contain paint min — h2 normalize at capture/raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 11,
    slug: "mp-h2-fo-normalize-full two-stage overflow-min",
    idea: "monkeypatch h2-fo-normalize-full + two-stage + svg block overflow — h2 normalize at capture/raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "two-stage",
      monkeypatch: "h2-fo-normalize-full",
    },
  },
  {
    n: 12,
    slug: "mp-h2-fo-internal-star-capture scale-down-up block-svg",
    idea: "monkeypatch h2-fo-internal-star-capture + scale-down-up + svg display block — h2 normalize at capture/raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      monkeypatch: "h2-fo-internal-star-capture",
    },
  },
  {
    n: 13,
    slug: "mp-h2-container-reset-capture h2-frac-draw chromium-leaf",
    idea: "monkeypatch h2-container-reset-capture + h2-frac-draw + Chromium copy leaf — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "mp-h2-raster-normalize-capture h2-supersample-dpr-lt2 bare",
    idea: "monkeypatch h2-raster-normalize-capture + h2-supersample-dpr-lt2 + bare raster — h2 normalize at capture/raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 15,
    slug: "mp-h2-fo-normalize-full decode-interval overflow",
    idea: "monkeypatch h2-fo-normalize-full + decode-interval + FO overflow visible — h2 normalize at capture/raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "h2-fo-normalize-full",
    },
  },
  {
    n: 16,
    slug: "mp-h2-fo-internal-star-capture fonts-ready-interval leaf",
    idea: "monkeypatch h2-fo-internal-star-capture + fonts-ready-interval + FO leaf min-width — h2 normalize at capture/raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      monkeypatch: "h2-fo-internal-star-capture",
    },
  },
  {
    n: 17,
    slug: "mp-h2-container-reset-capture double-raf kerning",
    idea: "monkeypatch h2-container-reset-capture + double-raf + FO kerning normal — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "mp-h2-raster-normalize-capture triple-raf-flush shape",
    idea: "monkeypatch h2-raster-normalize-capture + triple-raf-flush + shape-rendering geometric — h2 normalize at capture/raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 19,
    slug: "mp-h2-fo-normalize-full blob-url-decode-interval img-auto",
    idea: "monkeypatch h2-fo-normalize-full + blob-url-decode-interval + image-rendering auto — h2 normalize at capture/raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "h2-fo-normalize-full",
    },
  },
  {
    n: 20,
    slug: "mp-h2-fo-internal-star-capture create-image-bitmap contain",
    idea: "monkeypatch h2-fo-internal-star-capture + create-image-bitmap + contain paint min — h2 normalize at capture/raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      monkeypatch: "h2-fo-internal-star-capture",
    },
  },
  {
    n: 21,
    slug: "mp-h2-container-reset-capture two-stage overflow-min + filter-noop-defs",
    idea: "monkeypatch h2-container-reset-capture + two-stage + svg block overflow — h2 normalize at capture/raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "two-stage",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "mp-h2-raster-normalize-capture scale-down-up block-svg + filter-noop-defs",
    idea: "monkeypatch h2-raster-normalize-capture + scale-down-up + svg display block — h2 normalize at capture/raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      monkeypatch: "h2-raster-normalize-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "mp-h2-fo-normalize-full h2-frac-draw chromium-leaf + filter-noop-defs",
    idea: "monkeypatch h2-fo-normalize-full + h2-frac-draw + Chromium copy leaf — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      monkeypatch: "h2-fo-normalize-full",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "mp-h2-fo-internal-star-capture h2-supersample-dpr-lt2 bare + filter-noop-defs",
    idea: "monkeypatch h2-fo-internal-star-capture + h2-supersample-dpr-lt2 + bare raster — h2 normalize at capture/raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      monkeypatch: "h2-fo-internal-star-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "mp-h2-container-reset-capture decode-interval overflow + filter-noop-defs",
    idea: "monkeypatch h2-container-reset-capture + decode-interval + FO overflow visible — h2 normalize at capture/raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "mp-h2-raster-normalize-capture fonts-ready-interval leaf + filter-noop-defs",
    idea: "monkeypatch h2-raster-normalize-capture + fonts-ready-interval + FO leaf min-width — h2 normalize at capture/raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      monkeypatch: "h2-raster-normalize-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "mp-h2-fo-normalize-full double-raf kerning + filter-noop-defs",
    idea: "monkeypatch h2-fo-normalize-full + double-raf + FO kerning normal — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      monkeypatch: "h2-fo-normalize-full",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "mp-h2-fo-internal-star-capture triple-raf-flush shape + filter-noop-defs",
    idea: "monkeypatch h2-fo-internal-star-capture + triple-raf-flush + shape-rendering geometric — h2 normalize at capture/raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      monkeypatch: "h2-fo-internal-star-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "mp-h2-container-reset-capture blob-url-decode-interval img-auto + filter-noop-defs",
    idea: "monkeypatch h2-container-reset-capture + blob-url-decode-interval + image-rendering auto — h2 normalize at capture/raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "mp-h2-raster-normalize-capture create-image-bitmap contain + filter-noop-defs",
    idea: "monkeypatch h2-raster-normalize-capture + create-image-bitmap + contain paint min — h2 normalize at capture/raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      monkeypatch: "h2-raster-normalize-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "mp-h2-fo-normalize-full two-stage overflow-min + filter-noop-defs",
    idea: "monkeypatch h2-fo-normalize-full + two-stage + svg block overflow — h2 normalize at capture/raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "two-stage",
      monkeypatch: "h2-fo-normalize-full",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "mp-h2-fo-internal-star-capture scale-down-up block-svg + filter-noop-defs",
    idea: "monkeypatch h2-fo-internal-star-capture + scale-down-up + svg display block — h2 normalize at capture/raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      monkeypatch: "h2-fo-internal-star-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "mp-h2-container-reset-capture h2-frac-draw chromium-leaf + filter-noop-defs",
    idea: "monkeypatch h2-container-reset-capture + h2-frac-draw + Chromium copy leaf — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "mp-h2-raster-normalize-capture h2-supersample-dpr-lt2 bare + filter-noop-defs",
    idea: "monkeypatch h2-raster-normalize-capture + h2-supersample-dpr-lt2 + bare raster — h2 normalize at capture/raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      monkeypatch: "h2-raster-normalize-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "mp-h2-fo-normalize-full decode-interval overflow + filter-noop-defs",
    idea: "monkeypatch h2-fo-normalize-full + decode-interval + FO overflow visible — h2 normalize at capture/raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "h2-fo-normalize-full",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "mp-h2-fo-internal-star-capture fonts-ready-interval leaf + filter-noop-defs",
    idea: "monkeypatch h2-fo-internal-star-capture + fonts-ready-interval + FO leaf min-width — h2 normalize at capture/raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      monkeypatch: "h2-fo-internal-star-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "mp-h2-container-reset-capture double-raf kerning + filter-noop-defs",
    idea: "monkeypatch h2-container-reset-capture + double-raf + FO kerning normal — h2 normalize at capture/raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      monkeypatch: "h2-container-reset-capture",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "mp-h2-raster-normalize-capture triple-raf-flush shape + filter-noop-defs",
    idea: "monkeypatch h2-raster-normalize-capture + triple-raf-flush + shape-rendering geometric — h2 normalize at capture/raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      monkeypatch: "h2-raster-normalize-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "mp-h2-fo-normalize-full blob-url-decode-interval img-auto + filter-noop-defs",
    idea: "monkeypatch h2-fo-normalize-full + blob-url-decode-interval + image-rendering auto — h2 normalize at capture/raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "h2-fo-normalize-full",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "mp-h2-fo-internal-star-capture create-image-bitmap contain + filter-noop-defs",
    idea: "monkeypatch h2-fo-internal-star-capture + create-image-bitmap + contain paint min — h2 normalize at capture/raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      monkeypatch: "h2-fo-internal-star-capture",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w35: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w35: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w35-${num}`,
    label: `Loop AI b13 w35 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w35; RASTER PRIMARY monkeypatch h2-raster-normalize; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w35: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
