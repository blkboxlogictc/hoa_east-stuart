import { PageSlab } from '../components/PageSlab'
import { THEORY_OF_CHANGE, THEORY_OF_CHANGE_CAPTION } from '../content/theoryOfChange'

export function TheoryOfChange() {
  return (
    <>
      <PageSlab eyebrow="About Us · Draft, pending Board adoption" title="Theory of Change" />
      <div data-body style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <ol
          style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: 0, border: '1px solid #ddd2b4', background: '#fffdf8' }}
        >
          {THEORY_OF_CHANGE.map((cell, i) => (
            <li
              key={cell.numeral}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: '28px 24px',
                borderRight: i < THEORY_OF_CHANGE.length - 1 ? '1px solid #ddd2b4' : undefined,
                borderBottom: '1px solid #ddd2b4',
                background: cell.inverted ? '#10243b' : undefined,
              }}
            >
              <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 30, color: cell.inverted ? '#d8bc7f' : '#c4ab77', lineHeight: 1 }}>{cell.numeral}</span>
              <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: cell.inverted ? '#d8bc7f' : '#8a6a2c' }}>
                {cell.label}
              </span>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: cell.inverted ? '#e3e8ef' : '#2b2a24' }}>{cell.body}</p>
            </li>
          ))}
        </ol>
        <p style={{ margin: 0, maxWidth: '68ch', fontSize: 15, lineHeight: 1.7, color: '#6b6656' }}>{THEORY_OF_CHANGE_CAPTION}</p>
      </div>
    </>
  )
}
