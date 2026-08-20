import { ACCOUNTABILITY_COMMITMENTS } from '../content/governance'
import { Brocade } from './Brocade'

export function AccountabilityBox() {
  return (
    <div className="relative overflow-hidden rounded bg-[var(--color-navy)] p-8 sm:p-10">
      <Brocade />
      <ul className="relative z-10 m-0 flex flex-col gap-3.5 pl-5">
        {ACCOUNTABILITY_COMMITMENTS.map((item) => (
          <li key={item} className="text-[15px] leading-relaxed text-[var(--color-hero-body)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
