/**
 * Wave 6 — preserveAspectRatio meet/slice, viewBox slice, letterbox margins (ratio math).
 * 65 recipes: tc-lab-w6-asp-001..065 (13 aspect mechanisms × 5 svgRootRound stacks).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-asp-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** Mini nav fixture (structural ratio source for letterbox calc). */
const FIX_W = 500
const FIX_H = 48

/**
 * Vertical letterbox margins on FO>div from viewBox vs root aspect (no gate-tuned px).
 * @param {number} vbW
 * @param {number} vbH
 */
function letterboxVerticalCss(vbW, vbH) {
  const contentH = (FIX_W * vbH) / vbW
  if (contentH >= FIX_H) return ''
  const marginPx = (FIX_H - contentH) / 2
  return (
    `foreignObject>div{margin-top:calc(100% * ${marginPx} / ${FIX_W})!important;` +
    `margin-bottom:calc(100% * ${marginPx} / ${FIX_W})!important}`
  )
}

/**
 * Horizontal letterbox when viewBox is taller than root box at full height.
 * @param {number} vbW
 * @param {number} vbH
 */
function letterboxHorizontalCss(vbW, vbH) {
  const contentW = (FIX_H * vbW) / vbH
  if (contentW >= FIX_W) return ''
  const marginPx = (FIX_W - contentW) / 2
  return (
    `foreignObject>div{margin-left:calc(100% * ${marginPx} / ${FIX_W})!important;` +
    `margin-right:calc(100% * ${marginPx} / ${FIX_W})!important}`
  )
}

/** @type {{ slug: string, idea: string, svgRootPatch?: Record<string, string>, extraCss?: string }} */
const ASPECT_MECHANISMS = [
  {
    slug: 'par xMidYMid meet',
    idea: 'preserveAspectRatio xMidYMid meet on SVG root before lab toCanvas',
    svgRootPatch: { preserveAspectRatio: 'xMidYMid meet' },
  },
  {
    slug: 'par xMidYMid slice',
    idea: 'preserveAspectRatio xMidYMid slice — cover-style FO raster viewport',
    svgRootPatch: { preserveAspectRatio: 'xMidYMid slice' },
  },
  {
    slug: 'par xMidYMid default',
    idea: 'preserveAspectRatio xMidYMid (implicit meet) on capture svg root',
    svgRootPatch: { preserveAspectRatio: 'xMidYMid' },
  },
  {
    slug: 'par none stretch',
    idea: 'preserveAspectRatio none — stretch viewBox to width/height box',
    svgRootPatch: { preserveAspectRatio: 'none' },
  },
  {
    slug: 'meet + vb slice inset-y',
    idea: 'xMidYMid meet + viewBox vertical slice inset (0 4 500 40 on 500×48)',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 4 500 40',
    },
  },
  {
    slug: 'slice + vb slice inset-y',
    idea: 'xMidYMid slice + viewBox vertical crop band (0 4 500 40)',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid slice',
      viewBox: '0 4 500 40',
    },
  },
  {
    slug: 'meet + vb slice tight-y',
    idea: 'xMidYMid meet + tighter viewBox vertical slice (0 2 500 44)',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 2 500 44',
    },
  },
  {
    slug: 'slice + vb slice inset-x',
    idea: 'xMidYMid slice + viewBox horizontal slice (15 0 470 48)',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid slice',
      viewBox: '15 0 470 48',
    },
  },
  {
    slug: 'meet + vb slice wide',
    idea: 'xMidYMid meet + widened viewBox slice (0 0 520 48)',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 0 520 48',
    },
  },
  {
    slug: 'meet + vb short band',
    idea: 'xMidYMid meet + short viewBox band (0 0 500 40) without FO margin CSS',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 0 500 40',
    },
  },
  {
    slug: 'meet + vb 500/40 + letterbox-y',
    idea: 'meet + viewBox 500×40 + FO vertical letterbox margins from (48−40)/2 ratio math',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 0 500 40',
    },
    extraCss: letterboxVerticalCss(500, 40),
  },
  {
    slug: 'slice + vb 500/40 + letterbox-y',
    idea: 'slice + viewBox 500×40 + vertical letterbox margin calc on FO>div',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid slice',
      viewBox: '0 0 500 40',
    },
    extraCss: letterboxVerticalCss(500, 40),
  },
  {
    slug: 'meet + vb 480/48 + letterbox-x',
    idea: 'meet + narrow viewBox 480×48 + horizontal letterbox margins from ratio math',
    svgRootPatch: {
      preserveAspectRatio: 'xMidYMid meet',
      viewBox: '0 0 480 48',
    },
    extraCss: letterboxHorizontalCss(480, 48),
  },
]

/** @type {{ slug: string, svgRootRound: import('../fo-fix-recipe-shared.js').FoFixSvgRootRound, labPreRaster?: 'device-grid-floor' }} */
const ROOT_ROUND_STACKS = [
  { slug: 'integer-viewbox', svgRootRound: 'integer-viewbox' },
  { slug: 'int-floor', svgRootRound: 'int-floor' },
  { slug: 'round-dims', svgRootRound: 'round-dims' },
  {
    slug: 'integer-viewbox device-grid',
    svgRootRound: 'integer-viewbox',
    labPreRaster: 'device-grid-floor',
  },
  {
    slug: 'int-floor device-grid',
    svgRootRound: 'int-floor',
    labPreRaster: 'device-grid-floor',
  },
]

if (ASPECT_MECHANISMS.length !== 13) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-aspect.js: expected 13 aspect mechanisms, got ${ASPECT_MECHANISMS.length}`,
  )
}
if (ROOT_ROUND_STACKS.length !== 5) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-aspect.js: expected 5 root-round stacks, got ${ROOT_ROUND_STACKS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
let n = 0
for (const mech of ASPECT_MECHANISMS) {
  for (const root of ROOT_ROUND_STACKS) {
    n += 1
    const num = String(n).padStart(3, '0')
    const css = FO_BASELINE_CSS + (mech.extraCss ?? '')
    /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
    const recipe = {
      id: `tc-lab-w6-asp-${num}`,
      label: `tc-lab-w6-asp #${n}: ${mech.slug} / ${root.slug}`,
      idea: `${mech.idea}; svgRootRound ${root.slug} before lab-toCanvas.`,
      css,
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      category: 'tocanvas',
      active: true,
      svgRootRound: root.svgRootRound,
      svgRootPatch: mech.svgRootPatch,
      notes: `Wave6 aspect; ${mech.slug}; ${root.slug}; FO raster only — no text bypass.`,
    }
    if (root.labPreRaster) recipe.labPreRaster = root.labPreRaster
    RECIPES.push(recipe)
  }
}

const EXPECTED = 65
if (RECIPES.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-aspect.js: expected ${EXPECTED} recipes, got ${RECIPES.length}`,
  )
}

const slugPairs = new Set(
  ASPECT_MECHANISMS.flatMap((m) =>
    ROOT_ROUND_STACKS.map((r) => `${m.slug}\0${r.slug}`),
  ),
)
if (slugPairs.size !== EXPECTED) {
  throw new Error('recipes-tocanvas-lab-wave6-aspect.js: duplicate mechanism × root-round pairs')
}

const seenKeys = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  if (!r.svgRootRound) {
    throw new Error(`${r.id}: svgRootRound required`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.svgRootRound,
    r.labPreRaster ?? '',
    JSON.stringify(r.svgRootPatch ?? null),
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-aspect.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
