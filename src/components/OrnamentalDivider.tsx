interface OrnamentalDividerProps {
  align?: 'left' | 'center'
  tone?: 'gold' | 'light'
  className?: string
}

/**
 * Small heraldic rule — line / laurel tick / diamond / laurel tick / line —
 * echoing the ring motifs on the HOA crest. Used under headings and titles
 * site-wide so the ornament lives in one place instead of being redrawn per page.
 */
export function OrnamentalDivider({ align = 'left', tone = 'gold', className = '' }: OrnamentalDividerProps) {
  const color = tone === 'gold' ? 'var(--color-gold)' : 'var(--color-hero-eyebrow)'
  return (
    <svg
      viewBox="0 0 200 20"
      width="120"
      height="12"
      className={`${align === 'center' ? 'mx-auto' : ''} ${className}`}
      style={{ color }}
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="78" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M78 10 Q84 3 90 10 Q84 6 78 10" fill="currentColor" />
      <rect x="96" y="6" width="8" height="8" transform="rotate(45 100 10)" fill="currentColor" />
      <path d="M122 10 Q116 3 110 10 Q116 6 122 10" fill="currentColor" />
      <line x1="122" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
