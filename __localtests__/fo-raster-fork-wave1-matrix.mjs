#!/usr/bin/env node
/**
 * Headed matrix: raster-only SVG fork wave-1 (6 patches + product-baseline).
 *
 * SVG leg uses original capture; canvas uses patched fork at decode only.
 *
 *   npm run compile && npm run debug:raster-fork-w1-matrix
 *   node __localtests__/fo-raster-fork-wave1-matrix.mjs --json .sandbox-edit/raster-fork-wave1.json
 *
 * Default port 8787 (SNAPDOM_LOCAL_PORT). Headed Chrome by default.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const PARITY_STAGE_TOL_PX = 0.15

/** @param {{ liveVsSvgTopPx?: number | null, deltaSvgInBorder?: number | null, liveVsCanvasTopPx?: number | null, deltaTopInBorder?: number | null }} row */
function classifyParityStage(row, tol = PARITY_STAGE_TOL_PX) {
  const svgLive = row?.liveVsSvgTopPx ?? row?.deltaSvgInBorder
  const canvasLive = row?.liveVsCanvasTopPx ?? row?.deltaTopInBorder
  if (svgLive == null || canvasLive == null) return null
  const absSvgCanvas = Math.abs(canvasLive - svgLive)
  if (absSvgCanvas > tol) return 'raster'
  if (Math.abs(svgLive) > tol || Math.abs(canvasLive) > tol) return 'capture'
  return 'aligned'
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 8787
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'raster-fork-wave1.json')

const FORK_RECIPE_IDS = [
  'tc-fork-w1-inject-fo-lh-pin',
  'tc-fork-w1-inject-flex-center',
  'tc-fork-w1-viewbox-int-floor',
  'tc-fork-w1-fo-y-nudge',
  'tc-fork-w1-root-height-48',
  'tc-fork-w1-combo-lh-center',
]

const MATRIX_IDS = ['product-baseline', ...FORK_RECIPE_IDS]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const outPath = jsonOutArg
  ? path.isAbsolute(jsonOutArg)
    ? jsonOutArg
    : path.join(REPO_ROOT, jsonOutArg)
  : DEFAULT_OUT

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function canvasVsLive(row) {
  return row?.liveVsCanvasTopPx ?? row?.deltaTopInBorder ?? null
}

function svgVsLive(row) {
  return row?.liveVsSvgTopPx ?? row?.deltaSvgInBorder ?? null
}

function summarize(rows) {
  const baseline = rows.find((r) => r.recipeId === 'product-baseline')
  const baselineCanvas = canvasVsLive(baseline)
  const baselineAbs = baselineCanvas != null ? Math.abs(baselineCanvas) : null

  const forkRows = rows.filter((r) => r.recipeId.startsWith('tc-fork-w1-'))
  const improved = forkRows.filter((r) => {
    const c = canvasVsLive(r)
    return (
      c != null &&
      baselineCanvas != null &&
      Math.abs(c) < Math.abs(baselineCanvas) - 0.05
    )
  })

  let verdict = 'NO_FORK_BEATS_BASELINE'
  if (improved.length) verdict = 'PARTIAL_FORK_EFFECT'
  const anyPass = forkRows.some((r) => r.pass)
  if (anyPass) verdict = 'FORK_PASSES_INK_GATE'

  return {
    verdict,
    baselineCanvasDeltaPx: roundPx(baselineCanvas),
    baselineAbsCanvasDeltaPx: roundPx(baselineAbs),
    forkCount: forkRows.length,
    improvedCount: improved.length,
    improvedIds: improved.map((r) => r.recipeId),
    anyForkPass: anyPass,
    svgUnchanged:
      forkRows.every((r) => {
        const svg = svgVsLive(r)
        return svg == null || Math.abs(svg) <= PARITY_STAGE_TOL_PX
      }) ?? false,
  }
}

async function main() {
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  const idsParam = encodeURIComponent(MATRIX_IDS.join(','))
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?matrix=1&auto=1&excludeTextBypass=1&ids=${idsParam}`

  try {
    page.on('console', (msg) => {
      if (msg.type() === 'error') console.error('[page]', msg.text())
    })
    page.on('pageerror', (err) => console.error('[pageerror]', err.message))

    console.log(`Opening ${url} (headed Chrome, port ${port})`)
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })

    await page.waitForFunction(
      () => window.__foFixLab?.done === true,
      null,
      { timeout: 180_000 },
    )

    const pageError = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError)
    if (pageError) throw new Error(pageError)

    const rows = await page.evaluate(() => window.__foFixMatrix ?? [])
    const summary = summarize(rows)

    const payload = {
      generatedAt: new Date().toISOString(),
      port,
      landmark: 'Home',
      recipeIds: MATRIX_IDS,
      mechanism: 'raster-only-svg-fork',
      inkPassThresholdPx: 0.06,
      rows: rows.map((row) => ({
        recipeId: row.recipeId,
        liveVsSvgTopPx: roundPx(svgVsLive(row)),
        liveVsCanvasTopPx: roundPx(canvasVsLive(row)),
        svgVsCanvasTopPx:
          svgVsLive(row) != null && canvasVsLive(row) != null
            ? roundPx(canvasVsLive(row) - svgVsLive(row))
            : null,
        parityStage: classifyParityStage(row),
        pass: Boolean(row.pass),
        rasterOnlySvgPatch: row.recipeId.startsWith('tc-fork-w1-')
          ? row.recipeId.replace(/^tc-fork-w1-/, '')
          : null,
      })),
      summary,
    }

    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)

    console.log('\n--- raster-only SVG fork wave-1 ---\n')
    console.log(
      'recipe'.padEnd(36) +
        'svgΔ'.padStart(8) +
        'canvasΔ'.padStart(10) +
        'stage'.padStart(8) +
        'pass'.padStart(6),
    )
    for (const row of payload.rows) {
      console.log(
        row.recipeId.padEnd(36) +
          (row.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
          (row.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(10) +
          (row.parityStage ?? '—').padStart(8) +
          (row.pass ? '  ✓' : '  ✗').padStart(6),
      )
    }
    console.log(`\nSummary: ${JSON.stringify(summary, null, 2)}`)
    console.log(`\nWrote ${outPath}`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
