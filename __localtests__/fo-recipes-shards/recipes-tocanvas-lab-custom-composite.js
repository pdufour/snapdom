/**
 * Mega composite lab-toCanvas recipes (tc-lab-x-001..080).
 * Each row combines 2–4 mechanisms from tc-only / tc-lab leaders:
 * lab-toCanvas-decode, lab-toCanvas-frac, integer viewBox, normalize CSS, MPs.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-x-*'
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {Record<string, string>} */
const CSS = {
  bare: '',
  fo: FO_BASELINE_CSS,
  chrom: FO_BASELINE_CSS + CHROMIUM_COPY,
  h2: H2_RASTER_NORMALIZE_CSS,
  leaf: FO_BASELINE_CSS + LEAF,
  h2leaf: H2_RASTER_NORMALIZE_CSS + LEAF,
}

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
    id: `tc-lab-x-${num}`,
    label: `tc-lab-x #${n}: ${slug}`,
    idea,
    css: extraCss ?? '',
    inject: inj ?? (hasCss ? 'both' : 'raster'),
    category: 'tocanvas',
    active: true,
    notes: `mega composite; ${slug}; FO raster only — no text bypass.`,
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
    throw new Error(`recipes-tocanvas-lab-custom-composite.js: duplicate key at ${r.id}`)
  }
  seen.add(key)
  RECIPES.push(r)
  n++
}

const VB = ['integer-viewbox', 'round-dims', 'int-floor']

// 001–018: lab-toCanvas-decode + viewBox snap + structural CSS (3×6)
for (const vb of VB) {
  for (const [cssName, cssVal] of Object.entries(CSS)) {
    add(
      `decode ${vb} ${cssName}`,
      `lab-toCanvas-decode + ${vb} + ${cssName} CSS`,
      {
        rasterPatch: 'lab-toCanvas-decode',
        svgRootRound: vb,
        css: cssVal,
      },
    )
  }
}

// 019–030: lab-toCanvas-decode + int-vb + MPs (12)
/** @type {import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch | import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch[]} */
const DECODE_MP_ROWS = [
  'tc-canvas-backing-ceil',
  'tc-draw-image-round-all',
  'decode-interval-prototype',
  'image-decode-twice',
  'raf-before-draw',
  'tc-decode-safari-raf',
  ['tc-canvas-backing-ceil', 'tc-draw-image-round-all'],
  ['tc-canvas-backing-ceil', 'tc-decode-safari-raf'],
  ['decode-interval-prototype', 'tc-canvas-backing-ceil'],
  ['image-decode-twice', 'raf-before-draw'],
  ['tc-decode-safari-raf', 'tc-draw-image-round-all'],
  ['tc-canvas-backing-ceil', 'decode-interval-prototype', 'tc-decode-safari-raf'],
]
for (const mp of DECODE_MP_ROWS) {
  const mpLabel = Array.isArray(mp) ? mp.join('+') : mp
  add(
    `decode int-vb MP ${mpLabel}`,
    `lab-toCanvas-decode + integer-viewbox + ${mpLabel}`,
    {
      rasterPatch: 'lab-toCanvas-decode',
      svgRootRound: 'integer-viewbox',
      css: CSS.fo,
      monkeypatch: mp,
    },
  )
}

// 031–040: lab-toCanvas + viewBox + CSS/MP (10)
add('lab int-vb fo', 'lab-toCanvas + integer-viewbox + FO baseline', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
})
add('lab round-dims chrom', 'lab-toCanvas + round-dims + Chromium copy', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'round-dims',
  css: CSS.chrom,
})
add('lab int-floor h2leaf', 'lab-toCanvas + int-floor + H2 normalize + leaf', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'int-floor',
  css: CSS.h2leaf,
})
add('lab int-vb safari-raf', 'lab-toCanvas + integer-viewbox + tc-decode-safari-raf', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
  monkeypatch: 'tc-decode-safari-raf',
})
add('lab round-dims backing', 'lab-toCanvas + round-dims + tc-canvas-backing-ceil', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'round-dims',
  css: CSS.chrom,
  monkeypatch: 'tc-canvas-backing-ceil',
})
add('lab int-vb remove-fe', 'lab-toCanvas + integer-viewbox + remove-fe-filters', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2,
  radicalPatch: 'remove-fe-filters',
})
add('lab int-floor raf MP', 'lab-toCanvas + int-floor + raf-before-draw MP', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'int-floor',
  css: CSS.leaf,
  monkeypatch: 'raf-before-draw',
})
add('lab int-vb backing+safari', 'lab-toCanvas + int-vb + backing ceil + safari decode RAF', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2leaf,
  monkeypatch: ['tc-canvas-backing-ceil', 'tc-decode-safari-raf'],
})
add('lab round-dims decode-twice', 'lab-toCanvas + round-dims + image-decode-twice', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'round-dims',
  css: CSS.fo,
  monkeypatch: 'image-decode-twice',
})
add('lab int-vb chromLeaf remove-fe', 'lab-toCanvas + int-vb + chromLeaf + remove-fe-filters', {
  rasterPatch: 'lab-toCanvas',
  svgRootRound: 'integer-viewbox',
  css: CSS.chrom + LEAF,
  radicalPatch: 'remove-fe-filters',
})

// 041–052: lab-toCanvas-frac + radical viewBox stash + CSS (2×6)
/** @type {import('../fo-fix-recipe-shared.js').FoFixRadicalPatch[]} */
const FRAC_RAD = ['math-floor-viewbox-stash-frac', 'h2-fo-percent-int-viewbox']
const FRAC_CSS = ['fo', 'chrom', 'h2', 'leaf', 'h2leaf', 'bare']
for (const rad of FRAC_RAD) {
  for (const cssName of FRAC_CSS) {
    add(
      `frac ${rad} ${cssName}`,
      `lab-toCanvas-frac + ${rad} + ${cssName} CSS`,
      {
        rasterPatch: 'lab-toCanvas-frac',
        radicalPatch: rad,
        css: CSS[cssName],
      },
    )
  }
}

// 053–058: frac + viewBox round + extra mechanism (6)
add('frac math-floor int-vb fo', 'lab-toCanvas-frac + math-floor-vb + int-vb + FO baseline', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
})
add('frac h2-percent round-dims h2', 'lab-toCanvas-frac + h2-percent-vb + round-dims + H2 normalize', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  svgRootRound: 'round-dims',
  css: CSS.h2,
})
add('frac remove-fe int-vb leaf', 'lab-toCanvas-frac + remove-fe-filters + int-vb + leaf', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'remove-fe-filters',
  svgRootRound: 'integer-viewbox',
  css: CSS.leaf,
})
add('frac math-floor backing', 'lab-toCanvas-frac + math-floor-vb + tc-canvas-backing-ceil', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: CSS.fo,
  monkeypatch: 'tc-canvas-backing-ceil',
})
add('frac h2-percent safari-raf', 'lab-toCanvas-frac + h2-percent-vb + tc-decode-safari-raf', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  css: CSS.chrom,
  monkeypatch: 'tc-decode-safari-raf',
})
add('frac math-floor raf MP', 'lab-toCanvas-frac + math-floor-vb + raf-before-draw', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: CSS.h2leaf,
  monkeypatch: 'raf-before-draw',
})

// 059–068: lab-toCanvas-decode + remove-fe / radical + quad CSS (10)
add('decode int-vb remove-fe h2leaf', 'lab-toCanvas-decode + int-vb + remove-fe + H2 leaf', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2leaf,
  radicalPatch: 'remove-fe-filters',
})
add('decode round-dims remove-fe chrom', 'lab-toCanvas-decode + round-dims + remove-fe + Chromium', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'round-dims',
  css: CSS.chrom,
  radicalPatch: 'remove-fe-filters',
})
add('decode int-floor remove-fe h2', 'lab-toCanvas-decode + int-floor + remove-fe + H2 normalize', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'int-floor',
  css: CSS.h2,
  radicalPatch: 'remove-fe-filters',
})
add('decode int-vb h2leaf backing+round', 'lab-toCanvas-decode + int-vb + h2leaf + backing + draw-round', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2leaf,
  monkeypatch: ['tc-canvas-backing-ceil', 'tc-draw-image-round-all'],
})
add('decode round-dims chromLeaf prototype', 'lab-toCanvas-decode + round-dims + chromLeaf + decode prototype', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'round-dims',
  css: CSS.chrom + LEAF,
  monkeypatch: 'decode-interval-prototype',
})
add('decode int-floor h2 math-floor radical', 'lab-toCanvas-decode + int-floor + H2 + math-floor-vb stash', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'int-floor',
  css: CSS.h2,
  radicalPatch: 'math-floor-viewbox-stash-frac',
})
add('decode int-vb h2-percent radical fo', 'lab-toCanvas-decode + int-vb + h2-percent-vb + FO baseline', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
  radicalPatch: 'h2-fo-percent-int-viewbox',
})
add('decode int-vb chromLeaf safari+proto', 'lab-toCanvas-decode + int-vb + chromLeaf + safari RAF + prototype', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.chrom + LEAF,
  monkeypatch: ['tc-decode-safari-raf', 'decode-interval-prototype'],
})
add('decode round-dims h2 remove-fe', 'lab-toCanvas-decode + round-dims + H2 + remove-fe-filters', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'round-dims',
  css: CSS.h2,
  radicalPatch: 'remove-fe-filters',
})
add('decode int-floor bare decode-twice+raf', 'lab-toCanvas-decode + int-floor + decode-twice + raf-before-draw', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'int-floor',
  monkeypatch: ['image-decode-twice', 'raf-before-draw'],
})

// 069–080: cross-fork quad stacks (12)
add('frac h2-percent int-floor h2leaf', 'lab-toCanvas-frac + h2-percent-vb + int-floor + h2leaf', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  svgRootRound: 'int-floor',
  css: CSS.h2leaf,
})
add('frac math-floor int-floor chrom', 'lab-toCanvas-frac + math-floor-vb + int-floor + Chromium', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  svgRootRound: 'int-floor',
  css: CSS.chrom,
})
add('frac h2-percent backing+safari', 'lab-toCanvas-frac + h2-percent-vb + backing + safari RAF', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  css: CSS.h2,
  monkeypatch: ['tc-canvas-backing-ceil', 'tc-decode-safari-raf'],
})
add('frac math-floor int-vb chromLeaf', 'lab-toCanvas-frac + math-floor-vb + int-vb + chromLeaf', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  svgRootRound: 'integer-viewbox',
  css: CSS.chrom + LEAF,
})
add('lab decode-chrom int-vb remove-fe', 'lab-toCanvas-decode + int-vb + chrom + remove-fe', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.chrom,
  radicalPatch: 'remove-fe-filters',
})
add('lab frac math-floor h2leaf backing', 'lab-toCanvas-frac + math-floor-vb + h2leaf + backing ceil', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  css: CSS.h2leaf,
  monkeypatch: 'tc-canvas-backing-ceil',
})
add('decode int-vb fo backing+safari+proto', 'lab-toCanvas-decode + int-vb + FO + backing + safari + prototype', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
  monkeypatch: ['tc-canvas-backing-ceil', 'tc-decode-safari-raf', 'decode-interval-prototype'],
})
add('frac h2-percent int-vb decode-twice', 'lab-toCanvas-frac + h2-percent-vb + int-vb + image-decode-twice', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2,
  monkeypatch: 'image-decode-twice',
})
add('decode int-vb h2leaf draw-round+backing', 'lab-toCanvas-decode + int-vb + h2leaf + draw-round + backing', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2leaf,
  monkeypatch: ['tc-draw-image-round-all', 'tc-canvas-backing-ceil'],
})
add('frac math-floor int-vb h2 backing', 'lab-toCanvas-frac + math-floor-vb + int-vb + H2 + backing', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'math-floor-viewbox-stash-frac',
  svgRootRound: 'integer-viewbox',
  css: CSS.h2,
  monkeypatch: 'tc-canvas-backing-ceil',
})
add('decode round-dims chrom backing+safari', 'lab-toCanvas-decode + round-dims + chrom + backing + safari', {
  rasterPatch: 'lab-toCanvas-decode',
  svgRootRound: 'round-dims',
  css: CSS.chrom,
  monkeypatch: ['tc-canvas-backing-ceil', 'tc-decode-safari-raf'],
})
add('frac h2-percent int-vb raf+backing', 'lab-toCanvas-frac + h2-percent-vb + int-vb + raf + backing', {
  rasterPatch: 'lab-toCanvas-frac',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  svgRootRound: 'integer-viewbox',
  css: CSS.fo,
  monkeypatch: ['raf-before-draw', 'tc-canvas-backing-ceil'],
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-custom-composite.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

