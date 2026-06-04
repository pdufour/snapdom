#!/usr/bin/env node
/**
 * Minimal FO+flex+16px/1.35 text — hand-built static SVG, three-way ink, BITMAP_ONLY proof.
 *
 *   npm run debug:fo-minimal-repro
 *   node __localtests__/fo-minimal-repro.mjs --json __localtests__/.sandbox-edit/minimal-repro.json
 *
 * Packages __localtests__/.sandbox-edit/chromium-bug-pack/ (minimal.svg + steps.md + probe.json).
 * Headed Chrome by default (FO→canvas ink). Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SANDBOX = path.join(__dirname, '.sandbox-edit')
const DEFAULT_OUT = path.join(SANDBOX, 'minimal-repro.json')
const BUG_PACK_DIR = path.join(SANDBOX, 'chromium-bug-pack')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const variantArg = args.includes('--variant') ? args[args.indexOf('--variant') + 1] : 'static-inline-flex'
const noSweep = args.includes('--no-sweep')
const noPack = args.includes('--no-pack')

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function printTable(payload) {
  console.log('\n--- minimal FO repro: hand-built three-way ink ---\n')
  console.log(`Verdict: ${payload.verdict ?? '—'}`)
  console.log(`Criteria: ${payload.bitmapOnly?.criteria ?? '—'}\n`)
  console.log(
    'variant'.padEnd(22) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'bitmap?'.padStart(8) +
      'svgB'.padStart(7),
  )
  for (const row of payload.variants ?? []) {
    const t = row.handBuilt?.threeWay ?? {}
    const bitmap = row.handBuilt?.bitmapOnlyDrift ? 'yes' : 'no'
    console.log(
      String(row.id).padEnd(22) +
        fmt(t.liveVsSvgTopPx).padStart(8) +
        fmt(t.liveVsCanvasTopPx).padStart(9) +
        bitmap.padStart(8) +
        String(row.svgBytes ?? '—').padStart(7),
    )
  }

  const s = payload.summary ?? {}
  console.log(`\n--- primary (${payload.primaryVariantId}) ---\n`)
  console.log(`  hand-built svgΔ:    ${fmt(s.handBuiltSvgDriftPx)}px`)
  console.log(`  hand-built canvasΔ: ${fmt(s.handBuiltCanvasDriftPx)}px`)
  console.log(`  snapdom svgΔ:       ${fmt(s.snapdomSvgDriftPx)}px`)
  console.log(`  snapdom canvasΔ:    ${fmt(s.snapdomCanvasDriftPx)}px`)
  console.log(
    `  snapdom ≈ hand-built: ${s.snapdomMatchesHandBuilt === true ? 'yes' : s.snapdomMatchesHandBuilt === false ? 'no' : '—'}`,
  )
  console.log(`\n${payload.handBuiltVerdict ?? ''}`)
  if (payload.smallestReproducingVariant) {
    const sm = payload.smallestReproducingVariant
    console.log(
      `Smallest reproducing: ${sm.id} (${sm.svgBytes ?? sm.markupBytes} bytes SVG/markup)`,
    )
  }
  console.log('')
}

/**
 * @param {Record<string, unknown>} payload
 */
function buildStepsMd(payload) {
  const t = payload.threeWay ?? {}
  const dims = payload.variants?.[0]?.handBuilt?.fixtureDims ?? {}
  return `# Chromium bug pack — minimal FO flex text drift

Investigation artifact for **BITMAP_ONLY** drift: inline \`foreignObject\` SVG ink matches live DOM,
but FO→canvas raster shifts text ink vertically. Reproduces **without snapdom capture**.

## Observed (headed Chrome, dpr=${payload.dpr}, scale=${payload.scale})

| Stage | top in border (px) | Δ vs live (px) |
|-------|-------------------:|---------------:|
| Live painted ink | ${fmt(t.livePaintedTopInBorder)} | — |
| Inline FO SVG | ${fmt(t.svgPaintedTopInBorder)} | ${fmt(t.liveVsSvgTopPx)} |
| FO→canvas raster | ${fmt(t.canvasPaintedTopInBorder)} | ${fmt(t.liveVsCanvasTopPx)} |

**Verdict:** \`${payload.verdict}\` — ${payload.bitmapOnly?.criteria ?? ''}

Hand-built static SVG (\`${payload.primaryVariantId}\`) — no snapdom serialization.

## Files

- \`minimal.svg\` — smallest self-contained FO+flex+\`font:600 16px/1.35\` inline SVG
- \`probe.json\` — full three-way ink probe output
- \`steps.md\` — this file

## Reproduce (snapdom lab)

\`\`\`bash
npm run compile
npm run debug:fo-minimal-repro
# or:
node __localtests__/fo-minimal-repro.mjs --variant static-inline-flex
\`\`\`

Opens headed Chrome, writes \`__localtests__/.sandbox-edit/minimal-repro.json\` and refreshes this pack.

## Manual Chromium repro

1. Serve this directory over HTTP (FO raster needs a document context):
   \`\`\`bash
   npx serve __localtests__/.sandbox-edit/chromium-bug-pack -p 9931
   \`\`\`
2. Open \`repro.html\` in **headed** Chrome (not headless — FO ink differs).
3. Compare live “Home” text ink top vs canvas raster of \`minimal.svg\` (DevTools or probe JSON).

Fixture outer size: ${dims.cssW ?? '—'}×${dims.cssH ?? '—'} CSS px.

## What this proves

- Drift is in **FO→bitmap raster**, not snapdom DOM serialization.
- Inline FO layout (SVG stage) agrees with live; canvas stage alone shifts ~${fmt(t.liveVsCanvasTopPx)}px.
- Checkout nav ~2.8px drift is the same class of bug on a minimal flex+text leaf.
`
}

/**
 * @param {Record<string, unknown>} payload
 */
async function packageBugPack(payload) {
  const svg = payload.staticMinimalSvg
  if (typeof svg !== 'string' || !svg.includes('foreignObject')) {
    console.warn('chromium-bug-pack: missing staticMinimalSvg — skip minimal.svg')
    return
  }

  await fs.promises.mkdir(BUG_PACK_DIR, { recursive: true })
  await fs.promises.writeFile(path.join(BUG_PACK_DIR, 'minimal.svg'), `${svg}\n`)
  await fs.promises.writeFile(path.join(BUG_PACK_DIR, 'probe.json'), `${JSON.stringify(payload, null, 2)}\n`)
  await fs.promises.writeFile(path.join(BUG_PACK_DIR, 'steps.md'), buildStepsMd(payload))

  const reproHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Minimal FO flex text — BITMAP_ONLY repro</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 16px; font: 14px/1.4 system-ui, sans-serif; background: #f8fafc; }
    h1 { font-size: 16px; }
    .row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
    .panel { background: #fff; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; }
    .panel h2 { font-size: 13px; margin: 0 0 8px; color: #475569; }
    #live {
      width: 492px;
      font: 600 16px/1.35 system-ui, -apple-system, sans-serif;
      background: #fff;
      border: 1px solid #e2e8f0;
    }
    #live .flex { display: flex; align-items: stretch; min-height: 48px; }
    #live a { display: flex; align-items: center; padding: 0 12px; color: #111; text-decoration: none; }
    object { display: block; border: 1px solid #e2e8f0; background: #fff; }
    pre { font: 11px/1.4 ui-monospace, Menlo, monospace; margin: 0; white-space: pre-wrap; }
  </style>
</head>
<body>
  <h1>Minimal FO + flex + 16px/1.35 — BITMAP_ONLY</h1>
  <p>Live DOM (left) vs inline <code>minimal.svg</code> (right). See <code>steps.md</code> and <code>probe.json</code>.</p>
  <div class="row">
    <div class="panel">
      <h2>Live DOM</h2>
      <div id="live"><div class="flex"><a href="#">Home</a></div></div>
    </div>
    <div class="panel">
      <h2>Hand-built FO SVG</h2>
      <object data="minimal.svg" type="image/svg+xml" width="492" height="50"></object>
    </div>
  </div>
  <div class="panel" style="margin-top:16px">
    <h2>Probe summary</h2>
    <pre id="summary">Load probe.json…</pre>
  </div>
  <script>
    fetch('probe.json').then(r => r.json()).then(p => {
      const t = p.threeWay || {}
      document.getElementById('summary').textContent =
        'verdict: ' + (p.verdict || '—') + '\\n' +
        'liveVsSvgTopPx: ' + (t.liveVsSvgTopPx ?? '—') + '\\n' +
        'liveVsCanvasTopPx: ' + (t.liveVsCanvasTopPx ?? '—') + '\\n' +
        (p.handBuiltVerdict || '')
    }).catch(() => {})
  </script>
</body>
</html>
`
  await fs.promises.writeFile(path.join(BUG_PACK_DIR, 'repro.html'), reproHtml)
  console.log(`Packaged ${BUG_PACK_DIR}/ (minimal.svg, steps.md, probe.json, repro.html)`)
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

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
    variant: variantArg,
    sweep: noSweep ? '0' : '1',
    snapdom: '1',
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-minimal-repro.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foMinimalRepro?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foMinimalRepro?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(async () => window.__foMinimalRepro.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.commands = [
      'npm run compile',
      'npm run debug:fo-minimal-repro',
      'node __localtests__/fo-minimal-repro.mjs --variant static-inline-flex',
    ]

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    if (!noPack) await packageBugPack(payload)

    printTable(payload)

    if (payload.verdict !== 'BITMAP_ONLY') {
      console.warn(`Expected BITMAP_ONLY on minimal case; got ${payload.verdict}`)
      process.exitCode = 1
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
