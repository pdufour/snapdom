#!/usr/bin/env node
/**
 * Active-corpus smoke — headed matrix of FO_FIX_FORCE_ACTIVE_IDS (+ product-baseline).
 *
 *   npm run debug:fo-active-smoke
 *   npm run test:fo-active-smoke
 *
 * Headed Chrome by default. HEADLESS=1 is opt-in smoke only — FO→bitmap ink unreliable.
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FO_FIX_FORCE_ACTIVE_IDS } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-active-corpus-smoke.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function uniqueIds() {
  const set = new Set(['product-baseline', ...FO_FIX_FORCE_ACTIVE_IDS])
  return [...set]
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome for parity.')
  }

  const ids = uniqueIds()
  console.log(`Active-corpus smoke (${ids.length} recipes, headed):`)
  for (const id of ids) console.log(`  · ${id}`)

  const labScript = path.join(__dirname, 'fo-fix-lab.mjs')
  const port = 19200 + Math.floor(Math.random() * 800)

  const r = spawnSync(
    process.execPath,
    [
      labScript,
      '--matrix',
      '--no-text-bypass',
      '--open-browser',
      '--dpr',
      '1',
      '--landmark',
      'Home',
      '--ids',
      ids.join(','),
    ],
    {
      cwd: REPO_ROOT,
      env: { ...process.env, SNAPDOM_LOCAL_PORT: String(port) },
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    },
  )

  const output = (r.stdout || '') + (r.stderr || '')
  const matrixLineRe =
    /^\s*(\S+)\s+([\d.]+|-)\s+([\d.]+|-)\s+(?:\S+\s+)?([✓✗])/gm
  /** @type {Record<string, unknown>[]} */
  const parsedRows = []
  let m
  while ((m = matrixLineRe.exec(output)) !== null) {
    const recipeId = m[1]
    if (!ids.includes(recipeId)) continue
    parsedRows.push({
      recipeId,
      svgDelta: m[2] === '—' ? null : Number(m[2]),
      canvasDelta: m[3] === '—' ? null : Number(m[3]),
      pass: m[4] === '✓',
    })
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    recipeIds: ids,
    rows: parsedRows,
    exitCode: r.status ?? 1,
    pass: r.status === 0,
  }

  const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)
  console.log(`\nWrote ${outPath}`)

  if (parsedRows.length) {
    console.log('\n--- active-corpus matrix summary ---\n')
    for (const row of parsedRows) {
      console.log(
        `${String(row.recipeId).padEnd(52)} canvasΔ=${row.canvasDelta?.toFixed?.(3) ?? '—'} ${row.pass ? '✓' : '✗'}`,
      )
    }
  }

  if (r.status !== 0) {
    console.error(`\nSmoke matrix failed (exit ${r.status})`)
    console.error(output.slice(-3000))
    process.exit(r.status ?? 1)
  }

  console.log('\nActive-corpus smoke: PASS')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
