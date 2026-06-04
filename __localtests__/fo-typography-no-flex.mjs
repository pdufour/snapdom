#!/usr/bin/env node
/**
 * Typography-only control: single-line text leaf with no flex parent.
 * Three-way ink (live / SVG / canvas). product-baseline capture + toCanvas raster.
 *
 * Verdict:
 *   |canvasΔ| < 0.5px → flex-coupled FO raster confirmed (typography alone is clean)
 *   else              → generic FO text raster bug (drift without flex stretch)
 *
 *   npm run compile && node __localtests__/fo-typography-no-flex.mjs
 *   node __localtests__/fo-typography-no-flex.mjs --json __localtests__/typography-no-flex.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, 'typography-no-flex.json')
const DRIFT_THRESHOLD_PX = 0.5

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const skipFlexArg = args.includes('--skip-flex-baseline')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/**
 * @param {number | null} canvasDelta
 * @param {{ flexStretch?: { canvasDelta: number | null } | null }} [ctx]
 */
export function evaluateTypographyNoFlex(canvasDelta, ctx = {}) {
  const abs = canvasDelta != null ? Math.abs(canvasDelta) : null
  const flexCoupledConfirmed = abs != null && abs < DRIFT_THRESHOLD_PX
  const genericFoRaster = abs != null && abs >= DRIFT_THRESHOLD_PX

  /** @type {string[]} */
  const interpretation = []
  interpretation.push(
    `No-flex single-line text: canvasΔ=${roundPx(canvasDelta) ?? '—'}px (|Δ|=${roundPx(abs) ?? '—'}px).`,
  )
  if (flexCoupledConfirmed) {
    interpretation.push(
      `|canvasΔ| < ${DRIFT_THRESHOLD_PX}px — typography-only FO raster is clean; drift on flex-stretch fixtures is flex-coupled.`,
    )
  } else if (genericFoRaster) {
    interpretation.push(
      `|canvasΔ| ≥ ${DRIFT_THRESHOLD_PX}px without flex parent — generic FO text raster offset, not flex-coupling alone.`,
    )
  }

  const flexCanvas = ctx.flexStretch?.canvasDelta ?? null
  if (flexCanvas != null) {
    interpretation.push(
      `Mini-nav flex-stretch baseline (reference): canvasΔ=${roundPx(flexCanvas) ?? '—'}px.`,
    )
    if (flexCoupledConfirmed && Math.abs(flexCanvas) >= DRIFT_THRESHOLD_PX) {
      interpretation.push(
        'Flex baseline shows substantial drift while no-flex is clean — flex-coupled FO raster confirmed.',
      )
    }
  }

  return {
    thresholdPx: DRIFT_THRESHOLD_PX,
    canvasDeltaPx: roundPx(canvasDelta),
    absCanvasDeltaPx: roundPx(abs),
    verdict: flexCoupledConfirmed
      ? 'FLEX_COUPLED_FO_RASTER'
      : genericFoRaster
        ? 'GENERIC_FO_RASTER_BUG'
        : 'INCONCLUSIVE',
    flexCoupledConfirmed,
    genericFoRaster,
    interpretation,
  }
}

function printReport(payload) {
  console.log('\n--- typography no-flex (three-way ink) ---\n')
  const t = payload.threeWay || {}
  console.log(
    'landmark'.padEnd(10) +
      'liveTop'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'svg↔canvas'.padStart(11),
  )
  console.log(
    String(payload.landmark ?? '—').padEnd(10) +
      (t.livePaintedTopInBorder?.toFixed(3) ?? '—').padStart(8) +
      (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
      (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
      (t.svgVsCanvasTopPx?.toFixed(3) ?? '—').padStart(11),
  )
  console.log('')
  console.log(`Verdict: ${payload.evaluation?.verdict ?? '—'}`)
  for (const line of payload.evaluation?.interpretation ?? []) {
    console.log(`  · ${line}`)
  }
  console.log('')
}

async function runFlexStretchBaseline(browser, port, { dpr, scale, landmark }) {
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[flex-baseline pageerror]', err.message))
  const qs = new URLSearchParams({
    dpr: String(dpr),
    scale: String(scale),
    landmark,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-overflow-ab-probe.html?${qs}`
  console.log(`Flex baseline: ${url}`)
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foOverflowAbProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foOverflowAbProbe?.bootError)
    if (bootErr) throw new Error(`Flex baseline boot failed: ${bootErr}`)
    const payload = await page.evaluate(() => {
      const p = window.__foOverflowAbProbe.last
      return JSON.parse(JSON.stringify(p))
    })
    const row = payload.variants?.find((v) => v.id === 'baseline-capture')
    return {
      fixture: 'mini-nav-flex-stretch',
      landmark,
      dpr,
      scale,
      canvasDelta: row?.ink?.liveVsCanvasTopPx ?? payload.productBaseline?.liveVsCanvasTopPx ?? null,
      svgDelta: row?.ink?.liveVsSvgTopPx ?? payload.productBaseline?.liveVsSvgTopPx ?? null,
    }
  } finally {
    await page.close()
  }
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
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-typography-no-flex.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foTypographyNoFlex?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foTypographyNoFlex?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(() => {
      const p = window.__foTypographyNoFlex.last
      return JSON.parse(JSON.stringify(p))
    })
    await page.close()

    const flexStretch = skipFlexArg
      ? null
      : await runFlexStretchBaseline(browser, port, {
          dpr: dprArg,
          scale: scaleArg,
          landmark: landmarkArg,
        })

    const canvasDelta = probe.threeWay?.liveVsCanvasTopPx ?? null
    const evaluation = evaluateTypographyNoFlex(canvasDelta, flexStretch ? { flexStretch } : {})

    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      ...probe,
      flexStretchBaseline: flexStretch,
      evaluation,
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printReport(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
