#!/usr/bin/env node
/**
 * Run drift-batch222 and drift-batch32222 triple matrices in parallel.
 * Triple score per batch: |svgΔ| + |canvasΔ| + |svg−canvas|.
 *
 *   node __localtests__/fo-drift-batch222-32222-parallel.mjs --parallel 4 --landmark Home
 *   npm run debug:fo-drift-batch222-32222
 */
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')

const MATRIX_222 = path.join(__dirname, 'fo-drift-batch222-triple-matrix.mjs')
const MATRIX_32222 = path.join(__dirname, 'fo-drift-batch32222-triple-matrix.mjs')
const PORT_222 = 8840
const PORT_32222 = 8860

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const parallel = argAfter('--parallel') ?? '4'
const landmark = argAfter('--landmark') ?? 'Home'
const dpr = argAfter('--dpr') ?? '1'

/**
 * @param {string} script
 * @param {number} portHint
 */
function runMatrix(script, portHint) {
  return new Promise((resolve, reject) => {
    const childArgs = [
      script,
      '--parallel',
      parallel,
      '--landmark',
      landmark,
      '--dpr',
      dpr,
    ]
    const env = { ...process.env, SNAPDOM_LOCAL_PORT: String(portHint) }
    const child = spawn(process.execPath, childArgs, {
      cwd: REPO_ROOT,
      env,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${path.basename(script)} exit ${code}`))
    })
  })
}

async function main() {
  console.log(
    `Parallel triple matrices: drift-batch222 (port hint ${PORT_222}) + drift-batch32222 (port hint ${PORT_32222}) parallel=${parallel} landmark=${landmark}`,
  )
  await Promise.all([runMatrix(MATRIX_222, PORT_222), runMatrix(MATRIX_32222, PORT_32222)])
  console.log('\nBoth batches complete. See .sandbox-edit/fo-drift-batch222-triple-matrix.json and fo-drift-batch32222-triple-matrix.json')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
