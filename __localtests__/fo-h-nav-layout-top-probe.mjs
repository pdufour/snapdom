#!/usr/bin/env node
/**
 * Layout-top gate — Blocks landmark, product-baseline, headed mini fixture.
 *
 *   npm run debug:fo-fix-lab -- --verify
 *   node __localtests__/fo-h-nav-layout-top-probe.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  checkViewportStageTopsAcceptance,
  computeLandmarkInkMetrics,
  formatViewportAcceptanceLine,
} from './fo-landmark-layout-metrics.mjs'
import { FO_FIX_LAB_LANDMARK } from './fo-fix-lab-fixture.mjs'

const ARTIFACT_DIR = path.join(process.cwd(), '__localtests__/artifacts')

async function main() {
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  const qs = new URLSearchParams({
    recipe: 'product-baseline',
    auto: '1',
    view: 'canvas',
    landmark: FO_FIX_LAB_LANDMARK,
    dpr: '1',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(
    () => window.__foFixLab?.done === true && window.__foFixLastResult?.recipeId,
    null,
    { timeout: 180_000 },
  )
  await page.evaluate(() => {
    const row = window.__foFixLastResult
    if (row && typeof window.__foFixLab?.refreshLayoutMarkers === 'function') {
      window.__foFixLab.refreshLayoutMarkers()
    }
  })
  await page.waitForTimeout(200)

  const row = await page.evaluate(() => window.__foFixLastResult)
  const m = computeLandmarkInkMetrics(row)
  const acceptance = checkViewportStageTopsAcceptance(m)

  await mkdir(ARTIFACT_DIR, { recursive: true })
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'fo-h-nav-layout-top-probe.png'),
    fullPage: true,
  })

  console.log(`Blocks layout-top (product-baseline, headed)\n`)
  console.log(`  ${formatViewportAcceptanceLine(m)}`)
  console.log(`  svgHigher=${m.svgHigher}  canvasHigher=${m.canvasHigher}`)

  if (!acceptance.pass) {
    console.log(`\nFAIL: ${acceptance.errors.join('; ')}`)
    await writeFile(
      path.join(ARTIFACT_DIR, 'fo-h-nav-layout-top-probe.json'),
      JSON.stringify({ row, metrics: m, acceptance }, null, 2),
    )
    await browser.close()
    await closeLocalServer(server)
    process.exit(1)
  }

  console.log('\nOK: svg and canvas higher than live')
  await writeFile(
    path.join(ARTIFACT_DIR, 'fo-h-nav-layout-top-probe.json'),
    JSON.stringify({ row, metrics: m, acceptance }, null, 2),
  )

  await browser.close()
  await closeLocalServer(server)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
