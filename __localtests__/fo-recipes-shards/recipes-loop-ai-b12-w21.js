/**
 * Loop AI batch-12 FO recipe shard (worker 21) — text-fix: line-height calc(1em) + unitless lh.
 * 40 recipes: loop-ai-b12-w21-001..040 (24 calc × 4 selectors + 16 unitless × 4 selectors).
 * Invisible structural only — no text-emphasis, writing-mode, or visible nav distortion.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** @type {{ slug: string, sel: string, extra: string, lh: string, kind: 'calc' | 'unitless' }[]} */
const CALCS = [
  { slug: 'calc-1em', lh: 'calc(1em)', kind: 'calc' },
  { slug: 'calc-1em-0px', lh: 'calc(1em + 0px)', kind: 'calc' },
  { slug: 'calc-1em-mul', lh: 'calc(1em * 1)', kind: 'calc' },
  { slug: 'calc-1em-div', lh: 'calc(1em / 1)', kind: 'calc' },
  { slug: 'calc-1em-0lh', lh: 'calc(1em + 0lh)', kind: 'calc' },
  { slug: 'calc-1_2em', lh: 'calc(1.2em)', kind: 'calc' },
]

/** @type {{ slug: string, lh: string }[]} */
const UNITLESS = [
  { slug: 'lh-1', lh: '1' },
  { slug: 'lh-1_15', lh: '1.15' },
  { slug: 'lh-1_2', lh: '1.2' },
  { slug: 'lh-1-nav', lh: '1' },
]

/** @type {{ slug: string, sel: string, display: string }[]} */
const SELECTORS = [
  { slug: 'FO-star', sel: 'foreignObject *', display: '' },
  { slug: 'FO-div-star', sel: 'foreignObject>div *', display: '' },
  { slug: 'FO-anchors', sel: 'foreignObject a', display: 'display:inline-block!important;' },
  { slug: 'FO-span', sel: 'foreignObject span', display: 'display:inline!important;' },
]

/** @type {{ slug: string, decl: string, prefix?: string }[]} */
const INVISIBLE = [
  { slug: 'baseline', decl: 'vertical-align:baseline!important' },
  { slug: 'trim-both-edges', decl: 'vertical-align:baseline!important;leading-trim:both-edges!important' },
  { slug: 'trim-both', decl: 'vertical-align:baseline!important;text-box-trim:trim-both!important' },
  {
    slug: 'chromium-baseline',
    decl: 'vertical-align:baseline!important',
    prefix: CHROMIUM_COPY,
  },
]

/** @param {string} sel @param {string} lh @param {string} display @param {string} inv @param {string} [prefix] */
function rule(sel, lh, display, inv, prefix = '') {
  return `${prefix}${sel}{line-height:${lh}!important;${display}${inv}}`
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0

/** @param {string} suffix */
function nextId(suffix = '') {
  n += 1
  return `loop-ai-b12-w21-${String(n).padStart(3, '0')}${suffix}`
}

for (const { slug: calcSlug, lh } of CALCS) {
  for (const { slug: selSlug, sel, display } of SELECTORS) {
    const invMeta = INVISIBLE[n % INVISIBLE.length]
    RECIPES.push({
      id: nextId(),
      label: `Loop AI b12 w21 #${String(n).padStart(3, '0')}: ${calcSlug} ${selSlug} ${invMeta.slug}`,
      idea: `line-height:${lh} on ${selSlug} + ${invMeta.slug} — calc(1em) strut vs FO decode (invisible)`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        rule(sel, lh, display, invMeta.decl, invMeta.prefix ?? ''),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w21; ${calcSlug}×${selSlug}×${invMeta.slug}; calc/unitless lh invisible — no text bypass.`,
    })
  }
}

for (const { slug: lhSlug, lh } of UNITLESS) {
  for (const { slug: selSlug, sel, display } of SELECTORS) {
    const invMeta = INVISIBLE[n % INVISIBLE.length]
    RECIPES.push({
      id: nextId(),
      label: `Loop AI b12 w21 #${String(n).padStart(3, '0')}: unitless ${lhSlug} ${selSlug} ${invMeta.slug}`,
      idea: `line-height:${lh} unitless on ${selSlug} + ${invMeta.slug} — unitless strut vs calc em lh (invisible)`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        rule(sel, lh, display, invMeta.decl, invMeta.prefix ?? ''),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w21; unitless-${lhSlug}×${selSlug}×${invMeta.slug}; calc/unitless lh invisible — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w21: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
