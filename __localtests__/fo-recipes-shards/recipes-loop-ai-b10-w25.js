/**
 * Loop AI batch-10 FO recipe shard (worker 25) — text-fix: inline-block + vertical-align
 * middle/top/bottom on FO anchors (nav text links).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w25-001',
    label: 'Loop AI b10 w25 #001: FO a inline-block middle',
    idea: 'display:inline-block + vertical-align:middle on foreignObject a — anchor inline strut middle in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-002',
    label: 'Loop AI b10 w25 #002: FO a inline-block top',
    idea: 'display:inline-block + vertical-align:top on foreignObject a — anchor inline strut top in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-003',
    label: 'Loop AI b10 w25 #003: FO a inline-block bottom',
    idea: 'display:inline-block + vertical-align:bottom on foreignObject a — anchor inline strut bottom in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-004',
    label: 'Loop AI b10 w25 #004: FO nav a inline-block middle',
    idea: 'display:inline-block + vertical-align:middle on foreignObject nav a — anchor inline strut middle in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-005',
    label: 'Loop AI b10 w25 #005: FO nav a inline-block top',
    idea: 'display:inline-block + vertical-align:top on foreignObject nav a — anchor inline strut top in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-006',
    label: 'Loop AI b10 w25 #006: FO nav a inline-block bottom',
    idea: 'display:inline-block + vertical-align:bottom on foreignObject nav a — anchor inline strut bottom in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-007',
    label: 'Loop AI b10 w25 #007: FO FO>div a inline-block middle',
    idea: 'display:inline-block + vertical-align:middle on foreignObject>div a — anchor inline strut middle in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-008',
    label: 'Loop AI b10 w25 #008: FO FO>div a inline-block top',
    idea: 'display:inline-block + vertical-align:top on foreignObject>div a — anchor inline strut top in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-009',
    label: 'Loop AI b10 w25 #009: FO FO>div a inline-block bottom',
    idea: 'display:inline-block + vertical-align:bottom on foreignObject>div a — anchor inline strut bottom in FO',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-010',
    label: 'Loop AI b10 w25 #010: FO>div nav a middle',
    idea: 'foreignObject>div nav a inline-block vertical-align:middle — nested nav anchor strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div nav a{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-011',
    label: 'Loop AI b10 w25 #011: FO>div nav a top',
    idea: 'foreignObject>div nav a inline-block vertical-align:top — nested nav anchor strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div nav a{display:inline-block!important;vertical-align:top!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-012',
    label: 'Loop AI b10 w25 #012: FO>div nav a bottom',
    idea: 'foreignObject>div nav a inline-block vertical-align:bottom — nested nav anchor strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div nav a{display:inline-block!important;vertical-align:bottom!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-013',
    label: 'Loop AI b10 w25 #013: FO a middle + lh normal',
    idea: 'anchor inline-block middle + line-height:normal — strut keyword vs valign middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:middle!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-014',
    label: 'Loop AI b10 w25 #014: FO a top + lh normal',
    idea: 'anchor inline-block top + line-height:normal — strut keyword vs valign top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:top!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-015',
    label: 'Loop AI b10 w25 #015: FO a bottom + lh normal',
    idea: 'anchor inline-block bottom + line-height:normal — strut keyword vs valign bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:bottom!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-016',
    label: 'Loop AI b10 w25 #016: FO a middle + lh 1',
    idea: 'anchor inline-block middle + line-height:1 — tight strut vs valign middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:middle!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-017',
    label: 'Loop AI b10 w25 #017: FO a top + lh 1',
    idea: 'anchor inline-block top + line-height:1 — tight strut vs valign top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:top!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-018',
    label: 'Loop AI b10 w25 #018: FO a bottom + lh 1',
    idea: 'anchor inline-block bottom + line-height:1 — tight strut vs valign bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:bottom!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-019',
    label: 'Loop AI b10 w25 #019: flex center row + nav a middle',
    idea: 'FO flex row align-items:center + nav anchor inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-020',
    label: 'Loop AI b10 w25 #020: flex center row + nav a top',
    idea: 'FO flex row align-items:center + nav anchor inline-block vertical-align:top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-021',
    label: 'Loop AI b10 w25 #021: flex center row + nav a bottom',
    idea: 'FO flex row align-items:center + nav anchor inline-block vertical-align:bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-022',
    label: 'Loop AI b10 w25 #022: flex baseline row + nav a middle',
    idea: 'FO flex row align-items:baseline + nav anchor inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-023',
    label: 'Loop AI b10 w25 #023: flex baseline row + nav a top',
    idea: 'FO flex row align-items:baseline + nav anchor inline-block vertical-align:top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-024',
    label: 'Loop AI b10 w25 #024: flex baseline row + nav a bottom',
    idea: 'FO flex row align-items:baseline + nav anchor inline-block vertical-align:bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-025',
    label: 'Loop AI b10 w25 #025: flex stretch row + nav a middle',
    idea: 'FO flex row align-items:stretch + nav anchor inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:middle!important;align-self:stretch!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-026',
    label: 'Loop AI b10 w25 #026: flex stretch row + nav a top',
    idea: 'FO flex row align-items:stretch + nav anchor inline-block vertical-align:top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:top!important;align-self:stretch!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-027',
    label: 'Loop AI b10 w25 #027: flex stretch row + nav a bottom',
    idea: 'FO flex row align-items:stretch + nav anchor inline-block vertical-align:bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:bottom!important;align-self:stretch!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-028',
    label: 'Loop AI b10 w25 #028: grid FO center + nav a middle',
    idea: 'FO display:grid place-items:center + nav anchor inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-029',
    label: 'Loop AI b10 w25 #029: grid FO center + nav a top',
    idea: 'FO display:grid place-items:center + nav anchor inline-block vertical-align:top',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-030',
    label: 'Loop AI b10 w25 #030: grid FO center + nav a bottom',
    idea: 'FO display:grid place-items:center + nav anchor inline-block vertical-align:bottom',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-031',
    label: 'Loop AI b10 w25 #031: chromium + FO a middle',
    idea: 'Chromium font-kerning copy + foreignObject a inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-032',
    label: 'Loop AI b10 w25 #032: chromium + FO a top',
    idea: 'Chromium font-kerning copy + foreignObject a inline-block vertical-align:top',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-033',
    label: 'Loop AI b10 w25 #033: chromium + FO a bottom',
    idea: 'Chromium font-kerning copy + foreignObject a inline-block vertical-align:bottom',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-034',
    label: 'Loop AI b10 w25 #034: nav a:first middle',
    idea: 'foreignObject nav a:nth-child(1) inline-block vertical-align:middle — first nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(1){display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-035',
    label: 'Loop AI b10 w25 #035: nav a:first top',
    idea: 'foreignObject nav a:nth-child(1) inline-block vertical-align:top — first nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(1){display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-036',
    label: 'Loop AI b10 w25 #036: nav a:first bottom',
    idea: 'foreignObject nav a:nth-child(1) inline-block vertical-align:bottom — first nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(1){display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-037',
    label: 'Loop AI b10 w25 #037: nav a:second middle',
    idea: 'foreignObject nav a:nth-child(2) inline-block vertical-align:middle — second nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(2){display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-038',
    label: 'Loop AI b10 w25 #038: nav a:second top',
    idea: 'foreignObject nav a:nth-child(2) inline-block vertical-align:top — second nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(2){display:inline-block!important;vertical-align:top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-039',
    label: 'Loop AI b10 w25 #039: nav a:second bottom',
    idea: 'foreignObject nav a:nth-child(2) inline-block vertical-align:bottom — second nav link strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a:nth-child(2){display:inline-block!important;vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w25-040',
    label: 'Loop AI b10 w25 #040: inline-flex nav per-link valign',
    idea: 'nav display:inline-flex + per-link inline-block middle/top/bottom on nth-child anchors',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:inline-flex!important;align-items:baseline!important;gap:1rem!important;overflow:visible!important}' + 'foreignObject nav a{display:inline-block!important;box-sizing:border-box!important}' + 'foreignObject nav a:nth-child(1){vertical-align:middle!important}' + 'foreignObject nav a:nth-child(2){vertical-align:top!important}' + 'foreignObject nav a:nth-child(3),foreignObject nav a:nth-child(n+3){vertical-align:bottom!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w25; anchor inline-block valign; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
