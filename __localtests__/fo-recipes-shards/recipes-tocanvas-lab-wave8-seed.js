/**
 * Wave 8 — seed set (40) for quick smoke runs: tc-lab-w8-seed-001..040.
 * Designed to cover a broad set of lab-toCanvas knobs without a full combinatorial sweep.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-seed-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  // Baselines (raster / capture) to anchor quick smokes.
  {
    n: 1,
    slug: 'raster-only',
    idea: 'Seed: lab-toCanvas raster inject only (no capture CSS patch).',
    css: '',
    extra: { inject: 'raster' },
  },
  {
    n: 2,
    slug: 'FO_BASELINE_CSS both',
    idea: 'Seed: FO_BASELINE_CSS at capture+raster (inject both).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    n: 3,
    slug: 'H2 normalize both',
    idea: 'Seed: H2_RASTER_NORMALIZE_CSS structural FO normalize.',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both' },
  },
  {
    n: 4,
    slug: 'leaf flex strut',
    idea: 'Seed: FO baseline + flex leaf strut for min-width/min-height.',
    css: FO_BASELINE_CSS + LEAF,
    extra: { inject: 'both' },
  },
  {
    n: 5,
    slug: 'Chromium copies',
    idea: 'Seed: FO baseline + Chromium font-kerning/smoothing copies.',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },

  // Root rounding / viewBox snaps (common structural variants).
  {
    n: 6,
    slug: 'integer-viewbox',
    idea: 'Seed: integer-viewbox snap on SVG root before raster.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    n: 7,
    slug: 'round-dims',
    idea: 'Seed: round root width/height to device grid.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    n: 8,
    slug: 'int-floor',
    idea: 'Seed: int-floor root dims before raster.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    n: 9,
    slug: 'device-grid-floor pre-raster',
    idea: 'Seed: device-grid-floor pre-raster SVG snap.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', labPreRaster: 'device-grid-floor' },
  },
  {
    n: 10,
    slug: 'explicit-xmlns-strip-transforms',
    idea: 'Seed: explicit xmlns + strip transforms markup patch.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'explicit-xmlns-strip-transforms' },
  },
  {
    n: 11,
    slug: 'base64-roundtrip',
    idea: 'Seed: base64 roundtrip (reserialize SVG before raster).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'base64-roundtrip' },
  },

  // FO SVG prep (filter/fe noop shims).
  {
    n: 12,
    slug: 'filter-noop-defs',
    idea: 'Seed: filter-noop-defs on FO subtree.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'filter-noop-defs' },
  },
  {
    n: 13,
    slug: 'fe-color-matrix-identity',
    idea: 'Seed: fe-color-matrix-identity.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-color-matrix-identity' },
  },
  {
    n: 14,
    slug: 'fe-morphology-identity',
    idea: 'Seed: fe-morphology-identity.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-morphology-identity' },
  },
  {
    n: 15,
    slug: 'fe-component-transfer-identity',
    idea: 'Seed: fe-component-transfer-identity.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-component-transfer-identity' },
  },
  {
    n: 16,
    slug: 'fe-merge-empty',
    idea: 'Seed: fe-merge-empty shim.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-merge-empty' },
  },
  {
    n: 17,
    slug: 'fe-displacement-map-identity',
    idea: 'Seed: fe-displacement-map-identity.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-displacement-map-identity' },
  },

  // Monkeypatch seeds (kept small; representative only).
  {
    n: 18,
    slug: 'MP createImageBitmap-high',
    idea: 'Seed: createImageBitmap resizeQuality high.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', monkeypatch: 'createImageBitmap-high' },
  },
  {
    n: 19,
    slug: 'MP tc-canvas-backing-ceil',
    idea: 'Seed: toCanvas canvas backing-store ceil.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', monkeypatch: 'tc-canvas-backing-ceil' },
  },

  // Decode/draw ordering seeds (via existing w3 decode/draw MPs).
  {
    n: 20,
    slug: 'MP decode-raf2 draw-raf1',
    idea: 'Seed: decode on raf2 then draw on raf1.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-raf2-draw-raf1' },
  },
  {
    n: 21,
    slug: 'MP decode-timeout16 draw-timeout0',
    idea: 'Seed: decode timeout16 then draw timeout0.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-t16-draw-t0' },
  },
  {
    n: 22,
    slug: 'MP decode-idle draw-idle',
    idea: 'Seed: decode in requestIdleCallback then draw in requestIdleCallback.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-idle-draw-idle' },
  },

  // Wait interval seeds (lab-wait-{N}ms rasterPatch variants).
  {
    n: 23,
    slug: 'lab-wait-0ms (raster-only)',
    idea: 'Seed: 0ms post-decode wait (raster inject only).',
    css: '',
    extra: { inject: 'raster', rasterPatch: 'lab-wait-0ms' },
  },
  {
    n: 24,
    slug: 'lab-wait-16ms (FO baseline)',
    idea: 'Seed: 16ms post-decode wait with FO baseline.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', rasterPatch: 'lab-wait-16ms' },
  },
  {
    n: 25,
    slug: 'lab-wait-100ms (Chromium copies)',
    idea: 'Seed: 100ms post-decode wait with Chromium copies.',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', rasterPatch: 'lab-wait-100ms' },
  },
  {
    n: 26,
    slug: 'lab-wait-300ms (H2 normalize)',
    idea: 'Seed: 300ms post-decode wait with H2 normalize.',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', rasterPatch: 'lab-wait-300ms' },
  },

  // A few combos that stack common knobs (still structural).
  {
    n: 27,
    slug: 'int-vb + H2 normalize',
    idea: 'Seed: integer-viewbox + H2 normalize.',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    n: 28,
    slug: 'int-floor + leaf',
    idea: 'Seed: int-floor + leaf strut.',
    css: FO_BASELINE_CSS + LEAF,
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    n: 29,
    slug: 'round-dims + filter-noop-defs',
    idea: 'Seed: round-dims + filter-noop-defs.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'round-dims', foSvgPatch: 'filter-noop-defs' },
  },
  {
    n: 30,
    slug: 'integer-viewbox + strip-all-transforms',
    idea: 'Seed: integer-viewbox + strip-all-transforms markup patch.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox', svgMarkupPatch: 'strip-all-transforms' },
  },
  {
    n: 31,
    slug: 'device-grid-floor + strip-all-transforms',
    idea: 'Seed: device-grid-floor + strip-all-transforms markup patch.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', labPreRaster: 'device-grid-floor', svgMarkupPatch: 'strip-all-transforms' },
  },
  {
    n: 32,
    slug: 'Chromium + filter-noop-defs',
    idea: 'Seed: Chromium copies + filter-noop-defs.',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', foSvgPatch: 'filter-noop-defs' },
  },
  {
    n: 33,
    slug: 'H2 normalize + filter-noop-defs',
    idea: 'Seed: H2 normalize + filter-noop-defs.',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', foSvgPatch: 'filter-noop-defs' },
  },

  // A small sample of wave7 svg prep knobs to keep the smoke set cross-wave.
  {
    n: 34,
    slug: 'w7: strip-all-transforms + filt-noop',
    idea: 'Seed: wave7 svg prep (strip transforms + filter noop).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'strip-all-transforms', foSvgPatch: 'filter-noop-defs' },
  },
  {
    n: 35,
    slug: 'w7: strip-all-transforms + fe-morph-id',
    idea: 'Seed: wave7 svg prep (strip transforms + fe-morphology-identity).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'strip-all-transforms', foSvgPatch: 'fe-morphology-identity' },
  },
  {
    n: 36,
    slug: 'w7: strip-all-transforms + fe-ct-id',
    idea: 'Seed: wave7 svg prep (strip transforms + fe-component-transfer-identity).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'strip-all-transforms', foSvgPatch: 'fe-component-transfer-identity' },
  },
  {
    n: 37,
    slug: 'w7: int-vb + strip-all + filt-noop',
    idea: 'Seed: wave7 svg prep (int-vb + strip transforms + filter-noop-defs).',
    css: FO_BASELINE_CSS,
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      // Keep distinct from the simpler int-vb + strip-all control above.
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },

  // Pad out to 40 with a few additional, common options.
  {
    n: 38,
    slug: 'strip-all-transforms only',
    idea: 'Seed: strip-all-transforms markup patch only.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgMarkupPatch: 'strip-all-transforms' },
  },
  {
    n: 39,
    slug: 'svg-root-pattern-fill',
    idea: 'Seed: svg-root-pattern-fill to keep patterns stable.',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'svg-root-pattern-fill' },
  },
  {
    n: 40,
    slug: 'fe-turbulence-composite',
    idea: 'Seed: fe-turbulence-composite (diagnostic but structural).',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', foSvgPatch: 'fe-turbulence-composite' },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-tocanvas-lab-wave8-seed.js: expected 40 specs, got ${SPECS.length}`)
}

const seenSlug = new Set(SPECS.map((s) => s.slug))
if (seenSlug.size !== 40) {
  throw new Error('recipes-tocanvas-lab-wave8-seed.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  const rasterPatch = extra.rasterPatch ?? 'lab-toCanvas'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w8-seed-${num}`,
    label: `tc-lab-w8-seed #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave-8 seed set for quick smoke; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})


export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
