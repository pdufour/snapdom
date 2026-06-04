/**
 * Loop AI batch-13 FO recipe shard (worker 04) — RASTER PRIMARY: bitmaprenderer-transfer.
 * ImageBitmap → ImageBitmapRenderingContext transfer path
 * 40 recipes: loop-ai-b13-w04-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "bitmaprenderer contain integer-viewbox",
    idea: "bitmaprenderer-transfer + contain paint min — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "bitmaprenderer overflow-min int-floor",
    idea: "bitmaprenderer-transfer + svg block overflow — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "bitmaprenderer block-svg round-dims",
    idea: "bitmaprenderer-transfer + svg display block — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "bitmaprenderer chromium-leaf",
    idea: "bitmaprenderer-transfer + Chromium copy leaf — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
    },
  },
  {
    n: 5,
    slug: "bitmaprenderer bare integer-viewbox",
    idea: "bitmaprenderer-transfer + bare raster — skip 2d drawImage via bitmaprenderer",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "bitmaprenderer overflow int-floor",
    idea: "bitmaprenderer-transfer + FO overflow visible — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "bitmaprenderer leaf round-dims",
    idea: "bitmaprenderer-transfer + FO leaf min-width — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "bitmaprenderer kerning",
    idea: "bitmaprenderer-transfer + FO kerning normal — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
    },
  },
  {
    n: 9,
    slug: "bitmaprenderer shape integer-viewbox",
    idea: "bitmaprenderer-transfer + shape-rendering geometric — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "bitmaprenderer img-auto int-floor",
    idea: "bitmaprenderer-transfer + image-rendering auto — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "bitmaprenderer contain round-dims",
    idea: "bitmaprenderer-transfer + contain paint min — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "bitmaprenderer overflow-min",
    idea: "bitmaprenderer-transfer + svg block overflow — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
    },
  },
  {
    n: 13,
    slug: "bitmaprenderer block-svg integer-viewbox",
    idea: "bitmaprenderer-transfer + svg display block — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 14,
    slug: "bitmaprenderer chromium-leaf int-floor",
    idea: "bitmaprenderer-transfer + Chromium copy leaf — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "bitmaprenderer bare round-dims",
    idea: "bitmaprenderer-transfer + bare raster — skip 2d drawImage via bitmaprenderer",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "bitmaprenderer overflow",
    idea: "bitmaprenderer-transfer + FO overflow visible — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
    },
  },
  {
    n: 17,
    slug: "bitmaprenderer leaf integer-viewbox",
    idea: "bitmaprenderer-transfer + FO leaf min-width — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "bitmaprenderer kerning int-floor",
    idea: "bitmaprenderer-transfer + FO kerning normal — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "bitmaprenderer shape round-dims",
    idea: "bitmaprenderer-transfer + shape-rendering geometric — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "bitmaprenderer img-auto",
    idea: "bitmaprenderer-transfer + image-rendering auto — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
    },
  },
  {
    n: 21,
    slug: "bitmaprenderer contain integer-viewbox + filter-noop-defs",
    idea: "bitmaprenderer-transfer + contain paint min — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "bitmaprenderer overflow-min int-floor + filter-noop-defs",
    idea: "bitmaprenderer-transfer + svg block overflow — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "bitmaprenderer block-svg round-dims + filter-noop-defs",
    idea: "bitmaprenderer-transfer + svg display block — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "bitmaprenderer chromium-leaf + filter-noop-defs",
    idea: "bitmaprenderer-transfer + Chromium copy leaf — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "bitmaprenderer bare integer-viewbox + filter-noop-defs",
    idea: "bitmaprenderer-transfer + bare raster — skip 2d drawImage via bitmaprenderer",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "bitmaprenderer overflow int-floor + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO overflow visible — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "bitmaprenderer leaf round-dims + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO leaf min-width — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "bitmaprenderer kerning + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO kerning normal — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "bitmaprenderer shape integer-viewbox alt2",
    idea: "bitmaprenderer-transfer + shape-rendering geometric — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 30,
    slug: "bitmaprenderer img-auto int-floor + filter-noop-defs",
    idea: "bitmaprenderer-transfer + image-rendering auto — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "bitmaprenderer contain round-dims + filter-noop-defs",
    idea: "bitmaprenderer-transfer + contain paint min — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "bitmaprenderer overflow-min + filter-noop-defs",
    idea: "bitmaprenderer-transfer + svg block overflow — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "bitmaprenderer block-svg integer-viewbox alt2",
    idea: "bitmaprenderer-transfer + svg display block — skip 2d drawImage via bitmaprenderer",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 34,
    slug: "bitmaprenderer chromium-leaf int-floor + filter-noop-defs",
    idea: "bitmaprenderer-transfer + Chromium copy leaf — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "bitmaprenderer bare round-dims + filter-noop-defs",
    idea: "bitmaprenderer-transfer + bare raster — skip 2d drawImage via bitmaprenderer",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "bitmaprenderer overflow + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO overflow visible — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "bitmaprenderer leaf integer-viewbox + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO leaf min-width — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "bitmaprenderer kerning int-floor + filter-noop-defs",
    idea: "bitmaprenderer-transfer + FO kerning normal — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "bitmaprenderer shape round-dims + filter-noop-defs",
    idea: "bitmaprenderer-transfer + shape-rendering geometric — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "bitmaprenderer img-auto + filter-noop-defs",
    idea: "bitmaprenderer-transfer + image-rendering auto — skip 2d drawImage via bitmaprenderer",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w04: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w04: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w04-${num}`,
    label: `Loop AI b13 w04 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w04; RASTER PRIMARY bitmaprenderer-transfer; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w04: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
