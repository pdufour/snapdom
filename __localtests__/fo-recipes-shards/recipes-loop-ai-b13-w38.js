/**
 * Loop AI batch-13 FO recipe shard (worker 38) — RASTER PRIMARY: filter-empty-nop SVG patch.
 * filter-empty-nop on FO + raster timing and viewBox combos
 * 40 recipes: loop-ai-b13-w38-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "filter-nop double-decode kerning round-dims",
    idea: "filter-empty-nop + double-decode + FO kerning normal + round-dims",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "filter-nop triple-decode shape",
    idea: "filter-empty-nop + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 3,
    slug: "filter-nop fonts-ready img-auto integer-viewbox",
    idea: "filter-empty-nop + fonts-ready + image-rendering auto + integer-viewbox",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "filter-nop fonts-ready-interval contain int-floor",
    idea: "filter-empty-nop + fonts-ready-interval + contain paint min + int-floor",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "filter-nop load-event overflow-min round-dims",
    idea: "filter-empty-nop + load-event + svg block overflow + round-dims",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "filter-nop load-event-interval block-svg",
    idea: "filter-empty-nop + load-event-interval + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 7,
    slug: "filter-nop pre-decode-dom chromium-leaf integer-viewbox",
    idea: "filter-empty-nop + pre-decode-dom + Chromium copy leaf + integer-viewbox",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "filter-nop decode-microtask-twice bare int-floor",
    idea: "filter-empty-nop + decode-microtask-twice + bare raster + int-floor",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "filter-nop decode-interval overflow round-dims",
    idea: "filter-empty-nop + decode-interval + FO overflow visible + round-dims",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "filter-nop decode-interval-raf leaf",
    idea: "filter-empty-nop + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 11,
    slug: "filter-nop double-decode kerning integer-viewbox",
    idea: "filter-empty-nop + double-decode + FO kerning normal + integer-viewbox",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "filter-nop triple-decode shape int-floor",
    idea: "filter-empty-nop + triple-decode + shape-rendering geometric + int-floor",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "filter-nop fonts-ready img-auto round-dims",
    idea: "filter-empty-nop + fonts-ready + image-rendering auto + round-dims",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "filter-nop fonts-ready-interval contain",
    idea: "filter-empty-nop + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 15,
    slug: "filter-nop load-event overflow-min integer-viewbox",
    idea: "filter-empty-nop + load-event + svg block overflow + integer-viewbox",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "filter-nop load-event-interval block-svg int-floor",
    idea: "filter-empty-nop + load-event-interval + svg display block + int-floor",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "filter-nop pre-decode-dom chromium-leaf round-dims",
    idea: "filter-empty-nop + pre-decode-dom + Chromium copy leaf + round-dims",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "filter-nop decode-microtask-twice bare",
    idea: "filter-empty-nop + decode-microtask-twice + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 19,
    slug: "filter-nop decode-interval overflow integer-viewbox",
    idea: "filter-empty-nop + decode-interval + FO overflow visible + integer-viewbox",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "filter-nop decode-interval-raf leaf int-floor",
    idea: "filter-empty-nop + decode-interval-raf + FO leaf min-width + int-floor",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "filter-empty-nop",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "filter-nop double-decode kerning round-dims + fo-0",
    idea: "filter-empty-nop + double-decode + FO kerning normal + round-dims",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 22,
    slug: "filter-nop triple-decode shape + fo-0",
    idea: "filter-empty-nop + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 23,
    slug: "filter-nop fonts-ready img-auto integer-viewbox + fo-0",
    idea: "filter-empty-nop + fonts-ready + image-rendering auto + integer-viewbox",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "filter-nop fonts-ready-interval contain int-floor + fo-0",
    idea: "filter-empty-nop + fonts-ready-interval + contain paint min + int-floor",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 25,
    slug: "filter-nop load-event overflow-min round-dims + fo-0",
    idea: "filter-empty-nop + load-event + svg block overflow + round-dims",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 26,
    slug: "filter-nop load-event-interval block-svg + fo-0",
    idea: "filter-empty-nop + load-event-interval + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 27,
    slug: "filter-nop pre-decode-dom chromium-leaf integer-viewbox + fo-0",
    idea: "filter-empty-nop + pre-decode-dom + Chromium copy leaf + integer-viewbox",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 28,
    slug: "filter-nop decode-microtask-twice bare int-floor + fo-0",
    idea: "filter-empty-nop + decode-microtask-twice + bare raster + int-floor",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 29,
    slug: "filter-nop decode-interval overflow round-dims + fo-0",
    idea: "filter-empty-nop + decode-interval + FO overflow visible + round-dims",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 30,
    slug: "filter-nop decode-interval-raf leaf + fo-0",
    idea: "filter-empty-nop + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 31,
    slug: "filter-nop double-decode kerning integer-viewbox + fo-0",
    idea: "filter-empty-nop + double-decode + FO kerning normal + integer-viewbox",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 32,
    slug: "filter-nop triple-decode shape int-floor + fo-0",
    idea: "filter-empty-nop + triple-decode + shape-rendering geometric + int-floor",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 33,
    slug: "filter-nop fonts-ready img-auto round-dims + fo-0",
    idea: "filter-empty-nop + fonts-ready + image-rendering auto + round-dims",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "filter-nop fonts-ready-interval contain + fo-0",
    idea: "filter-empty-nop + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 35,
    slug: "filter-nop load-event overflow-min integer-viewbox + fo-0",
    idea: "filter-empty-nop + load-event + svg block overflow + integer-viewbox",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 36,
    slug: "filter-nop load-event-interval block-svg int-floor + fo-0",
    idea: "filter-empty-nop + load-event-interval + svg display block + int-floor",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 37,
    slug: "filter-nop pre-decode-dom chromium-leaf round-dims + fo-0",
    idea: "filter-empty-nop + pre-decode-dom + Chromium copy leaf + round-dims",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 38,
    slug: "filter-nop decode-microtask-twice bare + fo-0",
    idea: "filter-empty-nop + decode-microtask-twice + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 39,
    slug: "filter-nop decode-interval overflow integer-viewbox + fo-0",
    idea: "filter-empty-nop + decode-interval + FO overflow visible + integer-viewbox",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 40,
    slug: "filter-nop decode-interval-raf leaf int-floor + fo-0",
    idea: "filter-empty-nop + decode-interval-raf + FO leaf min-width + int-floor",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w38: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w38: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w38-${num}`,
    label: `Loop AI b13 w38 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w38; RASTER PRIMARY filter-empty-nop SVG patch; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w38: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
