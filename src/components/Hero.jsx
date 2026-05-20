import { motion } from 'framer-motion'
import { ChevronDown, Stethoscope, BookOpen, Users } from 'lucide-react'

const SHAPES = [
  { w: 320, h: 320, l: -5,  t: -8,  dur: 9 },
  { w: 200, h: 200, l: 70,  t: 5,   dur: 7 },
  { w: 260, h: 260, l: 85,  t: 55,  dur: 11 },
  { w: 180, h: 180, l: 40,  t: 75,  dur: 8 },
  { w: 140, h: 140, l: 15,  t: 50,  dur: 10 },
  { w: 100, h: 100, l: 55,  t: 30,  dur: 6 },
]

export default function Hero() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-afya.png`

  const scrollToNext = () => {
    document.querySelector('#principios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(150deg, #0D47A1 0%, #1565C0 25%, #006064 65%, #004D40 100%)',
      }}
    >
      {/* Floating background shapes */}
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/8 pointer-events-none"
          style={{ width: s.w, height: s.h, left: `${s.l}%`, top: `${s.t}%` }}
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
        />
      ))}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 inline-flex items-center justify-center min-h-[80px]">
            <img
              src={logoUrl}
              alt="Afya Faculdade de Ciências Médicas Guanambi"
              className="h-14 md:h-16 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'block'
              }}
            />
            <span
              className="text-white font-bold text-lg tracking-wide hidden"
              style={{ display: 'none' }}
            >
              AFYA · Guanambi
            </span>
          </div>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide"
        >
          <Stethoscope className="w-3.5 h-3.5 shrink-0" />
          Protocolo Operacional Padrão · Atenção Primária à Saúde
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          ACOLHER
          <br />
          <span
            className="text-teal-300"
            style={{ textShadow: '0 0 60px rgba(45,212,191,.4)' }}
          >
            É CUIDAR
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Receptividade e Conduta para com Pessoas em Situação de Rua
          <br className="hidden sm:block" /> na Atenção Primária à Saúde
        </motion.p>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10"
        >
          {[
            {
              icon: BookOpen,
              label: 'Disciplina',
              value: 'Relações Étnico-Raciais e Saúde da População Negra e Indígena',
            },
            {
              icon: Users,
              label: 'Docente',
              value: 'Profa. Me. Isadora Alves Cotrim',
            },
            {
              icon: Stethoscope,
              label: 'Turma',
              value: 'XII · Afya Guanambi',
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <Icon className="w-3.5 h-3.5 text-teal-300" />
                <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                  {label}
                </span>
              </div>
              <p className="text-white text-sm font-medium leading-snug">{value}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToNext}
          className="inline-flex items-center gap-3 bg-white text-sus-900 font-bold px-9 py-4 rounded-full text-sm hover:bg-blue-50 transition-colors shadow-xl cursor-pointer"
        >
          <span className="text-lg">💙</span>
          Iniciar Apresentação
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity, delay: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        aria-label="Próxima seção"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
