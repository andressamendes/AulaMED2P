import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Heart } from 'lucide-react'

const REFS = [
  'BRASIL. Ministério da Saúde. Política Nacional para a Pop. em Situação de Rua. Brasília, 2009.',
  'BRASIL. Política Nacional de Humanização (PNH). Ministério da Saúde, 2013.',
  'BRASIL. Constituição Federal, Art. 196 — Saúde como direito universal, 1988.',
  'BRASIL. Lei n. 8.080/1990 — Lei Orgânica da Saúde.',
  'CONSELHO FEDERAL DE MEDICINA. Código de Ética Médica. CFM n. 2.217/2018.',
]

export default function Encerramento() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-afya.png`
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <section
      id="encerramento"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#020D1A 0%,#0A2540 40%,#032E28 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle,rgba(45,212,191,0.07) 0%,transparent 65%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="relative z-10 py-28 px-4 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl px-8 py-5 inline-flex items-center justify-center min-h-[72px]">
            <img
              src={logoUrl}
              alt="Afya Guanambi"
              className={`h-12 w-auto${logoFailed ? ' hidden' : ''}`}
              onError={() => setLogoFailed(true)}
            />
            {logoFailed && (
              <span className="text-white font-black text-lg">AFYA · Guanambi</span>
            )}
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mb-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-teal-400 block mb-6">
            Mensagem Final
          </span>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{
              fontFamily:"'Playfair Display',Georgia,serif",
              fontSize: 'clamp(2.8rem,8vw,5.5rem)',
            }}
          >
            Cuidar começa
            <br />
            <span className="text-gradient-teal">pelo acolhimento.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-blue-200/50 text-base max-w-md mx-auto mb-16 leading-relaxed"
        >
          Cada gesto de respeito reafirma o compromisso ético do SUS
          com toda a população.
        </motion.p>

        {/* Credits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-14"
        >
          {[
            {
              icon: BookOpen,
              label: 'Disciplina',
              value: 'Relações Étnico-Raciais e Saúde da Pop. Negra e Indígena',
              c: '#38bdf8',
            },
            {
              icon: Users,
              label: 'Docente',
              value: 'Profa. Me. Isadora Alves Cotrim',
              c: '#34d399',
            },
            {
              icon: Heart,
              label: 'Turma',
              value: 'XII · Afya Guanambi · BA',
              c: '#a78bfa',
            },
          ].map(({ icon: Icon, label, value, c }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: c + '22' }}
              >
                <Icon className="w-5 h-5" style={{ color: c }} />
              </div>
              <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">{label}</p>
              <p className="text-white/85 text-sm font-medium leading-snug">{value}</p>
            </div>
          ))}
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="glass rounded-2xl p-6 w-full mb-10 text-left"
        >
          <p className="text-white/35 text-xs font-black uppercase tracking-widest mb-4">
            Referências
          </p>
          <ul className="space-y-2">
            {REFS.map((r, i) => (
              <li key={i} className="flex gap-2 text-blue-200/40 text-xs leading-relaxed">
                <span className="text-teal-500/60 shrink-0 mt-0.5">›</span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-2 text-white/25 text-xs"
        >
          <Heart className="w-3.5 h-3.5 text-rose-500/50 fill-rose-500/50" />
          <span>Faculdade Afya Guanambi · Turma XII · 2026 · Produto Acadêmico</span>
        </motion.div>
      </div>
    </section>
  )
}
