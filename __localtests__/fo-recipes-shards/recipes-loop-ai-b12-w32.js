/**
 * Loop AI batch-12 FO recipe shard (worker 32) — canvas path: product-toCanvas + pin-lh.
 * 40 recipes: loop-ai-b12-w32-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @param {string} decls */
const foFlexRow = (align) =>
  `foreignObject{display:flex!important;flex-direction:row!important;align-items:${align}!important;overflow:visible!important}`

/** @param {string} lh */
const foStarLh = (lh) => `foreignObject *{line-height:${lh}!important}`

/** @param {string} lh */
const textChainLh = (lh) => `${TEXT_CHAIN}{line-height:${lh}!important}`

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
/** @param {Partial<import('../fo-fix-recipes.js').FoFixRecipe> & { slug: string, idea: string, css: string }} spec */
function push(spec) {
  n += 1
  const id = `loop-ai-b12-w32-${String(n).padStart(3, '0')}`
  RECIPES.push({
    id,
    label: `Loop AI b12 w32 #${String(n).padStart(3, '0')}: ${spec.slug}`,
    idea: spec.idea,
    css: spec.css,
    inject: 'both',
    category: 'raster',
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'product-toCanvas',
    active: true,
    notes: 'Loop AI b12 w32; product-toCanvas + pin-lh canvas path — no text bypass.',
    ...spec.extra,
  })
}

// 001–005: baseline stacks on product toCanvas + pin-lh
push({
  slug: 'pin-lh product bare',
  idea: 'product-toCanvas canvas path + pin-lh — no extra FO CSS (harness baseline)',
  css: '',
})
push({
  slug: 'pin-lh product FO baseline',
  idea: 'product-toCanvas + pin-lh + FO_BASELINE_CSS — structural overflow/size-adjust only',
  css: FO_BASELINE_CSS,
})
push({
  slug: 'pin-lh product baseline leaf',
  idea: 'product-toCanvas + pin-lh + baseline + TEXT_LEAF min-width flex probe',
  css: FO_BASELINE_CSS + TEXT_LEAF,
})
push({
  slug: 'pin-lh product chromium copy',
  idea: 'product-toCanvas + pin-lh + Chromium font-kerning/size-adjust copy block',
  css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM_COPY,
})
push({
  slug: 'pin-lh product leaf min-height',
  idea: 'product-toCanvas + pin-lh + TEXT_LEAF + min-height:0 on FO * — flex/grid strut probe',
  css:
    FO_BASELINE_CSS +
    TEXT_LEAF +
    'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}',
})

// 006–012: flex cross-axis rows (pin-lh pins live lh; flex probes FO layout)
const flexAligns = [
  ['baseline', 'FO flex baseline row'],
  ['center', 'FO flex center row'],
  ['flex-start', 'FO flex flex-start row'],
  ['flex-end', 'FO flex flex-end row'],
  ['stretch', 'FO flex stretch row'],
  ['space-between', 'FO flex space-between row'],
  ['safe center', 'FO flex safe center row'],
]
for (const [align, idea] of flexAligns) {
  push({
    slug: `pin-lh product flex ${align.replace(/\s+/g, '-')}`,
    idea: `${idea} — product-toCanvas + pin-lh canvas path`,
    css: FO_BASELINE_CSS + TEXT_LEAF + foFlexRow(align),
  })
}

// 013–020: line-height keyword matrix on FO * (interaction with pin-lh from live)
const lhKeywords = [
  ['normal', 'line-height:normal on FO *'],
  ['from-font', 'line-height:from-font on FO *'],
  ['unset', 'line-height:unset on FO *'],
  ['1', 'line-height:1 on FO *'],
  ['inherit', 'line-height:inherit on FO *'],
  ['revert', 'line-height:revert on FO *'],
  ['initial', 'line-height:initial on FO *'],
  ['revert-layer', 'line-height:revert-layer on FO *'],
]
for (const [lh, idea] of lhKeywords) {
  push({
    slug: `pin-lh product star lh ${lh}`,
    idea: `${idea} — product-toCanvas + pin-lh canvas path`,
    css: FO_BASELINE_CSS + TEXT_LEAF + foStarLh(lh),
  })
}

// 021–026: text chain + nav scoped line-height (pin-lh still from live h2)
const scopedLh = [
  [textChainLh('normal'), 'text chain line-height:normal'],
  [textChainLh('from-font'), 'text chain line-height:from-font'],
  ['foreignObject nav a{line-height:normal!important;display:inline!important}', 'nav a line-height:normal'],
  ['foreignObject h2{line-height:normal!important}', 'h2 line-height:normal'],
  ['foreignObject span{line-height:from-font!important;display:inline!important}', 'span line-height:from-font'],
  [
    'foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:inherit!important}',
    'FO>div normal + FO>div * inherit',
  ],
]
for (const [cssExtra, idea] of scopedLh) {
  push({
    slug: `pin-lh product ${idea.split(' ').slice(0, 3).join(' ')}`,
    idea: `${idea} — product-toCanvas + pin-lh canvas path`,
    css: FO_BASELINE_CSS + TEXT_LEAF + cssExtra,
  })
}

// 027–030: svg root round / markup with product toCanvas + pin-lh
push({
  slug: 'pin-lh product int viewbox',
  idea: 'integer-viewbox svg root round + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM_COPY,
  extra: { svgRootRound: 'integer-viewbox' },
})
push({
  slug: 'pin-lh product int vb flex baseline',
  idea: 'integer-viewbox + flex baseline row + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + foFlexRow('baseline') + CHROMIUM_COPY,
  extra: { svgRootRound: 'integer-viewbox' },
})
push({
  slug: 'pin-lh product strip transforms',
  idea: 'strip-all-transforms markup + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF,
  extra: { svgMarkupPatch: 'strip-all-transforms' },
})
push({
  slug: 'pin-lh product explicit xmlns',
  idea: 'explicit-xmlns-strip-transforms + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM_COPY,
  extra: { svgMarkupPatch: 'explicit-xmlns-strip-transforms' },
})

// 031–034: font-kerning / synthesis probes under product canvas path
push({
  slug: 'pin-lh product kerning none',
  idea: 'font-kerning:none on FO * + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-kerning:none!important}',
})
push({
  slug: 'pin-lh product kerning auto',
  idea: 'font-kerning:auto on FO root + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-kerning:auto!important}',
})
push({
  slug: 'pin-lh product synthesis weight',
  idea: 'font-synthesis:weight on FO * + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis:weight!important}',
})
push({
  slug: 'pin-lh product synthesis none star',
  idea: 'font-synthesis:none on FO * + chromium root + product-toCanvas + pin-lh',
  css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM_COPY + 'foreignObject *{font-synthesis:none!important}',
})

// 035–037: text-rendering under product toCanvas + pin-lh
for (const tr of ['geometricPrecision', 'optimizeLegibility', 'optimizeSpeed']) {
  push({
    slug: `pin-lh product text-rendering ${tr}`,
    idea: `text-rendering:${tr} on FO * — product-toCanvas + pin-lh canvas path`,
    css: FO_BASELINE_CSS + TEXT_LEAF + `foreignObject *{text-rendering:${tr}!important}`,
  })
}

// 038–040: final pin-lh + product toCanvas layout combos
push({
  slug: 'pin-lh product align-self center',
  idea: 'align-self:center on FO * + flex stretch row — product-toCanvas + pin-lh',
  css:
    FO_BASELINE_CSS +
    TEXT_LEAF +
    foFlexRow('stretch') +
    'foreignObject *{align-self:center!important}',
})
push({
  slug: 'pin-lh product contain layout',
  idea: 'contain:layout on FO root + int viewBox — product-toCanvas + pin-lh canvas path',
  css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{contain:layout!important;overflow:visible!important}',
  extra: { svgRootRound: 'integer-viewbox' },
})
push({
  slug: 'pin-lh product inline-flex baseline nav',
  idea: 'inline-flex baseline nav row + nav a lh normal + product-toCanvas + pin-lh',
  css:
    FO_BASELINE_CSS +
    TEXT_LEAF +
    'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important}' +
    'foreignObject nav a{line-height:normal!important;display:inline!important}',
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w32: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
