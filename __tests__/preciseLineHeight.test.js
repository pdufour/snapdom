import { describe, it, expect } from 'vitest'
import { getStyleKey } from '../src/utils/css.js'
import {
  resolveLineHeightPxForCapture,
  usesNormalLineHeight,
  formatLineHeightPx,
} from '../src/utils/preciseLineHeight.js'
import { inlineAllStyles } from '../src/modules/styles.js'

describe('resolveLineHeightPx', () => {
  it('uses computed px from style.lineHeight when getPropertyValue is normal', () => {
    const el = document.createElement('span')
    el.style.cssText =
      'display:block;font-size:48px;font-weight:700;font-kerning:none;text-rendering:optimizespeed'
    el.textContent = 'Email Address'
    document.body.appendChild(el)
    const cs = getComputedStyle(el)
    const px = resolveLineHeightPxForCapture(cs, el)
    document.body.removeChild(el)
    expect(px).toBeGreaterThan(40)
    expect(px).toBeLessThan(80)
    expect(formatLineHeightPx(px)).toMatch(/^\d+(\.\d+)?px$/)
  })

  it('formatLineHeightPx keeps up to 6 decimal places', () => {
    expect(formatLineHeightPx(56.5)).toBe('56.5px')
    expect(formatLineHeightPx(56.4765625)).toBe('56.476563px')
    expect(formatLineHeightPx(22.5)).toBe('22.5px')
  })
})

describe('inlineAllStyles line-height capture', () => {
  it('pins layout-box line-height on span when author CSS uses normal', async () => {
    const label = document.createElement('label')
    label.style.cssText =
      'display:block;font-size:48px;font-weight:700;font-kerning:none;color:#444'
    const span = document.createElement('span')
    span.style.display = 'block'
    span.textContent = 'Email Address'
    label.append(span)
    document.body.appendChild(label)

    const clone = label.cloneNode(true)
    const session = { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() }
    await inlineAllStyles(span, clone.firstChild, session, { cache: 'disabled' })

    const key = session.styleMap.get(clone.firstChild)
    document.body.removeChild(label)

    expect(key).toMatch(/line-height:\d+(\.\d+)?px/)
    expect(key).not.toMatch(/(?:^|;)height:\d/)
  })

  it('pins explicit line-height on headings', async () => {
    const h2 = document.createElement('h2')
    h2.style.cssText =
      'margin:0;font-size:80px;font-weight:700;line-height:1.2;font-kerning:none;text-rendering:optimizespeed'
    h2.textContent = 'Checkout'
    document.body.appendChild(h2)

    const clone = h2.cloneNode(true)
    const session = { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() }
    await inlineAllStyles(h2, clone, session, { cache: 'disabled' })

    const key = session.styleMap.get(clone)
    document.body.removeChild(h2)

    expect(key).toMatch(/line-height:\d+(\.\d+)?px/)
    expect(getStyleKey({ 'line-height': '96px' }, 'h2')).toContain('line-height:96px')
  })

  it('strips auto-derived height on labels wrapping inputs', async () => {
    const label = document.createElement('label')
    label.style.cssText = 'display:block;font-size:48px;font-weight:700;color:#444'
    const span = document.createElement('span')
    span.style.display = 'block'
    span.textContent = 'Email'
    const input = document.createElement('input')
    input.type = 'email'
    label.append(span, input)
    document.body.appendChild(label)

    const clone = label.cloneNode(true)
    const session = { styleMap: new Map(), styleCache: new WeakMap(), nodeMap: new Map() }
    await inlineAllStyles(label, clone, session, { cache: 'disabled' })

    const key = session.styleMap.get(clone)
    document.body.removeChild(label)

    expect(key).not.toMatch(/height:\d/)
  })
})

describe('usesNormalLineHeight', () => {
  it('returns true for implicit normal on text', () => {
    const span = document.createElement('span')
    span.style.fontSize = '48px'
    span.textContent = 'x'
    document.body.appendChild(span)
    const cs = getComputedStyle(span)
    expect(usesNormalLineHeight(cs, span)).toBe(true)
    document.body.removeChild(span)
  })

  it('returns false for inline line-height', () => {
    const span = document.createElement('span')
    span.style.lineHeight = '1.5'
    span.textContent = 'x'
    document.body.appendChild(span)
    const cs = getComputedStyle(span)
    expect(usesNormalLineHeight(cs, span)).toBe(false)
    document.body.removeChild(span)
  })
})
