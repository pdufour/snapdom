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
  
  const results = await page.evaluate(async () => {
    const target = document.getElementById('target')
    const label = document.getElementById('target-label')
    
    // Set a known fractional position
    document.getElementById('test').style.marginTop = '0.1875px'
    const rect = target.getBoundingClientRect()
    // rect.top will be something like 20.1875
    
    async function measureInk(svgText, w, h) {
      const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText)
      const img = new Image()
      img.src = svgUrl
      await new Promise(r => img.onload = r)
      const canvas = document.createElement('canvas')
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
      let firstY = -1
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          if (data[(y * canvas.width + x) * 4 + 3] > 10) {
            firstY = y
            break
          }
        }
        if (firstY !== -1) break
      }
      return firstY / dpr
    }

    const html = target.outerHTML
    const w = rect.width, h = rect.height
    
    // Strategy 1: Naive (fractional viewBox origin)
    const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0.1875 ${w} ${h}">
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
      </foreignObject>
    </svg>`
    
    // Strategy 2: Integer viewBox, fractional FO shift
    const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <foreignObject x="0" y="-0.1875" width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
      </foreignObject>
    </svg>`

    // Strategy 3: Integer viewBox, fractional CSS transform shift
    const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="transform:translate(0,-0.1875px);will-change:transform;">${html}</div>
      </foreignObject>
    </svg>`

    return {
      rectTop: rect.top,
      ink1: await measureInk(svg1, w, h),
      ink2: await measureInk(svg2, w, h),
      ink3: await measureInk(svg3, w, h)
    }
  })

  console.log(results)

  await browser.close()
  server.close()
}

main()
