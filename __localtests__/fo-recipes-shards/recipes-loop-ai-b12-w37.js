/**
 * Loop AI batch-12 FO recipe shard (worker 37) — text-fix: letter-spacing / word-spacing
 * normal reset + invisible outline probes (transparent 0-width box extension).
 * 40 recipes: loop-ai-b12-w37-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const SPACING_NORMAL =
  'letter-spacing:normal!important;word-spacing:normal!important'

const INVISIBLE_OUTLINE =
  'outline-style:solid!important;outline-width:0!important;outline-color:transparent!important'

/** @param {string} decls */
const foStar = (decls) => `foreignObject *{${decls}}`

/** @param {string} sel @param {string} decls */
const foSel = (sel, decls) => `${sel}{${decls}}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'ls ws normal star',
    idea: 'letter-spacing:normal + word-spacing:normal on FO * — dual spacing reset before FO raster',
    css: foStar(SPACING_NORMAL),
  },
  {
    n: 2,
    slug: 'ls ws normal invisible star',
    idea: 'dual spacing normal + invisible outline on FO * — reset tracking without visible outline ink',
    css: foStar(`${SPACING_NORMAL};${INVISIBLE_OUTLINE}`),
  },
  {
    n: 3,
    slug: 'ls normal ws 0 star',
    idea: 'letter-spacing:normal + word-spacing:0 on FO * — inter-word zero vs tracking normal',
    css: foStar('letter-spacing:normal!important;word-spacing:0!important'),
  },
  {
    n: 4,
    slug: 'ls 0 ws normal star',
    idea: 'letter-spacing:0 + word-spacing:normal on FO * — zero tracking vs normal inter-word',
    css: foStar('letter-spacing:0!important;word-spacing:normal!important'),
  },
  {
    n: 5,
    slug: 'ls initial ws normal star',
    idea: 'letter-spacing:initial + word-spacing:normal on FO * — initial tracking cascade reset',
    css: foStar('letter-spacing:initial!important;word-spacing:normal!important'),
  },
  {
    n: 6,
    slug: 'ls unset ws normal star',
    idea: 'letter-spacing:unset + word-spacing:normal on FO * — unset inherited em tracking',
    css: foStar('letter-spacing:unset!important;word-spacing:normal!important'),
  },
  {
    n: 7,
    slug: 'ls revert ws normal star',
    idea: 'letter-spacing:revert + word-spacing:normal on FO * — UA revert tracking vs author em',
    css: foStar('letter-spacing:revert!important;word-spacing:normal!important'),
  },
  {
    n: 8,
    slug: 'ls inherit ws normal star',
    idea: 'letter-spacing:inherit + word-spacing:normal on FO * — inherit FO root tracking',
    css: foStar('letter-spacing:inherit!important;word-spacing:normal!important'),
  },
  {
    n: 9,
    slug: 'ls normal ws initial star',
    idea: 'letter-spacing:normal + word-spacing:initial on FO * — initial inter-word cascade',
    css: foStar('letter-spacing:normal!important;word-spacing:initial!important'),
  },
  {
    n: 10,
    slug: 'ls normal ws revert-layer star',
    idea: 'letter-spacing:normal + word-spacing:revert-layer on FO * — layer revert inter-word',
    css: foStar('letter-spacing:normal!important;word-spacing:revert-layer!important'),
  },
  {
    n: 11,
    slug: 'ws normal ls normal invisible',
    idea: 'word-spacing:normal + letter-spacing:normal + invisible outline — symmetric reset probe',
    css: foStar(`${SPACING_NORMAL};${INVISIBLE_OUTLINE}`),
  },
  {
    n: 12,
    slug: 'ws 0 ls normal invisible',
    idea: 'word-spacing:0 + letter-spacing:normal + invisible outline — zero inter-word band',
    css: foStar('word-spacing:0!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 13,
    slug: 'ws initial ls normal invisible',
    idea: 'word-spacing:initial + letter-spacing:normal + invisible outline — initial ws cascade',
    css: foStar('word-spacing:initial!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 14,
    slug: 'ws unset ls normal invisible',
    idea: 'word-spacing:unset + letter-spacing:normal + invisible outline — unset author ws',
    css: foStar('word-spacing:unset!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 15,
    slug: 'ws revert ls normal invisible',
    idea: 'word-spacing:revert + letter-spacing:normal + invisible outline — UA revert inter-word',
    css: foStar('word-spacing:revert!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 16,
    slug: 'ws inherit ls normal invisible',
    idea: 'word-spacing:inherit + letter-spacing:normal + invisible outline — inherit root ws',
    css: foStar('word-spacing:inherit!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 17,
    slug: 'ws revert-layer ls normal invisible',
    idea: 'word-spacing:revert-layer + letter-spacing:normal + invisible outline — layer revert ws',
    css: foStar('word-spacing:revert-layer!important;letter-spacing:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 18,
    slug: 'dual normal nowrap invisible',
    idea: 'dual spacing normal + nowrap + invisible outline — nav-like single line reset',
    css: foStar(
      SPACING_NORMAL +
        ';white-space:nowrap!important;text-wrap:nowrap!important;' +
        INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 19,
    slug: 'dual normal kerning invisible',
    idea: 'dual spacing normal + font-kerning:normal + invisible outline — Chromium kerning copy',
    css:
      'foreignObject{font-kerning:normal!important}' +
      foStar(SPACING_NORMAL + ';font-kerning:normal!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 20,
    slug: 'dual normal geometric invisible',
    idea: 'dual spacing normal + text-rendering:geometricPrecision + invisible outline',
    css: foStar(
      SPACING_NORMAL +
        ';text-rendering:geometricPrecision!important;' +
        INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 21,
    slug: 'FO root dual normal',
    idea: 'letter-spacing:normal + word-spacing:normal on FO root — root tracking reset',
    css: foSel('foreignObject', SPACING_NORMAL),
  },
  {
    n: 22,
    slug: 'FO div normal div star inherit',
    idea: 'FO>div dual normal + div* inherit — wrapper reset vs inherited spacing',
    css:
      foSel('foreignObject>div', SPACING_NORMAL) +
      foSel('foreignObject>div *', 'letter-spacing:inherit!important;word-spacing:inherit!important'),
  },
  {
    n: 23,
    slug: 'anchor dual normal nowrap',
    idea: 'dual spacing normal on FO a + nowrap — anchor tracking/inter-word reset',
    css: foSel(
      'foreignObject a',
      SPACING_NORMAL +
        ';white-space:nowrap!important;text-wrap:nowrap!important;display:inline!important;vertical-align:baseline!important',
    ),
  },
  {
    n: 24,
    slug: 'span dual normal inline',
    idea: 'dual spacing normal on FO span inline — inline text spacing reset',
    css: foSel(
      'foreignObject span',
      SPACING_NORMAL + ';display:inline!important;vertical-align:baseline!important',
    ),
  },
  {
    n: 25,
    slug: 'label dual normal invisible',
    idea: 'dual spacing normal + invisible outline on FO label — form label reset',
    css: foSel('foreignObject label', SPACING_NORMAL + ';' + INVISIBLE_OUTLINE),
  },
  {
    n: 26,
    slug: 'nav-a dual normal invisible',
    idea: 'dual spacing normal + invisible outline on FO nav a — nav link spacing reset',
    css: foSel(
      'foreignObject nav a',
      SPACING_NORMAL +
        ';display:inline!important;white-space:nowrap!important;' +
        INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 27,
    slug: 'h2 dual normal invisible',
    idea: 'dual spacing normal + invisible outline on FO h2 — heading spacing reset',
    css: foSel(
      'foreignObject h2',
      SPACING_NORMAL + ';display:inline!important;' + INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 28,
    slug: 'strong dual normal',
    idea: 'dual spacing normal on FO strong — emphasis inline spacing reset',
    css: foSel(
      'foreignObject strong',
      SPACING_NORMAL + ';font-weight:inherit!important;display:inline!important',
    ),
  },
  {
    n: 29,
    slug: 'FO root -0.02em star dual normal',
    idea: 'FO root -0.02em + * dual spacing normal — negative root em vs leaf reset',
    css:
      'foreignObject{letter-spacing:-0.02em!important;word-spacing:0.02em!important}' +
      foStar(SPACING_NORMAL),
  },
  {
    n: 30,
    slug: 'FO root 0.02em star dual normal invisible',
    idea: 'FO root 0.02em + * dual normal + invisible outline — positive root vs leaf reset',
    css:
      'foreignObject{letter-spacing:0.02em!important;word-spacing:-0.01em!important}' +
      foStar(SPACING_NORMAL + ';' + INVISIBLE_OUTLINE),
  },
  {
    n: 31,
    slug: 'dual normal pre-wrap invisible',
    idea: 'dual spacing normal + pre-wrap + invisible outline — preserved runs vs nowrap',
    css: foStar(SPACING_NORMAL + ';white-space:pre-wrap!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 32,
    slug: 'dual normal balance invisible',
    idea: 'dual spacing normal + text-wrap:balance + invisible outline',
    css: foStar(SPACING_NORMAL + ';text-wrap:balance!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 33,
    slug: 'dual normal display inline invisible',
    idea: 'dual spacing normal + display:inline + invisible outline — inline box model',
    css: foStar(SPACING_NORMAL + ';display:inline!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 34,
    slug: 'dual normal flex row invisible',
    idea: 'FO flex row + * dual normal + invisible outline — row baseline spacing reset',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' +
      foStar(SPACING_NORMAL + ';' + INVISIBLE_OUTLINE),
  },
  {
    n: 35,
    slug: 'dual normal trim space-all invisible',
    idea: 'text-spacing-trim:space-all + dual normal + invisible outline',
    css: foStar(
      'text-spacing-trim:space-all!important;' + SPACING_NORMAL + ';' + INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 36,
    slug: 'dual normal transform none invisible',
    idea: 'dual spacing normal + text-transform:none + invisible outline',
    css: foStar(SPACING_NORMAL + ';text-transform:none!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 37,
    slug: 'dual normal border transparent invisible',
    idea: 'dual spacing normal + transparent 0 border + invisible outline — no border ink',
    css: foStar(
      SPACING_NORMAL +
        ';border-style:solid!important;border-width:0!important;border-color:transparent!important;' +
        INVISIBLE_OUTLINE,
    ),
  },
  {
    n: 38,
    slug: 'dual normal shadow none invisible',
    idea: 'dual spacing normal + box-shadow:none + invisible outline',
    css: foStar(SPACING_NORMAL + ';box-shadow:none!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 39,
    slug: 'dual normal x-pad 37 invisible',
    idea: 'dual spacing normal + --x-pad:37 + invisible outline — worker pad token probe',
    css: foStar(SPACING_NORMAL + ';--x-pad:37!important;' + INVISIBLE_OUTLINE),
  },
  {
    n: 40,
    slug: 'pin lh dual normal invisible',
    idea: 'h2-pin-line-height-from-live + dual spacing normal + invisible outline on FO *',
    css: foStar(SPACING_NORMAL + ';' + INVISIBLE_OUTLINE),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w37: expected 40 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b12-w37-${num}`,
    label: `Loop AI b12 w37 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w37; letter-spacing/word-spacing normal reset + invisible outline; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
