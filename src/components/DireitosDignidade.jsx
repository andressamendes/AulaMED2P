import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, UserCheck, Lock, Focus } from 'lucide-react'

const DIREITOS = [
  {
    icon: HeartHandshake,
    title: 'Direito Universal à Saúde',
    desc: 'O SUS garante atendimento a toda pessoa, independentemente de documentos, endereço, aparência ou conduta de vida.',
    base: 'Constituição Federal, Art. 196',
  },
  {
    icon: ShieldCheck,
    title: 'Dignidade Humana',
    desc: 'Nenhuma condição socioeconômica retira de alguém o direito ao respeito, à integridade e ao tratamento humanizado.',
    base: 'CF Art. 1º · Bioética do Cuidado',
  },
  {
    icon: UserCheck,
    title: 'Atendimento sem Discriminação',
    desc: 'É vedado qualquer tratamento diferenciado por raça, gênero, origem, religião, condição social ou uso de substâncias.',
    base: 'Lei 8.080/90 · PNH/MS',
  },
  {
    icon: Lock,
    title: 'Privacidade e Sigilo',
    desc: 'As informações de saúde são confidenciais. O sigilo profissional é obrigação ética e legal, independente do vínculo familiar ou social.',
    base: 'CFM · Lei 13.709/18 (LGPD)',
  },
  {
    icon: Focus,
    title: 'Cuidado Centrado na Pessoa',
    desc: 'As decisões terapêuticas devem considerar a história, os valores, a autonomia e as preferências do indivíduo.',
    base: 'Política Nacional de Humanização',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function DireitosDignidade() {
  return (
    <section
      id="direitos"
      className="py-24 px-4"
      style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #006064 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-white/30">
            Seção 4
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Direitos e Dignidade
          </h2>
          <p className="text-blue-200 text-lg max-w-lg mx-auto">
            Pilares legais e éticos que fundamentam o cuidado humanizado no SUS.
          </p>
        </motion.div>

        {/* Rights list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-5"
        >
          {DIREITOS.map(({ icon: Icon, title, desc, base }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex gap-5 items-start hover:bg-white/15 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-teal-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-2">{desc}</p>
                <span className="inline-block bg-white/15 text-white/70 text-xs font-semibold px-3 py-0.5 rounded-full border border-white/20">
                  {base}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
