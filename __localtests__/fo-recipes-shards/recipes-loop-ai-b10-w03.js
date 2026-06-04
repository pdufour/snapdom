/**
 * Loop AI batch-10 FO recipe shard (worker 3) — text-fix: direction rtl/ltr + unicode-bidi matrix on span/a.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w03-001',
    label: 'Loop AI b10 w03 #001: span rtl normal bidi',
    idea: 'direction:rtl + unicode-bidi:normal on FO span — rtl inline axis vs normal embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-002',
    label: 'Loop AI b10 w03 #002: span rtl embed bidi',
    idea: 'direction:rtl + unicode-bidi:embed on FO span — rtl inline axis vs embed embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-003',
    label: 'Loop AI b10 w03 #003: span rtl isolate bidi',
    idea: 'direction:rtl + unicode-bidi:isolate on FO span — rtl inline axis vs isolate embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-004',
    label: 'Loop AI b10 w03 #004: span rtl plaintext bidi',
    idea: 'direction:rtl + unicode-bidi:plaintext on FO span — rtl inline axis vs plaintext embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-005',
    label: 'Loop AI b10 w03 #005: span rtl bidi-override bidi',
    idea: 'direction:rtl + unicode-bidi:bidi-override on FO span — rtl inline axis vs bidi-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:bidi-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-006',
    label: 'Loop AI b10 w03 #006: span rtl isolate-override bidi',
    idea: 'direction:rtl + unicode-bidi:isolate-override on FO span — rtl inline axis vs isolate-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span rtl+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-007',
    label: 'Loop AI b10 w03 #007: span ltr normal bidi',
    idea: 'direction:ltr + unicode-bidi:normal on FO span — ltr inline axis vs normal embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:normal!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-008',
    label: 'Loop AI b10 w03 #008: span ltr embed bidi',
    idea: 'direction:ltr + unicode-bidi:embed on FO span — ltr inline axis vs embed embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:embed!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-009',
    label: 'Loop AI b10 w03 #009: span ltr isolate bidi',
    idea: 'direction:ltr + unicode-bidi:isolate on FO span — ltr inline axis vs isolate embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:isolate!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-010',
    label: 'Loop AI b10 w03 #010: span ltr plaintext bidi',
    idea: 'direction:ltr + unicode-bidi:plaintext on FO span — ltr inline axis vs plaintext embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:plaintext!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-011',
    label: 'Loop AI b10 w03 #011: span ltr bidi-override bidi',
    idea: 'direction:ltr + unicode-bidi:bidi-override on FO span — ltr inline axis vs bidi-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:bidi-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-012',
    label: 'Loop AI b10 w03 #012: span ltr isolate-override bidi',
    idea: 'direction:ltr + unicode-bidi:isolate-override on FO span — ltr inline axis vs isolate-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:ltr!important;unicode-bidi:isolate-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span ltr+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-013',
    label: 'Loop AI b10 w03 #013: a rtl normal bidi',
    idea: 'direction:rtl + unicode-bidi:normal on FO a — nav/link rtl bidi vs normal paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-014',
    label: 'Loop AI b10 w03 #014: a rtl embed bidi',
    idea: 'direction:rtl + unicode-bidi:embed on FO a — nav/link rtl bidi vs embed paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:embed!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-015',
    label: 'Loop AI b10 w03 #015: a rtl isolate bidi',
    idea: 'direction:rtl + unicode-bidi:isolate on FO a — nav/link rtl bidi vs isolate paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:isolate!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-016',
    label: 'Loop AI b10 w03 #016: a rtl plaintext bidi',
    idea: 'direction:rtl + unicode-bidi:plaintext on FO a — nav/link rtl bidi vs plaintext paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:plaintext!important;text-align:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-017',
    label: 'Loop AI b10 w03 #017: a rtl bidi-override bidi',
    idea: 'direction:rtl + unicode-bidi:bidi-override on FO a — nav/link rtl bidi vs bidi-override paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:bidi-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-018',
    label: 'Loop AI b10 w03 #018: a rtl isolate-override bidi',
    idea: 'direction:rtl + unicode-bidi:isolate-override on FO a — nav/link rtl bidi vs isolate-override paint',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:rtl!important;unicode-bidi:isolate-override!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor rtl+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-019',
    label: 'Loop AI b10 w03 #019: a ltr normal bidi',
    idea: 'direction:ltr + unicode-bidi:normal on FO a — anchor ltr bidi vs normal embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-020',
    label: 'Loop AI b10 w03 #020: a ltr embed bidi',
    idea: 'direction:ltr + unicode-bidi:embed on FO a — anchor ltr bidi vs embed embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:embed!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-021',
    label: 'Loop AI b10 w03 #021: a ltr isolate bidi',
    idea: 'direction:ltr + unicode-bidi:isolate on FO a — anchor ltr bidi vs isolate embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:isolate!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-022',
    label: 'Loop AI b10 w03 #022: a ltr plaintext bidi',
    idea: 'direction:ltr + unicode-bidi:plaintext on FO a — anchor ltr bidi vs plaintext embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:plaintext!important;text-align:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-023',
    label: 'Loop AI b10 w03 #023: a ltr bidi-override bidi',
    idea: 'direction:ltr + unicode-bidi:bidi-override on FO a — anchor ltr bidi vs bidi-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:bidi-override!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-024',
    label: 'Loop AI b10 w03 #024: a ltr isolate-override bidi',
    idea: 'direction:ltr + unicode-bidi:isolate-override on FO a — anchor ltr bidi vs isolate-override embedding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{direction:ltr!important;unicode-bidi:isolate-override!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; anchor ltr+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-025',
    label: 'Loop AI b10 w03 #025: span,a rtl normal bidi',
    idea: 'direction:rtl + unicode-bidi:normal on FO span,a — paired inline leaves rtl normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:normal!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-026',
    label: 'Loop AI b10 w03 #026: span,a rtl embed bidi',
    idea: 'direction:rtl + unicode-bidi:embed on FO span,a — paired inline leaves rtl embed',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:embed!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-027',
    label: 'Loop AI b10 w03 #027: span,a rtl isolate bidi',
    idea: 'direction:rtl + unicode-bidi:isolate on FO span,a — paired inline leaves rtl isolate',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:isolate!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-028',
    label: 'Loop AI b10 w03 #028: span,a rtl plaintext bidi',
    idea: 'direction:rtl + unicode-bidi:plaintext on FO span,a — paired inline leaves rtl plaintext',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:plaintext!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-029',
    label: 'Loop AI b10 w03 #029: span,a rtl bidi-override bidi',
    idea: 'direction:rtl + unicode-bidi:bidi-override on FO span,a — paired inline leaves rtl bidi-override',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:bidi-override!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-030',
    label: 'Loop AI b10 w03 #030: span,a rtl isolate-override bidi',
    idea: 'direction:rtl + unicode-bidi:isolate-override on FO span,a — paired inline leaves rtl isolate-override',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:rtl!important;unicode-bidi:isolate-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a rtl+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-031',
    label: 'Loop AI b10 w03 #031: span,a ltr normal bidi',
    idea: 'direction:ltr + unicode-bidi:normal on FO span,a — paired inline leaves ltr normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:normal!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+normal; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-032',
    label: 'Loop AI b10 w03 #032: span,a ltr embed bidi',
    idea: 'direction:ltr + unicode-bidi:embed on FO span,a — paired inline leaves ltr embed',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:embed!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-033',
    label: 'Loop AI b10 w03 #033: span,a ltr isolate bidi',
    idea: 'direction:ltr + unicode-bidi:isolate on FO span,a — paired inline leaves ltr isolate',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:isolate!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-034',
    label: 'Loop AI b10 w03 #034: span,a ltr plaintext bidi',
    idea: 'direction:ltr + unicode-bidi:plaintext on FO span,a — paired inline leaves ltr plaintext',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:plaintext!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-035',
    label: 'Loop AI b10 w03 #035: span,a ltr bidi-override bidi',
    idea: 'direction:ltr + unicode-bidi:bidi-override on FO span,a — paired inline leaves ltr bidi-override',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:bidi-override!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+bidi-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-036',
    label: 'Loop AI b10 w03 #036: span,a ltr isolate-override bidi',
    idea: 'direction:ltr + unicode-bidi:isolate-override on FO span,a — paired inline leaves ltr isolate-override',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span,foreignObject a{direction:ltr!important;unicode-bidi:isolate-override!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; span,a ltr+isolate-override; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-037',
    label: 'Loop AI b10 w03 #037: FO ltr span rtl isolate',
    idea: 'foreignObject direction:ltr vs span direction:rtl + unicode-bidi:isolate — root/leaf bidi mismatch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; FO ltr + span rtl+isolate; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-038',
    label: 'Loop AI b10 w03 #038: FO rtl span ltr plaintext',
    idea: 'foreignObject direction:rtl vs span direction:ltr + unicode-bidi:plaintext — root/leaf bidi mismatch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:ltr!important;unicode-bidi:plaintext!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; FO rtl + span ltr+plaintext; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-039',
    label: 'Loop AI b10 w03 #039: FO ltr a rtl embed',
    idea: 'foreignObject direction:ltr vs a direction:rtl + unicode-bidi:embed — root/leaf bidi mismatch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:ltr!important}foreignObject a{direction:rtl!important;unicode-bidi:embed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; FO ltr + a rtl+embed; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w03-040',
    label: 'Loop AI b10 w03 #040: FO rtl a ltr normal',
    idea: 'foreignObject direction:rtl vs a direction:ltr + unicode-bidi:normal — root/leaf bidi mismatch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:ltr!important;unicode-bidi:normal!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w03; FO rtl + a ltr+normal; text axis only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
