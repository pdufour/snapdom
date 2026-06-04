#!/usr/bin/env node
/**
 * Parse FO matrix log (Home |canvas vs live|), rank ascending, deactivate worst N.
 * Merges with existing fo-fix-deactivated-ids.json unless --replace-denylist.
 *
 * Usage:
 *   node __localtests__/fo-fix-apply-rank-bottom-n.mjs --count 5000
 *   node __localtests__/fo-fix-apply-rank-bottom-n.mjs --count 5000 --log path --dry-run
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getFoFixDeactivatedIds } from './fo-fix-recipes.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const replaceDenylist = args.includes('--replace-denylist')
const countIdx = args.indexOf('--count')
const countArg = countIdx >= 0 ? Number(args[countIdx + 1]) : 5000
const logIdx = args.indexOf('--log')
const logPath =
  logIdx >= 0 ? args[logIdx + 1] : join(__dir, '.matrix-rank-all.log')

const DECORATIVE_PATTERNS = [
  /^loop-ai-b10-w35-/,
  /^loop-ai-b11-w74-/,
  /^loop-ai-b2-w04-/,
]

/** Core control rows — never denylist. */
const ALWAYS_ACTIVE = new Set([
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
  'mp-capture-recipe-css',
  'mp-h2-fo-normalize-capture',
  'mp-decode-interval-prototype',
  'mp-draw-image-pixelated',
])

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

/** @param {string} text */
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

if (!Number.isFinite(countArg) || countArg < 1) {
  console.error('--count must be a positive integer')
  process.exit(1)
}
if (!existsSync(logPath)) {
  console.error('Log not found:', logPath)
  process.exit(1)
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
const deactivateCount = Math.min(countArg, n)
const keepCount = n - deactivateCount
const kept = rows.slice(0, keepCount)
const deactivatedRows = rows.slice(keepCount)

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

const existingDeny = getFoFixDeactivatedIds()
const mergedFromExisting = replaceDenylist ? deactivatedSet : new Set([...existingDeny, ...deactivatedSet])
for (const id of ALWAYS_ACTIVE) mergedFromExisting.delete(id)

const deactivated = [...mergedFromExisting].sort()
const keptActive = rows.filter((r) => !deactivatedSet.has(r.id))

const cutoffRow = deactivatedRows[0] ?? null
const baseline = rows.find((r) => r.id === 'product-baseline')

const out = {
  ids: deactivated,
  meta: {
    strategy: 'rank-bottom-n',
    date: new Date().toISOString().slice(0, 10),
    log: logPath.replace(/.*__localtests__\//, '__localtests__/'),
    matrixRunTotal,
    evaluated: n,
    deactivateCount,
    keptFromRank: kept.length,
    denylistTotal: deactivated.length,
    mergedExisting: !replaceDenylist,
    existingDenyBefore: existingDeny.size,
    cutoffAbs: cutoffRow?.absRank ?? null,
    cutoffId: cutoffRow?.id ?? null,
    baselineAbs: baseline?.absRank ?? null,
    best5: rows.slice(0, 5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    worst5: rows.slice(-5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    decorativeDiagnosticIds,
    decorativeDiagnosticFlag: 'FO_FIX_LAB_INCLUDE_DECORATIVE_DIAGNOSTIC=1 to opt in via lab (ids remain deactivated)',
  },
}

console.log(
  JSON.stringify(
    {
      evaluated: n,
      newWorstBucket: deactivatedSet.size,
      denylistTotal: deactivated.length,
      keptFromRank: keptActive.length,
      cutoff: cutoffRow
        ? { id: cutoffRow.id, abs: cutoffRow.absRank, canvas: cutoffRow.canvasSigned }
        : null,
      baseline,
    },
    null,
    2,
  ),
)
console.log('best5', out.meta.best5)
console.log('worst5', out.meta.worst5)

if (!dryRun) {
  writeFileSync(join(__dir, 'fo-fix-deactivated-ids.json'), JSON.stringify(out, null, 2) + '\n')
}
