import { PageHeader } from '../components/PageHeader'
import { NeedsList } from '../components/NeedsList'
import { ConnectCard } from '../components/ConnectCard'

export function GetInvolved() {
  return (
    <section className="mx-auto max-w-[var(--container-app)] px-6 pb-20 sm:px-12">
      <PageHeader
        eyebrow="Get Involved"
        title="Partner With Us"
        intro="HOA is seeking partners who understand that strong programs require strong infrastructure. Early support will help the organization build compliance, governance, records, volunteer systems, program pilots, resident trust, and measurable outcomes from the beginning."
      />
      <div className="grid grid-cols-1 gap-14 pt-8 lg:grid-cols-2">
        <NeedsList />
        <div>
          <div className="mb-7 h-[220px] overflow-hidden rounded">
            <img src="/assets/involved.jpg" alt="A community gathering" className="h-full w-full object-cover" />
          </div>
          <ConnectCard />
        </div>
      </div>
    </section>
  )
}
