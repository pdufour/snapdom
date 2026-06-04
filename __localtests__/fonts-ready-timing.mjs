#!/usr/bin/env node
/**
 * Capture before/after document.fonts.ready × decode wait (0/100/500ms) + brain fonts-ready recipes.
 * Headed Chrome only. Writes __localtests__/.sandbox-edit/fonts-ready-timing.json
 *
 *   node __localtests__/fonts-ready-timing.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '.sandbox-edit', 'fonts-ready-timing.json')

function buildConclusion(payload) {
  const grid = payload.rows.filter((r) => r.kind === 'captureTimingGrid' && !r.error)
  const recipes = payload.rows.filter((r) => r.kind === 'recipe' && !r.error && !r.missing)
  const base = grid.find((r) => !r.captureAfterFontsReady && r.decodeWaitMs === 0)
  const baseCanvas = base?.liveVsCanvasTopPx
  /** @type {string[]} */
  const lines = []
  if (baseCanvas != null) {
    const captureChanges = grid.filter(
      (r) =>
        r.decodeWaitMs === 0 &&
        r.liveVsCanvasTopPx != null &&
        Math.abs(r.liveVsCanvasTopPx - baseCanvas) > 0.001,
    )
    if (captureChanges.length) {
      lines.push('Capture before vs after fonts.ready changes canvasΔ at decodeWait=0.')
    } else {
      lines.push('Capture before vs after fonts.ready does NOT change canvasΔ at decodeWait=0 (within 0.001px).')
    }
    const waitChanges = grid.filter(
      (r) =>
        r.captureAfterFontsReady === base.captureAfterFontsReady &&
        r.decodeWaitMs !== 0 &&
        r.liveVsCanvasTopPx != null &&
        Math.abs(r.liveVsCanvasTopPx - baseCanvas) > 0.001,
    )
    if (waitChanges.length) {
      lines.push('Pre-decode lab-wait (100/500ms) changes canvasΔ vs 0ms wait on mini Home.')
    } else {
      lines.push('Pre-decode lab-wait 100/500ms does NOT change canvasΔ vs 0ms (within 0.001px).')
    }
  }
  const recipeDeltas = recipes.map((r) => ({
    id: r.recipeId,
    d: r.liveVsCanvasTopPx,
    diff: baseCanvas != null && r.liveVsCanvasTopPx != null ? r.liveVsCanvasTopPx - baseCanvas : null,
  }))
  const recipeMoves = recipeDeltas.filter((x) => x.diff != null && Math.abs(x.diff) > 0.001)
  if (recipeMoves.length) {
    lines.push(`Brain/fonts recipes with canvasΔ ≠ baseline: ${recipeMoves.map((x) => x.id).join(', ')}`)
  } else if (recipes.length) {
    lines.push('All requested brain/fonts-ready recipes match product-baseline canvasΔ within 0.001px.')
  }
  if (payload.v3WaitFonts500ms && !payload.v3WaitFonts500ms.found) {
    lines.push('v3-wait-fonts-500ms recipe id not in active corpus (skipped).')
  }
  return lines.join(' ')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('WARNING: HEADLESS=1 — FO ink metrics unreliable per project rules')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const url = `http://127.0.0.1:${port}/__localtests__/fonts-ready-timing.html?auto=1`
  console.log('Opening', url)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__fontsReadyTiming?.done === true, null, {
      timeout: 300_000,
    })
    const err = await page.evaluate(() => window.__fontsReadyTiming?.error)
    if (err) throw new Error(err)
    const payload = await page.evaluate(() => window.__fontsReadyTiming.payload)
    payload.conclusion = buildConclusion(payload)
    await fs.promises.mkdir(path.dirname(OUT), { recursive: true })
    await fs.promises.writeFile(OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log('Wrote', OUT)
    console.log('conclusion:', payload.conclusion)
    for (const r of payload.rows) {
      const id = r.recipeId || `${r.captureAfterFontsReady ? 'after' : 'before'}/${r.decodeWaitMs}ms`
      if (r.error) console.log(id, 'ERROR', r.error)
      else if (r.missing) console.log(id, 'MISSING')
      else
        console.log(
          String(id).padEnd(42),
          'canvasΔ',
          (r.liveVsCanvasTopPx?.toFixed?.(3) ?? '—').padStart(8),
          'svgΔ',
          (r.liveVsSvgTopPx?.toFixed?.(3) ?? '—').padStart(8),
        )
    }
  } finally {
    await browser.close().catch(() => {})
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
