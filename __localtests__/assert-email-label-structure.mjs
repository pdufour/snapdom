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

async function main() {
  const { server, port } = await startStaticServer()
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1300, height: 900 } })

  try {
    await page.goto(`http://127.0.0.1:${port}/__localtests__/checkout-example.html`, {
      waitUntil: 'load',
    })

    // Run capture → structure report renders into #structure-host
    await page.locator('#btn-capture').click()
    await page.waitForSelector('#structure-host .structure-report', { timeout: 60_000 })

    const emailSection = page
      .locator('#structure-host .structure-section')
      .filter({ has: page.locator('h3:text("Email Address (label)")') })

    const sectionCount = await emailSection.count()
    if (sectionCount !== 1) {
      throw new Error(`Expected exactly 1 Email Address (label) section, found ${sectionCount}`)
    }

    // Exactness is enforced by the report (epsilon-only for floats); any mismatch is marked .warn.
    // We intentionally ignore the "line-height (computed string)" row because live may stay "normal"
    // while the clone resolves to a px value, even when glyph paint matches.
    const warns = await emailSection.locator('tr.warn').evaluateAll((trs) =>
      trs.map((tr) => {
        const tds = [...tr.querySelectorAll('td')].map((td) => (td.textContent || '').trim())
        return { metric: tds[0] || '', rowText: (tr.textContent || '').trim().replace(/\s+/g, ' ') }
      }),
    )
    const filtered = warns.filter((w) => w.metric !== 'line-height (computed string)')
    if (filtered.length) {
      throw new Error(
        `Email Address (label) has ${filtered.length} mismatched rows:\n` +
          filtered.map((w) => w.rowText).join('\n'),
      )
    }

    // Note: we only assert the Email Address (label) section here.
  } finally {
    await page.close().catch(() => {})
    await browser.close().catch(() => {})
    await new Promise((resolve) => server.close(resolve))
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err?.stack || String(err))
  process.exitCode = 1
})

