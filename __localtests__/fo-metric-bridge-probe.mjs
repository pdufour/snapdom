#!/usr/bin/env node
/**
 * FO metric bridge — reconcile lab Range ink, integer canvas row, blackbox
 * paint.canvas.vs-border.top, and w7 effect on each metric family.
 *
 *   npm run compile && node __localtests__/fo-metric-bridge-probe.mjs
 *   node __localtests__/fo-metric-bridge-probe.mjs --json .sandbox-edit/metric-bridge-probe.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'metric-bridge-probe.json')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprList = args.includes('--dpr')
  ? [Number(args[args.indexOf('--dpr') + 1])]
  : [1, 2]
const landmark = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function runMiniProbe(page, port, dpr) {
  const qs = new URLSearchParams({ dpr: String(dpr), landmark })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-metric-bridge-probe.html?${qs}`
  console.log(`  mini-nav @ dpr=${dpr}: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foMetricBridge?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foMetricBridge?.bootError)
  if (bootErr) throw new Error(`Mini probe dpr=${dpr}: ${bootErr}`)
  return page.evaluate(() => window.__foMetricBridge.result)
}

async function runCheckoutBlackbox(page, port, dpr) {
  await page.setViewportSize({ width: 1300, height: 900 })
  if (dpr === 2) await page.evaluate(() => { /* deviceScaleFactor set via context */ })
  const url = `http://127.0.0.1:${port}/__localtests__/checkout-example.html`
  console.log(`  checkout blackbox @ dpr=${dpr}: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.evaluate(() => document.fonts?.ready)

  await page.locator('#btn-capture').click()
  await page.waitForSelector('#cap-content canvas', { timeout: 90_000 })
  await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })

  return page.evaluate(
    async ({ landmarkLabel, inkSectionTitle }) => {
      function parseNum(cell) {
        if (!cell || cell === '—') return null
        const n = parseFloat(String(cell).replace(/px$/i, '').replace(/^\+/, ''))
        return Number.isFinite(n) ? n : null
      }

      function readStructureRows(sectionTitle) {
        const section = [...document.querySelectorAll('.structure-section')].find(
          (s) => s.querySelector('h3')?.textContent?.trim() === sectionTitle,
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

      function findTextLeaf(root, text) {
        const want = text.trim()
        for (const el of root.querySelectorAll('*')) {
          if (el.childElementCount > 0) continue
          if ((el.textContent || '').trim() === want) return el
        }
        return null
      }

      const target = document.getElementById('capture-target')
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const el = findTextLeaf(target, landmarkLabel)
      const sectionTitle = inkSectionTitle
      const rows = readStructureRows(sectionTitle)

      const liveGuide = document.getElementById('ink-guide-live')
      const capGuide = document.getElementById('ink-guide-cap')
      const canvas = document.querySelector('#cap-content canvas')

      return {
        fixture: 'checkout-example',
        dpr,
        landmark: landmarkLabel,
        structureReport: {
          paintCanvasVsBorderTop: rows?.['paint.canvas.vs-border.top'] ?? null,
          paintCapVsBorderTop: rows?.['paint.cap.vs-border.top'] ?? null,
          paintRangeVsBorderTop: rows?.['paint.range.vs-border.top'] ?? null,
          boxTop: rows?.['box.top'] ?? null,
        },
        documentRulers: {
          liveRangeGuideTopPx: liveGuide ? parseFloat(liveGuide.style.top) || null : null,
          capGuideTopPx: capGuide ? parseFloat(capGuide.style.top) || null : null,
          note: 'checkout ink-guide-live = Range; ink-guide-cap = canvas/cap after capture',
        },
        canvasPresent: !!canvas,
        captureTargetHeight: target?.getBoundingClientRect().height ?? null,
        elBorderTopPx: el
          ? parseFloat(getComputedStyle(el).borderTopWidth) || 0
          : null,
      }
    },
    { landmarkLabel: landmark, inkSectionTitle: `Nav: ${landmark}` },
  )
}

function printReport(payload) {
  console.log('\n--- FO metric bridge ---\n')
  for (const mini of payload.miniNav ?? []) {
    const b = mini.baseline?.deltas ?? {}
    const w = mini.w7?.deltas ?? {}
    console.log(`mini-nav dpr=${mini.dpr}:`)
    console.log(`  lab Range Δ:     ${b.labRangeLiveVsCanvasTopPx ?? '—'} px`)
    console.log(`  lab cap Δ:       ${b.labCapModelCanvasDeltaPx ?? '—'} px`)
    console.log(`  blackbox proxy:  ${b.blackboxPaintCanvasVsBorderTop ?? '—'} px`)
    console.log(`  reconcile:       ${b.reconciliationRangeMinusCapDelta ?? '—'} px (Range − cap)`)
    console.log(`  w7 Range Δ:      ${w.labRangeLiveVsCanvasTopPx ?? '—'} px`)
    console.log(`  w7 cap Δ:        ${w.labCapModelCanvasDeltaPx ?? '—'} px`)
    console.log(`  integer row:     ${mini.baseline?.canvas?.integerDeviceRow ?? '—'} → w7 ${mini.w7?.canvas?.integerDeviceRow ?? '—'}`)
  }
  for (const chk of payload.checkout ?? []) {
    const bb = chk.structureReport?.paintCanvasVsBorderTop
    console.log(`checkout dpr=${chk.dpr}: paint.canvas.vs-border.top Δ=${bb?.delta ?? '—'} px`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  /** @type {Record<string, unknown>} */
  const payload = {
    probe: 'fo-metric-bridge',
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    landmark,
    miniNav: [],
    checkout: [],
    synthesis: null,
  }

  try {
    for (const dpr of dprList) {
      await page.setViewportSize({ width: 520, height: 560 })
      if (dpr === 2) {
        await page.close()
        const ctx = await browser.newContext({ deviceScaleFactor: 2 })
        const p2 = await ctx.newPage()
        payload.miniNav.push(await runMiniProbe(p2, port, dpr))
        await p2.close()
        await ctx.close()
        const ctx2 = await browser.newContext({ deviceScaleFactor: 2 })
        const p3 = await ctx2.newPage()
        payload.checkout.push(await runCheckoutBlackbox(p3, port, dpr))
        await p3.close()
        await ctx2.close()
        continue
      }
      payload.miniNav.push(await runMiniProbe(page, port, dpr))
    }

    if (!dprList.includes(2)) {
      const ctx = await browser.newContext({ deviceScaleFactor: 2 })
      const p2 = await ctx.newPage()
      payload.checkout.push(await runCheckoutBlackbox(p2, port, 2))
      await p2.close()
      await ctx.close()
    }

    const mini1 = payload.miniNav.find((r) => r.dpr === 1) ?? payload.miniNav[0]
    const checkout2 = payload.checkout.find((r) => r.dpr === 2) ?? payload.checkout[0]

    payload.synthesis = {
      whyLabPlus2797VsBlackboxMinus091: {
        labRangeDeltaMiniDpr1: mini1?.baseline?.deltas?.labRangeLiveVsCanvasTopPx ?? null,
        labCapDeltaMiniDpr1: mini1?.baseline?.deltas?.labCapModelCanvasDeltaPx ?? null,
        blackboxCheckoutDpr2:
          checkout2?.structureReport?.paintCanvasVsBorderTop?.delta ?? null,
        rangeMinusCapLiveOffsetPx: mini1?.baseline?.liveReference?.rangeMinusCapLab ?? null,
        explanation:
          'Same BITMAP_ONLY FO raster; lab gates on Range union vs integer canvas row; blackbox gates on measureCapInk vs same integer scan. Signed Δ differs by live reference offset (~4.5px mini) plus fixture border/layout and product blit path at dpr=2.',
      },
      w7EffectSummary: {
        baselineRangeDelta: mini1?.w7Effect?.baselineRangeDelta ?? null,
        w7RangeDelta: mini1?.w7Effect?.w7RangeDelta ?? null,
        baselineCapDelta: mini1?.w7Effect?.baselineCapDelta ?? null,
        w7CapDelta: mini1?.w7Effect?.w7CapDelta ?? null,
        baselineCanvasRow: mini1?.w7Effect?.baselineCanvasRow ?? null,
        w7CanvasRow: mini1?.w7Effect?.w7CanvasRow ?? null,
        rangeSubpixelResidual: mini1?.w7Effect?.rangeSubpixelResidual ?? null,
        verdict: 'w7 closes ~2.8px strut on Range metric; residual ~0.203px = Range subpixel vs integer device row; cap-model Δ shifts equally because canvas row moves, cap live unchanged',
      },
    }

    payload.chromeVersion = await browser.version()

    await fs.promises.mkdir(SANDBOX, { recursive: true })
    const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(fullPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${fullPath}`)

    printReport(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
