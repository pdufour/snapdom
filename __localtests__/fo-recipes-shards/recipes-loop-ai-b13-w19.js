/**
 * Loop AI batch-13 FO recipe shard (worker 19) — RASTER PRIMARY: node-layer-datauri-blob.
 * data-URI→blob layer handoff mimicking node raster pipeline
 * 40 recipes: loop-ai-b13-w19-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "node-layer overflow",
    idea: "node-layer-datauri-blob + FO overflow visible — blob layer staging raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 2,
    slug: "node-layer leaf integer-viewbox",
    idea: "node-layer-datauri-blob + FO leaf min-width — blob layer staging raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "node-layer kerning int-floor",
    idea: "node-layer-datauri-blob + FO kerning normal — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "node-layer shape round-dims",
    idea: "node-layer-datauri-blob + shape-rendering geometric — blob layer staging raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "node-layer img-auto",
    idea: "node-layer-datauri-blob + image-rendering auto — blob layer staging raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
    },
  },
  {
    n: 6,
    slug: "node-layer contain integer-viewbox",
    idea: "node-layer-datauri-blob + contain paint min — blob layer staging raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "node-layer overflow-min int-floor",
    idea: "node-layer-datauri-blob + svg block overflow — blob layer staging raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "node-layer block-svg round-dims",
    idea: "node-layer-datauri-blob + svg display block — blob layer staging raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "node-layer chromium-leaf",
    idea: "node-layer-datauri-blob + Chromium copy leaf — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
    },
  },
  {
    n: 10,
    slug: "node-layer bare integer-viewbox",
    idea: "node-layer-datauri-blob + bare raster — blob layer staging raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 11,
    slug: "node-layer overflow int-floor",
    idea: "node-layer-datauri-blob + FO overflow visible — blob layer staging raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "node-layer leaf round-dims",
    idea: "node-layer-datauri-blob + FO leaf min-width — blob layer staging raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "node-layer kerning",
    idea: "node-layer-datauri-blob + FO kerning normal — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
    },
  },
  {
    n: 14,
    slug: "node-layer shape integer-viewbox",
    idea: "node-layer-datauri-blob + shape-rendering geometric — blob layer staging raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "node-layer img-auto int-floor",
    idea: "node-layer-datauri-blob + image-rendering auto — blob layer staging raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "node-layer contain round-dims",
    idea: "node-layer-datauri-blob + contain paint min — blob layer staging raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "node-layer overflow-min",
    idea: "node-layer-datauri-blob + svg block overflow — blob layer staging raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
    },
  },
  {
    n: 18,
    slug: "node-layer block-svg integer-viewbox",
    idea: "node-layer-datauri-blob + svg display block — blob layer staging raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "node-layer chromium-leaf int-floor",
    idea: "node-layer-datauri-blob + Chromium copy leaf — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 20,
    slug: "node-layer bare round-dims",
    idea: "node-layer-datauri-blob + bare raster — blob layer staging raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "node-layer overflow alt2",
    idea: "node-layer-datauri-blob + FO overflow visible — blob layer staging raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
    },
  },
  {
    n: 22,
    slug: "node-layer leaf integer-viewbox + filter-noop-defs",
    idea: "node-layer-datauri-blob + FO leaf min-width — blob layer staging raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "node-layer kerning int-floor + filter-noop-defs",
    idea: "node-layer-datauri-blob + FO kerning normal — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "node-layer shape round-dims + filter-noop-defs",
    idea: "node-layer-datauri-blob + shape-rendering geometric — blob layer staging raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "node-layer img-auto + filter-noop-defs",
    idea: "node-layer-datauri-blob + image-rendering auto — blob layer staging raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "node-layer contain integer-viewbox + filter-noop-defs",
    idea: "node-layer-datauri-blob + contain paint min — blob layer staging raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "node-layer overflow-min int-floor + filter-noop-defs",
    idea: "node-layer-datauri-blob + svg block overflow — blob layer staging raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "node-layer block-svg round-dims alt2",
    idea: "node-layer-datauri-blob + svg display block — blob layer staging raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 29,
    slug: "node-layer chromium-leaf + filter-noop-defs",
    idea: "node-layer-datauri-blob + Chromium copy leaf — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "node-layer bare integer-viewbox alt2",
    idea: "node-layer-datauri-blob + bare raster — blob layer staging raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "node-layer overflow int-floor + filter-noop-defs",
    idea: "node-layer-datauri-blob + FO overflow visible — blob layer staging raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "node-layer leaf round-dims + filter-noop-defs",
    idea: "node-layer-datauri-blob + FO leaf min-width — blob layer staging raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "node-layer kerning + filter-noop-defs",
    idea: "node-layer-datauri-blob + FO kerning normal — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "node-layer shape integer-viewbox + filter-noop-defs",
    idea: "node-layer-datauri-blob + shape-rendering geometric — blob layer staging raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "node-layer img-auto int-floor + filter-noop-defs",
    idea: "node-layer-datauri-blob + image-rendering auto — blob layer staging raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "node-layer contain round-dims + filter-noop-defs",
    idea: "node-layer-datauri-blob + contain paint min — blob layer staging raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "node-layer overflow-min alt2",
    idea: "node-layer-datauri-blob + svg block overflow — blob layer staging raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fe-displacement-map-identity",
    },
  },
  {
    n: 38,
    slug: "node-layer block-svg integer-viewbox + filter-noop-defs",
    idea: "node-layer-datauri-blob + svg display block — blob layer staging raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "node-layer chromium-leaf int-floor alt2",
    idea: "node-layer-datauri-blob + Chromium copy leaf — blob layer staging raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 40,
    slug: "node-layer bare round-dims + filter-noop-defs",
    idea: "node-layer-datauri-blob + bare raster — blob layer staging raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w19: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w19: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w19-${num}`,
    label: `Loop AI b13 w19 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w19; RASTER PRIMARY node-layer-datauri-blob; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w19: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
