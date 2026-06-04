/**
 * Loop AI batch-13 FO recipe shard (worker 24) — RASTER PRIMARY: fe-morphology-identity filter.
 * SVG feMorphology identity on FO + varied raster decode paths
 * 40 recipes: loop-ai-b13-w24-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fe-morph load-event contain",
    idea: "fe-morphology-identity + load-event + contain paint min — filter graph noop before raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "fe-morph pre-decode-dom overflow-min",
    idea: "fe-morphology-identity + pre-decode-dom + svg block overflow — filter graph noop before raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 3,
    slug: "fe-morph blob-url block-svg",
    idea: "fe-morphology-identity + blob-url + svg display block — filter graph noop before raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "fe-morph offscreen-canvas chromium-leaf",
    idea: "fe-morphology-identity + offscreen-canvas + Chromium copy leaf — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "fe-morph will-read-frequently bare",
    idea: "fe-morphology-identity + will-read-frequently + bare raster — filter graph noop before raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "fe-morph canvas-pixelated overflow",
    idea: "fe-morphology-identity + canvas-pixelated + FO overflow visible — filter graph noop before raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 7,
    slug: "fe-morph direct leaf",
    idea: "fe-morphology-identity + direct + FO leaf min-width — filter graph noop before raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "fe-morph decode-interval-raf kerning",
    idea: "fe-morphology-identity + decode-interval-raf + FO kerning normal — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "fe-morph double-raf shape",
    idea: "fe-morphology-identity + double-raf + shape-rendering geometric — filter graph noop before raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "fe-morph fonts-ready img-auto",
    idea: "fe-morphology-identity + fonts-ready + image-rendering auto — filter graph noop before raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 11,
    slug: "fe-morph load-event contain alt2",
    idea: "fe-morphology-identity + load-event + contain paint min — filter graph noop before raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "fe-morph pre-decode-dom overflow-min alt2",
    idea: "fe-morphology-identity + pre-decode-dom + svg block overflow — filter graph noop before raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "fe-morph blob-url block-svg alt2",
    idea: "fe-morphology-identity + blob-url + svg display block — filter graph noop before raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "fe-morph offscreen-canvas chromium-leaf alt2",
    idea: "fe-morphology-identity + offscreen-canvas + Chromium copy leaf — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 15,
    slug: "fe-morph will-read-frequently bare alt2",
    idea: "fe-morphology-identity + will-read-frequently + bare raster — filter graph noop before raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "fe-morph canvas-pixelated overflow alt2",
    idea: "fe-morphology-identity + canvas-pixelated + FO overflow visible — filter graph noop before raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "fe-morph direct leaf alt2",
    idea: "fe-morphology-identity + direct + FO leaf min-width — filter graph noop before raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "fe-morph decode-interval-raf kerning alt2",
    idea: "fe-morphology-identity + decode-interval-raf + FO kerning normal — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    n: 19,
    slug: "fe-morph double-raf shape alt2",
    idea: "fe-morphology-identity + double-raf + shape-rendering geometric — filter graph noop before raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "fe-morph fonts-ready img-auto alt2",
    idea: "fe-morphology-identity + fonts-ready + image-rendering auto — filter graph noop before raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fe-morphology-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "fe-morph load-event contain + fo-0",
    idea: "fe-morphology-identity + load-event + contain paint min — filter graph noop before raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 22,
    slug: "fe-morph pre-decode-dom overflow-min + fo-0",
    idea: "fe-morphology-identity + pre-decode-dom + svg block overflow — filter graph noop before raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 23,
    slug: "fe-morph blob-url block-svg + fo-0",
    idea: "fe-morphology-identity + blob-url + svg display block — filter graph noop before raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "fe-morph offscreen-canvas chromium-leaf + fo-0",
    idea: "fe-morphology-identity + offscreen-canvas + Chromium copy leaf — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 25,
    slug: "fe-morph will-read-frequently bare + fo-0",
    idea: "fe-morphology-identity + will-read-frequently + bare raster — filter graph noop before raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 26,
    slug: "fe-morph canvas-pixelated overflow + fo-0",
    idea: "fe-morphology-identity + canvas-pixelated + FO overflow visible — filter graph noop before raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 27,
    slug: "fe-morph direct leaf + fo-0",
    idea: "fe-morphology-identity + direct + FO leaf min-width — filter graph noop before raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 28,
    slug: "fe-morph decode-interval-raf kerning + fo-0",
    idea: "fe-morphology-identity + decode-interval-raf + FO kerning normal — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 29,
    slug: "fe-morph double-raf shape + fo-0",
    idea: "fe-morphology-identity + double-raf + shape-rendering geometric — filter graph noop before raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 30,
    slug: "fe-morph fonts-ready img-auto + fo-0",
    idea: "fe-morphology-identity + fonts-ready + image-rendering auto — filter graph noop before raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 31,
    slug: "fe-morph load-event contain + fo-0 alt2",
    idea: "fe-morphology-identity + load-event + contain paint min — filter graph noop before raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 32,
    slug: "fe-morph pre-decode-dom overflow-min + fo-0 alt2",
    idea: "fe-morphology-identity + pre-decode-dom + svg block overflow — filter graph noop before raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 33,
    slug: "fe-morph blob-url block-svg + fo-0 alt2",
    idea: "fe-morphology-identity + blob-url + svg display block — filter graph noop before raster",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "fe-morph offscreen-canvas chromium-leaf + fo-0 alt2",
    idea: "fe-morphology-identity + offscreen-canvas + Chromium copy leaf — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 35,
    slug: "fe-morph will-read-frequently bare + fo-0 alt2",
    idea: "fe-morphology-identity + will-read-frequently + bare raster — filter graph noop before raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 36,
    slug: "fe-morph canvas-pixelated overflow + fo-0 alt2",
    idea: "fe-morphology-identity + canvas-pixelated + FO overflow visible — filter graph noop before raster",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-pixelated",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 37,
    slug: "fe-morph direct leaf + fo-0 alt2",
    idea: "fe-morphology-identity + direct + FO leaf min-width — filter graph noop before raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 38,
    slug: "fe-morph decode-interval-raf kerning + fo-0 alt2",
    idea: "fe-morphology-identity + decode-interval-raf + FO kerning normal — filter graph noop before raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 39,
    slug: "fe-morph double-raf shape + fo-0 alt2",
    idea: "fe-morphology-identity + double-raf + shape-rendering geometric — filter graph noop before raster",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 40,
    slug: "fe-morph fonts-ready img-auto + fo-0 alt2",
    idea: "fe-morphology-identity + fonts-ready + image-rendering auto — filter graph noop before raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w24: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w24: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w24-${num}`,
    label: `Loop AI b13 w24 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w24; RASTER PRIMARY fe-morphology-identity filter; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w24: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
