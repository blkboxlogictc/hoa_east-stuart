import { Brocade } from './Brocade'
import { Button } from './Button'
import { OrnamentalDivider } from './OrnamentalDivider'

export function QuoteBanner() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-navy)] px-6 py-14 text-center sm:px-12">
      <Brocade />
      <div className="relative z-10">
        <OrnamentalDivider align="center" className="mb-6" />
        <blockquote className="mx-auto mb-6 max-w-[720px] font-serif text-[15px] italic tracking-[0.02em] text-[#eef0f5] sm:text-[17px]">
          &ldquo;East Stuart is not against progress. East Stuart is asking for structure, access, communication,
          rootedness, and measurable community benefit. Heritage &amp; Opportunity Alliance exists to help make that
          possible.&rdquo;
        </blockquote>
        <Button to="/get-involved" variant="primary">
          Join Us
        </Button>
      </div>
    </div>
  )
}
