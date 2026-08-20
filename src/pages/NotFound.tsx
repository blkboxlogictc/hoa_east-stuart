import { Eyebrow } from '../components/Eyebrow'
import { OrnamentalDivider } from '../components/OrnamentalDivider'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pb-20 pt-16 text-center sm:px-12">
      <Eyebrow className="text-center">404</Eyebrow>
      <h1 className="m-0 font-serif text-[34px] font-bold text-[var(--color-navy)] sm:text-[40px]">Page Not Found</h1>
      <OrnamentalDivider align="center" className="my-5" />
      <p className="mx-auto mb-8 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-text-muted)]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Button to="/" variant="primary">
        Return Home
      </Button>
    </section>
  )
}
