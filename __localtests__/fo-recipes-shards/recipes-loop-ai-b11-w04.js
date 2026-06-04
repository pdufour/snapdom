/**
 * Loop AI batch-11 FO recipe shard (worker 04) — text-fix: sideways-lr full selector matrix.
 * PRIMARY: writing-mode:sideways-lr across selector × orientation × strut bundles
 * 100 recipes: loop-ai-b11-w04-001..100
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
    id: 'loop-ai-b11-w04-001',
    label: 'Loop AI b11 w04 #001: sideways-lr star mixed bare',
    idea: 'sideways-lr on star + text-orientation:mixed + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-mixed-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-002',
    label: 'Loop AI b11 w04 #002: sideways-lr star mixed lh-normal',
    idea: 'sideways-lr on star + text-orientation:mixed + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-mixed-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-003',
    label: 'Loop AI b11 w04 #003: sideways-lr star mixed max-content',
    idea: 'sideways-lr on star + text-orientation:mixed + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:mixed!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-mixed-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-004',
    label: 'Loop AI b11 w04 #004: sideways-lr star mixed baseline',
    idea: 'sideways-lr on star + text-orientation:mixed + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-mixed-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-005',
    label: 'Loop AI b11 w04 #005: sideways-lr star upright bare',
    idea: 'sideways-lr on star + text-orientation:upright + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:upright!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-upright-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-006',
    label: 'Loop AI b11 w04 #006: sideways-lr star upright lh-normal',
    idea: 'sideways-lr on star + text-orientation:upright + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:upright!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-upright-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-007',
    label: 'Loop AI b11 w04 #007: sideways-lr star upright max-content',
    idea: 'sideways-lr on star + text-orientation:upright + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:upright!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-upright-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-008',
    label: 'Loop AI b11 w04 #008: sideways-lr star upright baseline',
    idea: 'sideways-lr on star + text-orientation:upright + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:upright!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-upright-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-009',
    label: 'Loop AI b11 w04 #009: sideways-lr star sideways bare',
    idea: 'sideways-lr on star + text-orientation:sideways + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-010',
    label: 'Loop AI b11 w04 #010: sideways-lr star sideways lh-normal',
    idea: 'sideways-lr on star + text-orientation:sideways + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-011',
    label: 'Loop AI b11 w04 #011: sideways-lr star sideways max-content',
    idea: 'sideways-lr on star + text-orientation:sideways + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-012',
    label: 'Loop AI b11 w04 #012: sideways-lr star sideways baseline',
    idea: 'sideways-lr on star + text-orientation:sideways + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-013',
    label: 'Loop AI b11 w04 #013: sideways-lr star sideways-right bare',
    idea: 'sideways-lr on star + text-orientation:sideways-right + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-right-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-014',
    label: 'Loop AI b11 w04 #014: sideways-lr star sideways-right lh-normal',
    idea: 'sideways-lr on star + text-orientation:sideways-right + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-right-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-015',
    label: 'Loop AI b11 w04 #015: sideways-lr star sideways-right max-content',
    idea: 'sideways-lr on star + text-orientation:sideways-right + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-right-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-016',
    label: 'Loop AI b11 w04 #016: sideways-lr star sideways-right baseline',
    idea: 'sideways-lr on star + text-orientation:sideways-right + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-right-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-017',
    label: 'Loop AI b11 w04 #017: sideways-lr star sideways-left bare',
    idea: 'sideways-lr on star + text-orientation:sideways-left + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-left-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-018',
    label: 'Loop AI b11 w04 #018: sideways-lr star sideways-left lh-normal',
    idea: 'sideways-lr on star + text-orientation:sideways-left + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-left-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-019',
    label: 'Loop AI b11 w04 #019: sideways-lr star sideways-left max-content',
    idea: 'sideways-lr on star + text-orientation:sideways-left + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-left-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-020',
    label: 'Loop AI b11 w04 #020: sideways-lr star sideways-left baseline',
    idea: 'sideways-lr on star + text-orientation:sideways-left + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; star-sideways-left-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-021',
    label: 'Loop AI b11 w04 #021: sideways-lr span mixed bare',
    idea: 'sideways-lr on span + text-orientation:mixed + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-mixed-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-022',
    label: 'Loop AI b11 w04 #022: sideways-lr span mixed lh-normal',
    idea: 'sideways-lr on span + text-orientation:mixed + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-mixed-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-023',
    label: 'Loop AI b11 w04 #023: sideways-lr span mixed max-content',
    idea: 'sideways-lr on span + text-orientation:mixed + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:mixed!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-mixed-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-024',
    label: 'Loop AI b11 w04 #024: sideways-lr span mixed baseline',
    idea: 'sideways-lr on span + text-orientation:mixed + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-mixed-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-025',
    label: 'Loop AI b11 w04 #025: sideways-lr span upright bare',
    idea: 'sideways-lr on span + text-orientation:upright + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:upright!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-upright-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-026',
    label: 'Loop AI b11 w04 #026: sideways-lr span upright lh-normal',
    idea: 'sideways-lr on span + text-orientation:upright + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:upright!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-upright-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-027',
    label: 'Loop AI b11 w04 #027: sideways-lr span upright max-content',
    idea: 'sideways-lr on span + text-orientation:upright + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:upright!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-upright-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-028',
    label: 'Loop AI b11 w04 #028: sideways-lr span upright baseline',
    idea: 'sideways-lr on span + text-orientation:upright + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:upright!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-upright-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-029',
    label: 'Loop AI b11 w04 #029: sideways-lr span sideways bare',
    idea: 'sideways-lr on span + text-orientation:sideways + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-030',
    label: 'Loop AI b11 w04 #030: sideways-lr span sideways lh-normal',
    idea: 'sideways-lr on span + text-orientation:sideways + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-031',
    label: 'Loop AI b11 w04 #031: sideways-lr span sideways max-content',
    idea: 'sideways-lr on span + text-orientation:sideways + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-032',
    label: 'Loop AI b11 w04 #032: sideways-lr span sideways baseline',
    idea: 'sideways-lr on span + text-orientation:sideways + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-033',
    label: 'Loop AI b11 w04 #033: sideways-lr span sideways-right bare',
    idea: 'sideways-lr on span + text-orientation:sideways-right + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-right-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-034',
    label: 'Loop AI b11 w04 #034: sideways-lr span sideways-right lh-normal',
    idea: 'sideways-lr on span + text-orientation:sideways-right + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-right-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-035',
    label: 'Loop AI b11 w04 #035: sideways-lr span sideways-right max-content',
    idea: 'sideways-lr on span + text-orientation:sideways-right + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-right-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-036',
    label: 'Loop AI b11 w04 #036: sideways-lr span sideways-right baseline',
    idea: 'sideways-lr on span + text-orientation:sideways-right + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-right-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-037',
    label: 'Loop AI b11 w04 #037: sideways-lr span sideways-left bare',
    idea: 'sideways-lr on span + text-orientation:sideways-left + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-left-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-038',
    label: 'Loop AI b11 w04 #038: sideways-lr span sideways-left lh-normal',
    idea: 'sideways-lr on span + text-orientation:sideways-left + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-left-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-039',
    label: 'Loop AI b11 w04 #039: sideways-lr span sideways-left max-content',
    idea: 'sideways-lr on span + text-orientation:sideways-left + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-left-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-040',
    label: 'Loop AI b11 w04 #040: sideways-lr span sideways-left baseline',
    idea: 'sideways-lr on span + text-orientation:sideways-left + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; span-sideways-left-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-041',
    label: 'Loop AI b11 w04 #041: sideways-lr a mixed bare',
    idea: 'sideways-lr on a + text-orientation:mixed + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-mixed-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-042',
    label: 'Loop AI b11 w04 #042: sideways-lr a mixed lh-normal',
    idea: 'sideways-lr on a + text-orientation:mixed + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-mixed-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-043',
    label: 'Loop AI b11 w04 #043: sideways-lr a mixed max-content',
    idea: 'sideways-lr on a + text-orientation:mixed + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:mixed!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-mixed-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-044',
    label: 'Loop AI b11 w04 #044: sideways-lr a mixed baseline',
    idea: 'sideways-lr on a + text-orientation:mixed + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-mixed-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-045',
    label: 'Loop AI b11 w04 #045: sideways-lr a upright bare',
    idea: 'sideways-lr on a + text-orientation:upright + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:upright!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-upright-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-046',
    label: 'Loop AI b11 w04 #046: sideways-lr a upright lh-normal',
    idea: 'sideways-lr on a + text-orientation:upright + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:upright!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-upright-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-047',
    label: 'Loop AI b11 w04 #047: sideways-lr a upright max-content',
    idea: 'sideways-lr on a + text-orientation:upright + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:upright!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-upright-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-048',
    label: 'Loop AI b11 w04 #048: sideways-lr a upright baseline',
    idea: 'sideways-lr on a + text-orientation:upright + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:upright!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-upright-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-049',
    label: 'Loop AI b11 w04 #049: sideways-lr a sideways bare',
    idea: 'sideways-lr on a + text-orientation:sideways + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-050',
    label: 'Loop AI b11 w04 #050: sideways-lr a sideways lh-normal',
    idea: 'sideways-lr on a + text-orientation:sideways + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-051',
    label: 'Loop AI b11 w04 #051: sideways-lr a sideways max-content',
    idea: 'sideways-lr on a + text-orientation:sideways + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-052',
    label: 'Loop AI b11 w04 #052: sideways-lr a sideways baseline',
    idea: 'sideways-lr on a + text-orientation:sideways + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-053',
    label: 'Loop AI b11 w04 #053: sideways-lr a sideways-right bare',
    idea: 'sideways-lr on a + text-orientation:sideways-right + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-right-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-054',
    label: 'Loop AI b11 w04 #054: sideways-lr a sideways-right lh-normal',
    idea: 'sideways-lr on a + text-orientation:sideways-right + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-right-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-055',
    label: 'Loop AI b11 w04 #055: sideways-lr a sideways-right max-content',
    idea: 'sideways-lr on a + text-orientation:sideways-right + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-right-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-056',
    label: 'Loop AI b11 w04 #056: sideways-lr a sideways-right baseline',
    idea: 'sideways-lr on a + text-orientation:sideways-right + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-right-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-057',
    label: 'Loop AI b11 w04 #057: sideways-lr a sideways-left bare',
    idea: 'sideways-lr on a + text-orientation:sideways-left + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-left-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-058',
    label: 'Loop AI b11 w04 #058: sideways-lr a sideways-left lh-normal',
    idea: 'sideways-lr on a + text-orientation:sideways-left + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-left-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-059',
    label: 'Loop AI b11 w04 #059: sideways-lr a sideways-left max-content',
    idea: 'sideways-lr on a + text-orientation:sideways-left + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-left-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-060',
    label: 'Loop AI b11 w04 #060: sideways-lr a sideways-left baseline',
    idea: 'sideways-lr on a + text-orientation:sideways-left + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; a-sideways-left-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-061',
    label: 'Loop AI b11 w04 #061: sideways-lr chain mixed bare',
    idea: 'sideways-lr on chain + text-orientation:mixed + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:mixed!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-mixed-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-062',
    label: 'Loop AI b11 w04 #062: sideways-lr chain mixed lh-normal',
    idea: 'sideways-lr on chain + text-orientation:mixed + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:mixed!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-mixed-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-063',
    label: 'Loop AI b11 w04 #063: sideways-lr chain mixed max-content',
    idea: 'sideways-lr on chain + text-orientation:mixed + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:mixed!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-mixed-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-064',
    label: 'Loop AI b11 w04 #064: sideways-lr chain mixed baseline',
    idea: 'sideways-lr on chain + text-orientation:mixed + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-mixed-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-065',
    label: 'Loop AI b11 w04 #065: sideways-lr chain upright bare',
    idea: 'sideways-lr on chain + text-orientation:upright + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:upright!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-upright-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-066',
    label: 'Loop AI b11 w04 #066: sideways-lr chain upright lh-normal',
    idea: 'sideways-lr on chain + text-orientation:upright + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:upright!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-upright-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-067',
    label: 'Loop AI b11 w04 #067: sideways-lr chain upright max-content',
    idea: 'sideways-lr on chain + text-orientation:upright + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:upright!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-upright-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-068',
    label: 'Loop AI b11 w04 #068: sideways-lr chain upright baseline',
    idea: 'sideways-lr on chain + text-orientation:upright + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:upright!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-upright-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-069',
    label: 'Loop AI b11 w04 #069: sideways-lr chain sideways bare',
    idea: 'sideways-lr on chain + text-orientation:sideways + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-070',
    label: 'Loop AI b11 w04 #070: sideways-lr chain sideways lh-normal',
    idea: 'sideways-lr on chain + text-orientation:sideways + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-071',
    label: 'Loop AI b11 w04 #071: sideways-lr chain sideways max-content',
    idea: 'sideways-lr on chain + text-orientation:sideways + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-072',
    label: 'Loop AI b11 w04 #072: sideways-lr chain sideways baseline',
    idea: 'sideways-lr on chain + text-orientation:sideways + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-073',
    label: 'Loop AI b11 w04 #073: sideways-lr chain sideways-right bare',
    idea: 'sideways-lr on chain + text-orientation:sideways-right + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-right-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-074',
    label: 'Loop AI b11 w04 #074: sideways-lr chain sideways-right lh-normal',
    idea: 'sideways-lr on chain + text-orientation:sideways-right + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-right-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-075',
    label: 'Loop AI b11 w04 #075: sideways-lr chain sideways-right max-content',
    idea: 'sideways-lr on chain + text-orientation:sideways-right + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-right-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-076',
    label: 'Loop AI b11 w04 #076: sideways-lr chain sideways-right baseline',
    idea: 'sideways-lr on chain + text-orientation:sideways-right + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-right-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-077',
    label: 'Loop AI b11 w04 #077: sideways-lr chain sideways-left bare',
    idea: 'sideways-lr on chain + text-orientation:sideways-left + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-left-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-078',
    label: 'Loop AI b11 w04 #078: sideways-lr chain sideways-left lh-normal',
    idea: 'sideways-lr on chain + text-orientation:sideways-left + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;line-height:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-left-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-079',
    label: 'Loop AI b11 w04 #079: sideways-lr chain sideways-left max-content',
    idea: 'sideways-lr on chain + text-orientation:sideways-left + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;inline-size:max-content!important;block-size:auto!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-left-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-080',
    label: 'Loop AI b11 w04 #080: sideways-lr chain sideways-left baseline',
    idea: 'sideways-lr on chain + text-orientation:sideways-left + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;vertical-align:baseline!important;display:inline-block!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; chain-sideways-left-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-081',
    label: 'Loop AI b11 w04 #081: sideways-lr fo-root mixed bare',
    idea: 'sideways-lr on fo-root + text-orientation:mixed + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-mixed-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-082',
    label: 'Loop AI b11 w04 #082: sideways-lr fo-root mixed lh-normal',
    idea: 'sideways-lr on fo-root + text-orientation:mixed + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-mixed-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-083',
    label: 'Loop AI b11 w04 #083: sideways-lr fo-root mixed max-content',
    idea: 'sideways-lr on fo-root + text-orientation:mixed + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;inline-size:max-content!important;block-size:auto!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-mixed-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-084',
    label: 'Loop AI b11 w04 #084: sideways-lr fo-root mixed baseline',
    idea: 'sideways-lr on fo-root + text-orientation:mixed + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-mixed-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-085',
    label: 'Loop AI b11 w04 #085: sideways-lr fo-root upright bare',
    idea: 'sideways-lr on fo-root + text-orientation:upright + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-upright-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-086',
    label: 'Loop AI b11 w04 #086: sideways-lr fo-root upright lh-normal',
    idea: 'sideways-lr on fo-root + text-orientation:upright + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-upright-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-087',
    label: 'Loop AI b11 w04 #087: sideways-lr fo-root upright max-content',
    idea: 'sideways-lr on fo-root + text-orientation:upright + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;inline-size:max-content!important;block-size:auto!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-upright-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-088',
    label: 'Loop AI b11 w04 #088: sideways-lr fo-root upright baseline',
    idea: 'sideways-lr on fo-root + text-orientation:upright + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;vertical-align:baseline!important;display:inline-block!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-upright-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-089',
    label: 'Loop AI b11 w04 #089: sideways-lr fo-root sideways bare',
    idea: 'sideways-lr on fo-root + text-orientation:sideways + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-090',
    label: 'Loop AI b11 w04 #090: sideways-lr fo-root sideways lh-normal',
    idea: 'sideways-lr on fo-root + text-orientation:sideways + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways!important;line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-091',
    label: 'Loop AI b11 w04 #091: sideways-lr fo-root sideways max-content',
    idea: 'sideways-lr on fo-root + text-orientation:sideways + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways!important;inline-size:max-content!important;block-size:auto!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-092',
    label: 'Loop AI b11 w04 #092: sideways-lr fo-root sideways baseline',
    idea: 'sideways-lr on fo-root + text-orientation:sideways + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways!important;vertical-align:baseline!important;display:inline-block!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-093',
    label: 'Loop AI b11 w04 #093: sideways-lr fo-root sideways-right bare',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-right + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-right-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-094',
    label: 'Loop AI b11 w04 #094: sideways-lr fo-root sideways-right lh-normal',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-right + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-right-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-095',
    label: 'Loop AI b11 w04 #095: sideways-lr fo-root sideways-right max-content',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-right + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;inline-size:max-content!important;block-size:auto!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-right-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-096',
    label: 'Loop AI b11 w04 #096: sideways-lr fo-root sideways-right baseline',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-right + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-right!important;vertical-align:baseline!important;display:inline-block!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-right-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-097',
    label: 'Loop AI b11 w04 #097: sideways-lr fo-root sideways-left bare',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-left + bare bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-left-bare; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-098',
    label: 'Loop AI b11 w04 #098: sideways-lr fo-root sideways-left lh-normal',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-left + lh-normal bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-left-lh-normal; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-099',
    label: 'Loop AI b11 w04 #099: sideways-lr fo-root sideways-left max-content',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-left + max-content bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;inline-size:max-content!important;block-size:auto!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-left-max-content; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w04-100',
    label: 'Loop AI b11 w04 #100: sideways-lr fo-root sideways-left baseline',
    idea: 'sideways-lr on fo-root + text-orientation:sideways-left + baseline bundle — full matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:sideways-left!important;vertical-align:baseline!important;display:inline-block!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w04; fo-root-sideways-left-baseline; writing-mode:sideways-lr across selector × orientation × strut bundles — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w04: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
