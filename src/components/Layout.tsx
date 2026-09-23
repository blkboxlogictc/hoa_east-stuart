import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { useDoorwayTransition } from '../hooks/useDoorwayTransition'

/**
 * The Home route (all three "entrance" variants) is a full-viewport
 * experience with its own header and no footer, so it renders outside the
 * standard chrome rather than inside it.
 */
export function Layout() {
  useDoorwayTransition()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  if (isHome) {
    return <Outlet />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
