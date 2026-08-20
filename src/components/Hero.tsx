import { Brocade } from './Brocade'
import { Button } from './Button'
import { CornerFlourish } from './CornerFlourish'
import { Eyebrow } from './Eyebrow'

export function Hero() {
  return (
    <section className="relative grid min-h-[560px] grid-cols-1 overflow-hidden bg-[var(--color-navy)] md:grid-cols-[1.1fr_0.9fr]">
      <Brocade />
      <CornerFlourish corner="tl" className="m-3 hidden sm:block" />
      <CornerFlourish corner="br" className="m-3 hidden sm:block" />
      <div className="relative z-10 flex flex-col justify-center gap-6 px-7 py-14 sm:px-16 sm:py-24">
        <Eyebrow tone="light" className="mb-0">
          A Florida Nonprofit Corporation &middot; Founding Local Initiative
        </Eyebrow>
        <h1 className="m-0 font-serif text-[34px] font-bold leading-[1.12] text-[var(--color-surface)] sm:text-[48px]">
          Heritage &amp; Opportunity Alliance
        </h1>
        <p className="m-0 max-w-[560px] text-[19px] leading-relaxed text-[var(--color-hero-body)]">
          A community-rooted institution preserving identity, building opportunity, and organizing measurable community benefit.
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <Button to="/get-involved" variant="primary">
            Partner With Us
          </Button>
          <Button to="/programs" variant="outline-light">
            Explore Our Programs
          </Button>
        </div>
      </div>
      <div className="relative min-h-[280px] md:min-h-0">
        <img
          src="/assets/hero.jpg"
          alt="A residential street in East Stuart"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/50 via-transparent to-transparent" />
      </div>
    </section>
  )
}
