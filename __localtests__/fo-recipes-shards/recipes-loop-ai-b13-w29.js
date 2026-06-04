/**
 * Loop AI batch-13 FO recipe shard (worker 29) — RASTER PRIMARY: svg-root-pattern-fill.
 * transparent pattern fill on SVG root before FO raster
 * 40 recipes: loop-ai-b13-w29-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "pattern-fill triple-decode overflow",
    idea: "svg-root-pattern-fill + triple-decode + FO overflow visible — pattern defs flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "pattern-fill load-event leaf",
    idea: "svg-root-pattern-fill + load-event + FO leaf min-width — pattern defs flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "pattern-fill pre-decode-dom kerning",
    idea: "svg-root-pattern-fill + pre-decode-dom + FO kerning normal — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 4,
    slug: "pattern-fill blob-url-decode-interval shape",
    idea: "svg-root-pattern-fill + blob-url-decode-interval + shape-rendering geometric — pattern defs flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "pattern-fill offscreen-canvas img-auto",
    idea: "svg-root-pattern-fill + offscreen-canvas + image-rendering auto — pattern defs flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "pattern-fill will-read-frequently contain",
    idea: "svg-root-pattern-fill + will-read-frequently + contain paint min — pattern defs flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "pattern-fill decode-interval overflow-min",
    idea: "svg-root-pattern-fill + decode-interval + svg block overflow — pattern defs flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 8,
    slug: "pattern-fill decode-interval-raf block-svg",
    idea: "svg-root-pattern-fill + decode-interval-raf + svg display block — pattern defs flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "pattern-fill fonts-ready chromium-leaf",
    idea: "svg-root-pattern-fill + fonts-ready + Chromium copy leaf — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "pattern-fill double-decode bare",
    idea: "svg-root-pattern-fill + double-decode + bare raster — pattern defs flush",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "pattern-fill triple-decode overflow alt2",
    idea: "svg-root-pattern-fill + triple-decode + FO overflow visible — pattern defs flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-decode",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 12,
    slug: "pattern-fill load-event leaf alt2",
    idea: "svg-root-pattern-fill + load-event + FO leaf min-width — pattern defs flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "pattern-fill pre-decode-dom kerning alt2",
    idea: "svg-root-pattern-fill + pre-decode-dom + FO kerning normal — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "pattern-fill blob-url-decode-interval shape alt2",
    idea: "svg-root-pattern-fill + blob-url-decode-interval + shape-rendering geometric — pattern defs flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "pattern-fill offscreen-canvas img-auto alt2",
    idea: "svg-root-pattern-fill + offscreen-canvas + image-rendering auto — pattern defs flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 16,
    slug: "pattern-fill will-read-frequently contain alt2",
    idea: "svg-root-pattern-fill + will-read-frequently + contain paint min — pattern defs flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "pattern-fill decode-interval overflow-min alt2",
    idea: "svg-root-pattern-fill + decode-interval + svg block overflow — pattern defs flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "pattern-fill decode-interval-raf block-svg alt2",
    idea: "svg-root-pattern-fill + decode-interval-raf + svg display block — pattern defs flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "pattern-fill fonts-ready chromium-leaf alt2",
    idea: "svg-root-pattern-fill + fonts-ready + Chromium copy leaf — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 20,
    slug: "pattern-fill double-decode bare alt2",
    idea: "svg-root-pattern-fill + double-decode + bare raster — pattern defs flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "pattern-fill triple-decode overflow alt3",
    idea: "svg-root-pattern-fill + triple-decode + FO overflow visible — pattern defs flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 22,
    slug: "pattern-fill load-event leaf alt3",
    idea: "svg-root-pattern-fill + load-event + FO leaf min-width — pattern defs flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 23,
    slug: "pattern-fill pre-decode-dom kerning + fo-0",
    idea: "svg-root-pattern-fill + pre-decode-dom + FO kerning normal — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 24,
    slug: "pattern-fill blob-url-decode-interval shape alt3",
    idea: "svg-root-pattern-fill + blob-url-decode-interval + shape-rendering geometric — pattern defs flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 25,
    slug: "pattern-fill offscreen-canvas img-auto alt3",
    idea: "svg-root-pattern-fill + offscreen-canvas + image-rendering auto — pattern defs flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 26,
    slug: "pattern-fill will-read-frequently contain + fo-0",
    idea: "svg-root-pattern-fill + will-read-frequently + contain paint min — pattern defs flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 27,
    slug: "pattern-fill decode-interval overflow-min alt3",
    idea: "svg-root-pattern-fill + decode-interval + svg block overflow — pattern defs flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 28,
    slug: "pattern-fill decode-interval-raf block-svg alt3",
    idea: "svg-root-pattern-fill + decode-interval-raf + svg display block — pattern defs flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 29,
    slug: "pattern-fill fonts-ready chromium-leaf + fo-0",
    idea: "svg-root-pattern-fill + fonts-ready + Chromium copy leaf — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 30,
    slug: "pattern-fill double-decode bare alt3",
    idea: "svg-root-pattern-fill + double-decode + bare raster — pattern defs flush",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 31,
    slug: "pattern-fill triple-decode overflow alt4",
    idea: "svg-root-pattern-fill + triple-decode + FO overflow visible — pattern defs flush",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 32,
    slug: "pattern-fill load-event leaf + fo-0",
    idea: "svg-root-pattern-fill + load-event + FO leaf min-width — pattern defs flush",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 33,
    slug: "pattern-fill pre-decode-dom kerning alt3",
    idea: "svg-root-pattern-fill + pre-decode-dom + FO kerning normal — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 34,
    slug: "pattern-fill blob-url-decode-interval shape alt4",
    idea: "svg-root-pattern-fill + blob-url-decode-interval + shape-rendering geometric — pattern defs flush",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 35,
    slug: "pattern-fill offscreen-canvas img-auto + fo-0",
    idea: "svg-root-pattern-fill + offscreen-canvas + image-rendering auto — pattern defs flush",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 36,
    slug: "pattern-fill will-read-frequently contain alt3",
    idea: "svg-root-pattern-fill + will-read-frequently + contain paint min — pattern defs flush",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 37,
    slug: "pattern-fill decode-interval overflow-min alt4",
    idea: "svg-root-pattern-fill + decode-interval + svg block overflow — pattern defs flush",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 38,
    slug: "pattern-fill decode-interval-raf block-svg + fo-0",
    idea: "svg-root-pattern-fill + decode-interval-raf + svg display block — pattern defs flush",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 39,
    slug: "pattern-fill fonts-ready chromium-leaf alt3",
    idea: "svg-root-pattern-fill + fonts-ready + Chromium copy leaf — pattern defs flush",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      foSvgPatch: "svg-root-pattern-fill",
    },
  },
  {
    n: 40,
    slug: "pattern-fill double-decode bare alt4",
    idea: "svg-root-pattern-fill + double-decode + bare raster — pattern defs flush",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      foSvgPatch: "svg-root-pattern-fill",
      svgRootRound: "integer-viewbox",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w29: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w29: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w29-${num}`,
    label: `Loop AI b13 w29 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w29; RASTER PRIMARY svg-root-pattern-fill; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w29: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
