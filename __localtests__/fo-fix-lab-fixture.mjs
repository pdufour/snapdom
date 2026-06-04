/** FO fix lab mini fixture — repeated full block (U+2588) for vertical compare. */
export const FO_FIX_LAB_BLOCK_CHARS = '\u2588'.repeat(6)

/** @deprecated alias */
export const FO_FIX_LAB_NAV_LETTER = FO_FIX_LAB_BLOCK_CHARS

/** Canonical `data-landmark` on the mini-fixture nav link. */
export const FO_FIX_LAB_LANDMARK = 'Blocks'

/** Default probe label in URLs / lab UI (`Home` resolves to {@link FO_FIX_LAB_LANDMARK}). */
export const FO_FIX_LAB_DEFAULT_PROBE_LANDMARK = 'Home'

/** Registered probe labels (aliases map to {@link FO_FIX_LAB_LANDMARK}). */
export const FO_FIX_LAB_REGISTERED_LANDMARKS = ['Home', 'Products', 'Blocks', 'H']

/** @deprecated alias — same as {@link FO_FIX_LAB_LANDMARK} */
export const FO_FIX_LAB_LANDMARK_LABEL = FO_FIX_LAB_LANDMARK
