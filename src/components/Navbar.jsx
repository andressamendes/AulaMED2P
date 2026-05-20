import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Início',      href: '#hero' },
  { label: 'Princípios',  href: '#principios' },
  { label: 'Fluxo',       href: '#fluxo' },
  { label: 'Situações',   href: '#situacoes' },
  { label: 'Direitos',    href: '#direitos' },
  { label: 'Frases',      href: '#frases' },
  { label: 'Final',       href: '#encerramento' },
]

const go = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.25,0.46,0.45,0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020D1A]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Brand */}
        <button
          onClick={() => go('#hero')}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <span className="text-lg">💙</span>
          <span className="text-xs font-black tracking-[0.18em] uppercase text-white/80">
            Acolher é Cuidar
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => go(href)}
              className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white/90 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/60 hover:text-white p-1 cursor-pointer"
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
            exit={{  opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#020D1A]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            {NAV.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => { go(href); setOpen(false) }}
                className="block w-full text-left px-5 py-3.5 text-sm font-bold text-white/50 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
