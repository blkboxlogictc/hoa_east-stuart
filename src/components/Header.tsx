import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../content/site'

const NAV_LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `border-b-2 pb-1 text-[15px] font-semibold no-underline ${
    isActive
      ? 'border-[var(--color-accent)] text-[var(--color-navy)]'
      : 'border-transparent text-[var(--color-nav-inactive)] hover:text-[var(--color-navy)]'
  }`

const MOBILE_NAV_LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `block rounded px-3 py-3 text-[16px] font-semibold no-underline ${
    isActive ? 'bg-[var(--color-bg)] text-[var(--color-navy)]' : 'text-[var(--color-nav-inactive)]'
  }`

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-12 sm:py-3.5">
        <NavLink to="/" className="flex min-w-0 items-center gap-3 no-underline sm:gap-3.5">
          <img
            src="/assets/logo.png"
            alt="HOA crest"
            className="h-11 w-11 flex-shrink-0 sm:h-13 sm:w-13"
            style={{ objectFit: 'contain' }}
          />
          <div className="min-w-0 leading-tight">
            <div className="font-serif text-[15px] font-bold tracking-[0.01em] text-[var(--color-navy)] sm:text-[19px]">
              {SITE.name}
            </div>
            <div className="label-caps truncate text-[10.5px] font-normal text-[var(--color-label-muted)] sm:text-[12px]">
              {SITE.tagline}
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={NAV_LINK_CLASS}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/get-involved#connect"
            className="inline-block cursor-pointer rounded-[3px] bg-[var(--color-accent)] px-5.5 py-2.5 text-[14px] font-bold text-[var(--color-surface)] no-underline hover:bg-[var(--color-accent-hover)] hover:no-underline"
          >
            Donate
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-navy)] lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2.5 5.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2.5 14.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-border)] px-5 pb-5 pt-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={MOBILE_NAV_LINK_CLASS}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/get-involved#connect"
            className="mt-2 block rounded-[3px] bg-[var(--color-accent)] px-4 py-3 text-center text-[15px] font-bold text-[var(--color-surface)] no-underline hover:bg-[var(--color-accent-hover)] hover:no-underline"
          >
            Donate
          </NavLink>
        </nav>
      )}
    </header>
  )
}
