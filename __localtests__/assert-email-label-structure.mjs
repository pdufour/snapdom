import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERTICAL_DRIFT, EXACT_EPS } from './vertical-tolerances.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const repoRoot = path.resolve(__dirname, '..')
const EMAIL_SECTION = 'Email Address (label)'

/** @param {string} prop */
function isPaintDriftMetric(prop) {
  if (prop === 'paint.canvas.vs-border.top') return true
  if (prop === 'paint.canvas.root.top') return true
  if (prop === 'paint.cap.vs-border.top') return true
  if (prop === 'paint.cap.root.top') return true
  if (prop === 'span-input') return true
  return false
}

/** @param {string} delta */
function absDeltaPx(delta) {
  if (!delta || delta === '—') return null
  const n = parseFloat(String(delta).replace(/px$/, ''))
  return Number.isFinite(n) ? Math.abs(n) : null
}

/** @param {string} metric @param {number|null} absPx */
function withinVerticalBudget(metric, absPx) {
  if (absPx == null) return true
  if (metric.startsWith('paint.canvas.')) return absPx <= VERTICAL_DRIFT.canvasFail
  if (metric.startsWith('paint.cap.')) return absPx <= EXACT_EPS
  if (metric === 'span-input') return absPx <= VERTICAL_DRIFT.gapFail
  return absPx <= VERTICAL_DRIFT.layoutFail
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  if (ext === '.css') return 'text/css; charset=utf-8'
  if (ext === '.svg') return 'image/svg+xml; charset=utf-8'
  if (ext === '.png') return 'image/png'
  if (ext === '.json') return 'application/json; charset=utf-8'
  return 'application/octet-stream'
}

async function startStaticServer() {
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

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const addr = server.address()
  const port = typeof addr === 'object' && addr ? addr.port : 0
  if (!port) throw new Error('Failed to start server')
  return { server, port }
}

/**
 * @param {import('playwright').Page} page
 */
async function collectStructureWarns(page) {
  return page.locator('#structure-host .structure-section').evaluateAll((sections) =>
    sections.flatMap((sec) => {
      const title = sec.querySelector('h3')?.textContent?.trim() || '(unknown section)'
      return [...sec.querySelectorAll('tr.warn')]
        .map((tr) => {
          const tds = [...tr.querySelectorAll('td')].map((td) => (td.textContent || '').trim())
          return {
            section: title,
            metric: tds[0] || '',
            live: tds[1] || '',
            clone: tds[2] || '',
            delta: tds[3] || '',
          }
        })
        .filter((w) => {
          // Absolute truth check
          return true
        })
    }),
  )
}

function formatWarns(warns) {
  if (!warns.length) return ''
  const bySection = new Map()
  for (const w of warns) {
    if (!bySection.has(w.section)) bySection.set(w.section, [])
    bySection.get(w.section).push(w)
  }
  const lines = []
  for (const [section, rows] of bySection) {
    lines.push(`\n[${section}]`)
    for (const r of rows) {
      lines.push(`  ${r.metric}`)
      lines.push(`    live:  ${r.live}`)
      lines.push(`    clone: ${r.clone}`)
      if (r.delta && r.delta !== '—') lines.push(`    Δ:     ${r.delta}`)
    }
  }
  return lines.join('\n')
}

async function main() {
  const { server, port } = await startStaticServer()
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ 
    viewport: { width: 1300, height: 900 },
    deviceScaleFactor: 2 
  })

  try {
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })

    await page.locator('#btn-capture').click()
    await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })

    const summary =
      (await page.locator('#structure-host .structure-summary').first().textContent())?.trim() ||
      ''

    const allWarns = await collectStructureWarns(page)
    const paintDrift = allWarns.filter((w) => isPaintDriftMetric(w.metric))
    const emailPaint = paintDrift.filter((w) => w.section === EMAIL_SECTION)
    const emailPaintFail = emailPaint.filter(
      (w) => !withinVerticalBudget(w.metric, absDeltaPx(w.delta)),
    )
    const otherPaint = paintDrift.filter((w) => w.section !== EMAIL_SECTION)

    if (summary) {
      // eslint-disable-next-line no-console
      console.log(`Summary: ${summary.split('\n')[0]}`)
    }

    if (emailPaint.length) {
      // eslint-disable-next-line no-console
      console.log(
        `\nEmail paint drift (${emailPaint.length}, budget ≤${VERTICAL_DRIFT.canvasFail}px canvas / ≤${VERTICAL_DRIFT.capFail}px cap):${formatWarns(emailPaint)}`,
      )
    } else if (paintDrift.length) {
      // eslint-disable-next-line no-console
      console.log(`\nNo Email paint drift (${paintDrift.length} elsewhere):${formatWarns(paintDrift)}`)
    } else {
      // eslint-disable-next-line no-console
      console.log('\nNo paint drift — paint.cap.* and paint.canvas.* match on Email label.')
    }

    const infoRows = await page.locator('#structure-host tr.info').evaluateAll((trs) =>
      trs.map((tr) => {
        const section =
          tr.closest('.structure-section')?.querySelector('h3')?.textContent?.trim() || '?'
        const tds = [...tr.querySelectorAll('td')].map((td) => (td.textContent || '').trim())
        return { section, metric: tds[0] || '', live: tds[1] || '', clone: tds[2] || '' }
      }),
    )
    if (infoRows.length) {
      // eslint-disable-next-line no-console
      console.log(
        `\nInfo only (${infoRows.length}, not paint drift):` +
          infoRows.map((r) => `\n  [${r.section}] ${r.metric}: ${r.live} → ${r.clone}`).join(''),
      )
    }

    if (otherPaint.length) {
      // eslint-disable-next-line no-console
      console.log(
        `\nNote: ${otherPaint.length} paint drift row(s) outside Email (not gated):` +
          formatWarns(otherPaint),
      )
    }

    if (emailPaintFail.length) {
      throw new Error(
        `"${EMAIL_SECTION}" paint drift over budget (${emailPaintFail.length}):` +
          formatWarns(emailPaintFail),
      )
    }

    // eslint-disable-next-line no-console
    console.log(
      `OK — "${EMAIL_SECTION}" within vertical budget (canvas ≤${VERTICAL_DRIFT.canvasFail}px, cap ≤${VERTICAL_DRIFT.capFail}px).`,
    )
  } finally {
    await page.close().catch(() => {})
    await browser.close().catch(() => {})
    await new Promise((resolve) => server.close(resolve))
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err?.stack || String(err))
  process.exitCode = 1
})
