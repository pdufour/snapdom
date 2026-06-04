#!/usr/bin/env node
/**
 * Decompose rank-probe-011 (unitless line-height:1 + int-floor) vs product-baseline on mini Home.
 * Recipe replica from historical fo-fix-recipes-legacy (corpus removed 2026-06).
 *
 *   SNAPDOM_LOCAL_PORT=9923 node __localtests__/rank-probe-011-root-cause.mjs
 *   node __localtests__/rank-probe-011-root-cause.mjs --json __localtests__/.sandbox-edit/rank-probe-011-root-cause.json
 *
 * Headed Chrome only. HEADLESS=1 discouraged for FO ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PORT = 9923
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'rank-probe-011-root-cause.json')

const COMMANDS = [
  'npm run compile',
  `SNAPDOM_LOCAL_PORT=${DEFAULT_PORT} node __localtests__/rank-probe-011-root-cause.mjs`,
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

const SIGNIFICANT_PX = 0.05

/** @param {Record<string, unknown>} payload */
function buildAnalysis(payload) {
  const variants = payload.variants || []
  const base = variants.find((v) => v.armId === 'product-baseline')
  const lh = variants.find((v) => v.armId === 'unitless-lh-only')
  const floor = variants.find((v) => v.armId === 'int-floor-only')
  const full = variants.find((v) => v.armId === 'rank-probe-011-replica')

  const baseCanvas = base?.ink?.liveVsCanvasTopPx ?? null
  const delta = (arm) =>
    baseCanvas != null && arm?.ink?.liveVsCanvasTopPx != null
      ? arm.ink.liveVsCanvasTopPx - baseCanvas
      : null

  const dLh = delta(lh)
  const dFloor = delta(floor)
  const dFull = delta(full)

  /** @type {string[]} */
  const notes = []

  if (base?.ink?.liveVsSvgTopPx != null && Math.abs(base.ink.liveVsSvgTopPx) < 0.35) {
    notes.push('Baseline: SVG FO ink ≈ live — canvas gap is raster-stage, not serialization.')
  }

  if (dLh != null && Math.abs(dLh) >= SIGNIFICANT_PX) {
    notes.push(
      `Unitless line-height:1 on FO * shifts canvasΔ by ${dLh >= 0 ? '+' : ''}${dLh.toFixed(3)}px vs baseline.`,
    )
  } else if (dLh != null) {
    notes.push(`Unitless lh alone: negligible canvasΔ change (${dLh.toFixed(3)}px).`)
  }

  if (dFloor != null && Math.abs(dFloor) >= SIGNIFICANT_PX) {
    notes.push(
      `int-floor viewBox alone shifts canvasΔ by ${dFloor >= 0 ? '+' : ''}${dFloor.toFixed(3)}px vs baseline.`,
    )
  } else if (dFloor != null) {
    notes.push(`int-floor alone: negligible canvasΔ change (${dFloor.toFixed(3)}px).`)
  }

  if (dFull != null && dLh != null && Math.abs(dFull - dLh) < SIGNIFICANT_PX) {
    notes.push('Full rank-probe-011 ≈ unitless-lh arm — int-floor is not the primary worsening factor.')
  } else if (dFull != null && dFloor != null && Math.abs(dFull - dFloor) < SIGNIFICANT_PX) {
    notes.push('Full rank-probe-011 ≈ int-floor arm — line-height override is not the primary factor.')
  } else if (dFull != null) {
    notes.push(
      `Full replica canvasΔ delta vs baseline: ${dFull >= 0 ? '+' : ''}${dFull.toFixed(3)}px (historical matrix ~+1.0px worse than 2.797).`,
    )
  }

  let primaryFactor = 'INCONCLUSIVE'
  if (dLh != null && dFloor != null) {
    if (Math.abs(dLh) > Math.abs(dFloor) + SIGNIFICANT_PX) primaryFactor = 'UNITLESS_LINE_HEIGHT'
    else if (Math.abs(dFloor) > Math.abs(dLh) + SIGNIFICANT_PX) primaryFactor = 'INT_FLOOR_VIEWBOX'
    else if (Math.abs(dLh) < SIGNIFICANT_PX && Math.abs(dFloor) < SIGNIFICANT_PX && Math.abs(dFull ?? 0) >= SIGNIFICANT_PX) {
      primaryFactor = 'INTERACTION_ONLY'
    } else if (Math.abs(dLh) >= SIGNIFICANT_PX && Math.abs(dFloor) >= SIGNIFICANT_PX) {
      primaryFactor = 'BOTH_CONTRIBUTE'
    }
  }

  return {
    baselineCanvasDelta: baseCanvas,
    deltaCanvasVsBaseline: {
      unitlessLhOnly: dLh,
      intFloorOnly: dFloor,
      rankProbe011Replica: dFull,
    },
    primaryFactor,
    notes,
  }
}

function printSummary(payload, analysis) {
  console.log('\n--- rank-probe-011 decomposition (mini Home) ---\n')
  for (const v of payload.variants || []) {
    const ink = v.ink || {}
    console.log(
      `${v.armId}: canvasΔ=${ink.liveVsCanvasTopPx?.toFixed(3) ?? '—'} svgΔ=${ink.liveVsSvgTopPx?.toFixed(3) ?? '—'} rootRound=${v.svgRootRound ?? 'default'}`,
    )
  }
  console.log(`\nPrimary factor: ${analysis.primaryFactor}`)
  for (const n of analysis.notes) console.log(`  · ${n}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('WARNING: HEADLESS=1 — FO canvas ink unreliable per project rules')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const url = `http://127.0.0.1:${port}/__localtests__/rank-probe-011-root-cause.html?auto=1&dpr=2&scale=1&landmark=Home`
  console.log('Opening', url)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__rankProbe011RootCause?.ready === true, null, {
      timeout: 60_000,
    })
    await page.waitForFunction(() => window.__rankProbe011RootCause?.done === true, null, {
      timeout: 300_000,
    })
    const err = await page.evaluate(() => window.__rankProbe011RootCause?.error)
    if (err) throw new Error(err)

    const probePayload = await page.evaluate(() => window.__rankProbe011RootCause.payload)
    const analysis = buildAnalysis(probePayload)

    const outPath = jsonOutArg ?? DEFAULT_OUT
    const payload = {
      probe: 'rank-probe-011-root-cause',
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
      fixture: 'mini-nav',
      landmark: 'Home',
      dpr: 2,
      scale: 1,
      recipeId: 'product-baseline',
      commands: COMMANDS,
      historicalNote:
        'rank-probe-011-line-height-unitless-int-floor was 3.797px |Δ| in 2026-06-01 rank-probe matrix vs 2.797 baseline; recipe removed from active corpus.',
      ...probePayload,
      analysis,
      conclusion: analysis.notes.join(' '),
    }

    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printSummary(payload, analysis)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
