'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 50 assets",
        "Basic mobile scanning",
        "Simple dashboard",
        "Email support",
        "Basic reports"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "₹999",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited assets",
        "Advanced mobile app",
        "Real-time dashboard",
        "API access",
        "Custom reports",
        "Priority support",
        "Bulk QR generation",
        "Maintenance scheduling"
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-electric to-electric-dark"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "SSO & advanced security",
        "Dedicated support",
        "Custom training",
        "SLA guarantee",
        "White-label options",
        "Multi-location support"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient"></div>
      
      {/* Background waves */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-electric to-transparent"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your asset tracking needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="relative group"
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-electric to-electric-dark px-4 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Background glow */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 blur-2xl rounded-3xl`}
                animate={{ 
                  opacity: hoveredPlan === index ? 0.3 : plan.popular ? 0.1 : 0,
                  scale: hoveredPlan === index ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Card */}
              <motion.div 
                className={`relative glass-panel p-8 rounded-3xl h-full ${plan.popular ? 'border-electric/50' : ''}`}
                animate={{ 
                  y: hoveredPlan === index ? -10 : 0,
                  scale: hoveredPlan === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-electric rounded-full flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? 'glow-button text-white' 
                      : 'glass-panel text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">All plans include 30-day free trial • No setup fees • Cancel anytime</p>
          <p className="text-sm text-gray-500">Need a custom solution? Contact our sales team for enterprise pricing.</p>
        </motion.div>
      </div>
    </section>
  )
}