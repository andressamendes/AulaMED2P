import { motion } from 'framer-motion'
import { UserCheck, MessageCircle, ClipboardList, Stethoscope, Network } from 'lucide-react'

const ETAPAS = [
  {
    num: '01',
    icon: UserCheck,
    title: 'Aproximar-se com Respeito',
    desc: 'Cumprimente a pessoa pelo nome, se souber. Apresente-se. Mantenha postura acolhedora, sem julgamento quanto à aparência ou situação.',
    color: 'bg-sus-800',
    light: 'bg-sus-50',
    border: 'border-sus-200',
    text: 'text-sus-800',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'Escutar sem Julgamento',
    desc: 'Deixe a pessoa falar sobre suas necessidades. Evite interrupções, comentários avaliativas ou expressões de reprovação.',
    color: 'bg-ocean-700',
    light: 'bg-ocean-50',
    border: 'border-ocean-200',
    text: 'text-ocean-800',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Identificar Necessidades',
    desc: 'Avalie demandas clínicas, sociais e emocionais. Pergunte sobre alimentação, abrigo, uso de substâncias, saúde mental e situação documental.',
    color: 'bg-violet-700',
    light: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-800',
  },
  {
    num: '04',
    icon: Stethoscope,
    title: 'Oferecer Cuidado Integral',
    desc: 'Realize atendimento clínico completo. Considere todas as dimensões da saúde — física, mental e social — sem exigir contrapartidas.',
    color: 'bg-health-700',
    light: 'bg-health-50',
    border: 'border-health-200',
    text: 'text-health-800',
  },
  {
    num: '05',
    icon: Network,
    title: 'Articular Rede de Apoio',
    desc: 'Acione CRAS, CREAS, Centro POP, serviços de saúde mental e demais equipamentos da rede intersetorial conforme a necessidade identificada.',
    color: 'bg-amber-600',
    light: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
  },
]

export default function FluxoAcolhimento() {
  return (
    <section id="fluxo" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-ocean-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Seção 2
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Fluxo de Acolhimento
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Etapas do processo de cuidado centrado na pessoa em situação de rua.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sus-200 via-ocean-200 to-amber-200 -translate-x-1/2 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {ETAPAS.map(({ num, icon: Icon, title, desc, color, light, border, text }, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`relative flex items-start gap-5 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Step content card */}
                  <div className={`flex-1 ${isLeft ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div
                      className={`${light} border ${border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className={`font-bold text-base ${text}`}>{title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* Center number bubble */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
                    <div
                      className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-xs font-black">{num}</span>
                    </div>
                  </div>

                  {/* Mobile number (left side) */}
                  <div
                    className={`sm:hidden w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0 mt-1 shadow`}
                  >
                    <span className="text-white text-xs font-black">{num}</span>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
