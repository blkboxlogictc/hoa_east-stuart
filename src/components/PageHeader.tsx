import type { ReactNode } from 'react'
import { CornerFlourish } from './CornerFlourish'
import { Eyebrow } from './Eyebrow'
import { OrnamentalDivider } from './OrnamentalDivider'

interface PageHeaderProps {
  eyebrow: string
  title: string
  intro?: ReactNode
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="relative pb-4 pt-16">
      <CornerFlourish corner="tl" className="hidden sm:block" />
      <CornerFlourish corner="br" className="hidden sm:block" />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="m-0 font-serif text-[34px] font-bold text-[var(--color-navy)] sm:text-[40px]">{title}</h1>
      <OrnamentalDivider className="my-5" />
      {intro && <p className="m-0 max-w-[720px] text-[17px] leading-relaxed text-[var(--color-text-muted)]">{intro}</p>}
    </div>
  )
}
