/**
 * Loop AI batch-13 FO recipe shard (worker 22) — RASTER PRIMARY: canvas-from-live DOM.
 * live DOM element draw to canvas without svg Image intermediate
 * 40 recipes: loop-ai-b13-w22-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "canvas-live bare integer-viewbox",
    idea: "canvas-from-live + bare raster — direct live subtree canvas blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "canvas-live overflow int-floor",
    idea: "canvas-from-live + FO overflow visible — direct live subtree canvas blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "canvas-live leaf round-dims",
    idea: "canvas-from-live + FO leaf min-width — direct live subtree canvas blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "canvas-live kerning",
    idea: "canvas-from-live + FO kerning normal — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
    },
  },
  {
    n: 5,
    slug: "canvas-live shape integer-viewbox",
    idea: "canvas-from-live + shape-rendering geometric — direct live subtree canvas blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "canvas-live img-auto int-floor",
    idea: "canvas-from-live + image-rendering auto — direct live subtree canvas blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "canvas-live contain round-dims",
    idea: "canvas-from-live + contain paint min — direct live subtree canvas blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "canvas-live overflow-min",
    idea: "canvas-from-live + svg block overflow — direct live subtree canvas blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
    },
  },
  {
    n: 9,
    slug: "canvas-live block-svg integer-viewbox",
    idea: "canvas-from-live + svg display block — direct live subtree canvas blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "canvas-live chromium-leaf int-floor",
    idea: "canvas-from-live + Chromium copy leaf — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "canvas-live bare round-dims",
    idea: "canvas-from-live + bare raster — direct live subtree canvas blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "canvas-live overflow",
    idea: "canvas-from-live + FO overflow visible — direct live subtree canvas blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
    },
  },
  {
    n: 13,
    slug: "canvas-live leaf integer-viewbox",
    idea: "canvas-from-live + FO leaf min-width — direct live subtree canvas blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "canvas-live kerning int-floor",
    idea: "canvas-from-live + FO kerning normal — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "canvas-live shape round-dims",
    idea: "canvas-from-live + shape-rendering geometric — direct live subtree canvas blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "canvas-live img-auto",
    idea: "canvas-from-live + image-rendering auto — direct live subtree canvas blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
    },
  },
  {
    n: 17,
    slug: "canvas-live contain integer-viewbox",
    idea: "canvas-from-live + contain paint min — direct live subtree canvas blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "canvas-live overflow-min int-floor",
    idea: "canvas-from-live + svg block overflow — direct live subtree canvas blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "canvas-live block-svg round-dims",
    idea: "canvas-from-live + svg display block — direct live subtree canvas blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "canvas-live chromium-leaf",
    idea: "canvas-from-live + Chromium copy leaf — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
    },
  },
  {
    n: 21,
    slug: "canvas-live bare integer-viewbox + filter-noop-defs",
    idea: "canvas-from-live + bare raster — direct live subtree canvas blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "canvas-live overflow int-floor + filter-noop-defs",
    idea: "canvas-from-live + FO overflow visible — direct live subtree canvas blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "canvas-live leaf round-dims + filter-noop-defs",
    idea: "canvas-from-live + FO leaf min-width — direct live subtree canvas blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "canvas-live kerning + filter-noop-defs",
    idea: "canvas-from-live + FO kerning normal — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "canvas-live shape integer-viewbox + filter-noop-defs",
    idea: "canvas-from-live + shape-rendering geometric — direct live subtree canvas blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "canvas-live img-auto int-floor + filter-noop-defs",
    idea: "canvas-from-live + image-rendering auto — direct live subtree canvas blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "canvas-live contain round-dims + filter-noop-defs",
    idea: "canvas-from-live + contain paint min — direct live subtree canvas blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "canvas-live overflow-min + filter-noop-defs",
    idea: "canvas-from-live + svg block overflow — direct live subtree canvas blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "canvas-live block-svg integer-viewbox + filter-noop-defs",
    idea: "canvas-from-live + svg display block — direct live subtree canvas blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "canvas-live chromium-leaf int-floor + filter-noop-defs",
    idea: "canvas-from-live + Chromium copy leaf — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "canvas-live bare round-dims + filter-noop-defs",
    idea: "canvas-from-live + bare raster — direct live subtree canvas blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "canvas-live overflow + filter-noop-defs",
    idea: "canvas-from-live + FO overflow visible — direct live subtree canvas blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "canvas-live leaf integer-viewbox + filter-noop-defs",
    idea: "canvas-from-live + FO leaf min-width — direct live subtree canvas blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "canvas-live kerning int-floor + filter-noop-defs",
    idea: "canvas-from-live + FO kerning normal — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "canvas-live shape round-dims + filter-noop-defs",
    idea: "canvas-from-live + shape-rendering geometric — direct live subtree canvas blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "canvas-live img-auto + filter-noop-defs",
    idea: "canvas-from-live + image-rendering auto — direct live subtree canvas blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "canvas-live contain integer-viewbox + filter-noop-defs",
    idea: "canvas-from-live + contain paint min — direct live subtree canvas blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "canvas-live overflow-min int-floor + filter-noop-defs",
    idea: "canvas-from-live + svg block overflow — direct live subtree canvas blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "canvas-live block-svg round-dims + filter-noop-defs",
    idea: "canvas-from-live + svg display block — direct live subtree canvas blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-from-live",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "canvas-live chromium-leaf + filter-noop-defs",
    idea: "canvas-from-live + Chromium copy leaf — direct live subtree canvas blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w22: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w22: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w22-${num}`,
    label: `Loop AI b13 w22 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w22; RASTER PRIMARY canvas-from-live DOM; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w22: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
