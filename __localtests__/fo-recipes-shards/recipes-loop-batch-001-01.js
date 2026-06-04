/**
 * Loop batch 001 shard (worker 1) — layout / containment / flow.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w01-001',
    label: 'Loop b001 w01 #001: FO subgrid descendants',
    idea: 'display:subgrid on FO * — nested grid alignment probe',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject{display:grid!important}foreignObject *{display:grid!important;grid-template-columns:subgrid!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 01; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w01-002',
    label: 'Loop b001 w01 #002: contain strict + content-visibility',
    idea: 'contain:strict + content-visibility:auto on FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject{contain:strict!important;content-visibility:auto!important}foreignObject *{contain:layout style!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 01; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w01-003',
    label: 'Loop b001 w01 #003: aspect-ratio FO shell',
    idea: 'aspect-ratio:1/1 on foreignObject — intrinsic box clash',
    css:
      FO_BASELINE_CSS +
      'foreignObject{aspect-ratio:1/1!important;width:auto!important;height:auto!important;overflow:visible!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 01; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w01-004',
    label: 'Loop b001 w01 #004: masonry-auto-flow',
    idea: 'masonry-auto-flow:next on FO grid — experimental layout path',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(0,1fr))!important;masonry-auto-flow:next!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 01; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w01-005',
    label: 'Loop b001 w01 #005: flex align-content space-between',
    idea: 'align-content:space-between on column flex FO',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:column!important;align-content:space-between!important;min-height:100%!important}foreignObject *{flex-shrink:1!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 01; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
