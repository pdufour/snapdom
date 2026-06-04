#!/usr/bin/env node
/**
 * Headed proof that block-anchor check matches visible ████ offset on product-baseline.
 *
 *   npm run debug:fo-block-anchor-check
 *   node __localtests__/fo-block-anchor-check-probe.mjs --json __localtests__/artifacts/fo-block-anchor-check.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  checkViewportStageTopsAcceptance,
  computeLandmarkInkMetrics,
  UI_ALIGNED_THRESHOLD_PX,
} from './fo-landmark-layout-metrics.mjs'
import { FO_FIX_LAB_LANDMARK } from './fo-fix-lab-fixture.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const ARTIFACT_DIR = path.join(REPO_ROOT, '__localtests__/artifacts')
const BASELINE = 'product-baseline'
const LANDMARK = FO_FIX_LAB_LANDMARK

const jsonOut = process.argv.includes('--json')
  ? process.argv[process.argv.indexOf('--json') + 1]
  : path.join(ARTIFACT_DIR, 'fo-block-anchor-check.json')

async function main() {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true })
  const { server, port } = await startLocalServer(REPO_ROOT)
  const base = `http://127.0.0.1:${port}`
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 900, height: 420 })
  try {
    const qs = new URLSearchParams({
      recipe: BASELINE,
      auto: '1',
      landmark: LANDMARK,
      dpr: '1',
    })
    await page.goto(`${base}/__localtests__/fo-fix-lab.html?${qs}`, {
      waitUntil: 'load',
      timeout: 120_000,
    })
    await page.waitForFunction(
      () => window.__foFixLab?.done === true && window.__foFixLastResult?.recipeId,
      null,
      { timeout: 180_000 },
    )

    const shotLive = path.join(ARTIFACT_DIR, 'fo-block-anchor-check-live.png')
    const shotSvg = path.join(ARTIFACT_DIR, 'fo-block-anchor-check-svg.png')
    const shotCanvas = path.join(ARTIFACT_DIR, 'fo-block-anchor-check-canvas.png')

    await page.locator('input[value="live"]').click()
    await page.waitForTimeout(200)
    await page.screenshot({ path: shotLive })

    await page.locator('input[value="svg"]').click()
    await page.waitForTimeout(400)
    await page.screenshot({ path: shotSvg })

    await page.locator('input[value="canvas"]').click()
    await page.waitForTimeout(200)
    await page.screenshot({ path: shotCanvas })

    await page.evaluate(() => {
      const row = window.__foFixLastResult
      if (row && typeof window.__foFixLab?.refreshInkMarkers === 'function') {
        window.__foFixLab.refreshInkMarkers()
      }
    })
    await page.waitForTimeout(200)

    const payload = await page.evaluate(() => {
      const row = window.__foFixLastResult ?? {}
      return {
        ...row,
        metricsText: document.getElementById('metrics')?.textContent ?? '',
        verdictText: document.getElementById('verdict')?.textContent ?? '',
      }
    })

    const m = computeLandmarkInkMetrics(payload)
    const acceptance = checkViewportStageTopsAcceptance(m)
    const errors = []
    if (!payload.recipeId) errors.push('missing probe row')
    const anchorRef = payload.blockAnchorCheckReference
    if (anchorRef !== 'viewport-block-anchor' && anchorRef !== 'capture-target-root') {
      errors.push(`blockAnchorCheckReference=${anchorRef ?? '—'}`)
    }
    if (
      m.uiAligned &&
      (Math.abs(m.svgHigherOnScreenPx ?? 0) >= UI_ALIGNED_THRESHOLD_PX ||
        Math.abs(m.canvasHigherOnScreenPx ?? 0) >= UI_ALIGNED_THRESHOLD_PX)
    ) {
      errors.push(
        `false aligned: svgHigher=${m.svgHigherOnScreenPx} canvasHigher=${m.canvasHigherOnScreenPx}`,
      )
    }
    if (!acceptance.pass) errors.push(...acceptance.errors)
    const verdict = payload.verdictText ?? ''
    if (!/higher|lower|matches live/i.test(verdict)) {
      errors.push(`verdict missing stage phrase: "${verdict}"`)
    }

    const report = {
      pass: errors.length === 0,
      thresholdPx: UI_ALIGNED_THRESHOLD_PX,
      acceptance,
      metrics: m,
      row: payload,
      screenshots: { live: shotLive, svg: shotSvg, canvas: shotCanvas },
      errors,
    }
    fs.writeFileSync(jsonOut, `${JSON.stringify(report, null, 2)}\n`)
    console.log(JSON.stringify(report, null, 2))
    if (!report.pass) process.exit(1)
  } finally {
    await browser.close().catch(() => {})
    await closeLocalServer(server)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
