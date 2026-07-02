import Header from './components/Header'
import Hero from './components/HeroSlider'
import Stats from './components/Stats'
import Services from './components/Services'
import Solutions from './components/Solutions'
import TechSection from './components/TechSection'
import TrustSection from './components/TrustSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import HeroSlider from './components/HeroSlider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <Stats />
      <Services />
      <Solutions />
      <TechSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}