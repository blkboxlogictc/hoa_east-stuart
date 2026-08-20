import { COMMITTEES } from '../content/governance'

export function CommitteeList() {
  return (
    <div className="mb-16 flex flex-col">
      {COMMITTEES.map((committee) => (
        <div key={committee.title} className="border-t border-[var(--color-border)] py-5.5">
          <div className="mb-2 text-[15.5px] font-bold text-[var(--color-navy)]">{committee.title}</div>
          <div className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">{committee.desc}</div>
        </div>
      ))}
    </div>
  )
}
