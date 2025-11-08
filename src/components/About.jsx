import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-[url('/images/bg-about2.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">About Me</h2>
          <div className="w-16 h-0.5 bg-black mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-center space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed font-sans">
              Hello! I'm Devam Gupta, a passionate Web Developer based in India. I specialize in building exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-sans">
              With a strong foundation in front-end technologies, I bring ideas to life through clean, efficient, and maintainable code. My approach combines technical expertise with an eye for design to create seamless user experiences.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-sans">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

