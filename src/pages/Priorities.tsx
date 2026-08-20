import { PageHeader } from '../components/PageHeader'
import { PriorityList } from '../components/PriorityList'

export function Priorities() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pb-20 sm:px-12">
      <PageHeader
        eyebrow="First 90 Days"
        title="Immediate 90-Day Priorities"
        intro="The founding priorities that turn HOA's organizing work into a functioning institution."
      />
      <div className="pt-6">
        <PriorityList />
      </div>
    </section>
  )
}
