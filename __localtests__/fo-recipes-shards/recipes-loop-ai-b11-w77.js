/**
 * Loop AI batch-11 FO recipe shard (worker 77) — text-fix: math-style normal/compact with math-depth pairing on FO text
 * 100 recipes: loop-ai-b11-w77-001..100
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
    id: 'loop-ai-b11-w77-001',
    label: 'Loop AI b11 w77 #001: math normal on FO *',
    idea: 'math-style on all FO descendants; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-002',
    label: 'Loop AI b11 w77 #002: math compact on FO *',
    idea: 'math-style on all FO descendants; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-003',
    label: 'Loop AI b11 w77 #003: normal depth auto-add on FO *',
    idea: 'math-style on all FO descendants; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-004',
    label: 'Loop AI b11 w77 #004: compact depth add on FO *',
    idea: 'math-style on all FO descendants; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-005',
    label: 'Loop AI b11 w77 #005: normal depth 0 on FO *',
    idea: 'math-style on all FO descendants; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-006',
    label: 'Loop AI b11 w77 #006: compact depth 0 on FO *',
    idea: 'math-style on all FO descendants; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-007',
    label: 'Loop AI b11 w77 #007: normal depth 1 on FO *',
    idea: 'math-style on all FO descendants; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-008',
    label: 'Loop AI b11 w77 #008: compact depth 1 on FO *',
    idea: 'math-style on all FO descendants; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-009',
    label: 'Loop AI b11 w77 #009: inherit normal on FO *',
    idea: 'math-style on all FO descendants; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-010',
    label: 'Loop AI b11 w77 #010: inherit compact on FO *',
    idea: 'math-style on all FO descendants; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-011',
    label: 'Loop AI b11 w77 #011: math normal on FO root',
    idea: 'math-style on foreignObject root; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-012',
    label: 'Loop AI b11 w77 #012: math compact on FO root',
    idea: 'math-style on foreignObject root; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-013',
    label: 'Loop AI b11 w77 #013: normal depth auto-add on FO root',
    idea: 'math-style on foreignObject root; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important;math-depth:auto-add!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-014',
    label: 'Loop AI b11 w77 #014: compact depth add on FO root',
    idea: 'math-style on foreignObject root; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important;math-depth:add!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-015',
    label: 'Loop AI b11 w77 #015: normal depth 0 on FO root',
    idea: 'math-style on foreignObject root; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important;math-depth:0!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-016',
    label: 'Loop AI b11 w77 #016: compact depth 0 on FO root',
    idea: 'math-style on foreignObject root; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important;math-depth:0!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-017',
    label: 'Loop AI b11 w77 #017: normal depth 1 on FO root',
    idea: 'math-style on foreignObject root; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important;math-depth:1!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-018',
    label: 'Loop AI b11 w77 #018: compact depth 1 on FO root',
    idea: 'math-style on foreignObject root; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important;math-depth:1!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-019',
    label: 'Loop AI b11 w77 #019: inherit normal on FO root',
    idea: 'math-style on foreignObject root; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:inherit!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-020',
    label: 'Loop AI b11 w77 #020: inherit compact on FO root',
    idea: 'math-style on foreignObject root; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:inherit!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (root); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-021',
    label: 'Loop AI b11 w77 #021: math normal root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-022',
    label: 'Loop AI b11 w77 #022: math compact root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important}foreignObject *{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-023',
    label: 'Loop AI b11 w77 #023: normal depth auto-add root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important}foreignObject *{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-024',
    label: 'Loop AI b11 w77 #024: compact depth add root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important}foreignObject *{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-025',
    label: 'Loop AI b11 w77 #025: normal depth 0 root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important}foreignObject *{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-026',
    label: 'Loop AI b11 w77 #026: compact depth 0 root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important}foreignObject *{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-027',
    label: 'Loop AI b11 w77 #027: normal depth 1 root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important}foreignObject *{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-028',
    label: 'Loop AI b11 w77 #028: compact depth 1 root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important}foreignObject *{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-029',
    label: 'Loop AI b11 w77 #029: inherit normal root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:normal!important}foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-030',
    label: 'Loop AI b11 w77 #030: inherit compact root + inherit *',
    idea: 'math-style on FO root with inherit on descendants; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{math-style:compact!important}foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (root-inherit); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-031',
    label: 'Loop AI b11 w77 #031: math normal on text chain',
    idea: 'math-style on text chain; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-032',
    label: 'Loop AI b11 w77 #032: math compact on text chain',
    idea: 'math-style on text chain; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-033',
    label: 'Loop AI b11 w77 #033: normal depth auto-add on text chain',
    idea: 'math-style on text chain; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-034',
    label: 'Loop AI b11 w77 #034: compact depth add on text chain',
    idea: 'math-style on text chain; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-035',
    label: 'Loop AI b11 w77 #035: normal depth 0 on text chain',
    idea: 'math-style on text chain; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-036',
    label: 'Loop AI b11 w77 #036: compact depth 0 on text chain',
    idea: 'math-style on text chain; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-037',
    label: 'Loop AI b11 w77 #037: normal depth 1 on text chain',
    idea: 'math-style on text chain; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-038',
    label: 'Loop AI b11 w77 #038: compact depth 1 on text chain',
    idea: 'math-style on text chain; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-039',
    label: 'Loop AI b11 w77 #039: inherit normal on text chain',
    idea: 'math-style on text chain; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-040',
    label: 'Loop AI b11 w77 #040: inherit compact on text chain',
    idea: 'math-style on text chain; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (text-chain); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-041',
    label: 'Loop AI b11 w77 #041: math normal on FO a',
    idea: 'math-style on FO anchors; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-042',
    label: 'Loop AI b11 w77 #042: math compact on FO a',
    idea: 'math-style on FO anchors; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:compact!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-043',
    label: 'Loop AI b11 w77 #043: normal depth auto-add on FO a',
    idea: 'math-style on FO anchors; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:normal!important;math-depth:auto-add!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-044',
    label: 'Loop AI b11 w77 #044: compact depth add on FO a',
    idea: 'math-style on FO anchors; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:compact!important;math-depth:add!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-045',
    label: 'Loop AI b11 w77 #045: normal depth 0 on FO a',
    idea: 'math-style on FO anchors; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:normal!important;math-depth:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-046',
    label: 'Loop AI b11 w77 #046: compact depth 0 on FO a',
    idea: 'math-style on FO anchors; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:compact!important;math-depth:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-047',
    label: 'Loop AI b11 w77 #047: normal depth 1 on FO a',
    idea: 'math-style on FO anchors; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:normal!important;math-depth:1!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-048',
    label: 'Loop AI b11 w77 #048: compact depth 1 on FO a',
    idea: 'math-style on FO anchors; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:compact!important;math-depth:1!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-049',
    label: 'Loop AI b11 w77 #049: inherit normal on FO a',
    idea: 'math-style on FO anchors; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-050',
    label: 'Loop AI b11 w77 #050: inherit compact on FO a',
    idea: 'math-style on FO anchors; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{math-style:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (anchors); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-051',
    label: 'Loop AI b11 w77 #051: math normal on FO nav a',
    idea: 'math-style on nav anchors; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-052',
    label: 'Loop AI b11 w77 #052: math compact on FO nav a',
    idea: 'math-style on nav anchors; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:compact!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-053',
    label: 'Loop AI b11 w77 #053: normal depth auto-add on FO nav a',
    idea: 'math-style on nav anchors; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:normal!important;math-depth:auto-add!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-054',
    label: 'Loop AI b11 w77 #054: compact depth add on FO nav a',
    idea: 'math-style on nav anchors; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:compact!important;math-depth:add!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-055',
    label: 'Loop AI b11 w77 #055: normal depth 0 on FO nav a',
    idea: 'math-style on nav anchors; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:normal!important;math-depth:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-056',
    label: 'Loop AI b11 w77 #056: compact depth 0 on FO nav a',
    idea: 'math-style on nav anchors; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:compact!important;math-depth:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-057',
    label: 'Loop AI b11 w77 #057: normal depth 1 on FO nav a',
    idea: 'math-style on nav anchors; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:normal!important;math-depth:1!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-058',
    label: 'Loop AI b11 w77 #058: compact depth 1 on FO nav a',
    idea: 'math-style on nav anchors; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:compact!important;math-depth:1!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-059',
    label: 'Loop AI b11 w77 #059: inherit normal on FO nav a',
    idea: 'math-style on nav anchors; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:inherit!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-060',
    label: 'Loop AI b11 w77 #060: inherit compact on FO nav a',
    idea: 'math-style on nav anchors; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{math-style:inherit!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (nav-a); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-061',
    label: 'Loop AI b11 w77 #061: math normal on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-062',
    label: 'Loop AI b11 w77 #062: math compact on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-063',
    label: 'Loop AI b11 w77 #063: normal depth auto-add on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-064',
    label: 'Loop AI b11 w77 #064: compact depth add on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-065',
    label: 'Loop AI b11 w77 #065: normal depth 0 on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-066',
    label: 'Loop AI b11 w77 #066: compact depth 0 on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-067',
    label: 'Loop AI b11 w77 #067: normal depth 1 on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-068',
    label: 'Loop AI b11 w77 #068: compact depth 1 on FO>div *',
    idea: 'math-style on wrapper descendants; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-069',
    label: 'Loop AI b11 w77 #069: inherit normal on FO>div *',
    idea: 'math-style on wrapper descendants; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-070',
    label: 'Loop AI b11 w77 #070: inherit compact on FO>div *',
    idea: 'math-style on wrapper descendants; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (fo-div-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-071',
    label: 'Loop AI b11 w77 #071: math normal on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-072',
    label: 'Loop AI b11 w77 #072: math compact on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-073',
    label: 'Loop AI b11 w77 #073: normal depth auto-add on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-074',
    label: 'Loop AI b11 w77 #074: compact depth add on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-075',
    label: 'Loop AI b11 w77 #075: normal depth 0 on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-076',
    label: 'Loop AI b11 w77 #076: compact depth 0 on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-077',
    label: 'Loop AI b11 w77 #077: normal depth 1 on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-078',
    label: 'Loop AI b11 w77 #078: compact depth 1 on FO .mtext',
    idea: 'math-style on mtext class leaves; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-079',
    label: 'Loop AI b11 w77 #079: inherit normal on FO .mtext',
    idea: 'math-style on mtext class leaves; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-080',
    label: 'Loop AI b11 w77 #080: inherit compact on FO .mtext',
    idea: 'math-style on mtext class leaves; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject .mtext{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (mtext); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-081',
    label: 'Loop AI b11 w77 #081: math normal Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-082',
    label: 'Loop AI b11 w77 #082: math compact Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:compact',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-083',
    label: 'Loop AI b11 w77 #083: normal depth auto-add Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-auto-add (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-084',
    label: 'Loop AI b11 w77 #084: compact depth add Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-add (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-085',
    label: 'Loop AI b11 w77 #085: normal depth 0 Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-0 (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-086',
    label: 'Loop AI b11 w77 #086: compact depth 0 Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-0 (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-087',
    label: 'Loop AI b11 w77 #087: normal depth 1 Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; normal-1 (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-088',
    label: 'Loop AI b11 w77 #088: compact depth 1 Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; compact-1 (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-089',
    label: 'Loop AI b11 w77 #089: inherit normal Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-normal (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-090',
    label: 'Loop AI b11 w77 #090: inherit compact Chromium + FO *',
    idea: 'Chromium copy with math-style on FO *; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w77; inherit-compact (chromium-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-091',
    label: 'Loop AI b11 w77 #091: math normal stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; normal (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-092',
    label: 'Loop AI b11 w77 #092: math compact stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:compact',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; compact (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-093',
    label: 'Loop AI b11 w77 #093: normal depth auto-add stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:normal + math-depth:auto-add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:auto-add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; normal-auto-add (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-094',
    label: 'Loop AI b11 w77 #094: compact depth add stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:compact + math-depth:add',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:add!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; compact-add (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-095',
    label: 'Loop AI b11 w77 #095: normal depth 0 stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:normal + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; normal-0 (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-096',
    label: 'Loop AI b11 w77 #096: compact depth 0 stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:compact + math-depth:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; compact-0 (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-097',
    label: 'Loop AI b11 w77 #097: normal depth 1 stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:normal + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:normal!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; normal-1 (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-098',
    label: 'Loop AI b11 w77 #098: compact depth 1 stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; math-style:compact + math-depth:1',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:compact!important;math-depth:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; compact-1 (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-099',
    label: 'Loop AI b11 w77 #099: inherit normal stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; FO root normal + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; inherit-normal (stretch-star); math-style — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w77-100',
    label: 'Loop AI b11 w77 #100: inherit compact stretch + FO *',
    idea: 'stretch leaf with math-style on FO *; FO root compact + inherit math-style on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{math-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w77; inherit-compact (stretch-star); math-style — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

