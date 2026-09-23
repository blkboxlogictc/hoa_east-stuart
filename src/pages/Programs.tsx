import { Link } from 'react-router-dom'
import { PageSlab } from '../components/PageSlab'
import { PILLARS } from '../content/pillars'

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI']

export function Programs() {
  return (
    <>
      <PageSlab
        eyebrow="About Us · Six pillars, one structure"
        title="Programs"
        lede="The Heritage & Opportunity Alliance organizes East Stuart residents, institutions, and partners around six pillars of work. Walk the hall to see what each one carries."
      />
      <div
        data-body
        style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: 18 }}
      >
        {PILLARS.map((pillar, i) => (
          <Link
            key={pillar.title}
            to={`/#pillar-${i + 1}`}
            style={{ display: 'flex', flexDirection: 'column', gap: 10, border: '1px solid #ddd2b4', background: '#fffdf8', padding: 24, color: 'inherit', textDecoration: 'none' }}
          >
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 26, color: '#c4ab77', lineHeight: 1 }}>{NUMERALS[i]}</span>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-cinzel)', fontWeight: 600, fontSize: 17, color: '#10243b', lineHeight: 1.35 }}>{pillar.title}</h2>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.68, color: '#4a4739' }}>{pillar.longDesc}</p>
            <span style={{ marginTop: 'auto', paddingTop: 6, fontFamily: 'var(--font-cinzel)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a6a2c' }}>
              Enter the hall →
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
