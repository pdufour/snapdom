#!/usr/bin/env node
/**
 * Glyph preview clip guard — h/p letter anchors need stretch min-height slack.
 *
 *   npm run test:fo-glyph-bounds
 *   node __localtests__/fo-glyph-not-clipped-probe.mjs --json .sandbox-edit/fo-glyph-not-clipped.json
 *
 * Headed Chrome only. No text bypass.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-glyph-not-clipped.json')

const LETTERS = ['h', 'p']
const STRETCH_MIN_HEIGHT_PX = 48
const SLACK_BELOW_MIN_PX = 1

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function runProbe(page, port) {
  const qs = new URLSearchParams({
    dpr: String(dprArg),
    landmark: 'Home',
    section: 'letterDrift',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-glyph-bounds-probe.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foGlyphBoundsProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foGlyphBoundsProbe?.bootError)
  if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

  return page.evaluate(
    ({ letters, stretchMin, slackMin }) => {
      const letterRoot = document.getElementById('letter-target')
      const nav = letterRoot?.querySelector('nav.letter-nav')
      const navMinH = nav ? parseFloat(getComputedStyle(nav).minHeight) : null
      /** @type {Record<string, unknown>[]} */
      const rows = []
      for (const letter of letters) {
        const el = letterRoot?.querySelector(`a[data-letter="${letter}"]`)
        if (!el) {
          rows.push({ letter, error: 'anchor not found' })
          continue
        }
        const cs = getComputedStyle(el)
        const box = el.getBoundingClientRect()
        const rootBox = letterRoot.getBoundingClientRect()
        const range = document.createRange()
        range.selectNodeContents(el)
        const rr = range.getBoundingClientRect()
        const rangeBottomInBorder = rr.bottom - rootBox.top
        const boxBottomInBorder = box.bottom - rootBox.top
        const slackBelowPx = boxBottomInBorder - rangeBottomInBorder
        rows.push({
          letter,
          anchorMinHeightPx: parseFloat(cs.minHeight) || null,
          boxHeightPx: round(box.height),
          navMinHeightPx: navMinH,
          slackBelowRangePx: round(slackBelowPx),
          previewHasMinStretch: navMinH != null && navMinH >= stretchMin - 0.5,
          descenderSlackOk: slackBelowPx >= slackMin,
        })
      }
      function round(v) {
        return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
      }
      return { navMinHeightPx: navMinH, rows }
    },
    { letters: LETTERS, stretchMin: STRETCH_MIN_HEIGHT_PX, slackMin: SLACK_BELOW_MIN_PX },
  )
}

function checkRows(layout) {
  /** @type {Record<string, unknown>[]} */
  const checked = []
  let failCount = 0
  for (const row of layout.rows) {
    /** @type {string[]} */
    const errors = []
    if (row.error) errors.push(String(row.error))
    if (!row.previewHasMinStretch) {
      errors.push(
        `letter-nav min-height ${row.navMinHeightPx ?? '—'} expected ≥${STRETCH_MIN_HEIGHT_PX}`,
      )
    }
    if (!row.descenderSlackOk) {
      errors.push(
        `slack below Range ${row.slackBelowRangePx ?? '—'}px expected ≥${SLACK_BELOW_MIN_PX} (h/p descender clip risk)`,
      )
    }
    const pass = errors.length === 0
    if (!pass) failCount++
    checked.push({ ...row, pass, errors })
  }
  return { rows: checked, failCount }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — layout probe may differ; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 720 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    console.log(`Glyph clip guard (h/p) · dpr=${dprArg}`)
    const layout = await runProbe(page, port)
    const { rows, failCount } = checkRows(layout)

    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      dpr: dprArg,
      letters: LETTERS,
      thresholds: {
        stretchMinHeightPx: STRETCH_MIN_HEIGHT_PX,
        slackBelowMinPx: SLACK_BELOW_MIN_PX,
      },
      layout,
      rows,
      pass: failCount === 0,
      failCount,
    }

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    console.log('\n--- glyph not-clipped (h/p) ---\n')
    for (const row of rows) {
      console.log(
        `${String(row.letter).padEnd(4)} boxH=${row.boxHeightPx ?? '—'} slack=${row.slackBelowRangePx ?? '—'} ${row.pass ? '✓' : '✗'}`,
      )
      for (const err of row.errors ?? []) console.log(`    ${err}`)
    }
    console.log(`\nOverall: ${payload.pass ? 'PASS' : 'FAIL'}`)
    process.exit(payload.pass ? 0 : 1)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
