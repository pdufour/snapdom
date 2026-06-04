#!/usr/bin/env node
/**
 * Flex stretch 48px parent constant — vary ONLY leaf line-height (live inline style).
 * Mini Home text leaf; product-baseline + product-toCanvas; no FO lh inject.
 *
 *   npm run compile && node __localtests__/fo-flex-lh-decouple.mjs
 *   node __localtests__/fo-flex-lh-decouple.mjs --json .sandbox-edit/flex-lh-decouple.json
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
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'flex-lh-decouple.json')

/** Leaf lh values; parent nav stays height:48px + stretch. */
const LH_VARIANTS = ['16px', '21.6px', '32px', '48px', 'normal', '1', '1.35']

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function pearson(xs, ys) {
  const pairs = xs
    .map((x, i) => [x, ys[i]])
    .filter(([x, y]) => x != null && y != null && Number.isFinite(x) && Number.isFinite(y))
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
  return den > 0 ? num / den : null
}

function interpret(rows) {
  /** @type {string[]} */
  const lines = []
  const canvasDeltas = rows.map((r) => r.canvasDeltaPx).filter((v) => v != null)
  const lhPx = rows.map((r) => r.metrics?.lineHeightPx).filter((v) => v != null)
  const parentHeights = rows.map((r) => r.metrics?.parentHeightGbcr).filter((v) => v != null)
  const leafHeights = rows.map((r) => r.metrics?.leafHeightGbcr).filter((v) => v != null)

  const canvasSpread =
    canvasDeltas.length >= 2
      ? Math.max(...canvasDeltas) - Math.min(...canvasDeltas)
      : null
  const lhSpread = lhPx.length >= 2 ? Math.max(...lhPx) - Math.min(...lhPx) : null
  const parentSpread =
    parentHeights.length >= 2 ? Math.max(...parentHeights) - Math.min(...parentHeights) : null

  const rLh = pearson(lhPx, canvasDeltas)
  const rParent = pearson(parentHeights, canvasDeltas)

  lines.push(
    `Parent height spread: ${roundPx(parentSpread) ?? '—'}px; leaf height spread: ${roundPx(leafHeights.length >= 2 ? Math.max(...leafHeights) - Math.min(...leafHeights) : null) ?? '—'}px; leaf lh spread: ${roundPx(lhSpread) ?? '—'}px.`,
  )
  lines.push(
    `CanvasΔ spread across lh variants: ${roundPx(canvasSpread) ?? '—'}px (|r| lh↔canvasΔ: ${roundPx(rLh != null ? Math.abs(rLh) : null) ?? '—'}, parentH↔canvasΔ: ${roundPx(rParent != null ? Math.abs(rParent) : null) ?? '—'}).`,
  )

  if (canvasSpread != null && canvasSpread < 0.05) {
    lines.push(
      'Verdict: canvas drift ~constant while leaf lh varies — raster tracks parent/box height (48px stretch), not leaf line-height strut.',
    )
  } else if (rLh != null && Math.abs(rLh) >= 0.85 && (rParent == null || Math.abs(rParent) < 0.3)) {
    lines.push(
      'Verdict: canvas drift tracks leaf line-height (computed px), not parent box height.',
    )
  } else if (rParent != null && Math.abs(rParent) >= 0.85 && (rLh == null || Math.abs(rLh) < 0.3)) {
    lines.push(
      'Verdict: canvas drift tracks parent box height — unlikely here if parent is fixed 48px.',
    )
  } else {
    lines.push(
      'Verdict: mixed or weak correlation — inspect per-row live vs canvas ink; parent may be decoupled from lh strut inside stretched flex item.',
    )
  }

  return {
    canvasSpreadPx: roundPx(canvasSpread),
    leafLhSpreadPx: roundPx(lhSpread),
    parentHeightSpreadPx: roundPx(parentSpread),
    pearsonLeafLhVsCanvasDelta: roundPx(rLh),
    pearsonParentHeightVsCanvasDelta: roundPx(rParent),
    interpretation: lines,
  }
}

function printTable(payload) {
  console.log('\n--- flex lh decouple (live leaf lh only, parent 48px stretch) ---\n')
  console.log(
    'lhVar'.padEnd(10) +
      'lhPx'.padStart(8) +
      'leafH'.padStart(8) +
      'parH'.padStart(8) +
      'liveTop'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const row of payload.rows || []) {
    const m = row.metrics || {}
    const t = row.threeWay || {}
    console.log(
      String(row.lhVariant).padEnd(10) +
        String(m.lineHeightPx ?? '—').padStart(8) +
        String(m.leafHeightGbcr ?? '—').padStart(8) +
        String(m.parentHeightGbcr ?? '—').padStart(8) +
        (t.livePaintedTopInBorder?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9),
    )
  }
  console.log('')
  for (const line of payload.comparison?.interpretation ?? []) {
    console.log(`  · ${line}`)
  }
  console.log('')
}

async function probeVariant(page, port, lh, { dpr, scale, landmark }) {
  const qs = new URLSearchParams({
    lh,
    dpr: String(dpr),
    scale: String(scale),
    landmark,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-flex-lh-decouple.html?${qs}`
  console.log(`Page: ${url}`)

  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__flexLhDecoupleProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__flexLhDecoupleProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed (lh=${lh}): ${bootErr}`)
  return page.evaluate(async () => window.__flexLhDecoupleProbe.run())
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
      console.log(`\n=== lh variant: ${lh} ===`)
      const row = await probeVariant(page, port, lh, {
        dpr: dprArg,
        scale: scaleArg,
        landmark: landmarkArg,
      })
      rows.push(row)
    }

    const payload = {
      fixture: 'fo-flex-lh-decouple',
      probe: 'flex-stretch-parent-constant-leaf-lh',
      landmark: landmarkArg,
      parentFixedHeightPx: 48,
      baseRecipe: 'product-baseline',
      rasterPatch: 'product-toCanvas',
      liveLhAppliedOn: 'text leaf inline style only',
      injectMode: 'none',
      port,
      dpr: dprArg,
      scale: scaleArg,
      headed: process.env.HEADLESS !== '1',
      lhVariants: LH_VARIANTS,
      generatedAt: new Date().toISOString(),
      rows,
      comparison: interpret(rows),
    }

    const outPath = jsonOutArg ? path.resolve(REPO_ROOT, jsonOutArg) : DEFAULT_OUT
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
