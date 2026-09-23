import { PageSlab } from '../components/PageSlab'
import { SITE } from '../content/site'
import { TOOLBOX_AVAILABLE, TOOLBOX_SHELVES } from '../content/toolbox'

export function Toolbox() {
  return (
    <>
      <PageSlab
        eyebrow="Resources"
        title="The Toolbox"
        lede="Referral guides, forms, and partner contacts residents can use directly. Each shelf is filled as the Board verifies and approves the material."
      />
      <div data-body style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(20px,2.4vw,28px)', color: '#10243b' }}>Available now</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {TOOLBOX_AVAILABLE.map((doc, i) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px 20px', padding: '18px 0',
                  borderTop: '1px solid #ddd2b4', borderBottom: i === TOOLBOX_AVAILABLE.length - 1 ? '1px solid #ddd2b4' : undefined,
                  minHeight: 64, color: '#10243b',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 15 }}>{doc.title}</span>
                  <span style={{ fontSize: 14, color: '#6b6656' }}>{doc.meta}</span>
                </span>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}>Download ↓</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(20px,2.4vw,28px)', color: '#10243b' }}>Shelves in preparation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 16 }}>
            {TOOLBOX_SHELVES.map((shelf) => (
              <div key={shelf.title} style={{ border: '1px solid #ddd2b4', background: '#fffdf8', padding: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontSize: 16, color: '#10243b' }}>{shelf.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: '#4a4739' }}>{shelf.desc}</p>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}>In preparation</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#6b6656' }}>
          Need something that isn’t here yet? Write to <a href={`mailto:${SITE.email}`} style={{ color: '#8a6a2c' }}>{SITE.email}</a> and we will point you to a qualified partner.
        </p>
      </div>
    </>
  )
}
