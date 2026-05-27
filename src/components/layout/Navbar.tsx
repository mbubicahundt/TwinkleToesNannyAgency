import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { locations } from '@/data/locations'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Rates & Services', children: [
    { label: 'Rates & Pricing', path: '/rates' },
    { label: 'Nanny Services', path: null },
    { label: 'Cancellation Policy', path: null },
  ]},
  { label: 'Get Started', children: [
    { label: 'For Families', path: null },
    { label: 'Family Registration', path: null },
  ]},
  { label: 'Become a Nanny', path: '/become-a-nanny' },
  { label: 'Locations', children: locations.map(l => ({ label: `${l.city}, ${l.state}`, path: `/${l.slug}` })) },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact Us', path: null },
]

const demo = (e: React.MouseEvent) => { e.preventDefault(); alert('Available in the full build.') }

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  const slug = pathname.split('/')[1] || null
  const reservedPaths = ['about', 'rates', 'faqs', 'become-a-nanny']
  const isLocationSlug = slug && !reservedPaths.includes(slug)
  const currentLoc = isLocationSlug ? locations.find(l => l.slug === slug) : null
  const calendly = currentLoc?.calendlyUrl ?? locations[0].calendlyUrl

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); setMobileOpenMenu(null) }, [pathname])

  const isActive = (path: string | null) => path && pathname === path

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white shadow-nav">
      {/* Teal top accent stripe */}
      <div className="h-1 bg-tt-teal w-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center h-14 gap-4">

          {/* Logo — left anchor */}
          <Link to="/" className="flex-shrink-0">
            <img src="https://twinkletoesnanny.com/img/logo-twinkletoes.png"
              alt="Twinkle Toes Nanny Agency" className="h-9 w-auto" />
          </Link>

          {/* Nav — centered flex with even spacing */}
          <nav className="hidden xl:flex items-center justify-center flex-1 gap-0.5">
            {NAV_LINKS.map(item =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={cn(
                      'flex items-center gap-0.5 px-2.5 py-2 text-[12.5px] font-medium whitespace-nowrap transition-colors rounded-md',
                      openMenu === item.label ? 'text-tt-teal bg-tt-teal-light' : 'text-gray-600 hover:text-tt-teal hover:bg-tt-teal-light'
                    )}>
                    {item.label}
                    <ChevronDown className={cn('w-3 h-3 transition-transform', openMenu === item.label && 'rotate-180')} />
                  </button>
                  {openMenu === item.label && (
                    <div className="absolute top-full left-0 mt-1 min-w-[190px] w-max bg-white rounded-xl shadow-dropdown border border-tt-lavender-mid py-1.5 z-50">
                      {item.children.map(child =>
                        child.path ? (
                          <Link key={child.label} to={child.path}
                            className={cn(
                              'block px-4 py-2 text-sm transition-colors',
                              pathname === child.path ? 'text-tt-teal font-semibold bg-tt-teal-light' : 'text-gray-700 hover:bg-tt-teal-light hover:text-tt-teal'
                            )}
                            onClick={() => setOpenMenu(null)}>
                            {child.label}
                          </Link>
                        ) : (
                          <a key={child.label} href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-tt-teal-light hover:text-tt-teal transition-colors"
                            onClick={e => { demo(e); setOpenMenu(null) }}>
                            {child.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.path ? (
                <Link key={item.label} to={item.path}
                  className={cn(
                    'px-2.5 py-2 text-[12.5px] font-medium whitespace-nowrap transition-colors rounded-md',
                    isActive(item.path) ? 'text-tt-teal font-semibold bg-tt-teal-light' : 'text-gray-600 hover:text-tt-teal hover:bg-tt-teal-light'
                  )}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href="#" onClick={demo}
                  className="px-2.5 py-2 text-[12.5px] font-medium text-gray-600 hover:text-tt-teal hover:bg-tt-teal-light whitespace-nowrap transition-colors rounded-md">
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA — right anchor */}
          <a href={calendly} target="_blank" rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center flex-shrink-0 bg-tt-teal hover:bg-tt-teal-dark text-white text-[12.5px] font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
            Request Consultation
          </a>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden ml-auto p-2 rounded-md text-gray-500 hover:text-tt-teal hover:bg-tt-teal-light transition-colors"
            aria-label="Toggle navigation">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-tt-lavender bg-white shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="max-w-[1400px] mx-auto px-4 py-3 space-y-0.5">
            <a href={calendly} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-tt-teal hover:bg-tt-teal-dark text-white font-bold text-sm px-4 py-3 rounded-lg transition-colors mb-3">
              Request Consultation
            </a>
            {NAV_LINKS.map(item =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-tt-teal-light rounded-md">
                    {item.label}
                    <ChevronDown className={cn('w-4 h-4 text-gray-400 transition-transform', mobileOpenMenu === item.label && 'rotate-180')} />
                  </button>
                  {mobileOpenMenu === item.label && (
                    <div className="ml-4 pl-3 border-l-2 border-tt-teal-light space-y-0.5 mt-0.5 mb-1">
                      {item.children.map(child =>
                        child.path ? (
                          <Link key={child.label} to={child.path}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-tt-teal">{child.label}</Link>
                        ) : (
                          <a key={child.label} href="#" onClick={demo}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-tt-teal">{child.label}</a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.path ? (
                <Link key={item.label} to={item.path}
                  className={cn(
                    'block px-3 py-2.5 text-sm font-medium rounded-md',
                    isActive(item.path) ? 'text-tt-teal bg-tt-teal-light font-semibold' : 'text-gray-700 hover:bg-tt-teal-light'
                  )}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href="#" onClick={demo}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-tt-teal-light rounded-md">
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
