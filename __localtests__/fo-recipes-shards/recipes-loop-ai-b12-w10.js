/**
 * Loop AI batch-12 FO recipe shard (worker 10) — RASTER PRIMARY: integer-viewbox + device-grid-floor combos.
 * Targets sub-pixel SVG root vs HiDPI device-pixel grid snap before FO raster (no capture CSS decoration).
 * 40 recipes: loop-ai-b12-w10-001..040 — css empty or FO_BASELINE only on inject both; no visible FO rules.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'int-vb device-grid bare raster',
    idea: 'integer-viewbox snap + device-grid-floor — no capture CSS (duo control)',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 2,
    slug: 'int-vb device-grid baseline both',
    idea: 'integer-viewbox + device-grid-floor + FO_BASELINE inject both — structural baseline only',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 3,
    slug: 'int-vb device-grid filter-noop',
    idea: 'integer-viewbox + device-grid + filter-noop-defs — SVG filter graph flush, no FO CSS',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 4,
    slug: 'int-vb device-grid fe-matrix',
    idea: 'integer-viewbox + device-grid + fe-color-matrix identity on FO',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 5,
    slug: 'int-vb device-grid fe-merge',
    idea: 'integer-viewbox + device-grid + fe-merge-empty defs noop',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 6,
    slug: 'int-vb device-grid fe-transfer',
    idea: 'integer-viewbox + device-grid + fe-component-transfer identity',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 7,
    slug: 'int-vb device-grid filter-empty',
    idea: 'integer-viewbox + device-grid + filter-empty-nop on FO subtree',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 8,
    slug: 'int-vb device-grid fe-morphology',
    idea: 'integer-viewbox + device-grid + fe-morphology identity filter',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 9,
    slug: 'int-vb device-grid aspect meet',
    idea: 'integer-viewbox + device-grid + preserveAspectRatio xMidYMid meet on svg root',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgRootPatch: { preserveAspectRatio: 'xMidYMid meet' },
    },
  },
  {
    n: 10,
    slug: 'int-vb device-grid aspect slice',
    idea: 'integer-viewbox + device-grid + preserveAspectRatio xMidYMid slice',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgRootPatch: { preserveAspectRatio: 'xMidYMid slice' },
    },
  },
  {
    n: 11,
    slug: 'int-vb device-grid strip-xml',
    idea: 'integer-viewbox + device-grid + strip-xml-declaration markup hygiene',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 12,
    slug: 'int-vb device-grid explicit-xmlns',
    idea: 'integer-viewbox + device-grid + explicit-xmlns before raster decode',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 13,
    slug: 'int-vb device-grid strip-transforms',
    idea: 'integer-viewbox + device-grid + strip-identity-transforms on serialized SVG',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'strip-identity-transforms',
    },
  },
  {
    n: 14,
    slug: 'int-vb device-grid xmlns-strip',
    idea: 'integer-viewbox + device-grid + explicit-xmlns-strip-transforms bundle',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 15,
    slug: 'int-vb device-grid int-snap rects',
    idea: 'integer-viewbox + device-grid + integer-snap-all-rects monkeypatch on FO rects',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      monkeypatch: 'integer-snap-all-rects',
    },
  },
  {
    n: 16,
    slug: 'int-vb device-grid decode-mp',
    idea: 'integer-viewbox + device-grid + decode-interval-prototype monkeypatch',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 17,
    slug: 'int-vb device-grid fe-displacement',
    idea: 'integer-viewbox + device-grid + fe-displacement-map identity filter',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 18,
    slug: 'int-vb device-grid overflow hidden root',
    idea: 'integer-viewbox + device-grid + svg overflow:hidden attr (non-visible clip)',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgRootPatch: { overflow: 'hidden' },
    },
  },
  {
    n: 19,
    slug: 'int-vb device-grid h2-normalize mp',
    idea: 'integer-viewbox + device-grid + h2-fo-normalize-full monkeypatch — capture normalize, no FO CSS',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      monkeypatch: 'h2-fo-normalize-full',
    },
  },
  {
    n: 20,
    slug: 'int-vb device-grid snapdom no-cache',
    idea: 'integer-viewbox + device-grid + snapdom cache:false — fresh capture per probe',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      harnessSnapdom: { cache: false },
    },
  },
  {
    n: 21,
    slug: 'int-vb device-grid fe-turbulence',
    idea: 'integer-viewbox + device-grid + fe-turbulence-composite noop filter graph',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 22,
    slug: 'int-vb device-grid shape-auto',
    idea: 'integer-viewbox + device-grid + fo-shape-rendering-auto SVG patch',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 23,
    slug: 'int-vb device-grid base64 roundtrip',
    idea: 'integer-viewbox + device-grid + base64-roundtrip markup patch before decode',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 24,
    slug: 'int-vb device-grid strip-all-xform',
    idea: 'integer-viewbox + device-grid + strip-all-transforms markup patch',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'device-grid-floor',
      svgMarkupPatch: 'strip-all-transforms',
    },
  },
  {
    n: 25,
    slug: 'int-floor device-grid bare',
    idea: 'int-floor root dims + device-grid-floor — compare vs integer-viewbox snap',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'int-floor',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 26,
    slug: 'round-dims device-grid bare',
    idea: 'round-dims root + device-grid-floor — compare rounding mode vs int viewBox',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'round-dims',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 27,
    slug: 'int-floor device-grid both',
    idea: 'int-floor + device-grid + FO_BASELINE both inject',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 28,
    slug: 'round-dims device-grid both',
    idea: 'round-dims + device-grid + FO_BASELINE both inject',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 29,
    slug: 'device-grid only raster',
    idea: 'device-grid-floor only — no svgRootRound (grid snap without viewBox integerize)',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'device-grid-floor' },
  },
  {
    n: 30,
    slug: 'device-grid only both',
    idea: 'device-grid-floor only + FO_BASELINE both — no integer viewBox snap',
    css: '',
    extra: { inject: 'both', rasterPatch: 'device-grid-floor' },
  },
  {
    n: 31,
    slug: 'int-floor device-grid filter-noop',
    idea: 'int-floor + device-grid + filter-noop-defs — root round variant with filter flush',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 32,
    slug: 'round-dims device-grid fe-matrix',
    idea: 'round-dims + device-grid + fe-color-matrix identity',
    css: '',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      rasterPatch: 'device-grid-floor',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 33,
    slug: 'int-vb decode-interval',
    idea: 'integer-viewbox + decode-interval — viewBox snap without device-grid floor',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'decode-interval',
    },
  },
  {
    n: 34,
    slug: 'int-vb decode-interval-raf',
    idea: 'integer-viewbox + decode-interval-raf — int snap + rAF compositor flush',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'decode-interval-raf',
    },
  },
  {
    n: 35,
    slug: 'int-vb double-raf',
    idea: 'integer-viewbox + double-raf — integer snap without device-pixel grid floor',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'double-raf',
    },
  },
  {
    n: 36,
    slug: 'int-vb fonts-ready-interval',
    idea: 'integer-viewbox + fonts-ready-interval — font settle before draw, no device-grid',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'fonts-ready-interval',
    },
  },
  {
    n: 37,
    slug: 'int-vb blob-decode-interval',
    idea: 'integer-viewbox + blob-url-decode-interval — blob handoff vs int viewBox only',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'blob-url-decode-interval',
    },
  },
  {
    n: 38,
    slug: 'int-vb two-stage',
    idea: 'integer-viewbox + two-stage PNG round-trip — int snap without grid floor',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'two-stage',
    },
  },
  {
    n: 39,
    slug: 'int-vb direct raster',
    idea: 'integer-viewbox + direct single-pass decode — int snap control without grid/timing',
    css: '',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      rasterPatch: 'direct',
    },
  },
  {
    n: 40,
    slug: 'int-vb only bare',
    idea: 'integer-viewbox only — no rasterPatch (viewBox integerize isolation)',
    css: '',
    extra: { inject: 'raster', svgRootRound: 'integer-viewbox' },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w10: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b12-w10: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b12-w10-${num}`,
    label: `Loop AI b12 w10 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b12 w10; RASTER integer-viewbox + device-grid-floor combos; no visible FO CSS — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w10: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
