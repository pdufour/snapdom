/**
 * Loop AI batch-8 FO recipe shard (worker 1) — text-fix: h2 pin line-height from live (variants only).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w01-001',
    label: 'Loop AI b8 w01 #001: pin lh + FO>div normal',
    idea: 'h2-pin-line-height-from-live measured strut + FO>div line-height:normal wrapper restore',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b8 w01; live lh pin + wrapper normal strut; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w01-002',
    label: 'Loop AI b8 w01 #002: pin lh + baseline valign',
    idea: 'h2-pin-line-height-from-live on text leaves + vertical-align:baseline inline strut anchor',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b8 w01; live lh pin + baseline valign on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w01-003',
    label: 'Loop AI b8 w01 #003: pin lh + from-font cascade',
    idea: 'h2-pin-line-height-from-live + line-height:from-font on FO * before measured strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b8 w01; live lh pin + from-font cascade hint; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w01-004',
    label: 'Loop AI b8 w01 #004: pin lh + text-box-edge normal',
    idea: 'h2-pin-line-height-from-live + text-box-edge:normal on FO text leaves — line box edge vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-edge:normal!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b8 w01; live lh pin + text-box-edge normal; text metric only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
