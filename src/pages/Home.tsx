import { Hero } from '../components/Hero'
import { TaglineGrid } from '../components/TaglineGrid'
import { StatGrid } from '../components/StatGrid'
import { PillarGrid } from '../components/PillarGrid'
import { QuoteBanner } from '../components/QuoteBanner'
import { Eyebrow } from '../components/Eyebrow'
import { OrnamentalDivider } from '../components/OrnamentalDivider'

export function Home() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-[var(--container-app)] px-6 pb-16 pt-20 sm:px-12">
        <TaglineGrid />

        <div className="mb-20 grid grid-cols-1 gap-14 sm:grid-cols-2">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <p className="mb-4.5 text-[17px] leading-relaxed text-[var(--color-text-body)]">
              Heritage &amp; Opportunity Alliance, Inc. (HOA) is a newly formed, community-rooted Florida nonprofit
              corporation created to help residents preserve community identity, strengthen families, access
              opportunity, and participate meaningfully in decisions that shape their future.
            </p>
            <p className="m-0 text-[17px] leading-relaxed text-[var(--color-text-body)]">
              HOA begins with Voice of East Stuart as its founding local initiative — a durable bridge among
              residents, public agencies, nonprofits, churches, workforce systems, schools, businesses, artists,
              developers, funders, and other community partners.
            </p>
          </div>
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <p className="mb-4.5 text-[17px] leading-relaxed text-[var(--color-text-body)]">
              Heritage &amp; Opportunity Alliance organizes residents, preserves community identity, connects people
              to resources and opportunities, and helps ensure public and private investment creates measurable
              benefits for historically impacted communities, especially East Stuart.
            </p>
            <p className="m-0 text-[17px] leading-relaxed text-[var(--color-text-body)]">
              We are not forming to duplicate existing organizations. We are building the community infrastructure
              needed to connect residents to trusted services, coordinate partnerships, document outcomes, preserve
              cultural memory, and ensure investment produces measurable community benefit.
            </p>
          </div>
        </div>

        <StatGrid />

        <div className="mb-5">
          <Eyebrow>Core Program Pillars</Eyebrow>
          <h2 className="m-0 mb-3 font-serif text-[26px] font-bold text-[var(--color-navy)] sm:text-[30px]">
            Six ways we organize community power
          </h2>
          <OrnamentalDivider className="mb-8" />
        </div>
        <PillarGrid />
      </div>

      <QuoteBanner />
    </>
  )
}
