'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Dashboard() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState({ assets: 0, scans: 0, uptime: 0 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps
        
        setCounters({
          assets: Math.floor(progress * 12847),
          scans: Math.floor(progress * 89234),
          uptime: Math.floor(progress * 99.9 * 10) / 10
        })

        if (step >= steps) clearInterval(interval)
      }, stepDuration)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="dashboard" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-navy"></div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Live <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and analytics at your fingertips
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div 
          style={{ y }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass-panel p-8 rounded-3xl border-electric/30">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Asset Overview</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-electric mb-2">
                  {counters.assets.toLocaleString()}
                </div>
                <div className="text-gray-400">Total Assets</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-electric h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-panel p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {counters.scans.toLocaleString()}
                </div>
                <div className="text-gray-400">Scans Today</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-green-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-panel p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {counters.uptime}%
                </div>
                <div className="text-gray-400">System Uptime</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-purple-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>

            {/* Chart area */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-panel p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Asset Activity</h4>
              <div className="h-32 flex items-end justify-between gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-electric to-electric-light rounded-t"
                    style={{ width: '6%' }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                  ></motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}