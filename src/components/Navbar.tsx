import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5 bg-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
        <a href='#hero' className='text-xl font-bold gradient-text'>
          KF
        </a>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-gray-400 hover:text-white animated-underline transition-colors duration-300'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='md:hidden text-gray-400 hover:text-white transition-colors'
          aria-label='Menu'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            {mobileOpen ? (
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path d='M3 12h18M3 6h18M3 18h18' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-slide-down'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className='block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all'
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
