/**
 * Loop AI batch-13 FO recipe shard (worker 34) — RASTER PRIMARY: monkeypatch decode-wrap family.
 * decode-wrap / decode-interval-wrap / image-decode-twice runtime patches
 * 40 recipes: loop-ai-b13-w34-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "mp-decode-interval-wrap load-event img-auto",
    idea: "monkeypatch decode-interval-wrap + load-event + image-rendering auto — runtime decode hook vs harness",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 2,
    slug: "mp-image-decode-twice direct contain",
    idea: "monkeypatch image-decode-twice + direct + contain paint min — runtime decode hook vs harness",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 3,
    slug: "mp-decode-wrap blob-url overflow-min",
    idea: "monkeypatch decode-wrap + blob-url + svg block overflow — runtime decode hook vs harness",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      monkeypatch: "decode-wrap",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "mp-decode-interval-wrap offscreen-canvas block-svg",
    idea: "monkeypatch decode-interval-wrap + offscreen-canvas + svg display block — runtime decode hook vs harness",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 5,
    slug: "mp-image-decode-twice will-read-frequently chromium-leaf",
    idea: "monkeypatch image-decode-twice + will-read-frequently + Chromium copy leaf — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 6,
    slug: "mp-decode-wrap canvas-pixelated bare",
    idea: "monkeypatch decode-wrap + canvas-pixelated + bare raster — runtime decode hook vs harness",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 7,
    slug: "mp-decode-interval-wrap decode-interval overflow",
    idea: "monkeypatch decode-interval-wrap + decode-interval + FO overflow visible — runtime decode hook vs harness",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 8,
    slug: "mp-image-decode-twice decode-interval-raf leaf",
    idea: "monkeypatch image-decode-twice + decode-interval-raf + FO leaf min-width — runtime decode hook vs harness",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "image-decode-twice",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "mp-decode-wrap double-decode kerning",
    idea: "monkeypatch decode-wrap + double-decode + FO kerning normal — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 10,
    slug: "mp-decode-interval-wrap fonts-ready shape",
    idea: "monkeypatch decode-interval-wrap + fonts-ready + shape-rendering geometric — runtime decode hook vs harness",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 11,
    slug: "mp-image-decode-twice load-event img-auto",
    idea: "monkeypatch image-decode-twice + load-event + image-rendering auto — runtime decode hook vs harness",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 12,
    slug: "mp-decode-wrap direct contain",
    idea: "monkeypatch decode-wrap + direct + contain paint min — runtime decode hook vs harness",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 13,
    slug: "mp-decode-interval-wrap blob-url overflow-min",
    idea: "monkeypatch decode-interval-wrap + blob-url + svg block overflow — runtime decode hook vs harness",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      monkeypatch: "decode-interval-wrap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "mp-image-decode-twice offscreen-canvas block-svg",
    idea: "monkeypatch image-decode-twice + offscreen-canvas + svg display block — runtime decode hook vs harness",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 15,
    slug: "mp-decode-wrap will-read-frequently chromium-leaf",
    idea: "monkeypatch decode-wrap + will-read-frequently + Chromium copy leaf — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 16,
    slug: "mp-decode-interval-wrap canvas-pixelated bare",
    idea: "monkeypatch decode-interval-wrap + canvas-pixelated + bare raster — runtime decode hook vs harness",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 17,
    slug: "mp-image-decode-twice decode-interval overflow",
    idea: "monkeypatch image-decode-twice + decode-interval + FO overflow visible — runtime decode hook vs harness",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 18,
    slug: "mp-decode-wrap decode-interval-raf leaf",
    idea: "monkeypatch decode-wrap + decode-interval-raf + FO leaf min-width — runtime decode hook vs harness",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "decode-wrap",
      svgRootRound: undefined,
    },
  },
  {
    n: 19,
    slug: "mp-decode-interval-wrap double-decode kerning",
    idea: "monkeypatch decode-interval-wrap + double-decode + FO kerning normal — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 20,
    slug: "mp-image-decode-twice fonts-ready shape",
    idea: "monkeypatch image-decode-twice + fonts-ready + shape-rendering geometric — runtime decode hook vs harness",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 21,
    slug: "mp-decode-wrap load-event img-auto",
    idea: "monkeypatch decode-wrap + load-event + image-rendering auto — runtime decode hook vs harness",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 22,
    slug: "mp-decode-interval-wrap direct contain",
    idea: "monkeypatch decode-interval-wrap + direct + contain paint min — runtime decode hook vs harness",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 23,
    slug: "mp-image-decode-twice blob-url overflow-min",
    idea: "monkeypatch image-decode-twice + blob-url + svg block overflow — runtime decode hook vs harness",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      monkeypatch: "image-decode-twice",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "mp-decode-wrap offscreen-canvas block-svg",
    idea: "monkeypatch decode-wrap + offscreen-canvas + svg display block — runtime decode hook vs harness",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 25,
    slug: "mp-decode-interval-wrap will-read-frequently chromium-leaf",
    idea: "monkeypatch decode-interval-wrap + will-read-frequently + Chromium copy leaf — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 26,
    slug: "mp-image-decode-twice canvas-pixelated bare",
    idea: "monkeypatch image-decode-twice + canvas-pixelated + bare raster — runtime decode hook vs harness",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 27,
    slug: "mp-decode-wrap decode-interval overflow",
    idea: "monkeypatch decode-wrap + decode-interval + FO overflow visible — runtime decode hook vs harness",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 28,
    slug: "mp-decode-interval-wrap decode-interval-raf leaf",
    idea: "monkeypatch decode-interval-wrap + decode-interval-raf + FO leaf min-width — runtime decode hook vs harness",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "decode-interval-wrap",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 29,
    slug: "mp-image-decode-twice double-decode kerning",
    idea: "monkeypatch image-decode-twice + double-decode + FO kerning normal — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 30,
    slug: "mp-decode-wrap fonts-ready shape",
    idea: "monkeypatch decode-wrap + fonts-ready + shape-rendering geometric — runtime decode hook vs harness",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 31,
    slug: "mp-decode-interval-wrap load-event img-auto + filter-noop-defs",
    idea: "monkeypatch decode-interval-wrap + load-event + image-rendering auto — runtime decode hook vs harness",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "load-event",
      monkeypatch: "decode-interval-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "mp-image-decode-twice direct contain + filter-noop-defs",
    idea: "monkeypatch image-decode-twice + direct + contain paint min — runtime decode hook vs harness",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      monkeypatch: "image-decode-twice",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "mp-decode-wrap blob-url overflow-min alt2",
    idea: "monkeypatch decode-wrap + blob-url + svg block overflow — runtime decode hook vs harness",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
      monkeypatch: "decode-wrap",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "mp-decode-interval-wrap offscreen-canvas block-svg + filter-noop-defs",
    idea: "monkeypatch decode-interval-wrap + offscreen-canvas + svg display block — runtime decode hook vs harness",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      monkeypatch: "decode-interval-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "mp-image-decode-twice will-read-frequently chromium-leaf + filter-noop-defs",
    idea: "monkeypatch image-decode-twice + will-read-frequently + Chromium copy leaf — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "will-read-frequently",
      monkeypatch: "image-decode-twice",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "mp-decode-wrap canvas-pixelated bare + filter-noop-defs",
    idea: "monkeypatch decode-wrap + canvas-pixelated + bare raster — runtime decode hook vs harness",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-pixelated",
      monkeypatch: "decode-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "mp-decode-interval-wrap decode-interval overflow + filter-noop-defs",
    idea: "monkeypatch decode-interval-wrap + decode-interval + FO overflow visible — runtime decode hook vs harness",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      monkeypatch: "decode-interval-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "mp-image-decode-twice decode-interval-raf leaf alt2",
    idea: "monkeypatch image-decode-twice + decode-interval-raf + FO leaf min-width — runtime decode hook vs harness",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      monkeypatch: "image-decode-twice",
      svgRootRound: undefined,
    },
  },
  {
    n: 39,
    slug: "mp-decode-wrap double-decode kerning + filter-noop-defs",
    idea: "monkeypatch decode-wrap + double-decode + FO kerning normal — runtime decode hook vs harness",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-decode",
      monkeypatch: "decode-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "mp-decode-interval-wrap fonts-ready shape + filter-noop-defs",
    idea: "monkeypatch decode-interval-wrap + fonts-ready + shape-rendering geometric — runtime decode hook vs harness",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      monkeypatch: "decode-interval-wrap",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w34: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w34: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w34-${num}`,
    label: `Loop AI b13 w34 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w34; RASTER PRIMARY monkeypatch decode-wrap family; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w34: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
