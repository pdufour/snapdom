#!/usr/bin/env node
/**
 * Detect "bounce": live vs canvas toggle must not shift landmark positions.
 */
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EXACT_EPS } from './vertical-tolerances.mjs'

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

    await page.locator('#btn-capture').click()
    await page.waitForSelector('#cap-content canvas', { timeout: 90_000 })

    const report = await page.evaluate(
      async ({ labels, eps }) => {
        const max = (a, b) => Math.max(a, Math.abs(b))
        const measure = () => {
          const target = document.getElementById('capture-target')
          const root = target.getBoundingClientRect()
          const stage = document.getElementById('stage-inner').getBoundingClientRect()
          const capBox = document.getElementById('cap-content')
          const capRect = capBox.getBoundingClientRect()
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
            let el = null
            for (const node of target.querySelectorAll('*')) {
              if (node.childElementCount > 0 && text !== 'Remember my details') continue
              if ((node.textContent || '').trim() === text) {
                el = node
                break
              }
            }
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
          if (mode === 'live') {
            document.body.removeAttribute('data-show-cap')
          } else if (mode === 'canvas') {
            document.body.setAttribute('data-show-cap', 'true')
          } else {
            document.body.setAttribute('data-show-cap', 'true')
            document.body.setAttribute('data-flash', 'both')
          }
        }

        const live = measure()
        setMode('canvas')
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
        const canvas = measure()
        const overlay = canvas.overlay
        setMode('both')
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
        const both = measure()

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
              toggleBounce.push({
                text: lm.text,
                tick: i,
                dTop,
                dLeft,
              })
            }
          }
          prev = cur
        }

        const liveVsCanvas = []
        for (const c of canvas.landmarks) {
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

        return { live, canvas, both, liveVsCanvas, toggleBounce, overlay }
      },
      { labels: LABELS, eps: EXACT_EPS },
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
          issues.push(`${row.text} live↔canvas ${key} Δ=${val.toFixed(4)}px`)
        }
      }
    }
    for (const b of report.toggleBounce) {
      issues.push(
        `${b.text} toggle tick ${b.tick} Δtop=${b.dTop.toFixed(4)} Δleft=${b.dLeft.toFixed(4)}`,
      )
    }

    console.log('=== Bounce check (live vs canvas must not shift) ===\n')
    console.log(
      `Overlay vs target: top Δ=${report.overlay.dTop.toFixed(4)} left Δ=${report.overlay.dLeft.toFixed(4)} w Δ=${report.overlay.dWidth.toFixed(4)} h Δ=${report.overlay.dHeight.toFixed(4)}`,
    )
    if (report.liveVsCanvas.length) {
      console.log('\nLive vs canvas landmark Δ:')
      for (const r of report.liveVsCanvas) {
        console.log(
          `  ${r.text}: top ${r.dTop.toFixed(4)} left ${r.dLeft.toFixed(4)} w ${r.dWidth.toFixed(4)} h ${r.dHeight.toFixed(4)}`,
        )
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
    console.log('\nBOUNCE: ok (zero shift live↔canvas, stable toggle)')
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
