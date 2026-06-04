#!/usr/bin/env node
/**
 * Mini nav line-height decouple: FO CSS inject only (21.6px vs 48px vs from-live on text leaf).
 * Three-way ink per landmark; product-baseline capture + product-toCanvas raster after inject.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=9929 node __localtests__/line-height-decouple.mjs
 *   node __localtests__/line-height-decouple.mjs --json __localtests__/.sandbox-edit/line-height-decouple.json
 *
 * Headed Chrome by default (FO→canvas ink). Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PORT = 9929
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'line-height-decouple.json')

const LH_VARIANTS = ['21.6px', '48px', 'from-live']

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarksArg = args.includes('--landmarks')
  ? args[args.indexOf('--landmarks') + 1].split(',').map((s) => s.trim()).filter(Boolean)
  : ['Home', 'Products']

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function interpret(payload) {
  /** @type {string[]} */
  const lines = []
  const byLh = new Map()
  for (const block of payload.variants) {
    for (const row of block.rows || []) {
      const key = row.landmark
      if (!byLh.has(key)) byLh.set(key, [])
      byLh.get(key).push(row)
    }
  }

  for (const [landmark, rows] of byLh) {
    const r216 = rows.find((r) => r.lhVariant === '21.6px')
    const r48 = rows.find((r) => r.lhVariant === '48px')
    const rLive = rows.find((r) => r.lhVariant === 'from-live')
    const c216 = r216?.threeWay?.liveVsCanvasTopPx ?? null
    const c48 = r48?.threeWay?.liveVsCanvasTopPx ?? null
    const cLive = rLive?.threeWay?.liveVsCanvasTopPx ?? null
    const s216 = r216?.threeWay?.liveVsSvgTopPx ?? null
    const s48 = r48?.threeWay?.liveVsSvgTopPx ?? null
    const sLive = rLive?.threeWay?.liveVsSvgTopPx ?? null

    lines.push(
      `${landmark}: canvasΔ lh21.6=${roundPx(c216) ?? '—'} svgΔ=${roundPx(s216) ?? '—'} | ` +
        `lh48 canvasΔ=${roundPx(c48) ?? '—'} svgΔ=${roundPx(s48) ?? '—'} | ` +
        `from-live canvasΔ=${roundPx(cLive) ?? '—'} svgΔ=${roundPx(sLive) ?? '—'}`,
    )

    const canvasSpread =
      [c216, c48, cLive].filter((v) => v != null).length >= 2
        ? Math.max(...[c216, c48, cLive].filter((v) => v != null)) -
          Math.min(...[c216, c48, cLive].filter((v) => v != null))
        : null
    if (canvasSpread != null && canvasSpread >= 0.05) {
      lines.push(
        `${landmark}: canvasΔ spread across lh variants = ${roundPx(canvasSpread)}px — FO lh inject moves raster ink.`,
      )
    } else if (canvasSpread != null) {
      lines.push(
        `${landmark}: canvasΔ unchanged (≤0.05px) across lh variants — raster drift not lh-sensitive.`,
      )
    }

    if (c216 != null && cLive != null && Math.abs(c216 - cLive) < 0.05) {
      lines.push(`${landmark}: 21.6px inject ≈ from-live (${rLive?.injectLineHeight}) for canvas ink.`)
    }
  }

  return { interpretation: lines }
}

function printTable(payload) {
  console.log('\n--- line-height decouple (FO CSS inject, product-toCanvas) ---\n')
  console.log(
    'lh'.padEnd(12) +
      'landmark'.padEnd(10) +
      'injectLh'.padStart(10) +
      'liveTop'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const block of payload.variants) {
    for (const row of block.rows || []) {
      const t = row.threeWay || {}
      console.log(
        String(row.lhVariant).padEnd(12) +
          String(row.landmark).padEnd(10) +
          String(row.injectLineHeight ?? '—').padStart(10) +
          (t.livePaintedTopInBorder?.toFixed(3) ?? '—').padStart(8) +
          (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
          (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9),
      )
    }
  }
  console.log('')
  for (const line of payload.comparison?.interpretation ?? []) {
    console.log(`  · ${line}`)
  }
  console.log('')
}

async function probeVariant(page, port, lh, { dpr, scale, landmarks }) {
  const qs = new URLSearchParams({
    lh,
    dpr: String(dpr),
    scale: String(scale),
    landmarks: landmarks.join(','),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/line-height-decouple.html?${qs}`
  console.log(`Page: ${url}`)

  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__lineHeightDecoupleProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__lineHeightDecoupleProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed (lh=${lh}): ${bootErr}`)
  return page.evaluate(async () => window.__lineHeightDecoupleProbe.run())
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    /** @type {Record<string, unknown>[]} */
    const variants = []
    for (const lh of LH_VARIANTS) {
      console.log(`\n=== lh variant: ${lh} ===`)
      const block = await probeVariant(page, port, lh, {
        dpr: dprArg,
        scale: scaleArg,
        landmarks: landmarksArg,
      })
      variants.push(block)
    }

    const payload = {
      fixture: 'line-height-decouple',
      probe: 'three-way',
      baseRecipe: 'product-baseline',
      rasterPatch: 'product-toCanvas',
      injectMode: 'fo-css-only',
      port,
      dpr: dprArg,
      scale: scaleArg,
      landmarks: landmarksArg,
      lhVariants: LH_VARIANTS,
      generatedAt: new Date().toISOString(),
      variants,
      comparison: interpret({ variants }),
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${outPath}`)

    printTable(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
