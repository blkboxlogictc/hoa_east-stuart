import { useEffect, useRef, useState } from 'react'
import { PILLARS } from '../../content/pillars'
import { PillarEntranceCard } from './PillarEntranceCard'

const COLS = [10.7, 25.8, 41.6, 58.1, 74.0, 89.4]
const NUM = ['I', 'II', 'III', 'IV', 'V', 'VI']
const WORD = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

type Phase = 'idle' | 'flying' | 'open'

export function Parallax() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [i, setI] = useState(0)
  const farRef = useRef<HTMLDivElement>(null)
  const nearRef = useRef<HTMLDivElement>(null)
  const sweepRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | undefined>(undefined)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const tilt = (x: number, y: number) => {
      if (farRef.current) farRef.current.style.transform = `translate3d(${-x * 18}px,${-y * 10}px,0)`
      if (nearRef.current) nearRef.current.style.transform = `translate3d(${x * 22}px,${y * 8}px,0)`
    }
    const onMove = (e: PointerEvent) => {
      if (phase !== 'idle') return
      tilt(e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5)
    }
    const onOrient = (e: DeviceOrientationEvent) => {
      if (phase !== 'idle' || e.gamma == null || e.beta == null) return
      tilt(Math.max(-1, Math.min(1, e.gamma / 30)) * 0.5, Math.max(-1, Math.min(1, (e.beta - 40) / 30)) * 0.5)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('deviceorientation', onOrient)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('deviceorientation', onOrient)
    }
  }, [phase])

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const sweep = () => {
    if (!sweepRef.current || reduced) return
    sweepRef.current.animate(
      [{ opacity: 0, transform: 'translateX(-40%)' }, { opacity: 0.6, offset: 0.3 }, { opacity: 0, transform: 'translateX(140%)' }],
      { duration: 1100, easing: 'cubic-bezier(.4,0,.2,1)' },
    )
  }

  const enter = (index: number) => {
    window.clearTimeout(timeoutRef.current)
    if (farRef.current) farRef.current.style.transform = 'none'
    if (nearRef.current) nearRef.current.style.transform = 'none'
    setI(index)
    setPhase('flying')
    sweep()
    timeoutRef.current = window.setTimeout(() => setPhase('open'), reduced ? 0 : 900)
  }
  const back = () => {
    window.clearTimeout(timeoutRef.current)
    setPhase('idle')
  }
  const next = () => {
    setPhase('idle')
    timeoutRef.current = window.setTimeout(() => enter((i + 1) % 6), 700)
  }

  const zoomed = phase !== 'idle'
  const dur = reduced ? 0 : 1300

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#091928', fontFamily: 'var(--font-source-sans)', color: '#10243b' }}>
      <div style={{ position: 'absolute', inset: '-8%', willChange: 'transform' }}>
        <div
          ref={farRef}
          style={{ position: 'absolute', inset: 0, background: "url('/assets/colonnade.png') center/cover", filter: 'saturate(.25) brightness(.42)', transform: zoomed ? 'scale(1.35)' : 'scale(1)', transition: `transform ${dur}ms cubic-bezier(.7,0,.2,1)` }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(110% 80% at 50% 55%, rgba(9,25,40,.15) 0%, rgba(9,25,40,.85) 70%, rgba(9,25,40,.97) 100%)', pointerEvents: 'none' }} />

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 'clamp(64px,9vh,96px)', willChange: 'transform' }}>
        <div
          ref={nearRef}
          style={{
            position: 'relative', height: 'min(64vh,118vw)', aspectRatio: '1122/1402',
            transform: zoomed ? 'scale(7)' : 'scale(1)', transformOrigin: `${COLS[i]}% 52%`,
            transition: `transform ${dur}ms cubic-bezier(.7,0,.2,1)`,
          }}
        >
          <img src="/assets/portico.png" alt="Six-column marble portico" style={{ display: 'block', width: '100%', height: '100%', mixBlendMode: 'screen', filter: 'contrast(1.12)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '79%', height: 0, opacity: zoomed ? 0 : 1, transition: 'opacity .3s ease' }}>
            {COLS.map((x, k) => (
              <button
                key={NUM[k]}
                type="button"
                onClick={() => enter(k)}
                aria-label={`Enter Pillar ${NUM[k]}: ${PILLARS[k].title}`}
                style={{
                  position: 'absolute', left: `${x}%`, top: 0, transform: 'translate(-50%,-50%)',
                  width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(216,188,127,.7)', background: 'rgba(9,25,40,.72)',
                  color: '#f2ead8', fontFamily: 'var(--font-cinzel)', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {NUM[k]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: '#091928', opacity: phase === 'open' ? 0.55 : 0, transition: `opacity ${phase === 'open' ? 900 : 500}ms ease`, pointerEvents: 'none' }} />
      <div ref={sweepRef} aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '60%', pointerEvents: 'none', opacity: 0, background: 'linear-gradient(100deg, rgba(216,188,127,0) 0%, rgba(216,188,127,.22) 45%, rgba(255,250,236,.32) 55%, rgba(216,188,127,0) 100%)' }} />

      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '14px clamp(16px,4vw,40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/assets/crest.jpg" alt="" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(216,188,127,.55)' }} />
          <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', color: '#f2ead8', textTransform: 'uppercase' }}>Heritage &amp; Opportunity Alliance</span>
        </div>
      </header>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 'clamp(76px,12vh,120px)', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '0 20px', textAlign: 'center', opacity: zoomed ? 0 : 1, transition: 'opacity .4s ease', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.36em', color: '#c9b489', textTransform: 'uppercase' }}>Six pillars · one structure</span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(26px,4.4vw,52px)', lineHeight: 1.08, color: '#f6efdd' }}>
          Preserving heritage.<br />Building opportunity.
        </h1>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 17, color: '#b9a882' }}>Choose a pillar to enter</span>
      </div>

      <PillarEntranceCard
        numeral={NUM[i]}
        label={`Pillar ${WORD[i]}`}
        title={PILLARS[i].title}
        text={PILLARS[i].longDesc}
        opacity={phase === 'open' ? 1 : 0}
        transform={phase === 'open' ? 'none' : 'translateY(30px)'}
        pointerEvents={phase === 'open' ? 'auto' : 'none'}
        onBack={back}
        onNext={next}
      />
    </div>
  )
}
