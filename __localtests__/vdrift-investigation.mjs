#!/usr/bin/env node
/**
 * Wave 12 vdrift-fix probes: three-way ink + GBCR frac draw dest on mini Home/Products.
 * Headed Chrome only. Writes __localtests__/.sandbox-edit/vdrift-investigation.json
 *
 *   SNAPDOM_LOCAL_PORT=9913 node __localtests__/vdrift-investigation.mjs
 * Also runs fo-fix-lab calibrate matrix for the same ids (matrix-style ranking).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '.sandbox-edit', 'vdrift-investigation.json')
const DEFAULT_PORT = 9913
const RECIPES = [
  'product-baseline',
  'vdrift-fix-001-ceil-nudge',
  'vdrift-fix-002-round-nudge',
]
const LANDMARKS = ['Home', 'Products']

async function runDetailedProbe(page, port) {
  const qs = new URLSearchParams({
    recipes: RECIPES.join(','),
    landmarks: LANDMARKS.join(','),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/vdrift-investigation.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__vdriftInvestigation?.done === true, null, {
    timeout: 180_000,
  })
  const err = await page.evaluate(() => window.__vdriftInvestigation?.error)
  if (err) throw new Error(err)
  return page.evaluate(() => window.__vdriftInvestigation.payload)
}

async function runFoFixLabCalibrate(page, port) {
  const qs = new URLSearchParams({
    calibrate: '1',
    auto: '1',
    landmarks: LANDMARKS.join(','),
    ids: RECIPES.join(','),
    excludeTextBypass: '1',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
    timeout: 300_000,
  })
  const err = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError)
  if (err) throw new Error(`fo-fix-lab calibrate: ${err}`)
  return page.evaluate(() => window.__foFixCalibrateMatrix)
}

/** @param {Record<string, unknown>} payload */
function buildVerdict(payload) {
  /** @type {string[]} */
  const lines = []
  const baseline = payload.detailedProbe?.rows?.find((r) => r.recipeId === 'product-baseline')
  const v001 = payload.detailedProbe?.rows?.find((r) => r.recipeId === 'vdrift-fix-001-ceil-nudge')
  const v002 = payload.detailedProbe?.rows?.find((r) => r.recipeId === 'vdrift-fix-002-round-nudge')

  const homeBase = baseline?.landmarks?.find((l) => l.landmark === 'Home')
  const home001 = v001?.landmarks?.find((l) => l.landmark === 'Home')
  const home002 = v002?.landmarks?.find((l) => l.landmark === 'Home')

  const svgOk =
    homeBase?.liveVsSvg != null && Math.abs(homeBase.liveVsSvg) < 0.35
  const canvasBase = homeBase?.liveVsCanvas ?? null
  const canvas001 = home001?.liveVsCanvas ?? null
  const canvas002 = home002?.liveVsCanvas ?? null

  if (svgOk && canvasBase != null && Math.abs(canvasBase) > 1.5) {
    lines.push(
      `Mini Home: SVG≈live (svgΔ=${homeBase.liveVsSvg}) but baseline canvasΔ=${canvasBase.toFixed(3)}px — gap is FO→bitmap, not capture.`,
    )
  }

  const drawDy001 = v001?.raster?.drawDest?.dy
  const fracY = v001?.raster?.gbcrFracY
  if (fracY != null && drawDy001 != null) {
    lines.push(
      `vDriftFix draw nudge: dy=${drawDy001.toFixed(6)} (= -gbcrFracY ${fracY.toFixed(6)}); backing ceil vs round changes canvas backing only.`,
    )
  }

  if (canvasBase != null && canvas001 != null) {
    const improved = Math.abs(canvas001) < Math.abs(canvasBase) - 0.05
    lines.push(
      `Home |canvas vs live|: baseline ${canvasBase.toFixed(3)} → 001 ${canvas001.toFixed(3)} (${improved ? 'improved' : 'not improved'}).`,
    )
  }
  if (canvasBase != null && canvas002 != null) {
    lines.push(
      `Home |canvas vs live|: baseline ${canvasBase.toFixed(3)} → 002 ${canvas002.toFixed(3)}.`,
    )
  }

  const svgCanvas001 = home001?.svgVsCanvas
  const svgCanvasBase = homeBase?.svgVsCanvas
  if (
    svgCanvasBase != null &&
    svgCanvas001 != null &&
    Math.abs(svgCanvas001 - svgCanvasBase) < 0.1 &&
    canvas001 != null &&
    canvasBase != null &&
    Math.abs(canvas001) < Math.abs(canvasBase) - 0.05
  ) {
    lines.push(
      'Canvas metric moved but svg↔canvas gap unchanged vs baseline → likely drawImage dest nudge (metric shift), not FO bitmap paint fix.',
    )
  } else if (
    svgCanvas001 != null &&
    svgCanvasBase != null &&
    Math.abs(svgCanvas001) < Math.abs(svgCanvasBase) - 0.05
  ) {
    lines.push(
      'svg↔canvas gap shrank with canvasΔ — raster ink moved toward serialized FO, not only live comparison.',
    )
  }

  let promotable = 'no'
  let mechanism = 'lab-draw-nudge'
  if (
    canvas001 != null &&
    canvasBase != null &&
    Math.abs(canvas001) < 0.06 &&
    home001?.inkProbe === 'readable-canvas'
  ) {
    promotable = 'maybe'
    mechanism = 'full-parity-if-reproduced-without-frac-nudge'
  } else if (
    canvas001 != null &&
    canvasBase != null &&
    Math.abs(canvas001) < Math.abs(canvasBase) - 0.5
  ) {
    promotable = 'no'
    mechanism = 'partial-metric-from-gbcr-frac-drawImage'
  }

  return { promotable, mechanism, lines }
}

async function main() {
  const headless = process.env.HEADLESS === '1'
  if (headless) {
    console.warn('WARNING: HEADLESS=1 — FO ink metrics unreliable per project rules')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  const payload = {
    generatedAt: new Date().toISOString(),
    port,
    headless,
    fixture: 'mini',
    landmarks: LANDMARKS,
    recipes: RECIPES,
    detailedProbe: null,
    foFixLabCalibrate: null,
    verdict: null,
  }

  try {
    console.log('\n=== vdrift detailed probe (three-way + raster meta) ===')
    payload.detailedProbe = await runDetailedProbe(page, port)
    for (const row of payload.detailedProbe.rows) {
      console.log(`\n${row.recipeId}:`)
      console.log(
        `  raster gbcrFracY=${row.raster?.gbcrFracY?.toFixed(6)} draw dy=${row.raster?.drawDest?.dy?.toFixed(6)} backing ${row.raster?.actualBackingW}×${row.raster?.actualBackingH}`,
      )
      for (const lm of row.landmarks) {
        console.log(
          `  ${lm.landmark}: svgΔ=${lm.liveVsSvg?.toFixed(3) ?? '—'} canvasΔ=${lm.liveVsCanvas?.toFixed(3) ?? '—'} svg↔canvas=${lm.svgVsCanvas?.toFixed(3) ?? '—'} probe=${lm.inkProbe}`,
        )
      }
    }

    payload.verdict = buildVerdict(payload)
    await fs.promises.mkdir(path.dirname(OUT), { recursive: true })
    await fs.promises.writeFile(OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote partial ${OUT} (before fo-fix-lab calibrate)`)

    console.log('\n=== fo-fix-lab calibrate matrix (same ids) ===')
    try {
      payload.foFixLabCalibrate = await runFoFixLabCalibrate(page, port)
      for (const row of payload.foFixLabCalibrate) {
        console.log(`\n${row.recipeId} worst|canvas|=${row.worstAbsDeltaTop?.toFixed(3) ?? '—'}`)
        for (const lm of row.landmarks) {
          console.log(
            `  ${lm.landmark}: svgΔ=${lm.liveVsSvgTopPx?.toFixed(3) ?? '—'} canvasΔ=${lm.liveVsCanvasTopPx?.toFixed(3) ?? '—'}`,
          )
        }
      }
    } catch (calErr) {
      payload.foFixLabCalibrateError = String(calErr?.stack || calErr)
      console.warn('fo-fix-lab calibrate failed:', payload.foFixLabCalibrateError)
    }

    payload.verdict = buildVerdict(payload)
    console.log('\n--- verdict ---')
    for (const line of payload.verdict.lines) console.log(`  ${line}`)
    console.log(`  promotable: ${payload.verdict.promotable} (${payload.verdict.mechanism})`)

    await fs.promises.writeFile(OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${OUT}`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
