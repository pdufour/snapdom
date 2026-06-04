/**
 * Loop AI batch-11 FO recipe shard (worker 09) — text-fix: direction rtl on FO span only.
 * PRIMARY: direction:rtl scoped to foreignObject span only
 * 100 recipes: loop-ai-b11-w09-001..100
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
    id: 'loop-ai-b11-w09-001',
    label: 'Loop AI b11 w09 #001: span rtl normal bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-002',
    label: 'Loop AI b11 w09 #002: span rtl normal mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-003',
    label: 'Loop AI b11 w09 #003: span rtl normal upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-004',
    label: 'Loop AI b11 w09 #004: span rtl normal lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-005',
    label: 'Loop AI b11 w09 #005: span rtl normal inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-006',
    label: 'Loop AI b11 w09 #006: span rtl normal inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-007',
    label: 'Loop AI b11 w09 #007: span rtl normal max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-008',
    label: 'Loop AI b11 w09 #008: span rtl normal nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-009',
    label: 'Loop AI b11 w09 #009: span rtl normal ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-010',
    label: 'Loop AI b11 w09 #010: span rtl normal fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:normal + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-normal-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-011',
    label: 'Loop AI b11 w09 #011: span rtl embed bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-012',
    label: 'Loop AI b11 w09 #012: span rtl embed mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-013',
    label: 'Loop AI b11 w09 #013: span rtl embed upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-014',
    label: 'Loop AI b11 w09 #014: span rtl embed lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-015',
    label: 'Loop AI b11 w09 #015: span rtl embed inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-016',
    label: 'Loop AI b11 w09 #016: span rtl embed inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-017',
    label: 'Loop AI b11 w09 #017: span rtl embed max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-018',
    label: 'Loop AI b11 w09 #018: span rtl embed nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-019',
    label: 'Loop AI b11 w09 #019: span rtl embed ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-020',
    label: 'Loop AI b11 w09 #020: span rtl embed fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:embed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-021',
    label: 'Loop AI b11 w09 #021: span rtl isolate bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-022',
    label: 'Loop AI b11 w09 #022: span rtl isolate mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-023',
    label: 'Loop AI b11 w09 #023: span rtl isolate upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-024',
    label: 'Loop AI b11 w09 #024: span rtl isolate lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-025',
    label: 'Loop AI b11 w09 #025: span rtl isolate inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-026',
    label: 'Loop AI b11 w09 #026: span rtl isolate inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-027',
    label: 'Loop AI b11 w09 #027: span rtl isolate max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-028',
    label: 'Loop AI b11 w09 #028: span rtl isolate nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-029',
    label: 'Loop AI b11 w09 #029: span rtl isolate ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-030',
    label: 'Loop AI b11 w09 #030: span rtl isolate fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-031',
    label: 'Loop AI b11 w09 #031: span rtl plaintext bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-032',
    label: 'Loop AI b11 w09 #032: span rtl plaintext mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-033',
    label: 'Loop AI b11 w09 #033: span rtl plaintext upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-034',
    label: 'Loop AI b11 w09 #034: span rtl plaintext lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-035',
    label: 'Loop AI b11 w09 #035: span rtl plaintext inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-036',
    label: 'Loop AI b11 w09 #036: span rtl plaintext inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-037',
    label: 'Loop AI b11 w09 #037: span rtl plaintext max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-038',
    label: 'Loop AI b11 w09 #038: span rtl plaintext nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-039',
    label: 'Loop AI b11 w09 #039: span rtl plaintext ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-040',
    label: 'Loop AI b11 w09 #040: span rtl plaintext fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:plaintext + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-plaintext-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-041',
    label: 'Loop AI b11 w09 #041: span rtl bidi-override bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-042',
    label: 'Loop AI b11 w09 #042: span rtl bidi-override mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-043',
    label: 'Loop AI b11 w09 #043: span rtl bidi-override upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-044',
    label: 'Loop AI b11 w09 #044: span rtl bidi-override lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-045',
    label: 'Loop AI b11 w09 #045: span rtl bidi-override inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-046',
    label: 'Loop AI b11 w09 #046: span rtl bidi-override inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-047',
    label: 'Loop AI b11 w09 #047: span rtl bidi-override max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-048',
    label: 'Loop AI b11 w09 #048: span rtl bidi-override nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-049',
    label: 'Loop AI b11 w09 #049: span rtl bidi-override ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-050',
    label: 'Loop AI b11 w09 #050: span rtl bidi-override fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:bidi-override + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-bidi-override-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-051',
    label: 'Loop AI b11 w09 #051: span rtl isolate-override bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-052',
    label: 'Loop AI b11 w09 #052: span rtl isolate-override mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-053',
    label: 'Loop AI b11 w09 #053: span rtl isolate-override upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-054',
    label: 'Loop AI b11 w09 #054: span rtl isolate-override lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-055',
    label: 'Loop AI b11 w09 #055: span rtl isolate-override inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-056',
    label: 'Loop AI b11 w09 #056: span rtl isolate-override inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-057',
    label: 'Loop AI b11 w09 #057: span rtl isolate-override max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-058',
    label: 'Loop AI b11 w09 #058: span rtl isolate-override nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-059',
    label: 'Loop AI b11 w09 #059: span rtl isolate-override ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-060',
    label: 'Loop AI b11 w09 #060: span rtl isolate-override fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate-override + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-override-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-061',
    label: 'Loop AI b11 w09 #061: span rtl inherit bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-062',
    label: 'Loop AI b11 w09 #062: span rtl inherit mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-063',
    label: 'Loop AI b11 w09 #063: span rtl inherit upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-064',
    label: 'Loop AI b11 w09 #064: span rtl inherit lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-065',
    label: 'Loop AI b11 w09 #065: span rtl inherit inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-066',
    label: 'Loop AI b11 w09 #066: span rtl inherit inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-067',
    label: 'Loop AI b11 w09 #067: span rtl inherit max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-068',
    label: 'Loop AI b11 w09 #068: span rtl inherit nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-069',
    label: 'Loop AI b11 w09 #069: span rtl inherit ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-070',
    label: 'Loop AI b11 w09 #070: span rtl inherit fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:inherit + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:inherit!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-inherit-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-071',
    label: 'Loop AI b11 w09 #071: span rtl unset bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-072',
    label: 'Loop AI b11 w09 #072: span rtl unset mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-073',
    label: 'Loop AI b11 w09 #073: span rtl unset upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-074',
    label: 'Loop AI b11 w09 #074: span rtl unset lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-075',
    label: 'Loop AI b11 w09 #075: span rtl unset inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-076',
    label: 'Loop AI b11 w09 #076: span rtl unset inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-077',
    label: 'Loop AI b11 w09 #077: span rtl unset max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-078',
    label: 'Loop AI b11 w09 #078: span rtl unset nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-079',
    label: 'Loop AI b11 w09 #079: span rtl unset ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:unset!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-080',
    label: 'Loop AI b11 w09 #080: span rtl unset fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:unset + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:unset!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-unset-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-081',
    label: 'Loop AI b11 w09 #081: span rtl embed-ltr-wm bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-082',
    label: 'Loop AI b11 w09 #082: span rtl embed-ltr-wm mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-083',
    label: 'Loop AI b11 w09 #083: span rtl embed-ltr-wm upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-084',
    label: 'Loop AI b11 w09 #084: span rtl embed-ltr-wm lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-085',
    label: 'Loop AI b11 w09 #085: span rtl embed-ltr-wm inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-086',
    label: 'Loop AI b11 w09 #086: span rtl embed-ltr-wm inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-087',
    label: 'Loop AI b11 w09 #087: span rtl embed-ltr-wm max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-088',
    label: 'Loop AI b11 w09 #088: span rtl embed-ltr-wm nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-089',
    label: 'Loop AI b11 w09 #089: span rtl embed-ltr-wm ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-090',
    label: 'Loop AI b11 w09 #090: span rtl embed-ltr-wm fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:embed + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:embed!important;writing-mode:horizontal-tb!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-embed-ltr-wm-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-091',
    label: 'Loop AI b11 w09 #091: span rtl isolate-vrl bare',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + bare stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-bare; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-092',
    label: 'Loop AI b11 w09 #092: span rtl isolate-vrl mixed-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + mixed-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-mixed-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-093',
    label: 'Loop AI b11 w09 #093: span rtl isolate-vrl upright-to',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + upright-to stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-upright-to; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-094',
    label: 'Loop AI b11 w09 #094: span rtl isolate-vrl lh-normal',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + lh-normal stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-lh-normal; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-095',
    label: 'Loop AI b11 w09 #095: span rtl isolate-vrl inline',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + inline stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-inline; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-096',
    label: 'Loop AI b11 w09 #096: span rtl isolate-vrl inline-block',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + inline-block stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-inline-block; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-097',
    label: 'Loop AI b11 w09 #097: span rtl isolate-vrl max-content',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + max-content stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-max-content; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-098',
    label: 'Loop AI b11 w09 #098: span rtl isolate-vrl nowrap',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + nowrap stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-nowrap; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-099',
    label: 'Loop AI b11 w09 #099: span rtl isolate-vrl ltr-wm',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + ltr-wm stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-ltr-wm; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w09-100',
    label: 'Loop AI b11 w09 #100: span rtl isolate-vrl fo-ltr-parent',
    idea: 'direction:rtl on FO span only + unicode-bidi:isolate + fo-ltr-parent stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:vertical-rl!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w09; span-rtl-isolate-vrl-fo-ltr-parent; direction:rtl scoped to foreignObject span only — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w09: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
