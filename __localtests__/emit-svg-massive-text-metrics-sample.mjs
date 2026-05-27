import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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

function ensureStandaloneSvg(svgMarkup) {
  const trimmed = (svgMarkup || '').trim()
  if (!trimmed.startsWith('<svg')) {
    throw new Error('No <svg> root found in captured markup')
  }
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n'
  return `${xmlHeader}${trimmed}\n`
}

async function main() {
  const repeat = Number.parseInt(getArg('repeat', '8'), 10) || 8
  const count = Number.parseInt(getArg('count', '0'), 10) || 0
  const fuzz = getArg('fuzz', '0') === '1'
  const seed = Number.parseInt(getArg('seed', '1337'), 10) || 1337
  const width = Number.parseInt(getArg('width', '2400'), 10) || 2400
  const rowHeight = Number.parseInt(getArg('rowHeight', '28'), 10) || 28
  const visibleRows = Number.parseInt(getArg('visibleRows', '120'), 10) || 120
  const outlierSigma = Number.parseFloat(getArg('outlierSigma', '2.5')) || 2.5
  const timeoutMs = Number.parseInt(getArg('timeoutMs', '120000'), 10) || 120000
  const output = getArg('output', '__localtests__/svg-massive-text-metrics.sample.svg')

  const { server, port } = await startStaticServer()
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
  const runUrl = new URL(`http://127.0.0.1:${port}/__localtests__/svg-massive-text-metrics.html`)
  runUrl.searchParams.set('repeat', String(repeat))
  runUrl.searchParams.set('count', String(count))
  runUrl.searchParams.set('fuzz', fuzz ? '1' : '0')
  if (fuzz) runUrl.searchParams.set('seed', String(seed))
  runUrl.searchParams.set('width', String(width))
  runUrl.searchParams.set('rowHeight', String(rowHeight))
  runUrl.searchParams.set('visibleRows', String(visibleRows))
  runUrl.searchParams.set('outlierSigma', String(outlierSigma))

  try {
    await page.goto(runUrl.toString(), { waitUntil: 'load' })
    await page.waitForFunction(() => window.__SVG_METRICS_DONE__ === true, null, {
      timeout: timeoutMs,
    })

    const stageMarkup = await page.evaluate(() => {
      const stage = document.getElementById('stage')
      return stage ? stage.outerHTML : ''
    })
    const standalone = ensureStandaloneSvg(stageMarkup)

    const outputPath = path.resolve(repoRoot, output)
    await fs.writeFile(outputPath, standalone, 'utf8')

    // eslint-disable-next-line no-console
    console.log(`Wrote sample SVG: ${path.relative(repoRoot, outputPath)}`)
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
