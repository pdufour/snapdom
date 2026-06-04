#!/usr/bin/env node
/**
 * FO raster root-cause probe — stage isolation, hypothesis falsification, evidence table.
 *
 *   npm run debug:fo-root-cause-probe
 *   node __localtests__/fo-root-cause-probe.mjs --dpr 1
 *   node __localtests__/fo-root-cause-probe.mjs --dpr-sweep
 *   node __localtests__/fo-root-cause-probe.mjs --json .sandbox-edit/root-cause-dpr1.json
 *
 * Writes:
 *   .sandbox-edit/root-cause-dpr1.json (default @ dpr=1)
 *   .sandbox-edit/root-cause-dpr2.json (with --dpr-sweep)
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_OUT = path.join(SANDBOX, 'root-cause-dpr1.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const sectionArg = args.includes('--section') ? args[args.indexOf('--section') + 1] : 'all'
const dprSweep = args.includes('--dpr-sweep')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function roundDeep(obj) {
  if (obj == null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(roundDeep)
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (k === 'canvas' || k === 'svgText' || k === 'debug') continue
    if (typeof v === 'number') out[k] = roundPx(v)
    else if (v && typeof v === 'object') out[k] = roundDeep(v)
    else out[k] = v
  }
  return out
}

function printReport(payload) {
  console.log('\n--- FO raster root-cause probe ---\n')
  console.log(`Verdict: ${payload.rootCause?.verdict ?? '—'}`)
  console.log(
    `Baseline @ dpr=${payload.dpr}: canvasΔ=${payload.baseline?.threeWay?.liveVsCanvasTopPx ?? '—'}px · svgΔ=${payload.baseline?.threeWay?.liveVsSvgTopPx ?? '—'}px`,
  )
  console.log(
    `Half-leading: ${payload.baseline?.halfLeadingLhFsPx ?? '—'}px · residual: ${payload.baseline?.residualCanvasMinusHalfLeadingPx ?? '—'}px`,
  )
  console.log(`Path A/B: ${payload.baseline?.pathAB?.verdict ?? '—'}`)
  console.log('')
  console.log('Confirmed:')
  for (const c of payload.rootCause?.confirmed ?? []) console.log(`  ✓ ${c}`)
  console.log('')
  console.log('Falsified:')
  for (const f of payload.rootCause?.falsified ?? []) console.log(`  ✗ ${f}`)
  console.log('')
  if (payload.dprComparison) {
    console.log('DPR comparison:')
    for (const row of payload.dprComparison.rows ?? []) {
      console.log(`  dpr=${row.dpr}: canvasΔ=${row.canvasDeltaPx}px`)
    }
    console.log(`  ${payload.dprComparison.implication ?? ''}`)
  }
  console.log('')
}

async function runProbe(page, port, qs) {
  const url = `http://127.0.0.1:${port}/__localtests__/fo-root-cause-probe.html?${qs}`
  console.log(`Page: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foRootCauseProbe?.ready === true, null, {
    timeout: 240_000,
  })
  const bootErr = await page.evaluate(() => window.__foRootCauseProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed: ${bootErr}`)
  return page.evaluate(() => window.__foRootCauseProbe.result)
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const { server, port } = await startLocalServer()

  try {
    const dprs = dprSweep ? [1, 2] : [dprArg]
    /** @type {Record<string, unknown>[]} */
    const byDpr = []

    for (const dpr of dprs) {
      const qs = new URLSearchParams({
        dpr: String(dpr),
        scale: String(scaleArg),
        landmark: landmarkArg,
        section: sectionArg,
      })
      const result = roundDeep(await runProbe(page, port, qs.toString()))
      byDpr.push(result)
    }

    const primary = byDpr[0]
    /** @type {Record<string, unknown>} */
    const payload = { ...primary }

    if (byDpr.length >= 2) {
      const rows = byDpr.map((r) => ({
        dpr: r.dpr,
        canvasDeltaPx: r.baseline?.threeWay?.liveVsCanvasTopPx ?? null,
        halfLeadingPx: r.baseline?.halfLeadingLhFsPx ?? null,
        residualPx: r.baseline?.residualCanvasMinusHalfLeadingPx ?? null,
        svgDeltaPx: r.baseline?.threeWay?.liveVsSvgTopPx ?? null,
      }))
      const d1 = rows.find((r) => r.dpr === 1)
      const d2 = rows.find((r) => r.dpr === 2)
      const dprSlack =
        d1?.canvasDeltaPx != null && d2?.canvasDeltaPx != null
          ? roundPx(d2.canvasDeltaPx - d1.canvasDeltaPx)
          : null
      payload.dprComparison = {
        rows,
        dprSlackPx: dprSlack,
        implication:
          dprSlack != null && Math.abs(dprSlack - 0.5) < 0.06
            ? `Drift grows by ~0.5px per dpr step (${dprSlack}px) — not pure half-leading scale.`
            : `DPR slack ${dprSlack ?? '—'}px.`,
      }
      fs.writeFileSync(
        path.join(SANDBOX, 'root-cause-dpr2.json'),
        `${JSON.stringify(byDpr.find((r) => r.dpr === 2) ?? byDpr[1], null, 2)}\n`,
      )
    }

    payload.generatedAt = new Date().toISOString()
    payload.headed = process.env.HEADLESS !== '1'

    const defaultOut = path.join(SANDBOX, `root-cause-dpr${primary.dpr ?? dprArg}.json`)
    const outPath = jsonOutArg
      ? path.isAbsolute(jsonOutArg)
        ? jsonOutArg
        : path.join(REPO_ROOT, jsonOutArg)
      : defaultOut

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

    printReport(payload)
    console.log(`Wrote ${outPath}`)
    if (payload.dprComparison) console.log(`Wrote ${path.join(SANDBOX, 'root-cause-dpr2.json')}`)
  } finally {
    await browser.close()
    await new Promise((resolve) => server.close(resolve))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
