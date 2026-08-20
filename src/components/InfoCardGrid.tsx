import { GOVERNANCE_CARDS } from '../content/governance'

export function InfoCardGrid() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {GOVERNANCE_CARDS.map((card) => (
        <div key={card.title} className="frame-double rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
          <div className="mb-3.5 font-serif text-[17px] font-bold text-[var(--color-navy)]">{card.title}</div>
          <div className="text-[14.5px] leading-relaxed text-[var(--color-text-muted)]">
            {card.body.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
