#!/usr/bin/env node
/**
 * Wave-4 lab toCanvas combinatorial shards: 6 × 100 = 600 recipes.
 * IDs: tc-lab-w4g{a..f}-{001..100}
 * Files: fo-recipes-shards/recipes-tocanvas-lab-wave4-gen-{a..f}.js
 *
 * Run: node __localtests__/gen-tocanvas-lab-wave4.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

const SHARD_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f']
const RECIPES_PER_SHARD = 100
const TOTAL = SHARD_LETTERS.length * RECIPES_PER_SHARD

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ key: string, css: string, label: string }[]} */
const CSS_VARIANTS = [
  { key: 'baseline', css: '', label: 'inject baseline CSS' },
  { key: 'fo', css: FO_BASELINE_CSS, label: 'FO_BASELINE_CSS' },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS, label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF, label: 'FO + flex leaf strut' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY, label: 'FO + Chromium copies' },
]

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
  })
}

/** @returns {Promise<{ keys: Set<string>, raster: Set<string>, rootRound: Set<string>, monkey: Set<string>, labPre: Set<string> }>} */
async function scanTocanvasShards() {
  const files = readdirSync(SHARDS_DIR).filter(
    (f) => f.startsWith('recipes-tocanvas') && f.endsWith('.js'),
  )
  const keys = new Set()
  const raster = new Set()
  const rootRound = new Set()
  const monkey = new Set()
  const labPre = new Set()

  for (const file of files) {
    if (file.includes('wave4-gen')) continue
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        keys.add(tupleKey(r))
        if (r.rasterPatch) raster.add(r.rasterPatch)
        if (r.svgRootRound) rootRound.add(r.svgRootRound)
        const mp = r.monkeypatch
        if (mp) {
          if (Array.isArray(mp)) for (const m of mp) monkey.add(m)
          else monkey.add(mp)
        }
        if (r.labPreRaster) labPre.add(r.labPreRaster)
      }
    } catch (err) {
      console.warn(`[wave4-gen] skip ${file}: ${/** @type {Error} */ (err).message}`)
    }
  }

  return { keys, raster, rootRound, monkey, labPre }
}

/** @param {string|null|undefined} v */
function norm(v) {
  return v == null ? null : v
}

/**
 * @param {{ name: string, values: (string|null)[] }[]} pools
 * @returns {Record<string, string|null>[]}
 */
function cartesian(pools) {
  /** @type {Record<string, string|null>[]} */
  const out = []
  /** @param {number} depth @param {Record<string, string|null>} cur */
  function rec(depth, cur) {
    if (depth === pools.length) {
      out.push({ ...cur })
      return
    }
    for (const v of pools[depth].values) {
      cur[pools[depth].name] = v
      rec(depth + 1, cur)
    }
  }
  rec(0, {})
  return out
}

/** @param {Record<string, string|null>} c @param {typeof CSS_VARIANTS[0]} cv */
function comboToRecipeFields(c, cv) {
  const inject = /** @type {'both'|'raster'} */ (c.inj)
  const useBaseline = inject === 'both' && cv.css === ''
  /** @type {Record<string, unknown>} */
  const extra = { inject, rasterPatch: c.rp }
  if (c.rr) extra.svgRootRound = c.rr
  if (c.mp) extra.monkeypatch = c.mp
  if (c.lpr) extra.labPreRaster = c.lpr
  return {
    rasterPatch: c.rp,
    css: useBaseline ? FO_BASELINE_CSS : cv.css,
    inject,
    extra,
    slugParts: [c.rp, c.rr ?? 'no-rr', c.mp ?? 'no-mp', c.lpr ?? 'no-lpr', cv.key, inject].filter(
      Boolean,
    ),
  }
}

/** @param {ReturnType<typeof comboToRecipeFields>[]} items @param {string} letter @param {string} theme */
function renderShard(letter, theme, items) {
  const specLines = items
    .map(({ slug, idea, css, inject, extra }, i) => {
      const n = i + 1
      const fmtExtra = () => {
        const lines = Object.entries(extra).map(([k, v]) => {
          if (Array.isArray(v)) {
            return `      ${k}: ${JSON.stringify(v)},`
          }
          return `      ${k}: ${JSON.stringify(v)},`
        })
        return `{\n${lines.join('\n')}\n    }`
      }
      return `  {
    n: ${n},
    slug: ${JSON.stringify(slug)},
    idea: ${JSON.stringify(idea)},
    css: ${JSON.stringify(css)},
    inject: ${JSON.stringify(inject)},
    extra: ${fmtExtra()},
  },`
    })
    .join('\n')

  return `/**
 * Lab toCanvas wave-4 gen shard ${letter} — ${theme}.
 * 100 recipes: tc-lab-w4g${letter}-001..100 — combinatorial lab-toCanvas mechanisms.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4g${letter}-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave4-gen-${letter}.js: expected ${RECIPES_PER_SHARD} specs, got \${SPECS.length}\`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== ${RECIPES_PER_SHARD}) {
  throw new Error(\`recipes-tocanvas-lab-wave4-gen-${letter}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: \`tc-lab-w4g${letter}-\${num}\`,
    label: \`w4g${letter} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: \`Wave-4 lab toCanvas gen ${letter}; FO raster only — no text bypass.\`,
    ...extra,
  }
})

if (RECIPES.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave4-gen-${letter}.js: expected ${RECIPES_PER_SHARD} recipes, got \${RECIPES.length}\`,
  )
}

const mpKey = (mp) => {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    mpKey(r.monkeypatch),
    r.css,
  ].join('\\0')
  if (seen.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave4-gen-${letter}.js: duplicate recipe key at \${r.id}\`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

const scanned = await scanTocanvasShards()
const usedKeys = new Set(scanned.keys)

/** Lab fork raster patches from existing tocanvas shards */
let LAB_RASTERS = [...scanned.raster].filter((p) => p.startsWith('lab-toCanvas')).sort()
if (!LAB_RASTERS.length) {
  LAB_RASTERS = ['lab-toCanvas', 'lab-toCanvas-decode', 'lab-toCanvas-frac']
}

const ROOT_ROUNDS = [null, ...[...scanned.rootRound].sort()]
const MONKEYPATCHES = [null, ...[...scanned.monkey].sort()]
const LAB_PRE = [null, ...[...scanned.labPre].sort()]

const INJECTS = ['both', 'raster']

/** @type {{ letter: string, theme: string, pools: { name: string, values: (string|null)[] }[] }[]} */
const SHARD_POOLS = [
  {
    letter: 'a',
    theme: 'lab-toCanvas × svgRootRound × inject × CSS × labPreRaster',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: [null, 'tc-draw-image-round-all', 'tc-canvas-backing-ceil'] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
    ],
  },
  {
    letter: 'b',
    theme: 'lab-toCanvas-decode × svgRootRound × monkeypatch',
    pools: [
      { name: 'rp', values: ['lab-toCanvas-decode'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: MONKEYPATCHES },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
    ],
  },
  {
    letter: 'c',
    theme: 'lab-toCanvas-frac × svgRootRound × monkeypatch',
    pools: [
      { name: 'rp', values: ['lab-toCanvas-frac'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: MONKEYPATCHES },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
    ],
  },
  {
    letter: 'd',
    theme: 'lab-toCanvas × monkeypatch × svgRootRound (draw probes)',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: MONKEYPATCHES },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: ['raster'] },
    ],
  },
  {
    letter: 'e',
    theme: 'lab-toCanvas × labPreRaster device-grid × svgRootRound',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: [null, 'tc-draw-image-round-all', 'tc-canvas-backing-ceil'] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
    ],
  },
  {
    letter: 'f',
    theme: 'all lab-toCanvas forks × svgRootRound × monkeypatch capstone',
    pools: [
      { name: 'rp', values: LAB_RASTERS },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'mp', values: MONKEYPATCHES },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
    ],
  },
]

/** @type {{ letter: string, theme: string, items: ReturnType<typeof comboToRecipeFields> & { slug: string, idea: string }[] }[]} */
const shardOutputs = []

for (const { letter, theme, pools } of SHARD_POOLS) {
  const grid = cartesian(pools)
  /** @type {(ReturnType<typeof comboToRecipeFields> & { slug: string, idea: string })[]} */
  const picked = []
  let stride = Math.max(1, Math.floor(grid.length / (RECIPES_PER_SHARD * CSS_VARIANTS.length)))

  outer: for (let attempt = 0; attempt < 8; attempt++) {
    picked.length = 0
    for (let gi = 0; gi < grid.length && picked.length < RECIPES_PER_SHARD; gi++) {
      const c = grid[(gi * stride + attempt) % grid.length]
      for (let ci = 0; ci < CSS_VARIANTS.length && picked.length < RECIPES_PER_SHARD; ci++) {
        const cv = CSS_VARIANTS[(gi + ci + attempt) % CSS_VARIANTS.length]
        const fields = comboToRecipeFields(
          {
            rp: c.rp,
            rr: norm(c.rr),
            mp: norm(c.mp),
            lpr: norm(c.lpr),
            inj: c.inj,
          },
          cv,
        )
        /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe} */
        const probe = {
          id: 'probe',
          label: 'probe',
          idea: 'probe',
          css: fields.css,
          inject: fields.inject,
          rasterPatch: fields.rasterPatch,
          ...fields.extra,
        }
        const key = tupleKey(probe)
        if (usedKeys.has(key)) continue
        usedKeys.add(key)
        const slug = fields.slugParts.join(' ')
        picked.push({
          ...fields,
          slug,
          idea: `${fields.rasterPatch} + ${cv.label}${c.rr ? ` + ${c.rr}` : ''}${c.mp ? ` + mp ${c.mp}` : ''}${c.lpr ? ` + ${c.lpr}` : ''} — wave-4 ${theme}`,
        })
      }
    }
    if (picked.length >= RECIPES_PER_SHARD) break outer
    stride = Math.max(1, stride - 1)
  }

  if (picked.length < RECIPES_PER_SHARD) {
  // fill remainder: lab-toCanvas + unique mp/rr pairs not yet used
    for (const rp of LAB_RASTERS) {
      for (const rr of ROOT_ROUNDS) {
        for (const mp of MONKEYPATCHES) {
          if (picked.length >= RECIPES_PER_SHARD) break
          for (const cv of CSS_VARIANTS) {
            if (picked.length >= RECIPES_PER_SHARD) break
            const fields = comboToRecipeFields(
              { rp, rr: norm(rr), mp: norm(mp), lpr: null, inj: 'both' },
              cv,
            )
            const probe = {
              id: 'probe',
              label: 'probe',
              idea: 'probe',
              css: fields.css,
              inject: fields.inject,
              rasterPatch: fields.rasterPatch,
              ...fields.extra,
            }
            const key = tupleKey(probe)
            if (usedKeys.has(key)) continue
            usedKeys.add(key)
            picked.push({
              ...fields,
              slug: `${fields.slugParts.join(' ')} fill`,
              idea: `${fields.rasterPatch} fill combo — wave-4 ${theme}`,
            })
          }
        }
      }
    }
  }

  if (picked.length !== RECIPES_PER_SHARD) {
    throw new Error(`shard ${letter}: expected ${RECIPES_PER_SHARD} unique combos, got ${picked.length}`)
  }

  shardOutputs.push({ letter, theme, items: picked.slice(0, RECIPES_PER_SHARD) })
}

let written = 0
for (const { letter, theme, items } of shardOutputs) {
  const file = join(SHARDS_DIR, `recipes-tocanvas-lab-wave4-gen-${letter}.js`)
  writeFileSync(file, renderShard(letter, theme, items))
  console.log(`wrote ${file} (${items.length} recipes)`)
  written += items.length
}

console.log(`\nGenerated ${written} wave-4 recipes (${SHARD_LETTERS.length} shards × ${RECIPES_PER_SHARD})`)
if (written !== TOTAL) {
  throw new Error(`expected ${TOTAL} recipes, got ${written}`)
}
