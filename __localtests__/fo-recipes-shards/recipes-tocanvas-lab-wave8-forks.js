/**
 * Wave 8 — 8 toCanvas fork probes (80 recipes, 10 per fork).
 *
 * Forks: __localtests__/fo-fix-toCanvas-w8-*.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-fk-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'baseline':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'full':
      return H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY
    default:
      throw new Error(`unknown cssKey: ${key}`)
  }
}

const FORKS = /** @type {const} */ ([
  { key: 'blob', rp: 'lab-toCanvas-w8-pipeline-blob', idea: 'Force blob decode pipeline' },
  { key: 'bmp', rp: 'lab-toCanvas-w8-force-bitmap', idea: 'Force createImageBitmap draw' },
  { key: 'smooth0', rp: 'lab-toCanvas-w8-ctx-smooth-off', idea: 'Force ctx imageSmoothing off' },
  { key: 'ceil', rp: 'lab-toCanvas-w8-backing-ceil', idea: 'Force backing store ceil' },
  { key: 'dpr', rp: 'lab-toCanvas-w8-dpr-device', idea: 'Force dpr=devicePixelRatio' },
  { key: 'rt', rp: 'lab-toCanvas-w8-reset-transform', idea: 'Force resetTransform before draw' },
  { key: 'fit', rp: 'lab-toCanvas-w8-drawfit-contain', idea: 'Force contain-center drawFit' },
  { key: 'meta0', rp: 'lab-toCanvas-w8-ignore-meta', idea: 'Ignore meta.w0/h0' },
])

/** @type {{ n: number, forkKey: string, forkIdea: string, rasterPatch: string, cssKey: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []

for (const f of FORKS) {
  const baseN = SPECS.length
  SPECS.push(
    {
      n: baseN + 1,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'none',
      inject: 'raster',
      extra: { category: 'tocanvas' },
    },
    {
      n: baseN + 2,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'baseline',
      inject: 'both',
      extra: { category: 'tocanvas', active: true },
    },
    {
      n: baseN + 3,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'h2',
      inject: 'both',
      extra: { category: 'tocanvas', active: true },
    },
    {
      n: baseN + 4,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'chromium',
      inject: 'both',
      extra: { category: 'tocanvas' },
    },
    {
      n: baseN + 5,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'leaf',
      inject: 'both',
      extra: { category: 'tocanvas' },
    },
    {
      n: baseN + 6,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'full',
      inject: 'both',
      extra: { category: 'tocanvas', svgRootRound: 'integer-viewbox' },
    },
    {
      n: baseN + 7,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'baseline',
      inject: 'both',
      extra: { category: 'tocanvas', svgRootRound: 'round-dims' },
    },
    {
      n: baseN + 8,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'h2',
      inject: 'both',
      extra: { category: 'tocanvas', svgRootRound: 'int-floor' },
    },
    {
      n: baseN + 9,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'baseline',
      inject: 'both',
      extra: { category: 'tocanvas', monkeypatch: 'tc-draw-image-round-all' },
    },
    {
      n: baseN + 10,
      forkKey: f.key,
      forkIdea: f.idea,
      rasterPatch: f.rp,
      cssKey: 'h2',
      inject: 'both',
      extra: {
        category: 'tocanvas',
        svgRootRound: 'integer-viewbox',
        labLoadPipeline: 'fonts-ready-interval',
      },
    },
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = SPECS.map(({ n, forkKey, forkIdea, rasterPatch, cssKey, inject, extra }) => {
  const nn = String(n).padStart(3, '0')
  return {
    id: `tc-lab-w8-fk-${nn}`,
    label: `W8 fork ${forkKey} #${nn}`,
    idea: `${forkIdea} — ${rasterPatch} + ${cssKey} + inject ${inject}`,
    css: resolveCss(cssKey),
    inject,
    rasterPatch,
    ...extra,
  }
})

const EXPECTED = 80
if (FO_FIX_RECIPES_SHARD.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-forks.js: expected ${EXPECTED} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
}

export default FO_FIX_RECIPES_SHARD

