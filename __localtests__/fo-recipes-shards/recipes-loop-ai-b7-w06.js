/**
 * Loop AI batch-7 FO recipe shard (worker 6) — clip-path polygon / mask gradient / mask-composite exclude.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w06-001',
    label: 'Loop AI b7 w06 #001: clip-path polygon trapezoid',
    idea: 'clip-path:polygon trapezoid on FO * — geometric clip vs FO text ink bounds',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{clip-path:polygon(0 0,100% 0,96% 100%,4% 100%)!important;' +
      '-webkit-clip-path:polygon(0 0,100% 0,96% 100%,4% 100%)!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 06; clip-path polygon only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w06-002',
    label: 'Loop AI b7 w06 #002: mask-image linear-gradient fade',
    idea: 'mask-image:linear-gradient fade on FO root — alpha mask layer vs full FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{mask-image:linear-gradient(to bottom,black 85%,transparent 100%)!important;' +
      '-webkit-mask-image:linear-gradient(to bottom,black 85%,transparent 100%)!important;' +
      'mask-size:100% 100%!important;-webkit-mask-size:100% 100%!important;' +
      'mask-repeat:no-repeat!important;overflow:visible!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 06; mask-image linear-gradient only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w06-003',
    label: 'Loop AI b7 w06 #003: mask-composite exclude dual',
    idea: 'mask-composite:exclude + dual linear-gradient masks on FO * — layered mask merge policy',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mask-image:linear-gradient(black,black),linear-gradient(white,white)!important;' +
      '-webkit-mask-image:linear-gradient(black,black),linear-gradient(white,white)!important;' +
      'mask-composite:exclude!important;-webkit-mask-composite:xor!important;' +
      'mask-size:100% 100%,100% 100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 06; mask-composite exclude only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w06-004',
    label: 'Loop AI b7 w06 #004: polygon + gradient + exclude bundle',
    idea: 'clip-path polygon + mask-image gradient + mask-composite exclude on FO * — combined clip/mask stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{clip-path:polygon(2% 0,98% 0,100% 100%,0 100%)!important;' +
      '-webkit-clip-path:polygon(2% 0,98% 0,100% 100%,0 100%)!important;' +
      'mask-image:linear-gradient(135deg,black 70%,transparent 100%),linear-gradient(black,black)!important;' +
      '-webkit-mask-image:linear-gradient(135deg,black 70%,transparent 100%),linear-gradient(black,black)!important;' +
      'mask-composite:exclude!important;-webkit-mask-composite:xor!important;' +
      'mask-size:100% 100%,100% 100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 06; polygon + gradient + exclude bundle; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
