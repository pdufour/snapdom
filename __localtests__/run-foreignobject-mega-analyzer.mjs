import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.html') return 'text/html; charset=utf-8'
  if (ext === '.js' || ext === '.mjs') return 'text/javascript; charset=utf-8'
  if (ext === '.css') return 'text/css; charset=utf-8'
  if (ext === '.svg') return 'image/svg+xml; charset=utf-8'
  if (ext === '.png') return 'image/png'
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
  if (!port) throw new Error('Failed to start server')
  return { server, port }
}

function toInt(flagValue, fallback) {
  const n = Number.parseInt(String(flagValue || ''), 10)
  return Number.isFinite(n) ? n : fallback
}

function parseArgs(argv) {
  const out = {
    seed: 1337,
    variants: 18,
    sections: 4,
    cols: 3,
    dpr: 2,
    scanInk: false,
    output: '',
  }
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i]
    const next = argv[i + 1]
    if (a === '--seed') out.seed = toInt(next, out.seed), (i += 1)
    else if (a === '--variants') out.variants = toInt(next, out.variants), (i += 1)
    else if (a === '--sections') out.sections = toInt(next, out.sections), (i += 1)
    else if (a === '--cols') out.cols = toInt(next, out.cols), (i += 1)
    else if (a === '--dpr') out.dpr = Math.max(1, Math.min(3, Number(next) || out.dpr)), (i += 1)
    else if (a === '--scanInk') out.scanInk = true
    else if (a === '--output') out.output = String(next || ''), (i += 1)
  }
  return out
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const { server, port } = await startStaticServer()
  const browser = await chromium.launch({ headless: true })

  try {
    const page = await browser.newPage({
      viewport: { width: 1400, height: 900 },
      deviceScaleFactor: args.dpr,
    })

    const qs = new URLSearchParams()
    qs.set('seed', String(args.seed))
    qs.set('variants', String(args.variants))
    qs.set('sections', String(args.sections))
    qs.set('cols', String(args.cols))
    qs.set('dpr', String(args.dpr))
    if (args.scanInk) qs.set('scanInk', '1')

    await page.goto(
      `http://127.0.0.1:${port}/__localtests__/foreignobject-mega-analyzer.html?${qs.toString()}`,
      { waitUntil: 'load' },
    )

    await page.waitForFunction(() => window.__FO_ANALYZER_DONE__ === true, null, { timeout: 60_000 })
    const payload = await page.evaluate(() => window.__FO_ANALYZER_RESULT__)

    const json = JSON.stringify(payload, null, 2)
    if (args.output) {
      const abs = path.resolve(repoRoot, args.output)
      await fs.writeFile(abs, json, 'utf8')
      // eslint-disable-next-line no-console
      console.log(`Wrote ${payload?.measuredCount ?? 0} rows to ${path.relative(repoRoot, abs)}`)
    } else {
      // eslint-disable-next-line no-console
      console.log(json)
    }
    await page.close()
  } finally {
    await browser.close().catch(() => {})
    await new Promise((resolve) => server.close(resolve))
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err?.stack || String(err))
  process.exitCode = 1
})

