#!/usr/bin/env node
/**
 * Bridge lab Range painted ink vs checkout structure-report cap / canvas metrics.
 *
 *   npm run compile && node __localtests__/fo-blackbox-metric-bridge-probe.mjs
 *   node __localtests__/fo-blackbox-metric-bridge-probe.mjs --json .sandbox-edit/fo-blackbox-metric-bridge-probe.json
 *
 * Headed Chrome only. Loads checkout-example.html if available.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-blackbox-metric-bridge-probe.json')

const INK_LABELS = ['Home', 'Products']
const SECTION_TITLES = { Home: 'Nav: Home', Products: 'Nav: Products' }

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const dpr = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const context = await browser.newContext({
    viewport: { width: 1300, height: 900 },
    deviceScaleFactor: dpr,
  })
  const page = await context.newPage()

  const checkoutUrl = `http://127.0.0.1:${port}/__localtests__/checkout-example.html`
  let pageLoaded = false
  let loadError = null
  try {
    await page.goto(checkoutUrl, { waitUntil: 'load', timeout: 120_000 })
    await page.evaluate(() => document.fonts?.ready)
    pageLoaded = true
  } catch (err) {
    loadError = String(err?.message || err)
  }

  /** @type {Record<string, unknown>} */
  const payload = {
    probe: 'fo-blackbox-metric-bridge-probe',
    dpr,
    checkoutUrl,
    pageLoaded,
    loadError,
    landmarks: [],
    synthesis: null,
  }

  if (pageLoaded) {
    try {
      await page.locator('#btn-capture').click()
      await page.waitForSelector('#cap-content canvas', { timeout: 120_000 })
      await page.waitForSelector('#structure-host .structure-report', { timeout: 90_000 })
    } catch (err) {
      payload.captureError = String(err?.message || err)
    }

    const bridge = await page.evaluate(
      ({ inkLabels, sectionTitles }) => {
        function round(v) {
          return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
        }
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
          /** @type {Record<string, { live: number|null, compare: number|null, delta: number|null }>} */
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
        if (!target) return { error: 'capture-target missing' }

        /** @type {Record<string, unknown>[]} */
        const rows = []
        for (const label of inkLabels) {
          const sectionTitle = sectionTitles[label]
          const struct = readStructureRows(sectionTitle)
          const el = findTextLeaf(target, label)
          let rangeTopInBorder = null
          let rangeLineHeight = null
          if (el) {
            const range = document.createRange()
            range.selectNodeContents(el)
            const rr = range.getBoundingClientRect()
            const rootBox = target.getBoundingClientRect()
            rangeTopInBorder = round(rr.top - rootBox.top)
            rangeLineHeight = round(rr.height)
          }
          const capTop = struct?.['paint.cap.vs-border.top'] ?? null
          const canvasTop = struct?.['paint.canvas.vs-border.top'] ?? null
          const lineBoxTop = struct?.['paint.line-box.vs-border.top'] ?? null
          const rangeVsCapReconcile =
            rangeTopInBorder != null && capTop?.live != null
              ? round(rangeTopInBorder - capTop.live)
              : null
          const rangeVsCanvasDelta =
            rangeTopInBorder != null && canvasTop?.delta != null
              ? round(canvasTop.delta - (rangeTopInBorder - (capTop?.live ?? rangeTopInBorder)))
              : null

          rows.push({
            label,
            sectionTitle,
            structureReport: {
              capTop,
              canvasTop,
              lineBoxTop,
            },
            labRange: {
              topInBorderPx: rangeTopInBorder,
              lineHeightPx: rangeLineHeight,
            },
            bridge: {
              rangeVsCapLivePx: rangeVsCapReconcile,
              structureCanvasDeltaPx: canvasTop?.delta ?? null,
              structureCapDeltaPx: capTop?.delta ?? null,
              rangeMinusCapLivePx:
                rangeTopInBorder != null && capTop?.live != null
                  ? round(rangeTopInBorder - capTop.live)
                  : null,
            },
          })
        }

        const home = rows.find((r) => r.label === 'Home')
        const products = rows.find((r) => r.label === 'Products')
        const navSpread =
          home?.bridge?.structureCanvasDeltaPx != null &&
          products?.bridge?.structureCanvasDeltaPx != null
            ? round(
                Math.abs(home.bridge.structureCanvasDeltaPx) -
                  Math.abs(products.bridge.structureCanvasDeltaPx),
              )
            : null

        return {
          landmarks: rows,
          synthesis: {
            checkoutLoaded: true,
            navCanvasDeltaSpreadPx: navSpread,
            note:
              'Lab Range top vs structure-report paint.cap live and paint.canvas delta (blackbox gate metric).',
          },
        }
      },
      { inkLabels: INK_LABELS, sectionTitles: SECTION_TITLES },
    )

    if (bridge.error) payload.captureError = bridge.error
    else {
      payload.landmarks = bridge.landmarks
      payload.synthesis = bridge.synthesis
    }
  }

  payload.port = port
  payload.headed = process.env.HEADLESS !== '1'
  payload.chromeVersion = await page.evaluate(() => navigator.userAgent)

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- FO blackbox metric bridge ---')
  console.log(`checkout loaded=${pageLoaded}`)
  for (const row of payload.landmarks ?? []) {
    console.log(
      `${row.label}: canvasΔ=${row.bridge?.structureCanvasDeltaPx ?? '—'} capΔ=${row.bridge?.structureCapDeltaPx ?? '—'} Range top=${row.labRange?.topInBorderPx ?? '—'}`,
    )
  }
  console.log(`Wrote ${jsonOut}`)

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
