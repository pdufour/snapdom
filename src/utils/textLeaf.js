/**
 * Structural text-leaf detection for FO parity experiments (no tag/selector hacks).
 * Text leaf: has non-empty trimmed text, no element children.
 * @param {Element | null | undefined} el
 * @returns {boolean}
 */
export function isTextLeaf(el) {
  if (!el || !(el instanceof Element)) return false
  if (el.childElementCount > 0) return false
  return !!(el.textContent || '').trim()
}
