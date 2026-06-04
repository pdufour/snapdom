#!/usr/bin/env node
/**
 * Headed vision cross-check for FO fix lab (product-baseline, Blocks landmark).
 * Saves __localtests__/artifacts/vision-check-*.png — not a gate; run manually.
 *
 *   npm run compile && node __localtests__/fo-vision-check.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { computeLandmarkInkMetrics } from './fo-landmark-layout-metrics.mjs'
import { FO_FIX_LAB_LANDMARK } from './fo-fix-lab-fixture.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTIFACTS = path.join(__dirname, 'artifacts')
const RECIPE = 'product-baseline'
const LANDMARK = FO_FIX_LAB_LANDMARK
const VIEWS = ['live', 'svg', 'canvas']

async function waitForRecipeReady(page) {
  await page.waitForFunction(
    () =>
      window.__foFixLab?.done === true &&
      window.__foFixLastResult?.recipeId === 'product-baseline' &&
      window.__foFixLastResult?.blockAnchorCheckReference === 'capture-target-root',
    null,
    { timeout: 180_000 },
  )
  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(String(bootErr))
}

async function main() {
  fs.mkdirSync(ARTIFACTS, { recursive: true })
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 720 })

  const reloadUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${new URLSearchParams({
    recipe: RECIPE,
    auto: '1',
    view: 'live',
    dpr: '1',
    landmark: LANDMARK,
    includeInactive: '1',
  })}`

  const screenshots = {}
  try {
    await page.goto(reloadUrl, { waitUntil: 'load', timeout: 120_000 })
    await waitForRecipeReady(page)

    for (const view of VIEWS) {
      await page.evaluate((v) => {
        const input = document.querySelector(`input[name="view"][value="${v}"]`)
        if (input) {
          input.checked = true
          input.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, view)
      await page.waitForTimeout(view === 'canvas' ? 500 : 380)
      const shotPath = path.join(ARTIFACTS, `vision-check-${view}.png`)
      await page.locator('#compare-stage').screenshot({ path: shotPath })
      screenshots[view] = shotPath
    }

    const row = await page.evaluate(() => window.__foFixLastResult)
    const metricsText = await page.evaluate(() => document.getElementById('metrics')?.textContent?.trim() ?? '')
    const verdictText = await page.evaluate(() => document.getElementById('verdict')?.textContent?.trim() ?? '')
    const m = computeLandmarkInkMetrics(row)

    const report = {
      generatedAt: new Date().toISOString(),
      reloadUrl,
      recipe: RECIPE,
      landmark: LANDMARK,
      checker: m,
      uiMetrics: metricsText,
      uiVerdict: verdictText,
      screenshots,
      visionNote:
        'Inspect PNGs: compare block/nav vertical position vs live. Positive on-screen px = stage HIGHER than live.',
    }
    const reportPath = path.join(ARTIFACTS, 'vision-check-report.json')
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

    console.log('\n--- FO vision check (product-baseline, Blocks) ---\n')
    console.log(`Reload: ${reloadUrl}\n`)
    console.log('Checker (root px):')
    console.log(`  Live:   ${m.liveTop?.toFixed(3) ?? '—'}`)
    console.log(`  SVG:    ${m.svgTop?.toFixed(3) ?? '—'}  higher? ${m.svgHigher} (${m.svgHigherOnScreenPx?.toFixed(3) ?? '—'} px)`)
    console.log(
      `  Canvas: ${m.canvasTop?.toFixed(3) ?? '—'}  higher? ${m.canvasHigher} (${m.canvasHigherOnScreenPx?.toFixed(3) ?? '—'} px)`,
    )
    console.log(`  UI aligned: ${m.uiAligned}`)
    console.log(`\nUI verdict: ${verdictText || '—'}`)
    console.log('\nArtifacts:')
    for (const [view, p] of Object.entries(screenshots)) console.log(`  ${view}: ${p}`)
    console.log(`  report: ${reportPath}\n`)
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
