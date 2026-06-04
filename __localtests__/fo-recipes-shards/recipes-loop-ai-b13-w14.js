/**
 * Loop AI batch-13 FO recipe shard (worker 14) — RASTER PRIMARY: h2-supersample-dpr-lt2.
 * HiDPI supersample path when device dpr below 2
 * 40 recipes: loop-ai-b13-w14-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "h2-supersample contain integer-viewbox",
    idea: "h2-supersample-dpr-lt2 + contain paint min — conditional HiDPI supersample",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 2,
    slug: "h2-supersample overflow-min int-floor",
    idea: "h2-supersample-dpr-lt2 + svg block overflow — conditional HiDPI supersample",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "h2-supersample block-svg round-dims",
    idea: "h2-supersample-dpr-lt2 + svg display block — conditional HiDPI supersample",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "h2-supersample chromium-leaf",
    idea: "h2-supersample-dpr-lt2 + Chromium copy leaf — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
    },
  },
  {
    n: 5,
    slug: "h2-supersample bare integer-viewbox",
    idea: "h2-supersample-dpr-lt2 + bare raster — conditional HiDPI supersample",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "h2-supersample overflow int-floor",
    idea: "h2-supersample-dpr-lt2 + FO overflow visible — conditional HiDPI supersample",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "h2-supersample leaf round-dims",
    idea: "h2-supersample-dpr-lt2 + FO leaf min-width — conditional HiDPI supersample",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "h2-supersample kerning",
    idea: "h2-supersample-dpr-lt2 + FO kerning normal — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
    },
  },
  {
    n: 9,
    slug: "h2-supersample shape integer-viewbox",
    idea: "h2-supersample-dpr-lt2 + shape-rendering geometric — conditional HiDPI supersample",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 10,
    slug: "h2-supersample img-auto int-floor",
    idea: "h2-supersample-dpr-lt2 + image-rendering auto — conditional HiDPI supersample",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
      monkeypatch: "h2-raster-normalize-capture",
    },
  },
  {
    n: 11,
    slug: "h2-supersample contain round-dims",
    idea: "h2-supersample-dpr-lt2 + contain paint min — conditional HiDPI supersample",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "h2-supersample overflow-min",
    idea: "h2-supersample-dpr-lt2 + svg block overflow — conditional HiDPI supersample",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
    },
  },
  {
    n: 13,
    slug: "h2-supersample block-svg integer-viewbox",
    idea: "h2-supersample-dpr-lt2 + svg display block — conditional HiDPI supersample",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "h2-supersample chromium-leaf int-floor",
    idea: "h2-supersample-dpr-lt2 + Chromium copy leaf — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "h2-supersample bare round-dims",
    idea: "h2-supersample-dpr-lt2 + bare raster — conditional HiDPI supersample",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "h2-supersample overflow",
    idea: "h2-supersample-dpr-lt2 + FO overflow visible — conditional HiDPI supersample",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
    },
  },
  {
    n: 17,
    slug: "h2-supersample leaf integer-viewbox",
    idea: "h2-supersample-dpr-lt2 + FO leaf min-width — conditional HiDPI supersample",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 18,
    slug: "h2-supersample kerning int-floor",
    idea: "h2-supersample-dpr-lt2 + FO kerning normal — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "h2-supersample shape round-dims",
    idea: "h2-supersample-dpr-lt2 + shape-rendering geometric — conditional HiDPI supersample",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "h2-supersample img-auto",
    idea: "h2-supersample-dpr-lt2 + image-rendering auto — conditional HiDPI supersample",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
    },
  },
  {
    n: 21,
    slug: "h2-supersample contain integer-viewbox + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + contain paint min — conditional HiDPI supersample",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "h2-supersample overflow-min int-floor + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + svg block overflow — conditional HiDPI supersample",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "h2-supersample block-svg round-dims + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + svg display block — conditional HiDPI supersample",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "h2-supersample chromium-leaf + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + Chromium copy leaf — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "h2-supersample bare integer-viewbox + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + bare raster — conditional HiDPI supersample",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "h2-supersample overflow int-floor + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + FO overflow visible — conditional HiDPI supersample",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "h2-supersample leaf round-dims + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + FO leaf min-width — conditional HiDPI supersample",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "h2-supersample kerning alt2",
    idea: "h2-supersample-dpr-lt2 + FO kerning normal — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    n: 29,
    slug: "h2-supersample shape integer-viewbox + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + shape-rendering geometric — conditional HiDPI supersample",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "h2-supersample img-auto int-floor alt2",
    idea: "h2-supersample-dpr-lt2 + image-rendering auto — conditional HiDPI supersample",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 31,
    slug: "h2-supersample contain round-dims + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + contain paint min — conditional HiDPI supersample",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "h2-supersample overflow-min + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + svg block overflow — conditional HiDPI supersample",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "h2-supersample block-svg integer-viewbox + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + svg display block — conditional HiDPI supersample",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "h2-supersample chromium-leaf int-floor + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + Chromium copy leaf — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "h2-supersample bare round-dims + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + bare raster — conditional HiDPI supersample",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "h2-supersample overflow + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + FO overflow visible — conditional HiDPI supersample",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "h2-supersample leaf integer-viewbox + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + FO leaf min-width — conditional HiDPI supersample",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "h2-supersample kerning int-floor + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + FO kerning normal — conditional HiDPI supersample",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "h2-supersample shape round-dims + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + shape-rendering geometric — conditional HiDPI supersample",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "h2-supersample img-auto + filter-noop-defs",
    idea: "h2-supersample-dpr-lt2 + image-rendering auto — conditional HiDPI supersample",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-supersample-dpr-lt2",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w14: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w14: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w14-${num}`,
    label: `Loop AI b13 w14 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w14; RASTER PRIMARY h2-supersample-dpr-lt2; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w14: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
