import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'
import { spritLabUrl } from '../../data/content'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/publications', label: 'Publications' },
  { to: '/research', label: 'Research' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[var(--color-teal)]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-4">
        <NavLink
          to="/"
          className="font-serif text-lg font-normal text-white hover:text-white/80 transition-colors"
        >
          Dr. Susil Kumar Mohanty
        </NavLink>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white border-b-2 border-white pb-0.5'
                    : 'text-white/75 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={spritLabUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SPriT Lab (opens in new tab)"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            SPriT Lab <ExternalLink size={12} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-white/80 hover:text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/20 bg-[var(--color-teal-hover)] px-4 py-3 flex flex-col gap-1"
        >
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={spritLabUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SPriT Lab (opens in new tab)"
            className="block rounded px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
          >
            SPriT Lab ↗
          </a>
        </nav>
      )}
    </header>
  )
}
