#!/usr/bin/env node
/**
 * Range/layout strut probe — compare fs / fontbox / used / Range line metrics vs canvasΔ.
 * Headed Chrome only.
 *
 *   npm run compile && node __localtests__/fo-strut-range-probe.mjs
 *   node __localtests__/fo-strut-range-probe.mjs --landmarks Home,Products --dpr 1
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-strut-range-probe.json')
const MATCH_EPS = 0.06

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const dpr = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scale = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarks = args.includes('--landmarks')
  ? args[args.indexOf('--landmarks') + 1].split(',').map((s) => s.trim()).filter(Boolean)
  : ['Home', 'Products']

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** @param {number | null} canvasOffset @param {Record<string, number | null>} metrics */
function rankMetrics(canvasOffset, metrics) {
  if (canvasOffset == null) return { rows: [], best: null, matches: [] }
  /** @type {{ id: string, value: number, deltaAbs: number }[]} */
  const rows = []
  for (const [id, value] of Object.entries(metrics)) {
    if (value == null || !Number.isFinite(value)) continue
    rows.push({
      id,
      value: roundPx(value),
      deltaAbs: roundPx(Math.abs(canvasOffset - value)),
    })
  }
  rows.sort((a, b) => (a.deltaAbs ?? Infinity) - (b.deltaAbs ?? Infinity))
  return {
    rows,
    best: rows[0] ?? null,
    matches: rows.filter((r) => r.deltaAbs != null && r.deltaAbs <= MATCH_EPS),
  }
}

async function main() {
  if (!process.env.SNAPDOM_LOCAL_PORT) process.env.SNAPDOM_LOCAL_PORT = '9940'
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  const url = `http://127.0.0.1:${port}/__localtests__/fo-strut-range-probe.html?auto=1&dpr=${dpr}&scale=${scale}&landmarks=${encodeURIComponent(landmarks.join(','))}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foStrutRangeProbe?.done === true, null, {
    timeout: 120_000,
  })

  const err = await page.evaluate(() => window.__foStrutRangeProbe?.error)
  if (err) throw new Error(err)

  const payload = await page.evaluate(() => window.__foStrutRangeProbe.payload)
  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  for (const row of payload.landmarks) {
    console.log(
      `\n${row.landmark}: canvasΔ=${row.canvasOffsetPx?.toFixed(3) ?? '—'} svgΔ=${row.svgOffsetPx?.toFixed(3) ?? '—'}`,
    )
    const { best, matches } = row.metricRank
    if (best) {
      console.log(
        `  best predictor: ${best.id}=${best.value}px |Δ|=${best.deltaAbs}px (target canvasΔ magnitude)`,
      )
    }
    if (matches?.length) {
      console.log(`  within ${MATCH_EPS}px: ${matches.map((m) => m.id).join(', ')}`)
    }
    console.log(
      `  Range line h=${row.strutFacts?.rangeLineHeightPx} halfFromLine=${row.strutFacts?.halfLeadingFromRangeLineFs} subpx=${row.strutFacts?.rangeSubpixelPx} fsHalf−subpx=${row.strutFacts?.halfLeadingFsMinusRangeSubpixel}`,
    )
  }

  console.log(`\nWrote ${jsonOut}`)
  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
