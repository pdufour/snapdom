#!/usr/bin/env node
/**
 * Research round 8 — Chromium-only FO decode paint stack matrix (no snapdom).
 *
 *   node __localtests__/chromium-fo-only-round8-probe.mjs
 *   node __localtests__/chromium-fo-only-round8-probe.mjs --dpr 1 --cdp
 *
 * Writes:
 *   .sandbox-edit/research-round-8-chromium-matrix.json
 *   .sandbox-edit/research-round-8-chromium-matrix-cdp.json  (with --cdp)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_OUT = path.join(SANDBOX, 'research-round-8-chromium-matrix.json')
const DEFAULT_CDP_OUT = path.join(SANDBOX, 'research-round-8-chromium-matrix-cdp.json')

const MATRIX_PAGES = [
  { variantId: 'lh-1', path: '/__localtests__/chromium-fo-only/variant-lh-1.html' },
  { variantId: 'lh-135', path: '/__localtests__/chromium-fo-only/variant-lh-135.html' },
  { variantId: 'lh-normal', path: '/__localtests__/chromium-fo-only/variant-lh-normal.html' },
  { variantId: 'flex-start', path: '/__localtests__/chromium-fo-only/variant-flex-start.html' },
  { variantId: 'fo-y-28', path: '/__localtests__/chromium-fo-only/variant-fo-y-28.html' },
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const cdpArg = args.includes('--cdp')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

async function probeVariantPage(page, port, spec, dpr) {
  const qs = new URLSearchParams({ dpr: String(dpr), autorun: '1' })
  const url = `http://127.0.0.1:${port}${spec.path}?${qs}`
  console.log(`  ${spec.variantId}: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__chromiumFoOnlyProbe?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__chromiumFoOnlyProbe?.bootError)
  if (bootErr) return { variantId: spec.variantId, error: bootErr }

  const raw = await page.evaluate(async () => {
    const r = await window.__chromiumFoOnlyProbe.run()
    return JSON.parse(JSON.stringify(r))
  })

  return {
    variantId: spec.variantId,
    pageId: raw.pageId,
    variant: raw.variant,
    landmark: raw.landmark,
    dpr: raw.dpr,
    fixtureDims: raw.fixtureDims,
    rasterPath: raw.rasterPath,
    threeWay: raw.threeWay,
    verdict: raw.verdict,
    bitmapOnly: raw.bitmapOnly,
    glyphMetrics: raw.glyphMetrics,
    canvasInkExtents: raw.canvasInkExtents,
    foDeltaY: raw.foDeltaY ?? 0,
    halfLeadingLhFsPx: roundPx(raw.glyphMetrics?.halfLeadingLhFsPx),
    canvasDeltaPx: roundPx(raw.threeWay?.liveVsCanvasTopPx),
    svgDeltaPx: roundPx(raw.threeWay?.liveVsSvgTopPx),
    canvasDeltaVsHalfLeading:
      raw.glyphMetrics?.halfLeadingLhFsPx != null && raw.threeWay?.liveVsCanvasTopPx != null
        ? roundPx(raw.threeWay.liveVsCanvasTopPx - raw.glyphMetrics.halfLeadingLhFsPx)
        : null,
  }
}

async function runCdpNotes(page, variantId) {
  const notes = { variantId, screenshot: null, layerTree: null, boxModel: null }
  try {
    const client = await page.context().newCDPSession(page)
    await client.send('DOM.enable')
    await client.send('CSS.enable')

    const shot = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true })
    const shotPath = path.join(
      SANDBOX,
      `research-round-8-${variantId.replace(/[^a-z0-9-]/gi, '-')}.png`,
    )
    await fs.promises.mkdir(SANDBOX, { recursive: true })
    await fs.promises.writeFile(shotPath, Buffer.from(shot.data, 'base64'))
    notes.screenshot = path.relative(REPO_ROOT, shotPath)

    try {
      await client.send('LayerTree.enable')
      const { layers } = await client.send('LayerTree.layers')
      notes.layerTree = {
        layerCount: layers?.length ?? 0,
        layers: (layers ?? []).slice(0, 12).map((layer) => ({
          layerId: layer.layerId,
          name: layer.name ?? null,
          offsetX: layer.offsetX,
          offsetY: layer.offsetY,
          width: layer.width,
          height: layer.height,
          transforms: layer.transforms?.length ?? 0,
        })),
        note:
          'FO→canvas path is flat bitmap blit; expect few compositor layers on these minimal pages.',
      }
    } catch (layerErr) {
      notes.layerTree = { error: String(layerErr?.message || layerErr) }
    }

    const { root } = await client.send('DOM.getDocument')
    const { nodeId } = await client.send('DOM.querySelector', {
      nodeId: root.nodeId,
      selector: '#fixture .row a',
    })
    if (nodeId) {
      const boxModel = await client.send('DOM.getBoxModel', { nodeId })
      const { computedStyle } = await client.send('CSS.getComputedStyleForNode', { nodeId })
      const style = {}
      for (const entry of computedStyle ?? []) style[entry.name] = entry.value
      const border = boxModel.model.border
      notes.boxModel = {
        borderTop: border[1],
        borderHeight: border[5] - border[1],
        lineHeight: style['line-height'] ?? null,
        fontSize: style['font-size'] ?? null,
        alignItems: style['align-items'] ?? null,
      }
    }
  } catch (err) {
    notes.error = String(err?.message || err)
  }
  return notes
}

function synthesizeMatrix(rows) {
  const ok = rows.filter((r) => !r.error)
  const canvasDeltas = ok.map((r) => r.canvasDeltaPx).filter(Number.isFinite)
  const spread =
    canvasDeltas.length >= 2 ? roundPx(Math.max(...canvasDeltas) - Math.min(...canvasDeltas)) : null

  const lh135 = ok.find((r) => r.variantId === 'lh-135')
  const foY28 = ok.find((r) => r.variantId === 'fo-y-28')

  return {
    rowCount: rows.length,
    canvasDeltaSpreadPx: spread,
    halfLeadingMatchesCanvasDelta:
      lh135 && Number.isFinite(lh135.canvasDeltaPx) && Number.isFinite(lh135.halfLeadingLhFsPx)
        ? Math.abs(lh135.canvasDeltaPx - lh135.halfLeadingLhFsPx) < 0.05
        : null,
    foY28ClosesStrut:
      lh135 && foY28 && Number.isFinite(lh135.canvasDeltaPx) && Number.isFinite(foY28.canvasDeltaPx)
        ? roundPx(lh135.canvasDeltaPx + foY28.canvasDeltaPx)
        : null,
    allBitmapOnly: ok.length > 0 && ok.every((r) => r.bitmapOnly === true),
    top3Findings: [
      canvasDeltas.length
        ? `canvasΔ spread across lh/align variants: ${spread ?? '—'} px (headed @ dpr=${dprArg})`
        : 'Matrix probe incomplete — check headed Chrome.',
      lh135
        ? `Canonical lh-1.35: canvasΔ=${fmt(lh135.canvasDeltaPx)} ≈ halfLeading ${fmt(lh135.halfLeadingLhFsPx)} (BITMAP_ONLY class).`
        : 'lh-135 baseline missing.',
      foY28
        ? `FO y −2.8: canvasΔ=${fmt(foY28.canvasDeltaPx)} (w7 closes strut; residual ≈ Range subpixel).`
        : 'fo-y-28 variant missing.',
    ],
  }
}

function printReport(payload) {
  console.log('\n--- Research round 8: Chromium-only matrix ---\n')
  console.log(`dpr=${payload.dpr} · usesSnapdom=false\n`)
  console.log(
    'variant'.padEnd(14) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      '½(lh−fs)'.padStart(9) +
      'verdict'.padStart(14),
  )
  for (const row of payload.matrix ?? []) {
    if (row.error) {
      console.log(`${String(row.variantId).padEnd(14)} ERROR: ${row.error}`)
      continue
    }
    console.log(
      String(row.variantId).padEnd(14) +
        fmt(row.svgDeltaPx).padStart(8) +
        fmt(row.canvasDeltaPx).padStart(9) +
        fmt(row.halfLeadingLhFsPx).padStart(9) +
        String(row.verdict ?? '—').padStart(14),
    )
  }
  console.log(`\nCanvasΔ spread: ${payload.synthesis?.canvasDeltaSpreadPx ?? '—'} px`)
  console.log(`All BITMAP_ONLY: ${payload.synthesis?.allBitmapOnly ? 'yes' : 'no'}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 560 })

  /** @type {Record<string, unknown>[]} */
  const matrix = []
  /** @type {Record<string, unknown>[]} */
  const cdpNotes = []

  try {
    for (const spec of MATRIX_PAGES) {
      matrix.push(await probeVariantPage(page, port, spec, dprArg))
      if (cdpArg) {
        cdpNotes.push(await runCdpNotes(page, spec.variantId))
      }
    }

    const synthesis = synthesizeMatrix(matrix)
    const payload = {
      probe: 'chromium-fo-only-round8-matrix',
      section: 'research-round-8-chromium-matrix',
      generatedAt: new Date().toISOString(),
      dpr: dprArg,
      usesSnapdom: false,
      usesCaptureJs: false,
      landmark: 'Home',
      matrix,
      synthesis,
      pages: MATRIX_PAGES.map((p) => ({ ...p, file: p.path.replace('/__localtests__/', '') })),
      commands: [
        'node __localtests__/chromium-fo-only-round8-probe.mjs --dpr 1',
        'node __localtests__/chromium-fo-only-round8-probe.mjs --dpr 1 --cdp',
      ],
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    if (cdpArg) {
      const cdpPayload = {
        probe: 'chromium-fo-only-round8-cdp',
        generatedAt: payload.generatedAt,
        dpr: dprArg,
        notes: cdpNotes,
      }
      await fs.promises.writeFile(DEFAULT_CDP_OUT, `${JSON.stringify(cdpPayload, null, 2)}\n`)
      console.log(`Wrote ${DEFAULT_CDP_OUT}`)
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
