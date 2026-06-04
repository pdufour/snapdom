/**
 * Wave 6 — decode retry / multi-decode backoff matrix (lab-toCanvas-decode).
 * 53 recipes: tc-lab-w6-retry-001..053
 *
 * Mechanisms:
 *  - decode-retry-N@<ms,ms,...> (retry img.decode() only on failure; backoff between attempts)
 *  - double-decode-backoff@<ms,ms,...> (always 2 decodes; backoff between passes)
 *  - triple-decode-backoff@<ms,ms,...> (always 3 decodes; backoff between passes)
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-retry-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  // ---- retry only on failure ----
  {
    slug: 'decode-retry-2@0',
    idea: 'Retry decode once on failure; 0ms backoff',
    extra: { labLoadPipeline: 'decode-retry-2@0' },
  },
  {
    slug: 'decode-retry-2@16',
    idea: 'Retry decode once on failure; 16ms backoff',
    extra: { labLoadPipeline: 'decode-retry-2@16' },
  },
  {
    slug: 'decode-retry-2@100',
    idea: 'Retry decode once on failure; 100ms backoff',
    extra: { labLoadPipeline: 'decode-retry-2@100' },
  },
  {
    slug: 'decode-retry-2@0,16',
    idea: 'Retry decode once on failure; 0ms then 16ms backoff tokens',
    extra: { labLoadPipeline: 'decode-retry-2@0,16' },
  },
  {
    slug: 'decode-retry-2@16,100',
    idea: 'Retry decode once on failure; 16ms then 100ms backoff tokens',
    extra: { labLoadPipeline: 'decode-retry-2@16,100' },
  },
  {
    slug: 'decode-retry-2@0,100',
    idea: 'Retry decode once on failure; 0ms then 100ms backoff tokens',
    extra: { labLoadPipeline: 'decode-retry-2@0,100' },
  },
  {
    slug: 'decode-retry-3@0',
    idea: 'Retry decode up to 3 attempts on failure; 0ms backoff',
    extra: { labLoadPipeline: 'decode-retry-3@0' },
  },
  {
    slug: 'decode-retry-3@16',
    idea: 'Retry decode up to 3 attempts on failure; 16ms backoff',
    extra: { labLoadPipeline: 'decode-retry-3@16' },
  },
  {
    slug: 'decode-retry-3@100',
    idea: 'Retry decode up to 3 attempts on failure; 100ms backoff',
    extra: { labLoadPipeline: 'decode-retry-3@100' },
  },
  {
    slug: 'decode-retry-3@0,16,100',
    idea: 'Retry decode up to 3 attempts on failure; 0ms→16ms→100ms backoff tokens',
    extra: { labLoadPipeline: 'decode-retry-3@0,16,100' },
  },

  // ---- double-decode with backoff ----
  {
    slug: 'double-decode-backoff@0',
    idea: 'Two decode passes; 0ms between passes',
    extra: { labLoadPipeline: 'double-decode-backoff@0' },
  },
  {
    slug: 'double-decode-backoff@16',
    idea: 'Two decode passes; 16ms between passes',
    extra: { labLoadPipeline: 'double-decode-backoff@16' },
  },
  {
    slug: 'double-decode-backoff@100',
    idea: 'Two decode passes; 100ms between passes',
    extra: { labLoadPipeline: 'double-decode-backoff@100' },
  },
  {
    slug: 'double-decode-backoff@250',
    idea: 'Two decode passes; 250ms between passes',
    extra: { labLoadPipeline: 'double-decode-backoff@250' },
  },
  {
    slug: 'double-decode-backoff@500',
    idea: 'Two decode passes; 500ms between passes',
    extra: { labLoadPipeline: 'double-decode-backoff@500' },
  },
  {
    slug: 'double-decode-backoff@0,16',
    idea: 'Two decode passes; 0ms/16ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@0,16' },
  },
  {
    slug: 'double-decode-backoff@16,0',
    idea: 'Two decode passes; 16ms/0ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@16,0' },
  },
  {
    slug: 'double-decode-backoff@0,100',
    idea: 'Two decode passes; 0ms/100ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@0,100' },
  },
  {
    slug: 'double-decode-backoff@100,0',
    idea: 'Two decode passes; 100ms/0ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@100,0' },
  },
  {
    slug: 'double-decode-backoff@16,100',
    idea: 'Two decode passes; 16ms/100ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@16,100' },
  },
  {
    slug: 'double-decode-backoff@100,16',
    idea: 'Two decode passes; 100ms/16ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@100,16' },
  },
  {
    slug: 'double-decode-backoff@0,250',
    idea: 'Two decode passes; 0ms/250ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@0,250' },
  },
  {
    slug: 'double-decode-backoff@250,0',
    idea: 'Two decode passes; 250ms/0ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@250,0' },
  },
  {
    slug: 'double-decode-backoff@16,250',
    idea: 'Two decode passes; 16ms/250ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@16,250' },
  },
  {
    slug: 'double-decode-backoff@250,16',
    idea: 'Two decode passes; 250ms/16ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@250,16' },
  },
  {
    slug: 'double-decode-backoff@100,250',
    idea: 'Two decode passes; 100ms/250ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@100,250' },
  },
  {
    slug: 'double-decode-backoff@250,100',
    idea: 'Two decode passes; 250ms/100ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@250,100' },
  },
  {
    slug: 'double-decode-backoff@0,500',
    idea: 'Two decode passes; 0ms/500ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@0,500' },
  },
  {
    slug: 'double-decode-backoff@500,0',
    idea: 'Two decode passes; 500ms/0ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@500,0' },
  },
  {
    slug: 'double-decode-backoff@16,500',
    idea: 'Two decode passes; 16ms/500ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@16,500' },
  },
  {
    slug: 'double-decode-backoff@500,16',
    idea: 'Two decode passes; 500ms/16ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@500,16' },
  },
  {
    slug: 'double-decode-backoff@100,500',
    idea: 'Two decode passes; 100ms/500ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@100,500' },
  },
  {
    slug: 'double-decode-backoff@500,100',
    idea: 'Two decode passes; 500ms/100ms backoff token list',
    extra: { labLoadPipeline: 'double-decode-backoff@500,100' },
  },

  // ---- triple-decode with backoff ----
  {
    slug: 'triple-decode-backoff@0,16',
    idea: 'Three decode passes; 0ms then 16ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@0,16' },
  },
  {
    slug: 'triple-decode-backoff@16,0',
    idea: 'Three decode passes; 16ms then 0ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@16,0' },
  },
  {
    slug: 'triple-decode-backoff@0,100',
    idea: 'Three decode passes; 0ms then 100ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@0,100' },
  },
  {
    slug: 'triple-decode-backoff@100,0',
    idea: 'Three decode passes; 100ms then 0ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@100,0' },
  },
  {
    slug: 'triple-decode-backoff@16,100',
    idea: 'Three decode passes; 16ms then 100ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@16,100' },
  },
  {
    slug: 'triple-decode-backoff@100,16',
    idea: 'Three decode passes; 100ms then 16ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@100,16' },
  },
  {
    slug: 'triple-decode-backoff@0,250',
    idea: 'Three decode passes; 0ms then 250ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@0,250' },
  },
  {
    slug: 'triple-decode-backoff@250,0',
    idea: 'Three decode passes; 250ms then 0ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@250,0' },
  },
  {
    slug: 'triple-decode-backoff@16,250',
    idea: 'Three decode passes; 16ms then 250ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@16,250' },
  },
  {
    slug: 'triple-decode-backoff@250,16',
    idea: 'Three decode passes; 250ms then 16ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@250,16' },
  },
  {
    slug: 'triple-decode-backoff@100,250',
    idea: 'Three decode passes; 100ms then 250ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@100,250' },
  },
  {
    slug: 'triple-decode-backoff@250,100',
    idea: 'Three decode passes; 250ms then 100ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@250,100' },
  },
  {
    slug: 'triple-decode-backoff@0,500',
    idea: 'Three decode passes; 0ms then 500ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@0,500' },
  },
  {
    slug: 'triple-decode-backoff@500,0',
    idea: 'Three decode passes; 500ms then 0ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@500,0' },
  },
  {
    slug: 'triple-decode-backoff@16,500',
    idea: 'Three decode passes; 16ms then 500ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@16,500' },
  },
  {
    slug: 'triple-decode-backoff@500,16',
    idea: 'Three decode passes; 500ms then 16ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@500,16' },
  },
  {
    slug: 'triple-decode-backoff@100,500',
    idea: 'Three decode passes; 100ms then 500ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@100,500' },
  },
  {
    slug: 'triple-decode-backoff@500,100',
    idea: 'Three decode passes; 500ms then 100ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@500,100' },
  },
  {
    slug: 'triple-decode-backoff@0,0',
    idea: 'Three decode passes; 0ms then 0ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@0,0' },
  },
  {
    slug: 'triple-decode-backoff@16,16',
    idea: 'Three decode passes; 16ms then 16ms between passes',
    extra: { labLoadPipeline: 'triple-decode-backoff@16,16' },
  },
]

if (SPECS.length !== 53) {
  throw new Error(`recipes-tocanvas-lab-wave6-retry.js: expected 53 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, idx) => {
  const n = idx + 1
  const num = String(n).padStart(3, '0')
  return {
    id: `tc-lab-w6-retry-${num}`,
    label: `tc-lab-w6-retry #${n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    category: 'retry',
    active: true,
    notes: 'Wave 6 decode retry/backoff probe (lab-toCanvas-decode); FO raster only — no text bypass.',
    ...spec.extra,
  }
})

if (RECIPES.length !== 53) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-retry.js: expected 53 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave6-retry.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch ?? '',
    r.inject ?? '',
    r.css ?? '',
    r.svgRootRound ?? '',
    r.foSvgPatch ?? '',
    r.svgMarkupPatch ?? '',
    r.monkeypatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-retry.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

