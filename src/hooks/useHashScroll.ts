import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the element matching the URL hash after route changes (e.g. /get-involved#connect). */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname])
}
