import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { NAV_CTA, NAV_GROUPS, NAV_RESOURCES, SITE } from '../../content/site'
import { PILLARS } from '../../content/pillars'
import { PRIORITIES } from '../../content/priorities'

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI']
const WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
const HASHES = ['portico', ...PILLARS.map((_, i) => `pillar-${i + 1}`), 'priorities']
const ROOM_LABELS = [
  'The Portico',
  ...PILLARS.map((p, i) => `Pillar ${NUMERALS[i]} — ${p.title}`),
  'The First Ninety Days',
]
const BOTTOM_NAV_LABELS = ['Portico', ...NUMERALS, '90 Days']
const NEXT_LABELS = [
  'Housing & Property Preservation',
  'Youth, Workforce & Economic Opportunity',
  'Heritage, Public Art & Cultural Preservation',
  'Civic Engagement & Community Benefit',
  'Community Land Stewardship',
  'The First Ninety Days',
]
const ROOM_COUNT = ROOM_LABELS.length
const WIDE_QUERY = '(min-width: 1100px)'

function readRoom(hash: string) {
  const idx = HASHES.indexOf(hash.replace('#', ''))
  return idx > -1 ? idx : 0
}

export function Hall() {
  const location = useLocation()
  const navigate = useNavigate()
  const roomIndex = useMemo(() => readRoom(location.hash), [location.hash])
  const [wide, setWide] = useState(() => (typeof window === 'undefined' ? true : window.matchMedia(WIDE_QUERY).matches))
  const [menu, setMenu] = useState<'about' | 'updates' | null>(null)
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const stageRef = useRef<HTMLDivElement>(null)
  const sweepRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const scrollersRef = useRef<Record<number, HTMLElement | null>>({})
  const touchStart = useRef<number | null>(null)
  const mounted = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY)
    const onChange = () => { setWide(mq.matches); setMenu(null) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const go = useCallback((n: number) => {
    const next = Math.min(ROOM_COUNT - 1, Math.max(0, n))
    if (next === roomIndex) return
    navigate(`/#${HASHES[next]}`, { replace: true })
  }, [navigate, roomIndex])

  // Room-change effects: scroll the new active room's slab to top, and replay the sweep + room-label animations.
  useEffect(() => {
    const scroller = scrollersRef.current[roomIndex]
    if (scroller) scroller.scrollTop = 0
    if (!reducedMotion && mounted.current) {
      sweepRef.current?.animate(
        [{ opacity: 0, transform: 'translateX(-30%)' }, { opacity: 0.55, offset: 0.2 }, { opacity: 0, transform: 'translateX(130%)' }],
        { duration: 900, easing: 'cubic-bezier(.4,0,.2,1)' },
      )
    }
    labelRef.current?.animate(
      [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
      { duration: reducedMotion ? 0 : 700, easing: 'ease-out' },
    )
    mounted.current = true
  }, [roomIndex, reducedMotion])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(null)
      else if (e.key === 'ArrowRight' || e.key === 'PageDown') go(roomIndex + 1)
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(roomIndex - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [roomIndex, go])

  useEffect(() => {
    if (!menu) return
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-nav-menu]')) setMenu(null)
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [menu])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== 'touch') return
    touchStart.current = e.clientX
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (e.pointerType !== 'touch' || touchStart.current == null) return
    const delta = e.clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(delta) > 50) go(roomIndex + (delta < 0 ? 1 : -1))
  }

  const depth = roomIndex / (ROOM_COUNT - 1)
  const transformDur = reducedMotion ? 0 : 900
  const opacityDur = reducedMotion ? 0 : Math.round(900 * 0.62)

  const roomStyle = (n: number): React.CSSProperties => {
    const active = n === roomIndex
    const origin = n < roomIndex ? 'left center' : 'right center'
    const offset = n < roomIndex
      ? 'translate3d(-46%,0,-260px) rotateY(17deg)'
      : 'translate3d(46%,0,-260px) rotateY(-17deg)'
    return {
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '96px clamp(18px,5vw,64px) 132px', transformStyle: 'preserve-3d',
      transformOrigin: origin,
      transform: active ? 'none' : offset,
      opacity: active ? 1 : 0,
      pointerEvents: active ? 'auto' : 'none',
      transition: `transform ${transformDur}ms cubic-bezier(.76,0,.24,1), opacity ${opacityDur}ms ease`,
    }
  }

  const slabBase: React.CSSProperties = {
    position: 'relative', width: 'min(1000px,100%)', maxHeight: '100%', overflow: 'auto',
    background: '#faf7ef', border: '1px solid #cdbf9c', boxShadow: '0 50px 110px -40px rgba(0,0,0,.8)', padding: 'clamp(30px,4.6vw,66px)',
  }

  const isGroupActive = (paths: string[]) => paths.some((p) => location.pathname === p)

  return (
    <div
      ref={stageRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#091928', fontFamily: 'var(--font-source-sans)', color: '#10243b' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: '-6%', backgroundImage: "url('/assets/colonnade.png')", backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'saturate(.28) brightness(.52) contrast(1.05)',
          transform: `translate3d(${(-9 * depth).toFixed(2)}%,0,0) scale(${(1 + depth * 0.14).toFixed(3)})`,
          transition: reducedMotion ? 'none' : 'transform 1.1s cubic-bezier(.76,0,.24,1)',
        }}
      />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 50% 40%, rgba(9,25,40,.30) 0%, rgba(9,25,40,.80) 62%, rgba(9,25,40,.96) 100%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble.png')", backgroundSize: 'cover', opacity: 0.1, mixBlendMode: 'screen', pointerEvents: 'none' }} />
      <div
        ref={sweepRef}
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: '55%', pointerEvents: 'none', opacity: 0,
          background: 'linear-gradient(100deg, rgba(216,188,127,0) 0%, rgba(216,188,127,0.20) 45%, rgba(255,250,236,0.30) 55%, rgba(216,188,127,0) 100%)',
        }}
      />

      {wide ? (
        <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '18px clamp(18px,4vw,54px)' }}>
          <button type="button" onClick={() => go(0)} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'none', border: 0, cursor: 'pointer', padding: 0 }}>
            <img src="/assets/crest.jpg" alt="Heritage &amp; Opportunity Alliance crest" style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(216,188,127,.55)', flexShrink: 0 }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 13, letterSpacing: '.2em', color: '#f2ead8', textTransform: 'uppercase', lineHeight: 1.1 }}>Heritage &amp; Opportunity Alliance</span>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 13, letterSpacing: '.06em', color: '#a9926a', lineHeight: 1 }}>{SITE.tagline}</span>
            </span>
          </button>
          <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: 'clamp(12px,1.7vw,24px)', fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.17em', textTransform: 'uppercase' }}>
            <button type="button" onClick={() => go(7)} style={{ background: 'none', border: 0, cursor: 'pointer', font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', color: '#b9a882', borderBottom: roomIndex === 7 ? '1px solid #d8bc7f' : '1px solid transparent', paddingBottom: 3 }}>
              Ninety Days
            </button>
            {NAV_GROUPS.map((group) => {
              const active = isGroupActive(group.links.map((l) => l.to))
              const open = menu === group.key
              return (
                <span key={group.key} data-nav-menu style={{ position: 'relative', display: 'inline-flex' }}>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setMenu((v) => (v === group.key ? null : group.key)) }}
                    style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', color: active ? '#e8d9b4' : '#b9a882', display: 'inline-flex', alignItems: 'center', gap: 7, borderBottom: active ? '1px solid #d8bc7f' : '1px solid transparent', paddingBottom: 3 }}
                  >
                    {group.label}<span style={{ fontSize: 8 }}>▼</span>
                  </button>
                  {open && (
                    <span style={{ display: 'flex', position: 'absolute', top: 'calc(100% + 14px)', right: 0, zIndex: 60, minWidth: group.key === 'about' ? 216 : 170, flexDirection: 'column', background: '#0b1c2e', border: '1px solid rgba(216,188,127,.4)', boxShadow: '0 26px 54px -22px rgba(0,0,0,.85)', padding: 8 }}>
                      {group.links.map((link) => (
                        <Link key={link.to} to={link.to} style={{ color: '#cfc2a0', padding: '10px 14px', textDecoration: 'none' }}>{link.label}</Link>
                      ))}
                    </span>
                  )}
                </span>
              )
            })}
            <Link to={NAV_RESOURCES.to} style={{ color: '#b9a882', textDecoration: 'none' }}>{NAV_RESOURCES.label}</Link>
            <Link to={NAV_CTA.to} style={{ color: '#e8d9b4', textDecoration: 'none' }}>{NAV_CTA.label}</Link>
          </nav>
        </header>
      ) : (
        <Header />
      )}

      <div style={{ position: 'absolute', inset: 0, perspective: 1700, perspectiveOrigin: '50% 45%' }}>
        {/* Room 0 — Portico */}
        <section aria-hidden={roomIndex !== 0} style={roomStyle(0)}>
          <div
            ref={(el) => { scrollersRef.current[0] = el }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'clamp(22px,4vw,62px)', maxHeight: '100%', overflow: 'auto' }}
          >
            <div style={{ display: 'inline-flex', padding: 'clamp(8px,1.2vh,16px)', background: '#0c1e33', border: '1px solid rgba(216,188,127,.42)', boxShadow: '0 34px 70px -34px rgba(0,0,0,.85)', flexShrink: 0 }}>
              <img src="/assets/portico.png" alt="Six-column marble portico" style={{ display: 'block', width: 'auto', height: 'min(46vh,360px)', mixBlendMode: 'screen', filter: 'contrast(1.14) brightness(1.04)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px,2vh,22px)', maxWidth: 560, minWidth: 'min(100%,300px)' }}>
              <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.38em', color: '#c9b489', textTransform: 'uppercase' }}>Six pillars · one structure</div>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(28px,3.6vw,52px)', lineHeight: 1.08, letterSpacing: '.015em', color: '#f6efdd', textWrap: 'pretty' }}>
                Preserving heritage.<br />Building opportunity.
              </h1>
              <p style={{ margin: 0, fontSize: 'clamp(15px,1.25vw,18px)', lineHeight: 1.72, color: '#cfd8e6', textWrap: 'pretty' }}>
                The Heritage &amp; Opportunity Alliance organizes East Stuart residents, institutions, and partners around six pillars of work. Walk the hall to see what each one carries.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 2 }}>
                <button type="button" onClick={() => go(1)} style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#0d1f33', background: '#d8bc7f', padding: '14px 30px', border: '1px solid #e7d3a3', cursor: 'pointer' }}>
                  Walk the hall
                </button>
                <Link to="/get-involved" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#e8d9b4', padding: '14px 30px', border: '1px solid rgba(216,188,127,.45)', textDecoration: 'none' }}>
                  Stand with us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms 1-6 — Pillars */}
        {PILLARS.map((pillar, i) => {
          const n = i + 1
          return (
            <section key={pillar.title} aria-hidden={roomIndex !== n} style={roomStyle(n)}>
              <article ref={(el) => { scrollersRef.current[n] = el }} style={slabBase}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble.png')", backgroundSize: 'cover', opacity: 0.2, mixBlendMode: 'multiply', pointerEvents: 'none' }} />
                <div aria-hidden="true" style={{ position: 'absolute', inset: 12, border: '1px solid rgba(161,122,53,.3)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                    <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 400, color: '#c4ab77', lineHeight: 1 }}>{NUMERALS[i]}</span>
                    <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: '#8a6a2c' }}>Pillar {WORDS[i]}</span>
                  </div>
                  <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(24px,3.2vw,44px)', lineHeight: 1.14, color: '#10243b', textWrap: 'pretty', textShadow: '0 1px 0 rgba(255,255,255,.85)' }}>
                    {pillar.title}
                  </h2>
                  <div style={{ height: 1, background: 'linear-gradient(90deg,#a17a35,rgba(161,122,53,0))' }} />
                  <p style={{ margin: 0, fontSize: 'clamp(16px,1.35vw,19px)', lineHeight: 1.78, color: '#2b2a24', maxWidth: '72ch', textWrap: 'pretty' }}>{pillar.longDesc}</p>
                  <button
                    type="button"
                    onClick={() => go(n + 1)}
                    style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}
                  >
                    Next — {NEXT_LABELS[i]} →
                  </button>
                </div>
              </article>
            </section>
          )
        })}

        {/* Room 7 — The First Ninety Days */}
        <section aria-hidden={roomIndex !== 7} style={roomStyle(7)}>
          <article ref={(el) => { scrollersRef.current[7] = el }} style={{ ...slabBase, width: 'min(1060px,100%)', padding: 'clamp(30px,4.2vw,58px)' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble.png')", backgroundSize: 'cover', opacity: 0.2, mixBlendMode: 'multiply', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 26 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: '#8a6a2c' }}>The Antechamber</span>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(24px,3vw,42px)', lineHeight: 1.12, color: '#10243b', textShadow: '0 1px 0 rgba(255,255,255,.85)' }}>The First Ninety Days</h2>
                <div style={{ height: 1, background: 'linear-gradient(90deg,#a17a35,rgba(161,122,53,0))' }} />
              </div>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(360px,100%),1fr))', gap: '22px 40px' }}>
                {PRIORITIES.map((item, i) => (
                  <li key={item} style={{ display: 'flex', gap: 14, fontSize: 15.5, lineHeight: 1.7, color: '#2b2a24' }}>
                    <span style={{ fontFamily: 'var(--font-cinzel)', color: '#a17a35', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </section>
      </div>

      <nav aria-label="Pillar colonnade" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 'clamp(6px,1.4vw,22px)', padding: '0 clamp(12px,4vw,48px) 18px' }}>
        {BOTTOM_NAV_LABELS.map((label, i) => {
          const active = i === roomIndex
          return (
            <button
              key={label}
              type="button"
              onClick={() => go(i)}
              title={i > 0 && i < 7 ? PILLARS[i - 1].title : undefined}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 4px', background: 'none', border: 0, cursor: 'pointer' }}
            >
              <span style={{ display: 'block', width: 3, height: active ? 54 : 26, background: active ? '#d8bc7f' : 'rgba(216,188,127,.45)', transition: 'height .5s cubic-bezier(.76,0,.24,1),background .4s ease' }} />
              <span className="hall-nav-label" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 10, letterSpacing: '.18em', textTransform: i === 0 || i === 7 ? 'uppercase' : 'none', color: active ? '#f2ead8' : '#bda97f', transition: 'color .4s ease' }}>
                {label}
              </span>
            </button>
          )
        })}
      </nav>

      <div
        ref={labelRef}
        aria-hidden="true"
        style={{ position: 'absolute', left: 'clamp(18px,4vw,54px)', bottom: 26, zIndex: 35, fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 14, color: 'rgba(216,188,127,.62)', pointerEvents: 'none', maxWidth: '30vw' }}
      >
        {ROOM_LABELS[roomIndex]}
      </div>
    </div>
  )
}
