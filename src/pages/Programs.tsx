import { PageHeader } from '../components/PageHeader'
import { NumberedList } from '../components/NumberedList'

export function Programs() {
  return (
    <section className="mx-auto max-w-[var(--container-app)] px-6 pb-20 sm:px-12">
      <PageHeader
        eyebrow="Programs"
        title="Core Program Pillars"
        intro="HOA is structured as an umbrella nonprofit institution organizing resident engagement, resource navigation, and measurable community benefit across six program pillars."
      />
      <div className="pt-6">
        <NumberedList />
      </div>
      <div className="h-[280px] overflow-hidden rounded bg-[repeating-linear-gradient(135deg,#e9e5d8,#e9e5d8_10px,#f2efe4_10px,#f2efe4_20px)]" />
    </section>
  )
}
