import { motion } from 'framer-motion'

const FRASES = [
  {
    texto: 'Acolher sem julgar.',
    autor: 'Princípio do cuidado humanizado',
    cor: 'from-teal-600 to-teal-800',
    destaque: 'text-teal-300',
  },
  {
    texto: 'Cuidar é reconhecer dignidade.',
    autor: 'Política Nacional de Humanização',
    cor: 'from-sus-700 to-sus-900',
    destaque: 'text-blue-300',
  },
  {
    texto: 'O SUS é para todas as pessoas.',
    autor: 'Constituição Federal, Art. 196',
    cor: 'from-health-700 to-health-900',
    destaque: 'text-green-300',
  },
  {
    texto: 'Pequenas atitudes transformam o cuidado.',
    autor: 'Relações Étnico-Raciais e Saúde',
    cor: 'from-violet-700 to-violet-900',
    destaque: 'text-violet-300',
  },
]

export default function FrasesImpacto() {
  return (
    <section
      id="frases"
      className="py-24 px-4 bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-white/20">
            Seção 5
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Frases de Impacto
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Palavras que guiam a prática do cuidado com dignidade.
          </p>
        </motion.div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FRASES.map(({ texto, autor, cor, destaque }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-gradient-to-br ${cor} rounded-2xl p-8 overflow-hidden cursor-default`}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-5 font-display text-8xl font-bold text-white/10 leading-none select-none"
                aria-hidden="true"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "
              </div>

              {/* Background glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <p
                  className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "{texto}"
                </p>
                <div className={`text-xs font-semibold uppercase tracking-widest ${destaque}`}>
                  — {autor}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
