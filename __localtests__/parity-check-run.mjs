#!/usr/bin/env node
/**
 * Mini Home+Products parity check (headed). Writes __localtests__/.sandbox-edit/parity-check-latest.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '.sandbox-edit', 'parity-check-latest.json')
const GATE_CANVAS = 0.06
const GATE_SVG = 0.15
const LANDMARKS = ['Home', 'Products']
const RECIPE_IDS = [
  'product-baseline',
  'tc-blh-w1-vertical-align-baseline',
  'tc-text-w1-rfork-lh-normal-leaf',
]

function gatePass(liveVsCanvasTopPx, liveVsSvgTopPx) {
  const c = liveVsCanvasTopPx == null ? Infinity : Math.abs(liveVsCanvasTopPx)
  const s = liveVsSvgTopPx == null ? Infinity : Math.abs(liveVsSvgTopPx)
  return c <= GATE_CANVAS && s <= GATE_SVG
}

async function waitLabBoot(page) {
  await page.goto(
    `http://127.0.0.1:${page.__port}/__localtests__/fo-fix-lab.html`,
    { waitUntil: 'load', timeout: 120_000 },
  )
  await page.waitForFunction(
    () =>
      typeof window.snapdom === 'function' &&
      window.__foFixLab?.done !== false &&
      Array.isArray(window.FO_FIX_RECIPES) &&
      window.FO_FIX_RECIPES.length > 100,
    null,
    { timeout: 120_000 },
  ).catch(async () => {
    await page.waitForFunction(
      () => typeof window.snapdom === 'function',
      null,
      { timeout: 120_000 },
    )
  })
}

async function probeRecipe(page, recipeId) {
  return page.evaluate(
    async ({ recipeId, landmarks }) => {
      const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
      const { runFoFixProbeLandmarks } = await import('./fo-fix-lab-runner.js')
      const recipe = getFoFixRecipe(recipeId)
      if (!recipe) throw new Error(`recipe missing: ${recipeId}`)
      const row = await runFoFixProbeLandmarks(recipe, { landmarks, dpr: 1, scale: 1 })
      return {
        recipeId,
        landmarks: row.landmarks.map((lm) => ({
          landmark: lm.landmark,
          liveVsSvgTopPx: lm.liveVsSvgTopPx ?? lm.deltaSvgInBorder ?? null,
          liveVsCanvasTopPx: lm.liveVsCanvasTopPx ?? lm.deltaTopInBorder ?? null,
          passInk: lm.pass ?? null,
        })),
      }
    },
    { recipeId, landmarks: LANDMARKS },
  )
}

async function probeExperimentalAllOn(page) {
  return page.evaluate(
    async ({ landmarks }) => {
      const { runFoFixProbeLandmarks } = await import('./fo-fix-lab-runner.js')
      const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
      const base = getFoFixRecipe('product-baseline')
      if (!base) throw new Error('product-baseline missing')
      const harnessSnapdom = {
        experimentalFoTextLayout: true,
        experimentalFoLeadingTrim: true,
        experimentalFoTextBoxEdgeAuto: true,
        experimentalFoPinLineHeightFromLive: true,
        experimentalFoTextLeafNormalize: true,
        experimentalFoFlexRowAlignCenter: true,
        experimentalFoChromiumText: true,
        experimentalFoFlexRowCenter: true,
        experimentalCaptureIntViewBox: true,
        experimentalFoTextGeometric: true,
        experimentalFoTextBaselineFix: true,
        experimentalFoTextLineHeightNormal: true,
        experimentalRasterDecodeSettle: true,
        experimentalRasterBackingCeil: true,
        experimentalRasterDoubleDecode: true,
        experimentalRasterCtxNoScale: true,
        experimentalRasterPreDecodeRaf: true,
        experimentalRasterNaturalDims: true,
        experimentalRasterDisableGbcrNudge: true,
        experimentalCaptureInkMeta: true,
        experimentalRasterInkAlign: true,
      }
      const recipe = { ...base, id: 'experimental-all-on', harnessSnapdom }
      const row = await runFoFixProbeLandmarks(recipe, { landmarks, dpr: 1, scale: 1 })
      return {
        recipeId: 'experimental-all-on',
        harnessSnapdom,
        landmarks: row.landmarks.map((lm) => ({
          landmark: lm.landmark,
          liveVsSvgTopPx: lm.liveVsSvgTopPx ?? lm.deltaSvgInBorder ?? null,
          liveVsCanvasTopPx: lm.liveVsCanvasTopPx ?? lm.deltaTopInBorder ?? null,
        })),
      }
    },
    { landmarks: LANDMARKS },
  )
}

function enrichProbe(probe) {
  for (const lm of probe.landmarks) {
    lm.gatePass = gatePass(lm.liveVsCanvasTopPx, lm.liveVsSvgTopPx)
  }
  probe.gatePass = probe.landmarks.every((lm) => lm.gatePass)
  return probe
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.__port = port
  await page.setViewportSize({ width: 900, height: 700 })

  const payload = {
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    port,
    fixture: 'mini',
    landmarks: LANDMARKS,
    dpr: 1,
    scale: 1,
    gate: { canvasAbsMax: GATE_CANVAS, svgAbsMax: GATE_SVG },
    probes: {},
  }

  try {
    await waitLabBoot(page)
    for (const id of RECIPE_IDS) {
      console.log(`Probe mini: ${id}`)
      payload.probes[id] = enrichProbe(await probeRecipe(page, id))
    }
    console.log('Probe mini: experimental-all-on')
    payload.probes['experimental-all-on'] = enrichProbe(await probeExperimentalAllOn(page))

    const baseline = payload.probes['product-baseline']
    payload.productBaseline = baseline
    payload.verdict =
      baseline?.gatePass === true ? 'FIXED' : 'NOT_FIXED'
    payload.summary = {
      productBaselineGatePass: baseline?.gatePass ?? false,
      home: baseline?.landmarks?.find((l) => l.landmark === 'Home') ?? null,
      products: baseline?.landmarks?.find((l) => l.landmark === 'Products') ?? null,
    }

    await fs.promises.mkdir(path.dirname(OUT), { recursive: true })
    await fs.promises.writeFile(OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${OUT}`)
    console.log(`Verdict: ${payload.verdict}`)
    for (const lm of baseline?.landmarks ?? []) {
      console.log(
        `  ${lm.landmark}: svg=${lm.liveVsSvgTopPx?.toFixed(3)} canvas=${lm.liveVsCanvasTopPx?.toFixed(3)} gate=${lm.gatePass ? 'PASS' : 'FAIL'}`,
      )
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
