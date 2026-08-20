import { PILLARS } from '../content/pillars'

/** Full numbered pillar list used on the Programs page. */
export function NumberedList() {
  return (
    <div className="mb-16 flex flex-col gap-7">
      {PILLARS.map((pillar, i) => (
        <div key={pillar.title} className="grid grid-cols-[44px_1fr] gap-5 border-t border-[var(--color-border)] py-7">
          <div className="font-serif text-[22px] font-bold text-[var(--color-accent)]">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div>
            <div className="mb-2.5 font-serif text-[19px] font-bold text-[var(--color-navy)]">{pillar.title}</div>
            <div className="text-[15.5px] leading-relaxed text-[var(--color-text-muted)]">{pillar.longDesc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
