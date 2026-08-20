import { PageHeader } from '../components/PageHeader'
import { ProgramPillarGrid } from '../components/ProgramPillarGrid'

export function Programs() {
  return (
    <section className="mx-auto max-w-[var(--container-app)] px-6 pb-20 sm:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
        <PageHeader
          eyebrow="Programs"
          title="Core Program Pillars"
          intro="HOA is structured as an umbrella nonprofit institution organizing resident engagement, resource navigation, and measurable community benefit across six program pillars."
        />
        <div className="aspect-square overflow-hidden rounded lg:mt-16 lg:self-start">
          <img
            src="/assets/programs.jpg"
            alt="A community resource clinic in progress"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pt-8">
        <ProgramPillarGrid />
      </div>
    </section>
  )
}
