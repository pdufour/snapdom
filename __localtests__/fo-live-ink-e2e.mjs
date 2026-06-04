#!/usr/bin/env node
/** Live-only ink e2e — DOM raster path via fo-ink-bounds-scan.mjs */
import {
  alignedCases,
  barHeightCases,
  borderTopCases,
  runStageHeaded,
  runStageNodeSynthetic,
  shiftCases,
} from './fo-ink-e2e-runner.mjs'

const CASES = [
  ...borderTopCases('live'),
  ...alignedCases('live'),
  ...shiftCases('live'),
  ...barHeightCases('live'),
]

async function main() {
  runStageNodeSynthetic('live', CASES)
  await runStageHeaded('live', CASES, 'fo-live-ink-e2e')
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
