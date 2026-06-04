#!/usr/bin/env node
/**
 * vdrift-fix three-way + GBCR fractional sweep (headed Chrome only).
 *
 * 1. product-baseline vs vdrift-fix-001/002: drawImage dy, meta.gbcrFracY,
 *    svgVsCanvas, liveVsCanvas for mini Home+Products.
 * 2. GBCR sweep: translate capture root 0–0.875px (0.125 steps), product-baseline canvasΔ.
 *
 *   SNAPDOM_LOCAL_PORT=9918 node __localtests__/vdrift-gbcr-sweep.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '.sandbox-edit', 'vdrift-gbcr-sweep.json')
const DEFAULT_PORT = 9918
const RECIPES = [
  'product-baseline',
  'vdrift-fix-001-ceil-nudge',
  'vdrift-fix-002-round-nudge',
]
const LANDMARKS = ['Home', 'Products']

/** @param {Record<string, unknown>} payload */
function buildSummary(payload) {
  /** @type {string[]} */
  const lines = []
  const baseline = payload.threeWay?.rows?.find((r) => r.recipeId === 'product-baseline')
  const v001 = payload.threeWay?.rows?.find((r) => r.recipeId === 'vdrift-fix-001-ceil-nudge')
  const v002 = payload.threeWay?.rows?.find((r) => r.recipeId === 'vdrift-fix-002-round-nudge')

  for (const row of [baseline, v001, v002].filter(Boolean)) {
    const dy = row.raster?.drawImageDy ?? row.raster?.drawDest?.dy
    const fracY = row.captureMeta?.gbcrFracY ?? row.raster?.gbcrFracY
    lines.push(
      `${row.recipeId}: gbcrFracY=${fracY?.toFixed(6) ?? '—'} drawImage dy=${dy?.toFixed(6) ?? '—'}`,
    )
    for (const lm of row.landmarks ?? []) {
      lines.push(
        `  ${lm.landmark}: svgVsCanvas=${lm.svgVsCanvas?.toFixed(3) ?? '—'} liveVsCanvas=${lm.liveVsCanvas?.toFixed(3) ?? '—'}`,
      )
    }
  }

  const sweepRows = payload.gbcrSweep?.rows ?? []
  if (sweepRows.length) {
    lines.push('\nGBCR sweep (product-baseline canvasΔ vs translateY):')
    for (const row of sweepRows) {
      const parts = (row.landmarks ?? []).map(
        (lm) =>
          `${lm.landmark}=${lm.liveVsCanvas?.toFixed(3) ?? '—'} (svg↔c=${lm.svgVsCanvas?.toFixed(3) ?? '—'})`,
      )
      lines.push(
        `  translateY=${row.rootTranslateY?.toFixed(3)} gbcrFracY=${row.captureMeta?.gbcrFracY?.toFixed(6) ?? '—'} ${parts.join(' ')}`,
      )
    }

    const homeSweep = sweepRows.map((row) => ({
      translateY: row.rootTranslateY,
      gbcrFracY: row.captureMeta?.gbcrFracY,
      canvasDelta: row.landmarks?.find((l) => l.landmark === 'Home')?.liveVsCanvas ?? null,
    }))
    const bestHome = homeSweep.reduce(
      (best, cur) =>
        cur.canvasDelta != null &&
        (best == null || Math.abs(cur.canvasDelta) < Math.abs(best.canvasDelta))
          ? cur
          : best,
      /** @type {null | { translateY: number, gbcrFracY: number, canvasDelta: number }} */ (null),
    )
    if (bestHome) {
      lines.push(
        `\nSweep min |Home canvasΔ|: translateY=${bestHome.translateY} → ${bestHome.canvasDelta?.toFixed(3)}px (gbcrFracY=${bestHome.gbcrFracY?.toFixed(6)})`,
      )
    }
  }

  const homeBase = baseline?.landmarks?.find((l) => l.landmark === 'Home')
  const home001 = v001?.landmarks?.find((l) => l.landmark === 'Home')
  const dy001 = v001?.raster?.drawImageDy ?? v001?.raster?.drawDest?.dy
  const fracY = v001?.captureMeta?.gbcrFracY

  let mechanism = 'INCONCLUSIVE'
  if (
    dy001 != null &&
    homeBase?.liveVsSvg != null &&
    Math.abs(homeBase.liveVsSvg) < 0.35 &&
    home001?.svgVsCanvas != null &&
    homeBase?.svgVsCanvas != null &&
    Math.abs(home001.svgVsCanvas - homeBase.svgVsCanvas) < 0.15
  ) {
    mechanism = 'DRAW_NUDGE_ONLY'
  }

  return { mechanism, gbcrFracY: fracY, vDriftDrawDy: dy001, lines }
}

async function runProbe(page, port) {
  const qs = new URLSearchParams({
    recipes: RECIPES.join(','),
    landmarks: LANDMARKS.join(','),
    sweepStep: '0.125',
    sweepMax: '0.875',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/vdrift-gbcr-sweep.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__vdriftGbcrSweep?.done === true, null, {
    timeout: 300_000,
  })
  const err = await page.evaluate(() => window.__vdriftGbcrSweep?.error)
  if (err) throw new Error(err)
  return page.evaluate(() => window.__vdriftGbcrSweep.payload)
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
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const payload = {
    generatedAt: new Date().toISOString(),
    port,
    headless,
    fixture: 'mini',
    landmarks: LANDMARKS,
    recipes: RECIPES,
    threeWay: null,
    gbcrSweep: null,
    summary: null,
  }

  try {
    console.log('\n=== vdrift GBCR sweep (headed) ===')
    const result = await runProbe(page, port)
    payload.threeWay = result.threeWay
    payload.gbcrSweep = result.gbcrSweep
    payload.dpr = result.dpr
    payload.scale = result.scale
    payload.summary = buildSummary(payload)

    console.log('\n--- three-way (Home + Products) ---')
    for (const row of payload.threeWay.rows) {
      const dy = row.raster?.drawImageDy ?? row.raster?.drawDest?.dy
      const fracY = row.captureMeta?.gbcrFracY
      console.log(`\n${row.recipeId}:`)
      console.log(
        `  meta.gbcrFracY=${fracY?.toFixed(6) ?? '—'} drawImage dy=${dy?.toFixed(6) ?? '—'} backing ${row.raster?.actualBackingW}×${row.raster?.actualBackingH}`,
      )
      for (const lm of row.landmarks) {
        console.log(
          `  ${lm.landmark}: svgVsCanvas=${lm.svgVsCanvas?.toFixed(3) ?? '—'} liveVsCanvas=${lm.liveVsCanvas?.toFixed(3) ?? '—'} liveVsSvg=${lm.liveVsSvg?.toFixed(3) ?? '—'}`,
        )
      }
    }

    console.log('\n--- GBCR sweep (product-baseline) ---')
    for (const row of payload.gbcrSweep.rows) {
      const parts = row.landmarks
        .map(
          (lm) =>
            `${lm.landmark} canvasΔ=${lm.liveVsCanvas?.toFixed(3) ?? '—'} svg↔c=${lm.svgVsCanvas?.toFixed(3) ?? '—'}`,
        )
        .join('  ')
      console.log(
        `translateY=${row.rootTranslateY.toFixed(3)} gbcrFracY=${row.captureMeta.gbcrFracY.toFixed(6)}  ${parts}`,
      )
    }

    console.log('\n--- summary ---')
    for (const line of payload.summary.lines) console.log(line)
    console.log(`mechanism: ${payload.summary.mechanism}`)

    await fs.promises.mkdir(path.dirname(OUT), { recursive: true })
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
