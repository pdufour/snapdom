/**
 * Wave-8 visibility / attachment probes — tc-lab-w8-vis-{001..050}.
 * 50 recipes: 5 attach styles × 10 decode pipelines.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-vis-*'
 *
 * Pipeline syntax: "<base>@<attachMode>" (see fo-fix-toCanvas-load-pipeline.js).
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const COUNT = 50

/** @param {number} n */
function pad3(n) {
  return String(n).padStart(3, '0')
}

const ATTACH = [
  {
    key: 'vis-hidden',
    label: 'visibility:hidden (offscreen)',
    mode: 'pre-decode-dom-vis-hidden',
  },
  {
    key: 'opacity-0',
    label: 'opacity:0 (offscreen)',
    mode: 'pre-decode-dom-opacity-0',
  },
  {
    key: 'display-none',
    label: 'display:none (offscreen)',
    mode: 'pre-decode-dom-display-none',
  },
  {
    key: 'offscreen-visible',
    label: 'offscreen (visible)',
    mode: 'pre-decode-dom-offscreen',
  },
  {
    key: 'vis-hidden+opacity-0',
    label: 'visibility:hidden + opacity:0 (offscreen)',
    mode: 'pre-decode-dom-vis-hidden-opacity-0',
  },
]

const BASE = [
  { key: 'default', label: 'default (decode+interval)', base: 'default' },
  { key: 'decode-interval', label: 'decode-interval', base: 'decode-interval' },
  { key: 'decode-interval-raf', label: 'decode-interval-raf', base: 'decode-interval-raf' },
  { key: 'double-decode', label: 'double-decode', base: 'double-decode' },
  { key: 'double-decode-interval', label: 'double-decode-interval', base: 'double-decode-interval' },
  { key: 'load-event', label: 'load-event', base: 'load-event' },
  { key: 'load-event-interval', label: 'load-event-interval', base: 'load-event-interval' },
  { key: 'blob-decode-interval', label: 'blob-decode-interval', base: 'blob-decode-interval' },
  { key: 'bitmap-decode-interval', label: 'bitmap-decode-interval', base: 'bitmap-decode-interval' },
  { key: 'triple-decode-interval', label: 'triple-decode-interval', base: 'triple-decode-interval' },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

for (const a of ATTACH) {
  for (const b of BASE) {
    const n = RECIPES.length + 1
    const num = pad3(n)
    const pipeline = `${b.base}@${a.mode}`
    const slug = `${a.key} / ${b.key}`
    RECIPES.push({
      id: `tc-lab-w8-vis-${num}`,
      label: `w8-vis #${n}: ${a.label} + ${b.label}`,
      idea: `Wave8 visibility probe: attach <img> with ${a.label}, then decode via ${b.label}.`,
      css: FO_BASELINE_CSS,
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      category: 'tocanvas',
      active: true,
      labLoadPipeline: pipeline,
      notes:
        `Wave-8 visibility/attach probes; labLoadPipeline=${pipeline}; ` +
        'FO raster only — no text bypass.',
    })
  }
}

if (RECIPES.length !== COUNT) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-visibility.js: expected ${COUNT} recipes, got ${RECIPES.length}`,
  )
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave8-visibility.js: duplicate ids')
}

const slugs = new Set(RECIPES.map((r) => r.label))
if (slugs.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave8-visibility.js: duplicate labels')
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

