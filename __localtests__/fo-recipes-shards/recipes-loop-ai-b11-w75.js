/**
 * Loop AI batch-11 FO recipe shard (worker 75) — text-fix: baseline-source alphabetic/first/last and alignment-source keywords
 * 100 recipes: loop-ai-b11-w75-001..100
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
    id: 'loop-ai-b11-w75-001',
    label: 'Loop AI b11 w75 #001: baseline auto on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:auto!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-002',
    label: 'Loop AI b11 w75 #002: baseline first on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:first!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-003',
    label: 'Loop AI b11 w75 #003: baseline last on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:last!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-004',
    label: 'Loop AI b11 w75 #004: baseline alphabetic on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:alphabetic!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-005',
    label: 'Loop AI b11 w75 #005: baseline central on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:central!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-006',
    label: 'Loop AI b11 w75 #006: baseline ideographic on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:ideographic!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-007',
    label: 'Loop AI b11 w75 #007: baseline mathematical on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:mathematical!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-008',
    label: 'Loop AI b11 w75 #008: baseline text-bottom on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-bottom!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-009',
    label: 'Loop AI b11 w75 #009: baseline text-top on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-top!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-010',
    label: 'Loop AI b11 w75 #010: baseline text-central on FO *',
    idea: 'baseline-source on all FO descendants; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-central!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-011',
    label: 'Loop AI b11 w75 #011: baseline auto on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:auto!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-012',
    label: 'Loop AI b11 w75 #012: baseline first on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:first!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-013',
    label: 'Loop AI b11 w75 #013: baseline last on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:last!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-014',
    label: 'Loop AI b11 w75 #014: baseline alphabetic on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:alphabetic!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-015',
    label: 'Loop AI b11 w75 #015: baseline central on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:central!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-016',
    label: 'Loop AI b11 w75 #016: baseline ideographic on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:ideographic!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-017',
    label: 'Loop AI b11 w75 #017: baseline mathematical on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:mathematical!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-018',
    label: 'Loop AI b11 w75 #018: baseline text-bottom on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:text-bottom!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-019',
    label: 'Loop AI b11 w75 #019: baseline text-top on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:text-top!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-020',
    label: 'Loop AI b11 w75 #020: baseline text-central on FO root',
    idea: 'baseline-source on foreignObject root; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{baseline-source:text-central!important;vertical-align:baseline!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (root); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-021',
    label: 'Loop AI b11 w75 #021: baseline auto inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:auto!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-022',
    label: 'Loop AI b11 w75 #022: baseline first inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-023',
    label: 'Loop AI b11 w75 #023: baseline last inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:last!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-024',
    label: 'Loop AI b11 w75 #024: baseline alphabetic inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:alphabetic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-025',
    label: 'Loop AI b11 w75 #025: baseline central inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-026',
    label: 'Loop AI b11 w75 #026: baseline ideographic inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:ideographic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-027',
    label: 'Loop AI b11 w75 #027: baseline mathematical inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:mathematical!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-028',
    label: 'Loop AI b11 w75 #028: baseline text-bottom inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:text-bottom!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-029',
    label: 'Loop AI b11 w75 #029: baseline text-top inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:text-top!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-030',
    label: 'Loop AI b11 w75 #030: baseline text-central inline FO *',
    idea: 'baseline-source with display:inline on FO *; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:inline!important;baseline-source:text-central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (inline-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-031',
    label: 'Loop AI b11 w75 #031: baseline auto on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:auto!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-032',
    label: 'Loop AI b11 w75 #032: baseline first on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:first!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-033',
    label: 'Loop AI b11 w75 #033: baseline last on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:last!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-034',
    label: 'Loop AI b11 w75 #034: baseline alphabetic on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:alphabetic!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-035',
    label: 'Loop AI b11 w75 #035: baseline central on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:central!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-036',
    label: 'Loop AI b11 w75 #036: baseline ideographic on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:ideographic!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-037',
    label: 'Loop AI b11 w75 #037: baseline mathematical on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:mathematical!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-038',
    label: 'Loop AI b11 w75 #038: baseline text-bottom on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:text-bottom!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-039',
    label: 'Loop AI b11 w75 #039: baseline text-top on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:text-top!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-040',
    label: 'Loop AI b11 w75 #040: baseline text-central on FO a',
    idea: 'baseline-source on FO anchors; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{baseline-source:text-central!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (anchors); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-041',
    label: 'Loop AI b11 w75 #041: baseline auto on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:auto!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-042',
    label: 'Loop AI b11 w75 #042: baseline first on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:first!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-043',
    label: 'Loop AI b11 w75 #043: baseline last on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:last!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-044',
    label: 'Loop AI b11 w75 #044: baseline alphabetic on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:alphabetic!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-045',
    label: 'Loop AI b11 w75 #045: baseline central on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:central!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-046',
    label: 'Loop AI b11 w75 #046: baseline ideographic on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:ideographic!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-047',
    label: 'Loop AI b11 w75 #047: baseline mathematical on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:mathematical!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-048',
    label: 'Loop AI b11 w75 #048: baseline text-bottom on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:text-bottom!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-049',
    label: 'Loop AI b11 w75 #049: baseline text-top on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:text-top!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-050',
    label: 'Loop AI b11 w75 #050: baseline text-central on FO nav a',
    idea: 'baseline-source on nav anchors; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{baseline-source:text-central!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (nav-a); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-051',
    label: 'Loop AI b11 w75 #051: baseline auto on FO span',
    idea: 'baseline-source on FO span; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:auto!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-052',
    label: 'Loop AI b11 w75 #052: baseline first on FO span',
    idea: 'baseline-source on FO span; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:first!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-053',
    label: 'Loop AI b11 w75 #053: baseline last on FO span',
    idea: 'baseline-source on FO span; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:last!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-054',
    label: 'Loop AI b11 w75 #054: baseline alphabetic on FO span',
    idea: 'baseline-source on FO span; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:alphabetic!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-055',
    label: 'Loop AI b11 w75 #055: baseline central on FO span',
    idea: 'baseline-source on FO span; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:central!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-056',
    label: 'Loop AI b11 w75 #056: baseline ideographic on FO span',
    idea: 'baseline-source on FO span; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:ideographic!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-057',
    label: 'Loop AI b11 w75 #057: baseline mathematical on FO span',
    idea: 'baseline-source on FO span; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:mathematical!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-058',
    label: 'Loop AI b11 w75 #058: baseline text-bottom on FO span',
    idea: 'baseline-source on FO span; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:text-bottom!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-059',
    label: 'Loop AI b11 w75 #059: baseline text-top on FO span',
    idea: 'baseline-source on FO span; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:text-top!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-060',
    label: 'Loop AI b11 w75 #060: baseline text-central on FO span',
    idea: 'baseline-source on FO span; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{baseline-source:text-central!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (span); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-061',
    label: 'Loop AI b11 w75 #061: baseline auto flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:auto!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-062',
    label: 'Loop AI b11 w75 #062: baseline first flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-063',
    label: 'Loop AI b11 w75 #063: baseline last flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:last!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-064',
    label: 'Loop AI b11 w75 #064: baseline alphabetic flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:alphabetic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-065',
    label: 'Loop AI b11 w75 #065: baseline central flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-066',
    label: 'Loop AI b11 w75 #066: baseline ideographic flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:ideographic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-067',
    label: 'Loop AI b11 w75 #067: baseline mathematical flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:mathematical!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-068',
    label: 'Loop AI b11 w75 #068: baseline text-bottom flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:text-bottom!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-069',
    label: 'Loop AI b11 w75 #069: baseline text-top flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:text-top!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-070',
    label: 'Loop AI b11 w75 #070: baseline text-central flex baseline row',
    idea: 'FO flex baseline row plus baseline-source on FO *; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{baseline-source:text-central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (flex-baseline-row); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-071',
    label: 'Loop AI b11 w75 #071: baseline auto on text chain',
    idea: 'baseline-source on text chain; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:auto!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-072',
    label: 'Loop AI b11 w75 #072: baseline first on text chain',
    idea: 'baseline-source on text chain; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-073',
    label: 'Loop AI b11 w75 #073: baseline last on text chain',
    idea: 'baseline-source on text chain; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:last!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-074',
    label: 'Loop AI b11 w75 #074: baseline alphabetic on text chain',
    idea: 'baseline-source on text chain; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:alphabetic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-075',
    label: 'Loop AI b11 w75 #075: baseline central on text chain',
    idea: 'baseline-source on text chain; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-076',
    label: 'Loop AI b11 w75 #076: baseline ideographic on text chain',
    idea: 'baseline-source on text chain; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:ideographic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-077',
    label: 'Loop AI b11 w75 #077: baseline mathematical on text chain',
    idea: 'baseline-source on text chain; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:mathematical!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-078',
    label: 'Loop AI b11 w75 #078: baseline text-bottom on text chain',
    idea: 'baseline-source on text chain; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:text-bottom!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-079',
    label: 'Loop AI b11 w75 #079: baseline text-top on text chain',
    idea: 'baseline-source on text chain; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:text-top!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-080',
    label: 'Loop AI b11 w75 #080: baseline text-central on text chain',
    idea: 'baseline-source on text chain; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{baseline-source:text-central!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (text-chain); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-081',
    label: 'Loop AI b11 w75 #081: baseline auto FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:auto!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; auto (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-082',
    label: 'Loop AI b11 w75 #082: baseline first FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:first!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; first (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-083',
    label: 'Loop AI b11 w75 #083: baseline last FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:last!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; last (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-084',
    label: 'Loop AI b11 w75 #084: baseline alphabetic FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:alphabetic!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; alphabetic (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-085',
    label: 'Loop AI b11 w75 #085: baseline central FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:central!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; central (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-086',
    label: 'Loop AI b11 w75 #086: baseline ideographic FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:ideographic!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; ideographic (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-087',
    label: 'Loop AI b11 w75 #087: baseline mathematical FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:mathematical!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; mathematical (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-088',
    label: 'Loop AI b11 w75 #088: baseline text-bottom FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:text-bottom!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-bottom (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-089',
    label: 'Loop AI b11 w75 #089: baseline text-top FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:text-top!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-top (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-090',
    label: 'Loop AI b11 w75 #090: baseline text-central FO>div cascade',
    idea: 'baseline-source on FO>div with inherit on FO *; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{baseline-source:text-central!important;vertical-align:baseline!important}foreignObject *{baseline-source:inherit!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w75; text-central (fo-div-cascade); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-091',
    label: 'Loop AI b11 w75 #091: baseline auto pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:auto',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:auto!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; auto (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-092',
    label: 'Loop AI b11 w75 #092: baseline first pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; first (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-093',
    label: 'Loop AI b11 w75 #093: baseline last pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:last',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:last!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; last (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-094',
    label: 'Loop AI b11 w75 #094: baseline alphabetic pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:alphabetic!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; alphabetic (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-095',
    label: 'Loop AI b11 w75 #095: baseline central pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:central!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; central (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-096',
    label: 'Loop AI b11 w75 #096: baseline ideographic pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:ideographic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:ideographic!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; ideographic (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-097',
    label: 'Loop AI b11 w75 #097: baseline mathematical pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:mathematical',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:mathematical!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; mathematical (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-098',
    label: 'Loop AI b11 w75 #098: baseline text-bottom pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:text-bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-bottom!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; text-bottom (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-099',
    label: 'Loop AI b11 w75 #099: baseline text-top pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:text-top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-top!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; text-top (pin-lh-star); baseline-source — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w75-100',
    label: 'Loop AI b11 w75 #100: baseline text-central pin lh + FO *',
    idea: 'pin line-height with baseline-source on FO *; baseline-source:text-central',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{baseline-source:text-central!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w75; text-central (pin-lh-star); baseline-source — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

