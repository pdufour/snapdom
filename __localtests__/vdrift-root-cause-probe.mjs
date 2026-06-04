#!/usr/bin/env node
/**
 * vDriftFix root cause: draw dest rects, gbcrFracY, three-way ink (baseline vs 001 vs 002).
 *
 *   SNAPDOM_LOCAL_PORT=9913 node __localtests__/vdrift-root-cause-probe.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PORT = 9913
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'vdrift-root-cause.json')

function buildVerdict(payload) {
  const a = payload.analysis || {}
  const dy = a.vDriftDyCss
  const fracY = a.gbcrFracY
  const baseCanvas = a.baselineCanvasDelta
  const v001Canvas = a.v001CanvasDelta
  const reduction = a.canvasDeltaReductionV001
  const svgLive = a.svgVsLiveBaseline
  const svgCanvasBase = a.svgVsCanvasBaseline
  const svgCanvasV001 = a.svgVsCanvasV001
  const foErr = a.foRasterErrorAfterSubtractingNudge

  /** @type {string[]} */
  const notes = []

  if (Math.abs(svgLive ?? 99) < 0.35) {
    notes.push('SVG FO ink ≈ live (svgΔ≈0): serialized FO layout is not the drift source.')
  }
  if (dy != null) {
    notes.push(
      `vDriftFix sets drawImage destY=${dy.toFixed(6)} CSS px (= -gbcrFracY); device nudge ≈ ${(a.vDriftDyDevice ?? dy * (payload.dpr || 1)).toFixed(6)} px at dpr=${payload.dpr}.`,
    )
  }
  if (reduction != null && Math.abs(reduction - Math.abs(dy ?? 0)) < 0.15) {
    notes.push(
      `canvasΔ dropped by ${reduction.toFixed(3)}px vs baseline — matches |dy| nudge (not FO re-raster).`,
    )
  } else if (reduction != null) {
    notes.push(`canvasΔ dropped by ${reduction.toFixed(3)}px vs baseline.`)
  }
  if (svgCanvasBase != null && svgCanvasV001 != null) {
    const svgCanvasShrink = svgCanvasBase - svgCanvasV001
    if (Math.abs(svgCanvasShrink) < 0.2) {
      notes.push('svg↔canvas gap unchanged: fix is canvas draw nudge only, not SVG ink alignment.')
    } else {
      notes.push(`svg↔canvas gap changed by ${svgCanvasShrink.toFixed(3)}px (unexpected for pure nudge).`)
    }
  }
  if (foErr != null) {
    notes.push(
      `Estimated FO raster error if nudge removed: live↔canvas ≈ ${foErr.toFixed(3)}px (baseline ${baseCanvas?.toFixed(3)} + dy ${dy?.toFixed(3)}).`,
    )
  }

  let mechanism = 'INCONCLUSIVE'
  if (dy != null && Math.abs(svgLive ?? 99) < 0.35 && Math.abs((svgCanvasV001 ?? 0) - (svgCanvasBase ?? 0)) < 0.2) {
    mechanism = 'DRAW_NUDGE_ONLY'
  }

  return {
    mechanism,
    physicalShiftCssPx: dy,
    physicalShiftDevicePx: a.vDriftDyDevice,
    gbcrFracY: fracY,
    baselineLiveVsCanvasPx: baseCanvas,
    v001LiveVsCanvasPx: v001Canvas,
    canvasDeltaReductionPx: reduction,
    trueFoRasterErrorPx: foErr,
    notes,
  }
}

function printSummary(payload, verdict) {
  console.log('\n--- vDrift mini Home three-way ---\n')
  for (const v of payload.variants || []) {
    const ink = v.ink || {}
    const dt = v.drawTrace || {}
    console.log(`${v.recipeId}`)
    console.log(
      `  meta gbcrFracY=${v.meta?.gbcrFracY?.toFixed(6)}  dy=${dt.dy?.toFixed(6)}  dest=(${dt.dx?.toFixed(3)},${dt.dy?.toFixed(3)}) ${dt.dw?.toFixed(1)}×${dt.dh?.toFixed(1)}  backing ${dt.backingW}×${dt.backingH} (${dt.backingRound})`,
    )
    console.log(
      `  ink svgΔ=${ink.liveVsSvgTopPx?.toFixed(3) ?? '—'}  canvasΔ=${ink.liveVsCanvasTopPx?.toFixed(3) ?? '—'}  svg↔canvas=${ink.svgVsCanvasTopPx?.toFixed(3) ?? '—'}`,
    )
  }
  console.log(`\nVerdict: ${verdict.mechanism}`)
  for (const n of verdict.notes) console.log(`  · ${n}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({ dpr: '2', scale: '1', landmark: 'Home' })
  const url = `http://127.0.0.1:${port}/__localtests__/vdrift-root-cause-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__vdriftRootCauseProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__vdriftRootCauseProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(async () => window.__vdriftRootCauseProbe.run())
    const verdict = buildVerdict(payload)
    payload.verdict = verdict
    payload.generatedAt = new Date().toISOString()
    payload.port = port

    const outPath = DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printSummary(payload, verdict)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
