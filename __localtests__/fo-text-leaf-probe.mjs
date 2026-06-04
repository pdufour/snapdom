#!/usr/bin/env node
/**
 * Text leaf vs flex anchor — Home link GBCR, Range ink, line-height; live / FO / canvas.
 *
 *   node __localtests__/fo-text-leaf-probe.mjs
 *   node __localtests__/fo-text-leaf-probe.mjs --json .sandbox-edit/text-leaf-probe.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'text-leaf-probe.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function printSummary(payload) {
  const a = payload.driftAttribution || {}
  const liveA = payload.anchor?.live
  const liveL = payload.textLeaf?.live
  console.log('\n--- FO text leaf vs flex anchor (Home) ---\n')
  console.log(`Verdict: ${payload.verdict ?? '—'}`)
  console.log(`Same DOM node (anchor === leaf): ${payload.roles?.sameDomNode ?? '—'}\n`)

  console.log('Anchor <a> (flex stretch box)')
  console.log(
    `  GBCR top (live): ${fmt(liveA?.gbcrInContainer?.top)}  height: ${fmt(liveA?.gbcrInContainer?.height)}`,
  )
  console.log(
    `  Range topInBorder (live): ${fmt(liveA?.rangeInk?.topInBorderPx)}  line-height: ${liveA?.typography?.lineHeightComputed ?? '—'}`,
  )
  console.log(
    `  GBCR top live→FO Δ: ${fmt(a.anchorGbcrTopLiveVsFoPx)}  Range topInBorder live→FO Δ: ${fmt(a.anchorRangeTopInBorderLiveVsFoPx)}`,
  )
  console.log(
    `  Painted live→canvas Δ: ${fmt(a.anchorPaintedLiveVsCanvasPx)}`,
  )

  console.log('\nText leaf (findTextLeaf)')
  console.log(
    `  GBCR top (live): ${fmt(liveL?.gbcrInContainer?.top)}  Range topInBorder: ${fmt(liveL?.rangeInk?.topInBorderPx)}`,
  )
  console.log(
    `  Painted three-way: svgΔ=${fmt(a.leafPaintedLiveVsSvgPx)} canvasΔ=${fmt(a.leafPaintedLiveVsCanvasPx)}`,
  )
  console.log(
    `  Range topInBorder live→FO Δ: ${fmt(a.leafRangeTopInBorderLiveVsFoPx)}`,
  )

  for (const line of payload.interpretation ?? []) {
    console.log(`  · ${line}`)
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
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-leaf-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foTextLeafProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foTextLeafProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(async () => window.__foTextLeafProbe.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headless = process.env.HEADLESS === '1'
    payload.commands = ['npm run compile', 'node __localtests__/fo-text-leaf-probe.mjs']

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printSummary(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
