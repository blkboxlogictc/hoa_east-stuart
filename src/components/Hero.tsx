import { Brocade } from './Brocade'
import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative grid min-h-[560px] grid-cols-1 overflow-hidden bg-[var(--color-navy)] md:grid-cols-[1.1fr_0.9fr]">
      <Brocade />
      <div className="relative z-10 flex flex-col justify-center gap-6 px-7 py-14 sm:px-16 sm:py-24">
        <div className="label-caps text-[13px] font-semibold text-[var(--color-hero-eyebrow)]">
          A Florida Nonprofit Corporation &middot; Founding Local Initiative
        </div>
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
        <div className="absolute inset-0 flex items-center justify-center border-none bg-[repeating-linear-gradient(135deg,#1c2c52,#1c2c52_10px,#182548_10px,#182548_20px)] p-6 text-center text-[13px] tracking-[0.03em] text-[var(--color-hero-eyebrow)]">
          Drop a photo of East Stuart / community here (assets/hero.jpg)
        </div>
      </div>
    </section>
  )
}
