#!/usr/bin/env node
/**
 * Headed probe: wave-5 product flags (default off in src/) — all 16 combos of
 * experimentalFoPinLineHeightFromLive, experimentalRasterSvgPatch, experimentalRasterBackingCeil,
 * experimentalRasterDisableGbcrNudge on mini Home @ dpr=1.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=8799 node __localtests__/fo-experimental-flags-probe.mjs
 *   node __localtests__/fo-experimental-flags-probe.mjs --json .sandbox-edit/fix-w5-flags.json
 *
 * Promotion bar: |canvasΔ| < 2.797 − 0.05 with |svgΔ| < 0.15.
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 8799
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fix-w5-flags.json')
const PLATEAU_PX = 2.797
const PLATEAU_TOL = 0.05
const SVG_PROMOTE_MAX = 0.15

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** @param {object[]} comparisons */
function promotableRows(comparisons) {
  return (comparisons ?? []).filter(
    (row) =>
      row.id !== 'baseline' &&
      row.absCanvasDeltaPx != null &&
      row.absCanvasDeltaPx < PLATEAU_PX - PLATEAU_TOL &&
      row.absSvgDeltaPx != null &&
      row.absSvgDeltaPx < SVG_PROMOTE_MAX,
  )
}

function interpret(payload) {
  const baseline = payload.baselineCanvasDeltaPx
  const absBaseline = baseline != null ? Math.abs(baseline) : null
  const atPlateau =
    absBaseline != null && Math.abs(absBaseline - PLATEAU_PX) <= PLATEAU_TOL

  const promote = promotableRows(payload.comparisons)

  /** @type {string[]} */
  const lines = []
  if (baseline != null) {
    lines.push(`Baseline canvasΔ=${roundPx(baseline)}px (|Δ|=${roundPx(absBaseline)}px).`)
  }

  const wired = payload.flagsWired ?? {}
  for (const [flag, ok] of Object.entries(wired)) {
    lines.push(`${flag}: ${ok ? 'wired (effect observed)' : 'NOT wired / no effect'}.`)
  }

  if (atPlateau) {
    lines.push(
      `Baseline still at ~${PLATEAU_PX}px plateau — wave-5 flags did NOT fix checkout nav drift.`,
    )
  } else if (absBaseline != null && absBaseline < 0.5) {
    lines.push('Baseline canvasΔ < 0.5px — drift may be fixed (verify blackbox).')
  }

  for (const row of payload.comparisons ?? []) {
    if (row.id === 'baseline') continue
    const ch = row.deltaFromBaselinePx
    if (ch == null) continue
    if (Math.abs(ch) >= 0.05) {
      lines.push(
        `${row.id}: canvasΔ=${roundPx(row.canvasDeltaPx)}px (Δ from baseline ${ch >= 0 ? '+' : ''}${roundPx(ch)}px).`,
      )
    }
  }

  if (promote.length) {
    lines.push(
      `PROMOTE CANDIDATES (${promote.length}): ${promote.map((r) => r.id).join(', ')} — beat ${PLATEAU_PX}px with |svgΔ| < ${SVG_PROMOTE_MAX}.`,
    )
  } else {
    lines.push(
      `No promote candidates — none beat ${PLATEAU_PX}px |canvasΔ| with |svgΔ| < ${SVG_PROMOTE_MAX}.`,
    )
  }

  let verdict = 'NOT_FIXED_AT_PLATEAU'
  if (promote.length) verdict = 'PROMOTE_CANDIDATES'
  else if (!atPlateau && absBaseline != null && absBaseline < 0.5) verdict = 'BASELINE_CLEAN'

  return {
    verdict,
    atPlateau,
    promoteCandidates: promote.map((r) => ({
      id: r.id,
      absCanvasDeltaPx: roundPx(r.absCanvasDeltaPx),
      absSvgDeltaPx: roundPx(r.absSvgDeltaPx),
    })),
    lines,
    fixed: atPlateau ? false : absBaseline != null && absBaseline < 0.5,
  }
}

function on(v) {
  return v ? 'on' : 'off'
}

function printTable(payload, info) {
  console.log('\n--- wave-5 experimental flags probe (16 combos, product snapdom + toCanvas) ---\n')
  console.log(
    'variant'.padEnd(14) +
      'pinLh'.padStart(6) +
      'svgP'.padStart(6) +
      'ceil'.padStart(6) +
      'noGbc'.padStart(6) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δbase'.padStart(8) +
      'prom'.padStart(6),
  )
  const promoteIds = new Set((info.promoteCandidates ?? []).map((r) => r.id))
  for (const row of payload.variants ?? []) {
    const t = row.threeWay ?? {}
    const cmp = payload.comparisons?.find((c) => c.id === row.id)
    const f = row.flags ?? {}
    console.log(
      String(row.id).padEnd(14) +
        on(f.experimentalFoPinLineHeightFromLive).padStart(6) +
        (f.experimentalRasterSvgPatch ? 'on' : 'off').padStart(6) +
        on(f.experimentalRasterBackingCeil).padStart(6) +
        on(f.experimentalRasterDisableGbcrNudge).padStart(6) +
        (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
        (cmp?.deltaFromBaselinePx?.toFixed(3) ?? '—').padStart(8) +
        (promoteIds.has(row.id) ? 'yes' : '—').padStart(6),
    )
  }
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-experimental-flags-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foExperimentalFlagsProbe?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foExperimentalFlagsProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(() => {
      const p = window.__foExperimentalFlagsProbe.last
      return JSON.parse(JSON.stringify(p))
    })

    const evaluation = interpret(probe)
    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      port,
      plateauReferencePx: PLATEAU_PX,
      svgPromoteMaxPx: SVG_PROMOTE_MAX,
      promoteCandidates: evaluation.promoteCandidates,
      ...probe,
      evaluation,
    }

    const outPath = jsonOutArg ? path.resolve(REPO_ROOT, jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printTable(payload, evaluation)

    if (evaluation.atPlateau && !evaluation.promoteCandidates?.length) {
      console.log(`NOT FIXED: canvasΔ still ~${PLATEAU_PX}px at baseline; no promote candidates.`)
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
