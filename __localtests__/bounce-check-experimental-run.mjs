#!/usr/bin/env node
/**
 * Run blackbox gate with checkout query params (does not edit bounce-check.mjs).
 *
 *   node bounce-check-experimental-run.mjs fo-y-half-leading-meta
 *   node bounce-check-experimental-run.mjs --disable-gbcr-nudge
 *   node bounce-check-experimental-run.mjs -- 'patch=none&experimentalRasterDisableGbcrNudge=1'
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const argv = process.argv.slice(2)
let query = ''
if (argv[0] === '--disable-gbcr-nudge') {
  query = '?experimentalRasterDisableGbcrNudge=1'
} else if (argv[0] === '--') {
  query = argv[1] ? `?${argv[1].replace(/^\?/, '')}` : ''
} else {
  const patch = (argv[0] || '').trim()
  if (!patch) {
    console.error(
      'Usage: node bounce-check-experimental-run.mjs <experimentalRasterSvgPatch>',
    )
    console.error('       node bounce-check-experimental-run.mjs --disable-gbcr-nudge')
    console.error(
      '       node bounce-check-experimental-run.mjs -- experimentalFoTextLineHeightNormal=1',
    )
    console.error('       node bounce-check-experimental-run.mjs -- <query-without-leading-?>')
    process.exit(2)
  }
  query = `?experimentalRasterSvgPatch=${encodeURIComponent(patch)}`
}

const dir = path.dirname(fileURLToPath(import.meta.url))
const srcPath = path.join(dir, 'bounce-check.mjs')
let src = fs.readFileSync(srcPath, 'utf8')
const needle = '/__localtests__/checkout-example.html`,'
if (!src.includes(needle)) {
  console.error('bounce-check.mjs goto URL pattern not found; cannot inject query')
  process.exit(1)
}
const patched = src.replace(needle, `/__localtests__/checkout-example.html${query}\`,`)
const tmp = path.join(dir, '.bounce-check-experimental-tmp.mjs')
fs.writeFileSync(tmp, patched)
const r = spawnSync(process.execPath, [tmp], { stdio: 'inherit', cwd: path.join(dir, '..') })
try {
  fs.unlinkSync(tmp)
} catch {}
process.exit(r.status ?? 1)
