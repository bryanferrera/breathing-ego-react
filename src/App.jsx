import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Learn, SocialProof, Problem, RealCost, Symptoms, Framework, Rhythm, Outcomes, Author, Footer } from './components/Sections'

export default function App() {
  return (
    <div className="w-full" style={{ overflowX: 'clip' }}>
      <Navbar />
      <Hero />
      <Problem />
      <RealCost />
      <Symptoms />
      <SocialProof />
      <Framework />
      <Rhythm />
      <Outcomes />
      <Author />
      <Footer />
    </div>
  )
}
