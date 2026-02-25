import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'

// Lazy load componentes abaixo da dobra para reduzir First Load JS
const Multilojas = dynamic(() => import('@/components/Multilojas'), {
  loading: () => <div className="h-96" />,
})

const Screenshots = dynamic(() => import('@/components/Screenshots'), {
  loading: () => <div className="h-96" />, // Placeholder para evitar layout shift
})

const Benefits = dynamic(() => import('@/components/Benefits'), {
  loading: () => <div className="h-96" />,
})

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-96" />,
})

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-96" />,
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96" />,
})

const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <div className="h-32" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-primary-50/30 to-white">
      <Navbar />
      <Hero />
      <Multilojas />
      <Screenshots />
      <Benefits />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

