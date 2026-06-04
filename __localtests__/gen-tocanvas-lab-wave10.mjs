#!/usr/bin/env node
/**
 * Wave-10 lab toCanvas combinatorial shards: 25 × 100 = 2500 recipes.
 * Raster: lab-toCanvas only.
 * IDs: tc-lab-w10g-{01..25}-{001..100}
 * Files: fo-recipes-shards/recipes-tocanvas-lab-wave10-gen-{01..25}.js
 *
 * Run: node __localtests__/gen-tocanvas-lab-wave10.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10g-*'
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

const SHARD_NUMS = Array.from({ length: 25 }, (_, i) => String(i + 1).padStart(2, '0'))
const RECIPES_PER_SHARD = 100
const TOTAL = SHARD_NUMS.length * RECIPES_PER_SHARD
const RASTER = 'lab-toCanvas'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ key: string, css: string, label: string }[]} */
const CSS_VARIANTS = [
  { key: 'baseline', css: FO_BASELINE_CSS, label: 'FO_BASELINE_CSS' },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS, label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF, label: 'FO + flex leaf strut' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY, label: 'FO + Chromium copies' },
  { key: 'h2+leaf', css: H2_RASTER_NORMALIZE_CSS + LEAF, label: 'H2 + leaf strut' },
  { key: 'h2+chromium', css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY, label: 'H2 + Chromium' },
  { key: 'full', css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY, label: 'H2 + leaf + Chromium' },
  { key: 'none', css: '', label: 'inject baseline CSS only' },
]

const ROOT_ROUNDS = [
  null,
  'integer-viewbox',
  'round-dims',
  'int-floor',
  'ceil-dims',
  'floor-dims',
]

const RADICALS = [
  null,
  'h2-fo-percent-int-viewbox',
  'math-floor-viewbox-stash-frac',
  'h2-pin-line-height-from-live',
  'h2-flex-stretch-leaf-from-live',
  'integer-snap-all-rects',
  'remove-fe-filters',
  'math-pin-fo-container-dims-from-live-root',
]

const MONKEYPATCHES = [
  null,
  'tc-draw-image-round-all',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-decode-safari-raf',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
  'tc-lab-draw-create-image-bitmap-pixelated',
  'tc-lab-draw-device-grid-floor',
  'decode-interval',
  'decode-wrap',
  'image-decode-twice',
  'raf-before-draw',
  'createImageBitmap-high',
]

const LAB_PRE = [
  null,
  'device-grid-floor',
  'device-grid-ceil',
  'backing-store-match-dpr',
  'canvas-pixelated',
  'double-decode',
  'triple-decode',
  'two-stage',
  'fonts-ready',
  'double-raf',
  'decode-interval',
  'decode-interval-raf',
  'offscreen-canvas',
  'will-read-frequently',
]

const FO_ATTRS = [
  null,
  { x: '0.0001', y: '0.0001' },
  { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' },
  { width: '0.0001', height: '0.0001' },
]

const FO_SVG = [
  null,
  'fe-color-matrix-identity',
  'fo-shape-rendering-auto',
  'filter-empty-nop',
  'fe-morphology-identity',
  'fe-merge-empty',
]

const SVG_MARKUP = [
  null,
  'explicit-xmlns-strip-transforms',
  'base64-roundtrip',
  'strip-xml-declaration',
  'explicit-xmlns',
  'strip-identity-transforms',
  'strip-all-transforms',
]

const INJECTS = ['both', 'raster']

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function tupleKey(r) {
  return JSON.stringify({
    inject: r.inject,
    rasterPatch: r.rasterPatch ?? null,
    css: r.css ?? '',
    svgRootRound: r.svgRootRound ?? null,
    monkeypatch: mpKey(r.monkeypatch),
    labPreRaster: r.labPreRaster ?? null,
    foSvgPatch: r.foSvgPatch ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    radicalPatch: r.radicalPatch ?? null,
    svgRootPatch: r.svgRootPatch ?? null,
    radicalOptions: r.radicalOptions ?? null,
    foAttrPatch: r.foAttrPatch ?? null,
  })
}

/** @returns {Promise<Set<string>>} */
async function scanExistingKeys() {
  const files = readdirSync(SHARDS_DIR).filter(
    (f) => f.startsWith('recipes-tocanvas') && f.endsWith('.js'),
  )
  const keys = new Set()
  for (const file of files) {
    if (file.includes('wave10-gen')) continue
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        keys.add(tupleKey(r))
      }
    } catch (err) {
      console.warn(`[wave10-gen] skip ${file}: ${/** @type {Error} */ (err).message}`)
    }
  }
  return keys
}

/** @returns {Record<string, unknown>[]} */
function allCombos() {
  /** @type {Record<string, unknown>[]} */
  const out = []
  for (const cv of CSS_VARIANTS) {
    for (const rr of ROOT_ROUNDS) {
      for (const rad of RADICALS) {
        for (const mp of MONKEYPATCHES) {
          for (const lpr of LAB_PRE) {
            for (const fa of FO_ATTRS) {
              for (const fs of FO_SVG) {
                for (const sm of SVG_MARKUP) {
                  for (const inj of INJECTS) {
                    out.push({
                      cv,
                      rr,
                      rad,
                      mp,
                      lpr,
                      fa,
                      fs,
                      sm,
                      inj,
                    })
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

/**
 * @param {Record<string, unknown>} c
 * @returns {import('./fo-fix-recipe-shared.js').FoFixRecipe}
 */
function comboToProbe(c) {
  const cv = /** @type {(typeof CSS_VARIANTS)[0]} */ (c.cv)
  const inj = /** @type {'both'|'raster'} */ (c.inj)
  const useBaseline = inj === 'both' && cv.css === ''
  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe} */
  const probe = {
    id: 'probe',
    label: 'probe',
    idea: 'probe',
    css: useBaseline ? FO_BASELINE_CSS : cv.css,
    inject: inj,
    rasterPatch: RASTER,
    category: 'tocanvas',
  }
  if (c.rr) probe.svgRootRound = /** @type {string} */ (c.rr)
  if (c.rad) probe.radicalPatch = /** @type {string} */ (c.rad)
  if (c.mp) probe.monkeypatch = /** @type {string} */ (c.mp)
  if (c.lpr) probe.labPreRaster = /** @type {string} */ (c.lpr)
  if (c.fa) probe.foAttrPatch = /** @type {Record<string, string>} */ (c.fa)
  if (c.fs) probe.foSvgPatch = /** @type {string} */ (c.fs)
  if (c.sm) probe.svgMarkupPatch = /** @type {string} */ (c.sm)
  return probe
}

/** @param {Record<string, unknown>} c */
function comboSlug(c) {
  const cv = /** @type {(typeof CSS_VARIANTS)[0]} */ (c.cv)
  return [
    RASTER,
    cv.key,
    c.rr || 'root-none',
    c.rad || 'rad-none',
    c.mp || 'mp-none',
    c.lpr || 'lpr-none',
    c.fa ? 'fo-attr' : 'attr-none',
    c.fs || 'fosvg-none',
    c.sm || 'markup-none',
    c.inj,
  ].join(' / ')
}

/** @param {Record<string, unknown>} c */
function comboIdea(c) {
  const cv = /** @type {(typeof CSS_VARIANTS)[0]} */ (c.cv)
  const parts = [`${RASTER} + ${cv.label}`]
  if (c.rr) parts.push(String(c.rr))
  if (c.rad) parts.push(String(c.rad))
  if (c.mp) parts.push(`mp ${c.mp}`)
  if (c.lpr) parts.push(`lpr ${c.lpr}`)
  if (c.fa) parts.push('foAttr +0.0001')
  if (c.fs) parts.push(String(c.fs))
  if (c.sm) parts.push(String(c.sm))
  parts.push(`inject ${c.inj}`)
  return parts.join(' + ')
}

/**
 * @param {Record<string, unknown>[]} combos
 * @param {number} count
 * @param {Set<string>} usedKeys
 */
function pickUnique(combos, count, usedKeys) {
  /** @type {Record<string, unknown>[]} */
  const picked = []
  const stride = Math.max(1, Math.floor(combos.length / count))
  for (let pass = 0; pass < 16 && picked.length < count; pass++) {
    for (let i = 0; i < combos.length && picked.length < count; i++) {
      const c = combos[(i * stride + pass) % combos.length]
      const key = tupleKey(comboToProbe(c))
      if (usedKeys.has(key)) continue
      usedKeys.add(key)
      picked.push(c)
    }
  }
  if (picked.length < count) {
    for (const c of combos) {
      if (picked.length >= count) break
      const key = tupleKey(comboToProbe(c))
      if (usedKeys.has(key)) continue
      usedKeys.add(key)
      picked.push(c)
    }
  }
  if (picked.length !== count) {
    throw new Error(`need ${count} unique lab-toCanvas combos, got ${picked.length}`)
  }
  return picked
}

/**
 * @param {string} shardNum
 * @param {Record<string, unknown>[]} specs
 */
function renderShard(shardNum, specs) {
  const specLines = specs
    .map((c, i) => {
      const cv = /** @type {(typeof CSS_VARIANTS)[0]} */ (c.cv)
      const inj = /** @type {'both'|'raster'} */ (c.inj)
      const n = i + 1
      const extra = []
      if (c.rr) extra.push(`      svgRootRound: ${JSON.stringify(c.rr)},`)
      if (c.rad) extra.push(`      radicalPatch: ${JSON.stringify(c.rad)},`)
      if (c.mp) extra.push(`      monkeypatch: ${JSON.stringify(c.mp)},`)
      if (c.lpr) extra.push(`      labPreRaster: ${JSON.stringify(c.lpr)},`)
      if (c.fa) extra.push(`      foAttrPatch: ${JSON.stringify(c.fa)},`)
      if (c.fs) extra.push(`      foSvgPatch: ${JSON.stringify(c.fs)},`)
      if (c.sm) extra.push(`      svgMarkupPatch: ${JSON.stringify(c.sm)},`)
      const extraBlock =
        extra.length > 0 ? `    extra: {\n${extra.join('\n')}\n    },` : '    extra: {},'
      return `  {\n    n: ${n},\n    slug: ${JSON.stringify(comboSlug(c))},\n    idea: ${JSON.stringify(
        comboIdea(c),
      )},\n    cssKey: ${JSON.stringify(cv.key)},\n    inject: ${JSON.stringify(
        inj,
      )},\n${extraBlock}\n  },`
    })
    .join('\n')

  return `/**
 * Lab toCanvas wave-10 gen shard ${shardNum} — lab-toCanvas only combinatorial probes.
 * 100 recipes: tc-lab-w10g-${shardNum}-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10g-${shardNum}-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'baseline':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'h2+leaf':
      return H2_RASTER_NORMALIZE_CSS + LEAF
    case 'h2+chromium':
      return H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY
    case 'full':
      return H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY
    case 'none':
      return ''
    default:
      throw new Error(\`unknown cssKey: \${key}\`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave10-gen-\${shardNum}.js: expected ${RECIPES_PER_SHARD} specs, got \${SPECS.length}\`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== ${RECIPES_PER_SHARD}) {
  throw new Error(\`recipes-tocanvas-lab-wave10-gen-\${shardNum}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const css =
    spec.inject === 'both' && spec.cssKey === 'none'
      ? FO_BASELINE_CSS
      : resolveCss(spec.cssKey)
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: \`tc-lab-w10g-${shardNum}-\${num}\`,
    label: \`w10g${shardNum} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css,
    inject: spec.inject,
    rasterPatch: '${RASTER}',
    category: 'tocanvas',
    active: true,
    notes: \`Wave-10 lab toCanvas gen ${shardNum}; lab-toCanvas only — FO raster, no text bypass.\`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave10-gen-\${shardNum}.js: expected ${RECIPES_PER_SHARD} recipes, got \${RECIPES.length}\`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== '${RASTER}') {
    throw new Error(
      \`recipes-tocanvas-lab-wave10-gen-\${shardNum}.js: expected lab-toCanvas only, got \${r.rasterPatch}\`,
    )
  }
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.foAttrPatch ?? null),
    r.monkeypatch ?? '',
    r.css,
  ].join('\\0')
  if (seen.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave10-gen-\${shardNum}.js: duplicate recipe key at \${r.id}\`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

async function main() {
  const usedKeys = await scanExistingKeys()
  const combos = allCombos()
  const picked = pickUnique(combos, TOTAL, usedKeys)

  let written = 0
  for (let si = 0; si < SHARD_NUMS.length; si++) {
    const shardNum = SHARD_NUMS[si]
    const slice = picked.slice(si * RECIPES_PER_SHARD, (si + 1) * RECIPES_PER_SHARD)
    const file = join(SHARDS_DIR, `recipes-tocanvas-lab-wave10-gen-${shardNum}.js`)
    writeFileSync(file, renderShard(shardNum, slice))
    console.log(`wrote ${file} (${slice.length} recipes)`)
    written += slice.length
  }

  console.log(
    `\nGenerated ${written} wave-10 recipes (${SHARD_NUMS.length} shards × ${RECIPES_PER_SHARD}, ${RASTER} only)`,
  )
  if (written !== TOTAL) {
    throw new Error(`expected ${TOTAL} recipes, got ${written}`)
  }
  console.log(
    `Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10g-*'`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

