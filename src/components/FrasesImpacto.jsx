import { motion } from 'framer-motion'

const FRASES = [
  {
    texto: 'Acolher\nsem julgar.',
    bg: 'linear-gradient(135deg,#0D47A1 0%,#005F73 100%)',
    accent: '#2dd4bf',
    num: '01',
  },
  {
    texto: 'Cuidar é reconhecer\ndignidade.',
    bg: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    accent: '#a78bfa',
    num: '02',
  },
  {
    texto: 'O SUS é para\ntodas as pessoas.',
    bg: 'linear-gradient(135deg,#064e3b 0%,#065f46 50%,#047857 100%)',
    accent: '#34d399',
    num: '03',
  },
  {
    texto: 'Pequenas atitudes\ntransformam o cuidado.',
    bg: 'linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#3730a3 100%)',
    accent: '#fbbf24',
    num: '04',
  },
]

export default function FrasesImpacto() {
  return (
    <section id="frases" className="bg-black">
      {FRASES.map(({ texto, bg, accent, num }, i) => (
        <div
          key={i}
          className="relative flex items-center justify-center px-6 overflow-hidden"
          style={{ background: bg, minHeight: '60vh', padding: '6rem 1.5rem' }}
        >
          {/* Decorative large number */}
          <div
            className="absolute right-8 bottom-4 font-black text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none opacity-[0.04]"
            style={{ fontFamily:"'Playfair Display',Georgia,serif", color: accent }}
            aria-hidden="true"
          >
            {num}
          </div>

          {/* Glow blob */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 400, height: 400,
              background: `radial-gradient(circle,${accent}18 0%,transparent 70%)`,
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Accent line top */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ originX: 0.5, background: accent }}
              className="h-[2px] w-12 mx-auto rounded-full mb-8"
            />

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25,0.46,0.45,0.94] }}
              className="font-display font-black text-white leading-tight whitespace-pre-line"
              style={{
                fontFamily:"'Playfair Display',Georgia,serif",
                fontSize: 'clamp(2rem,6vw,4rem)',
              }}
            >
              {texto}
            </motion.p>

            {/* Accent line bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ originX: 0.5, background: accent }}
              className="h-[2px] w-8 mx-auto rounded-full mt-8"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
