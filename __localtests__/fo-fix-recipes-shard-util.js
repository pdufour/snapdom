/**
 * Shard module shape — safe for browser and Node (no node:fs).
 * @param {Record<string, unknown>} mod
 * @param {string} file
 * @returns {import('./fo-fix-recipe-shared.js').FoFixRecipe[]}
 */
export function recipesFromShardModule(mod, file) {
  const recipes =
    mod.FO_FIX_RECIPES_SHARD ??
    mod.RECIPES ??
    mod.default ??
    mod.FO_FIX_RECIPES ??
    []
  if (!Array.isArray(recipes)) {
    throw new Error(`${file}: expected FO_FIX_RECIPES_SHARD (or RECIPES / default) array export`)
  }
  return recipes
}
