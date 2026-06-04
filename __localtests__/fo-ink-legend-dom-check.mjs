#!/usr/bin/env node
/**
 * DOM legend verification — reads what the user actually sees in fo-fix-lab UI.
 *
 *   node __localtests__/fo-ink-legend-dom-check.mjs
 *
 * Headed Chrome only. Fails if svg/canvas legends lack "above live" when ink is above live.
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const BASELINE_RECIPE = 'product-baseline'
const ABOVE_LIVE_MIN = 0.5

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function readDomLegend(page) {
  return page.evaluate(() => {
    const slot = document.getElementById('ink-marker-legend-slot')
    const summary = slot?.querySelector('.ink-legend-summary')
    const markers = window.__foFixLab?.inkMarkers
    return {
      view: window.__foFixLab?.view,
      slotHidden: slot?.hidden ?? true,
      summaryText: summary?.textContent?.trim() ?? '',
      payloadLegend: markers?.legendSummary ?? '',
      markers,
      livePreviewViewportTopPx: window.__foFixLab?.livePreviewViewportTopPx,
      svgPreviewViewportTopPx: window.__foFixLab?.svgPreviewViewportTopPx,
      canvasPreviewViewportTopPx: window.__foFixLab?.canvasPreviewViewportTopPx,
    }
  })
}

async function switchView(page, view) {
  await page.evaluate((v) => {
    const input = document.querySelector(`input[name="view"][value="${v}"]`)
    if (input) {
      input.checked = true
      input.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, view)
  await page.waitForTimeout(300)
}

async function main() {
  const { server, port } = await startLocalServer()
  const base = `http://127.0.0.1:${port}`
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  /** @type {string[]} */
  const errors = []
  /** @type {Record<string, unknown>[]} */
  const rows = []

  try {
    const qs = new URLSearchParams({
      recipe: BASELINE_RECIPE,
      auto: '1',
      view: 'live',
      dpr: '1',
      landmark: 'Home',
      includeInactive: '1',
    })
    await page.goto(`${base}/__localtests__/fo-fix-lab.html?${qs}`, {
      waitUntil: 'load',
      timeout: 120_000,
    })
    await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
      timeout: 180_000,
    })

    for (const view of ['live', 'svg', 'canvas']) {
      await switchView(page, view)
      const dom = await readDomLegend(page)
      const userLegend = dom.summaryText
      const payloadLegend = dom.payloadLegend
      const markers = dom.markers

      const liveV = dom.livePreviewViewportTopPx ?? markers?.livePreviewViewportTopPx
      let stageV = null
      if (view === 'svg') {
        stageV = dom.svgPreviewViewportTopPx ?? markers?.svgPreviewBitmapViewportTopPx
      } else if (view === 'canvas') {
        stageV = dom.canvasPreviewViewportTopPx ?? markers?.canvasPreviewBitmapViewportTopPx
      }

      const abovePx =
        view !== 'live' && Number.isFinite(liveV) && Number.isFinite(stageV)
          ? liveV - stageV
          : null

      rows.push({
        view,
        userLegend,
        payloadLegend,
        abovePx: roundPx(abovePx),
        liveV: roundPx(liveV),
        stageV: roundPx(stageV),
      })

      if (dom.slotHidden) errors.push(`${view}: ink-marker-legend-slot is hidden`)
      if (!userLegend) errors.push(`${view}: no legend text in DOM`)
      if (userLegend !== payloadLegend) {
        errors.push(`${view}: DOM legend ≠ payload.legendSummary`)
      }
      if (view === 'svg' || view === 'canvas') {
        if (abovePx != null && abovePx > ABOVE_LIVE_MIN && !/above live/i.test(userLegend)) {
          errors.push(`${view}: ink ${roundPx(abovePx)}px above live but legend lacks "above live"`)
        }
      }
    }
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }

  console.log('\n--- FO ink legend DOM check (headed) ---\n')
  for (const row of rows) {
    console.log(`[${row.view}] "${row.userLegend}" liveV=${row.liveV} stageV=${row.stageV}`)
  }
  for (const err of errors) console.log(`FAIL: ${err}`)
  const pass = errors.length === 0
  console.log(`\nOverall: ${pass ? 'PASS' : 'FAIL'}\n`)
  process.exit(pass ? 0 : 1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
