#!/usr/bin/env node
/**
 * Canvas block ink measure — pixel blackbox e2e.
 *
 * Canvas + black block. Fixture paints at an offset, reads pixel border from
 * getImageData (solidBandCssTopRow), lib measures via inkTopRowFromCanvasRegion.
 * Runner only gates: lib ≈ pixel border; Δlib ≈ Δpixel.
 *
 * User model (observed from pixel border on each scene, not hard-coded in runner):
 *   block at top → pixel border 0, lib 0
 *   move down 5px → pixel +5, lib +5
 *   halfway (+2.5) → pixel +2.5, lib +2.5
 *
 *   npm run test:fo-canvas-block-measure-e2e
 *   SKIP_HEADED=1 npm run test:fo-canvas-block-measure-e2e
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const INTEGER_TOL = 0.01
const SUBPIXEL_TOL = 0.05

/** @param {number} px */
function tolForPx(px) {
  return Number.isInteger(px) ? INTEGER_TOL : SUBPIXEL_TOL
}

/** Half-step grid 0–30 — move block down in 2.5px steps. */
const HALF_STEP_OFFSETS = Array.from({ length: 13 }, (_, i) => i * 2.5)

/** Integer grid 0–15 — extra move positions. */
const INTEGER_OFFSETS = Array.from({ length: 16 }, (_, i) => i)

const ALL_OFFSETS = [...new Set([...HALF_STEP_OFFSETS, ...INTEGER_OFFSETS])].sort((a, b) => a - b)

/** @param {[number, number][]} pairs */
function dedupePairs(pairs) {
  return pairs.filter(([from, to], idx, arr) => {
    const key = `${from},${to}`
    return arr.findIndex(([f, t]) => `${f},${t}` === key) === idx
  })
}

const DELTA_PAIRS = dedupePairs([
  // user model
  [0, 2.5],
  [0, 5],
  [2.5, 5],
  [5, 7.5],
  [0, 10],
  [5, 10],
  [10, 15],
  [15, 20],
  [20, 25],
  [25, 30],
  // consecutive half-steps (+2.5 each move)
  ...HALF_STEP_OFFSETS.slice(0, -1).map((from, i) => [from, HALF_STEP_OFFSETS[i + 1]]),
  // +5 jumps
  ...[0, 5, 10, 15, 20, 25].map((base) => [base, base + 5]),
  // mixed moves
  [2.5, 7.5],
  [7.5, 12.5],
  [12.5, 17.5],
  [1, 6],
  [3, 8],
  [4, 9],
])

/**
 * @param {{ pixelBorderTopPx?: number | null, measuredTopPx?: number | null }} result
 * @param {string[]} errors
 * @param {string} label
 */
function assertLibMatchesPixelBorder(result, errors, label) {
  const pixel = result.pixelBorderTopPx
  const lib = result.measuredTopPx
  if (!Number.isFinite(pixel)) {
    errors.push(`${label}: no pixelBorderTopPx`)
    return
  }
  if (!Number.isFinite(lib)) {
    errors.push(`${label}: no measuredTopPx`)
    return
  }
  const tol = tolForPx(pixel)
  if (Math.abs(lib - pixel) > tol) {
    errors.push(`${label}: pixel=${pixel}px lib=${lib}px (tol ±${tol})`)
  }
}

/**
 * @param {import('puppeteer-core').Page} page
 * @param {string} base
 * @param {number} offset
 */
async function measureScene(page, base, offset) {
  const url = `${base}?offset=${offset}`
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
  await page.waitForFunction(() => window.__foCanvasBlockMeasure?.ready === true, null, {
    timeout: 60_000,
  })
  const bootErr = await page.evaluate(() => window.__foCanvasBlockMeasure?.bootError)
  if (bootErr) throw new Error(bootErr)
  return page.evaluate(async () => window.__foCanvasBlockMeasure.measure())
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-canvas-block-measure-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  /** @type {string[]} */
  const errors = []
  /** @type {Record<number, Awaited<ReturnType<typeof measureScene>> | undefined>} */
  const byOffset = {}

  try {
    const base = `http://127.0.0.1:${port}/__localtests__/fo-canvas-block-measure-e2e.html`

    for (const offset of ALL_OFFSETS) {
      const result = await measureScene(page, base, offset)
      byOffset[offset] = result
      const before = errors.length
      assertLibMatchesPixelBorder(result, errors, `scene@${offset}`)
      if (errors.length === before) {
        console.log(`  ✓ scene@${offset} pixel=${result.pixelBorderTopPx}px lib=${result.measuredTopPx}px`)
      }
    }

    const r0 = byOffset[0]
    const r25 = byOffset[2.5]
    const r5 = byOffset[5]
    if (r0 && r25 && r5) {
      console.log('\n  user model (pixel border → lib):')
      console.log(`    top:      pixel=${r0.pixelBorderTopPx}px  lib=${r0.measuredTopPx}px`)
      console.log(`    +2.5px:   pixel=${r25.pixelBorderTopPx}px  lib=${r25.measuredTopPx}px`)
      console.log(`    +5px:     pixel=${r5.pixelBorderTopPx}px  lib=${r5.measuredTopPx}px`)
      const halfDelta =
        Number.isFinite(r25.pixelBorderTopPx) && Number.isFinite(r0.pixelBorderTopPx)
          ? r25.pixelBorderTopPx - r0.pixelBorderTopPx
          : null
      const fiveDelta =
        Number.isFinite(r5.pixelBorderTopPx) && Number.isFinite(r0.pixelBorderTopPx)
          ? r5.pixelBorderTopPx - r0.pixelBorderTopPx
          : null
      console.log(`    Δ(0→2.5): pixel=${halfDelta}px  lib=${r25.measuredTopPx - r0.measuredTopPx}px`)
      console.log(`    Δ(0→5):   pixel=${fiveDelta}px  lib=${r5.measuredTopPx - r0.measuredTopPx}px`)
    }

    for (const [from, to] of DELTA_PAIRS) {
      const rA = byOffset[from] ?? (await measureScene(page, base, from))
      const rB = byOffset[to] ?? (await measureScene(page, base, to))
      byOffset[from] = rA
      byOffset[to] = rB

      const pixelDelta =
        Number.isFinite(rA.pixelBorderTopPx) && Number.isFinite(rB.pixelBorderTopPx)
          ? rB.pixelBorderTopPx - rA.pixelBorderTopPx
          : null
      const libDelta =
        Number.isFinite(rA.measuredTopPx) && Number.isFinite(rB.measuredTopPx)
          ? rB.measuredTopPx - rA.measuredTopPx
          : null

      if (!Number.isFinite(pixelDelta) || !Number.isFinite(libDelta)) {
        errors.push(`delta ${from}→${to}: missing pixel or lib border`)
        continue
      }

      const tol = tolForPx(pixelDelta)
      if (Math.abs(libDelta - pixelDelta) > tol) {
        errors.push(`delta ${from}→${to}: pixel Δ=${pixelDelta}px lib Δ=${libDelta}px (tol ±${tol})`)
      } else {
        console.log(`  ✓ delta ${from}→${to} pixel Δ=${pixelDelta}px lib Δ=${libDelta}px`)
      }
    }

    if (errors.length) {
      console.error('\nFAIL — fo-canvas-block-measure-e2e\n')
      for (const e of errors) console.error(`  • ${e}`)
      process.exitCode = 1
      return
    }

    console.log(
      `\n[fo-canvas-block-measure-e2e] headed OK (${ALL_OFFSETS.length} pixel scenes + ${DELTA_PAIRS.length} pixel deltas)`,
    )
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

runHeaded().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
