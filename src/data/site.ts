import type { NavLink, Social } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
]

export const socials: Social[] = [
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: 'dribbble',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
  },
]

export const siteConfig = {
  name: 'Khattab Yahaya',
  tagline: "I'm Khattab Yahaya",
  role: 'Product Designer',
  email: 'hello@khattabyahaya.com',
  location: 'Lagos, Nigeria',
  availability: 'Available for work',
}
