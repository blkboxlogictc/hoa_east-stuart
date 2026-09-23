import { Link } from 'react-router-dom'
import { PageSlab } from '../components/PageSlab'
import { NavyBand } from '../components/NavyBand'
import { BOARD, GOVERNANCE_CARDS, GOVERNING_DOCUMENTS, ACCOUNTABILITY_COMMITMENTS } from '../content/governance'

const sectionStyle = { maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)' }
const h2Style = { margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(20px,2.4vw,28px)', color: '#10243b' }

export function Governance() {
  return (
    <>
      <PageSlab eyebrow="About Us · The Chamber" title="Governance & Accountability" lede={GOVERNANCE_CARDS[0].body} />
      <div data-body style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...sectionStyle, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h2 style={h2Style}>How authority is structured</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: 20 }}>
            {GOVERNANCE_CARDS.map((card) => (
              <div key={card.title} style={{ borderTop: '2px solid #c4ab77', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontSize: 16, color: '#10243b' }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#4a4739' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: '0 clamp(20px,5vw,56px) clamp(40px,7vw,80px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2 style={h2Style}>The Board of Directors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(190px,100%),1fr))', gap: 20 }}>
            {BOARD.map((seat) => (
              <div key={seat.role} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ aspectRatio: '4/5', background: '#efeae0', border: '1px dashed #cdbf9c', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 8 }}>
                  <span style={{ fontSize: 12, color: '#8a8368' }}>{seat.role} photo</span>
                </div>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 14, color: '#10243b' }}>{seat.role}</span>
              </div>
            ))}
          </div>
        </div>

        <NavyBand>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c4ab77' }}>Our Commitments</span>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '18px 44px' }}>
              {ACCOUNTABILITY_COMMITMENTS.map((item) => (
                <li key={item} style={{ display: 'flex', gap: 14, fontSize: 16, lineHeight: 1.7, color: '#d3dbe6' }}>
                  <span style={{ color: '#d8bc7f', flexShrink: 0 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </NavyBand>

        <div style={{ ...sectionStyle, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <h2 style={h2Style}>Governing documents</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {GOVERNING_DOCUMENTS.map((doc) => (
              <div
                key={doc.title}
                style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px 20px', padding: '18px 0', borderTop: '1px solid #ddd2b4', minHeight: 64, color: '#10243b' }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 15 }}>{doc.title}</span>
                  <span style={{ fontSize: 14, color: '#6b6656' }}>{doc.meta}</span>
                </span>
                {doc.pending ? (
                  <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6b6656', border: '1px solid #cdbf9c', padding: '6px 10px' }}>
                    Pending
                  </span>
                ) : (
                  <a href={doc.href} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}>
                    Download ↓
                  </a>
                )}
              </div>
            ))}
          </div>
          <Link to="/committees" style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', paddingTop: 8, color: '#8a6a2c' }}>
            See the three standing committees →
          </Link>
        </div>
      </div>
    </>
  )
}
