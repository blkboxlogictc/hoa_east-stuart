import { PILLARS } from '../content/pillars'
import { Medallion } from './Medallion'

/** Full numbered pillar list used on the Programs page. */
export function NumberedList() {
  return (
    <div className="mb-16 flex flex-col gap-7">
      {PILLARS.map((pillar, i) => (
        <div key={pillar.title} className="grid grid-cols-[52px_1fr] gap-5 border-t border-[var(--color-border)] py-7">
          <Medallion number={String(i + 1).padStart(2, '0')} />
          <div>
            <div className="mb-2.5 font-serif text-[19px] font-bold text-[var(--color-navy)]">{pillar.title}</div>
            <div className="text-[15.5px] leading-relaxed text-[var(--color-text-muted)]">{pillar.longDesc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
