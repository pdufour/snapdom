/**
 * Loop AI batch-11 FO recipe shard (worker 06) — text-fix: text-orientation mixed all patterns.
 * PRIMARY: text-orientation:mixed on every variant (primary)
 * 100 recipes: loop-ai-b11-w06-001..100
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

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w06-001',
    label: 'Loop AI b11 w06 #001: mixed hb-star star',
    idea: 'text-orientation:mixed on star under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-002',
    label: 'Loop AI b11 w06 #002: mixed hb-star span',
    idea: 'text-orientation:mixed on span under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-003',
    label: 'Loop AI b11 w06 #003: mixed hb-star a',
    idea: 'text-orientation:mixed on a under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-004',
    label: 'Loop AI b11 w06 #004: mixed hb-star chain',
    idea: 'text-orientation:mixed on chain under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-005',
    label: 'Loop AI b11 w06 #005: mixed hb-star nav-a',
    idea: 'text-orientation:mixed on nav-a under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-006',
    label: 'Loop AI b11 w06 #006: mixed hb-star label',
    idea: 'text-orientation:mixed on label under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-007',
    label: 'Loop AI b11 w06 #007: mixed hb-star p',
    idea: 'text-orientation:mixed on p under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-008',
    label: 'Loop AI b11 w06 #008: mixed hb-star li',
    idea: 'text-orientation:mixed on li under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-009',
    label: 'Loop AI b11 w06 #009: mixed hb-star emph',
    idea: 'text-orientation:mixed on emph under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-010',
    label: 'Loop AI b11 w06 #010: mixed hb-star mono',
    idea: 'text-orientation:mixed on mono under horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; hb-star-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-011',
    label: 'Loop AI b11 w06 #011: mixed vrl-parent star',
    idea: 'text-orientation:mixed on star under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-012',
    label: 'Loop AI b11 w06 #012: mixed vrl-parent span',
    idea: 'text-orientation:mixed on span under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-013',
    label: 'Loop AI b11 w06 #013: mixed vrl-parent a',
    idea: 'text-orientation:mixed on a under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-014',
    label: 'Loop AI b11 w06 #014: mixed vrl-parent chain',
    idea: 'text-orientation:mixed on chain under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-015',
    label: 'Loop AI b11 w06 #015: mixed vrl-parent nav-a',
    idea: 'text-orientation:mixed on nav-a under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-016',
    label: 'Loop AI b11 w06 #016: mixed vrl-parent label',
    idea: 'text-orientation:mixed on label under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-017',
    label: 'Loop AI b11 w06 #017: mixed vrl-parent p',
    idea: 'text-orientation:mixed on p under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-018',
    label: 'Loop AI b11 w06 #018: mixed vrl-parent li',
    idea: 'text-orientation:mixed on li under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-019',
    label: 'Loop AI b11 w06 #019: mixed vrl-parent emph',
    idea: 'text-orientation:mixed on emph under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-020',
    label: 'Loop AI b11 w06 #020: mixed vrl-parent mono',
    idea: 'text-orientation:mixed on mono under vertical-rl parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-parent-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-021',
    label: 'Loop AI b11 w06 #021: mixed vlr-parent star',
    idea: 'text-orientation:mixed on star under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-022',
    label: 'Loop AI b11 w06 #022: mixed vlr-parent span',
    idea: 'text-orientation:mixed on span under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-023',
    label: 'Loop AI b11 w06 #023: mixed vlr-parent a',
    idea: 'text-orientation:mixed on a under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-024',
    label: 'Loop AI b11 w06 #024: mixed vlr-parent chain',
    idea: 'text-orientation:mixed on chain under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-025',
    label: 'Loop AI b11 w06 #025: mixed vlr-parent nav-a',
    idea: 'text-orientation:mixed on nav-a under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-026',
    label: 'Loop AI b11 w06 #026: mixed vlr-parent label',
    idea: 'text-orientation:mixed on label under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-027',
    label: 'Loop AI b11 w06 #027: mixed vlr-parent p',
    idea: 'text-orientation:mixed on p under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-028',
    label: 'Loop AI b11 w06 #028: mixed vlr-parent li',
    idea: 'text-orientation:mixed on li under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-029',
    label: 'Loop AI b11 w06 #029: mixed vlr-parent emph',
    idea: 'text-orientation:mixed on emph under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-030',
    label: 'Loop AI b11 w06 #030: mixed vlr-parent mono',
    idea: 'text-orientation:mixed on mono under vertical-lr parent + hb-tb leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vlr-parent-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-031',
    label: 'Loop AI b11 w06 #031: mixed swlr-wm star',
    idea: 'text-orientation:mixed on star under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-032',
    label: 'Loop AI b11 w06 #032: mixed swlr-wm span',
    idea: 'text-orientation:mixed on span under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-033',
    label: 'Loop AI b11 w06 #033: mixed swlr-wm a',
    idea: 'text-orientation:mixed on a under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-034',
    label: 'Loop AI b11 w06 #034: mixed swlr-wm chain',
    idea: 'text-orientation:mixed on chain under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-035',
    label: 'Loop AI b11 w06 #035: mixed swlr-wm nav-a',
    idea: 'text-orientation:mixed on nav-a under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-036',
    label: 'Loop AI b11 w06 #036: mixed swlr-wm label',
    idea: 'text-orientation:mixed on label under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-037',
    label: 'Loop AI b11 w06 #037: mixed swlr-wm p',
    idea: 'text-orientation:mixed on p under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-038',
    label: 'Loop AI b11 w06 #038: mixed swlr-wm li',
    idea: 'text-orientation:mixed on li under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-039',
    label: 'Loop AI b11 w06 #039: mixed swlr-wm emph',
    idea: 'text-orientation:mixed on emph under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-040',
    label: 'Loop AI b11 w06 #040: mixed swlr-wm mono',
    idea: 'text-orientation:mixed on mono under sideways-lr writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swlr-wm-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-041',
    label: 'Loop AI b11 w06 #041: mixed swrl-wm star',
    idea: 'text-orientation:mixed on star under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-042',
    label: 'Loop AI b11 w06 #042: mixed swrl-wm span',
    idea: 'text-orientation:mixed on span under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-043',
    label: 'Loop AI b11 w06 #043: mixed swrl-wm a',
    idea: 'text-orientation:mixed on a under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-044',
    label: 'Loop AI b11 w06 #044: mixed swrl-wm chain',
    idea: 'text-orientation:mixed on chain under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-045',
    label: 'Loop AI b11 w06 #045: mixed swrl-wm nav-a',
    idea: 'text-orientation:mixed on nav-a under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-046',
    label: 'Loop AI b11 w06 #046: mixed swrl-wm label',
    idea: 'text-orientation:mixed on label under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-047',
    label: 'Loop AI b11 w06 #047: mixed swrl-wm p',
    idea: 'text-orientation:mixed on p under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-048',
    label: 'Loop AI b11 w06 #048: mixed swrl-wm li',
    idea: 'text-orientation:mixed on li under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-049',
    label: 'Loop AI b11 w06 #049: mixed swrl-wm emph',
    idea: 'text-orientation:mixed on emph under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-050',
    label: 'Loop AI b11 w06 #050: mixed swrl-wm mono',
    idea: 'text-orientation:mixed on mono under sideways-rl writing-mode context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; swrl-wm-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-051',
    label: 'Loop AI b11 w06 #051: mixed vrl-anchors star',
    idea: 'text-orientation:mixed on star under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-052',
    label: 'Loop AI b11 w06 #052: mixed vrl-anchors span',
    idea: 'text-orientation:mixed on span under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-053',
    label: 'Loop AI b11 w06 #053: mixed vrl-anchors a',
    idea: 'text-orientation:mixed on a under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-054',
    label: 'Loop AI b11 w06 #054: mixed vrl-anchors chain',
    idea: 'text-orientation:mixed on chain under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-055',
    label: 'Loop AI b11 w06 #055: mixed vrl-anchors nav-a',
    idea: 'text-orientation:mixed on nav-a under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-056',
    label: 'Loop AI b11 w06 #056: mixed vrl-anchors label',
    idea: 'text-orientation:mixed on label under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-057',
    label: 'Loop AI b11 w06 #057: mixed vrl-anchors p',
    idea: 'text-orientation:mixed on p under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-058',
    label: 'Loop AI b11 w06 #058: mixed vrl-anchors li',
    idea: 'text-orientation:mixed on li under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-059',
    label: 'Loop AI b11 w06 #059: mixed vrl-anchors emph',
    idea: 'text-orientation:mixed on emph under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-060',
    label: 'Loop AI b11 w06 #060: mixed vrl-anchors mono',
    idea: 'text-orientation:mixed on mono under vertical-rl on anchors only context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; vrl-anchors-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-061',
    label: 'Loop AI b11 w06 #061: mixed fo-hb star',
    idea: 'text-orientation:mixed on star under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-062',
    label: 'Loop AI b11 w06 #062: mixed fo-hb span',
    idea: 'text-orientation:mixed on span under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-063',
    label: 'Loop AI b11 w06 #063: mixed fo-hb a',
    idea: 'text-orientation:mixed on a under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-064',
    label: 'Loop AI b11 w06 #064: mixed fo-hb chain',
    idea: 'text-orientation:mixed on chain under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-065',
    label: 'Loop AI b11 w06 #065: mixed fo-hb nav-a',
    idea: 'text-orientation:mixed on nav-a under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-066',
    label: 'Loop AI b11 w06 #066: mixed fo-hb label',
    idea: 'text-orientation:mixed on label under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-067',
    label: 'Loop AI b11 w06 #067: mixed fo-hb p',
    idea: 'text-orientation:mixed on p under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-068',
    label: 'Loop AI b11 w06 #068: mixed fo-hb li',
    idea: 'text-orientation:mixed on li under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-069',
    label: 'Loop AI b11 w06 #069: mixed fo-hb emph',
    idea: 'text-orientation:mixed on emph under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-070',
    label: 'Loop AI b11 w06 #070: mixed fo-hb mono',
    idea: 'text-orientation:mixed on mono under horizontal-tb on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; fo-hb-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-071',
    label: 'Loop AI b11 w06 #071: mixed div-hb star',
    idea: 'text-orientation:mixed on star under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-072',
    label: 'Loop AI b11 w06 #072: mixed div-hb span',
    idea: 'text-orientation:mixed on span under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-073',
    label: 'Loop AI b11 w06 #073: mixed div-hb a',
    idea: 'text-orientation:mixed on a under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-074',
    label: 'Loop AI b11 w06 #074: mixed div-hb chain',
    idea: 'text-orientation:mixed on chain under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-075',
    label: 'Loop AI b11 w06 #075: mixed div-hb nav-a',
    idea: 'text-orientation:mixed on nav-a under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-076',
    label: 'Loop AI b11 w06 #076: mixed div-hb label',
    idea: 'text-orientation:mixed on label under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-077',
    label: 'Loop AI b11 w06 #077: mixed div-hb p',
    idea: 'text-orientation:mixed on p under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-078',
    label: 'Loop AI b11 w06 #078: mixed div-hb li',
    idea: 'text-orientation:mixed on li under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-079',
    label: 'Loop AI b11 w06 #079: mixed div-hb emph',
    idea: 'text-orientation:mixed on emph under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-080',
    label: 'Loop AI b11 w06 #080: mixed div-hb mono',
    idea: 'text-orientation:mixed on mono under horizontal-tb on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; div-hb-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-081',
    label: 'Loop AI b11 w06 #081: mixed chain-hb star',
    idea: 'text-orientation:mixed on star under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-082',
    label: 'Loop AI b11 w06 #082: mixed chain-hb span',
    idea: 'text-orientation:mixed on span under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-083',
    label: 'Loop AI b11 w06 #083: mixed chain-hb a',
    idea: 'text-orientation:mixed on a under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-084',
    label: 'Loop AI b11 w06 #084: mixed chain-hb chain',
    idea: 'text-orientation:mixed on chain under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-085',
    label: 'Loop AI b11 w06 #085: mixed chain-hb nav-a',
    idea: 'text-orientation:mixed on nav-a under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-086',
    label: 'Loop AI b11 w06 #086: mixed chain-hb label',
    idea: 'text-orientation:mixed on label under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-087',
    label: 'Loop AI b11 w06 #087: mixed chain-hb p',
    idea: 'text-orientation:mixed on p under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-088',
    label: 'Loop AI b11 w06 #088: mixed chain-hb li',
    idea: 'text-orientation:mixed on li under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-089',
    label: 'Loop AI b11 w06 #089: mixed chain-hb emph',
    idea: 'text-orientation:mixed on emph under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-090',
    label: 'Loop AI b11 w06 #090: mixed chain-hb mono',
    idea: 'text-orientation:mixed on mono under horizontal-tb on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; chain-hb-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-091',
    label: 'Loop AI b11 w06 #091: mixed nav-hb star',
    idea: 'text-orientation:mixed on star under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject *{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-star; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-092',
    label: 'Loop AI b11 w06 #092: mixed nav-hb span',
    idea: 'text-orientation:mixed on span under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject span{text-orientation:mixed!important;display:inline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-span; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-093',
    label: 'Loop AI b11 w06 #093: mixed nav-hb a',
    idea: 'text-orientation:mixed on a under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject a{text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-094',
    label: 'Loop AI b11 w06 #094: mixed nav-hb chain',
    idea: 'text-orientation:mixed on chain under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-chain; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-095',
    label: 'Loop AI b11 w06 #095: mixed nav-hb nav-a',
    idea: 'text-orientation:mixed on nav-a under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject nav a{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-nav-a; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-096',
    label: 'Loop AI b11 w06 #096: mixed nav-hb label',
    idea: 'text-orientation:mixed on label under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject label{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-label; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-097',
    label: 'Loop AI b11 w06 #097: mixed nav-hb p',
    idea: 'text-orientation:mixed on p under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject p{text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-p; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-098',
    label: 'Loop AI b11 w06 #098: mixed nav-hb li',
    idea: 'text-orientation:mixed on li under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject li{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-li; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-099',
    label: 'Loop AI b11 w06 #099: mixed nav-hb emph',
    idea: 'text-orientation:mixed on emph under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject strong,foreignObject em{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-emph; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w06-100',
    label: 'Loop AI b11 w06 #100: mixed nav-hb mono',
    idea: 'text-orientation:mixed on mono under horizontal-tb on nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:horizontal-tb!important}foreignObject small,foreignObject code{text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w06; nav-hb-mono; text-orientation:mixed on every variant (primary) — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w06: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
