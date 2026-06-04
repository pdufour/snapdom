#!/usr/bin/env node
/**
 * Extended cross-browser FO probe — Firefox/WebKit + DPR sweep per engine.
 *
 *   node __localtests__/fo-cross-browser-extended-probe.mjs
 *   node __localtests__/fo-cross-browser-extended-probe.mjs --engines chromium,firefox,webkit --dprs 1,2
 *   node __localtests__/fo-cross-browser-extended-probe.mjs --json .sandbox-edit/fo-cross-browser-extended-probe.json
 *
 * Headed Playwright. Skips engines that fail to launch.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium, firefox, webkit } from 'playwright'
import { startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-cross-browser-extended-probe.json')
const DEFAULT_ENGINES = ['chromium', 'chrome', 'firefox', 'webkit']
const DEFAULT_DPRS = '1,2'

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const enginesArg = args.includes('--engines')
  ? args[args.indexOf('--engines') + 1]
  : DEFAULT_ENGINES.join(',')
const dprsArg = args.includes('--dprs') ? args[args.indexOf('--dprs') + 1] : DEFAULT_DPRS

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

const LAUNCHERS = {
  chromium: () => chromium.launch({ headless: false }),
  chrome: () => chromium.launch({ channel: 'chrome', headless: false }),
  firefox: () => firefox.launch({ headless: false }),
  webkit: () => webkit.launch({ headless: false }),
}

async function runEngineDpr(engine, dpr, port) {
  const launch = LAUNCHERS[engine]
  if (!launch) return { engine, dpr, available: false, launchError: 'unknown engine' }
  let browser
  try {
    browser = await launch()
  } catch (err) {
    return { engine, dpr, available: false, launchError: String(err?.message || err) }
  }
  try {
    const page = await browser.newPage()
    await page.setViewportSize({ width: 520, height: 560 })
    const url = `http://127.0.0.1:${port}/__localtests__/fo-cross-browser-fo-probe.html?dpr=${dpr}`
    await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
    await page.waitForFunction(() => window.__foCrossBrowserFoProbe?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foCrossBrowserFoProbe?.bootError)
    if (bootErr) return { engine, dpr, available: true, error: bootErr }
    const result = await page.evaluate(() => window.__foCrossBrowserFoProbe.result)
    return {
      engine,
      dpr,
      available: true,
      userAgent: await page.evaluate(() => navigator.userAgent),
      canvasDelta: roundPx(result?.threeWay?.liveVsCanvasTopPx),
      svgDelta: roundPx(result?.threeWay?.liveVsSvgTopPx),
      halfLeadingPx: roundPx(result?.halfLeadingPx),
      classification:
        Math.abs(result?.threeWay?.liveVsCanvasTopPx ?? 0) >= 1.5 &&
        Math.abs(result?.threeWay?.liveVsSvgTopPx ?? 0) <= 0.35
          ? 'BITMAP_ONLY'
          : Math.abs(result?.threeWay?.liveVsCanvasTopPx ?? 0) <= 0.5
            ? 'NEAR_PARITY'
            : 'MIXED',
    }
  } finally {
    await browser?.close()
  }
}

function synthesize(rows) {
  const ran = rows.filter((r) => r.available && !r.error && r.canvasDelta != null)
  const byEngine = new Map()
  for (const r of ran) {
    if (!byEngine.has(r.engine)) byEngine.set(r.engine, [])
    byEngine.get(r.engine).push(r)
  }
  const chromiumFamily = ran.filter((r) => r.engine === 'chromium' || r.engine === 'chrome')
  const nonChromium = ran.filter((r) => r.engine === 'firefox' || r.engine === 'webkit')
  const spread =
    ran.length >= 2
      ? roundPx(
          Math.max(...ran.map((r) => r.canvasDelta)) - Math.min(...ran.map((r) => r.canvasDelta)),
        )
      : null
  return {
    enginesRan: [...byEngine.keys()],
    allBitmapOnly: ran.length > 0 && ran.every((r) => r.classification === 'BITMAP_ONLY'),
    crossEngineSpreadPx: spread,
    chromiumMeanCanvasDelta: roundPx(
      chromiumFamily.reduce((s, r) => s + r.canvasDelta, 0) / (chromiumFamily.length || 1),
    ),
    nonChromiumMeanCanvasDelta: roundPx(
      nonChromium.reduce((s, r) => s + r.canvasDelta, 0) / (nonChromium.length || 1),
    ),
    notChromiumExclusive:
      nonChromium.some((r) => r.classification === 'BITMAP_ONLY') &&
      chromiumFamily.some((r) => r.classification === 'BITMAP_ONLY'),
    note: 'Extended sweep: same hand-built FO on each engine × DPR.',
  }
}

async function main() {
  const engines = enginesArg.split(',').map((s) => s.trim()).filter(Boolean)
  const dprs = dprsArg.split(',').map((s) => Number(s.trim())).filter((n) => Number.isFinite(n))

  const { server, port } = await startLocalServer()
  /** @type {Awaited<ReturnType<typeof runEngineDpr>>[]} */
  const rows = []
  for (const engine of engines) {
    for (const dpr of dprs) {
      console.log(`Running ${engine} @ dpr=${dpr}…`)
      rows.push(await runEngineDpr(engine, dpr, port))
    }
  }

  const payload = {
    probe: 'fo-cross-browser-extended-probe',
    engines,
    dprs,
    rows,
    synthesis: synthesize(rows),
    headed: true,
  }

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- Cross-browser extended ---')
  for (const row of rows) {
    if (!row.available) {
      console.log(`  ${row.engine} dpr=${row.dpr} SKIP`)
      continue
    }
    console.log(
      `  ${row.engine} dpr=${row.dpr} canvasΔ=${row.canvasDelta ?? '—'} class=${row.classification ?? '—'}`,
    )
  }
  console.log(`spread=${payload.synthesis?.crossEngineSpreadPx ?? '—'}`)
  console.log(`Wrote ${jsonOut}`)

  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
