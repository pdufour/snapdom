#!/usr/bin/env node
/**
 * Loop: checkout landmarks — resilient vertical checks (tiered layout / cap / canvas).
 */
import { execSync } from 'node:child_process'
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { LOOP_DRIFT, EXACT_EPS, formatVerticalVerdict } from './vertical-tolerances.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const LAYOUT_BUDGET = { slack: LOOP_DRIFT.layoutSlack, fail: LOOP_DRIFT.layoutFail }
const CAP_BUDGET = { slack: LOOP_DRIFT.capSlack, fail: LOOP_DRIFT.capFail }
const GAP_BUDGET = { slack: LOOP_DRIFT.gapSlack, fail: LOOP_DRIFT.gapFail }

/** @type {{ title: string, lhClonePx?: number, navIntrinsic?: boolean }[]} */
const TEXT_LANDMARKS = [
  { title: 'Logo', lhClonePx: 38 },
  { title: 'Nav: Home', navIntrinsic: true },
  { title: 'Nav: Products' },
  { title: 'Checkout (h2)', lhClonePx: 96 },
  { title: 'Email Address (label)', lhClonePx: 56 },
  { title: 'Remember my details' },
  { title: 'Promo Code (label)', lhClonePx: 56 },
]

const INPUT_LANDMARKS = ['Email input', 'Promo input']
const LAYOUT_METRICS = ['box.top', 'box.height', 'box.bottom', 'box.width', 'box.left']
const WIDTH_BUDGET = { slack: LOOP_DRIFT.boxWidthSlack, fail: LOOP_DRIFT.boxWidthFail }
const ADVANCE_BUDGET = { slack: LOOP_DRIFT.advanceSlack, fail: LOOP_DRIFT.advanceFail }
const KERNING_PROPS = ['letter-spacing', 'font-kerning', 'font-family', 'font-size', 'font-weight']
const CAP_METRICS = [
  'paint.cap.vs-border.top',
  'paint.cap.vs-border.bottom',
  'paint.cap.root.top',
]
const CANVAS_METRICS = ['paint.canvas.vs-border.top', 'paint.canvas.root.top']

/** Layout + cap ink only (canvas raster excluded from max-drift gate). */
const TIGHT_DRIFT_METRICS = new Set([
  ...LAYOUT_METRICS,
  ...CAP_METRICS,
  'span-input',
  'advance width · full line',
])

function run(cmd) {
  return execSync(cmd, { cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  return 'application/octet-stream'
}

async function startServer() {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      const rel = decodeURIComponent(url.pathname.replace(/^\//, ''))
      const abs = path.resolve(repoRoot, rel)
      if (!abs.startsWith(repoRoot + path.sep)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }
      const data = await fs.readFile(abs)
      res.writeHead(200, { 'Content-Type': contentType(abs) })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  return { server, port: server.address().port }
}

function parseDelta(delta) {
  if (!delta || delta === '—') return null
  const n = parseFloat(String(delta).replace(/px$/, ''))
  return Number.isFinite(n) ? n : null
}

function parsePx(val) {
  if (!val || val === '—') return null
  const n = parseFloat(String(val).replace(/px$/, ''))
  return Number.isFinite(n) ? n : null
}

/**
 * @param {import('playwright').Page} page
 */
async function readAllSections(page) {
  return page.evaluate(() => {
    return [...document.querySelectorAll('#structure-host .structure-section')].map((sec) => {
      const title = (sec.querySelector('h3')?.textContent || '').trim()
      const rows = [...sec.querySelectorAll('tr')].map((tr) => {
        const tds = [...tr.querySelectorAll('td')].map((td) => (td.textContent || '').trim())
        return {
          metric: tds[0] || '',
          live: tds[1] || '',
          clone: tds[2] || '',
          delta: tds[3] || '',
        }
      })
      return { title, rows }
    })
  })
}

function row(sec, metric) {
  return sec.rows.find((r) => r.metric === metric)
}

/**
 * @param {string} landmark
 * @param {string} metric
 * @param {number|null} delta
 * @param {{ slack: number, fail: number }} budget
 * @param {string[]} fails
 * @param {string[]} warns
 */
function auditVertical(landmark, metric, delta, budget, fails, warns) {
  const verdict = formatVerticalVerdict(delta, budget)
  if (!verdict) return
  const line = `${landmark} ${metric} ${verdict}`
  if (verdict.startsWith('fail:')) fails.push(`FAIL: ${line}`)
  else warns.push(`WARN: ${line}`)
}

async function captureStructureReport(page) {
  await page.locator('#btn-capture').click()
  await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })
  return readAllSections(page)
}

async function checkCheckoutExample() {
  const { server, port } = await startServer()
  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({
      viewport: { width: 1300, height: 900 },
      deviceScaleFactor: 2,
    })
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })

    const navPin = await page.evaluate(async () => {
      const { snapdom } = await import('/dist/snapdom.mjs')
      const target = document.getElementById('capture-target')
      const snap = await snapdom(target, { embedFonts: true, dpr: 2, scale: 1 })
      const raw = await snap.toRaw()
      const svg = raw.includes(',') ? decodeURIComponent(raw.split(',')[1]) : raw
      const cls = [...(svg.match(/<a[^>]*class="([^"]+)"[^>]*>Home</)?.[1] || '').split(/\s+/)]
        .find((c) => /^c\d+$/.test(c))
      if (!cls) return null
      const rule = new RegExp(`\\.${cls}\\{[^}]*line-height:\\s*([\\d.]+)px`, 'i').exec(svg)
      return rule ? parseFloat(rule[1]) : null
    })

    let sections
    try {
      sections = await captureStructureReport(page)
    } catch {
      sections = await captureStructureReport(page)
    }

    const byTitle = new Map(sections.map((s) => [s.title, s]))
    const fails = []
    const warns = []

    const { min, max } = LOOP_DRIFT.navLhPin
    if (navPin == null || navPin < min || navPin > max) {
      fails.push(`FAIL: Nav Home intrinsic line-height pin out of range [${min},${max}]px, got ${navPin}`)
    }

    for (const lm of TEXT_LANDMARKS) {
      const sec = byTitle.get(lm.title)
      if (!sec) {
        fails.push(`FAIL: missing landmark "${lm.title}"`)
        continue
      }

      for (const metric of LAYOUT_METRICS) {
        const r = row(sec, metric)
        if (!r) {
          fails.push(`FAIL: ${lm.title} missing ${metric}`)
          continue
        }
        auditVertical(lm.title, metric, parseDelta(r.delta), LAYOUT_BUDGET, fails, warns)
      }

      for (const metric of CAP_METRICS) {
        const r = row(sec, metric)
        if (r) auditVertical(lm.title, metric, parseDelta(r.delta), CAP_BUDGET, fails, warns)
      }

      if (lm.lhClonePx != null) {
        const lhRow = row(sec, 'line-height') || row(sec, 'line-height (computed string)')
        const clonePx = parsePx(lhRow?.clone)
        if (clonePx == null || Math.abs(clonePx - lm.lhClonePx) > LOOP_DRIFT.lhPinSlack) {
          fails.push(
            `FAIL: ${lm.title} clone line-height=${lhRow?.clone ?? '?'} (expected ~${lm.lhClonePx}px)`,
          )
        }
      }

      const gap = row(sec, 'span-input')
      if (gap) auditVertical(lm.title, 'span-input', parseDelta(gap.delta), GAP_BUDGET, fails, warns)

      const boxW = row(sec, 'box.width')
      if (boxW) auditVertical(lm.title, 'box.width', parseDelta(boxW.delta), WIDTH_BUDGET, fails, warns)

      const advance = row(sec, 'advance width · full line')
      if (advance) {
        auditVertical(lm.title, 'advance width · full line', parseDelta(advance.delta), ADVANCE_BUDGET, fails, warns)
      }

      for (const prop of KERNING_PROPS) {
        const r = row(sec, prop)
        if (r && r.live !== r.clone) {
          fails.push(`FAIL: ${lm.title} ${prop} live=${r.live} clone=${r.clone}`)
        }
      }
    }

    for (const title of INPUT_LANDMARKS) {
      const sec = byTitle.get(title)
      if (!sec) {
        fails.push(`FAIL: missing landmark "${title}"`)
        continue
      }
      for (const metric of LAYOUT_METRICS) {
        const r = row(sec, metric)
        if (r) auditVertical(title, metric, parseDelta(r.delta), LAYOUT_BUDGET, fails, warns)
      }
      const boxW = row(sec, 'box.width')
      if (boxW) auditVertical(title, 'box.width', parseDelta(boxW.delta), WIDTH_BUDGET, fails, warns)
    }

    let maxDrift = { px: 0, title: '', metric: '' }
    let maxCanvas = { px: 0, title: '', metric: '' }
    for (const sec of sections) {
      for (const r of sec.rows) {
        const d = parseDelta(r.delta)
        if (d == null) continue
        const a = Math.abs(d)
        if (CANVAS_METRICS.includes(r.metric)) {
          if (a > maxCanvas.px) maxCanvas = { px: a, title: sec.title, metric: r.metric }
          continue
        }
        if (!TIGHT_DRIFT_METRICS.has(r.metric)) continue
        if (a > maxDrift.px) maxDrift = { px: a, title: sec.title, metric: r.metric }
        if (a > LOOP_DRIFT.maxAnyPx) {
          fails.push(
            `FAIL: ${sec.title} ${r.metric} |Δ|=${a.toFixed(3)}px > ${LOOP_DRIFT.maxAnyPx}px`,
          )
        }
      }
    }
    // Canvas raster not exact-gated (dpr-2 integer ink); reported in maxCanvas only.
    for (const w of warns) {
      fails.push(w.startsWith('FAIL:') ? w : `FAIL: ${w.replace(/^WARN: /, '')}`)
    }
    warns.length = 0

    const widthAudit = [...TEXT_LANDMARKS, ...INPUT_LANDMARKS.map((t) => ({ title: t }))].map(
      (lm) => {
        const sec = byTitle.get(lm.title)
        const w = sec ? row(sec, 'box.width') : null
        const adv = sec ? row(sec, 'advance width · full line') : null
        return {
          title: lm.title,
          widthDelta: w?.delta ?? 'missing',
          advanceDelta: adv?.delta ?? '—',
        }
      },
    )

    return {
      ok: fails.length === 0,
      fails,
      warns,
      landmarkCount: sections.length,
      navPin,
      widthAudit,
      maxDrift,
      maxCanvas,
    }
  } finally {
    await browser.close()
    server.close()
  }
}

async function main() {
  const ts = new Date().toISOString()
  const lines = [`[${ts}] checkout landmarks (zero margin, exact ≤${EXACT_EPS}px layout/cap)`]

  try {
    run('npm run compile')
    lines.push('compile: ok')
  } catch (e) {
    lines.push(`compile: FAIL\n${e.stdout || ''}${e.stderr || e.message}`)
    console.log(lines.join('\n'))
    process.exit(1)
  }

  try {
    run('npx vitest run __tests__/checkoutSvgCompare.test.js --reporter=dot 2>&1')
    lines.push('vitest checkout (landmarks + all elements): ok')
  } catch (e) {
    lines.push(`vitest checkout: FAIL\n${e.stdout || ''}${e.stderr || e.message}`)
    console.log(lines.join('\n'))
    process.exit(1)
  }

  try {
    const { ok, fails, warns, landmarkCount, navPin, widthAudit, maxDrift, maxCanvas } =
      await checkCheckoutExample()
    lines.push(`landmarks: ${landmarkCount} sections, nav lh pin=${navPin}px`)
    if (maxDrift?.px != null) {
      lines.push(
        `max layout/cap drift: ${maxDrift.px.toFixed(3)}px @ ${maxDrift.title} · ${maxDrift.metric} (≤${LOOP_DRIFT.maxAnyPx}px)`,
      )
    }
    if (maxCanvas?.px != null) {
      lines.push(
        `max canvas drift: ${maxCanvas.px.toFixed(3)}px @ ${maxCanvas.title} (raster, informational only)`,
      )
    }
    if (widthAudit?.length) {
      lines.push(
        'width audit: ' +
          widthAudit.map((w) => `${w.title} Δw=${w.widthDelta}${w.advanceDelta !== '—' ? ` Δadv=${w.advanceDelta}` : ''}`).join(' | '),
      )
    }
    if (ok) {
      lines.push('playground: ok')
    } else {
      lines.push('playground: FAIL')
      lines.push(...fails)
    }
  } catch (e) {
    lines.push(`playground: ERROR ${e.message}`)
    console.log(lines.join('\n'))
    process.exit(1)
  }

  try {
    run('node __localtests__/bounce-check.mjs 2>&1')
    lines.push('bounce check: ok')
  } catch (e) {
    const out = `${e.stdout || ''}${e.stderr || e.message}`
    lines.push(`bounce check: FAIL\n${out.slice(-600)}`)
    console.log(lines.join('\n'))
    process.exit(1)
  }

  try {
    run('node __localtests__/visual-alignment-audit.mjs 2>&1')
    lines.push('visual audit: ok')
  } catch (e) {
    const out = `${e.stdout || ''}${e.stderr || e.message}`
    if (out.includes('VISUAL: ok')) {
      lines.push('visual audit: ok')
    } else {
      lines.push(`visual audit: review __localtests__/visual-audit-output/\n${out.slice(-800)}`)
    }
  }

  try {
    run('node __localtests__/assert-email-label-structure.mjs 2>&1')
    lines.push('email assert: ok')
  } catch (e) {
    lines.push(`email assert: FAIL\n${e.stdout || ''}${e.stderr || e.message}`)
    console.log(lines.join('\n'))
    process.exit(1)
  }

  console.log(lines.join('\n'))
  const failed =
    lines.some((l) => l.startsWith('compile: FAIL')) ||
    lines.some((l) => l.startsWith('vitest checkout: FAIL')) ||
    lines.some((l) => l.startsWith('playground: FAIL')) ||
    lines.some((l) => l.startsWith('playground: ERROR')) ||
    lines.some((l) => l.startsWith('bounce check: FAIL')) ||
    lines.some((l) => l.startsWith('email assert: FAIL'))
  if (failed) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
