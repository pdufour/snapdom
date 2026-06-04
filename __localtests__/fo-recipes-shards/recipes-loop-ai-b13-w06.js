/**
 * Loop AI batch-13 FO recipe shard (worker 06) — RASTER PRIMARY: double SVG data-URL encode.
 * svg-dataurl-double-encode and v2-double-svg-encode round-trip stress
 * 40 recipes: loop-ai-b13-w06-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "svg-dataurl-double-encode leaf",
    idea: "svg-dataurl-double-encode + FO leaf min-width — double URI encode before Image decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 2,
    slug: "v2-double-svg-encode kerning",
    idea: "v2-double-svg-encode + FO kerning normal — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "svg-dataurl-double-encode shape",
    idea: "svg-dataurl-double-encode + shape-rendering geometric — double URI encode before Image decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "v2-double-svg-encode img-auto",
    idea: "v2-double-svg-encode + image-rendering auto — double URI encode before Image decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 5,
    slug: "svg-dataurl-double-encode contain",
    idea: "svg-dataurl-double-encode + contain paint min — double URI encode before Image decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 6,
    slug: "v2-double-svg-encode overflow-min",
    idea: "v2-double-svg-encode + svg block overflow — double URI encode before Image decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "svg-dataurl-double-encode block-svg",
    idea: "svg-dataurl-double-encode + svg display block — double URI encode before Image decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "v2-double-svg-encode chromium-leaf",
    idea: "v2-double-svg-encode + Chromium copy leaf — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 9,
    slug: "svg-dataurl-double-encode bare",
    idea: "svg-dataurl-double-encode + bare raster — double URI encode before Image decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 10,
    slug: "v2-double-svg-encode overflow",
    idea: "v2-double-svg-encode + FO overflow visible — double URI encode before Image decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "svg-dataurl-double-encode leaf alt2",
    idea: "svg-dataurl-double-encode + FO leaf min-width — double URI encode before Image decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "v2-double-svg-encode kerning alt2",
    idea: "v2-double-svg-encode + FO kerning normal — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 13,
    slug: "svg-dataurl-double-encode shape alt2",
    idea: "svg-dataurl-double-encode + shape-rendering geometric — double URI encode before Image decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 14,
    slug: "v2-double-svg-encode img-auto alt2",
    idea: "v2-double-svg-encode + image-rendering auto — double URI encode before Image decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "svg-dataurl-double-encode contain alt2",
    idea: "svg-dataurl-double-encode + contain paint min — double URI encode before Image decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "v2-double-svg-encode overflow-min alt2",
    idea: "v2-double-svg-encode + svg block overflow — double URI encode before Image decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 17,
    slug: "svg-dataurl-double-encode block-svg alt2",
    idea: "svg-dataurl-double-encode + svg display block — double URI encode before Image decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 18,
    slug: "v2-double-svg-encode chromium-leaf alt2",
    idea: "v2-double-svg-encode + Chromium copy leaf — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "svg-dataurl-double-encode bare alt2",
    idea: "svg-dataurl-double-encode + bare raster — double URI encode before Image decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "v2-double-svg-encode overflow alt2",
    idea: "v2-double-svg-encode + FO overflow visible — double URI encode before Image decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 21,
    slug: "svg-dataurl-double-encode leaf alt3",
    idea: "svg-dataurl-double-encode + FO leaf min-width — double URI encode before Image decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 22,
    slug: "v2-double-svg-encode kerning alt3",
    idea: "v2-double-svg-encode + FO kerning normal — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 23,
    slug: "svg-dataurl-double-encode shape alt3",
    idea: "svg-dataurl-double-encode + shape-rendering geometric — double URI encode before Image decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 24,
    slug: "v2-double-svg-encode img-auto + filter-noop-defs",
    idea: "v2-double-svg-encode + image-rendering auto — double URI encode before Image decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "svg-dataurl-double-encode contain alt3",
    idea: "svg-dataurl-double-encode + contain paint min — double URI encode before Image decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 26,
    slug: "v2-double-svg-encode overflow-min alt3",
    idea: "v2-double-svg-encode + svg block overflow — double URI encode before Image decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 27,
    slug: "svg-dataurl-double-encode block-svg + filter-noop-defs",
    idea: "svg-dataurl-double-encode + svg display block — double URI encode before Image decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "v2-double-svg-encode chromium-leaf alt3",
    idea: "v2-double-svg-encode + Chromium copy leaf — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 29,
    slug: "svg-dataurl-double-encode bare alt3",
    idea: "svg-dataurl-double-encode + bare raster — double URI encode before Image decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 30,
    slug: "v2-double-svg-encode overflow + filter-noop-defs",
    idea: "v2-double-svg-encode + FO overflow visible — double URI encode before Image decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "svg-dataurl-double-encode leaf alt4",
    idea: "svg-dataurl-double-encode + FO leaf min-width — double URI encode before Image decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 32,
    slug: "v2-double-svg-encode kerning alt4",
    idea: "v2-double-svg-encode + FO kerning normal — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
    },
  },
  {
    n: 33,
    slug: "svg-dataurl-double-encode shape alt4",
    idea: "svg-dataurl-double-encode + shape-rendering geometric — double URI encode before Image decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 34,
    slug: "v2-double-svg-encode img-auto alt3",
    idea: "v2-double-svg-encode + image-rendering auto — double URI encode before Image decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 35,
    slug: "svg-dataurl-double-encode contain alt4",
    idea: "svg-dataurl-double-encode + contain paint min — double URI encode before Image decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "v2-double-svg-encode overflow-min + filter-noop-defs",
    idea: "v2-double-svg-encode + svg block overflow — double URI encode before Image decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "svg-dataurl-double-encode block-svg alt3",
    idea: "svg-dataurl-double-encode + svg display block — double URI encode before Image decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 38,
    slug: "v2-double-svg-encode chromium-leaf alt4",
    idea: "v2-double-svg-encode + Chromium copy leaf — double URI encode before Image decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "v2-double-svg-encode",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 39,
    slug: "svg-dataurl-double-encode bare + filter-noop-defs",
    idea: "svg-dataurl-double-encode + bare raster — double URI encode before Image decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "svg-dataurl-double-encode",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "v2-double-svg-encode overflow alt3",
    idea: "v2-double-svg-encode + FO overflow visible — double URI encode before Image decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "v2-double-svg-encode",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w06: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w06: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w06-${num}`,
    label: `Loop AI b13 w06 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w06; RASTER PRIMARY double SVG data-URL encode; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w06: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
