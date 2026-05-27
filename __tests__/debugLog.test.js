import { describe, it, expect } from 'vitest'
import { cache } from '../src/core/cache.js'
import { resetDebugLog, pushDebugLine, getDebugLines } from '../src/utils/debugLog.js'
import { inlineAllStyles } from '../src/modules/styles.js'

describe('debugLog', () => {
  it('collects style extraction lines when debug is on', async () => {
    resetDebugLog(true)
    const label = document.createElement('label')
    label.style.cssText = 'display:block;font-size:48px;font-weight:700'
    const span = document.createElement('span')
    span.textContent = 'Email'
    label.append(span)
    document.body.appendChild(label)

    const clone = label.cloneNode(true)
    const session = { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() }
    await inlineAllStyles(span, clone.firstChild, session, { cache: 'disabled', debug: true })

    const lines = getDebugLines()
    document.body.removeChild(label)

    expect(lines.some((l) => l.includes('span'))).toBe(true)
    expect(
      lines.some(
        (l) =>
          l.includes('pinned layout box') || l.includes('kept line-height: normal'),
      ),
    ).toBe(true)
    expect(lines.some((l) => l.includes('class line-height:'))).toBe(true)
  })

  it('does not collect when debug is off', async () => {
    resetDebugLog(false)
    const el = document.createElement('span')
    el.textContent = 'x'
    document.body.appendChild(el)
    const clone = el.cloneNode(true)
    const session = { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() }
    await inlineAllStyles(el, clone, session, { cache: 'disabled', debug: false })
    document.body.removeChild(el)
    expect(getDebugLines()).toEqual([])
  })
})
