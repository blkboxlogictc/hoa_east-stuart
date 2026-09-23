import { PageSlab } from '../components/PageSlab'
import { NavyBand } from '../components/NavyBand'
import { Button } from '../components/Button'
import { SITE } from '../content/site'
import { SPONSORS_EMPTY_STATE, SPONSOR_TIERS } from '../content/sponsors'

export function Sponsors() {
  return (
    <>
      <PageSlab
        eyebrow="About Us"
        title="Founding Sponsors"
        lede="The founding sponsorship campaign is open. Sponsors are recognized here once agreements are executed and Board-approved."
      />
      <div data-body style={{ display: 'flex', flexDirection: 'column' }}>
        <NavyBand>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c4ab77' }}>Ways to sponsor</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(230px,100%),1fr))', gap: 16 }}>
              {SPONSOR_TIERS.map((tier) => (
                <div key={tier.name} style={{ border: '1px solid rgba(216,188,127,.35)', padding: '28px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 18, color: '#f2ead8' }}>{tier.name}</span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#b7c4d6' }}>{tier.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </NavyBand>

        <div style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 'clamp(20px,2.4vw,28px)', color: '#10243b' }}>Recognized sponsors</h2>
          <div style={{ border: '1px dashed #cdbf9c', padding: '36px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 20, color: '#6b6656' }}>
            {SPONSORS_EMPTY_STATE}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <Button to="/get-involved" variant="dark">See what we need</Button>
            <a href={`mailto:${SITE.email}`} style={{ fontSize: 16, color: '#8a6a2c' }}>{SITE.email}</a>
          </div>
        </div>
      </div>
    </>
  )
}
