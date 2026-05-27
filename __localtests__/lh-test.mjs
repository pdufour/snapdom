import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

async function main() {
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1')
    let rel = decodeURIComponent(url.pathname.replace(/^\//, ''))
    if (!rel) rel = '__localtests__/lh-debug.html'
    const abs = path.resolve(repoRoot, rel)
    try {
      const data = await fs.readFile(abs)
      const ext = path.extname(abs)
      const mime = { '.html': 'text/html', '.mjs': 'text/javascript', '.js': 'text/javascript', '.svg': 'image/svg+xml' }[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': mime })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  server.listen(0)
  const port = server.address().port

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 800, height: 600 }, deviceScaleFactor: 2 })
  
  await page.goto(`http://127.0.0.1:${port}/__localtests__/lh-debug.html`)
  
  const testStrategy = async (name, setupFn) => {
    await page.evaluate((setupCode) => {
      const target = document.getElementById('target')
      const label = document.getElementById('target-label')
      target.style.cssText = ''
      label.style.cssText = 'display: block; font-size: 48px; font-weight: 700; color: #444; margin: 0 0 25px 0; letter-spacing: normal;'
      const setupCodeFn = new Function('target', 'label', setupCode)
      setupCodeFn(target, label)
    }, setupFn)

    const emailHandle = await page.locator('#target')
    const livePng = await emailHandle.screenshot()
    
    return await page.evaluate(async ({ strategyName, livePngBase64 }) => {
      const { snapdom } = await import('/dist/snapdom.mjs')
      const target = document.getElementById('target')
      
      async function measureInk(urlOrB64) {
        const img = new Image()
        img.src = urlOrB64.startsWith('data:') ? urlOrB64 : `data:image/png;base64,${urlOrB64}`
        await new Promise(r => img.onload = r)
        const canvas = document.createElement('canvas')
        const dpr = window.devicePixelRatio || 1
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
        let firstY = -1
        for (let i = 0; i < canvas.height; i++) {
          for (let j = 0; j < canvas.width; j++) {
            if (data[(i * canvas.width + j) * 4 + 3] > 10) {
              firstY = i
              break
            }
          }
          if (firstY !== -1) break
        }
        return firstY / dpr
      }

      const liveInkTop = await measureInk(livePngBase64)
      const targetCanvas = await snapdom.toCanvas(target, { embedFonts: true })
      const rasterInkTop = await measureInk(targetCanvas.toDataURL())
      
      return {
        strategy: strategyName,
        liveInkTop,
        rasterInkTop,
        drift: rasterInkTop - liveInkTop
      }
    }, { strategyName: name, livePngBase64: livePng.toString('base64') })
  }
  
  console.log(await testStrategy('normal', ''))
  console.log(await testStrategy('lh-0.999-flex', 'target.style.display = "inline-flex"; target.style.alignItems = "center"; target.style.lineHeight = "0.999"; target.style.height = "56px"; target.style.verticalAlign = "top"'))
  console.log(await testStrategy('lh-0.999-pad', 'target.style.display = "inline-block"; target.style.lineHeight = "0.999"; target.style.paddingTop = "4.024px"; target.style.verticalAlign = "top"'))

  await browser.close()
  server.close()
}

main()
