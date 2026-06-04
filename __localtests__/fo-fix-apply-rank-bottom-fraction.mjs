#!/usr/bin/env node
/**
 * Parse last FO matrix ranking output (Home |canvas vs live|), rank ascending, deactivate bottom fraction.
 * Merges with existing fo-fix-deactivated-ids.json (old denylist ids stay off).
 *
 * Usage:
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.75 --active-only
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.5 --dry-run
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.75 --rows-json __localtests__/.matrix-rank-all-rows.json --active-only
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --fraction 0.75 --log a.log --log b.log
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --run-matrix --fraction 0.75 --active-only
 *   node __localtests__/fo-fix-apply-rank-bottom-fraction.mjs --run-matrix --include-inactive --fraction 0.75
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  FO_FIX_RECIPES,
  getFoFixDeactivatedIds,
  isFoFixRecipeActive,
} from './fo-fix-recipes.js'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const activeOnly = args.includes('--active-only')
const runMatrix = args.includes('--run-matrix')
const fractionIdx = args.indexOf('--fraction')
const fractionArg = fractionIdx >= 0 ? Number(args[fractionIdx + 1]) : 0.5

function argAfter(flag) {
  const idx = args.indexOf(flag)
  if (idx < 0) return null
  return args[idx + 1] ?? null
}

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

/** @param {string} id */
function isMpControl(id) {
  return id.startsWith('mp-')
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

/** @param {any} data */
function parseRowsJson(data) {
  const rows = Array.isArray(data?.rows) ? data.rows : Array.isArray(data) ? data : null
  if (!rows) return []
  /** @type {Map<string, { id: string, canvasSigned: number | null, absRank: number }>} */
  const byId = new Map()
  for (const r of rows) {
    const id = r?.id ? String(r.id) : null
    if (!id) continue
    const canvasSigned =
      r.canvasSigned == null || r.canvasSigned === '—' ? null : Number(r.canvasSigned)
    const absRankRaw = r.absRank
    const absRank =
      absRankRaw == null
        ? Number.POSITIVE_INFINITY
        : Number.isFinite(Number(absRankRaw))
          ? Number(absRankRaw)
          : Number.POSITIVE_INFINITY
    byId.set(id, { id, canvasSigned, absRank })
  }
  return [...byId.values()]
}

if (!Number.isFinite(fractionArg) || fractionArg <= 0 || fractionArg >= 1) {
  console.error('--fraction must be a number in (0, 1), e.g. 0.75')
  process.exit(1)
}

const rowsJsonArg = argAfter('--rows-json')
const explicitLogs = args.includes('--log')
const defaultRowsJsonPath = join(__dir, '.matrix-rank-all-rows.json')

if (runMatrix) {
  const rankAll = join(__dir, 'fo-fix-rank-all-batches.mjs')
  const forwarded = []
  for (let i = 0; i < args.length; i++) {
    const a = args[i]
    if (a === '--batch-size' && args[i + 1]) forwarded.push('--batch-size', args[i + 1])
    if (a === '--from-offset' && args[i + 1]) forwarded.push('--from-offset', args[i + 1])
    if (a === '--include-inactive') forwarded.push('--include-inactive')
  }
  if (!args.includes('--include-inactive')) forwarded.push('--active-only')
  console.log(
    `[fo-fix-apply-rank-bottom-fraction] --run-matrix: regenerating ${defaultRowsJsonPath.replace(/.*__localtests__\//, '__localtests__/')}`,
  )
  const res = spawnSync(process.execPath, [rankAll, ...forwarded], {
    cwd: join(__dir, '..'),
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: 'inherit',
  })
  if (res.status !== 0) {
    console.error('[fo-fix-apply-rank-bottom-fraction] matrix run failed:', res.status)
    process.exit(res.status || 1)
  }
}

const rowsJsonPath = rowsJsonArg || (!explicitLogs && existsSync(defaultRowsJsonPath) ? defaultRowsJsonPath : null)

/** @type {{ kind: 'rows-json', path: string } | { kind: 'log', paths: string[] }} */
let input
if (rowsJsonPath) {
  input = { kind: 'rows-json', path: rowsJsonPath }
} else {
  /** @type {string[]} */
  const paths = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--log' && args[i + 1]) paths.push(args[i + 1])
  }
  if (!paths.length) paths.push(join(__dir, '.matrix-rank-bottom-75-active.log'))
  input = { kind: 'log', paths }
}

if (input.kind === 'rows-json') {
  if (!existsSync(input.path)) {
    console.error('Rows JSON not found:', input.path)
    process.exit(1)
  }
} else {
  for (const p of input.paths) {
    if (!existsSync(p)) {
      console.error('Log not found:', p)
      process.exit(1)
    }
  }
}

/** @type {Map<string, { id: string, canvasSigned: number | null, absRank: number }>} */
const mergedRows = new Map()
let matrixRunTotal = 0
if (input.kind === 'rows-json') {
  const data = JSON.parse(readFileSync(input.path, 'utf8'))
  for (const row of parseRowsJson(data)) mergedRows.set(row.id, row)
} else {
  for (const logPath of input.paths) {
    const logText = readFileSync(logPath, 'utf8')
    const mRun = logText.match(/Matrix:\s*(\d+)\s*recipes/)
    if (mRun) matrixRunTotal += Number(mRun[1])
    for (const row of parseLog(logText)) mergedRows.set(row.id, row)
  }
}

const rows = [...mergedRows.values()]
if (!rows.length) {
  const desc = input.kind === 'rows-json' ? input.path : input.paths.join(', ')
  console.error('No matrix rows parsed from input:', desc)
  process.exit(1)
}

const activeBefore = FO_FIX_RECIPES.filter((r) => isFoFixRecipeActive(r))
const activeIdSet = new Set(activeBefore.map((r) => r.id))

if (activeOnly) {
  const notActive = rows.filter((r) => !activeIdSet.has(r.id))
  if (notActive.length) {
    console.warn(
      `Warning: ${notActive.length} parsed row(s) are not currently active (skipped for ranking):`,
      notActive.slice(0, 5).map((r) => r.id),
      notActive.length > 5 ? '…' : '',
    )
  }
}

const rankedActive = activeOnly
  ? rows.filter((r) => activeIdSet.has(r.id))
  : rows

if (!rankedActive.length) {
  console.error('No rows to rank after active-only filter')
  process.exit(1)
}

rankedActive.sort((a, b) => {
  if (a.absRank !== b.absRank) return a.absRank - b.absRank
  return a.id.localeCompare(b.id)
})

const n = rankedActive.length
const nDeactivate = Math.floor(n * fractionArg)
const keepCount = n - nDeactivate
const kept = rankedActive.slice(0, keepCount)
const deactivatedRows = rankedActive.slice(keepCount)
const top25CutoffRow = kept[kept.length - 1] ?? null

const newlyDeactivatedSet = new Set(
  deactivatedRows.map((r) => r.id).filter((id) => !ALWAYS_ACTIVE.has(id) && !isMpControl(id)),
)

/** @type {string[]} */
const decorativeDiagnosticIds = []
for (const r of rankedActive) {
  if (DECORATIVE_PATTERNS.some((re) => re.test(r.id))) decorativeDiagnosticIds.push(r.id)
}
for (const id of decorativeDiagnosticIds) newlyDeactivatedSet.add(id)
for (const id of ALWAYS_ACTIVE) newlyDeactivatedSet.delete(id)
for (const id of rankedActive.map((r) => r.id).filter(isMpControl)) newlyDeactivatedSet.delete(id)

const existingDeny = getFoFixDeactivatedIds()
const mergedDeny = new Set([...existingDeny, ...newlyDeactivatedSet])
for (const id of ALWAYS_ACTIVE) mergedDeny.delete(id)
for (const id of FO_FIX_RECIPES.map((r) => r.id).filter(isMpControl)) mergedDeny.delete(id)

const deactivated = [...mergedDeny].sort()
const keptActive = rankedActive.filter((r) => !newlyDeactivatedSet.has(r.id))

const baseline = rankedActive.find((r) => r.id === 'product-baseline')
const fractionPct = Math.round(fractionArg * 100)
const strategy =
  activeOnly && fractionArg === 0.75
    ? 'rank-bottom-75-active-only'
    : activeOnly
      ? `rank-bottom-${fractionPct}-active-only`
      : `rank-bottom-${fractionPct}`

const out = {
  ids: deactivated,
  meta: {
    strategy,
    date: new Date().toISOString().slice(0, 10),
    input:
      input.kind === 'rows-json'
        ? input.path.replace(/.*__localtests__\//, '__localtests__/')
        : input.paths.map((p) => p.replace(/.*__localtests__\//, '__localtests__/')),
    fraction: fractionArg,
    activeOnly,
    activeCountBefore: activeBefore.length,
    matrixRunTotal: matrixRunTotal || null,
    ranked: n,
    nDeactivate,
    keptFromRank: kept.length,
    newlyDeactivatedThisRun: newlyDeactivatedSet.size,
    denylistTotal: deactivated.length,
    existingDenyBefore: existingDeny.size,
    top25CutoffAbs: top25CutoffRow?.absRank ?? null,
    top25CutoffId: top25CutoffRow?.id ?? null,
    top25CutoffCanvas: top25CutoffRow?.canvasSigned ?? null,
    baselineAbs: baseline?.absRank ?? null,
    best5: rankedActive.slice(0, 5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    worst5: rankedActive.slice(-5).map((r) => ({ id: r.id, canvas: r.canvasSigned, abs: r.absRank })),
    decorativeDiagnosticIds,
    decorativeDiagnosticFlag:
      'FO_FIX_LAB_INCLUDE_DECORATIVE_DIAGNOSTIC=1 to opt in via lab (ids remain deactivated)',
  },
}

console.log(
  JSON.stringify(
    {
      activeCountBefore: activeBefore.length,
      ranked: n,
      nDeactivate,
      newlyDeactivatedThisRun: newlyDeactivatedSet.size,
      denylistTotal: deactivated.length,
      existingDenyBefore: existingDeny.size,
      top25Cutoff: top25CutoffRow
        ? {
            id: top25CutoffRow.id,
            abs: top25CutoffRow.absRank,
            canvas: top25CutoffRow.canvasSigned,
          }
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
