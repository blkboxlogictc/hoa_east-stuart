import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'dark' | 'gold' | 'outline' | 'outline-light'

interface ButtonProps {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  className?: string
}

const VARIANT_STYLE: Record<Variant, React.CSSProperties> = {
  dark: { color: '#faf7ef', background: '#10243b', border: '1px solid transparent' },
  gold: { color: '#0d1f33', background: '#d8bc7f', border: '1px solid transparent' },
  outline: { color: '#10243b', background: 'transparent', border: '1px solid #cdbf9c' },
  'outline-light': { color: '#e8d9b4', background: 'transparent', border: '1px solid rgba(216,188,127,.45)' },
}

const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 50,
  padding: '0 28px',
  fontFamily: 'var(--font-cinzel)',
  fontSize: 12,
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
}

export function Button({ to, href, children, variant = 'dark', className = '' }: ButtonProps) {
  const style = { ...baseStyle, ...VARIANT_STYLE[variant] }
  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  )
}
