#!/usr/bin/env node
/**
 * FO SVG sandbox — headed Chrome + IDE file edit loop for capture SVG raster preview.
 *
 *   npm run debug:fo-svg-sandbox
 *   node __localtests__/fo-svg-sandbox.mjs --keep-open
 *   node __localtests__/fo-svg-sandbox.mjs --fixture checkout --autoCapture
 *   node __localtests__/fo-svg-sandbox.mjs --probe-translate-z
 *   node __localtests__/fo-svg-sandbox.mjs --probe-mini-display
 *
 * Local server: http://127.0.0.1:8765 (override: SNAPDOM_LOCAL_PORT).
 */
import path from 'node:path'
import {
  launchHeadedChrome,
  SANDBOX_CAPTURE_SVG_REL,
  SANDBOX_SVG_API,
  startLocalServer,
} from './local-http-server.mjs'

const args = process.argv.slice(2)
const fixtureArg = args.includes('--fixture') ? args[args.indexOf('--fixture') + 1] : null
const autoCapture = args.includes('--autoCapture') || args.includes('--auto-capture')
const headless = process.env.HEADLESS === '1'
const probeTranslateZ =
  args.includes('--probe-translate-z') || args.includes('--probe-blank-fo-translate-z')
const probeMiniDisplay =
  args.includes('--probe-mini-display') || args.includes('--probe-mini')
const probeMode = probeTranslateZ || probeMiniDisplay
const keepOpen =
  args.includes('--keep-open') ||
  args.includes('--keepOpen') ||
  (!probeMode && !args.includes('--no-keep-open'))

function waitForBrowserCloseOrInterrupt(browser) {
  return new Promise((resolve) => {
    const done = () => {
      browser.off('disconnected', onDisconnect)
      process.off('SIGINT', onSigint)
      process.off('SIGTERM', onSigterm)
      resolve()
    }
    const onDisconnect = () => done()
    const onSigint = () => done()
    const onSigterm = () => done()
    if (!browser.isConnected()) return resolve()
    browser.on('disconnected', onDisconnect)
    process.once('SIGINT', onSigint)
    process.once('SIGTERM', onSigterm)
  })
}

function buildSandboxUrl(port, root, extra = {}) {
  const qs = new URLSearchParams()
  if (fixtureArg === 'checkout') qs.set('fixture', 'checkout')
  if (autoCapture) qs.set('autoCapture', '1')
  qs.set('svgApi', SANDBOX_SVG_API)
  qs.set('capturePath', SANDBOX_CAPTURE_SVG_REL)
  qs.set('captureAbsPath', path.join(root, SANDBOX_CAPTURE_SVG_REL))
  for (const [k, v] of Object.entries(extra)) {
    if (v != null) qs.set(k, String(v))
  }
  return `http://127.0.0.1:${port}/__localtests__/fo-svg-sandbox.html?${qs}`
}

async function main() {
  const { server, port, root } = await startLocalServer()
  const url = buildSandboxUrl(port, root)

  console.log(`FO SVG sandbox: ${url}`)
  console.log(`Capture file: ${SANDBOX_CAPTURE_SVG_REL}`)
  console.log(`Watch API: http://127.0.0.1:${port}${SANDBOX_SVG_API}`)
  if (headless) {
    console.warn('HEADLESS=1 — FO ink preview may be unreliable; use headed Chrome for parity work.')
  } else {
    console.log('Headed Chrome (close the window or Ctrl+C to exit).')
  }

  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.error('[page]', msg.text())
  })

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foSvgSandbox?.ready === true, null, {
      timeout: 60_000,
    })
    const bootErr = await page.evaluate(() => window.__foSvgSandbox?.bootError)
    if (bootErr) {
      console.error('Sandbox boot error:', bootErr)
      process.exitCode = 1
    } else {
      console.log(
        `Sandbox ready — Capture writes ${SANDBOX_CAPTURE_SVG_REL}; edit in IDE and save to reload canvas.`,
      )
    }

    if (probeMiniDisplay) {
      const probeUrl = buildSandboxUrl(port, root, { autoCapture: '1' })
      await page.goto(probeUrl, { waitUntil: 'load', timeout: 60_000 })
      await page.waitForFunction(() => window.__foSvgSandbox?.ready === true, null, {
        timeout: 60_000,
      })
      await page.waitForFunction(
        () => /Live top:\s*[\d.]+/.test(document.getElementById('metrics-strip')?.textContent || ''),
        null,
        { timeout: 90_000 },
      )
      const report = await page.evaluate(() => {
        const target = document.getElementById('capture-target')
        const liveRoot = document.getElementById('live-fixture-root')
        const canvasWrap = document.getElementById('canvas-wrap')
        const tr = target?.getBoundingClientRect()
        const lr = liveRoot?.getBoundingClientRect()
        const metrics = document.getElementById('metrics-strip')?.textContent || ''
        const liveTop = Number(metrics.match(/Live top:\s*([\d.]+)/)?.[1])
        const canvasVisible = !document.getElementById('preview-canvas')?.hidden
        const sb = window.__foSvgSandbox
        return {
          metrics,
          fixture: tr ? { w: tr.width, h: tr.height } : null,
          liveRootH: lr?.height ?? 0,
          liveTop,
          canvasVisible,
          canvasWrapChildCount: canvasWrap?.childElementCount ?? 0,
          loadedSvgLength: sb?.loadedSvgLength ?? 0,
          lastMtime: sb?.lastMtime ?? null,
          captureFilePath: sb?.captureFilePath ?? null,
        }
      })
      console.log('\n--- mini display + metrics probe ---')
      console.log(JSON.stringify(report, null, 2))
      const fw = report.fixture?.w ?? 0
      const fh = report.fixture?.h ?? 0
      const liveOk = report.liveRootH >= 48 && fw > 0 && fh >= 40
      const captureOk = report.loadedSvgLength > 100 && report.lastMtime != null
      const metricsOk =
        Number.isFinite(report.liveTop) && report.liveTop > 8 && report.liveTop < 28
      console.log(
        liveOk
          ? 'Live fixture visible in #live-fixture-root.'
          : 'FAIL: live fixture box too small or missing.',
      )
      console.log(
        captureOk
          ? `Capture file loaded (${report.loadedSvgLength} chars, mtime ${report.lastMtime}).`
          : 'FAIL: capture SVG not written or loaded.',
      )
      console.log(
        metricsOk
          ? `Live top ${report.liveTop}px is in expected mini-nav band (8–28px).`
          : `FAIL: Live top ${report.liveTop}px outside 8–28px.`,
      )
      if (!liveOk || !captureOk || !metricsOk) process.exitCode = 1
    }

    if (probeTranslateZ) {
      const probeUrl = buildSandboxUrl(port, root, {
        autoCapture: '1',
        recipe: 'fo-translate-z-0',
      })
      await page.goto(probeUrl, { waitUntil: 'load', timeout: 60_000 })
      await page.waitForFunction(() => window.__foSvgSandbox?.ready === true, null, {
        timeout: 60_000,
      })
      await page.waitForFunction(() => window.__foSvgSandbox?.lastDiagnosis != null, null, {
        timeout: 90_000,
      })
      const report = await page.evaluate(() => {
        const d = window.__foSvgSandbox?.lastDiagnosis
        const status = document.getElementById('raster-status')?.textContent
        const metrics = document.getElementById('metrics-strip')?.textContent
        return { diagnosis: d, rasterStatus: status, metrics }
      })
      console.log('\n--- fo-translate-z-0 + decode-interval probe (mini) ---')
      console.log(JSON.stringify(report, null, 2))
      const blank = report.diagnosis?.rasterDiag?.blank === true
      console.log(
        blank
          ? 'Result: blank raster expected for fo-translate-z-0.'
          : 'Result: raster had pixels (environment may differ).',
      )
      if (blank) process.exitCode = 0
    }

    if (keepOpen && !headless && !probeTranslateZ && !probeMiniDisplay) {
      await waitForBrowserCloseOrInterrupt(browser)
    }
  } finally {
    if (!keepOpen || headless) await browser.close().catch(() => {})
    await new Promise((r) => server.close(r))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
