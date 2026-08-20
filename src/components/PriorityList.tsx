import { PRIORITIES } from '../content/priorities'
import { Medallion } from './Medallion'

export function PriorityList() {
  return (
    <div className="flex flex-col">
      {PRIORITIES.map((text, i) => (
        <div key={text} className="grid grid-cols-[52px_1fr] items-start gap-5 border-t border-[var(--color-border)] py-5.5">
          <Medallion number={i + 1} size="sm" />
          <div className="text-[15.5px] leading-relaxed text-[var(--color-text-body)]">{text}</div>
        </div>
      ))}
    </div>
  )
}
