#!/usr/bin/env node
/**
 * Generate wave3 lab-toCanvas combinatorial shards (5 × 100 = 500 recipes).
 *
 *   node __localtests__/gen-tocanvas-lab-wave3.mjs
 *
 * Output: fo-recipes-shards/recipes-tocanvas-lab-wave3-gen-{e..i}.js
 * IDs: tc-lab-w3g-{e|f|g|h|i}-{001-100}
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3g-*'
 */
import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards')

const SHARDS = ['e', 'f', 'g', 'h', 'i']
const PER_SHARD = 100
const TOTAL = SHARDS.length * PER_SHARD

const RASTER_PATCHES = [
  { v: 'lab-toCanvas', label: 'lab-toCanvas fork' },
  { v: 'lab-toCanvas-decode', label: 'lab-toCanvas-decode fork' },
  { v: 'lab-toCanvas-frac', label: 'lab-toCanvas-frac fork' },
]

/** @type {{ key: string, label: string }[]} */
const CSS_KEYS = [
  { key: 'none', label: 'no extra CSS' },
  { key: 'baseline', label: 'FO_BASELINE_CSS' },
  { key: 'h2', label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'chromium', label: 'FO baseline + Chromium copy' },
  { key: 'leaf', label: 'FO baseline + flex leaf strut' },
  { key: 'baseline+leaf', label: 'FO baseline + leaf' },
  { key: 'h2+chromium', label: 'H2 normalize + Chromium' },
  { key: 'full', label: 'H2 normalize + leaf + Chromium' },
]

const ROOT_ROUNDS = [
  { v: null, label: 'no svgRootRound' },
  { v: 'integer-viewbox', label: 'integer-viewbox' },
  { v: 'round-dims', label: 'round-dims' },
  { v: 'int-floor', label: 'int-floor' },
]

const RADICALS = [
  { v: null, label: 'no radicalPatch' },
  { v: 'h2-fo-percent-int-viewbox', label: 'h2-fo-percent-int-viewbox' },
  { v: 'math-floor-viewbox-stash-frac', label: 'math-floor-viewbox-stash-frac' },
  { v: 'h2-pin-line-height-from-live', label: 'h2-pin-line-height-from-live' },
  { v: 'h2-flex-stretch-leaf-from-live', label: 'h2-flex-stretch-leaf-from-live' },
  { v: 'integer-snap-all-rects', label: 'integer-snap-all-rects' },
  { v: 'remove-fe-filters', label: 'remove-fe-filters' },
]

const MONKEYPATCHES = [
  { v: null, label: 'no monkeypatch' },
  { v: 'tc-draw-image-round-all', label: 'tc-draw-image-round-all' },
  { v: 'tc-canvas-backing-ceil', label: 'tc-canvas-backing-ceil' },
  { v: 'tc-decode-safari-raf', label: 'tc-decode-safari-raf' },
  { v: 'tc-lab-draw-h2-frac-draw', label: 'tc-lab-draw-h2-frac-draw' },
  { v: 'tc-lab-draw-two-stage', label: 'tc-lab-draw-two-stage' },
  { v: 'tc-lab-draw-supersample-downscale', label: 'tc-lab-draw-supersample-downscale' },
  { v: 'tc-lab-draw-create-image-bitmap', label: 'tc-lab-draw-create-image-bitmap' },
  { v: 'tc-lab-draw-create-image-bitmap-pixelated', label: 'tc-lab-draw-create-image-bitmap-pixelated' },
  { v: 'tc-lab-draw-device-grid-floor', label: 'tc-lab-draw-device-grid-floor' },
]

const FO_ATTRS = [
  { v: null, label: 'no foAttrPatch' },
  { v: 'xy', label: 'FO x/y +0.0001', patch: { x: '0.0001', y: '0.0001' } },
  { v: 'xywh', label: 'FO x/y/w/h +0.0001', patch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' } },
]

const FO_SVG = [
  { v: null, label: 'no foSvgPatch' },
  { v: 'fe-color-matrix-identity', label: 'fe-color-matrix-identity' },
  { v: 'fo-shape-rendering-auto', label: 'fo-shape-rendering-auto' },
]

const SVG_MARKUP = [
  { v: null, label: 'no svgMarkupPatch' },
  { v: 'explicit-xmlns-strip-transforms', label: 'explicit-xmlns-strip-transforms' },
  { v: 'base64-roundtrip', label: 'base64-roundtrip' },
]

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
    c.foAttr,
    c.foSvgPatch,
    c.svgMarkupPatch,
  ]
    .map(stable)
    .join('|')
}

/** @returns {Record<string, unknown>[]} */
function allCombos() {
  /** @type {Record<string, unknown>[]} */
  const out = []
  for (const rp of RASTER_PATCHES) {
    for (const css of CSS_KEYS) {
      for (const rr of ROOT_ROUNDS) {
        for (const rad of RADICALS) {
          for (const mp of MONKEYPATCHES) {
            for (const fa of FO_ATTRS) {
              for (const fs of FO_SVG) {
                for (const sm of SVG_MARKUP) {
                  out.push({
                    rasterPatch: rp.v,
                    rasterLabel: rp.label,
                    cssKey: css.key,
                    cssLabel: css.label,
                    svgRootRound: rr.v,
                    rootLabel: rr.label,
                    radicalPatch: rad.v,
                    radicalLabel: rad.label,
                    monkeypatch: mp.v,
                    mpLabel: mp.label,
                    foAttr: fa.v,
                    foAttrLabel: fa.label,
                    foAttrPatch: fa.patch ?? null,
                    foSvgPatch: fs.v,
                    foSvgLabel: fs.label,
                    svgMarkupPatch: sm.v,
                    svgMarkupLabel: sm.label,
                  })
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
  for (let i = 0; picked.length < count && i < combos.length * 2; i++) {
    const c = combos[(i * stride) % combos.length]
    const key = tupleKey(c)
    if (seen.has(key)) continue
    seen.add(key)
    picked.push(c)
  }
  if (picked.length < count) {
    for (const c of combos) {
      if (picked.length >= count) break
      const key = tupleKey(c)
      if (seen.has(key)) continue
      seen.add(key)
      picked.push(c)
    }
  }
  if (picked.length !== count) {
    throw new Error(`need ${count} unique combos, got ${picked.length} from ${combos.length} cartesian`)
  }
  return picked
}

/** @param {string} shard @param {Record<string, unknown>[]} specs */
function renderShard(shard, specs) {
  if (specs.length !== PER_SHARD) {
    throw new Error(`shard ${shard}: expected ${PER_SHARD} specs, got ${specs.length}`)
  }

  const specJson = JSON.stringify(
    specs.map((c, i) => ({
      n: i + 1,
      slug: [
        c.rasterPatch,
        c.cssKey,
        c.svgRootRound || 'root-none',
        c.radicalPatch || 'rad-none',
        c.monkeypatch || 'mp-none',
        c.foAttr || 'attr-none',
        c.foSvgPatch || 'fosvg-none',
        c.svgMarkupPatch || 'markup-none',
      ].join(' / '),
      idea:
        `${c.rasterLabel} + ${c.cssLabel} + ${c.rootLabel}` +
        (c.radicalPatch ? ` + ${c.radicalLabel}` : '') +
        (c.monkeypatch ? ` + ${c.mpLabel}` : '') +
        (c.foAttr ? ` + ${c.foAttrLabel}` : '') +
        (c.foSvgPatch ? ` + ${c.foSvgLabel}` : '') +
        (c.svgMarkupPatch ? ` + ${c.svgMarkupLabel}` : ''),
      cssKey: c.cssKey,
      rasterPatch: c.rasterPatch,
      svgRootRound: c.svgRootRound,
      radicalPatch: c.radicalPatch,
      monkeypatch: c.monkeypatch,
      foAttrPatch: c.foAttrPatch,
      foSvgPatch: c.foSvgPatch,
      svgMarkupPatch: c.svgMarkupPatch,
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

  return `/**
 * Lab toCanvas wave3 generated shard (${shard}) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w3g-${shard}-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3g-${shard}-*'
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

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null }[]} */
const SPECS = ${specJson}

if (SPECS.length !== ${PER_SHARD}) {
  throw new Error(\`recipes-tocanvas-lab-wave3-gen-${shard}.js: expected ${PER_SHARD} specs, got \${SPECS.length}\`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(\`recipes-tocanvas-lab-wave3-gen-${shard}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.monkeypatch ? 'both' : 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: \`tc-lab-w3g-${shard}-\${num}\`,
    label: \`tc-lab-w3g-${shard} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: \`Wave3 gen shard ${shard}; FO-raster lab-toCanvas combinator — no text bypass.\`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  return recipe
})

if (RECIPES.length !== ${PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave3-gen-${shard}.js: expected ${PER_SHARD} recipes, got \${RECIPES.length}\`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

const combos = allCombos()
const picked = pickUniqueCombos(combos, TOTAL)

/** @type {string[]} */
const written = []
for (let si = 0; si < SHARDS.length; si++) {
  const shard = SHARDS[si]
  const slice = picked.slice(si * PER_SHARD, (si + 1) * PER_SHARD)
  const path = join(OUT, `recipes-tocanvas-lab-wave3-gen-${shard}.js`)
  await writeFile(path, renderShard(shard, slice), 'utf8')
  written.push(path)
}

console.log(`[gen-tocanvas-lab-wave3] wrote ${written.length} shards × ${PER_SHARD} = ${TOTAL} recipes`)
for (const p of written) {
  console.log(`  ${p}`)
}
console.log(
  `[gen-tocanvas-lab-wave3] matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3g-*'`,
)
console.log(`[gen-tocanvas-lab-wave3] grep: tc-lab-w3g-`)
