/**
 * Loop AI batch-12 FO recipe shard (worker 38) — text-fix: capstone triple pin-lh+stretch+width.
 * PRIMARY: radicalPatch h2-pin-lh-stretch-width-from-live × 40 unique (scope, invisible knob) pairs
 * 40 recipes: loop-ai-b12-w38-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PATCH = 'h2-pin-lh-stretch-width-from-live'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {{ key: string, label: string, css: (inv: string) => string }[]} */
const SCOPES = [
  { key: 'star', label: 'FO *', css: (inv) => `foreignObject *{${inv}}` },
  {
    key: 'anchor',
    label: 'FO a',
    css: (inv) => `foreignObject a{${inv};text-decoration:none!important}`,
  },
  {
    key: 'nav-a',
    label: 'FO nav a',
    css: (inv) => `foreignObject nav a{${inv};text-decoration:none!important}`,
  },
  { key: 'text-chain', label: 'text chain', css: (inv) => `${TEXT_CHAIN}{${inv}}` },
  {
    key: 'div-a',
    label: 'FO>div a',
    css: (inv) => `foreignObject>div a{${inv};text-decoration:none!important}`,
  },
]

/** @type {{ slug: string, idea: string, inv: string }[]} */
const INVISIBLE = [
  {
    slug: 'vis hidden',
    idea: 'visibility:hidden — layout box retained, no painted ink',
    inv: 'visibility:hidden!important',
  },
  {
    slug: 'vis collapse',
    idea: 'visibility:collapse — collapsed strut vs triple pin stack',
    inv: 'visibility:collapse!important',
  },
  {
    slug: 'opacity 0',
    idea: 'opacity:0 — zero-alpha text with live pin stack',
    inv: 'opacity:0!important',
  },
  {
    slug: 'color transparent',
    idea: 'color:transparent — transparent glyph ink, metrics kept',
    inv: 'color:transparent!important',
  },
  {
    slug: 'fill transparent',
    idea: '-webkit-text-fill-color:transparent — Chromium fill invisible probe',
    inv: 'color:transparent!important;-webkit-text-fill-color:transparent!important',
  },
  {
    slug: 'clip inset',
    idea: 'clip-path:inset(100%) — clipped ink with pin-lh+stretch+width',
    inv: 'clip-path:inset(100%)!important',
  },
  {
    slug: 'filter opacity 0',
    idea: 'filter:opacity(0) — filtered invisible text leaf',
    inv: 'filter:opacity(0)!important',
  },
  {
    slug: 'outline transparent',
    idea: 'outline transparent 0 — invisible box extension, no visible outline',
    inv:
      'outline-style:solid!important;outline-width:0!important;outline-color:transparent!important',
  },
]

/** @type {{ n: number, slug: string, idea: string, css: string }[]} */
const SPECS = []
let n = 0
for (const inv of INVISIBLE) {
  for (const scope of SCOPES) {
    n += 1
    SPECS.push({
      n,
      slug: `${scope.label} ${inv.slug}`,
      idea: `h2-pin-lh-stretch-width-from-live + ${inv.idea}; scoped ${scope.label}`,
      css: scope.css(inv.inv),
    })
  }
}

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w38: expected 40 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n: num, slug, idea, css }) => {
  const idNum = String(num).padStart(3, '0')
  return {
    id: `loop-ai-b12-w38-${idNum}`,
    label: `Loop AI b12 w38 #${idNum}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w38; capstone pin-lh+stretch+width triple + one invisible knob — no text bypass.',
    radicalPatch: PATCH,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
