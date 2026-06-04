#!/usr/bin/env node
/**
 * Mini nav: hand-built static FO SVG vs captureDOM — three-way ink (Home + Products).
 * Tests whether ~2.8px canvas drift reproduces without full snapdom serialization.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=9930 node __localtests__/handbuilt-vs-capture.mjs
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable FO ink).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'handbuilt-vs-capture.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

const DRIFT_TARGET_PX = 2.796875

function interpretRow(row) {
  const h = row.handbuilt?.threeWay ?? {}
  const c = row.captureDOM?.threeWay ?? {}
  const hCanvas = h.liveVsCanvasTopPx ?? null
  const cCanvas = c.liveVsCanvasTopPx ?? null
  const hSvg = h.liveVsSvgTopPx ?? null
  const cSvg = c.liveVsSvgTopPx ?? null
  const canvasDiff =
    hCanvas != null && cCanvas != null ? roundPx(hCanvas - cCanvas) : null

  const handbuiltNearTarget =
    hCanvas != null && Math.abs(hCanvas - DRIFT_TARGET_PX) < 0.5
  const captureNearTarget =
    cCanvas != null && Math.abs(cCanvas - DRIFT_TARGET_PX) < 0.5
  const handbuiltMatchesCapture =
    canvasDiff != null && Math.abs(canvasDiff) < 0.35

  /** @type {string[]} */
  const lines = []
  lines.push(
    `handbuilt canvasΔ=${roundPx(hCanvas) ?? '—'}px svgΔ=${roundPx(hSvg) ?? '—'}px`,
  )
  lines.push(
    `captureDOM canvasΔ=${roundPx(cCanvas) ?? '—'}px svgΔ=${roundPx(cSvg) ?? '—'}px`,
  )
  if (handbuiltMatchesCapture) {
    lines.push(`canvasΔ matches within 0.35px (Δ ${canvasDiff}px).`)
    if (Math.abs(hSvg ?? 0) < 0.35 && Math.abs(hCanvas ?? 0) > 1.5) {
      lines.push(
        'Identical bitmap-only drift — reproduces without snapdom capture serialization.',
      )
    }
  } else if (canvasDiff != null) {
    lines.push(`canvasΔ differs by ${canvasDiff}px between sources.`)
  }
  if (handbuiltNearTarget && captureNearTarget) {
    lines.push(
      `Both reproduce ~${DRIFT_TARGET_PX}px canvas drift — bug is not snapdom-serialization-specific.`,
    )
  } else if (handbuiltNearTarget && !captureNearTarget) {
    lines.push('Hand-built alone shows ~2.8px; capture differs — capture may add/remove drift.')
  } else if (!handbuiltNearTarget && captureNearTarget) {
    lines.push(
      'Capture shows ~2.8px but hand-built does not — drift likely from capture serialization/layout.',
    )
  } else if (hCanvas != null && Math.abs(hCanvas) < 0.35 && Math.abs(cCanvas ?? 0) > 1.5) {
    lines.push('Hand-built has no canvas drift; capture does — serialization is required for drift.')
  }

  const bitmapOnlyDrift =
    hCanvas != null &&
    hSvg != null &&
    Math.abs(hSvg) < 0.35 &&
    Math.abs(hCanvas) > 1.5

  return {
    handbuiltReproduces28px: handbuiltNearTarget,
    captureReproduces28px: captureNearTarget,
    handbuiltMatchesCapture,
    bitmapOnlyDrift,
    canvasDeltaHandbuiltMinusCapture: canvasDiff,
    interpretation: lines,
  }
}

function interpretPayload(payload) {
  const perLandmark = payload.rows.map((row) => ({
    landmark: row.landmark,
    ...interpretRow(row),
  }))
  const allHandbuilt28 = perLandmark.every((r) => r.handbuiltReproduces28px)
  const allCapture28 = perLandmark.every((r) => r.captureReproduces28px)
  const allMatch = perLandmark.every((r) => r.handbuiltMatchesCapture)
  const allBitmapOnly = perLandmark.every((r) => r.bitmapOnlyDrift)

  /** @type {string} */
  let verdict = 'INCONCLUSIVE'
  if (allMatch && allHandbuilt28 && allCapture28) verdict = 'BOTH_REPRODUCE_28PX'
  else if (allMatch && allBitmapOnly) verdict = 'BOTH_BITMAP_ONLY_DRIFT'
  else if (allHandbuilt28 && allCapture28) verdict = 'BOTH_REPRODUCE_28PX'
  else if (allHandbuilt28 && !allCapture28) verdict = 'HANDBUILT_ONLY_28PX'
  else if (!allHandbuilt28 && allCapture28) verdict = 'CAPTURE_ONLY_28PX'
  else if (allMatch) verdict = 'SOURCES_MATCH'
  else if (perLandmark.some((r) => r.handbuiltReproduces28px)) verdict = 'PARTIAL_HANDBUILT_28PX'

  return { verdict, perLandmark, allHandbuilt28, allCapture28, allMatch }
}

function printTable(payload, comparison) {
  console.log('\n--- hand-built FO SVG vs captureDOM (product-baseline) ---\n')
  console.log(
    'landmark'.padEnd(10) +
      'source'.padEnd(12) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const row of payload.rows) {
    for (const source of ['handbuilt', 'captureDOM']) {
      const t = row[source]?.threeWay || {}
      console.log(
        String(row.landmark).padEnd(10) +
          source.padEnd(12) +
          (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
          (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9),
      )
    }
  }
  console.log(`\nVerdict: ${comparison.verdict}`)
  for (const block of comparison.perLandmark) {
    console.log(`\n  ${block.landmark}:`)
    for (const line of block.interpretation) console.log(`    · ${line}`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmarks: 'Home,Products',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/handbuilt-vs-capture.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__handbuiltVsCaptureProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__handbuiltVsCaptureProbe?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const payload = await page.evaluate(async () => window.__handbuiltVsCaptureProbe.run())
    const comparison = interpretPayload(payload)
    const out = {
      ...payload,
      comparison,
      generatedAt: new Date().toISOString(),
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(out, null, 2)}\n`)
    console.log(`\nWrote ${outPath}`)

    printTable(payload, comparison)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
