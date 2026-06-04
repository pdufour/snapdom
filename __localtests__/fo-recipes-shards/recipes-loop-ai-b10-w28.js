/**
 * Loop AI batch-10 FO recipe shard (worker 28) — text-fix: font-variant-numeric proportional/tabular/oldstyle.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w28-001',
    label: 'Loop AI b10 w28 #001: normal reset FO star',
    idea: 'font-variant-numeric:normal on FO * — reset tabular/proportional figure variants before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; normal reset FO star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-002',
    label: 'Loop AI b10 w28 #002: proportional-nums FO star',
    idea: 'font-variant-numeric:proportional-nums on FO * — variable figure width vs tabular in FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional-nums FO star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-003',
    label: 'Loop AI b10 w28 #003: tabular-nums FO star',
    idea: 'font-variant-numeric:tabular-nums on FO * — fixed-width figures vs proportional in FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular-nums FO star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-004',
    label: 'Loop AI b10 w28 #004: oldstyle-nums FO star',
    idea: 'font-variant-numeric:oldstyle-nums on FO * — descender figures vs lining-nums in FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle-nums FO star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-005',
    label: 'Loop AI b10 w28 #005: proportional FO>div star',
    idea: 'font-variant-numeric:proportional-nums on FO>div * — wrapper-scoped proportional figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional FO>div star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-006',
    label: 'Loop AI b10 w28 #006: tabular FO>div star',
    idea: 'font-variant-numeric:tabular-nums on FO>div * — wrapper-scoped tabular figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular FO>div star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-007',
    label: 'Loop AI b10 w28 #007: oldstyle FO>div star',
    idea: 'font-variant-numeric:oldstyle-nums on FO>div * — wrapper-scoped oldstyle figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-variant-numeric:oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle FO>div star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-008',
    label: 'Loop AI b10 w28 #008: proportional on anchor',
    idea: 'font-variant-numeric:proportional-nums on FO a — inline link figure width probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-variant-numeric:proportional-nums!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional on anchor; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-009',
    label: 'Loop AI b10 w28 #009: tabular on anchor',
    idea: 'font-variant-numeric:tabular-nums on FO a — inline link fixed-width figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-variant-numeric:tabular-nums!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular on anchor; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-010',
    label: 'Loop AI b10 w28 #010: oldstyle on anchor',
    idea: 'font-variant-numeric:oldstyle-nums on FO a — inline link descender figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-variant-numeric:oldstyle-nums!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle on anchor; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-011',
    label: 'Loop AI b10 w28 #011: proportional on span',
    idea: 'font-variant-numeric:proportional-nums on FO span — inline text leaf figure width',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-variant-numeric:proportional-nums!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional on span; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-012',
    label: 'Loop AI b10 w28 #012: tabular on span',
    idea: 'font-variant-numeric:tabular-nums on FO span — inline text leaf tabular figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-variant-numeric:tabular-nums!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular on span; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-013',
    label: 'Loop AI b10 w28 #013: oldstyle on span',
    idea: 'font-variant-numeric:oldstyle-nums on FO span — inline text leaf oldstyle figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-variant-numeric:oldstyle-nums!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle on span; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-014',
    label: 'Loop AI b10 w28 #014: tabular lining combo star',
    idea: 'font-variant-numeric:tabular-nums lining-nums on FO * — fixed-width lining figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums lining-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular lining combo star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-015',
    label: 'Loop AI b10 w28 #015: proportional lining combo star',
    idea: 'font-variant-numeric:proportional-nums lining-nums on FO * — variable-width lining figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums lining-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional lining combo star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-016',
    label: 'Loop AI b10 w28 #016: tabular oldstyle combo star',
    idea: 'font-variant-numeric:tabular-nums oldstyle-nums on FO * — fixed-width oldstyle figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular oldstyle combo star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-017',
    label: 'Loop AI b10 w28 #017: proportional oldstyle combo star',
    idea: 'font-variant-numeric:proportional-nums oldstyle-nums on FO * — variable-width oldstyle figures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional oldstyle combo star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-018',
    label: 'Loop AI b10 w28 #018: tabular slashed-zero star',
    idea: 'font-variant-numeric:tabular-nums slashed-zero on FO * — tabular figures with slashed zero glyph',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums slashed-zero!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular slashed-zero star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-019',
    label: 'Loop AI b10 w28 #019: proportional slashed-zero star',
    idea: 'font-variant-numeric:proportional-nums slashed-zero on FO * — proportional figures with slashed zero',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums slashed-zero!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional slashed-zero star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-020',
    label: 'Loop AI b10 w28 #020: oldstyle slashed-zero star',
    idea: 'font-variant-numeric:oldstyle-nums slashed-zero on FO * — oldstyle figures with slashed zero',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:oldstyle-nums slashed-zero!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle slashed-zero star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-021',
    label: 'Loop AI b10 w28 #021: normal div tabular star',
    idea: 'FO>div normal reset + FO * tabular-nums — wrapper reset then tabular cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-variant-numeric:normal!important}foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; normal div tabular star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-022',
    label: 'Loop AI b10 w28 #022: div>div tabular inherit',
    idea: 'FO>div tabular-nums + div>div inherit — tabular figure cascade through nested wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-variant-numeric:tabular-nums!important}foreignObject>div>div{font-variant-numeric:inherit!important}foreignObject>div>div *{font-variant-numeric:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; div>div tabular inherit; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-023',
    label: 'Loop AI b10 w28 #023: text chain tabular',
    idea: 'font-variant-numeric:tabular-nums on inline text chain selectors only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; text chain tabular; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-024',
    label: 'Loop AI b10 w28 #024: text chain oldstyle',
    idea: 'font-variant-numeric:oldstyle-nums on inline text chain selectors only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-variant-numeric:oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; text chain oldstyle; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-025',
    label: 'Loop AI b10 w28 #025: text chain proportional',
    idea: 'font-variant-numeric:proportional-nums on inline text chain selectors only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; text chain proportional; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-026',
    label: 'Loop AI b10 w28 #026: Chromium tabular star',
    idea: 'Chromium FO font copy + font-variant-numeric:tabular-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CHROMIUM_COPY +
      'foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; Chromium tabular star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-027',
    label: 'Loop AI b10 w28 #027: Chromium proportional star',
    idea: 'Chromium FO font copy + font-variant-numeric:proportional-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CHROMIUM_COPY +
      'foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; Chromium proportional star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-028',
    label: 'Loop AI b10 w28 #028: Chromium oldstyle star',
    idea: 'Chromium FO font copy + font-variant-numeric:oldstyle-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CHROMIUM_COPY +
      'foreignObject *{font-variant-numeric:oldstyle-nums!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; Chromium oldstyle star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-029',
    label: 'Loop AI b10 w28 #029: Chromium tabular slashed',
    idea: 'Chromium FO font copy + tabular-nums slashed-zero on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CHROMIUM_COPY +
      'foreignObject *{font-variant-numeric:tabular-nums slashed-zero!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; Chromium tabular slashed; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-030',
    label: 'Loop AI b10 w28 #030: pin-lh tabular star',
    idea: 'h2-pin-line-height-from-live + font-variant-numeric:tabular-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w28; pin-lh tabular star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-031',
    label: 'Loop AI b10 w28 #031: pin-lh proportional star',
    idea: 'h2-pin-line-height-from-live + font-variant-numeric:proportional-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w28; pin-lh proportional star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-032',
    label: 'Loop AI b10 w28 #032: pin-lh oldstyle star',
    idea: 'h2-pin-line-height-from-live + font-variant-numeric:oldstyle-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:oldstyle-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w28; pin-lh oldstyle star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-033',
    label: 'Loop AI b10 w28 #033: stretch-leaf tabular star',
    idea: 'h2-flex-stretch-leaf-from-live + font-variant-numeric:tabular-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w28; stretch-leaf tabular star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-034',
    label: 'Loop AI b10 w28 #034: pin-width proportional star',
    idea: 'h2-pin-width-from-live + font-variant-numeric:proportional-nums on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w28; pin-width proportional star; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-035',
    label: 'Loop AI b10 w28 #035: tabular from-font lh',
    idea: 'font-variant-numeric:tabular-nums + line-height:from-font on FO * — figure width with font-metrics strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular from-font lh; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-036',
    label: 'Loop AI b10 w28 #036: oldstyle kerning normal',
    idea: 'font-variant-numeric:oldstyle-nums + font-kerning:normal on FO * — oldstyle figures with explicit kerning',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:oldstyle-nums!important;font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle kerning normal; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-037',
    label: 'Loop AI b10 w28 #037: proportional geometricPrecision',
    idea: 'font-variant-numeric:proportional-nums + text-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; proportional geometricPrecision; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-038',
    label: 'Loop AI b10 w28 #038: tabular feature tnum',
    idea: 'font-variant-numeric:tabular-nums + font-feature-settings:"tnum" 1 on FO * — OpenType tnum vs CSS tabular',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:tabular-nums!important;font-feature-settings:"tnum" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; tabular feature tnum; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-039',
    label: 'Loop AI b10 w28 #039: oldstyle feature onum',
    idea: 'font-variant-numeric:oldstyle-nums + font-feature-settings:"onum" 1 on FO * — OpenType onum vs CSS oldstyle',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:oldstyle-nums!important;font-feature-settings:"onum" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; oldstyle feature onum; font-variant-numeric probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w28-040',
    label: 'Loop AI b10 w28 #040: div tabular star proportional',
    idea: 'FO>div tabular-nums + FO * proportional-nums — split wrapper tabular vs leaf proportional A/B',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-variant-numeric:tabular-nums!important}foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w28; div tabular star proportional; font-variant-numeric probe — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
