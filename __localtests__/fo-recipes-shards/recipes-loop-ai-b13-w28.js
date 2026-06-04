/**
 * Loop AI batch-13 FO recipe shard (worker 28) — RASTER PRIMARY: fe-turbulence-composite filter.
 * feTurbulence composite noop on FO + raster decode sweeps
 * 40 recipes: loop-ai-b13-w28-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fe-turb iframe-serialized-svg-decode block-svg",
    idea: "fe-turbulence-composite + iframe-serialized-svg-decode + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "fe-turb canvas-putImageData-live-snapshot chromium-leaf",
    idea: "fe-turbulence-composite + canvas-putImageData-live-snapshot + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 3,
    slug: "fe-turb blob-url-early-revoke bare",
    idea: "fe-turbulence-composite + blob-url-early-revoke + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "fe-turb direct overflow",
    idea: "fe-turbulence-composite + direct + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "direct",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "fe-turb decode-interval-raf leaf",
    idea: "fe-turbulence-composite + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "fe-turb fonts-ready-interval kerning",
    idea: "fe-turbulence-composite + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 7,
    slug: "fe-turb double-raf shape",
    idea: "fe-turbulence-composite + double-raf + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "fe-turb wait-fonts-500ms img-auto",
    idea: "fe-turbulence-composite + wait-fonts-500ms + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "fe-turb node-layer-datauri-blob contain",
    idea: "fe-turbulence-composite + node-layer-datauri-blob + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "fe-turb html-to-canvas-direct overflow-min",
    idea: "fe-turbulence-composite + html-to-canvas-direct + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 11,
    slug: "fe-turb iframe-serialized-svg-decode block-svg alt2",
    idea: "fe-turbulence-composite + iframe-serialized-svg-decode + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "fe-turb canvas-putImageData-live-snapshot chromium-leaf alt2",
    idea: "fe-turbulence-composite + canvas-putImageData-live-snapshot + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "fe-turb blob-url-early-revoke bare alt2",
    idea: "fe-turbulence-composite + blob-url-early-revoke + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "fe-turb direct overflow alt2",
    idea: "fe-turbulence-composite + direct + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "direct",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 15,
    slug: "fe-turb decode-interval-raf leaf alt2",
    idea: "fe-turbulence-composite + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "fe-turb fonts-ready-interval kerning alt2",
    idea: "fe-turbulence-composite + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "fe-turb double-raf shape alt2",
    idea: "fe-turbulence-composite + double-raf + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "fe-turb wait-fonts-500ms img-auto alt2",
    idea: "fe-turbulence-composite + wait-fonts-500ms + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 19,
    slug: "fe-turb node-layer-datauri-blob contain alt2",
    idea: "fe-turbulence-composite + node-layer-datauri-blob + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "fe-turb html-to-canvas-direct overflow-min alt2",
    idea: "fe-turbulence-composite + html-to-canvas-direct + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "fe-turbulence-composite",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "fe-turb iframe-serialized-svg-decode block-svg + fo-0",
    idea: "fe-turbulence-composite + iframe-serialized-svg-decode + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 22,
    slug: "fe-turb canvas-putImageData-live-snapshot chromium-leaf + fo-0",
    idea: "fe-turbulence-composite + canvas-putImageData-live-snapshot + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 23,
    slug: "fe-turb blob-url-early-revoke bare + fo-0",
    idea: "fe-turbulence-composite + blob-url-early-revoke + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "fe-turb direct overflow + fo-0",
    idea: "fe-turbulence-composite + direct + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 25,
    slug: "fe-turb decode-interval-raf leaf + fo-0",
    idea: "fe-turbulence-composite + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 26,
    slug: "fe-turb fonts-ready-interval kerning + fo-0",
    idea: "fe-turbulence-composite + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 27,
    slug: "fe-turb double-raf shape + fo-0 + explicit-xmlns",
    idea: "fe-turbulence-composite + double-raf + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 28,
    slug: "fe-turb wait-fonts-500ms img-auto + fo-0",
    idea: "fe-turbulence-composite + wait-fonts-500ms + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 29,
    slug: "fe-turb node-layer-datauri-blob contain + fo-0",
    idea: "fe-turbulence-composite + node-layer-datauri-blob + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 30,
    slug: "fe-turb html-to-canvas-direct overflow-min + fo-0",
    idea: "fe-turbulence-composite + html-to-canvas-direct + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 31,
    slug: "fe-turb iframe-serialized-svg-decode block-svg + fo-0 alt2",
    idea: "fe-turbulence-composite + iframe-serialized-svg-decode + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "iframe-serialized-svg-decode",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 32,
    slug: "fe-turb canvas-putImageData-live-snapshot chromium-leaf + fo-0 alt2",
    idea: "fe-turbulence-composite + canvas-putImageData-live-snapshot + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 33,
    slug: "fe-turb blob-url-early-revoke bare + fo-0 alt2",
    idea: "fe-turbulence-composite + blob-url-early-revoke + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "fe-turb direct overflow + fo-0 alt2",
    idea: "fe-turbulence-composite + direct + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "direct",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 35,
    slug: "fe-turb decode-interval-raf leaf + fo-0 alt2",
    idea: "fe-turbulence-composite + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 36,
    slug: "fe-turb fonts-ready-interval kerning + fo-0 alt2",
    idea: "fe-turbulence-composite + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 37,
    slug: "fe-turb double-raf shape + fo-0 + explicit-xmlns alt2",
    idea: "fe-turbulence-composite + double-raf + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "round-dims",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 38,
    slug: "fe-turb wait-fonts-500ms img-auto + fo-0 alt2",
    idea: "fe-turbulence-composite + wait-fonts-500ms + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "wait-fonts-500ms",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 39,
    slug: "fe-turb node-layer-datauri-blob contain + fo-0 alt2",
    idea: "fe-turbulence-composite + node-layer-datauri-blob + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "node-layer-datauri-blob",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 40,
    slug: "fe-turb html-to-canvas-direct overflow-min + fo-0 alt2",
    idea: "fe-turbulence-composite + html-to-canvas-direct + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "html-to-canvas-direct",
      foSvgPatch: "fo-shape-rendering-auto",
      svgRootRound: "int-floor",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w28: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w28: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w28-${num}`,
    label: `Loop AI b13 w28 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w28; RASTER PRIMARY fe-turbulence-composite filter; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w28: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
