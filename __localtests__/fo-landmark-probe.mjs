#!/usr/bin/env node
/**
 * Verify fo-fix-lab mini fixture resolves all registered probe landmarks.
 *
 *   node __localtests__/fo-landmark-probe.mjs
 *   node __localtests__/fo-landmark-probe.mjs --landmark Home
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { FO_FIX_LAB_REGISTERED_LANDMARKS } from './fo-fix-lab-fixture.mjs'

const args = process.argv.slice(2)
const singleLandmark = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1]?.trim() : null
const landmarks = singleLandmark ? [singleLandmark] : [...FO_FIX_LAB_REGISTERED_LANDMARKS]
const RECIPE = 'product-baseline'

async function main() {
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const failures = []

  try {
    for (const landmark of landmarks) {
      const url =
        `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html` +
        `?recipe=${encodeURIComponent(RECIPE)}&auto=1&landmark=${encodeURIComponent(landmark)}`
      console.log(`[fo-landmark-probe] ${landmark} → ${url}`)
      await page.goto(url, { waitUntil: 'load' })
      await page.waitForFunction(() => window.__foFixLab?.done === true, null, { timeout: 300_000 })
      const err = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError || null)
      if (err) {
        failures.push({ landmark, error: String(err) })
        console.error(`  FAIL: ${err}`)
      } else {
        const rowLandmark = await page.evaluate(
          () => window.__foFixLastResult?.landmark ?? null,
        )
        console.log(`  OK (row.landmark=${rowLandmark})`)
      }
    }
  } finally {
    await browser.close()
    server.close()
  }

  if (failures.length) {
    console.error('\n[fo-landmark-probe] failures:')
    for (const f of failures) console.error(`  ${f.landmark}: ${f.error}`)
    process.exit(1)
  }
  console.log(`\n[fo-landmark-probe] all ${landmarks.length} landmark(s) passed`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
