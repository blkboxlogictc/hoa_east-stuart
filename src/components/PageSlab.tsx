import type { ReactNode } from 'react'

interface PageSlabProps {
  eyebrow: string
  title: string
  lede?: ReactNode
  dateline?: string
}

/** The marble page-header used at the top of every standalone page. */
export function PageSlab({ eyebrow, title, lede, dateline }: PageSlabProps) {
  return (
    <div className="page-marble" style={{ position: 'relative', borderBottom: '1px solid #cdbf9c', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(250,247,239,.25),rgba(250,247,239,.7))' }} />
      <div
        data-slab
        style={{
          position: 'relative',
          maxWidth: 1120,
          margin: '0 auto',
          padding: 'clamp(40px,8vw,88px) clamp(20px,5vw,56px) clamp(36px,6vw,64px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#8a6a2c' }}>
          {eyebrow}
        </span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(30px,5vw,56px)', lineHeight: 1.08, color: '#10243b', textWrap: 'balance' }}>
          {title}
        </h1>
        <div style={{ width: 120, height: 1, background: '#a17a35' }} />
        {lede && (
          <p style={{ margin: 0, maxWidth: '62ch', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.7, color: '#2b2a24', textWrap: 'pretty' }}>
            {lede}
          </p>
        )}
        {dateline && (
          <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 19, color: '#4a4739' }}>{dateline}</span>
        )}
      </div>
    </div>
  )
}
