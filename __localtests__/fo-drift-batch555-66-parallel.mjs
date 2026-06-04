#!/usr/bin/env node
/**
 * Run drift-batch555 and drift-batch66 triple matrices in parallel.
 *
 *   node __localtests__/fo-drift-batch555-66-parallel.mjs --parallel 4 --landmark Home
 *   npm run debug:fo-drift-batch555-66
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')

const BATCH555_SCRIPT = path.join(__dirname, 'fo-drift-batch555-triple-matrix.mjs')
const BATCH66_SCRIPT = path.join(__dirname, 'fo-drift-batch66-triple-matrix.mjs')

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const landmark = String(argAfter('--landmark') ?? 'Home').trim()
const dprArg = argAfter('--dpr')
const parallel = Math.max(1, Number(argAfter('--parallel') ?? 4))

/**
 * @param {string} script
 * @param {string} label
 */
function runMatrixScript(script, label) {
  return new Promise((resolve, reject) => {
    /** @type {string[]} */
    const childArgs = [script, '--parallel', String(parallel), '--landmark', landmark]
    if (dprArg != null && Number.isFinite(Number(dprArg))) {
      childArgs.push('--dpr', String(dprArg))
    }
    console.log(`\n=== Starting ${label} (${path.basename(script)}) ===`)
    const child = spawn(process.execPath, childArgs, {
      cwd: REPO_ROOT,
      env: process.env,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve(undefined)
      else reject(new Error(`${label} exit ${code}`))
    })
  })
}

async function main() {
  console.log(
    `Parallel triple matrices: batch555 + batch66 landmark=${landmark} parallel=${parallel} each`,
  )

  await Promise.all([
    runMatrixScript(BATCH555_SCRIPT, 'drift-batch555'),
    runMatrixScript(BATCH66_SCRIPT, 'drift-batch66'),
  ])

  const report555Path = path.join(SANDBOX, 'fo-drift-batch555-triple-matrix.json')
  const report66Path = path.join(SANDBOX, 'fo-drift-batch66-triple-matrix.json')
  /** @type {object[]} */
  const combinedRanked = []
  /** @type {object[]} */
  const combinedErrors = []

  for (const [batch, reportPath] of [
    ['drift-batch555', report555Path],
    ['drift-batch66', report66Path],
  ]) {
    if (!fs.existsSync(reportPath)) {
      console.warn(`Missing report ${reportPath}`)
      continue
    }
    const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
    for (const row of data.ranked ?? []) {
      combinedRanked.push({ ...row, batch })
    }
    for (const row of data.errors ?? []) {
      combinedErrors.push({ ...row, batch })
    }
  }

  combinedRanked.sort((a, b) => {
    if (a.tripleScore !== b.tripleScore) return a.tripleScore - b.tripleScore
    if (a.absSvgVsCanvas !== b.absSvgVsCanvas) return a.absSvgVsCanvas - b.absSvgVsCanvas
    if (a.absCanvasVsLive !== b.absCanvasVsLive) return a.absCanvasVsLive - b.absCanvasVsLive
    return a.absSvgVsLive - b.absSvgVsLive
  })

  const mergedPath = path.join(SANDBOX, 'fo-drift-batch555-66-parallel-merged.json')
  const report = {
    landmark,
    dpr: dprArg != null ? Number(dprArg) : 1,
    parallelEach: parallel,
    rankMetric: '|svgΔ|+|canvasΔ|+|svg−canvas|',
    batch555Report: report555Path,
    batch66Report: report66Path,
    bestCombinedRecipeId: combinedRanked[0]?.recipeId ?? null,
    bestCombinedTripleScore: combinedRanked[0]?.tripleScore ?? null,
    ranked: combinedRanked,
    errors: combinedErrors,
  }
  fs.mkdirSync(SANDBOX, { recursive: true })
  fs.writeFileSync(mergedPath, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`\nWrote combined ranking ${mergedPath}`)
  if (combinedRanked[0]) {
    console.log(
      `Best combined triple: ${combinedRanked[0].recipeId} (${combinedRanked[0].batch}) score=${combinedRanked[0].tripleScore}`,
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
