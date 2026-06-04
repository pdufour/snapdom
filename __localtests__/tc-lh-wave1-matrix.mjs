#!/usr/bin/env node
/**
 * Headed matrix: tc-blh-w1-* + tc-text-w1-* + product-baseline @ dpr=1 Home.
 * Writes .sandbox-edit/tc-lh-wave1-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-lh-wave1-matrix.json')

async function loadRecipeIds() {
  const blh = await import('./fo-recipes-shards/recipes-tocanvas-text-baseline-wave1.js')
  const text = await import('./fo-recipes-shards/recipes-tocanvas-text-leaf-wave1.js')
  const textShard = text.default || text.FO_FIX_RECIPES_SHARD || []
  const textIds = textShard.map((r) => r.id)
  return ['product-baseline', ...blh.TC_BLH_W1_RECIPE_IDS, ...textIds]
}

async function main() {
  const ids = await loadRecipeIds()
  if (!process.env.SNAPDOM_LOCAL_PORT) process.env.SNAPDOM_LOCAL_PORT = '9939'
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  await page.goto(`http://127.0.0.1:${port}/__localtests__/tc-lh-wave1-probe.html`, {
    waitUntil: 'load',
    timeout: 120_000,
  })
  await page.waitForFunction(() => window.__tcLhWave1Probe?.ready === true, null, {
    timeout: 60_000,
  })

  const rows = []
  try {
    for (const recipeId of ids) {
      const row = await page.evaluate(
        async ({ recipeId }) => window.__tcLhWave1Probe.probe(recipeId),
        { recipeId },
      )
      const abs =
        row.liveVsCanvasTopPx == null ? null : Math.abs(row.liveVsCanvasTopPx)
      rows.push({ ...row, absCanvasDeltaPx: abs })
      console.log(
        `${recipeId}: canvasΔ=${row.liveVsCanvasTopPx?.toFixed(3) ?? row.error ?? '—'} svgΔ=${row.liveVsSvgTopPx?.toFixed(3) ?? '—'}`,
      )
    }

    const baseline = rows.find((r) => r.recipeId === 'product-baseline')
    const ranked = rows
      .filter((r) => r.absCanvasDeltaPx != null && !r.error)
      .sort((a, b) => a.absCanvasDeltaPx - b.absCanvasDeltaPx)
    const best = ranked[0]

    const payload = {
      generatedAt: new Date().toISOString(),
      landmark: 'Home',
      dpr: 1,
      referencePlateauAbsCanvasDeltaPx: 2.797,
      rows,
      summary: {
        baselineAbsCanvasDeltaPx: baseline?.absCanvasDeltaPx ?? null,
        bestRecipeId: best?.recipeId ?? null,
        bestAbsCanvasDeltaPx: best?.absCanvasDeltaPx ?? null,
        beatsBaseline:
          best &&
          baseline &&
          best.absCanvasDeltaPx < baseline.absCanvasDeltaPx - 0.001,
        promotable: false,
      },
    }
    await fs.promises.writeFile(OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${OUT} (${rows.length} recipes)`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
