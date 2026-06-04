/**
 * Loop AI batch-12 FO recipe shard (worker 36) — text-fix: text-wrap nowrap × white-space normal (nav ink).
 * 40 recipes: loop-ai-b12-w36-001..040 (8 reconcile strategies × 5 FO scopes)
 * Hypothesis: text-wrap:nowrap + white-space:normal in FO subtree hides nav label ink — reconcile axes.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const FO_DIV_NORMAL = 'foreignObject>div{line-height:normal!important;min-height:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {{ key: string, label: string, css: (decl: string) => string }[]} */
const SCOPES = [
  { key: 'star', label: 'FO *', css: (d) => `foreignObject *{${d}}` },
  { key: 'anchor', label: 'FO a', css: (d) => `foreignObject a{${d};display:inline!important}` },
  { key: 'nav-a', label: 'FO nav a', css: (d) => `foreignObject nav a{${d};display:inline!important}` },
  { key: 'text-chain', label: 'text chain', css: (d) => `${TEXT_CHAIN}{${d}}` },
  { key: 'div-a', label: 'FO>div a', css: (d) => `foreignObject>div a{${d};display:inline-block!important}` },
]

/** @type {{ key: string, slug: string, idea: string, decl: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const STRATEGIES = [
  {
    key: 'mismatch',
    slug: 'mismatch repro',
    idea: 'text-wrap:nowrap + white-space:normal — FO wrap-axis conflict repro (nav ink may vanish)',
    decl: 'text-wrap:nowrap!important;white-space:normal!important',
  },
  {
    key: 'sync-nowrap',
    slug: 'sync nowrap both axes',
    idea: 'text-wrap:nowrap + white-space:nowrap — align modern/legacy single-line axes',
    decl: 'text-wrap:nowrap!important;white-space:nowrap!important',
  },
  {
    key: 'sync-wrap',
    slug: 'sync wrap + ws normal',
    idea: 'text-wrap:wrap + white-space:normal — align wrap axes when author leaves ws normal',
    decl: 'text-wrap:wrap!important;white-space:normal!important;text-wrap-style:auto!important',
  },
  {
    key: 'mode-nowrap',
    slug: 'text-wrap-mode nowrap',
    idea: 'text-wrap-mode:nowrap + text-wrap-style:auto + white-space:nowrap — longhand nowrap stack',
    decl:
      'text-wrap-mode:nowrap!important;text-wrap-style:auto!important;white-space:nowrap!important',
  },
  {
    key: 'style-auto-wrap',
    slug: 'style auto + wrap',
    idea: 'text-wrap-style:auto + text-wrap:wrap + white-space:normal — reset style then explicit wrap',
    decl: 'text-wrap-style:auto!important;text-wrap:wrap!important;white-space:normal!important',
  },
  {
    key: 'nowrap-visible',
    slug: 'nowrap overflow visible',
    idea: 'sync nowrap + overflow:visible + opacity:1 — clip/overflow hiding after axis mismatch',
    decl:
      'text-wrap:nowrap!important;white-space:nowrap!important;overflow:visible!important;opacity:1!important;visibility:visible!important',
  },
  {
    key: 'nowrap-max-content',
    slug: 'nowrap max-content inline',
    idea: 'sync nowrap + inline-size:max-content — intrinsic width strut when ws normal collapsed ink',
    decl:
      'text-wrap:nowrap!important;white-space:nowrap!important;inline-size:max-content!important;width:auto!important;display:inline-block!important',
  },
  {
    key: 'webkit-nowrap',
    slug: '-webkit-text-wrap nowrap',
    idea: '-webkit-text-wrap:nowrap + white-space:nowrap — WebKit longhand vs text-wrap shorthand drift',
    decl:
      'text-wrap:nowrap!important;-webkit-text-wrap:nowrap!important;white-space:nowrap!important',
  },
]

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const strat of STRATEGIES) {
  for (const scope of SCOPES) {
    n += 1
    SPECS.push({
      n,
      slug: `${strat.slug} ${scope.label}`,
      idea: `${strat.idea}; scoped ${scope.label}`,
      css: scope.css(strat.decl),
    })
  }
}

// Chromium / FO>div / nav-flex overlays on highest-signal scopes (replace last 8 pad slots — keep 40 total)
const OVERLAY_REPLACEMENTS = [
  {
    n: 33,
    slug: 'sync nowrap nav flex',
    idea: 'FO nav flex row + sync nowrap on nav a — flex nav single-line after axis reconcile',
    css:
      FO_DIV_NORMAL +
      TEXT_LEAF +
      'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' +
      'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;flex:0 0 auto!important}',
  },
  {
    n: 34,
    slug: 'mismatch nav flex repro',
    idea: 'FO nav flex + mismatch nowrap/normal on nav a only — scoped invisible-label repro',
    css:
      FO_DIV_NORMAL +
      TEXT_LEAF +
      'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' +
      'foreignObject nav a{text-wrap:nowrap!important;white-space:normal!important}',
  },
  {
    n: 35,
    slug: 'sync nowrap chromium nav a',
    idea: 'Chromium FO copy + sync nowrap on FO nav a — kerning + single-line nav anchors',
    css:
      CHROMIUM +
      TEXT_LEAF +
      'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;hyphens:none!important}',
  },
  {
    n: 36,
    slug: 'mismatch chromium star',
    idea: 'Chromium copy + mismatch nowrap/normal on FO * — root-level wrap conflict with kerning',
    css:
      CHROMIUM +
      TEXT_LEAF +
      'foreignObject *{text-wrap:nowrap!important;white-space:normal!important}',
  },
  {
    n: 37,
    slug: 'sync wrap FO div normal star',
    idea: 'FO>div normal lh + text-wrap:wrap + white-space:normal on FO * — wrapper strut + wrap reconcile',
    css:
      FO_DIV_NORMAL +
      TEXT_LEAF +
      'foreignObject *{text-wrap:wrap!important;white-space:normal!important;text-wrap-style:auto!important}',
  },
  {
    n: 38,
    slug: 'pin lh sync nowrap nav a',
    idea: 'h2-pin-line-height-from-live + sync nowrap on FO nav a — strut pin + single-line nav',
    css: TEXT_LEAF + 'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important}',
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 39,
    slug: 'pin width sync nowrap nav a',
    idea: 'h2-pin-width-from-live + sync nowrap on FO nav a — GBCR width pin + nowrap reconcile',
    css:
      TEXT_LEAF +
      'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;display:inline-block!important}',
    extra: { inject: 'both', radicalPatch: 'h2-pin-width-from-live' },
  },
  {
    n: 40,
    slug: 'pin lh mismatch nav a decode',
    idea: 'h2-pin-line-height-from-live + mismatch on nav a + decode-interval — timing vs wrap conflict',
    css: TEXT_LEAF + 'foreignObject nav a{text-wrap:nowrap!important;white-space:normal!important}',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
      rasterPatch: 'decode-interval',
    },
  },
]

for (const rep of OVERLAY_REPLACEMENTS) {
  const idx = SPECS.findIndex((s) => s.n === rep.n)
  if (idx === -1) throw new Error(`b12-w36: missing spec slot ${rep.n}`)
  SPECS[idx] = rep
}

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w36.js: expected 40 specs, got ${SPECS.length}`)
}

const pairKeys = new Set()
for (const s of SPECS) {
  const key = `${s.slug}|${s.n}`
  if (pairKeys.has(key)) throw new Error(`b12-w36: duplicate ${key}`)
  pairKeys.add(key)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b12-w36-${num}`,
    label: `Loop AI b12 w36 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + css,
    inject,
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w36; text-wrap nowrap × white-space normal nav ink; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
