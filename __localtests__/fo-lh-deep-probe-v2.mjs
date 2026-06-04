#!/usr/bin/env node
/**
 * Deep line-height / flex-strut / FO serialization probes (headed Chrome).
 *
 *   npm run compile && node __localtests__/fo-lh-deep-probe-v2.mjs
 *   node __localtests__/fo-lh-deep-probe-v2.mjs --section lh-sweep
 *
 * Writes split JSON under .sandbox-edit/ (line-height-sweep-v2.json, etc.).
 * HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_PORT = 9945

const LH_SWEEP = ['normal', '1', '1em', '1.35', '21.6px', 'inherit', 'from-live']
const PARENT_LEAF = [
  { lh: '1.35', lhOn: 'leaf' },
  { lh: '1.35', lhOn: 'parent' },
  { lh: '21.6px', lhOn: 'leaf' },
  { lh: '21.6px', lhOn: 'parent' },
  { lh: 'normal', lhOn: 'leaf' },
  { lh: 'normal', lhOn: 'parent' },
]
const FLEX_ALIGN = ['stretch', 'flex-start', 'baseline', 'center']
const TRIM_MODES = ['none', 'leading-trim-both', 'text-box-trim-both', 'text-box-edge-auto']
const DPRS = [1, 2]

const args = process.argv.slice(2)
const sectionOnly = args.includes('--section') ? args[args.indexOf('--section') + 1] : null
const dprFilter = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : null

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
  return den > 0 ? roundPx(num / den) : null
}

function summarizeLhSweep(rows) {
  const halfLeading = rows.map((r) => r.metrics?.halfLeadingComputedPx ?? r.metrics?.halfLeadingLhFsPx)
  const canvasDelta = rows.map((r) => r.canvasDeltaPx)
  const r = pearson(halfLeading, canvasDelta)
  const spread =
    canvasDelta.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...canvasDelta.filter(Boolean)) - Math.min(...canvasDelta.filter(Boolean)))
      : null
  /** @type {string[]} */
  const notes = []
  notes.push(`r(canvasΔ, halfLeading)=${r ?? '—'}; canvasΔ spread=${spread ?? '—'}px across lh sweep.`)
  const at135 = rows.find((x) => x.lhVariant === '1.35')
  if (at135?.canvasDeltaPx != null && at135.metrics?.halfLeadingComputedPx != null) {
    const diff = roundPx(Math.abs(at135.canvasDeltaPx - at135.metrics.halfLeadingComputedPx))
    notes.push(
      `At lh=1.35: canvasΔ=${at135.canvasDeltaPx}px vs halfLeading=${at135.metrics.halfLeadingComputedPx}px (|Δ−½lh|=${diff}px).`,
    )
  }
  const atNormal = rows.find((x) => x.lhVariant === 'normal')
  if (atNormal?.canvasDeltaPx != null && atNormal.metrics?.halfLeadingLhFsPx != null) {
    notes.push(
      `At lh=normal: canvasΔ=${atNormal.canvasDeltaPx}px but layout halfLeading=${atNormal.metrics.halfLeadingLhFsPx}px — drift does not follow stretch-inflated layout lh.`,
    )
  }
  return { pearsonR: r, canvasDeltaSpreadPx: spread, notes }
}

function summarizeFlexAlign(rows) {
  const spread =
    rows.map((r) => r.canvasDeltaPx).filter((v) => v != null).length >= 2
      ? roundPx(
          Math.max(...rows.map((r) => r.canvasDeltaPx).filter(Boolean)) -
            Math.min(...rows.map((r) => r.canvasDeltaPx).filter(Boolean)),
        )
      : null
  const heightSpread =
    rows.map((r) => r.metrics?.leafHeightGbcr).filter((v) => v != null).length >= 2
      ? roundPx(
          Math.max(...rows.map((r) => r.metrics?.leafHeightGbcr).filter(Boolean)) -
            Math.min(...rows.map((r) => r.metrics?.leafHeightGbcr).filter(Boolean)),
        )
      : null
  return {
    canvasDeltaSpreadPx: spread,
    leafHeightSpreadPx: heightSpread,
    notes: [
      `align-items sweep: canvasΔ spread=${spread ?? '—'}px; leaf GBCR height spread=${heightSpread ?? '—'}px.`,
      spread != null && spread < 0.1
        ? 'Canvas drift ~constant across flex align modes — FO bitmap offset independent of cross-axis alignment.'
        : 'Canvas drift varies with flex align-items — inspect per-row layout box vs strut.',
    ],
  }
}

async function probe(page, port, qs) {
  const url = `http://127.0.0.1:${port}/__localtests__/fo-lh-deep-probe-v2.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foLhDeepProbeV2?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__foLhDeepProbeV2?.bootError)
  if (bootErr) throw new Error(bootErr)
  return page.evaluate(() => window.__foLhDeepProbeV2.result)
}

async function writeJson(name, payload) {
  const outPath = path.join(SANDBOX, name)
  await fs.promises.mkdir(SANDBOX, { recursive: true })
  await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
  console.log(`Wrote ${outPath}`)
  return outPath
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const headed = process.env.HEADLESS !== '1'
  const generatedAt = new Date().toISOString()
  const dprs = dprFilter != null ? [dprFilter] : DPRS

  try {
    if (!sectionOnly || sectionOnly === 'lh-sweep') {
      for (const dpr of dprs) {
        /** @type {Record<string, unknown>[]} */
        const rows = []
        for (const lh of LH_SWEEP) {
          console.log(`\n=== lh-sweep lh=${lh} dpr=${dpr} ===`)
          const qs = new URLSearchParams({
            section: 'lh-sweep',
            lh,
            dpr: String(dpr),
            scale: '1',
          })
          rows.push(await probe(page, port, qs))
        }
        const suffix = dpr === 2 ? '-dpr2' : ''
        await writeJson(`line-height-sweep-v2${suffix}.json`, {
          fixture: 'fo-lh-deep-probe-v2',
          section: 'lh-sweep',
          lhSweep: LH_SWEEP,
          dpr,
          scale: 1,
          headed,
          generatedAt,
          rows,
          summary: summarizeLhSweep(rows),
        })
      }
    }

    if (!sectionOnly || sectionOnly === 'parent-leaf') {
      const rows = []
      for (const { lh, lhOn } of PARENT_LEAF) {
        console.log(`\n=== parent-leaf lh=${lh} on=${lhOn} ===`)
        const qs = new URLSearchParams({ section: 'parent-leaf', lh, lhOn, dpr: '1', scale: '1' })
        rows.push(await probe(page, port, qs))
      }
      await writeJson('parent-leaf-lh-v2.json', {
        fixture: 'fo-lh-deep-probe-v2',
        section: 'parent-leaf',
        variants: PARENT_LEAF,
        dpr: 1,
        headed,
        generatedAt,
        rows,
        summary: {
          notes: [
            'Compare parent nav lh vs leaf lh — who controls FO raster strut when flex stretch inflates box?',
            ...rows.map(
              (r) =>
                `${r.lhOn} lh=${r.lhVariant}: parentLh=${r.parentComputedLh} leafLh=${r.leafComputedLh} canvasΔ=${r.canvasDeltaPx}`,
            ),
          ],
        },
      })
    }

    if (!sectionOnly || sectionOnly === 'flex-align') {
      const rows = []
      for (const align of FLEX_ALIGN) {
        console.log(`\n=== flex-align ${align} ===`)
        const qs = new URLSearchParams({ section: 'flex-align', align, dpr: '1', scale: '1' })
        rows.push(await probe(page, port, qs))
      }
      await writeJson('flex-lh-decouple-v2.json', {
        fixture: 'fo-lh-deep-probe-v2',
        section: 'flex-align',
        alignVariants: FLEX_ALIGN,
        dpr: 1,
        headed,
        generatedAt,
        rows,
        summary: summarizeFlexAlign(rows),
      })
    }

    if (!sectionOnly || sectionOnly === 'strut-math') {
      const landmarks = ['Home', 'Products']
      const rows = []
      for (const landmark of landmarks) {
        console.log(`\n=== strut-math ${landmark} ===`)
        const qs = new URLSearchParams({ section: 'strut-math', landmark, dpr: '1', scale: '1' })
        rows.push(await probe(page, port, qs))
      }
      await writeJson('strut-math-v2.json', {
        fixture: 'fo-lh-deep-probe-v2',
        section: 'strut-math',
        landmarks,
        dpr: 1,
        headed,
        generatedAt,
        rows,
      })
    }

    if (!sectionOnly || sectionOnly === 'fo-serialized') {
      const row = await probe(
        page,
        port,
        new URLSearchParams({ section: 'fo-serialized', dpr: '1', scale: '1' }),
      )
      await writeJson('fo-lh-serialized-v2.json', {
        fixture: 'fo-lh-deep-probe-v2',
        section: 'fo-serialized',
        headed,
        generatedAt,
        row,
      })
    }

    if (!sectionOnly || sectionOnly === 'trim-dpr') {
      for (const dpr of dprs) {
        const rows = []
        for (const trim of TRIM_MODES) {
          console.log(`\n=== trim-dpr trim=${trim} dpr=${dpr} ===`)
          const qs = new URLSearchParams({
            section: 'trim-dpr',
            trim,
            dpr: String(dpr),
            scale: '1',
          })
          rows.push(await probe(page, port, qs))
        }
        const suffix = dpr === 2 ? '-dpr2' : ''
        await writeJson(`trim-dpr-v2${suffix}.json`, {
          fixture: 'fo-lh-deep-probe-v2',
          section: 'trim-dpr',
          trimModes: TRIM_MODES,
          dpr,
          headed,
          generatedAt,
          rows,
        })
      }
    }

    if (!sectionOnly || sectionOnly === 'font-metrics') {
      const row = await probe(
        page,
        port,
        new URLSearchParams({ section: 'font-metrics', dpr: '1', scale: '1' }),
      )
      await writeJson('font-metrics-v2.json', {
        fixture: 'fo-lh-deep-probe-v2',
        section: 'font-metrics',
        headed,
        generatedAt,
        row,
      })
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
