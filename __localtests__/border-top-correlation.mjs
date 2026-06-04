#!/usr/bin/env node
/**
 * Mini (border-top:0) vs checkout (border-top:3px) — does canvasΔ explain ~3.3 vs ~2.8?
 *
 *   npm run compile && node __localtests__/border-top-correlation.mjs
 *
 * Headed Chrome by default. Writes __localtests__/.sandbox-edit/border-top-correlation.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'border-top-correlation.json')

const FIXTURE_SOURCES = {
  mini: path.join(__dirname, 'fo-fix-lab.html'),
  checkout: path.join(__dirname, 'checkout-example.html'),
}

/** @type {{ id: string, fixture: string, borderTop: string, label: string }[]} */
const VARIANTS = [
  { id: 'mini-native', fixture: 'mini', borderTop: 'native', label: 'mini lab (border-top:0)' },
  { id: 'mini-as-checkout-border', fixture: 'mini', borderTop: '3', label: 'mini + 3px border-top' },
  { id: 'checkout-native', fixture: 'checkout', borderTop: 'native', label: 'checkout (border-top:3px)' },
  {
    id: 'checkout-as-mini-border',
    fixture: 'checkout',
    borderTop: '0',
    label: 'checkout + border-top:0',
  },
]

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** @param {string} filePath @param {string} selectorHint */
function extractNavLinkBorderTopFromFixtureHtml(filePath, selectorHint) {
  const html = fs.readFileSync(filePath, 'utf8')
  const styleBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1])
  const joined = styleBlocks.join('\n')
  const re = new RegExp(
    `${selectorHint.replace(/\./g, '\\.')}[^}]*\\{[^}]*border-top\\s*:\\s*([^;]+)`,
    'i',
  )
  const m = joined.match(re)
  return m ? m[1].trim() : null
}

function parseFixtureStylesheets() {
  const miniDeclared = extractNavLinkBorderTopFromFixtureHtml(
    FIXTURE_SOURCES.mini,
    'nav.mini-nav a',
  )
  const checkoutDeclared = extractNavLinkBorderTopFromFixtureHtml(
    FIXTURE_SOURCES.checkout,
    'nav.nav-links a',
  )
  const miniPx = miniDeclared ? parseFloat(miniDeclared) || 0 : null
  const checkoutPx = checkoutDeclared ? parseFloat(checkoutDeclared) || 0 : null
  return {
    sources: FIXTURE_SOURCES,
    declared: {
      mini: { selector: 'nav.mini-nav a', borderTop: miniDeclared, borderTopPx: miniPx },
      checkout: {
        selector: 'nav.nav-links a',
        borderTop: checkoutDeclared,
        borderTopPx: checkoutPx,
      },
    },
    deltaDeclaredBorderPx:
      miniPx != null && checkoutPx != null ? roundPx(checkoutPx - miniPx) : null,
  }
}

function buildComparison(rows, fixtureParse) {
  const byId = Object.fromEntries(rows.map((r) => [r.id, r]))
  const miniNat = byId['mini-native']
  const miniB3 = byId['mini-as-checkout-border']
  const chkNat = byId['checkout-native']
  const chkB0 = byId['checkout-as-mini-border']
  const chkMatrix = byId['checkout-example-matrix']

  const miniCanvas = miniNat?.threeWay?.liveVsCanvasTopPx ?? null
  const chkCanvas = chkNat?.threeWay?.liveVsCanvasTopPx ?? null
  const chkMatrixCanvas = chkMatrix?.threeWay?.liveVsCanvasTopPx ?? null
  const observedGap =
    miniCanvas != null && chkCanvas != null ? roundPx(miniCanvas - chkCanvas) : null
  const observedGapVsMatrix =
    miniCanvas != null && chkMatrixCanvas != null
      ? roundPx(miniCanvas - chkMatrixCanvas)
      : null

  const miniShiftOnBorder =
    miniNat && miniB3
      ? roundPx(
          (miniB3.threeWay?.liveVsCanvasTopPx ?? 0) - (miniNat.threeWay?.liveVsCanvasTopPx ?? 0),
        )
      : null
  const chkShiftOnBorder =
    chkNat && chkB0
      ? roundPx(
          (chkB0.threeWay?.liveVsCanvasTopPx ?? 0) - (chkNat.threeWay?.liveVsCanvasTopPx ?? 0),
        )
      : null

  const gapMiniVsMatrix = observedGapVsMatrix
  const borderWrongSign =
    miniShiftOnBorder != null &&
    gapMiniVsMatrix != null &&
    Math.sign(miniShiftOnBorder) === Math.sign(gapMiniVsMatrix) &&
    Math.abs(miniShiftOnBorder) > 0.1

  /** @type {string[]} */
  const lines = []
  lines.push(
    `Declared CSS: mini nav a border-top 0px; checkout nav a border-top 3px (${roundPx(fixtureParse?.deltaDeclaredBorderPx) ?? 3}px delta).`,
  )
  lines.push(
    `canvasΔ mini (500×48 lab): ${roundPx(miniCanvas) ?? '—'}px ≈3.3; checkout-example matrix: ${roundPx(chkMatrixCanvas) ?? '—'}px ≈2.8; Δ≈${roundPx(gapMiniVsMatrix) ?? '—'}px.`,
  )
  if (miniShiftOnBorder != null) {
    lines.push(
      `Border-top A/B: +3px on mini shifts canvasΔ by ${miniShiftOnBorder}px; removing on checkout probe shifts by ${chkShiftOnBorder ?? '—'}px (same capture root → canvasΔ tracks border, not lower checkout matrix).`,
    )
  }
  if (miniB3 && chkNat) {
    lines.push(
      `Isolated header probe: mini+3px and checkout-native both canvasΔ=${roundPx(miniB3.threeWay?.liveVsCanvasTopPx) ?? '—'}px — border-top alone does not separate mini vs checkout on equal capture chrome.`,
    )
  }
  if (chkMatrix && miniNat) {
    lines.push(
      `Matrix checkout uses full #capture-target (${roundPx(chkMatrix.captureDims?.cssW) ?? '?'}×${roundPx(chkMatrix.captureDims?.cssH) ?? '?'} CSS px) vs mini 500×48 — raster extent likely drives ~0.5px gap, not border-top.`,
    )
  }
  const explains = false
  if (borderWrongSign && gapMiniVsMatrix != null && Math.abs(gapMiniVsMatrix) > 0.1) {
    lines.push(
      'Verdict: NO — border-top does not explain mini ~3.3 vs checkout ~2.8; adding border increases canvasΔ while checkout matrix is lower despite 3px border.',
    )
  } else if (gapMiniVsMatrix != null && Math.abs(gapMiniVsMatrix) < 0.1) {
    lines.push('Verdict: canvasΔ matches within 0.1px — fixture gap negligible for this metric.')
  } else {
    lines.push(
      'Verdict: inconclusive — re-run headed probe if browser closed early.',
    )
  }

  return {
    miniNativeCanvasDelta: roundPx(miniCanvas),
    checkoutNativeCanvasDelta: roundPx(chkCanvas),
    checkoutExampleMatrixCanvasDelta: roundPx(chkMatrixCanvas),
    observedMiniMinusCheckoutCanvasDelta: observedGap,
    observedMiniMinusCheckoutMatrixCanvasDelta: observedGapVsMatrix,
    miniCanvasDeltaShiftWhenBorder3px: miniShiftOnBorder,
    checkoutCanvasDeltaShiftWhenBorder0: chkShiftOnBorder,
    borderTopExplainsMiniVsCheckoutGap: explains,
    interpretation: lines,
  }
}

function printTable(payload) {
  console.log('\n--- border-top correlation (Home, product-baseline) ---\n')
  console.log(
    'variant'.padEnd(28) +
      'bdrT'.padStart(5) +
      'liveTop'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const row of payload.variants) {
    const t = row.threeWay || {}
    console.log(
      String(row.id).padEnd(28) +
        String(row.borderTopAppliedPx ?? '—').padStart(5) +
        (t.livePaintedTopInBorder?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9),
    )
  }
  console.log('\nDeclared fixture CSS:')
  console.log(
    `  mini: ${payload.fixtureParse.declared.mini.borderTop ?? '—'} (${payload.fixtureParse.declared.mini.borderTopPx}px)`,
  )
  console.log(
    `  checkout: ${payload.fixtureParse.declared.checkout.borderTop ?? '—'} (${payload.fixtureParse.declared.checkout.borderTopPx}px)`,
  )
  console.log('')
  for (const line of payload.comparison?.interpretation ?? []) {
    console.log(`  · ${line}`)
  }
  console.log('')
}

async function probeBorderTopPage(page, port, variant, { dpr, scale, landmark }) {
  const qs = new URLSearchParams({
    fixture: variant.fixture,
    borderTop: variant.borderTop,
    dpr: String(dpr),
    scale: String(scale),
    landmark,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/border-top-correlation.html?${qs}`
  console.log(`\n=== ${variant.id} ===\n  ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__borderTopCorrelationProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__borderTopCorrelationProbe?.bootError)
  if (bootErr) throw new Error(`${variant.id}: ${bootErr}`)
  const report = await page.evaluate(async () => {
    const probe = window.__borderTopCorrelationProbe
    if (!probe?.run) throw new Error('probe.run missing')
    return probe.run()
  })
  if (!report?.threeWay) throw new Error(`${variant.id}: missing probe report`)
  return { id: variant.id, label: variant.label, page: 'border-top-correlation', ...report }
}

/** Matrix path: checkout-example.html full #capture-target (canonical ~2.8 checkout). */
async function probeCheckoutExampleMatrix(page, port, { landmark }) {
  const id = 'checkout-example-matrix'
  const url = `http://127.0.0.1:${port}/__localtests__/checkout-example.html?matrix=1&auto=1&landmark=${encodeURIComponent(landmark)}&ids=product-baseline`
  console.log(`\n=== ${id} ===\n  ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foFixLab?.done === true, null, { timeout: 180_000 })
  const err = await page.evaluate(() => window.__foFixLab?.error)
  if (err) throw new Error(`${id}: ${err}`)
  const row = await page.evaluate(() =>
    window.__foFixMatrix?.find((r) => r.recipeId === 'product-baseline'),
  )
  if (!row) throw new Error(`${id}: product-baseline row missing`)
  const captureDims = await page.evaluate(() => {
    const root = document.getElementById('capture-target')
    const r = root?.getBoundingClientRect()
    return r ? { cssW: r.width, cssH: r.height } : null
  })
  return {
    id,
    label: 'checkout-example.html matrix (canonical)',
    page: 'checkout-example',
    fixture: 'checkout-example',
    recipeId: 'product-baseline',
    landmark,
    captureDims,
    threeWay: {
      liveVsSvgTopPx: row.deltaSvgInBorder ?? row.liveVsSvgTopPx,
      liveVsCanvasTopPx: row.deltaTopInBorder ?? row.liveVsCanvasTopPx,
      pass: row.pass,
    },
  }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const dpr = 2
  const scale = 1
  const landmark = 'Home'
  const fixtureParse = parseFixtureStylesheets()

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    /** @type {Record<string, unknown>[]} */
    const variants = []
    for (const v of VARIANTS) {
      variants.push(await probeBorderTopPage(page, port, v, { dpr, scale, landmark }))
    }
    variants.push(await probeCheckoutExampleMatrix(page, port, { landmark }))

    const comparison = buildComparison(variants, fixtureParse)
    const payload = {
      probe: 'border-top-correlation',
      recipeId: 'product-baseline',
      landmark,
      dpr,
      scale,
      generatedAt: new Date().toISOString(),
      headless: process.env.HEADLESS === '1',
      fixtureParse,
      variants,
      comparison,
    }

    await fs.promises.mkdir(path.dirname(DEFAULT_OUT), { recursive: true })
    await fs.promises.writeFile(DEFAULT_OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${DEFAULT_OUT}`)
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
