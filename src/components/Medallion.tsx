interface MedallionProps {
  number: number | string
  size?: 'md' | 'sm'
  className?: string
}

const SIZE_CLASS: Record<NonNullable<MedallionProps['size']>, { ring: string; text: string }> = {
  md: { ring: 'h-12 w-12', text: 'text-[17px]' },
  sm: { ring: 'h-10 w-10', text: 'text-[15px]' },
}

/** Gold-ringed circular numeral badge — replaces bare numerals in numbered lists, echoing the crest's ring. */
export function Medallion({ number, size = 'md', className = '' }: MedallionProps) {
  const { ring, text } = SIZE_CLASS[size]
  return (
    <div
      className={`relative flex flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)] ${ring} ${className}`}
    >
      <div className="absolute inset-[3px] rounded-full border border-[var(--color-navy)]/15" />
      <span className={`relative font-serif font-bold text-[var(--color-navy)] ${text}`}>{number}</span>
    </div>
  )
}
