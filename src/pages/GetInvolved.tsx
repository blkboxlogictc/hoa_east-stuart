import { PageSlab } from '../components/PageSlab'
import { NavyBand } from '../components/NavyBand'
import { Button } from '../components/Button'
import { SITE } from '../content/site'
import { NEEDS } from '../content/involvement'

export function GetInvolved() {
  return (
    <>
      <PageSlab eyebrow="The Threshold" title="What the Structure Needs" />
      <div data-body style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '30px 44px' }}
        >
          {NEEDS.map((need) => (
            <div key={need.title} style={{ display: 'flex', flexDirection: 'column', gap: 8, borderTop: '2px solid #c4ab77', paddingTop: 16 }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 16, color: '#10243b', lineHeight: 1.35 }}>{need.title}</h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#4a4739' }}>{need.help}</p>
            </div>
          ))}
        </div>

        <NavyBand variant="marble">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 22 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(20px,2.6vw,30px)', color: '#f2ead8' }}>Write to the Alliance</span>
              <span style={{ fontSize: 17, color: '#c3cede' }}>{SITE.email}</span>
            </div>
            <Button href={`mailto:${SITE.email}`} variant="gold">Send an email</Button>
          </div>
        </NavyBand>
      </div>
    </>
  )
}
