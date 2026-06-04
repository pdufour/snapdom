#!/usr/bin/env node
/**
 * Headed Chromium-only FO→bitmap probe — no snapdom compile step.
 *
 *   npm run debug:chromium-fo-only
 *   node __localtests__/chromium-fo-only-probe.mjs --dpr 1
 *
 * Writes .sandbox-edit/chromium-fo-only-probe.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'chromium-fo-only-probe.json')

const PAGES = [
  {
    id: 'minimal-nav-fo-raster',
    path: '/__localtests__/chromium-fo-only/minimal-nav-fo-raster.html',
    primary: true,
  },
  {
    id: 'minimal-typography-no-flex',
    path: '/__localtests__/chromium-fo-only/minimal-typography-no-flex.html',
  },
  {
    id: 'minimal-nav-fo-y-nudge',
    path: '/__localtests__/chromium-fo-only/minimal-nav-fo-y-nudge.html',
  },
  {
    id: 'minimal-nav-fo',
    path: '/__localtests__/chromium-fo-only/minimal-nav-fo.html',
    svgOnly: true,
  },
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const bitmapArg = args.includes('--bitmap')

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function printSummary(payload) {
  console.log('\n--- Chromium-only FO probe (no snapdom) ---\n')
  console.log(`Overall: ${payload.overallVerdict ?? '—'} · dpr=${payload.dpr}\n`)
  console.log(
    'page'.padEnd(28) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'verdict'.padStart(14),
  )
  for (const row of payload.pages ?? []) {
    const t = row.threeWay ?? row.variants?.find((v) => v.id === 'baseline')?.threeWay ?? {}
    console.log(
      String(row.pageId).padEnd(28) +
        fmt(t.liveVsSvgTopPx).padStart(8) +
        fmt(t.liveVsCanvasTopPx).padStart(9) +
        String(row.verdict ?? row.variants?.[0]?.verdict ?? '—').padStart(14),
    )
  }
  if (payload.primary?.threeWay) {
    const t = payload.primary.threeWay
    console.log(
      `\nPrimary (minimal-nav-fo-raster): canvasΔ=${fmt(t.liveVsCanvasTopPx)} px · svgΔ=${fmt(t.liveVsSvgTopPx)} px`,
    )
    console.log(
      payload.primary.bitmapOnly
        ? 'BITMAP_ONLY at Chromium layer — engine FO→bitmap, not library serialization.'
        : 'Did not reproduce BITMAP_ONLY — check headed Chrome.',
    )
  }
  console.log('')
}

async function probePage(page, port, spec, dpr) {
  const qs = new URLSearchParams({ dpr: String(dpr), autorun: '1' })
  if (bitmapArg) qs.set('bitmap', '1')
  const url = `http://127.0.0.1:${port}${spec.path}?${qs}`
  console.log(`  ${spec.id}: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__chromiumFoOnlyProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__chromiumFoOnlyProbe?.bootError)
  if (bootErr) return { pageId: spec.id, error: bootErr }

  const raw = await page.evaluate(async () => {
    const r = await window.__chromiumFoOnlyProbe.run()
    return JSON.parse(JSON.stringify(r))
  })

  if (spec.svgOnly) {
    return {
      pageId: spec.id,
      svgOnly: true,
      threeWay: raw.threeWay ?? null,
      note: raw.note,
    }
  }

  if (raw.variants) {
    return {
      pageId: spec.id,
      halfLeadingPx: raw.halfLeadingPx,
      variants: raw.variants,
      baseline: raw.variants?.find((v) => v.id === 'baseline'),
      nudge: raw.variants?.find((v) => v.id === 'fo-y-half-leading'),
    }
  }

  return {
    pageId: spec.id,
    landmark: raw.landmark,
    dpr: raw.dpr,
    fixtureDims: raw.fixtureDims,
    rasterPath: raw.rasterPath,
    svgBytes: raw.svgBytes,
    threeWay: raw.threeWay,
    verdict: raw.verdict,
    bitmapOnly: raw.bitmapOnly,
  }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  try {
    /** @type {Record<string, unknown>[]} */
    const pageRows = []
    for (const spec of PAGES) {
      pageRows.push(await probePage(page, port, spec, dprArg))
    }

    const primary = pageRows.find((r) => r.pageId === 'minimal-nav-fo-raster')
    const allBitmapOnly = primary?.bitmapOnly === true
    const nudge = pageRows.find((r) => r.pageId === 'minimal-nav-fo-y-nudge')

    const payload = {
      purpose:
        'Isolate Chromium FO→bitmap with zero snapdom/capture — prove BITMAP_ONLY before library fixes.',
      generatedAt: new Date().toISOString(),
      dpr: dprArg,
      rasterPath: primary?.rasterPath ?? 'image-decode',
      usesSnapdom: false,
      usesCaptureJs: false,
      overallVerdict: allBitmapOnly ? 'BITMAP_ONLY' : 'CHECK_HEADED_CHROME',
      bitmapOnlyCriteria: '|liveVsSvgTopPx| < 0.35 and |liveVsCanvasTopPx| > 1.5',
      primary,
      w7Nudge: nudge
        ? {
            halfLeadingPx: nudge.halfLeadingPx,
            baselineCanvasDelta: nudge.baseline?.threeWay?.liveVsCanvasTopPx,
            nudgeCanvasDelta: nudge.nudge?.threeWay?.liveVsCanvasTopPx,
          }
        : null,
      pages: pageRows,
      commands: ['npm run debug:chromium-fo-only', 'node __localtests__/chromium-fo-only-probe.mjs --dpr 1'],
      contrastWithSnapdom: 'npm run debug:fo-minimal-repro',
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printSummary(payload)

    if (!allBitmapOnly) {
      console.warn('Expected BITMAP_ONLY on minimal-nav-fo-raster at headed dpr=1')
      process.exitCode = 1
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
