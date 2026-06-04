#!/usr/bin/env node
/**
 * Blackbox checkout gate: layout must not bounce live↔canvas, and canvas raster
 * ink must match live cap ink within budget (same scan as playground report).
 */
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EXACT_EPS, VERTICAL_DRIFT } from './vertical-tolerances.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const LABELS = [
  'ShopDemo1',
  'Home',
  'Products',
  'Checkout',
  'Email Address',
  'Remember my details',
  'Promo Code',
]

/** Report + gate canvas ink (paint.canvas.vs-border.top). */
const INK_LABELS = ['ShopDemo1', 'Home', 'Products', 'Checkout', 'Email Address', 'Promo Code']
/** Strict fail on canvas top drift (logo excluded — raster band scan is noisy). */
const INK_GATE_LABELS = ['Home', 'Products', 'Checkout', 'Email Address', 'Promo Code']

/** Blackbox: canvas ink vs live cap must be ≤ this (paint.canvas.vs-border.top). */
const CANVAS_BUDGET = {
  slack: 0.03,
  fail: 0.06,
}

/** Home and Products must get the same canvas-vs-live ink delta (paint.canvas.vs-border.top). */
const NAV_INK_PARITY = 0.06

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  return 'application/octet-stream'
}

async function startServer() {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      const rel = decodeURIComponent(url.pathname.replace(/^\//, ''))
      const abs = path.resolve(repoRoot, rel)
      if (!abs.startsWith(repoRoot + path.sep)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }
      const data = await fs.readFile(abs)
      res.writeHead(200, { 'Content-Type': contentType(abs) })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  return { server, port: server.address().port }
}

/** @param {string} title e.g. "Nav: Products" */
function parseStructureSection(title, rows) {
  if (!rows) return null
  const pick = (prop) => {
    const r = rows[prop]
    if (!r) return null
    return {
      live: r.live,
      compare: r.compare,
      delta: r.delta,
      compareKind: prop.startsWith('paint.canvas.') ? 'canvas raster' : 'SVG clone',
    }
  }
  return {
    title,
    capTop: pick('paint.cap.vs-border.top'),
    capBottom: pick('paint.cap.vs-border.bottom'),
    capHeight: pick('paint.cap.vs-border.height'),
    canvasTop: pick('paint.canvas.vs-border.top'),
    canvasHeight: pick('paint.canvas.vs-border.height'),
    rootTop: pick('paint.cap.root.top'),
    canvasRootTop: pick('paint.canvas.root.top'),
  }
}

const INK_SECTION_TITLES = {
  Home: 'Nav: Home',
  Products: 'Nav: Products',
  Checkout: 'Checkout (h2)',
  'Email Address': 'Email Address (label)',
  'Promo Code': 'Promo Code (label)',
}

async function launchBrowser() {
  if (process.env.BOUNCE_USE_CHROMIUM === '1') {
    return {
      browser: await chromium.launch({ headless: false }),
      engine: 'Chromium (bundled, headed)',
    }
  }
  try {
    return {
      browser: await chromium.launch({ channel: 'chrome', headless: false }),
      engine: 'Chrome (headed — same engine as desktop playground)',
    }
  } catch {
    return {
      browser: await chromium.launch({ headless: false }),
      engine: 'Chromium (headed fallback)',
    }
  }
}

async function main() {
  const { server, port } = await startServer()
  const { browser, engine } = await launchBrowser()
  try {
    const page = await browser.newPage({
      viewport: { width: 1300, height: 900 },
      deviceScaleFactor: 2,
    })
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })
    await page.evaluate(() => document.fonts?.ready)

    await page.locator('#btn-capture').click()
    await page.waitForSelector('#cap-content canvas', { timeout: 90_000 })
    await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })

    const report = await page.evaluate(
      async ({ labels, inkGateLabels, inkSectionTitles, eps }) => {
        function parseNum(cell) {
          if (!cell || cell === '—') return null
          const n = parseFloat(String(cell).replace(/px$/i, '').replace(/^\+/, ''))
          return Number.isFinite(n) ? n : null
        }

        /** Read playground table — same numbers you see in the browser. */
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
            if (el.childElementCount > 0 && text !== 'Remember my details') continue
            if ((el.textContent || '').trim() === want) return el
          }
          return null
        }

        const measure = () => {
          const target = document.getElementById('capture-target')
          const capRect = document.getElementById('cap-content').getBoundingClientRect()
          const root = target.getBoundingClientRect()
          const oTop = capRect.top - target.top
          const oLeft = capRect.left - target.left
          const oW = capRect.width - target.width
          const oH = capRect.height - target.height
          const out = {
            overlay: {
              dTop: Number.isFinite(oTop) ? oTop : 0,
              dLeft: Number.isFinite(oLeft) ? oLeft : 0,
              dWidth: Number.isFinite(oW) ? oW : 0,
              dHeight: Number.isFinite(oH) ? oH : 0,
            },
            landmarks: [],
          }
          for (const text of labels) {
            const el = findTextLeaf(target, text)
            if (!el) {
              out.landmarks.push({ text, missing: true })
              continue
            }
            const r = el.getBoundingClientRect()
            out.landmarks.push({
              text,
              top: r.top - root.top,
              left: r.left - root.left,
              width: r.width,
              height: r.height,
            })
          }
          return out
        }

        const setMode = (mode) => {
          document.body.removeAttribute('data-flash')
          document.getElementById('live-layer').style.opacity = '1'
          if (mode === 'live') document.body.removeAttribute('data-show-cap')
          else if (mode === 'canvas') document.body.setAttribute('data-show-cap', 'true')
          else {
            document.body.setAttribute('data-show-cap', 'true')
            document.body.setAttribute('data-flash', 'both')
          }
        }

        const live = measure()
        setMode('canvas')
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
        const canvasMode = measure()
        const overlay = canvasMode.overlay

        const toggleBounce = []
        setMode('live')
        let prev = measure()
        for (let i = 0; i < 6; i++) {
          setMode(i % 2 === 0 ? 'canvas' : 'live')
          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
          const cur = measure()
          for (const lm of cur.landmarks) {
            if (lm.missing) continue
            const p = prev.landmarks.find((x) => x.text === lm.text)
            if (!p || p.missing) continue
            const dTop = lm.top - p.top
            const dLeft = lm.left - p.left
            if (Math.abs(dTop) > eps || Math.abs(dLeft) > eps) {
              toggleBounce.push({ text: lm.text, tick: i, dTop, dLeft })
            }
          }
          prev = cur
        }

        const liveVsCanvas = []
        for (const c of canvasMode.landmarks) {
          const l = live.landmarks.find((x) => x.text === c.text)
          if (!l || l.missing || c.missing) continue
          liveVsCanvas.push({
            text: c.text,
            dTop: c.top - l.top,
            dLeft: c.left - l.left,
            dWidth: c.width - l.width,
            dHeight: c.height - l.height,
          })
        }

        const structureInk = []
        for (const [label, sectionTitle] of Object.entries(inkSectionTitles)) {
          const rows = readStructureRows(sectionTitle)
          const canvasRow = rows?.['paint.canvas.vs-border.top']
          structureInk.push({
            text: label,
            sectionTitle,
            dTop: canvasRow?.delta ?? null,
            rows,
          })
        }

        const navStructure = ['Nav: Home', 'Nav: Products']
          .map((title) => {
            const rows = readStructureRows(title)
            return rows ? { title, rows } : null
          })
          .filter(Boolean)

        const homeCanvas = structureInk.find((r) => r.text === 'Home')?.dTop
        const productsCanvas = structureInk.find((r) => r.text === 'Products')?.dTop
        const navInkParity =
          homeCanvas != null && productsCanvas != null
            ? Math.abs(homeCanvas - productsCanvas)
            : null

        return {
          live,
          canvasMode,
          liveVsCanvas,
          toggleBounce,
          overlay,
          navInkParity,
          navStructure,
          structureInk,
          userAgent: navigator.userAgent,
        }
      },
      {
        labels: LABELS,
        inkGateLabels: INK_GATE_LABELS,
        inkSectionTitles: INK_SECTION_TITLES,
        eps: EXACT_EPS,
      },
    )

    const issues = []

    for (const k of ['dTop', 'dLeft', 'dWidth', 'dHeight']) {
      const v = report.overlay[k]
      if (Math.abs(v) > EXACT_EPS) issues.push(`overlay ${k}=${v.toFixed(4)}px`)
    }

    for (const row of report.liveVsCanvas) {
      for (const [key, val] of [
        ['top', row.dTop],
        ['left', row.dLeft],
        ['width', row.dWidth],
        ['height', row.dHeight],
      ]) {
        if (Math.abs(val) > EXACT_EPS) {
          issues.push(`${row.text} live↔canvas layout ${key} Δ=${val.toFixed(4)}px`)
        }
      }
    }

    for (const b of report.toggleBounce) {
      issues.push(
        `${b.text} toggle tick ${b.tick} Δtop=${b.dTop.toFixed(4)} Δleft=${b.dLeft.toFixed(4)}`,
      )
    }

    for (const row of report.structureInk || []) {
      if (!INK_GATE_LABELS.includes(row.text)) continue
      if (row.dTop == null) {
        issues.push(`${row.text}: missing paint.canvas.vs-border.top in structure report`)
        continue
      }
      if (Math.abs(row.dTop) > CANVAS_BUDGET.fail) {
        issues.push(
          `${row.text} paint.canvas.vs-border.top Δ=${row.dTop >= 0 ? '+' : ''}${row.dTop.toFixed(2)}px (fail>${CANVAS_BUDGET.fail}px)`,
        )
      }
    }

    if (report.navInkParity != null && report.navInkParity > NAV_INK_PARITY) {
      const home = report.structureInk?.find((r) => r.text === 'Home')
      const products = report.structureInk?.find((r) => r.text === 'Products')
      issues.push(
        `Nav canvas ink parity: |Δtop(Home)-Δtop(Products)|=${report.navInkParity.toFixed(2)}px ` +
          `(Home ${home?.dTop?.toFixed(2)}px, Products ${products?.dTop?.toFixed(2)}px, max ${NAV_INK_PARITY}px)`,
      )
    }

    console.log('=== Blackbox checkout (layout + canvas ink) ===')
    console.log(`Engine: ${engine}`)
    console.log(`User-Agent: ${report.userAgent || 'unknown'}\n`)
    console.log(
      `Overlay vs target: top Δ=${report.overlay.dTop.toFixed(4)} left Δ=${report.overlay.dLeft.toFixed(4)} w Δ=${report.overlay.dWidth.toFixed(4)} h Δ=${report.overlay.dHeight.toFixed(4)}`,
    )

    if (report.liveVsCanvas.length) {
      console.log('\nLayout live↔canvas (must be 0):')
      for (const r of report.liveVsCanvas) {
        console.log(
          `  ${r.text}: top ${r.dTop.toFixed(4)} left ${r.dLeft.toFixed(4)} w ${r.dWidth.toFixed(4)} h ${r.dHeight.toFixed(4)}`,
        )
      }
    }

    if (report.navStructure?.length) {
      console.log('\nNav structure (parsed from playground table on this page):')
      for (const nav of report.navStructure) {
        const parsed = parseStructureSection(nav.title, nav.rows)
        if (!parsed) continue
        console.log(`  ${parsed.title}`)
        const row = (label, r) => {
          if (!r || r.live == null) return
          const d =
            r.delta == null ? '—' : `${r.delta >= 0 ? '+' : ''}${r.delta.toFixed(2)}px`
          console.log(
            `    ${label}\t${r.live}\t${r.compare ?? '—'}\t${d}  (${r.compareKind})`,
          )
        }
        row('paint.cap.vs-border.top', parsed.capTop)
        row('paint.cap.vs-border.bottom', parsed.capBottom)
        row('paint.cap.vs-border.height', parsed.capHeight)
        row('paint.canvas.vs-border.top', parsed.canvasTop)
        row('paint.canvas.vs-border.height', parsed.canvasHeight)
        row('paint.cap.root.top', parsed.rootTop)
        row('paint.canvas.root.top', parsed.canvasRootTop)
      }
    }

    if (report.structureInk?.length) {
      console.log(
        `\nCanvas ink (from structure report; top gated ≤${CANVAS_BUDGET.fail}px per landmark):`,
      )
      for (const r of report.structureInk) {
        const sign = (n) => (n == null ? '—' : `${n >= 0 ? '+' : ''}${n.toFixed(2)}`)
        console.log(`  ${r.text}: paint.canvas.vs-border.top ${sign(r.dTop)}px`)
      }
      if (report.navInkParity != null) {
        console.log(`  Nav |Δtop(Home)-Δtop(Products)|: ${report.navInkParity.toFixed(2)}px`)
      }
    }

    if (report.toggleBounce.length) {
      console.log('\nToggle bounce:')
      for (const b of report.toggleBounce) console.log(`  ${JSON.stringify(b)}`)
    } else {
      console.log('\nToggle bounce: none')
    }

    if (issues.length) {
      console.log(`\nFAIL (${issues.length}):`)
      for (const i of issues) console.log(`  ${i}`)
      process.exit(1)
    }
    console.log('\nBOUNCE: ok (layout stable, canvas ink within budget, nav canvas parity ok)')
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
