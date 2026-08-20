const ITEMS = [
  { title: 'Heritage', body: 'is what we protect.' },
  { title: 'Opportunity', body: 'is what we build.' },
  { title: 'Alliance', body: 'is how we do it together.' },
]

export function TaglineGrid() {
  return (
    <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
      {ITEMS.map((item) => (
        <div key={item.title} className="border-t-[3px] border-[var(--color-navy)] pt-4">
          <div className="mb-2 font-serif text-[20px] font-bold text-[var(--color-navy)]">{item.title}</div>
          <div className="text-[16px] leading-relaxed text-[var(--color-text-muted)]">{item.body}</div>
        </div>
      ))}
    </div>
  )
}
