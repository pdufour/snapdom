/**
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
      throw new Error(`unknown cssKey: ${key}`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, flags: { decodeMs: number | false, roundDraw: boolean, smoothOff: boolean, useBitmap: boolean, waitRaf: boolean } }[]} */
const SPECS = [
  { n: 1, slug: "decode-off no-round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 2, slug: "decode-off no-round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 3, slug: "decode-off no-round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 4, slug: "decode-off no-round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 5, slug: "decode-off no-round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 6, slug: "decode-off no-round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 7, slug: "decode-off no-round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 8, slug: "decode-off no-round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "none", flags: {"decodeMs":false,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 9, slug: "decode-off round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "none", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 10, slug: "decode-off round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "none", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 11, slug: "decode-off round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 12, slug: "decode-off round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 13, slug: "decode-off round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 14, slug: "decode-off round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 15, slug: "decode-off round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 16, slug: "decode-off round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs off, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":false,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 17, slug: "decode-0 no-round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 18, slug: "decode-0 no-round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 19, slug: "decode-0 no-round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 20, slug: "decode-0 no-round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 21, slug: "decode-0 no-round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 22, slug: "decode-0 no-round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 23, slug: "decode-0 no-round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 24, slug: "decode-0 no-round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 25, slug: "decode-0 round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 26, slug: "decode-0 round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 27, slug: "decode-0 round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 28, slug: "decode-0 round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 29, slug: "decode-0 round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 30, slug: "decode-0 round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 31, slug: "decode-0 round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 32, slug: "decode-0 round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs 0, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":0,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 33, slug: "decode-100 no-round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 34, slug: "decode-100 no-round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 35, slug: "decode-100 no-round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 36, slug: "decode-100 no-round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 37, slug: "decode-100 no-round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 38, slug: "decode-100 no-round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 39, slug: "decode-100 no-round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 40, slug: "decode-100 no-round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=false, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":false,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 41, slug: "decode-100 round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 42, slug: "decode-100 round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
  { n: 43, slug: "decode-100 round smooth-on bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":false} },
  { n: 44, slug: "decode-100 round smooth-on bitmap raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=false, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":false,"useBitmap":true,"waitRaf":true} },
  { n: 45, slug: "decode-100 round smooth-off img no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":false} },
  { n: 46, slug: "decode-100 round smooth-off img raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=true, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":true,"useBitmap":false,"waitRaf":true} },
  { n: 47, slug: "decode-100 round smooth-off bitmap no-raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":false} },
  { n: 48, slug: "decode-100 round smooth-off bitmap raf", idea: "lab-toCanvas-unified — decodeMs 100, roundDraw=true, smoothOff=true, useBitmap=true, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":100,"roundDraw":true,"smoothOff":true,"useBitmap":true,"waitRaf":true} },
  { n: 49, slug: "decode-200 no-round smooth-on img no-raf", idea: "lab-toCanvas-unified — decodeMs 200, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=false", cssKey: "baseline", flags: {"decodeMs":200,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":false} },
  { n: 50, slug: "decode-200 no-round smooth-on img raf", idea: "lab-toCanvas-unified — decodeMs 200, roundDraw=false, smoothOff=false, useBitmap=false, waitRaf=true", cssKey: "baseline", flags: {"decodeMs":200,"roundDraw":false,"smoothOff":false,"useBitmap":false,"waitRaf":true} },
]

if (SPECS.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-wave9-uni.js: expected 50 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error('recipes-tocanvas-lab-wave9-uni.js: duplicate slugs in SPECS')
}

const flagSet = new Set()
for (const spec of SPECS) {
  const fk = JSON.stringify(spec.flags)
  if (flagSet.has(fk)) {
    throw new Error(`recipes-tocanvas-lab-wave9-uni.js: duplicate flags at #${spec.n}`)
  }
  flagSet.add(fk)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  return {
    id: `tc-lab-w9-uni-${num}`,
    label: `tc-lab-w9-uni #${spec.n}: ${spec.slug}`,
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

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-uni.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas-unified') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas-unified`)
  }
  const o = r.labToCanvasOpts
  if (!o || typeof o !== 'object') {
    throw new Error(`${r.id}: missing labToCanvasOpts unified flags`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
