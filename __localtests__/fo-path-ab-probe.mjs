#!/usr/bin/env node
/**
 * Same serialized SVG — path A: inline FO ink measure; path B: decode+draw canvas ink.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=9931 node __localtests__/fo-path-ab-probe.mjs
 *   node __localtests__/fo-path-ab-probe.mjs --json __localtests__/.sandbox-edit/path-ab-same-svg.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PORT = 9931
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'path-ab-same-svg.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function inkTopInBorder(painted) {
  if (!painted) return null
  if (painted.topInBorder != null) return painted.topInBorder
  if (painted.painted?.topInBorder != null) return painted.painted.topInBorder
  return null
}

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function interpret(payload) {
  const pathDelta = payload.delta?.svgVsCanvasTopInBorderPx ?? null
  const liveVsSvg = payload.threeWay?.liveVsSvgTopPx ?? null
  const liveVsCanvas = payload.threeWay?.liveVsCanvasTopPx ?? null

  /** @type {string[]} */
  const lines = []
  const aTop = inkTopInBorder(payload.pathA?.painted)
  const bTop = payload.pathB?.painted?.topInBorder
  if (aTop != null && bTop != null) {
    lines.push(`Path A (inline FO) topInBorder=${roundPx(aTop)}px; path B (decode+draw) topInBorder=${roundPx(bTop)}px.`)
  }
  if (pathDelta != null) {
    lines.push(`Same-SVG path Δ (B−A) topInBorder=${roundPx(pathDelta)}px.`)
  }
  if (liveVsSvg != null && liveVsCanvas != null) {
    lines.push(
      `vs live: svgΔ=${roundPx(liveVsSvg)}px canvasΔ=${roundPx(liveVsCanvas)}px (three-way svg↔canvas ${roundPx(payload.threeWay?.compareSvgVsCanvasTopInBorderPx)}px).`,
    )
  }
  if (pathDelta != null && Math.abs(pathDelta) >= 0.5) {
    lines.push('Large path A/B gap — FO→bitmap raster shifts ink vs inline serialized FO measurement.')
  }
  if (liveVsSvg != null && Math.abs(liveVsSvg) < 0.05 && liveVsCanvas != null && Math.abs(liveVsCanvas) >= 0.5) {
    lines.push('SVG≈live but canvas drifts — path Δ tracks live↔canvas gap (bitmap stage, not FO serialization layout).')
  }

  const verdict =
    pathDelta != null && Math.abs(pathDelta) >= 0.5
      ? 'BITMAP_SHIFTS_VS_INLINE'
      : pathDelta != null
        ? 'PATHS_ALIGNED'
        : 'INCONCLUSIVE'

  return { verdict, lines }
}

function printReport(payload, info) {
  console.log('\n--- path A/B same SVG (inline FO vs decode+draw) ---\n')
  console.log(`Path A topInBorder: ${inkTopInBorder(payload.pathA?.painted)?.toFixed(3) ?? '—'}`)
  console.log(`Path B topInBorder: ${payload.pathB?.painted?.topInBorder?.toFixed(3) ?? '—'}`)
  console.log(`Δ B−A:              ${payload.delta?.svgVsCanvasTopInBorderPx?.toFixed(3) ?? '—'}`)
  console.log(`live↔svg:           ${payload.threeWay?.liveVsSvgTopPx?.toFixed(3) ?? '—'}`)
  console.log(`live↔canvas:        ${payload.threeWay?.liveVsCanvasTopPx?.toFixed(3) ?? '—'}`)
  console.log(`\nVerdict: ${info.verdict}`)
  for (const line of info.lines) console.log(`  · ${line}`)
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
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-path-ab-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foPathAbProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foPathAbProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(async () => window.__foPathAbProbe.run())

    const evaluation = interpret(probe)
    const payload = {
      ...probe,
      verdict: evaluation.verdict,
      interpretation: evaluation.lines,
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printReport(payload, evaluation)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
