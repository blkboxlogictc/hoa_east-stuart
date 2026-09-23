import { Link } from 'react-router-dom'
import { FOOTER_ABOUT_LINKS, FOOTER_UPDATES_LINKS, NAV_HALL, SITE } from '../content/site'

const columnLabelStyle = {
  fontFamily: 'var(--font-cinzel)',
  fontSize: 10,
  letterSpacing: '.28em',
  textTransform: 'uppercase' as const,
  color: '#a17a35',
}
const linkStyle = { color: '#c3cede', fontSize: 15, textDecoration: 'none' }

export function Footer() {
  return (
    <footer style={{ background: '#091928', borderTop: '1px solid rgba(216,188,127,.3)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '44px clamp(20px,5vw,56px) 36px', display: 'flex', flexDirection: 'column', gap: 30 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img src="/assets/crest.jpg" alt="" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(216,188,127,.5)' }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 17, color: '#c9b489' }}>{SITE.footerTagline}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={columnLabelStyle}>About Us</span>
            {FOOTER_ABOUT_LINKS.map((link) => (
              <Link key={link.to} to={link.to} style={linkStyle}>{link.label}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={columnLabelStyle}>Updates &amp; Resources</span>
            {FOOTER_UPDATES_LINKS.map((link) => (
              <Link key={link.to} to={link.to} style={linkStyle}>{link.label === 'The Hall' ? NAV_HALL.label : link.label}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={columnLabelStyle}>Contact</span>
            <a href={`mailto:${SITE.email}`} style={{ color: '#e8d9b4', fontSize: 15, wordBreak: 'break-all', textDecoration: 'none' }}>
              {SITE.email}
            </a>
          </div>
        </div>
        <p style={{ margin: 0, paddingTop: 22, borderTop: '1px solid rgba(216,188,127,.18)', fontSize: 13, lineHeight: 1.7, color: '#8797ad' }}>
          {SITE.copyright}
        </p>
      </div>
    </footer>
  )
}
