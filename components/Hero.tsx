'use client'
import { useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faQrcode } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {

  




  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden bg-[#0A2540]">
      
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#1a365d] to-[#0A2540]"></div>
        

      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#00C6FF]/30 text-[#00C6FF] px-6 py-3 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-[#00C6FF] rounded-full"></div>
              AI-Driven Asset Intelligence
            </div>
            
            {/* Headline */}
            <h1 className="hero-headline text-6xl lg:text-8xl font-black text-white leading-[0.9] font-['Poppins'] tracking-tight">
              Track{' '}
              <span className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
                Untrackable
              </span>{' '}
              <br />
              Assets
            </h1>
            
            {/* Subheadline */}
            <p className="hero-subheadline text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-['Inter'] font-medium">
              Empower your business with{' '}
              <span className="text-[#00C6FF] font-semibold">AI-driven QR tracking</span>{' '}
              — accessible across Web, Android, and iOS.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-cta-group flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-[#00C6FF] to-[#0072FF] hover:from-[#0072FF] hover:to-[#00C6FF] text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-[#00C6FF]/30 flex items-center gap-3"
              >
                Get Started
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="text-sm group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
              
              <div className="flex gap-3">
                <button className="glassmorphic-btn group flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                  <FontAwesomeIcon icon={faApple} className="text-xl group-hover:scale-110 transition-transform" />
                  <span>iOS</span>
                </button>
                <button className="glassmorphic-btn group flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Android</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center h-[600px]">
            
            {/* iPhone 15 Pro Mockup */}
            <div className="phone-mockup-1 relative z-20 transform hover:scale-105 transition-transform duration-500">
              {/* iPhone Frame */}
              <div className="relative w-72 h-[580px]">
                {/* Titanium Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-[3.5rem] shadow-2xl border border-slate-200">
                  {/* Camera Bump */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-slate-600 rounded-2xl shadow-lg">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-lg"></div>
                  </div>
                  {/* Side Buttons */}
                  <div className="absolute left-0 top-20 w-1 h-8 bg-slate-500 rounded-r-sm shadow-inner"></div>
                  <div className="absolute left-0 top-32 w-1 h-12 bg-slate-500 rounded-r-sm shadow-inner"></div>
                  <div className="absolute left-0 top-48 w-1 h-12 bg-slate-500 rounded-r-sm shadow-inner"></div>
                  <div className="absolute right-0 top-24 w-1 h-16 bg-slate-500 rounded-l-sm shadow-inner"></div>
                  {/* Lightning Port */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-slate-700 rounded-full"></div>
                </div>
                
                {/* Screen Bezel */}
                <div className="absolute inset-2 bg-black rounded-[3rem] shadow-inner">
                  <div className="w-full h-full bg-white rounded-[2.8rem] relative overflow-hidden shadow-lg">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full"></div>
                  
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex justify-between items-center px-6 pt-3 text-black text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-black rounded-sm ml-1">
                        <div className="w-4 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* iOS App Interface */}
                  <div className="pt-16 px-4 h-full bg-gray-50">
                    
                    {/* Navigation Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faQrcode} className="text-white text-sm" />
                      </div>
                      <h1 className="text-xl font-bold text-gray-900">QRCount</h1>
                      <div className="w-8 h-8"></div>
                    </div>
                    
                    {/* Camera Viewfinder */}
                    <div className="bg-black rounded-2xl p-4 mb-6 aspect-square relative">
                      <div className="absolute inset-4 border-2 border-white/50 rounded-xl">
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400"></div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Tap to Scan
                      </div>
                    </div>
                    
                    {/* Recent Scans */}
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Recent Scans</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">MacBook Pro</div>
                            <div className="text-sm text-gray-500">#MBP-001</div>
                          </div>
                          <div className="text-sm text-blue-500 font-medium">2m ago</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">Office Chair</div>
                            <div className="text-sm text-gray-500">#CHR-045</div>
                          </div>
                          <div className="text-sm text-blue-500 font-medium">5m ago</div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Samsung Galaxy S24 Mockup */}
            <div className="phone-mockup-2 absolute -right-20 top-20 z-10 transform hover:scale-105 transition-transform duration-500">
              {/* Samsung Frame */}
              <div className="relative w-64 h-[520px]">
                {/* Aluminum Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-600 rounded-[2.5rem] shadow-xl border border-zinc-300">
                  {/* Camera Module */}
                  <div className="absolute top-3 left-4 w-12 h-8 bg-zinc-700 rounded-xl shadow-lg">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-black rounded-sm"></div>
                  </div>
                  {/* Side Buttons */}
                  <div className="absolute left-0 top-16 w-0.5 h-6 bg-zinc-600 shadow-inner"></div>
                  <div className="absolute left-0 top-28 w-0.5 h-12 bg-zinc-600 shadow-inner"></div>
                  <div className="absolute right-0 top-20 w-0.5 h-10 bg-zinc-600 shadow-inner"></div>
                  {/* USB-C Port */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-zinc-800 rounded-full"></div>
                </div>
                
                {/* Screen Bezel */}
                <div className="absolute inset-1 bg-black rounded-[2.2rem] shadow-inner">
                  <div className="w-full h-full bg-white rounded-[2rem] relative overflow-hidden shadow-lg">
                  
                  {/* Camera Punch Hole */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                  
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-4 pt-1 text-black text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="w-4 h-2 border border-black rounded-sm ml-1">
                        <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Android App Interface */}
                  <div className="pt-10 px-3 h-full bg-white">
                    
                    {/* App Bar */}
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faQrcode} className="text-white text-xs" />
                      </div>
                      <h1 className="text-lg font-bold text-gray-900">QRCount</h1>
                    </div>
                    
                    {/* Dashboard Cards */}
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Total Assets</span>
                          <span className="text-xl font-bold text-blue-600">1,247</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Scanned Today</span>
                          <span className="text-xl font-bold text-green-600">89</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full w-3/5"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <h3 className="font-medium text-gray-900 mb-2 text-sm">Recent Activity</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">Laptop scanned</span>
                            <span className="text-xs text-blue-500 font-medium">2m</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">Chair updated</span>
                            <span className="text-xs text-blue-500 font-medium">5m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}