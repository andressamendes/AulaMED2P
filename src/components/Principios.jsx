import { motion } from 'framer-motion'
import {
  Scale, Ear, Heart, Link2, Star, Shield,
} from 'lucide-react'

const PRINCIPIOS = [
  {
    icon: Scale,
    title: 'Equidade',
    desc: 'Oferecer mais a quem precisa mais, reconhecendo que igualdade não é uniformidade de tratamento.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Ear,
    title: 'Escuta Qualificada',
    desc: 'Ouvir com atenção, presença e sem interrupções, permitindo que a pessoa expresse suas necessidades.',
    color: 'from-teal-500 to-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Heart,
    title: 'Respeito',
    desc: 'Tratar cada pessoa com dignidade, independentemente de sua aparência, odor, comportamento ou história.',
    color: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: Link2,
    title: 'Vínculo',
    desc: 'Construir relação de confiança que favoreça a continuidade do cuidado e a adesão ao tratamento.',
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Star,
    title: 'Dignidade',
    desc: 'Reconhecer o valor intrínseco de cada ser humano, preservando sua identidade e sua autonomia.',
    color: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Shield,
    title: 'Redução de Danos',
    desc: 'Estratégias que minimizam riscos à saúde sem exigir abstinência imediata, respeitando o tempo de cada pessoa.',
    color: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Principios() {
  return (
    <section
      id="principios"
      className="py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #EBF5FB 0%, #E8F8F5 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sus-800 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Seção 1
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-sus-900 mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Princípios do Acolhimento
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Valores que orientam a conduta humanizada na Atenção Primária à Saúde.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRINCIPIOS.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
              className={`${bg} border ${border} rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-shadow`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
