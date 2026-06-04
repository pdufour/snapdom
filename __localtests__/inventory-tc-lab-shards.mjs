#!/usr/bin/env node
/**
 * Inventory tc-lab-* recipes across recipes-tocanvas-lab* shards.
 *
 *   node __localtests__/inventory-tc-lab-shards.mjs [--json]
 */
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

/** @param {unknown} mp */
export function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join('|')
  return String(mp)
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
export function knobHash(r) {
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
    radicalOptions: r.radicalOptions ?? null,
  })
}

/** @returns {Promise<import('./fo-fix-recipe-shared.js').FoFixRecipe[]>} */
async function loadTcLabRecipes() {
  const files = (await readdir(SHARDS_DIR))
    .filter((f) => f.endsWith('.js') && f.startsWith('recipes-tocanvas-lab'))
    .sort()
  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */
  const all = []
  for (const file of files) {
    const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
    for (const r of recipesFromShardModule(mod, file)) {
      if (r?.id?.startsWith('tc-lab')) all.push({ ...r, _shard: file })
    }
  }
  return all
}

export async function inventoryTcLabShards() {
  const recipes = await loadTcLabRecipes()
  /** @type {Map<string, string[]>} */
  const idToShards = new Map()
  /** @type {Map<string, string[]>} */
  const hashToIds = new Map()
  let active = 0

  for (const r of recipes) {
    const shard = /** @type {string} */ (r._shard)
    const idList = idToShards.get(r.id) ?? []
    idList.push(shard)
    idToShards.set(r.id, idList)

    const h = knobHash(r)
    const hashIds = hashToIds.get(h) ?? []
    hashIds.push(r.id)
    hashToIds.set(h, hashIds)

    if (r.active !== false) active++
  }

  const duplicateIds = [...idToShards.entries()]
    .filter(([, shards]) => shards.length > 1)
    .map(([id, shards]) => ({ id, shards }))

  const duplicateKnobHashes = [...hashToIds.entries()]
    .filter(([, ids]) => ids.length > 1)
    .map(([hash, ids]) => ({ hash, ids }))

  const shardFiles = [...new Set(recipes.map((r) => r._shard))].sort()

  return {
    totalTcLab: recipes.length,
    activeCount: active,
    shardFileCount: shardFiles.length,
    shardFiles,
    duplicateIds,
    duplicateKnobHashes,
    knobHashSet: new Set([...hashToIds.keys()]),
  }
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  const json = process.argv.includes('--json')
  inventoryTcLabShards()
    .then((report) => {
      if (json) {
        console.log(
          JSON.stringify(
            {
              ...report,
              knobHashSet: report.knobHashSet.size,
            },
            null,
            2,
          ),
        )
      } else {
        console.log('[tc-lab inventory] shards:', report.shardFileCount)
        console.log('[tc-lab inventory] recipes:', report.totalTcLab)
        console.log('[tc-lab inventory] active:', report.activeCount)
        console.log(
          '[tc-lab inventory] duplicate ids:',
          report.duplicateIds.length
            ? report.duplicateIds.map((d) => d.id).join(', ')
            : 'none',
        )
        console.log(
          '[tc-lab inventory] duplicate knob hashes:',
          report.duplicateKnobHashes.length,
        )
        if (report.duplicateKnobHashes.length) {
          for (const d of report.duplicateKnobHashes.slice(0, 5)) {
            console.log('  ', d.ids.join(' = '))
          }
        }
      }
      if (report.duplicateIds.length) process.exitCode = 1
    })
    .catch((err) => {
      console.error(err)
      process.exitCode = 1
    })
}
