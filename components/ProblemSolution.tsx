'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient"></div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
              <div className="relative glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">The Problem</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Assets disappear without trace
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Spreadsheets become outdated instantly
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Manual audits waste thousands of hours
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    No real-time visibility or control
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-electric/20 blur-3xl rounded-full"></div>
              <div className="relative glass-panel p-8 rounded-2xl border-electric/30">
                <h3 className="text-2xl font-bold text-electric mb-4">The QRCount Solution</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                    Every asset gets a unique digital identity
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                    Real-time tracking with mobile scanning
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                    Automated reports and audit trails
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                    Complete visibility across all locations
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Central connecting line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-red-400 to-electric origin-left"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Spreadsheets fail.{' '}
            <span className="gradient-text">QR intelligence doesn't.</span>
          </h2>
        </motion.div>
      </motion.div>
    </section>
  )
}