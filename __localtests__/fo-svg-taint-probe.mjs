#!/usr/bin/env node
/**
 * Quick headed/headless probe: which raster URL + crossOrigin combos taint canvas?
 *
 *   SNAPDOM_LOCAL_PORT=9340 node __localtests__/fo-svg-taint-probe.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CAPTURE_SVG = path.join(__dirname, '.sandbox-edit/capture.svg')

function canRead(ctx, canvas) {
  try {
    ctx.getImageData(0, 0, Math.min(8, canvas.width), Math.min(8, canvas.height))
    return true
  } catch {
    return false
  }
}

async function rasterInPage(page, svgText, { mode, crossOrigin }) {
  return page.evaluate(
    async ({ svgText, mode, crossOrigin }) => {
      let url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
      let revoke = null
      if (mode === 'blob') {
        const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
        url = URL.createObjectURL(blob)
        revoke = () => URL.revokeObjectURL(url)
      }
      const img = new Image()
      img.loading = 'eager'
      img.decoding = 'sync'
      if (crossOrigin === 'anonymous') img.crossOrigin = 'anonymous'
      img.src = url
      await img.decode()
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(500 * 2))
      canvas.height = Math.max(1, Math.round(48 * 2))
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      let readable = false
      try {
        ctx.getImageData(0, 0, 4, 4)
        readable = true
      } catch {
        readable = false
      }
      revoke?.()
      return { readable, w: canvas.width, h: canvas.height, natW: img.naturalWidth }
    },
    { svgText, mode, crossOrigin },
  )
}

async function rasterLabToCanvasInPage(page, svgText, urlMode) {
  return page.evaluate(
    async ({ svgText, urlMode }) => {
      const { toCanvas } = await import('/__localtests__/fo-fix-toCanvas.js')
      let url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
      let revoke = null
      if (urlMode === 'blob') {
        const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
        url = URL.createObjectURL(blob)
        revoke = () => URL.revokeObjectURL(url)
      }
      try {
        const canvas = await toCanvas(url, {
          width: 500,
          height: 48,
          scale: 1,
          dpr: 2,
          meta: { w0: 500, h0: 48 },
        })
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        let readable = false
        try {
          ctx.getImageData(0, 0, 4, 4)
          readable = true
        } catch {
          readable = false
        }
        return { readable, w: canvas.width, h: canvas.height }
      } finally {
        revoke?.()
      }
    },
    { svgText, urlMode },
  )
}

async function main() {
  const svgText = fs.existsSync(CAPTURE_SVG)
    ? fs.readFileSync(CAPTURE_SVG, 'utf8')
    : '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20"><text y="16" font-size="16">Hi</text></svg>'

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.goto(`http://127.0.0.1:${port}/__localtests__/fo-svg-sandbox.html`, {
    waitUntil: 'load',
    timeout: 60_000,
  })

  const cases = [
    { label: 'plain-svg data no-cors', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20"><text y="16">x</text></svg>', mode: 'data', crossOrigin: 'none' },
    { label: 'plain-svg data cors', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20"><text y="16">x</text></svg>', mode: 'data', crossOrigin: 'anonymous' },
    { label: 'plain-svg blob no-cors', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20"><text y="16">x</text></svg>', mode: 'blob', crossOrigin: 'none' },
    { label: 'plain-svg blob cors', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="20"><text y="16">x</text></svg>', mode: 'blob', crossOrigin: 'anonymous' },
    { label: 'capture data no-cors', svg: svgText, mode: 'data', crossOrigin: 'none' },
    { label: 'capture data cors', svg: svgText, mode: 'data', crossOrigin: 'anonymous' },
    { label: 'capture blob no-cors', svg: svgText, mode: 'blob', crossOrigin: 'none' },
    { label: 'capture blob cors', svg: svgText, mode: 'blob', crossOrigin: 'anonymous' },
  ]

  console.log(`Probe page: http://127.0.0.1:${port} (svg length ${svgText.length})`)
  for (const c of cases) {
    const r = await rasterInPage(page, c.svg, { mode: c.mode, crossOrigin: c.crossOrigin })
    console.log(`${c.label}: readable=${r.readable} (${r.w}x${r.h}, nat=${r.natW})`)
  }
  const labBlob = await rasterLabToCanvasInPage(page, svgText, 'blob')
  console.log(`lab fo-fix-toCanvas(blob): readable=${labBlob.readable} (${labBlob.w}x${labBlob.h})`)
  const labData = await rasterLabToCanvasInPage(page, svgText, 'data')
  console.log(`lab fo-fix-toCanvas(data): readable=${labData.readable} (${labData.w}x${labData.h})`)

  const foProbe = await page.evaluate(async (svgText) => {
    const hasFo = /<foreignObject/i.test(svgText)
    const withoutFo = svgText.replace(/<foreignObject[\s\S]*?<\/foreignObject>/i, '<text y="20" font-size="16">no-fo</text>')
    const raster = async (text) => {
      const blob = new Blob([text], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const img = new Image()
      img.src = url
      await img.decode()
      const canvas = document.createElement('canvas')
      canvas.width = 200
      canvas.height = 60
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      let readable = false
      try {
        ctx.getImageData(0, 0, 1, 1)
        readable = true
      } catch {
        readable = false
      }
      URL.revokeObjectURL(url)
      return readable
    }
    return {
      hasFo,
      blobWithFo: await raster(svgText),
      blobWithoutFo: await raster(withoutFo),
    }
  }, svgText)
  console.log('FO blob probe:', foProbe)

  await browser.close()
  await new Promise((r) => server.close(r))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
