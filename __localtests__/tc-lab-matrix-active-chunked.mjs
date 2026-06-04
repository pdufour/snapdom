#!/usr/bin/env node
/**
 * Run headed FO matrix on active tc-lab* recipes only, chunked.
 *
 * Usage:
 *   node __localtests__/tc-lab-matrix-active-chunked.mjs [--chunk 50] [--out logpath]
 */
import { spawnSync } from 'node:child_process'
import {
  writeFileSync,
  appendFileSync,
  existsSync,
  unlinkSync,
  readFileSync,
} from 'node:fs'
import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)

const chunkIdx = args.indexOf('--chunk')
const chunkSize = chunkIdx >= 0 ? Number(args[chunkIdx + 1]) : 50
if (!Number.isFinite(chunkSize) || chunkSize < 1) {
  console.error('--chunk must be a positive integer')
  process.exit(1)
}

const outIdx = args.indexOf('--out')
const outPath = outIdx >= 0 ? args[outIdx + 1] : join(__dir, '.matrix-tc-lab-active.log')

/** @returns {Set<string>} */
function loadDeactivatedIds() {
  const path = join(__dir, 'fo-fix-deactivated-ids.json')
  if (!existsSync(path)) return new Set()
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8'))
    const ids = Array.isArray(parsed) ? parsed : parsed?.ids
    return new Set(Array.isArray(ids) ? ids.map(String) : [])
  } catch {
    return new Set()
  }
}

async function main() {
  const deactivated = loadDeactivatedIds()
  const shardsDir = join(__dir, 'fo-recipes-shards')
  const files = (await readdir(shardsDir))
    .filter((f) => f.endsWith('.js') && f.startsWith('recipes-tocanvas-lab'))
    .sort()

  /** @type {any[]} */
  const activeTcLab = []
  const seen = new Set()
  let loadErrors = 0

  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(shardsDir, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        if (!r?.id?.startsWith('tc-lab')) continue
        if (seen.has(r.id)) continue
        seen.add(r.id)
        if (r.active === false) continue
        if (deactivated.has(r.id)) continue
        activeTcLab.push(r)
      }
    } catch {
      loadErrors++
    }
  }

  if (loadErrors) {
    console.warn(`[tc-lab matrix] shard load errors: ${loadErrors}/${files.length}`)
  }

  if (!activeTcLab.length) {
    console.log('[tc-lab matrix] no active tc-lab* recipes found')
    return
  }

  if (existsSync(outPath)) unlinkSync(outPath)

  const port = 20000 + Math.floor(Math.random() * 1000)
  console.log(
    `[tc-lab matrix] active tc-lab*: ${activeTcLab.length}, chunk size: ${chunkSize}, port: ${port}`,
  )
  writeFileSync(
    outPath,
    `# tc-lab matrix active-only chunked run ${new Date().toISOString()}\n# active=${activeTcLab.length} chunk=${chunkSize}\n\n`,
  )

  const labScript = join(__dir, 'fo-fix-lab.mjs')
  let offset = 0
  let chunkNum = 0
  while (offset < activeTcLab.length) {
    chunkNum++
    const limit = Math.min(chunkSize, activeTcLab.length - offset)
    const chunk = activeTcLab.slice(offset, offset + limit)
    const ids = chunk.map((r) => r.id).join(',')

    console.log(`\n=== Chunk ${chunkNum}: offset=${offset} limit=${limit} ===`)
    appendFileSync(outPath, `\n--- chunk ${chunkNum} offset=${offset} limit=${limit} ---\n`)

    const r = spawnSync(
      process.execPath,
      [labScript, '--matrix', '--no-text-bypass', '--open-browser', '--ids', ids],
      {
        cwd: join(__dir, '..'),
        env: { ...process.env, SNAPDOM_LOCAL_PORT: String(port) },
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024,
      },
    )

    const chunkOut = (r.stdout || '') + (r.stderr || '')
    appendFileSync(outPath, chunkOut)
    if (r.status !== 0) {
      console.error(`Chunk ${chunkNum} failed (exit ${r.status})`)
      console.error(chunkOut.slice(-2000))
      process.exit(r.status ?? 1)
    }
    console.log(`Chunk ${chunkNum} done (${limit} recipes)`)
    offset += limit
  }

  console.log(`\nMerged log: ${outPath}`)
  console.log(`Total active tc-lab ranked: ${activeTcLab.length}`)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

