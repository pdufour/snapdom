#!/usr/bin/env node
/**
 * Optional validator for fo-recipes-shards (no file rewrite).
 *
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes --json
 *
 * Legacy alias: --validate-only
 */
import { loadRecipeShards } from './fo-fix-recipes-shards.mjs'

/** @returns {Promise<{ duplicateIds: string[], shardCounts: { file: string, count: number }[], mergedTotal: number, activeCount: number, inactiveFromIndex: number }>} */
export async function validateMergedRecipes() {
  const shardEntries = await loadRecipeShards()
  /** @type {string[]} */
  const duplicateIds = []
  /** @type {Set<string>} */
  const seen = new Set()
  /** @type {{ file: string, count: number }[]} */
  const shardCounts = []
  let mergedTotal = 0

  for (const { file, recipes } of shardEntries) {
    let added = 0
    for (const r of recipes) {
      if (!r?.id) continue
      if (seen.has(r.id)) duplicateIds.push(r.id)
      else {
        seen.add(r.id)
        added++
        mergedTotal++
      }
    }
    shardCounts.push({ file, count: added })
  }

  const inactiveFromIndex = Math.floor(mergedTotal / 2)
  return {
    duplicateIds,
    shardCounts,
    mergedTotal,
    activeCount: inactiveFromIndex,
    inactiveFromIndex,
  }
}

/** @param {{ json?: boolean }} [opts] */
export async function runCheckDupesCli(opts = {}) {
  const report = await validateMergedRecipes()

  if (opts.json) {
    console.log(JSON.stringify(report, null, 2))
  } else {
    for (const s of report.shardCounts) {
      console.log(`  shard ${s.file}: ${s.count} recipes`)
    }
    console.log('[fo-recipes] merged total:', report.mergedTotal)
    console.log(
      `[fo-recipes] active half: ${report.activeCount} (index < ${report.inactiveFromIndex})`,
    )
    if (report.duplicateIds.length) {
      console.warn(
        '[fo-recipes] duplicate id(s):',
        report.duplicateIds.slice(0, 10).join(', ') +
          (report.duplicateIds.length > 10 ? '…' : ''),
      )
    } else {
      console.log('[fo-recipes] duplicate ids: none')
    }
  }

  if (report.duplicateIds.length) {
    process.exitCode = 1
  }

  return report
}

import { fileURLToPath } from 'node:url'

const isMain =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  ;(async () => {
    const args = process.argv.slice(2)
    if (!args.includes('--check-dupes') && !args.includes('--validate-only')) {
      console.error(
        'Usage: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes [--json]',
      )
      process.exitCode = 2
      return
    }
    // Keep Node alive while dynamic imports resolve (newer Node may exit early on pending promises).
    const keepAlive = setInterval(() => {}, 1000)
    try {
      await runCheckDupesCli({ json: args.includes('--json') })
    } finally {
      clearInterval(keepAlive)
    }
  })().catch((err) => {
    console.error('[fo-recipes] check-dupes failed:', err?.stack || String(err))
    process.exitCode = 1
  })
}
