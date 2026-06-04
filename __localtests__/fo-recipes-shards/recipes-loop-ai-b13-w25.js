/**
 * Loop AI batch-13 FO recipe shard (worker 25) — RASTER PRIMARY: fe-component-transfer-identity.
 * feComponentTransfer identity filter + raster timing variants
 * 40 recipes: loop-ai-b13-w25-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fe-comp create-image-bitmap chromium-leaf",
    idea: "fe-component-transfer-identity + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "fe-comp two-stage bare",
    idea: "fe-component-transfer-identity + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "fe-comp triple-raf-flush overflow",
    idea: "fe-component-transfer-identity + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 4,
    slug: "fe-comp webp-roundtrip leaf",
    idea: "fe-component-transfer-identity + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "fe-comp decode-microtask-twice kerning",
    idea: "fe-component-transfer-identity + decode-microtask-twice + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "fe-comp raf-before-draw shape",
    idea: "fe-component-transfer-identity + raf-before-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "fe-comp double-decode img-auto",
    idea: "fe-component-transfer-identity + double-decode + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 8,
    slug: "fe-comp fonts-ready-interval contain",
    idea: "fe-component-transfer-identity + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "fe-comp load-event-interval overflow-min",
    idea: "fe-component-transfer-identity + load-event-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "fe-comp decode-via-blob block-svg",
    idea: "fe-component-transfer-identity + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "fe-comp create-image-bitmap chromium-leaf alt2",
    idea: "fe-component-transfer-identity + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 12,
    slug: "fe-comp two-stage bare alt2",
    idea: "fe-component-transfer-identity + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "fe-comp triple-raf-flush overflow alt2",
    idea: "fe-component-transfer-identity + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "fe-comp webp-roundtrip leaf alt2",
    idea: "fe-component-transfer-identity + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "fe-comp decode-microtask-twice kerning alt2",
    idea: "fe-component-transfer-identity + decode-microtask-twice + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 16,
    slug: "fe-comp raf-before-draw shape alt2",
    idea: "fe-component-transfer-identity + raf-before-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "fe-comp double-decode img-auto alt2",
    idea: "fe-component-transfer-identity + double-decode + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "fe-comp fonts-ready-interval contain alt2",
    idea: "fe-component-transfer-identity + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "fe-comp load-event-interval overflow-min alt2",
    idea: "fe-component-transfer-identity + load-event-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 20,
    slug: "fe-comp decode-via-blob block-svg alt2",
    idea: "fe-component-transfer-identity + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fe-component-transfer-identity",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "fe-comp create-image-bitmap chromium-leaf + fo-0",
    idea: "fe-component-transfer-identity + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 22,
    slug: "fe-comp two-stage bare + fo-0",
    idea: "fe-component-transfer-identity + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 23,
    slug: "fe-comp triple-raf-flush overflow + fo-0",
    idea: "fe-component-transfer-identity + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 24,
    slug: "fe-comp webp-roundtrip leaf + fo-0",
    idea: "fe-component-transfer-identity + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 25,
    slug: "fe-comp decode-microtask-twice kerning + fo-0",
    idea: "fe-component-transfer-identity + decode-microtask-twice + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 26,
    slug: "fe-comp raf-before-draw shape + fo-0",
    idea: "fe-component-transfer-identity + raf-before-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 27,
    slug: "fe-comp double-decode img-auto + fo-0",
    idea: "fe-component-transfer-identity + double-decode + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 28,
    slug: "fe-comp fonts-ready-interval contain + fo-0",
    idea: "fe-component-transfer-identity + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 29,
    slug: "fe-comp load-event-interval overflow-min + fo-0",
    idea: "fe-component-transfer-identity + load-event-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 30,
    slug: "fe-comp decode-via-blob block-svg + fo-0",
    idea: "fe-component-transfer-identity + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 31,
    slug: "fe-comp create-image-bitmap chromium-leaf + fo-0 alt2",
    idea: "fe-component-transfer-identity + create-image-bitmap + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 32,
    slug: "fe-comp two-stage bare + fo-0 alt2",
    idea: "fe-component-transfer-identity + two-stage + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "two-stage",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 33,
    slug: "fe-comp triple-raf-flush overflow + fo-0 alt2",
    idea: "fe-component-transfer-identity + triple-raf-flush + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 34,
    slug: "fe-comp webp-roundtrip leaf + fo-0 alt2",
    idea: "fe-component-transfer-identity + webp-roundtrip + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 35,
    slug: "fe-comp decode-microtask-twice kerning + fo-0 alt2",
    idea: "fe-component-transfer-identity + decode-microtask-twice + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 36,
    slug: "fe-comp raf-before-draw shape + fo-0 alt2",
    idea: "fe-component-transfer-identity + raf-before-draw + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 37,
    slug: "fe-comp double-decode img-auto + fo-0 alt2",
    idea: "fe-component-transfer-identity + double-decode + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 38,
    slug: "fe-comp fonts-ready-interval contain + fo-0 alt2",
    idea: "fe-component-transfer-identity + fonts-ready-interval + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 39,
    slug: "fe-comp load-event-interval overflow-min + fo-0 alt2",
    idea: "fe-component-transfer-identity + load-event-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 40,
    slug: "fe-comp decode-via-blob block-svg + fo-0 alt2",
    idea: "fe-component-transfer-identity + decode-via-blob + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-via-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w25: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w25: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w25-${num}`,
    label: `Loop AI b13 w25 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w25; RASTER PRIMARY fe-component-transfer-identity; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w25: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
