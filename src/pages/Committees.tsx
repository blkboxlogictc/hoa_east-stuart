import { PageSlab } from '../components/PageSlab'
import { Button } from '../components/Button'
import { COMMITTEES } from '../content/committees'

export function Committees() {
  return (
    <>
      <PageSlab
        eyebrow="About Us"
        title="Standing Committees"
        lede="Advisors and committee members do not bind the corporation. Committees organize, recommend, document, and execute only work the Board has authorized."
      />
      <div data-body style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column' }}>
        {COMMITTEES.map((committee, i) => (
          <div
            key={committee.numeral}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,72px) minmax(0,1fr)',
              gap: '8px 24px',
              padding: '28px 0',
              borderTop: '1px solid #ddd2b4',
              borderBottom: i === COMMITTEES.length - 1 ? '1px solid #ddd2b4' : undefined,
            }}
          >
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(32px,4vw,46px)', color: '#c4ab77', lineHeight: 1 }}>{committee.numeral}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(18px,2vw,24px)', lineHeight: 1.3, color: '#10243b' }}>{committee.title}</h2>
              <p style={{ margin: 0, maxWidth: '68ch', fontSize: 16.5, lineHeight: 1.72, color: '#2b2a24' }}>{committee.desc}</p>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 36 }}>
          <Button to="/get-involved" variant="dark">Join a committee</Button>
          <Button to="/governance" variant="outline">Governance</Button>
        </div>
      </div>
    </>
  )
}
