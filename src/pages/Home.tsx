import { useLocation } from 'react-router-dom'
import { HOME_VARIANT, type HomeVariant } from '../content/site'
import { Hall } from './home/Hall'
import { Parallax } from './home/Parallax'
import { Portico3D } from './home/Portico3D'

const VALID_VARIANTS: HomeVariant[] = ['hall', 'parallax', '3d']

function resolveVariant(search: string): HomeVariant {
  const override = new URLSearchParams(search).get('home')
  if (override && (VALID_VARIANTS as string[]).includes(override)) return override as HomeVariant
  return HOME_VARIANT
}

export function Home() {
  const { search } = useLocation()
  const variant = resolveVariant(search)

  if (variant === 'parallax') return <Parallax />
  if (variant === '3d') return <Portico3D />
  return <Hall />
}
