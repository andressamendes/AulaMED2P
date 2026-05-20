import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Principios from './components/Principios'
import FluxoAcolhimento from './components/FluxoAcolhimento'
import SituacoesPraticas from './components/SituacoesPraticas'
import DireitosDignidade from './components/DireitosDignidade'
import FrasesImpacto from './components/FrasesImpacto'
import Encerramento from './components/Encerramento'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      {/* Scroll progress bar — style único, sem prop css inválido */}
      <motion.div
        style={{
          scaleX,
          background: 'linear-gradient(90deg,#2dd4bf,#38bdf8,#818cf8)',
        }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main>
        <Hero />
        <Principios />
        <FluxoAcolhimento />
        <SituacoesPraticas />
        <DireitosDignidade />
        <FrasesImpacto />
        <Encerramento />
      </main>
    </div>
  )
}
