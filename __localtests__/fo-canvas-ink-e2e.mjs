#!/usr/bin/env node
/** Canvas-only ink e2e — decode drawImage path via fo-ink-bounds-scan.mjs */
import {
  alignedCases,
  barHeightCases,
  borderTopCases,
  runStageHeaded,
  runStageNodeSynthetic,
  shiftCases,
} from './fo-ink-e2e-runner.mjs'

const CASES = [
  ...borderTopCases('canvas'),
  ...alignedCases('canvas'),
  ...shiftCases('canvas'),
  ...barHeightCases('canvas'),
]

async function main() {
  runStageNodeSynthetic('canvas', CASES)
  await runStageHeaded('canvas', CASES, 'fo-canvas-ink-e2e')
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
