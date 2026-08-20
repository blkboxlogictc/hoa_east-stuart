import { PRIORITIES } from '../content/priorities'

export function PriorityList() {
  return (
    <div className="flex flex-col">
      {PRIORITIES.map((text, i) => (
        <div key={text} className="grid grid-cols-[40px_1fr] gap-5 border-t border-[var(--color-border)] py-5.5">
          <div className="font-serif text-[18px] font-bold text-[var(--color-navy)]">{i + 1}</div>
          <div className="text-[15.5px] leading-relaxed text-[var(--color-text-body)]">{text}</div>
        </div>
      ))}
    </div>
  )
}
