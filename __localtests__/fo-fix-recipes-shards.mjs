#!/usr/bin/env node
/**
 * Node-only: list and dynamic-import fo-recipes-shards/*.js
 */
import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

/** @param {string} file */
export function isRecipeShardFile(file) {
  return (
    file.endsWith('.js') &&
    !file.startsWith('discover-shards') &&
    file !== 'index.js'
  )
}

/** @returns {Promise<string[]>} */
export async function listRecipeShardFiles() {
  return (await readdir(SHARDS_DIR)).filter(isRecipeShardFile).sort()
}

/** @returns {Promise<{ file: string, recipes: import('./fo-fix-recipe-shared.js').FoFixRecipe[] }[]>} */
export async function loadRecipeShards() {
  const files = await listRecipeShardFiles()
  /** @type {{ file: string, recipes: import('./fo-fix-recipe-shared.js').FoFixRecipe[] }[]} */
  const entries = []
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      entries.push({ file, recipes: recipesFromShardModule(mod, file) })
    } catch (err) {
      console.warn(
        `[fo-recipes-shards] skip ${file}: ${/** @type {Error} */ (err)?.message || String(err)}`,
      )
    }
  }
  return entries
}
