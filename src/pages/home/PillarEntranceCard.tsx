export interface PillarEntranceCardProps {
  numeral: string
  label: string
  title: string
  text: string
  opacity: number
  transform: string
  pointerEvents: 'auto' | 'none'
  onBack: () => void
  onNext: () => void
}

/** The pillar-detail card shared by the Parallax and 3D entrance variants. */
export function PillarEntranceCard({ numeral, label, title, text, opacity, transform, pointerEvents, onBack, onNext }: PillarEntranceCardProps) {
  return (
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(70px,10vh,96px) clamp(14px,5vw,56px) clamp(20px,5vh,48px)',
        opacity, transform, pointerEvents,
        transition: 'opacity .45s ease, transform .55s cubic-bezier(.2,.7,.2,1)',
      }}
    >
      <article style={{ position: 'relative', width: 'min(880px,100%)', maxHeight: '100%', overflow: 'auto', background: '#faf7ef', border: '1px solid #cdbf9c', boxShadow: '0 50px 110px -40px rgba(0,0,0,.8)', padding: 'clamp(26px,4.6vw,60px)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble-lg.png')", backgroundSize: 'cover', opacity: 0.55, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(34px,4vw,52px)', color: '#c4ab77', lineHeight: 1 }}>{numeral}</span>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.32em', textTransform: 'uppercase', color: '#8a6a2c' }}>{label}</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(22px,3vw,40px)', lineHeight: 1.14, color: '#10243b', textWrap: 'pretty' }}>{title}</h2>
          <div style={{ height: 1, background: 'linear-gradient(90deg,#a17a35,rgba(161,122,53,0))' }} />
          <p style={{ margin: 0, fontSize: 'clamp(16px,1.35vw,18px)', lineHeight: 1.75, color: '#2b2a24', textWrap: 'pretty' }}>{text}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 4 }}>
            <button
              type="button"
              onClick={onBack}
              style={{ appearance: 'none', cursor: 'pointer', minHeight: 48, padding: '0 24px', fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#faf7ef', background: '#10243b', border: 0 }}
            >
              ← Back to the portico
            </button>
            <button
              type="button"
              onClick={onNext}
              style={{ appearance: 'none', cursor: 'pointer', minHeight: 48, padding: '0 24px', fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#10243b', background: 'transparent', border: '1px solid #cdbf9c' }}
            >
              Next pillar →
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}
