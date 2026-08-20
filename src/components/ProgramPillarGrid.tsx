import { PILLARS } from '../content/pillars'
import { Medallion } from './Medallion'

/** Full pillar cards used on the Programs page — three columns on desktop, matching Home's PillarGrid language. */
export function ProgramPillarGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PILLARS.map((pillar, i) => (
        <div key={pillar.title} className="frame-double rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <Medallion number={String(i + 1).padStart(2, '0')} className="mb-4" />
          <div className="mb-2.5 font-serif text-[18px] font-bold leading-snug text-[var(--color-navy)]">
            {pillar.title}
          </div>
          <div className="text-[14.5px] leading-relaxed text-[var(--color-text-muted)]">{pillar.longDesc}</div>
        </div>
      ))}
    </div>
  )
}
