#!/usr/bin/env node
/**
 * List and count tc-lab* recipes by wave and prefix.
 *
 *   node __localtests__/list-tocanvas-recipes.mjs [--json]
 */
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'

function waveKey(id) {
  const m = /^tc-lab-(w\d+)/.exec(id)
  if (m) return m[1]
  const m2 = /^tc-lab-([a-z]+)/.exec(id)
  return m2 ? m2[1] : 'other'
}

function prefixKey(id) {
  return id.replace(/-\d+$/, '')
}

function inc(map, key, n = 1) {
  map.set(key, (map.get(key) ?? 0) + n)
}

async function main() {
  const json = process.argv.includes('--json')
  const __dirname = fileURLToPath(new URL('.', import.meta.url))
  const shardsDir = join(__dirname, 'fo-recipes-shards')
  const files = (await readdir(shardsDir))
    .filter((f) => f.endsWith('.js') && f.startsWith('recipes-tocanvas-lab'))
    .sort()

  /** @type {any[]} */
  const tc = []
  /** @type {{ file: string, error: string }[]} */
  const loadErrors = []
  const seen = new Set()

  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(shardsDir, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        if (!r?.id?.startsWith('tc-lab')) continue
        if (seen.has(r.id)) continue
        seen.add(r.id)
        tc.push(r)
      }
    } catch (err) {
      loadErrors.push({
        file,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  const byWave = new Map()
  const byPrefix = new Map()

  for (const r of tc) {
    const id = r.id
    inc(byWave, waveKey(id))
    inc(byPrefix, prefixKey(id))
  }

  const report = {
    total: tc.length,
    shardFiles: files.length,
    shardLoadErrors: loadErrors,
    byWave: Object.fromEntries(
      [...byWave.entries()].sort((a, b) => a[0].localeCompare(b[0])),
    ),
    byPrefix: Object.fromEntries(
      [...byPrefix.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
    ),
  }

  if (json) {
    console.log(JSON.stringify(report, null, 2))
  } else {
    console.log('[tc-lab] total:', report.total)
    if (report.shardLoadErrors.length) {
      console.warn(
        `[tc-lab] shard load errors: ${report.shardLoadErrors.length}/${report.shardFiles} (use --json for details)`,
      )
    }
    console.log('\n[tc-lab] by wave:')
    for (const [k, v] of Object.entries(report.byWave)) console.log(`  ${k}: ${v}`)
    console.log('\n[tc-lab] by prefix (top 30):')
    for (const [k, v] of Object.entries(report.byPrefix).slice(0, 30)) {
      console.log(`  ${k}: ${v}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

