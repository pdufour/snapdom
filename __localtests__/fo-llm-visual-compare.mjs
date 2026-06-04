#!/usr/bin/env node
/**
 * Optional — run manually when you want a second opinion (headed FO lab screenshots + vision prompt).
 * Not part of `--verify`, matrix ranking, or promotion. Primary gate: layout tops (fo-h-nav-layout-top-probe).
 *
 * Captures live / svg / canvas for block fixture (██████, landmark H), writes compare strip + report.
 * Vision API is best-effort only; exit 0 unless capture fails entirely.
 *
 *   npm run debug:fo-llm-visual-compare
 *   node __localtests__/fo-llm-visual-compare.mjs --no-api
 *   node __localtests__/fo-llm-visual-compare.mjs --recipes product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta
 *
 * Env (optional): OPENAI_API_KEY or ANTHROPIC_API_KEY (+ model overrides).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  FO_FIX_LAB_BLOCK_CHARS,
  FO_FIX_LAB_LANDMARK,
  FO_FIX_LAB_LANDMARK_LABEL,
} from './fo-fix-lab-fixture.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const PROMPT_TEMPLATE_PATH = path.join(__dirname, 'fo-llm-visual-compare-prompt.md')
const ARTIFACTS_ROOT = path.join(__dirname, 'artifacts', 'fo-llm-visual-compare')

const VIEWS = ['live', 'svg', 'canvas']
const DEFAULT_RECIPES = [
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
  'tc-fix-w7-rfork-leading-trim-text-box',
]

const args = process.argv.slice(2)
const noApi = args.includes('--no-api')
const recipesArg = args.includes('--recipes') ? args[args.indexOf('--recipes') + 1] : null
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : FO_FIX_LAB_LANDMARK
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const outArg = args.includes('--out') ? args[args.indexOf('--out') + 1] : ARTIFACTS_ROOT

const RECIPES = recipesArg
  ? recipesArg.split(',').map((s) => s.trim()).filter(Boolean)
  : DEFAULT_RECIPES

const LANDMARK = landmarkArg?.trim() || FO_FIX_LAB_LANDMARK

function slugRecipe(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, '_')
}

function readPromptTemplate() {
  return fs.readFileSync(PROMPT_TEMPLATE_PATH, 'utf8')
}

function buildUserPrompt({ stripDescription, recipeA, recipeB }) {
  return readPromptTemplate()
    .replace('{{STRIP_DESCRIPTION}}', stripDescription)
    .replace(/\{\{RECIPE_A\}\}/g, recipeA)
    .replace(/\{\{RECIPE_B\}\}/g, recipeB)
}

function resolveVisionApi() {
  if (noApi) return null
  const openaiKey = process.env.OPENAI_API_KEY?.trim()
  if (openaiKey) {
    return {
      provider: 'openai',
      key: openaiKey,
      model: process.env.OPENAI_VISION_MODEL?.trim() || 'gpt-4o',
    }
  }
  const anthropicKey = process.env.ANTHROPIC_API_KEY?.trim()
  if (anthropicKey) {
    return {
      provider: 'anthropic',
      key: anthropicKey,
      model: process.env.ANTHROPIC_VISION_MODEL?.trim() || 'claude-sonnet-4-20250514',
    }
  }
  return null
}

function pngToDataUrl(filePath) {
  const b64 = fs.readFileSync(filePath).toString('base64')
  return `data:image/png;base64,${b64}`
}

async function callOpenAiVision({ api, prompt, imagePath }) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${api.key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: api.model,
      max_tokens: 1200,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: { url: pngToDataUrl(imagePath), detail: 'high' },
            },
          ],
        },
      ],
    }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI vision ${res.status}: ${errText.slice(0, 500)}`)
  }
  const data = await res.json()
  return data.choices?.[0]?.message?.content?.trim() ?? ''
}

async function callAnthropicVision({ api, prompt, imagePath }) {
  const b64 = fs.readFileSync(imagePath).toString('base64')
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': api.key,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: api.model,
      max_tokens: 1200,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/png',
                data: b64,
              },
            },
          ],
        },
      ],
    }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Anthropic vision ${res.status}: ${errText.slice(0, 500)}`)
  }
  const data = await res.json()
  const block = data.content?.find((c) => c.type === 'text')
  return block?.text?.trim() ?? ''
}

async function callVisionJudge(api, prompt, imagePath) {
  if (api.provider === 'openai') return callOpenAiVision({ api, prompt, imagePath })
  if (api.provider === 'anthropic') return callAnthropicVision({ api, prompt, imagePath })
  throw new Error(`Unknown vision provider: ${api.provider}`)
}

async function waitForRecipe(page, recipeId) {
  await page.waitForFunction(
    () => window.__foFixLab?.done === true,
    null,
    { timeout: 240_000 },
  )
  const state = await page.evaluate(() => ({
    error: window.__foFixLab?.error,
    recipeId: window.__foFixLastResult?.recipeId,
    status: document.getElementById('status')?.textContent ?? '',
    result: document.getElementById('result')?.textContent?.slice(0, 400) ?? '',
  }))
  if (state.error) throw new Error(String(state.error))
  if (state.recipeId && state.recipeId !== recipeId) {
    console.warn(`Expected recipe ${recipeId}, got ${state.recipeId} — continuing with last result.`)
  }
}

async function captureViews(page, recipeDir) {
  /** @type {Record<string, string>} */
  const shots = {}
  for (const view of VIEWS) {
    await page.evaluate((v) => {
      const input = document.querySelector(`input[name="view"][value="${v}"]`)
      if (input) {
        input.checked = true
        input.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }, view)
    await page.waitForTimeout(view === 'canvas' ? 500 : 380)
    if (view !== 'live') {
      await page
        .evaluate(() =>
          window.__foFixLab?.refreshLayoutMarkers?.() ??
            window.__foFixLab?.refreshInkMarkers?.(),
        )
        .catch(() => {})
      await page.waitForTimeout(100)
    }
    const shotPath = path.join(recipeDir, `${view}.png`)
    await page.locator('#compare-stage').screenshot({ path: shotPath })
    shots[view] = shotPath
  }
  return shots
}

async function captureRecipe(page, baseUrl, recipeId, outDir) {
  const qs = new URLSearchParams({
    recipe: recipeId,
    auto: '1',
    view: 'live',
    dpr: String(dprArg),
    landmark: LANDMARK,
    debugInkLine: '0',
  })
  const url = `${baseUrl}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await waitForRecipe(page, recipeId)

  const meta = await page.evaluate(() => {
    const row = window.__foFixLastResult
    return {
      recipeId: row?.recipeId ?? null,
      landmark: row?.landmark ?? null,
      liveVsSvgTopPx: row?.liveVsSvgTopPx ?? null,
      liveVsCanvasTopPx: row?.liveVsCanvasTopPx ?? null,
      inkNote:
        'Ink metrics recorded for context only — LLM visual gate ignores pass/fail from scan.',
    }
  })

  const recipeDir = path.join(outDir, slugRecipe(recipeId))
  fs.mkdirSync(recipeDir, { recursive: true })
  const screenshots = await captureViews(page, recipeDir)

  return { recipeId, url, meta, screenshots, recipeDir }
}

/**
 * @param {import('playwright').Page} page
 * @param {{ recipeId: string, screenshots: Record<string, string> }[]} captures
 * @param {string} outPath
 */
async function buildCompareStrip(page, captures, outPath) {
  const rows = captures
    .map(({ recipeId, screenshots }) => {
      const cells = VIEWS.map((view) => {
        const src = pngToDataUrl(screenshots[view])
        return `<figure style="margin:0;text-align:center">
          <img src="${src}" alt="${recipeId}-${view}" style="height:96px;width:auto;image-rendering:pixelated;border:1px solid #ccc" />
          <figcaption style="font:11px monospace;margin-top:4px">${view}</figcaption>
        </figure>`
      }).join('')
      return `<section style="margin-bottom:12px">
        <h3 style="font:12px monospace;margin:0 0 6px">${recipeId}</h3>
        <div style="display:flex;gap:10px;align-items:flex-end">${cells}</div>
      </section>`
    })
    .join('')

  await page.setViewportSize({ width: 920, height: 200 + captures.length * 130 })
  await page.setContent(
    `<!DOCTYPE html><html><body style="margin:12px;background:#fafafa;color:#111">
      <h2 style="font:13px monospace;margin:0 0 10px">FO lab — ${LANDMARK} (${FO_FIX_LAB_LANDMARK_LABEL}) · live | svg | canvas</h2>
      ${rows}
    </body></html>`,
    { waitUntil: 'load' },
  )
  await page.waitForTimeout(200)
  await page.screenshot({ path: outPath, fullPage: true })
}

function writeFallbackReport({
  outDir,
  captures,
  stripPath,
  prompt,
  vision,
  api,
}) {
  const rel = (p) => path.relative(REPO_ROOT, p)
  const imageLines = captures
    .flatMap((c) =>
      VIEWS.map(
        (v) =>
          `- **${c.recipeId}** · ${v}: ![${v}](${rel(c.screenshots[v])})`,
      ),
    )
    .join('\n')

  const md = `# FO LLM visual compare (optional — manual / Cursor agent)

Generated: ${new Date().toISOString()}

**Fixture:** block row \`${FO_FIX_LAB_BLOCK_CHARS}\` · landmark \`${LANDMARK}\` · dpr=${dprArg}

**Not a gate.** Main lab check: layout tops (\`npm run debug:fo-fix-lab -- --verify\`). Use this report when you want a second opinion.

## Compare strip (all recipes)

![compare strip](${rel(stripPath)})

## Per-view PNGs

${imageLines}

## Agent prompt (copy into chat with images above)

\`\`\`markdown
${prompt}
\`\`\`

## Vision API

${vision ? `Provider: **${api?.provider}** · model: \`${api?.model}\`\n\n${vision}` : '_No API key — set `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`, or paste images + prompt into Cursor._'}

## CLI

\`\`\`bash
npm run compile
node __localtests__/fo-llm-visual-compare.mjs
node __localtests__/fo-llm-visual-compare.mjs --recipes ${captures.map((c) => c.recipeId).join(',')}
\`\`\`
`
  const reportMd = path.join(outDir, 'report.md')
  fs.writeFileSync(reportMd, md)
  return reportMd
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — headed Chrome recommended for FO canvas raster.')
  }

  const outDir = path.isAbsolute(outArg) ? outArg : path.join(REPO_ROOT, outArg)
  fs.mkdirSync(outDir, { recursive: true })

  const { server, port } = await startLocalServer()
  const baseUrl = `http://127.0.0.1:${port}`
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 720 })

  /** @type {Awaited<ReturnType<typeof captureRecipe>>[]} */
  const captures = []
  let captureError = null

  try {
    for (const recipeId of RECIPES) {
      console.log(`\n▶ Capture ${recipeId}…`)
      try {
        captures.push(await captureRecipe(page, baseUrl, recipeId, outDir))
      } catch (err) {
        captureError = err
        console.warn(`Capture failed for ${recipeId}:`, err?.message || err)
      }
    }
    if (!captures.length) throw captureError || new Error('No recipe captures succeeded')

    const stripPath = path.join(outDir, 'compare-strip.png')
    await buildCompareStrip(page, captures, stripPath)

    const stripDescription = captures
      .map(
        (c, i) =>
          `Row ${i + 1}: **${c.recipeId}** — columns live, svg, canvas (file strip labels).`,
      )
      .join('\n')

    const recipeA = RECIPES[0] ?? 'product-baseline'
    const recipeB = RECIPES[1] ?? 'tc-fix-w7-rfork-fo-y-half-leading-meta'
    const prompt = buildUserPrompt({ stripDescription, recipeA, recipeB })

    const promptOnlyPath = path.join(outDir, 'compare-prompt.md')
    fs.writeFileSync(promptOnlyPath, `${prompt}\n`)

    const api = resolveVisionApi()
    let vision = null
    let visionError = null
    if (api) {
      try {
        console.log(`\n▶ Vision API (${api.provider}, ${api.model})…`)
        vision = await callVisionJudge(api, prompt, stripPath)
      } catch (err) {
        visionError = String(err?.message || err)
        console.warn('Vision API failed:', visionError)
      }
    }

    const reportMd = writeFallbackReport({
      outDir,
      captures,
      stripPath,
      prompt,
      vision: vision ?? (visionError ? `_API error:_ ${visionError}` : null),
      api,
    })

    const reportJson = {
      generatedAt: new Date().toISOString(),
      landmark: LANDMARK,
      blockChars: FO_FIX_LAB_BLOCK_CHARS,
      dpr: dprArg,
      recipes: RECIPES,
      captures: captures.map((c) => ({
        recipeId: c.recipeId,
        url: c.url,
        meta: c.meta,
        screenshots: c.screenshots,
      })),
      strip: stripPath,
      promptPath: promptOnlyPath,
      reportMd,
      vision: vision
        ? { provider: api.provider, model: api.model, text: vision }
        : visionError
          ? { error: visionError }
          : null,
      gate: 'llm-visual',
      inkMetricsNote: 'Ink numbers in meta are diagnostic only; do not use as primary pass/fail.',
      captureError: captureError ? String(captureError?.message || captureError) : null,
    }
    const reportJsonPath = path.join(outDir, 'report.json')
    fs.writeFileSync(reportJsonPath, `${JSON.stringify(reportJson, null, 2)}\n`)

    console.log('\n--- FO LLM visual compare ---\n')
    console.log(`Landmark: ${LANDMARK} (${FO_FIX_LAB_LANDMARK_LABEL}) · blocks: ${FO_FIX_LAB_BLOCK_CHARS}`)
    console.log(`Recipes: ${RECIPES.join(', ')}`)
    console.log(`Strip: ${stripPath}`)
    console.log(`Report: ${reportMd}`)
    console.log(`JSON: ${reportJsonPath}`)
    if (vision) {
      console.log('\n--- Vision judge ---\n')
      console.log(vision)
    } else if (!api) {
      console.log('\nNo API key — open report.md and attach PNGs for Cursor/agent review.')
      console.log(`Prompt: ${promptOnlyPath}`)
    }
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
