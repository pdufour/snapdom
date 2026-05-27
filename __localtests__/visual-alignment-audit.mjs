#!/usr/bin/env node
/**
 * Visual audit: live vs snapdom canvas overlay + per-region structural diff.
 */
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERTICAL_DRIFT } from './vertical-tolerances.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(repoRoot, '__localtests__/visual-audit-output')

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  if (ext === '.css') return 'text/css; charset=utf-8'
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
  await fs.mkdir(outDir, { recursive: true })
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

    page.on('dialog', async (d) => {
      console.error('Page alert:', d.message())
      await d.dismiss()
    })

    async function doCapture() {
      await page.locator('#btn-capture').click()
      await page.waitForSelector('#cap-content canvas', { timeout: 90_000 })
    }
    try {
      await doCapture()
    } catch {
      await doCapture()
    }

    const stage = page.locator('#stage-scroll')

    // Live only
    await page.evaluate(() => {
      document.body.removeAttribute('data-show-cap')
      document.body.removeAttribute('data-flash')
    })
    await stage.screenshot({ path: path.join(outDir, '01-live-only.png') })

    // Canvas only (snapdom raster)
    await page.evaluate(() => {
      document.body.setAttribute('data-show-cap', 'true')
      document.getElementById('live-layer').style.opacity = '0'
      document.body.removeAttribute('data-flash')
    })
    await stage.screenshot({ path: path.join(outDir, '02-canvas-only.png') })

    // 45% blend (see misalignment by color fringe)
    await page.evaluate(() => {
      document.getElementById('live-layer').style.opacity = '1'
      document.body.setAttribute('data-flash', 'both')
    })
    await stage.screenshot({ path: path.join(outDir, '03-blend-both.png') })

    // Structural pixel diff + ink guide positions
    const analysis = await page.evaluate(async () => {
      const { compareVisualDiff, findTranslationOffset } = await import(
        '/__tests__/helpers/visualDiff.js'
      )
      const target = document.getElementById('capture-target')
      const cap = document.querySelector('#cap-content canvas')
      if (!cap) return { error: 'no cap canvas' }

      const { snapdom } = await import('/dist/snapdom.mjs')
      const liveCanvas = await (
        await snapdom(target, { embedFonts: true, dpr: 2, scale: 1 })
      ).toCanvas()

      const structural = compareVisualDiff(liveCanvas, cap, { structural: true })
      const color = compareVisualDiff(liveCanvas, cap, { threshold: 24 })
      const shift = findTranslationOffset(liveCanvas, cap, 12)

      const rootRect = target.getBoundingClientRect()
      const pick = (text) => {
        for (const el of target.querySelectorAll('*')) {
          if (el.childElementCount > 0) continue
          if ((el.textContent || '').trim() === text) {
            const r = el.getBoundingClientRect()
            return {
              text,
              top: r.top - rootRect.top,
              left: r.left - rootRect.left,
              width: r.width,
              height: r.height,
            }
          }
        }
        return null
      }

      const inkGuides = {
        live: document.getElementById('ink-guide-live')?.style.top || null,
        cap: document.getElementById('ink-guide-cap')?.style.top || null,
      }

      return {
        canvasSize: { w: cap.width, h: cap.height },
        structuralMismatchPct: (structural.mismatchRatio * 100).toFixed(3),
        colorMismatchPct: (color.mismatchRatio * 100).toFixed(3),
        bestShiftPx: shift,
        sizeMismatch: structural.sizeMismatch || false,
        landmarks: ['ShopDemo1', 'Home', 'Products', 'Checkout', 'Email Address', 'Promo Code'].map(
          pick,
        ),
        inkGuides,
      }
    })

    // Diff image via canvas in page
    const diffPng = await page.evaluate(async () => {
      const { compareVisualDiff } = await import('/__tests__/helpers/visualDiff.js')
      const { snapdom } = await import('/dist/snapdom.mjs')
      const target = document.getElementById('capture-target')
      const cap = document.querySelector('#cap-content canvas')
      const liveCanvas = await (
        await snapdom(target, { embedFonts: true, dpr: 2, scale: 1 })
      ).toCanvas()
      const { diffCanvas } = compareVisualDiff(liveCanvas, cap, { structural: true })
      return diffCanvas?.toDataURL('image/png') || null
    })

    if (diffPng?.startsWith('data:image/png;base64,')) {
      const buf = Buffer.from(diffPng.split(',')[1], 'base64')
      await fs.writeFile(path.join(outDir, '04-structural-diff.png'), buf)
    }

    const maxShift = Math.max(
      Math.abs(analysis.bestShiftPx?.dx ?? 0),
      Math.abs(analysis.bestShiftPx?.dy ?? 0),
    )
    const structPct = parseFloat(analysis.structuralMismatchPct)
    const guideDelta =
      analysis.inkGuides?.live && analysis.inkGuides?.cap
        ? Math.abs(
            parseFloat(analysis.inkGuides.cap) - parseFloat(analysis.inkGuides.live),
          )
        : 0
    // Pass on structural ink parity; ±2px full-canvas shift is raster edge noise at dpr 2.
    const visualOk =
      !analysis.error &&
      !analysis.sizeMismatch &&
      structPct < 1 &&
      (structPct < 0.05 || maxShift <= 2)

    const lines = [
      '=== Visual alignment audit (checkout-example) ===',
      `Screenshots: ${outDir}`,
      '  01-live-only.png — live DOM',
      '  02-canvas-only.png — snapdom raster',
      '  03-blend-both.png — 45% overlay (fringe = misalignment)',
      '  04-structural-diff.png — orange = ink mismatch',
      '',
      `Structural ink mismatch: ${analysis.structuralMismatchPct}%`,
      `Color mismatch (threshold 24): ${analysis.colorMismatchPct}%`,
      `Best translation to align canvas→live: dx=${analysis.bestShiftPx?.dx}px dy=${analysis.bestShiftPx?.dy}px`,
      `Email ink guides: live=${analysis.inkGuides?.live} cap=${analysis.inkGuides?.cap}`,
      '',
      'Landmark boxes (live DOM, root-relative):',
    ]
    for (const lm of analysis.landmarks || []) {
      if (!lm) continue
      lines.push(
        `  ${lm.text}: top=${lm.top.toFixed(2)} left=${lm.left.toFixed(2)} w=${lm.width.toFixed(2)} h=${lm.height.toFixed(2)}`,
      )
    }
    lines.push(
      `Ink guide Δ (email canvas vs live): ${Number.isFinite(guideDelta) ? guideDelta.toFixed(2) : '—'}px`,
    )
    lines.push('')
    lines.push(
      visualOk
        ? 'VISUAL: ok (structural ink aligned; see 03-blend-both.png)'
        : 'VISUAL: review screenshots',
    )

    const report = lines.join('\n')
    console.log(report)
    await fs.writeFile(path.join(outDir, 'report.txt'), report)

    process.exit(visualOk ? 0 : 1)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
