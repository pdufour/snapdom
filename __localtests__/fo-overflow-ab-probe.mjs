#!/usr/bin/env node
/**
 * Mini Home: A/B foreignObject overflow visible vs hidden + SVG root overflow.
 * Lab inline SVG patch only — no src/ changes.
 *
 *   node __localtests__/fo-overflow-ab-probe.mjs
 *   node __localtests__/fo-overflow-ab-probe.mjs --json path.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'fo-overflow-ab.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

const SIGNIFICANT_PX = 0.05

function interpret(payload) {
  const baseline = payload.comparisons?.find((c) => c.id === 'baseline-capture')
  const refCanvas = baseline?.canvasDelta ?? payload.productBaseline?.liveVsCanvasTopPx ?? null

  /** @type {string[]} */
  const lines = []

  const foHidden = payload.comparisons?.find((c) => c.id === 'fo-hidden')
  const foVisible = payload.comparisons?.find((c) => c.id === 'fo-visible-explicit')
  const foDiff =
    foHidden?.canvasDelta != null && foVisible?.canvasDelta != null
      ? foHidden.canvasDelta - foVisible.canvasDelta
      : null

  if (foDiff != null && Math.abs(foDiff) >= SIGNIFICANT_PX) {
    lines.push(
      `foreignObject hidden vs visible changes mini Home canvasΔ by ${foDiff.toFixed(3)}px (hidden=${foHidden.canvasDelta.toFixed(3)}, visible=${foVisible.canvasDelta.toFixed(3)}).`,
    )
  } else if (foDiff != null) {
    lines.push(
      `foreignObject overflow hidden vs visible: no meaningful canvasΔ change (Δ=${foDiff.toFixed(3)}px).`,
    )
  }

  const svgHiddenCss = payload.comparisons?.find((c) => c.id === 'svg-hidden-css')
  const svgHiddenAttr = payload.comparisons?.find((c) => c.id === 'svg-hidden-attr')
  const svgVisible = payload.comparisons?.find((c) => c.id === 'svg-visible-explicit')

  for (const [label, row] of [
    ['SVG root CSS hidden', svgHiddenCss],
    ['SVG root attr hidden', svgHiddenAttr],
  ]) {
    if (!row || refCanvas == null || row.canvasDelta == null) continue
    const ch = row.canvasDeltaChangeFromBaseline
    if (ch != null && Math.abs(ch) >= SIGNIFICANT_PX) {
      lines.push(
        `${label}: canvasΔ ${row.canvasDelta.toFixed(3)}px (Δ from baseline ${ch >= 0 ? '+' : ''}${ch.toFixed(3)}px).`,
      )
    } else if (ch != null) {
      lines.push(`${label}: no meaningful canvasΔ change vs baseline (${ch.toFixed(3)}px).`)
    }
  }

  const bothHidden = payload.comparisons?.find((c) => c.id === 'both-hidden')
  if (bothHidden?.canvasDeltaChangeFromBaseline != null) {
    const ch = bothHidden.canvasDeltaChangeFromBaseline
    if (Math.abs(ch) >= SIGNIFICANT_PX) {
      lines.push(`Both hidden: canvasΔ shift ${ch >= 0 ? '+' : ''}${ch.toFixed(3)}px vs baseline.`)
    } else {
      lines.push('Both svg+FO hidden: no meaningful canvasΔ change vs baseline.')
    }
  }

  if (refCanvas != null) {
    lines.push(`Baseline capture canvasΔ on mini Home: ${refCanvas.toFixed(3)}px.`)
  }

  let verdict = 'NO_CANVAS_DELTA_FROM_OVERFLOW'
  const anyChange = payload.comparisons?.some(
    (c) =>
      c.id !== 'baseline-capture' &&
      c.canvasDeltaChangeFromBaseline != null &&
      Math.abs(c.canvasDeltaChangeFromBaseline) >= SIGNIFICANT_PX,
  )
  if (anyChange) verdict = 'OVERFLOW_AFFECTS_CANVAS_INK'
  else if (refCanvas != null && Math.abs(refCanvas) < SIGNIFICANT_PX) verdict = 'NO_BASELINE_DRIFT'

  return { verdict, lines, refCanvas, foDiff }
}

function printTable(payload, info) {
  console.log('\n--- mini Home overflow A/B (canvasΔ = live↔canvas topInBorder) ---\n')
  console.log(
    'variant'.padEnd(28) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δcanvas'.padStart(9) +
      'FO ov'.padStart(8) +
      'svg ov'.padStart(8),
  )
  for (const row of payload.variants) {
    const cmp = payload.comparisons.find((c) => c.id === row.id)
    const ov = row.overflowInSvg || {}
    console.log(
      row.id.padEnd(28) +
        (row.ink.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (row.ink.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
        (cmp?.canvasDeltaChangeFromBaseline?.toFixed(3) ?? '—').padStart(9) +
        (ov.cssFoOverflow ?? ov.svgAttr ?? '—').padStart(8) +
        (ov.cssSvgOverflow ?? ov.svgAttr ?? '—').padStart(8),
    )
  }
  console.log(
    `\nproduct-baseline canvasΔ: ${payload.productBaseline?.liveVsCanvasTopPx?.toFixed(3) ?? '—'}`,
  )
  console.log(`\nVerdict: ${info.verdict}`)
  for (const line of info.lines) console.log(`  · ${line}`)
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
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-overflow-ab-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foOverflowAbProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foOverflowAbProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(() => {
      const p = window.__foOverflowAbProbe.last
      return JSON.parse(JSON.stringify(p))
    })
    const info = interpret(payload)
    payload.verdict = info.verdict
    payload.interpretation = info.lines
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headless = process.env.HEADLESS === '1'

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printTable(payload, info)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
