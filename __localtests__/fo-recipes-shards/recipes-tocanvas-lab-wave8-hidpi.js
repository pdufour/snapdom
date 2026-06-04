/**
 * Wave-8 HiDPI lab-toCanvas paths — tc-lab-w8-hi-001..100.
 * HiDPI paths use caller dpr/scale only: device-grid-floor, backing ceil/floor, and lab draw harnesses.
 * No hidden 2× multipliers (supersample uses explicit radicalOptions.scaleMultiplier only).
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-hi-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @param {'none'|'fo'|'h2'|'chromium'|'leaf'} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'fo':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    default:
      throw new Error(`unknown cssKey: ${key}`)
  }
}

/** @type {{ slug: string, idea: string, cssKey: 'none'|'fo'|'h2'|'chromium'|'leaf', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []

/** @param {typeof SPECS[number]} spec */
function pushSpec(spec) {
  SPECS.push(spec)
}

const CSS_KEYS = /** @type {const} */ (['none', 'fo', 'h2', 'chromium', 'leaf'])
const ROOT_ROUNDS = /** @type {(null|'integer-viewbox'|'round-dims'|'int-floor')[]} */ ([
  null,
  'integer-viewbox',
  'round-dims',
  'int-floor',
])

// Always HiDPI: caller dpr path via device-grid-floor.
const HI = /** @type {const} */ ({ labPreRaster: 'device-grid-floor' })

// 1) Baseline HiDPI snap variants (20)
for (const cssKey of CSS_KEYS) {
  for (const rr of ROOT_ROUNDS) {
    if (SPECS.length >= 20) break
    pushSpec({
      slug: `hidpi snap ${cssKey}${rr ? ` ${rr}` : ''}`.trim(),
      idea: `device-grid-floor (caller dpr) + ${cssKey} CSS${rr ? ` + ${rr}` : ''} — wave-8 hidpi baseline snap`,
      cssKey,
      extra: {
        inject: 'both',
        ...HI,
        ...(rr ? { svgRootRound: rr } : {}),
      },
    })
  }
}

// 2) Backing-store rounding (ceil/floor) under HiDPI.
for (const mp of /** @type {const} */ (['tc-canvas-backing-ceil', 'tc-canvas-backing-floor'])) {
  for (const cssKey of CSS_KEYS) {
    pushSpec({
      slug: `hidpi ${mp} ${cssKey}`,
      idea: `device-grid-floor (caller dpr) + mp ${mp} on canvas backing store + ${cssKey} CSS — wave-8 hidpi backing rounding`,
      cssKey,
      extra: { inject: 'both', ...HI, monkeypatch: mp },
    })
  }
  for (const rr of ROOT_ROUNDS) {
    if (!rr) continue
    for (const cssKey of /** @type {const} */ (['fo', 'h2'])) {
      pushSpec({
        slug: `hidpi ${mp} ${rr} ${cssKey}`,
        idea: `device-grid-floor (caller dpr) + mp ${mp} + ${rr} + ${cssKey} CSS — wave-8 hidpi backing rounding`,
        cssKey,
        extra: { inject: 'both', ...HI, svgRootRound: rr, monkeypatch: mp },
      })
    }
  }
}

// 3) Supersample downscale harness (mult 2|3) under HiDPI.
for (const mult of /** @type {const} */ ([2, 3])) {
  for (const cssKey of CSS_KEYS) {
    for (const rr of ROOT_ROUNDS) {
      pushSpec({
        slug: `hidpi ss${mult} ${cssKey}${rr ? ` ${rr}` : ''}`.trim(),
        idea: `device-grid-floor (caller dpr) + tc-lab-draw-supersample-downscale ×${mult} + ${cssKey} CSS${rr ? ` + ${rr}` : ''} — wave-8 hidpi supersample`,
        cssKey,
        extra: {
          inject: 'both',
          ...HI,
          ...(rr ? { svgRootRound: rr } : {}),
          monkeypatch: 'tc-lab-draw-supersample-downscale',
          radicalOptions: { scaleMultiplier: mult },
        },
      })
    }
  }
}

// 4) Two-stage draw harness + backing rounding combos.
for (const backing of /** @type {const} */ (['tc-canvas-backing-ceil', 'tc-canvas-backing-floor'])) {
  for (const cssKey of /** @type {const} */ (['fo', 'h2', 'chromium'])) {
    for (const rr of ROOT_ROUNDS) {
      if (!rr) continue
      pushSpec({
        slug: `hidpi two-stage ${backing} ${rr} ${cssKey}`,
        idea: `device-grid-floor (caller dpr) + mp tc-lab-draw-two-stage + mp ${backing} + ${rr} + ${cssKey} CSS — wave-8 hidpi two-stage`,
        cssKey,
        extra: {
          inject: 'both',
          ...HI,
          svgRootRound: rr,
          monkeypatch: ['tc-lab-draw-two-stage', backing],
        },
      })
    }
  }
}

// Keep only the first 100 deterministic rows.
SPECS.length = 100

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave8-hidpi.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error('recipes-tocanvas-lab-wave8-hidpi.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w8-hi-${num}`,
    label: `tc-lab-w8-hi #${n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Wave-8 HiDPI toCanvas paths; FO raster only — no text bypass; caller dpr/scale only.',
    ...spec.extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave8-hidpi.js: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

