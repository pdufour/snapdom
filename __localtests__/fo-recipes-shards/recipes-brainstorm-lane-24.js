/**
 * Worker batch E brainstorm — lane 24: ImageBitmap / createImageBitmap decode paths
 * 40 FO-only recipes: brain-l24-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "create-image-bitmap bare",
    idea: "create-image-bitmap — ImageBitmap handoff vs HTMLImageElement drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 2,
    slug: "create-image-bitmap-pixelated bare",
    idea: "create-image-bitmap-pixelated — resizeQuality:pixelated on ImageBitmap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-pixelated"
    },
  },
  {
    n: 3,
    slug: "create-image-bitmap-premultiply bare",
    idea: "create-image-bitmap-premultiply — premultiplyAlpha on ImageBitmap decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-premultiply"
    },
  },
  {
    n: 4,
    slug: "bitmap-close bare",
    idea: "bitmap-close — explicit ImageBitmap.close after drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "bitmap-close"
    },
  },
  {
    n: 5,
    slug: "bitmaprenderer-transfer bare",
    idea: "bitmaprenderer-transfer — transferFromImageBitmap to final canvas",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "bitmaprenderer-transfer"
    },
  },
  {
    n: 6,
    slug: "create-image-bitmap decode-interval",
    idea: "create-image-bitmap + decode-interval wait before bitmap creation",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 7,
    slug: "bitmap-pixelated decode-interval",
    idea: "create-image-bitmap-pixelated + FO_BASELINE — pixelated bitmap + baseline CSS",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap-pixelated"
    },
  },
  {
    n: 8,
    slug: "bitmap-premultiply decode-interval",
    idea: "create-image-bitmap-premultiply + decode-interval at img decode stage",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap-premultiply"
    },
  },
  {
    n: 9,
    slug: "create-image-bitmap int-vb",
    idea: "create-image-bitmap + integer-viewbox — viewBox snap before bitmap decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 10,
    slug: "bitmap-pixelated int-vb",
    idea: "create-image-bitmap-pixelated + integer-viewbox",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-pixelated",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 11,
    slug: "bitmap-premultiply int-floor",
    idea: "create-image-bitmap-premultiply + int-floor root dims",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-premultiply",
      "svgRootRound": "int-floor"
    },
  },
  {
    n: 12,
    slug: "bitmap-close int-vb",
    idea: "bitmap-close + integer-viewbox — snap then bitmap lifecycle",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "bitmap-close",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 13,
    slug: "bitmaprenderer int-vb",
    idea: "bitmaprenderer-transfer + integer-viewbox — BitmapRenderer path + viewBox snap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "bitmaprenderer-transfer",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 14,
    slug: "create-image-bitmap int-floor",
    idea: "create-image-bitmap + int-floor — floored dims before bitmap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap",
      "svgRootRound": "int-floor"
    },
  },
  {
    n: 15,
    slug: "bitmap-pixelated round-dims",
    idea: "create-image-bitmap-pixelated + round-dims",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-pixelated",
      "svgRootRound": "round-dims"
    },
  },
  {
    n: 16,
    slug: "create-image-bitmap double-decode",
    idea: "create-image-bitmap after double-decode on img — double decode then bitmap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 17,
    slug: "bitmap-close triple-decode",
    idea: "bitmap-close path with triple-decode img loop before bitmap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "triple-decode"
    },
  },
  {
    n: 18,
    slug: "create-image-bitmap fonts-ready",
    idea: "create-image-bitmap + fonts-ready — font settle before bitmap handoff",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 19,
    slug: "bitmap-pixelated fonts-ready-interval",
    idea: "create-image-bitmap-pixelated + fonts-ready-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 20,
    slug: "bitmap-premultiply decode-interval-raf",
    idea: "create-image-bitmap-premultiply + decode-interval-raf",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-interval-raf"
    },
  },
  {
    n: 21,
    slug: "create-image-bitmap blob-decode",
    idea: "create-image-bitmap + blob-url-decode-interval — bitmap from blob-decoded SVG",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 22,
    slug: "bitmaprenderer decode-via-blob",
    idea: "bitmaprenderer-transfer + decode-via-blob — blob decode to bitmap renderer",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-via-blob"
    },
  },
  {
    n: 23,
    slug: "create-image-bitmap explicit-xmlns",
    idea: "create-image-bitmap + explicit-xmlns — xmlns fix before bitmap decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap",
      "svgMarkupPatch": "explicit-xmlns"
    },
  },
  {
    n: 24,
    slug: "bitmap-pixelated strip-xml",
    idea: "create-image-bitmap-pixelated + strip-xml-declaration",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap-pixelated",
      "svgMarkupPatch": "strip-xml-declaration"
    },
  },
  {
    n: 25,
    slug: "create-image-bitmap leaf both",
    idea: "create-image-bitmap + TEXT_LEAF at capture — bitmap + structural leaf CSS",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 26,
    slug: "bitmap-premultiply kerning both",
    idea: "create-image-bitmap-premultiply + Chromium kerning copy",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "create-image-bitmap-premultiply"
    },
  },
  {
    n: 27,
    slug: "bitmap-close pin-lh int-vb",
    idea: "bitmap-close + h2-pin-line-height-from-live + integer-viewbox",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "bitmap-close",
      "svgRootRound": "integer-viewbox",
      "radicalPatch": "h2-pin-line-height-from-live"
    },
  },
  {
    n: 28,
    slug: "bitmaprenderer pin-width",
    idea: "bitmaprenderer-transfer + h2-pin-width-from-live",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "bitmaprenderer-transfer",
      "radicalPatch": "h2-pin-width-from-live"
    },
  },
  {
    n: 29,
    slug: "create-image-bitmap device-grid",
    idea: "device-grid-floor then create-image-bitmap proxy — grid snap + bitmap path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 30,
    slug: "bitmap-pixelated two-stage",
    idea: "two-stage raster staging — compare vs direct ImageBitmap blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "two-stage"
    },
  },
  {
    n: 31,
    slug: "create-image-bitmap decode-microtask",
    idea: "decode-microtask-twice before bitmap creation path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-microtask-twice"
    },
  },
  {
    n: 32,
    slug: "bitmap-close pre-decode-dom",
    idea: "pre-decode-dom hidden img + bitmap-close lifecycle",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "pre-decode-dom"
    },
  },
  {
    n: 33,
    slug: "bitmaprenderer load-event-interval",
    idea: "load-event-interval + bitmaprenderer-transfer — load event timing path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "load-event-interval"
    },
  },
  {
    n: 34,
    slug: "create-image-bitmap mp decode-prototype",
    idea: "create-image-bitmap + decode-interval-prototype monkeypatch",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap",
      "monkeypatch": "decode-interval-prototype"
    },
  },
  {
    n: 35,
    slug: "bitmap-pixelated mp draw-pixelated",
    idea: "create-image-bitmap-pixelated + draw-image-pixelated monkeypatch stack",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap-pixelated",
      "monkeypatch": "draw-image-pixelated"
    },
  },
  {
    n: 36,
    slug: "bitmap-premultiply int-vb blob",
    idea: "create-image-bitmap-premultiply + int-vb + blob-url-decode-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "blob-url-decode-interval",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 37,
    slug: "bitmap-close explicit-xmlns int-vb",
    idea: "bitmap-close + explicit-xmlns + integer-viewbox — triple hygiene",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "bitmap-close",
      "svgMarkupPatch": "explicit-xmlns",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 38,
    slug: "bitmaprenderer canvas-pixelated",
    idea: "bitmaprenderer-transfer with canvas-pixelated smoothing context",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "canvas-pixelated"
    },
  },
  {
    n: 39,
    slug: "create-image-bitmap direct control",
    idea: "direct decode control — img drawImage baseline for bitmap lane comparison",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "direct"
    },
  },
  {
    n: 40,
    slug: "create-image-bitmap int-vb decode-interval baseline",
    idea: "create-image-bitmap + integer-viewbox + FO_BASELINE — lane leader combo",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "create-image-bitmap",
      "svgRootRound": "integer-viewbox"
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error('recipes-brainstorm-lane-24: expected 40 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const useBaseline = inject !== 'raster' && css === FO_BASELINE_CSS
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `brain-l24-${num}`,
    label: `Brain L24 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'decode',
    active: true,
    notes:
      'Worker batch E lane 24; ImageBitmap / createImageBitmap decode paths — FO raster only, no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
