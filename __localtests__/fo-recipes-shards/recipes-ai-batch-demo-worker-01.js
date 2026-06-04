/**
 * AI-authored FO fix recipe shard — worker 01, batch ai-batch-demo (filled example).
 * ONLY edit this file. Prompt: __localtests__/fo-recipe-ai-prompts/ai-batch-demo-worker-01.md
 */

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = [
  {
    id: 'ai-batch-demo-w01-001',
    label: 'Demo: h2 stack + int-floor + decode-interval',
    idea: 'Fork h2-good-001 / next-from-rank-001 — global FO normalize + int-floor + decode-interval',
    css:
      'svg{display:block!important;overflow:visible!important}' +
      'foreignObject{overflow:visible!important}' +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject *{box-sizing:border-box!important;text-rendering:optimizeSpeed!important;font-kerning:none!important}',
    inject: 'both',
    category: 'ai-batch-demo',
    svgRootRound: 'int-floor',
    rasterPatch: 'decode-interval',
    active: true,
    notes: 'Parent: h2-good-001-rank001-int-floor. Demo shard for AI slots workflow.',
  },
  {
    id: 'ai-batch-demo-w01-002',
    label: 'Demo: flex contain + integer-viewbox + fonts-ready-interval',
    idea: 'Fork retry-001 — contain:paint on FO + min-width:0 on descendants + fonts.ready raster gate',
    css:
      'svg{overflow:visible}foreignObject{overflow:visible}' +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject{contain:paint!important}' +
      'foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'ai-batch-demo',
    svgRootRound: 'integer-viewbox',
    rasterPatch: 'fonts-ready-interval',
    active: true,
    notes: 'Parent: retry-001-flex-contain-fonts-ready-int. FO raster only.',
  },
  {
    id: 'ai-batch-demo-w01-003',
    label: 'Demo: Chromium copy + round-dims + two-stage',
    idea: 'Fork merge-001 Chromium font-kerning copy with round-dims root and two-stage decode',
    css:
      'svg{overflow:visible}foreignObject{overflow:visible}' +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      'foreignObject *{box-sizing:border-box!important}',
    inject: 'both',
    category: 'ai-batch-demo',
    svgRootRound: 'round-dims',
    rasterPatch: 'two-stage',
    active: true,
    notes: 'Parent: merge-001-h2-pin-lh-chromium-int-decode. FO raster only.',
  },
]

export default FO_FIX_RECIPES_SHARD
