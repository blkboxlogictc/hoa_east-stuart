import { Link } from 'react-router-dom'
import { FOOTER_LINKS, SITE } from '../content/site'
import { OrnamentalDivider } from './OrnamentalDivider'

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] px-6 pb-9 pt-14 text-[var(--color-footer-text)] sm:px-12">
      <div className="mx-auto max-w-[var(--container-app)]">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <img src="/assets/logo.png" alt="HOA crest" style={{ width: 44, height: 44, objectFit: 'contain' }} />
              <div className="font-serif text-[17px] font-bold text-[var(--color-surface)]">{SITE.name}</div>
            </div>
            <OrnamentalDivider tone="gold" className="mb-4" />
            <div className="max-w-[360px] text-[14px] leading-relaxed text-[var(--color-footer-text-soft)]">
              {SITE.footerTagline}
            </div>
          </div>
          <div>
            <div className="label-caps mb-3.5 text-[13px] text-[var(--color-footer-label)]">Site</div>
            <div className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="text-[14px] text-[var(--color-footer-text)] hover:text-[var(--color-surface)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="label-caps mb-3.5 text-[13px] text-[var(--color-footer-label)]">Contact</div>
            <a href={`mailto:${SITE.email}`} className="text-[14px] text-[var(--color-footer-text)] hover:text-[var(--color-surface)]">
              {SITE.email}
            </a>
          </div>
        </div>
        <div className="border-t border-[var(--color-navy-panel-border)] pt-6 text-[13px] text-[var(--color-footer-label)]">
          {SITE.copyright}
        </div>
      </div>
    </footer>
  )
}
