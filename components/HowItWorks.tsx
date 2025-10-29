'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faMobile, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const steps = [
    {
      number: "01",
      title: "Generate & Print",
      description: "Create unique QR tags for each asset with our bulk generator",
      icon: faTags
    },
    {
      number: "02", 
      title: "Attach to Assets",
      description: "Apply durable QR tags to equipment, furniture, or any trackable item",
      icon: faMobile
    },
    {
      number: "03",
      title: "Scan & Manage",
      description: "Use mobile app to scan, update, and track assets in real-time",
      icon: faChartLine
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-blue-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your asset management in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric via-electric-light to-electric transform -translate-y-1/2 origin-left"
          ></motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-electric/20 rounded-full blur-xl"></div>
                  <div className="relative glass-panel w-full h-full rounded-full flex items-center justify-center border-2 border-electric/50">
                    <FontAwesomeIcon icon={step.icon} className="text-3xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>

                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-electric/5 rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <button className="glow-button px-8 py-4 rounded-full text-lg font-semibold text-white">
            See It In Action
          </button>
        </motion.div>
      </div>
    </section>
  )
}