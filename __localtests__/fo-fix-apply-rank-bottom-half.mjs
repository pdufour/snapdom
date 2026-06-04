#!/usr/bin/env node
/**
 * Parse FO matrix log (Home |canvas vs live|), rank ascending, deactivate bottom 50%.
 * Usage: node __localtests__/fo-fix-apply-rank-bottom-half.mjs [--log path] [--dry-run]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const logIdx = args.indexOf('--log')
const logPath = logIdx >= 0 ? args[logIdx + 1] : join(__dir, '.matrix-rank-bottom-half.log')

const DECORATIVE_PATTERNS = [
  /^loop-ai-b10-w35-/,
  /^loop-ai-b11-w74-/,
  /^loop-ai-b2-w04-/,
]

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
    if (!Number.isFinite(n)) absRank = Number.POSITIVE_INFINITY
    else absRank = Math.abs(n)
  }
  const canvasSigned = canvasRaw === '—' ? null : Number(canvasRaw)
  return { id, canvasSigned, absRank }
}

function parseLog(text) {
  const lines = text.split(/\r?\n/)
  const start = lines.findIndex((l) => l.includes('FO fix matrix (sorted by |canvas vs live|'))
  if (start < 0) throw new Error('Matrix table not found in log')
  /** @type {Map<string, { id: string, canvasSigned: number | null, absRank: number }>} */
  const byId = new Map()
  for (const line of lines.slice(start + 3)) {
    if (line.startsWith('Best (') || line.startsWith('Beats ') || line.startsWith('Rejected')) break
    const row = parseMatrixRow(line)
    if (!row) continue
    byId.set(row.id, row)
  }
  return [...byId.values()]
}

const logText = readFileSync(logPath, 'utf8')
const mRun = logText.match(/Matrix:\s*(\d+)\s*recipes/)
const matrixRunTotal = mRun ? Number(mRun[1]) : null
const rows = parseLog(logText)
if (!rows.length) {
  console.error('No matrix rows parsed from', logPath)
  process.exit(1)
}

rows.sort((a, b) => {
  if (a.absRank !== b.absRank) return a.absRank - b.absRank
  return a.id.localeCompare(b.id)
})

const n = rows.length
const keepCount = Math.ceil(n / 2)
const kept = rows.slice(0, keepCount)
const deactivatedRows = rows.slice(keepCount)
const ALWAYS_ACTIVE = new Set([
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
])
const deactivatedSet = new Set(
  deactivatedRows.map((r) => r.id).filter((id) => !ALWAYS_ACTIVE.has(id)),
)

/** @type {string[]} */
const decorativeDiagnosticIds = []
for (const r of rows) {
  if (DECORATIVE_PATTERNS.some((re) => re.test(r.id))) decorativeDiagnosticIds.push(r.id)
}
for (const id of decorativeDiagnosticIds) deactivatedSet.add(id)
for (const id of ALWAYS_ACTIVE) deactivatedSet.delete(id)

const deactivated = [...deactivatedSet].sort()
const keptActive = rows.filter((r) => !deactivatedSet.has(r.id))

const baseline = rows.find((r) => r.id === 'product-baseline')
const out = {
  ids: deactivated,
  meta: {
    strategy: 'rank-bottom-half',
    date: new Date().toISOString().slice(0, 10),
    log: logPath.replace(/.*__localtests__\//, '__localtests__/'),
    matrixRunTotal,
    evaluated: n,
    kept: keptActive.length,
    deactivated: deactivated.length,
    baselineAbs: baseline ? baseline.absRank : null,
    best5: rows.slice(0, 5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    worst5: rows.slice(-5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    decorativeDiagnosticIds,
    decorativeDiagnosticFlag: 'FO_FIX_LAB_INCLUDE_DECORATIVE_DIAGNOSTIC=1 to opt in via lab (ids remain deactivated)',
  },
}

console.log(JSON.stringify({ evaluated: n, deactivated: deactivated.length, kept: keptActive.length, baseline }, null, 2))
console.log('best5', out.meta.best5)
console.log('worst5', out.meta.worst5)

if (!dryRun) {
  writeFileSync(join(__dir, 'fo-fix-deactivated-ids.json'), JSON.stringify(out, null, 2) + '\n')
}
