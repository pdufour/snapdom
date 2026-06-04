/**
 * Safari RAF / box-shadow→drop-shadow / double-RAF lab-toCanvas recipes (tc-lab-saf-001..030).
 * Exercises built-in maybeConvertBoxShadowForSafari + decode RAF in fo-fix-toCanvas*.js forks.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-saf-*'
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** Structural box-shadow on FO * — forces Safari filter rewrite in lab toCanvas forks. */
const BOX_SHADOW_CSS =
  'foreignObject *{box-shadow:0 1px 2px rgba(0,0,0,0.12)!important}'

/** @param {import('../fo-fix-recipe-shared.js').FoFixRecipe} r */
function recipeKey(r) {
  const mp = r.monkeypatch
  const mpStr = Array.isArray(mp) ? mp.join('|') : (mp ?? '')
  return [
    r.inject,
    r.rasterPatch ?? '',
    mpStr,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
}

/**
 * @param {number} n
 * @param {string} slug
 * @param {string} idea
 * @param {Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string }} extra
 */
function build(n, slug, idea, extra) {
  const num = String(n).padStart(3, '0')
  const { css: extraCss, inject: inj, ...rest } = extra
  const hasCss = Boolean(extraCss)
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-saf-${num}`,
    label: `tc-lab-saf #${n}: ${slug}`,
    idea,
    css: extraCss ?? '',
    inject: inj ?? (hasCss ? 'both' : 'raster'),
    category: 'tocanvas',
    active: true,
    notes: `Safari RAF / box-shadow lab fork; ${slug}; FO raster only — no text bypass.`,
    ...rest,
  }
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
const seen = new Set()
let n = 1

/**
 * @param {string} slug
 * @param {string} idea
 * @param {Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string }} extra
 */
function add(slug, idea, extra) {
  const r = build(n, slug, idea, extra)
  const key = recipeKey(r)
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-custom-safari.js: duplicate key at ${r.id}`)
  }
  seen.add(key)
  RECIPES.push(r)
  n++
}

const FO = FO_BASELINE_CSS
const H2 = H2_RASTER_NORMALIZE_CSS
const CH = FO_BASELINE_CSS + CHROMIUM_COPY
const BS = FO_BASELINE_CSS + BOX_SHADOW_CSS
const BS_LEAF = BS + LEAF
const BS_CH = BS + CHROMIUM_COPY

// 001–010: lab-toCanvas fork — built-in Safari double-RAF + box-shadow rewrite
add('lab bare safari fork', 'lab-toCanvas — built-in Safari RAF + box-shadow rewrite path', {
  rasterPatch: 'lab-toCanvas',
})
add('lab fo baseline safari', 'lab-toCanvas + FO baseline + fork Safari hooks', {
  rasterPatch: 'lab-toCanvas',
  css: FO,
})
add('lab h2 normalize safari', 'lab-toCanvas + H2 raster normalize + fork Safari hooks', {
  rasterPatch: 'lab-toCanvas',
  css: H2,
})
add('lab int-vb fo safari', 'lab-toCanvas + integer-viewbox + FO baseline + fork Safari', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: FO,
})
add('lab MP safari-raf stack', 'lab-toCanvas + tc-decode-safari-raf on top of fork double-RAF', {
  rasterPatch: 'lab-toCanvas',
  css: FO,
  monkeypatch: 'tc-decode-safari-raf',
})
add('lab box-shadow CSS', 'lab-toCanvas + FO box-shadow — exercises drop-shadow rewrite', {
  rasterPatch: 'lab-toCanvas',
  css: BS,
})
add('lab box-shadow chromium', 'lab-toCanvas + box-shadow + Chromium copy block', {
  rasterPatch: 'lab-toCanvas',
  css: BS_CH,
})
add('lab box-shadow leaf int-vb', 'lab-toCanvas + box-shadow + leaf + integer-viewbox', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: BS_LEAF,
})
add('lab triple RAF MPs', 'lab-toCanvas + tc-decode-safari-raf + raf-before-draw (stacked RAF)', {
  rasterPatch: 'lab-toCanvas',
  css: FO,
  monkeypatch: ['tc-decode-safari-raf', 'raf-before-draw'],
})
add('lab safari-raf backing', 'lab-toCanvas + tc-decode-safari-raf + tc-canvas-backing-ceil', {
  rasterPatch: 'lab-toCanvas',
  css: H2,
  monkeypatch: ['tc-decode-safari-raf', 'tc-canvas-backing-ceil'],
})

// 011–020: lab-toCanvas-decode — interval wait + Safari RAF hooks
add('decode bare safari', 'lab-toCanvas-decode + fork Safari RAF + drawImageInterval', {
  rasterPatch: 'lab-toCanvas-decode',
})
add('decode int-vb fo safari', 'lab-toCanvas-decode + integer-viewbox + FO baseline + Safari', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: FO,
})
add('decode MP safari-raf', 'lab-toCanvas-decode + tc-decode-safari-raf MP', {
  rasterPatch: 'lab-toCanvas-decode',
  css: FO,
  monkeypatch: 'tc-decode-safari-raf',
})
add('decode MP raf-before-draw', 'lab-toCanvas-decode + raf-before-draw MP after decode', {
  rasterPatch: 'lab-toCanvas-decode',
  css: FO,
  monkeypatch: 'raf-before-draw',
})
add('decode box-shadow int-vb', 'lab-toCanvas-decode + box-shadow CSS + integer-viewbox', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: BS,
})
add('decode safari+proto+int-vb', 'lab-toCanvas-decode + safari RAF + decode prototype + int-vb', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: FO,
  monkeypatch: ['tc-decode-safari-raf', 'decode-interval-prototype'],
})
add('decode safari+draw-round', 'lab-toCanvas-decode + safari RAF + tc-draw-image-round-all', {
  rasterPatch: 'lab-toCanvas-decode',
  css: CH,
  monkeypatch: ['tc-decode-safari-raf', 'tc-draw-image-round-all'],
})
add('decode safari+backing', 'lab-toCanvas-decode + safari RAF + tc-canvas-backing-ceil', {
  rasterPatch: 'lab-toCanvas-decode',
  css: H2,
  monkeypatch: ['tc-decode-safari-raf', 'tc-canvas-backing-ceil'],
})
add('decode box-shadow h2leaf', 'lab-toCanvas-decode + box-shadow + H2 normalize + leaf', {
  rasterPatch: 'lab-toCanvas-decode',
  css: BS + LEAF + H2,
})
add('decode decode-twice+safari', 'lab-toCanvas-decode + image-decode-twice + safari RAF', {
  rasterPatch: 'lab-toCanvas-decode',
  css: FO,
  monkeypatch: ['image-decode-twice', 'tc-decode-safari-raf'],
})

// 021–030: lab-toCanvas-frac — fractional draw + Safari path
add('frac math-floor fo safari', 'lab-toCanvas-frac + math-floor-vb stash + FO + Safari fork', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: FO,
})
add('frac h2-percent chrom safari MP', 'lab-toCanvas-frac + h2-percent-vb + chrom + safari RAF MP', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  css: CH,
  monkeypatch: 'tc-decode-safari-raf',
})
add('frac box-shadow math-floor', 'lab-toCanvas-frac + box-shadow + math-floor-vb stash', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: BS,
})
add('frac int-vb safari+raf MP', 'lab-toCanvas-frac + int-vb + safari RAF + raf-before-draw', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  svgRootRound: 'integer-viewbox',
  css: FO,
  monkeypatch: ['tc-decode-safari-raf', 'raf-before-draw'],
})
add('frac box-shadow h2-percent', 'lab-toCanvas-frac + box-shadow + h2-percent-int-viewbox', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  css: BS_LEAF,
})
add('frac round-dims safari backing', 'lab-toCanvas-frac + round-dims + safari + backing ceil', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  svgRootRound: 'round-dims',
  css: H2,
  monkeypatch: ['tc-decode-safari-raf', 'tc-canvas-backing-ceil'],
})
add('lab decode chrom safari int-vb', 'lab-toCanvas-decode + chrom + safari RAF + int-vb', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CH,
  monkeypatch: 'tc-decode-safari-raf',
})
add('lab box-shadow round-dims safari', 'lab-toCanvas + box-shadow + round-dims + safari RAF MP', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'round-dims',
  css: BS,
  monkeypatch: 'tc-decode-safari-raf',
})
add('decode triple RAF stack', 'lab-toCanvas-decode + safari + raf-before-draw + prototype', {
  rasterPatch: 'lab-toCanvas-decode',
  css: BS_CH,
  monkeypatch: ['tc-decode-safari-raf', 'raf-before-draw', 'decode-interval-prototype'],
})
add('frac math-floor box-shadow safari', 'lab-toCanvas-frac + math-floor-vb + box-shadow + safari MP', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: BS,
  monkeypatch: 'tc-decode-safari-raf',
})

if (RECIPES.length !== 30) {
  throw new Error(
    `recipes-tocanvas-lab-custom-safari.js: expected 30 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
