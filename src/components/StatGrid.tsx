const STATS = [
  { label: 'Legal Status', value: 'Florida nonprofit corporation' },
  { label: 'Federal ID', value: 'EIN secured' },
  { label: 'Governance', value: 'Five voting directors' },
  { label: 'Founding Initiative', value: 'Voice of East Stuart' },
  { label: 'Tax-Exempt Status', value: '501(c)(3) application preparation underway' },
]

export function StatGrid() {
  return (
    <div className="frame-double mb-20 grid grid-cols-1 gap-6 rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:grid-cols-2 lg:grid-cols-5">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <div className="label-caps mb-1.5 text-[11px] text-[var(--color-label-muted)]">{stat.label}</div>
          <div className="text-[15px] font-semibold text-[var(--color-navy)]">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}
