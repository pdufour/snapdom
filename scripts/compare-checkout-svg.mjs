#!/usr/bin/env node
/**
 * Programmatic diff: live #capture-target computed styles vs SVG foreignObject clone.
 *
 * Usage:
 *   node scripts/compare-checkout-svg.mjs
 *   node scripts/compare-checkout-svg.mjs --svg test.svg
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const HOST = process.env.HOST ?? '127.0.0.1'
const PORT = Number(process.env.PORT) || 5174

const PROPS = [
  'line-height',
  'height',
  'display',
  'font-size',
  'margin-bottom',
  'font-weight',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
}

function parseArgs() {
  const svgIdx = process.argv.indexOf('--svg')
  return {
    svgFile: svgIdx >= 0 ? path.resolve(process.argv[svgIdx + 1]) : null,
  }
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0])
      const rel = urlPath === '/' ? '/__localtests__/checkout-example.html' : urlPath
      const abs = path.join(REPO_ROOT, path.normalize(rel).replace(/^(\.\.(\/|\\|$))+/, ''))
      if (!abs.startsWith(REPO_ROOT)) {
        res.writeHead(403)
        res.end('Forbidden')
        return
      }
      fs.stat(abs, (err, stat) => {
        if (err || !stat.isFile()) {
          res.writeHead(404)
          res.end('Not found')
          return
        }
        res.writeHead(200, {
          'Content-Type': MIME[path.extname(abs)] ?? 'application/octet-stream',
          'Cache-Control': 'no-store',
        })
        fs.createReadStream(abs).pipe(res)
      })
    })
    server.listen(PORT, HOST, () => resolve(server))
  })
}

function parseClassRules(cssText) {
  const map = new Map()
  if (!cssText) return map
  for (const m of cssText.matchAll(/\.(c\d+)\{([^}]+)\}/g)) {
    const props = {}
    for (const chunk of m[2].split(';')) {
      const i = chunk.indexOf(':')
      if (i < 0) continue
      const k = chunk.slice(0, i).trim()
      const v = chunk.slice(i + 1).trim()
      if (k && v) props[k] = v
    }
    map.set(m[1], props)
  }
  return map
}

async function runCompare(page, svgOverride) {
  return page.evaluate(
    async ({ PROPS, svgOverride }) => {
      const PROPS_LIST = PROPS

      function elementKids(el) {
        return [...el.children].filter((n) => n.nodeType === 1)
      }

      function nodePath(el, root) {
        const parts = []
        let n = el
        while (n && n !== root) {
          const parent = n.parentElement
          const sibs = elementKids(parent).filter((c) => c.tagName === n.tagName)
          const idx = sibs.indexOf(n)
          const hint = (n.textContent || '').trim().slice(0, 24).replace(/\s+/g, ' ')
          parts.unshift(
            `${n.tagName.toLowerCase()}[${idx}]${hint ? `:"${hint}"` : ''}`,
          )
          n = parent
        }
        return parts.join(' > ')
      }

      function parseClassRules(cssText) {
        const map = new Map()
        if (!cssText) return map
        for (const m of cssText.matchAll(/\.(c\d+)\{([^}]+)\}/g)) {
          const props = {}
          for (const chunk of m[2].split(';')) {
            const i = chunk.indexOf(':')
            if (i < 0) continue
            const k = chunk.slice(0, i).trim()
            const v = chunk.slice(i + 1).trim()
            if (k && v) props[k] = v
          }
          map.set(m[1], props)
        }
        return map
      }

      function snapClassName(el) {
        return [...el.classList].find((c) => /^c\d+$/.test(c)) || null
      }

      function readProp(cs, prop) {
        return cs.getPropertyValue(prop).trim()
      }

      function dataUrlToSvg(dataUrl) {
        const prefix = 'data:image/svg+xml;charset=utf-8,'
        if (!dataUrl.startsWith(prefix)) return dataUrl
        return decodeURIComponent(dataUrl.slice(prefix.length))
      }

      let svgStr = svgOverride
      if (!svgStr) {
        const { snapdom } = await import('/dist/snapdom.mjs')
        const target = document.getElementById('capture-target')
        const dataUrl = await snapdom.toRaw(target, { embedFonts: true })
        svgStr = dataUrlToSvg(dataUrl)
      } else if (svgStr.trimStart().startsWith('<img')) {
        const src = svgStr.match(/src="([^"]+)"/)?.[1]
        if (src) svgStr = dataUrlToSvg(src.replace(/&amp;/g, '&'))
      }

      const styleMatch = svgStr.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
      const classMap = parseClassRules(styleMatch?.[1] ?? '')

      const iframe = document.createElement('iframe')
      iframe.setAttribute(
        'style',
        'position:absolute;left:-9999px;top:0;width:900px;height:900px;border:0',
      )
      document.body.appendChild(iframe)
      const win = iframe.contentWindow
      const idoc = iframe.contentDocument
      idoc.open()
      idoc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
      idoc.close()

      const parsed = new DOMParser().parseFromString(svgStr, 'image/svg+xml')
      const svgEl = parsed.documentElement
      const importErr = parsed.querySelector('parsererror')
      if (importErr) throw new Error('SVG parse error')
      idoc.body.appendChild(idoc.importNode(svgEl, true))
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

      const liveRoot = document.getElementById('capture-target')
      const cloneRoot =
        idoc.getElementById('capture-target') ||
        idoc.querySelector('#capture-target') ||
        idoc.querySelector('.checkout-page') ||
        idoc.querySelector('foreignObject .checkout-page') ||
        idoc.querySelector('foreignObject div[xmlns] > div')

      const diffs = []
      const matches = []

      function walk(liveEl, cloneEl) {
        if (!liveEl || !cloneEl) return
        const p = nodePath(liveEl, liveRoot)
        const liveCs = getComputedStyle(liveEl)
        const cloneCs = win.getComputedStyle(cloneEl)
        const cls = snapClassName(cloneEl)
        const snap = cls ? classMap.get(cls) || {} : {}

        for (const prop of PROPS_LIST) {
          const liveVal = readProp(liveCs, prop)
          const cloneVal = readProp(cloneCs, prop)
          const snapVal = snap[prop] ?? '(not in class)'
          const row = {
            path: p,
            tag: liveEl.tagName.toLowerCase(),
            prop,
            live: liveVal,
            clone: cloneVal,
            snapClass: cls,
            snapCss: snapVal,
          }
          if (liveVal !== cloneVal) diffs.push(row)
          else matches.push(row)
        }

        const lk = elementKids(liveEl)
        const ck = elementKids(cloneEl).filter(
          (n) => n.tagName !== 'STYLE',
        )
        const n = Math.max(lk.length, ck.length)
        for (let i = 0; i < n; i++) {
          if (!lk[i] || !ck[i]) {
            diffs.push({
              path: `${p} > child[${i}]`,
              tag: '?',
              prop: '(structure)',
              live: lk[i]?.tagName ?? 'missing',
              clone: ck[i]?.tagName ?? 'missing',
              snapClass: null,
              snapCss: '',
            })
            continue
          }
          walk(lk[i], ck[i])
        }
      }

      if (liveRoot && cloneRoot) walk(liveRoot, cloneRoot)
      else {
        diffs.push({
          path: '#capture-target',
          prop: '(root)',
          live: liveRoot ? 'found' : 'missing',
          clone: cloneRoot ? 'found' : 'missing',
        })
      }

      iframe.remove()

      const cloneProbe = {
        hasCaptureId: !!idoc.getElementById('capture-target'),
        checkoutPage: !!idoc.querySelector('.checkout-page'),
        foreignObject: !!idoc.querySelector('foreignObject'),
        foDivs: idoc.querySelectorAll('foreignObject div').length,
      }

      return {
        diffs,
        matchCount: matches.length,
        diffCount: diffs.length,
        classCount: classMap.size,
        svgBytes: svgStr.length,
        cloneProbe,
        svgHead: svgStr.slice(0, 400),
        sampleClasses: [...classMap.entries()]
          .filter(([k]) => ['c11', 'c12', 'c13', 'c8', 'c10'].includes(k))
          .map(([k, v]) => ({
            class: k,
            lineHeight: v['line-height'],
            height: v.height,
            display: v.display,
            fontSize: v['font-size'],
          })),
      }
    },
    { PROPS, svgOverride },
  )
}

function printReport(result, label) {
  console.log(`\n=== ${label} ===`)
  console.log(`SVG bytes: ${result.svgBytes}  classes: ${result.classCount}`)
  console.log(`Matches: ${result.matchCount}  Diffs: ${result.diffCount}`)

  if (result.sampleClasses?.length) {
    console.log('\nKey captured classes (line-height / height):')
    console.table(result.sampleClasses)
  }

  if (result.diffs.length === 0) {
    console.log('\nNo computed-style diffs between live and SVG clone.')
    return
  }

  const structural = result.diffs.filter((d) => d.prop === '(structure)' || d.prop === '(root)')
  const style = result.diffs.filter((d) => !structural.includes(d))

  if (structural.length) {
    console.log('\n--- Structure mismatches ---')
    console.table(
      structural.map(({ path, live, clone }) => ({ path, live, clone })),
    )
  }

  if (style.length) {
    console.log('\n--- Live vs SVG clone (computed) ---')
    console.table(
      style.map(({ path, tag, prop, live, clone, snapClass, snapCss }) => ({
        path: path.length > 60 ? '…' + path.slice(-57) : path,
        tag,
        prop,
        live,
        clone,
        snap: snapClass ? `${snapClass} ${snapCss}` : snapCss,
      })),
    )
  }
}

async function main() {
  const { svgFile } = parseArgs()
  let svgOverride = null
  if (svgFile) {
    svgOverride = fs.readFileSync(svgFile, 'utf8')
    console.log(`Using SVG file: ${svgFile}`)
  }

  const server = await startServer()
  const url = `http://${HOST}:${PORT}/__localtests__/checkout-example.html`
  console.log(`Page: ${url}`)

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 520, height: 700 } })

  try {
    await page.goto(url, { waitUntil: 'networkidle' })

    const fresh = await runCompare(page, null)
    const freshSvgPath = path.join(REPO_ROOT, '__localtests__/checkout-fresh.svg')
    await page
      .evaluate(async () => {
        const { snapdom } = await import('/dist/snapdom.mjs')
        const target = document.getElementById('capture-target')
        const dataUrl = await snapdom.toRaw(target, { embedFonts: true })
        const prefix = 'data:image/svg+xml;charset=utf-8,'
        return decodeURIComponent(dataUrl.slice(prefix.length))
      })
      .then((svg) => fs.writeFileSync(freshSvgPath, svg))
    console.log(`Saved fresh SVG: ${freshSvgPath}`)
    if (fresh.cloneProbe) console.log('Clone probe:', fresh.cloneProbe)
    if (fresh.classCount === 0 && fresh.svgHead) {
      console.log('SVG head:', fresh.svgHead.slice(0, 200))
    }
    printReport(fresh, 'Fresh capture (snapdom.toSvg)')

    if (svgFile) {
      const fromFile = await runCompare(page, svgOverride)
      printReport(fromFile, `From file: ${path.basename(svgFile)}`)
    } else {
      const diskSvg = path.join(REPO_ROOT, 'test.svg')
      if (fs.existsSync(diskSvg)) {
        const disk = fs.readFileSync(diskSvg, 'utf8')
        const fromDisk = await runCompare(page, disk)
        printReport(fromDisk, 'From repo test.svg')
      }
    }

    const outPath = path.join(REPO_ROOT, '__localtests__/checkout-compare-report.json')
    fs.writeFileSync(
      outPath,
      JSON.stringify({ fresh, generatedAt: new Date().toISOString() }, null, 2),
    )
    console.log(`\nWrote ${outPath}`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
