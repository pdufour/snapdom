#!/usr/bin/env node
/**
 * Headed FO bitmap paint-origin autopsy — live vs inline FO vs decoded bitmap rows.
 * Compares product-baseline vs tc-fix-w7-rfork-fo-y-half-leading-meta with integer
 * and fractional ink scan.
 *
 *   npm run compile && node __localtests__/fo-paint-origin-autopsy.mjs
 *   node __localtests__/fo-paint-origin-autopsy.mjs --fixture all --dpr 1
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-paint-origin-autopsy.json')
const GATE_EPS = 0.06

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const dpr = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scale = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const fixture = args.includes('--fixture') ? args[args.indexOf('--fixture') + 1] : 'all'
const landmark = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/**
 * @param {object} payload
 * @returns {{ verdict: string, interpretation: string[] }}
 */
export function evaluatePaintOriginAutopsy(payload) {
  /** @type {string[]} */
  const interpretation = []
  let subpixelCorrelatedResidual = false
  let noFlexIntegerPass = false
  let fractionalHelps = false

  for (const fix of payload.fixtures ?? []) {
    const baseline = fix.recipes?.find((r) => r.recipeId === 'product-baseline')
    const w7 = fix.recipes?.find((r) => r.recipeId === 'tc-fix-w7-rfork-fo-y-half-leading-meta')
    if (!baseline || !w7) continue

    const baseInt = baseline.threeWay?.liveVsCanvasTopPxInteger
    const w7Int = w7.threeWay?.liveVsCanvasTopPxInteger
    const w7Frac = w7.threeWay?.liveVsCanvasTopPxFractionalThreshold
    const rangeSub = w7.strutFacts?.rangeSubpixelPx
    const halfLeading = w7.meta?.lhStrutHalfLeadingPx

    interpretation.push(
      `${fix.fixtureId}: baseline integer canvasΔ=${roundPx(baseInt)} → w7 integer=${roundPx(w7Int)} (Range subpx=${roundPx(rangeSub)}).`,
    )

    if (
      w7Int != null &&
      rangeSub != null &&
      Math.abs(Math.abs(w7Int) - rangeSub) <= 0.02 &&
      Math.abs(w7Int) > GATE_EPS
    ) {
      subpixelCorrelatedResidual = true
      interpretation.push(
        `  |w7 integer Δ|≈Range subpixel (${roundPx(Math.abs(w7Int))} ≈ ${roundPx(rangeSub)}) — residual tracks integer ink row vs Range fractional top.`,
      )
    }

    if (w7Frac != null && w7Int != null && Math.abs(w7Frac) < Math.abs(w7Int)) {
      fractionalHelps = true
    }

    if (fix.fixtureId === 'typography-no-flex' && w7Int != null && Math.abs(w7Int) <= GATE_EPS) {
      noFlexIntegerPass = true
      interpretation.push(`  w7 passes integer gate on no-flex fixture (canvasΔ=${roundPx(w7Int)}).`)
    }

    if (halfLeading != null && baseInt != null && Math.abs(baseInt - halfLeading) <= 0.05) {
      interpretation.push(
        `  Baseline canvasΔ≈halfLeading (${roundPx(baseInt)} ≈ ${roundPx(halfLeading)}) — strut enters at FO bitmap paint origin.`,
      )
    }

    const foYDelta = w7.foYDelta
    if (foYDelta != null && halfLeading != null) {
      interpretation.push(
        `  w7 FO y shift=${roundPx(foYDelta)}px (meta halfLeading=${roundPx(halfLeading)}).`,
      )
    }

    const liveTop = w7.threeWay?.liveTopInBorder
    const intCanvas = w7.threeWay?.canvasTopInBorderInteger
    const baseRow = baseline.scanModes?.integerDeviceRow
    const w7Row = w7.scanModes?.integerDeviceRow
    if (baseRow != null && w7Row != null) {
      interpretation.push(
        `  first-ink device row: baseline=${baseRow} w7=${w7Row} (Δ=${baseRow - w7Row}px) · live=${roundPx(liveTop)} canvas=${roundPx(intCanvas)}.`,
      )
    }

    if (w7.inkRowProfile?.profile) {
      interpretation.push(`  ink row profile: ${w7.inkRowProfile.profile} (fractional-threshold scan unreliable on AA ramp).`)
    }
  }

  let verdict = 'NOT_FIXED'
  if (subpixelCorrelatedResidual && noFlexIntegerPass && !fractionalHelps) {
    verdict = 'METRIC_ARTIFACT'
    interpretation.push(
      'Structural w7 fix aligns FO bitmap to correct ink row; flex-stretch residual is Range subpixel vs integer scan, not missing strut formula.',
    )
  } else if (
    (payload.fixtures ?? []).some((fix) => {
      const w7 = fix.recipes?.find((r) => r.recipeId === 'tc-fix-w7-rfork-fo-y-half-leading-meta')
      const d = w7?.threeWay?.liveVsCanvasTopPxInteger
      return d != null && Math.abs(d) <= GATE_EPS
    })
  ) {
    verdict = 'FIXED'
  }

  return { verdict, gateEps: GATE_EPS, interpretation, subpixelCorrelatedResidual, noFlexIntegerPass, fractionalHelps }
}

function printReport(payload, evaluation) {
  console.log('\n--- FO paint-origin autopsy ---\n')
  for (const fix of payload.fixtures ?? []) {
    console.log(`Fixture: ${fix.fixtureId} (${fix.layout})`)
    console.log(
      'recipe'.padEnd(42) +
        'int Δ'.padStart(8) +
        'frac Δ'.padStart(8) +
        'svg Δ'.padStart(8) +
        'FO yΔ'.padStart(8),
    )
    for (const r of fix.recipes ?? []) {
      console.log(
        r.recipeId.padEnd(42) +
          (r.threeWay?.liveVsCanvasTopPxInteger?.toFixed(3) ?? '—').padStart(8) +
          (r.threeWay?.liveVsCanvasTopPxFractionalThreshold?.toFixed(3) ?? '—').padStart(8) +
          (r.threeWay?.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
          (r.foYDelta?.toFixed(3) ?? '—').padStart(8),
      )
    }
    const w7 = fix.recipes?.find((x) => x.recipeId === 'tc-fix-w7-rfork-fo-y-half-leading-meta')
    if (w7?.scanModes) {
      const sm = w7.scanModes
      console.log(
        `  device ink rows: integer=${sm.integerDeviceRow} frac-threshold=${roundPx(sm.fractionalThresholdDeviceRow)} bandY=${sm.bandOriginDeviceY}`,
      )
    }
    console.log('')
  }
  console.log(`Verdict: ${evaluation.verdict}`)
  for (const line of evaluation.interpretation) console.log(`  ${line}`)
  console.log('')
}

async function runCdpLayoutSnapshot(page, selector) {
  try {
    const client = await page.context().newCDPSession(page)
    await client.send('DOM.enable')
    await client.send('CSS.enable')
    const { root } = await client.send('DOM.getDocument')
    const { nodeId } = await client.send('DOM.querySelector', {
      nodeId: root.nodeId,
      selector,
    })
    if (!nodeId) return { error: `selector not found: ${selector}` }
    const visible = await page.evaluate((sel) => {
      const el = document.querySelector(sel)
      if (!el) return false
      const r = el.getBoundingClientRect()
      return r.width > 0 && r.height > 0
    }, selector)
    if (!visible) return { error: `element not visible: ${selector}` }
    const boxModel = await client.send('DOM.getBoxModel', { nodeId })
    const { computedStyle } = await client.send('CSS.getComputedStyleForNode', { nodeId })
    const style = {}
    for (const entry of computedStyle ?? []) style[entry.name] = entry.value
    const content = boxModel.model.content
    const border = boxModel.model.border
    return {
      selector,
      contentTop: content[1],
      borderTop: border[1],
      lineHeight: style['line-height'] ?? null,
      fontSize: style['font-size'] ?? null,
      height: style.height ?? null,
    }
  } catch (err) {
    return { selector, error: String(err?.message || err) }
  }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) process.env.SNAPDOM_LOCAL_PORT = '9940'

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  try {
  const qs = new URLSearchParams({
    dpr: String(dpr),
    scale: String(scale),
    landmark,
    fixture,
    recipes: 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-paint-origin-autopsy.html?${qs}`
  console.log(`Page: ${url}`)

  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foPaintOriginAutopsy?.ready === true, null, {
    timeout: 180_000,
  })

  const bootErr = await page.evaluate(() => window.__foPaintOriginAutopsy?.bootError)
  if (bootErr) throw new Error(bootErr)

  const payload = await page.evaluate(() => window.__foPaintOriginAutopsy.payload)

  /** CDP layout on live DOM text leaves (best-effort). */
  await page.evaluate(() => {
    document.getElementById('fixture-mini').hidden = false
    document.getElementById('fixture-noflex').hidden = true
  })
  const cdpMini = await runCdpLayoutSnapshot(page, '#capture-target-mini nav.mini-nav a')
  let cdpNoflex = null
  if (fixture === 'all' || fixture === 'typography-no-flex') {
    await page.evaluate(() => {
      document.getElementById('fixture-mini').hidden = true
      document.getElementById('fixture-noflex').hidden = false
    })
    cdpNoflex = await runCdpLayoutSnapshot(page, '#capture-target-noflex #text-leaf')
  }

  const evaluation = evaluatePaintOriginAutopsy(payload)
  const out = {
    ...payload,
    cdp: { miniNavHome: cdpMini, typographyNoFlex: cdpNoflex },
    evaluation,
  }

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(out, null, 2)}\n`)

  printReport(out, evaluation)
  console.log(`Wrote ${jsonOut}`)
  } finally {
    await browser.close().catch(() => {})
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
