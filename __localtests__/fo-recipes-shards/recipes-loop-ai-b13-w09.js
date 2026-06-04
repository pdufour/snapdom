/**
 * Loop AI batch-13 FO recipe shard (worker 09) — RASTER PRIMARY: composite-copy 2d op.
 * globalCompositeOperation copy before FO blit
 * 40 recipes: loop-ai-b13-w09-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "composite-copy overflow int-floor",
    idea: "composite-copy + FO overflow visible — copy compositing mode on decode blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "composite-copy leaf round-dims",
    idea: "composite-copy + FO leaf min-width — copy compositing mode on decode blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "composite-copy kerning",
    idea: "composite-copy + FO kerning normal — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
    },
  },
  {
    n: 4,
    slug: "composite-copy shape integer-viewbox",
    idea: "composite-copy + shape-rendering geometric — copy compositing mode on decode blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "composite-copy img-auto int-floor",
    idea: "composite-copy + image-rendering auto — copy compositing mode on decode blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "composite-copy contain round-dims",
    idea: "composite-copy + contain paint min — copy compositing mode on decode blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "composite-copy overflow-min",
    idea: "composite-copy + svg block overflow — copy compositing mode on decode blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
    },
  },
  {
    n: 8,
    slug: "composite-copy block-svg integer-viewbox",
    idea: "composite-copy + svg display block — copy compositing mode on decode blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "composite-copy chromium-leaf int-floor",
    idea: "composite-copy + Chromium copy leaf — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "composite-copy bare round-dims",
    idea: "composite-copy + bare raster — copy compositing mode on decode blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "composite-copy overflow",
    idea: "composite-copy + FO overflow visible — copy compositing mode on decode blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
    },
  },
  {
    n: 12,
    slug: "composite-copy leaf integer-viewbox",
    idea: "composite-copy + FO leaf min-width — copy compositing mode on decode blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "composite-copy kerning int-floor",
    idea: "composite-copy + FO kerning normal — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "composite-copy shape round-dims",
    idea: "composite-copy + shape-rendering geometric — copy compositing mode on decode blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "composite-copy img-auto",
    idea: "composite-copy + image-rendering auto — copy compositing mode on decode blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
    },
  },
  {
    n: 16,
    slug: "composite-copy contain integer-viewbox",
    idea: "composite-copy + contain paint min — copy compositing mode on decode blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "composite-copy overflow-min int-floor",
    idea: "composite-copy + svg block overflow — copy compositing mode on decode blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "composite-copy block-svg round-dims",
    idea: "composite-copy + svg display block — copy compositing mode on decode blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "composite-copy chromium-leaf",
    idea: "composite-copy + Chromium copy leaf — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 20,
    slug: "composite-copy bare integer-viewbox",
    idea: "composite-copy + bare raster — copy compositing mode on decode blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "composite-copy overflow int-floor + filter-noop-defs",
    idea: "composite-copy + FO overflow visible — copy compositing mode on decode blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "composite-copy leaf round-dims + filter-noop-defs",
    idea: "composite-copy + FO leaf min-width — copy compositing mode on decode blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "composite-copy kerning + filter-noop-defs",
    idea: "composite-copy + FO kerning normal — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "composite-copy shape integer-viewbox + filter-noop-defs",
    idea: "composite-copy + shape-rendering geometric — copy compositing mode on decode blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "composite-copy img-auto int-floor + filter-noop-defs",
    idea: "composite-copy + image-rendering auto — copy compositing mode on decode blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "composite-copy contain round-dims + filter-noop-defs",
    idea: "composite-copy + contain paint min — copy compositing mode on decode blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "composite-copy overflow-min + filter-noop-defs",
    idea: "composite-copy + svg block overflow — copy compositing mode on decode blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "composite-copy block-svg integer-viewbox + filter-noop-defs",
    idea: "composite-copy + svg display block — copy compositing mode on decode blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "composite-copy chromium-leaf int-floor + filter-noop-defs",
    idea: "composite-copy + Chromium copy leaf — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "composite-copy bare round-dims + filter-noop-defs",
    idea: "composite-copy + bare raster — copy compositing mode on decode blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "composite-copy overflow + filter-noop-defs",
    idea: "composite-copy + FO overflow visible — copy compositing mode on decode blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "composite-copy leaf integer-viewbox + filter-noop-defs",
    idea: "composite-copy + FO leaf min-width — copy compositing mode on decode blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "composite-copy kerning int-floor + filter-noop-defs",
    idea: "composite-copy + FO kerning normal — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "composite-copy shape round-dims + filter-noop-defs",
    idea: "composite-copy + shape-rendering geometric — copy compositing mode on decode blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "composite-copy img-auto + filter-noop-defs",
    idea: "composite-copy + image-rendering auto — copy compositing mode on decode blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "composite-copy contain integer-viewbox + filter-noop-defs",
    idea: "composite-copy + contain paint min — copy compositing mode on decode blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "composite-copy overflow-min int-floor + filter-noop-defs",
    idea: "composite-copy + svg block overflow — copy compositing mode on decode blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "composite-copy block-svg round-dims + filter-noop-defs",
    idea: "composite-copy + svg display block — copy compositing mode on decode blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "composite-copy chromium-leaf alt2",
    idea: "composite-copy + Chromium copy leaf — copy compositing mode on decode blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
    },
  },
  {
    n: 40,
    slug: "composite-copy bare integer-viewbox + filter-noop-defs",
    idea: "composite-copy + bare raster — copy compositing mode on decode blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w09: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w09: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w09-${num}`,
    label: `Loop AI b13 w09 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w09; RASTER PRIMARY composite-copy 2d op; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w09: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
