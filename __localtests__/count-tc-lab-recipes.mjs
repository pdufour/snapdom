#!/usr/bin/env node
/**
 * Fast recipe count for tc-lab-* without importing shards.
 *
 * Why: Some shards include validation guards (duplicate keys, etc.) that are
 * intentionally strict for lab work, but they make "inventory via import"
 * brittle when you're only trying to estimate matrix size.
 *
 * Usage:
 *   node __localtests__/count-tc-lab-recipes.mjs [--json]
 */
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

function waveFromFilename(file) {
  const m = file.match(/\bwave(\d+)\b/i)
  return m ? Number(m[1]) : null
}

function countFromText(text) {
  // Most shards self-assert with "expected N recipes".
  const expected = text.match(/\bexpected\s+(\d+)\s+recipes\b/i)?.[1]
  if (expected) return Number(expected)

  // Some shards only advertise the range in the header comment.
  // Example: "tc-lab-w9-en-001..070".
  const headerRange = text.match(/\btc-lab-[\w-]+-0*01\.\.0*(\d+)\b/i)?.[1]
  if (headerRange) return Number(headerRange)

  // Some shards are built from Array.from({ length: N }, ...).
  const arrFrom = text.match(/Array\.from\(\{\s*length:\s*(\d+)\s*\}/)?.[1]
  if (arrFrom) return Number(arrFrom)

  // Fallback: count explicit tc-lab ids (works for many generated shards).
  const idHits =
    text.match(/\bid:\s*(?:`|")tc-lab-[^`"]+/g)?.length ??
    text.match(/\bid:\s*'tc-lab-[^']+/g)?.length ??
    0
  if (idHits) return idHits

  return null
}

async function countTcLabRecipes() {
  const files = (await readdir(SHARDS_DIR))
    .filter((f) => f.endsWith('.js') && f.startsWith('recipes-tocanvas-lab'))
    .sort()

  /** @type {{ file: string, wave: number | null, count: number | null }[]} */
  const perFile = []
  for (const file of files) {
    const text = await readFile(join(SHARDS_DIR, file), 'utf8')
    perFile.push({ file, wave: waveFromFilename(file), count: countFromText(text) })
  }

  const totalsByWave = new Map()
  let total = 0
  const unknown = []
  for (const row of perFile) {
    if (row.count == null) {
      unknown.push(row.file)
      continue
    }
    total += row.count
    const k = row.wave ?? 0
    totalsByWave.set(k, (totalsByWave.get(k) ?? 0) + row.count)
  }

  return {
    total,
    totalsByWave: Object.fromEntries([...totalsByWave.entries()].sort((a, b) => a[0] - b[0])),
    unknownFiles: unknown,
    perFile,
  }
}

const json = process.argv.includes('--json')
const report = await countTcLabRecipes()

if (json) {
  console.log(JSON.stringify(report, null, 2))
} else {
  console.log('[tc-lab count] total recipes:', report.total)
  console.log('[tc-lab count] by wave:')
  for (const [wave, n] of Object.entries(report.totalsByWave)) {
    console.log(`  wave ${wave === '0' ? 'pre-wave' : wave}: ${n}`)
  }
  if (report.unknownFiles.length) {
    console.log('[tc-lab count] unknown (no heuristic match):')
    for (const f of report.unknownFiles) console.log('  -', f)
    process.exitCode = 1
  }
}

