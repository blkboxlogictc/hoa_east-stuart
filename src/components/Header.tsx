import { NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../content/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-6 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 sm:px-12">
      <NavLink to="/" className="flex items-center gap-3.5 no-underline">
        <img src="/assets/logo.png" alt="HOA crest" className="h-13 w-13" style={{ width: 52, height: 52, objectFit: 'contain' }} />
        <div className="leading-tight">
          <div className="font-serif text-[19px] font-bold tracking-[0.01em] text-[var(--color-navy)]">{SITE.name}</div>
          <div className="label-caps text-[12px] font-normal text-[var(--color-label-muted)]">{SITE.tagline}</div>
        </div>
      </NavLink>

      <nav className="flex flex-wrap items-center gap-6 sm:gap-7">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `border-b-2 pb-1 text-[15px] font-semibold no-underline ${
                isActive
                  ? 'border-[var(--color-accent)] text-[var(--color-navy)]'
                  : 'border-transparent text-[var(--color-nav-inactive)] hover:text-[var(--color-navy)]'
              }`
            }
          >
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
    </header>
  )
}
