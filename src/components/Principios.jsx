import { motion } from 'framer-motion'
import { Scale, Ear, Heart, Link2, Star, Shield } from 'lucide-react'

const CARDS = [
  {
    icon: Scale,
    word: 'Equidade',
    line: 'Mais a quem precisa mais.',
    grad: 'from-blue-500 to-blue-700',
    glow: '0 20px 60px rgba(59,130,246,0.20)',
    spot: '#dbeafe',
  },
  {
    icon: Heart,
    word: 'Respeito',
    line: 'Dignidade em todo momento.',
    grad: 'from-rose-400 to-pink-600',
    glow: '0 20px 60px rgba(244,63,94,0.18)',
    spot: '#fce7f3',
  },
  {
    icon: Ear,
    word: 'Escuta',
    line: 'Ouvir sem interromper.',
    grad: 'from-violet-500 to-purple-700',
    glow: '0 20px 60px rgba(139,92,246,0.18)',
    spot: '#ede9fe',
  },
  {
    icon: Star,
    word: 'Dignidade',
    line: 'Valor único de cada vida.',
    grad: 'from-amber-400 to-orange-500',
    glow: '0 20px 60px rgba(251,191,36,0.18)',
    spot: '#fef9c3',
  },
  {
    icon: Link2,
    word: 'Vínculo',
    line: 'Confiança que transforma.',
    grad: 'from-emerald-500 to-green-700',
    glow: '0 20px 60px rgba(52,211,153,0.18)',
    spot: '#d1fae5',
  },
  {
    icon: Shield,
    word: 'Redução de Danos',
    line: 'Minimizar riscos, respeitar tempo.',
    grad: 'from-cyan-500 to-teal-600',
    glow: '0 20px 60px rgba(45,212,191,0.18)',
    spot: '#cffafe',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 44, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,  transition: { duration: 0.65, ease: [0.25,0.46,0.45,0.94] } },
}

export default function Principios() {
  return (
    <section
      id="principios"
      className="py-28 px-4"
      style={{ background: 'linear-gradient(180deg,#f0f9ff 0%,#f8fafc 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-teal-500 mb-4">
            Seção 01
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-black text-slate-800 leading-none"
            style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
          >
            Princípios do
            <br />
            <span className="text-gradient-teal">Acolhimento</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CARDS.map(({ icon: Icon, word, line, grad, glow, spot }) => (
            <motion.article
              key={word}
              variants={card}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-3xl p-8 overflow-hidden cursor-default transition-shadow"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              onHoverStart={(e) => e.currentTarget.style.boxShadow = glow}
              onHoverEnd={(e)   => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-bl-[80px] opacity-10 pointer-events-none"
                style={{ background: spot }}
              />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-7 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-2">{word}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{line}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
