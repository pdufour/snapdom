#!/usr/bin/env node
/**
 * FO research round 7 — nav height vs glyph ink, wave-14 ingest, decode delta,
 * Home vs Products, blackbox vs Range reconciliation, w7 0.203 residual scan.
 *
 *   npm run compile && node __localtests__/fo-research-round-7-probe.mjs
 *   node __localtests__/fo-research-round-7-probe.mjs --dpr 1 --json .sandbox-edit/research-round-7.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'research-round-7.json')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const sectionArg = args.includes('--section') ? args[args.indexOf('--section') + 1] : 'all'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** Scan repo for wave-14 matrix JSON on disk (ingest-only; no matrix run). */
function ingestWave14MatrixFromDisk() {
  const dirs = [SANDBOX, path.join(REPO_ROOT, '__localtests__', '.sandbox-edit')]
  const patterns = [/wave[-_]?14/i, /\bw14\b/i, /fix-w14/i]
  /** @type {{ path: string, bytes: number, summary: Record<string, unknown> | null }[]} */
  const hits = []

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.json')) continue
      if (!patterns.some((p) => p.test(name))) continue
      const full = path.join(dir, name)
      let summary = null
      try {
        const raw = JSON.parse(fs.readFileSync(full, 'utf8'))
        const rows = raw.rows ?? raw.matrix ?? raw.results ?? []
        const best = Array.isArray(rows)
          ? rows
              .filter((r) => Number.isFinite(r.liveVsCanvasTopPx ?? r.canvasDeltaPx))
              .sort(
                (a, b) =>
                  Math.abs(a.liveVsCanvasTopPx ?? a.canvasDeltaPx ?? 99) -
                  Math.abs(b.liveVsCanvasTopPx ?? b.canvasDeltaPx ?? 99),
              )[0]
          : null
        summary = {
          rowCount: Array.isArray(rows) ? rows.length : null,
          bestRecipeId: best?.recipeId ?? best?.id ?? null,
          bestCanvasDeltaPx: roundPx(best?.liveVsCanvasTopPx ?? best?.canvasDeltaPx ?? null),
          pass: raw.pass ?? null,
        }
      } catch {
        summary = { parseError: true }
      }
      hits.push({ path: path.relative(REPO_ROOT, full), bytes: fs.statSync(full).size, summary })
    }
  }

  return {
    found: hits.length > 0,
    files: hits,
    note:
      hits.length === 0
        ? 'No wave-14 matrix JSON on disk — spot-check wave-13 recipes in probe instead.'
        : `Ingested ${hits.length} wave-14 artifact(s).`,
  }
}

function printReport(payload) {
  console.log('\n--- FO research round 7 ---\n')
  console.log(`dpr=${payload.dpr} · ${payload.landmark}`)
  console.log(
    `Baseline canvasΔ=${payload.baseline?.threeWay?.liveVsCanvasTopPx?.toFixed(3) ?? '—'} ` +
      `svgΔ=${payload.baseline?.threeWay?.liveVsSvgTopPx?.toFixed(3) ?? '—'}`,
  )
  if (payload.wave14Ingest) {
    console.log(`Wave-14 ingest: ${payload.wave14Ingest.found ? 'found' : 'absent'} — ${payload.wave14Ingest.note}`)
  }
  console.log('\nTop 3 new findings:')
  for (const f of payload.synthesis?.top3NewFindings ?? []) console.log(`  + ${f}`)
  console.log('\nTop 3 fix hypotheses:')
  for (const fix of payload.synthesis?.top3NextFixes ?? []) console.log(`  · ${fix.fix}`)
  console.log(`\nBest next fix: ${payload.synthesis?.bestNextFixDirection ?? '—'}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const wave14Ingest = ingestWave14MatrixFromDisk()

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 560 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    section: sectionArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-research-round-7-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
    await page.waitForFunction(() => window.__foResearchRound7?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foResearchRound7?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const payload = await page.evaluate(() => window.__foResearchRound7.result)
    payload.port = port
    payload.headed = process.env.HEADLESS !== '1'
    payload.chromeVersion = await page.evaluate(() => navigator.userAgent)
    payload.wave14Ingest = wave14Ingest

    await fs.promises.mkdir(SANDBOX, { recursive: true })

    const fullPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(fullPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${fullPath}`)

    const sectionWrites = [
      ['research-round-7-nav-height.json', payload.sections?.navHeightVariants],
      ['research-round-7-wave-matrix.json', payload.sections?.waveMatrixSpot],
      ['research-round-7-decode-delta.json', payload.sections?.decodeDelta],
      ['research-round-7-landmark-parity.json', payload.sections?.landmarkParity],
      ['research-round-7-metric-reconcile.json', payload.sections?.metricReconcile],
      ['research-round-7-w7-residual-scan.json', payload.sections?.w7ResidualScan],
      ['research-round-7-synthesis.json', payload.synthesis],
    ]
    for (const [name, data] of sectionWrites) {
      if (data == null) continue
      const p = path.join(SANDBOX, name)
      await fs.promises.writeFile(
        p,
        `${JSON.stringify({ probe: 'fo-research-round-7', section: name, dpr: payload.dpr, landmark: payload.landmark, baseline: payload.baseline, data }, null, 2)}\n`,
      )
      console.log(`Wrote ${p}`)
    }

    printReport(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
