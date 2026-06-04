/**
 * Lab toCanvas wave 3 — rasterPatch tokens (tc-lab-w3-patch-001..080).
 * Tokens are implemented in fo-fix-toCanvas.js and wired via fo-fix-lab-runner rasterSvgUrl / lab-toCanvas.
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-patch-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {readonly string[]} */
const TOKENS = [
  'lab-decode-200ms',
  'lab-decode-100ms',
  'lab-decode-off',
  'lab-decode-double',
  'lab-decode-raf',
  'lab-draw-round',
  'lab-draw-frac',
  'lab-backing-floor',
  'lab-backing-ceil',
  'lab-ctx-smooth-off',
]

/**
 * 8 variants per token (80 total):
 *  - 4 use rasterPatch = token directly (exercise rasterSvgUrl token handling).
 *  - 4 use rasterPatch = 'lab-toCanvas' + labRasterPatches = [token] (exercise lab-toCanvas meta handling).
 */
/** @type {{ token: string, via: 'direct' | 'meta', variant: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = []

for (const token of TOKENS) {
  // direct rasterPatch=token
  SPECS.push(
    {
      token,
      via: 'direct',
      variant: 'raster bare',
      idea: `${token} via rasterPatch token on rasterSvgUrl (no CSS)`,
      extra: { inject: 'raster', rasterPatch: token, css: '' },
    },
    {
      token,
      via: 'direct',
      variant: 'raster baseline',
      idea: `${token} via rasterPatch token + FO_BASELINE_CSS`,
      extra: { inject: 'raster', rasterPatch: token, css: FO_BASELINE_CSS },
    },
    {
      token,
      via: 'direct',
      variant: 'both leaf',
      idea: `${token} via rasterPatch token + leaf min-size on FO subtree`,
      extra: { inject: 'both', rasterPatch: token, css: FO_BASELINE_CSS + LEAF },
    },
    {
      token,
      via: 'direct',
      variant: 'both int-vb',
      idea: `${token} via rasterPatch token + integer viewBox snap`,
      extra: {
        inject: 'both',
        rasterPatch: token,
        css: FO_BASELINE_CSS,
        svgRootRound: 'integer-viewbox',
      },
    },
  )

  // meta: rasterPatch=lab-toCanvas + labRasterPatches=[token]
  SPECS.push(
    {
      token,
      via: 'meta',
      variant: 'raster bare',
      idea: `${token} via labRasterPatches on lab-toCanvas (no CSS)`,
      extra: {
        inject: 'raster',
        rasterPatch: 'lab-toCanvas',
        labRasterPatches: [token],
        css: '',
      },
    },
    {
      token,
      via: 'meta',
      variant: 'raster baseline',
      idea: `${token} via labRasterPatches on lab-toCanvas + FO_BASELINE_CSS`,
      extra: {
        inject: 'raster',
        rasterPatch: 'lab-toCanvas',
        labRasterPatches: [token],
        css: FO_BASELINE_CSS,
      },
    },
    {
      token,
      via: 'meta',
      variant: 'both normalize',
      idea: `${token} via labRasterPatches on lab-toCanvas + H2 raster normalize CSS`,
      extra: {
        inject: 'both',
        rasterPatch: 'lab-toCanvas',
        labRasterPatches: [token],
        css: H2_RASTER_NORMALIZE_CSS,
      },
    },
    {
      token,
      via: 'meta',
      variant: 'both device-grid',
      idea: `${token} via labRasterPatches + labPreRaster device-grid-floor`,
      extra: {
        inject: 'both',
        rasterPatch: 'lab-toCanvas',
        labRasterPatches: [token],
        css: FO_BASELINE_CSS,
        labPreRaster: 'device-grid-floor',
      },
    },
  )
}

if (SPECS.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-patches.js: expected 80 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-patch-${num}`,
    label: `tc-lab-w3-patch #${i + 1}: ${spec.token} (${spec.via}; ${spec.variant})`,
    idea: spec.idea,
    css: specCss ?? '',
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    notes: 'Wave3 patch tokens; FO raster only — no text bypass.',
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    (r.labRasterPatches ?? []).join(','),
    r.labPreRaster ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.radicalOptions ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-patches.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

