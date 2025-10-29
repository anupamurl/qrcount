'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faMobile, faWrench, faTags, faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      title: "Real-time Dashboard",
      description: "Live asset tracking with interactive charts and instant notifications",
      icon: faChartLine,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Scanning",
      description: "Offline-ready mobile app for field teams and remote locations",
      icon: faMobile,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Maintenance Scheduling",
      description: "Automated maintenance alerts and audit scheduling system",
      icon: faWrench,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Bulk QR Generator",
      description: "Generate thousands of unique QR codes with custom templates",
      icon: faTags,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "API Integration",
      description: "Connect with existing ERP, CMMS, and inventory management systems",
      icon: faLink,
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Platform <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your asset management workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              {/* Background glow */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl rounded-2xl`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.2 : 0,
                  scale: hoveredCard === index ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Card */}
              <motion.div 
                className="relative glass-panel p-8 rounded-2xl h-full"
                animate={{ 
                  y: hoveredCard === index ? -10 : 0,
                  scale: hoveredCard === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl mb-6 text-white">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                {/* Hover indicator */}
                <motion.div 
                  className="absolute bottom-4 right-4 w-8 h-8 bg-electric rounded-full flex items-center justify-center opacity-0"
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    rotate: hoveredCard === index ? 45 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="text-white text-sm" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Want to see all features in detail?</p>
          <button className="glass-panel px-8 py-4 rounded-full text-lg font-semibold text-white hover:bg-white/10 transition-all">
            View Full Feature List
          </button>
        </motion.div>
      </div>
    </section>
  )
}