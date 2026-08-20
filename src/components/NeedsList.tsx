import { NEEDS } from '../content/involvement'

export function NeedsList() {
  return (
    <div className="flex flex-col gap-5">
      {NEEDS.map((need) => (
        <div key={need.title} className="border-t border-[var(--color-border)] pt-4.5">
          <div className="mb-1.5 text-[15px] font-bold text-[var(--color-navy)]">{need.title}</div>
          <div className="text-[14.5px] leading-relaxed text-[var(--color-text-muted)]">{need.help}</div>
        </div>
      ))}
    </div>
  )
}
