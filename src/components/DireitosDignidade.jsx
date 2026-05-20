import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Users, Lock, Focus } from 'lucide-react'

const DIREITOS = [
  { num: '01', icon: HeartHandshake, title: 'Direito Universal à Saúde',      base: 'CF Art. 196',          color: '#38bdf8' },
  { num: '02', icon: ShieldCheck,    title: 'Dignidade Humana Inviolável',     base: 'CF Art. 1º',           color: '#34d399' },
  { num: '03', icon: Users,          title: 'Atendimento sem Discriminação',   base: 'Lei 8.080/90 · PNH',  color: '#a78bfa' },
  { num: '04', icon: Lock,           title: 'Privacidade e Sigilo',            base: 'CFM · LGPD',           color: '#fbbf24' },
  { num: '05', icon: Focus,          title: 'Cuidado Centrado na Pessoa',      base: 'Pol. Nac. Humanização',color: '#f472b6' },
]

export default function DireitosDignidade() {
  return (
    <section
      id="direitos"
      className="py-28 px-4"
      style={{ background: 'linear-gradient(180deg,#020D1A 0%,#0A1628 100%)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-violet-400 block mb-4">
            Seção 04
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily:"'Playfair Display',Georgia,serif" }}
          >
            Direitos &amp;
            <br />
            <span className="text-gradient-blue">Dignidade</span>
          </h2>
        </motion.div>

        {/* Rights list */}
        <div className="flex flex-col gap-4">
          {DIREITOS.map(({ num, icon: Icon, title, base, color }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25,0.46,0.45,0.94] }}
              whileHover={{ x: 10, transition: { duration: 0.25 } }}
              className="flex items-center gap-5 glass rounded-2xl px-6 py-5 cursor-default"
            >
              {/* Ghost number */}
              <span
                className="text-5xl font-black font-mono opacity-15 w-16 text-right leading-none shrink-0"
                style={{ color }}
              >
                {num}
              </span>

              {/* Divider */}
              <div className="w-px h-10 bg-white/10 shrink-0" />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: color + '22' }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
                <p className="text-white/35 text-xs font-semibold uppercase tracking-wider mt-0.5">{base}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
