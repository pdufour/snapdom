/**
 * Loop AI batch-13 FO recipe shard (worker 07) — RASTER PRIMARY: phantom-font-prime.
 * offscreen measureText font prime before FO raster decode
 * 40 recipes: loop-ai-b13-w07-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "phantom-font img-auto",
    idea: "phantom-font-prime + image-rendering auto — prime font metrics before svg decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
    },
  },
  {
    n: 2,
    slug: "phantom-font contain integer-viewbox",
    idea: "phantom-font-prime + contain paint min — prime font metrics before svg decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "phantom-font overflow-min int-floor",
    idea: "phantom-font-prime + svg block overflow — prime font metrics before svg decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "phantom-font block-svg round-dims",
    idea: "phantom-font-prime + svg display block — prime font metrics before svg decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "phantom-font chromium-leaf",
    idea: "phantom-font-prime + Chromium copy leaf — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
    },
  },
  {
    n: 6,
    slug: "phantom-font bare integer-viewbox",
    idea: "phantom-font-prime + bare raster — prime font metrics before svg decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 7,
    slug: "phantom-font overflow int-floor",
    idea: "phantom-font-prime + FO overflow visible — prime font metrics before svg decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "phantom-font leaf round-dims",
    idea: "phantom-font-prime + FO leaf min-width — prime font metrics before svg decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "phantom-font kerning",
    idea: "phantom-font-prime + FO kerning normal — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
    },
  },
  {
    n: 10,
    slug: "phantom-font shape integer-viewbox",
    idea: "phantom-font-prime + shape-rendering geometric — prime font metrics before svg decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "phantom-font img-auto int-floor",
    idea: "phantom-font-prime + image-rendering auto — prime font metrics before svg decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "phantom-font contain round-dims",
    idea: "phantom-font-prime + contain paint min — prime font metrics before svg decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "phantom-font overflow-min",
    idea: "phantom-font-prime + svg block overflow — prime font metrics before svg decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
    },
  },
  {
    n: 14,
    slug: "phantom-font block-svg integer-viewbox",
    idea: "phantom-font-prime + svg display block — prime font metrics before svg decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "phantom-font chromium-leaf int-floor",
    idea: "phantom-font-prime + Chromium copy leaf — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "phantom-font bare round-dims",
    idea: "phantom-font-prime + bare raster — prime font metrics before svg decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "phantom-font overflow",
    idea: "phantom-font-prime + FO overflow visible — prime font metrics before svg decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
    },
  },
  {
    n: 18,
    slug: "phantom-font leaf integer-viewbox",
    idea: "phantom-font-prime + FO leaf min-width — prime font metrics before svg decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "phantom-font kerning int-floor",
    idea: "phantom-font-prime + FO kerning normal — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "phantom-font shape round-dims",
    idea: "phantom-font-prime + shape-rendering geometric — prime font metrics before svg decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 21,
    slug: "phantom-font img-auto + filter-noop-defs",
    idea: "phantom-font-prime + image-rendering auto — prime font metrics before svg decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "phantom-font contain integer-viewbox + filter-noop-defs",
    idea: "phantom-font-prime + contain paint min — prime font metrics before svg decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "phantom-font overflow-min int-floor + filter-noop-defs",
    idea: "phantom-font-prime + svg block overflow — prime font metrics before svg decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "phantom-font block-svg round-dims + filter-noop-defs",
    idea: "phantom-font-prime + svg display block — prime font metrics before svg decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "phantom-font chromium-leaf + filter-noop-defs",
    idea: "phantom-font-prime + Chromium copy leaf — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "phantom-font bare integer-viewbox alt2",
    idea: "phantom-font-prime + bare raster — prime font metrics before svg decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "phantom-font overflow int-floor + filter-noop-defs",
    idea: "phantom-font-prime + FO overflow visible — prime font metrics before svg decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "phantom-font leaf round-dims + filter-noop-defs",
    idea: "phantom-font-prime + FO leaf min-width — prime font metrics before svg decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "phantom-font kerning + filter-noop-defs",
    idea: "phantom-font-prime + FO kerning normal — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "phantom-font shape integer-viewbox + filter-noop-defs",
    idea: "phantom-font-prime + shape-rendering geometric — prime font metrics before svg decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "phantom-font img-auto int-floor + filter-noop-defs",
    idea: "phantom-font-prime + image-rendering auto — prime font metrics before svg decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "phantom-font contain round-dims + filter-noop-defs",
    idea: "phantom-font-prime + contain paint min — prime font metrics before svg decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "phantom-font overflow-min + filter-noop-defs",
    idea: "phantom-font-prime + svg block overflow — prime font metrics before svg decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "phantom-font block-svg integer-viewbox alt2",
    idea: "phantom-font-prime + svg display block — prime font metrics before svg decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 35,
    slug: "phantom-font chromium-leaf int-floor + filter-noop-defs",
    idea: "phantom-font-prime + Chromium copy leaf — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "phantom-font bare round-dims + filter-noop-defs",
    idea: "phantom-font-prime + bare raster — prime font metrics before svg decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "phantom-font overflow + filter-noop-defs",
    idea: "phantom-font-prime + FO overflow visible — prime font metrics before svg decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "phantom-font leaf integer-viewbox + filter-noop-defs",
    idea: "phantom-font-prime + FO leaf min-width — prime font metrics before svg decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "phantom-font kerning int-floor + filter-noop-defs",
    idea: "phantom-font-prime + FO kerning normal — prime font metrics before svg decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "phantom-font shape round-dims alt2",
    idea: "phantom-font-prime + shape-rendering geometric — prime font metrics before svg decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootRound: "round-dims",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w07: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w07: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w07-${num}`,
    label: `Loop AI b13 w07 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w07; RASTER PRIMARY phantom-font-prime; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w07: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
