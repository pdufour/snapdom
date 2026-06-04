/**
 * Loop AI batch-13 FO recipe shard (worker 33) — RASTER PRIMARY: svgMarkupPatch sweep.
 * strip-xml / explicit-xmlns / base64-roundtrip markup patches + raster
 * 40 recipes: loop-ai-b13-w33-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "explicit-xmlns-strip-transforms fonts-ready-interval kerning",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + fonts-ready-interval + FO kerning normal — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 2,
    slug: "base64-roundtrip blob-url-decode-interval shape",
    idea: "svgMarkupPatch base64-roundtrip + blob-url-decode-interval + shape-rendering geometric — string hygiene before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      svgMarkupPatch: "base64-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 3,
    slug: "strip-all-transforms create-image-bitmap img-auto",
    idea: "svgMarkupPatch strip-all-transforms + create-image-bitmap + image-rendering auto — string hygiene before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 4,
    slug: "strip-xml-declaration offscreen-canvas contain",
    idea: "svgMarkupPatch strip-xml-declaration + offscreen-canvas + contain paint min — string hygiene before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 5,
    slug: "explicit-xmlns triple-raf-flush overflow-min",
    idea: "svgMarkupPatch explicit-xmlns + triple-raf-flush + svg block overflow — string hygiene before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 6,
    slug: "strip-identity-transforms webp-roundtrip block-svg",
    idea: "svgMarkupPatch strip-identity-transforms + webp-roundtrip + svg display block — string hygiene before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgMarkupPatch: "strip-identity-transforms",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 7,
    slug: "explicit-xmlns-strip-transforms phantom-font-prime chromium-leaf",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + phantom-font-prime + Chromium copy leaf — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 8,
    slug: "base64-roundtrip scale-down-up bare",
    idea: "svgMarkupPatch base64-roundtrip + scale-down-up + bare raster — string hygiene before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 9,
    slug: "strip-all-transforms decode-interval overflow",
    idea: "svgMarkupPatch strip-all-transforms + decode-interval + FO overflow visible — string hygiene before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 10,
    slug: "strip-xml-declaration double-raf leaf",
    idea: "svgMarkupPatch strip-xml-declaration + double-raf + FO leaf min-width — string hygiene before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      svgMarkupPatch: "strip-xml-declaration",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 11,
    slug: "explicit-xmlns fonts-ready-interval kerning",
    idea: "svgMarkupPatch explicit-xmlns + fonts-ready-interval + FO kerning normal — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 12,
    slug: "strip-identity-transforms blob-url-decode-interval shape",
    idea: "svgMarkupPatch strip-identity-transforms + blob-url-decode-interval + shape-rendering geometric — string hygiene before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 13,
    slug: "explicit-xmlns-strip-transforms create-image-bitmap img-auto",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + create-image-bitmap + image-rendering auto — string hygiene before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 14,
    slug: "base64-roundtrip offscreen-canvas contain",
    idea: "svgMarkupPatch base64-roundtrip + offscreen-canvas + contain paint min — string hygiene before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      svgMarkupPatch: "base64-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 15,
    slug: "strip-all-transforms triple-raf-flush overflow-min",
    idea: "svgMarkupPatch strip-all-transforms + triple-raf-flush + svg block overflow — string hygiene before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 16,
    slug: "strip-xml-declaration webp-roundtrip block-svg",
    idea: "svgMarkupPatch strip-xml-declaration + webp-roundtrip + svg display block — string hygiene before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 17,
    slug: "explicit-xmlns phantom-font-prime chromium-leaf",
    idea: "svgMarkupPatch explicit-xmlns + phantom-font-prime + Chromium copy leaf — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 18,
    slug: "strip-identity-transforms scale-down-up bare",
    idea: "svgMarkupPatch strip-identity-transforms + scale-down-up + bare raster — string hygiene before decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgMarkupPatch: "strip-identity-transforms",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 19,
    slug: "explicit-xmlns-strip-transforms decode-interval overflow",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + decode-interval + FO overflow visible — string hygiene before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 20,
    slug: "base64-roundtrip double-raf leaf",
    idea: "svgMarkupPatch base64-roundtrip + double-raf + FO leaf min-width — string hygiene before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 21,
    slug: "strip-all-transforms fonts-ready-interval kerning",
    idea: "svgMarkupPatch strip-all-transforms + fonts-ready-interval + FO kerning normal — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 22,
    slug: "strip-xml-declaration blob-url-decode-interval shape",
    idea: "svgMarkupPatch strip-xml-declaration + blob-url-decode-interval + shape-rendering geometric — string hygiene before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      svgMarkupPatch: "strip-xml-declaration",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 23,
    slug: "explicit-xmlns create-image-bitmap img-auto",
    idea: "svgMarkupPatch explicit-xmlns + create-image-bitmap + image-rendering auto — string hygiene before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "create-image-bitmap",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 24,
    slug: "strip-identity-transforms offscreen-canvas contain",
    idea: "svgMarkupPatch strip-identity-transforms + offscreen-canvas + contain paint min — string hygiene before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 25,
    slug: "explicit-xmlns-strip-transforms triple-raf-flush overflow-min",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + triple-raf-flush + svg block overflow — string hygiene before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    n: 26,
    slug: "base64-roundtrip webp-roundtrip block-svg",
    idea: "svgMarkupPatch base64-roundtrip + webp-roundtrip + svg display block — string hygiene before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgMarkupPatch: "base64-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 27,
    slug: "strip-all-transforms phantom-font-prime chromium-leaf",
    idea: "svgMarkupPatch strip-all-transforms + phantom-font-prime + Chromium copy leaf — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 28,
    slug: "strip-xml-declaration scale-down-up bare",
    idea: "svgMarkupPatch strip-xml-declaration + scale-down-up + bare raster — string hygiene before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    n: 29,
    slug: "explicit-xmlns decode-interval overflow",
    idea: "svgMarkupPatch explicit-xmlns + decode-interval + FO overflow visible — string hygiene before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 30,
    slug: "strip-identity-transforms double-raf leaf",
    idea: "svgMarkupPatch strip-identity-transforms + double-raf + FO leaf min-width — string hygiene before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      svgMarkupPatch: "strip-identity-transforms",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 31,
    slug: "explicit-xmlns-strip-transforms fonts-ready-interval kerning + filter-noop-defs",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + fonts-ready-interval + FO kerning normal — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "base64-roundtrip blob-url-decode-interval shape alt2",
    idea: "svgMarkupPatch base64-roundtrip + blob-url-decode-interval + shape-rendering geometric — string hygiene before decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 33,
    slug: "strip-all-transforms create-image-bitmap img-auto + filter-noop-defs",
    idea: "svgMarkupPatch strip-all-transforms + create-image-bitmap + image-rendering auto — string hygiene before decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      svgMarkupPatch: "strip-all-transforms",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "strip-xml-declaration offscreen-canvas contain alt2",
    idea: "svgMarkupPatch strip-xml-declaration + offscreen-canvas + contain paint min — string hygiene before decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      svgMarkupPatch: "strip-xml-declaration",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 35,
    slug: "explicit-xmlns triple-raf-flush overflow-min + filter-noop-defs",
    idea: "svgMarkupPatch explicit-xmlns + triple-raf-flush + svg block overflow — string hygiene before decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgMarkupPatch: "explicit-xmlns",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "strip-identity-transforms webp-roundtrip block-svg alt2",
    idea: "svgMarkupPatch strip-identity-transforms + webp-roundtrip + svg display block — string hygiene before decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 37,
    slug: "explicit-xmlns-strip-transforms phantom-font-prime chromium-leaf + filter-noop-defs",
    idea: "svgMarkupPatch explicit-xmlns-strip-transforms + phantom-font-prime + Chromium copy leaf — string hygiene before decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "base64-roundtrip scale-down-up bare alt2",
    idea: "svgMarkupPatch base64-roundtrip + scale-down-up + bare raster — string hygiene before decode",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgMarkupPatch: "base64-roundtrip",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 39,
    slug: "strip-all-transforms decode-interval overflow + filter-noop-defs",
    idea: "svgMarkupPatch strip-all-transforms + decode-interval + FO overflow visible — string hygiene before decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      svgMarkupPatch: "strip-all-transforms",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "strip-xml-declaration double-raf leaf alt2",
    idea: "svgMarkupPatch strip-xml-declaration + double-raf + FO leaf min-width — string hygiene before decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w33: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w33: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w33-${num}`,
    label: `Loop AI b13 w33 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w33; RASTER PRIMARY svgMarkupPatch sweep; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w33: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
