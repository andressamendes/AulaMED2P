import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, FileText, Droplets, Brain, Pill, Zap } from 'lucide-react'

const SITUACOES = [
  {
    id: 'docs',
    label: 'Documentação',
    icon: FileText,
    adequada: [
      { e: '✅', t: 'Atende sem documentos' },
      { e: '📝', t: 'Registra sem burocracia' },
      { e: '🤝', t: 'Orienta com empatia' },
    ],
    inadequada: [
      { e: '❌', t: 'Recusa por falta de RG' },
      { e: '🚫', t: 'Exige comprovante de endereço' },
      { e: '⏰', t: 'Adia sem motivo clínico' },
    ],
  },
  {
    id: 'higiene',
    label: 'Higiene',
    icon: Droplets,
    adequada: [
      { e: '✅', t: 'Postura respeitosa' },
      { e: '🧼', t: 'Disponibiliza recursos de higiene' },
      { e: '💬', t: 'Pergunta com empatia' },
    ],
    inadequada: [
      { e: '😬', t: 'Demonstra repulsa visivelmente' },
      { e: '😷', t: 'EPI exagerado e desnecessário' },
      { e: '⚡', t: 'Atende com pressa para "livrar-se"' },
    ],
  },
  {
    id: 'mental',
    label: 'Saúde Mental',
    icon: Brain,
    adequada: [
      { e: '✅', t: 'Acolhe a crise com calma' },
      { e: '🏥', t: 'Aciona CAPS se necessário' },
      { e: '📋', t: 'Garante continuidade do cuidado' },
    ],
    inadequada: [
      { e: '❌', t: 'Chama segurança como 1ª resposta' },
      { e: '🙈', t: 'Minimiza o sofrimento psíquico' },
      { e: '🚫', t: 'Recusa por "comportamento difícil"' },
    ],
  },
  {
    id: 'substancias',
    label: 'Substâncias',
    icon: Pill,
    adequada: [
      { e: '✅', t: 'Aplica redução de danos' },
      { e: '🛡️', t: 'Oferece kit de proteção' },
      { e: '💬', t: 'Aborda sem impor abstinência' },
    ],
    inadequada: [
      { e: '❌', t: 'Condiciona cuidado à abstinência' },
      { e: '🏷️', t: 'Usa linguagem estigmatizante' },
      { e: '🚫', t: 'Recusa atendimento clínico' },
    ],
  },
  {
    id: 'crise',
    label: 'Crise Aguda',
    icon: Zap,
    adequada: [
      { e: '✅', t: 'Cria ambiente seguro e calmo' },
      { e: '🗣️', t: 'Comunicação não violenta' },
      { e: '🚑', t: 'Aciona SAMU se necessário' },
    ],
    inadequada: [
      { e: '❌', t: 'Grita ou faz ultimatos' },
      { e: '😓', t: 'Abandona a pessoa em risco' },
      { e: '👮', t: 'Polícia como medida terapêutica' },
    ],
  },
]

const itemAnim = (dir) => ({
  hidden:  { opacity: 0, x: dir },
  visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.09 } }),
})

export default function SituacoesPraticas() {
  const [activeId, setActiveId] = useState(SITUACOES[0].id)
  const active = SITUACOES.find((s) => s.id === activeId)

  return (
    <section
      id="situacoes"
      className="py-28 px-4"
      style={{ background: 'linear-gradient(180deg,#0F172A 0%,#0a1020 100%)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-teal-400 block mb-4">
            Seção 03
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
          >
            Como <span className="text-gradient-teal">Agir</span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm">Selecione um tema para ver a comparação</p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {SITUACOES.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveId(id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                id === activeId
                  ? 'text-white shadow-lg'
                  : 'glass text-white/55 hover:text-white/80 border-0'
              }`}
              style={id === activeId ? { background: 'linear-gradient(135deg,#0d9488,#2563eb)', boxShadow: '0 8px 30px rgba(13,148,136,0.30)' } : {}}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Comparison panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.25,0.46,0.45,0.94] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Adequate — green */}
            <div
              className="rounded-3xl p-8 border"
              style={{ background: 'rgba(6,78,59,0.35)', borderColor: 'rgba(52,211,153,0.20)' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.18)' }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-black text-sm uppercase tracking-wider">
                  Conduta Adequada
                </span>
              </div>

              <motion.ul variants={{ visible: { transition: { staggerChildren: 0.09 } } }} initial="hidden" animate="visible" className="space-y-4">
                {active.adequada.map(({ e, t }, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={itemAnim(-12)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl select-none shrink-0">{e}</span>
                    <span className="text-emerald-100/90 text-sm font-medium">{t}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Inadequate — red */}
            <div
              className="rounded-3xl p-8 border"
              style={{ background: 'rgba(69,10,10,0.40)', borderColor: 'rgba(248,113,113,0.20)' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(248,113,113,0.18)' }}>
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-red-400 font-black text-sm uppercase tracking-wider">
                  Conduta Inadequada
                </span>
              </div>

              <motion.ul variants={{ visible: { transition: { staggerChildren: 0.09 } } }} initial="hidden" animate="visible" className="space-y-4">
                {active.inadequada.map(({ e, t }, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={itemAnim(12)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl select-none shrink-0">{e}</span>
                    <span className="text-red-100/80 text-sm font-medium">{t}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Topic counter */}
        <div className="flex justify-center gap-2 mt-8">
          {SITUACOES.map(({ id }) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`transition-all rounded-full cursor-pointer ${
                id === activeId ? 'w-6 h-2 bg-teal-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
