interface CornerFlourishProps {
  corner?: 'tl' | 'tr' | 'bl' | 'br'
  className?: string
}

const TRANSFORM: Record<NonNullable<CornerFlourishProps['corner']>, string> = {
  tl: '',
  tr: 'scaleX(-1)',
  bl: 'scaleY(-1)',
  br: 'scale(-1, -1)',
}

const POSITION: Record<NonNullable<CornerFlourishProps['corner']>, string> = {
  tl: 'top-0 left-0',
  tr: 'top-0 right-0',
  bl: 'bottom-0 left-0',
  br: 'bottom-0 right-0',
}

/**
 * Filigree corner bracket — reuses the same line / diamond vocabulary as
 * OrnamentalDivider so the two read as one ornament family. Meant to sit
 * at the extreme corners of a `relative` container (hero panel, page header).
 */
export function CornerFlourish({ corner = 'tl', className = '' }: CornerFlourishProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="40"
      height="40"
      className={`pointer-events-none absolute ${POSITION[corner]} ${className}`}
      style={{ color: 'var(--color-gold)', transform: TRANSFORM[corner] }}
      aria-hidden="true"
    >
      <path d="M8 34 V12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 34 Q2 30 8 26" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M34 8 H12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M34 8 Q30 2 26 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="5" y="5" width="6" height="6" transform="rotate(45 8 8)" fill="currentColor" />
    </svg>
  )
}
