#!/usr/bin/env node
/**
 * Blackbox gate for strut corpus lab top-10 (headed). Updates sweep JSON section.
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { FO_FIX_RECIPES } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const RUNNER = path.join(__dirname, 'bounce-check-experimental-run.mjs')
const SWEEP = path.join(REPO, '.sandbox-edit', 'parallel-drift-blackbox-sweep.json')
const BASELINE_HOME = -0.91

const TOP10_IDS = JSON.parse(
  fs.readFileSync(path.join(REPO, '.sandbox-edit', 'fo-drift-batch-home-strut-merged.json'), 'utf8'),
).top10.map((r) => r.id)

function recipeById(id) {
  return FO_FIX_RECIPES.find((r) => r.id === id)
}

function queryForRecipe(r) {
  if (!r) return null
  const q = new URLSearchParams()
  const snap = r.harnessSnapdom ?? r.harnessProductToCanvas
  if (snap && typeof snap === 'object') {
    for (const [k, v] of Object.entries(snap)) {
      if (v) q.set(k, '1')
    }
  }
  const patch = r.labToCanvasOpts?.rasterOnlySvgPatch ?? r.rasterPatch
  if (patch && patch !== 'product-toCanvas' && patch !== 'none') {
    q.set('experimentalRasterSvgPatch', patch)
  }
  if (r.labToCanvasOpts?.disableGbcrFracNudge) {
    q.set('experimentalRasterDisableGbcrNudge', '1')
  }
  return q.toString() || null
}

function parseMetrics(text) {
  const homeM = text.match(/^\s*Home: paint\.canvas\.vs-border\.top ([+-]?\d+(?:\.\d+)?)px/m)
  const prodM = text.match(/^\s*Products: paint\.canvas\.vs-border\.top ([+-]?\d+(?:\.\d+)?)px/m)
  const navM = text.match(/Nav \|Δtop\(Home\)-Δtop\(Products\)\|: ([+-]?\d+(?:\.\d+)?)px/)
  return {
    home: homeM ? Number(homeM[1]) : null,
    products: prodM ? Number(prodM[1]) : null,
    navDelta: navM ? Number(navM[1]) : null,
  }
}

function beatsBaseline(home, products) {
  if (home == null || products == null) return false
  const towardZero = (v) => Math.abs(v) < Math.abs(BASELINE_HOME)
  const noHeavyRegress = (v) => v > -1.5
  return towardZero(home) && towardZero(products) && noHeavyRegress(home) && noHeavyRegress(products)
}

function runBlackbox({ labId, patch, query, labOnly }) {
  if (labOnly) {
    return {
      labId,
      patch: null,
      query: null,
      labOnly: true,
      home: null,
      products: null,
      navDelta: null,
      beatsBaseline: false,
      exitCode: null,
      skipReason: 'capture inject / flags not wired on checkout-example.html',
    }
  }
  const args = query
    ? [RUNNER, '--', query]
    : patch
      ? [RUNNER, patch]
      : [RUNNER, '--', 'experimentalRasterSvgPatch=none']
  const r = spawnSync(process.execPath, args, {
    cwd: REPO,
    encoding: 'utf8',
    env: { ...process.env },
    maxBuffer: 20 * 1024 * 1024,
  })
  const out = `${r.stdout || ''}${r.stderr || ''}`
  const m = parseMetrics(out)
  return {
    labId,
    patch: patch ?? null,
    query: query || null,
    labOnly: false,
    exitCode: r.status ?? 1,
    ...m,
    beatsBaseline: beatsBaseline(m.home, m.products),
  }
}

/** @type {ReturnType<typeof runBlackbox>[]} */
const rows = []
for (const labId of TOP10_IDS) {
  const r = recipeById(labId)
  const query = queryForRecipe(r)
  const patch = r?.labToCanvasOpts?.rasterOnlySvgPatch ?? r?.rasterPatch
  const captureOnly =
    r?.inject === 'capture' &&
    !(patch && patch !== 'product-toCanvas') &&
    !(query && query.includes('experimentalRasterSvgPatch'))
  const snapKeys = r?.harnessSnapdom ? Object.keys(r.harnessSnapdom) : []
  const checkoutUnsupported =
    captureOnly &&
    snapKeys.some((k) => k !== 'experimentalFoTextLineHeightNormal')
  const row = checkoutUnsupported
    ? runBlackbox({ labId, labOnly: true })
    : query
      ? runBlackbox({ labId, query, labOnly: false })
      : runBlackbox({ labId, patch, labOnly: false })
  rows.push(row)
  process.stderr.write(
    `${labId}: ${row.labOnly ? 'SKIP' : `home=${row.home} products=${row.products}`}\n`,
  )
}

const sweep = JSON.parse(fs.readFileSync(SWEEP, 'utf8'))
sweep.strutPaintOriginAttempt = {
  runAt: new Date().toISOString().slice(0, 10),
  harness:
    "node __localtests__/fo-drift-batch-home-parallel.mjs --ids 'product-baseline,tc-blh-*,tc-fix-w7-*,tc-fix-w16-*,tc-fix-w18-*' --offsets auto --parallel 3 --include-inactive",
  mergeArtifact: '.sandbox-edit/fo-drift-batch-home-strut-merged.json',
  corpusIds: 'product-baseline,tc-blh-*,tc-fix-w7-*,tc-fix-w16-*,tc-fix-w18-*',
  recipeCount: 65,
  batches: 3,
  offsets: [0, 30, 60],
  parallelLimit: 30,
  headed: true,
  labMerged: JSON.parse(
    fs.readFileSync(path.join(REPO, '.sandbox-edit', 'fo-drift-batch-home-strut-merged.json'), 'utf8'),
  ),
  blackboxTop10: rows,
  winner: rows.find((r) => r.beatsBaseline) ?? null,
  srcChanged: false,
  doNotPromoteAsDefault: ['fo-y-strut-range-meta', 'fo-y-half-leading-meta'],
  blockedAt: -0.91,
}
fs.writeFileSync(SWEEP, `${JSON.stringify(sweep, null, 2)}\n`)
console.log('Updated', SWEEP)
