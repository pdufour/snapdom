#!/usr/bin/env node
/**
 * One-shot generator for recipes-tocanvas-lab-wave5-xl.js (100 recipes).
 *   node __localtests__/gen-tocanvas-lab-wave5-xl.mjs
 */
import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards', 'recipes-tocanvas-lab-wave5-xl.js')
const COUNT = 100

const RASTER_PATCHES = ['lab-toCanvas', 'lab-toCanvas-decode', 'lab-toCanvas-frac']

const CSS_KEYS = [
  'none',
  'baseline',
  'h2',
  'chromium',
  'leaf',
  'baseline+leaf',
  'h2+chromium',
  'full',
]

const ROOT_ROUNDS = [null, 'integer-viewbox', 'round-dims', 'int-floor']

const RADICALS = [
  null,
  'h2-fo-percent-int-viewbox',
  'math-floor-viewbox-stash-frac',
  'h2-pin-line-height-from-live',
  'h2-flex-stretch-leaf-from-live',
  'integer-snap-all-rects',
  'remove-fe-filters',
]

const MONKEYPATCHES = [
  null,
  'tc-draw-image-round-all',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-decode-safari-raf',
  'decode-interval-prototype',
  'decode-wrap',
  'image-decode-twice',
  'raf-before-draw',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
  'tc-lab-draw-device-grid-floor',
]

const FO_ATTRS = [
  null,
  { key: 'xy', patch: { x: '0.0001', y: '0.0001' } },
  { key: 'xywh', patch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' } },
]

const FO_SVG = [null, 'fe-color-matrix-identity', 'fo-shape-rendering-auto', 'filter-noop-defs']

const SVG_MARKUP = [
  null,
  'strip-xml-declaration',
  'explicit-xmlns',
  'strip-identity-transforms',
  'explicit-xmlns-strip-transforms',
  'base64-roundtrip',
]

const LAB_PRE_RASTER = [null, 'device-grid-floor']

/** @param {Record<string, unknown>} c */
function knobCount(c) {
  let n = 0
  if (c.cssKey !== 'none') n++
  if (c.svgRootRound) n++
  if (c.radicalPatch) n++
  if (c.monkeypatch) n++
  if (c.foAttrPatch) n++
  if (c.foSvgPatch) n++
  if (c.svgMarkupPatch) n++
  if (c.labPreRaster) n++
  return n
}

/** @param {unknown} v */
function stable(v) {
  return v == null ? '' : String(v)
}

/** @param {Record<string, unknown>} c */
function tupleKey(c) {
  return [
    c.rasterPatch,
    c.cssKey,
    c.svgRootRound,
    c.radicalPatch,
    c.monkeypatch,
    c.foAttrKey,
    c.foSvgPatch,
    c.svgMarkupPatch,
    c.labPreRaster,
  ]
    .map(stable)
    .join('|')
}

/** @returns {Record<string, unknown>[]} */
function allCombos() {
  /** @type {Record<string, unknown>[]} */
  const out = []
  for (const rasterPatch of RASTER_PATCHES) {
    for (const cssKey of CSS_KEYS) {
      for (const svgRootRound of ROOT_ROUNDS) {
        for (const radicalPatch of RADICALS) {
          for (const monkeypatch of MONKEYPATCHES) {
            for (const fa of FO_ATTRS) {
              for (const foSvgPatch of FO_SVG) {
                for (const svgMarkupPatch of SVG_MARKUP) {
                  for (const labPreRaster of LAB_PRE_RASTER) {
                    const c = {
                      rasterPatch,
                      cssKey,
                      svgRootRound,
                      radicalPatch,
                      monkeypatch,
                      foAttrKey: fa?.key ?? null,
                      foAttrPatch: fa?.patch ?? null,
                      foSvgPatch,
                      svgMarkupPatch,
                      labPreRaster,
                    }
                    const k = knobCount(c)
                    if (k >= 3 && k <= 5) out.push(c)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return out
}

/** @param {Record<string, unknown>[]} combos @param {number} count */
function pickUniqueCombos(combos, count) {
  const seen = new Set()
  /** @type {Record<string, unknown>[]} */
  const picked = []
  const stride = Math.max(1, Math.floor(combos.length / count))
  for (let i = 0; picked.length < count && i < combos.length * 3; i++) {
    const c = combos[(i * stride) % combos.length]
    const key = tupleKey(c)
    if (seen.has(key)) continue
    seen.add(key)
    picked.push(c)
  }
  for (const c of combos) {
    if (picked.length >= count) break
    const key = tupleKey(c)
    if (seen.has(key)) continue
    seen.add(key)
    picked.push(c)
  }
  if (picked.length !== count) {
    throw new Error(`need ${count} unique combos, got ${picked.length} from ${combos.length} filtered`)
  }
  return picked
}

const combos = allCombos()
const picked = pickUniqueCombos(combos, COUNT)

const specJson = JSON.stringify(
  picked.map((c, i) => ({
    n: i + 1,
    slug: [
      c.rasterPatch,
      c.cssKey,
      c.svgRootRound || 'root-none',
      c.radicalPatch || 'rad-none',
      c.monkeypatch || 'mp-none',
      c.foAttrKey || 'attr-none',
      c.foSvgPatch || 'fosvg-none',
      c.svgMarkupPatch || 'markup-none',
      c.labPreRaster || 'preraster-none',
    ].join(' / '),
    idea: `Wave5 XL: ${c.rasterPatch} + ${knobCount(c)} structural knobs from tc-lab leaders`,
    cssKey: c.cssKey,
    rasterPatch: c.rasterPatch,
    svgRootRound: c.svgRootRound,
    radicalPatch: c.radicalPatch,
    monkeypatch: c.monkeypatch,
    foAttrPatch: c.foAttrPatch,
    foSvgPatch: c.foSvgPatch,
    svgMarkupPatch: c.svgMarkupPatch,
    labPreRaster: c.labPreRaster,
  })),
  null,
  2,
)
  .replace(/"cssKey":/g, 'cssKey:')
  .replace(/"n":/g, 'n:')
  .replace(/"slug":/g, 'slug:')
  .replace(/"idea":/g, 'idea:')
  .replace(/"rasterPatch":/g, 'rasterPatch:')
  .replace(/"svgRootRound":/g, 'svgRootRound:')
  .replace(/"radicalPatch":/g, 'radicalPatch:')
  .replace(/"monkeypatch":/g, 'monkeypatch:')
  .replace(/"foAttrPatch":/g, 'foAttrPatch:')
  .replace(/"foSvgPatch":/g, 'foSvgPatch:')
  .replace(/"svgMarkupPatch":/g, 'svgMarkupPatch:')
  .replace(/"labPreRaster":/g, 'labPreRaster:')

const body = `/**
 * Wave-5 XL lab-toCanvas leader combos — tc-lab-w5-xl-001..100.
 * Each row: 3–5 knobs from prior tc-lab / tc-only matrix leaders (CSS, viewBox, radical, MP, markup).
 * rasterPatch: lab-toCanvas | lab-toCanvas-decode | lab-toCanvas-frac.
 * active:true — FO raster only, no text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-xl-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'baseline':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    case 'baseline+leaf':
      return FO_BASELINE_CSS + LEAF
    case 'h2+chromium':
      return H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY
    case 'full':
      return H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY
    default:
      throw new Error(\`unknown cssKey: \${key}\`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null, labPreRaster?: string | null }[]} */
const SPECS = ${specJson}

if (SPECS.length !== ${COUNT}) {
  throw new Error(\`recipes-tocanvas-lab-wave5-xl.js: expected ${COUNT} specs, got \${SPECS.length}\`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error('recipes-tocanvas-lab-wave5-xl.js: duplicate slugs in SPECS')
}

/** @param {typeof SPECS[number]} spec */
function specKnobCount(spec) {
  let n = 0
  if (spec.cssKey !== 'none') n++
  if (spec.svgRootRound) n++
  if (spec.radicalPatch) n++
  if (spec.monkeypatch) n++
  if (spec.foAttrPatch) n++
  if (spec.foSvgPatch) n++
  if (spec.svgMarkupPatch) n++
  if (spec.labPreRaster) n++
  return n
}

for (const spec of SPECS) {
  const k = specKnobCount(spec)
  if (k < 3 || k > 5) {
    throw new Error(\`recipes-tocanvas-lab-wave5-xl.js: spec #\${spec.n} has \${k} knobs (need 3–5)\`)
  }
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.monkeypatch || spec.labPreRaster === 'device-grid-floor' ? 'both' : 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: \`tc-lab-w5-xl-\${num}\`,
    label: \`tc-lab-w5-xl #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: \`Wave5 XL; \${specKnobCount(spec)} knobs; FO raster only — no text bypass.\`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  if (spec.labPreRaster) recipe.labPreRaster = spec.labPreRaster
  return recipe
})

if (RECIPES.length !== ${COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave5-xl.js: expected ${COUNT} recipes, got \${RECIPES.length}\`,
  )
}

const seenKeys = new Set()
for (const r of RECIPES) {
  if (r.active !== true) {
    throw new Error(\`\${r.id}: active must be true\`)
  }
  const rp = r.rasterPatch
  if (rp !== 'lab-toCanvas' && rp !== 'lab-toCanvas-decode' && rp !== 'lab-toCanvas-frac') {
    throw new Error(\`\${r.id}: invalid rasterPatch \${rp}\`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.foAttrPatch ?? null),
    r.monkeypatch ?? '',
    r.css,
  ].join('\\0')
  if (seenKeys.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave5-xl.js: duplicate recipe key at \${r.id}\`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

await writeFile(OUT, body, 'utf8')
console.log(`[gen-tocanvas-lab-wave5-xl] wrote ${OUT} (${COUNT} recipes from ${combos.length} eligible combos)`)
