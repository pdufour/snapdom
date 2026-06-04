#!/usr/bin/env node
/**
 * Wave-9 unified lab-toCanvas fork — 50 recipes tc-lab-w9-uni-001..050.
 * rasterPatch: lab-toCanvas-unified (fo-fix-toCanvas-unified.js).
 *
 * Run: node __localtests__/gen-tocanvas-lab-wave9.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FO_BASELINE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards', 'recipes-tocanvas-lab-wave9-uni.js')
const COUNT = 50

/** @type {(number | false)[]} */
const DECODE_MS_VALUES = [false, 0, 100, 200]

/** @returns {{ decodeMs: number | false, roundDraw: boolean, smoothOff: boolean, useBitmap: boolean, waitRaf: boolean }[]} */
function buildFlagCombos() {
  /** @type {{ decodeMs: number | false, roundDraw: boolean, smoothOff: boolean, useBitmap: boolean, waitRaf: boolean }[]} */
  const combos = []
  for (const decodeMs of DECODE_MS_VALUES) {
    for (const roundDraw of [false, true]) {
      for (const smoothOff of [false, true]) {
        for (const useBitmap of [false, true]) {
          for (const waitRaf of [false, true]) {
            combos.push({ decodeMs, roundDraw, smoothOff, useBitmap, waitRaf })
          }
        }
      }
    }
  }
  return combos
}

const allCombos = buildFlagCombos()
if (allCombos.length < COUNT) {
  throw new Error(`Need at least ${COUNT} flag combos, got ${allCombos.length}`)
}

/** Prefer diverse decodeMs first, then spread booleans. */
allCombos.sort((a, b) => {
  const da = a.decodeMs === false ? -1 : Number(a.decodeMs)
  const db = b.decodeMs === false ? -1 : Number(b.decodeMs)
  if (da !== db) return da - db
  const ba =
    (a.roundDraw ? 16 : 0) +
    (a.smoothOff ? 8 : 0) +
    (a.useBitmap ? 4 : 0) +
    (a.waitRaf ? 2 : 0)
  const bb =
    (b.roundDraw ? 16 : 0) +
    (b.smoothOff ? 8 : 0) +
    (b.useBitmap ? 4 : 0) +
    (b.waitRaf ? 2 : 0)
  return ba - bb
})

/** @type {typeof allCombos} */
const picked = []
const seen = new Set()
for (const c of allCombos) {
  const key = JSON.stringify(c)
  if (seen.has(key)) continue
  seen.add(key)
  picked.push(c)
  if (picked.length >= COUNT) break
}

if (picked.length !== COUNT) {
  throw new Error(`Expected ${COUNT} unique combos, got ${picked.length}`)
}

/** @param {typeof picked[number]} f */
function slugForFlags(f) {
  const dm =
    f.decodeMs === false ? 'decode-off' : f.decodeMs === 0 ? 'decode-0' : `decode-${f.decodeMs}`
  return [
    dm,
    f.roundDraw ? 'round' : 'no-round',
    f.smoothOff ? 'smooth-off' : 'smooth-on',
    f.useBitmap ? 'bitmap' : 'img',
    f.waitRaf ? 'raf' : 'no-raf',
  ].join(' ')
}

const specLines = picked
  .map((flags, i) => {
    const n = i + 1
    const slug = slugForFlags(flags)
    const dmLabel =
      flags.decodeMs === false
        ? 'decodeMs off'
        : flags.decodeMs === 0
          ? 'decodeMs 0'
          : `decodeMs ${flags.decodeMs}`
    const idea =
      `lab-toCanvas-unified — ${dmLabel}, roundDraw=${flags.roundDraw}, ` +
      `smoothOff=${flags.smoothOff}, useBitmap=${flags.useBitmap}, waitRaf=${flags.waitRaf}`
    const css = n <= 10 ? '' : n <= 30 ? FO_BASELINE_CSS : FO_BASELINE_CSS
    const cssKey = n <= 10 ? 'none' : 'baseline'
    return `  { n: ${n}, slug: ${JSON.stringify(slug)}, idea: ${JSON.stringify(idea)}, cssKey: ${JSON.stringify(cssKey)}, flags: ${JSON.stringify(flags)} },`
  })
  .join('\n')

const body = `/**
 * Wave-9 unified lab toCanvas — tc-lab-w9-uni-001..050.
 * rasterPatch: lab-toCanvas-unified → fo-fix-toCanvas-unified.js (recipe labToCanvasOpts flags).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-uni-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'baseline':
      return FO_BASELINE_CSS
    default:
      throw new Error(\`unknown cssKey: \${key}\`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, flags: { decodeMs: number | false, roundDraw: boolean, smoothOff: boolean, useBitmap: boolean, waitRaf: boolean } }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${COUNT}) {
  throw new Error(\`recipes-tocanvas-lab-wave9-uni.js: expected ${COUNT} specs, got \${SPECS.length}\`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error('recipes-tocanvas-lab-wave9-uni.js: duplicate slugs in SPECS')
}

const flagSet = new Set()
for (const spec of SPECS) {
  const fk = JSON.stringify(spec.flags)
  if (flagSet.has(fk)) {
    throw new Error(\`recipes-tocanvas-lab-wave9-uni.js: duplicate flags at #\${spec.n}\`)
  }
  flagSet.add(fk)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  return {
    id: \`tc-lab-w9-uni-\${num}\`,
    label: \`tc-lab-w9-uni #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    labToCanvasOpts: { ...spec.flags },
    category: 'tocanvas',
    active: true,
    notes: 'Wave9 unified fork; FO raster only — no text bypass.',
  }
})

if (RECIPES.length !== ${COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave9-uni.js: expected ${COUNT} recipes, got \${RECIPES.length}\`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas-unified') {
    throw new Error(\`\${r.id}: rasterPatch must be lab-toCanvas-unified\`)
  }
  const o = r.labToCanvasOpts
  if (!o || typeof o !== 'object') {
    throw new Error(\`\${r.id}: missing labToCanvasOpts unified flags\`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
`

writeFileSync(OUT, body)
console.log(`Wrote ${OUT} (${COUNT} recipes)`)
