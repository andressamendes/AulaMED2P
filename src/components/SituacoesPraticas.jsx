import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ChevronDown } from 'lucide-react'

const SITUACOES = [
  {
    tema: 'Atendimento sem Documentação',
    adequada: [
      'Atender independentemente de documentos — RG, CPF e cartão SUS não são pré-requisito.',
      'Registrar atendimento em prontuário com descrição da situação.',
      'Orientar sobre como obter documentação se a pessoa demonstrar interesse.',
    ],
    inadequada: [
      'Recusar ou adiar atendimento por falta de documentação.',
      'Exigir comprovante de endereço para cadastro.',
      'Ignorar a necessidade imediata alegando "irregularidade cadastral".',
    ],
  },
  {
    tema: 'Higiene e Odor Corporal',
    adequada: [
      'Manter postura respeitosa e não demonstrar repulsa.',
      'Disponibilizar recursos de higiene quando possível (sabonete, toalha).',
      'Perguntar com empatia se a pessoa tem acesso a local para banho.',
    ],
    inadequada: [
      'Fazer comentários depreciativos sobre odor ou sujidade.',
      'Atender rapidamente para "livrar-se" da pessoa.',
      'Usar EPI de forma exagerada e desnecessária, gerando constrangimento.',
    ],
  },
  {
    tema: 'Saúde Mental',
    adequada: [
      'Acolher crises com calma, sem pressa ou coerção.',
      'Acionar apoio matricial ou CAPS quando necessário.',
      'Documentar histórico e garantir continuidade do cuidado.',
    ],
    inadequada: [
      'Acionar segurança ou polícia como primeira resposta a manifestações de sofrimento.',
      'Minimizar sofrimento psíquico com falas como "é frescura".',
      'Recusar atendimento por comportamento considerado "difícil".',
    ],
  },
  {
    tema: 'Uso de Substâncias',
    adequada: [
      'Aplicar estratégias de redução de danos sem julgamento.',
      'Oferecer kits de redução de danos quando disponíveis.',
      'Abordar o tema com perguntas abertas e sem imposição de abstinência.',
    ],
    inadequada: [
      'Condicionar atendimento à abstinência ou promessa de "parar".',
      'Usar linguagem estigmatizante como "viciado" ou "drogado".',
      'Recusar cuidado clínico alegando que "só resolve se parar de usar".',
    ],
  },
  {
    tema: 'Recusa de Atendimento',
    adequada: [
      'Respeitar a autonomia — informar riscos sem coagir.',
      'Registrar a recusa em prontuário com anotação de orientações fornecidas.',
      'Manter relação de confiança para que a pessoa retorne quando pronta.',
    ],
    inadequada: [
      'Forçar procedimentos contra a vontade da pessoa.',
      'Encerrar o vínculo por recusa pontual de tratamento.',
      'Julgar moralmente a decisão da pessoa.',
    ],
  },
  {
    tema: 'Manejo de Crise',
    adequada: [
      'Criar ambiente seguro, calmo e com poucos estímulos.',
      'Usar comunicação não violenta: voz baixa, contato visual, escuta ativa.',
      'Acionar equipe multiprofissional e, se necessário, SAMU/UPA.',
    ],
    inadequada: [
      'Gritar, ameaçar ou fazer ultimatos durante episódio de crise.',
      'Deixar a pessoa sozinha em lugar de risco.',
      'Chamar a polícia como medida terapêutica primária.',
    ],
  },
]

function SituacaoCard({ tema, adequada, inadequada }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-800">{tema}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
              {/* Conduta adequada */}
              <div className="bg-green-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-health-700 shrink-0" />
                  <span className="text-health-800 font-bold text-sm">Conduta Adequada</span>
                </div>
                <ul className="space-y-2">
                  {adequada.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                      <span className="text-health-500 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conduta inadequada */}
              <div className="bg-red-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-red-700 font-bold text-sm">Conduta Inadequada</span>
                </div>
                <ul className="space-y-2">
                  {inadequada.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                      <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function SituacoesPraticas() {
  return (
    <section
      id="situacoes"
      className="py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EBF5FB 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block bg-violet-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Seção 3
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Situações Práticas
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Clique em cada situação para ver a conduta adequada e inadequada.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <CheckCircle2 className="w-4 h-4 text-health-600" />
            Conduta adequada
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <XCircle className="w-4 h-4 text-red-500" />
            Conduta inadequada
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {SITUACOES.map((s) => (
            <SituacaoCard key={s.tema} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
