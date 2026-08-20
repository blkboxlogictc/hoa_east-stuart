import { UPDATES, UPDATES_EDITION } from '../content/updates'

export function UpdatesTimeline() {
  return (
    <>
      <div className="mb-11 flex gap-5">
        <div className="w-[3px] rounded-sm bg-[var(--color-accent)]" />
        <div>
          <div className="label-caps mb-1.5 text-[13px] font-semibold text-[var(--color-label-muted)]">
            {UPDATES_EDITION.date}
          </div>
          <div className="font-serif text-[20px] font-bold text-[var(--color-navy)]">{UPDATES_EDITION.title}</div>
        </div>
      </div>

      <div className="flex flex-col">
        {UPDATES.map((text) => (
          <div key={text} className="flex gap-4 border-t border-[var(--color-border)] py-4.5">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
            <div className="text-[15.5px] leading-relaxed text-[var(--color-text-body)]">{text}</div>
          </div>
        ))}
      </div>
    </>
  )
}
