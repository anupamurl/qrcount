'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-corporate-200 shadow-corporate"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-corporate">
            <FontAwesomeIcon icon={faQrcode} className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-heading font-bold text-corporate-900">QRCount</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} className="text-corporate-600 hover:text-blue-600 font-medium transition-colors">Features</button>
          <button onClick={() => scrollToSection('dashboard')} className="text-corporate-600 hover:text-blue-600 font-medium transition-colors">Dashboard</button>
          <button onClick={() => scrollToSection('industries')} className="text-corporate-600 hover:text-blue-600 font-medium transition-colors">Industries</button>
          <button onClick={() => scrollToSection('pricing')} className="text-corporate-600 hover:text-blue-600 font-medium transition-colors">Pricing</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-corporate-600 hover:text-blue-600 font-medium transition-colors">Testimonials</button>
        </nav>
        
        <button className="corporate-button px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </motion.header>
  );
}