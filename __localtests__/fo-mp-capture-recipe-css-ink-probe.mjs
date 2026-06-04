#!/usr/bin/env node
/**
 * Trace honest bitmap ink tops for mp-capture-recipe-css vs product-baseline (Home).
 *   npm run compile && node __localtests__/fo-mp-capture-recipe-css-ink-probe.mjs
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const RECIPES = [
  'mp-h2-fo-normalize-capture',
  'product-baseline',
  'mp-capture-recipe-css',
]
const LANDMARK = 'Home'

async function probeRecipe(page, port, recipe) {
  const qs = new URLSearchParams({
    recipe,
    auto: '1',
    view: 'live',
    dpr: '1',
    landmark: LANDMARK,
    includeInactive: '1',
    _cb: String(Date.now()),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab-ink-v2.html?${qs}`
  console.log(`\n=== ${recipe} ===\n  ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
    timeout: 180_000,
  })
  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(`${recipe}: ${bootErr}`)

  return page.evaluate((recipeId) => {
    const row = window.__foFixLastResult
    const runner = window.__foFixLabRunner
    const root = document.getElementById('capture-target')
    const el =
      runner?.findLandmarkInkElement?.(root, 'Home') ??
      runner?.findLandmarkElement?.(root, 'Home')
    const svgImg = document.querySelector('#svg-slot img.preview-svg')
    const canvas = document.querySelector('#view-canvas canvas.preview-canvas')
    const dpr = row?.dpr ?? 1
    const previewScanOpts = {
      visibleInk: true,
      inkScanMode: 'integer',
      scanBandFromRootTop: true,
    }

    const liveRangeVisible = runner?.measureLiveVisibleInkTop?.(el, root) ?? null
    const livePreviewBitmap =
      runner?.measureLiveDisplayedPreviewInkTop?.(el, root, dpr, previewScanOpts) ?? null
    const liveInk = runner?.reconcileLivePreviewInkWithVisibleDom?.(
      liveRangeVisible,
      livePreviewBitmap,
    )

    const svgPreviewRaw =
      svgImg instanceof HTMLImageElement && svgImg.naturalWidth > 0
        ? runner?.measurePreviewBitmapInkTopInRoot?.(svgImg, root, el, dpr, previewScanOpts)
        : null
    const canvasPreviewRaw =
      canvas instanceof HTMLCanvasElement && canvas.width > 0
        ? runner?.measurePreviewBitmapInkTopInRoot?.(canvas, root, el, dpr, previewScanOpts)
        : null
    const bitmapRowsAgree =
      svgPreviewRaw && canvasPreviewRaw
        ? runner?.previewStageBitmapRowsAgree?.(svgPreviewRaw, canvasPreviewRaw)
        : null

    const m =
      typeof window.__foFixLab?.canonicalComparableInk === 'function'
        ? window.__foFixLab.canonicalComparableInk(row)
        : null

    return {
      recipe: recipeId,
      canonical: m,
      row: {
        liveInkTopPx: row?.liveInkTopPx,
        livePreviewBitmapInkTopPx: row?.livePreviewBitmapInkTopPx,
        liveUsesVisibleCap: row?.liveUsesVisibleCap,
        liveInkReference: row?.liveInkReference,
        svgPreviewVisibleTopPx: row?.svgPreviewVisibleTopPx,
        svgPreviewBitmapTopPx: row?.svgPreviewBitmapTopPx,
        svgImgDecodeLagPx: row?.svgImgDecodeLagPx,
        canvasPreviewVisibleTopPx: row?.canvasPreviewVisibleTopPx,
        canvasPreviewBitmapTopPx: row?.canvasPreviewBitmapTopPx,
        canvasVisibleLagPx: row?.canvasVisibleLagPx,
        previewBitmapRowsAgree: row?.previewBitmapRowsAgree,
        sharedPreviewBitmapTopPx: row?.sharedPreviewBitmapTopPx,
      },
      trace: {
        liveRangeVisible,
        livePreviewBitmap,
        liveInk,
        svgPreviewRaw,
        canvasPreviewRaw,
        bitmapRowsAgree,
      },
      verdict: document.getElementById('verdict')?.textContent?.trim() ?? '',
      staleBanner: document.getElementById('stage-order-stale-warn')?.textContent?.trim() ?? null,
    }
  }, recipe)
}

async function main() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('SKIP_HEADED=1 — requires headed Chrome')
    process.exit(0)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()

  try {
    const results = []
    for (const recipe of RECIPES) {
      const page = await browser.newPage()
      await page.setViewportSize({ width: 560, height: 520 })
      try {
        results.push(await probeRecipe(page, port, recipe))
      } finally {
        await page.close()
      }
    }

    for (const r of results) {
      console.log(`\n--- ${r.recipe} ---`)
      console.log(
        `canonical: live=${r.canonical?.liveRoot} svg=${r.canonical?.svgRoot} canvas=${r.canonical?.canvasRoot}`,
      )
      console.log(`row fields:`, JSON.stringify(r.row, null, 2))
      const t = r.trace
      console.log('trace raw bitmap:')
      console.log(
        `  liveRange=${t.liveRangeVisible?.top} liveBitmap=${t.livePreviewBitmap?.top} liveInk=${t.liveInk?.top} usesVisibleCap=${t.liveInk?.liveUsesVisibleCap}`,
      )
      console.log(
        `  svgRaw=${t.svgPreviewRaw?.topInRoot} canvasRaw=${t.canvasPreviewRaw?.topInRoot} bitmapRowsAgree=${t.bitmapRowsAgree}`,
      )
      if (r.staleBanner) console.log(`STALE: ${r.staleBanner.slice(0, 120)}...`)
      console.log(`verdict: ${r.verdict.slice(0, 200)}`)
    }
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
