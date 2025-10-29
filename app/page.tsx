'use client'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Dashboard from '../components/Dashboard'
import Industries from '../components/Industries'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    initSmoothScroll()
  }, [])

  return (
    <main className="relative">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Dashboard />
      <Industries />
      <Pricing />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}