#!/usr/bin/env node
/**
 * Run headed FO matrix on active toCanvas lab recipes only (chunked), merged to one log.
 *
 * Scope:
 *   - tc-lab-w6-on-*
 *   - tc-lab-w7-on-*
 *   - tc-lab-w8-on-*
 *   - tc-lab-w8-quad-*
 *   - tc-lab-w10-hex-*
 *
 * Usage:
 *   node __localtests__/fo-fix-matrix-tocanvas-active.mjs [--chunk 500] [--out logpath]
 */
import { spawnSync } from 'node:child_process'
import { appendFileSync, existsSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FO_FIX_RECIPES } from './fo-fix-recipes.js'

const __dir = dirname(fileURLToPath(import.meta.url))
if (process.env.FO_FIX_STOP === '1' || existsSync(join(__dir, '.fo-fix-stop'))) {
  console.error('[fo-fix-matrix-tocanvas-active] stopped (.fo-fix-stop or FO_FIX_STOP=1)')
  process.exit(0)
}

const args = process.argv.slice(2)
const chunkIdx = args.indexOf('--chunk')
const chunkSize = chunkIdx >= 0 ? Number(args[chunkIdx + 1]) : 500
const outIdx = args.indexOf('--out')
const outPath =
  outIdx >= 0
    ? args[outIdx + 1]
    : join(__dir, '.matrix-rank-bottom-75-tocanvas-active.log')

if (!Number.isFinite(chunkSize) || chunkSize < 1) {
  console.error('--chunk must be a positive integer')
  process.exit(1)
}

const TOCANVAS_ACTIVE = FO_FIX_RECIPES.filter(
  (r) =>
    r?.id &&
    // tc-lab is globally archived by index, so don't use isFoFixRecipeActive here
    r.active !== false &&
    (
      r.id.startsWith('tc-lab-w6-on-') ||
      r.id.startsWith('tc-lab-w7-on-') ||
      r.id.startsWith('tc-lab-w8-on-') ||
      r.id.startsWith('tc-lab-w8-quad-') ||
      r.id.startsWith('tc-lab-w10-hex-') ||
      r.id.startsWith('tc-lab-')
    ),
)

const ids = TOCANVAS_ACTIVE.map((r) => r.id)
const total = ids.length

if (existsSync(outPath)) unlinkSync(outPath)

const port = 19000 + Math.floor(Math.random() * 1000)
console.log(`Active toCanvas recipes: ${total}, chunk size: ${chunkSize}, port: ${port}`)
writeFileSync(
  outPath,
  `# matrix tocanvas active-only chunked run ${new Date().toISOString()}\n# active=${total} chunk=${chunkSize}\n\n`,
)

const labScript = join(__dir, 'fo-fix-lab.mjs')
let offset = 0
let chunkNum = 0
while (offset < total) {
  chunkNum++
  const limit = Math.min(chunkSize, total - offset)
  console.log(`\n=== Chunk ${chunkNum}: offset=${offset} limit=${limit} ===`)
  appendFileSync(outPath, `\n--- chunk ${chunkNum} offset=${offset} limit=${limit} ---\n`)

  const chunkIds = ids.slice(offset, offset + limit)
  const r = spawnSync(
    process.execPath,
    [
      labScript,
      '--matrix',
      '--no-text-bypass',
      '--open-browser',
      '--ids',
      chunkIds.join(','),
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
console.log(`Total toCanvas active ranked: ${total}`)
