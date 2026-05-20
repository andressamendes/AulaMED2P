import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Início',      href: '#hero' },
  { label: 'Princípios',  href: '#principios' },
  { label: 'Fluxo',       href: '#fluxo' },
  { label: 'Situações',   href: '#situacoes' },
  { label: 'Direitos',    href: '#direitos' },
  { label: 'Frases',      href: '#frases' },
  { label: 'Encerramento',href: '#encerramento' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleNav = (href) => { scrollTo(href); setOpen(false) }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 group"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              scrolled ? 'text-sus-800' : 'text-teal-300'
            }`}
          />
          <span className={`text-sm font-bold tracking-wide transition-colors ${
            scrolled ? 'text-sus-900' : 'text-white'
          }`}>
            ACOLHER É CUIDAR
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                scrolled
                  ? 'text-gray-500 hover:text-sus-800'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-1 ${scrolled ? 'text-gray-700' : 'text-white'}`}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="block w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-sus-50 hover:text-sus-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
