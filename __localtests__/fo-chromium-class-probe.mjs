#!/usr/bin/env node
/**
 * Chromium FO class probe — hand-built FO vs snapdom vs modern-screenshot;
 * optional Chrome vs Chromium channel compare; CSS/DOM factor spread.
 *
 *   npm run debug:fo-chromium-class-probe
 *   node __localtests__/fo-chromium-class-probe.mjs --channels chrome,chromium
 *   node __localtests__/fo-chromium-class-probe.mjs --json .sandbox-edit/chromium-fo-class-probe.json
 *
 * Headed only (FO→canvas ink).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'chromium-fo-class-probe.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprsArg = args.includes('--dprs') ? args[args.indexOf('--dprs') + 1] : '1,2'
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const skipMs = args.includes('--no-modern-screenshot')
const channelsArg = args.includes('--channels')
  ? args[args.indexOf('--channels') + 1]
  : 'chrome'

function printReport(payload) {
  console.log('\n--- Chromium FO class probe ---\n')
  console.log(`Verdict: ${payload.synthesis?.verdict ?? '—'}`)
  console.log(
    `Plateau @ dpr=1: canvasΔ≈${payload.synthesis?.plateauPxAtDpr1 ?? '—'}px · half-leading≈${payload.synthesis?.halfLeadingCorrelatePx ?? '—'}px · residual≈${payload.synthesis?.residualCanvasMinusHalfLeadingPx ?? '—'}px`,
  )
  if (payload.channelCompare?.length) {
    console.log('\nChannel compare @ dpr=1 (hand-built canvasΔ):')
    for (const row of payload.channelCompare) {
      console.log(`  ${String(row.channel).padEnd(10)} ${row.canvasDeltaPx ?? '—'}px  ${row.userAgent?.slice(0, 60) ?? ''}`)
    }
    console.log(`  spread: ${payload.channelCompareSpreadPx ?? '—'}px · ${payload.channelCompareVerdict ?? '—'}`)
  }
  if (payload.cssDomFactorsSummary) {
    console.log(
      `\nCSS/DOM factors (horizontal nav) spread @ dpr=1: ${payload.cssDomFactorsSummary.horizontalNavCanvasDeltaSpreadPx ?? '—'}px · ${payload.cssDomFactorsSummary.verdict ?? '—'}`,
    )
  }
  console.log(`snapdom ≈ hand-built: ${payload.synthesis?.snapdomMatchesHandBuilt ?? '—'}`)
  console.log(`modern-screenshot ≈ snapdom: ${payload.synthesis?.modernScreenshotMatchesSnapdom ?? '—'}`)
  console.log(`w7 closes gap @ dpr=1: ${payload.synthesis?.w7ClosesMostGap ?? '—'}`)
  console.log('\nBy path (primary channel, dpr=1):')
  const d1 = payload.byDpr?.find((x) => x.dpr === 1) || payload.byDpr?.[0]
  for (const row of d1?.rows ?? []) {
    console.log(
      `  ${String(row.path).padEnd(36)} canvasΔ=${row.liveVsCanvasTopPx ?? '—'} svgΔ=${row.liveVsSvgTopPx ?? '—'}`,
    )
  }
  console.log('')
}

/**
 * @param {import('playwright').Browser} browser
 * @param {number} port
 * @param {URLSearchParams} qs
 */
async function runProbeInBrowser(browser, port, qs) {
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 420 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))
  const url = `http://127.0.0.1:${port}/__localtests__/fo-chromium-class-probe.html?${qs}`
  console.log(`Page: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foChromiumClassProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foChromiumClassProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed: ${bootErr}`)
  const payload = await page.evaluate(() => window.__foChromiumClassProbe.result)
  payload.userAgent = await page.evaluate(() => navigator.userAgent)
  await page.close()
  return payload
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const channels = channelsArg
    .split(',')
    .map((s) => s.trim())
    .filter((c) => c === 'chrome' || c === 'chromium')
  if (!channels.length) channels.push('chrome')

  const { server, port } = await startLocalServer()
  const qs = new URLSearchParams({
    dprs: dprsArg,
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  if (skipMs) qs.set('modernScreenshot', '0')

  /** @type {Record<string, unknown>[]} */
  const channelRuns = []
  let primaryPayload = null

  try {
    for (const channel of channels) {
      console.log(`\n=== channel: ${channel} ===`)
      const browser = await launchHeadedChrome([], { channel })
      try {
        const payload = await runProbeInBrowser(browser, port, qs)
        payload.browserChannel = channel
        channelRuns.push(payload)
        if (!primaryPayload) primaryPayload = payload
      } finally {
        await browser.close()
      }
    }

    const channelCompare = channelRuns.map((p) => {
      const d1 = p.byDpr?.find((x) => x.dpr === 1) || p.byDpr?.[0]
      const hand = d1?.rows?.find((r) => r.path === 'hand-built-static')
      return {
        channel: p.browserChannel,
        userAgent: p.userAgent,
        canvasDeltaPx: hand?.liveVsCanvasTopPx ?? null,
        svgDeltaPx: hand?.liveVsSvgTopPx ?? null,
      }
    })
    const deltas = channelCompare.map((r) => r.canvasDeltaPx).filter(Number.isFinite)
    const channelCompareSpreadPx =
      deltas.length > 1 ? Math.round((Math.max(...deltas) - Math.min(...deltas)) * 1000) / 1000 : 0

    const merged = {
      ...primaryPayload,
      channelsTested: channels,
      channelCompare,
      channelCompareSpreadPx,
      channelCompareVerdict:
        deltas.length < 2
          ? 'SINGLE_CHANNEL'
          : channelCompareSpreadPx < 0.08
            ? 'CHROME_CHROMIUM_SAME_CLASS'
            : 'CHANNEL_DIVERGENCE',
      channelRuns: channels.length > 1 ? channelRuns : undefined,
    }

    const outDir = path.join(REPO_ROOT, '.sandbox-edit')
    await fs.promises.mkdir(outDir, { recursive: true })
    const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(fullPath, `${JSON.stringify(merged, null, 2)}\n`)
    console.log(`Wrote ${fullPath}`)

    printReport(merged)
  } finally {
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
