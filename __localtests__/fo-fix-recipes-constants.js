/** Shared FO lab constants (import-safe from shards; no recipe array). */
export const FO_BASELINE_CSS =
  'svg{overflow:visible}' +
  'foreignObject{overflow:visible}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/**
 * Structural single-line text leaves inside foreignObject (not nav/checkout-specific).
 * Pair with white-space:nowrap when probing one-line strut typography.
 */
export const FO_TEXT_LEAF_SINGLE_LINE =
  'foreignObject :is(span,a,p,h1,h2,h3,label)'

/** h2 src/utils/foNormalizeCss.js — raster-side normalize (pre-raster SVG inject). */
export const H2_RASTER_NORMALIZE_CSS =
  'svg{overflow:visible}' +
  'foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;' +
  'text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}' +
  'foreignObject *{box-sizing:border-box}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'
