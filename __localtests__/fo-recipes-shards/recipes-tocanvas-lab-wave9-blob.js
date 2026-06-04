/**
 * Lab toCanvas wave-9 blob / data-URL / object-URL / revoke / fetch grid.
 * 90 recipes: tc-lab-w9-blob-001..090 — rasterPatch lab-toCanvas only.
 *
 * Axes (5 × 9 × 2 = 90):
 *   labRasterUrl — data URL default, blob URL, early revoke, fetch+revoke, decode-interval blob
 *   labToCanvasOpts.loadPipeline — blob handoff / revoke / fetch permutations in fo-fix-toCanvas-load-pipeline.js
 *   inject + CSS — both+FO baseline vs raster-only bare
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-blob-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe & { labRasterUrl?: string }} Wave9BlobRecipe */

/** @type {{ key: string, label: string, labRasterUrl?: string }[]} */
const URL_MODES = [
  { key: 'dataurl', label: 'data:image/svg+xml data URL (default)' },
  { key: 'blob-url', label: 'object URL from SVG blob (blob-url)', labRasterUrl: 'blob-url' },
  {
    key: 'blob-early-revoke',
    label: 'object URL + early revoke after img.src (blob-url-early-revoke)',
    labRasterUrl: 'blob-url-early-revoke',
  },
  {
    key: 'blob-fetch-revoke',
    label: 'fetch(blob)→revoke→new object URL (blob-url-fetch-revoke)',
    labRasterUrl: 'blob-url-fetch-revoke',
  },
  {
    key: 'blob-decode-interval-url',
    label: 'blob URL raster + harness decode-interval path (blob-url-decode-interval)',
    labRasterUrl: 'blob-url-decode-interval',
  },
]

/**
 * Lab load pipelines with blob / revoke / fetch semantics (fo-fix-toCanvas-load-pipeline.js).
 * @type {{ key: string, label: string, loadPipeline?: string }[]}
 */
const LOAD_PIPELINES = [
  { key: 'default', label: 'lab fork default decode + 100ms interval' },
  { key: 'no-decode-interval', label: 'decode without post-decode interval wait', loadPipeline: 'no-decode-interval' },
  { key: 'decode-via-blob', label: 'fetch data URL → blob URL before img.decode', loadPipeline: 'decode-via-blob' },
  {
    key: 'decode-via-blob-interval',
    label: 'data URL → blob URL + decode-interval wait',
    loadPipeline: 'decode-via-blob-interval',
  },
  { key: 'blob-decode-interval', label: 'blob handoff + decode-interval', loadPipeline: 'blob-decode-interval' },
  { key: 'blob-then-interval', label: 'blob handoff + interval after decode', loadPipeline: 'blob-then-interval' },
  { key: 'blob-then-double-decode', label: 'blob handoff + double img.decode', loadPipeline: 'blob-then-double-decode' },
  { key: 'blob-early-revoke', label: 'revoke blob URL immediately after img.src assign', loadPipeline: 'blob-early-revoke' },
  { key: 'blob-fetch-revoke', label: 'fetch(blob)→revoke→new blob inside load pipeline', loadPipeline: 'blob-fetch-revoke' },
]

/** @type {{ key: string, inject: 'both' | 'raster', css: string }[]} */
const STRUCT_VARIANTS = [
  { key: 'both-fo', inject: 'both', css: FO_BASELINE_CSS },
  { key: 'raster-bare', inject: 'raster', css: '' },
]

const EXPECTED = URL_MODES.length * LOAD_PIPELINES.length * STRUCT_VARIANTS.length

/** @type {Wave9BlobRecipe[]} */
const RECIPES = []

let n = 0
for (const url of URL_MODES) {
  for (const pipe of LOAD_PIPELINES) {
    for (const struct of STRUCT_VARIANTS) {
      n += 1
      const num = String(n).padStart(3, '0')
      const slug = `${url.key} × ${pipe.key} × ${struct.key}`
      /** @type {Wave9BlobRecipe} */
      const recipe = {
        id: `tc-lab-w9-blob-${num}`,
        label: `w9 blob #${n}: ${slug}`,
        idea: `lab-toCanvas blob grid — ${url.label}; load: ${pipe.label}; ${struct.inject} inject`,
        css: struct.css,
        inject: struct.inject,
        rasterPatch: 'lab-toCanvas',
        category: 'tocanvas',
        active: true,
        notes: `Wave9 blob/url/revoke/fetch combinator #${n}; FO raster only — no text bypass.`,
      }
      if (url.labRasterUrl) recipe.labRasterUrl = url.labRasterUrl
      if (pipe.loadPipeline) {
        recipe.labToCanvasOpts = { loadPipeline: pipe.loadPipeline }
      }
      RECIPES.push(recipe)
    }
  }
}

if (RECIPES.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-blob.js: expected ${EXPECTED} recipes, got ${RECIPES.length}`,
  )
}

if (RECIPES.length !== 90) {
  throw new Error(`recipes-tocanvas-lab-wave9-blob.js: expected 90 recipes, got ${RECIPES.length}`)
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 90) {
  throw new Error('recipes-tocanvas-lab-wave9-blob.js: duplicate recipe ids')
}

const slugs = new Set(RECIPES.map((r) => r.label))
if (slugs.size !== 90) {
  throw new Error('recipes-tocanvas-lab-wave9-blob.js: duplicate labels')
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.labRasterUrl ?? '',
    r.labToCanvasOpts?.loadPipeline ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-blob.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
