#!/usr/bin/env node
/**
 * Stage order e2e — measured Y order must match visual stack.
 *
 * When canvas shift=-3 and svg shift=-2 (baseline-like drift):
 *   visual: canvas highest · live · svg lowest
 *   measured: canvas Y < live Y < svg Y
 *
 * Cross-check svg-higher-2: scan reports svg Y = live Y − 2.
 *
 *   npm run debug:fo-stage-order-e2e
 *   SKIP_HEADED=1 npm run debug:fo-stage-order-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  ALIGNED_TOL,
  scanSyntheticRow,
} from './fo-ink-e2e-runner.mjs'

const ORDER_CASES = [
  {
    id: 'svg-higher-2',
    liveTop: 50,
    svgTop: 48,
    canvasTop: 50,
    expect: { svgHigherOnScreenPx: 2 },
  },
  {
    id: 'canvas-higher-3',
    liveTop: 50,
    svgTop: 50,
    canvasTop: 47,
    expect: { canvasHigherOnScreenPx: 3 },
  },
  {
    id: 'product-baseline-order',
    liveTop: 50,
    svgTop: 48,
    canvasTop: 47,
    expect: { canvasLowerThanLive: true, svgHigherThanLive: true, canvasHigherThanSvg: true },
  },
]

function runNodeSynthetic() {
  const errors = []
  for (const c of ORDER_CASES) {
    const live = scanSyntheticRow(c.liveTop)
    const svg = scanSyntheticRow(c.svgTop)
    const canvas = scanSyntheticRow(c.canvasTop)
    const svgHigher = live != null && svg != null ? live - svg : null
    const canvasHigherVsSvg = svg != null && canvas != null ? svg - canvas : null
    let pass = live != null && svg != null && canvas != null
    const exp = c.expect
    if (pass && Number.isFinite(exp.svgHigherOnScreenPx)) {
      pass = svgHigher != null && Math.abs(svgHigher - exp.svgHigherOnScreenPx) <= ALIGNED_TOL
    }
    if (pass && Number.isFinite(exp.canvasHigherOnScreenPx)) {
      pass =
        canvasHigherVsSvg != null &&
        Math.abs(canvasHigherVsSvg - exp.canvasHigherOnScreenPx) <= ALIGNED_TOL
    }
    if (pass && exp.canvasLowerThanLive) {
      pass = canvas < live
    }
    if (pass && exp.svgHigherThanLive) {
      pass = svg < live
    }
    if (pass && exp.canvasHigherThanSvg) {
      pass = canvas < svg
    }
    if (!pass) {
      errors.push(
        `${c.id}: live=${live} svg=${svg} canvas=${canvas} svgHigher=${svgHigher}`,
      )
    }
  }
  if (errors.length) throw new Error(errors.join('\n'))
  console.log(`[fo-stage-order-e2e] node synthetic OK (${ORDER_CASES.length} cases)`)
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-stage-order-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-stage-order-e2e.html`
  console.log(`[fo-stage-order-e2e] ${url}`)
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foStageOrderE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foStageOrderE2e?.bootError)
    if (bootErr) throw new Error(bootErr)
    const payload = await page.evaluate(() => window.__foStageOrderE2e.run())
    console.log(JSON.stringify(payload, null, 2))
    if (!payload.pass) {
      const fails = payload.matrix.filter((r) => !r.pass)
      throw new Error(fails.map((r) => `${r.id}: ${r.errors?.join('; ')}`).join('\n'))
    }
    console.log('[fo-stage-order-e2e] headed OK')
  } finally {
    await browser.close()
    server.close()
  }
}

async function main() {
  runNodeSynthetic()
  await runHeaded()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
