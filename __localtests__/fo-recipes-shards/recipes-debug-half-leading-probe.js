/**
 * DEBUG-ONLY recipes — half-leading hypothesis probes (never promote to src/).
 * @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]}
 */
export const FO_FIX_RECIPES_SHARD = [
  {
    id: 'debug-half-leading-neutralize',
    active: false,
    category: 'debug',
    label: 'DEBUG half-leading neutralize (translateY trunc)',
    idea:
      'Apply translateY(halfLeading % 1) on each FO text leaf — tests fractional half-leading truncation hypothesis only.',
    inject: 'both',
    radicalPatch: 'debug-half-leading-neutralize',
    notes: 'Harness-only; do not rank or promote.',
  },
]
