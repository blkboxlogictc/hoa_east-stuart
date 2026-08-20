import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  tone?: 'accent' | 'light' | 'gold'
  className?: string
}

const TONE_CLASS: Record<NonNullable<EyebrowProps['tone']>, string> = {
  accent: 'text-[var(--color-accent)]',
  light: 'text-[var(--color-hero-eyebrow)]',
  gold: 'text-[var(--color-gold)]',
}

export function Eyebrow({ children, tone = 'accent', className = '' }: EyebrowProps) {
  return <div className={`label-caps mb-2.5 font-bold ${TONE_CLASS[tone]} ${className}`}>{children}</div>
}
