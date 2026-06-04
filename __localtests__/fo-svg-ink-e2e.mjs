#!/usr/bin/env node
/** SVG-only ink e2e — FO preview path via fo-ink-bounds-scan.mjs */
import {
  alignedCases,
  barHeightCases,
  borderTopCases,
  runStageHeaded,
  runStageNodeSynthetic,
  shiftCases,
} from './fo-ink-e2e-runner.mjs'

const CASES = [
  ...borderTopCases('svg'),
  ...alignedCases('svg'),
  ...shiftCases('svg'),
  ...barHeightCases('svg'),
]

async function main() {
  runStageNodeSynthetic('svg', CASES)
  await runStageHeaded('svg', CASES, 'fo-svg-ink-e2e')
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
