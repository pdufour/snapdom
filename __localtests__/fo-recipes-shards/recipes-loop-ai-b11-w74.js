/**
 * Loop AI batch-11 FO recipe shard (worker 74) — text-fix: text-emphasis-style/color/position combinations on FO text
 * 100 recipes: loop-ai-b11-w74-001..100
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
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'


/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w74-001',
    label: 'Loop AI b11 w74 #001: emphasis none on FO *',
    idea: 'text-emphasis on all FO descendants; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-002',
    label: 'Loop AI b11 w74 #002: filled dot over on FO *',
    idea: 'text-emphasis on all FO descendants; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-003',
    label: 'Loop AI b11 w74 #003: open dot under on FO *',
    idea: 'text-emphasis on all FO descendants; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-004',
    label: 'Loop AI b11 w74 #004: filled circle on FO *',
    idea: 'text-emphasis on all FO descendants; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-005',
    label: 'Loop AI b11 w74 #005: open circle on FO *',
    idea: 'text-emphasis on all FO descendants; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-006',
    label: 'Loop AI b11 w74 #006: sesame under on FO *',
    idea: 'text-emphasis on all FO descendants; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-007',
    label: 'Loop AI b11 w74 #007: open sesame on FO *',
    idea: 'text-emphasis on all FO descendants; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-008',
    label: 'Loop AI b11 w74 #008: double-circle on FO *',
    idea: 'text-emphasis on all FO descendants; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-009',
    label: 'Loop AI b11 w74 #009: triangle on FO *',
    idea: 'text-emphasis on all FO descendants; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-010',
    label: 'Loop AI b11 w74 #010: accent filled on FO *',
    idea: 'text-emphasis on all FO descendants; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-011',
    label: 'Loop AI b11 w74 #011: emphasis none on FO root',
    idea: 'text-emphasis on foreignObject root; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:none!important;text-emphasis-color:transparent!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-012',
    label: 'Loop AI b11 w74 #012: filled dot over on FO root',
    idea: 'text-emphasis on foreignObject root; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-013',
    label: 'Loop AI b11 w74 #013: open dot under on FO root',
    idea: 'text-emphasis on foreignObject root; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-014',
    label: 'Loop AI b11 w74 #014: filled circle on FO root',
    idea: 'text-emphasis on foreignObject root; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-015',
    label: 'Loop AI b11 w74 #015: open circle on FO root',
    idea: 'text-emphasis on foreignObject root; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-016',
    label: 'Loop AI b11 w74 #016: sesame under on FO root',
    idea: 'text-emphasis on foreignObject root; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-017',
    label: 'Loop AI b11 w74 #017: open sesame on FO root',
    idea: 'text-emphasis on foreignObject root; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-018',
    label: 'Loop AI b11 w74 #018: double-circle on FO root',
    idea: 'text-emphasis on foreignObject root; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-019',
    label: 'Loop AI b11 w74 #019: triangle on FO root',
    idea: 'text-emphasis on foreignObject root; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-020',
    label: 'Loop AI b11 w74 #020: accent filled on FO root',
    idea: 'text-emphasis on foreignObject root; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (root); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-021',
    label: 'Loop AI b11 w74 #021: emphasis none on text chain',
    idea: 'text-emphasis on text chain; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-022',
    label: 'Loop AI b11 w74 #022: filled dot over on text chain',
    idea: 'text-emphasis on text chain; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-023',
    label: 'Loop AI b11 w74 #023: open dot under on text chain',
    idea: 'text-emphasis on text chain; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-024',
    label: 'Loop AI b11 w74 #024: filled circle on text chain',
    idea: 'text-emphasis on text chain; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-025',
    label: 'Loop AI b11 w74 #025: open circle on text chain',
    idea: 'text-emphasis on text chain; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-026',
    label: 'Loop AI b11 w74 #026: sesame under on text chain',
    idea: 'text-emphasis on text chain; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-027',
    label: 'Loop AI b11 w74 #027: open sesame on text chain',
    idea: 'text-emphasis on text chain; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-028',
    label: 'Loop AI b11 w74 #028: double-circle on text chain',
    idea: 'text-emphasis on text chain; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-029',
    label: 'Loop AI b11 w74 #029: triangle on text chain',
    idea: 'text-emphasis on text chain; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-030',
    label: 'Loop AI b11 w74 #030: accent filled on text chain',
    idea: 'text-emphasis on text chain; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (text-chain); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-031',
    label: 'Loop AI b11 w74 #031: emphasis none on FO span',
    idea: 'text-emphasis on FO span; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:none!important;text-emphasis-color:transparent!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-032',
    label: 'Loop AI b11 w74 #032: filled dot over on FO span',
    idea: 'text-emphasis on FO span; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-033',
    label: 'Loop AI b11 w74 #033: open dot under on FO span',
    idea: 'text-emphasis on FO span; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-034',
    label: 'Loop AI b11 w74 #034: filled circle on FO span',
    idea: 'text-emphasis on FO span; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-035',
    label: 'Loop AI b11 w74 #035: open circle on FO span',
    idea: 'text-emphasis on FO span; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-036',
    label: 'Loop AI b11 w74 #036: sesame under on FO span',
    idea: 'text-emphasis on FO span; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-037',
    label: 'Loop AI b11 w74 #037: open sesame on FO span',
    idea: 'text-emphasis on FO span; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-038',
    label: 'Loop AI b11 w74 #038: double-circle on FO span',
    idea: 'text-emphasis on FO span; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-039',
    label: 'Loop AI b11 w74 #039: triangle on FO span',
    idea: 'text-emphasis on FO span; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-040',
    label: 'Loop AI b11 w74 #040: accent filled on FO span',
    idea: 'text-emphasis on FO span; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (span); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-041',
    label: 'Loop AI b11 w74 #041: emphasis none on FO a',
    idea: 'text-emphasis on FO anchors; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:none!important;text-emphasis-color:transparent!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-042',
    label: 'Loop AI b11 w74 #042: filled dot over on FO a',
    idea: 'text-emphasis on FO anchors; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-043',
    label: 'Loop AI b11 w74 #043: open dot under on FO a',
    idea: 'text-emphasis on FO anchors; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-044',
    label: 'Loop AI b11 w74 #044: filled circle on FO a',
    idea: 'text-emphasis on FO anchors; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-045',
    label: 'Loop AI b11 w74 #045: open circle on FO a',
    idea: 'text-emphasis on FO anchors; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-046',
    label: 'Loop AI b11 w74 #046: sesame under on FO a',
    idea: 'text-emphasis on FO anchors; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-047',
    label: 'Loop AI b11 w74 #047: open sesame on FO a',
    idea: 'text-emphasis on FO anchors; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-048',
    label: 'Loop AI b11 w74 #048: double-circle on FO a',
    idea: 'text-emphasis on FO anchors; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-049',
    label: 'Loop AI b11 w74 #049: triangle on FO a',
    idea: 'text-emphasis on FO anchors; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-050',
    label: 'Loop AI b11 w74 #050: accent filled on FO a',
    idea: 'text-emphasis on FO anchors; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (anchors); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-051',
    label: 'Loop AI b11 w74 #051: emphasis none on FO nav a',
    idea: 'text-emphasis on nav anchors; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:none!important;text-emphasis-color:transparent!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-052',
    label: 'Loop AI b11 w74 #052: filled dot over on FO nav a',
    idea: 'text-emphasis on nav anchors; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-053',
    label: 'Loop AI b11 w74 #053: open dot under on FO nav a',
    idea: 'text-emphasis on nav anchors; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-054',
    label: 'Loop AI b11 w74 #054: filled circle on FO nav a',
    idea: 'text-emphasis on nav anchors; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-055',
    label: 'Loop AI b11 w74 #055: open circle on FO nav a',
    idea: 'text-emphasis on nav anchors; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-056',
    label: 'Loop AI b11 w74 #056: sesame under on FO nav a',
    idea: 'text-emphasis on nav anchors; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-057',
    label: 'Loop AI b11 w74 #057: open sesame on FO nav a',
    idea: 'text-emphasis on nav anchors; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-058',
    label: 'Loop AI b11 w74 #058: double-circle on FO nav a',
    idea: 'text-emphasis on nav anchors; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-059',
    label: 'Loop AI b11 w74 #059: triangle on FO nav a',
    idea: 'text-emphasis on nav anchors; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-060',
    label: 'Loop AI b11 w74 #060: accent filled on FO nav a',
    idea: 'text-emphasis on nav anchors; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (nav-a); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-061',
    label: 'Loop AI b11 w74 #061: emphasis none on FO>div *',
    idea: 'text-emphasis on wrapper descendants; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-062',
    label: 'Loop AI b11 w74 #062: filled dot over on FO>div *',
    idea: 'text-emphasis on wrapper descendants; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-063',
    label: 'Loop AI b11 w74 #063: open dot under on FO>div *',
    idea: 'text-emphasis on wrapper descendants; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-064',
    label: 'Loop AI b11 w74 #064: filled circle on FO>div *',
    idea: 'text-emphasis on wrapper descendants; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-065',
    label: 'Loop AI b11 w74 #065: open circle on FO>div *',
    idea: 'text-emphasis on wrapper descendants; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-066',
    label: 'Loop AI b11 w74 #066: sesame under on FO>div *',
    idea: 'text-emphasis on wrapper descendants; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-067',
    label: 'Loop AI b11 w74 #067: open sesame on FO>div *',
    idea: 'text-emphasis on wrapper descendants; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-068',
    label: 'Loop AI b11 w74 #068: double-circle on FO>div *',
    idea: 'text-emphasis on wrapper descendants; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-069',
    label: 'Loop AI b11 w74 #069: triangle on FO>div *',
    idea: 'text-emphasis on wrapper descendants; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-070',
    label: 'Loop AI b11 w74 #070: accent filled on FO>div *',
    idea: 'text-emphasis on wrapper descendants; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (fo-div-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-071',
    label: 'Loop AI b11 w74 #071: emphasis none on FO strong',
    idea: 'text-emphasis on strong leaves; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:none!important;text-emphasis-color:transparent!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-072',
    label: 'Loop AI b11 w74 #072: filled dot over on FO strong',
    idea: 'text-emphasis on strong leaves; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-073',
    label: 'Loop AI b11 w74 #073: open dot under on FO strong',
    idea: 'text-emphasis on strong leaves; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-074',
    label: 'Loop AI b11 w74 #074: filled circle on FO strong',
    idea: 'text-emphasis on strong leaves; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-075',
    label: 'Loop AI b11 w74 #075: open circle on FO strong',
    idea: 'text-emphasis on strong leaves; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-076',
    label: 'Loop AI b11 w74 #076: sesame under on FO strong',
    idea: 'text-emphasis on strong leaves; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-077',
    label: 'Loop AI b11 w74 #077: open sesame on FO strong',
    idea: 'text-emphasis on strong leaves; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-078',
    label: 'Loop AI b11 w74 #078: double-circle on FO strong',
    idea: 'text-emphasis on strong leaves; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-079',
    label: 'Loop AI b11 w74 #079: triangle on FO strong',
    idea: 'text-emphasis on strong leaves; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-080',
    label: 'Loop AI b11 w74 #080: accent filled on FO strong',
    idea: 'text-emphasis on strong leaves; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject strong{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important;font-weight:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (strong-em); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-081',
    label: 'Loop AI b11 w74 #081: emphasis none Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; none (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-082',
    label: 'Loop AI b11 w74 #082: filled dot over Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; filled dot over right',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-dot-over (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-083',
    label: 'Loop AI b11 w74 #083: open dot under Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; open dot under left',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-dot-under (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-084',
    label: 'Loop AI b11 w74 #084: filled circle Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; filled circle emphasis',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; filled-circle (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-085',
    label: 'Loop AI b11 w74 #085: open circle Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; open circle emphasis',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-circle (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-086',
    label: 'Loop AI b11 w74 #086: sesame under Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; filled sesame under left',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; sesame-under (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-087',
    label: 'Loop AI b11 w74 #087: open sesame Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; open sesame over right',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; open-sesame (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-088',
    label: 'Loop AI b11 w74 #088: double-circle Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; double-circle emphasis',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; double-circle (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-089',
    label: 'Loop AI b11 w74 #089: triangle Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; triangle emphasis',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; triangle (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-090',
    label: 'Loop AI b11 w74 #090: accent filled Chromium + FO *',
    idea: 'Chromium copy with text-emphasis on FO *; accent emphasis under left',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w74; accent-filled (chromium-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-091',
    label: 'Loop AI b11 w74 #091: emphasis none stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; text-emphasis-style:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; none (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-092',
    label: 'Loop AI b11 w74 #092: filled dot over stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; filled dot over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; filled-dot-over (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-093',
    label: 'Loop AI b11 w74 #093: open dot under stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; open dot under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open dot!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; open-dot-under (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-094',
    label: 'Loop AI b11 w74 #094: filled circle stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; filled circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; filled-circle (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-095',
    label: 'Loop AI b11 w74 #095: open circle stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; open circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open circle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; open-circle (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-096',
    label: 'Loop AI b11 w74 #096: sesame under stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; filled sesame under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:filled sesame!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; sesame-under (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-097',
    label: 'Loop AI b11 w74 #097: open sesame stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; open sesame over right',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:open sesame!important;text-emphasis-position:over right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; open-sesame (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-098',
    label: 'Loop AI b11 w74 #098: double-circle stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; double-circle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:double-circle!important;text-emphasis-position:under right!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; double-circle (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-099',
    label: 'Loop AI b11 w74 #099: triangle stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; triangle emphasis',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:triangle!important;text-emphasis-position:over left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; triangle (stretch-star); text-emphasis — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w74-100',
    label: 'Loop AI b11 w74 #100: accent filled stretch + FO *',
    idea: 'stretch leaf with text-emphasis on FO *; accent emphasis under left',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-emphasis-style:accent!important;text-emphasis-position:under left!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w74; accent-filled (stretch-star); text-emphasis — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

