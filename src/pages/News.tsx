import { Link } from 'react-router-dom'
import { PageSlab } from '../components/PageSlab'
import { NEWS_EDITION, NEWS_ITEMS } from '../content/news'

export function News() {
  return (
    <>
      <PageSlab eyebrow="Updates · News" title="What We Have Built So Far" dateline={`${NEWS_EDITION.date} · ${NEWS_EDITION.title}`} />
      <div data-body style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,40px)' }}>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 22 }}>
          {NEWS_ITEMS.map((item) => (
            <li key={item} style={{ display: 'flex', gap: 16, fontSize: 17, lineHeight: 1.75, color: '#2b2a24' }}>
              <span style={{ color: '#a17a35', fontFamily: 'var(--font-cinzel)', flexShrink: 0 }}>§</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 44, marginTop: 44, borderTop: '1px solid #ddd2b4' }}>
          <Link to="/#priorities" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}>
            The first ninety days →
          </Link>
        </div>
      </div>
    </>
  )
}
