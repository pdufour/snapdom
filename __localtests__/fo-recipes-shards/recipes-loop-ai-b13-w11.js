/**
 * Loop AI batch-13 FO recipe shard (worker 11) — RASTER PRIMARY: canvas-filter-invert.
 * canvas 2d filter invert diagnostic on FO decode blit
 * 40 recipes: loop-ai-b13-w11-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "filter-invert overflow-min",
    idea: "canvas-filter-invert + svg block overflow — invert filter then compare ink bounds",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
    },
  },
  {
    n: 2,
    slug: "filter-invert block-svg integer-viewbox",
    idea: "canvas-filter-invert + svg display block — invert filter then compare ink bounds",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "filter-invert chromium-leaf int-floor",
    idea: "canvas-filter-invert + Chromium copy leaf — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "filter-invert bare round-dims",
    idea: "canvas-filter-invert + bare raster — invert filter then compare ink bounds",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "filter-invert overflow",
    idea: "canvas-filter-invert + FO overflow visible — invert filter then compare ink bounds",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
    },
  },
  {
    n: 6,
    slug: "filter-invert leaf integer-viewbox",
    idea: "canvas-filter-invert + FO leaf min-width — invert filter then compare ink bounds",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "filter-invert kerning int-floor",
    idea: "canvas-filter-invert + FO kerning normal — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 8,
    slug: "filter-invert shape round-dims",
    idea: "canvas-filter-invert + shape-rendering geometric — invert filter then compare ink bounds",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "filter-invert img-auto",
    idea: "canvas-filter-invert + image-rendering auto — invert filter then compare ink bounds",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
    },
  },
  {
    n: 10,
    slug: "filter-invert contain integer-viewbox",
    idea: "canvas-filter-invert + contain paint min — invert filter then compare ink bounds",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "filter-invert overflow-min int-floor",
    idea: "canvas-filter-invert + svg block overflow — invert filter then compare ink bounds",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "filter-invert block-svg round-dims",
    idea: "canvas-filter-invert + svg display block — invert filter then compare ink bounds",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "filter-invert chromium-leaf",
    idea: "canvas-filter-invert + Chromium copy leaf — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
    },
  },
  {
    n: 14,
    slug: "filter-invert bare integer-viewbox",
    idea: "canvas-filter-invert + bare raster — invert filter then compare ink bounds",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "filter-invert overflow int-floor",
    idea: "canvas-filter-invert + FO overflow visible — invert filter then compare ink bounds",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "filter-invert leaf round-dims",
    idea: "canvas-filter-invert + FO leaf min-width — invert filter then compare ink bounds",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "filter-invert kerning",
    idea: "canvas-filter-invert + FO kerning normal — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
    },
  },
  {
    n: 18,
    slug: "filter-invert shape integer-viewbox",
    idea: "canvas-filter-invert + shape-rendering geometric — invert filter then compare ink bounds",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 19,
    slug: "filter-invert img-auto int-floor",
    idea: "canvas-filter-invert + image-rendering auto — invert filter then compare ink bounds",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "filter-invert contain round-dims",
    idea: "canvas-filter-invert + contain paint min — invert filter then compare ink bounds",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "filter-invert overflow-min + filter-noop-defs",
    idea: "canvas-filter-invert + svg block overflow — invert filter then compare ink bounds",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "filter-invert block-svg integer-viewbox + filter-noop-defs",
    idea: "canvas-filter-invert + svg display block — invert filter then compare ink bounds",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "filter-invert chromium-leaf int-floor + filter-noop-defs",
    idea: "canvas-filter-invert + Chromium copy leaf — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "filter-invert bare round-dims + filter-noop-defs",
    idea: "canvas-filter-invert + bare raster — invert filter then compare ink bounds",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "filter-invert overflow + filter-noop-defs",
    idea: "canvas-filter-invert + FO overflow visible — invert filter then compare ink bounds",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "filter-invert leaf integer-viewbox + filter-noop-defs",
    idea: "canvas-filter-invert + FO leaf min-width — invert filter then compare ink bounds",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "filter-invert kerning int-floor alt2",
    idea: "canvas-filter-invert + FO kerning normal — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 28,
    slug: "filter-invert shape round-dims + filter-noop-defs",
    idea: "canvas-filter-invert + shape-rendering geometric — invert filter then compare ink bounds",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "filter-invert img-auto alt2",
    idea: "canvas-filter-invert + image-rendering auto — invert filter then compare ink bounds",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 30,
    slug: "filter-invert contain integer-viewbox + filter-noop-defs",
    idea: "canvas-filter-invert + contain paint min — invert filter then compare ink bounds",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "filter-invert overflow-min int-floor + filter-noop-defs",
    idea: "canvas-filter-invert + svg block overflow — invert filter then compare ink bounds",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "filter-invert block-svg round-dims + filter-noop-defs",
    idea: "canvas-filter-invert + svg display block — invert filter then compare ink bounds",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "filter-invert chromium-leaf + filter-noop-defs",
    idea: "canvas-filter-invert + Chromium copy leaf — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "filter-invert bare integer-viewbox + filter-noop-defs",
    idea: "canvas-filter-invert + bare raster — invert filter then compare ink bounds",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "filter-invert overflow int-floor + filter-noop-defs",
    idea: "canvas-filter-invert + FO overflow visible — invert filter then compare ink bounds",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "filter-invert leaf round-dims + filter-noop-defs",
    idea: "canvas-filter-invert + FO leaf min-width — invert filter then compare ink bounds",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "filter-invert kerning + filter-noop-defs",
    idea: "canvas-filter-invert + FO kerning normal — invert filter then compare ink bounds",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "filter-invert shape integer-viewbox alt2",
    idea: "canvas-filter-invert + shape-rendering geometric — invert filter then compare ink bounds",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 39,
    slug: "filter-invert img-auto int-floor + filter-noop-defs",
    idea: "canvas-filter-invert + image-rendering auto — invert filter then compare ink bounds",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "filter-invert contain round-dims alt2",
    idea: "canvas-filter-invert + contain paint min — invert filter then compare ink bounds",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgRootRound: "round-dims",
      foSvgPatch: "fe-morphology-identity",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w11: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w11: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w11-${num}`,
    label: `Loop AI b13 w11 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w11; RASTER PRIMARY canvas-filter-invert; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w11: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
