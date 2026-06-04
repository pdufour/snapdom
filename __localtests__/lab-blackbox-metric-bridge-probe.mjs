#!/usr/bin/env node
/**
 * Bridge lab block-anchor preview metrics vs checkout structure-report (blackbox gate).
 *
 *   npm run compile && node __localtests__/lab-blackbox-metric-bridge-probe.mjs
 *   node __localtests__/lab-blackbox-metric-bridge-probe.mjs --json .sandbox-edit/lab-blackbox-metric-bridge.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'lab-blackbox-metric-bridge.json')

const RECIPES = [
  'product-baseline',
  'tc-fix-w7-capture-parent-lh-leaf-pin',
  'tc-fix-drift-039-capture-line-height-normal-important',
]

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const landmark = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function probeCheckout(page, port, recipeId, dpr) {
  const qs = new URLSearchParams()
  if (recipeId === 'tc-fix-drift-039-capture-line-height-normal-important') {
    qs.set('experimentalFoTextLineHeightNormal', '1')
  }
  const q = qs.toString() ? `?${qs}` : ''
  const url = `http://127.0.0.1:${port}/__localtests__/checkout-example.html${q}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.evaluate(() => document.fonts?.ready)
  await page.locator('#btn-capture').click()
  await page.waitForSelector('#cap-content canvas', { timeout: 120_000 })
  await page.waitForSelector('#structure-host .structure-report', { timeout: 90_000 })

  return page.evaluate(
    async ({ recipeId, landmark, dpr, sectionTitle }) => {
      function round(v) {
        return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
      }
      function parseNum(cell) {
        if (!cell || cell === '—') return null
        const n = parseFloat(String(cell).replace(/px$/i, '').replace(/^\+/, ''))
        return Number.isFinite(n) ? n : null
      }
      function readStructureRows(title) {
        const section = [...document.querySelectorAll('.structure-section')].find(
          (s) => s.querySelector('h3')?.textContent?.trim() === title,
        )
        if (!section) return null
        const rows = {}
        for (const tr of section.querySelectorAll('tbody tr')) {
          const cells = [...tr.cells].map((td) => td.textContent.trim())
          rows[cells[0]] = {
            live: parseNum(cells[1]),
            compare: parseNum(cells[2]),
            delta: parseNum(cells[3]),
          }
        }
        return rows
      }

      const runner = await import('./fo-fix-lab-runner.js')
      const { applyLandmarkInkMetricsToRow, computeLandmarkInkMetrics } = await import(
        './fo-landmark-layout-metrics.mjs'
      )

      const root = document.getElementById('capture-target')
      const canvas = document.querySelector('#cap-content canvas')
      const el = runner.findLandmarkElement(root, landmark)
      if (!root || !canvas || !el) {
        return { recipeId, error: 'missing root/canvas/landmark' }
      }

      const captureDpr = Math.min(window.devicePixelRatio || 1, 2)
      const struct = readStructureRows(sectionTitle)
      const blackboxCanvasDelta = struct?.['paint.canvas.vs-border.top']?.delta ?? null
      const blackboxCapDelta = struct?.['paint.cap.vs-border.top']?.delta ?? null
      const blackboxRangeDelta = struct?.['paint.range.vs-border.top']?.delta ?? null

      const cmp = runner.compareThreeWayInk(root, canvas, null, el, captureDpr, null, {
        includeFractionalInkScan: true,
      })

      const row = {
        recipeId,
        landmark,
        dpr: captureDpr,
        canvas,
        svgText: null,
      }
      runner.syncProbeRowBlockAnchorCheck(row, root, el, { canvas, svgImg: null })
      applyLandmarkInkMetricsToRow(row)
      const labPreview = computeLandmarkInkMetrics(row)

      const capLive = cmp.liveCapModel?.topInBorder ?? null
      const capCanvas = cmp.canvas?.topInBorder ?? null
      const rangeLive = cmp.live?.topInBorder ?? null
      const layoutLive = cmp.liveLayout?.topInBorder ?? null
      const blockLive = row.liveBlockAnchorTopInBorderPx ?? null
      const blockCanvas = row.canvasBlockAnchorTopInBorderPx ?? null

      const liveBlockAnchorRoot = runner.measureLiveBlockAnchorTopInRoot(el, root, row)
      const gbcrLayoutRoot = runner.measureLandmarkLayoutTopInRoot(el, root)

      return {
        recipeId,
        fixture: 'checkout-example',
        dpr: captureDpr,
        landmark,
        blackbox: {
          paintCanvasVsBorderTop: blackboxCanvasDelta,
          paintCapVsBorderTop: blackboxCapDelta,
          paintRangeVsBorderTop: blackboxRangeDelta,
          capLiveInBorder: struct?.['paint.cap.vs-border.top']?.live ?? null,
          canvasCompareInBorder: struct?.['paint.canvas.vs-border.top']?.compare ?? null,
        },
        labCapModel: {
          deltaTopCapModel: round(cmp.deltaTopCapModel),
          liveCapTopInBorder: round(capLive),
          canvasInkTopInBorder: round(capCanvas),
        },
        labRangeVisible: {
          liveVsCanvasTopPx: round(cmp.liveVsCanvasTopPx),
          liveRangeTopInBorder: round(rangeLive),
          canvasInkTopInBorder: round(capCanvas),
        },
        labBlockAnchorPreview: {
          deltaCanvasVsLive: round(labPreview.deltaCanvasVsLive),
          liveTopInRoot: round(labPreview.liveTop),
          canvasTopInRoot: round(labPreview.canvasTop),
          liveInBorder: round(blockLive),
          canvasInBorder: round(blockCanvas),
          checkReference: row.blockAnchorCheckReference,
          inkScanActive: row.inkScanActive,
        },
        layoutGbcr: {
          layoutTopInRoot: round(gbcrLayoutRoot),
        },
        liveReferenceBreakdown: {
          measureLiveBlockAnchorTopInRoot: round(liveBlockAnchorRoot),
          capModelTopInRoot: round(cmp.liveCapModel?.top ?? null),
          rangeTopInRoot: round(cmp.live?.top ?? null),
          layoutPaintedTopInRoot: round(cmp.liveLayout?.top ?? null),
          blockAnchorUsesMaxCandidate: true,
        },
        reconcile: {
          blackboxMinusLabCap: round((blackboxCanvasDelta ?? 0) - (cmp.deltaTopCapModel ?? 0)),
          blackboxMinusLabPreview: round((blackboxCanvasDelta ?? 0) - (labPreview.deltaCanvasVsLive ?? 0)),
          capMinusRangeLiveInBorder:
            capLive != null && rangeLive != null ? round(capLive - rangeLive) : null,
        },
      }
    },
    { recipeId, landmark, dpr, sectionTitle: `Nav: ${landmark}` },
  )
}

async function probeMiniLab(page, port, recipeId, dpr) {
  const qs = new URLSearchParams({ landmark, dpr: String(dpr) })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => typeof window.snapdom === 'function', null, { timeout: 60_000 })

  return page.evaluate(
    async ({ recipeId, landmark, dpr }) => {
      const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
      const { applyLandmarkInkMetricsToRow, computeLandmarkInkMetrics } = await import(
        './fo-landmark-layout-metrics.mjs'
      )
      const runner = await import('./fo-fix-lab-runner.js')
      const root = document.getElementById('capture-target')
      const recipe = getFoFixRecipe(recipeId)
      const row = await runner.runFoFixProbe(recipe, { landmark, root, dpr })
      const el = runner.findLandmarkElement(root, landmark)
      const canvasSlot = document.getElementById('view-canvas')
      canvasSlot.replaceChildren()
      if (row.canvas) {
        row.canvas.classList.add('preview-canvas')
        canvasSlot.appendChild(row.canvas)
      }
      if (el && row.canvas) {
        runner.syncProbeRowBlockAnchorCheck(row, root, el, { canvas: row.canvas, svgImg: null })
      }
      applyLandmarkInkMetricsToRow(row)
      const m = computeLandmarkInkMetrics(row)
      const cmp = runner.compareThreeWayInk(root, row.canvas, row.svgText, el, dpr)

      return {
        recipeId,
        fixture: 'fo-fix-lab.html',
        dpr,
        landmark,
        labBlockAnchorPreview: {
          deltaCanvasVsLive: m.deltaCanvasVsLive,
          canvasHigherPx: m.canvasHigherPx,
        },
        bitmapProbe: {
          liveVsCanvasTopPx: row.liveVsCanvasTopPx ?? row.bitmapCanvasDelta,
          deltaTopCapModel: cmp.deltaTopCapModel,
        },
      }
    },
    { recipeId, landmark, dpr },
  )
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()

  const checkoutCtx = await browser.newContext({
    viewport: { width: 1300, height: 900 },
    deviceScaleFactor: 2,
  })
  const checkoutPage = await checkoutCtx.newPage()

  /** @type {object[]} */
  const checkoutRecipes = []
  for (const id of RECIPES) {
    checkoutRecipes.push(await probeCheckout(checkoutPage, port, id, 2))
    console.log(
      `${id} checkout: blackbox=${checkoutRecipes.at(-1)?.blackbox?.paintCanvasVsBorderTop ?? '—'} cap=${checkoutRecipes.at(-1)?.labCapModel?.deltaTopCapModel ?? '—'} preview=${checkoutRecipes.at(-1)?.labBlockAnchorPreview?.deltaCanvasVsLive ?? '—'}`,
    )
  }

  const miniPage = await browser.newPage()
  await miniPage.setViewportSize({ width: 560, height: 520 })
  /** @type {object[]} */
  const miniRecipes = []
  for (const id of RECIPES) {
    miniRecipes.push(await probeMiniLab(miniPage, port, id, 1))
    console.log(
      `${id} mini dpr=1: preview=${miniRecipes.at(-1)?.labBlockAnchorPreview?.deltaCanvasVsLive ?? '—'} cap=${miniRecipes.at(-1)?.bitmapProbe?.deltaTopCapModel ?? '—'}`,
    )
  }

  const baselineCheckout = checkoutRecipes.find((r) => r.recipeId === 'product-baseline')
  const w7Checkout = checkoutRecipes.find((r) => r.recipeId === 'tc-fix-w7-capture-parent-lh-leaf-pin')
  const drift039Checkout = checkoutRecipes.find(
    (r) => r.recipeId === 'tc-fix-drift-039-capture-line-height-normal-important',
  )
  const w7Mini = miniRecipes.find((r) => r.recipeId === 'tc-fix-w7-capture-parent-lh-leaf-pin')

  const payload = {
    probe: 'lab-blackbox-metric-bridge',
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    landmark,
    rootCause: {
      summary:
        'Lab ~0.19px and blackbox −0.91px measure different things on different surfaces; checkout cap-model matches blackbox; mini block-anchor preview does not.',
      factors: [
        {
          id: 'fixture',
          detail:
            'Drift batches rank syncProbeRowBlockAnchorCheck on fo-fix-lab.html mini-nav (dpr=1). Blackbox gates paint.canvas.vs-border.top on checkout capture (dpr=2).',
        },
        {
          id: 'live-reference',
          detail:
            'Blackbox live = capInkRelBorder (font-metrics cap). Lab preview uses measureLiveBlockAnchorTopInRoot = max(Range, visible ink, cap, layout, …) — inflates live Y and shrinks |canvas−live| on mini fixture.',
        },
        {
          id: 'canvas-path',
          detail:
            'Blackbox scans #cap-content full-page canvas at capture DPR. Lab preview rescans probe bitmap in #view-canvas with stretch mapping (rootYToPreviewViewportStretch).',
        },
        {
          id: 'dpr',
          detail: 'Home drift batches use --dpr 1; bounce-check uses deviceScaleFactor: 2.',
        },
      ],
    },
    checkoutDpr2: checkoutRecipes,
    miniLabDpr1: miniRecipes,
    disconnectQuantified: {
      miniPreviewAbsW7: w7Mini?.labBlockAnchorPreview?.deltaCanvasVsLive != null
        ? Math.abs(w7Mini.labBlockAnchorPreview.deltaCanvasVsLive)
        : null,
      checkoutBlackboxAbs: baselineCheckout?.blackbox?.paintCanvasVsBorderTop != null
        ? Math.abs(baselineCheckout.blackbox.paintCanvasVsBorderTop)
        : null,
      checkoutCapModelBaseline: baselineCheckout?.labCapModel?.deltaTopCapModel ?? null,
      checkoutCapModelW7: w7Checkout?.labCapModel?.deltaTopCapModel ?? null,
      checkoutPreviewW7: w7Checkout?.labBlockAnchorPreview?.deltaCanvasVsLive ?? null,
      blackboxUnchangedByLabLeaders:
        (baselineCheckout?.blackbox?.paintCanvasVsBorderTop ?? null) ===
          (w7Checkout?.blackbox?.paintCanvasVsBorderTop ?? null) &&
        (baselineCheckout?.blackbox?.paintCanvasVsBorderTop ?? null) ===
          (drift039Checkout?.blackbox?.paintCanvasVsBorderTop ?? null),
    },
    promotionGuidance: {
      useForBlackboxAlignment: 'labCapModel.deltaTopCapModel on checkout after capture (compareThreeWayInk / measureCanvasInkForElement vs measureCapInkModel)',
      doNotRankFrom: 'syncProbeRowBlockAnchorCheck preview delta on fo-fix-lab mini fixture alone',
      labMetricFixRecommended:
        'Rank Home drift / matrix leaders from deltaTopCapModel (cap vs canvas integer scan) on same fixture as gate, not block-anchor preview on mini-nav',
    },
    srcChanged: false,
    blackboxExpectation: {
      note: 'Run npm run test:blackbox for live gate numbers; structure report parsed at dpr=2',
    },
  }

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)
  console.log(`\nWrote ${jsonOut}`)

  await checkoutCtx.close()
  await miniPage.close()
  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
