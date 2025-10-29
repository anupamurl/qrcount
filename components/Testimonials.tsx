'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "IT Director",
      company: "TechCorp Solutions",
      avatar: "👩‍💼",
      quote: "QRCount transformed our asset management completely. We went from losing 20% of our equipment annually to having 99.9% visibility. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Manager", 
      company: "MedHealth Systems",
      avatar: "👨‍⚕️",
      quote: "In healthcare, every piece of equipment matters. QRCount helps us track critical devices in real-time, ensuring patient safety and regulatory compliance.",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Facilities Manager",
      company: "Global Manufacturing Inc",
      avatar: "👨‍🔧",
      quote: "The mobile scanning feature is a game-changer. Our field teams can update asset status instantly, even in remote locations without internet connectivity.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CFO",
      company: "EduTech University",
      avatar: "👩‍🎓",
      quote: "QRCount reduced our audit time from weeks to days. The automated reporting saves us thousands of hours annually and ensures accurate financial records.",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-blue-900"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of organizations that trust QRCount for their asset management
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: index === currentIndex ? 1 : 0.7,
                      scale: index === currentIndex ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-8 rounded-3xl text-center"
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="text-yellow-400 text-xl"
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.blockquote 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-xl text-gray-300 leading-relaxed mb-8 italic"
                    >
                      "{testimonial.quote}"
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div className="text-left">
                        <div className="font-bold text-white text-lg">{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.role}</div>
                        <div className="text-electric text-sm">{testimonial.company}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-electric' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to join our satisfied customers?</p>
          <button className="glow-button px-8 py-4 rounded-full text-lg font-semibold text-white">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}