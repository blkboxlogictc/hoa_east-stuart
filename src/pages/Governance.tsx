import { PageHeader } from '../components/PageHeader'
import { InfoCardGrid } from '../components/InfoCardGrid'
import { CommitteeList } from '../components/CommitteeList'
import { AccountabilityBox } from '../components/AccountabilityBox'
import { OrnamentalDivider } from '../components/OrnamentalDivider'

export function Governance() {
  return (
    <section className="mx-auto max-w-[var(--container-app)] px-6 pb-20 sm:px-12">
      <PageHeader
        eyebrow="Governance"
        title="How HOA Is Governed"
        intro="HOA is structured as an umbrella nonprofit institution. The Board governs, officers administer authorized work, committees organize and report, advisory participants provide community perspective, and programs operate through written charters and measurable work plans. Full governance terms are set out in the corporation's Bylaws, adopted by the Board of Directors."
      />
      <div className="pt-8">
        <InfoCardGrid />

        <h2 className="m-0 mb-3 font-serif text-[22px] font-bold text-[var(--color-navy)] sm:text-[24px]">
          Standing Committees
        </h2>
        <OrnamentalDivider className="mb-7" />
        <CommitteeList />

        <h2 className="m-0 mb-3 font-serif text-[22px] font-bold text-[var(--color-navy)] sm:text-[24px]">
          Our Accountability Commitments
        </h2>
        <OrnamentalDivider className="mb-7" />
        <AccountabilityBox />
      </div>
    </section>
  )
}
