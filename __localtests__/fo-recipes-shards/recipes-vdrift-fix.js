/**
 * Vertical drift fix probes (Wave 12).
 * Pair with lab-toCanvas vDriftFix: true.
 */
export const RECIPES = [
  {
    id: 'vdrift-fix-001-ceil-nudge',
    label: 'vDriftFix #001: backing:ceil + negative fracY nudge',
    idea: 'Compensate for FO snapping by shifting destination UP by fractional GBCR top.',
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'vdrift',
    active: true,
    labToCanvasOpts: {
      vDriftFix: true,
      backingRound: 'ceil',
    },
    notes: 'Wave 12 vertical drift fix probe.',
  },
  {
    id: 'vdrift-fix-002-round-nudge',
    label: 'vDriftFix #002: backing:round + negative fracY nudge',
    idea: 'Negative nudge with default round backing.',
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'vdrift',
    active: true,
    labToCanvasOpts: {
      vDriftFix: true,
      backingRound: 'round',
    },
    notes: 'Wave 12 vertical drift fix probe.',
  }
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
