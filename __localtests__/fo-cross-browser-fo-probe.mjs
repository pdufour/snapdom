#!/usr/bin/env node
/**
 * Cross-browser FO raster probe — same hand-built minimal nav FO on each engine.
 *
 *   node __localtests__/fo-cross-browser-fo-probe.mjs
 *   node __localtests__/fo-cross-browser-fo-probe.mjs --engines chromium,chrome,firefox,webkit
 *   node __localtests__/fo-cross-browser-fo-probe.mjs --json .sandbox-edit/fo-cross-browser-probe.json
 *
 * Headed Playwright (FO→canvas ink unreliable headless). Skips engines that fail to launch.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-cross-browser-probe.json')

const BITMAP_ONLY_CANVAS_MIN = 1.5
const BITMAP_ONLY_SVG_MAX = 0.35
const NEAR_PARITY_CANVAS_MAX = 0.5

const DEFAULT_ENGINES = ['chromium', 'chrome', 'firefox', 'webkit']

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const enginesArg = args.includes('--engines')
  ? args[args.indexOf('--engines') + 1]
  : DEFAULT_ENGINES.join(',')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function abs(v) {
  return v == null || !Number.isFinite(v) ? null : Math.abs(v)
}

function isBitmapOnlyRow(row) {
  const t = row?.result?.threeWay ?? row?.threeWay
  const canvas = abs(t?.liveVsCanvasTopPx)
  const svg = abs(t?.liveVsSvgTopPx)
  return canvas != null && svg != null && canvas >= BITMAP_ONLY_CANVAS_MIN && svg <= BITMAP_ONLY_SVG_MAX
}

function isNearParityRow(row) {
  const t = row?.result?.threeWay ?? row?.threeWay
  const canvas = abs(t?.liveVsCanvasTopPx)
  return canvas != null && canvas <= NEAR_PARITY_CANVAS_MAX
}

function synthesize(engineRows) {
  const ran = engineRows.filter((r) => r.available && r.result && !r.error)
  const chromiumFamily = ran.filter((r) => r.engine === 'chromium' || r.engine === 'chrome')
  const nonChromium = ran.filter((r) => r.engine === 'firefox' || r.engine === 'webkit')

  const chromiumBitmap = chromiumFamily.filter(isBitmapOnlyRow)
  const nonChromiumParity = nonChromium.filter(isNearParityRow)
  const nonChromiumBitmap = nonChromium.filter(isBitmapOnlyRow)

  const canvasDeltas = ran.map((r) => roundPx(r.result?.threeWay?.liveVsCanvasTopPx))
  const spread =
    canvasDeltas.length >= 2
      ? roundPx(Math.max(...canvasDeltas) - Math.min(...canvasDeltas))
      : null

  const allBitmapOnly = ran.length > 0 && ran.every(isBitmapOnlyRow)
  const anyNearParity = ran.some(isNearParityRow)

  /** @type {string} */
  let verdict = 'INCONCLUSIVE'
  let isBugChromiumOnly = null
  let note = ''

  if (chromiumFamily.length && nonChromium.length) {
    const chOk = chromiumFamily.every(isBitmapOnlyRow)
    const ncOk = nonChromium.every(isNearParityRow)
    if (chOk && ncOk) {
      verdict = 'CHROMIUM_ONLY'
      isBugChromiumOnly = true
      note =
        'Chromium-family BITMAP_ONLY (~2.8px canvasΔ, svg≈live); Firefox/WebKit near parity.'
    } else if (chOk && nonChromium.every(isBitmapOnlyRow)) {
      verdict = 'CLASS_WIDE_BITMAP_ONLY'
      isBugChromiumOnly = false
      note =
        'All engines: svg≈live, canvasΔ ≫0 (FO→bitmap strut gap). Magnitude varies by engine — not Chromium-exclusive.'
    } else if (allBitmapOnly) {
      verdict = 'CLASS_WIDE_BITMAP_ONLY'
      isBugChromiumOnly = false
      note = 'Every ran engine shows BITMAP_ONLY; not Chromium-only.'
    } else {
      verdict = 'MIXED'
      isBugChromiumOnly = false
      note = 'Partial engine split — inspect per-engine rows.'
    }
  } else if (chromiumFamily.length && !nonChromium.length) {
    if (chromiumFamily.every(isBitmapOnlyRow)) {
      verdict = 'CHROMIUM_FAMILY_ONLY_RUN'
      isBugChromiumOnly = null
      note = 'Chromium-family BITMAP_ONLY; run firefox/webkit to test exclusivity.'
    } else {
      verdict = 'INCONCLUSIVE'
      isBugChromiumOnly = null
      note = 'Only Chromium-family engines ran.'
    }
  } else if (!chromiumFamily.length && nonChromium.length) {
    verdict = allBitmapOnly ? 'NON_CHROMIUM_BITMAP_ONLY' : 'INCONCLUSIVE'
    isBugChromiumOnly = false
    note = anyNearParity
      ? 'Non-Chromium engines show near parity on some runs.'
      : 'No Chromium-family engine in this run.'
  }

  return {
    enginesRequested: engineRows.map((r) => r.engine),
    enginesRan: ran.map((r) => r.engine),
    enginesSkipped: engineRows.filter((r) => !r.available).map((r) => r.engine),
    chromiumFamilyCanvasDeltaPx: chromiumFamily.map((r) =>
      roundPx(r.result?.threeWay?.liveVsCanvasTopPx),
    ),
    nonChromiumCanvasDeltaPx: nonChromium.map((r) => roundPx(r.result?.threeWay?.liveVsCanvasTopPx)),
    spreadAllEnginesPx: spread,
    verdict,
    isBugChromiumOnly,
    note,
  }
}

function printReport(payload) {
  console.log('\n--- Cross-browser FO probe (minimal nav FO) ---\n')
  console.log(`dpr=${payload.dpr} · landmark=${payload.landmark}`)
  console.log(
    `Verdict: ${payload.synthesis?.verdict ?? '—'} · Chromium-only bug: ${payload.synthesis?.isBugChromiumOnly ?? '—'}`,
  )
  if (payload.synthesis?.note) console.log(`Note: ${payload.synthesis.note}`)
  console.log('\nPer engine:')
  for (const row of payload.engines ?? []) {
    if (!row.available) {
      console.log(`  ${String(row.engine).padEnd(10)} SKIP — ${row.launchError ?? 'unavailable'}`)
      continue
    }
    if (row.error) {
      console.log(`  ${String(row.engine).padEnd(10)} ERROR — ${row.error}`)
      continue
    }
    const t = row.result?.threeWay ?? {}
    console.log(
      `  ${String(row.engine).padEnd(10)} canvasΔ=${t.liveVsCanvasTopPx?.toFixed(3) ?? '—'} ` +
        `svgΔ=${t.liveVsSvgTopPx?.toFixed(3) ?? '—'} · ${row.result?.verdict ?? '—'}`,
    )
  }
  console.log('')
}

/**
 * @param {string} engine
 * @param {boolean} headless
 */
async function launchEngine(engine, headless) {
  const { chromium, firefox, webkit } = await import('playwright')
  const launchOpts = { headless }
  if (engine === 'chromium') return { browser: await chromium.launch(launchOpts), engine }
  if (engine === 'chrome') {
    try {
      return { browser: await chromium.launch({ ...launchOpts, channel: 'chrome' }), engine }
    } catch (err) {
      return { browser: await chromium.launch(launchOpts), engine: 'chrome', channelFallback: true }
    }
  }
  if (engine === 'firefox') return { browser: await firefox.launch(launchOpts), engine }
  if (engine === 'webkit') return { browser: await webkit.launch(launchOpts), engine }
  throw new Error(`Unknown engine: ${engine}`)
}

/**
 * @param {import('playwright').Browser} browser
 * @param {number} port
 * @param {URLSearchParams} qs
 */
async function runProbeInBrowser(browser, port, qs) {
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 420 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))
  const url = `http://127.0.0.1:${port}/__localtests__/fo-cross-browser-fo-probe.html?${qs}`
  console.log(`  Page: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foCrossBrowserFoProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foCrossBrowserFoProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed: ${bootErr}`)
  const result = await page.evaluate(() => window.__foCrossBrowserFoProbe.result)
  const userAgent = await page.evaluate(() => navigator.userAgent)
  await page.close()
  return { result, userAgent }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed browsers.')
  }
  const headless = process.env.HEADLESS === '1'

  const engines = enginesArg
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
  if (!engines.length) engines.push(...DEFAULT_ENGINES)

  const { server, port } = await startLocalServer()
  const qs = new URLSearchParams({
    dpr: String(dprArg),
    landmark: landmarkArg,
  })

  /** @type {Record<string, unknown>[]} */
  const engineRows = []

  try {
    for (const engine of engines) {
      console.log(`\n=== engine: ${engine} ===`)
      /** @type {Record<string, unknown>} */
      const row = { engine, available: false, headed: !headless }
      try {
        const launched = await launchEngine(engine, headless)
        row.available = true
        if (launched.channelFallback) row.channelFallback = true
        try {
          const { result, userAgent } = await runProbeInBrowser(launched.browser, port, qs)
          row.userAgent = userAgent
          row.result = result
        } finally {
          await launched.browser.close()
        }
      } catch (err) {
        row.launchError = String(err?.message || err)
        console.warn(`  Skip ${engine}: ${row.launchError}`)
      }
      engineRows.push(row)
    }

    const payload = {
      probe: 'fo-cross-browser-fo-probe',
      generatedAt: new Date().toISOString(),
      dpr: dprArg,
      landmark: landmarkArg,
      headed: !headless,
      fixture: 'hand-built-static-minimal-nav-fo',
      halfLeadingClassPx: 2.8,
      engines: engineRows,
      synthesis: synthesize(engineRows),
    }

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${outPath}`)

    printReport(payload)
  } finally {
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
