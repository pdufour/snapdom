#!/usr/bin/env node
/**
 * Rank all FO recipes in headed matrix chunks; merge rows for bottom-N deactivate.
 * Default: active FO raster only (~10203). Stale 33k chunk logs under .matrix-rank-all-chunks/ are not auto-deleted.
 *
 *   node __localtests__/fo-fix-rank-all-batches.mjs
 *   node __localtests__/fo-fix-rank-all-batches.mjs --batch-size 2500 --from-offset 6000
 *   node __localtests__/fo-fix-rank-all-batches.mjs --include-inactive   # full corpus (~33k; opt-in)
 */
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
if (process.env.FO_FIX_STOP === '1' || existsSync(join(dirname(fileURLToPath(import.meta.url)), '.fo-fix-stop'))) {
  console.error('[fo-fix-rank-all-batches] stopped (.fo-fix-stop or FO_FIX_STOP=1)')
  process.exit(0)
}

import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const includeInactive = args.includes('--include-inactive')
const batchSizeIdx = args.indexOf('--batch-size')
const batchSize = batchSizeIdx >= 0 ? Number(args[batchSizeIdx + 1]) : 2500
const fromOffsetIdx = args.indexOf('--from-offset')
const fromOffset = fromOffsetIdx >= 0 ? Number(args[fromOffsetIdx + 1]) : 0
const rowsPath = join(__dir, '.matrix-rank-all-rows.json')
const chunksDir = join(__dir, '.matrix-rank-all-chunks')
const chunkMetaPath = join(chunksDir, '.batch-meta.json')

/** @param {{ includeInactive: boolean, excludeTextBypass: boolean }} scope */
function scopeKey(scope) {
  return JSON.stringify({
    includeInactive: !!scope.includeInactive,
    excludeTextBypass: !!scope.excludeTextBypass,
  })
}

/** @returns {{ includeInactive?: boolean, excludeTextBypass?: boolean, total?: number } | null} */
function readChunkMeta() {
  if (!existsSync(chunkMetaPath)) return null
  try {
    return JSON.parse(readFileSync(chunkMetaPath, 'utf8'))
  } catch {
    return null
  }
}

/** @param {string} line */
function parseMatrixRow(line) {
  const m = line.match(/^(\S+)\s+(-?\d+(?:\.\d+)?|—)\s+(-?\d+(?:\.\d+)?|—)\s/)
  if (!m) return null
  const id = m[1]
  const canvasRaw = m[3]
  let absRank
  if (canvasRaw === '—') absRank = Number.POSITIVE_INFINITY
  else {
    const n = Number(canvasRaw)
    absRank = Number.isFinite(n) ? Math.abs(n) : Number.POSITIVE_INFINITY
  }
  return {
    id,
    canvasSigned: canvasRaw === '—' ? null : Number(canvasRaw),
    absRank,
  }
}

/** @param {string} text */
function parseLog(text) {
  const lines = text.split(/\r?\n/)
  const start = lines.findIndex((l) => l.includes('FO fix matrix (sorted by |canvas vs live|'))
  if (start < 0) return []
  /** @type {Map<string, ReturnType<typeof parseMatrixRow>>} */
  const byId = new Map()
  for (const line of lines.slice(start + 3)) {
    if (line.startsWith('Best (') || line.startsWith('Beats ') || line.startsWith('Rejected')) break
    const row = parseMatrixRow(line)
    if (!row) continue
    byId.set(row.id, row)
  }
  return [...byId.values()]
}

const matrixScope = { includeInactive: !!includeInactive, excludeTextBypass: true }
const scopeToken = scopeKey(matrixScope)

const total = resolveFoFixMatrixRecipes({
  includeInactive: matrixScope.includeInactive,
  excludeTextBypass: matrixScope.excludeTextBypass,
}).length

mkdirSync(chunksDir, { recursive: true })

const prevChunkMeta = readChunkMeta()
if (prevChunkMeta && scopeKey(prevChunkMeta) !== scopeToken) {
  console.warn(
    `[fo-fix-rank-all-batches] matrix scope changed (was includeInactive=${!!prevChunkMeta.includeInactive}); stale chunk logs under ${chunksDir} are not auto-deleted — remove or rename that folder before trusting skip/resume.`,
  )
}
writeFileSync(
  chunkMetaPath,
  JSON.stringify(
    {
      ...matrixScope,
      total,
      batchSize,
      updatedAt: new Date().toISOString(),
    },
    null,
    2,
  ) + '\n',
)

const chunkMetaMatches = () => scopeKey(readChunkMeta() ?? {}) === scopeToken

/** @type {Map<string, { id: string, canvasSigned: number | null, absRank: number }>} */
let merged = new Map()
if (existsSync(rowsPath)) {
  try {
    const prev = JSON.parse(readFileSync(rowsPath, 'utf8'))
    if (Array.isArray(prev.rows)) {
      for (const r of prev.rows) if (r?.id) merged.set(r.id, r)
    }
  } catch {
    /* fresh */
  }
}

const offsets = []
for (let off = fromOffset; off < total; off += batchSize) offsets.push(off)

console.log(
  JSON.stringify({ total, batchSize, batches: offsets.length, existingRows: merged.size }, null, 2),
)

for (const offset of offsets) {
  const limit = Math.min(batchSize, total - offset)
  const chunkLog = join(chunksDir, `chunk-offset-${offset}-limit-${limit}.log`)
  if (existsSync(chunkLog) && chunkMetaMatches()) {
    const parsed = parseLog(readFileSync(chunkLog, 'utf8'))
    if (parsed.length >= limit - 2) {
      console.log(`skip offset ${offset} (chunk log has ${parsed.length} rows)`)
      for (const r of parsed) merged.set(r.id, r)
      continue
    }
    console.log(`re-run offset ${offset} (chunk incomplete: ${parsed.length}/${limit})`)
  }

  console.log(`\n=== batch offset=${offset} limit=${limit} ===`)
  const lab = join(__dir, 'fo-fix-lab.mjs')
  /** @type {string[]} */
  const labArgs = [
    lab,
    '--matrix',
    '--no-text-bypass',
    '--open-browser',
    '--offset',
    String(offset),
    '--limit',
    String(limit),
  ]
  if (includeInactive) labArgs.push('--include-inactive')
  else labArgs.push('--active-only')
  /** @type {NodeJS.ProcessEnv} */
  const childEnv = { ...process.env }
  if (includeInactive) childEnv.SNAPDOM_FO_LAB_INCLUDE_INACTIVE = '1'
  else delete childEnv.SNAPDOM_FO_LAB_INCLUDE_INACTIVE
  const res = spawnSync(process.execPath, labArgs, {
    cwd: join(__dir, '..'),
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    env: childEnv,
  })
  const out = (res.stdout || '') + (res.stderr || '')
  writeFileSync(chunkLog, out)
  if (res.status !== 0) {
    console.error(`batch failed offset=${offset} status=${res.status}`)
    console.error(out.slice(-2000))
    const partial = parseLog(out)
    if (partial.length) {
      console.log(`partial parse ${partial.length} rows — saving and continuing`)
      for (const r of partial) merged.set(r.id, r)
      writeFileSync(
        rowsPath,
        JSON.stringify(
          {
            updatedAt: new Date().toISOString(),
            totalExpected: total,
            rows: [...merged.values()],
          },
          null,
          2,
        ) + '\n',
      )
    }
    spawnSync('sleep', ['3'])
    continue
  }
  const parsed = parseLog(out)
  console.log(`parsed ${parsed.length} rows from offset ${offset}`)
  for (const r of parsed) merged.set(r.id, r)
  // Let headed Chrome fully exit before the next batch (avoids orphan profile crashes).
  spawnSync('sleep', ['2'])
  writeFileSync(
    rowsPath,
    JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        totalExpected: total,
        rows: [...merged.values()],
      },
      null,
      2,
    ) + '\n',
  )
}

const rows = [...merged.values()]
rows.sort((a, b) => {
  if (a.absRank !== b.absRank) return a.absRank - b.absRank
  return a.id.localeCompare(b.id)
})

const synthLogPath = join(__dir, '.matrix-rank-all.log')
const lines = [
  `Matrix: ${total} recipes (${includeInactive ? 'all recipes' : 'active recipes'}, FO raster only (text-bypass excluded))`,
  '',
  'FO fix matrix (sorted by |canvas vs live|, landmark Home):',
  'recipe'.padEnd(28) + 'SVG Δ'.padStart(8) + 'canvas Δ'.padStart(10) + 'stage'.padStart(8) + 'pass'.padStart(6),
  '-'.repeat(62),
]
for (const r of rows) {
  const canvasStr = r.canvasSigned == null ? '—' : r.canvasSigned.toFixed(3)
  lines.push(r.id.padEnd(28) + '—'.padStart(8) + canvasStr.padStart(10) + '—'.padStart(8) + '  ✗'.padStart(6))
}
writeFileSync(synthLogPath, lines.join('\n') + '\n')
writeFileSync(
  rowsPath,
  JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      totalExpected: total,
      evaluated: rows.length,
      rows,
    },
    null,
    2,
  ) + '\n',
)

console.log(
  JSON.stringify(
    { evaluated: rows.length, totalExpected: total, synthLog: synthLogPath },
    null,
    2,
  ),
)

if (rows.length < total) {
  console.error(`Incomplete: ${rows.length}/${total} — re-run with --from-offset ${rows.length}`)
  process.exit(1)
}
