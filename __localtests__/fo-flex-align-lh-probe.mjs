#!/usr/bin/env node
/**
 * Flex align-items sweep: stretch vs flex-start vs baseline (leaf lh 1.35).
 *
 *   npm run compile && node __localtests__/fo-flex-align-lh-probe.mjs
 *   node __localtests__/fo-flex-align-lh-probe.mjs --json .sandbox-edit/flex-align-lh-probe.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 9937
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'flex-align-lh-probe.json')
const ALIGN_VARIANTS = ['stretch', 'flex-start', 'baseline']

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function probeVariant(page, port, align, dpr) {
  const qs = new URLSearchParams({ align, dpr: String(dpr), scale: '1', landmark: 'Home' })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-flex-align-lh-probe.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__flexAlignLhProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__flexAlignLhProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed (align=${align}): ${bootErr}`)
  return page.evaluate(async () => window.__flexAlignLhProbe.run())
}

async function main() {
  if (!process.env.SNAPDOM_LOCAL_PORT) process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })

  try {
    const rows = []
    for (const align of ALIGN_VARIANTS) {
      rows.push(await probeVariant(page, port, align, dprArg))
    }
    const canvasDeltas = rows.map((r) => r.canvasDeltaPx).filter((v) => v != null)
    const spread =
      canvasDeltas.length >= 2 ? Math.max(...canvasDeltas) - Math.min(...canvasDeltas) : null

    const payload = {
      fixture: 'fo-flex-align-lh-probe',
      purpose: 'Canvas drift vs flex align-items (leaf lh 1.35)',
      alignVariants: ALIGN_VARIANTS,
      recipe: { id: 'product-baseline', rasterPatch: 'product-toCanvas' },
      dpr: dprArg,
      headed: process.env.HEADLESS !== '1',
      generatedAt: new Date().toISOString(),
      rows,
      summary: {
        canvasDeltaSpreadPx: roundPx(spread),
        verdict:
          spread != null && spread < 0.05
            ? 'canvas drift independent of align-items (tracks strut/lh not flex cross-axis)'
            : 'align-items changes canvas drift — cross-axis layout affects FO bitmap paint',
      },
    }

    const outPath = jsonOutArg ? path.resolve(REPO_ROOT, jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)

    console.log('\n--- flex align-items vs canvas drift (lh 1.35) ---\n')
    for (const row of rows) {
      const t = row.threeWay
      console.log(
        `${row.alignVariant.padEnd(12)} leafH=${row.metrics.leafHeightGbcr} ½lh=${row.metrics.halfLeadingLhFsPx}  canvasΔ=${t.liveVsCanvasTopPx?.toFixed(3)}  svgΔ=${t.liveVsSvgTopPx?.toFixed(3)}`,
      )
    }
    console.log(`\nWrote ${outPath}\n  ${payload.summary.verdict}\n`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
