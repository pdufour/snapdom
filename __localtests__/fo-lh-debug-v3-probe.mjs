#!/usr/bin/env node
/**
 * FO lh debug v3 — ink row profile, serialized lh audit, raster fork trace, timing sweep.
 *
 *   npm run compile && node __localtests__/fo-lh-debug-v3-probe.mjs
 *   node __localtests__/fo-lh-debug-v3-probe.mjs --fixture checkout --dpr 1
 *   node __localtests__/fo-lh-debug-v3-probe.mjs --json .sandbox-edit/lh-debug-v3.json
 *
 * Also writes fo-serialized-lh-audit.json (subset). Headed Chrome by default.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'lh-debug-v3.json')
const AUDIT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-serialized-lh-audit.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const fixtureArg = args.includes('--fixture') ? args[args.indexOf('--fixture') + 1] : 'mini'
const compareCheckout = args.includes('--compare-checkout')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function roundDeep(obj) {
  if (obj == null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(roundDeep)
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'number') out[k] = roundPx(v)
    else if (v && typeof v === 'object') out[k] = roundDeep(v)
    else out[k] = v
  }
  return out
}

function printReport(payload) {
  console.log('\n--- FO lh debug v3 ---\n')
  console.log(`Fixture: ${payload.fixture} · dpr=${payload.dpr} · ${payload.landmark}`)
  console.log(`Verdict: ${payload.verdict}`)
  console.log('')
  console.log('Findings:')
  for (const f of payload.findings ?? []) console.log(`  · ${f}`)
  console.log('')
  console.log(
    'recipe'.padEnd(36) +
      'canvasΔ'.padStart(8) +
      'svgΔ'.padStart(8) +
      'noOp?'.padStart(6) +
      'fork'.padStart(6),
  )
  for (const row of payload.plateauAnalysis ?? []) {
    console.log(
      row.recipeId.padEnd(36) +
        (row.canvasDelta?.toFixed(3) ?? '—').padStart(8) +
        (row.svgDelta?.toFixed(3) ?? '—').padStart(8) +
        (row.likelyNoOp ? 'yes' : 'no').padStart(6) +
        (row.forkChanged ? 'chg' : 'same').padStart(6),
    )
  }
  console.log('')
  console.log('LH inject variants (ink row profile):')
  for (const v of payload.lhInlineVariants ?? []) {
    console.log(
      `  ${v.variantId}: canvasΔ=${v.liveVsCanvasTopPx?.toFixed(3) ?? '—'} profile=${v.inkRowProfile ?? '—'}`,
    )
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  async function runProbe(qs) {
    const url = `http://127.0.0.1:${port}/__localtests__/fo-lh-debug-v3-probe.html?${qs}`
    console.log(`Page: ${url}`)
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foLhDebugV3?.ready === true, null, { timeout: 180_000 })
    const bootErr = await page.evaluate(() => window.__foLhDebugV3?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)
    return page.evaluate(() => window.__foLhDebugV3.result)
  }

  try {
    const baseQs = new URLSearchParams({
      dpr: String(dprArg),
      scale: String(scaleArg),
      landmark: landmarkArg,
      fixture: fixtureArg,
    })

    const mini = roundDeep(await runProbe(baseQs.toString()))

    /** @type {Record<string, unknown>} */
    let checkout = null
    if (compareCheckout || fixtureArg === 'both') {
      const checkoutQs = new URLSearchParams(baseQs)
      checkoutQs.set('fixture', 'checkout')
      checkout = roundDeep(await runProbe(checkoutQs.toString()))
    }

    const payload = roundDeep({
      ...mini,
      compareCheckout: checkout,
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
    })

    const outPath = jsonOutArg
      ? path.isAbsolute(jsonOutArg)
        ? jsonOutArg
        : path.join(REPO_ROOT, jsonOutArg)
      : DEFAULT_OUT

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

    const auditPayload = {
      generatedAt: payload.generatedAt,
      fixture: payload.fixture,
      dpr: payload.dpr,
      landmark: payload.landmark,
      foSerializedAudit: payload.foSerializedAudit,
      parentChainLive: payload.parentChainLive,
      lhInlineVariants: payload.lhInlineVariants,
      findings: payload.findings,
    }
    fs.writeFileSync(AUDIT_OUT, `${JSON.stringify(auditPayload, null, 2)}\n`)

    printReport(payload)
    console.log(`Wrote ${outPath}`)
    console.log(`Wrote ${AUDIT_OUT}`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
