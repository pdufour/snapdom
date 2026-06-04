#!/usr/bin/env node
/**
 * Run headed FO matrix on currently active recipes only, chunked, merge to one log.
 *
 * Usage:
 *   node __localtests__/fo-fix-matrix-active-chunked.mjs [--chunk 500] [--out logpath]
 */
import { spawnSync } from 'node:child_process'
import { writeFileSync, appendFileSync, existsSync, unlinkSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dir = dirname(fileURLToPath(import.meta.url))
if (process.env.FO_FIX_STOP === '1' || existsSync(join(__dir, '.fo-fix-stop'))) {
  console.error('[fo-fix-matrix-active-chunked] stopped (.fo-fix-stop or FO_FIX_STOP=1)')
  process.exit(0)
}
const args = process.argv.slice(2)
const chunkIdx = args.indexOf('--chunk')
const chunkSize = chunkIdx >= 0 ? Number(args[chunkIdx + 1]) : 500
const outIdx = args.indexOf('--out')
const outPath = outIdx >= 0 ? args[outIdx + 1] : join(__dir, '.matrix-rank-bottom-75-active.log')

const active = resolveFoFixMatrixRecipes({ excludeTextBypass: true })
const total = active.length
if (!Number.isFinite(chunkSize) || chunkSize < 1) {
  console.error('--chunk must be a positive integer')
  process.exit(1)
}

if (existsSync(outPath)) unlinkSync(outPath)

const port = 19000 + Math.floor(Math.random() * 1000)
console.log(`Active recipes: ${total}, chunk size: ${chunkSize}, port: ${port}`)
writeFileSync(outPath, `# matrix active-only chunked run ${new Date().toISOString()}\n# active=${total} chunk=${chunkSize}\n\n`)

const labScript = join(__dir, 'fo-fix-lab.mjs')
let offset = 0
let chunkNum = 0
while (offset < total) {
  chunkNum++
  const limit = Math.min(chunkSize, total - offset)
  console.log(`\n=== Chunk ${chunkNum}: offset=${offset} limit=${limit} ===`)
  const header = `\n--- chunk ${chunkNum} offset=${offset} limit=${limit} ---\n`
  appendFileSync(outPath, header)

  const r = spawnSync(
    process.execPath,
    [
      labScript,
      '--matrix',
      '--no-text-bypass',
      '--active-only',
      '--open-browser',
      '--offset',
      String(offset),
      '--limit',
      String(limit),
    ],
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
console.log(`Total active ranked: ${total}`)
