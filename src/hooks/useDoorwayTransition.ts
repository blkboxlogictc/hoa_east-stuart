import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const EASE = 'cubic-bezier(.2,.7,.2,1)'

/**
 * Scrolls to the top (or a hash target) on navigation, and — on real route
 * changes only — plays the "doorway" open animation on the page's
 * [data-slab]/[data-body] elements, mirroring the design reference's
 * doorway() behavior.
 */
export function useDoorwayTransition() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pathChanged = prevPathname.current !== pathname
    prevPathname.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0 })
    } else {
      const el = document.getElementById(hash.slice(1))
      el?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' })
    }

    if (pathChanged && !reduced) {
      const slab = document.querySelector<HTMLElement>('[data-slab]')
      const body = document.querySelector<HTMLElement>('[data-body]')
      slab?.animate(
        [{ clipPath: 'inset(0 50% 0 50%)', opacity: 0.4 }, { clipPath: 'inset(0 0% 0 0%)', opacity: 1 }],
        { duration: 700, easing: EASE },
      )
      body?.animate(
        [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }],
        { duration: 620, delay: 220, easing: EASE, fill: 'backwards' },
      )
    }
  }, [pathname, hash])
}
