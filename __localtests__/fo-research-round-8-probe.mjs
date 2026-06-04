#!/usr/bin/env node
/**
 * FO research round 8 — w7 ceiling, blackbox cap vs Range, active matrix ingest,
 * FO bitmap row dump vs Range.
 *
 *   npm run compile && node __localtests__/fo-research-round-8-probe.mjs
 *   node __localtests__/fo-research-round-8-probe.mjs --json .sandbox-edit/research-round-8.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'research-round-8.json')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const sectionArg = args.includes('--section') ? args[args.indexOf('--section') + 1] : 'all'
const skipBlackbox = args.includes('--skip-blackbox')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** Parse active matrix log lines: `recipe  SVG Δ  canvas Δ  stage  pass` */
export function ingestActiveMatrixFromLog(logPath) {
  if (!fs.existsSync(logPath)) {
    return { found: false, path: logPath, note: 'Log not found' }
  }
  const text = fs.readFileSync(logPath, 'utf8')
  const lines = text.split('\n')
  /** @type {{ recipeId: string, svgDelta: number, canvasDelta: number, stage: string, pass: boolean }[]} */
  const rows = []
  let inTable = false
  for (const line of lines) {
    if (line.includes('recipe') && line.includes('canvas Δ')) {
      inTable = true
      continue
    }
    if (inTable && line.startsWith('---')) continue
    if (!inTable) continue
    const m = line.match(/^(\S+)\s+([-+]?\d+\.\d+)\s+([-+]?\d+\.\d+)\s+(\S+)\s+([✓✗])/)
    if (!m) {
      if (line.trim() === '' || line.startsWith('Opening ') || line.startsWith('FO fix')) inTable = false
      continue
    }
    rows.push({
      recipeId: m[1],
      svgDelta: Number(m[2]),
      canvasDelta: Number(m[3]),
      stage: m[4],
      pass: m[5] === '✓',
    })
  }
  const sorted = [...rows].sort((a, b) => Math.abs(a.canvasDelta) - Math.abs(b.canvasDelta))
  const best = sorted[0] ?? null
  const passCount = rows.filter((r) => r.pass).length
  const w7Rows = rows.filter((r) => r.recipeId.includes('w7') && r.recipeId.includes('half-leading'))
  return {
    found: rows.length > 0,
    path: path.relative(REPO_ROOT, logPath),
    rowCount: rows.length,
    passCount,
    bestRow: best,
    w7Best: w7Rows.sort((a, b) => Math.abs(a.canvasDelta) - Math.abs(b.canvasDelta))[0] ?? null,
    baselineRow: rows.find((r) => r.recipeId === 'product-baseline') ?? null,
    top8: sorted.slice(0, 8),
    note: rows.length ? `Ingested ${rows.length} matrix rows from log` : 'No parseable matrix table in log',
  }
}

/** Run bounce-check (optionally with w7 patch) and parse cap-model ink deltas. */
function runBlackboxCapProbe(patch = '') {
  const script = patch
    ? path.join(__dirname, 'bounce-check-experimental-run.mjs')
    : path.join(__dirname, 'bounce-check.mjs')
  const spawnArgs = patch ? [script, patch] : [script]
  const r = spawnSync(process.execPath, spawnArgs, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024,
    env: { ...process.env },
  })
  const out = `${r.stdout || ''}\n${r.stderr || ''}`
  /** @type {Record<string, number>} */
  const capDeltas = {}
  for (const label of ['Home', 'Products', 'Checkout', 'Email Address', 'Promo Code']) {
    const re = new RegExp(`${label}: paint\\.canvas\\.vs-border\\.top ([+-]?\\d+\\.\\d+)px`)
    const m = out.match(re)
    if (m) capDeltas[label] = Number(m[1])
  }
  const navParity = out.match(/Nav \|Δtop\(Home\)-Δtop\(Products\)\|: (\d+\.\d+)px/)
  return {
    patch: patch || 'none',
    exitCode: r.status ?? 1,
    passed: r.status === 0,
    capDeltas,
    navInkParityPx: navParity ? Number(navParity[1]) : null,
    stdoutTail: out.slice(-1500),
  }
}

function printReport(payload) {
  console.log('\n--- FO research round 8 ---\n')
  console.log(`dpr=${payload.dpr} · ${payload.landmark}`)
  if (payload.sections?.w7Ceiling) {
    const w = payload.sections.w7Ceiling.w7
    console.log(`w7 ceiling: snapdom=${w?.snapdomCanvasDelta} chromium=${w?.chromiumCanvasDelta} snapdom−chromium=${w?.snapdomVsChromiumPx}`)
  }
  if (payload.activeMatrixIngest?.bestRow) {
    console.log(`Active matrix best: ${payload.activeMatrixIngest.bestRow.recipeId} canvasΔ=${payload.activeMatrixIngest.bestRow.canvasDelta}`)
  }
  if (payload.blackboxCompare) {
    console.log(`Blackbox cap Home: baseline=${payload.blackboxCompare.baseline?.capDeltas?.Home} w7=${payload.blackboxCompare.w7?.capDeltas?.Home}`)
  }
  console.log('\nTop 5 unknowns:')
  for (const u of payload.synthesis?.top5Unknowns ?? []) console.log(`  ? ${u}`)
  console.log(`\nRecommended next: ${payload.synthesis?.recommendedNextStep ?? '—'}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const matrixLogCandidates = [
    path.join(__dirname, '.matrix-active-full-run.log'),
    path.join(__dirname, '.matrix-active-full.log'),
    path.join(__dirname, '.matrix-rank-bottom-75-active-merged.log'),
  ]
  const activeMatrixIngest = matrixLogCandidates
    .map((p) => ingestActiveMatrixFromLog(p))
    .find((r) => r.found) ?? ingestActiveMatrixFromLog(matrixLogCandidates[0])

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 560 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    section: sectionArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-research-round-8-probe.html?${qs}`
  console.log(`Page: ${url}`)

  /** @type {object} */
  let payload = {}

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
    await page.waitForFunction(() => window.__foResearchRound8?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foResearchRound8?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    payload = await page.evaluate(() => window.__foResearchRound8.result)
    payload.port = port
    payload.headed = process.env.HEADLESS !== '1'
    payload.chromeVersion = await page.evaluate(() => navigator.userAgent)
    payload.activeMatrixIngest = activeMatrixIngest
  } finally {
    await browser.close()
    server.close()
  }

  if (!skipBlackbox && (sectionArg === 'all' || sectionArg === 'blackbox')) {
    console.log('Running blackbox baseline (headed)…')
    const baseline = runBlackboxCapProbe('')
    console.log('Running blackbox w7 patch (headed)…')
    const w7 = runBlackboxCapProbe('fo-y-half-leading-meta')
    const homeBaseline = baseline.capDeltas.Home
    const homeW7 = w7.capDeltas.Home
    payload.blackboxCompare = {
      baseline,
      w7,
      homeCapDeltaShift: roundPx((homeW7 ?? 0) - (homeBaseline ?? 0)),
      w7CapPassesGate: homeW7 != null && Math.abs(homeW7) <= 0.06,
      w7CapAgreesWithLabRange:
        payload.sections?.labBlackboxCapReconcile?.rows?.find((r) => r.recipeId.includes('w7'))
          ?.labRangeCanvasDelta != null &&
        homeW7 != null &&
        Math.abs(
          homeW7 -
            payload.sections.labBlackboxCapReconcile.rows.find((r) => r.recipeId.includes('w7'))
              .labRangeCanvasDelta,
        ) < 0.15,
      verdict:
        homeW7 != null && Math.abs(homeW7) <= 0.06
          ? 'BLACKBOX_CAP_PASSES_WITH_W7'
          : 'BLACKBOX_CAP_DIVERGES_FROM_LAB_RANGE',
      implication:
        'Checkout blackbox uses cap-model ink reference — compare shift magnitude to mini lab Range Δ, not absolute equality.',
    }
    if (payload.synthesis) {
      payload.synthesis.newFindings.push(
        `Blackbox Home cap Δ: baseline ${homeBaseline}px → w7 ${homeW7}px (shift ${payload.blackboxCompare.homeCapDeltaShift}px)`,
      )
      if (!payload.blackboxCompare.w7CapPassesGate) {
        payload.synthesis.recommendedNextStep = 'metric-reconcile — w7 does not pass blackbox cap gate on checkout'
      }
    }
  }

  await fs.promises.mkdir(SANDBOX, { recursive: true })
  const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
  await fs.promises.writeFile(fullPath, `${JSON.stringify(payload, null, 2)}\n`)
  console.log(`Wrote ${fullPath}`)

  const sectionWrites = [
    ['research-round-8-w7-ceiling.json', payload.sections?.w7Ceiling],
    ['research-round-8-lab-blackbox-cap.json', payload.sections?.labBlackboxCapReconcile],
    ['research-round-8-fo-row-dump.json', payload.sections?.foBitmapRowDump],
    ['research-round-8-active-matrix.json', activeMatrixIngest],
    ['research-round-8-blackbox-w7.json', payload.blackboxCompare],
    ['research-round-8-synthesis.json', payload.synthesis],
  ]
  for (const [name, data] of sectionWrites) {
    if (data == null) continue
    const p = path.join(SANDBOX, name)
    await fs.promises.writeFile(
      p,
      `${JSON.stringify({ probe: 'fo-research-round-8', section: name, dpr: payload.dpr, landmark: payload.landmark, data }, null, 2)}\n`,
    )
    console.log(`Wrote ${p}`)
  }

  printReport(payload)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
