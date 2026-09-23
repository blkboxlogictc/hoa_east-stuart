import { PageSlab } from '../components/PageSlab'
import { Button } from '../components/Button'
import { SITE } from '../content/site'
import { EVENTS } from '../content/events'

export function Events() {
  return (
    <>
      <PageSlab
        eyebrow="Updates"
        title="Events"
        lede="Dates are announced once partners and venues are confirmed. These convenings are in preparation now."
      />
      <div data-body style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {EVENTS.map((event) => (
          <article
            key={event.title}
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0,96px) minmax(0,1fr)', gap: 20, alignItems: 'start', background: '#fffdf8', border: '1px solid #ddd2b4', padding: 22 }}
          >
            {event.ongoing ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, aspectRatio: '1', border: '1px solid #10243b' }}>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 13, letterSpacing: '.14em', color: '#10243b' }}>ONGOING</span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, aspectRatio: '1', background: '#10243b' }}>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', color: '#d8bc7f' }}>DATE</span>
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 20, color: '#f2ead8' }}>{event.date ?? 'TBA'}</span>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#8a6a2c' }}>{event.category}</span>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 18, lineHeight: 1.35, color: '#10243b' }}>{event.title}</h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#4a4739' }}>{event.description}</p>
            </div>
          </article>
        ))}

        <div style={{ position: 'relative', marginTop: 24, background: '#10243b', padding: 'clamp(26px,4vw,40px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 18, color: '#f2ead8' }}>Be first to hear when dates are set</span>
            <span style={{ fontSize: 15, color: '#b7c4d6' }}>We’ll write to you once partners and venues are confirmed.</span>
          </div>
          <Button href={`mailto:${SITE.email}?subject=Notify%20me%20of%20events`} variant="gold">Ask to be notified</Button>
        </div>
      </div>
    </>
  )
}
