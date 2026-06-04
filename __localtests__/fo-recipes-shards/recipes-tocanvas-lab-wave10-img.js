/**
 * Lab toCanvas wave-10 image element attribute / srcset / sizes / complete probes.
 * 80 recipes: tc-lab-w10-img-001..080 — rasterPatch lab-toCanvas only.
 *
 * Axes (2 × 4 × 10 = 80):
 *   toCanvasHarness dims vs naturalWidth (omit optW/optH + omit meta refs)
 *   labToCanvasOpts.loadPipeline base: default | no-decode-interval | load-event | load-event-interval
 *   image attrs (encoded as +tags on loadPipeline; parsed in fo-fix-toCanvas-load-pipeline.js):
 *     - width/height attrs via img-attrs-WxH
 *     - width/height props via img-props-WxH
 *     - srcset descriptors via img-srcset-1x / img-srcset-2x (+ optional img-sizes-*)
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-img-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ key: string, label: string, harness: NonNullable<import('../fo-fix-recipe-shared.js').FoFixRecipe['toCanvasHarness']> }[]} */
const HARNESS_MODES = [
  {
    key: 'dims+parsed',
    label: 'optW/optH from dims; meta.w0/h0 parsed',
    harness: { width: 'dims', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
  },
  {
    key: 'natural+meta-omit',
    label: 'omit optW/optH; meta.w0/h0 omitted so ref dims use naturalWidth/Height',
    harness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
  },
]

/** @type {{ key: string, label: string, base: string }[]} */
const BASE_PIPELINES = [
  { key: 'default', label: 'img.decode + post-decode interval (default)', base: 'default' },
  { key: 'no-interval', label: 'img.decode without interval', base: 'no-decode-interval' },
  { key: 'load-event', label: 'wait img.onload (fast-path if img.complete)', base: 'load-event' },
  { key: 'load-event+interval', label: 'img.onload then interval wait', base: 'load-event-interval' },
]

/** @type {{ key: string, label: string, tags?: string[] }[]} */
const IMG_VARIANTS = [
  { key: 'plain', label: 'plain Image() attributes', tags: [] },
  { key: 'attr-1x1', label: 'img.setAttribute(width/height)=1×1', tags: ['img-attrs-1x1'] },
  { key: 'attr-512', label: 'img.setAttribute(width/height)=512×512', tags: ['img-attrs-512x512'] },
  { key: 'prop-1x1', label: 'img.width/img.height=1×1', tags: ['img-props-1x1'] },
  { key: 'prop-512', label: 'img.width/img.height=512×512', tags: ['img-props-512x512'] },
  { key: 'srcset-1x', label: 'img.srcset="url 1x"', tags: ['img-srcset-1x'] },
  { key: 'srcset-2x', label: 'img.srcset="url 1x, url 2x"', tags: ['img-srcset-2x'] },
  { key: 'srcset+sizes-100vw', label: 'img.srcset 1x + img.sizes=100vw', tags: ['img-srcset-1x', 'img-sizes-100vw'] },
  { key: 'srcset+sizes-50vw', label: 'img.srcset 1x + img.sizes=50vw', tags: ['img-srcset-1x', 'img-sizes-50vw'] },
  { key: 'srcset+sizes-600px', label: 'img.srcset 1x + img.sizes=600px', tags: ['img-srcset-1x', 'img-sizes-600px'] },
]

const EXPECTED = HARNESS_MODES.length * BASE_PIPELINES.length * IMG_VARIANTS.length

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const h of HARNESS_MODES) {
  for (const p of BASE_PIPELINES) {
    for (const img of IMG_VARIANTS) {
      n += 1
      const num = String(n).padStart(3, '0')
      const tags = (img.tags ?? []).filter(Boolean)
      const loadPipeline = tags.length ? `${p.base}+${tags.join('+')}` : p.base
      const slug = `${h.key} × ${p.key} × ${img.key}`
      RECIPES.push({
        id: `tc-lab-w10-img-${num}`,
        label: `w10 img #${n}: ${slug}`,
        idea: `lab-toCanvas image attr probe — harness: ${h.label}; load: ${p.label}; img: ${img.label}`,
        css: FO_BASELINE_CSS,
        inject: 'both',
        rasterPatch: 'lab-toCanvas',
        category: 'tocanvas',
        active: true,
        notes: `Wave10 image attrs/srcset/sizes/complete/naturalWidth probe #${n}; FO raster only — no text bypass.`,
        toCanvasHarness: h.harness,
        labToCanvasOpts: { loadPipeline },
      })
    }
  }
}

if (RECIPES.length !== EXPECTED || RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-img.js: expected 80 recipes (computed ${EXPECTED}), got ${RECIPES.length}`,
  )
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 80) throw new Error('recipes-tocanvas-lab-wave10-img.js: duplicate recipe ids')

const labels = new Set(RECIPES.map((r) => r.label))
if (labels.size !== 80) throw new Error('recipes-tocanvas-lab-wave10-img.js: duplicate labels')

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.labToCanvasOpts?.loadPipeline ?? '',
    JSON.stringify(r.toCanvasHarness ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave10-img.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

