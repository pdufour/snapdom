#!/usr/bin/env node
/**
 * FO research round 5 — decode timing, canvas2d backend, FO xmlns/subpixel,
 * img vs createImageBitmap, snapdom decode-layer delta, wave-12 spot-check.
 *
 *   npm run compile && node __localtests__/fo-research-round-5-probe.mjs
 *   node __localtests__/fo-research-round-5-probe.mjs --dpr 1 --json .sandbox-edit/research-round-5-full.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'research-round-5-full.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const sectionArg = args.includes('--section') ? args[args.indexOf('--section') + 1] : 'all'

function printReport(payload) {
  console.log('\n--- FO research round 5 ---\n')
  console.log(`dpr=${payload.dpr} · ${payload.landmark}`)
  console.log(
    `Baseline canvasΔ=${payload.baseline?.threeWay?.liveVsCanvasTopPx?.toFixed(3) ?? '—'} ` +
      `svgΔ=${payload.baseline?.threeWay?.liveVsSvgTopPx?.toFixed(3) ?? '—'}`,
  )
  console.log('\nTop 3 new findings:')
  for (const f of payload.synthesis?.top3NewFindings ?? []) console.log(`  + ${f}`)
  console.log(`\nBest next fix: ${payload.synthesis?.bestNextFixDirection ?? '—'}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    section: sectionArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-research-round-5-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
    await page.waitForFunction(() => window.__foResearchRound5?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foResearchRound5?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const payload = await page.evaluate(() => window.__foResearchRound5.result)
    payload.port = port
    payload.chromeVersion = await page.evaluate(() => navigator.userAgent)

    const outDir = path.join(REPO_ROOT, '.sandbox-edit')
    await fs.promises.mkdir(outDir, { recursive: true })

    const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(fullPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${fullPath}`)

    const sectionWrites = [
      ['research-round-5-decode-timing.json', payload.sections?.decodeTiming],
      ['research-round-5-canvas-backend.json', payload.sections?.canvasBackend],
      ['research-round-5-fo-namespace.json', payload.sections?.foNamespace],
      ['research-round-5-fo-subpixel.json', payload.sections?.foSubpixel],
      ['research-round-5-img-vs-bitmap.json', payload.sections?.imgVsBitmap],
      ['research-round-5-decode-layer.json', payload.sections?.decodeLayerZeroPx],
      ['research-round-5-wave12-spot.json', payload.sections?.wave12Spot],
      ['research-round-5-synthesis.json', payload.synthesis],
    ]
    for (const [name, data] of sectionWrites) {
      if (data == null) continue
      const p = path.join(outDir, name)
      await fs.promises.writeFile(
        p,
        `${JSON.stringify({ probe: 'fo-research-round-5', section: name, dpr: payload.dpr, landmark: payload.landmark, baseline: payload.baseline, data }, null, 2)}\n`,
      )
      console.log(`Wrote ${p}`)
    }

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
