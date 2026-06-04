/**
 * Loop AI batch-13 FO recipe shard (worker 18) — RASTER PRIMARY: iframe-serialized-svg-decode.
 * iframe FO wrapper + decode-interval on serialized SVG string
 * 40 recipes: loop-ai-b13-w18-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "iframe-svg block-svg integer-viewbox",
    idea: "iframe-serialized-svg-decode + svg display block — iframe svg string decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "iframe-svg chromium-leaf int-floor",
    idea: "iframe-serialized-svg-decode + Chromium copy leaf — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "iframe-svg bare round-dims",
    idea: "iframe-serialized-svg-decode + bare raster — iframe svg string decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "iframe-svg overflow",
    idea: "iframe-serialized-svg-decode + FO overflow visible — iframe svg string decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
    },
  },
  {
    n: 5,
    slug: "iframe-svg leaf integer-viewbox",
    idea: "iframe-serialized-svg-decode + FO leaf min-width — iframe svg string decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "iframe-svg kerning int-floor",
    idea: "iframe-serialized-svg-decode + FO kerning normal — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "iframe-svg shape round-dims",
    idea: "iframe-serialized-svg-decode + shape-rendering geometric — iframe svg string decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "iframe-svg img-auto",
    idea: "iframe-serialized-svg-decode + image-rendering auto — iframe svg string decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
    },
  },
  {
    n: 9,
    slug: "iframe-svg contain integer-viewbox",
    idea: "iframe-serialized-svg-decode + contain paint min — iframe svg string decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "iframe-svg overflow-min int-floor",
    idea: "iframe-serialized-svg-decode + svg block overflow — iframe svg string decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "iframe-svg block-svg round-dims",
    idea: "iframe-serialized-svg-decode + svg display block — iframe svg string decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "iframe-svg chromium-leaf",
    idea: "iframe-serialized-svg-decode + Chromium copy leaf — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
    },
  },
  {
    n: 13,
    slug: "iframe-svg bare integer-viewbox",
    idea: "iframe-serialized-svg-decode + bare raster — iframe svg string decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "iframe-svg overflow int-floor",
    idea: "iframe-serialized-svg-decode + FO overflow visible — iframe svg string decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "iframe-svg leaf round-dims",
    idea: "iframe-serialized-svg-decode + FO leaf min-width — iframe svg string decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 16,
    slug: "iframe-svg kerning",
    idea: "iframe-serialized-svg-decode + FO kerning normal — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
    },
  },
  {
    n: 17,
    slug: "iframe-svg shape integer-viewbox",
    idea: "iframe-serialized-svg-decode + shape-rendering geometric — iframe svg string decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "iframe-svg img-auto int-floor",
    idea: "iframe-serialized-svg-decode + image-rendering auto — iframe svg string decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "iframe-svg contain round-dims",
    idea: "iframe-serialized-svg-decode + contain paint min — iframe svg string decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "iframe-svg overflow-min",
    idea: "iframe-serialized-svg-decode + svg block overflow — iframe svg string decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
    },
  },
  {
    n: 21,
    slug: "iframe-svg block-svg integer-viewbox + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + svg display block — iframe svg string decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "iframe-svg chromium-leaf int-floor + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + Chromium copy leaf — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "iframe-svg bare round-dims + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + bare raster — iframe svg string decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "iframe-svg overflow + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + FO overflow visible — iframe svg string decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "iframe-svg leaf integer-viewbox + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + FO leaf min-width — iframe svg string decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "iframe-svg kerning int-floor + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + FO kerning normal — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "iframe-svg shape round-dims + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + shape-rendering geometric — iframe svg string decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "iframe-svg img-auto + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + image-rendering auto — iframe svg string decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "iframe-svg contain integer-viewbox + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + contain paint min — iframe svg string decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "iframe-svg overflow-min int-floor + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + svg block overflow — iframe svg string decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "iframe-svg block-svg round-dims + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + svg display block — iframe svg string decode path",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "iframe-svg chromium-leaf + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + Chromium copy leaf — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "iframe-svg bare integer-viewbox + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + bare raster — iframe svg string decode path",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "iframe-svg overflow int-floor + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + FO overflow visible — iframe svg string decode path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "iframe-svg leaf round-dims alt2",
    idea: "iframe-serialized-svg-decode + FO leaf min-width — iframe svg string decode path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "iframe-svg kerning + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + FO kerning normal — iframe svg string decode path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "iframe-svg shape integer-viewbox + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + shape-rendering geometric — iframe svg string decode path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "iframe-svg img-auto int-floor + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + image-rendering auto — iframe svg string decode path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "iframe-svg contain round-dims + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + contain paint min — iframe svg string decode path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "iframe-serialized-svg-decode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "iframe-svg overflow-min + filter-noop-defs",
    idea: "iframe-serialized-svg-decode + svg block overflow — iframe svg string decode path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w18: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w18: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w18-${num}`,
    label: `Loop AI b13 w18 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w18; RASTER PRIMARY iframe-serialized-svg-decode; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w18: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
