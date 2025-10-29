'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faIndustry, faLaptop, faHardHat, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -300])

  const industries = [
    {
      title: "Healthcare",
      icon: faHospital,
      description: "Medical equipment, patient beds, wheelchairs, and critical devices",
      stats: "99.9% uptime",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Manufacturing",
      icon: faIndustry,
      description: "Production equipment, tools, machinery, and inventory tracking",
      stats: "40% efficiency gain",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "IT & Offices",
      icon: faLaptop,
      description: "Laptops, monitors, servers, furniture, and office equipment",
      stats: "60% faster audits",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Construction",
      icon: faHardHat,
      description: "Heavy machinery, tools, safety equipment, and materials",
      stats: "50% theft reduction",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Education",
      icon: faGraduationCap,
      description: "Lab equipment, computers, furniture, and learning resources",
      stats: "30% cost savings",
      gradient: "from-purple-500 to-indigo-500"
    }
  ]

  return (
    <section id="industries" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-blue-900 to-navy"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored asset tracking for every industry vertical
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <motion.div 
            style={{ x }}
            className="flex gap-8 pb-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 relative group cursor-pointer"
              >
                {/* Background glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 blur-2xl rounded-3xl`}
                  whileHover={{ opacity: 0.2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Card */}
                <motion.div 
                  className="relative glass-panel p-8 rounded-3xl h-96 flex flex-col justify-between"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="text-6xl mb-6 text-white">
                      <FontAwesomeIcon icon={industry.icon} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{industry.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{industry.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${industry.gradient} text-white font-semibold text-sm`}>
                      {industry.stats}
                    </div>
                    
                    <motion.button 
                      className="w-full glass-panel py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {industries.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-gray-600 rounded-full"
                  whileInView={{ backgroundColor: "#4F8EF7" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Don't see your industry? We customize solutions for any vertical.</p>
          <button className="glow-button px-8 py-4 rounded-full text-lg font-semibold text-white">
            Discuss Custom Solution
          </button>
        </motion.div>
      </div>
    </section>
  )
}