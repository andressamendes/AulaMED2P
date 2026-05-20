import { motion } from 'framer-motion'
import { UserCheck, MessageCircle, ClipboardList, Stethoscope, Network } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: UserCheck,
    title: 'Aproximação',
    sub: 'Com respeito e apresentação',
    desc: 'Cumprimente pelo nome. Apresente-se. Postura acolhedora — sem julgamento.',
    color: '#1565C0',
    bg: '#dbeafe',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'Escuta Qualificada',
    sub: 'Sem interrupções ou julgamento',
    desc: 'Deixe a pessoa falar. Ausência de comentários avaliativos ou de reprovação.',
    color: '#6d28d9',
    bg: '#ede9fe',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Identificação',
    sub: 'Clínica, social e emocional',
    desc: 'Avalie alimentação, abrigo, saúde mental, uso de substâncias e documentação.',
    color: '#065f46',
    bg: '#d1fae5',
  },
  {
    num: '04',
    icon: Stethoscope,
    title: 'Cuidado Integral',
    sub: 'Todas as dimensões da saúde',
    desc: 'Atendimento clínico completo. Considere o físico, o mental e o social.',
    color: '#92400e',
    bg: '#fef3c7',
  },
  {
    num: '05',
    icon: Network,
    title: 'Rede de Apoio',
    sub: 'CRAS · CREAS · CAPS · Centro POP',
    desc: 'Articulação intersetorial conforme necessidades identificadas.',
    color: '#0e7490',
    bg: '#cffafe',
  },
]

export default function FluxoAcolhimento() {
  return (
    <section id="fluxo" className="py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 block mb-4">
            Seção 02
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-black text-slate-800 leading-none"
            style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
          >
            Fluxo de
            <br />
            <span className="text-gradient-blue">Acolhimento</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated vertical connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute hidden sm:block left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] rounded-full pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: 'linear-gradient(180deg,#3b82f6,#8b5cf6,#10b981,#f59e0b,#06b6d4)' }}
            />
          </motion.div>

          <div className="flex flex-col gap-12">
            {STEPS.map(({ num, icon: Icon, title, sub, desc, color, bg }, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: isLeft ? -56 : 56 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-56px' }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.25,0.46,0.45,0.94] }}
                  className={`relative flex items-center gap-5 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'sm:pr-16' : 'sm:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.025, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white border border-slate-100 rounded-3xl p-7 shadow-md hover:shadow-xl transition-all flex gap-5 items-start cursor-default"
                    >
                      {/* Icon bubble */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
                        style={{ background: bg }}
                      >
                        <Icon className="w-7 h-7" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color }}>
                          {sub}
                        </p>
                        <h3 className="text-xl font-black text-slate-800 mb-1">{title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Centre node — desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: [0.34,1.56,0.64,1] }}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg"
                      style={{ background: color }}
                    >
                      {num}
                    </motion.div>
                  </div>

                  {/* Number — mobile */}
                  <div
                    className="sm:hidden w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-sm shadow shrink-0"
                    style={{ background: color }}
                  >
                    {num}
                  </div>

                  {/* Spacer opposite side */}
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
