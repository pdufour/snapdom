/**
 * Lab toCanvas composite — tc-lab-cmp-001..040 (lab-toCanvas + tc-only leader combos).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-cmp-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  { n: 1, slug: 'lab baseline', idea: 'lab-toCanvas fork baseline (no extra CSS)', extra: { inject: 'both' } },
  {
    n: 2,
    slug: 'FO baseline',
    idea: 'lab-toCanvas + FO_BASELINE_CSS',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },
  {
    n: 3,
    slug: 'integer-viewbox',
    idea: 'lab-toCanvas + integer-viewbox (tc-only-025 leader)',
    extra: { inject: 'both', css: FO_BASELINE_CSS, svgRootRound: 'integer-viewbox' },
  },
  {
    n: 4,
    slug: 'round-dims',
    idea: 'lab-toCanvas + round-dims root snap',
    extra: { inject: 'both', css: FO_BASELINE_CSS, svgRootRound: 'round-dims' },
  },
  {
    n: 5,
    slug: 'int-floor',
    idea: 'lab-toCanvas + int-floor root dims',
    extra: { inject: 'both', css: FO_BASELINE_CSS, svgRootRound: 'int-floor' },
  },
  {
    n: 6,
    slug: 'H2 raster normalize',
    idea: 'lab-toCanvas + H2_RASTER_NORMALIZE_CSS (tc-only-035)',
    extra: { inject: 'both', css: H2_RASTER_NORMALIZE_CSS },
  },
  {
    n: 7,
    slug: 'int-vb + normalize',
    idea: 'integer-viewbox + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 8,
    slug: 'Chromium copy',
    idea: 'lab-toCanvas + Chromium font-kerning block (tc-only-037)',
    extra: { inject: 'both', css: FO_BASELINE_CSS + CHROMIUM_COPY },
  },
  {
    n: 9,
    slug: 'leaf flex strut',
    idea: 'FO * min-width/min-height + lab-toCanvas (tc-only-036)',
    extra: { inject: 'both', css: FO_BASELINE_CSS + LEAF },
  },
  {
    n: 10,
    slug: 'int-vb Chromium',
    idea: 'integer-viewbox + Chromium copies + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 11,
    slug: 'int-vb leaf',
    idea: 'integer-viewbox + flex leaf strut + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 12,
    slug: 'normalize leaf int-vb',
    idea: 'H2 normalize + leaf + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + LEAF,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 13,
    slug: 'FO xy bump',
    idea: 'FO x/y +0.0001 attr bump + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foAttrPatch: { x: '0.0001', y: '0.0001' },
    },
  },
  {
    n: 14,
    slug: 'FO xy bump int-vb',
    idea: 'FO attr bump + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foAttrPatch: { x: '0.0001', y: '0.0001' },
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 15,
    slug: 'h2-percent int-vb',
    idea: 'h2-fo-percent-int-viewbox + lab-toCanvas (tc-only-031 radical)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'h2-fo-percent-int-viewbox',
    },
  },
  {
    n: 16,
    slug: 'math-floor stash frac',
    idea: 'math-floor-viewbox-stash-frac + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
    },
  },
  {
    n: 17,
    slug: 'percent-vb normalize',
    idea: 'h2-percent int-vb + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: 'h2-fo-percent-int-viewbox',
    },
  },
  {
    n: 18,
    slug: 'math-floor int-vb',
    idea: 'math-floor stash + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 19,
    slug: 'fe-color-matrix',
    idea: 'fe-color-matrix-identity + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 20,
    slug: 'fo-shape-rendering',
    idea: 'fo-shape-rendering-auto + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 21,
    slug: 'xmlns strip transforms',
    idea: 'explicit-xmlns-strip-transforms + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 22,
    slug: 'base64 roundtrip',
    idea: 'base64-roundtrip SVG reserialize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 23,
    slug: 'MP drawImage round',
    idea: 'tc-draw-image-round-all monkeypatch + lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 24,
    slug: 'MP canvas backing ceil',
    idea: 'tc-canvas-backing-ceil + lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-canvas-backing-ceil',
    },
  },
  {
    n: 25,
    slug: 'MP safari raf decode',
    idea: 'tc-decode-safari-raf + lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-decode-safari-raf',
    },
  },
  {
    n: 26,
    slug: 'int-vb MP round draw',
    idea: 'integer-viewbox + tc-draw-image-round-all + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 27,
    slug: 'normalize MP round',
    idea: 'H2 normalize + tc-draw-image-round-all + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 28,
    slug: 'round-dims normalize',
    idea: 'round-dims + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 29,
    slug: 'normalize Chromium int-vb',
    idea: 'H2 normalize + Chromium + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 30,
    slug: 'percent-vb int-vb normalize',
    idea: 'h2-percent + integer-viewbox + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 31,
    slug: 'math-floor normalize',
    idea: 'math-floor stash + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
    },
  },
  {
    n: 32,
    slug: 'percent-vb leaf',
    idea: 'h2-percent int-vb + flex leaf + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      radicalPatch: 'h2-fo-percent-int-viewbox',
    },
  },
  {
    n: 33,
    slug: 'FO wh bump int-vb',
    idea: 'FO width/height +0.0001 + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foAttrPatch: { width: '0.0001', height: '0.0001' },
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 34,
    slug: 'FO xywh bump normalize',
    idea: 'FO x/y/w/h micro-bump + H2 normalize + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      foAttrPatch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' },
    },
  },
  {
    n: 35,
    slug: 'remove-fe filters',
    idea: 'remove-fe-filters radical + lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 36,
    slug: 'full structural stack',
    idea: 'H2 normalize + leaf + Chromium + integer-viewbox + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 37,
    slug: 'full stack percent-vb',
    idea: 'h2-percent + H2 normalize + leaf + int-vb + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + LEAF,
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 38,
    slug: 'full stack math-floor',
    idea: 'math-floor stash + H2 normalize + int-vb + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 39,
    slug: 'full stack MP round',
    idea: 'int-vb + normalize + tc-draw-image-round-all + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 40,
    slug: 'max combo probe',
    idea: 'percent-vb + math-floor + normalize + leaf + int-vb + MP round + lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS + LEAF,
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-draw-image-round-all',
      notes: 'math-floor applied in harness order before percent-vb when both set — prefer 038 for math-floor isolate',
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  return {
    id: `tc-lab-cmp-${num}`,
    label: `tc-lab-cmp #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `lab-toCanvas composite; ${spec.slug}`,
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-tocanvas-lab-fork-composite.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
