#!/usr/bin/env node
/**
 * Product path trace: capture meta → toCanvas default fo-y-half-leading-meta fork.
 * Checkout Home @ dpr=2 (bounce-check parity). Does not edit bounce-check.mjs.
 *
 *   npm run compile && node __localtests__/fo-product-patch-trace.mjs
 */
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  applyRasterOnlySvgPatch,
  defaultRasterSvgPatchFromMeta,
  resolveRasterSvgPatchId,
} from '../src/exporters/rasterOnlySvgPatch.js'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

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

function decodeSvgDataUrl(url) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (!url.startsWith(prefix)) return null
  return decodeURIComponent(url.slice(prefix.length))
}

function firstFoY(svg) {
  const m = svg.match(/<foreignObject[^>]*\by=["']([^"']+)["']/i)
  return m ? parseFloat(m[1]) : null
}

async function main() {
  const { server, port } = await startServer()
  let browser
  try {
    try {
      browser = await chromium.launch({ channel: 'chrome', headless: false })
    } catch {
      browser = await chromium.launch({ headless: false })
    }
    const page = await browser.newPage({
      viewport: { width: 1300, height: 900 },
      deviceScaleFactor: 2,
    })
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })
    await page.evaluate(async () => {
      await document.fonts?.ready
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    })

    const trace = await page.evaluate(async () => {
      await document.fonts?.ready
      const target = document.querySelector('#capture-target')
      const findHome = () => {
        for (const el of target.querySelectorAll('*')) {
          if (el.childElementCount > 0) continue
          if ((el.textContent || '').trim() === 'Home') return el
        }
        return null
      }
      const home = findHome()
      const liveCap = home
        ? (() => {
            const cs = getComputedStyle(home)
            const box = home.getBoundingClientRect()
            const fs = parseFloat(cs.fontSize) || 16
            let lh = parseFloat(cs.lineHeight)
            if (!Number.isFinite(lh) || lh <= 0) lh = fs * 1.35
            const c = document.createElement('canvas')
            const ctx = c.getContext('2d')
            ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${fs}px ${cs.fontFamily}`
            const m = ctx.measureText((home.textContent || '').trim() || 'Mg')
            const ascent =
              m.fontBoundingBoxAscent ?? m.actualBoundingBoxAscent
            const descent =
              m.fontBoundingBoxDescent ?? m.actualBoundingBoxDescent
            const fontH = (m.fontBoundingBoxAscent != null
              ? m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
              : ascent + descent) || fs
            const half = Math.max(0, (lh - fontH) / 2)
            const pad = parseFloat(cs.paddingTop) || 0
            const capTop =
              pad + half + ascent - (m.actualBoundingBoxAscent || ascent)
            const range = document.createRange()
            range.selectNodeContents(home)
            let rt = Infinity
            for (const rc of range.getClientRects()) rt = Math.min(rt, rc.top)
            const rangeTop = rt - box.top
            return { capTop, rangeTop, offset: rangeTop - capTop, lh, fs, half }
          })()
        : null

      const snap = await window.snapdom(target, {
        embedFonts: true,
        dpr: window.devicePixelRatio || 2,
        scale: 1,
        cache: 'disabled',
      })
      const meta = snap.meta
      const url = snap.toRaw()
      const canvas = await snap.toCanvas()
      return {
        meta,
        metaKeys: meta && typeof meta === 'object' ? Object.keys(meta) : [],
        url,
        canvasW: canvas.width,
        liveCap,
      }
    })

    const svg = decodeSvgDataUrl(trace.url ?? '')
    const meta = trace.meta ?? {}
    const patchId = resolveRasterSvgPatchId(undefined, meta)
    const forked = patchId
      ? applyRasterOnlySvgPatch(svg ?? '', patchId, { meta })
      : null

    const out = {
      liveHome: trace.liveCap,
      meta: {
        lhStrutHalfLeadingPx: meta.lhStrutHalfLeadingPx ?? null,
        lhStrutLineHeightPx: meta.lhStrutLineHeightPx ?? null,
        lhStrutFontSizePx: meta.lhStrutFontSizePx ?? null,
        lhStrutRangeSubpixelPx: meta.lhStrutRangeSubpixelPx ?? null,
        inkTopOffsetFromFoTop: meta.inkTopOffsetFromFoTop ?? null,
      },
      resolveRasterSvgPatchId: patchId,
      foY: { captureSvg: firstFoY(svg ?? ''), forkedSvg: firstFoY(forked ?? '') },
      canvasBacking: trace.canvasW,
    }
    console.log(JSON.stringify(out, null, 2))

    if (!patchId) {
      console.error('FAIL: no default raster patch from capture meta')
      process.exit(1)
    }
    if (out.foY.captureSvg === out.foY.forkedSvg) {
      console.error('FAIL: FO y unchanged after fork — patch did not apply to SVG bytes')
      process.exit(1)
    }
    console.log('OK: product meta resolves patch and shifts FO y before decode')
  } finally {
    await browser?.close?.()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
