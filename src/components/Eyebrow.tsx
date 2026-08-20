import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  tone?: 'accent' | 'light'
  className?: string
}

const TONE_CLASS: Record<NonNullable<EyebrowProps['tone']>, string> = {
  accent: 'bg-[var(--color-navy)] text-[var(--color-gold-soft)]',
  light: 'bg-[var(--color-gold)] text-[var(--color-navy)]',
}

// Notch cut inward on each end so the label reads as a small heraldic ribbon/banner
// rather than a plain rectangle — fixed pixel notches keep the shape consistent
// whether the label is short ("404") or long (the hero's founding-initiative line).
const RIBBON_CLIP = 'polygon(0 50%, 14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%)'

export function Eyebrow({ children, tone = 'accent', className = '' }: EyebrowProps) {
  return (
    <div className={`mb-3 ${className}`}>
      <span
        className={`label-caps inline-block px-6 py-1.5 font-bold ${TONE_CLASS[tone]}`}
        style={{ clipPath: RIBBON_CLIP }}
      >
        {children}
      </span>
    </div>
  )
}
