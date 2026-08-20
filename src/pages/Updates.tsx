import { PageHeader } from '../components/PageHeader'
import { UpdatesTimeline } from '../components/UpdatesTimeline'

export function Updates() {
  return (
    <section className="mx-auto max-w-[820px] px-6 pb-20 sm:px-12">
      <PageHeader eyebrow="Updates" title="Founding Progress" />
      <div className="pt-2">
        <UpdatesTimeline />
      </div>
    </section>
  )
}
