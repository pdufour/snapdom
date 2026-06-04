#!/usr/bin/env node
/**
 * Inventory toCanvas recipes (tc-lab-* and tc-only-*) and emit JSON stats.
 *
 *   node __localtests__/inventory-tocanvas-recipes.mjs --json
 *
 * Optional:
 *   node __localtests__/inventory-tocanvas-recipes.mjs --emit-wave9-fill
 *   # writes: __localtests__/fo-recipes-shards/recipes-tocanvas-lab-wave9-fill.js
 */
import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join('|')
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
    labToCanvasOpts: r.labToCanvasOpts ?? null,
    labToCanvasCtx: r.labToCanvasCtx ?? null,
    labToCanvasTiming: r.labToCanvasTiming ?? null,
    labLoadPipeline: r.labLoadPipeline ?? null,
    radicalOptions: r.radicalOptions ?? null,
  })
}

/** @returns {Promise<import('./fo-fix-recipe-shared.js').FoFixRecipe[]>} */
async function loadToCanvasRecipes() {
  const files = (await readdir(SHARDS_DIR))
    .filter((f) => f.endsWith('.js') && f.startsWith('recipes-tocanvas'))
    .sort()

  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */
  const all = []
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        if (!r?.id) continue
        if (r.id.startsWith('tc-lab') || r.id.startsWith('tc-only')) {
          all.push({ ...r, _shard: file })
        }
      }
    } catch (err) {
      console.warn(
        `[inventory-tocanvas-recipes] skip ${file}: ${/** @type {Error} */ (err).message}`,
      )
    }
  }
  return all
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} recipes */
function countByRasterPatch(recipes) {
  /** @type {Record<string, number>} */
  const counts = {}
  for (const r of recipes) {
    const rp = r.rasterPatch ?? 'none'
    counts[rp] = (counts[rp] ?? 0) + 1
  }
  return counts
}

/** @param {Record<string, number>} counts */
function sortedCountEntries(counts) {
  return Object.entries(counts).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
}

/** Minimal universe for gap-fill targeting (historical + observed). */
function knownRasterPatchUniverse(observedKeys) {
  const fromWave5 = [
    'none',
    'canvas-pixelated',
    'fonts-ready',
    'offscreen-canvas',
    'will-read-frequently',
    'direct',
    'blob-url-early-revoke',
    'blob-url-fetch-revoke',
    'create-image-bitmap-premultiply',
    'svg-dataurl-double-encode',
    'v2-double-svg-encode',
    'bitmap-close',
    'load-event-interval',
    'pre-decode-dom',
    'flip-y',
    'double-raster-average',
    'double-raster-difference',
    'canvas-filter-invert',
    'supersample-downscale',
    'h2-supersample-dpr-lt2',
    'canvas-from-live',
    'no-fo-capture',
    'composite-copy',
    'phantom-font-prime',
    'context-alpha-false-desync',
    'scale-down-up',
    'html-to-canvas-direct',
    'html2canvas-live-draw',
    'bitmaprenderer-transfer',
    'img-srcset-1x',
    'webp-roundtrip',
    'triple-raf-flush',
    'canvas-putImageData-live-snapshot',
    'element-capture-bitmap',
    'wait-fonts-500ms',
    'iframe-serialized-svg-decode',
    'node-layer-datauri-blob',
  ]

  const universe = new Set(fromWave5)
  for (const k of observedKeys) universe.add(k)
  return [...universe].sort()
}

export async function inventoryToCanvasRecipes() {
  const all = await loadToCanvasRecipes()
  const tcLab = all.filter((r) => r.id.startsWith('tc-lab'))
  const tcOnly = all.filter((r) => r.id.startsWith('tc-only'))

  const tcLabCounts = countByRasterPatch(tcLab)
  const tcOnlyCounts = countByRasterPatch(tcOnly)
  const allCounts = countByRasterPatch(all)

  const universe = knownRasterPatchUniverse(Object.keys(allCounts))
  /** @type {Record<string, { tcLab: number, tcOnly: number, total: number }>} */
  const rasterPatch = {}
  for (const rp of universe) {
    rasterPatch[rp] = {
      tcLab: tcLabCounts[rp] ?? 0,
      tcOnly: tcOnlyCounts[rp] ?? 0,
      total: allCounts[rp] ?? 0,
    }
  }

  /** @type {Map<string, string[]>} */
  const idToShards = new Map()
  for (const r of all) {
    const shard = /** @type {string} */ (r._shard)
    const list = idToShards.get(r.id) ?? []
    list.push(shard)
    idToShards.set(r.id, list)
  }
  const duplicateIds = [...idToShards.entries()]
    .filter(([, shards]) => shards.length > 1)
    .map(([id, shards]) => ({ id, shards }))

  const allTupleKeys = new Set()
  for (const r of all) allTupleKeys.add(tupleKey(r))

  const tcLabSorted = sortedCountEntries(tcLabCounts).slice(0, 50)

  return {
    totals: {
      toCanvasRecipeCount: all.length,
      tcLabCount: tcLab.length,
      tcOnlyCount: tcOnly.length,
    },
    duplicates: {
      duplicateIdCount: duplicateIds.length,
      duplicateIds,
    },
    rasterPatch,
    tcLabRareRasterPatches: tcLabSorted.map(([rp, count]) => ({ rasterPatch: rp, count })),
    _internal: {
      tupleKeyCount: allTupleKeys.size,
    },
  }
}

/**
 * Emit the wave9 gap-fill shard.
 * @param {Awaited<ReturnType<typeof inventoryToCanvasRecipes>>} report
 */
async function emitWave9Fill(report) {
  const outFile = join(SHARDS_DIR, 'recipes-tocanvas-lab-wave9-fill.js')
  const COUNT = 100

  // Prefer tcLab zero-count first, then tcLab count<=1, then count<=2.
  const ranked = Object.entries(report.rasterPatch)
    .map(([rp, v]) => ({ rp, tcLab: v.tcLab }))
    .sort((a, b) => a.tcLab - b.tcLab || a.rp.localeCompare(b.rp))

  /** @type {{ rasterPatch: string, variant: 'bare'|'baseline'|'h2'|'round-dims' }[]} */
  const picked = []
  const seen = new Set()
  function add(rp, variant) {
    const key = `${rp}\0${variant}`
    if (seen.has(key)) return false
    seen.add(key)
    picked.push({ rasterPatch: rp, variant })
    return true
  }

  for (const { rp, tcLab } of ranked) {
    if (picked.length >= COUNT) break
    if (tcLab === 0) add(rp, 'bare')
  }
  for (const { rp, tcLab } of ranked) {
    if (picked.length >= COUNT) break
    if (tcLab <= 1) add(rp, 'baseline')
  }
  for (const { rp, tcLab } of ranked) {
    if (picked.length >= COUNT) break
    if (tcLab <= 2) add(rp, 'h2')
  }
  for (const { rp } of ranked) {
    if (picked.length >= COUNT) break
    add(rp, 'round-dims')
  }

  if (picked.length !== COUNT) {
    throw new Error(`emitWave9Fill: expected ${COUNT} picks, got ${picked.length}`)
  }

  const specLines = picked
    .map((p, i) => {
      const n = i + 1
      return `  { n: ${n}, rasterPatch: ${JSON.stringify(p.rasterPatch)}, variant: ${JSON.stringify(p.variant)} },`
    })
    .join('\n')

  const body = `/**
 * Wave-9 gap-fill from inventory stats — tc-lab-w9-fill-001..100.
 * Targets underrepresented rasterPatch values among existing tc-lab recipes.
 *
 * Generated by: node __localtests__/inventory-tocanvas-recipes.mjs --emit-wave9-fill
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-fill-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, rasterPatch: string, variant: 'bare'|'baseline'|'h2'|'round-dims' }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave9-fill.js: expected ${COUNT} specs, got \${SPECS.length}\`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const r = {
    id: \`tc-lab-w9-fill-\${num}\`,
    label: \`w9-fill #\${spec.n}: \${spec.rasterPatch} \${spec.variant}\`,
    idea: \`Wave9 gap-fill: rasterPatch=\${spec.rasterPatch} (\${spec.variant})\`,
    css: '',
    inject: 'raster',
    category: 'gap',
    active: true,
    notes: 'Wave9 gap-fill derived from inventory; FO raster only — no text bypass.',
  }

  if (spec.rasterPatch !== 'none') {
    r.rasterPatch = spec.rasterPatch
  }

  switch (spec.variant) {
    case 'bare':
      break
    case 'baseline':
      r.inject = 'both'
      r.css = FO_BASELINE_CSS
      break
    case 'h2':
      r.inject = 'both'
      r.css = H2_RASTER_NORMALIZE_CSS
      break
    case 'round-dims':
      r.svgRootRound = 'round-dims'
      break
    default:
      throw new Error(\`unknown variant: \${/** @type {any} */ (spec.variant)}\`)
  }

  return r
})

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? 'none',
    r.svgRootRound ?? '',
    r.monkeypatch ?? '',
    r.radicalPatch ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\\0')
  if (seen.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave9-fill.js: duplicate recipe key at \${r.id}\`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

  await writeFile(outFile, body)
  return outFile
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  ;(async () => {
    const json = process.argv.includes('--json')
    const emitFill = process.argv.includes('--emit-wave9-fill')
    const report = await inventoryToCanvasRecipes()

    if (emitFill) {
      const out = await emitWave9Fill(report)
      console.log(`[inventory-tocanvas-recipes] wrote ${out}`)
    }

    if (json) {
      console.log(JSON.stringify(report, null, 2))
    } else {
      console.log(
        '[inventory-tocanvas-recipes] toCanvas recipes:',
        report.totals.toCanvasRecipeCount,
      )
      console.log('[inventory-tocanvas-recipes] tc-lab recipes:', report.totals.tcLabCount)
      console.log('[inventory-tocanvas-recipes] tc-only recipes:', report.totals.tcOnlyCount)
      console.log(
        '[inventory-tocanvas-recipes] duplicate ids:',
        report.duplicates.duplicateIdCount ? report.duplicates.duplicateIdCount : 'none',
      )
    }

    if (report.duplicates.duplicateIdCount) process.exitCode = 1
  })().catch((err) => {
    console.error('[inventory-tocanvas-recipes] fatal:', err)
    process.exitCode = 1
  })
}

