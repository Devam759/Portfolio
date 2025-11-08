import React from 'react'
import { motion } from 'framer-motion'
import TextType from './TextType'
import FlowingWaves from './FlowingWaves'


// Helper component for skill tags
export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full mx-auto pt-16 pb-24 px-8 overflow-hidden min-h-screen flex flex-col justify-center items-center"
    >
      <FlowingWaves />
      {/* Text Section - Centered at Top */}
      <motion.div
        className="relative z-10 text-center mb-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-600 font-semibold mb-2 font-sans">
          — Hello There!
        </p>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-12 font-display">
          <TextType
            text={["I'm Devam Gupta"]}
            as="span"
            className="text-black"
            typingSpeed={100}
            initialDelay={500}
            cursorCharacter="|"
            style={{ fontFamily: "'Momo Trust Display', sans-serif" }}
          />
        </h1>
      </motion.div>

      {/* Image Section - Centered Below Text */}
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Image Container with Gray Circle */}
        <div className="relative w-full max-w-md flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300 rounded-full">
            {/* Large, darker gray background element */}
          </div>
          
          {/* Profile Image */}
          <img 
            src="/images/profile.webp" 
            alt="Devam Gupta" 
            className="relative z-10 w-full h-auto object-cover rounded-md" 
            // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
          />

          
        </div>
      </motion.div>
    </section>
  )
}