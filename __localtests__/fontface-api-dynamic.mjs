#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { LOCAL_HOST, resolveLocalPort } from './local-server-config.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ART_DIR = path.join(repoRoot, '__localtests__', '.artifacts', 'fontface-api-dynamic')

function assert(cond, msg) {
  if (!cond) throw new Error(msg)
}

function decodeDataUrlPng(dataUrl) {
  const m = /^data:image\/png;base64,(.+)$/.exec(dataUrl)
  assert(m, `Expected png data URL, got: ${String(dataUrl).slice(0, 40)}…`)
  return Buffer.from(m[1], 'base64')
}

function unwrapSvgMarkup(svgMaybeImgOrDataUrl) {
  if (typeof svgMaybeImgOrDataUrl !== 'string') return null
  svgMaybeImgOrDataUrl = svgMaybeImgOrDataUrl.trim()

  // Case 1: direct data:image/svg+xml URL
  if (/^data:image\/svg\+xml/i.test(svgMaybeImgOrDataUrl)) {
    const comma = svgMaybeImgOrDataUrl.indexOf(',')
    if (comma < 0) return null
    try {
      return decodeURIComponent(svgMaybeImgOrDataUrl.slice(comma + 1))
    } catch {
      return svgMaybeImgOrDataUrl.slice(comma + 1)
    }
  }

  // Case 2: serialized <img src="data:image/svg+xml,...">
  if (/^<img\b/i.test(svgMaybeImgOrDataUrl)) {
    const lower = svgMaybeImgOrDataUrl.toLowerCase()
    const idx = lower.indexOf('src=')
    if (idx < 0) {
      // Fallback: try to find the first data:image/svg+xml substring anywhere.
      const j = lower.indexOf('data:image/svg+xml')
      if (j < 0) return null
      const tail = svgMaybeImgOrDataUrl.slice(j)
      const q = tail[0] === '"' || tail[0] === "'" ? tail[0] : null
      const cut = q ? tail.indexOf(q, 1) : tail.search(/[\s>]/)
      const src = (cut > 0 ? tail.slice(0, cut) : tail).trim()
      return unwrapSvgMarkup(src)
    }
    let rest = svgMaybeImgOrDataUrl.slice(idx + 4).trimStart()
    let src = ''
    const q = rest[0]
    if (q === '"' || q === "'") {
      const end = rest.indexOf(q, 1)
      if (end < 0) return null
      src = rest.slice(1, end)
    } else {
      const m = /^[^\s>]+/.exec(rest)
      if (!m) return null
      src = m[0]
    }
    if (!/^data:image\/svg\+xml/i.test(src)) return null
    return unwrapSvgMarkup(src)
  }

  // Case 3: raw <svg ...>
  if (/^<svg\b/i.test(svgMaybeImgOrDataUrl)) return svgMaybeImgOrDataUrl

  return null
}

async function main() {
  await fs.mkdir(ART_DIR, { recursive: true })

  const basePort = resolveLocalPort()
  let server
  let port = null
  for (let i = 0; i < 20; i++) {
    const tryPort = basePort + i
    try {
      const started = await startLocalServer(repoRoot, tryPort)
      server = started.server
      port = started.port
      break
    } catch (e) {
      const msg = String(e?.message || e)
      if (msg.includes('port already in use')) continue
      throw e
    }
  }
  assert(port != null, `Failed to bind local server ports ${basePort}..${basePort + 19}`)

  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('console', (msg) => {
    const t = msg.type()
    const text = msg.text()
    if (t === 'error') console.error('[page:console:error]', text)
    else if (t === 'warning') console.warn('[page:console:warn]', text)
    else console.log(`[page:console:${t}]`, text)
  })
  page.on('pageerror', (err) => {
    console.error('[pageerror]', err?.message || String(err))
  })
  page.on('response', (res) => {
    const status = res.status()
    if (status >= 400) {
      console.error('[page:response]', status, res.url())
    }
  })

  try {
    const url = `http://${LOCAL_HOST}:${port}/__localtests__/fontface-api-dynamic.html`
    await page.goto(url, { waitUntil: 'load' })

    // Ensure our helper API is ready.
    try {
      await page.waitForFunction(() => Boolean(window.__fontfaceDemo), null, { timeout: 30_000 })
    } catch (e) {
      const diag = await page
        .evaluate(() => {
          return {
            readyState: document.readyState,
            statusText: document.getElementById('status')?.textContent || '',
          }
        })
        .catch(() => null)
      throw new Error(`Timed out waiting for window.__fontfaceDemo. diag=${JSON.stringify(diag)}`)
    }

    const before = await page.evaluate(() => window.__fontfaceDemo.metrics())
    console.log('[before]', before)

    await page.evaluate(() => window.__fontfaceDemo.loadFont())

    const after = await page.evaluate(() => window.__fontfaceDemo.metrics())
    console.log('[after]', after)

    if (before.dynCheck === true) {
      console.log(
        '[note] document.fonts.check() was already true before load (likely cached from a prior run).',
      )
    }
    assert(after.dynCheck === true, 'Expected document.fonts.check() to be true after FontFace load.')

    const [svg, pngDataUrl] = await page.evaluate(async () => {
      const svg = await window.__fontfaceDemo.captureSvg()
      const png = await window.__fontfaceDemo.capturePng()
      return [svg, png]
    })

    console.log('[svg]', { type: typeof svg, len: typeof svg === 'string' ? svg.length : null })
    if (typeof svg === 'string') console.log('[svg:head]', svg.slice(0, 120))
    assert(typeof svg === 'string' && svg.length > 200, 'Expected toSvg() to return a non-trivial SVG string.')
    const svgMarkup = unwrapSvgMarkup(svg)
    const svgOut = svgMarkup || svg

    const svgPath = path.join(ART_DIR, 'capture.svg')
    const pngPath = path.join(ART_DIR, 'capture.png')
    await Promise.all([
      fs.writeFile(svgPath, svgOut, 'utf8'),
      fs.writeFile(pngPath, decodeDataUrlPng(pngDataUrl)),
    ])

    console.log(`[ok] wrote ${path.relative(repoRoot, svgPath)}`)
    console.log(`[ok] wrote ${path.relative(repoRoot, pngPath)}`)

    // Assertions after artifacts exist (useful even when failing).
    assert(svgMarkup, 'Expected toSvg() to return <svg> markup or a data:image/svg+xml URL.')
    assert(
      svgMarkup.includes('SnapdomDynFont') || svgMarkup.includes('snapdomdynfont'),
      'Expected exported SVG to reference the dynamic font family name.',
    )
    assert(
      /data:font\/|data:application\/font|data:application\/octet-stream/.test(svgMarkup),
      'Expected embedFonts SVG markup to include a data: URL for the font.',
    )
  } finally {
    await browser.close().catch(() => {})
    server?.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

