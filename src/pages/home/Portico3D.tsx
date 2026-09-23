import { useEffect, useRef, useState } from 'react'
import type { Portico3DHandle } from '../../lib/portico3d'
import { PILLARS } from '../../content/pillars'
import { PillarEntranceCard } from './PillarEntranceCard'
import { Parallax } from './Parallax'

const NUM = ['I', 'II', 'III', 'IV', 'V', 'VI']
const WORD = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

type Phase = 'loading' | 'idle' | 'flying' | 'open' | 'returning' | 'error'

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

function isUnsupported() {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  if (Math.min(window.innerWidth, window.innerHeight) < 700) return true
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return true
  return !hasWebGL()
}

/** The full-3D entrance. Falls back to the Parallax variant on unsupported devices or WebGL failure. */
export function Portico3D() {
  const [fallback] = useState(isUnsupported)
  const [phase, setPhase] = useState<Phase>('loading')
  const [i, setI] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)
  const labelsRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Portico3DHandle | null>(null)

  useEffect(() => {
    if (fallback) return
    let cancelled = false
    import('../../lib/portico3d')
      .then((mod) => {
        if (cancelled || !stageRef.current) return
        sceneRef.current = mod.mount(stageRef.current, labelsRef.current, { marble: '/assets/marble-lg.png' })
        setPhase('idle')
      })
      .catch((err) => {
        console.error(err)
        if (!cancelled) setPhase('error')
      })
    return () => {
      cancelled = true
      sceneRef.current?.dispose()
      sceneRef.current = null
    }
  }, [fallback])

  if (fallback || phase === 'error') return <Parallax />

  const home = phase === 'idle' || phase === 'loading'

  const enter = (index: number) => {
    if (!sceneRef.current || phase !== 'idle') return
    setI(index)
    setPhase('flying')
    sceneRef.current.flyTo(index, () => setPhase('open'))
  }
  const back = (then?: () => void) => {
    if (!sceneRef.current) return
    setPhase('returning')
    sceneRef.current.back(() => { setPhase('idle'); then?.() })
  }

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#091928', fontFamily: 'var(--font-source-sans)', color: '#10243b' }}>
      <div ref={stageRef} style={{ position: 'absolute', inset: 0 }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 50% 50%, rgba(9,25,40,0) 55%, rgba(9,25,40,.75) 100%)', pointerEvents: 'none' }} />

      <div ref={labelsRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: phase === 'idle' ? 1 : 0, transition: 'opacity .3s ease' }}>
        {NUM.map((n, k) => (
          <button
            key={n}
            type="button"
            data-col={k}
            onClick={() => enter(k)}
            aria-label={`Enter Pillar ${n}: ${PILLARS[k].title}`}
            style={{
              position: 'absolute', left: -100, top: -100, transform: 'translate(-50%,-50%)', pointerEvents: 'auto',
              width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(216,188,127,.7)', background: 'rgba(9,25,40,.78)',
              color: '#f2ead8', fontFamily: 'var(--font-cinzel)', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {n}
          </button>
        ))}
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: '#091928', opacity: phase === 'open' ? 0.55 : 0, transition: 'opacity .6s ease', pointerEvents: 'none' }} />

      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '14px clamp(16px,4vw,40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/assets/crest.jpg" alt="" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(216,188,127,.55)' }} />
          <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', color: '#f2ead8', textTransform: 'uppercase' }}>Heritage &amp; Opportunity Alliance</span>
        </div>
      </header>

      <div style={{ position: 'absolute', left: 0, right: 0, top: 'clamp(76px,11vh,112px)', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '0 20px', textAlign: 'center', opacity: home ? 1 : 0, transition: 'opacity .4s ease', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.36em', color: '#c9b489', textTransform: 'uppercase' }}>Six pillars · one structure</span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(26px,4.4vw,52px)', lineHeight: 1.08, color: '#f6efdd', textShadow: '0 2px 20px rgba(9,25,40,.8)' }}>
          Preserving heritage.<br />Building opportunity.
        </h1>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 17, color: '#b9a882' }}>
          {phase === 'loading' ? 'Raising the portico…' : 'Choose a pillar to enter'}
        </span>
      </div>

      <PillarEntranceCard
        numeral={NUM[i]}
        label={`Pillar ${WORD[i]}`}
        title={PILLARS[i].title}
        text={PILLARS[i].longDesc}
        opacity={phase === 'open' ? 1 : 0}
        transform={phase === 'open' ? 'none' : 'translateY(30px)'}
        pointerEvents={phase === 'open' ? 'auto' : 'none'}
        onBack={() => back()}
        onNext={() => back(() => enter((i + 1) % 6))}
      />
    </div>
  )
}
