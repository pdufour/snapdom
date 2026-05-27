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
  const page = await browser.newPage({ viewport: { width: 800, height: 600 }, deviceScaleFactor: 4 })
  
  await page.goto(`http://127.0.0.1:${port}/__localtests__/lh-debug.html`)
  
  const testStrategy = async (name, setupFn) => {
    return await page.evaluate(async ({ strategyName, setupCode }) => {
      const { snapdom } = await import('/dist/snapdom.mjs')
      const target = document.getElementById('target')
      const label = document.getElementById('target-label')
      
      // Reset
      target.style.cssText = ''
      label.style.cssText = 'display: block; font-size: 48px; font-weight: 700; color: #444; margin: 0 0 25px 0; letter-spacing: normal;'
      
      // Apply strategy
      eval(setupCode)
      
      const el = document.getElementById('test')
      const tr = el.getBoundingClientRect()
      
      // We manually build a special SVG to test the strategy
      const svgNS = "http://www.w3.org/2000/svg"
      const svg = document.createElementNS(svgNS, "svg")
      svg.setAttribute("width", tr.width)
      svg.setAttribute("height", tr.height)
      
      // STRATEGY: Fractional ViewBox
      if (strategyName === 'frac-vb') {
         svg.setAttribute("viewBox", "0.18 0.18 " + tr.width + " " + tr.height)
      } else {
         svg.setAttribute("viewBox", "0 0 " + tr.width + " " + tr.height)
      }
      
      const fo = document.createElementNS(svgNS, "foreignObject")
      fo.setAttribute("x", "0")
      fo.setAttribute("y", "0")
      fo.setAttribute("width", "100%")
      fo.setAttribute("height", "100%")
      
      const clone = el.cloneNode(true)
      fo.appendChild(clone)
      svg.appendChild(fo)
      
      const svgText = new XMLSerializer().serializeToString(svg)
      const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText)
      
      async function measureInk(urlOrB64, w, h) {
        const img = new Image()
        img.src = urlOrB64
        await new Promise(r => img.onload = r)
        const canvas = document.createElement('canvas')
        const dpr = window.devicePixelRatio || 1
        canvas.width = Math.round(w * dpr)
        canvas.height = Math.round(h * dpr)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
        let firstY = -1
        for (let i = 0; i < canvas.height; i++) {
          for (let j = 0; j < canvas.width; j++) {
            if (data[(i * canvas.width + j) * 4 + 3] > 50) {
              firstY = i
              break
            }
          }
          if (firstY !== -1) break
        }
        return firstY / dpr
      }

      const rasterInkTop = await measureInk(svgUrl, tr.width, tr.height)
      
      return {
        strategy: strategyName,
        rasterInkTop
      }
    }, { strategyName: name, setupCode: setupFn })
  }
  
  console.log(await testStrategy('integer', ''))
  console.log(await testStrategy('frac-vb', ''))

  await browser.close()
  server.close()
}

main()
