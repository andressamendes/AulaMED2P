import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Principios from './components/Principios'
import FluxoAcolhimento from './components/FluxoAcolhimento'
import SituacoesPraticas from './components/SituacoesPraticas'
import DireitosDignidade from './components/DireitosDignidade'
import FrasesImpacto from './components/FrasesImpacto'
import Encerramento from './components/Encerramento'

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
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
