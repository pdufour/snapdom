/**
 * Loop AI batch-13 FO recipe shard (worker 36) — RASTER PRIMARY: monkeypatch drawImage/fonts.
 * draw-image-pixelated / createImageBitmap-high / measureText-prime / fonts-ready-delay
 * 40 recipes: loop-ai-b13-w36-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "mp-drawImage-wrap canvas-pixelated chromium-leaf",
    idea: "monkeypatch drawImage-wrap + canvas-pixelated + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 2,
    slug: "mp-snapdom-post-fo-baseline will-read-frequently bare",
    idea: "monkeypatch snapdom-post-fo-baseline + will-read-frequently + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "snapdom-post-fo-baseline",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 3,
    slug: "mp-h2-full-plus-container-capture decode-interval overflow",
    idea: "monkeypatch h2-full-plus-container-capture + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 4,
    slug: "mp-capture-recipe-css decode-interval-raf leaf",
    idea: "monkeypatch capture-recipe-css + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "capture-recipe-css",
    },
  },
  {
    n: 5,
    slug: "mp-draw-image-pixelated double-decode kerning",
    idea: "monkeypatch draw-image-pixelated + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 6,
    slug: "mp-createImageBitmap-high fonts-ready shape",
    idea: "monkeypatch createImageBitmap-high + fonts-ready + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 7,
    slug: "mp-measureText-prime load-event-interval img-auto",
    idea: "monkeypatch measureText-prime + load-event-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 8,
    slug: "mp-fonts-ready-delay pre-decode-dom contain",
    idea: "monkeypatch fonts-ready-delay + pre-decode-dom + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      monkeypatch: "fonts-ready-delay",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 9,
    slug: "mp-drawImage-wrap blob-url-decode-interval overflow-min",
    idea: "monkeypatch drawImage-wrap + blob-url-decode-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 10,
    slug: "mp-snapdom-post-fo-baseline offscreen-canvas block-svg",
    idea: "monkeypatch snapdom-post-fo-baseline + offscreen-canvas + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 11,
    slug: "mp-h2-full-plus-container-capture canvas-pixelated chromium-leaf",
    idea: "monkeypatch h2-full-plus-container-capture + canvas-pixelated + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 12,
    slug: "mp-capture-recipe-css will-read-frequently bare",
    idea: "monkeypatch capture-recipe-css + will-read-frequently + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "capture-recipe-css",
    },
  },
  {
    n: 13,
    slug: "mp-draw-image-pixelated decode-interval overflow",
    idea: "monkeypatch draw-image-pixelated + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 14,
    slug: "mp-createImageBitmap-high decode-interval-raf leaf",
    idea: "monkeypatch createImageBitmap-high + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "createImageBitmap-high",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 15,
    slug: "mp-measureText-prime double-decode kerning",
    idea: "monkeypatch measureText-prime + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 16,
    slug: "mp-fonts-ready-delay fonts-ready shape",
    idea: "monkeypatch fonts-ready-delay + fonts-ready + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 17,
    slug: "mp-drawImage-wrap load-event-interval img-auto",
    idea: "monkeypatch drawImage-wrap + load-event-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 18,
    slug: "mp-snapdom-post-fo-baseline pre-decode-dom contain",
    idea: "monkeypatch snapdom-post-fo-baseline + pre-decode-dom + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 19,
    slug: "mp-h2-full-plus-container-capture blob-url-decode-interval overflow-min",
    idea: "monkeypatch h2-full-plus-container-capture + blob-url-decode-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 20,
    slug: "mp-capture-recipe-css offscreen-canvas block-svg",
    idea: "monkeypatch capture-recipe-css + offscreen-canvas + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "capture-recipe-css",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 21,
    slug: "mp-draw-image-pixelated canvas-pixelated chromium-leaf",
    idea: "monkeypatch draw-image-pixelated + canvas-pixelated + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 22,
    slug: "mp-createImageBitmap-high will-read-frequently bare",
    idea: "monkeypatch createImageBitmap-high + will-read-frequently + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 23,
    slug: "mp-measureText-prime decode-interval overflow",
    idea: "monkeypatch measureText-prime + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 24,
    slug: "mp-fonts-ready-delay decode-interval-raf leaf",
    idea: "monkeypatch fonts-ready-delay + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 25,
    slug: "mp-drawImage-wrap double-decode kerning",
    idea: "monkeypatch drawImage-wrap + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 26,
    slug: "mp-snapdom-post-fo-baseline fonts-ready shape",
    idea: "monkeypatch snapdom-post-fo-baseline + fonts-ready + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      monkeypatch: "snapdom-post-fo-baseline",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "mp-h2-full-plus-container-capture load-event-interval img-auto",
    idea: "monkeypatch h2-full-plus-container-capture + load-event-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 28,
    slug: "mp-capture-recipe-css pre-decode-dom contain",
    idea: "monkeypatch capture-recipe-css + pre-decode-dom + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      monkeypatch: "capture-recipe-css",
    },
  },
  {
    n: 29,
    slug: "mp-draw-image-pixelated blob-url-decode-interval overflow-min",
    idea: "monkeypatch draw-image-pixelated + blob-url-decode-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 30,
    slug: "mp-createImageBitmap-high offscreen-canvas block-svg",
    idea: "monkeypatch createImageBitmap-high + offscreen-canvas + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 31,
    slug: "mp-measureText-prime canvas-pixelated chromium-leaf",
    idea: "monkeypatch measureText-prime + canvas-pixelated + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 32,
    slug: "mp-fonts-ready-delay will-read-frequently bare",
    idea: "monkeypatch fonts-ready-delay + will-read-frequently + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "fonts-ready-delay",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "mp-drawImage-wrap decode-interval overflow",
    idea: "monkeypatch drawImage-wrap + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 34,
    slug: "mp-snapdom-post-fo-baseline decode-interval-raf leaf",
    idea: "monkeypatch snapdom-post-fo-baseline + decode-interval-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 35,
    slug: "mp-h2-full-plus-container-capture double-decode kerning",
    idea: "monkeypatch h2-full-plus-container-capture + double-decode + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-decode",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 36,
    slug: "mp-capture-recipe-css fonts-ready shape",
    idea: "monkeypatch capture-recipe-css + fonts-ready + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready",
      monkeypatch: "capture-recipe-css",
    },
  },
  {
    n: 37,
    slug: "mp-draw-image-pixelated load-event-interval img-auto",
    idea: "monkeypatch draw-image-pixelated + load-event-interval + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "load-event-interval",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 38,
    slug: "mp-createImageBitmap-high pre-decode-dom contain",
    idea: "monkeypatch createImageBitmap-high + pre-decode-dom + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "pre-decode-dom",
      monkeypatch: "createImageBitmap-high",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "mp-measureText-prime blob-url-decode-interval overflow-min",
    idea: "monkeypatch measureText-prime + blob-url-decode-interval + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-decode-interval",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 40,
    slug: "mp-fonts-ready-delay offscreen-canvas block-svg",
    idea: "monkeypatch fonts-ready-delay + offscreen-canvas + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "fonts-ready-delay",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w36: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w36: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w36-${num}`,
    label: `Loop AI b13 w36 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w36; RASTER PRIMARY monkeypatch drawImage/fonts; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w36: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
