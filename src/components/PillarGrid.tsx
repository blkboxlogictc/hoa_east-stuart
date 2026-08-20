import { Link } from 'react-router-dom'
import { PILLARS } from '../content/pillars'

/** Short-form pillar cards used on Home, linking through to the full Programs page. */
export function PillarGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PILLARS.map((pillar) => (
        <Link
          key={pillar.title}
          to="/programs"
          className="frame-double block rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6 no-underline hover:border-[var(--color-accent)] hover:no-underline"
        >
          <div className="mb-2.5 font-serif text-[16px] font-bold leading-snug text-[var(--color-navy)]">
            {pillar.title}
          </div>
          <div className="text-[14px] leading-relaxed text-[var(--color-text-soft)]">{pillar.shortDesc}</div>
        </Link>
      ))}
    </div>
  )
}
