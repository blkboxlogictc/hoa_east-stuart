import { PageSlab } from '../components/PageSlab'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <>
      <PageSlab eyebrow="Error" title="Page Not Found" lede="The page you’re looking for doesn’t exist or has moved." />
      <div data-body style={{ maxWidth: 1120, width: '100%', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,56px)', textAlign: 'center' }}>
        <Button to="/" variant="dark">Return home</Button>
      </div>
    </>
  )
}
