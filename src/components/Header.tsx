import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_CTA, NAV_GROUPS, NAV_HALL, NAV_RESOURCES, SITE } from '../content/site'
import { MobileDrawer } from './MobileDrawer'

const WIDE_QUERY = '(min-width: 1100px)'

export function Header() {
  const location = useLocation()
  const [wide, setWide] = useState(() => (typeof window === 'undefined' ? true : window.matchMedia(WIDE_QUERY).matches))
  const [openMenu, setOpenMenu] = useState<'about' | 'updates' | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY)
    const onChange = () => {
      setWide(mq.matches)
      setDrawerOpen(false)
      setOpenMenu(null)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setDrawerOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (drawerOpen) {
        setDrawerOpen(false)
        menuToggleRef.current?.focus()
      } else if (openMenu) {
        setOpenMenu(null)
      }
    }
    const onClick = (event: MouseEvent) => {
      if (!openMenu) return
      const target = event.target as HTMLElement
      if (!target.closest('[data-nav-menu]')) setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('click', onClick)
    }
  }, [openMenu, drawerOpen])

  const isGroupActive = (keys: string[]) => keys.some((path) => location.pathname === path)

  return (
    <header
      ref={headerRef}
      style={{ position: 'sticky', top: 0, zIndex: 50, background: '#091928', borderBottom: '1px solid rgba(216,188,127,.35)' }}
    >
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '12px clamp(16px,4vw,40px)',
          minHeight: 68,
        }}
      >
        <Link to="/" aria-label="Heritage and Opportunity Alliance home" style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, textDecoration: 'none' }}>
          <img
            src="/assets/crest.jpg"
            alt=""
            style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(216,188,127,.55)', flexShrink: 0 }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.18em', color: '#f2ead8', textTransform: 'uppercase', lineHeight: 1.2 }}>
              Heritage &amp; Opportunity Alliance
            </span>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 13, color: '#a9926a', lineHeight: 1 }}>
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {wide ? (
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', gap: 22, fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.17em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            <NavLink to={NAV_HALL.to} end style={{ color: '#b9a882', textDecoration: 'none' }}>
              {NAV_HALL.label}
            </NavLink>

            {NAV_GROUPS.map((group) => {
              const active = isGroupActive(group.links.map((l) => l.to))
              const open = openMenu === group.key
              return (
                <div key={group.key} data-nav-menu style={{ position: 'relative' }}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenMenu((v) => (v === group.key ? null : group.key))
                    }}
                    style={{
                      appearance: 'none',
                      background: 'none',
                      border: 0,
                      borderBottom: `1px solid ${active ? '#d8bc7f' : 'transparent'}`,
                      padding: '0 0 3px',
                      cursor: 'pointer',
                      letterSpacing: 'inherit',
                      textTransform: 'inherit',
                      font: 'inherit',
                      color: '#d9c9a2',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                    }}
                  >
                    {group.label}<span style={{ fontSize: 8 }}>▼</span>
                  </button>
                  {open && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 16px)',
                        right: -12,
                        minWidth: group.key === 'about' ? 220 : 170,
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#0b1c2e',
                        border: '1px solid rgba(216,188,127,.4)',
                        boxShadow: '0 26px 54px -22px rgba(0,0,0,.85)',
                        padding: 8,
                      }}
                    >
                      {group.links.map((link) => (
                        <Link key={link.to} to={link.to} style={{ color: '#cfc2a0', padding: '11px 14px', textDecoration: 'none' }}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <NavLink
              to={NAV_RESOURCES.to}
              style={({ isActive }) => ({ color: '#d9c9a2', borderBottom: `1px solid ${isActive ? '#d8bc7f' : 'transparent'}`, paddingBottom: 3, textDecoration: 'none' })}
            >
              {NAV_RESOURCES.label}
            </NavLink>
            <Link to={NAV_CTA.to} style={{ color: '#0d1f33', background: '#d8bc7f', padding: '11px 18px', textDecoration: 'none' }}>
              {NAV_CTA.label}
            </Link>
          </nav>
        ) : (
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            style={{
              appearance: 'none',
              background: 'none',
              border: '1px solid rgba(216,188,127,.45)',
              width: 48,
              height: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span style={{ display: 'block', width: 20, height: 1.5, background: '#d8bc7f' }} />
            <span style={{ display: 'block', width: 20, height: 1.5, background: '#d8bc7f' }} />
            <span style={{ display: 'block', width: 14, height: 1.5, background: '#d8bc7f', alignSelf: 'center' }} />
          </button>
        )}
      </div>

      {!wide && (
        <MobileDrawer open={drawerOpen} onClose={() => { setDrawerOpen(false); menuToggleRef.current?.focus() }} />
      )}
    </header>
  )
}
