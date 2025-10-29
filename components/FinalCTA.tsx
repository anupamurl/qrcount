'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  useEffect(() => {
    // Create QR matrix animation
    const createQRMatrix = () => {
      if (!sectionRef.current) return
      
      const matrix = sectionRef.current.querySelector('.qr-matrix')
      if (!matrix) return

      for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div')
        dot.className = 'absolute w-1 h-1 bg-electric/20 rounded-full'
        dot.style.left = Math.random() * 100 + '%'
        dot.style.top = Math.random() * 100 + '%'
        dot.style.animationDelay = Math.random() * 5 + 's'
        dot.style.animation = 'pulse 3s infinite'
        matrix.appendChild(dot)
      }
    }

    createQRMatrix()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-black to-navy"></div>
      
      {/* QR Matrix background */}
      <div className="qr-matrix absolute inset-0 opacity-30"></div>
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      ></motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div 
          style={{ y }}
          className="space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-poppins font-bold leading-tight"
          >
            Ready to Make Every Asset{' '}
            <span className="gradient-text">Intelligent?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of organizations worldwide who trust QRCount to track, manage, and optimize their physical assets with intelligent QR technology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button 
              className="glow-button px-12 py-6 rounded-full text-xl font-semibold text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
            
            <motion.button 
              className="glass-panel px-12 py-6 rounded-full text-xl font-semibold text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 space-y-4"
          >
            <div className="text-gray-400 flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-400" />
                30-day free trial
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-400" />
                Setup in minutes
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Trusted by 500+ enterprises • 99.9% uptime SLA • 24/7 support
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 right-8 glass-panel w-12 h-12 rounded-full flex items-center justify-center text-electric hover:bg-white/10 transition-all"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
        </motion.div>
      </motion.button>
    </section>
  )
}