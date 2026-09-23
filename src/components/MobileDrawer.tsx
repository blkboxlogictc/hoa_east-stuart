import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { NAV_CTA, NAV_GROUPS, NAV_HALL, NAV_RESOURCES } from '../content/site'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

const FOCUSABLE = 'a[href], button:not([disabled])'

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const panel = panelRef.current
    const focusables = panel ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)) : []
    focusables[0]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkStyle = { color: '#dfe5ee', padding: '12px 0', textDecoration: 'none', display: 'block' }
  const groupLabelStyle = {
    fontFamily: 'var(--font-cinzel)',
    fontSize: 10,
    letterSpacing: '.3em',
    textTransform: 'uppercase' as const,
    color: '#a17a35',
    padding: '22px 0 6px',
    display: 'block',
  }

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 80,
          background: 'rgba(5,14,24,.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity .3s ease',
        }}
      />
      <aside
        id="mobile-drawer"
        ref={panelRef}
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 90,
          width: 'min(86vw,360px)',
          background: '#091928',
          borderLeft: '1px solid rgba(216,188,127,.35)',
          transform: open ? 'translateX(0)' : 'translateX(102%)',
          transition: 'transform .36s cubic-bezier(.2,.7,.2,1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/marble-lg.png')", backgroundSize: 'cover', opacity: 0.06, mixBlendMode: 'screen', pointerEvents: 'none' }}
        />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px 12px 22px', borderBottom: '1px solid rgba(216,188,127,.2)', minHeight: 68 }}>
          <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: '#c4ab77' }}>Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            style={{ appearance: 'none', background: 'none', border: '1px solid rgba(216,188,127,.45)', width: 48, height: 48, color: '#d8bc7f', fontSize: 22, lineHeight: 1, cursor: 'pointer' }}
          >
            ×
          </button>
        </div>
        <nav style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: '10px 22px 28px', fontSize: 17 }}>
          <Link
            to={NAV_HALL.to}
            style={{ color: '#f2ead8', padding: '14px 0', borderBottom: '1px solid rgba(216,188,127,.14)', fontFamily: 'var(--font-cinzel)', fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            The Hall &amp; Six Pillars
          </Link>
          {NAV_GROUPS.map((group) => (
            <div key={group.key}>
              <span style={groupLabelStyle}>{group.label}</span>
              {group.links.map((link) => (
                <Link key={link.to} to={link.to} style={linkStyle}>{link.label}</Link>
              ))}
            </div>
          ))}
          <span style={groupLabelStyle}>Resources</span>
          <Link to={NAV_RESOURCES.to} style={linkStyle}>The Toolbox</Link>
          <Link
            to={NAV_CTA.to}
            style={{ marginTop: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 52, fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#0d1f33', background: '#d8bc7f', textDecoration: 'none' }}
          >
            {NAV_CTA.label}
          </Link>
        </nav>
      </aside>
    </>
  )
}
