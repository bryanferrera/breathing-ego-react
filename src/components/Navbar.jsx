import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* ── Main Navbar Bar ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#1a1918]/60 backdrop-blur-md border-b border-white/10 shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
        style={{ padding: '1.25rem 0' }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: '#f5f0e8',
            }}
          >
            Breathing Ego
          </a>

          {/* Desktop Nav Links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="nav-link">The Problem</a>
            <a href="#framework" className="nav-link">The Solution</a>
            <a href="#author" className="nav-link">About Nic</a>
            <a href="#hero" className="btn-nav btn-with-arrow">
              Join the Launch List
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Hamburger Toggle — visible on mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{ color: '#f5f0e8', background: 'rgba(245,240,232,0.08)' }}
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              /* X icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        <style>{`
          .nav-link {
            font-family: 'Poppins', sans-serif;
            font-size: 0.8125rem;
            font-weight: 400;
            color: rgba(245,240,232,0.6);
            text-transform: uppercase;
            letter-spacing: 0.01em;
            transition: color 150ms ease;
            text-decoration: none;
          }
          .nav-link:hover { color: #f5f0e8; }
          .btn-nav {
            font-family: 'Poppins', sans-serif;
            background: rgba(245,240,232,0.1);
            color: #f5f0e8;
            font-size: 0.8125rem;
            font-weight: 500;
            padding: 0.5rem 1.25rem;
            border-radius: 12px;
            border: 1px solid rgba(245,240,232,0.15);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: background 0.2s ease, border-color 0.2s ease;
          }
          .btn-nav:hover {
            background: rgba(245,240,232,0.18);
            border-color: rgba(245,240,232,0.3);
          }
        `}</style>
      </nav>

      {/* ── Mobile Full-Screen Overlay ── */}
      <div
        className={`
          fixed inset-0 top-[64px] z-40
          bg-black/70 backdrop-blur-xl
          flex flex-col items-center justify-center gap-10
          transition-opacity duration-300
          md:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <a
          href="#problem"
          onClick={closeMenu}
          className="mobile-nav-link"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 400,
            color: '#f5f0e8',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'color 150ms ease',
          }}
        >
          The Problem
        </a>
        <a
          href="#framework"
          onClick={closeMenu}
          className="mobile-nav-link"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 400,
            color: '#f5f0e8',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'color 150ms ease',
          }}
        >
          The Solution
        </a>
        <a
          href="#author"
          onClick={closeMenu}
          className="mobile-nav-link"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 400,
            color: '#f5f0e8',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'color 150ms ease',
          }}
        >
          About Nic
        </a>

        {/* CTA */}
        <a
          href="#hero"
          onClick={closeMenu}
          style={{
            marginTop: 8,
            background: 'rgba(245,240,232,0.12)',
            color: '#f5f0e8',
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.875rem 2rem',
            borderRadius: 12,
            border: '1px solid rgba(245,240,232,0.2)',
            textDecoration: 'none',
          }}
        >
          Join the Launch List
        </a>

        <style>{`
          .mobile-nav-link:hover { color: rgba(196,168,122,1) !important; }
        `}</style>
      </div>
    </>
  )
}
