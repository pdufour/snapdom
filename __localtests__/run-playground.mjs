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
    if (!rel) rel = '__localtests__/parity-playground.html'
    const abs = path.resolve(repoRoot, rel)
    try {
      const data = await fs.readFile(abs)
      const ext = path.extname(abs)
      const mime = { '.html': 'text/html', '.mjs': 'text/javascript', '.js': 'text/javascript' }[ext] || 'application/octet-stream'
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
  const page = await browser.newPage({ viewport: { width: 1280, height: 1200 }, deviceScaleFactor: 2 })
  page.setDefaultTimeout(600000)
  
  await page.goto(`http://127.0.0.1:${port}/__localtests__/parity-playground.html`)
  
  console.log('Generating tests...')
  await page.click('#btn-generate')
  
  console.log('Measuring live ink tops...')
  const testCount = await page.evaluate(() => document.querySelectorAll('.test-case').length)
  const liveInkData = {}
  
  for (let i = 0; i < testCount; i++) {
    const id = `test-${i}`
    const handle = await page.$(`#${id} .target`)
    if (!handle) continue
    
    const box = await handle.boundingBox()
    const screenshot = await handle.screenshot()
    
    // Measure ink top from screenshot in page context
    const inkTop = await page.evaluate(async (base64) => {
      const img = new Image()
      img.src = `data:image/png;base64,${base64}`
      await new Promise(r => img.onload = r)
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
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

      return firstY / (window.devicePixelRatio || 1)
    }, screenshot.toString('base64'))
    
    liveInkData[id] = { inkTop, rectTop: box.y }
    if (i % 50 === 0) console.log(`Measured ${i}/${testCount}`)
  }

  console.log('Running Snapdom rasterization and comparison...')
  await page.evaluate((liveData) => {
    window.liveInkData = liveData
    
    // Override measureInkOfElement to use injected live data
    window.measureInkOfElement = async (el) => {
      const id = el.closest('.test-case').id
      const data = window.liveInkData[id]
      // We return ink position relative to document top
      return data.rectTop + data.inkTop
    }
    
    // Override measureInkOfCanvas to return position relative to document top
    const oldMeasureInkOfCanvas = window.measureInkOfCanvas
    window.measureInkOfCanvas = async (canvas, target) => {
      const rect = target.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const ctx = canvas.getContext('2d')
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

      // Return ink position relative to document top
      // Snapdom's toCanvas(target) draws the element starting at 0,0 in the canvas
      // plus any fractional metadata offsets (which we handle in toCanvas).
      // So the rasterized element's document-relative top is rect.top + firstY/dpr
      // (assuming rect.top is where Snapdom thinks the element is).
      return rect.top + (firstY / dpr)
    }
  }, liveInkData)

  // Update btnVerify.onclick logic in the page to handle document-relative comparison
  await page.evaluate(() => {
    const btnVerify = document.getElementById('btn-verify');
    const results = document.getElementById('results');
    const status = document.getElementById('status');
    const renderReport = window.renderReport;

    btnVerify.onclick = async () => {
      btnVerify.disabled = true;
      results.style.display = 'block';
      results.innerHTML = 'Verifying...';
      
      const testElements = document.querySelectorAll('.test-case');
      const reports = [];
      
      const { snapdom } = await import('../dist/snapdom.mjs');
      
      let processed = 0;
      for (const el of testElements) {
        const target = el.querySelector('.target');
        const config = el.querySelector('.test-label').innerText;
        
        // 1) Get live ink (doc-relative)
        const liveInkDocTop = await window.measureInkOfElement(target);
        
        // 2) Get raster ink (doc-relative)
        const canvas = await snapdom.toCanvas(target, { embedFonts: true });
        const rasterInkDocTop = await window.measureInkOfCanvas(canvas, target);
        
        const drift = rasterInkDocTop - liveInkDocTop;
        reports.push({ config, drift, live: liveInkDocTop, raster: rasterInkDocTop });
        
        processed++;
        if (processed % 20 === 0) {
          status.innerText = `Verified ${processed}/${testElements.length}`;
        }
      }
      
      renderReport(reports);
      btnVerify.disabled = false;
    };
  })

  await page.click('#btn-verify')

  // Wait for verification to finish with longer timeout
  await page.waitForFunction(() => document.getElementById('btn-verify').disabled === false, { timeout: 300000 })

  
  const report = await page.evaluate(() => document.getElementById('results').innerText)
  console.log('\n--- FINAL REPORT ---')
  console.log(report)

  await browser.close()
  server.close()
}

main()
