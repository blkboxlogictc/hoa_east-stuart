export const SITE = {
  name: 'Heritage & Opportunity Alliance',
  shortName: 'HOA',
  tagline: 'Voice of East Stuart',
  email: 'voiceofeaststuart@gmail.com',
  footerTagline: 'Preserving heritage. Building opportunity.',
  copyright: '© 2026 Heritage & Opportunity Alliance, Inc. · Voice of East Stuart, Founding Local Initiative',
}

export type HomeVariant = 'hall' | 'parallax' | '3d'

export const HOME_VARIANT: HomeVariant = 'hall'

export interface NavLink {
  label: string
  to: string
}

export interface NavGroup {
  label: string
  key: 'about' | 'updates'
  links: NavLink[]
}

/** Single links that sit directly in the nav (not inside a dropdown). */
export const NAV_HALL: NavLink = { label: 'The Hall', to: '/' }
export const NAV_RESOURCES: NavLink = { label: 'Resources', to: '/toolbox' }
export const NAV_CTA: NavLink = { label: 'Enter / Join', to: '/get-involved' }

export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'About Us',
    key: 'about',
    links: [
      { label: 'Governance', to: '/governance' },
      { label: 'Committees', to: '/committees' },
      { label: 'Programs', to: '/programs' },
      { label: 'Theory of Change', to: '/theory-of-change' },
      { label: 'Sponsors', to: '/sponsors' },
    ],
  },
  {
    label: 'Updates',
    key: 'updates',
    links: [
      { label: 'News', to: '/news' },
      { label: 'Events', to: '/events' },
    ],
  },
]

export const FOOTER_ABOUT_LINKS: NavLink[] = NAV_GROUPS[0].links
export const FOOTER_UPDATES_LINKS: NavLink[] = [
  ...NAV_GROUPS[1].links,
  { label: 'The Toolbox', to: '/toolbox' },
  { label: 'The Hall', to: '/' },
]
