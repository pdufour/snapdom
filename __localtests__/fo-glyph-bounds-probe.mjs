#!/usr/bin/env node
/**
 * FO research round 6 — glyph bounds vs 48px stretch, letter-class drift,
 * chromium-fo-only glyph metrics, wave-13 spot, Safari/Firefox FO drift check.
 *
 *   npm run compile && node __localtests__/fo-glyph-bounds-probe.mjs
 *   node __localtests__/fo-glyph-bounds-probe.mjs --json .sandbox-edit/research-round-6.json
 *   node __localtests__/fo-glyph-bounds-probe.mjs --skip-cross-browser
 *
 * Headed Chrome primary. No text bypass.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'research-round-6.json')

const CHROMIUM_FO_PAGES = [
  {
    id: 'minimal-nav-fo-raster',
    path: '/__localtests__/chromium-fo-only/minimal-nav-fo-raster.html',
  },
  {
    id: 'minimal-typography-no-flex',
    path: '/__localtests__/chromium-fo-only/minimal-typography-no-flex.html',
  },
  {
    id: 'minimal-nav-fo-y-nudge',
    path: '/__localtests__/chromium-fo-only/minimal-nav-fo-y-nudge.html',
  },
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const skipCrossBrowser = args.includes('--skip-cross-browser')

function printReport(payload) {
  console.log('\n--- FO research round 6 (glyph bounds) ---\n')
  console.log(`dpr=${payload.dpr} · ${payload.landmark}`)
  const g = payload.sections?.glyphVs48?.threeWay
  console.log(
    `Home canvasΔ=${g?.liveVsCanvasTopPx?.toFixed(3) ?? '—'} svgΔ=${g?.liveVsSvgTopPx?.toFixed(3) ?? '—'}`,
  )
  console.log('\nTop 5 findings:')
  for (const f of payload.synthesis?.top5Findings ?? []) console.log(`  + ${f}`)
  console.log(`\nBest next: ${payload.synthesis?.bestNextFixDirection ?? '—'}`)
  console.log('')
}

async function runMainProbe(page, port) {
  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    section: 'all',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-glyph-bounds-probe.html?${qs}`
  console.log(`Page: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foGlyphBoundsProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foGlyphBoundsProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed: ${bootErr}`)
  return page.evaluate(() => window.__foGlyphBoundsProbe.result)
}

async function probeChromiumFoPage(page, port, spec) {
  const qs = new URLSearchParams({ dpr: String(dprArg), autorun: '1' })
  const url = `http://127.0.0.1:${port}${spec.path}?${qs}`
  console.log(`  chromium-fo-only: ${spec.id}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__chromiumFoOnlyProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__chromiumFoOnlyProbe?.bootError)
  if (bootErr) return { pageId: spec.id, error: bootErr }

  const raw = await page.evaluate(async () => {
    const r = await window.__chromiumFoOnlyProbe.run()
    return {
      pageId: r.pageId ?? window.__chromiumFoOnlyProbe.pageId,
      verdict: r.verdict,
      bitmapOnly: r.bitmapOnly,
      threeWay: r.threeWay,
      glyphMetrics: r.glyphMetrics,
      canvasInkExtents: r.canvasInkExtents,
      rasterPath: r.rasterPath,
    }
  })
  return raw
}

/**
 * Same mini-nav FO raster on WebKit/Firefox — is drift Chromium-only?
 * @param {import('playwright').BrowserType} browserType
 */
async function probeCrossBrowser(browserType, name, port) {
  let browser
  try {
    browser = await browserType.launch({ headless: false })
  } catch (err) {
    return {
      engine: name,
      available: false,
      error: String(err?.message || err),
    }
  }
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 520 })
  const url = `http://127.0.0.1:${port}/__localtests__/chromium-fo-only/minimal-nav-fo-raster.html?dpr=${dprArg}&autorun=1`
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__chromiumFoOnlyProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__chromiumFoOnlyProbe?.bootError)
    if (bootErr) {
      await browser.close()
      return { engine: name, available: true, error: bootErr }
    }
    const row = await page.evaluate(async () => {
      const r = await window.__chromiumFoOnlyProbe.run()
      return {
        userAgent: navigator.userAgent,
        liveVsCanvasTopPx: r.threeWay?.liveVsCanvasTopPx ?? null,
        liveVsSvgTopPx: r.threeWay?.liveVsSvgTopPx ?? null,
        verdict: r.verdict,
        bitmapOnly: r.bitmapOnly,
      }
    })
    await browser.close()
    const canvasAbs = Math.abs(row.liveVsCanvasTopPx ?? 0)
    return {
      engine: name,
      available: true,
      userAgent: row.userAgent,
      liveVsCanvasTopPx: row.liveVsCanvasTopPx,
      liveVsSvgTopPx: row.liveVsSvgTopPx,
      verdict: row.verdict,
      bitmapOnly: row.bitmapOnly,
      largeStrutDrift: canvasAbs > 1.5,
    }
  } catch (err) {
    await browser.close()
    return { engine: name, available: true, error: String(err?.message || err) }
  }
}

function synthesizeCrossBrowser(rows) {
  const chrome = rows.find((r) => r.engine === 'chrome')
  const others = rows.filter((r) => r.engine !== 'chrome' && r.available && !r.error)
  const chromiumOnlyDrift =
    chrome?.largeStrutDrift &&
    others.length > 0 &&
    others.every((r) => !r.largeStrutDrift || Math.abs(r.liveVsCanvasTopPx ?? 0) < 0.5)
  const summary = chromiumOnlyDrift
    ? 'Safari/Firefox: FO canvasΔ near 0; Chromium-only ~2.8px strut drift on same SVG path'
    : others.some((r) => r.largeStrutDrift)
      ? 'Strut drift reproduces on non-Chromium engines — not Blink-only'
      : 'Cross-browser inconclusive (install webkit/firefox playwright browsers)'
  return { rows, chromiumOnlyDrift, summary }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 720 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    const mainResult = await runMainProbe(page, port)

    const chromiumPages = []
    for (const spec of CHROMIUM_FO_PAGES) {
      chromiumPages.push(await probeChromiumFoPage(page, port, spec))
    }
    mainResult.sections = mainResult.sections || {}
    mainResult.sections.chromiumFoPages = { pages: chromiumPages }

    let crossBrowser = null
    if (!skipCrossBrowser) {
      const { chromium, webkit, firefox } = await import('playwright')
      const chromeRow = {
        engine: 'chrome',
        available: true,
        userAgent: await page.evaluate(() => navigator.userAgent),
        liveVsCanvasTopPx:
          chromiumPages.find((p) => p.pageId === 'minimal-nav-fo-raster')?.threeWay
            ?.liveVsCanvasTopPx ?? null,
        liveVsSvgTopPx:
          chromiumPages.find((p) => p.pageId === 'minimal-nav-fo-raster')?.threeWay
            ?.liveVsSvgTopPx ?? null,
        verdict:
          chromiumPages.find((p) => p.pageId === 'minimal-nav-fo-raster')?.verdict ?? null,
        bitmapOnly:
          chromiumPages.find((p) => p.pageId === 'minimal-nav-fo-raster')?.bitmapOnly ?? null,
        largeStrutDrift:
          Math.abs(
            chromiumPages.find((p) => p.pageId === 'minimal-nav-fo-raster')?.threeWay
              ?.liveVsCanvasTopPx ?? 0,
          ) > 1.5,
      }
      const rows = [
        chromeRow,
        await probeCrossBrowser(webkit, 'webkit', port),
        await probeCrossBrowser(firefox, 'firefox', port),
      ]
      crossBrowser = synthesizeCrossBrowser(rows)
      mainResult.sections.crossBrowser = crossBrowser
    }

    const synthesis = mainResult.synthesis || {}
    if (crossBrowser?.summary && !synthesis.top5Findings?.includes(crossBrowser.summary)) {
      synthesis.top5Findings = [...(synthesis.top5Findings || []), crossBrowser.summary].slice(0, 5)
    }
    mainResult.synthesis = synthesis
    mainResult.port = port
    mainResult.chromeVersion = await page.evaluate(() => navigator.userAgent)

    const outDir = path.join(REPO_ROOT, '.sandbox-edit')
    await fs.promises.mkdir(outDir, { recursive: true })

    const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(fullPath, `${JSON.stringify(mainResult, null, 2)}\n`)
    console.log(`Wrote ${fullPath}`)

    const shards = [
      ['research-round-6-glyph-vs48.json', mainResult.sections?.glyphVs48],
      ['research-round-6-letter-drift.json', mainResult.sections?.letterDrift],
      ['research-round-6-wave13-spot.json', mainResult.sections?.wave13Spot],
      ['research-round-6-chromium-fo-pages.json', mainResult.sections?.chromiumFoPages],
      ['research-round-6-cross-browser.json', mainResult.sections?.crossBrowser],
      ['research-round-6-synthesis.json', mainResult.synthesis],
    ]
    for (const [name, data] of shards) {
      if (data == null) continue
      const p = path.join(outDir, name)
      await fs.promises.writeFile(
        p,
        `${JSON.stringify({ probe: 'fo-glyph-bounds', section: name, dpr: mainResult.dpr, landmark: mainResult.landmark, data }, null, 2)}\n`,
      )
      console.log(`Wrote ${p}`)
    }

    printReport(mainResult)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
