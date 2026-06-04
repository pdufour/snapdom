/** Default port for __localtests__ static server (fo-fix-lab, fo-svg-sandbox, etc.). */
export const DEFAULT_LOCAL_PORT = 8765

export const LOCAL_HOST = '127.0.0.1'

/**
 * Port for local debug HTTP server. Override with `SNAPDOM_LOCAL_PORT`.
 * @returns {number}
 */
export function resolveLocalPort() {
  const raw = process.env.SNAPDOM_LOCAL_PORT
  if (raw === undefined || raw === '') return DEFAULT_LOCAL_PORT
  const n = Number(raw)
  if (!Number.isInteger(n) || n < 1 || n > 65535) {
    throw new Error(`SNAPDOM_LOCAL_PORT must be an integer 1–65535, got: ${JSON.stringify(raw)}`)
  }
  return n
}

/**
 * @param {string} pathname e.g. `/__localtests__/fo-fix-lab.html`
 * @param {string} [search] query string with or without leading `?`
 */
export function localPageUrl(pathname, search = '') {
  const port = resolveLocalPort()
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  const q = search ? (search.startsWith('?') ? search : `?${search}`) : ''
  return `http://${LOCAL_HOST}:${port}${path}${q}`
}
