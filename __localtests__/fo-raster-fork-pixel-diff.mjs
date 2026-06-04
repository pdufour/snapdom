#!/usr/bin/env node
/**
 * Same serialized SVG — baseline lab-toCanvas vs raster-only SVG fork patches.
 * Logs whether decode bitmap pixels differ at all (pixel diff count).
 *
 *   npm run compile && node __localtests__/fo-raster-fork-pixel-diff.mjs
 *   node __localtests__/fo-raster-fork-pixel-diff.mjs --json .sandbox-edit/raster-fork-pixel-diff.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable for FO ink).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'raster-fork-pixel-diff.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function printReport(payload) {
  console.log('\n--- raster fork pixel diff (same SVG) ---\n')
  const b = payload.baseline?.ink ?? {}
  console.log(
    `Baseline svgΔ=${b.liveVsSvgTopPx?.toFixed(3) ?? '—'} canvasΔ=${b.liveVsCanvasTopPx?.toFixed(3) ?? '—'}`,
  )
  console.log(`Inline FO: lh=${JSON.stringify(payload.inlineFo?.inlineLineHeights)} styleLh=${JSON.stringify(payload.inlineFo?.styleLineHeights)} flexCenter=${payload.inlineFo?.hasFlexAlignCenter}`)
  console.log('')
  console.log(
    'patch'.padEnd(22) +
      'svgΔ'.padStart(8) +
      'pixels'.padStart(12) +
      'identical'.padStart(10) +
      'topΔ'.padStart(8),
  )
  for (const row of payload.patches ?? []) {
    const px = row.pixelDiff ?? {}
    console.log(
      row.patchId.padEnd(22) +
        (row.ink?.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(8) +
        `${px.diffCount ?? '—'}/${px.totalPixels ?? '—'}`.padStart(12) +
        (px.identical ? 'yes' : 'no').padStart(10) +
        (row.ink?.deltaCanvasTopFromBaselinePx?.toFixed(3) ?? '—').padStart(8),
    )
  }
  console.log(`\nVerdict: ${payload.verdict}`)
  for (const line of payload.interpretation ?? []) console.log(`  · ${line}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-raster-fork-pixel-diff.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foRasterForkPixelDiff?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foRasterForkPixelDiff?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const probe = await page.evaluate(async () => window.__foRasterForkPixelDiff.run())

    const outPath = jsonOutArg
      ? path.isAbsolute(jsonOutArg)
        ? jsonOutArg
        : path.join(REPO_ROOT, jsonOutArg)
      : DEFAULT_OUT

    const payload = {
      ...probe,
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
      baseline: {
        ...probe.baseline,
        ink: {
          ...probe.baseline?.ink,
          liveVsSvgTopPx: roundPx(probe.baseline?.ink?.liveVsSvgTopPx),
          liveVsCanvasTopPx: roundPx(probe.baseline?.ink?.liveVsCanvasTopPx),
          canvasTopInBorder: roundPx(probe.baseline?.ink?.canvasTopInBorder),
        },
      },
      patches: (probe.patches ?? []).map((row) => ({
        ...row,
        ink: {
          ...row.ink,
          liveVsSvgTopPx: roundPx(row.ink?.liveVsSvgTopPx),
          liveVsCanvasTopPx: roundPx(row.ink?.liveVsCanvasTopPx),
          canvasTopInBorder: roundPx(row.ink?.canvasTopInBorder),
          deltaCanvasTopFromBaselinePx: roundPx(row.ink?.deltaCanvasTopFromBaselinePx),
        },
      })),
    }

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
