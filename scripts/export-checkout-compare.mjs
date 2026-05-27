#!/usr/bin/env node
/**
 * Writes checkout-capture.svg, checkout-compare.html, and pixel diff PNGs.
 *
 *   npm run compile
 *   node scripts/export-checkout-compare.mjs
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(REPO, '__localtests__')
const SVG_OUT = path.join(OUT_DIR, 'checkout-capture.svg')
const HTML_OUT = path.join(OUT_DIR, 'checkout-compare.html')
const DIFF_OUT = path.join(OUT_DIR, 'checkout-visual-diff.png')
const HOST = '127.0.0.1'
const PORT = Number(process.env.PORT) || 5175

function startServer() {
  const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
  }
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const rel = decodeURIComponent((req.url ?? '/').split('?')[0])
      const file = rel === '/' ? '/__localtests__/checkout-example.html' : rel
      const abs = path.join(REPO, path.normalize(file))
      if (!abs.startsWith(REPO)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }
      fs.stat(abs, (err, st) => {
        if (err || !st.isFile()) {
          res.writeHead(404)
          res.end('Not found')
          return
        }
        res.writeHead(200, {
          'Content-Type': MIME[path.extname(abs)] ?? 'application/octet-stream',
          'Cache-Control': 'no-store',
        })
        fs.createReadStream(abs).pipe(res)
      })
    })
    server.listen(PORT, HOST, () => resolve(server))
  })
}

async function main() {
  const server = await startServer()
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 520, height: 700 },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()

  try {
    await page.goto(`http://${HOST}:${PORT}/__localtests__/checkout-example.html`, {
      waitUntil: 'networkidle',
    })

    const livePng = await page.locator('#capture-target').screenshot({ type: 'png' })
    const liveB64 = livePng.toString('base64')

    const { svg, html, diffPng, mismatchRatio } = await page.evaluate(async (liveB64Arg) => {
      const { snapdom } = await import('/dist/snapdom.mjs')
      const {
        buildCompareHtml,
        svgFromDataUrl,
        parseSvgSize,
        collectPageStyles,
      } = await import('/__localtests__/checkout-export-utils.js')
      const {
        alignCanvasPair,
        compareVisualDiff,
        dataUrlToCanvas,
      } = await import('/__localtests__/visual-diff.js')

      const target = document.getElementById('capture-target')
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const opts = { embedFonts: true, dpr, scale: 1, debug: false }
      const dataUrl = await snapdom.toRaw(target, opts)
      const svgMarkup = svgFromDataUrl(dataUrl)
      const size = parseSvgSize(svgMarkup)

      const capCanvas = await snapdom.toCanvas(target, opts)
      let liveCanvas = await dataUrlToCanvas(`data:image/png;base64,${liveB64Arg}`)
      let cap = capCanvas
      let sizeMismatch = liveCanvas.width !== cap.width || liveCanvas.height !== cap.height
      if (sizeMismatch) {
        const aligned = alignCanvasPair(liveCanvas, cap)
        liveCanvas = aligned.a
        cap = aligned.b
      }

      const {
        diffCanvas,
        mismatchedPixels,
        totalPixels,
        mismatchRatio,
      } = compareVisualDiff(liveCanvas, cap)

      const visual = {
        livePng: liveCanvas.toDataURL('image/png'),
        capturePng: cap.toDataURL('image/png'),
        diffPng: diffCanvas.toDataURL('image/png'),
        mismatchedPixels,
        totalPixels,
        mismatchRatio,
        sizeMismatch,
      }

      const html = buildCompareHtml({
        svgMarkup,
        target,
        pageStyles: collectPageStyles(),
        meta: {
          width: size.width,
          height: size.height,
          capturedAt: new Date().toISOString(),
        },
        visual,
      })

      return {
        svg: svgMarkup,
        html,
        diffPng: visual.diffPng,
        mismatchRatio,
      }
    }, liveB64)

    const diffBase64 = diffPng.replace(/^data:image\/png;base64,/, '')
    fs.writeFileSync(SVG_OUT, svg, 'utf8')
    fs.writeFileSync(HTML_OUT, html, 'utf8')
    fs.writeFileSync(DIFF_OUT, Buffer.from(diffBase64, 'base64'))

    const pct = (mismatchRatio * 100).toFixed(2)
    console.log(`Wrote ${SVG_OUT}`)
    console.log(`Wrote ${HTML_OUT}`)
    console.log(`Wrote ${DIFF_OUT}`)
    console.log(`Visual mismatch: ${pct}% of pixels`)
  } finally {
    await context.close()
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
