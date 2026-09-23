import type { CSSProperties, ReactNode } from 'react'

interface NavyBandProps {
  variant?: 'dots' | 'marble' | 'plain'
  background?: string
  padding?: string
  children: ReactNode
  style?: CSSProperties
}

/** Full-bleed dark panel used for "Our Commitments", sponsor tiers, and the CTA bands. */
export function NavyBand({ variant = 'dots', background = '#0d2138', padding = 'clamp(44px,7vw,84px) clamp(20px,5vw,56px)', children, style }: NavyBandProps) {
  return (
    <div style={{ position: 'relative', background, overflow: variant === 'marble' ? 'hidden' : undefined, ...style }}>
      {variant === 'dots' && (
        <div aria-hidden="true" className="navy-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      )}
      {variant === 'marble' && (
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble-lg.png')", backgroundSize: 'cover', opacity: 0.07, mixBlendMode: 'screen', pointerEvents: 'none' }}
        />
      )}
      <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding }}>
        {children}
      </div>
    </div>
  )
}
