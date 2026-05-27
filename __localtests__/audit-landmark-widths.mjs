#!/usr/bin/env node
/** One-off audit: print box.width / advance / kerning per landmark from playground structure report. */
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERTICAL_DRIFT } from './vertical-tolerances.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const LANDMARKS = [
  'Logo',
  'Nav: Home',
  'Nav: Products',
  'Checkout (h2)',
  'Email Address (label)',
  'Remember my details',
  'Promo Code (label)',
  'Email input',
  'Promo input',
]

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.mjs') return 'text/javascript; charset=utf-8'
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

function parseDelta(delta) {
  if (!delta || delta === '—') return null
  const n = parseFloat(String(delta).replace(/px$/, ''))
  return Number.isFinite(n) ? n : null
}

async function main() {
  const { server, port } = await startServer()
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({
      viewport: { width: 1300, height: 900 },
      deviceScaleFactor: 2,
    })
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })
    let sections
    try {
      await page.locator('#btn-capture').click()
      await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })
    } catch {
      await page.locator('#btn-capture').click()
      await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })
    }

    const rows = await page.evaluate((titles) => {
      const pick = (sec, m) => {
        const tr = [...sec.querySelectorAll('tr')].find(
          (r) => (r.querySelectorAll('td')[0]?.textContent || '').trim() === m,
        )
        if (!tr) return null
        const tds = [...tr.querySelectorAll('td')].map((td) => (td.textContent || '').trim())
        return { live: tds[1], clone: tds[2], delta: tds[3] }
      }
      return titles.map((title) => {
        const sec = [...document.querySelectorAll('#structure-host .structure-section')].find(
          (s) => (s.querySelector('h3')?.textContent || '').trim() === title,
        )
        if (!sec) return { title, missing: true }
        return {
          title,
          boxWidth: pick(sec, 'box.width'),
          boxLeft: pick(sec, 'box.left'),
          advance: pick(sec, 'advance width · full line'),
          letterSpacing: pick(sec, 'letter-spacing'),
          fontKerning: pick(sec, 'font-kerning'),
        }
      })
    }, LANDMARKS)

    console.log('Landmark width audit (slack ≤%spx width, ≤%spx advance)\n', VERTICAL_DRIFT.boxWidthSlack, VERTICAL_DRIFT.advanceSlack)
    let fails = 0
    for (const r of rows) {
      if (r.missing) {
        console.log(`✗ ${r.title}: section missing`)
        fails++
        continue
      }
      const wD = parseDelta(r.boxWidth?.delta)
      const lD = parseDelta(r.boxLeft?.delta)
      const aD = r.advance ? parseDelta(r.advance.delta) : null
      const wOk = wD == null || Math.abs(wD) <= VERTICAL_DRIFT.boxWidthSlack
      const lOk = lD == null || Math.abs(lD) <= VERTICAL_DRIFT.boxWidthSlack
      const aOk = aD == null || Math.abs(aD) <= VERTICAL_DRIFT.advanceSlack
      const kOk =
        r.letterSpacing?.live === r.letterSpacing?.clone &&
        r.fontKerning?.live === r.fontKerning?.clone
      const ok = wOk && lOk && aOk && kOk
      const mark = ok ? '✓' : '✗'
      if (!ok) fails++
      console.log(`${mark} ${r.title}`)
      console.log(`    box.width  ${r.boxWidth?.live} → ${r.boxWidth?.clone}  Δ=${r.boxWidth?.delta ?? '—'}`)
      console.log(`    box.left   ${r.boxLeft?.live} → ${r.boxLeft?.clone}  Δ=${r.boxLeft?.delta ?? '—'}`)
      if (r.advance) {
        console.log(`    advance    ${r.advance.live} → ${r.advance.clone}  Δ=${r.advance.delta}`)
      }
      console.log(`    letter-spacing ${r.letterSpacing?.live} → ${r.letterSpacing?.clone}`)
      console.log(`    font-kerning   ${r.fontKerning?.live} → ${r.fontKerning?.clone}`)
    }
    console.log(`\n${fails ? `${fails} FAIL` : 'All widths/kerning OK'}`)
    process.exit(fails ? 1 : 0)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
