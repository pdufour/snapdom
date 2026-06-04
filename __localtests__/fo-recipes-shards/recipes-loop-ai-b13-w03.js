/**
 * Loop AI batch-13 FO recipe shard (worker 03) — RASTER PRIMARY: webp-roundtrip encode.
 * canvas→webp→img decode round-trip before final drawImage
 * 40 recipes: loop-ai-b13-w03-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "webp-roundtrip shape int-floor",
    idea: "webp-roundtrip lossy re-encode + shape-rendering geometric — FO decode via webp intermediate",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    n: 2,
    slug: "webp-roundtrip img-auto round-dims",
    idea: "webp-roundtrip lossy re-encode + image-rendering auto — FO decode via webp intermediate",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 3,
    slug: "webp-roundtrip contain",
    idea: "webp-roundtrip lossy re-encode + contain paint min — FO decode via webp intermediate",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
    },
  },
  {
    n: 4,
    slug: "webp-roundtrip overflow-min integer-viewbox",
    idea: "webp-roundtrip lossy re-encode + svg block overflow — FO decode via webp intermediate",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "webp-roundtrip block-svg int-floor",
    idea: "webp-roundtrip lossy re-encode + svg display block — FO decode via webp intermediate",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "webp-roundtrip chromium-leaf round-dims",
    idea: "webp-roundtrip lossy re-encode + Chromium copy leaf — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    n: 7,
    slug: "webp-roundtrip bare",
    idea: "webp-roundtrip lossy re-encode + bare raster — FO decode via webp intermediate",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
    },
  },
  {
    n: 8,
    slug: "webp-roundtrip overflow integer-viewbox",
    idea: "webp-roundtrip lossy re-encode + FO overflow visible — FO decode via webp intermediate",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "webp-roundtrip leaf int-floor",
    idea: "webp-roundtrip lossy re-encode + FO leaf min-width — FO decode via webp intermediate",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 10,
    slug: "webp-roundtrip kerning round-dims",
    idea: "webp-roundtrip lossy re-encode + FO kerning normal — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "webp-roundtrip shape",
    idea: "webp-roundtrip lossy re-encode + shape-rendering geometric — FO decode via webp intermediate",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    n: 12,
    slug: "webp-roundtrip img-auto integer-viewbox",
    idea: "webp-roundtrip lossy re-encode + image-rendering auto — FO decode via webp intermediate",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "webp-roundtrip contain int-floor",
    idea: "webp-roundtrip lossy re-encode + contain paint min — FO decode via webp intermediate",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "webp-roundtrip overflow-min round-dims",
    idea: "webp-roundtrip lossy re-encode + svg block overflow — FO decode via webp intermediate",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "webp-roundtrip block-svg",
    idea: "webp-roundtrip lossy re-encode + svg display block — FO decode via webp intermediate",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
    },
  },
  {
    n: 16,
    slug: "webp-roundtrip chromium-leaf integer-viewbox",
    idea: "webp-roundtrip lossy re-encode + Chromium copy leaf — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 17,
    slug: "webp-roundtrip bare int-floor",
    idea: "webp-roundtrip lossy re-encode + bare raster — FO decode via webp intermediate",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "webp-roundtrip overflow round-dims",
    idea: "webp-roundtrip lossy re-encode + FO overflow visible — FO decode via webp intermediate",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "webp-roundtrip leaf",
    idea: "webp-roundtrip lossy re-encode + FO leaf min-width — FO decode via webp intermediate",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
    },
  },
  {
    n: 20,
    slug: "webp-roundtrip kerning integer-viewbox",
    idea: "webp-roundtrip lossy re-encode + FO kerning normal — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "webp-roundtrip shape int-floor + fo-0",
    idea: "webp-roundtrip lossy re-encode + shape-rendering geometric — FO decode via webp intermediate",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 22,
    slug: "webp-roundtrip img-auto round-dims alt2",
    idea: "webp-roundtrip lossy re-encode + image-rendering auto — FO decode via webp intermediate",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 23,
    slug: "webp-roundtrip contain alt2",
    idea: "webp-roundtrip lossy re-encode + contain paint min — FO decode via webp intermediate",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 24,
    slug: "webp-roundtrip overflow-min integer-viewbox + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + svg block overflow — FO decode via webp intermediate",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "webp-roundtrip block-svg int-floor + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + svg display block — FO decode via webp intermediate",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "webp-roundtrip chromium-leaf round-dims + fo-0",
    idea: "webp-roundtrip lossy re-encode + Chromium copy leaf — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 27,
    slug: "webp-roundtrip bare + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + bare raster — FO decode via webp intermediate",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "webp-roundtrip overflow integer-viewbox + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + FO overflow visible — FO decode via webp intermediate",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "webp-roundtrip leaf int-floor alt2",
    idea: "webp-roundtrip lossy re-encode + FO leaf min-width — FO decode via webp intermediate",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 30,
    slug: "webp-roundtrip kerning round-dims alt2",
    idea: "webp-roundtrip lossy re-encode + FO kerning normal — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 31,
    slug: "webp-roundtrip shape + fo-0",
    idea: "webp-roundtrip lossy re-encode + shape-rendering geometric — FO decode via webp intermediate",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 32,
    slug: "webp-roundtrip img-auto integer-viewbox + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + image-rendering auto — FO decode via webp intermediate",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "webp-roundtrip contain int-floor + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + contain paint min — FO decode via webp intermediate",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "webp-roundtrip overflow-min round-dims + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + svg block overflow — FO decode via webp intermediate",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "webp-roundtrip block-svg + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + svg display block — FO decode via webp intermediate",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "webp-roundtrip chromium-leaf integer-viewbox alt2",
    idea: "webp-roundtrip lossy re-encode + Chromium copy leaf — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    n: 37,
    slug: "webp-roundtrip bare int-floor alt2",
    idea: "webp-roundtrip lossy re-encode + bare raster — FO decode via webp intermediate",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "int-floor",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 38,
    slug: "webp-roundtrip overflow round-dims + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + FO overflow visible — FO decode via webp intermediate",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "webp-roundtrip leaf + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + FO leaf min-width — FO decode via webp intermediate",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "webp-roundtrip kerning integer-viewbox + filter-noop-defs",
    idea: "webp-roundtrip lossy re-encode + FO kerning normal — FO decode via webp intermediate",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w03: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w03: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w03-${num}`,
    label: `Loop AI b13 w03 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w03; RASTER PRIMARY webp-roundtrip encode; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w03: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
