/**
 * Loop AI batch-13 FO recipe shard (worker 20) — RASTER PRIMARY: element-capture-bitmap API.
 * Element Capture API bitmap handoff vs svg Image decode
 * 40 recipes: loop-ai-b13-w20-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "el-capture shape round-dims",
    idea: "element-capture-bitmap + shape-rendering geometric — Restricted API bitmap capture path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "el-capture img-auto",
    idea: "element-capture-bitmap + image-rendering auto — Restricted API bitmap capture path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
    },
  },
  {
    n: 3,
    slug: "el-capture contain integer-viewbox",
    idea: "element-capture-bitmap + contain paint min — Restricted API bitmap capture path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "el-capture overflow-min int-floor",
    idea: "element-capture-bitmap + svg block overflow — Restricted API bitmap capture path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "el-capture block-svg round-dims",
    idea: "element-capture-bitmap + svg display block — Restricted API bitmap capture path",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "el-capture chromium-leaf",
    idea: "element-capture-bitmap + Chromium copy leaf — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
    },
  },
  {
    n: 7,
    slug: "el-capture bare integer-viewbox",
    idea: "element-capture-bitmap + bare raster — Restricted API bitmap capture path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "el-capture overflow int-floor",
    idea: "element-capture-bitmap + FO overflow visible — Restricted API bitmap capture path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "el-capture leaf round-dims",
    idea: "element-capture-bitmap + FO leaf min-width — Restricted API bitmap capture path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "el-capture kerning",
    idea: "element-capture-bitmap + FO kerning normal — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
    },
  },
  {
    n: 11,
    slug: "el-capture shape integer-viewbox",
    idea: "element-capture-bitmap + shape-rendering geometric — Restricted API bitmap capture path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "el-capture img-auto int-floor",
    idea: "element-capture-bitmap + image-rendering auto — Restricted API bitmap capture path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "el-capture contain round-dims",
    idea: "element-capture-bitmap + contain paint min — Restricted API bitmap capture path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "el-capture overflow-min",
    idea: "element-capture-bitmap + svg block overflow — Restricted API bitmap capture path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
    },
  },
  {
    n: 15,
    slug: "el-capture block-svg integer-viewbox",
    idea: "element-capture-bitmap + svg display block — Restricted API bitmap capture path",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "el-capture chromium-leaf int-floor",
    idea: "element-capture-bitmap + Chromium copy leaf — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "el-capture bare round-dims",
    idea: "element-capture-bitmap + bare raster — Restricted API bitmap capture path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "el-capture overflow",
    idea: "element-capture-bitmap + FO overflow visible — Restricted API bitmap capture path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
    },
  },
  {
    n: 19,
    slug: "el-capture leaf integer-viewbox",
    idea: "element-capture-bitmap + FO leaf min-width — Restricted API bitmap capture path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "el-capture kerning int-floor",
    idea: "element-capture-bitmap + FO kerning normal — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "el-capture shape round-dims + filter-noop-defs",
    idea: "element-capture-bitmap + shape-rendering geometric — Restricted API bitmap capture path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "el-capture img-auto + filter-noop-defs",
    idea: "element-capture-bitmap + image-rendering auto — Restricted API bitmap capture path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "el-capture contain integer-viewbox alt2",
    idea: "element-capture-bitmap + contain paint min — Restricted API bitmap capture path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 24,
    slug: "el-capture overflow-min int-floor + filter-noop-defs",
    idea: "element-capture-bitmap + svg block overflow — Restricted API bitmap capture path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "el-capture block-svg round-dims + filter-noop-defs",
    idea: "element-capture-bitmap + svg display block — Restricted API bitmap capture path",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "el-capture chromium-leaf + filter-noop-defs",
    idea: "element-capture-bitmap + Chromium copy leaf — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "el-capture bare integer-viewbox + filter-noop-defs",
    idea: "element-capture-bitmap + bare raster — Restricted API bitmap capture path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "el-capture overflow int-floor + filter-noop-defs",
    idea: "element-capture-bitmap + FO overflow visible — Restricted API bitmap capture path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "el-capture leaf round-dims + filter-noop-defs",
    idea: "element-capture-bitmap + FO leaf min-width — Restricted API bitmap capture path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "el-capture kerning + filter-noop-defs",
    idea: "element-capture-bitmap + FO kerning normal — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "el-capture shape integer-viewbox + filter-noop-defs",
    idea: "element-capture-bitmap + shape-rendering geometric — Restricted API bitmap capture path",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "el-capture img-auto int-floor + filter-noop-defs",
    idea: "element-capture-bitmap + image-rendering auto — Restricted API bitmap capture path",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "el-capture contain round-dims + filter-noop-defs",
    idea: "element-capture-bitmap + contain paint min — Restricted API bitmap capture path",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "el-capture overflow-min + filter-noop-defs",
    idea: "element-capture-bitmap + svg block overflow — Restricted API bitmap capture path",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "el-capture block-svg integer-viewbox + filter-noop-defs",
    idea: "element-capture-bitmap + svg display block — Restricted API bitmap capture path",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "el-capture chromium-leaf int-floor + filter-noop-defs",
    idea: "element-capture-bitmap + Chromium copy leaf — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "el-capture bare round-dims + filter-noop-defs",
    idea: "element-capture-bitmap + bare raster — Restricted API bitmap capture path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "el-capture overflow + filter-noop-defs",
    idea: "element-capture-bitmap + FO overflow visible — Restricted API bitmap capture path",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "el-capture leaf integer-viewbox + filter-noop-defs",
    idea: "element-capture-bitmap + FO leaf min-width — Restricted API bitmap capture path",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "el-capture kerning int-floor + filter-noop-defs",
    idea: "element-capture-bitmap + FO kerning normal — Restricted API bitmap capture path",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "element-capture-bitmap",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w20: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w20: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w20-${num}`,
    label: `Loop AI b13 w20 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w20; RASTER PRIMARY element-capture-bitmap API; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w20: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
