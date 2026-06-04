#!/usr/bin/env node
/**
 * FO raster research-win — comprehensive headed probe (angles A–G).
 *
 *   npm run compile && node __localtests__/fo-research-win-probe.mjs
 *   node __localtests__/fo-research-win-probe.mjs --json .sandbox-edit/research-win-2026-06-02.json
 *   node __localtests__/fo-research-win-probe.mjs --dpr 1 --fixture mini --landmark Home
 *
 * Writes research-win-*.json (default: .sandbox-edit/research-win-latest.json).
 * Headed Chrome only — never gate on HEADLESS=1 ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'research-win-latest.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const fixtureArg = args.includes('--fixture') ? args[args.indexOf('--fixture') + 1] : 'mini'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function roundDeep(obj) {
  if (obj == null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(roundDeep)
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'number') out[k] = roundPx(v)
    else if (v && typeof v === 'object') out[k] = roundDeep(v)
    else out[k] = v
  }
  return out
}

function printReport(payload) {
  console.log('\n--- FO research-win probe ---\n')
  console.log(`Fixture: ${payload.fixture} · dpr=${payload.dpr} · ${payload.landmark}`)
  console.log(`Root cause verdict: ${payload.rootCauseVerdict}`)
  console.log(`Winning hypothesis: ${payload.winningHypothesis}`)
  console.log('')
  if (payload.baselineInk) {
    const b = payload.baselineInk
    console.log(
      `Baseline product-baseline: svgΔ=${b.liveVsSvgTopPx?.toFixed(3)} canvasΔ=${b.liveVsCanvasTopPx?.toFixed(3)}`,
    )
  }
  console.log('')
  console.log('Incremental ladder (canvasΔ):')
  for (const row of payload.incrementalLadder ?? []) {
    console.log(`  ${row.stepId.padEnd(28)} canvasΔ=${row.liveVsCanvasTopPx?.toFixed(3) ?? '—'}`)
  }
  console.log('')
  console.log('CSS reachability (bitmap):')
  for (const row of payload.cssReachability ?? []) {
    console.log(
      `  ${row.variantId.padEnd(24)} canvasΔ=${row.liveVsCanvasTopPx?.toFixed(3) ?? '—'} ` +
        `pixelDiff=${row.pixelDiffFromBaseline ?? '—'} redInk=${row.redBackgroundVisible ?? '—'}`,
    )
  }
  console.log('')
  console.log('Next experiments:')
  for (const ex of payload.nextExperiments ?? []) {
    console.log(`  ${ex.rank}. ${ex.recipeId} — ${ex.rationale}`)
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
  await page.setViewportSize({ width: 560, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    fixture: fixtureArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-research-win-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foResearchWinProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foResearchWinProbe?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const pageResult = roundDeep(await page.evaluate(() => window.__foResearchWinProbe.result))

    /** CDP: computed line-height on FO text leaf while SVG is on-screen (pre-decode layout). */
    let cdpDuringLayout = null
    try {
      const client = await page.context().newCDPSession(page)
      await client.send('DOM.enable')
      await client.send('CSS.enable')
      const { root } = await client.send('DOM.getDocument', { depth: -1 })
      const foNodes = await client.send('DOM.querySelectorAll', {
        nodeId: root.nodeId,
        selector: '#fo-inline-host foreignObject *',
      })
      const leafNodeId = foNodes.nodeIds?.[foNodes.nodeIds.length - 1]
      if (leafNodeId) {
        const { computedStyle } = await client.send('CSS.getComputedStyleForNode', {
          nodeId: leafNodeId,
        })
        const pick = (name) => {
          const i = computedStyle.indexOf(name)
          return i >= 0 ? computedStyle[i + 1] : null
        }
        cdpDuringLayout = {
          lineHeight: pick('line-height'),
          fontSize: pick('font-size'),
          display: pick('display'),
          verticalAlign: pick('vertical-align'),
          note: 'Computed on inline FO DOM host before img.decode (layout phase).',
        }
      }
    } catch (cdpErr) {
      cdpDuringLayout = { error: String(cdpErr?.message || cdpErr) }
    }

    const payload = roundDeep({
      ...pageResult,
      cdpDuringLayout,
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
    })

    const outPath = jsonOutArg
      ? path.resolve(process.cwd(), jsonOutArg)
      : DEFAULT_OUT
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
