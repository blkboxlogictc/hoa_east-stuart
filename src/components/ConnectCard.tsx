import { SITE } from '../content/site'
import { Button } from './Button'
import { OrnamentalDivider } from './OrnamentalDivider'

export function ConnectCard() {
  return (
    <div id="connect" className="frame-double scroll-mt-24 rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
      <div className="mb-2 font-serif text-[19px] font-bold text-[var(--color-navy)]">Ways to Connect</div>
      <OrnamentalDivider className="mb-6" />
      <div className="mb-6 flex flex-col gap-3">
        <Button href={`mailto:${SITE.email}?subject=Donation%20Inquiry`} variant="primary" block>
          Donate
        </Button>
        <Button href={`mailto:${SITE.email}?subject=Partnership%20Inquiry`} variant="outline-dark" block>
          Become a Partner
        </Button>
        <Button href={`mailto:${SITE.email}?subject=Volunteer%20Interest`} variant="outline-dark" block>
          Volunteer
        </Button>
      </div>
      <div className="border-t border-[var(--color-border)] pt-5">
        <div className="mb-1.5 text-[13px] text-[var(--color-text-soft)]">Contact / join the mailing list</div>
        <a href={`mailto:${SITE.email}`} className="text-[15px] font-semibold">
          {SITE.email}
        </a>
      </div>
    </div>
  )
}
