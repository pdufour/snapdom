import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

function getArg(name, fallback) {
  const arg = process.argv.find((entry) => entry.startsWith(`--${name}=`))
  if (!arg) return fallback
  return arg.slice(name.length + 3)
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  if (ext === '.css') return 'text/css; charset=utf-8'
  if (ext === '.svg') return 'image/svg+xml; charset=utf-8'
  if (ext === '.json') return 'application/json; charset=utf-8'
  return 'application/octet-stream'
}

async function startStaticServer() {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      const rel = decodeURIComponent(url.pathname.replace(/^\//, ''))
      const abs = path.resolve(repoRoot, rel)
      if (!abs.startsWith(repoRoot + path.sep)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }
      const data = await fs.readFile(abs)
      res.writeHead(200, { 'Content-Type': contentType(abs) })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const addr = server.address()
  const port = typeof addr === 'object' && addr ? addr.port : 0
  if (!port) throw new Error('Failed to start static server')
  return { server, port }
}

async function main() {
  const count = Number.parseInt(getArg('count', '1000'), 10) || 1000
  const seed = Number.parseInt(getArg('seed', '1337'), 10) || 1337
  const width = Number.parseInt(getArg('width', '2400'), 10) || 2400
  const rowHeight = Number.parseInt(getArg('rowHeight', '28'), 10) || 28
  const visibleRows = Number.parseInt(getArg('visibleRows', '120'), 10) || 120
  const outlierSigma = Number.parseFloat(getArg('outlierSigma', '2.5')) || 2.5
  const output = getArg('output', '__localtests__/svg-massive-text-metrics.summary.json')
  const timeoutMs = Number.parseInt(getArg('timeoutMs', '120000'), 10) || 120000

  const tAll0 = performance.now()
  const { server, port } = await startStaticServer()
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
  const runUrl = new URL(`http://127.0.0.1:${port}/__localtests__/svg-massive-text-metrics.html`)
  runUrl.searchParams.set('count', String(count))
  runUrl.searchParams.set('seed', String(seed))
  runUrl.searchParams.set('width', String(width))
  runUrl.searchParams.set('rowHeight', String(rowHeight))
  runUrl.searchParams.set('visibleRows', String(visibleRows))
  runUrl.searchParams.set('outlierSigma', String(outlierSigma))

  try {
    const tNav0 = performance.now()
    await page.goto(runUrl.toString(), { waitUntil: 'load' })
    const tNav1 = performance.now()
    const tWait0 = performance.now()
    await page.waitForFunction(() => window.__SVG_METRICS_DONE__ === true, null, {
      timeout: timeoutMs,
    })
    const tWait1 = performance.now()

    const tEval0 = performance.now()
    const result = await page.evaluate(() => window.__SVG_METRICS_RESULT__ || null)
    const tEval1 = performance.now()
    if (!result) throw new Error('No metrics payload found on window.__SVG_METRICS_RESULT__')

    const tWrite0 = performance.now()
    const outputPath = path.resolve(repoRoot, output)
    await fs.writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8')
    const tWrite1 = performance.now()

    // eslint-disable-next-line no-console
    console.log(`Wrote summary JSON: ${path.relative(repoRoot, outputPath)}`)
    // eslint-disable-next-line no-console
    console.log(
      `Cases=${result.measuredCount} outliers=${result.outlierCount} baseline.mean=${result.stats?.driftBaselineVsCanvas?.mean?.toFixed?.(3) ?? 'n/a'}`,
    )
    // eslint-disable-next-line no-console
    console.log(
      `Timings(ms): nav=${(tNav1 - tNav0).toFixed(1)} wait=${(tWait1 - tWait0).toFixed(1)} eval=${(tEval1 - tEval0).toFixed(1)} write=${(tWrite1 - tWrite0).toFixed(1)} total=${(performance.now() - tAll0).toFixed(1)}`,
    )
  } finally {
    await page.close().catch(() => {})
    await browser.close().catch(() => {})
    await new Promise((resolve) => server.close(resolve))
  }
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error?.stack || String(error))
  process.exitCode = 1
})
