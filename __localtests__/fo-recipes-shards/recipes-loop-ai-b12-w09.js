/**
 * Loop AI batch-12 FO recipe shard (worker 09) — RASTER PRIMARY: decode-interval variants.
 * Targets svg≈canvas drift (serialization OK, FO decode/compositor timing gap).
 * 40 recipes: loop-ai-b12-w09-001..040 — minimal or no capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const MIN_LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'
const MIN_OVERFLOW = 'foreignObject{overflow:visible!important}'
const MIN_KERNING =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'decode-interval bare raster',
    idea: 'decode-interval 100ms post-decode wait — no capture CSS (svg≈canvas control)',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'decode-interval' },
  },
  {
    n: 2,
    slug: 'decode-interval-raf bare',
    idea: 'decode-interval-raf — 100ms wait + 2× rAF before drawImage',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'decode-interval-raf' },
  },
  {
    n: 3,
    slug: 'fonts-ready-interval bare',
    idea: 'fonts.ready then 100ms interval — font settle before FO ink draw',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'fonts-ready-interval' },
  },
  {
    n: 4,
    slug: 'fonts-ready bare',
    idea: 'document.fonts.ready before decode — no interval wait',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'fonts-ready' },
  },
  {
    n: 5,
    slug: 'double-decode bare',
    idea: 'double-decode — await Image.decode twice before interval/draw',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'double-decode' },
  },
  {
    n: 6,
    slug: 'triple-decode bare',
    idea: 'triple-decode — three decode() passes before drawImage',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'triple-decode' },
  },
  {
    n: 7,
    slug: 'load-event-interval bare',
    idea: 'img onload + 100ms decode-interval — load event path vs decode()',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'load-event-interval' },
  },
  {
    n: 8,
    slug: 'load-event bare',
    idea: 'draw after img.onload only — no decode-interval wait',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'load-event' },
  },
  {
    n: 9,
    slug: 'pre-decode-dom bare',
    idea: 'hidden DOM img decode before assign — pre-decode-dom raster path',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'pre-decode-dom' },
  },
  {
    n: 10,
    slug: 'decode-microtask-twice bare',
    idea: 'decode + microtask + second decode before draw — microtask flush probe',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'decode-microtask-twice' },
  },
  {
    n: 11,
    slug: 'int-viewbox decode-interval',
    idea: 'integer-viewbox snap + decode-interval — sub-pixel SVG root vs FO backing store',
    css: '',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 12,
    slug: 'int-floor decode-interval',
    idea: 'int-floor viewBox dimensions + decode-interval raster wait',
    css: '',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 13,
    slug: 'round-dims decode-interval',
    idea: 'round-dims on capture svg + decode-interval before drawImage',
    css: '',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 14,
    slug: 'int-viewbox decode-interval-raf',
    idea: 'integer-viewbox + decode-interval-raf — integer snap + rAF compositor flush',
    css: '',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval-raf',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 15,
    slug: 'blob-url-decode-interval',
    idea: 'objectURL raster + decode-interval — blob handoff timing vs data URL',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'blob-url-decode-interval' },
  },
  {
    n: 16,
    slug: 'blob-url-fetch-revoke',
    idea: 'fetch blob + revoke + decode-interval — early revoke stress path',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'blob-url-fetch-revoke' },
  },
  {
    n: 17,
    slug: 'decode-via-blob',
    idea: 'fetch SVG → blob URL decode — bypass data-URL encode round-trip',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'decode-via-blob' },
  },
  {
    n: 18,
    slug: 'double-raf bare',
    idea: 'offscreen img + 2× rAF before draw — compositor flush without interval',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'double-raf' },
  },
  {
    n: 19,
    slug: 'raf-before-draw bare',
    idea: 'single rAF before drawImage — one-frame compositor settle',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'raf-before-draw' },
  },
  {
    n: 20,
    slug: 'wait-fonts-500ms bare',
    idea: 'fonts.ready + 500ms wall clock before decode — slow font settle probe',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'wait-fonts-500ms' },
  },
  {
    n: 21,
    slug: 'overflow visible decode-interval',
    idea: 'FO overflow:visible only + decode-interval — minimal bleed without layout churn',
    css: MIN_OVERFLOW,
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 22,
    slug: 'leaf box-sizing decode-interval',
    idea: 'FO * border-box + min-width:0 + decode-interval — structural leaf only',
    css: MIN_LEAF,
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 23,
    slug: 'kerning normal decode-interval',
    idea: 'FO font-kerning:normal minimal + decode-interval — Chromium copy subset',
    css: MIN_KERNING,
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 24,
    slug: 'baseline both decode-interval',
    idea: 'FO_BASELINE inject both + decode-interval — product baseline + raster wait',
    css: '',
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 25,
    slug: 'image-rendering auto decode-interval',
    idea: 'FO * image-rendering:auto + decode-interval — explicit bitmap filter hint',
    css: 'foreignObject *{image-rendering:auto!important}',
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 26,
    slug: 'int-viewbox fonts-ready-interval',
    idea: 'integer-viewbox + fonts-ready-interval — font + viewBox snap combo',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'fonts-ready-interval',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 27,
    slug: 'int-floor blob decode-interval',
    idea: 'int-floor viewBox + blob-url-decode-interval — floor dims + blob decode path',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'blob-url-decode-interval',
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 28,
    slug: 'round-dims double-decode',
    idea: 'round-dims + double-decode — rounded SVG root + double decode pass',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'double-decode',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 29,
    slug: 'int-viewbox triple-decode',
    idea: 'integer-viewbox + triple-decode — integer snap + triple decode loop',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'triple-decode',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 30,
    slug: 'filter-noop decode-interval',
    idea: 'filter-noop-defs on FO + decode-interval — SVG filter defs flush, no capture CSS',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 31,
    slug: 'fe-matrix decode-interval',
    idea: 'fe-color-matrix identity on FO + decode-interval — filter graph noop + wait',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 32,
    slug: 'preserveAspectRatio decode-interval',
    idea: 'xMidYMid meet on svg root + decode-interval — aspect meet before raster',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      svgRootPatch: { preserveAspectRatio: 'xMidYMid meet' },
    },
  },
  {
    n: 33,
    slug: 'device-grid decode-interval',
    idea: 'device-grid-floor raster + decode-interval via bitmap path timing',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'device-grid-floor' },
  },
  {
    n: 34,
    slug: 'createImageBitmap decode-interval',
    idea: 'create-image-bitmap handoff — ImageBitmap vs HTMLImageElement draw',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'create-image-bitmap' },
  },
  {
    n: 35,
    slug: 'two-stage decode path',
    idea: 'two-stage PNG round-trip — intermediate canvas staging before final blit',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'two-stage' },
  },
  {
    n: 36,
    slug: 'offscreen decode-interval',
    idea: 'offscreen-canvas blit + decode-interval capture CSS on shape-rendering',
    css: 'foreignObject *{shape-rendering:geometricPrecision!important}',
    extra: { inject: 'both', rasterPatch: 'offscreen-canvas' },
  },
  {
    n: 37,
    slug: 'will-read-frequently decode-interval',
    idea: '2d willReadFrequently hint + decode-interval — readback-friendly canvas ctx',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'will-read-frequently' },
  },
  {
    n: 38,
    slug: 'canvas-pixelated decode-interval',
    idea: 'canvas-pixelated raster filter + minimal FO overflow — pixelated FO blit',
    css: MIN_OVERFLOW,
    extra: { inject: 'both', rasterPatch: 'canvas-pixelated' },
  },
  {
    n: 39,
    slug: 'direct control raster',
    idea: 'direct single-pass decode — control when svg≈canvas (no interval wait)',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'direct' },
  },
  {
    n: 40,
    slug: 'decode-interval monkeypatch',
    idea: 'decode-interval-prototype monkeypatch + decode-interval raster — prototype vs harness',
    css: '',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      monkeypatch: 'decode-interval-prototype',
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w09: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b12-w09: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b12-w09-${num}`,
    label: `Loop AI b12 w09 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b12 w09; RASTER PRIMARY decode-interval sweep; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w09: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
