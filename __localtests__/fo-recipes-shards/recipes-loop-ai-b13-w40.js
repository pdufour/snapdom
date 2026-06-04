/**
 * Loop AI batch-13 FO recipe shard (worker 40) — RASTER PRIMARY: capstone exotic raster mix.
 * one-of-each exotic raster path not primary-themed elsewhere in b13
 * 40 recipes: loop-ai-b13-w40-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "product-toCanvas round-dims base64",
    idea: "product-toCanvas + round-dims + base64-roundtrip markup — distinct from b12 w11 grid",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "product-toCanvas",
      svgRootRound: "round-dims",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    n: 2,
    slug: "product-toCanvas xmlns-strip int-floor + filter-noop-defs",
    idea: "product-toCanvas + explicit-xmlns-strip-transforms + int-floor — distinct markup path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "product-toCanvas",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 3,
    slug: "html2canvas-live-draw bare",
    idea: "html2canvas-live-draw — alternate live HTML canvas exporter",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "html2canvas-live-draw",
    },
  },
  {
    n: 4,
    slug: "no-fo-capture bare",
    idea: "no-fo-capture raster — vector-only baseline diagnostic",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "no-fo-capture",
    },
  },
  {
    n: 5,
    slug: "blob-url bare",
    idea: "plain blob-url raster without decode-interval wait",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url",
    },
  },
  {
    n: 6,
    slug: "integer-snap rects decode-interval",
    idea: "integer-snap-all-rects radical + decode-interval raster",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    n: 7,
    slug: "remove-fe-filters decode-interval",
    idea: "remove-fe-filters radical + decode-interval — strip filters pre-raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "remove-fe-filters",
    },
  },
  {
    n: 8,
    slug: "force-ltr bidi fonts-ready",
    idea: "force-ltr-unicode-bidi radical + fonts-ready raster",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready",
      radicalPatch: "force-ltr-unicode-bidi",
    },
  },
  {
    n: 9,
    slug: "chrome-legacy-webkit double-raf",
    idea: "chrome-legacy-webkit-bundle radical + double-raf compositor flush",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      radicalPatch: "chrome-legacy-webkit-bundle",
    },
  },
  {
    n: 10,
    slug: "empty-svg-switch decode-interval",
    idea: "empty-svg-switch-default radical + decode-interval raster wait",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "empty-svg-switch-default",
    },
  },
  {
    n: 11,
    slug: "h2-percent-int-vb triple-decode",
    idea: "h2-fo-percent-int-viewbox radical + triple-decode raster loop",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "triple-decode",
      radicalPatch: "h2-fo-percent-int-viewbox",
    },
  },
  {
    n: 12,
    slug: "h2-svg-footer decode-interval-raf",
    idea: "h2-svg-footer-comment radical + decode-interval-raf",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval-raf",
      radicalPatch: "h2-svg-footer-comment",
    },
  },
  {
    n: 13,
    slug: "h2-container-lang fonts-ready-interval",
    idea: "h2-container-lang radical + fonts-ready-interval",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      radicalPatch: "h2-container-lang",
    },
  },
  {
    n: 14,
    slug: "clone-node-capture direct",
    idea: "clone-node-capture radical + direct raster — detached clone decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      radicalPatch: "clone-node-capture",
    },
  },
  {
    n: 15,
    slug: "measure-nudge svg-root load-event",
    idea: "measure-nudge-svg-root radical + load-event raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "load-event",
      radicalPatch: "measure-nudge-svg-root",
    },
  },
  {
    n: 16,
    slug: "fe-drop-shadow-zero decode-interval",
    idea: "fe-drop-shadow-zero radical + decode-interval — zero shadow filter",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "fe-drop-shadow-zero",
    },
  },
  {
    n: 17,
    slug: "remove-filters-masks offscreen",
    idea: "remove-filters-and-masks radical + offscreen-canvas blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "offscreen-canvas",
      radicalPatch: "remove-filters-and-masks",
    },
  },
  {
    n: 18,
    slug: "fo-height-1px decode-microtask",
    idea: "fo-height-1px-overflow-visible radical + decode-microtask-twice",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "decode-microtask-twice",
      radicalPatch: "fo-height-1px-overflow-visible",
    },
  },
  {
    n: 19,
    slug: "fo-explicit-xhtml decode-via-blob",
    idea: "fo-explicit-xhtml-xmlns radical + decode-via-blob handoff",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-via-blob",
      radicalPatch: "fo-explicit-xhtml-xmlns",
    },
  },
  {
    n: 20,
    slug: "fo-wrap-switch triple-raf",
    idea: "fo-wrap-in-switch radical + triple-raf-flush compositor",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      radicalPatch: "fo-wrap-in-switch",
    },
  },
  {
    n: 21,
    slug: "svg-purge-ws bitmaprenderer",
    idea: "svg-purge-whitespace radical + bitmaprenderer-transfer",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      radicalPatch: "svg-purge-whitespace",
    },
  },
  {
    n: 22,
    slug: "strip-svg-styles webp-roundtrip",
    idea: "strip-svg-styles radical + webp-roundtrip encode path",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      radicalPatch: "strip-svg-styles",
    },
  },
  {
    n: 23,
    slug: "fo-innerhtml-min two-stage",
    idea: "fo-innerhtml-minimal radical + two-stage PNG staging",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "two-stage",
      radicalPatch: "fo-innerhtml-minimal",
    },
  },
  {
    n: 24,
    slug: "split-fo-h createImageBitmap",
    idea: "split-fo-horizontal radical + create-image-bitmap handoff",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "create-image-bitmap",
      radicalPatch: "split-fo-horizontal",
    },
  },
  {
    n: 25,
    slug: "split-fo-child img-srcset",
    idea: "split-fo-per-child radical + img-srcset-1x raster",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      radicalPatch: "split-fo-per-child",
    },
  },
  {
    n: 26,
    slug: "clone-deep-strip phantom-font",
    idea: "clone-deep-styles-strip radical + phantom-font-prime",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      radicalPatch: "clone-deep-styles-strip",
    },
  },
  {
    n: 27,
    slug: "fo-nbsp-span composite-copy",
    idea: "fo-nbsp-trailing-span radical + composite-copy blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      radicalPatch: "fo-nbsp-trailing-span",
    },
  },
  {
    n: 28,
    slug: "fo-per-letter flip-y",
    idea: "fo-per-letter-spans radical + flip-y coordinate probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      radicalPatch: "fo-per-letter-spans",
    },
  },
  {
    n: 29,
    slug: "h2-internal-star supersample",
    idea: "h2-fo-internal-star-normalize radical + supersample-downscale",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalPatch: "h2-fo-internal-star-normalize",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 30,
    slug: "capture-without-fo element-capture",
    idea: "capture-without-fo radical + element-capture-bitmap API",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "element-capture-bitmap",
      radicalPatch: "capture-without-fo",
    },
  },
  {
    n: 31,
    slug: "fo-to-image-href live decode-interval",
    idea: "fo-to-image-href-live radical + decode-interval — live href raster",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      radicalPatch: "fo-to-image-href-live",
    },
  },
  {
    n: 32,
    slug: "fo-to-image-placeholder direct",
    idea: "fo-to-image-placeholder radical + direct raster — placeholder img swap",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "direct",
      radicalPatch: "fo-to-image-placeholder",
    },
  },
  {
    n: 33,
    slug: "device-grid round-dims shape-auto",
    idea: "device-grid-floor + round-dims + fo-shape-rendering-auto — distinct from b12 w10 int-floor bare",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "device-grid-floor",
      svgRootRound: "round-dims",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 34,
    slug: "device-grid round-dims leaf",
    idea: "device-grid-floor + round-dims + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "device-grid-floor",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 35,
    slug: "mp integer-snap device-grid",
    idea: "integer-snap-all-rects monkeypatch + device-grid-floor raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "device-grid-floor",
      monkeypatch: "integer-snap-all-rects",
    },
  },
  {
    n: 36,
    slug: "mp decode-proto blob-fetch-revoke",
    idea: "decode-interval-prototype monkeypatch + blob-url-fetch-revoke raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-fetch-revoke",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 37,
    slug: "mp snapdom-post canvas-live",
    idea: "snapdom-post-fo-baseline monkeypatch + canvas-from-live raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-from-live",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 38,
    slug: "mp h2-full-plus putImageData",
    idea: "h2-full-plus-container-capture monkeypatch + putImageData live snapshot",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      monkeypatch: "h2-full-plus-container-capture",
    },
  },
  {
    n: 39,
    slug: "aspect none h2-frac baseline",
    idea: "preserveAspectRatio none + h2-frac-draw + FO_BASELINE both inject",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 40,
    slug: "markup base64 canvas-filter both",
    idea: "base64-roundtrip svgMarkupPatch + canvas-filter-invert raster",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-filter-invert",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w40: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w40: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w40-${num}`,
    label: `Loop AI b13 w40 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w40; RASTER PRIMARY capstone exotic raster mix; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w40: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
