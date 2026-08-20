import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline-light' | 'outline-dark'

interface ButtonProps {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  block?: boolean
  className?: string
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-surface)] hover:bg-[var(--color-accent-hover)]',
  'outline-light':
    'bg-transparent border border-[#5a6f9e] text-[var(--color-surface)] font-semibold hover:border-[var(--color-surface)]',
  'outline-dark':
    'bg-transparent border border-[var(--color-navy)] text-[var(--color-navy)] font-semibold hover:bg-[var(--color-navy)] hover:text-[var(--color-surface)]',
}

export function Button({ to, href, children, variant = 'primary', block = false, className = '' }: ButtonProps) {
  const classes = `inline-block cursor-pointer font-bold text-[15px] px-7 py-3.5 rounded-[3px] transition-colors no-underline hover:no-underline ${VARIANT_CLASS[variant]} ${block ? 'block text-center w-full' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
