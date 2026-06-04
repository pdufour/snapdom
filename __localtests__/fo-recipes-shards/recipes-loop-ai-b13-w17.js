/**
 * Loop AI batch-13 FO recipe shard (worker 17) — RASTER PRIMARY: html-to-canvas-direct.
 * iframe HTML→canvas direct bypass of svg Image decode
 * 40 recipes: loop-ai-b13-w17-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "html-canvas img-auto int-floor",
    idea: "html-to-canvas-direct + image-rendering auto — serialized FO via iframe canvas",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "html-canvas contain round-dims",
    idea: "html-to-canvas-direct + contain paint min — serialized FO via iframe canvas",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "html-canvas overflow-min",
    idea: "html-to-canvas-direct + svg block overflow — serialized FO via iframe canvas",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
    },
  },
  {
    n: 4,
    slug: "html-canvas block-svg integer-viewbox",
    idea: "html-to-canvas-direct + svg display block — serialized FO via iframe canvas",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 5,
    slug: "html-canvas chromium-leaf int-floor",
    idea: "html-to-canvas-direct + Chromium copy leaf — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "html-canvas bare round-dims",
    idea: "html-to-canvas-direct + bare raster — serialized FO via iframe canvas",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "html-canvas overflow",
    idea: "html-to-canvas-direct + FO overflow visible — serialized FO via iframe canvas",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
    },
  },
  {
    n: 8,
    slug: "html-canvas leaf integer-viewbox",
    idea: "html-to-canvas-direct + FO leaf min-width — serialized FO via iframe canvas",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "html-canvas kerning int-floor",
    idea: "html-to-canvas-direct + FO kerning normal — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "html-canvas shape round-dims",
    idea: "html-to-canvas-direct + shape-rendering geometric — serialized FO via iframe canvas",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "html-canvas img-auto",
    idea: "html-to-canvas-direct + image-rendering auto — serialized FO via iframe canvas",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 12,
    slug: "html-canvas contain integer-viewbox",
    idea: "html-to-canvas-direct + contain paint min — serialized FO via iframe canvas",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "html-canvas overflow-min int-floor",
    idea: "html-to-canvas-direct + svg block overflow — serialized FO via iframe canvas",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "html-canvas block-svg round-dims",
    idea: "html-to-canvas-direct + svg display block — serialized FO via iframe canvas",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "html-canvas chromium-leaf",
    idea: "html-to-canvas-direct + Chromium copy leaf — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
    },
  },
  {
    n: 16,
    slug: "html-canvas bare integer-viewbox",
    idea: "html-to-canvas-direct + bare raster — serialized FO via iframe canvas",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "html-canvas overflow int-floor",
    idea: "html-to-canvas-direct + FO overflow visible — serialized FO via iframe canvas",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "html-canvas leaf round-dims",
    idea: "html-to-canvas-direct + FO leaf min-width — serialized FO via iframe canvas",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 19,
    slug: "html-canvas kerning",
    idea: "html-to-canvas-direct + FO kerning normal — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
    },
  },
  {
    n: 20,
    slug: "html-canvas shape integer-viewbox",
    idea: "html-to-canvas-direct + shape-rendering geometric — serialized FO via iframe canvas",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "html-canvas img-auto int-floor + filter-noop-defs",
    idea: "html-to-canvas-direct + image-rendering auto — serialized FO via iframe canvas",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "html-canvas contain round-dims + filter-noop-defs",
    idea: "html-to-canvas-direct + contain paint min — serialized FO via iframe canvas",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "html-canvas overflow-min + filter-noop-defs",
    idea: "html-to-canvas-direct + svg block overflow — serialized FO via iframe canvas",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "html-canvas block-svg integer-viewbox alt2",
    idea: "html-to-canvas-direct + svg display block — serialized FO via iframe canvas",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 25,
    slug: "html-canvas chromium-leaf int-floor alt2",
    idea: "html-to-canvas-direct + Chromium copy leaf — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 26,
    slug: "html-canvas bare round-dims + filter-noop-defs",
    idea: "html-to-canvas-direct + bare raster — serialized FO via iframe canvas",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "html-canvas overflow + filter-noop-defs",
    idea: "html-to-canvas-direct + FO overflow visible — serialized FO via iframe canvas",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "html-canvas leaf integer-viewbox + filter-noop-defs",
    idea: "html-to-canvas-direct + FO leaf min-width — serialized FO via iframe canvas",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "html-canvas kerning int-floor + filter-noop-defs",
    idea: "html-to-canvas-direct + FO kerning normal — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "html-canvas shape round-dims + filter-noop-defs",
    idea: "html-to-canvas-direct + shape-rendering geometric — serialized FO via iframe canvas",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "html-canvas img-auto alt2",
    idea: "html-to-canvas-direct + image-rendering auto — serialized FO via iframe canvas",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
    },
  },
  {
    n: 32,
    slug: "html-canvas contain integer-viewbox alt2",
    idea: "html-to-canvas-direct + contain paint min — serialized FO via iframe canvas",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 33,
    slug: "html-canvas overflow-min int-floor + filter-noop-defs",
    idea: "html-to-canvas-direct + svg block overflow — serialized FO via iframe canvas",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "html-canvas block-svg round-dims + filter-noop-defs",
    idea: "html-to-canvas-direct + svg display block — serialized FO via iframe canvas",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "html-canvas chromium-leaf + filter-noop-defs",
    idea: "html-to-canvas-direct + Chromium copy leaf — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "html-canvas bare integer-viewbox + filter-noop-defs",
    idea: "html-to-canvas-direct + bare raster — serialized FO via iframe canvas",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "html-canvas overflow int-floor + filter-noop-defs",
    idea: "html-to-canvas-direct + FO overflow visible — serialized FO via iframe canvas",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "html-canvas leaf round-dims alt2",
    idea: "html-to-canvas-direct + FO leaf min-width — serialized FO via iframe canvas",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 39,
    slug: "html-canvas kerning alt2",
    idea: "html-to-canvas-direct + FO kerning normal — serialized FO via iframe canvas",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 40,
    slug: "html-canvas shape integer-viewbox + filter-noop-defs",
    idea: "html-to-canvas-direct + shape-rendering geometric — serialized FO via iframe canvas",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "html-to-canvas-direct",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w17: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w17: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w17-${num}`,
    label: `Loop AI b13 w17 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w17; RASTER PRIMARY html-to-canvas-direct; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w17: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
