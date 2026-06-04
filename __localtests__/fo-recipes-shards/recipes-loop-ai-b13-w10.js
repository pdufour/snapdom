/**
 * Loop AI batch-13 FO recipe shard (worker 10) — RASTER PRIMARY: flip-y coordinate probe.
 * vertical flip drawImage — FO origin vs canvas Y axis diagnostic
 * 40 recipes: loop-ai-b13-w10-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "flip-y shape integer-viewbox",
    idea: "flip-y + shape-rendering geometric — invert Y before ink compare",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "flip-y img-auto int-floor",
    idea: "flip-y + image-rendering auto — invert Y before ink compare",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "flip-y contain round-dims",
    idea: "flip-y + contain paint min — invert Y before ink compare",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "flip-y overflow-min",
    idea: "flip-y + svg block overflow — invert Y before ink compare",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 5,
    slug: "flip-y block-svg integer-viewbox",
    idea: "flip-y + svg display block — invert Y before ink compare",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "flip-y chromium-leaf int-floor",
    idea: "flip-y + Chromium copy leaf — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "flip-y bare round-dims",
    idea: "flip-y + bare raster — invert Y before ink compare",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "flip-y overflow",
    idea: "flip-y + FO overflow visible — invert Y before ink compare",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
    },
  },
  {
    n: 9,
    slug: "flip-y leaf integer-viewbox",
    idea: "flip-y + FO leaf min-width — invert Y before ink compare",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "flip-y kerning int-floor",
    idea: "flip-y + FO kerning normal — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "flip-y shape round-dims",
    idea: "flip-y + shape-rendering geometric — invert Y before ink compare",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "flip-y img-auto",
    idea: "flip-y + image-rendering auto — invert Y before ink compare",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
    },
  },
  {
    n: 13,
    slug: "flip-y contain integer-viewbox",
    idea: "flip-y + contain paint min — invert Y before ink compare",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "flip-y overflow-min int-floor",
    idea: "flip-y + svg block overflow — invert Y before ink compare",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 15,
    slug: "flip-y block-svg round-dims",
    idea: "flip-y + svg display block — invert Y before ink compare",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "flip-y chromium-leaf",
    idea: "flip-y + Chromium copy leaf — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
    },
  },
  {
    n: 17,
    slug: "flip-y bare integer-viewbox",
    idea: "flip-y + bare raster — invert Y before ink compare",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "flip-y overflow int-floor",
    idea: "flip-y + FO overflow visible — invert Y before ink compare",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "flip-y leaf round-dims",
    idea: "flip-y + FO leaf min-width — invert Y before ink compare",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "flip-y kerning",
    idea: "flip-y + FO kerning normal — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
    },
  },
  {
    n: 21,
    slug: "flip-y shape integer-viewbox + filter-noop-defs",
    idea: "flip-y + shape-rendering geometric — invert Y before ink compare",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "flip-y img-auto int-floor + filter-noop-defs",
    idea: "flip-y + image-rendering auto — invert Y before ink compare",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "flip-y contain round-dims + filter-noop-defs",
    idea: "flip-y + contain paint min — invert Y before ink compare",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "flip-y overflow-min + filter-noop-defs",
    idea: "flip-y + svg block overflow — invert Y before ink compare",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "flip-y block-svg integer-viewbox + filter-noop-defs",
    idea: "flip-y + svg display block — invert Y before ink compare",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "flip-y chromium-leaf int-floor + filter-noop-defs",
    idea: "flip-y + Chromium copy leaf — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "flip-y bare round-dims + filter-noop-defs",
    idea: "flip-y + bare raster — invert Y before ink compare",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "flip-y overflow + filter-noop-defs",
    idea: "flip-y + FO overflow visible — invert Y before ink compare",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "flip-y leaf integer-viewbox + filter-noop-defs",
    idea: "flip-y + FO leaf min-width — invert Y before ink compare",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "flip-y kerning int-floor + filter-noop-defs",
    idea: "flip-y + FO kerning normal — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "flip-y shape round-dims + filter-noop-defs",
    idea: "flip-y + shape-rendering geometric — invert Y before ink compare",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "flip-y img-auto + filter-noop-defs",
    idea: "flip-y + image-rendering auto — invert Y before ink compare",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "flip-y contain integer-viewbox + filter-noop-defs",
    idea: "flip-y + contain paint min — invert Y before ink compare",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "flip-y overflow-min int-floor + filter-noop-defs",
    idea: "flip-y + svg block overflow — invert Y before ink compare",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "flip-y block-svg round-dims + filter-noop-defs",
    idea: "flip-y + svg display block — invert Y before ink compare",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "flip-y chromium-leaf + filter-noop-defs",
    idea: "flip-y + Chromium copy leaf — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "flip-y bare integer-viewbox + filter-noop-defs",
    idea: "flip-y + bare raster — invert Y before ink compare",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "flip-y overflow int-floor + filter-noop-defs",
    idea: "flip-y + FO overflow visible — invert Y before ink compare",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "flip-y leaf round-dims + filter-noop-defs",
    idea: "flip-y + FO leaf min-width — invert Y before ink compare",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "flip-y kerning + filter-noop-defs",
    idea: "flip-y + FO kerning normal — invert Y before ink compare",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w10: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w10: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w10-${num}`,
    label: `Loop AI b13 w10 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w10; RASTER PRIMARY flip-y coordinate probe; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w10: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
