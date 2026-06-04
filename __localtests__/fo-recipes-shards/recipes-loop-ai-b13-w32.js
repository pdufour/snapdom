/**
 * Loop AI batch-13 FO recipe shard (worker 32) — RASTER PRIMARY: fo-shape-rendering-auto.
 * shape-rendering:auto SVG patch on FO + raster decode sweeps
 * 40 recipes: loop-ai-b13-w32-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "shape-auto load-event-interval bare",
    idea: "fo-shape-rendering-auto + load-event-interval + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "shape-auto decode-microtask-twice overflow",
    idea: "fo-shape-rendering-auto + decode-microtask-twice + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 3,
    slug: "shape-auto raf-before-draw leaf",
    idea: "fo-shape-rendering-auto + raf-before-draw + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "shape-auto double-decode kerning",
    idea: "fo-shape-rendering-auto + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "shape-auto triple-decode shape",
    idea: "fo-shape-rendering-auto + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "shape-auto fonts-ready-interval img-auto",
    idea: "fo-shape-rendering-auto + fonts-ready-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 7,
    slug: "shape-auto wait-fonts-500ms contain",
    idea: "fo-shape-rendering-auto + wait-fonts-500ms + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "shape-auto blob-url overflow-min",
    idea: "fo-shape-rendering-auto + blob-url + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "shape-auto direct block-svg",
    idea: "fo-shape-rendering-auto + direct + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "shape-auto device-grid-floor chromium-leaf",
    idea: "fo-shape-rendering-auto + device-grid-floor + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 11,
    slug: "shape-auto load-event-interval bare alt2",
    idea: "fo-shape-rendering-auto + load-event-interval + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "shape-auto decode-microtask-twice overflow alt2",
    idea: "fo-shape-rendering-auto + decode-microtask-twice + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "shape-auto raf-before-draw leaf alt2",
    idea: "fo-shape-rendering-auto + raf-before-draw + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "shape-auto double-decode kerning alt2",
    idea: "fo-shape-rendering-auto + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 15,
    slug: "shape-auto triple-decode shape alt2",
    idea: "fo-shape-rendering-auto + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "shape-auto fonts-ready-interval img-auto alt2",
    idea: "fo-shape-rendering-auto + fonts-ready-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "shape-auto wait-fonts-500ms contain alt2",
    idea: "fo-shape-rendering-auto + wait-fonts-500ms + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "shape-auto blob-url overflow-min alt2",
    idea: "fo-shape-rendering-auto + blob-url + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 19,
    slug: "shape-auto direct block-svg alt2",
    idea: "fo-shape-rendering-auto + direct + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "shape-auto device-grid-floor chromium-leaf alt2",
    idea: "fo-shape-rendering-auto + device-grid-floor + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "shape-auto load-event-interval bare + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + load-event-interval + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 22,
    slug: "shape-auto decode-microtask-twice overflow + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + decode-microtask-twice + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 23,
    slug: "shape-auto raf-before-draw leaf + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + raf-before-draw + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 24,
    slug: "shape-auto double-decode kerning + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 25,
    slug: "shape-auto triple-decode shape + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 26,
    slug: "shape-auto fonts-ready-interval img-auto + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + fonts-ready-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 27,
    slug: "shape-auto wait-fonts-500ms contain + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + wait-fonts-500ms + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 28,
    slug: "shape-auto blob-url overflow-min + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + blob-url + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 29,
    slug: "shape-auto direct block-svg + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + direct + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 30,
    slug: "shape-auto device-grid-floor chromium-leaf + fo-0 + explicit-xmlns",
    idea: "fo-shape-rendering-auto + device-grid-floor + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 31,
    slug: "shape-auto load-event-interval bare + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + load-event-interval + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 32,
    slug: "shape-auto decode-microtask-twice overflow + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + decode-microtask-twice + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-microtask-twice",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 33,
    slug: "shape-auto raf-before-draw leaf + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + raf-before-draw + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "raf-before-draw",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 34,
    slug: "shape-auto double-decode kerning + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 35,
    slug: "shape-auto triple-decode shape + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + triple-decode + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 36,
    slug: "shape-auto fonts-ready-interval img-auto + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + fonts-ready-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 37,
    slug: "shape-auto wait-fonts-500ms contain + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + wait-fonts-500ms + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 38,
    slug: "shape-auto blob-url overflow-min + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + blob-url + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 39,
    slug: "shape-auto direct block-svg + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + direct + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 40,
    slug: "shape-auto device-grid-floor chromium-leaf + fo-0 + explicit-xmlns alt2",
    idea: "fo-shape-rendering-auto + device-grid-floor + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w32: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w32: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w32-${num}`,
    label: `Loop AI b13 w32 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w32; RASTER PRIMARY fo-shape-rendering-auto; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w32: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
