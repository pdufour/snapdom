/**
 * Lab toCanvas + supersample / two-stage / HiDPI downscale probes (tc-lab-ss-001..050).
 * rasterPatch: lab-toCanvas | lab-toCanvas-frac → fo-fix-toCanvas*.js draw forks.
 * Draw hooks: tc-lab-draw-supersample-downscale (scaleMultiplier 2|3), tc-lab-draw-two-stage.
 * HiDPI: labPreRaster device-grid-floor (caller dpr) + 2× downscale blit — no hidden multipliers.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-ss-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {{ slug: string, idea: string, rasterPatch: 'lab-toCanvas' | 'lab-toCanvas-frac', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const ROWS = [
  // —— supersample 2× downscale (lab-toCanvas) ——
  {
    slug: 'ss2 bare',
    idea: 'Lab toCanvas + tc-lab-draw-supersample-downscale 2× — baseline oversample blit',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: '',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 FO baseline',
    idea: '2× supersample downscale + FO_BASELINE_CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 Chromium copies',
    idea: '2× supersample + Chromium font-kerning / size-adjust on FO *',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 integer-viewbox',
    idea: '2× supersample + integer-viewbox snap before lab toCanvas',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 round-dims',
    idea: '2× supersample + round-dims on SVG root',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 int-floor',
    idea: '2× supersample + int-floor root width/height',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'int-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 H2 raster normalize',
    idea: '2× supersample + H2_RASTER_NORMALIZE structural CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 leaf flex strut',
    idea: '2× supersample + FO * min-width/min-height strut',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 filter-noop-defs',
    idea: '2× supersample + filter-noop-defs on FO',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foSvgPatch: 'filter-noop-defs',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 int-vb normalize',
    idea: '2× supersample + integer-viewbox + H2 normalize',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'ss2 base64 roundtrip',
    idea: '2× supersample + base64-roundtrip SVG reserialize',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'base64-roundtrip',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  // —— supersample 3× downscale (lab-toCanvas) ——
  {
    slug: 'ss3 bare',
    idea: 'Lab toCanvas + tc-lab-draw-supersample-downscale 3× oversample then downscale',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: '',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 FO baseline',
    idea: '3× supersample downscale + FO_BASELINE_CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 Chromium copies',
    idea: '3× supersample + Chromium copies on FO *',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 integer-viewbox',
    idea: '3× supersample + integer-viewbox',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 round-dims',
    idea: '3× supersample + round-dims',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 int-floor',
    idea: '3× supersample + int-floor root dims',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'int-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 H2 raster normalize',
    idea: '3× supersample + H2 raster normalize CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 leaf flex strut',
    idea: '3× supersample + leaf strut',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 filter-noop-defs',
    idea: '3× supersample + filter-noop-defs',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foSvgPatch: 'filter-noop-defs',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 int-vb normalize',
    idea: '3× supersample + integer-viewbox + H2 normalize',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'ss3 explicit-xmlns strip',
    idea: '3× supersample + explicit-xmlns-strip-transforms',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  // —— two-stage draw (lab-toCanvas) ——
  {
    slug: 'two-stage bare',
    idea: 'Lab toCanvas + tc-lab-draw-two-stage intermediate canvas before final blit',
    rasterPatch: 'lab-toCanvas',
    extra: { inject: 'both', css: '', monkeypatch: 'tc-lab-draw-two-stage' },
  },
  {
    slug: 'two-stage FO baseline',
    idea: 'two-stage + FO_BASELINE_CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage Chromium copies',
    idea: 'two-stage + Chromium copies',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage integer-viewbox',
    idea: 'two-stage + integer-viewbox',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage round-dims',
    idea: 'two-stage + round-dims',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage int-floor',
    idea: 'two-stage + int-floor',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'int-floor',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage H2 raster normalize',
    idea: 'two-stage + H2_RASTER_NORMALIZE_CSS',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage leaf flex strut',
    idea: 'two-stage + leaf strut',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage filter-noop-defs',
    idea: 'two-stage + filter-noop-defs',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      foSvgPatch: 'filter-noop-defs',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage int-vb normalize',
    idea: 'two-stage + integer-viewbox + H2 normalize',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage explicit-xmlns strip',
    idea: 'two-stage + explicit-xmlns-strip-transforms',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'two-stage base64 roundtrip',
    idea: 'two-stage + base64-roundtrip reserialize',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgMarkupPatch: 'base64-roundtrip',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  // —— high-dpr-then-downscale (caller dpr grid snap + 2× lab downscale) ——
  {
    slug: 'hidpi ss2 bare',
    idea: 'device-grid-floor (caller dpr) + 2× lab supersample downscale — HiDPI then downscale',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'hidpi ss2 FO baseline',
    idea: 'HiDPI grid snap + 2× downscale + FO baseline',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'hidpi ss2 integer-viewbox',
    idea: 'HiDPI grid + integer-viewbox + 2× downscale',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'hidpi ss2 round-dims',
    idea: 'HiDPI grid + round-dims + 2× downscale',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'hidpi ss2 H2 normalize',
    idea: 'HiDPI grid + H2 normalize + 2× downscale',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'hidpi two-stage bare',
    idea: 'device-grid-floor caller-dpr snap then two-stage lab draw (no extra scale mult)',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'hidpi two-stage int-vb',
    idea: 'HiDPI grid + integer-viewbox + two-stage',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'hidpi two-stage normalize',
    idea: 'HiDPI grid + H2 normalize + two-stage',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  // —— lab-toCanvas-frac + draw hooks ——
  {
    slug: 'frac ss2 bare',
    idea: 'lab-toCanvas-frac fork + 2× tc-lab-draw-supersample-downscale',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: '',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'frac ss2 math stash',
    idea: 'lab-toCanvas-frac + math-floor-viewbox-stash-frac + 2× supersample',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'frac ss3 bare',
    idea: 'lab-toCanvas-frac + 3× supersample downscale',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: '',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'frac ss3 int-vb',
    idea: 'lab-toCanvas-frac + integer-viewbox + 3× supersample',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 3 },
    },
  },
  {
    slug: 'frac two-stage bare',
    idea: 'lab-toCanvas-frac + tc-lab-draw-two-stage',
    rasterPatch: 'lab-toCanvas-frac',
    extra: { inject: 'both', css: '', monkeypatch: 'tc-lab-draw-two-stage' },
  },
  {
    slug: 'frac two-stage math stash',
    idea: 'lab-toCanvas-frac + math-floor-viewbox-stash-frac + two-stage',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
  {
    slug: 'frac hidpi ss2',
    idea: 'lab-toCanvas-frac + device-grid-floor (caller dpr) + 2× downscale',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    slug: 'frac hidpi two-stage',
    idea: 'lab-toCanvas-frac + HiDPI grid snap + two-stage draw',
    rasterPatch: 'lab-toCanvas-frac',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      monkeypatch: 'tc-lab-draw-two-stage',
    },
  },
]

if (ROWS.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-plus-supersample.js: expected 50 rows, got ${ROWS.length}`,
  )
}

const slugs = new Set(ROWS.map((r) => r.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-plus-supersample.js: duplicate slugs in ROWS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = ROWS.map((row, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: extraCss, ...restExtra } = row.extra
  const inject = restExtra.inject ?? 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-ss-${num}`,
    label: `tc-lab-ss #${i + 1}: ${row.slug}`,
    idea: row.idea,
    css: extraCss ?? '',
    inject,
    rasterPatch: row.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas supersample probe; ${row.slug}; caller scale/dpr only; FO raster — no text bypass.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas' && r.rasterPatch !== 'lab-toCanvas-frac') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas or lab-toCanvas-frac`)
  }
  const key = [
    r.rasterPatch,
    r.inject,
    r.monkeypatch ?? '',
    JSON.stringify(r.radicalOptions ?? null),
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-plus-supersample.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
