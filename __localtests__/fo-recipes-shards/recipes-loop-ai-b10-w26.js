/**
 * Loop AI batch-10 FO recipe shard (worker 26) — text-fix: text-rendering auto /
 * geometricPrecision / optimizeLegibility (40 recipes).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code,' +
  'foreignObject nav a,foreignObject td,foreignObject th'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w26-001',
    label: 'Loop AI b10 w26 #001: auto on FO *',
    idea: 'text-rendering:auto on FO * leaves — UA default text-rendering',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-002',
    label: 'Loop AI b10 w26 #002: geo on FO *',
    idea: 'text-rendering:geometricPrecision on FO * leaves — geometricPrecision glyph grid',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-003',
    label: 'Loop AI b10 w26 #003: leg on FO *',
    idea: 'text-rendering:optimizeLegibility on FO * leaves — optimizeLegibility kerning/liga',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-004',
    label: 'Loop AI b10 w26 #004: auto on FO root',
    idea: 'text-rendering:auto on foreignObject root only (children inherit)',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-005',
    label: 'Loop AI b10 w26 #005: geo on FO root',
    idea: 'text-rendering:geometricPrecision on foreignObject root only (children inherit)',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-006',
    label: 'Loop AI b10 w26 #006: leg on FO root',
    idea: 'text-rendering:optimizeLegibility on foreignObject root only (children inherit)',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-007',
    label: 'Loop AI b10 w26 #007: auto root + *',
    idea: 'text-rendering:auto on FO root and * — uniform subtree',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:auto!important}' + 'foreignObject *{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-008',
    label: 'Loop AI b10 w26 #008: geo root + *',
    idea: 'text-rendering:geometricPrecision on FO root and * — uniform subtree',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}' + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-009',
    label: 'Loop AI b10 w26 #009: leg root + *',
    idea: 'text-rendering:optimizeLegibility on FO root and * — uniform subtree',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:optimizeLegibility!important}' + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-010',
    label: 'Loop AI b10 w26 #010: auto + antialiased',
    idea: 'text-rendering:auto + -webkit-font-smoothing:antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-011',
    label: 'Loop AI b10 w26 #011: geo + antialiased',
    idea: 'text-rendering:geometricPrecision + -webkit-font-smoothing:antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-012',
    label: 'Loop AI b10 w26 #012: leg + antialiased',
    idea: 'text-rendering:optimizeLegibility + -webkit-font-smoothing:antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-013',
    label: 'Loop AI b10 w26 #013: auto + subpixel smooth',
    idea: 'text-rendering:auto + -webkit-font-smoothing:subpixel-antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important;-webkit-font-smoothing:subpixel-antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-014',
    label: 'Loop AI b10 w26 #014: geo + subpixel smooth',
    idea: 'text-rendering:geometricPrecision + -webkit-font-smoothing:subpixel-antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important;-webkit-font-smoothing:subpixel-antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-015',
    label: 'Loop AI b10 w26 #015: leg + subpixel smooth',
    idea: 'text-rendering:optimizeLegibility + -webkit-font-smoothing:subpixel-antialiased on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important;-webkit-font-smoothing:subpixel-antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-016',
    label: 'Loop AI b10 w26 #016: auto + font-smooth always',
    idea: 'text-rendering:auto + font-smooth:always on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important;font-smooth:always!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-017',
    label: 'Loop AI b10 w26 #017: geo + font-smooth always',
    idea: 'text-rendering:geometricPrecision + font-smooth:always on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important;font-smooth:always!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-018',
    label: 'Loop AI b10 w26 #018: leg + font-smooth always',
    idea: 'text-rendering:optimizeLegibility + font-smooth:always on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important;font-smooth:always!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-019',
    label: 'Loop AI b10 w26 #019: geo root leg leaves',
    idea: 'FO root text-rendering:geometricPrecision + FO * text-rendering:optimizeLegibility — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}' + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-020',
    label: 'Loop AI b10 w26 #020: leg root geo leaves',
    idea: 'FO root text-rendering:optimizeLegibility + FO * text-rendering:geometricPrecision — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:optimizeLegibility!important}' + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-021',
    label: 'Loop AI b10 w26 #021: auto root leg leaves',
    idea: 'FO root text-rendering:auto + FO * text-rendering:optimizeLegibility — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:auto!important}' + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-022',
    label: 'Loop AI b10 w26 #022: auto root geo leaves',
    idea: 'FO root text-rendering:auto + FO * text-rendering:geometricPrecision — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:auto!important}' + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-023',
    label: 'Loop AI b10 w26 #023: leg root auto leaves',
    idea: 'FO root text-rendering:optimizeLegibility + FO * text-rendering:auto — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:optimizeLegibility!important}' + 'foreignObject *{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-024',
    label: 'Loop AI b10 w26 #024: geo root auto leaves',
    idea: 'FO root text-rendering:geometricPrecision + FO * text-rendering:auto — split inheritance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}' + 'foreignObject *{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-025',
    label: 'Loop AI b10 w26 #025: auto text chain only',
    idea: 'text-rendering:auto on inline text chain selectors only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-026',
    label: 'Loop AI b10 w26 #026: geo text chain only',
    idea: 'text-rendering:geometricPrecision on inline text chain selectors only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-027',
    label: 'Loop AI b10 w26 #027: leg text chain only',
    idea: 'text-rendering:optimizeLegibility on inline text chain selectors only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-028',
    label: 'Loop AI b10 w26 #028: auto inject both uniform',
    idea: 'text-rendering:auto root+* with inject:both — capture + raster CSS pass',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:auto!important}' + 'foreignObject *{text-rendering:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-029',
    label: 'Loop AI b10 w26 #029: geo inject both uniform',
    idea: 'text-rendering:geometricPrecision root+* with inject:both — capture + raster CSS pass',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}' + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-030',
    label: 'Loop AI b10 w26 #030: leg inject both uniform',
    idea: 'text-rendering:optimizeLegibility root+* with inject:both — capture + raster CSS pass',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:optimizeLegibility!important}' + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-031',
    label: 'Loop AI b10 w26 #031: auto + shape geo',
    idea: 'text-rendering:auto + shape-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important;shape-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-032',
    label: 'Loop AI b10 w26 #032: geo + shape geo',
    idea: 'text-rendering:geometricPrecision + shape-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important;shape-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-033',
    label: 'Loop AI b10 w26 #033: leg + shape geo',
    idea: 'text-rendering:optimizeLegibility + shape-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important;shape-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-034',
    label: 'Loop AI b10 w26 #034: auto + chromium kerning',
    idea: 'CHROMIUM_COPY + text-rendering:auto on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-035',
    label: 'Loop AI b10 w26 #035: geo + chromium kerning',
    idea: 'CHROMIUM_COPY + text-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-036',
    label: 'Loop AI b10 w26 #036: leg + chromium kerning',
    idea: 'CHROMIUM_COPY + text-rendering:optimizeLegibility on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-037',
    label: 'Loop AI b10 w26 #037: auto + from-font lh',
    idea: 'text-rendering:auto + line-height:from-font on FO * — metric strut vs render mode',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:auto!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-038',
    label: 'Loop AI b10 w26 #038: geo + from-font lh',
    idea: 'text-rendering:geometricPrecision + line-height:from-font on FO * — metric strut vs render mode',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:geometricPrecision!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-039',
    label: 'Loop AI b10 w26 #039: leg + from-font lh',
    idea: 'text-rendering:optimizeLegibility + line-height:from-font on FO * — metric strut vs render mode',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-rendering:optimizeLegibility!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w26-040',
    label: 'Loop AI b10 w26 #040: geo root leg chain antialiased',
    idea: 'root geometricPrecision + chain optimizeLegibility + antialiased on text chain',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-rendering:geometricPrecision!important}' + TEXT_CHAIN + '{text-rendering:optimizeLegibility!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w26; text-rendering probe; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
