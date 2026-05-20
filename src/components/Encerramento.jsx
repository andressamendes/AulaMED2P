import { motion } from 'framer-motion'
import { Heart, BookOpen, Users, Mail } from 'lucide-react'

const CREDITOS = [
  {
    icon: BookOpen,
    label: 'Disciplina',
    value: 'Relações Étnico-Raciais e Saúde da População Negra e Indígena',
  },
  {
    icon: Users,
    label: 'Docente Responsável',
    value: 'Profa. Me. Isadora Alves Cotrim',
  },
  {
    icon: Heart,
    label: 'Turma',
    value: 'XII — Faculdade Afya Guanambi · BA',
  },
]

const REFS = [
  'BRASIL. Ministério da Saúde. Política Nacional para a População em Situação de Rua. Brasília, 2009.',
  'BRASIL. Ministério da Saúde. Política Nacional de Humanização (PNH). Brasília, 2013.',
  'BRASIL. Constituição Federal, Art. 196. Saúde como direito universal. 1988.',
  'BRASIL. Lei n. 8.080/1990 — Lei Orgânica da Saúde.',
  'CONSELHO FEDERAL DE MEDICINA. Código de Ética Médica. Resolução CFM n. 2.217/2018.',
]

export default function Encerramento() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-afya.png`

  return (
    <section
      id="encerramento"
      className="py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #0D47A1 0%, #1565C0 40%, #004D40 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Mensagem final */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/12 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 inline-flex items-center justify-center min-h-[72px]">
              <img
                src={logoUrl}
                alt="Afya Faculdade de Ciências Médicas Guanambi"
                className="h-12 md:h-14 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'block'
                }}
              />
              <span className="text-white font-bold text-base hidden" style={{ display: 'none' }}>
                AFYA · Guanambi
              </span>
            </div>
          </div>

          <div className="inline-block bg-white/15 border border-white/25 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Mensagem Final
          </div>

          <h2
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Cuidar começa
            <br />
            <span className="text-teal-300">pelo acolhimento.</span>
          </h2>

          <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed">
            Cada gesto de respeito, cada atitude de escuta genuína transforma o cuidado
            e reafirma o compromisso ético do SUS com toda a população.
          </p>
        </motion.div>

        {/* Créditos */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {CREDITOS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-teal-300" />
              </div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">
                {label}
              </div>
              <div className="text-white text-sm font-medium leading-snug">{value}</div>
            </div>
          ))}
        </motion.div>

        {/* Referências */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/8 border border-white/15 rounded-2xl p-7 mb-10"
        >
          <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
            Referências Institucionais
          </h3>
          <ul className="space-y-2">
            {REFS.map((ref, i) => (
              <li key={i} className="text-blue-200 text-xs leading-relaxed flex gap-2">
                <span className="text-teal-400 shrink-0 mt-0.5">›</span>
                {ref}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center border-t border-white/15 pt-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-1.5 text-white/60 text-sm">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span>Faculdade Afya Guanambi · Turma XII · 2026</span>
          </div>
          <p className="text-blue-300/60 text-xs">
            Produto Acadêmico · Protocolo Operacional Padrão · Atenção Primária à Saúde
          </p>
        </motion.div>
      </div>
    </section>
  )
}
