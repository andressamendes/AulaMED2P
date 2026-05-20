import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/* Pre-seeded particles — stable across renders */
const PARTICLES = [
  { id:0,  x:5,  y:15, r:1.5, dur:9,  delay:0   },
  { id:1,  x:72, y:8,  r:2.5, dur:12, delay:1.5 },
  { id:2,  x:18, y:70, r:1,   dur:6,  delay:3   },
  { id:3,  x:88, y:30, r:3,   dur:10, delay:0.5 },
  { id:4,  x:35, y:85, r:1.5, dur:7,  delay:2   },
  { id:5,  x:60, y:52, r:2,   dur:9,  delay:4   },
  { id:6,  x:12, y:40, r:1,   dur:11, delay:1   },
  { id:7,  x:90, y:20, r:2.5, dur:6,  delay:3.5 },
  { id:8,  x:45, y:65, r:1.5, dur:8,  delay:0.8 },
  { id:9,  x:25, y:5,  r:1,   dur:13, delay:2.5 },
  { id:10, x:78, y:45, r:3,   dur:7,  delay:4   },
  { id:11, x:50, y:80, r:1.5, dur:10, delay:1.2 },
  { id:12, x:8,  y:60, r:1,   dur:6,  delay:3   },
  { id:13, x:65, y:35, r:2,   dur:9,  delay:0.3 },
  { id:14, x:30, y:90, r:1,   dur:12, delay:2   },
  { id:15, x:95, y:25, r:2.5, dur:7,  delay:4.5 },
  { id:16, x:55, y:55, r:1.5, dur:8,  delay:1.8 },
  { id:17, x:20, y:75, r:1,   dur:11, delay:0   },
  { id:18, x:82, y:12, r:3,   dur:6,  delay:3.2 },
  { id:19, x:42, y:48, r:1.5, dur:9,  delay:1.5 },
  { id:20, x:68, y:72, r:2,   dur:8,  delay:2.8 },
  { id:21, x:15, y:32, r:1,   dur:12, delay:0.5 },
  { id:22, x:85, y:88, r:2.5, dur:7,  delay:4   },
  { id:23, x:38, y:18, r:1.5, dur:10, delay:2.2 },
  { id:24, x:72, y:62, r:1,   dur:9,  delay:1   },
  { id:25, x:28, y:95, r:2,   dur:6,  delay:3.8 },
  { id:26, x:58, y:42, r:1,   dur:11, delay:0.7 },
  { id:27, x:92, y:58, r:3,   dur:8,  delay:2.5 },
]

const COLORS = ['#2dd4bf', '#93c5fd', 'rgba(255,255,255,0.7)']

/* Staggered entrance for text lines */
const lineVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.7 + i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] } }),
}

export default function Hero() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-afya.png`
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise"
      style={{ background: 'linear-gradient(145deg,#020D1A 0%,#0A2540 35%,#0A3040 62%,#032E28 100%)' }}
    >
      {/* === Particles === */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.r * 2, height: p.r * 2,
            background: COLORS[p.id % 3],
          }}
          animate={{ opacity: [0.08, 0.55, 0.08], scale: [0.8, 1.6, 0.8] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* === Concentric rings === */}
      {[360, 260, 170].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-teal-400/15 pointer-events-none"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 5 + i * 2, repeat: Infinity, delay: i, ease: 'easeInOut' }}
        />
      ))}

      {/* === Radial glow === */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%)',
        }}
      />

      {/* === Central icon === */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10 mb-8"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center glass"
          style={{ boxShadow: '0 0 60px rgba(45,212,191,0.18)' }}
        >
          <span className="text-5xl select-none">💙</span>
        </div>
      </motion.div>

      {/* === Text block === */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-flex items-center gap-2 glass text-white/60 text-xs font-black tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8"
        >
          POP · Atenção Primária à Saúde
        </motion.div>

        {/* Title line 1 */}
        <motion.h1
          custom={0} variants={lineVariants} initial="hidden" animate="visible"
          className="font-display text-[clamp(3.5rem,12vw,7.5rem)] font-black text-white leading-none tracking-tight"
          style={{ fontFamily: "'Playfair Display',Georgia,serif" }}
        >
          ACOLHER
        </motion.h1>

        {/* Title line 2 — gradient */}
        <motion.h1
          custom={1} variants={lineVariants} initial="hidden" animate="visible"
          className="font-display text-[clamp(3.5rem,12vw,7.5rem)] font-black leading-none tracking-tight mb-8 text-gradient-teal"
          style={{ fontFamily: "'Playfair Display',Georgia,serif" }}
        >
          É CUIDAR
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={lineVariants} initial="hidden" animate="visible"
          className="text-blue-200/60 text-lg md:text-xl max-w-md mx-auto mb-10"
        >
          Receptividade e Conduta Humanizada na Atenção Primária
        </motion.p>

        {/* Institution badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="inline-flex items-center gap-3 glass rounded-2xl px-5 py-3 mb-10"
        >
          <img
            src={logoUrl}
            alt="Afya Guanambi"
            className={`h-8 w-auto${logoFailed ? ' hidden' : ''}`}
            onError={() => setLogoFailed(true)}
          />
          {logoFailed && (
            <span className="text-white/50 font-bold text-sm">AFYA</span>
          )}
          <div className="w-px h-6 bg-white/15" />
          <div className="text-left">
            <p className="text-white/90 text-xs font-bold leading-tight">Faculdade Afya Guanambi</p>
            <p className="text-white/45 text-xs leading-tight">Turma XII · Profa. Me. Isadora Cotrim</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.55 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 20px 50px rgba(45,212,191,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#principios')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 text-white font-black px-10 py-4 rounded-full text-base cursor-pointer transition-all"
            style={{ background: 'linear-gradient(135deg,#0d9488,#2563eb)' }}
          >
            Iniciar
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>

      {/* === Scroll mouse indicator === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2.5 rounded-full bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  )
}
