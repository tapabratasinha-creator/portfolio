import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navItems.map(n => n.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled
            ? 'rgba(var(--color-bg-rgb, 8,14,25), 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1rem' }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--color-teal)', letterSpacing: '0.1em' }}>./</span>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text)' }}>tapabrata</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: activeSection === item.href.replace('#', '') ? 'var(--color-teal)' : 'var(--color-text-muted)',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = activeSection === item.href.replace('#', '') ? 'var(--color-teal)' : 'var(--color-text-muted)')}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '0.4rem 0.5rem',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              display: 'none',
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              background: 'var(--color-surface)',
              borderBottom: '1px solid var(--color-border)',
              zIndex: 99,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setMenuOpen(false) }}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                color: 'var(--color-text)',
                fontFamily: 'Inter',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
