#!/usr/bin/env node
/**
 * Line-height sweep on mini Home text leaf — live vs FO vs canvas per lh value.
 *
 *   npm run compile && node __localtests__/fo-text-baseline-lh-matrix.mjs
 *   node __localtests__/fo-text-baseline-lh-matrix.mjs --json .sandbox-edit/line-height-sweep.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 9935
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'line-height-sweep.json')

const LH_VARIANTS = ['normal', '1', '1.2', '1.35', '21.6px', '48px', 'from-live']

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function pearsonR(xs, ys) {
  const pairs = []
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] == null || ys[i] == null || !Number.isFinite(xs[i]) || !Number.isFinite(ys[i])) continue
    pairs.push([xs[i], ys[i]])
  }
  if (pairs.length < 2) return null
  const n = pairs.length
  const mx = pairs.reduce((s, [x]) => s + x, 0) / n
  const my = pairs.reduce((s, [, y]) => s + y, 0) / n
  let num = 0
  let dx = 0
  let dy = 0
  for (const [x, y] of pairs) {
    num += (x - mx) * (y - my)
    dx += (x - mx) ** 2
    dy += (y - my) ** 2
  }
  const den = Math.sqrt(dx * dy)
  return den > 0 ? roundPx(num / den) : null
}

function olsSlope(xs, ys) {
  const pairs = []
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] == null || ys[i] == null || !Number.isFinite(xs[i]) || !Number.isFinite(ys[i])) continue
    pairs.push([xs[i], ys[i]])
  }
  if (pairs.length < 2) return null
  const n = pairs.length
  const mx = pairs.reduce((s, [x]) => s + x, 0) / n
  const my = pairs.reduce((s, [, y]) => s + y, 0) / n
  let num = 0
  let den = 0
  for (const [x, y] of pairs) {
    num += (x - mx) * (y - my)
    den += (x - mx) ** 2
  }
  return den > 0 ? roundPx(num / den) : null
}

/**
 * @param {Record<string, unknown>[]} rows
 */
function buildCorrelation(rows) {
  const halfLeading = rows.map((r) => r.halfLeadingStrutPx ?? null)
  const canvasDelta = rows.map((r) => r.liveVsCanvas ?? null)
  const svgDelta = rows.map((r) => r.liveVsSvg ?? null)
  const layoutBox = rows.map((r) => r.layoutLineBoxPx ?? null)

  const rCanvas = pearsonR(halfLeading, canvasDelta)
  const rSvg = pearsonR(halfLeading, svgDelta)
  const rLayout = pearsonR(layoutBox, canvasDelta)
  const slope = olsSlope(halfLeading, canvasDelta)

  const canvasSpread =
    canvasDelta.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...canvasDelta.filter((v) => v != null)) - Math.min(...canvasDelta.filter((v) => v != null)))
      : null

  /** @type {string[]} */
  const notes = []
  notes.push(
    `r(canvasΔ, halfLeadingStrut)=${rCanvas ?? '—'}; OLS slope=${slope ?? '—'}; canvasΔ spread=${canvasSpread ?? '—'}px.`,
  )
  if (rCanvas != null && Math.abs(rCanvas) >= 0.85) {
    notes.push('Strong correlation — canvas drift tracks (lh−fs)/2 across lh sweep.')
  } else if (rCanvas != null && Math.abs(rCanvas) >= 0.6) {
    notes.push('Partial correlation — canvas drift partially tracks half-leading strut.')
  } else if (canvasSpread != null && canvasSpread < 0.2) {
    notes.push('Canvas drift flat across lh variants — does not scale with half-leading strut.')
  } else if (rCanvas != null && Math.abs(rCanvas) < 0.35) {
    notes.push('Weak correlation — canvas drift does not track (lh−fs)/2.')
  }

  return {
    pearsonR: {
      canvasDelta_vs_halfLeadingStrut: { r: rCanvas, n: halfLeading.filter((v) => v != null).length },
      svgDelta_vs_halfLeadingStrut: { r: rSvg, n: halfLeading.filter((v) => v != null).length },
      canvasDelta_vs_layoutLineBoxPx: { r: rLayout, n: layoutBox.filter((v) => v != null).length },
    },
    olsSlope: {
      canvasDelta_on_halfLeadingStrut: slope,
    },
    canvasDeltaSpreadPx: canvasSpread,
    notes,
  }
}

function printTable(payload) {
  console.log('\n--- line-height sweep (mini Home text leaf) ---\n')
  console.log(
    'lh'.padEnd(10) +
      '½strut'.padStart(8) +
      'lineBox'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const row of payload.rows ?? []) {
    console.log(
      String(row.lhVariant).padEnd(10) +
        (row.halfLeadingStrutPx?.toFixed(3) ?? '—').padStart(8) +
        (row.layoutLineBoxPx?.toFixed(3) ?? '—').padStart(8) +
        (row.liveVsSvg?.toFixed(3) ?? '—').padStart(8) +
        (row.liveVsCanvas?.toFixed(3) ?? '—').padStart(9),
    )
  }
  const c = payload.correlation ?? {}
  console.log(
    `\nr(canvasΔ, halfLeadingStrut)=${c.pearsonR?.canvasDelta_vs_halfLeadingStrut?.r ?? '—'} ` +
      `(n=${c.pearsonR?.canvasDelta_vs_halfLeadingStrut?.n ?? '—'})`,
  )
  for (const n of c.notes ?? []) console.log(`  · ${n}`)
  console.log('')
}

async function probeVariant(page, port, lh, { dpr, scale }) {
  const qs = new URLSearchParams({
    lh,
    dpr: String(dpr),
    scale: String(scale),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-baseline-lh-matrix.html?${qs}`
  console.log(`  ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foTextBaselineLhMatrix?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__foTextBaselineLhMatrix?.bootError)
  if (bootErr) throw new Error(`Boot failed (lh=${lh}): ${bootErr}`)
  return page.evaluate(async () => window.__foTextBaselineLhMatrix.run())
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
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    /** @type {Record<string, unknown>[]} */
    const rows = []
    for (const lh of LH_VARIANTS) {
      console.log(`\n=== lh=${lh} ===`)
      const row = await probeVariant(page, port, lh, { dpr: dprArg, scale: scaleArg })
      rows.push(row)
    }

    const correlation = buildCorrelation(rows)

    const payload = {
      fixture: 'fo-text-baseline-lh-matrix',
      purpose: 'Line-height sweep on mini Home text leaf — live vs SVG vs canvas ink.',
      landmark: 'Home',
      lhSweep: LH_VARIANTS,
      lhAppliedOn: 'live Home anchor + matching FO CSS inject',
      recipe: { id: 'product-baseline', rasterPatch: 'product-toCanvas' },
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      port,
      dpr: dprArg,
      scale: scaleArg,
      rows,
      correlation,
    }

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
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
