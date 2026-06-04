/**
 * Loop AI batch-12 FO recipe shard (worker 28) — text-fix: inline-block + vertical-align:middle
 * on FO anchors with layout-preserving invisibility (visibility/opacity/transparent ink probes).
 * 40 recipes: loop-ai-b12-w28-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const NAV_FLEX =
  'foreignObject nav{display:flex!important;flex-direction:row!important;' +
  'align-items:stretch!important;gap:0!important;overflow:visible!important}'

const FO_STRETCH =
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  'align-items:stretch!important;overflow:visible!important}'

const FO_CENTER =
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  'align-items:center!important;overflow:visible!important}'

/** @param {string} invDecl */
function anchorMiddleInvisible(invDecl) {
  return (
    'foreignObject a{display:inline-block!important;vertical-align:middle!important;' +
    'box-sizing:border-box!important;min-width:0!important;' +
    invDecl +
    '}'
  )
}

/** @type {{ slug: string, idea: string, css: string }[]} */
const INVISIBLE = [
  {
    slug: 'vis hidden',
    idea: 'visibility:hidden on FO a — middle inline-block strut with no painted ink',
    inv: 'visibility:hidden!important',
  },
  {
    slug: 'vis collapse',
    idea: 'visibility:collapse on FO a — collapsed inline strut vs middle valign box',
    inv: 'visibility:collapse!important',
  },
  {
    slug: 'opacity 0',
    idea: 'opacity:0 on FO a — zero-alpha anchor text in middle inline-block box',
    inv: 'opacity:0!important',
  },
  {
    slug: 'opacity 0.001',
    idea: 'opacity:0.001 on FO a — sub-unity alpha FO raster vs middle valign strut',
    inv: 'opacity:0.001!important',
  },
  {
    slug: 'color transparent',
    idea: 'color:transparent on FO a — transparent glyph ink, layout box retained',
    inv: 'color:transparent!important',
  },
  {
    slug: 'fill transparent',
    idea: '-webkit-text-fill-color:transparent on FO a — Chromium fill vs middle strut',
    inv: 'color:transparent!important;-webkit-text-fill-color:transparent!important',
  },
  {
    slug: 'clip inset',
    idea: 'clip-path:inset(100%) on FO a — clipped ink with middle inline-block metrics',
    inv: 'clip-path:inset(100%)!important',
  },
  {
    slug: 'filter opacity 0',
    idea: 'filter:opacity(0) on FO a — filtered invisible anchor in middle inline-block',
    inv: 'filter:opacity(0)!important',
  },
]

/** @type {{ slug: string, prefix: string, idea: string }[]} */
const CONTEXTS = [
  {
    slug: 'plain a',
    prefix: '',
    idea: 'inline-block middle invisible FO a — baseline nav anchor strut probe',
  },
  {
    slug: 'nav stretch',
    prefix: NAV_FLEX,
    idea: 'nav flex stretch row + middle invisible FO nav a — mini-nav cross-axis',
  },
  {
    slug: 'align-self stretch',
    prefix: '',
    idea: 'align-self:stretch + middle invisible FO a — flex item cross-axis stretch',
  },
  {
    slug: 'FO flex stretch',
    prefix: FO_STRETCH,
    idea: 'FO flex stretch row + middle invisible FO a — root flex cross-axis context',
  },
  {
    slug: 'FO flex center',
    prefix: FO_CENTER,
    idea: 'FO flex center row + middle invisible FO a — centered cross-axis vs strut',
  },
]

/** @type {{ n: number, slug: string, idea: string, css: string }[]} */
const SPECS = []
let n = 0
for (const inv of INVISIBLE) {
  for (const ctx of CONTEXTS) {
    n += 1
    let rule = anchorMiddleInvisible(inv.inv)
    if (ctx.slug === 'align-self stretch') {
      rule = rule.replace(
        'foreignObject a{',
        'foreignObject a{align-self:stretch!important;',
      )
    }
    const css = ctx.prefix + rule
    SPECS.push({
      n,
      slug: `${ctx.slug} ${inv.slug}`,
      idea: `${ctx.idea}; ${inv.idea}`,
      css,
    })
  }
}

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w28: expected 40 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n: num, slug, idea, css }) => {
  const idNum = String(num).padStart(3, '0')
  return {
    id: `loop-ai-b12-w28-${idNum}`,
    label: `Loop AI b12 w28 #${idNum}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w28; inline-block vertical-align middle on invisible FO anchors — no text bypass.',
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
