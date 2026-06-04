#!/usr/bin/env node
/**
 * Canvas decode pipeline audit — SVG → URL → decode → drawImage.
 * Compares product-baseline vs w7 (fo-y-half-leading-meta).
 *
 *   npm run compile && node __localtests__/fo-decode-pipeline-audit.mjs
 *   node __localtests__/fo-decode-pipeline-audit.mjs --dpr 1 --json .sandbox-edit/decode-pipeline-audit.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'decode-pipeline-audit.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function printReport(payload) {
  console.log('\n--- FO decode pipeline audit ---\n')
  console.log(`dpr=${payload.dpr} · ${payload.landmark}`)
  const c = payload.comparison ?? {}
  console.log(
    `Baseline canvasΔ=${roundPx(c.baselineCanvasDeltaPx)} svgΔ=${roundPx(c.baselineSvgDeltaPx)}`,
  )
  console.log(
    `W7 canvasΔ=${roundPx(c.w7CanvasDeltaPx)} FO y Δ=${roundPx(c.w7FoYDeltaPx)} halfLeading=${roundPx(c.w7HalfLeadingMetaPx)}`,
  )
  console.log(`Improvement (baseline−w7): ${roundPx(c.canvasDeltaImprovementPx)} px`)
  console.log(`Product gbcr dy: ${roundPx(c.productGbcrDyPx)}`)

  for (const v of payload.variants ?? []) {
    const dec = v.decode?.blobUrl ?? {}
    const prod = v.drawComputed?.product?.draw ?? {}
    const lab = v.drawComputed?.lab?.draw ?? {}
    const actP = v.drawActual?.product?.[0]
    const actL = v.drawActual?.lab?.[0]
    console.log(`\n${v.recipeId} (${v.rasterPatch})`)
    console.log(
      `  decode natural ${dec.naturalWidth}×${dec.naturalHeight} · SVG root ${v.svgAttrs?.post?.svgRoot?.width}×${v.svgAttrs?.post?.svgRoot?.height}`,
    )
    console.log(
      `  FO y=${v.svgAttrs?.post?.foreignObject?.y ?? '—'} (Δ ${roundPx(v.svgAttrs?.foYDeltaPx) ?? '—'})`,
    )
    console.log(
      `  computed product draw dy=${roundPx(prod.dy)} · lab dy=${roundPx(lab.dy)}`,
    )
    console.log(
      `  actual product draw dy=${roundPx(actP?.dy)} · lab dy=${roundPx(actL?.dy)}`,
    )
    console.log(`  ink canvasΔ=${roundPx(v.ink?.liveVsCanvasTopPx)} svgΔ=${roundPx(v.ink?.liveVsSvgTopPx)}`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-decode-pipeline-audit.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
    await page.waitForFunction(() => window.__foDecodePipelineAudit?.ready === true, null, {
      timeout: 300_000,
    })
    const bootErr = await page.evaluate(() => window.__foDecodePipelineAudit?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const payload = await page.evaluate(async () => window.__foDecodePipelineAudit.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headed = true

    const outDir = path.join(REPO_ROOT, '.sandbox-edit')
    await fs.promises.mkdir(outDir, { recursive: true })
    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

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
