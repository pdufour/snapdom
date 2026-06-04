#!/usr/bin/env node
/**
 * Headed matrix: mini Home product path — 6 experimental singles, capture-all,
 * raster-all, all-on. Snapdom when src flags wired; else lab tc-flags-w1 per single.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=8780 node __localtests__/fo-experimental-flags-matrix.mjs
 *   node __localtests__/fo-experimental-flags-matrix.mjs --json .sandbox-edit/experimental-flags-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 8780
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'experimental-flags-matrix.json')
const PLATEAU_PX = 2.797

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function beaters(rows) {
  return (rows ?? []).filter(
    (r) => r.absCanvasDelta != null && r.absCanvasDelta < PLATEAU_PX - 0.05,
  )
}

function printTable(payload) {
  console.log('\n--- experimental flags matrix (canvasΔ = live↔canvas topInBorder) ---\n')
  console.log(
    'id'.padEnd(36) +
      'path'.padStart(6) +
      '|canvasΔ|'.padStart(10) +
      'canvasΔ'.padStart(10) +
      'Δbase'.padStart(9) +
      'beat'.padStart(6),
  )
  for (const row of payload.rows ?? []) {
    console.log(
      String(row.id).padEnd(36) +
        String(row.path ?? '—').padStart(6) +
        (row.absCanvasDelta?.toFixed(3) ?? '—').padStart(10) +
        (row.canvasDelta?.toFixed(3) ?? '—').padStart(10) +
        (row.deltaFromBaselinePx?.toFixed(3) ?? '—').padStart(9) +
        (row.beatsPlateau ? 'yes' : '—').padStart(6),
    )
  }
  const wins = beaters(payload.rows)
  console.log(
    `\nBaseline canvasΔ: ${roundPx(payload.baselineCanvasDeltaPx)}px (plateau ${PLATEAU_PX}px)`,
  )
  console.log(`src flags wired: ${payload.srcExperimentalFlagsWired}`)
  if (wins.length) {
    console.log(`\nBeat ${PLATEAU_PX}px |canvasΔ|:`)
    for (const r of wins.sort((a, b) => a.absCanvasDelta - b.absCanvasDelta)) {
      console.log(`  · ${r.id}: |canvasΔ|=${roundPx(r.absCanvasDelta)}px`)
    }
  } else {
    console.log(`\nNo row beat ${PLATEAU_PX}px |canvasΔ|.`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-experimental-flags-matrix.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foExperimentalFlagsMatrix?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foExperimentalFlagsMatrix?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const matrix = await page.evaluate(() => {
      const p = window.__foExperimentalFlagsMatrix.last
      return JSON.parse(JSON.stringify(p))
    })

    const wins = beaters(matrix.rows)
    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      port,
      plateauReferencePx: PLATEAU_PX,
      beatersPlateau: wins.map((r) => ({
        id: r.id,
        canvasDelta: roundPx(r.canvasDelta),
        absCanvasDelta: roundPx(r.absCanvasDelta),
      })),
      ...matrix,
    }

    const outPath = jsonOutArg ? path.resolve(REPO_ROOT, jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printTable(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
