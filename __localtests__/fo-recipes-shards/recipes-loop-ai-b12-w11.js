/**
 * Loop AI batch-12 FO recipe shard (worker 11) — canvas-side: product-toCanvas raster probes.
 * 40 recipes: loop-ai-b12-w11-001..040
 * CSS: FO_BASELINE only. Vary svg root round, SVG markup patch, snapdom harness opts.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ key: string, label: string, idea: string, svgRootRound?: import('../fo-fix-recipe-shared.js').FoFixSvgRootRound }} */
const ROOT_ROUND = [
  {
    key: 'baseline-root',
    label: 'baseline svg root',
    idea: 'product-toCanvas on capture SVG with unrounded root dims/viewBox',
  },
  {
    key: 'int-viewbox',
    label: 'integer viewBox',
    idea: 'integer-viewbox snap on SVG root before product toCanvas draw',
    svgRootRound: 'integer-viewbox',
  },
  {
    key: 'int-floor',
    label: 'int-floor root dims',
    idea: 'int-floor width/height on SVG root before product toCanvas draw',
    svgRootRound: 'int-floor',
  },
  {
    key: 'round-dims',
    label: 'round-dims root',
    idea: 'round-dims on SVG root before product toCanvas draw',
    svgRootRound: 'round-dims',
  },
]

/** @type {{ key: string, label: string, idea: string, svgMarkupPatch?: import('../fo-fix-recipe-shared.js').FoFixSvgMarkupPatch }} */
const MARKUP_PATCH = [
  {
    key: 'markup-none',
    label: 'markup baseline',
    idea: 'serialized capture SVG unchanged before product toCanvas decode',
  },
  {
    key: 'strip-xml-decl',
    label: 'strip XML decl',
    idea: 'strip-xml-declaration on SVG string before Image decode / drawImage',
    svgMarkupPatch: 'strip-xml-declaration',
  },
  {
    key: 'explicit-xmlns',
    label: 'explicit xmlns',
    idea: 'explicit-xmlns on root before product toCanvas raster',
    svgMarkupPatch: 'explicit-xmlns',
  },
  {
    key: 'strip-id-transforms',
    label: 'strip identity transforms',
    idea: 'strip-identity-transforms before product toCanvas — decode path hygiene',
    svgMarkupPatch: 'strip-identity-transforms',
  },
  {
    key: 'xmlns-strip-transforms',
    label: 'xmlns + strip transforms',
    idea: 'explicit-xmlns-strip-transforms bundle before product toCanvas',
    svgMarkupPatch: 'explicit-xmlns-strip-transforms',
  },
]

/** @type {{ key: string, label: string, idea: string, harnessSnapdom?: Record<string, unknown> }} */
const HARNESS_OPTS = [
  {
    key: 'snapdom-default',
    label: 'snapdom default',
    idea: 'default snapdom capture opts — isolate product toCanvas draw only',
  },
  {
    key: 'snapdom-no-cache',
    label: 'snapdom cache off',
    idea: 'snapdom({ cache: false }) before product toCanvas — fresh capture each probe',
    harnessSnapdom: { cache: false },
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const root of ROOT_ROUND) {
  for (const markup of MARKUP_PATCH) {
    for (const harness of HARNESS_OPTS) {
      index += 1
      const num = String(index).padStart(3, '0')
      /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
      const recipe = {
        id: `loop-ai-b12-w11-${num}`,
        label: `Loop AI b12 w11 #${num}: product toCanvas ${root.label} ${markup.label} ${harness.label}`,
        idea: `${root.idea}; ${markup.idea}; ${harness.idea}`,
        css: FO_BASELINE_CSS,
        inject: 'both',
        category: 'raster',
        active: true,
        rasterPatch: 'product-toCanvas',
        notes:
          'Loop AI b12 w11; canvas-side product-toCanvas probe; FO_BASELINE only — no text bypass.',
      }
      if (root.svgRootRound) recipe.svgRootRound = root.svgRootRound
      if (markup.svgMarkupPatch) recipe.svgMarkupPatch = markup.svgMarkupPatch
      if (harness.harnessSnapdom) recipe.harnessSnapdom = harness.harnessSnapdom
      RECIPES.push(recipe)
    }
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w11.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
