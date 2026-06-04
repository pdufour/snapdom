#!/usr/bin/env node
/**
 * Parent vs leaf line-height — who drives FO canvas drift?
 *
 *   node __localtests__/fo-parent-leaf-lh-probe.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const MODES = ['inherit', 'leaf-1.35', 'parent-1.35', 'leaf-21.6', 'parent-48', 'both-21.6']
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'parent-leaf-lh-probe.json')

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dpr = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1

async function main() {
  if (!process.env.SNAPDOM_LOCAL_PORT) process.env.SNAPDOM_LOCAL_PORT = '9938'
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  const rows = []

  try {
    for (const mode of MODES) {
      const url = `http://127.0.0.1:${port}/__localtests__/fo-parent-leaf-lh-probe.html?mode=${encodeURIComponent(mode)}&dpr=${dpr}`
      await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
      await page.waitForFunction(() => window.__parentLeafLhProbe?.ready === true, null, {
        timeout: 120_000,
      })
      rows.push(await page.evaluate(async () => window.__parentLeafLhProbe.run()))
    }

    const payload = {
      fixture: 'fo-parent-leaf-lh-probe',
      recipe: 'product-baseline',
      dpr,
      generatedAt: new Date().toISOString(),
      rows,
    }
    const outPath = jsonOut ? path.resolve(REPO_ROOT, jsonOut) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log('\n--- parent vs leaf line-height ---\n')
    for (const r of rows) {
      console.log(
        `${r.mode.padEnd(14)} leafLh=${r.metrics.leafLhPx ?? '—'} parentLh=${r.metrics.parentLhPx ?? '—'} canvasΔ=${r.threeWay.liveVsCanvasTopPx?.toFixed(3)} svgΔ=${r.threeWay.liveVsSvgTopPx?.toFixed(3)}`,
      )
    }
    console.log(`\nWrote ${outPath}`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
